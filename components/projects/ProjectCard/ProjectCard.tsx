import clsx from "clsx";
import {
  ArrowUpRight,
  FileSearch,
  Globe,
  Monitor,
  Package,
  ScanFace,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import Badge from "@/components/shared/Badge/Badge";
import TiltCard from "@/components/shared/TiltCard/TiltCard";
import { hostOf, type Project, type ProjectKind } from "@/data/projects";
import styles from "./ProjectCard.module.css";

const KIND_ICON: Record<ProjectKind, LucideIcon> = {
  web: Globe,
  desktop: Monitor,
  marketplace: Package,
  ai: ScanFace,
  finance: TrendingUp,
  security: ShieldCheck,
  hiring: FileSearch,
};

interface ProjectCardProps {
  project: Project;
  index?: number;
  size?: "default" | "wide";
  className?: string;
}

export default function ProjectCard({ project, index, size = "default", className }: ProjectCardProps) {
  const Icon = KIND_ICON[project.kind];
  const live = project.status === "live" && project.url;

  return (
    <TiltCard className={clsx(styles.card, size === "wide" && styles.wide, className)}>
      <div className={styles.body}>
        <div className="flex items-center justify-between gap-3">
          <span className={styles.iconTile} aria-hidden="true">
            <Icon size={18} strokeWidth={1.6} />
          </span>
          <Badge dot={live ? "live" : "idle"} tone={live ? "accent" : "neutral"}>
            {live ? "live" : "in development"}
          </Badge>
        </div>

        <div className="mt-8">
          <p className={styles.category}>
            {index !== undefined ? <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span> : null}
            {project.category}
          </p>
          <h3 className={clsx(styles.title, "mt-2")}>
            {live ? (
              <a href={project.url!} target="_blank" rel="noreferrer" className={styles.stretched}>
                {project.title}
              </a>
            ) : (
              project.title
            )}
          </h3>
          <p className={clsx(styles.description, "mt-3")}>{project.description}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <span className={styles.host}>{project.url ? hostOf(project.url) : "not yet public"}</span>
        {live ? <ArrowUpRight size={16} className={styles.arrow} aria-hidden="true" /> : null}
      </div>
    </TiltCard>
  );
}
