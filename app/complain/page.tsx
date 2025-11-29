// src/pages/ComplaintPage.tsx
"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { ArrowLeft, Search, FileText, AlertCircle, CheckCircle, Clock, Send, Copy, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const ComplaintPage = () => {
  const [activeTab, setActiveTab] = useState('register');
  const [searchId, setSearchId] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  
  // Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    type: '', // 'success' or 'error'
    title: '',
    message: '',
    complaintId: ''
  });

  const complaintTypes = {
    services: ['Ambulance', 'Eid Gha', 'Bartan', 'Ro Water Plant', 'Street Lights', 'Office Management', 'Usher Zakat'],
    general: ['Suggestions', 'Feedback', 'General Inquiry'],
    members: ['Volunteer Complaint', 'Member Behavior', 'Service Quality']
  };

  const [formData, setFormData] = useState({
    type: '',
    category: '',
    name: '',
    email: '',
    phone: '',
    address: '',
    description: '',
    volunteerName: '',
    urgency: 'medium'
  });

  const showNotification = (type: 'success' | 'error', title: string, message: string, complaintId: string = '') => {
    setPopupData({
      type,
      title,
      message,
      complaintId
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Complaint ID copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Reset category when type changes
      ...(name === 'type' && { category: '' })
    }));
  };

  const generateComplaintId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `HC-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const complaintId = generateComplaintId();
      
      const { data, error } = await supabase
        .from('complaints')
        .insert([
          {
            complaint_id: complaintId,
            type: formData.type,
            category: formData.category,
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            address: formData.address,
            description: formData.description,
            volunteer_name: formData.volunteerName,
            urgency: formData.urgency,
            status: 'pending'
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Add initial status update
      await supabase
        .from('complaint_updates')
        .insert([
          {
            complaint_id: data.id,
            old_status: null,
            new_status: 'pending',
            notes: 'Complaint registered successfully',
            updated_by: 'system'
          }
        ]);

      // Show success popup
      showNotification(
        'success',
        'Complaint Registered Successfully!',
        'Your complaint has been registered and is under review. Please save your Complaint ID for tracking.',
        complaintId
      );
      
      // Reset form
      setFormData({
        type: '',
        category: '',
        name: '',
        email: '',
        phone: '',
        address: '',
        description: '',
        volunteerName: '',
        urgency: 'medium'
      });

    } catch (error) {
      console.error('Error submitting complaint:', error);
      showNotification(
        'error',
        'Submission Failed',
        'Error submitting complaint. Please try again.',
        ''
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const complaintId = searchId.trim().toUpperCase();
    
    if (!complaintId) {
      showNotification('error', 'Missing Information', 'Please enter a Complaint ID', '');
      return;
    }

    setSearchLoading(true);
    try {
      // First, get the complaint
      const { data: complaintData, error: complaintError } = await supabase
        .from('complaints')
        .select('*')
        .eq('complaint_id', complaintId)
        .single();

      if (complaintError) {
        if (complaintError.code === 'PGRST116') {
          // No rows found
          setSearchResult(null);
          showNotification('error', 'Complaint Not Found', 'Please check your Complaint ID and try again.', '');
          return;
        }
        throw complaintError;
      }

      // Then get the updates separately
      const { data: updatesData, error: updatesError } = await supabase
        .from('complaint_updates')
        .select('*')
        .eq('complaint_id', complaintData.id)
        .order('created_at', { ascending: false });

      if (updatesError) throw updatesError;

      // Combine the data
      setSearchResult({
        ...complaintData,
        complaint_updates: updatesData || []
      });

    } catch (error) {
      console.error('Error searching complaint:', error);
      setSearchResult(null);
      showNotification('error', 'Search Error', 'Error searching complaint. Please try again.', '');
    } finally {
      setSearchLoading(false);
    }
  };


  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in_progress': return <Clock className="w-5 h-5 text-blue-600" />;
      case 'closed': return <CheckCircle className="w-5 h-5 text-gray-600" />;
      default: return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'closed': return 'bg-gray-100 text-gray-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'urgent': return 'bg-red-100 text-red-800';
      case 'high': return 'bg-orange-100 text-orange-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  return (
    <>
      
      {/* Success/Error Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`bg-white rounded-2xl max-w-md w-full p-6 relative ${
            popupData.type === 'success' ? 'border-l-4 border-green-500' : 'border-l-4 border-red-500'
          }`}>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="flex items-start space-x-4">
              <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                popupData.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
              }`}>
                {popupData.type === 'success' ? (
                  <CheckCircle className="w-6 h-6" />
                ) : (
                  <AlertCircle className="w-6 h-6" />
                )}
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-semibold ${
                  popupData.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {popupData.title}
                </h3>
                <p className="text-gray-600 mt-2">{popupData.message}</p>
                
                {popupData.complaintId && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Complaint ID:</span>
                      <span className="text-sm font-bold text-[#0A400C]">{popupData.complaintId}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(popupData.complaintId)}
                      className="w-full mt-2 bg-[#0A400C] text-white py-2 px-4 rounded-lg hover:bg-[#0A400C]/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span>Copy Complaint ID</span>
                    </button>
                  </div>
                )}
                
                <button
                  onClick={closePopup}
                  className={`w-full mt-4 py-2 px-4 rounded-lg font-medium transition-colors ${
                    popupData.type === 'success' 
                      ? 'bg-green-600 text-white hover:bg-green-700' 
                      : 'bg-red-600 text-white hover:bg-red-700'
                  }`}
                >
                  {popupData.type === 'success' ? 'Continue' : 'Try Again'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
                <FileText className="w-5 h-5" />
                <span className="font-semibold">Complaint Management</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black mb-4">Register Complaint</h1>
              <p className="text-2xl text-white/90 mb-6">
                Your feedback helps us serve you better
              </p>
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-8 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab('register')}
                className={`pb-4 px-1 font-semibold text-lg border-b-2 transition-colors ${
                  activeTab === 'register'
                    ? 'border-[#0A400C] text-[#0A400C]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Register New Complaint
              </button>
              <button
                onClick={() => setActiveTab('track')}
                className={`pb-4 px-1 font-semibold text-lg border-b-2 transition-colors ${
                  activeTab === 'track'
                    ? 'border-[#0A400C] text-[#0A400C]'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Track Complaint
              </button>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {activeTab === 'register' ? (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-black text-gray-800 mb-8">Complaint Form</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Complaint Type */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Complaint Type *
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                    >
                      <option value="">Select Complaint Type</option>
                      <option value="services">Services</option>
                      <option value="general">General</option>
                      <option value="members">About Members/Volunteers</option>
                    </select>
                  </div>

                  {/* Dynamic Fields based on Type */}
                  {formData.type && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {formData.type === 'services' ? 'Service Category *' :
                         formData.type === 'general' ? 'Feedback Type *' :
                         'Complaint Category *'}
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      >
                        <option value="">Select Category</option>
                        {complaintTypes[formData.type as keyof typeof complaintTypes]?.map((category) => (
                          <option key={category} value={category}>
                            {category}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {formData.type === 'members' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Volunteer/Member Name/ID
                      </label>
                      <input
                        type="text"
                        name="volunteerName"
                        value={formData.volunteerName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                        placeholder="Enter volunteer name or ID"
                      />
                    </div>
                  )}

                  {/* Personal Information */}
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
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Enter your complete address"
                    />
                  </div>

                  {/* Urgency */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Urgency Level
                    </label>
                    <select
                      name="urgency"
                      value={formData.urgency}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                    >
                      <option value="low">Low</option>
                      <option value="medium">Medium</option>
                      <option value="high">High</option>
                      <option value="urgent">Urgent</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Description *
                    </label>
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Please describe your complaint in detail..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0A400C] to-[#819067] text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Submit Complaint</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-3xl font-black text-gray-800 mb-8">Track Your Complaint</h2>
                
                <form onSubmit={handleSearch} className="mb-8">
                  <div className="flex space-x-4">
                    <input
                      type="text"
                      value={searchId}
                      onChange={(e) => setSearchId(e.target.value)}
                      placeholder="Enter your Complaint ID (e.g., HC-xyz...)"
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={searchLoading}
                      className="bg-gradient-to-r from-[#0A400C] to-[#819067] text-white py-3 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center space-x-2"
                    >
                      {searchLoading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      ) : (
                        <>
                          <Search className="w-5 h-5" />
                          <span>Search</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>

                {searchResult && (
                  <div className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-800">
                        Complaint: {searchResult.complaint_id}
                      </h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(searchResult.status)}`}>
                        {searchResult.status.replace('_', ' ').toUpperCase()}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Complaint Details</h4>
                        <div className="space-y-2 text-sm text-gray-600">
                          <p><strong>Type:</strong> {searchResult.type}</p>
                          <p><strong>Category:</strong> {searchResult.category}</p>
                          <p><strong>Urgency:</strong> 
                            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${getUrgencyColor(searchResult.urgency)}`}>
                              {searchResult.urgency}
                            </span>
                          </p>
                          <p><strong>Registered:</strong> {new Date(searchResult.created_at).toLocaleDateString()}</p>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2">Description</h4>
                        <p className="text-sm text-gray-600">{searchResult.description}</p>
                      </div>
                    </div>

                    {searchResult.admin_notes && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-700 mb-2">Admin Notes</h4>
                        <p className="text-sm text-gray-600 bg-yellow-50 p-3 rounded-lg">
                          {searchResult.admin_notes}
                        </p>
                      </div>
                    )}

                    {searchResult.complaint_updates && searchResult.complaint_updates.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-4">Status Updates</h4>
                        <div className="space-y-3">
                          {searchResult.complaint_updates.map((update: any, index: number) => (
                            <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                              {getStatusIcon(update.new_status)}
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-800">
                                  Status changed to {update.new_status.replace('_', ' ')}
                                </p>
                                {update.notes && (
                                  <p className="text-sm text-gray-600 mt-1">{update.notes}</p>
                                )}
                                <p className="text-xs text-gray-500 mt-1">
                                  {new Date(update.created_at).toLocaleString()}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default ComplaintPage;