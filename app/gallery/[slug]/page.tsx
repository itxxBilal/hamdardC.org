'use client';

import Link from "next/link";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Tag, Share2, Download, ZoomIn } from 'lucide-react';
import { supabase } from '../../../lib/supabase';

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

const SingleGalleryPage = () => {
  const params = useParams();
  const slug = params?.slug as string;
  const [image, setImage] = useState<GalleryImage | null>(null);
  const [relatedImages, setRelatedImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [zoom, setZoom] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchImageData();
    }
  }, [slug]);

  const fetchImageData = async () => {
    try {
      setLoading(true);
      
      // Fetch the specific image
      const { data: imageData, error } = await supabase
        .from('gallery')
        .select('*')
        .eq('slug', slug)
        .eq('is_archived', false)
        .single();

      if (error) throw error;

      if (imageData) {
        setImage(imageData);
        
        // Fetch related images from same category
        const { data: relatedData } = await supabase
          .from('gallery')
          .select('*')
          .eq('category', imageData.category)
          .eq('is_archived', false)
          .neq('slug', slug)
          .limit(6);

        setRelatedImages(relatedData || []);
      }
    } catch (error) {
      console.error('Error fetching image:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = async () => {
    if (!image) return;
    
    try {
      const response = await fetch(image.image_url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${image.slug}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image?.title,
          text: image?.description,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Share cancelled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0A400C]"></div>
      </div>
    );
  }

  if (!image) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-800 mb-4">Image Not Found</h1>
          <Link href="/gallery" className="text-[#0A400C] hover:underline">
            Back to Gallery
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
              href="/gallery"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-[#0A400C] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Gallery</span>
            </Link>
            
            <div className="flex space-x-3">
              <button
                onClick={handleShare}
                className="inline-flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
              <button
                onClick={handleDownload}
                className="inline-flex items-center space-x-2 bg-[#0A400C] text-white hover:bg-[#0A300C] px-4 py-2 rounded-lg transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Single Image View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-6">
            <div 
              className={`relative bg-gray-100 rounded-2xl overflow-hidden ${zoom ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
              onClick={() => setZoom(!zoom)}
            >
              <img
                src={image.image_url}
                alt={image.title}
                className={`w-full h-auto transition-all duration-300 ${
                  zoom ? 'scale-150' : 'scale-100'
                }`}
              />
              <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                <ZoomIn className="w-4 h-4 inline mr-1" />
                {zoom ? 'Click to zoom out' : 'Click to zoom in'}
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-black text-gray-800 mb-4">{image.title}</h1>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="inline-flex items-center space-x-2 bg-[#0A400C] text-white px-4 py-2 rounded-full">
                  <Tag className="w-4 h-4" />
                  <span className="font-semibold">{image.category}</span>
                </div>
                
                {image.location && (
                  <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                    <MapPin className="w-4 h-4" />
                    <span>{image.location}</span>
                  </div>
                )}
                
                {image.date_taken && (
                  <div className="inline-flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(image.date_taken).toLocaleDateString()}</span>
                  </div>
                )}
              </div>

              {image.description && (
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">{image.description}</p>
                </div>
              )}
            </div>

            {/* Keywords */}
            {image.keywords && image.keywords.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Keywords</h3>
                <div className="flex flex-wrap gap-2">
                  {image.keywords.map((keyword, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                    >
                      #{keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Images */}
        {relatedImages.length > 0 && (
          <section className="mt-20">
            <h2 className="text-3xl font-black text-gray-800 mb-8">Related Images</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedImages.map((relatedImage) => (
                <Link
                  key={relatedImage.id}
                  href={`/gallery/${relatedImage.slug}`}
                  className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100 overflow-hidden">
                    <img
                      src={relatedImage.image_url}
                      alt={relatedImage.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 group-hover:text-[#0A400C] transition-colors mb-2">
                      {relatedImage.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="bg-gray-100 px-2 py-1 rounded">
                        {relatedImage.category}
                      </span>
                      <span>{new Date(relatedImage.date_taken).toLocaleDateString()}</span>
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

export default SingleGalleryPage;