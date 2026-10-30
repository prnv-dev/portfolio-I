"use client";

import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import { PROJECTS, type Project } from "@/data/projects";
import styles from "./ProjectGrid.module.css";

type Filter = "all" | Project["status"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "all" },
  { id: "live", label: "live" },
  { id: "soon", label: "in development" },
];

const countFor = (filter: Filter) =>
  filter === "all" ? PROJECTS.length : PROJECTS.filter((project) => project.status === filter).length;

export default function ProjectGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const reduce = useReducedMotion();
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.status === filter);

  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter projects" className={styles.tabs}>
        {FILTERS.map((item) => {
          const active = item.id === filter;
          return (
            <button
              key={item.id}
              role="tab"
              type="button"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={clsx(styles.tab, active && styles.tabActive)}
            >
              {active ? <motion.span layoutId="project-filter" className={styles.tabPill} /> : null}
              <span className="relative">{item.label}</span>
              <span className={clsx(styles.count, "relative")}>{countFor(item.id)}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout={!reduce} className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project, index) => (
            <motion.li
              key={project.id}
              layout={!reduce}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={clsx(filter === "all" && index === 0 && "md:col-span-2")}
            >
              <ProjectCard
                project={project}
                index={PROJECTS.indexOf(project)}
                size={filter === "all" && index === 0 ? "wide" : "default"}
                className="h-full"
              />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </LayoutGroup>
  );
}
