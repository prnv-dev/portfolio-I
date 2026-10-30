import Link from "next/link";
import CopyButton from "@/components/shared/CopyButton/CopyButton";
import { FOOTER_NAV } from "@/data/navigation";
import { PROFILE, SOCIALS } from "@/data/profile";
import { SOCIAL_ICONS } from "@/lib/social-icons";
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
      <div className="mx-auto grid w-full max-w-shell gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className={styles.statement}>
            Building a software company,
            <br />
            <span className={styles.statementDim}>one product at a time.</span>
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <CopyButton value={PROFILE.email} />
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-3 gap-6">
          {FOOTER_NAV.map((column) => (
            <div key={column.title}>
              <p className={styles.columnTitle}>{column.title}</p>
              <ul className="mt-4 space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.link}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </div>

      <div className={styles.bar}>
        <div className="mx-auto flex w-full max-w-shell flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className={styles.meta}>
            © {new Date().getFullYear()} {PROFILE.name} · Nashik, IN · <span className={styles.build}>build {BUILT_AT}</span>
          </p>
          <ul className="flex items-center gap-1">
            {SOCIALS.map((social) => {
              const Icon = SOCIAL_ICONS[social.key];
              return (
                <li key={social.key}>
                  <a href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className={styles.social}>
                    <Icon size={15} />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
}
