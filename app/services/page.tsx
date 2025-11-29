"use client";
import Link from "next/link";
import { 
  Ambulance, 
  Droplets, 
  Heart, 
  Utensils, 
  Tent, 
  ArrowRight, 
  Clock, 
  Users,
  CheckCircle,
  Star,
  Shield,
  Phone,
  Lightbulb,
  Warehouse,
  LucideIcon
} from 'lucide-react';
import { JSX } from "react";

// Define TypeScript interfaces
interface ServiceStats {
  served: string;
  response?: string;
  capacity?: string;
  beneficiaries?: string;
  families?: string;
  events?: string;
  lights?: string;
  area?: string;
}

interface Service {
  id: string;
  title: string;
  shortDescription: string;
  icon: JSX.Element;
  features: string[];
  stats: ServiceStats;
  image: string;
  color: string;
  gradient: string;
  url: string;
  emergency?: boolean;
}

interface ServiceCardProps {
  service: Service;
}

const servicesData: Service[] = [
  {
    id: 'ambulance',
    title: 'Emergency Ambulance Service',
    shortDescription: '24/7 emergency medical transportation with trained paramedical staff',
    icon: <Ambulance className="w-8 h-8" />,
    features: ['24/7 Service', 'Trained Staff', 'Life Support Equipment', 'Free for Needy'],
    stats: { served: '10,000+', response: '15-20 mins' },
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/f_auto,q_auto/Ambulance_c1ryp3',
    color: 'from-red-500 to-orange-500',
    gradient: 'bg-gradient-to-br from-red-500/10 to-orange-500/20',
    url: '/services/ambulance',
    emergency: true
  },
  {
    id: 'ro-plant',
    title: 'RO Water Filter Plant',
    shortDescription: 'Clean drinking water for communities through advanced filtration',
    icon: <Droplets className="w-8 h-8" />,
    features: ['RO Technology', 'Quality Testing', 'Free Water', 'Multiple Locations'],
    stats: { served: '25,000+', capacity: '50,000L/day' },
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1744813554/Waterplant.jpg',
    color: 'from-blue-500 to-cyan-500',
    gradient: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/20',
    url: '/services/ro-plant'
  },
  {
    id: 'usher-zakat',
    title: 'Usher & Zakat Distribution',
    shortDescription: 'Islamic charity distribution following Sharia principles',
    icon: <Heart className="w-8 h-8" />,
    features: ['Sharia-compliant', 'Transparent', 'Verified Beneficiaries', 'Monthly'],
    stats: { served: '15,000+', families: '3,000+' },
    image: 'https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: 'from-green-500 to-emerald-500',
    gradient: 'bg-gradient-to-br from-green-500/10 to-emerald-500/20',
    url: '/services/usher-zakat'
  },
  {
    id: 'bartan',
    title: 'Community Kitchen Utensils',
    shortDescription: 'Free utensil service for events and community gatherings',
    icon: <Utensils className="w-8 h-8" />,
    features: ['Complete Sets', 'Hygienic', 'Free Delivery', 'Advance Booking'],
    stats: { served: '8,000+', events: '300+' },
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/v1744813553/tent_qtu8am.jpg',
    color: 'from-purple-500 to-pink-500',
    gradient: 'bg-gradient-to-br from-purple-500/10 to-pink-500/20',
    url: '/services/bartan'
  },
  {
    id: 'street-lights',
    title: 'Street Lights Project',
    shortDescription: 'Illuminating communities for safety and progress',
    icon: <Lightbulb className="w-8 h-8" />,
    features: ['LED Lights', 'Solar Powered', 'Automatic Operation', 'Community Safety'],
    stats: { served: '15,000+', lights: '150+' },
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/f_auto,q_auto/streetlight_xxli9i',
    color: 'from-amber-500 to-yellow-500',
    gradient: 'bg-gradient-to-br from-amber-500/10 to-yellow-500/20',
    url: '/services/street-lights'
  },
  {
    id: 'qabarstan-eid-gha',
    title: 'Qabarstan & Eid Gha',
    shortDescription: 'Serene and well-maintained spaces for prayer and remembrance',
    icon: <Warehouse className="w-8 h-8" />,
    features: ['Clean Maintenance', 'Beautiful Gardens', 'Sound System', 'Washroom Facilities'],
    stats: { served: '20,000+', area: '5 Acres' },
    image: 'https://res.cloudinary.com/dey8xaf7r/image/upload/f_auto,q_auto/Qabarstan_nm52gw',
    color: 'from-gray-500 to-blue-500',
    gradient: 'bg-gradient-to-br from-gray-500/10 to-blue-500/20',
    url: '/services/qabarstan-eid-gha'
  }
];

const ServiceCard = ({ service }: ServiceCardProps) => (
  <Link href={service.url} className="block group">
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden h-full border border-gray-100">
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className={`absolute inset-0 ${service.gradient} opacity-90`}></div>
        
        {/* Emergency Badge */}
        {service.emergency && (
          <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
            🚨 Emergency
          </div>
        )}
        
        {/* Service Icon */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-lg p-3 rounded-2xl text-white border border-white/30">
          {service.icon}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/50 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold text-gray-800 mb-3 leading-tight">{service.title}</h3>
        <p className="text-gray-600 mb-5 leading-relaxed text-lg">{service.shortDescription}</p>
        
        {/* Features */}
        <div className="space-y-3 mb-6">
          {service.features.slice(0, 3).map((feature, index) => (
            <div key={index} className="flex items-center space-x-3">
              <div className="shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-700 text-sm font-medium">{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Stats and CTA */}
        <div className="flex items-center justify-between pt-5 border-t border-gray-100">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-gray-500">
              <Users className="w-4 h-4" />
              <span className="text-sm font-semibold">{service.stats.served}</span>
            </div>
            {service.stats.response && (
              <div className="flex items-center space-x-2 text-gray-500">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-semibold">{service.stats.response}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center text-[#0A400C] font-bold group-hover:translate-x-2 transition-transform duration-300">
            Explore
            <ArrowRight className="w-5 h-5 ml-2" />
          </div>
        </div>
      </div>
    </div>
  </Link>
);

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-green-50/30">
      {/* Enhanced Header */}
      <section className="relative bg-gradient-to-br from-[#0A400C] via-[#1a5c1e] to-[#819067] text-white py-24 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/40"></div>
          <img 
            src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Community Services"
            className="w-full h-full object-cover transform scale-105"
          />
          {/* Floating elements */}
          <div className="absolute top-10 left-10 w-6 h-6 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute top-20 right-20 w-4 h-4 bg-white/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/10 rounded-full animate-float delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full border border-white/20 mb-8">
              <Shield className="w-5 h-5" />
              <span className="font-semibold">Trusted Community Services Since 2019</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Our <span className="text-[#e8f5e9]">Services</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-10">
              Comprehensive community services designed to support and uplift those in need. 
              Each service is crafted with care and commitment to make a real difference.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">6+</div>
                <div className="text-white/80 text-sm">Services</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">50K+</div>
                <div className="text-white/80 text-sm">Lives Impacted</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-white/80 text-sm">Emergency Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-2">100%</div>
                <div className="text-white/80 text-sm">Free Service</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-white/70 text-sm">Scroll to Explore</div>
        </div>
      </section>

      {/* Enhanced Services Grid */}
      <section className="py-20 -mt-10 relative z-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-[#0A400C]/10 px-6 py-3 rounded-full mb-6">
              <Star className="w-5 h-5 text-[#0A400C]" />
              <span className="text-[#0A400C] font-bold text-lg">6 Essential Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
              Serving with <span className="text-[#0A400C]">Excellence</span>
            </h2>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
              From emergency response to community development, our services are designed to 
              address the most pressing needs while maintaining dignity and respect for all.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {servicesData.map((service, index) => (
              <div 
                key={service.id}
                className="transform transition-all duration-500 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>

          {/* Enhanced CTA Section */}
          <div className="relative bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-3xl shadow-2xl overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10 p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                  Need Immediate Assistance?
                </h3>
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  Our team is ready to help you access any of our services. 
                  Contact us now for immediate support or general inquiries.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="flex items-center space-x-4 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-2xl border border-white/20">
                    <Phone className="w-6 h-6" />
                    <div className="text-left">
                      <div className="text-sm text-white/70">Emergency Hotline</div>
                      <div className="text-xl font-bold">+92-300-1234567</div>
                    </div>
                  </div>
                  
                  <button className="bg-white text-[#0A400C] px-10 py-4 rounded-2xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Get Help Now
                  </button>
                </div>
                
                {/* Support Info */}
                <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/70 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>24/7 Emergency Support</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>100% Free Services</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Verified & Trusted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              Our <span className="text-[#0A400C]">Mission</span>
            </h2>
            <p className="text-gray-600 text-xl leading-relaxed">
              &quot;To serve humanity with compassion, dignity, and excellence through comprehensive 
              community services that address both immediate needs and long-term development.&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;