import type { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import DotGrid from "@/components/animations/dot-grid/DotGrid";
import OrbitImages from "@/components/animations/orbit-images/OrbitImages";
import ShinyText from "@/components/animations/shiny-text/ShinyText";
import Badge from "@/components/shared/Badge/Badge";
import Button from "@/components/shared/Button/Button";
import { PRODUCTS, PROFILE } from "@/data/profile";
import { ALL_SKILLS } from "@/data/skills";
import styles from "./Hero.module.css";

const ORBIT_IMAGES = ALL_SKILLS.map((skill) => ({ src: skill.icon, alt: skill.name }));

const META = [
  { label: "based in", value: PROFILE.location },
  { label: "shipping since", value: String(PROFILE.freelanceSince) },
  { label: "products", value: `${PRODUCTS.length} in the line` },
];

function Whoami() {
  return (
    <div className={styles.whoami}>
      <div className={styles.whoamiBar}>
        <span className={styles.whoamiTitle}>pk@nashik — zsh</span>
      </div>
      <div className={styles.whoamiBody}>
        <p>
          <span className={styles.prompt}>$</span> whoami
        </p>
        <p className={styles.out}>pranav kadam</p>
        <p>
          <span className={styles.prompt}>$</span> cat now.txt
        </p>
        <p className={styles.out}>final year, b.tech aiml</p>
        <p className={styles.out}>
          building {PRODUCTS.length} products<span className={styles.caret} aria-hidden="true" />
        </p>
      </div>
    </div>
  );
}

export default function Hero() {
  // CSS-driven entrance so the hero paints before hydration.
  const enter = (delay: number) => ({ style: { "--enter-delay": `${delay}s` } as CSSProperties });

  return (
    <section className={styles.hero}>
      <div className={styles.grid} aria-hidden="true">
        <DotGrid
          dotSize={2}
          gap={22}
          baseColor="#222b38"
          activeColor="#22d3ee"
          proximity={130}
          shockRadius={280}
          shockStrength={3}
          glow={0.7}
          fade={0.55}
        />
      </div>

      <div className="relative mx-auto grid w-full max-w-shell items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div>
          <div {...enter(0.05)} className={styles.enter}>
            <Badge dot="live" tone="accent">
              {PROFILE.education.status} · {PROFILE.education.school}
            </Badge>
          </div>

          <h1 {...enter(0.12)} className={`${styles.enter} ${styles.title} mt-7`}>
            <ShinyText
              text={PROFILE.name}
              color="#e6e9ee"
              shineColor="#7dd3fc"
              speed={2.4}
              delay={4}
              angle={115}
              shineWidth={22}
              glow={0.2}
            />
            <span className={styles.subtitle}>Software engineer, building a multi-product company.</span>
          </h1>

          <p {...enter(0.2)} className={`${styles.enter} ${styles.lede} mt-6`}>
            I&apos;m a final-year AIML engineering student at Sandip University in Nashik. I write desktop, web and AI
            software, and I&apos;m turning it into a small product line —{" "}
            {PRODUCTS.map((product, index) => (
              <span key={product.name}>
                <span className={styles.product}>{product.name}</span>
                {index < PRODUCTS.length - 2 ? ", " : index === PRODUCTS.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>

          <div {...enter(0.28)} className={`${styles.enter} mt-9 flex flex-wrap items-center gap-3`}>
            <Button href="/projects" icon={<ArrowRight size={15} />}>
              See the work
            </Button>
            <Button href="/about" variant="ghost">
              About me
            </Button>
          </div>

          <dl {...enter(0.36)} className={`${styles.enter} ${styles.meta} mt-12`}>
            {META.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div {...enter(0.2)} className={`${styles.enterScale} ${styles.orbit}`}>
          <OrbitImages
            images={ORBIT_IMAGES}
            shape="ellipse"
            baseWidth={900}
            radiusX={360}
            radiusY={250}
            rotation={-10}
            itemSize={62}
            duration={52}
            depth={0.6}
            itemRadius={14}
            shadow={0.4}
            hoverScale={1.1}
            hoverSpeed={0.15}
            showPath
            pathColor="rgba(148, 163, 184, 0.14)"
            pathWidth={1}
            pathDash={3}
            clickToFront={false}
            centerContent={<Whoami />}
          />
        </div>
      </div>
    </section>
  );
}
