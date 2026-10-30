import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import SiteBackground from "@/components/layout/SiteBackground/SiteBackground";
import NovaWidget from "@/components/nova/NovaWidget/NovaWidget";
import "./globals.css";
import "./legacy.css";

const TITLE = "Pranav Kadam — Software Engineer";
const DESCRIPTION =
  "Final-year AIML engineering student at Sandip University, Nashik, building a multi-product software company: Propel, CodeVault, DeepScan AI, WatchDog and a resume screening system.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#05070a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pranavkadam.in"),
  title: { default: TITLE, template: "%s — Pranav Kadam" },
  description: DESCRIPTION,
  keywords: [
    "Pranav Kadam",
    "software engineer",
    "AIML",
    "Sandip University",
    "Nashik",
    "Propel",
    "CodeVault",
    "DeepScan AI",
    "WatchDog",
    "Next.js",
    "Python",
  ],
  authors: [{ name: "Pranav Kadam", url: "https://pranavkadam.in" }],
  creator: "Pranav Kadam",
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "https://pranavkadam.in",
    siteName: "Pranav Kadam",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Pranav Kadam" }],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/logo.png"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <SiteBackground />
        <Navbar />
        <main id="content" className="relative min-h-[100svh]">
          {children}
        </main>
        <Footer />
        <NovaWidget />
      </body>
    </html>
  );
}
