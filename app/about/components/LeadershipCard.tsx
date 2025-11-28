import React from 'react';
import Link from "next/link";
import { ArrowRight, Award } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  featured?: boolean;
  department?: string;
  link?: string;
}

interface LeadershipCardProps {
  member: TeamMember;
}

const LeadershipCard: React.FC<LeadershipCardProps> = ({ member }) => {
  const CardContent = () => (
    <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
      <div className="relative mb-6">
        <img
          src={member.image}
          alt={member.name}
          className="w-32 h-32 rounded-2xl object-cover mx-auto group-hover:scale-105 transition-transform duration-300"
        />
        {member.featured && (
          <div className="absolute -top-2 -right-2 bg-[#0A400C] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1">
            <Award className="w-3 h-3" />
            <span>Founder</span>
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-xl font-black text-gray-800 mb-2 text-center">{member.name}</h3>
        <p className="text-[#0A400C] font-semibold text-center mb-3">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed text-center">{member.description}</p>
      </div>

      {member.link && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center justify-center space-x-2 text-[#0A400C] font-semibold group-hover:translate-x-1 transition-transform">
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      )}
    </div>
  );

  if (member.link) {
    return (
      <Link href={member.link} className="block hover:transform hover:scale-105 transition-all duration-300">
        <CardContent />
      </Link>
    );
  }

  return <CardContent />;
};

export default LeadershipCard;