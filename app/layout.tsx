import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GAListener from "@/lib/ga/GAListener";
import { initGA } from "../lib/ga";
import { VisitorTracker } from "@/components/VisitorTracker";

initGA(); // Initialize GA once

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hamdardcommittee.org"),
  title: "Hamdard Committee",
  description:
    "Hamdard Committee provides welfare, ambulance, medical assistance, and community support services across Pakistan.",
  alternates: {
    canonical: "https://hamdardcommittee.org",
  },
  openGraph: {
    title: "Hamdard Committee",
    description:
      "Providing welfare, ambulance, medical assistance, and community support services across Pakistan.",
    url: "https://hamdardcommittee.org",
    siteName: "Hamdard Committee",
    images: [
      {
        url: "/og-images/og-home.png",
        width: 1200,
        height: 630,
        alt: "Hamdard Committee",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamdard Committee",
    description:
      "Providing welfare, ambulance, medical assistance, and community support services across Pakistan.",
    images: ["/og-images/og-home.png"],
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

// Loading component for Suspense fallback
function LoadingFallback() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#0A400C]"></div>
    </div>
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Suspense fallback={<LoadingFallback />}>
          <VisitorTracker />
          <GAListener />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
