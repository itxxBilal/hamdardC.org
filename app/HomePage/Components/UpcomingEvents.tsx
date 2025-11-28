"use client";

import { useState, useEffect } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import { Calendar, Users, MapPin, ArrowRight, Activity, Trees, Droplet } from 'lucide-react';

interface UpcomingEventsProps {
  isMobile: boolean;
}

export default function UpcomingEvents({ isMobile }: UpcomingEventsProps) {
  const [currentEvent, setCurrentEvent] = useState(0);

  // Static data for Events Section
  const upcomingEvents = [
    {
      id: 1,
      title: "Free Medical Camp 2024",
      date: "2024-12-15",
      time: "9:00 AM - 4:00 PM",
      location: "Chichawatni Central Park",
      description: "Free medical checkups, medicines, and consultations with specialist doctors for the community",
      image: "https://images.pexels.com/photos/7587428/pexels-photo-7587428.jpeg?auto=compress&cs=tinysrgb&w=600",
      attendees: 500,
      status: "upcoming",
      category: "Healthcare",
      url: "/events/medical-camp-2024",
      icon: <Activity className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Free Plant Distribution",
      date: "2024-12-20",
      time: "10:00 AM - 2:00 PM",
      location: "Hamdard Committee Office",
      description: "Distribution of free plants to promote environmental awareness and green Pakistan initiative",
      image: "/Events-Img/plant-distribution.jpeg",
      attendees: 300,
      status: "upcoming",
      category: "Environment",
      url: "/events/plant-distribution",
      icon: <Trees className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Blood Donation Drive 2024",
      date: "2024-03-15",
      time: "9:00 AM - 5:00 PM",
      location: "District Hospital Chichawatni",
      description: "Community blood donation camp to support local hospitals and save lives",
      image: "https://www.bloodflow.site/assets/Homepage-DXxoWTs2.png",
      attendees: 200,
      status: "upcoming",
      category: "Healthcare",
      url: "/events/blood-donation-drive-2024",
      icon: <Droplet className="w-6 h-6" />
    }
  ];

  // Optimized intervals with mobile detection
  useEffect(() => {
    let eventInterval: NodeJS.Timeout;

    if (!isMobile) { // Only auto-rotate on desktop
      eventInterval = setInterval(() => {
        setCurrentEvent((prev) => (prev + 1) % upcomingEvents.length);
      }, 4000);
    }

    return () => {
      if (eventInterval) clearInterval(eventInterval);
    };
  }, [isMobile]);

  const tiltOptions = {
    max: isMobile ? 5 : 15,
    scale: isMobile ? 1.02 : 1.05,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.2,
    gyroscope: false
  };

  const subtleTiltOptions = {
    max: isMobile ? 3 : 10,
    scale: isMobile ? 1.01 : 1.02,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.1,
    gyroscope: false
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Parallax speed={isMobile ? -3 : -8}>
      <section id="events" className="py-16 sm:py-20 bg-linear-to-br from-[#0A400C]/5 to-[#819067]/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="text-center mb-12 sm:mb-16">
              <motion.div 
                className="inline-flex items-center space-x-2 bg-[#0A400C]/10 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-4 sm:mb-6"
                whileHover={!isMobile ? { scale: 1.05 } : {}}
              >
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#0A400C]" />
                <span className="text-[#0A400C] font-bold text-sm sm:text-lg">Upcoming Events</span>
              </motion.div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
                Join Our <span className="text-[#0A400C]">Community</span> Events
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Be part of our transformative events that bring hope and support to communities in need.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {/* Featured Event */}
              <Tilt {...tiltOptions}>
                <motion.div
                  whileHover={!isMobile ? { y: -5 } : {}}
                >
                  <Link href={upcomingEvents[currentEvent].url} className="block">
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                      <div className="relative h-48 sm:h-64 overflow-hidden">
                        <img 
                          src={upcomingEvents[currentEvent].image} 
                          alt={upcomingEvents[currentEvent].title}
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-3 sm:top-4 left-3 sm:left-4">
                          <span className="bg-[#0A400C] text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                            Featured Event
                          </span>
                        </div>
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                          <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">{upcomingEvents[currentEvent].title}</h3>
                          <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>{formatDate(upcomingEvents[currentEvent].date)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center justify-between mb-3 sm:mb-4">
                          <span className="bg-[#e8f5e9] text-[#0A400C] px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold">
                            {upcomingEvents[currentEvent].category}
                          </span>
                          <div className="flex items-center space-x-1 text-gray-600">
                            <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm">{upcomingEvents[currentEvent].attendees}+ attending</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                          {upcomingEvents[currentEvent].description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-1 sm:space-x-2 text-gray-500 text-xs sm:text-sm">
                            <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>{upcomingEvents[currentEvent].location}</span>
                          </div>
                          <div className="flex items-center text-[#0A400C] font-semibold text-sm sm:text-base group">
                            View Details
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Tilt>

              {/* Events List */}
              <div className="space-y-4 sm:space-y-6">
                {upcomingEvents.map((event, index) => (
                  <Tilt key={event.id} {...subtleTiltOptions}>
                    <motion.div
                      whileHover={!isMobile ? { y: -2 } : {}}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Link href={event.url} className="block">
                        <div 
                          className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 cursor-pointer"
                          onClick={() => setCurrentEvent(index)}
                        >
                          <div className="flex items-start space-x-3 sm:space-x-4">
                            <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0A400C] text-white rounded-lg sm:rounded-xl flex items-center justify-center">
                              {event.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-gray-800 mb-1 sm:mb-2 text-sm sm:text-base">{event.title}</h4>
                              <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-600 mb-1 sm:mb-2">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                                  <span>{formatDate(event.date)}</span>
                                </div>
                              </div>
                              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-500 text-xs sm:text-sm">
                                <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                              index === currentEvent ? 'bg-[#0A400C]' : 'bg-gray-300'
                            }`}></div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  </Tilt>
                ))}
              </div>
            </div>

            <motion.div 
              className="text-center"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            >
              <Link 
                href="/events"
                className="inline-flex items-center bg-[#0A400C] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-bold text-base sm:text-lg hover:bg-[#0A400C]/90 transition-all duration-300"
              >
                View All Events
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}