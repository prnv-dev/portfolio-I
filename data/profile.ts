export const PROFILE = {
  name: "Pranav Kadam",
  handle: "prnv-dev",
  role: "Software engineer — desktop, web & AI",
  location: "Nashik, India",
  timezone: "Asia/Kolkata",
  email: "iampranavkadam@gmail.com",
  site: "https://pranavkadam.in",
  education: {
    degree: "B.Tech, Artificial Intelligence & Machine Learning",
    school: "Sandip University",
    city: "Nashik",
    status: "Final year",
  },
  freelanceSince: 2023,
  languages: ["English", "Hindi", "Marathi"],
} as const;

export type SocialKey = "github" | "linkedin" | "telegram" | "instagram" | "discord";

export interface Social {
  key: SocialKey;
  label: string;
  handle: string;
  href: string;
}

export const SOCIALS: Social[] = [
  { key: "github", label: "GitHub", handle: "@prnv-dev", href: "https://github.com/prnv-dev" },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "pranav-kadam",
    href: "https://www.linkedin.com/in/pranav-kadam-2ab2893a7",
  },
  { key: "telegram", label: "Telegram", handle: "@DEVID_xx", href: "https://t.me/DEVID_xx" },
  {
    key: "instagram",
    label: "Instagram",
    handle: "@mr.pranav_0x",
    href: "https://www.instagram.com/mr.pranav_0x",
  },
  { key: "discord", label: "Discord", handle: "pranav", href: "https://discord.com/users/1348633182202888302" },
];

export type ProductPlatform = "Windows" | "Web" | "Android" | "AI";

export interface Product {
  name: string;
  platform: ProductPlatform;
  summary: string;
  url?: string;
}

// The product line of the company Pranav is building.
export const PRODUCTS: Product[] = [
  {
    name: "Propel",
    platform: "Windows",
    summary: "A PC care app for Windows machines.",
  },
  {
    name: "CodeVault",
    platform: "Web",
    summary: "A marketplace for developers selling source code, UI kits, animations and full-stack templates.",
    url: "https://codevaultofficial.in/",
  },
  {
    name: "DeepScan AI",
    platform: "AI",
    summary: "Deepfake and authenticity detection across images, video, audio and text.",
    url: "https://deepscan-ai.vercel.app/",
  },
  {
    name: "WatchDog",
    platform: "Android",
    summary: "A privacy auditor for Android devices.",
  },
  {
    name: "Resume Screening System",
    platform: "AI",
    summary: "Screens resumes and helps identify the stronger candidates for a role.",
  },
];

export const EXPERIENCE = {
  title: "Software Engineer — Independent projects / Freelance",
  period: "2023 — Present",
  points: [
    "Designed and shipped production software across desktop and web.",
    "Led CleanMaster Pro: a Python + PyInstaller desktop app with real-time scanning, secure licensing and automatic updates.",
    "Built and deployed web apps, including this portfolio.",
    "Wrote automation tools and utilities for practical, everyday problems.",
    "Owned the full lifecycle — concept, build, testing, deployment and maintenance.",
  ],
} as const;
