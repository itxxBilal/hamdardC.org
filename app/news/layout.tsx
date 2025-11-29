import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'News & Blogs - Hamdard Committee Latest Updates & Stories',
  description: 'Stay updated with the latest news, stories, and updates from Hamdard Committee. Read about our community work, events, and humanitarian activities.',
  keywords: 'Hamdard Committee news, community updates, humanitarian stories, NGO blog, latest events',
  authors: [{ name: 'Hamdard Committee' }],
  creator: 'Hamdard Committee',
  publisher: 'Hamdard Committee',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://hamdardcommittee.org/news',
  },
  openGraph: {
    title: 'News & Blogs - Hamdard Committee',
    description: 'Stay updated with the latest news, stories, and updates from Hamdard Committee.',
    type: 'website',
    url: 'https://hamdardcommittee.org/news',
    siteName: 'Hamdard Committee',
    images: [
      {
        url: 'https://hamdardcommittee.org/og-news.jpg',
        width: 1200,
        height: 630,
        alt: 'Hamdard Committee News & Blogs',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News & Blogs - Hamdard Committee',
    description: 'Stay updated with the latest news, stories, and updates from Hamdard Committee.',
    images: ['https://hamdardcommittee.org/og-news.jpg'],
    creator: '@hamdardcommittee',
    site: '@hamdardcommittee',
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function NewsLayout({ children }: LayoutProps) {
  return children;
}