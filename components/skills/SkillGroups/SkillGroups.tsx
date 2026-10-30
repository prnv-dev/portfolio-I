import clsx from "clsx";
import Image from "next/image";
import Reveal from "@/components/shared/Reveal/Reveal";
import { SKILL_GROUPS } from "@/data/skills";
import styles from "./SkillGroups.module.css";

// Disciplines as listed on the resume.
const DISCIPLINES = [
  { name: "Desktop applications", detail: "Windows EXE builds in Python" },
  { name: "Web applications", detail: "Front end to deployment" },
  { name: "Backend & APIs", detail: "Services and integrations" },
  { name: "AI-assisted development", detail: "LLM tooling in the workflow" },
];

const SPAN: Record<string, string> = {
  web: "lg:col-span-7",
  systems: "lg:col-span-5",
  ai: "lg:col-span-5",
  tooling: "lg:col-span-7",
};

export default function SkillGroups() {
  return (
    <div className="grid gap-3">
      <Reveal>
        <ul className={clsx(styles.disciplines, "grid sm:grid-cols-2 lg:grid-cols-4")}>
          {DISCIPLINES.map((discipline, index) => (
            <li key={discipline.name} className={styles.discipline}>
              <span className={styles.disciplineIndex}>{String(index + 1).padStart(2, "0")}</span>
              <p className={styles.disciplineName}>{discipline.name}</p>
              <p className={styles.disciplineDetail}>{discipline.detail}</p>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-3 lg:grid-cols-12">
        {SKILL_GROUPS.map((group, index) => (
          <Reveal key={group.id} delay={index * 0.05} className={SPAN[group.id]}>
            <section className={styles.group} aria-labelledby={`skills-${group.id}`}>
              <header className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 id={`skills-${group.id}`} className={styles.groupTitle}>
                    {group.title}
                  </h2>
                  <p className={styles.blurb}>{group.blurb}</p>
                </div>
                <span className={styles.count}>{String(group.skills.length).padStart(2, "0")}</span>
              </header>
              <ul className={clsx(styles.tiles, "mt-6")}>
                {group.skills.map((skill) => (
                  <li key={skill.name} className={styles.tile}>
                    <span className={styles.iconWrap}>
                      <Image src={skill.icon} alt="" width={28} height={28} className={styles.icon} />
                    </span>
                    <span className={styles.name}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
