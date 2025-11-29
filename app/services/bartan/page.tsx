"use client";

import Link from "next/link";
import { 
  ArrowLeft, 
  Phone, 
  Clock, 
  Users, 
  CheckCircle,
  Utensils,
  Heart,
  Calendar,
  Truck
} from 'lucide-react';

const BartanService = () => {
  const features = [
    'Complete Kitchen Utensil Sets',
    'Free Service for Funeral Events',
    'Hygienic Maintenance & Cleaning',
    'Free Delivery and Pickup',
    'Large Quantity Availability',
    'Advance Booking System',
    'Respectful and Dignified Service',
    'Serves 500+ People Capacity'
  ];

  const itemsIncluded = [
    'Cooking Pots & Pans',
    'Serving Dishes & Trays',
    'Plates & Bowls',
    'Glasses & Cups',
    'Spoons & Serving Utensils',
    'Water Dispensers',
    'Tea Making Equipment',
    'Cleaning Supplies'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/5639403/pexels-photo-5639403.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community Kitchen Utensils"
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
                <Utensils className="w-12 h-12" />
              </div>
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-2">Community Kitchen Utensils</h1>
                <p className="text-xl text-white/90">Free utensil service for families during funeral events</p>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Compassionate Support in Times of Need</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  Our free utensil (Bartan) services are available to families during funerals. This service, 
                  like the others, is offered with love and respect, ensuring that families have one less burden 
                  to bear during their time of grief. We understand the importance of supporting our community 
                  during difficult moments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-lg">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Items Included */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">🍽️ Complete Utensil Set Includes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {itemsIncluded.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                      <Utensils className="w-5 h-5 text-purple-600" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Stats Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Service Impact</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Utensils className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-600">Utensil Sets</span>
                    </div>
                    <span className="font-bold text-gray-800">200+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Users className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-600">Families Served</span>
                    </div>
                    <span className="font-bold text-gray-800">3,000+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-600">Events Supported</span>
                    </div>
                    <span className="font-bold text-gray-800">1,500+</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <Truck className="w-6 h-6 text-purple-600" />
                      <span className="text-gray-600">Serving Capacity</span>
                    </div>
                    <span className="font-bold text-gray-800">500 People</span>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-purple-600 text-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">📞 Service Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">8:00 AM - 8:00 PM</p>
                      <p className="text-purple-100 text-sm">Service Hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6" />
                    <div>
                      <p className="font-semibold">+92-300-1234570</p>
                      <p className="text-purple-100 text-sm">Utensil Coordinator</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Get Assistance</h3>
                <div className="space-y-3">
                  <button className="w-full bg-purple-600 text-white py-3 rounded-lg font-bold hover:bg-purple-700 transition-colors">
                    Request Utensils
                  </button>
                  <button className="w-full border-2 border-purple-600 text-purple-600 py-3 rounded-lg font-bold hover:bg-purple-600 hover:text-white transition-colors">
                    Donate Utensils
                  </button>
                  <button className="w-full border-2 border-gray-300 text-gray-600 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                    Volunteer for Service
                  </button>
                </div>
              </div>

              {/* Note */}
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
                <h4 className="font-bold text-yellow-800 mb-2">💝 Important Note</h4>
                <p className="text-yellow-700 text-sm">
                  This service is specifically designed to support families during funeral events. 
                  We provide complete assistance with dignity and respect during your time of need.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BartanService;