import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/services/usher-zakat";
const pageTitle = "Usher & Zakat Services – Hamdard Committee";
const pageDesc =
  "Hamdard Committee provides Usher and Zakat distribution services across Pakistan, helping needy families, supporting welfare, and ensuring transparency and fast delivery.";

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
        url: "/og-images/og-usharzikat.png",
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
    images: ["/og-images/og-usharzikat.png"],
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

export default function UsherZakatLayout({ children }: { children: React.ReactNode }) {
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
    serviceType: "Usher & Zakat Distribution",
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
