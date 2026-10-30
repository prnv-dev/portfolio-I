import clsx from "clsx";
import { GraduationCap, Languages, MapPin } from "lucide-react";
import type { ReactNode } from "react";
import ProductTable from "@/components/about/ProductTable/ProductTable";
import Reveal from "@/components/shared/Reveal/Reveal";
import { EXPERIENCE, PROFILE } from "@/data/profile";
import styles from "./AboutGrid.module.css";

function Panel({ label, children, className }: { label: string; children: ReactNode; className?: string }) {
  return (
    <div className={clsx(styles.panel, className)}>
      <p className={styles.label}>{label}</p>
      <div className="mt-6">{children}</div>
    </div>
  );
}

export default function AboutGrid() {
  return (
    <div className="grid gap-3 lg:grid-cols-12">
      <Reveal className="lg:col-span-7">
        <Panel label="// summary" className="h-full">
          <div className={styles.prose}>
            <p>
              I&apos;m Pranav — a final-year B.Tech student in Artificial Intelligence &amp; Machine Learning at Sandip
              University, Nashik.
            </p>
            <p>
              I&apos;ve been writing software independently since {PROFILE.freelanceSince}: Windows desktop apps
              packaged as EXEs, web applications, and automation tools for practical, everyday problems. I
              use AI tooling heavily in my own workflow — for building, debugging and weighing design decisions.
            </p>
            <p>
              Today that work is turning into a software company with a small product line, covering Windows, the
              web and Android.
            </p>
          </div>
        </Panel>
      </Reveal>

      <div className="grid gap-3 lg:col-span-5">
        <Reveal delay={0.05}>
          <Panel label="// education">
            <div className="flex gap-4">
              <span className={styles.iconTile} aria-hidden="true">
                <GraduationCap size={18} strokeWidth={1.6} />
              </span>
              <div>
                <p className={styles.strong}>{PROFILE.education.degree}</p>
                <p className={styles.muted}>
                  {PROFILE.education.school}, {PROFILE.education.city} · {PROFILE.education.status.toLowerCase()}
                </p>
              </div>
            </div>
          </Panel>
        </Reveal>
        <Reveal delay={0.1}>
          <Panel label="// base">
            <dl className={styles.facts}>
              <div>
                <dt>
                  <MapPin size={14} aria-hidden="true" /> location
                </dt>
                <dd>{PROFILE.location}</dd>
              </div>
              <div>
                <dt>
                  <Languages size={14} aria-hidden="true" /> speaks
                </dt>
                <dd>{PROFILE.languages.join(" · ")}</dd>
              </div>
            </dl>
          </Panel>
        </Reveal>
      </div>

      <Reveal className="lg:col-span-12">
        <Panel label="// experience">
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <p className={styles.strong}>{EXPERIENCE.title}</p>
            <p className={styles.period}>{EXPERIENCE.period}</p>
          </div>
          <ol className={clsx(styles.points, "mt-6 grid gap-x-10 gap-y-4 md:grid-cols-2")}>
            {EXPERIENCE.points.map((point, index) => (
              <li key={point}>
                <span className={styles.pointIndex}>{String(index + 1).padStart(2, "0")}</span>
                <span>{point}</span>
              </li>
            ))}
          </ol>
        </Panel>
      </Reveal>

      <Reveal className="lg:col-span-12">
        <Panel label="// products">
          <ProductTable />
        </Panel>
      </Reveal>
    </div>
  );
}
