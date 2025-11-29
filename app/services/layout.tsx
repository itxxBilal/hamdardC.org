// app/services/layout.tsx
import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/services";
const pageTitle = "Our Welfare Services";
const pageDesc =
  "Discover Hamdard Committee’s welfare services including ambulance, dead body van, ration support, medical help, community aid, and emergency assistance across Pakistan.";

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
        url: "/og-images/og-ourservices.png",
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
    images: ["/og-images/og-ourservices.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["WebPage", "CollectionPage"],
    name: pageTitle,
    url: pageUrl,
    description: pageDesc,

    about: {
      "@type": "Organization",
      name: "Hamdard Committee",
      url: "https://hamdardcommittee.org"
    },

    hasPart: [
      {
        "@type": "ItemList",
        name: "Welfare Services",
        itemListOrder: "https://schema.org/ItemListUnordered",
        description:
          "Ambulance, dead body van, ration support, medical help, emergency aid and other welfare services."
      }
    ],

    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://hamdardcommittee.org"
        },
        {
          "@type": "ListItem",
          position: 2,
          name: pageTitle,
          item: pageUrl
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
