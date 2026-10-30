export type ProjectKind = "web" | "desktop" | "marketplace" | "ai" | "finance" | "security" | "hiring";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string | null;
  status: "live" | "soon";
  kind: ProjectKind;
}

export const PROJECTS: Project[] = [
  {
    id: "deepscan-ai",
    title: "DeepScan AI",
    category: "AI platform",
    description:
      "AI-powered authenticity and deepfake detection platform for analyzing images, videos, audio and text.",
    url: "https://deepscan-ai.vercel.app/",
    status: "live",
    kind: "ai",
  },
  {
    id: "codevault",
    title: "CodeVault",
    category: "Developer marketplace",
    description: "Developer marketplace for premium source code, UI kits, animations and full-stack templates.",
    url: "https://codevaultofficial.in/",
    status: "live",
    kind: "marketplace",
  },
  {
    id: "cleanmaster-pro",
    title: "CleanMaster Pro",
    category: "Desktop application",
    description:
      "Windows desktop optimization software for cleaning junk, improving system performance and managing system resources.",
    url: "https://cleanmasterpro.in",
    status: "live",
    kind: "desktop",
  },
  {
    id: "income-os",
    title: "IncomeOS",
    category: "AI / SaaS",
    description:
      "AI-powered financial planning and income strategy platform for tracking goals, income and execution.",
    url: "https://income-os-weld.vercel.app/",
    status: "live",
    kind: "finance",
  },
  {
    id: "bulletproof-panel",
    title: "BulletProof Panel",
    category: "Security management",
    description:
      "Security and server management control panel for monitoring, managing and protecting application infrastructure.",
    url: "https://bulletproof-panel-production.up.railway.app/",
    status: "live",
    kind: "security",
  },
  {
    id: "portfolio",
    title: "Portfolio",
    category: "Personal site",
    description: "This site — a record of the products, experiments and UI work I ship.",
    url: "https://pranavkadam.in",
    status: "live",
    kind: "web",
  },
  {
    id: "resume-iq",
    title: "ResumeIQ",
    category: "AI / SaaS",
    description:
      "AI-powered resume screening and optimization platform that analyzes resumes and helps identify stronger candidates.",
    url: null,
    status: "soon",
    kind: "hiring",
  },
];

export const hostOf = (url: string) => new URL(url).host.replace(/^www\./, "");
