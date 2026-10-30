"use client";

import clsx from "clsx";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useRef, type PointerEvent, type ReactNode } from "react";
import styles from "./TiltCard.module.css";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  /** Max tilt in degrees on each axis. */
  max?: number;
}

const SPRING = { stiffness: 220, damping: 22, mass: 0.6 };

// Surface card that tilts toward the cursor and carries a soft spotlight.
// Mouse only — touch and reduced-motion users get a static card.
export default function TiltCard({ children, className, max = 5 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const rotateX = useSpring(useMotionValue(0), SPRING);
  const rotateY = useSpring(useMotionValue(0), SPRING);
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const spotlight = useMotionTemplate`radial-gradient(380px circle at ${mx}% ${my}%, rgba(34, 211, 238, 0.09), transparent 65%)`;

  const onMove = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    mx.set(px * 100);
    my.set(py * 100);
    if (reduce) return;
    rotateY.set((px - 0.5) * max * 2);
    rotateX.set(-(py - 0.5) * max * 2);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={clsx(styles.card, className)}
    >
      <motion.div aria-hidden="true" className={styles.spotlight} style={{ background: spotlight }} />
      {children}
    </motion.div>
  );
}
