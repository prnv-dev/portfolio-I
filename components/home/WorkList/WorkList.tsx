import Link from "next/link";
import ProjectRow from "@/components/projects/ProjectRow/ProjectRow";
import Reveal from "@/components/shared/Reveal/Reveal";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { PROJECTS } from "@/data/projects";
import styles from "./WorkList.module.css";

const LIVE = PROJECTS.filter((project) => project.status === "live");

export default function WorkList() {
  return (
    <section className={styles.section} aria-label="Shipped work">
      <div className={styles.aside}>
        <SplitReveal as="h2" lines={["Shipped,", "and in", "production."]} className={styles.title} />
        <p className={styles.count}>
          <span className={styles.countNumber}>{String(LIVE.length).padStart(2, "0")}</span>
          projects live right now
        </p>
        <Link href="/projects" className={styles.all}>
          All projects <span aria-hidden="true">→</span>
        </Link>
      </div>

      <Reveal className={styles.list}>
        {LIVE.map((project, index) => (
          <ProjectRow key={project.id} project={project} index={index} />
        ))}
      </Reveal>
    </section>
  );
}
