import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "About Hamdard Committee - Our Vision, Mission & Impact Since 2019",
  description:
    "Learn about Hamdard Committee's journey, vision, and mission in serving communities across Pakistan through various humanitarian and social welfare programs.",
  keywords:
    "about Hamdard Committee, NGO mission, vision statement, community service Pakistan, humanitarian organization",
  alternates: { canonical: "https://hamdardcommittee.org/about" },
  openGraph: {
    title:
      "About Hamdard Committee - Our Vision, Mission & Impact Since 2019",
    description:
      "Learn about Hamdard Committee's journey, vision, and mission in serving communities across Pakistan through various humanitarian and social welfare programs.",
    url: "https://hamdardcommittee.org/about",
    images: ["/images/og-about.jpg"],
    siteName: "Hamdard Committee",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return (
    <>
    
      <main>{children}</main>
   
    </>
  );
}
