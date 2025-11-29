"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Users, DollarSign, Building, Utensils } from 'lucide-react';

const MarriageHallProject = () => {
  const projectDetails = {
    title: 'Marriage Hall Project',
    description: 'A modern, spacious marriage hall to serve community wedding ceremonies and events with proper facilities.',
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161436/Marriage_Hall_Project_leliin.png',
    status: 'planning',
    progress: 25,
    budget: 'PKR 5,000,000',
    timeline: '12 Months',
    location: 'Main City Area, Chichawatni',
    teamSize: '15 Members',
    
    features: [
      'Capacity for 500+ guests',
      'Air-conditioned main hall',
      'Separate dining area',
      'Modern kitchen facilities',
      'Parking for 100+ vehicles',
      'Beautiful landscaping',
      'Stage and sound system',
      'Bridal room facilities'
    ],
    
    benefits: [
      'Affordable rental rates for community',
      'Modern facilities for wedding ceremonies',
      'Job creation during construction and operation',
      'Revenue generation for other community projects',
      'Enhanced community gathering space'
    ],
    
    requirements: [
      'Land acquisition and preparation',
      'Architectural design and planning',
      'Construction materials and labor',
      'Furniture and equipment',
      'Utility connections'
    ]
  };



  return (
    <>
     
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/projects"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Projects</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                  {projectDetails.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {projectDetails.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>{projectDetails.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <DollarSign className="w-4 h-4" />
                    <span>{projectDetails.budget}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{projectDetails.timeline}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={projectDetails.image}
                  alt={projectDetails.title}
                  className="rounded-3xl shadow-2xl w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-gray-800 mb-8">Project Overview</h2>
                
                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Building className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Community Benefits
                  </h3>
                  <div className="space-y-3">
                    {projectDetails.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Project Status */}
                <div className="bg-gray-50 rounded-3xl p-6">
                  <h3 className="text-xl font-black text-gray-800 mb-4">Project Status</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-gray-700">Progress</span>
                        <span className="text-sm font-bold text-[#0A400C]">{projectDetails.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-[#0A400C] h-2 rounded-full"
                          style={{ width: `${projectDetails.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Status</span>
                      <span className="font-semibold text-yellow-600">Planning Phase</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Team Size</span>
                      <span className="font-semibold">{projectDetails.teamSize}</span>
                    </div>
                  </div>
                </div>

                {/* Support CTA */}
                <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
                  <Utensils className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">Support This Project</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Help us build this essential community facility
                  </p>
                  <Link
                    href="/donate"
                    className="block w-full bg-white text-[#0A400C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    Donate Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MarriageHallProject;