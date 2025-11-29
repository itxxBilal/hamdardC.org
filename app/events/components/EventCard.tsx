"use client";

import Link from "next/link";
import React from 'react';
import { Calendar, MapPin, Clock, Users, ArrowRight, Award } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  location: string;
  attendees: string;
  category: string;
  status: 'upcoming' | 'completed';
  type: 'annual' | 'one-time';
}

interface EventCardProps {
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const statusColors = {
    upcoming: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
    completed: { bg: 'bg-gray-100', text: 'text-gray-800', border: 'border-gray-200' }
  };

  const colors = statusColors[event.status];

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Event Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 flex flex-col space-y-2">
          <span className={`${colors.bg} ${colors.text} ${colors.border} px-3 py-1 rounded-full text-sm font-semibold border`}>
            {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
          </span>
          {event.type === 'annual' && (
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200 flex items-center space-x-1">
              <Award className="w-3 h-3" />
              <span>Annual</span>
            </span>
          )}
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {event.category}
        </div>
      </div>

      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-800 mb-3">{event.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>

        {/* Event Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-3 text-gray-600">
            <Calendar className="w-5 h-5 flex-shrink-0" />
            <span className="font-semibold">{formatDate(event.date)}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Clock className="w-5 h-5 flex-shrink-0" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <MapPin className="w-5 h-5 flex-shrink-0" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center space-x-3 text-gray-600">
            <Users className="w-5 h-5 flex-shrink-0" />
            <span>{event.attendees}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/events/${event.id}`}
          className="w-full bg-[#0A400C] text-white py-3 rounded-xl font-bold hover:bg-[#0A400C]/90 transition-colors flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
        >
          <span>
            {event.status === 'upcoming' ? 'View Event Details' : 'View Event Report'}
          </span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;