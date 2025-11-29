import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Photo Gallery - Hamdard Committee Community Events & Activities',
  description: 'Explore our photo gallery showcasing Hamdard Committee community events, medical camps, educational programs, and humanitarian activities in Chichawatni.',
  keywords: 'Hamdard Committee gallery, community photos, event pictures, medical camps, education programs, humanitarian work',
  authors: [{ name: 'Hamdard Committee' }],
  creator: 'Hamdard Committee',
  publisher: 'Hamdard Committee',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://hamdardcommittee.org/gallery',
  },
  openGraph: {
    title: 'Photo Gallery - Hamdard Committee',
    description: 'Explore our photo gallery showcasing Hamdard Committee community events and humanitarian activities.',
    type: 'website',
    url: 'https://hamdardcommittee.org/gallery',
    siteName: 'Hamdard Committee',
    images: [
      {
        url: 'https://hamdardcommittee.org/og-gallery.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamdard Committee Gallery',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Photo Gallery - Hamdard Committee',
    description: 'Explore our photo gallery showcasing Hamdard Committee community events and humanitarian activities.',
    images: ['https://hamdardcommittee.org/og-gallery.jpg'],
    creator: '@hamdardcommittee',
    site: '@hamdardcommittee',
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function GalleryLayout({ children }: LayoutProps) {
  return children;
}