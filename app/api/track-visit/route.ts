import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { TrackVisitRequest } from '@/types/visitor';

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

class VisitorTracker {
  private apiKey = '56c94beb71e829';

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
      // Skip IP info for localhost or unknown IPs
      if (ipAddress === 'Unknown' || ipAddress === '127.0.0.1' || ipAddress.startsWith('192.168.') || ipAddress.startsWith('10.')) {
        return null;
      }

      const response = await fetch(`https://ipinfo.io/${ipAddress}?token=${this.apiKey}`);
      
      if (!response.ok) {
        console.warn(`IPInfo API error: ${response.status}`);
        return null;
      }
      
      const data: IPInfoData = await response.json();
      
      if (data.loc) {
        const [lat, lng] = data.loc.split(',').map(coord => parseFloat(coord.trim()));
        data.latitude = lat;
        data.longitude = lng;
      }
      
      return data;
    } catch (error) {
      console.warn('Error fetching IP info:', error);
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

      // Check if visitor exists with better error handling
      const { data: existingVisitor, error: visitorCheckError } = await supabase
        .from('visitors')
        .select('id')
        .eq('visitor_id', visitorId)
        .maybeSingle();

      if (visitorCheckError && visitorCheckError.code !== 'PGRST116') {
        console.error('Error checking visitor:', visitorCheckError);
      }

      const now = new Date().toISOString();

      if (!existingVisitor) {
        // Create new visitor
        const visitorData = {
          visitor_id: visitorId,
          ip_address: ipAddress,
          country: ipInfo?.country || 'Unknown',
          city: ipInfo?.city || 'Unknown',
          region: ipInfo?.region || 'Unknown',
          timezone: ipInfo?.timezone || 'Unknown',
          latitude: ipInfo?.latitude || null,
          longitude: ipInfo?.longitude || null,
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
          user_agent: userAgent.substring(0, 500),
          language: language?.substring(0, 50) || 'Unknown',
          referrer: referrer?.substring(0, 500) || '',
          first_visit: now,
          last_visit: now,
          updated_at: now
        };

        const { error: visitorError } = await supabase
          .from('visitors')
          .insert(visitorData);

        if (visitorError) {
          console.error('Error creating visitor:', visitorError);
        }
      } else {
        // Update existing visitor's last visit
        const { error: updateError } = await supabase
          .from('visitors')
          .update({
            last_visit: now,
            updated_at: now
          })
          .eq('visitor_id', visitorId);

        if (updateError) {
          console.error('Error updating visitor:', updateError);
        }
      }

      // Record page visit with proper initial values for duration and scroll depth
      const pageVisitData = {
        visitor_id: visitorId,
        ip_address: ipAddress,
        page_url: pageUrl.substring(0, 500),
        page_title: pageTitle?.substring(0, 200) || null,
        browser: browserName,
        device_type: deviceType,
        country: ipInfo?.country || 'Unknown',
        city: ipInfo?.city || 'Unknown',
        user_agent: userAgent.substring(0, 500),
        visit_duration: 0, // Initialize with 0
        scroll_depth: 0,   // Initialize with 0
        visit_start: now,
        visit_end: now     // Will be updated later with actual end time
      };

      const { data: insertedVisit, error: visitError } = await supabase
        .from('page_visits')
        .insert(pageVisitData)
        .select('id')
        .single();

      if (visitError) {
        console.error('Error recording page visit:', visitError);
        return { success: false, error: visitError.message };
      }

      return { 
        success: true, 
        visitorId,
        visitId: insertedVisit?.id 
      };
    } catch (error) {
      console.error('Error tracking visit:', error);
      return { 
        success: false, 
        error: error instanceof Error ? error.message : 'Unknown error' 
      };
    }
  }
}

export async function POST(request: NextRequest) {
  try {
    const body: TrackVisitRequest = await request.json();

    const {
      visitorId,
      ipAddress,
      userAgent,
      pageUrl,
      pageTitle,
      referrer,
      language
    } = body;

    // Validate required fields
    if (!visitorId || !userAgent || !pageUrl) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const tracker = new VisitorTracker();
    const result = await tracker.trackVisit({
      visitorId,
      ipAddress: ipAddress || 'Unknown',
      userAgent,
      pageUrl,
      pageTitle,
      referrer,
      language
    });

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        visitorId: result.visitorId,
        visitId: result.visitId
      });
    } else {
      return NextResponse.json(
        { error: result.error || 'Tracking failed' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in track-visit API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    message: 'Visitor tracking API is running' 
  });
}