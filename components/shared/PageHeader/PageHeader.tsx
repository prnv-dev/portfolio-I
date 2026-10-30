import type { ReactNode } from "react";
import DotGrid from "@/components/animations/dot-grid/DotGrid";
import ShinyText from "@/components/animations/shiny-text/ShinyText";
import styles from "./PageHeader.module.css";

interface PageHeaderProps {
  /** Shell-style path shown above the title, e.g. "~/projects". */
  path: string;
  title: string;
  lede?: ReactNode;
  children?: ReactNode;
}

export default function PageHeader({ path, title, lede, children }: PageHeaderProps) {
  return (
    <section className={styles.header}>
      <div className={styles.backdrop} aria-hidden="true">
        <DotGrid
          dotSize={2}
          gap={20}
          baseColor="#1a212b"
          activeColor="#22d3ee"
          proximity={110}
          shockStrength={3}
          glow={0.6}
          fade={0.7}
          clickShock={false}
        />
      </div>
      <div className={`${styles.inner} relative mx-auto w-full max-w-shell px-5 sm:px-8`}>
        <p className={styles.path}>
          <span className={styles.prompt}>$</span> cd {path}
        </p>
        <h1 className={`${styles.title} mt-5`}>
          <ShinyText text={title} color="#dfe4ea" shineColor="#ffffff" speed={2} delay={5} angle={110} shineWidth={26} />
        </h1>
        {lede ? <div className={`${styles.lede} mt-5`}>{lede}</div> : null}
        {children ? <div className="mt-8">{children}</div> : null}
      </div>
    </section>
  );
}
