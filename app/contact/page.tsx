// src/pages/ContactPage/ContactPage.tsx
"use client";


import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Ambulance, 
  Building,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSubmitStatus('idle');

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
            type: formData.type,
            status: 'unread'
          }
        ])
        .select()
        .single();

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        type: 'general'
      });

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);

    } catch (error) {
      console.error('Error submitting contact form:', error);
      setSubmitStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Office Number",
      details: "+92 310 7591172",
      description: "Main office line for general inquiries"
    },
    {
      icon: <Ambulance className="w-6 h-6" />,
      title: "Emergency Ambulance",
      details: "+92 301 1955172",
      description: "24/7 emergency ambulance service",
      emergency: true
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Address",
      details: "hamdardcommitteeofficial@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Office Address",
      details: "172/9-L, Chichawatni, Pakistan",
      description: "Chak No. 172/9-L, Chichawatni, District Sahiwal, Punjab"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Office Hours",
      details: "9:00 AM - 5:00 PM",
      description: "Monday to Saturday"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Service Area",
      details: "Chichawatni & Surrounding Areas",
      description: "Serving communities across the region"
    }
  ];


  return (
    <>
    
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-6">
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">Get In Touch</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black mb-6">Contact Us</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Reach out to Hamdard Committee for support, inquiries, or emergency services. 
                We're here to help our community.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-4xl font-black text-gray-800 mb-8">Get in Touch</h2>
                <p className="text-lg text-gray-600 mb-12">
                  We're always ready to assist you. Whether you need emergency services, 
                  want to volunteer, or have general inquiries, don't hesitate to reach out.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className={`bg-white rounded-2xl p-6 shadow-lg border-l-4 ${
                        info.emergency 
                          ? 'border-red-500 bg-red-50' 
                          : 'border-[#0A400C]'
                      } hover:shadow-xl transition-all duration-300`}
                    >
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${
                        info.emergency 
                          ? 'bg-red-100 text-red-600' 
                          : 'bg-[#0A400C]/10 text-[#0A400C]'
                      }`}>
                        {info.icon}
                      </div>
                      <h3 className={`text-lg font-bold mb-2 ${
                        info.emergency ? 'text-red-800' : 'text-gray-800'
                      }`}>
                        {info.title}
                      </h3>
                      <p className={`font-semibold mb-2 ${
                        info.emergency ? 'text-red-600' : 'text-[#0A400C]'
                      }`}>
                        {info.details}
                      </p>
                      <p className="text-gray-600 text-sm">{info.description}</p>
                    </div>
                  ))}
                </div>

                {/* Emergency Notice */}
                <div className="mt-8 bg-red-50 border border-red-200 rounded-2xl p-6">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-lg font-bold text-red-800 mb-2">Emergency Notice</h4>
                      <p className="text-red-700">
                        For medical emergencies requiring ambulance service, please call our 
                        emergency number directly for immediate assistance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-3xl shadow-xl p-8">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-black text-gray-800 mb-4">Send us a Message</h3>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2 text-green-800">
                      <CheckCircle className="w-5 h-5" />
                      <span className="font-semibold">Message sent successfully!</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Thank you for contacting us. We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <div className="flex items-center space-x-2 text-red-800">
                      <AlertCircle className="w-5 h-5" />
                      <span className="font-semibold">Error sending message</span>
                    </div>
                    <p className="text-red-700 text-sm mt-1">
                      Please try again or contact us directly via phone.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Inquiry Type *
                      </label>
                      <select
                        name="type"
                        value={formData.type}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="ambulance">Ambulance Service</option>
                        <option value="volunteer">Volunteer Opportunity</option>
                        <option value="donation">Donation Related</option>
                        <option value="complaint">Complaint</option>
                        <option value="partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Enter message subject"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Please describe your inquiry in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0A400C] to-[#819067] text-white py-4 px-6 rounded-xl font-bold hover:opacity-90 transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-gray-800 mb-4">Our Location</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Visit our office in Chichawatni. We're always happy to welcome visitors and discuss how we can serve the community together.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Map */}
                <div className="h-96 lg:h-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13767.2216418254!2d72.804179!3d30.384883000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d2b004fe90e6b%3A0xf8824a84116683b4!2sHamdard%20Committee%20office%20172%2F9-L!5e0!3m2!1sen!2sus!4v1764099440384!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hamdard Committee Office Location"
                    className="min-h-96"
                  />
                </div>

                {/* Address Details */}
                <div className="p-8 bg-gradient-to-br from-[#0A400C] to-[#819067] text-white">
                  <h3 className="text-2xl font-bold mb-6">Hamdard Committee Office</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#e8f5e9] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Main Office Address</p>
                        <p className="text-[#e8f5e9]">
                          Chak No. 172/9-L, Chichawatni,<br />
                          District Sahiwal, Punjab, Pakistan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#e8f5e9] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Office Phone</p>
                        <p className="text-[#e8f5e9]">+92 310 7591172</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="w-5 h-5 text-[#e8f5e9] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Office Hours</p>
                        <p className="text-[#e8f5e9]">
                          Monday - Saturday: 9:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Ambulance className="w-5 h-5 text-[#e8f5e9] flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-semibold">Emergency Service Area</p>
                        <p className="text-[#e8f5e9]">
                          Chak No. 172/9-L, Chichawatni,<br />
                          District Sahiwal, Punjab, Pakistan
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/10 rounded-xl">
                    <p className="text-sm text-[#e8f5e9]">
                      <strong>Note:</strong> For emergency ambulance services, please call the emergency number directly for immediate response.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactPage;