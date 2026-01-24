import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import NovaWidget from "@/components/NovaWidget";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import MobileBlocker from "@/components/MobileBlocker";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#030014",
};

export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={cn("bg-[#030014] overflow-x-hidden", inter.className)}>
        
        {/* 🚫 Mobile Blocker (overlay only) */}
        <MobileBlocker />

        {/* Background */}
        <StarsCanvas />

        {/* Main UI */}
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />

        {/* Floating AI */}
        <NovaWidget />
      </body>
    </html>
  );
}