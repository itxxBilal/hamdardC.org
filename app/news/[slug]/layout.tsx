import { Metadata } from 'next';
import { supabase } from '../../../lib/supabase';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO and link previews
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    // Fetch the specific blog post
    const { data: blog, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();

    if (error || !blog) {
      return {
        title: 'Blog Post Not Found - Hamdard Committee',
        description: 'The requested blog post could not be found.',
      };
    }

    const title = blog.meta_title || `${blog.title} - Hamdard Committee`;
    const description = blog.meta_description || blog.excerpt;
    const keywords = blog.meta_keywords?.join(', ') || blog.tags?.join(', ');
    const canonical = `https://hamdardcommittee.org/news/${blog.slug}`;

    return {
      title,
      description,
      keywords,
      authors: [{ name: blog.author_name }],
      creator: 'Hamdard Committee',
      publisher: 'Hamdard Committee',
      robots: 'index, follow',
      alternates: {
        canonical,
      },
      openGraph: {
        title,
        description,
        type: 'article',
        url: canonical,
        siteName: 'Hamdard Committee',
        images: [
          {
            url: blog.featured_image,
            width: 1200,
            height: 630,
            alt: blog.title,
          },
        ],
        locale: 'en_US',
        publishedTime: blog.publish_date,
        authors: [blog.author_name],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [blog.featured_image],
        creator: '@hamdardcommittee',
        site: '@hamdardcommittee',
      },
      other: {
        'og:image:alt': blog.title,
        'twitter:image:alt': blog.title,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'News - Hamdard Committee',
      description: 'Stay updated with the latest news and stories from Hamdard Committee.',
    };
  }
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const { data: blogs } = await supabase
      .from('blogs')
      .select('slug')
      .eq('is_published', true)
      .limit(50);

    return blogs?.map((blog) => ({
      slug: blog.slug,
    })) || [];
  } catch (error) {
    return [];
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function SingleNewsLayout({ children }: LayoutProps) {
  return children;
}