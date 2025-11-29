import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/services/street-lights";
const pageTitle = "Street Lights Service – Hamdard Committee";
const pageDesc =
  "Hamdard Committee provides street lights installation and maintenance services in Pakistan, ensuring safer streets and community welfare support.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,

  alternates: {
    canonical: pageUrl,
  },

  openGraph: {
    title: pageTitle,
    description: pageDesc,
    url: pageUrl,
    type: "website",
    siteName: "Hamdard Committee",
    images: [
      {
        url: "/og-images/og-solorlights.png",
        width: 1200,
        height: 630,
        alt: pageTitle,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDesc,
    images: ["/og-images/og-solorlights.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function StreetLightsLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: pageTitle,
    url: pageUrl,
    description: pageDesc,
    provider: {
      "@type": "Organization",
      name: "Hamdard Committee",
      url: "https://hamdardcommittee.org",
    },
    serviceType: "Street Lights Installation & Maintenance",
    areaServed: "Pakistan",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hamdardcommittee.org",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Services",
          item: "https://hamdardcommittee.org/services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
