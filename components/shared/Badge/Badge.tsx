import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Badge.module.css";

interface BadgeProps {
  children: ReactNode;
  tone?: "neutral" | "accent";
  dot?: "live" | "idle";
  className?: string;
}

export default function Badge({ children, tone = "neutral", dot, className }: BadgeProps) {
  return (
    <span className={clsx(styles.badge, styles[tone], className)}>
      {dot ? <span className={clsx(styles.dot, styles[dot])} aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
