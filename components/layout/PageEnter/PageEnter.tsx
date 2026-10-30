"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

// Route entrance used by app/template.tsx — remounts per navigation.
// Behaviour-only wrapper — no visual styling of its own.
export default function PageEnter({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
