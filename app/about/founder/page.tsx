"use client";
import Link from "next/link";
import { ArrowLeft, Quote, Award, Users, Heart, Target, Calendar, MapPin } from 'lucide-react';

const FounderPage = () => {
  const founderDetails = {
    name: 'Dr. Ali Ahmad',
    role: 'Founder & Visionary Leader',
    image: '/Leadership/DrAliAhmad.jpg',
    bio: [
      'Dr. Ali Ahmad is the visionary founder of Hamdard Committee, established in 2019 with a profound commitment to serving humanity. His journey in community service spans over two decades, driven by a deep-seated belief in the power of compassion and collective action.',
      'With a background in community medicine and social work, Dr. Ahmad recognized the pressing needs of underprivileged communities in Chichawatni and surrounding areas. His vision was to create an organization that not only provides immediate relief but also works towards sustainable community development.',
      'Under his leadership, Hamdard Committee has grown from a small local initiative to a comprehensive welfare organization serving thousands of families through multiple programs including emergency medical services, clean water initiatives, and educational support.'
    ],
    philosophy: [
      'Service to humanity is the highest form of worship',
      'Every individual deserves dignity and opportunity',
      'Sustainable change comes from community empowerment',
      'Transparency and integrity are non-negotiable'
    ],
    achievements: [
      'Founded Hamdard Committee in 2019',
      'Established 24/7 ambulance service network',
      'Pioneered community-based RO water plants',
      'Developed transparent Zakat distribution system',
      'Built a network of 500+ dedicated volunteers'
    ]
  };

  return (
    <>
   

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/about"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to About</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-linear-to-br from-[#0A400C] to-[#819067] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
                  <Heart className="w-5 h-5" />
                  <span className="font-semibold">Visionary Leader</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-black mb-4">{founderDetails.name}</h1>
                <p className="text-2xl text-white/90 mb-6">{founderDetails.role}</p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>Founded in 2019</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>Chichawatni, Pakistan</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src={founderDetails.image}
                    alt={founderDetails.name}
                    className="w-80 h-80 rounded-3xl object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white text-[#0A400C] px-6 py-3 rounded-xl font-bold shadow-lg">
                    Founder
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-gray-800 mb-12 text-center">Biography</h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              {founderDetails.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy & Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Philosophy */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <Quote className="w-8 h-8 text-[#0A400C]" />
                  <h3 className="text-3xl font-black text-gray-800">Personal Philosophy</h3>
                </div>
                <div className="space-y-4">
                  {founderDetails.philosophy.map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-3 h-3 bg-[#0A400C] rounded-full mt-2 shrink-0"></div>
                      <p className="text-gray-700 text-lg">{principle}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <div className="flex items-center space-x-3 mb-8">
                  <Award className="w-8 h-8 text-[#0A400C]" />
                  <h3 className="text-3xl font-black text-gray-800">Key Achievements</h3>
                </div>
                <div className="space-y-4">
                  {founderDetails.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-8 h-8 bg-[#0A400C] text-white rounded-full flex items-center justify-center shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-linear-to-r from-[#0A400C] to-[#819067] rounded-3xl p-12 text-white">
              <Target className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-6">Vision for the Future</h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                "My vision for Hamdard Committee is to create a self-sustaining ecosystem of compassion
                where every community member has access to basic necessities, education, healthcare,
                and opportunities for growth. We aim to build a model of community service that can
                be replicated across the nation."
              </p>
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-6 h-6" />
                <span className="font-semibold">- Dr. Ali Ahmad</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default FounderPage;