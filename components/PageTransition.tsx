"use client";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, type PropsWithChildren } from "react";
export function PageTransition({ children }: PropsWithChildren) {
  const pathname = usePathname(); const reduceMotion = useReducedMotion();
  const firstLoad = useRef(true);
  useEffect(() => { firstLoad.current = false; }, []);
  const entrance = reduceMotion || firstLoad.current ? false : { opacity: 0, y: 10, filter: "blur(5px)" };
  return <AnimatePresence mode="wait" initial={false}><motion.main key={pathname} className="relative z-10 min-h-screen" initial={entrance} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8, filter: "blur(4px)" }} transition={{ duration: reduceMotion ? 0 : 0.46, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.main></AnimatePresence>;
}
