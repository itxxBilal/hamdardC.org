"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  MapPin, 
  CheckCircle,
  Lightbulb,
  Shield,
  Users,
  Zap
} from 'lucide-react';

const StreetLightsService = () => {
  const benefits = [
    'Enhanced Community Safety',
    'Reduced Crime Rates',
    'Safe Night Travel',
    'Extended Business Hours',
    'Children Study Support',
    'Emergency Visibility',
    'Social Gathering Spaces',
    'Overall Security Improvement'
  ];

  const features = [
    'Energy Efficient LED Lights',
    'Solar Powered Options',
    'Automatic Dusk to Dawn Operation',
    'Weather Resistant Design',
    'Regular Maintenance',
    'Community Monitoring',
    'Strategic Placement',
    'Cost-Effective Operation'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-yellow-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/3553218/pexels-photo-3553218.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Street Lights Illumination"
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
                <Lightbulb className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Street Lights Project</h1>
                <p className="text-xl text-white/90">Illuminating communities for safety and progress</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Creating Safer Communities Through Light</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We believe in creating a safer community. Our street lights illuminate the village at night, 
                  helping ensure the safety and well-being of our residents. Proper lighting not only prevents 
                  accidents but also creates an environment where children can play safely, businesses can operate 
                  longer, and families can move freely after dark.
                </p>

                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">💡 Key Benefits</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg">
                          <CheckCircle className="w-5 h-5 text-amber-600" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">⚡ Technical Features</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                          <Zap className="w-5 h-5 text-yellow-600" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Project Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Lightbulb className="w-6 h-6 text-amber-600" />
                      <span className="text-gray-600">Lights Installed</span>
                    </div>
                    <span className="font-bold text-gray-800">150+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-6 h-6 text-amber-600" />
                      <span className="text-gray-600">Areas Covered</span>
                    </div>
                    <span className="font-bold text-gray-800">8 Villages</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-amber-600" />
                      <span className="text-gray-600">Residents Benefited</span>
                    </div>
                    <span className="font-bold text-gray-800">15,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-6 h-6 text-amber-600" />
                      <span className="text-gray-600">Safety Improvement</span>
                    </div>
                    <span className="font-bold text-gray-800">70%</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-amber-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🏙️ Project Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">+92-300-1234572</p>
                      <p className="text-amber-100 text-sm">Project Coordinator</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Lightbulb className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">6:00 PM - 6:00 AM</p>
                      <p className="text-amber-100 text-sm">Daily Operation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Involved</h3>
                <div className="space-y-3">
                  <button className="w-full bg-amber-600 text-white py-3 rounded-lg font-bold hover:bg-amber-700 transition-colors">
                    Request Lights in Your Area
                  </button>
                  <button className="w-full border-2 border-amber-600 text-amber-600 py-3 rounded-lg font-bold hover:bg-amber-600 hover:text-white transition-colors">
                    Sponsor a Light
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Report Maintenance
                  </button>
                </div>
              </div>

              {/* Impact Note */}
              <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                <h4 className="font-bold text-green-800 mb-2">🌟 Community Impact</h4>
                <p className="text-green-700 text-sm">
                  Since installation, communities report significant improvements in night safety, 
                  extended business hours, and enhanced quality of life for all residents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StreetLightsService;