'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowLeft, 
  Facebook, 
  Twitter, 
  Linkedin,
  Eye
} from 'lucide-react';
import { supabase } from '../../../lib/supabase';

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
  updated_at?: string;
}

const SingleNewsPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [blog, setBlog] = useState<BlogPost | null>(null);
  const [recentPosts, setRecentPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  const fetchBlogPost = async () => {
    try {
      setLoading(true);
      
      // Fetch the specific blog post
      const { data: blogData, error } = await supabase
        .from('blogs')
        .select('*')
        .eq('slug', slug)
        .eq('is_published', true)
        .single();

      if (error) {
        console.error('Error fetching blog post:', error);
        return;
      }

      if (blogData) {
        setBlog(blogData);
        
        // Increment view count
        await supabase.rpc('increment_blog_view', { blog_slug: slug });
        
        // Fetch recent posts
        const { data: recentData } = await supabase
          .from('blogs')
          .select('*')
          .eq('is_published', true)
          .neq('slug', slug)
          .order('publish_date', { ascending: false })
          .limit(4);

        setRecentPosts(recentData || []);
      }
    } catch (error) {
      console.error('Error fetching blog post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blog?.title || 'Hamdard Committee';
    const text = blog?.excerpt || 'Check out this post from Hamdard Committee';

    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    };

    window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400');
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

  if (!blog) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 mb-4">Blog Post Not Found</h1>
          <Link href="/news" className="text-[#0A400C] hover:underline">
            Back to News & Blogs
          </Link>
        </div>
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
              href="/news"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to News</span>
            </Link>
            
            <div className="flex space-x-2">
              <button
                onClick={() => handleShare('facebook')}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
                title="Share on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-2 text-gray-600 hover:text-blue-400 transition-colors"
                title="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare('linkedin')}
                className="p-2 text-gray-600 hover:text-blue-700 transition-colors"
                title="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Single Blog Post View */}
        <article className="max-w-4xl mx-auto">
          {/* Blog Header */}
          <header className="mb-8">
            <div className="flex flex-wrap gap-3 mb-4">
              <span className="inline-flex items-center space-x-2 bg-[#0A400C] text-white px-4 py-2 rounded-full">
                <Tag className="w-4 h-4" />
                <span className="font-semibold">{blog.category}</span>
              </span>
              {blog.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center space-x-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-gray-800 mb-6">
              {blog.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{formatDate(blog.publish_date)}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{blog.estimated_read_time} min read</span>
              </div>
              <div className="flex items-center space-x-2">
                <Eye className="w-5 h-5" />
                <span>{blog.view_count} views</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center space-x-4 p-6 bg-gray-50 rounded-2xl">
              {blog.author_image && (
                <img
                  src={blog.author_image}
                  alt={blog.author_name}
                  className="w-16 h-16 rounded-full object-cover"
                />
              )}
              <div>
                <h3 className="font-semibold text-gray-800">{blog.author_name}</h3>
                {blog.author_role && (
                  <p className="text-gray-600 text-sm">{blog.author_role}</p>
                )}
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none">
            <div 
              className="text-gray-700 leading-relaxed text-lg"
              dangerouslySetInnerHTML={{ __html: blog.content || '' }}
            />
          </div>

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#0A400C] to-[#819067] rounded-2xl text-white text-center">
            <h3 className="text-2xl font-black mb-4">Inspired by Our Work?</h3>
            <p className="text-white/90 mb-6 text-lg">
              Join us in making a difference in our community. Your support can change lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/become-volunteer"
                className="bg-white text-[#0A400C] hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Become a Volunteer
              </Link>
              <Link
                href="/donate"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A400C] px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Donate Now
              </Link>
              <Link
                href="/notifications"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0A400C] px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Latest Notifications
              </Link>
            </div>
          </div>
        </article>

        {/* Recent Posts */}
        {recentPosts.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-black text-gray-800 mb-8">Recent Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post) => (
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
        )}
      </div>
    </div>
  );
};

export default SingleNewsPage;