"use client";
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import { Target, Heart, Shield, Users, Quote } from 'lucide-react';

interface OurMissionProps {
  isMobile: boolean;
}

export default function OurMission({ isMobile }: OurMissionProps) {
  // Static data for Mission Section
  const missionValues = [
    { icon: <Heart className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Compassionate Service", desc: "Putting human dignity at the forefront of all initiatives" },
    { icon: <Shield className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Transparent Operations", desc: "Complete accountability in all our programs and finances" },
    { icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />, title: "Community Focus", desc: "Working with communities to create sustainable solutions" }
  ];

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

  return (
    <Parallax speed={isMobile ? -5 : -10}>
      <section id="mission" className="py-16 sm:py-20 bg-linear-to-br from-gray-50 to-green-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Mission Content */}
              <motion.div 
                className="space-y-6 lg:space-y-8"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div>
                  <motion.div 
                    className="inline-flex items-center space-x-2 bg-[#0A400C]/10 px-3 sm:px-4 py-1 sm:py-2 rounded-full mb-4 sm:mb-6"
                    whileHover={!isMobile ? { scale: 1.05 } : {}}
                  >
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-[#0A400C]" />
                    <span className="text-[#0A400C] font-bold text-sm sm:text-base">Our Mission</span>
                  </motion.div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-800 mb-4 sm:mb-6">
                    Serving with <span className="text-[#0A400C]">Purpose</span>
                  </h2>
                  <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-6 sm:mb-8">
                    At Hamdard Committee, our mission is to serve humanity with compassion, dignity, and excellence. 
                    We believe in creating sustainable solutions that address both immediate needs and long-term development, 
                    ensuring every individual has the opportunity to live with respect and hope.
                  </p>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  {missionValues.map((value, index) => (
                    <Tilt key={index} {...subtleTiltOptions}>
                      <motion.div 
                        className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg"
                        whileHover={!isMobile ? { y: -5 } : {}}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-[#0A400C] text-white rounded-lg sm:rounded-xl flex items-center justify-center">
                          {value.icon}
                        </div>
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold text-gray-800 mb-1 sm:mb-2">{value.title}</h4>
                          <p className="text-gray-600 text-sm sm:text-base">{value.desc}</p>
                        </div>
                      </motion.div>
                    </Tilt>
                  ))}
                </div>
              </motion.div>

              {/* Mission Visual */}
              <motion.div 
                className="relative"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Tilt {...tiltOptions}>
                  <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-4 sm:p-6 lg:p-8 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="aspect-square bg-linear-to-br from-[#0A400C] to-[#819067] rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Quote className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 text-white/20" />
                    </div>
                  </div>
                </Tilt>
                <motion.div 
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-[#FFD700] text-[#0A400C] px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-xl sm:rounded-2xl shadow-lg"
                  whileHover={!isMobile ? { scale: 1.05 } : {}}
                >
                  <p className="text-sm sm:text-base lg:text-lg font-bold">"Service to humanity is service to God"</p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}