"use client";

import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import ProductTable from "@/components/about/ProductTable/ProductTable";
import { EXPERIENCE, PRODUCTS, PROFILE, SOCIALS } from "@/data/profile";
import styles from "./Readme.module.css";

interface Section {
  id: string;
  title: string;
  body: ReactNode;
}

const SECTIONS: Section[] = [
  {
    id: "now",
    title: "Now",
    body: (
      <ul>
        <li>
          Final year of a {PROFILE.education.degree} at {PROFILE.education.school}, {PROFILE.education.city}.
        </li>
        <li>
          Building a software company with {PRODUCTS.length} products in the line:{" "}
          {PRODUCTS.map((product) => product.name).join(", ")}.
        </li>
      </ul>
    ),
  },
  {
    id: "background",
    title: "Background",
    body: (
      <>
        <p>
          {EXPERIENCE.title}, {EXPERIENCE.period.replace("—", "to").toLowerCase()}.
        </p>
        <ul>
          {EXPERIENCE.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "how-i-build",
    title: "How I build",
    body: (
      <ul>
        <li>
          <strong>Desktop:</strong> Python, packaged into Windows executables with PyInstaller.
        </li>
        <li>
          <strong>Web:</strong> HTML, CSS, JavaScript, React and Node.js, deployed and maintained after launch.
        </li>
        <li>
          <strong>AI:</strong> in the products where detection or screening is the job, and in my own workflow for
          building and debugging.
        </li>
        <li>
          <strong>Lifecycle:</strong> concept, development, testing, deployment and maintenance, handled end to end.
        </li>
      </ul>
    ),
  },
  {
    id: "products",
    title: "Products",
    body: <ProductTable />,
  },
  {
    id: "languages",
    title: "Languages",
    body: <p>{PROFILE.languages.join(", ")}.</p>,
  },
  {
    id: "elsewhere",
    title: "Elsewhere",
    body: (
      <ul className={styles.links}>
        <li>
          <a href={`mailto:${PROFILE.email}`}>
            <span>email</span>
            <span>{PROFILE.email}</span>
          </a>
        </li>
        {SOCIALS.map((social) => (
          <li key={social.key}>
            <a href={social.href} target="_blank" rel="noreferrer">
              <span>{social.label.toLowerCase()}</span>
              <span>
                {social.handle} <ArrowUpRight size={13} aria-hidden="true" />
              </span>
            </a>
          </li>
        ))}
      </ul>
    ),
  },
];

export default function Readme() {
  const [active, setActive] = useState(SECTIONS[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px" },
    );
    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-8 lg:grid-cols-[13rem_minmax(0,1fr)]">
      <aside className="hidden lg:block">
        <nav aria-label="README sections" className={styles.toc}>
          <p className={styles.tocTitle}>contents</p>
          <ol className="mt-4 space-y-1">
            {SECTIONS.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className={clsx(styles.tocLink, active === section.id && styles.tocLinkActive)}
                >
                  <span className={styles.tocIndex}>{index + 1}</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </aside>

      <article className={styles.file}>
        <div className={styles.bar}>
          <span className={styles.tab}>README.md</span>
          <span className={styles.barMeta}>markdown · {SECTIONS.length} sections</span>
        </div>
        <div className={styles.doc}>
          <h1 className={styles.h1}>
            <span className={styles.hash} aria-hidden="true">
              #
            </span>
            {PROFILE.name}
          </h1>
          <blockquote className={styles.quote}>
            Final-year AIML engineering student at {PROFILE.education.school}, {PROFILE.education.city}. Building a
            multi-product software company.
          </blockquote>

          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2 className={styles.h2}>
                <span className={styles.hash} aria-hidden="true">
                  ##
                </span>
                {section.title}
              </h2>
              <div className={styles.body}>{section.body}</div>
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
