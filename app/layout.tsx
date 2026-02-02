import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { StarsCanvas } from "@/components/main/star-background";
import NovaWidget from "@/components/NovaWidget";
import MobileBlocker from "@/components/MobileBlocker";

import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* 🔒 Viewport locked */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#030014",
};

/* 🔥 SEO DOMINANCE METADATA */
export const metadata: Metadata = {
  title: {
    default: "Pranav Kadam | Full Stack Developer Portfolio",
    template: "%s | Pranav Kadam",
  },

  description:
    "Pranav Kadam portfolio website. Pranav Kadam is a Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, AI tools, backend systems, and modern software engineering.",

  keywords: [
    // 🔥 NAME DOMINANCE
    "Pranav Kadam",
    "Pranav kadam",
    "pranav kadam",
    "hacker portfolio",
    "pranav",
    "Pranav Portfolio",
    "kadam portfolio",
    "Pranav Kadam",
    "pranavkadam",
    "Pranav Kadam portfolio",
    "Pranav Kadam developer",
    "Pranav Kadam software engineer",

    // 🔥 TYPO & VARIATIONS (ranking trick)
    "Pranav Kadam Portfolio Website",
    "Pranav Kadam Personal Website",
    "Pranav Kadam Full Stack Developer",
    "Pranav Kadam India",
    "Pranav Kadam Programmer",

    // 🔥 TECH STACK SEARCHES
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "AI Developer",
    "Software Engineer Portfolio",

    // 🔥 INTENT BASED
    "Developer Portfolio Website",
    "Modern Portfolio Next.js",
    "Best Developer Portfolio",
    "Software Developer Portfolio",
  ],

  authors: [{ name: "Pranav Kadam", url: "https://pranavkadam.in" }],

  creator: "Pranav Kadam",

  openGraph: {
    title: "Pranav Kadam | Full Stack Developer Portfolio",
    description:
      "Official portfolio of Pranav Kadam – Full Stack Developer, React, Next.js, Node.js, AI tools, and modern web technologies.",
    url: "https://pranavkadam.in",
    siteName: "Pranav Kadam Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Pranav Kadam Portfolio",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Pranav Kadam | Full Stack Developer",
    description:
      "Pranav Kadam portfolio – Full Stack Developer building modern web apps and AI-powered software.",
    images: ["/logo.png"],
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

  metadataBase: new URL("https://pranavkadam.in"),
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-x-hidden antialiased",
          inter.className
        )}
      >
        <MobileBlocker />
        <StarsCanvas />
        <Navbar />

        <main className="relative z-10">{children}</main>

        <Footer />

        <div className="hidden lg:block">
          <NovaWidget />
        </div>
      </body>
    </html>
  );
}
