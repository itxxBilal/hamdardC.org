"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Ambulance, Droplets, Heart, Clock, Users, Award, ArrowRight } from 'lucide-react';

interface FeaturedServicesProps {
  isMobile: boolean;
}

export default function FeaturedServices({ isMobile }: FeaturedServicesProps) {
  // Static data for Services Section
  const topServices = [
    {
      id: 'ambulance',
      title: 'Emergency Ambulance',
      description: '24/7 medical transportation with trained staff',
      icon: <Ambulance className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/f_auto,q_auto/Ambulance_c1ryp3',
      stats: { response: '15-20 mins', served: '10K+' },
      color: 'red',
      url: '/services/ambulance'
    },
    {
      id: 'ro-plant',
      title: 'RO Water Plant',
      description: 'Clean drinking water for communities',
      icon: <Droplets className="w-8 h-8" />,
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1744813554/Waterplant.jpg',
      stats: { capacity: '50K L/day', served: '25K+' },
      color: 'blue',
      url: '/services/ro-plant'
    },
    {
      id: 'usher-zakat',
      title: 'Usher & Zakat',
      description: 'Islamic charity distribution system',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
      stats: { beneficiaries: '5K+', families: '1.2K+' },
      color: 'green',
      url: '/services/usher-zakat'
    }
  ];

  const tiltOptions = {
    max: isMobile ? 5 : 15,
    scale: isMobile ? 1.02 : 1.05,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.2,
    gyroscope: false
  };

  return (
    <section className="py-20 bg-linear-to-br from-[#0A400C]/5 to-[#819067]/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <motion.div 
              className="inline-flex items-center space-x-2 bg-[#0A400C]/10 px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Award className="w-6 h-6 text-[#0A400C]" />
              <span className="text-[#0A400C] font-bold text-lg">Featured Services</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-black text-gray-800 mb-6">
              Our <span className="text-[#0A400C]">Essential</span> Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From emergency response to community development, these core services form the foundation of our humanitarian work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topServices.map((service, index) => (
              <Tilt key={service.id} {...tiltOptions}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <Link href={service.url} className="group block">
                    <div className="bg-white rounded-3xl shadow-xl hover:shadow-2xl overflow-hidden border border-gray-100 h-full">
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={service.image} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className={`absolute inset-0 bg-linear-to-br from-${service.color}-500/20 to-${service.color}-600/10`}></div>
                        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg p-3 rounded-xl text-white">
                          {service.icon}
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4 text-sm text-gray-500">
                            <div className="flex items-center space-x-1">
                              <Clock className="w-4 h-4" />
                              <span>{service.stats.response}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="w-4 h-4" />
                              <span>{service.stats.served}</span>
                            </div>
                          </div>
                          
                          <div className="flex items-center text-[#0A400C] font-bold group-hover:translate-x-2 transition-transform duration-300">
                            Learn More
                            <ArrowRight className="w-5 h-5 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              </Tilt>
            ))}
          </div>

          <motion.div 
            className="text-center mt-12"
            whileHover={{ scale: 1.05 }}
          >
            <Link 
              href="/services"
              className="inline-flex items-center bg-[#0A400C] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#0A400C]/90 transition-all duration-300"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}