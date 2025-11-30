import Image from "next/image";
import type { ReactNode } from "react";

export const metadata = {
  title: "Founder - Dr. Ali Ahmad | Visionary Leader of Hamdard Committee",
  description:
    "Meet Dr. Ali Ahmad, the visionary founder of Hamdard Committee, dedicated to community service and humanitarian work since 2019 in Pakistan.",
  keywords:
    "about Hamdard Committee, NGO mission, vision statement, community service Pakistan, humanitarian organization",
  alternates: { canonical: "https://hamdardcommittee.org/about/founder" },
  openGraph: {
    title: "Founder - Dr. Ali Ahmad | Visionary Leader of Hamdard Committee",
    description:
      "Meet Dr. Ali Ahmad, the visionary founder of Hamdard Committee, dedicated to community service and humanitarian work since 2019 in Pakistan.",
    url: "https://hamdardcommittee.org/about/founder",
    images: ["/og-images/og-founder.png"],
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
