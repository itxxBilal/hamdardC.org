"use client";

import Link from "next/link";
import { Target, Users, DollarSign, Construction } from 'lucide-react';
import ProjectCard from './components/ProjectCard';

const ProjectsPage = () => {
  const projects = [
    {
      id: 'marriage-hall',
      title: 'Marriage Hall',
      description: 'A modern, spacious marriage hall to serve community wedding ceremonies and events with proper facilities.',
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161436/Marriage_Hall_Project_leliin.png',
      status: 'planning',
      progress: 25,
      budget: 'PKR 5,000,000',
      timeline: '12 Months',
      location: 'Main City Area',
      teamSize: '15 Members',
      category: 'Community Facility'
    },
    {
      id: 'dispensary',
      title: 'Community Dispensary',
      description: 'Healthcare facility providing basic medical services, free consultations, and essential medicines to underprivileged families.',
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161442/Community_Dispensary_nbag4q.png',
      status: 'development',
      progress: 60,
      budget: 'PKR 2,500,000',
      timeline: '8 Months',
      location: 'Central Location',
      teamSize: '12 Members',
      category: 'Healthcare'
    },
    {
      id: 'sports-ground',
      title: 'Sports Ground',
      description: 'Multi-purpose sports facility with cricket ground, football field, and outdoor exercise equipment for youth development.',
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161436/Sports_Ground_eyfyxr.png',
      status: 'planning',
      progress: 15,
      budget: 'PKR 3,500,000',
      timeline: '10 Months',
      location: 'Community Park Area',
      teamSize: '20 Members',
      category: 'Sports & Recreation'
    },
    {
      id: 'model-graveyard-2nd',
      title: 'Model Graveyard 2nd Phase',
      description: 'Expansion of existing graveyard with modern facilities, proper landscaping, and enhanced maintenance services.',
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1764161435/Model_Graveyard_2nd_Phase_owpkdv.png',
      status: 'development',
      progress: 40,
      budget: 'PKR 4,000,000',
      timeline: '14 Months',
      location: 'Existing Graveyard Extension',
      teamSize: '18 Members',
      category: 'Community Service'
    }
  ];

  const projectStats = {
    total: projects.length,
    inDevelopment: projects.filter(p => p.status === 'development').length,
    inPlanning: projects.filter(p => p.status === 'planning').length,
    totalBudget: 'PKR 15,000,000'
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
                <Construction className="w-5 h-5" />
                <span className="font-semibold">Community Development Projects</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                Our <span className="text-[#e8f5e9]">Projects</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                Building the future together. Explore our upcoming development projects 
                designed to enhance community facilities and services for everyone.
              </p>
            </div>
          </div>
        </section>

        {/* Project Stats */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{projectStats.total}</div>
                <div className="text-gray-600 font-semibold">Active Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{projectStats.inDevelopment}</div>
                <div className="text-gray-600 font-semibold">In Development</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{projectStats.inPlanning}</div>
                <div className="text-gray-600 font-semibold">In Planning</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">{projectStats.totalBudget}</div>
                <div className="text-gray-600 font-semibold">Total Budget</div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Upcoming <span className="text-[#0A400C]">Projects</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover our planned and ongoing development initiatives that will transform 
                community facilities and services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-3xl p-12 text-white text-center">
              <Target className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-4">Support Our Projects</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Your contributions help us turn these plans into reality. Join us in building 
                better facilities for our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/donate"
                  className="bg-white text-[#0A400C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors"
                >
                  Donate to Projects
                </Link>
                <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-colors">
                  Become a Volunteer
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Project Process */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Project <span className="text-[#0A400C]">Development</span> Process
              </h2>
              <p className="text-xl text-gray-600">How we transform ideas into community assets</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: 1, title: 'Planning', description: 'Community needs assessment and project planning', icon: Target },
                { step: 2, title: 'Funding', description: 'Budget allocation and fundraising initiatives', icon: DollarSign },
                { step: 3, title: 'Development', description: 'Construction and implementation phase', icon: Construction },
                { step: 4, title: 'Operation', description: 'Community service and maintenance', icon: Users }
              ].map((process) => (
                <div key={process.step} className="text-center group">
                  <div className="bg-[#0A400C]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0A400C]/20 transition-colors">
                    <process.icon className="w-10 h-10 text-[#0A400C]" />
                  </div>
                  <div className="text-2xl font-black text-[#0A400C] mb-2">{process.step}</div>
                  <h3 className="text-xl font-black text-gray-800 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectsPage;