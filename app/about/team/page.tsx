import Link from "next/link";
import { ArrowLeft, Users, Award, Heart, Shield, Droplets, Ambulance, Book, Utensils, Target, Calendar } from 'lucide-react';
// import LeadershipCard from './components/LeadershipCard';

const TeamPage = () => {
  const departments = [
    {
      name: 'Finance',
      description: 'Managing financial resources and ensuring transparency in all transactions.',
      icon: Shield,
      chairman: 'Zafar Iqbal',
      viceChairman: 'Muhammad Kamran',
      teamMembers: [
        'Muhammad Awais',
        'Muhammad Tabraiz',
        'Usman Gill'
      ],
      color: 'blue'
    },
    {
      name: 'Ambulance',
      description: 'Providing 24/7 emergency medical transportation services to the community.',
      icon: Ambulance,
      chairman: 'Abdul Jabbar',
      viceChairman: 'Dr. Ali Ahmad',
      teamMembers: [
        'Munair Ahmad',
        'Muhammad Awais',
        'Muhammad Javed',
        'Wajid Ali'
      ],
      color: 'red'
    },
    {
      name: 'Eid Gha',
      description: 'Managing and maintaining the Eid prayer grounds for the community.',
      icon: Calendar,
      chairman: 'Muhammad Yaseen',
      viceChairman: 'Abdul Rasheed',
      teamMembers: [
        'Muhammad Umar',
        'Ghulam Hussain',
        'Rana Waqar',
        'Maqbool Ahmad'
      ],
      color: 'green'
    },
    {
      name: 'School',
      description: 'Providing quality education to underprivileged children in our community.',
      icon: Book,
      chairman: 'Muhammad Tabraiz',
      viceChairman: 'Zafar Iqbal',
      teamMembers: [
        'Abdul Rasheed',
        'Shahbaz Tahiri',
        'Dr. Ali Ahmad',
        'Haji Saif',
        'Muhammad Kamran'
      ],
      color: 'purple'
    },
    {
      name: 'Bartan (Utensils)',
      description: 'Managing community utensils service for various events and gatherings.',
      icon: Utensils,
      chairman: 'Shahbaz Tahiri',
      viceChairman: 'Sharif Shakir',
      teamMembers: [
        'Muhammad Yaseen',
        'Abdul Jabbar',
        'Khalil Ahmad'
      ],
      color: 'orange'
    },
    {
      name: 'Water Filter',
      description: 'Ensuring clean drinking water access for the community through filtration plants.',
      icon: Droplets,
      chairman: 'Abdul Rasheed',
      viceChairman: 'Abdul Jabbar',
      teamMembers: [
        'Ghulam Hussain',
        'Muhammad Yaseen',
        'Khalil Ahmad',
        'Muhammad Umar',
        'Dr. Ali Ahmad'
      ],
      color: 'cyan'
    },
    {
      name: 'Usher',
      description: 'Managing and distributing Usher funds to support community welfare.',
      icon: Heart,
      chairman: 'Muhammad Kamran',
      viceChairman: 'Usman Gill',
      teamMembers: [
        'Maqbool Ahmad',
        'Munir Ahmad',
        'Haji Saif',
        'Muhammad Tabraiz'
      ],
      color: 'emerald'
    },
    {
      name: 'New Planning',
      description: 'Developing and implementing new initiatives for community development.',
      icon: Target,
      chairman: 'Dr. Ali Ahmad',
      viceChairman: 'Zafar Iqbal',
      teamMembers: [
        'Usman Gul',
        'Muhammad Awais',
        'Wajid Ali',
        'Rana Waqar',
        'Muhammad Tabraiz'
      ],
      color: 'indigo'
    }
  ];

  const colorClasses = {
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', darkBg: 'bg-blue-500' },
    red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-600', darkBg: 'bg-red-500' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', darkBg: 'bg-green-500' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', darkBg: 'bg-purple-500' },
    orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-600', darkBg: 'bg-orange-500' },
    cyan: { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-600', darkBg: 'bg-cyan-500' },
    emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600', darkBg: 'bg-emerald-500' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', darkBg: 'bg-indigo-500' }
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
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6">
            Our <span className="text-[#e8f5e9]">Teams</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated teams working across various departments to serve our community. 
            Each team plays a vital role in making our mission a reality.
          </p>
        </div>
      </section>

      {/* Department Stats */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#0A400C]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#0A400C]" />
              </div>
              <div className="text-3xl font-black text-[#0A400C] mb-2">{departments.length}</div>
              <div className="text-gray-600 font-semibold">Departments</div>
            </div>
            <div className="text-center">
              <div className="bg-[#0A400C]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#0A400C]" />
              </div>
              <div className="text-3xl font-black text-[#0A400C] mb-2">16+</div>
              <div className="text-gray-600 font-semibold">Team Leaders</div>
            </div>
            <div className="text-center">
              <div className="bg-[#0A400C]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#0A400C]" />
              </div>
              <div className="text-3xl font-black text-[#0A400C] mb-2">30+</div>
              <div className="text-gray-600 font-semibold">Team Members</div>
            </div>
            <div className="text-center">
              <div className="bg-[#0A400C]/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-[#0A400C]" />
              </div>
              <div className="text-3xl font-black text-[#0A400C] mb-2">7</div>
              <div className="text-gray-600 font-semibold">Core Services</div>
            </div>
          </div>
        </div>
      </section>

      {/* All Departments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
              Our <span className="text-[#0A400C]">Departments</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized teams working together to deliver comprehensive community services
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {departments.map((dept, index) => {
              const color = colorClasses[dept.color as keyof typeof colorClasses];
              return (
                <div 
                  key={index}
                  className={`bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${color.border} overflow-hidden group`}
                >
                  {/* Department Header */}
                  <div className={`${color.bg} p-6 border-b ${color.border}`}>
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 ${color.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <dept.icon className={`w-6 h-6 ${color.text}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-gray-800">{dept.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{dept.teamMembers.length} Team Members</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{dept.description}</p>
                  </div>

                  {/* Leadership */}
                  <div className="p-6 border-b border-gray-100">
                    <h4 className="font-semibold text-gray-800 mb-3">Leadership</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Chairman:</span>
                        <span className="font-semibold text-gray-800">{dept.chairman}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Vice Chairman:</span>
                        <span className="font-semibold text-gray-800">{dept.viceChairman}</span>
                      </div>
                    </div>
                  </div>

                  {/* Team Members */}
                  <div className="p-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Team Members</h4>
                    <div className="space-y-2">
                      {dept.teamMembers.map((member, memberIndex) => (
                        <div key={memberIndex} className="flex items-center space-x-3">
                          <div className={`w-2 h-2 rounded-full ${color.darkBg}`}></div>
                          <span className="text-sm text-gray-700">{member}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Department Footer */}
                  <div className={`${color.bg} px-6 py-4 border-t ${color.border}`}>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-gray-700">Active Department</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-gray-600">Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Personnel Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gray-800 mb-4">
              Key <span className="text-[#0A400C]">Personnel</span>
            </h2>
            <p className="text-xl text-gray-600">
              Our dedicated leaders who oversee multiple departments and ensure coordinated service delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Dr. Ali Ahmad */}
            <div className="bg-linear-to-br from-[#0A400C] to-[#819067] rounded-3xl p-6 text-white text-center">
              <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-black mb-2">Dr. Ali Ahmad</h3>
              <p className="text-white/80 text-sm mb-4">Founder & Multi-Department Leader</p>
              <div className="space-y-1 text-sm">
                <p>• Chairman: New Planning</p>
                <p>• Vice Chairman: Ambulance</p>
                <p>• Team Member: School, Water Filter</p>
              </div>
            </div>

            {/* Zafar Iqbal */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-blue-200 text-center">
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2">Zafar Iqbal</h3>
              <p className="text-gray-600 text-sm mb-4">Finance & Planning Expert</p>
              <div className="space-y-1 text-sm text-gray-700">
                <p>• Chairman: Finance</p>
                <p>• Vice Chairman: School, New Planning</p>
              </div>
            </div>

            {/* Muhammad Kamran */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border-2 border-emerald-200 text-center">
              <div className="w-20 h-20 bg-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-xl font-black text-gray-800 mb-2">Muhammad Kamran</h3>
              <p className="text-gray-600 text-sm mb-4">Operations & Usher Management</p>
              <div className="space-y-1 text-sm text-gray-700">
                <p>• Chairman: Usher</p>
                <p>• Vice Chairman: Finance</p>
                <p>• Team Member: School</p>
              </div>
            </div>
          </div>

          {/* Additional Key Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { name: 'Abdul Jabbar', roles: ['Ambulance Chairman', 'Water Filter VC'], color: 'red' },
              { name: 'Muhammad Tabraiz', roles: ['School Chairman', 'Finance Team'], color: 'purple' },
              { name: 'Abdul Rasheed', roles: ['Water Filter Chairman', 'Eid Gha VC'], color: 'cyan' },
              { name: 'Shahbaz Tahiri', roles: ['Bartan Chairman', 'School Team'], color: 'orange' }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-2xl p-4 shadow-md border border-gray-200 text-center">
                <h4 className="font-semibold text-gray-800 mb-2">{person.name}</h4>
                <div className="space-y-1 text-xs text-gray-600">
                  {person.roles.map((role, roleIndex) => (
                    <p key={roleIndex}>• {role}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Collaboration */}
      <section className="py-20 bg-linear-to-r from-[#0A400C] to-[#819067] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-4xl font-black mb-6">Collaborative Excellence</h3>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Our strength lies in the seamless collaboration between departments. 
            From emergency response to long-term planning, our teams work together 
            to ensure comprehensive community service delivery.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-black mb-2">24/7</div>
              <div className="text-white/80">Emergency Services</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">100%</div>
              <div className="text-white/80">Transparent Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-black mb-2">30+</div>
              <div className="text-white/80">Dedicated Professionals</div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default TeamPage;