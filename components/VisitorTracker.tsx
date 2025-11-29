'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function VisitorTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Refs to track visit data
  const visitStartRef = useRef<number>(Date.now());
  const maxScrollDepthRef = useRef<number>(0);
  const lastActivityRef = useRef<number>(Date.now());
  const isTrackingRef = useRef<boolean>(false);
  const currentPageRef = useRef<string>('');

  useEffect(() => {
    const currentUrl = window.location.href;
    currentPageRef.current = currentUrl;

    const trackVisit = async () => {
      // Reset tracking for new page
      visitStartRef.current = Date.now();
      maxScrollDepthRef.current = 0;
      lastActivityRef.current = Date.now();
      isTrackingRef.current = true;

      try {
        // Get client IP address
        let ipAddress = 'Unknown';
        try {
          const ipResponse = await fetch('https://api.ipify.org?format=json');
          if (ipResponse.ok) {
            const ipData = await ipResponse.json();
            ipAddress = ipData.ip;
          }
        } catch (ipError) {
          console.warn('Could not fetch IP address:', ipError);
        }

        // Generate or get visitor ID
        let visitorId = localStorage.getItem('visitor_id');
        if (!visitorId) {
          visitorId = 'vis_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
          localStorage.setItem('visitor_id', visitorId);
        }

        // Get current page URL with query params
        const pageTitle = document.title;

        // Track initial visit
        const response = await fetch('/api/track-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            visitorId,
            ipAddress,
            userAgent: navigator.userAgent,
            pageUrl: currentUrl,
            pageTitle: pageTitle,
            referrer: document.referrer,
            language: navigator.language
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.warn('Failed to track visit:', errorData);
          return;
        }

        console.log('Visit tracked successfully for:', pathname);
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };

    // Setup scroll tracking
    const trackScroll = () => {
      if (!isTrackingRef.current) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollDepth = scrollHeight > 0 ? Math.round((scrollTop / scrollHeight) * 100) : 0;
      
      if (scrollDepth > maxScrollDepthRef.current) {
        maxScrollDepthRef.current = scrollDepth;
      }
      
      lastActivityRef.current = Date.now();
    };

    // Setup activity tracking
    const trackActivity = () => {
      lastActivityRef.current = Date.now();
    };

    // Send visit data (with retry logic)
    const sendVisitData = async (isFinal: boolean = false) => {
      if (!isTrackingRef.current) return;

      const visitorId = localStorage.getItem('visitor_id');
      if (!visitorId) return;

      const visitDuration = Math.round((Date.now() - visitStartRef.current) / 1000);
      const scrollDepth = maxScrollDepthRef.current;

      try {
        const response = await fetch('/api/update-visit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            visitorId,
            pageUrl: currentPageRef.current,
            visitDuration,
            scrollDepth
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          
          // If it's a 404 (visit not found), we can ignore it for periodic updates
          // but log it for final updates
          if (response.status === 404 && !isFinal) {
            console.log('Visit not found yet for periodic update, this is normal');
            return;
          }
          
          console.warn('Failed to update visit:', errorData);
          return;
        }

        const data = await response.json();
        console.log('Visit data updated:', { visitDuration, scrollDepth, isFinal });
        
        // If this is the final update, stop tracking
        if (isFinal) {
          isTrackingRef.current = false;
        }
      } catch (error) {
        console.error('Error sending visit data:', error);
      }
    };

    // Send periodic updates (every 20 seconds)
    const intervalId = setInterval(() => {
      if (!isTrackingRef.current) return;

      const currentTime = Date.now();
      const timeSinceLastActivity = currentTime - lastActivityRef.current;
      
      // If no activity for 1 minute, consider session ended
      if (timeSinceLastActivity > 60000) {
        sendVisitData(true);
        isTrackingRef.current = false;
        clearInterval(intervalId);
      } else {
        // Send periodic update
        sendVisitData(false);
      }
    }, 20000);

    // Track beforeunload to send final data
    const handleBeforeUnload = () => {
      sendVisitData(true);
    };

    // Visibility change handler - when tab becomes hidden
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        sendVisitData(true);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', trackScroll, { passive: true });
    window.addEventListener('mousemove', trackActivity, { passive: true });
    window.addEventListener('keydown', trackActivity, { passive: true });
    window.addEventListener('click', trackActivity, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Start tracking
    trackVisit();

    // Send initial data after 3 seconds to ensure visit is created
    const initialTimeout = setTimeout(() => {
      sendVisitData(false);
    }, 3000);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', trackScroll);
      window.removeEventListener('mousemove', trackActivity);
      window.removeEventListener('keydown', trackActivity);
      window.removeEventListener('click', trackActivity);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      
      clearInterval(intervalId);
      clearTimeout(initialTimeout);

      // Send final data on component unmount
      if (isTrackingRef.current) {
        sendVisitData(true);
      }
    };
  }, [pathname, searchParams]);

  return null;
}