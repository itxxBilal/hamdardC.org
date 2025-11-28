"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import { Quote } from 'lucide-react';

interface TestimonialsProps {
  isMobile: boolean;
}

export default function Testimonials({ isMobile }: TestimonialsProps) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Static data for Testimonials Section
  const testimonials = [
    {
      name: "Ahmed Raza",
      role: "Community Member",
      content: "The ambulance service saved my father's life during a heart emergency. Their quick response and professional care made all the difference.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Fatima Khan",
      role: "RO Plant Beneficiary",
      content: "Clean drinking water has transformed our community. Children are healthier, and families no longer worry about waterborne diseases.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Mohammad Asif",
      role: "Zakat Recipient",
      content: "The financial assistance helped my daughter get married with dignity. May Allah reward the Hamdard Committee for their noble work.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  ];

  // Optimized intervals with mobile detection
  useEffect(() => {
    let testimonialInterval: NodeJS.Timeout;

    if (!isMobile) { // Only auto-rotate on desktop
      testimonialInterval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }

    return () => {
      if (testimonialInterval) clearInterval(testimonialInterval);
    };
  }, [isMobile]);

  const subtleTiltOptions = {
    max: isMobile ? 3 : 10,
    scale: isMobile ? 1.01 : 1.02,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.1,
    gyroscope: false
  };

  return (
    <Parallax speed={-8}>
      <section className="py-20 bg-linear-to-br from-[#0A400C] to-[#819067] text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Quote className="w-6 h-6" />
              <span className="font-bold">Community Voices</span>
            </motion.div>
            <h2 className="text-5xl sm:text-6xl font-black mb-12">
              Stories of <span className="text-[#e8f5e9]">Hope</span>
            </h2>

            <div className="relative h-64 mb-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === currentTestimonial ? 'opacity-100' : 'opacity-0'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: index === currentTestimonial ? 1 : 0, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Tilt {...subtleTiltOptions}>
                    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 h-full">
                      <p className="text-xl italic mb-6 leading-relaxed">"{testimonial.content}"</p>
                      <div className="flex items-center justify-center space-x-4">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="text-left">
                          <p className="font-bold text-lg">{testimonial.name}</p>
                          <p className="text-white/70">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-white w-8' : 'bg-white/30'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}