import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { Navbar } from "@/components/main/navbar";
import { Footer } from "@/components/main/footer";
import { StarsCanvas } from "@/components/main/star-background";
import NovaWidget from "@/components/NovaWidget";
import MobileBlocker from "@/components/MobileBlocker";

import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/* 🔒 Viewport locked to avoid zoom / cut issues */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-[#030014] overflow-x-hidden antialiased",
          inter.className
        )}
      >
        {/* 🚫 MOBILE BLOCKER (FULL SCREEN OVERLAY) */}
        <MobileBlocker />

        {/* 🌌 Background (no pointer blocking) */}
        <StarsCanvas />

        {/* 🧭 Main UI */}
        <Navbar />

        <main className="relative z-10">
          {children}
        </main>

        <Footer />

        {/* 🤖 Nova AI — DESKTOP ONLY */}
        <div className="hidden lg:block">
          <NovaWidget />
        </div>
      </body>
    </html>
  );
}
