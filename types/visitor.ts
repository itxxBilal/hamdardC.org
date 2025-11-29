export interface Visitor {
  id: string;
  visitor_id: string;
  ip_address: string;
  country: string;
  city: string;
  region: string;
  timezone: string;
  latitude: number | null;
  longitude: number | null;
  isp: string;
  asn: string;
  browser_name: string;
  browser_version: string;
  os_name: string;
  os_version: string;
  device_type: string;
  device_vendor: string;
  device_model: string;
  is_mobile: boolean;
  is_tablet: boolean;
  is_desktop: boolean;
  is_bot: boolean;
  user_agent: string;
  language: string;
  total_visits: number;
  first_visit: string;
  last_visit: string;
  referrer: string;
  created_at: string;
  updated_at: string;
}

export interface PageVisit {
  id: string;
  visitor_id: string;
  ip_address: string;
  page_url: string;
  page_title: string | null;
  visit_duration: number;
  scroll_depth: number;
  visit_start: string;
  visit_end: string;
  browser: string;
  device_type: string;
  country: string;
  city: string;
  user_agent: string;
  created_at: string;
}

export interface Analytics {
  total_visitors: number;
  total_page_views: number;
  unique_visitors_today: number;
  avg_session_duration: number;
  most_visited_page: string;
  top_country: string;
}

export interface TrackVisitRequest {
  visitorId: string;
  ipAddress: string;
  userAgent: string;
  pageUrl: string;
  pageTitle?: string;
  referrer?: string;
  language?: string;
}