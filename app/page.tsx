"use client";
import { useState, useEffect, useCallback, useRef } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

// Components
import HeroSection from './HomePage/Components/HeroSection';
import OurMission from './HomePage/Components/OurMission';
import UpcomingEvents from './HomePage/Components/UpcomingEvents';
import UpcomingProjects from './HomePage/Components/UpcomingProjects';
import FeaturedServices from './HomePage/Components/FeaturedServices';
import Testimonials from './HomePage/Components/Testimonials';

// Styles
import './HomePage/Homepage.css';

export default function Homepage() {
  const [isMobile, setIsMobile] = useState(false);
  const lenisRef = useRef<any>(null);

  // Detect mobile and optimize performance
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Optimized Lenis Smooth Scroll with proper cleanup
  useEffect(() => {
    let rafId: number;
    let timeoutId: NodeJS.Timeout;

    const initSmoothScroll = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        
        const Lenis = (await import('lenis')).default;
        const lenis = new Lenis({
          duration: 1.2,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          wheelMultiplier: isMobile ? 0.8 : 1.2,
        });

        lenisRef.current = lenis;

        const raf = (time: number) => {
          lenis.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      } catch (error) {
        console.warn('Lenis loading failed, using native smooth scroll');
      }
    };

    timeoutId = setTimeout(initSmoothScroll, 0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, [isMobile]);

  // Memoized scroll function to prevent re-renders
  const scrollToSection = useCallback((id: string) => {
    if (lenisRef.current) {
      const element = document.getElementById(id);
      if (element) {
        lenisRef.current.scrollTo(element, {
          duration: 1.2,
          offset: -80
        });
      }
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  }, []);

  return (
    <ParallaxProvider>
      <div className="min-h-screen">
        {/* Hero Section */}
        <HeroSection 
          scrollToSection={scrollToSection}
          isMobile={isMobile}
        />

      
        <OurMission isMobile={isMobile} />
        <UpcomingEvents isMobile={isMobile} />
        <UpcomingProjects isMobile={isMobile} />
        <FeaturedServices isMobile={isMobile} />
        <Testimonials isMobile={isMobile} />

        
      </div>
    </ParallaxProvider>
  );
}