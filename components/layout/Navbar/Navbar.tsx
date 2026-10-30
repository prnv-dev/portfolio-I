"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { PLAY_NAV, PRIMARY_NAV } from "@/data/navigation";
import { PROFILE, SOCIALS } from "@/data/profile";
import styles from "./Navbar.module.css";

const LINKS = [...PRIMARY_NAV, { label: "Play", href: PLAY_NAV[0].href }];
const isActive = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`) || (href === "/lets-fun" && pathname === "/brain-mode");

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [solid, setSolid] = useState(false);
  const lastY = useRef(0);

  // Hide while reading downward, return on any upward scroll.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setSolid(y > 24);
      setHidden(y > 240 && y > lastY.current + 4);
      if (y < lastY.current - 4 || y < 240) setHidden(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.documentElement.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={clsx(styles.header, solid && styles.solid, hidden && !open && styles.hidden, open && styles.open)}>
      <div className={styles.bar}>
        <Link href="/" className={styles.wordmark} aria-label="Pranav Kadam — home">
          Pranav Kadam
        </Link>

        <nav aria-label="Primary" className={styles.links}>
          {LINKS.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(styles.link, active && styles.active)}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Link href="/contact" className={styles.contact}>
          Contact <span aria-hidden="true">↗</span>
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
          <span className={clsx(styles.burger, open && styles.burgerOpen)} aria-hidden="true">
            <span />
            <span />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="site-menu"
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav aria-label="Menu">
              <ul className={styles.overlayList}>
                {[{ label: "Home", href: "/" }, ...LINKS, { label: "Contact", href: "/contact" }].map((link, index) => (
                  <li key={link.href} className={styles.overlayItem}>
                    <motion.span
                      className="block"
                      initial={{ y: "110%" }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.04 * index, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={link.href}
                        className={clsx(styles.overlayLink, pathname === link.href && styles.overlayActive)}
                      >
                        {link.label}
                      </Link>
                    </motion.span>
                  </li>
                ))}
              </ul>
            </nav>
            <div className={styles.overlayMeta}>
              <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((social) => (
                  <a key={social.key} href={social.href} target="_blank" rel="noreferrer">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
