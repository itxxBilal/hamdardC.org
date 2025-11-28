// src/components/VolunteerCard.tsx
import React from 'react';
import { User, Phone, Mail, MapPin, Award } from 'lucide-react';

interface VolunteerCardProps {
  volunteer: {
    name: string;
    profile_picture?: string;
    phone_number: string;
    email?: string;
    address: string;
    occupation: string;
    skills: string[];
    availability: string;
    joined_date: string;
  };
}

const VolunteerCard: React.FC<VolunteerCardProps> = ({ volunteer }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="flex items-center space-x-4 mb-4">
        {volunteer.profile_picture ? (
          <img
            src={volunteer.profile_picture}
            alt={volunteer.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[#0A400C]"
          />
        ) : (
          <div className="w-16 h-16 rounded-full bg-gray-200 border-2 border-[#0A400C] flex items-center justify-center">
            <User className="w-8 h-8 text-gray-400" />
          </div>
        )}
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{volunteer.name}</h3>
          <p className="text-sm text-gray-600">{volunteer.occupation}</p>
        </div>
      </div>

      <div className="space-y-2 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <Phone className="w-4 h-4 text-[#0A400C]" />
          <span>{volunteer.phone_number}</span>
        </div>
        {volunteer.email && (
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4 text-[#0A400C]" />
            <span>{volunteer.email}</span>
          </div>
        )}
        <div className="flex items-start space-x-2">
          <MapPin className="w-4 h-4 text-[#0A400C] mt-0.5" />
          <span className="flex-1">{volunteer.address}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Award className="w-4 h-4 text-[#0A400C]" />
          <span>{volunteer.availability}</span>
        </div>
      </div>

      {volunteer.skills && volunteer.skills.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Skills</h4>
          <div className="flex flex-wrap gap-1">
            {volunteer.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-[#0A400C] text-white"
              >
                {skill}
              </span>
            ))}
            {volunteer.skills.length > 3 && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-200 text-gray-700">
                +{volunteer.skills.length - 3} more
              </span>
            )}
          </div>
        </div>
      )}

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-500">
          Joined {new Date(volunteer.joined_date).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default VolunteerCard;