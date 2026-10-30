import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button/Button";
import CopyButton from "@/components/shared/CopyButton/CopyButton";
import Reveal from "@/components/shared/Reveal/Reveal";
import { PROFILE } from "@/data/profile";
import styles from "./ContactBand.module.css";

export default function ContactBand() {
  return (
    <section className="mx-auto w-full max-w-shell px-5 pb-24 sm:px-8">
      <Reveal>
        <div className={styles.band}>
          <div className={styles.glow} aria-hidden="true" />
          <p className={styles.label}>say hello</p>
          <h2 className={`${styles.title} mt-4`}>
            Have a project, a role or a question about the products?
          </h2>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href="/contact" icon={<ArrowRight size={15} />}>
              Get in touch
            </Button>
            <CopyButton value={PROFILE.email} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
