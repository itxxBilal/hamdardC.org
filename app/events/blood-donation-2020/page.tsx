"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Droplets, Heart, Award, Shield } from 'lucide-react';

const BloodDonationDrive2024 = () => {
  const eventDetails = {
    title: 'Blood Donation Drive 2024',
    description: 'Community blood donation camp in collaboration with local hospitals to support emergency medical needs and save lives through voluntary blood donation.',
    image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2024-06-14',
    time: '8:00 AM - 6:00 PM',
    location: 'City Hospital, Main Road, Chichawatni',
    attendees: '200+ Donors Expected',
    category: 'Healthcare',
    status: 'upcoming',
    type: 'annual',
    
    benefits: [
      'Free health check-up for donors',
      'Blood group testing',
      'Donor certificate and appreciation',
      'Refreshments and gifts for donors',
      'Life-saving contribution to community'
    ],
    
    eligibility: [
      'Age: 18-60 years',
      'Weight: Minimum 50 kg',
      'Good general health',
      'No serious illnesses or infections',
      'Hemoglobin level: Minimum 12.5 g/dL',
      'No alcohol consumption 24 hours before donation',
      'Not pregnant or breastfeeding'
    ],

    requirements: [
      'Government-issued ID proof',
      'Medical history disclosure',
      'Consent form signature',
      'Post-donation rest for 15 minutes'
    ],

    contact: {
      phone: '+92-300-1234567',
      email: 'blooddrive@cityhospital.com',
      organizer: 'City Hospital Blood Bank'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
  

      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/events" 
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Events
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative h-96 bg-gray-900">
        <img
          src={eventDetails.image}
          alt={eventDetails.title}
          className="w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-sm font-medium rounded-full mb-4">
              {eventDetails.category}
            </span>
            <h1 className="text-4xl font-bold text-white mb-4">{eventDetails.title}</h1>
            <p className="text-xl text-gray-200 max-w-3xl">{eventDetails.description}</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Event Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Info */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Event Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{new Date(eventDetails.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Time</p>
                    <p className="font-medium">{eventDetails.time}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Location</p>
                    <p className="font-medium">{eventDetails.location}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-red-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Expected Donors</p>
                    <p className="font-medium">{eventDetails.attendees}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 text-red-600 mr-3" />
                Donor Benefits
              </h2>
              <ul className="space-y-3">
                {eventDetails.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Heart className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility Criteria */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Shield className="w-6 h-6 text-red-600 mr-3" />
                Eligibility Criteria
              </h2>
              <ul className="space-y-3">
                {eventDetails.eligibility.map((criteria, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700">{criteria}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            {eventDetails.requirements && (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {eventDetails.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-700">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Right Column - Action Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <div className="text-center mb-6">
                <Droplets className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-gray-900">Join the Life-Saving Mission</h3>
                <p className="text-gray-600 mt-2">Your donation can save up to 3 lives</p>
              </div>

              <div className="space-y-4">
                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200">
                  Register as Donor
                </button>
                <button className="w-full border border-red-600 text-red-600 hover:bg-red-50 font-medium py-3 px-4 rounded-lg transition duration-200">
                  Share Event
                </button>
              </div>

              {/* Contact Info */}
              {eventDetails.contact && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-medium text-gray-900 mb-3">Contact Information</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Organizer:</strong> {eventDetails.contact.organizer}</p>
                    <p><strong>Phone:</strong> {eventDetails.contact.phone}</p>
                    <p><strong>Email:</strong> {eventDetails.contact.email}</p>
                  </div>
                </div>
              )}

              {/* Status Badge */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Event Status</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    {eventDetails.status.charAt(0).toUpperCase() + eventDetails.status.slice(1)}
                  </span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-sm text-gray-500">Event Type</span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                    {eventDetails.type.charAt(0).toUpperCase() + eventDetails.type.slice(1)}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BloodDonationDrive2024;