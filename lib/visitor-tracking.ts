import { supabase } from './supabase';
import { TrackVisitRequest, Visitor, PageVisit } from '@/types/visitor';

interface IPInfoData {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  postal: string;
  timezone: string;
  country_name?: string;
  latitude?: number;
  longitude?: number;
  asn?: {
    asn: string;
    name: string;
    domain: string;
    route: string;
    type: string;
  };
}

export class VisitorTracker {
  private static instance: VisitorTracker;
  private apiKey = '56c94beb71e829';

  private constructor() {}

  public static getInstance(): VisitorTracker {
    if (!VisitorTracker.instance) {
      VisitorTracker.instance = new VisitorTracker();
    }
    return VisitorTracker.instance;
  }

  private getDeviceInfo(userAgent: string) {
    const isMobile = /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(userAgent);
    const isTablet = /Tablet|iPad|PlayBook|Silk|Kindle|(Android(?!.*Mobile))|(Windows(?!.*Phone)(.*Touch))/.test(userAgent);
    const isDesktop = !isMobile && !isTablet;
    
    return {
      isMobile,
      isTablet,
      isDesktop,
      isBot: /bot|crawler|spider|facebookexternalhit|Googlebot|Bingbot|Slurp|DuckDuckBot|Baiduspider|YandexBot|Sogou/.test(userAgent.toLowerCase())
    };
  }

  private parseUserAgent(userAgent: string) {
    const browserMatch = userAgent.match(/(Chrome|Firefox|Safari|Edge|Opera|IE|Edg)\/([0-9.]+)/);
    const osMatch = userAgent.match(/(Windows NT|Windows|Mac OS X|Linux|Android|iOS|iPhone OS|iPadOS)\s*([0-9._]+)?/);
    
    return {
      browserName: browserMatch ? browserMatch[1] : 'Unknown',
      browserVersion: browserMatch ? browserMatch[2] : '',
      osName: osMatch ? osMatch[1] : 'Unknown',
      osVersion: osMatch ? osMatch[2] || '' : ''
    };
  }

  async getIPInfo(ipAddress: string): Promise<IPInfoData | null> {
    try {
      const response = await fetch(`https://ipinfo.io/${ipAddress}?token=${this.apiKey}`);
      
      if (!response.ok) {
        throw new Error(`IPInfo API error: ${response.status}`);
      }
      
      const data: IPInfoData = await response.json();
      
      if (data.loc) {
        const [lat, lng] = data.loc.split(',').map(coord => parseFloat(coord.trim()));
        data.latitude = lat;
        data.longitude = lng;
      }
      
      return data;
    } catch (error) {
      console.error('Error fetching IP info:', error);
      return null;
    }
  }

  async trackVisit(visitorData: TrackVisitRequest) {
    try {
      const { visitorId, ipAddress, userAgent, pageUrl, pageTitle, referrer, language } = visitorData;
      
      const deviceInfo = this.getDeviceInfo(userAgent);
      const { browserName, browserVersion, osName, osVersion } = this.parseUserAgent(userAgent);
      const ipInfo = await this.getIPInfo(ipAddress);
      
      let deviceType = 'desktop';
      if (deviceInfo.isMobile) deviceType = 'mobile';
      if (deviceInfo.isTablet) deviceType = 'tablet';
      if (deviceInfo.isBot) deviceType = 'bot';

      // Check if visitor exists
      const { data: existingVisitor } = await supabase
        .from('visitors')
        .select('*')
        .eq('visitor_id', visitorId)
        .single();

      if (!existingVisitor) {
        // Create new visitor
        const { error: visitorError } = await supabase
          .from('visitors')
          .insert({
            visitor_id: visitorId,
            ip_address: ipAddress,
            country: ipInfo?.country || 'Unknown',
            city: ipInfo?.city || 'Unknown',
            region: ipInfo?.region || 'Unknown',
            timezone: ipInfo?.timezone || 'Unknown',
            latitude: ipInfo?.latitude,
            longitude: ipInfo?.longitude,
            isp: ipInfo?.org || 'Unknown',
            asn: ipInfo?.asn?.asn || 'Unknown',
            browser_name: browserName,
            browser_version: browserVersion,
            os_name: osName,
            os_version: osVersion,
            device_type: deviceType,
            is_mobile: deviceInfo.isMobile,
            is_tablet: deviceInfo.isTablet,
            is_desktop: deviceInfo.isDesktop,
            is_bot: deviceInfo.isBot,
            user_agent: userAgent,
            language: language,
            referrer: referrer,
            first_visit: new Date().toISOString(),
            last_visit: new Date().toISOString()
          });

        if (visitorError) {
          console.error('Error creating visitor:', visitorError);
          return { success: false, error: visitorError.message };
        }
      } else {
        // Update existing visitor
        const { error: updateError } = await supabase
          .from('visitors')
          .update({
            last_visit: new Date().toISOString(),
            updated_at: new Date().toISOString()
          })
          .eq('visitor_id', visitorId);

        if (updateError) {
          console.error('Error updating visitor:', updateError);
        }
      }

      // Record page visit
      const { error: visitError } = await supabase
        .from('page_visits')
        .insert({
          visitor_id: visitorId,
          ip_address: ipAddress,
          page_url: pageUrl,
          page_title: pageTitle,
          browser: browserName,
          device_type: deviceType,
          country: ipInfo?.country || 'Unknown',
          city: ipInfo?.city || 'Unknown',
          user_agent: userAgent,
          visit_start: new Date().toISOString(),
          visit_end: new Date().toISOString()
        });

      if (visitError) {
        console.error('Error recording page visit:', visitError);
        return { success: false, error: visitError.message };
      }

      return { success: true, visitorId };
    } catch (error) {
      console.error('Error tracking visit:', error);
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
  }
}