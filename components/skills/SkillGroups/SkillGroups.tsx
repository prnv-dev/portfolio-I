import Image from "next/image";
import Reveal from "@/components/shared/Reveal/Reveal";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { SKILL_GROUPS } from "@/data/skills";
import styles from "./SkillGroups.module.css";

// Disciplines as listed on the resume.
const DISCIPLINES = [
  { name: "Desktop applications", detail: "Windows EXE builds in Python" },
  { name: "Web applications", detail: "From the interface to deployment" },
  { name: "Backend & APIs", detail: "Services and integrations" },
  { name: "AI-assisted development", detail: "LLM tooling in the workflow" },
];

export default function SkillGroups() {
  return (
    <div className={styles.wrap}>
      <section aria-label="Disciplines">
        <ol className={styles.disciplines}>
          {DISCIPLINES.map((discipline, index) => (
            <li key={discipline.name} className={styles.discipline}>
              <span className={styles.dIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.dName}>{discipline.name}</span>
              <span className={styles.dDetail}>{discipline.detail}</span>
            </li>
          ))}
        </ol>
      </section>

      {SKILL_GROUPS.map((group) => (
        <section key={group.id} className={styles.group} aria-labelledby={`skills-${group.id}`}>
          <div className={styles.groupHead}>
            <SplitReveal as="h2" lines={[group.title]} className={styles.groupTitle} />
            <p className={styles.blurb}>{group.blurb}</p>
          </div>
          <Reveal>
            <ul className={styles.skills} id={`skills-${group.id}`}>
              {group.skills.map((skill) => (
                <li key={skill.name} className={styles.skill}>
                  <Image src={skill.icon} alt="" width={22} height={22} className={styles.icon} />
                  {skill.name}
                </li>
              ))}
            </ul>
          </Reveal>
        </section>
      ))}
    </div>
  );
}
