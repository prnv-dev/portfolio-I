"use client";

import clsx from "clsx";
import { useLayoutEffect, useRef, type CSSProperties, type ElementType } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import styles from "./SplitReveal.module.css";

interface SplitRevealProps {
  /** One entry per visual line — lines are split by hand so breaks are art-directed. */
  lines: string[];
  as?: ElementType;
  className?: string;
  /** Optional class per line, by index (e.g. to indent the second line). */
  lineClassNames?: (string | undefined)[];
  /** "load": CSS keyframes on first paint (safe for LCP). "scroll": GSAP once the block enters view. */
  trigger?: "load" | "scroll";
  delay?: number;
}

export default function SplitReveal({
  lines,
  as: Tag = "h2",
  className,
  lineClassNames,
  trigger = "scroll",
  delay = 0,
}: SplitRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (trigger !== "scroll" || !ref.current || prefersReducedMotion()) return;
    const ctx = gsap.context(() => {
      gsap.from(`.${styles.inner}`, {
        yPercent: 110,
        duration: 1.2,
        delay,
        ease: "expo.out",
        stagger: 0.09,
        scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      });
    }, ref);
    return () => ctx.revert();
  }, [trigger, delay]);

  return (
    <Tag ref={ref} className={clsx(className, trigger === "load" && styles.load)} aria-label={lines.join(" ")}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={clsx(styles.line, lineClassNames?.[index])} aria-hidden="true">
          <span
            className={styles.inner}
            style={{ "--i": index, "--delay": `${delay}s` } as CSSProperties}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
