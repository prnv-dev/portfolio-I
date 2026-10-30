"use client";

import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/shared/Button/Button";
import { PLAY_NAV, PRIMARY_NAV } from "@/data/navigation";
import { PROFILE } from "@/data/profile";
import styles from "./Navbar.module.css";

const isActive = (pathname: string, href: string) => pathname === href || pathname.startsWith(`${href}/`);

function LocalClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const format = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: PROFILE.timezone,
    });
    const tick = () => setTime(format.format(new Date()));
    tick();
    const id = window.setInterval(tick, 15_000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className={styles.clock} title="Local time in Nashik">
      <span className={styles.clockDot} aria-hidden="true" />
      NSK {time ?? "--:--"}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const playActive = PLAY_NAV.some((link) => isActive(pathname, link.href));

  return (
    <header className={clsx(styles.header, (scrolled || open) && styles.scrolled)}>
      <div className="mx-auto flex h-nav w-full max-w-shell items-center gap-6 px-5 sm:px-8">
        <Link href="/" className={styles.brand} aria-label="Pranav Kadam — home">
          <span className={styles.mark} aria-hidden="true">
            pk
          </span>
          <span className={styles.wordmark}>
            pranav<span className={styles.wordmarkDim}>.kadam</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {PRIMARY_NAV.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(styles.link, active && styles.linkActive)}
                aria-current={active ? "page" : undefined}
              >
                {active ? <motion.span layoutId="nav-active" className={styles.linkPill} /> : null}
                <span className="relative">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <span className="hidden lg:inline-flex">
            <LocalClock />
          </span>
          <Link href="/lets-fun" className={clsx(styles.play, playActive && styles.playActive, "hidden sm:inline-flex")}>
            ~/play
          </Link>
          <span className="hidden sm:inline-flex">
            <Button href="/contact" size="sm">
              Contact
            </Button>
          </span>
          <button
            type="button"
            className={clsx(styles.menuButton, "md:hidden")}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobile"
            className={clsx(styles.sheet, "md:hidden")}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className="flex flex-col px-5 py-4">
              {[{ label: "Home", href: "/" }, ...PRIMARY_NAV, { label: "Contact", href: "/contact" }, ...PLAY_NAV].map(
                (link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -6 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.03 * index, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      className={clsx(styles.sheetLink, pathname === link.href && styles.sheetLinkActive)}
                    >
                      <span className={styles.sheetIndex}>{String(index).padStart(2, "0")}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ),
              )}
            </ul>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
