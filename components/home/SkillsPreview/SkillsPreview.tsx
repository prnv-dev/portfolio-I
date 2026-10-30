import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button/Button";
import Reveal from "@/components/shared/Reveal/Reveal";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import { SKILL_GROUPS } from "@/data/skills";
import styles from "./SkillsPreview.module.css";

export default function SkillsPreview() {
  return (
    <section className={styles.section}>
      <div className="mx-auto w-full max-w-shell px-5 sm:px-8">
        <SectionHeader
          index="03"
          label="toolkit"
          title="What the work is made of."
          action={
            <Button href="/skills" variant="ghost" icon={<ArrowRight size={15} />}>
              Full toolkit
            </Button>
          }
        />
        <Reveal>
          <div className={`${styles.panel} mt-12 grid sm:grid-cols-2 lg:grid-cols-4`}>
            {SKILL_GROUPS.map((group) => (
              <div key={group.id} className={styles.column}>
                <p className={styles.groupTitle}>
                  {group.title.toLowerCase()} <span className={styles.count}>{group.skills.length}</span>
                </p>
                <ul className="mt-5 flex flex-col gap-1">
                  {group.skills.map((skill) => (
                    <li key={skill.name} className={styles.skill}>
                      <span className={styles.iconWrap}>
                        <Image src={skill.icon} alt="" width={18} height={18} className={styles.icon} />
                      </span>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
