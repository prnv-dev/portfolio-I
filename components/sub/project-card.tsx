"use client";

import React from "react";
import { ProjectItem } from "@/constants";

type ProjectCardProps = {
  project: ProjectItem;
  featured?: boolean;
};

// Custom Inline SVG Icon per Project Accent Key
const ProjectIcon = ({ accentKey }: { accentKey: ProjectItem["accentKey"] }) => {
  switch (accentKey) {
    case "violet-pink":
      // Globe / Personal Portfolio
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      );
    case "emerald":
      // Lightning / CleanMaster Pro
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case "amber":
      // Package / CodeVault
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      );
    case "cyan":
      // Scan / DeepScan AI
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 7V5a2 2 0 0 1 2-2h2" />
          <path d="M17 3h2a2 2 0 0 1 2 2v2" />
          <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
          <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="7" x2="12" y2="9" />
          <line x1="12" y1="15" x2="12" y2="17" />
        </svg>
      );
    case "purple":
      // Analytics / IncomeOS
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
          <path d="M3 20h18" />
          <path d="M18 6l-6 6-3-3-4 4" />
        </svg>
      );
    case "pink-crimson":
      // Shield / BulletProof Panel
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "indigo":
      // Document + AI / ResumeIQ
      return (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="8" y1="13" x2="16" y2="13" />
          <line x1="8" y1="17" x2="13" y2="17" />
        </svg>
      );
    default:
      return null;
  }
};

// Stylistic Accent Mapping
const accentStyles: Record<
  ProjectItem["accentKey"],
  {
    borderHover: string;
    glowGrad: string;
    iconBoxBg: string;
    iconBoxBorder: string;
    iconColor: string;
    topLineGrad: string;
    btnHoverBg: string;
    btnHoverBorder: string;
    btnTextColor: string;
  }
> = {
  "violet-pink": {
    borderHover: "hover:border-violet-500/50 hover:shadow-[0_0_25px_rgba(192,132,252,0.15)]",
    glowGrad: "from-violet-500/12 via-pink-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-violet-500/20 to-pink-500/20",
    iconBoxBorder: "border-violet-500/30",
    iconColor: "text-violet-300",
    topLineGrad: "from-violet-500 via-pink-500 to-transparent",
    btnHoverBg: "group-hover:bg-violet-500/20",
    btnHoverBorder: "group-hover:border-violet-500/40",
    btnTextColor: "text-violet-300",
  },
  emerald: {
    borderHover: "hover:border-emerald-500/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]",
    glowGrad: "from-emerald-500/12 via-green-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
    iconBoxBorder: "border-emerald-500/30",
    iconColor: "text-emerald-300",
    topLineGrad: "from-emerald-500 via-green-400 to-transparent",
    btnHoverBg: "group-hover:bg-emerald-500/20",
    btnHoverBorder: "group-hover:border-emerald-500/40",
    btnTextColor: "text-emerald-300",
  },
  amber: {
    borderHover: "hover:border-amber-500/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]",
    glowGrad: "from-amber-500/12 via-yellow-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-amber-500/20 to-yellow-500/20",
    iconBoxBorder: "border-amber-500/30",
    iconColor: "text-amber-300",
    topLineGrad: "from-amber-500 via-yellow-400 to-transparent",
    btnHoverBg: "group-hover:bg-amber-500/20",
    btnHoverBorder: "group-hover:border-amber-500/40",
    btnTextColor: "text-amber-300",
  },
  cyan: {
    borderHover: "hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]",
    glowGrad: "from-cyan-500/12 via-blue-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
    iconBoxBorder: "border-cyan-500/30",
    iconColor: "text-cyan-300",
    topLineGrad: "from-cyan-500 via-blue-500 to-transparent",
    btnHoverBg: "group-hover:bg-cyan-500/20",
    btnHoverBorder: "group-hover:border-cyan-500/40",
    btnTextColor: "text-cyan-300",
  },
  purple: {
    borderHover: "hover:border-purple-500/50 hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]",
    glowGrad: "from-purple-500/12 via-indigo-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20",
    iconBoxBorder: "border-purple-500/30",
    iconColor: "text-purple-300",
    topLineGrad: "from-purple-500 via-indigo-500 to-transparent",
    btnHoverBg: "group-hover:bg-purple-500/20",
    btnHoverBorder: "group-hover:border-purple-500/40",
    btnTextColor: "text-purple-300",
  },
  "pink-crimson": {
    borderHover: "hover:border-pink-500/50 hover:shadow-[0_0_25px_rgba(236,72,153,0.15)]",
    glowGrad: "from-pink-500/12 via-rose-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-pink-500/20 to-rose-500/20",
    iconBoxBorder: "border-pink-500/30",
    iconColor: "text-pink-300",
    topLineGrad: "from-pink-500 via-rose-500 to-transparent",
    btnHoverBg: "group-hover:bg-pink-500/20",
    btnHoverBorder: "group-hover:border-pink-500/40",
    btnTextColor: "text-pink-300",
  },
  indigo: {
    borderHover: "hover:border-indigo-500/50 hover:shadow-[0_0_25px_rgba(99,102,241,0.15)]",
    glowGrad: "from-indigo-500/12 via-violet-500/5 to-transparent",
    iconBoxBg: "bg-gradient-to-br from-indigo-500/20 to-violet-500/20",
    iconBoxBorder: "border-indigo-500/30",
    iconColor: "text-indigo-300",
    topLineGrad: "from-indigo-500 via-violet-500 to-transparent",
    btnHoverBg: "group-hover:bg-indigo-500/20",
    btnHoverBorder: "group-hover:border-indigo-500/40",
    btnTextColor: "text-indigo-300",
  },
};

export const ProjectCard = ({ project, featured = false }: ProjectCardProps) => {
  const style = accentStyles[project.accentKey];
  const isLive = project.status === "LIVE" && project.url !== null;

  return (
    <div
      className={`group relative flex min-h-[330px] flex-col justify-between h-full rounded-2xl bg-[#0b061a]/85 backdrop-blur-xl border border-[#25104d]/70 ${style.borderHover} transition-all duration-300 ease-out hover:-translate-y-1.5 overflow-hidden ${featured ? "p-7 sm:p-9 lg:min-h-[410px]" : "p-6"} shadow-lg`}
    >
      {/* Top Accent Line */}
      <div
        className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${style.topLineGrad} opacity-40 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Subtle Background Glow Radial */}
      <div
        className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${style.glowGrad} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
      />

      {/* Abstract Background Visual Geometry */}
      <div className="absolute top-3 right-3 w-28 h-28 opacity-[0.04] group-hover:opacity-[0.12] transition-opacity duration-300 pointer-events-none">
        <svg className="w-full h-full text-white" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1">
          <circle cx="80" cy="20" r="35" strokeDasharray="4,4" />
          <circle cx="80" cy="20" r="18" />
          <path d="M 20 20 L 80 20 L 80 80" />
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="80" cy="80" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* CARD CONTENT - TOP & MIDDLE */}
      <div className="relative z-10">
        {/* TOP BAR: Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-5">
          <span className="text-[10.5px] font-mono font-semibold tracking-wider text-gray-400/90 uppercase flex items-center gap-1.5">
            <span className="text-purple-400">◈</span>
            {project.category}
          </span>

          {/* Status Badge */}
          {isLive ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold tracking-wide bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10.5px] font-mono font-semibold tracking-wide bg-amber-950/70 border border-amber-500/30 text-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              COMING SOON
            </span>
          )}
        </div>

        {/* PROJECT ICON & TITLE */}
        <div className="flex items-center gap-3.5 mb-3">
          <div
            className={`w-11 h-11 rounded-xl flex items-center justify-center border ${style.iconBoxBg} ${style.iconBoxBorder} ${style.iconColor} shadow-inner group-hover:scale-105 transition-transform duration-300 ease-out flex-shrink-0`}
          >
            <ProjectIcon accentKey={project.accentKey} />
          </div>
          <h3 className={`${featured ? "text-2xl sm:text-3xl" : "text-xl"} font-bold text-white tracking-tight group-hover:text-purple-100 transition-colors duration-200`}>
            {project.title}
          </h3>
        </div>

        {/* DESCRIPTION */}
        <p className={`${featured ? "max-w-2xl text-base" : "text-sm"} text-gray-300/85 font-normal leading-relaxed mb-6`}>
          {project.description}
        </p>
      </div>

      {/* CARD FOOTER - ACTION BUTTON */}
      <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
        {isLive && project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-semibold text-gray-200 ${style.btnHoverBg} ${style.btnHoverBorder} ${style.btnTextColor} transition-all duration-200 shadow-sm`}
          >
            <span>View Project</span>
            <svg
              className="w-3.5 h-3.5 transform group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-200"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        ) : (
          <button
            disabled
            type="button"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-xs font-semibold text-gray-500 cursor-not-allowed select-none"
          >
            <span>Coming Soon</span>
            <svg
              className="w-3.5 h-3.5 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </button>
        )}

        <span className="text-[10px] font-mono text-gray-500/70 tracking-widest uppercase">
          {project.id}
        </span>
      </div>
    </div>
  );
};

