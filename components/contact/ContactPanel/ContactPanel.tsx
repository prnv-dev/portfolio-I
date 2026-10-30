import CopyButton from "@/components/shared/CopyButton/CopyButton";
import Reveal from "@/components/shared/Reveal/Reveal";
import { PROFILE, SOCIALS } from "@/data/profile";
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
    <div className={styles.grid}>
      <div>
        <a href={`mailto:${PROFILE.email}`} className={styles.address}>
          {PROFILE.email}
        </a>
        <div className="mt-6">
          <CopyButton value={PROFILE.email} label="Copy address" />
        </div>

        <Reveal className={styles.topics}>
          <h2 className={styles.heading}>Or start with a subject</h2>
          <ul>
            {TOPICS.map((topic) => (
              <li key={topic.label}>
                <a href={mailto(topic.subject)} className={styles.topic}>
                  <span>{topic.label}</span>
                  <span className={styles.topicSubject}>“{topic.subject}” →</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <Reveal className={styles.channels} delay={0.08}>
        <h2 className={styles.heading}>Elsewhere</h2>
        <ul>
          {SOCIALS.map((social) => (
            <li key={social.key}>
              <a href={social.href} target="_blank" rel="noreferrer" className={styles.channel}>
                <span className={styles.channelName}>{social.label}</span>
                <span className={styles.channelHandle}>
                  {social.handle} <span aria-hidden="true">↗</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
