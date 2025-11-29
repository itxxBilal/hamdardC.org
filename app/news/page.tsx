'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  Eye,
  BookOpen
} from 'lucide-react';
import { supabase } from '../../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image: string;
  category: string;
  tags: string[];
  author_name: string;
  author_role: string;
  author_image: string;
  estimated_read_time: number;
  publish_date: string;
  is_featured: boolean;
  view_count: number;
  meta_title?: string;
  meta_description?: string;
  meta_keywords?: string[];
}

const NewsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>([]);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['All', 'News', 'Events', 'Stories', 'Updates', 'Medical', 'Education'];

  useEffect(() => {
    fetchBlogPosts();
  }, [selectedCategory]);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      
      let query = supabase
        .from('blogs')
        .select('*')
        .eq('is_published', true)
        .order('publish_date', { ascending: false });

      if (selectedCategory !== 'all') {
        query = query.eq('category', selectedCategory);
      }

      const { data: postsData, error } = await query;

      if (error) throw error;

      // Separate featured posts
      const featured = postsData?.filter(post => post.is_featured) || [];
      const recent = postsData?.filter(post => !post.is_featured) || [];

      setFeaturedPosts(featured);
      setRecentPosts(recent);
      setBlogPosts(postsData || []);
    } catch (error) {
      console.error('Error fetching blog posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
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

      {/* Hero Section for News Listing */}
      <section className="bg-gradient-to-br from-[#0A400C] to-[#819067] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-lg px-4 py-2 rounded-full mb-6">
            <BookOpen className="w-5 h-5" />
            <span className="font-semibold">Latest Updates</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-black mb-4">News & Blogs</h1>
          <p className="text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
            Stay informed with the latest stories, updates, and news from our humanitarian journey
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category.toLowerCase())}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === category.toLowerCase() 
                    ? 'bg-white text-[#0A400C] font-semibold' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Blog Listing View */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-3xl font-black text-gray-800 mb-6">Featured Stories</h2>
                <div className="grid grid-cols-1 gap-6">
                  {featuredPosts.map(post => (
                    <Link
                      key={post.id}
                      href={`/news/${post.slug}`}
                      className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <img
                            src={post.featured_image}
                            alt={post.title}
                            className="w-full h-48 md:h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="md:col-span-2 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <span className="bg-[#0A400C] text-white px-3 py-1 rounded-full text-sm">
                              {post.category}
                            </span>
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {post.estimated_read_time} min read
                            </span>
                          </div>
                          <h3 className="text-2xl font-black text-gray-800 group-hover:text-[#0A400C] transition-colors mb-3">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <div className="flex items-center space-x-4">
                              <span className="flex items-center space-x-1">
                                <User className="w-4 h-4" />
                                <span>{post.author_name}</span>
                              </span>
                              <span className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{formatDate(post.publish_date)}</span>
                              </span>
                            </div>
                            <span className="flex items-center space-x-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.view_count} views</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Recent Posts */}
            <section>
              <h2 className="text-3xl font-black text-gray-800 mb-6">
                {selectedCategory === 'all' ? 'Latest Updates' : `${selectedCategory} Posts`}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentPosts.map(post => (
                  <Link
                    key={post.id}
                    href={`/news/${post.slug}`}
                    className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9 bg-gray-100 overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="bg-[#0A400C] text-white px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                        <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {post.estimated_read_time} min
                        </span>
                      </div>
                      <h3 className="text-xl font-black text-gray-800 group-hover:text-[#0A400C] transition-colors mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{formatDate(post.publish_date)}</span>
                        <span className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{post.view_count}</span>
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Empty State */}
            {!loading && featuredPosts.length === 0 && recentPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No posts found</h3>
                <p className="text-gray-600">Check back later for new updates</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Call to Action Sidebar */}
            <div className="bg-gradient-to-br from-[#0A400C] to-[#819067] rounded-2xl p-6 text-white mb-6">
              <h3 className="text-xl font-black mb-4">Join Our Mission</h3>
              <p className="text-white/90 mb-4">
                Be part of our journey to create positive change in the community.
              </p>
              <div className="space-y-3">
                <Link
                  href="/become-volunteer"
                  className="block w-full bg-white text-[#0A400C] text-center hover:bg-gray-100 px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  Become Volunteer
                </Link>
                <Link
                  href="/donate"
                  className="block w-full bg-transparent border-2 border-white text-white text-center hover:bg-white hover:text-[#0A400C] px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  Donate Now
                </Link>
                <Link
                  href="/notifications"
                  className="block w-full bg-transparent border-2 border-white text-white text-center hover:bg-white hover:text-[#0A400C] px-4 py-3 rounded-xl font-semibold transition-colors"
                >
                  View Notifications
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <h3 className="text-xl font-black text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.filter(cat => cat !== 'All').map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category.toLowerCase())}
                    className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category.toLowerCase()
                        ? 'bg-[#0A400C] text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;