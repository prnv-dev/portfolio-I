"use client";

import clsx from "clsx";
import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import ProjectRow from "@/components/projects/ProjectRow/ProjectRow";
import { PROJECTS, type Project } from "@/data/projects";
import styles from "./ProjectList.module.css";

type Filter = "all" | Project["status"];

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Everything" },
  { id: "live", label: "Live" },
  { id: "soon", label: "In development" },
];

const countFor = (filter: Filter) =>
  filter === "all" ? PROJECTS.length : PROJECTS.filter((project) => project.status === filter).length;

export default function ProjectList() {
  const [filter, setFilter] = useState<Filter>("all");
  const reduce = useReducedMotion();
  const visible = filter === "all" ? PROJECTS : PROJECTS.filter((project) => project.status === filter);

  return (
    <LayoutGroup>
      <div role="tablist" aria-label="Filter projects" className={styles.filters}>
        {FILTERS.map((item) => {
          const active = item.id === filter;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setFilter(item.id)}
              className={clsx(styles.filter, active && styles.active)}
            >
              {item.label}
              <sup className={styles.count}>{countFor(item.id)}</sup>
              {active ? <motion.span layoutId="project-filter" className={styles.underline} /> : null}
            </button>
          );
        })}
      </div>

      <ul className={styles.list}>
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <motion.li
              key={project.id}
              layout={!reduce}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectRow project={project} index={PROJECTS.indexOf(project)} detailed />
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </LayoutGroup>
  );
}
