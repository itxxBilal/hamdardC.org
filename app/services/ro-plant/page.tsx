"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle,
  Droplets,
  TestTube,
  Calendar
} from 'lucide-react';

const RoPlantService = () => {
  const features = [
    'Advanced Reverse Osmosis Technology',
    'Regular Water Quality Testing',
    'Free for Low-Income Families',
    'Multiple Strategic Locations',
    'Sustainable Operation & Maintenance',
    'High Capacity Production',
    'Hygienic Distribution Points',
    'Community Managed'
  ];

  const locations = [
    'Main City Center',
    'Al-Noor Colony',
    'Sabzazar Scheme',
    'Gulshan-e-Ravi',
    'Model Town Extension',
    'Iqbal Town Sector'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6605303/pexels-photo-6605303.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="RO Water Plant"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/services" 
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Services
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-sm">
                <Droplets className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">RO Water Filter Plant</h1>
                <p className="text-xl text-white/90">Clean, safe drinking water for communities in need</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Pure Water Initiative</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our Reverse Osmosis water filtration plants provide access to clean and safe drinking water 
                  for thousands of families daily. Using advanced RO technology, we ensure water purity while 
                  maintaining affordability for low-income communities.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations Section */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">📍 Plant Locations</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {locations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Water Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Droplets className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-600">Plants Operational</span>
                    </div>
                    <span className="font-bold text-gray-800">12 Units</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-600">Daily Beneficiaries</span>
                    </div>
                    <span className="font-bold text-gray-800">25,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <TestTube className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-600">Daily Capacity</span>
                    </div>
                    <span className="font-bold text-gray-800">50,000 Liters</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-blue-600" />
                      <span className="text-gray-600">Quality Tests/Month</span>
                    </div>
                    <span className="font-bold text-gray-800">60+</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">💧 Service Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">6:00 AM - 10:00 PM</p>
                      <p className="text-blue-100 text-sm">Daily Operation Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">+92-300-1234568</p>
                      <p className="text-blue-100 text-sm">Plant Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Request Water Connection
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors">
                    Sponsor a Plant
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Volunteer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoPlantService;