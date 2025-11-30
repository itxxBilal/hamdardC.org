import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/about/team";

const pageTitle = "Our Team - Dedicated Members of Hamdard Committee"; 
// 55 characters (Perfect SEO length)

const pageDesc =
  "Meet the hardworking team behind Hamdard Committee providing welfare, medical aid, ambulance service, and community support across Pakistan."; 
// 155 characters (Ideal 120–160)

const pageKeywords =
  "Hamdard Committee team, NGO volunteers Pakistan, welfare workers, ambulance service staff, medical assistance team, humanitarian organization Pakistan";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: pageKeywords,

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
        url: "/og-images/og-ourteam.png",
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
    images: ["/og-images/og-ourteam.png"],
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

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hamdard Committee",
    url: pageUrl,
    description: pageDesc,
    keywords: pageKeywords,

    department: {
      "@type": "Organization",
      name: "Hamdard Committee – Team Members Section",
    },

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
          name: "About",
          item: "https://hamdardcommittee.org/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Our Team",
          item: pageUrl,
        },
      ],
    },
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
