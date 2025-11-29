import { Metadata } from 'next';
import { supabase } from '../../../lib/supabase';

interface Props {
  params: Promise<{ slug: string }>;
}

// Generate metadata for SEO and link previews
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    // Fetch the specific image data
    const { data: image, error } = await supabase
      .from('gallery')
      .select('*')
      .eq('slug', slug)
      .eq('is_archived', false)
      .single();

    if (error || !image) {
      return {
        title: 'Image Not Found - Hamdard Committee',
        description: 'The requested image could not be found.',
      };
    }

    const title = `${image.title} - Hamdard Committee Gallery`;
    const description = image.description || `View ${image.title} from Hamdard Committee's gallery. ${image.category} photography.`;
    const keywords = `Hamdard Committee, ${image.category}, ${image.keywords?.join(', ')}, gallery, photos, ${image.location || ''}`;
    const canonical = `https://hamdardcommittee.org/gallery/${image.slug}`;

    return {
      title,
      description,
      keywords,
      authors: [{ name: 'Hamdard Committee' }],
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
            url: image.image_url,
            width: 1200,
            height: 630,
            alt: image.title,
          },
        ],
        locale: 'en_US',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: [image.image_url],
        creator: '@hamdardcommittee',
        site: '@hamdardcommittee',
      },
      other: {
        'og:image:alt': image.title,
        'twitter:image:alt': image.title,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Gallery - Hamdard Committee',
      description: 'Explore our photo gallery showcasing Hamdard Committee community events and humanitarian activities.',
    };
  }
}

// Generate static params for better performance
export async function generateStaticParams() {
  try {
    const { data: images } = await supabase
      .from('gallery')
      .select('slug')
      .eq('is_archived', false)
      .limit(50);

    return images?.map((image) => ({
      slug: image.slug,
    })) || [];
  } catch (error) {
    return [];
  }
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function SingleGalleryLayout({ children }: LayoutProps) {
  return children;
}