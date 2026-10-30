import ProductTable from "@/components/about/ProductTable/ProductTable";
import Reveal from "@/components/shared/Reveal/Reveal";
import SplitReveal from "@/components/shared/SplitReveal/SplitReveal";
import { EXPERIENCE, PROFILE } from "@/data/profile";
import styles from "./AboutGrid.module.css";

const FACTS = [
  { term: "Education", value: `${PROFILE.education.degree} — ${PROFILE.education.school}, ${PROFILE.education.city}` },
  { term: "Year", value: PROFILE.education.status },
  { term: "Based in", value: PROFILE.location },
  { term: "Speaks", value: PROFILE.languages.join(", ") },
  { term: "Shipping since", value: String(PROFILE.freelanceSince) },
];

// Editorial about: a pull statement, facts beside prose, then experience and products.
export default function AboutGrid() {
  return (
    <div className={styles.about}>
      <Reveal className={styles.lead}>
        <p>
          I&apos;m Pranav — a final-year B.Tech student in Artificial Intelligence &amp; Machine Learning at Sandip
          University, Nashik.
        </p>
      </Reveal>

      <div className={styles.split}>
        <dl className={styles.facts}>
          {FACTS.map((fact) => (
            <div key={fact.term}>
              <dt>{fact.term}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <Reveal className={styles.prose}>
          <p>
            I&apos;ve been writing software independently since {PROFILE.freelanceSince}: Windows desktop apps
            packaged as EXEs, web applications, and automation tools for practical, everyday problems. I use AI
            tooling heavily in my own workflow — for building, debugging and weighing design decisions.
          </p>
          <p>
            Today that work is turning into a software company with a small product line, covering Windows, the web
            and Android.
          </p>
        </Reveal>
      </div>

      <section className={styles.block} aria-label="Experience">
        <div className={styles.blockHead}>
          <SplitReveal as="h2" lines={["Experience"]} className={styles.h2} />
          <p className={styles.period}>{EXPERIENCE.period}</p>
        </div>
        <p className={styles.role}>{EXPERIENCE.title}</p>
        <ol className={styles.points}>
          {EXPERIENCE.points.map((point, index) => (
            <li key={point}>
              <span className={styles.pointIndex}>{String(index + 1).padStart(2, "0")}</span>
              <span>{point}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.block} aria-label="Products">
        <div className={styles.blockHead}>
          <SplitReveal as="h2" lines={["Products"]} className={styles.h2} />
        </div>
        <Reveal>
          <ProductTable />
        </Reveal>
      </section>
    </div>
  );
}
