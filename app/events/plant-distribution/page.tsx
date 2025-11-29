"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Trees, Sprout, Target, Heart } from 'lucide-react';

const PlantDistribution = () => {
  const eventDetails = {
    title: 'Tree Plantation Drive 2024',
    description: 'Hamdard Committee organized a comprehensive plant distribution campaign in Chak No 172/9-L Chichawatni, promoting environmental sustainability and community greening initiatives.',
    image: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2024-03-20',
    time: '8:00 AM - 2:00 PM',
    location: 'Chak No 172/9-L, Chichawatni',
    attendees: '300+ Community Members',
    category: 'Environmental',
    status: 'completed',
    type: 'community-drive',
    
    distributedPlants: [
      'Neem (Azadirachta indica)',
      'Shesham (Dalbergia sissoo)',
      'Bargad (Ficus benghalensis)',
      'Peepal (Ficus religiosa)',
      'Amrood (Guava)',
      'Kinnow (Citrus)',
      'Jamun (Syzygium cumini)',
      'Amaltas (Cassia fistula)'
    ],
    
    benefits: [
      'Environmental conservation',
      'Air purification',
      'Soil erosion prevention',
      'Fruit production for community',
      'Shade and temperature control',
      'Wildlife habitat creation',
      'Carbon sequestration',
      'Aesthetic improvement'
    ],
    
    teamMembers: [
      'Muhammad Aslam - Project Coordinator',
      'Sadia Kareem - Environmental Specialist',
      'Bilal Ahmed - Logistics Manager',
      'Ayesha Noor - Community Outreach',
      'Kamran Ali - Plantation Expert'
    ],
    
    objectives: [
      'Distribute 2000+ plants to community',
      'Increase green cover in Chichawatni',
      'Promote environmental awareness',
      'Create sustainable green spaces',
      'Engage youth in plantation activities'
    ],
    
    impact: [
      '2000+ plants distributed',
      '150+ families participated',
      '5-acre area covered',
      'Community ownership established',
      'Follow-up maintenance planned'
    ]
  };

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/events"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Events</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
                  <Trees className="w-5 h-5" />
                  <span className="font-semibold">Environmental Initiative</span>
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
                  {eventDetails.title}
                </h1>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {eventDetails.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(eventDetails.date).toLocaleDateString('en-US', { 
                      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
                    })}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <Clock className="w-4 h-4" />
                    <span>{eventDetails.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>{eventDetails.location}</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src={eventDetails.image}
                  alt={eventDetails.title}
                  className="rounded-3xl shadow-2xl w-full max-w-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-black text-gray-800 mb-8">Event Overview</h2>
                
                {/* Plants Distributed */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Sprout className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Plants Distributed
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventDetails.distributedPlants.map((plant, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                        <span className="text-gray-700">{plant}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Environmental Benefits */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Heart className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Environmental Benefits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventDetails.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          🌱
                        </div>
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Team Members */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Organizing Team
                  </h3>
                  <div className="space-y-3">
                    {eventDetails.teamMembers.map((member, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-xl border border-blue-200">
                        <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          👨‍🌾
                        </div>
                        <span className="text-gray-700">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Target className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Event Objectives
                  </h3>
                  <div className="space-y-3">
                    {eventDetails.objectives.map((objective, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-gray-700">{objective}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Trees className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Event Impact
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {eventDetails.impact.map((item, index) => (
                      <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 text-center border border-green-200">
                        <div className="text-3xl font-black text-[#0A400C] mb-2">
                          {item.split('+')[0]}+
                        </div>
                        <div className="text-gray-600 text-sm">
                          {item.split('+')[1]}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Status */}
                <div className="bg-gray-50 rounded-3xl p-6">
                  <h3 className="text-xl font-black text-gray-800 mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Status</span>
                      <span className="font-semibold text-green-600">Successfully Completed</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold">{eventDetails.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold">Community Drive</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Participants</span>
                      <span className="font-semibold">{eventDetails.attendees}</span>
                    </div>
                  </div>
                </div>

                {/* Volunteer Contribution */}
                <div className="bg-green-50 rounded-3xl p-6 border border-green-200">
                  <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-green-600" />
                    Volunteer Contribution
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Plant Distribution</span>
                      <span className="font-semibold">15 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Guidance & Education</span>
                      <span className="font-semibold">8 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Logistics Support</span>
                      <span className="font-semibold">6 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Community Outreach</span>
                      <span className="font-semibold">10 Volunteers</span>
                    </div>
                  </div>
                </div>

                {/* Future Initiatives */}
                <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
                  <Trees className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">Join Our Mission</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Be part of our environmental conservation efforts
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white text-[#0A400C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Participate in Next Drive
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                      Donate Plants
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="bg-blue-50 rounded-3xl p-6 border border-blue-200">
                  <h3 className="text-xl font-black text-gray-800 mb-4">Quick Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Plants Distributed</span>
                      <span className="font-black text-2xl text-[#0A400C]">2,000+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Families Reached</span>
                      <span className="font-black text-2xl text-[#0A400C]">150+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Area Covered</span>
                      <span className="font-black text-2xl text-[#0A400C]">5 Acres</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-[#0A400C] to-[#819067] py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-black text-white mb-4">
              Help Us Grow More Green Spaces
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join Hamdard Committee in our mission to create a greener, healthier environment for future generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0A400C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                Become Environmental Volunteer
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                Support Our Green Initiatives
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PlantDistribution;