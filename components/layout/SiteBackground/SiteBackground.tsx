"use client";

import Particles from "@/components/animations/background-particles/Particles";
import styles from "./SiteBackground.module.css";

const PARTICLE_COLORS = ["#3b82f6", "#22d3ee", "#64748b"];

// Fixed, site-wide backdrop: a slow particle field under a top-lit vignette.
export default function SiteBackground() {
  return (
    <div className={styles.root} aria-hidden="true">
      <div className={styles.particles}>
        <Particles
          particleCount={130}
          particleSpread={11}
          speed={0.05}
          particleColors={PARTICLE_COLORS}
          particleBaseSize={55}
          sizeRandomness={1}
          alphaParticles
          moveParticlesOnHover
          particleHoverFactor={0.5}
          glow={0.25}
          twinkle={0.4}
          clickBurst={false}
          opacity={0.55}
        />
      </div>
      <div className={styles.vignette} />
    </div>
  );
}
