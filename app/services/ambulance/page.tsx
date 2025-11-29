"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  Clock, 
  Users, 
  MapPin, 
  CheckCircle,
  Ambulance as AmbulanceIcon} from 'lucide-react';

const AmbulanceService = () => {
  const features = [
    '24/7 Emergency Service Availability',
    'Trained Paramedical Staff',
    'Basic Life Support Equipment',
    'Free Service for Needy Patients',
    'Quick Response Time (15-20 mins)',
    'GPS Enabled Vehicles',
    'First Aid Medical Support',
    'Patient Transport to Hospital'
  ];

  const stats = [
    { icon: <AmbulanceIcon className="w-6 h-6" />, label: 'Ambulances', value: '5 Vehicles' },
    { icon: <Users className="w-6 h-6" />, label: 'People Served', value: '10,000+' },
    { icon: <Clock className="w-6 h-6" />, label: 'Response Time', value: '15-20 mins' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Coverage Area', value: '50km Radius' }
  ];



  return (
 <>
     
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-red-800 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Emergency Ambulance Service"
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
                <AmbulanceIcon className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Emergency Ambulance Service</h1>
                <p className="text-xl text-white/90">24/7 emergency medical transportation when you need it most</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Service Overview</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our Emergency Ambulance Service provides immediate medical transportation for emergencies 
                  across the community. Available round the clock with trained paramedical staff and essential 
                  life-saving equipment, we ensure timely medical assistance when every second counts.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Protocol */}
              <div className="bg-red-50 border border-red-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-red-800 mb-4">🚨 Emergency Protocol</h3>
                <div className="space-y-4 text-red-700">
                  <p><strong>Immediate Response:</strong> Call our emergency number for immediate ambulance dispatch</p>
                  <p><strong>Information to Provide:</strong> Location, patient condition, contact number</p>
                  <p><strong>Preparation:</strong> Keep patient stable, gather medical documents if available</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Impact</h3>
                <div className="space-y-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                      <div className="flex items-center space-x-3">
                        <div className="text-red-600">
                          {stat.icon}
                        </div>
                        <span className="text-gray-600 font-medium">{stat.label}</span>
                      </div>
                      <span className="font-bold text-gray-800">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Emergency Contact Card */}
              <div className="bg-red-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">🚑 Emergency Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="text-2xl font-bold">+92-300-1234567</p>
                      <p className="text-red-100 text-sm">24/7 Emergency Line</p>
                    </div>
                  </div>
                  <button className="w-full bg-white text-red-600 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors text-lg">
                    Call Now for Emergency
                  </button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-red-600 text-white py-3 rounded-lg font-bold hover:bg-red-700 transition-colors">
                    Request Ambulance
                  </button>
                  <button className="w-full border-2 border-red-600 text-red-600 py-3 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-colors">
                    Support This Service
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Download Emergency Info
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
     </>
  );
};

export default AmbulanceService;