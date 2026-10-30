import clsx from "clsx";
import { ArrowUpRight, Bot, Monitor, Smartphone, Globe, type LucideIcon } from "lucide-react";
import DotGrid from "@/components/animations/dot-grid/DotGrid";
import Reveal from "@/components/shared/Reveal/Reveal";
import SectionHeader from "@/components/shared/SectionHeader/SectionHeader";
import TiltCard from "@/components/shared/TiltCard/TiltCard";
import { PRODUCTS, type Product, type ProductPlatform } from "@/data/profile";
import styles from "./FeatureGrid.module.css";

const PLATFORM_ICON: Record<ProductPlatform, LucideIcon> = {
  Windows: Monitor,
  Web: Globe,
  Android: Smartphone,
  AI: Bot,
};

// Bento placement per product, in PRODUCTS order (12-col grid on lg).
const PLACEMENT: Record<string, string> = {
  "DeepScan AI": "lg:col-span-7",
  CodeVault: "lg:col-span-4",
  Propel: "lg:col-span-3",
  WatchDog: "lg:col-span-6",
  "Resume Screening System": "lg:col-span-6",
};

const ORDER = ["DeepScan AI", "CodeVault", "Propel", "WatchDog", "Resume Screening System"];

const platformCounts = PRODUCTS.reduce<Record<string, number>>((acc, product) => {
  acc[product.platform] = (acc[product.platform] ?? 0) + 1;
  return acc;
}, {});

function ProductTile({ product, featured }: { product: Product; featured?: boolean }) {
  const Icon = PLATFORM_ICON[product.platform];
  return (
    <TiltCard max={2.5} className={clsx(styles.tile, featured && styles.featured)}>
      <div className="flex items-start justify-between gap-4">
        <span className={styles.platform}>
          <Icon size={14} strokeWidth={1.7} aria-hidden="true" />
          {product.platform.toLowerCase()}
        </span>
        {product.url ? (
          <a href={product.url} target="_blank" rel="noreferrer" className={styles.visit}>
            visit <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        ) : null}
      </div>
      <h3 className={clsx(styles.name, "mt-auto pt-10")}>{product.name}</h3>
      <p className={clsx(styles.summary, "mt-2")}>{product.summary}</p>
    </TiltCard>
  );
}

export default function FeatureGrid() {
  const ordered = ORDER.map((name) => PRODUCTS.find((product) => product.name === name)!).filter(Boolean);

  return (
    <section className={styles.section}>
      <div className={styles.backdrop} aria-hidden="true">
        <DotGrid
          dotSize={2}
          gap={26}
          baseColor="#161c25"
          activeColor="#3b82f6"
          proximity={120}
          shockStrength={2}
          glow={0.5}
          fade={0.8}
          clickShock={false}
        />
      </div>

      <div className="relative mx-auto w-full max-w-shell px-5 sm:px-8">
        <SectionHeader
          index="01"
          label="the product line"
          title="One company. Five products."
          description="Each product targets a specific problem on a specific platform — Windows, the web or Android — with AI where the problem calls for it."
        />

        <div className="mt-12 grid gap-3 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:row-span-2">
            <div className={styles.intro}>
              <p className={styles.introLabel}>status: building</p>
              <p className={clsx(styles.introText, "mt-6")}>
                Started as freelance work in 2023. Now a product company in progress, run alongside the final year of
                a B.Tech in AI &amp; ML.
              </p>
              <ul className={clsx(styles.legend, "mt-auto pt-10")}>
                {Object.entries(platformCounts).map(([platform, count]) => (
                  <li key={platform}>
                    <span>{platform.toLowerCase()}</span>
                    <span className={styles.legendBar} style={{ width: `${(count / PRODUCTS.length) * 100}%` }} />
                    <span className={styles.legendCount}>{count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {ordered.map((product, index) => (
            <Reveal key={product.name} delay={0.05 * index} className={PLACEMENT[product.name]}>
              <ProductTile product={product} featured={index === 0} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
