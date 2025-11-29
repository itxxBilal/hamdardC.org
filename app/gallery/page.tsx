'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { ArrowLeft, Calendar, MapPin, Tag, Search } from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface GalleryImage {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  keywords: string[];
  image_url: string;
  location: string;
  date_taken: string;
  created_at: string;
  is_archived?: boolean;
}

const GalleryPage = () => {
  const [galleryImages, setGalleryImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['Events', 'Medical', 'Education', 'Community', 'Infrastructure', 'Other'];

  useEffect(() => {
    fetchGalleryImages();
  }, [selectedCategory, searchTerm]);

  const fetchGalleryImages = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('gallery')
        .select('*')
        .eq('is_archived', false)
        .order('created_at', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      if (searchTerm) {
        query = query.or(`title.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%,keywords.cs.{${searchTerm}}`);
      }

      const { data, error } = await query;

      if (error) throw error;
      setGalleryImages(data || []);
    } catch (error) {
      console.error('Error fetching gallery images:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0A400C]"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Hero Section for Gallery */}
      <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
            <Tag className="w-5 h-5" />
            <span className="font-semibold">Community Gallery</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">Our Gallery</h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Explore the visual journey of Hamdard Committee's humanitarian work and community events
          </p>
          
          {/* Search and Filter */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#0A400C] focus:border-transparent"
              />
            </div>
            
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-[#0A400C] focus:border-transparent"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <div className="text-white flex items-center justify-center">
              <span className="font-semibold">{galleryImages.length}</span>
              <span className="ml-1">images found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Gallery Grid View */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((galleryImage) => (
            <Link
              key={galleryImage.id}
              href={`/gallery/${galleryImage.slug}`}
              className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-12 bg-gray-100 overflow-hidden">
                <img
                  src={galleryImage.image_url}
                  alt={galleryImage.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-[#0A400C] transition-colors mb-2 line-clamp-2">
                  {galleryImage.title}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="bg-gray-100 px-2 py-1 rounded">{galleryImage.category}</span>
                  <span>{new Date(galleryImage.date_taken).toLocaleDateString()}</span>
                </div>
                {galleryImage.location && (
                  <p className="text-sm text-gray-600 flex items-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {galleryImage.location}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State for Gallery */}
        {!loading && galleryImages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No images found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default GalleryPage;