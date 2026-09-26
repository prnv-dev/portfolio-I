import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { Footer } from "@/components/main/footer";
import { Navbar } from "@/components/main/navbar";
import { StarsCanvas } from "@/components/main/star-background";
import NovaWidget from "@/components/NovaWidget";
import { PageTransition } from "@/components/PageTransition";
import "./globals.css";

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#030014" };
export const metadata: Metadata = {
  metadataBase: new URL("https://pranavkadam.in"),
  title: { default: "Pranav Kadam | Full Stack Developer", template: "%s | Pranav Kadam" },
  description: "Portfolio of Pranav Kadam, a full stack developer building modern web applications, desktop tools and AI-powered products.",
  authors: [{ name: "Pranav Kadam", url: "https://pranavkadam.in" }], creator: "Pranav Kadam",
  openGraph: { title: "Pranav Kadam | Full Stack Developer", description: "Modern software, secure systems and AI-powered products.", url: "https://pranavkadam.in", siteName: "Pranav Kadam Portfolio", images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Pranav Kadam Portfolio" }], locale: "en_IN", type: "website" },
  twitter: { card: "summary_large_image", title: "Pranav Kadam | Full Stack Developer", description: "Modern software, secure systems and AI-powered products.", images: ["/logo.png"] },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return <html lang="en"><body><StarsCanvas /><div className="site-aurora" aria-hidden="true" /><Navbar /><PageTransition>{children}</PageTransition><Footer /><NovaWidget /></body></html>;
}
