"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, DollarSign, Flower, TreePine, Sprout, Shield } from 'lucide-react';

const ModelGraveyardProject = () => {
  const projectDetails = {
    title: 'Model Graveyard 2nd Phase Project',
    description: 'Expansion of existing graveyard with modern facilities, proper landscaping, enhanced maintenance services, and improved community amenities.',
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161435/Model_Graveyard_2nd_Phase_owpkdv.png',
    status: 'development',
    progress: 40,
    budget: 'PKR 4,000,000',
    timeline: '14 Months',
    location: 'Existing Graveyard Extension, Chichawatni',
    teamSize: '18 Members',
    
    features: [
      'Expanded burial capacity (500+ graves)',
      'Beautiful landscaping with gardens',
      'Proper drainage and water system',
      'Prayer area with shade',
      'Water supply for ablution',
      'Electricity and lighting',
      'Boundary wall and security',
      'Parking facility',
      'Maintenance staff quarters',
      'Community gathering space'
    ],
    
    improvements: [
      'Modern grave numbering system',
      'Digital record keeping',
      'Regular cleaning and maintenance',
      'Green spaces and sitting areas',
      'Flower beds and ornamental plants',
      'Waste management system',
      'Security surveillance',
      'Emergency services access',
      'Disabled-friendly pathways',
      'Community volunteer program'
    ],
    
    benefits: [
      'Dignified final resting place',
      'Improved hygiene and sanitation',
      'Enhanced community facility',
      'Proper record maintenance',
      'Beautiful and peaceful environment',
      'Increased capacity for future needs',
      'Community ownership and pride',
      'Sustainable maintenance system'
    ],
    
    requirements: [
      'Land development and leveling',
      'Construction materials',
      'Landscaping and plants',
      'Water and electrical systems',
      'Security infrastructure',
      'Maintenance equipment'
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
                <h2 className="text-3xl font-black text-gray-800 mb-8">Graveyard Expansion Overview</h2>
                
                {/* Features */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Flower className="w-6 h-6 mr-3 text-[#0A400C]" />
                    New Facilities
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

                {/* Improvements */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <TreePine className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Facility Improvements
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.improvements.map((improvement, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          ✨
                        </div>
                        <span className="text-gray-700">{improvement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Sprout className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Community Benefits
                  </h3>
                  <div className="space-y-3">
                    {projectDetails.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          ♥
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
                      <span className="font-semibold text-blue-600">Development Phase</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Team Size</span>
                      <span className="font-semibold">{projectDetails.teamSize}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Additional Capacity</span>
                      <span className="font-semibold">500+ Graves</span>
                    </div>
                  </div>
                </div>

                {/* Maintenance Plan */}
                <div className="bg-purple-50 rounded-3xl p-6 border border-purple-200">
                  <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-purple-600" />
                    Maintenance Plan
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Daily Cleaning</span>
                      <span className="font-semibold">3 Staff</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gardening</span>
                      <span className="font-semibold">2 Staff</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Security</span>
                      <span className="font-semibold">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Record Keeping</span>
                      <span className="font-semibold">Digital System</span>
                    </div>
                  </div>
                </div>

                {/* Support CTA */}
                <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
                  <Flower className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">Support This Project</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Help us create a dignified and beautiful final resting place
                  </p>
                  <Link
                    href="/donate"
                    className="block w-full bg-white text-[#0A400C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    Donate for Community
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

export default ModelGraveyardProject;