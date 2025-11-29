import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/services/ro-plant";
const pageTitle = "RO Plant Service – Hamdard Committee";
const pageDesc =
  "Hamdard Committee provides RO Plant services, offering clean drinking water solutions and welfare support across Pakistan for communities in need.";

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
        url: "/og-images/og-roplant.png",
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
    images: ["/og-images/og-roplant.png"],
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

export default function ROPlantLayout({ children }: { children: React.ReactNode }) {
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
    serviceType: "RO Plant Installation & Maintenance",
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
