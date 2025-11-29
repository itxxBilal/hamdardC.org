"use client";

import Link from "next/link";
import React, { useState } from 'react';
import { ArrowLeft, UserPlus, Upload, CheckCircle, X } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const BecomeVolunteer = () => {
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    cnicNumber: '',
    phoneNumber: '',
    email: '',
    occupation: '',
    skills: '',
    availability: '',
    motivation: ''
  });

  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState({
    type: '', // 'success' or 'error'
    title: '',
    message: '',
    volunteerId: ''
  });

  const showNotification = (type: 'success' | 'error', title: string, message: string, volunteerId: string = '') => {
    setPopupData({
      type,
      title,
      message,
      volunteerId
    });
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert('Volunteer ID copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Check file type
      if (!file.type.startsWith('image/')) {
        alert('Please upload an image file');
        return;
      }

      // Check file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file: File): Promise<string> => {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
    const filePath = `volunteer-profiles/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('volunteer-images')
      .upload(filePath, file);

    if (uploadError) {
      throw uploadError;
    }

    const { data } = supabase.storage
      .from('volunteer-images')
      .getPublicUrl(filePath);

    return data.publicUrl;
  };

  const generateVolunteerId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5).toUpperCase();
    return `VOL-${timestamp}-${random}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const volunteerId = generateVolunteerId();
      let profilePictureUrl = '';

      // Upload image if provided
      if (imageFile) {
        profilePictureUrl = await uploadImage(imageFile);
      }

      // Validate CNIC format (Pakistani CNIC: 12345-1234567-1)
      const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
      if (!cnicRegex.test(formData.cnicNumber)) {
        throw new Error('Please enter CNIC in correct format: 12345-1234567-1');
      }

      // Validate phone number
      const phoneRegex = /^03\d{2}-\d{7}$/;
      if (!phoneRegex.test(formData.phoneNumber)) {
        throw new Error('Please enter phone number in correct format: 03XX-XXXXXXX');
      }

      const { data, error } = await supabase
        .from('volunteers')
        .insert([
          {
            volunteer_id: volunteerId,
            name: formData.name,
            address: formData.address,
            profile_picture: profilePictureUrl,
            cnic_number: formData.cnicNumber,
            phone_number: formData.phoneNumber,
            email: formData.email,
            occupation: formData.occupation,
            skills: formData.skills.split(',').map(skill => skill.trim()).filter(skill => skill),
            availability: formData.availability,
            motivation: formData.motivation,
            status: 'pending'
          }
        ])
        .select()
        .single();

      if (error) throw error;

      // Add initial status update
      await supabase
        .from('volunteer_updates')
        .insert([
          {
            volunteer_id: data.id,
            old_status: null,
            new_status: 'pending',
            notes: 'Volunteer application submitted',
            updated_by: 'system'
          }
        ]);

      // Show success popup
      showNotification(
        'success',
        'Application Submitted Successfully!',
        'Thank you for your interest in joining Hamdard Committee. Your application is under review. We will contact you soon.',
        volunteerId
      );

      // Reset form
      setFormData({
        name: '',
        address: '',
        cnicNumber: '',
        phoneNumber: '',
        email: '',
        occupation: '',
        skills: '',
        availability: '',
        motivation: ''
      });
      setImagePreview('');
      setImageFile(null);

    } catch (error: any) {
      console.error('Error submitting application:', error);
      showNotification(
        'error',
        'Submission Failed',
        error.message || 'Error submitting application. Please try again.',
        ''
      );
    } finally {
      setLoading(false);
    }
  };



  const occupations = [
    'Student',
    'Teacher',
    'Doctor',
    'Engineer',
    'Business Owner',
    'Government Employee',
    'Private Employee',
    'Housewife',
    'Retired',
    'Unemployed',
    'Other'
  ];

  const availabilityOptions = [
    'Weekends Only',
    'Evenings Only',
    'Full Time',
    'Part Time',
    'During Emergencies',
    'Flexible'
  ];

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
                  <X className="w-6 h-6" />
                )}
              </div>
              
              <div className="flex-1">
                <h3 className={`text-lg font-semibold ${
                  popupData.type === 'success' ? 'text-green-800' : 'text-red-800'
                }`}>
                  {popupData.title}
                </h3>
                <p className="text-gray-600 mt-2">{popupData.message}</p>
                
                {popupData.volunteerId && (
                  <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">Application ID:</span>
                      <span className="text-sm font-bold text-[#0A400C]">{popupData.volunteerId}</span>
                    </div>
                    <button
                      onClick={() => copyToClipboard(popupData.volunteerId)}
                      className="w-full mt-2 bg-[#0A400C] text-white py-2 px-4 rounded-lg hover:bg-[#0A400C]/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Upload className="w-4 h-4" />
                      <span>Copy Application ID</span>
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
                <UserPlus className="w-5 h-5" />
                <span className="font-semibold">Join Our Mission</span>
              </div>
              <h1 className="text-5xl sm:text-6xl font-black mb-4">Become a Volunteer</h1>
              <p className="text-2xl text-white/90 mb-6">
                Join hands with Hamdard Committee to serve humanity
              </p>
              <p className="text-white/80 max-w-2xl mx-auto">
                Your time and skills can make a real difference in people's lives. 
                Join our team of dedicated volunteers and be part of meaningful change in your community.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-black text-gray-800 mb-8">Volunteer Application Form</h2>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-semibold text-[#0A400C] mb-4">Personal Information</h3>
                  </div>

                  {/* Profile Picture */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Profile Picture
                    </label>
                    <div className="flex items-center space-x-6">
                      <div className="flex-shrink-0">
                        {imagePreview ? (
                          <img
                            src={imagePreview}
                            alt="Profile preview"
                            className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gray-200 border-2 border-dashed border-gray-300 flex items-center justify-center">
                            <Upload className="w-8 h-8 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#0A400C] file:text-white hover:file:bg-[#0A400C]/90"
                        />
                        <p className="text-xs text-gray-500 mt-1">
                          Upload a clear profile picture (Max 5MB)
                        </p>
                      </div>
                    </div>
                  </div>

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
                      CNIC Number *
                    </label>
                    <input
                      type="text"
                      name="cnicNumber"
                      value={formData.cnicNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="12345-1234567-1"
                      pattern="\d{5}-\d{7}-\d{1}"
                    />
                    <p className="text-xs text-gray-500 mt-1">Format: 12345-1234567-1</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="03XX-XXXXXXX"
                      pattern="03\d{2}-\d{7}"
                    />
                    <p className="text-xs text-gray-500 mt-1">Format: 03XX-XXXXXXX</p>
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

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Current Address *
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

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Occupation *
                    </label>
                    <select
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                    >
                      <option value="">Select Occupation</option>
                      {occupations.map((occupation) => (
                        <option key={occupation} value={occupation}>
                          {occupation}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Availability *
                    </label>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                    >
                      <option value="">Select Availability</option>
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Skills & Expertise
                    </label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="e.g., First Aid, Teaching, Medical, Management, etc. (separate with commas)"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Why do you want to join Hamdard Committee? *
                    </label>
                    <textarea
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0A400C] focus:border-[#0A400C] transition-colors"
                      placeholder="Tell us about your motivation to join and how you can contribute..."
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#0A400C] to-[#819067] text-white py-4 px-6 rounded-xl font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <UserPlus className="w-5 h-5" />
                        <span>Submit Application</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BecomeVolunteer;