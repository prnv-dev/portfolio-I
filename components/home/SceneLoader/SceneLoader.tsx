import styles from "./SceneLoader.module.css";

// Shown while the 3D chunk downloads: the core's outline draws itself in place,
// so the scene "assembles" rather than popping in behind a spinner.
export default function SceneLoader() {
  return (
    <div className={styles.loader} role="status" aria-label="Loading 3D scene">
      <svg viewBox="0 0 400 400" className={styles.figure} aria-hidden="true">
        <defs>
          <linearGradient id="loader-stroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#3b82f6" />
            <stop offset="1" stopColor="#22d3ee" />
          </linearGradient>
        </defs>
        <ellipse className={styles.ring} cx="200" cy="200" rx="170" ry="52" transform="rotate(-10 200 200)" />
        <path
          className={styles.edge}
          d="M200 112 L276 156 L276 244 L200 288 L124 244 L124 156 Z M124 156 L200 200 L276 156 M200 200 L200 288"
        />
        <circle className={styles.core} cx="200" cy="200" r="14" />
      </svg>
      <span className={styles.caption}>Assembling the scene</span>
    </div>
  );
}
