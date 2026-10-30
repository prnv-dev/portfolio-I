import Link from "next/link";
import CopyButton from "@/components/shared/CopyButton/CopyButton";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { FOOTER_NAV } from "@/data/navigation";
import { PROFILE, SOCIALS } from "@/data/profile";
import styles from "./Footer.module.css";

const BUILT_AT = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  year: "numeric",
  timeZone: PROFILE.timezone,
}).format(new Date());

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.cta}>
        <SplitReveal
          as="p"
          lines={["Have a project,", "a role, or a question?"]}
          className={styles.headline}
          lineClassNames={[undefined, styles.headlineIndent]}
        />
        <div className={styles.mailRow}>
          <a href={`mailto:${PROFILE.email}`} className={styles.mail}>
            {PROFILE.email}
          </a>
          <CopyButton value={PROFILE.email} label="Copy" />
        </div>
      </div>

      <div className={styles.grid}>
        {FOOTER_NAV.map((column) => (
          <nav key={column.title} aria-label={column.title} className={styles.column}>
            <p className={styles.columnTitle}>{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
        <div className={styles.column}>
          <p className={styles.columnTitle}>Elsewhere</p>
          <ul>
            {SOCIALS.map((social) => (
              <li key={social.key}>
                <a href={social.href} target="_blank" rel="noreferrer" className={styles.link}>
                  {social.label} <span aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bar}>
        <span>
          © {new Date().getFullYear()} {PROFILE.name}
        </span>
        <span>{PROFILE.location}</span>
        <span>Last built {BUILT_AT}</span>
      </div>
    </footer>
  );
}
