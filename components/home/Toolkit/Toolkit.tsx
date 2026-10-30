"use client";

import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { SKILL_GROUPS } from "@/data/skills";
import { gsap } from "@/lib/gsap";
import styles from "./Toolkit.module.css";

const ROWS = [
  SKILL_GROUPS[0].skills.map((skill) => skill.name),
  [...SKILL_GROUPS[1].skills, ...SKILL_GROUPS[2].skills].map((skill) => skill.name),
  [...SKILL_GROUPS[3].skills.map((skill) => skill.name), "Desktop EXE builds", "AI-assisted development"],
];

// Row speeds/directions — three depths moving against each other as you scroll.
const DRIFT = [-18, 14, -10];

export default function Toolkit() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      el.querySelectorAll<HTMLElement>("[data-row]").forEach((row, index) => {
        gsap.fromTo(
          row,
          { xPercent: DRIFT[index] < 0 ? 0 : -DRIFT[index] },
          {
            xPercent: DRIFT[index] < 0 ? DRIFT[index] : 0,
            ease: "none",
            scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 1 },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.section} aria-label="Toolkit">
      <div className={styles.head}>
        <p className={styles.index}>(04)</p>
        <SplitReveal as="h2" lines={["What the work", "is made of."]} className={styles.title} />
      </div>

      <div className={styles.rows} aria-hidden="true">
        {ROWS.map((row, index) => (
          <div key={index} className={styles.row} data-row>
            {[...row, ...row, ...row].map((name, i) => (
              <span key={`${name}-${i}`} className={index === 1 ? `${styles.item} ${styles.itemDim}` : styles.item}>
                {name}
                <span className={styles.sep}>/</span>
              </span>
            ))}
          </div>
        ))}
      </div>

      <dl className={styles.groups}>
        {SKILL_GROUPS.map((group) => (
          <div key={group.id} className={styles.group}>
            <dt>
              {group.title} <span>{String(group.skills.length).padStart(2, "0")}</span>
            </dt>
            <dd>{group.skills.map((skill) => skill.name).join(", ")}</dd>
          </div>
        ))}
      </dl>

      <div className={styles.foot}>
        <Link href="/skills" className={styles.more}>
          The full toolkit <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
