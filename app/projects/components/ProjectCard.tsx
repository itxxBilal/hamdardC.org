"use client";

import Link from "next/link";
import React from 'react';
import { Calendar, MapPin, Users, DollarSign, ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  status: 'planning' | 'development' | 'completed';
  progress: number;
  budget: string;
  timeline: string;
  location: string;
  teamSize: string;
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const statusColors = {
    planning: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
    development: { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
    completed: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' }
  };

  const statusText = {
    planning: 'In Planning',
    development: 'In Development',
    completed: 'Completed'
  };

  const colors = statusColors[project.status];

  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`${colors.bg} ${colors.text} ${colors.border} px-3 py-1 rounded-full text-sm font-semibold border`}>
            {statusText[project.status]}
          </span>
        </div>
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-2xl font-black text-gray-800 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-700">Progress</span>
            <span className="text-sm font-bold text-[#0A400C]">{project.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-[#0A400C] h-2 rounded-full transition-all duration-500"
              style={{ width: `${project.progress}%` }}
            ></div>
          </div>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <DollarSign className="w-4 h-4" />
            <span>{project.budget}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            <span>{project.timeline}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{project.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users className="w-4 h-4" />
            <span>{project.teamSize}</span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/projects/${project.id}`}
          className="w-full bg-[#0A400C] text-white py-3 rounded-xl font-bold hover:bg-[#0A400C]/90 transition-colors flex items-center justify-center space-x-2 group-hover:scale-105 transition-transform"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;