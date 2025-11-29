// app/donate/layout.tsx
import type { Metadata } from "next";

const pageUrl = "https://hamdardcommittee.org/donate";
const pageTitle = "Donate Now";
const pageDesc =
  "Support Hamdard Committee by donating to welfare projects, ambulance service, medical help and community aid. Your contribution directly helps people in need across Pakistan.";

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
        url: "/og-images/og-donatenow.png",
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
    images: ["/og-images/og-donatenow.png"],
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

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DonateAction",
    name: pageTitle,
    url: pageUrl,
    description: pageDesc,
    recipient: {
      "@type": "Organization",
      name: "Hamdard Committee",
      url: "https://hamdardcommittee.org",
    },
    actionStatus: "PotentialActionStatus",
    potentialAction: {
      "@type": "DonateAction",
      target: pageUrl,
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
          name: pageTitle,
          item: pageUrl,
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      {children}
    </>
  );
}
