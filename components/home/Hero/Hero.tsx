"use client";

import clsx from "clsx";
import { useLayoutEffect, useRef, type CSSProperties } from "react";
import HeroVisual from "@/components/home/HeroVisual/HeroVisual";
import { sceneState } from "@/components/home/HeroScene/sceneState";
import { PRODUCTS, PROFILE } from "@/data/profile";
import { gsap } from "@/lib/gsap";
import styles from "./Hero.module.css";

const at = (i: number) => ({ "--i": i }) as CSSProperties;

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  // Pinned scroll scene (desktop + motion allowed): the camera dollies in via sceneState
  // while the type layers drift up at different speeds and hand off to the next section.
  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(el);
      const timeline = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: "+=110%",
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            sceneState.progress = self.progress;
            sceneState.invalidate();
          },
        },
      });
      timeline
        .to(q("[data-depth='far']"), { yPercent: 18 }, 0)
        .to(q("[data-depth='title-1']"), { yPercent: -70 }, 0)
        .to(q("[data-depth='title-2']"), { yPercent: -35 }, 0)
        .to(q("[data-depth='near']"), { y: -140, opacity: 0 }, 0)
        .to(q("[data-depth='credits']"), { y: -60, opacity: 0 }, 0)
        .to(q("[data-depth='title-1'], [data-depth='title-2']"), { opacity: 0 }, 0.55);
      return () => {
        sceneState.progress = 0;
      };
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.hero}>
      <div className={styles.backdrop} data-depth="far" aria-hidden="true" />
      <div className={styles.visual}>
        <HeroVisual />
      </div>

      <div className={styles.content}>
        <h1 className={styles.title} aria-label={PROFILE.name}>
          <span className={styles.line} data-depth="title-1" aria-hidden="true">
            <span className={styles.rise} style={at(0)}>
              Pranav
            </span>
          </span>
          <span className={clsx(styles.line, styles.indent)} data-depth="title-2" aria-hidden="true">
            <span className={styles.rise} style={at(1)}>
              Kadam
            </span>
          </span>
        </h1>

        <p className={styles.statement} data-depth="near">
          <span className={styles.line}>
            <span className={styles.rise} style={at(2)}>
              Software engineer building
            </span>
          </span>
          <span className={styles.line}>
            <span className={styles.rise} style={at(3)}>
              a multi-product <em className={styles.accent}>software company.</em>
            </span>
          </span>
        </p>
      </div>

      <dl className={styles.credits} data-depth="credits">
        <div className={styles.credit} style={at(4)}>
          <dt>Studying</dt>
          <dd>
            {PROFILE.education.status} B.Tech, AI &amp; ML — {PROFILE.education.school}
          </dd>
        </div>
        <div className={styles.credit} style={at(5)}>
          <dt>Building</dt>
          <dd>{PRODUCTS.map((product) => product.name).join(", ")}</dd>
        </div>
        <div className={styles.credit} style={at(6)}>
          <dt>Based in</dt>
          <dd>
            {PROFILE.location} — shipping since {PROFILE.freelanceSince}
          </dd>
        </div>
      </dl>

      <div className={styles.cue} aria-hidden="true">
        <span>Scroll</span>
        <span className={styles.cueTrack}>
          <span className={styles.cueDot} />
        </span>
      </div>
    </section>
  );
}
