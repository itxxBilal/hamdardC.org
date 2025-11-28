"use client";
import Link from "next/link";
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Tilt from 'react-parallax-tilt';
import { Building, Stethoscope, Trees, Calendar, ArrowRight } from 'lucide-react';

interface UpcomingProjectsProps {
  isMobile: boolean;
}

export default function UpcomingProjects({ isMobile }: UpcomingProjectsProps) {
  // Static data for Projects Section
  const upcomingProjects = [
    {
      id: 1,
      title: "Marriage Hall",
      description: "Construction of a modern, affordable marriage hall for community weddings and events",
      image: "https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161436/Marriage_Hall_Project_leliin.png",
      progress: 10,
      deadline: "2027-01-01",
      budget: "PKR:2M",
      raised: "Rs:25K",
      donors: 34,
      category: "Infrastructure",
      url: "/projects/marriage-hall",
      icon: <Building className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Community Dispensary",
      description: "Establishing a free medical dispensary with basic healthcare facilities for the community",
      image: "https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161442/Community_Dispensary_nbag4q.png",
      progress: 30,
      deadline: "2024-08-15",
      budget: "Rs:1.2M",
      raised: "Rs:450K",
      donors: 156,
      category: "Healthcare",
      url: "/projects/dispensary",
      icon: <Stethoscope className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Model Graveyard 2nd Phase",
      description: "Expansion of the model graveyard with modern facilities and proper maintenance",
      image: "https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161435/Model_Graveyard_2nd_Phase_owpkdv.png",
      progress: 15,
      deadline: "2024-12-31",
      budget: "Rs:3.5M",
      raised: "Rs:600K",
      donors: 89,
      category: "Community",
      url: "/projects/model-graveyard-2nd",
      icon: <Trees className="w-6 h-6" />
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

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <Parallax speed={-5}>
      <section id="projects" className="py-20 bg-white">
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
                <Building className="w-6 h-6 text-[#0A400C]" />
                <span className="text-[#0A400C] font-bold text-lg">Upcoming Projects</span>
              </motion.div>
              <h2 className="text-5xl sm:text-6xl font-black text-gray-800 mb-6">
                Building <span className="text-[#0A400C]">Future</span> Together
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Help us bring these transformative projects to life and create lasting impact in our communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {upcomingProjects.map((project, index) => (
                <Tilt key={project.id} {...tiltOptions}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <Link href={project.url} className="block">
                      <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 h-full">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                          />
                          <div className="absolute top-4 right-4">
                            <span className="bg-[#0A400C] text-white px-3 py-1 rounded-full text-sm font-bold">
                              {project.category}
                            </span>
                          </div>
                          <div className="absolute top-4 left-4">
                            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-xl">
                              {project.icon}
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                          <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                          
                          {/* Progress Bar */}
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <motion.div 
                                className="bg-linear-to-r from-[#0A400C] to-[#819067] h-3 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${project.progress}%` }}
                                transition={{ duration: 1, delay: 0.5 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </div>
                          
                          {/* Project Stats */}
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-2xl font-bold text-[#0A400C]">{project.raised}</div>
                              <div className="text-xs text-gray-600">Raised</div>
                            </div>
                            <div className="text-center p-3 bg-gray-50 rounded-xl">
                              <div className="text-2xl font-bold text-[#0A400C]">{project.donors}</div>
                              <div className="text-xs text-gray-600">Donors</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">Deadline: {formatDate(project.deadline)}</span>
                            </div>
                            <div className="flex items-center text-[#0A400C] font-semibold group">
                              Support Project
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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
                href="/projects"
                className="inline-flex items-center bg-[#0A400C] text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-[#0A400C]/90 transition-all duration-300"
              >
                Explore All Projects
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Parallax>
  );
}