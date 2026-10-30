"use client";

import { useLayoutEffect, useRef } from "react";
import { PRODUCTS } from "@/data/profile";
import { gsap } from "@/lib/gsap";
import styles from "./ProductReel.module.css";

// Where each panel's light falls — varies the frames so the reel doesn't feel stamped.
const GLOWS = ["20% 30%", "80% 70%", "30% 80%", "75% 25%", "50% 55%"];

export default function ProductReel() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLSpanElement>(null);

  // Desktop: pin the section and translate the track sideways as you scroll down,
  // one product per frame. Names drift slower than their panels for depth.
  useLayoutEffect(() => {
    const el = root.current;
    const rail = track.current;
    if (!el || !rail) return;
    const mm = gsap.matchMedia();
    mm.add("(min-width: 900px) and (prefers-reduced-motion: no-preference)", () => {
      const distance = () => rail.scrollWidth - window.innerWidth;
      const slide = gsap.to(rail, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top top",
          end: () => `+=${distance()}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => bar.current && gsap.set(bar.current, { scaleX: self.progress }),
        },
      });
      rail.querySelectorAll<HTMLElement>("[data-parallax]").forEach((name) => {
        gsap.fromTo(
          name,
          { xPercent: 14 },
          {
            xPercent: -14,
            ease: "none",
            scrollTrigger: {
              trigger: name.closest("article"),
              containerAnimation: slide,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} className={styles.reel} aria-label="The product line">
      <div ref={track} className={styles.track}>
        <div className={styles.intro}>
          <p className={styles.introIndex}>(02)</p>
          <h2 className={styles.introTitle}>
            Five products.
            <br />
            <span className={styles.introDim}>One company.</span>
          </h2>
          <p className={styles.introCopy}>
            Each one takes a single problem on a single platform — Windows, the web or Android — and uses AI where
            the problem calls for it.
          </p>
        </div>

        {PRODUCTS.map((product, index) => (
          <article
            key={product.name}
            className={styles.panel}
            style={{ backgroundImage: `radial-gradient(60% 55% at ${GLOWS[index]}, rgba(59,130,246,0.14), transparent 70%)` }}
          >
            <div className={styles.panelTop}>
              <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.platform}>{product.platform}</span>
            </div>
            <h3 className={styles.name} data-parallax>
              {product.name}
            </h3>
            <div className={styles.panelBottom}>
              <p className={styles.summary}>{product.summary}</p>
              {product.url ? (
                <a href={product.url} target="_blank" rel="noreferrer" className={styles.visit}>
                  Visit {new URL(product.url).host.replace(/^www\./, "")} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <span className={styles.soon}>Not public yet</span>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className={styles.progress} aria-hidden="true">
        <span ref={bar} className={styles.progressBar} />
      </div>
    </section>
  );
}
