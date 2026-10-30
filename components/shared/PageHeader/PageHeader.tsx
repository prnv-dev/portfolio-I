"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { gsap } from "@/lib/gsap";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  /** Title split into art-directed lines. */
  title: string | string[];
  lede?: ReactNode;
  children?: ReactNode;
}

// Inner-page opener: a huge masked title on the left, the lede offset low and right.
// As the page scrolls, the title lifts slower than the content for a soft hand-off.
export default function PageHeader({ title, lede, children }: PageHeaderProps) {
  const root = useRef<HTMLElement>(null);
  const lines = Array.isArray(title) ? title : [title];

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const scrub = { trigger: el, start: "top top", end: "bottom top", scrub: 1 };
      gsap.to(el.querySelector(`.${styles.title}`), { yPercent: -18, ease: "none", scrollTrigger: scrub });
      gsap.to(el.querySelector(`.${styles.glow}`), { yPercent: 25, ease: "none", scrollTrigger: scrub });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.header}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <SplitReveal as="h1" trigger="load" lines={lines} className={styles.title} />
        {lede || children ? (
          <div className={styles.aside}>
            {lede ? <div className={styles.lede}>{lede}</div> : null}
            {children ? <div className={styles.actions}>{children}</div> : null}
          </div>
        ) : null}
      </div>
    </section>
  );
}
