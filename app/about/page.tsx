"use client";
import { useState, useEffect } from 'react';
import Link from "next/link";
import { Users, Target, Award, Heart, ArrowRight, Star, Calendar, MapPin } from 'lucide-react';
import LeadershipCard from './components/LeadershipCard';
import VolunteerCard from './components/VolunteerCard';
import { supabase } from '../../lib/supabase';

const AboutPage = () => {
  const [volunteers, setVolunteers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApprovedVolunteers();
  }, []);

  const fetchApprovedVolunteers = async () => {
    try {
      const { data, error } = await supabase
        .from('volunteers')
        .select('*')
        .eq('status', 'approved')
        .order('created_at', { ascending: false })
        .limit(6); // Show only 6 volunteers on about page

      if (error) throw error;
      setVolunteers(data || []);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    } finally {
      setLoading(false);
    }
  };

  const leadershipTeam = [
    {
      name: 'Dr. Ali Ahmad',
      role: 'Founder & Visionary',
      description: 'Founded Hamdard Committee in 2019 with a vision to serve humanity through compassionate community service.',
      image: '/Leadership/DrAliAhmad.jpg',
      featured: true,
      link: '/about/founder'
    },
    {
      name: 'Zafar Iqbal Ch',
      role: 'President',
      description: 'Leading the organization with 15+ years of community service experience and strategic vision.',
      image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1745660064/Hamdard/president.jpg',
      featured: false
    },
    {
      name: 'Muhammad Kamran',
      role: 'General Secretary',
      description: 'Managing daily operations and ensuring transparency in all organizational activities.',
      image: '/Leadership/MKamran.jpg',
      featured: false
    }
  ];

  const achievements = [
    {
      icon: Users,
      title: '50,000+ Lives Impacted',
      description: 'Families transformed through sustainable community programs',
      stat: '50K+'
    },
    {
      icon: Heart,
      title: '24/7 Emergency Services',
      description: 'Round-the-clock ambulance and emergency relief services',
      stat: '24/7'
    },
    {
      icon: Award,
      title: 'Community Excellence',
      description: 'Multiple awards for outstanding social service',
      stat: '5+'
    },
    {
      icon: Target,
      title: '98% Fund Utilization',
      description: 'Maximum impact with minimal administrative costs',
      stat: '98%'
    }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Putting human dignity at the forefront of all our initiatives'
    },
    {
      icon: Target,
      title: 'Integrity',
      description: 'Maintaining transparency and accountability in all operations'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Working with communities to create sustainable solutions'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Striving for the highest standards in service delivery'
    }
  ];

  

  return (
    <>
  
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-[#0A400C] via-[#1a5c1e] to-[#819067] text-white py-20 lg:py-28">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Serving Since June 2019</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
                About <span className="text-[#e8f5e9]">Hamdard</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
                A journey of compassion, dedication, and transformative community service. 
                Empowering lives through sustainable initiatives and emergency support.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">5+</div>
                <div className="text-gray-600 font-semibold">Years of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">75+</div>
                <div className="text-gray-600 font-semibold">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">500+</div>
                <div className="text-gray-600 font-semibold">Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-[#0A400C] mb-2">7</div>
                <div className="text-gray-600 font-semibold">Core Services</div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center space-x-2 bg-[#0A400C]/10 px-4 py-2 rounded-full mb-6">
                  <MapPin className="w-5 h-5 text-[#0A400C]" />
                  <span className="text-[#0A400C] font-bold">Based in Chichawatni</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-6">
                  Our <span className="text-[#0A400C]">Journey</span> of Service
                </h2>
                <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                  <p>
                    Founded on <strong>June 31, 2019</strong>, Hamdard Committee emerged from a simple yet powerful vision: 
                    to create a platform where compassion meets action. What began as a small initiative to support 
                    local families has blossomed into a comprehensive welfare organization serving multiple communities.
                  </p>
                  <p>
                    Under the visionary leadership of <strong>Dr. Ali Ahmad</strong>, our organization has evolved to 
                    address diverse community needs - from emergency medical services through our 24/7 ambulance 
                    network to sustainable solutions like RO water plants and educational support programs.
                  </p>
                  <p>
                    Today, we stand as a trusted partner in community development, recognized for our transparency, 
                    dedication, and impactful service delivery across the region.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="bg-linear-to-br from-[#0A400C] to-[#819067] rounded-3xl p-8 text-white shadow-2xl">
                  <div className="text-center">
                    <Star className="w-16 h-16 mx-auto mb-6 text-[#e8f5e9]" />
                    <h3 className="text-2xl font-black mb-4">Our Philosophy</h3>
                    <p className="text-lg text-white/90 leading-relaxed">
                      "Service to humanity is service to God. We believe in creating lasting impact through 
                      compassionate action, community partnership, and sustainable development."
                    </p>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#e8f5e9] rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#819067] rounded-full"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Our <span className="text-[#0A400C]">Core Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every action and decision we make
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-[#0A400C]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#0A400C]/20 transition-colors">
                    <value.icon className="w-10 h-10 text-[#0A400C]" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Preview */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                  Our <span className="text-[#0A400C]">Leadership</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Meet the dedicated individuals who guide our mission and drive our impact forward
                </p>
              </div>
              <Link 
                href="/about/team"
                className="mt-6 lg:mt-0 inline-flex items-center space-x-2 bg-[#0A400C] text-white px-6 py-3 rounded-xl hover:bg-[#0A400C]/90 transition-colors font-semibold"
              >
                <span>View Full Team</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadershipTeam.map((member, index) => (
                <LeadershipCard key={index} member={member} />
              ))}
            </div>

            {/* Founder Special Section */}
            <div className="mt-16 bg-linear-to-r from-[#0A400C] to-[#819067] rounded-3xl p-8 text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-black mb-4">Founder's Vision</h3>
                  <p className="text-lg text-white/90 leading-relaxed mb-6">
                    Dr. Ali Ahmad's vision for Hamdard Committee was to create an organization that 
                    not only provides immediate relief but also works towards sustainable community 
                    development. His leadership continues to inspire our work every day.
                  </p>
                  <Link 
                    href="/about/founder"
                    className="inline-flex items-center space-x-2 bg-white text-[#0A400C] px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors font-semibold"
                  >
                    <span>Learn About Our Founder</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <img
                      src={leadershipTeam[0].image}
                      alt="Dr. Ali Ahmad - Founder of Hamdard Committee"
                      className="w-64 h-64 rounded-2xl object-cover shadow-2xl"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white text-[#0A400C] px-4 py-2 rounded-xl font-bold shadow-lg">
                      Founder
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Volunteers Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
              <div>
                <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                  Our <span className="text-[#0A400C]">Volunteers</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl">
                  Meet the heart of our organization - the dedicated volunteers who make our work possible
                </p>
              </div>
              <div className="mt-6 lg:mt-0 flex space-x-4">
                <Link 
                  href="/volunteers"
                  className="inline-flex items-center space-x-2 bg-[#0A400C] text-white px-6 py-3 rounded-xl hover:bg-[#0A400C]/90 transition-colors font-semibold"
                >
                  <span>View All Volunteers</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/become-volunteer"
                  className="inline-flex items-center space-x-2 border-2 border-[#0A400C] text-[#0A400C] px-6 py-3 rounded-xl hover:bg-[#0A400C] hover:text-white transition-colors font-semibold"
                >
                  <span>Join Us</span>
                  <Users className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {loading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A400C]"></div>
              </div>
            ) : volunteers.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {volunteers.map((volunteer) => (
                    <VolunteerCard
                      key={volunteer.id}
                      volunteer={{
                        ...volunteer,
                        joined_date: volunteer.created_at
                      }}
                    />
                  ))}
                </div>
                
                {volunteers.length >= 6 && (
                  <div className="text-center mt-12">
                    <Link 
                      href="/volunteers"
                      className="inline-flex items-center space-x-2 bg-linear-to-r from-[#0A400C] to-[#819067] text-white px-8 py-4 rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg"
                    >
                      <Users className="w-5 h-5" />
                      <span>Meet All Our Volunteers</span>
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-2xl">
                <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                  Our Volunteer Team is Growing
                </h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto">
                  We're building our team of dedicated volunteers. Be the first to join our mission!
                </p>
                <Link 
                  href="/become-volunteer"
                  className="inline-flex items-center space-x-2 bg-[#0A400C] text-white px-6 py-3 rounded-xl hover:bg-[#0A400C]/90 transition-colors font-semibold"
                >
                  <span>Become a Volunteer</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
                Our <span className="text-[#0A400C]">Impact</span>
              </h2>
              <p className="text-xl text-gray-600">Measurable results that reflect our commitment to the community</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="bg-linear-to-br from-[#0A400C] to-[#819067] w-24 h-24 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:shadow-xl transition-all">
                    <achievement.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-3xl font-black text-[#0A400C] mb-2">{achievement.stat}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
      </div>
    </>
  );
};

export default AboutPage;