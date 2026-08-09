import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

type FooterItem = {
  name: string;
  link: string;
  icon?: any;
  disabled?: boolean;
};

type FooterColumn = {
  title: string;
  data: FooterItem[];
};

export const SKILL_DATA = [
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", image: "js.png", width: 65, height: 65 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
  { skill_name: "Git", image: "git.png", width: 65, height: 65 },
  { skill_name: "Python", image: "python.png", width: 70, height: 70 },
  { skill_name: "Node.js", image: "nodejs.png", width: 80, height: 80 },
  { skill_name: "GitHub", image: "github.png", width: 65, height: 65 },
  { skill_name: "VS Code", image: "vscode.png", width: 65, height: 65 },
  { skill_name: "Web", image: "www.png", width: 65, height: 65 },
] as const;


export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  { skill_name: "Python", image: "python.png", width: 70, height: 70 },
  { skill_name: "GitHub", image: "github.png", width: 65, height: 65 },
  { skill_name: "HTML", image: "html.png", width: 80, height: 80 },
  { skill_name: "CSS", image: "css.png", width: 80, height: 80 },
  { skill_name: "Git", image: "git.png", width: 65, height: 65 },
  { skill_name: "React", image: "react.png", width: 80, height: 80 },
] as const;

export const BACKEND_SKILL = [
  { skill_name: "Node.js", image: "nodejs.png", width: 80, height: 80 },
  { skill_name: "APIs", image: "api.png", width: 70, height: 70 },
  { skill_name: "Backend Systems", image: "software.png", width: 70, height: 70 },
  { skill_name: "Reverse Engineering", image: "reverse-engineering.png", width: 70, height: 70 },
] as const;


export const FULLSTACK_SKILL = [
  { skill_name: "AI Systems", image: "ai.png", width: 70, height: 70 },
  { skill_name: "ChatGPT", image: "chatgpt.png", width: 70, height: 70 },
] as const;


export const OTHER_SKILL = [
  { skill_name: "Developer Tools", image: "vscode.png", width: 60, height: 60 },
] as const;


export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string | null;
  status: "LIVE" | "COMING SOON";
  accentKey: "violet-pink" | "emerald" | "amber" | "cyan" | "purple" | "pink-crimson" | "indigo";
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    category: "PERSONAL PORTFOLIO",
    description:
      "Personal portfolio showcasing my development work, products, UI/UX experiments and projects.",
    url: "https://pranavkadam.in",
    status: "LIVE",
    accentKey: "violet-pink",
  },
  {
    id: "cleanmaster-pro",
    title: "CleanMaster Pro",
    category: "DESKTOP APPLICATION",
    description:
      "High-performance Windows desktop optimization software for cleaning junk, improving system performance and managing system resources.",
    url: "https://cleanmasterpro.in",
    status: "LIVE",
    accentKey: "emerald",
  },
  {
    id: "codevault",
    title: "CodeVault",
    category: "DEVELOPER MARKETPLACE",
    description:
      "Developer marketplace for premium source code, UI kits, animations and full-stack templates.",
    url: "https://codevaultofficial.in/",
    status: "LIVE",
    accentKey: "amber",
  },
  {
    id: "deepscan-ai",
    title: "DeepScan AI",
    category: "AI PLATFORM",
    description:
      "AI-powered authenticity and deepfake detection platform for analyzing images, videos, audio and text.",
    url: "https://deepscan-ai.vercel.app/",
    status: "LIVE",
    accentKey: "cyan",
  },
  {
    id: "income-os",
    title: "IncomeOS",
    category: "AI / SAAS",
    description:
      "AI-powered financial planning and income strategy platform for tracking goals, income and execution.",
    url: "https://income-os-weld.vercel.app/",
    status: "LIVE",
    accentKey: "purple",
  },
  {
    id: "bulletproof-panel",
    title: "BulletProof Panel",
    category: "SECURITY MANAGEMENT",
    description:
      "Security and server management control panel for monitoring, managing and protecting application infrastructure.",
    url: "https://bulletproof-panel-production.up.railway.app/",
    status: "LIVE",
    accentKey: "pink-crimson",
  },
  {
    id: "resume-iq",
    title: "ResumeIQ",
    category: "AI / SAAS",
    description:
      "AI-powered resume screening and optimization platform designed to analyze resumes and help identify stronger candidates.",
    url: null,
    status: "COMING SOON",
    accentKey: "indigo",
  },
];


export const FOOTER_DATA: FooterColumn[] = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "#",
        disabled: true,
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/pranavop45",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com/users/1348633182202888302",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/mr.pranav_0x?igsh=aG95MHFocTduaG50",
      },
      {
        name: "Telegram",
        icon: FaTelegramPlane,
        link: "https://t.me/DEVID_xx",
      },

      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/pranav-kadam-2ab2893a7",
      },
    ],
  },
  {
    title: "About",
    data: [
{
  name: "About Pranav",
  icon: null,
  link: "/about-pranav",
},
{
  name: "Resume",
  icon: null,
   link: "/resume",
},
{
  name: "Contact Me",
  icon: null,
  link: "https://t.me/DEVID_xx",
},

    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "/#about-me",
  },
  {
    title: "Skills",
    link: "/#skills",
  },
  {
    title: "Projects",
    link: "/#projects",
  },
] as const;

export const LINKS = {
  GitHub: "https://github.com/pranavop45",
};
