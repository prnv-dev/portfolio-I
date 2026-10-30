"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { gsap, prefersReducedMotion } from "@/lib/gsap";
import styles from "./Reveal.module.css";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

// Block-level scroll reveal: content below the fold rises in once as it enters view.
export default function Reveal({ children, delay = 0, y = 28, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;
    // Already on screen at mount: leave it alone rather than flashing it out and back.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;
    el.dataset.reveal = "hidden";
    const ctx = gsap.context(() => {
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.1,
        delay,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
        onStart: () => {
          el.dataset.reveal = "shown";
        },
      });
    }, el);
    return () => {
      ctx.revert();
      delete el.dataset.reveal;
    };
  }, [delay]);

  return (
    <div ref={ref} className={`${styles.root} ${className ?? ""}`.trim()} style={{ ["--reveal-y" as string]: `${y}px` }}>
      {children}
    </div>
  );
}
