import clsx from "clsx";
import type { ReactNode } from "react";
import ShinyText from "@/components/animations/shiny-text/ShinyText";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}

export default function SectionHeader({ index, label, title, description, action, className }: SectionHeaderProps) {
  return (
    <header className={clsx("flex flex-col gap-6 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <p className={styles.eyebrow}>
          <span className={styles.index}>{index}</span>
          <span className={styles.rule} aria-hidden="true" />
          <span>{label}</span>
        </p>
        <h2 className={clsx(styles.title, "mt-4")}>
          <ShinyText
            text={title}
            color="#d5dbe3"
            shineColor="#ffffff"
            speed={1.6}
            angle={110}
            shineWidth={30}
            trigger="view"
          />
        </h2>
        {description ? <p className={clsx(styles.description, "mt-4")}>{description}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </header>
  );
}
