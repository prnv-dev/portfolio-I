import { ArrowUpRight, Mail } from "lucide-react";
import CopyButton from "@/components/shared/CopyButton/CopyButton";
import Reveal from "@/components/shared/Reveal/Reveal";
import { PROFILE, SOCIALS } from "@/data/profile";
import { SOCIAL_ICONS } from "@/lib/social-icons";
import styles from "./ContactPanel.module.css";

const TOPICS = [
  { label: "A project", subject: "Project enquiry" },
  { label: "A role", subject: "Opportunity" },
  { label: "One of the products", subject: "About your products" },
  { label: "Just saying hi", subject: "Hello" },
];

const mailto = (subject: string) => `mailto:${PROFILE.email}?subject=${encodeURIComponent(subject)}`;

export default function ContactPanel() {
  return (
    <div className="grid gap-3 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <Reveal>
        <div className={styles.compose}>
          <p className={styles.label}>{"// email is best"}</p>
          <p className={`${styles.address} mt-5`}>{PROFILE.email}</p>
          <div className="mt-5">
            <CopyButton value={PROFILE.email} label="copy address" />
          </div>

          <p className={`${styles.label} mt-10`}>{"// or start with a subject"}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {TOPICS.map((topic) => (
              <li key={topic.label}>
                <a href={mailto(topic.subject)} className={styles.topic}>
                  <Mail size={13} aria-hidden="true" />
                  {topic.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <Reveal delay={0.06}>
        <ul className={styles.channels} aria-label="Other channels">
          {SOCIALS.map((social) => {
            const Icon = SOCIAL_ICONS[social.key];
            return (
              <li key={social.key}>
                <a href={social.href} target="_blank" rel="noreferrer" className={styles.channel}>
                  <span className={styles.channelIcon} aria-hidden="true">
                    <Icon size={16} />
                  </span>
                  <span className="min-w-0">
                    <span className={styles.channelName}>{social.label}</span>
                    <span className={styles.channelHandle}>{social.handle}</span>
                  </span>
                  <ArrowUpRight size={16} aria-hidden="true" className={styles.channelArrow} />
                </a>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </div>
  );
}
