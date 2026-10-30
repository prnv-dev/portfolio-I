"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import styles from "./Statement.module.css";

// [text, emphasised?] — the emphasised phrases carry the accent once lit.
const PHRASES: [string, boolean][] = [
  ["Since 2023 I've been shipping software", false],
  ["on my own", true],
  ["— Windows apps packaged as EXEs, web platforms and AI tools. Now it's", false],
  ["becoming a company.", true],
];

export default function Statement() {
  const root = useRef<HTMLElement>(null);

  // Words light up as the paragraph passes through the viewport — it paces the read.
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        el.querySelectorAll(`.${styles.word}`),
        { opacity: 0.14 },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.08,
          scrollTrigger: { trigger: el, start: "top 72%", end: "bottom 48%", scrub: 1 },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.section} aria-label="Intent">
      <p className={styles.side}>(01)</p>
      <p className={styles.text}>
        {PHRASES.map(([phrase, emphasis], index) =>
          phrase.split(" ").map((word, wordIndex) => (
            <span key={`${index}-${wordIndex}`} className={emphasis ? `${styles.word} ${styles.em}` : styles.word}>
              {word}{" "}
            </span>
          )),
        )}
      </p>
    </section>
  );
}
