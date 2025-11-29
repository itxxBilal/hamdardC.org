"use client";
import Link from "next/link";
import { ArrowLeft, Target, Eye, Heart, Users, Shield, CheckCircle, Star, Award, Globe } from 'lucide-react';


const MissionPage = () => {
  const missionData = {
    mission: {
      title: 'Our Mission',
      description: 'To serve humanity with compassion, integrity, and excellence by providing essential services and empowering communities through sustainable development initiatives.',
      icon: Target,
      points: [
        'Provide immediate relief through emergency services',
        'Ensure access to clean water and healthcare',
        'Empower communities through education and training',
        'Promote sustainable development practices',
        'Foster inter-community harmony and cooperation'
      ]
    },
    vision: {
      title: 'Our Vision',
      description: 'To create a self-reliant, empowered society where every individual has access to basic necessities, opportunities for growth, and lives with dignity and hope.',
      icon: Eye,
      points: [
        'A community free from water and healthcare disparities',
        'Sustainable development models replicated nationwide',
        'Youth empowered as agents of positive change',
        'Transparent and accountable humanitarian service',
        'A beacon of hope for underprivileged communities'
      ]
    },
    values: [
      {
        title: 'Compassion',
        description: 'We serve with empathy and genuine care for every individual',
        icon: Heart,
        color: 'from-red-500 to-pink-600'
      },
      {
        title: 'Integrity',
        description: 'We maintain transparency and honesty in all our actions',
        icon: Shield,
        color: 'from-blue-500 to-cyan-600'
      },
      {
        title: 'Excellence',
        description: 'We strive for the highest standards in service delivery',
        icon: Star,
        color: 'from-amber-500 to-orange-600'
      },
      {
        title: 'Unity',
        description: 'We believe in the power of collective action and community',
        icon: Users,
        color: 'from-green-500 to-emerald-600'
      }
    ],
    objectives: [
      {
        category: 'Healthcare',
        goals: [
          'Operate 24/7 ambulance service across Chichawatni',
          'Establish free medical camps in remote areas',
          'Provide emergency medical assistance',
          'Promote health awareness programs'
        ],
        progress: 85
      },
      {
        category: 'Water & Sanitation',
        goals: [
          'Install RO water plants in underserved areas',
          'Ensure clean drinking water accessibility',
          'Promote hygiene and sanitation awareness',
          'Maintain sustainable water infrastructure'
        ],
        progress: 75
      },
      {
        category: 'Community Development',
        goals: [
          'Provide educational support to underprivileged children',
          'Offer skill development programs for youth',
          'Support women empowerment initiatives',
          'Facilitate community building activities'
        ],
        progress: 65
      },
      {
        category: 'Emergency Relief',
        goals: [
          'Quick response to natural disasters',
          'Distribution of essential supplies',
          'Temporary shelter provision',
          'Rehabilitation support programs'
        ],
        progress: 90
      }
    ],
    impact: {
      volunteers: '500+',
      familiesServed: '10,000+',
      projectsCompleted: '50+',
      communitiesReached: '25+'
    }
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
        <section className="bg-linear-to-br from-[#0A400C] to-[#819067] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8">
              <Globe className="w-6 h-6" />
              <span className="font-semibold">Serving Humanity Since 2019</span>
            </div>
            <h1 className="text-5xl sm:text-6xl font-black mb-6">Our Mission & Vision</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Guided by compassion and driven by purpose, we are committed to creating lasting positive change 
              in our communities through sustainable development and humanitarian service.
            </p>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Mission Card */}
              <div className="bg-linear-to-br from-[#0A400C] to-[#819067] rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Target className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black">Our Mission</h2>
                </div>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {missionData.mission.description}
                </p>
                <div className="space-y-4">
                  {missionData.mission.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/80 shrink-0" />
                      <span className="text-white/90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Vision Card */}
              <div className="bg-linear-to-br from-[#819067] to-[#0A400C] rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Eye className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-black">Our Vision</h2>
                </div>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  {missionData.vision.description}
                </p>
                <div className="space-y-4">
                  {missionData.vision.points.map((point, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-white/80 shrink-0" />
                      <span className="text-white/90">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-800 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide every decision we make and every action we take
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {missionData.values.map((value, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className={`bg-linear-to-r ${value.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Objectives & Progress */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-800 mb-4">Strategic Objectives</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our focused approach to creating meaningful impact across key areas of community development
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {missionData.objectives.map((objective, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-black text-[#0A400C]">{objective.category}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-black text-[#0A400C]">{objective.progress}%</div>
                      <div className="text-sm text-gray-600">Progress</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
                    <div 
                      className="bg-linear-to-r from-[#0A400C] to-[#819067] h-3 rounded-full transition-all duration-1000"
                      style={{ width: `${objective.progress}%` }}
                    ></div>
                  </div>
                  <div className="space-y-3">
                    {objective.goals.map((goal, goalIndex) => (
                      <div key={goalIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#0A400C] shrink-0" />
                        <span className="text-gray-700">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-20 bg-linear-to-br from-[#0A400C] to-[#819067] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black mb-4">Our Impact</h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Making a tangible difference in the lives of thousands through dedicated service
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{missionData.impact.volunteers}</div>
                <div className="text-white/80">Dedicated Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{missionData.impact.familiesServed}</div>
                <div className="text-white/80">Families Served</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{missionData.impact.projectsCompleted}</div>
                <div className="text-white/80">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2">{missionData.impact.communitiesReached}</div>
                <div className="text-white/80">Communities Reached</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-linear-to-r from-[#0A400C] to-[#819067] rounded-3xl p-12 text-white">
              <Award className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl font-black mb-6">Join Our Mission</h3>
              <p className="text-xl text-white/90 leading-relaxed mb-8">
                Together, we can create lasting change and build a better future for our communities. 
                Your support makes our mission possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/membership"
                  className="bg-white text-[#0A400C] px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors duration-200"
                >
                  Become a Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-[#0A400C] transition-colors duration-200"
                >
                  Support Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MissionPage;