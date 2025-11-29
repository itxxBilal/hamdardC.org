"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  Users, 
  CheckCircle,
  Heart,
  Calendar,
  DollarSign,
  Shield
} from 'lucide-react';

const UsherZakatService = () => {
  const assistanceAreas = [
    'Children Marriage Support',
    'Medical Treatment Aid',
    'Educational Expenses',
    'Household Essential Needs',
    'Emergency Financial Support',
    'Small Business Setup',
    'Food and Grocery Support',
    'Utility Bill Assistance'
  ];

  const distributionProcess = [
    'Application Submission',
    'Field Verification',
    'Committee Review',
    'Sharia Compliance Check',
    'Beneficiary Approval',
    'Fund Distribution',
    'Follow-up Monitoring'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Usher Zakat Distribution"
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
                <Heart className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Usher & Zakat Distribution</h1>
                <p className="text-xl text-white/90">Islamic charity distribution following Sharia principles</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Empowering Underprivileged Families</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  The Hamdard Committee is dedicated to supporting underprivileged families in villages by providing 
                  financial assistance for essential needs. The Ushar Project aims to help poor families by offering 
                  support for children's marriages, medical aid, and other necessary expenses through Sharia-compliant 
                  distribution of Usher and Zakat funds.
                </p>

                <div className="grid grid-cols-1 gap-6 mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">🎯 Assistance Areas</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {assistanceAreas.map((area, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-green-600" />
                          <span className="text-gray-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Distribution Process */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">📋 Distribution Process</h3>
                <div className="space-y-4">
                  {distributionProcess.map((step, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full font-bold">
                        {index + 1}
                      </div>
                      <span className="text-gray-700 text-lg">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Impact Statistics</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Beneficiaries</span>
                    </div>
                    <span className="font-bold text-gray-800">5,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Heart className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Families Supported</span>
                    </div>
                    <span className="font-bold text-gray-800">1,200+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Amount Distributed</span>
                    </div>
                    <span className="font-bold text-gray-800">2.5M+ PKR</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-green-600" />
                      <span className="text-gray-600">Distribution Cycle</span>
                    </div>
                    <span className="font-bold text-gray-800">Monthly</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-green-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🤲 Zakat Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">+92-300-1234569</p>
                      <p className="text-green-100 text-sm">Zakat Coordinator</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">100% Transparent</p>
                      <p className="text-green-100 text-sm">Sharia Compliant</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <button className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700 transition-colors">
                    Apply for Assistance
                  </button>
                  <button className="w-full border-2 border-green-600 text-green-600 py-3 rounded-lg font-bold hover:bg-green-600 hover:text-white transition-colors">
                    Donate Zakat
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Volunteer for Verification
                  </button>
                </div>
              </div>

              {/* Islamic Note */}
              <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
                <h4 className="font-bold text-blue-800 mb-2">📖 Islamic Principle</h4>
                <p className="text-blue-700 text-sm">
                  "The likeness of those who spend their wealth in the Way of Allah is as the likeness of a grain 
                  that sprouts seven spikes, and in every spike there are a hundred grains." (Quran 2:261)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UsherZakatService;