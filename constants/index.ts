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


export const PROJECTS = [
  {
    title: "VertexAI – Offline AI Tool",
    description:
      "VertexAI is an advanced AI tool similar to ChatGPT that works even offline. It can analyze uploaded videos and generate accurate UI code by understanding the design shown in the video.",
    image: "/projects/project-1.png",
    link: "https://example.com",
  },
  {
    title: "CleanMaster Pro",
    description:
      "CleanMaster Pro is a powerful desktop application that scans and removes hidden cache and junk files from a system, helping improve performance and free up storage safely.",
    image: "/projects/project-2.png",
    link: "https://example.com",
  },
  {
    title: "CodeVault – Digital Products Platform",
    description:
      "CodeVault is a digital platform where users can purchase ready-made portfolios, login pages, and full websites. Built with secure authentication and a scalable architecture.",
    image: "/projects/project-3.png",
    link: "https://example.com",
  },
  {
    title: "Secure Backend Systems",
    description:
      "A collection of production-ready secure backend systems designed with strong authentication, key-based access control, and protected APIs to ensure application-level security and controlled usage.",
    image: "/projects/project-4.png",
    link: "https://example.com",
  },
  {
    title: "AI Assistant",
    description:
      "An intelligent AI assistant built to automate tasks, answer queries, and enhance productivity using modern AI models, optimized workflows, and a clean interactive interface.",
    image: "/projects/project-5.png",
    link: "https://example.com",
  },
] as const;


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
