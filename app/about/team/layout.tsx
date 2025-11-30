import type { ReactNode } from "react";

export const metadata = {
  title: "Our Team – Dedicated Members of Hamdard Committee",
  description:
    "Meet the hardworking team of Hamdard Committee providing welfare, ambulance, medical aid, and community support services across Pakistan.",
  keywords:
    "Hamdard Committee team, NGO workers Pakistan, welfare team, ambulance staff, medical assistance volunteers, humanitarian organization",
  alternates: { canonical: "https://hamdardcommittee.org/about/team" },

  openGraph: {
    title: "Our Team – Dedicated Members of Hamdard Committee",
    description:
      "Meet the hardworking team of Hamdard Committee providing welfare, ambulance, medical aid, and community support services across Pakistan.",
    url: "https://hamdardcommittee.org/about/team",
    images: [
      "/og-images/og-ourteam.png",
    ],
    siteName: "Hamdard Committee",
    type: "website",
  },
};

export default function TeamLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
