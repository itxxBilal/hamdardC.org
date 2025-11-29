import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ambulance Service – Hamdard Committee",
  description:
    "24/7 ambulance service with very cheap fare, free patient support, emergency help, and free dead-body transportation.",

  openGraph: {
    title: "Ambulance Service – Hamdard Committee",
    description:
      "Reliable and affordable ambulance service offering emergency support and free dead-body transportation.",
    url: "https://hamdardcommittee.org/services/ambulance",
    type: "website",
    images: [
      {
        url: "https://hamdardcommittee.org/og-images/og-ambulance.png",
        width: 1200,
        height: 630,
        alt: "Ambulance Service – Hamdard Committee",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Ambulance Service – Hamdard Committee",
    description:
      "Affordable and fast ambulance service with emergency and free patient assistance.",
    images: ["https://hamdardcommittee.org/og-images/og-ambulance.png"],
  },
};

export default function AmbulanceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
