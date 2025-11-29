"use client";

import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import VolunteerCard from '../components/VolunteerCard';

const VolunteersPage = () => {
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
        .order('created_at', { ascending: false });

      if (error) throw error;
      setVolunteers(data || []);
    } catch (error) {
      console.error('Error fetching volunteers:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0A400C]"></div>
      </div>
    );
  }

  return (
    <>
   

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-black mb-4">Our Volunteers</h1>
            <p className="text-2xl text-white/90">
              Meet the dedicated individuals making a difference
            </p>
          </div>
        </section>

        {/* Volunteers Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our volunteers are the backbone of Hamdard Committee. They selflessly dedicate 
                their time and skills to serve the community and make a positive impact.
              </p>
            </div>

            {volunteers.length > 0 ? (
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
            ) : (
              <div className="text-center py-12">
                <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    No Volunteers Yet
                  </h3>
                  <p className="text-gray-600">
                    Our volunteer team is growing. Check back soon to meet our dedicated team members.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default VolunteersPage;