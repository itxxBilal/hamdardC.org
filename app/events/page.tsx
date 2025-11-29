"use client";

import Link from "next/link";
import { Calendar, Users, Heart, Stethoscope, ArrowRight } from 'lucide-react';
import EventCard from './components/EventCard';

const EventsPage = () => {
  const events = [
    {
      id: 'medical-camp-2024',
      title: 'Free Medical Camp 2024',
      description: 'Comprehensive healthcare services including free consultations, basic diagnostics, and medicine distribution for underprivileged communities.',
      image: 'https://images.pexels.com/photos/7587447/pexels-photo-7587447.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-03-15',
      time: '9:00 AM - 4:00 PM',
      location: 'Community Center, Chichawatni',
      attendees: '500+ Expected',
      category: 'Healthcare',
      status: 'completed',
      type: 'annual'
    },
    {
      id: 'blood-donation-drive-2024',
      title: 'Blood Donation Drive 2024',
      description: 'Community blood donation camp in collaboration with local hospitals to support emergency medical needs.',
      image: 'https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-06-14',
      time: '8:00 AM - 6:00 PM',
      location: 'City Hospital, Chichawatni',
      attendees: '200+ Donors',
      category: 'Healthcare',
      status: 'completed',
      type: 'annual'
    },
    {
      id: 'plant-distribution',
      title: 'Tree Plantation Drive 2024',
      description: 'Distribution of warm clothes, blankets, and essential winter items to needy families during cold season.',
      image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-20',
      time: '10:00 AM - 3:00 PM',
      location: 'Various Locations, Chichawatni',
      attendees: '300+ Families',
      category: 'Relief',
      status: 'upcoming',
      type: 'annual'
    },
    {
      id: 'eid-food-distribution-2023',
      title: 'Eid ul-Fitr Food Distribution 2023',
      description: 'Special food package distribution for underprivileged families to celebrate Eid with dignity and joy.',
      image: 'https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-04-21',
      time: '9:00 AM - 2:00 PM',
      location: 'Central Mosque, Chichawatni',
      attendees: '400+ Families',
      category: 'Relief',
      status: 'completed',
      type: 'annual'
    }
  ];

  const eventStats = {
    total: events.length,
    upcoming: events.filter(e => e.status === 'upcoming').length,
    completed: events.filter(e => e.status === 'completed').length,
    annual: events.filter(e => e.type === 'annual').length
  };



  return (
    <>
      

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#0A400C] via-[#1a5c1e] to-[#819067] text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Community Events & Activities</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Our <span className="text-[#e8f5e9]">Events</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Join us in making a difference. Participate in our community events, 
                medical camps, and relief programs that bring positive change to lives.
              </p>
            </div>
          </div>
        </section>

        {/* Event Stats */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{eventStats.total}</div>
                <div className="text-gray-600 font-semibold">Total Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{eventStats.upcoming}</div>
                <div className="text-gray-600 font-semibold">Upcoming Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{eventStats.completed}</div>
                <div className="text-gray-600 font-semibold">Completed Events</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{eventStats.annual}</div>
                <div className="text-gray-600 font-semibold">Annual Programs</div>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Upcoming <span className="text-[#0A400C]">Events</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Join our upcoming community events and be part of positive change
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {events
                .filter(event => event.status === 'upcoming')
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              }
            </div>

            {events.filter(event => event.status === 'upcoming').length === 0 && (
              <div className="text-center py-12">
                <Calendar className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Upcoming Events</h3>
                <p className="text-gray-500">Check back later for new event announcements</p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Past <span className="text-[#0A400C]">Events</span>
              </h2>
              <p className="text-xl text-gray-600">Successful community events that made a difference</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {events
                .filter(event => event.status === 'completed')
                .map((event) => (
                  <EventCard key={event.id} event={event} />
                ))
              }
            </div>
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Event <span className="text-[#0A400C]">Categories</span>
              </h2>
              <p className="text-xl text-gray-600">Types of community events we organize regularly</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Stethoscope,
                  title: 'Healthcare Events',
                  description: 'Medical camps, health screenings, vaccination drives, and health awareness programs',
                  count: '4+ Events Yearly'
                },
                {
                  icon: Heart,
                  title: 'Relief Programs',
                  description: 'Food distribution, winter relief, emergency aid, and support for underprivileged families',
                  count: '6+ Events Yearly'
                },
                {
                  icon: Users,
                  title: 'Community Gatherings',
                  description: 'Educational seminars, community meetings, and social welfare activities',
                  count: '8+ Events Yearly'
                }
              ].map((category, index) => (
                <div key={index} className="bg-white rounded-3xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="bg-[#0A400C]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-10 h-10 text-[#0A400C]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{category.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{category.description}</p>
                  <div className="bg-[#0A400C] text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {category.count}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Volunteer CTA */}
        <section className="py-20 bg-gradient-to-r from-[#0A400C] to-[#819067] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-4xl font-black mb-6">Become an Event Volunteer</h3>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join our team of dedicated volunteers and help us organize successful community events. 
              Your time and effort can make a real difference in people's lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#0A400C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2">
                <span>Join as Volunteer</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors"
              >
                Contact Event Team
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default EventsPage;