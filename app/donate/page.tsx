"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from 'react';

import { 
  Heart, 
  Users, 
  Shield, 
  CheckCircle, 
  Copy,
  ArrowRight,
  Star,
  Receipt,
  Sparkles,
  TrendingUp,
  Clock,
  UserCheck,
  Check,
  MessageCircle,
  Phone} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface Donor {
  id: string;
  name: string;
  amount: number;
  donation_for: string;
  custom_type?: string;
  created_at: string;
  is_anonymous: boolean;
}

const DonatePage = () => {
  const [recentDonors, setRecentDonors] = useState<Donor[]>([]);
  const [loading, setLoading] = useState(true);
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [currentDonorIndex, setCurrentDonorIndex] = useState(0);
  const donorTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    fetchRecentDonors();
  }, []);

  // Auto slider for single donor
  useEffect(() => {
    if (recentDonors.length > 0) {
      donorTimeoutRef.current = setInterval(() => {
        setCurrentDonorIndex((prev) => (prev + 1) % recentDonors.length);
      }, 3000);
    }

    return () => {
      if (donorTimeoutRef.current) {
        clearInterval(donorTimeoutRef.current);
      }
    };
  }, [recentDonors.length]);

  const fetchRecentDonors = async () => {
    try {
      const { data, error } = await supabase
        .from('recent_donors')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false })
        .limit(15);

      if (error) throw error;
      setRecentDonors(data || []);
    } catch (error) {
      console.error('Error fetching donors:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const bankInfo = [
    {
      bank: 'HBL (Habib Bank Limited)',
      accountNumber: '23827000583303',
      accountHolder: 'Maqbool & Muddsar',
      type: 'bank_transfer',
      icon: '🏦',
      branch: 'Main Branch',
      iban: 'PK00HABB0001234567890123'
    },
    {
      bank: 'JazzCash',
      accountNumber: '03058880172',
      accountHolder: 'Muhammad Bilal',
      type: 'jazzcash',
      icon: '📱',
      branch: 'Mobile Account',
      iban: 'N/A'
    }
  ];


  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat('en-PK', {
      style: 'currency',
      currency: 'PKR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    if (diffInHours < 168) return `${Math.floor(diffInHours / 24)}d ago`;
    return date.toLocaleDateString('en-PK', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getFormattedDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-PK', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const DonorCard = ({ donor, index }: { donor: Donor; index: number }) => (
    <div className="bg-gradient-to-br from-white to-green-50 border-2 border-green-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#0A400C]/30 group">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-[#0A400C] to-[#819067] text-white rounded-xl flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform duration-300">
            {donor.is_anonymous ? '🙏' : donor.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="font-bold text-gray-800 text-lg">
              {donor.is_anonymous ? 'Anonymous Hero' : donor.name}
            </p>
            <p className="text-sm text-gray-600 flex items-center space-x-1">
              <Clock className="w-3 h-3" />
              <span>{getTimeAgo(donor.created_at)}</span>
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="font-black text-[#0A400C] text-xl">
            {formatAmount(donor.amount)}
          </p>
          <div className="flex items-center space-x-1 justify-end mt-1">
            <span className="text-xs text-gray-600 bg-green-100 px-2 py-1 rounded-full">
              {donor.donation_for}
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-green-100 pt-4 mt-4">
        <p className="text-center text-green-700 font-semibold text-sm">
          جزاك الله خيراً <span className="text-lg">🌟</span>
        </p>
      </div>
    </div>
  );

  const currentDonor = recentDonors[currentDonorIndex];

  return (
    <>
   
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section with Single Donor Slider */}
        <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-20 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 text-6xl">🤲</div>
            <div className="absolute top-20 right-20 text-4xl">❤️</div>
            <div className="absolute bottom-20 left-20 text-5xl">🌟</div>
            <div className="absolute bottom-10 right-10 text-6xl">🙏</div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-semibold">Make a Difference</span>
                </div>
                <h1 className="text-5xl sm:text-6xl font-black mb-6 leading-tight">
                  Donate With 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-100">
                    Purpose
                  </span>
                </h1>
                <p className="text-xl text-white/90 max-w-2xl mb-8">
                  Your donation transforms lives. Support our humanitarian work and be part of meaningful change in our community.
                </p>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                  <div className="text-center">
                    <div className="text-2xl font-black">50K+</div>
                    <div className="text-white/70 text-sm">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">28</div>
                    <div className="text-white/70 text-sm">Active Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-black">100%</div>
                    <div className="text-white/70 text-sm">Transparent</div>
                  </div>
                </div>
              </div>

              {/* Single Donor Spotlight */}
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold flex items-center space-x-2">
                    <UserCheck className="w-6 h-6" />
                    <span>Recent Hero</span>
                  </h2>
                  <div className="flex items-center space-x-2 text-white/70">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">
                      {currentDonor ? getFormattedDateTime(currentDonor.created_at) : 'Loading...'}
                    </span>
                  </div>
                </div>

                {loading ? (
                  <div className="flex justify-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                  </div>
                ) : currentDonor ? (
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold border-4 border-white/30">
                      {currentDonor.is_anonymous ? '🙏' : currentDonor.name.charAt(0).toUpperCase()}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2">
                      {currentDonor.is_anonymous ? 'Anonymous Hero' : currentDonor.name}
                    </h3>
                    
                    <div className="text-3xl font-black text-yellow-300 mb-4">
                      {formatAmount(currentDonor.amount)}
                    </div>
                    
                    <div className="bg-white/10 rounded-xl p-4 mb-4">
                      <p className="text-white/80 text-sm mb-2">Donated for</p>
                      <p className="text-lg font-semibold">{currentDonor.donation_for}</p>
                      {currentDonor.custom_type && (
                        <p className="text-white/70 text-sm mt-1">{currentDonor.custom_type}</p>
                      )}
                    </div>

                    <div className="flex justify-center space-x-2 mb-6">
                      {recentDonors.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setCurrentDonorIndex(index);
                            if (donorTimeoutRef.current) {
                              clearInterval(donorTimeoutRef.current);
                            }
                          }}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentDonorIndex === index ? 'bg-white w-6' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="border-t border-white/20 pt-4">
                      <p className="text-yellow-300 font-semibold text-lg mb-2">
                        جزاك الله خيراً
                      </p>
                      <p className="text-white/70 text-sm">May Allah reward you abundantly</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-white/70">
                    <Heart className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p>Be the first to make a difference!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Hadith on Charity Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-amber-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white rounded-3xl shadow-xl p-8 border-2 border-yellow-200">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-yellow-600" />
                </div>
              </div>
              <h2 className="text-3xl font-black text-gray-800 mb-6">Hadith on Charity</h2>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed mb-6">
                "The believer's shade on the Day of Resurrection will be his charity."
              </blockquote>
              <p className="text-yellow-600 font-semibold">- Al-Tirmidhi</p>
              <div className="mt-6 text-sm text-gray-600">
                <p>Your charity today becomes your shade tomorrow</p>
              </div>
            </div>
          </div>
        </section>

        {/* Donation Methods Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                Donation Methods
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Support our humanitarian work through secure banking channels. All donations are 100% transparent.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {bankInfo.map((bank, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-3xl shadow-2xl p-8 border-2 border-green-100 hover:border-[#0A400C] transition-all duration-500 group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-4xl">{bank.icon}</div>
                      <div>
                        <h3 className="text-2xl font-black text-gray-800">{bank.bank}</h3>
                        <p className="text-gray-600">{bank.branch}</p>
                      </div>
                    </div>
                    <div className="bg-green-100 text-[#0A400C] px-3 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Account Holder
                      </label>
                      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                        <p className="font-bold text-lg text-gray-800">{bank.accountHolder}</p>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-600 mb-2">
                        Account Number
                      </label>
                      <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm group-hover:bg-green-50 transition-colors">
                        <span className="font-mono text-lg font-bold text-gray-800">{bank.accountNumber}</span>
                        <button
                          onClick={() => copyToClipboard(bank.accountNumber, `${bank.type}_account`)}
                          className="text-[#0A400C] hover:text-[#0A400C]/80 transition-colors p-2 hover:bg-white rounded-lg"
                        >
                          <Copy className="w-5 h-5" />
                        </button>
                      </div>
                      {copiedField === `${bank.type}_account` && (
                        <p className="text-green-600 text-sm mt-2 flex items-center space-x-1">
                          <Check className="w-4 h-4" />
                          <span>Copied to clipboard!</span>
                        </p>
                      )}
                    </div>

                    {bank.iban && bank.iban !== 'N/A' && (
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                          IBAN
                        </label>
                        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                          <span className="font-mono text-sm font-bold text-gray-800">{bank.iban}</span>
                          <button
                            onClick={() => copyToClipboard(bank.iban, `${bank.type}_iban`)}
                            className="text-[#0A400C] hover:text-[#0A400C]/80 transition-colors p-2 hover:bg-white rounded-lg"
                          >
                            <Copy className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2 flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4" />
                      <span>Transfer Instructions</span>
                    </h4>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• Use any bank app or visit branch</li>
                      <li>• Keep transaction receipt safe</li>
                      <li>• Contact us after transfer</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact for Donation */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Need Help with Donation?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Our team is here to assist you with the donation process. Contact us for any questions or assistance.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-[#0A400C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Contact Us for Donation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Our Generous Donors Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                Our Generous Donors
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Join these amazing individuals and organizations making a difference in our community.
              </p>
            </div>

            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A400C]"></div>
              </div>
            ) : recentDonors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {recentDonors.map((donor, index) => (
                  <DonorCard key={donor.id} donor={donor} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-12 h-12 text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">No Donors Yet</h3>
                <p className="text-gray-500">Be the first to make an impact in our community!</p>
              </div>
            )}

            {recentDonors.length > 0 && (
              <div className="text-center mt-12">
                <Link
                  href="/reports"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#0A400C] to-[#819067] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all duration-300"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>View Financial Reports</span>
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* Other Ways to Help Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-gray-800 mb-4">
                Other Ways to Help
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your support comes in many forms. Explore other ways to contribute to our mission.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-to-br from-green-50 to-white rounded-3xl border-2 border-green-100 hover:border-[#0A400C] transition-all duration-300">
                <div className="w-16 h-16 bg-[#0A400C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Become a Volunteer</h3>
                <p className="text-gray-600 mb-6">
                  Join our team of dedicated volunteers and make a hands-on impact in your community.
                </p>
                <Link
                  href="/become-volunteer"
                  className="inline-flex items-center space-x-2 text-[#0A400C] font-semibold hover:text-[#0A400C]/80 transition-colors"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-blue-100 hover:border-[#0A400C] transition-all duration-300">
                <div className="w-16 h-16 bg-[#0A400C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">View Projects</h3>
                <p className="text-gray-600 mb-6">
                  Explore our ongoing projects and see how your support creates real change.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 text-[#0A400C] font-semibold hover:text-[#0A400C]/80 transition-colors"
                >
                  <span>Explore Projects</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-white rounded-3xl border-2 border-purple-100 hover:border-[#0A400C] transition-all duration-300">
                <div className="w-16 h-16 bg-[#0A400C] rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Spread the Word</h3>
                <p className="text-gray-600 mb-6">
                  Share our mission with your network and help us reach more people in need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 text-[#0A400C] font-semibold hover:text-[#0A400C]/80 transition-colors"
                >
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-black text-gray-800 mb-16">Your Trust is Our Priority</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-[#0A400C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">100% Transparent</h3>
                <p className="text-gray-600">
                  Regular financial reports, audits, and updates ensure complete transparency in all operations.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-[#0A400C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Verified NGO</h3>
                <p className="text-gray-600">
                  Fully registered and certified organization with proven track record of humanitarian work.
                </p>
              </div>
              
              <div className="text-center p-8 bg-white rounded-3xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Receipt className="w-10 h-10 text-[#0A400C]" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Tax Benefits</h3>
                <p className="text-gray-600">
                  All donations are eligible for tax exemptions under Pakistani law.
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="mt-16 bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
              <p className="text-white/90 mb-6 text-lg">
                Your support can transform lives. Choose your preferred donation method and become a hero today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 bg-white text-[#0A400C] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  <span>Contact for Donation</span>
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center space-x-2 bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-all duration-300"
                >
                  <span>Learn About Projects</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DonatePage;