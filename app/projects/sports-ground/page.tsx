"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, DollarSign, Trophy,  Activity, Users as TeamIcon } from 'lucide-react';

const SportsGroundProject = () => {
  const projectDetails = {
    title: 'Community Sports Ground Project',
    description: 'Multi-purpose sports facility with cricket ground, football field, and outdoor exercise equipment for youth development and community fitness programs.',
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161436/Sports_Ground_eyfyxr.png',
    status: 'planning',
    progress: 15,
    budget: 'PKR 3,500,000',
    timeline: '10 Months',
    location: 'Community Park Area, Chichawatni',
    teamSize: '20 Members',
    
    facilities: [
      'Standard cricket pitch with turf',
      'Football field with proper markings',
      'Outdoor gym equipment',
      'Running track (200m)',
      'Basketball court',
      'Volleyball court',
      'Children play area',
      'Spectator seating area',
      'Changing rooms and washrooms',
      'Floodlights for evening games'
    ],
    
    benefits: [
      'Youth engagement in healthy activities',
      'Talent development in sports',
      'Community fitness and wellness',
      'Reduced anti-social activities',
      'Inter-community sports events',
      'Professional coaching opportunities',
      'Women and girls sports programs',
      'Elderly walking and exercise area'
    ],
    
    programs: [
      'Daily sports training sessions',
      'Weekend tournaments and matches',
      'School sports programs',
      'Women-only fitness hours',
      'Elderly morning walk sessions',
      'Summer sports camps for children',
      'Professional coaching clinics',
      'Inter-district sports competitions'
    ],
    
    requirements: [
      'Land leveling and preparation',
      'Sports equipment and gear',
      'Construction materials',
      'Lighting and electrical work',
      'Water supply and drainage',
      'Security and maintenance'
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
                <h2 className="text-3xl font-black text-gray-800 mb-8">Sports Facility Overview</h2>
                
                {/* Facilities */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Trophy className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Sports Facilities
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.facilities.map((facility, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                        <span className="text-gray-700">{facility}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Programs */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <TeamIcon className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Sports Programs
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {projectDetails.programs.map((program, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          ⚽
                        </div>
                        <span className="text-gray-700">{program}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Activity className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Community Impact
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
                      <span className="font-semibold text-yellow-600">Planning Phase</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Team Size</span>
                      <span className="font-semibold">{projectDetails.teamSize}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Expected Users</span>
                      <span className="font-semibold">500+/week</span>
                    </div>
                  </div>
                </div>

                {/* Sports Equipment Needs */}
                <div className="bg-orange-50 rounded-3xl p-6 border border-orange-200">
                  <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center">
                    <Activity className="w-5 h-5 mr-2 text-orange-600" />
                    Equipment Needs
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Cricket Sets</span>
                      <span className="font-semibold">20 Sets</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Football Kits</span>
                      <span className="font-semibold">15 Sets</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Basketball Sets</span>
                      <span className="font-semibold">10 Sets</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Gym Equipment</span>
                      <span className="font-semibold">Full Set</span>
                    </div>
                  </div>
                </div>

                {/* Support CTA */}
                <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
                  <Trophy className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">Support Youth Sports</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Help us build a world-class sports facility for our youth
                  </p>
                  <Link
                    href="/donate"
                    className="block w-full bg-white text-[#0A400C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                  >
                    Donate for Sports
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

export default SportsGroundProject;