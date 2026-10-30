import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/projects/ProjectCard/ProjectCard";
import Button from "@/components/shared/Button/Button";
import Reveal from "@/components/shared/Reveal/Reveal";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { PROJECTS } from "@/data/projects";
import styles from "./ProjectsPreview.module.css";

const PREVIEW = PROJECTS.filter((project) => project.status === "live").slice(0, 3);
const LIVE_COUNT = PROJECTS.filter((project) => project.status === "live").length;

export default function ProjectsPreview() {
  return (
    <section className={styles.section}>
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <SectionHeader
          index="02"
          label="shipped"
          title="Live, in production."
          description={`${LIVE_COUNT} projects are deployed and public right now. Three of them below.`}
          action={
            <Button href="/projects" variant="ghost" icon={<ArrowRight size={15} />}>
              All projects
            </Button>
          }
        />
        <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {PREVIEW.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.06} className="h-full">
              <ProjectCard project={project} index={index} className="h-full" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
