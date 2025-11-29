"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  CheckCircle,
  Flower,
  Mic,
  Users,
  Wifi,
  TreePine
} from 'lucide-react';

const QabarstanEidGhaService = () => {
  const facilities = [
    'Regular Cleaning & Maintenance',
    'Beautiful Grass & Flower Gardens',
    'Modern Washroom Facilities',
    'Four-Sided Boundary Walls',
    'Professional Sound System',
    'Microphone & Speaker Setup',
    'Adequate Prayer Space',
    'Water Supply & Wudu Area'
  ];

  const maintenanceFeatures = [
    'Daily Cleaning Schedule',
    'Weekly Garden Maintenance',
    'Monthly Deep Cleaning',
    'Regular Facility Inspection',
    'Sound System Testing',
    'Water Supply Check',
    'Security Monitoring',
    'Community Feedback System'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-600 to-blue-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/756761/pexels-photo-756761.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Qabarstan and Eid Gha"
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
                <Flower className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Qabarstan & Eid Gha</h1>
                <p className="text-xl text-white/90">Serene and well-maintained spaces for prayer and remembrance</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Sacred Spaces, Beautifully Maintained</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We take pride in maintaining our Qabarstan (cemetery) and Eid Gha (prayer ground). Both are 
                  cleaned, neatly maintained with grass, flowers, and proper washroom facilities. The area is 
                  equipped with four-sided walls, a microphone, and speakers, ensuring a serene and organized 
                  environment for prayer and remembrance.
                </p>

                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🕌 Available Facilities</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {facilities.map((facility, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-blue-600" />
                          <span className="text-gray-700">{facility}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🔧 Maintenance Excellence</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {maintenanceFeatures.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                          <TreePine className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Prayer Times */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">🕋 Eid Prayer Arrangements</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Eid ul-Fitr</h4>
                    <p className="text-green-700">Multiple prayer sessions with proper social distancing arrangements</p>
                  </div>
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Eid ul-Adha</h4>
                    <p className="text-green-700">Special arrangements for Qurbani and prayer gatherings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Facility Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Flower className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Area Maintained</span>
                    </div>
                    <span className="font-bold text-gray-800">5 Acres</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Prayer Capacity</span>
                    </div>
                    <span className="font-bold text-gray-800">5,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Mic className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Sound System</span>
                    </div>
                    <span className="font-bold text-gray-800">Professional</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <Wifi className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Maintenance</span>
                    </div>
                    <span className="font-bold text-gray-800">Daily</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📞 Facility Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">+92-300-1234573</p>
                      <p className="text-blue-100 text-sm">Facility Manager</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Flower className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">Open 24/7</p>
                      <p className="text-blue-100 text-sm">For Prayers & Visits</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Services</h3>
                <div className="space-y-3">
                  <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors">
                    Book Eid Prayer
                  </button>
                  <button className="w-full border-2 border-blue-600 text-blue-600 py-3 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors">
                    Donate for Maintenance
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Report Issue
                  </button>
                </div>
              </div>

              {/* Islamic Note */}
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-6">
                <h4 className="font-bold text-purple-800 mb-2">🕌 Islamic Importance</h4>
                <p className="text-purple-700 text-sm">
                  "The mosque of Allah shall be visited and maintained by such as believe in Allah and the Last Day." 
                  (Quran 9:18)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QabarstanEidGhaService;