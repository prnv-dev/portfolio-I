import clsx from "clsx";
import { hostOf, type Project } from "@/data/projects";
import styles from "./ProjectRow.module.css";

interface ProjectRowProps {
  project: Project;
  index: number;
  /** Show the description column (full projects page). */
  detailed?: boolean;
}

// One project as an editorial row. Live projects are links; the hover wipe and title
// nudge confirm the whole row is the target.
export default function ProjectRow({ project, index, detailed = false }: ProjectRowProps) {
  const live = project.status === "live" && project.url;
  const content = (
    <>
      <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
      <span className={styles.main}>
        <span className={styles.title}>{project.title}</span>
        <span className={styles.category}>{project.category}</span>
      </span>
      {detailed ? <span className={styles.description}>{project.description}</span> : null}
      <span className={styles.meta}>
        {live ? hostOf(project.url!) : "In development"}
        {live ? (
          <span className={styles.arrow} aria-hidden="true">
            ↗
          </span>
        ) : null}
      </span>
    </>
  );

  return live ? (
    <a href={project.url!} target="_blank" rel="noreferrer" className={clsx(styles.row, detailed && styles.detailed)}>
      {content}
    </a>
  ) : (
    <div className={clsx(styles.row, styles.muted, detailed && styles.detailed)}>{content}</div>
  );
}
