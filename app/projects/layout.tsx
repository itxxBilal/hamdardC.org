// app/projects/layout.tsx
import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/projects";
const pageTitle = "Our Welfare Projects";
const pageDesc =
  "Explore Hamdard Committee’s welfare projects including medical assistance, ambulance service, community aid, ration distribution, and emergency support initiatives across Pakistan.";

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
        url: "/og-images/og-ourprojects.png",
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
    images: ["/og-images/og-ourprojects.png"],
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

export default function ProjectsLayout({
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
        name: "Welfare Projects",
        numberOfItems: 10,
        itemListOrder: "https://schema.org/ItemListUnordered"
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd)
        }}
      />
      {children}
    </>
  );
}
