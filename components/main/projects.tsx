"use client";

import React from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 relative z-20"
    >
      {/* SECTION HEADING CONTAINER */}
      <div className="flex flex-col items-center justify-center text-center mb-14 px-4 max-w-3xl mx-auto">
        {/* Technical Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#160a2e]/90 border border-purple-500/30 mb-4 backdrop-blur-md shadow-inner">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-mono font-semibold tracking-widest text-purple-300 uppercase">
            SELECTED BUILDS
          </span>
        </div>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-400 tracking-tight pb-2">
          Featured Projects
        </h2>

        {/* Subtext */}
        <p className="mt-2 text-sm sm:text-base md:text-lg text-gray-400 font-normal leading-relaxed max-w-2xl">
          A collection of real products, platforms and experiments built from concept to deployment.
        </p>

        {/* Subtle Accent Line Divider */}
        <div className="mt-5 flex items-center justify-center gap-2 opacity-80">
          <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-purple-500/60" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-400/80" />
          <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-purple-500/60" />
        </div>
      </div>

      {/* RESPONSIVE CARDS GRID */}
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

