import Link from "next/link";
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { 
  ArrowRight, 
  Heart, 
  Users, 
  Target, 
  Award, 
  Star, 
  UserPlus
} from 'lucide-react';

// Static data for Hero Section
const impactStats = [
  { 
    icon: <Users className="w-6 h-6" />, 
    number: "50K+", 
    label: "Lives Transformed",
    description: "Families empowered through sustainable programs",
    gradient: "from-blue-500 to-cyan-500"
  },
  { 
    icon: <Target className="w-6 h-6" />, 
    number: "28", 
    label: "Active Projects",
    description: "Ongoing initiatives across multiple sectors",
    gradient: "from-green-500 to-emerald-500"
  },
  { 
    icon: <Heart className="w-6 h-6" />, 
    number: "500+", 
    label: "Dedicated Volunteers",
    description: "Compassionate hearts serving communities",
    gradient: "from-red-500 to-pink-500"
  },
  { 
    icon: <Award className="w-6 h-6" />, 
    number: "75+", 
    label: "Communities Served",
    description: "Villages and towns impacted positively",
    gradient: "from-purple-500 to-indigo-500"
  }
];

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
  isMobile: boolean;
}

export default function HeroSection({ scrollToSection, isMobile }: HeroSectionProps) {
  // Optimized tilt configurations
  const tiltOptions = {
    max: isMobile ? 5 : 15,
    scale: isMobile ? 1.02 : 1.05,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.2,
    gyroscope: false
  };

  const subtleTiltOptions = {
    max: isMobile ? 3 : 10,
    scale: isMobile ? 1.01 : 1.02,
    speed: 1000,
    glare: !isMobile,
    "max-glare": 0.1,
    gyroscope: false
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Optimized button component
  const AnimatedButton = ({ 
    children, 
    onClick, 
    className = "",
    variant = "primary"
  }: {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: "primary" | "secondary";
  }) => {
    const buttonClass = variant === "primary" 
      ? "group relative bg-white text-[#0A400C] px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-[#e8f5e9] transition-all duration-500 font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl flex items-center justify-center overflow-hidden"
      : "group bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-white/20 transition-all duration-500 font-bold text-base sm:text-lg border-2 border-white/60 hover:border-white/90 backdrop-blur-lg flex items-center justify-center shadow-lg hover:shadow-xl";

    return (
      <motion.button
        onClick={onClick}
        className={`${buttonClass} ${className}`}
        whileHover={!isMobile ? { scale: 1.05 } : {}}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {variant === "primary" && (
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        )}
        {children}
      </motion.button>
    );
  };

  return (
    <section id="home" className="relative pt-20 min-h-screen flex items-center overflow-hidden bg-linear-to-br from-[#0A400C] via-[#1a5c1f] to-[#819067]">
      {/* Background Image with Proper Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Community service and helping hands - Hamdard Committee humanitarian work"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div className="absolute inset-0 bg-[#0A400C]/30 z-20"></div>
      </div>

      {/* Optimized Floating Particles - Reduced count on mobile */}
      <div className="absolute inset-0 z-30 overflow-hidden">
        {[...Array(isMobile ? 8 : 15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-40">
        <motion.div 
          className="max-w-6xl mx-auto"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          {/* Enhanced Trust Badge */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8 sm:mb-12"
            variants={fadeInUp}
          >
            <Tilt {...subtleTiltOptions}>
              <div className="inline-flex items-center bg-white/20 backdrop-blur-lg px-4 sm:px-6 py-3 sm:py-4 rounded-2xl border border-white/30 shadow-xl sm:shadow-2xl">
                <div className="flex items-center space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-lg">Rated 4.9/5 by Community</p>
                  <p className="text-white/80 text-xs sm:text-sm">Trusted by 10,000+ donors worldwide</p>
                </div>
              </div>
            </Tilt>
            
            <Tilt {...subtleTiltOptions}>
              <div className="inline-flex items-center bg-[#e8f5e9]/30 backdrop-blur-lg px-4 sm:px-5 py-2 sm:py-3 rounded-2xl border border-white/30 shadow-lg">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse mr-2 sm:mr-3"></div>
                <div>
                  <p className="text-white font-semibold text-sm sm:text-lg">Since June 2019</p>
                  <p className="text-white/80 text-xs sm:text-sm">Serving humanity with compassion</p>
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Enhanced Main Heading */}
          <motion.div className="mb-8 sm:mb-12" variants={fadeInUp}>
            <motion.div 
              className="inline-block bg-linear-to-r from-[#e8f5e9] to-white/90 px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8 shadow-lg"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-[#0A400C] font-bold text-xs sm:text-sm tracking-wide">نیکی کا سفر، انسانیت کے لیے</p>
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 sm:mb-8 leading-tight"
              variants={fadeInUp}
            >
              <span className="block bg-linear-to-r from-white via-[#e8f5e9] to-white bg-clip-text text-transparent pb-2">
                Khidmat
              </span>
              <span className="block text-[#e8f5e9] mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light">
                ka safar,
              </span>
              <span className="block bg-linear-to-r from-[#FFD700] via-[#FFEC8B] to-[#FFD700] bg-clip-text text-transparent mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                insaniyat ke liye
              </span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl lg:text-2xl text-white/95 mb-6 sm:mb-8 max-w-4xl leading-relaxed font-medium" variants={fadeInUp}>
              Empowering communities through sustainable solutions in{' '}
              <span className="text-[#FFD700] font-bold bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-xl border border-white/30">education</span>,{' '}
              <span className="text-[#FFD700] font-bold bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-xl border border-white/30">healthcare</span>, and{' '}
              <span className="text-[#FFD700] font-bold bg-white/20 px-3 sm:px-4 py-1 sm:py-2 rounded-xl border border-white/30">emergency relief</span>.
            </motion.p>

            <motion.p className="text-base sm:text-lg lg:text-xl text-white/90 max-w-3xl leading-relaxed mb-6 sm:mb-8 font-light" variants={fadeInUp}>
              Join us in creating lasting change. Every contribution helps build a better tomorrow for those in need through compassion and sustainable development.
            </motion.p>
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-16 sm:mb-20" variants={fadeInUp}>
            <Tilt {...tiltOptions}>
              <AnimatedButton
                onClick={() => scrollToSection('donate')}
                variant="primary"
                className="w-full sm:w-auto"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                Make a Difference Today
                <ArrowRight className="ml-2 sm:ml-3 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </AnimatedButton>
            </Tilt>
            
            <Tilt {...tiltOptions}>
              <motion.div
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/become-volunteer"
                  className="group bg-transparent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl hover:bg-white/20 transition-all duration-500 font-bold text-base sm:text-lg border-2 border-white/60 hover:border-white/90 backdrop-blur-lg flex items-center justify-center w-full sm:w-auto shadow-lg hover:shadow-xl"
                >
                  <UserPlus className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                  Join as Volunteer
                </Link>
              </motion.div>
            </Tilt>
          </motion.div>

          {/* Enhanced Impact Statistics */}
          <motion.div 
            className="bg-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/30 shadow-xl sm:shadow-2xl"
            variants={fadeInUp}
          >
            <div className="text-center mb-6 sm:mb-8 lg:mb-12">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Our Impact in Numbers</h3>
              <p className="text-white/90 text-base sm:text-lg lg:text-xl">Real change, measurable results across communities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {impactStats.map((stat, index) => (
                <Tilt key={index} {...tiltOptions}>
                  <motion.div 
                    className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 hover:bg-white/20 transition-all duration-500 group cursor-pointer border border-white/20 backdrop-blur-lg"
                    whileHover={!isMobile ? { scale: 1.05, y: -5 } : {}}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-linear-to-br ${stat.gradient} rounded-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <div className="text-white">
                        {stat.icon}
                      </div>
                    </div>
                    <p className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1 sm:mb-2 bg-linear-to-br from-white to-[#e8f5e9] bg-clip-text text-transparent">{stat.number}</p>
                    <p className="text-base sm:text-lg lg:text-xl font-semibold text-[#FFD700] mb-1 sm:mb-2">{stat.label}</p>
                    <p className="text-white/80 text-xs sm:text-sm lg:text-base leading-relaxed">{stat.description}</p>
                  </motion.div>
                </Tilt>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <button
          onClick={() => scrollToSection('mission')}
          className="text-white/90 hover:text-white transition-colors group"
          aria-label="Scroll to mission section"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs sm:text-sm font-medium tracking-wider group-hover:scale-110 transition-transform">Discover More</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/60 rounded-full flex justify-center group-hover:border-white/90 transition-colors">
              <div className="w-1 h-2 sm:h-3 bg-white/80 rounded-full mt-2 animate-pulse group-hover:bg-white"></div>
            </div>
          </div>
        </button>
      </motion.div>
    </section>
  );
}