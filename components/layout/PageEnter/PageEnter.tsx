import type { ReactNode } from "react";
import styles from "./PageEnter.module.css";

// Route entrance used by app/template.tsx, which remounts per navigation.
// Pure CSS so pages paint before hydration.
export default function PageEnter({ children }: { children: ReactNode }) {
  return <div className={styles.enter}>{children}</div>;
}
