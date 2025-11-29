"use client";

import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Stethoscope, Pill, Heart, Award } from 'lucide-react';

const MedicalCamp2024 = () => {
  const eventDetails = {
    title: 'Free Medical Camp 2024',
    description: 'Comprehensive healthcare services including free consultations, basic diagnostics, and medicine distribution for underprivileged communities in Chichawatni.',
    image: 'https://images.pexels.com/photos/7587447/pexels-photo-7587447.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2024-03-15',
    time: '9:00 AM - 4:00 PM',
    location: 'Community Center, Main Bazar, Chichawatni',
    attendees: '500+ Expected Patients',
    category: 'Healthcare',
    status: 'upcoming',
    type: 'annual',
    
    services: [
      'Free medical consultations',
      'Blood pressure and sugar testing',
      'Basic health screenings',
      'Free medicine distribution',
      'Health awareness sessions',
      'Vaccination services',
      'Dental check-ups',
      'Eye examinations'
    ],
    
    doctors: [
      'Dr. Ali Ahmad - General Physician',
      'Dr. Sarah Khan - Gynecologist',
      'Dr. Ahmed Raza - Pediatrician',
      'Dr. Fatima Noor - Dentist',
      'Dr. Usman Ali - Eye Specialist'
    ],
    
    objectives: [
      'Provide free healthcare to 500+ patients',
      'Distribute essential medicines',
      'Create health awareness in community',
      'Early detection of diseases',
      'Follow-up care arrangements'
    ],
    
    requirements: [
      'Volunteers for registration',
      'Medical equipment',
      'Medicine supplies',
      'Tents and seating arrangement',
      'Refreshments for staff'
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
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Annual Healthcare Event</span>
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
                
                {/* Services */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Stethoscope className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Medical Services Offered
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {eventDetails.services.map((service, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl">
                        <div className="w-2 h-2 bg-[#0A400C] rounded-full"></div>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Medical Team */}
                <div className="mb-12">
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Users className="w-6 h-6 mr-3 text-[#0A400C]" />
                    Medical Team
                  </h3>
                  <div className="space-y-3">
                    {eventDetails.doctors.map((doctor, index) => (
                      <div key={index} className="flex items-center space-x-3 p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
                          👨‍⚕️
                        </div>
                        <span className="text-gray-700">{doctor}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Objectives */}
                <div>
                  <h3 className="text-2xl font-black text-gray-800 mb-6 flex items-center">
                    <Heart className="w-6 h-6 mr-3 text-[#0A400C]" />
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
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Event Status */}
                <div className="bg-gray-50 rounded-3xl p-6">
                  <h3 className="text-xl font-black text-gray-800 mb-4">Event Details</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Status</span>
                      <span className="font-semibold text-green-600">Upcoming</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Category</span>
                      <span className="font-semibold">{eventDetails.category}</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600">Type</span>
                      <span className="font-semibold">{eventDetails.type === 'annual' ? 'Annual Event' : 'One-time'}</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Expected Attendance</span>
                      <span className="font-semibold">{eventDetails.attendees}</span>
                    </div>
                  </div>
                </div>

                {/* Volunteer Needs */}
                <div className="bg-blue-50 rounded-3xl p-6 border border-blue-200">
                  <h3 className="text-xl font-black text-gray-800 mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-600" />
                    Volunteer Needs
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Registration Desk</span>
                      <span className="font-semibold">8 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Medicine Distribution</span>
                      <span className="font-semibold">6 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Patient Guidance</span>
                      <span className="font-semibold">10 Volunteers</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Support Staff</span>
                      <span className="font-semibold">4 Volunteers</span>
                    </div>
                  </div>
                </div>

                {/* Participation CTA */}
                <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
                  <Pill className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-black mb-3">Join This Event</h3>
                  <p className="text-white/90 text-sm mb-4">
                    Get free medical services or volunteer to help others
                  </p>
                  <div className="space-y-3">
                    <button className="w-full bg-white text-[#0A400C] py-3 rounded-xl font-bold hover:bg-gray-100 transition-colors">
                      Register as Patient
                    </button>
                    <button className="w-full border-2 border-white text-white py-3 rounded-xl font-bold hover:bg-white/10 transition-colors">
                      Volunteer for Event
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

export default MedicalCamp2024;