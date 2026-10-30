import styles from "./Grain.module.css";

// Static film grain over the whole site — adds depth so dark surfaces never read as flat black.
export default function Grain() {
  return <div className={styles.grain} aria-hidden="true" />;
}
