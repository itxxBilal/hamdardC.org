"use client";
import Link from "next/link";
import { Heart, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  // jahan bhi admin ke pages hain
  if (pathname.startsWith("/admin")) {
    return null; // Footer hide
  }

  return (
    <footer className="bg-linear-to-br from-[#0A400C] to-[#819067] text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-lg rounded-xl flex items-center justify-center border border-white/20">
                <img src='/WhiteLogo.svg' className="w-10 h-10 text-[#e8f5e9]" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Hamdard Committee</h3>
                <p className="text-[#e8f5e9] text-sm">Serving Humanity Since 2019</p>
              </div>
            </div>
            <p className="text-[#e8f5e9] text-sm mb-6 leading-relaxed">
              Dedicated to serving our community through charitable work, emergency services,
              and sustainable development initiatives. Making a difference one life at a time.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Facebook className="w-5 h-5 text-[#e8f5e9]" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Twitter className="w-5 h-5 text-[#e8f5e9]" />
              </div>
              <div className="w-10 h-10 bg-white/10 backdrop-blur-lg rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer">
                <Instagram className="w-5 h-5 text-[#e8f5e9]" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-[#e8f5e9] pl-3">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Events
                </Link>
              </li>
              <li>
                <Link href="/volunteers" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Our Volunteers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-[#e8f5e9] pl-3">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services/ambulance" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Ambulance Service
                </Link>
              </li>
              <li>
                <Link href="/services/ro-plant" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  RO Water Plant
                </Link>
              </li>
              <li>
                <Link href="/services/usher-zakat" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Usher & Zakat
                </Link>
              </li>
              <li>
                <Link href="/services/bartan" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Bartan Service
                </Link>
              </li>
              <li>
                <Link href="/services/street-lights" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Street Lights
                </Link>
              </li>
              <li>
                <Link href="/services/qabarstan-eid-gha" className="text-[#e8f5e9] hover:text-white transition-all duration-300 flex items-center group text-sm">
                  <ArrowRight className="w-3 h-3 mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Qabarstan & Eid Gha
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Important Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-white border-l-4 border-[#e8f5e9] pl-3">Get Involved</h4>
            <div className="space-y-4">
              <div className="space-y-3 mb-6">
                <Link href="/donate" className="block w-full bg-white text-[#0A400C] text-center py-3 rounded-xl font-bold hover:bg-[#e8f5e9] transition-all duration-300 transform hover:scale-105 text-sm">
                  Donate Now
                </Link>
                <Link href="/become-volunteer" className="block w-full bg-transparent border-2 border-white text-white text-center py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 transform hover:scale-105 text-sm">
                  Join as Volunteer
                </Link>
                <Link href="/complain" className="block w-full bg-transparent border border-white/40 text-white text-center py-3 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 text-sm">
                  Register Complaint
                </Link>
              </div>

              {/* <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Phone className="w-4 h-4 text-[#e8f5e9] flex-shrink-0" />
                  <span className="text-[#e8f5e9]">+92-310-7591175</span>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <Mail className="w-4 h-4 text-[#e8f5e9] flex-shrink-0" />
                  <span className="text-[#e8f5e9]">hamdardcommitteeofficial@gmail.com</span>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10">
                  <MapPin className="w-4 h-4 text-[#e8f5e9] flex-shrink-0 mt-0.5" />
                  <span className="text-[#e8f5e9] text-sm">Chichawatni, District Sahiwal, Punjab, Pakistan</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Additional Links Row */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">About Sections</h5>
              <div className="space-y-2">
                <Link href="/about/founder" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Founder</Link>
                <Link href="/about/team" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Our Team</Link>
                <Link href="/about/mission" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Mission & Vision</Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Projects</h5>
              <div className="space-y-2">
                <Link href="/projects/marriage-hall" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Marriage Hall</Link>
                <Link href="/projects/dispensary" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Dispensary</Link>
                <Link href="/projects/sports-ground" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Sports Ground</Link>
                <Link href="/projects/model-graveyard-2nd" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Model Graveyard</Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Events</h5>
              <div className="space-y-2">
                <Link href="/events/blood-donation-drive-2020" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Blood Donation</Link>
                <Link href="/events/medical-camp-2024" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Medical Camp</Link>
              </div>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-3 text-sm">Resources</h5>
              <div className="space-y-2">
                <Link href="/news" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">News</Link>
                <Link href="/gallery" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Gallery</Link>
                <Link href="/reports" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Reports</Link>
                <Link href="/notifications" className="block text-[#e8f5e9] hover:text-white transition-colors text-xs">Notifications</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#0A400C] border-t border-[#819067]/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-[#e8f5e9] text-sm">
                © 2025 Hamdard Committee. All rights reserved.
              </p>
              <p className="text-[#e8f5e9]/80 text-xs mt-1">
                Khidmat ka safar, insaniyat ke liye
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-[#e8f5e9] text-sm">
                Developed By{' '}
                <a
                  href="https://itx-bilal.site"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-[#e8f5e9] transition-colors underline"
                >
                  Muhammad Bilal
                </a>
              </div>

              <div className="flex space-x-4">
                <Link href="/privacy" className="text-[#e8f5e9] hover:text-white text-xs transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-[#e8f5e9] hover:text-white text-xs transition-colors">
                  Terms of Service
                </Link>
                <Link href="/contact" className="text-[#e8f5e9] hover:text-white text-xs transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;