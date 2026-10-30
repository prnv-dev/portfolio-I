import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";
import Button from "@/components/shared/Button/Button";
import { EXPERIENCE, PROFILE } from "@/data/profile";
import styles from "./ResumeViewer.module.css";

const RESUME_SRC = "/PK.RESUME.jpg";

// Skills exactly as listed on the resume.
const RESUME_SKILLS = [
  "Python",
  "Desktop application development (EXE)",
  "Web application development",
  "AI tools & ChatGPT",
  "AI-assisted development",
  "Backend development",
  "API integration",
  "Git & GitHub",
];

export default function ResumeViewer() {
  return (
    <div className="grid items-start gap-3 lg:grid-cols-[minmax(0,1fr)_20rem]">
      <figure className={styles.viewer}>
        <figcaption className={styles.toolbar}>
          <span className={styles.file}>PK.RESUME.jpg</span>
          <span className="flex items-center gap-2">
            <a href={RESUME_SRC} target="_blank" rel="noreferrer" className={styles.tool} aria-label="Open full size">
              <ExternalLink size={14} />
            </a>
            <a href={RESUME_SRC} download="Pranav-Kadam-Resume.jpg" className={styles.tool} aria-label="Download">
              <Download size={14} />
            </a>
          </span>
        </figcaption>
        <div className={styles.stage}>
          <Image
            src={RESUME_SRC}
            alt="Resume of Pranav Kadam"
            width={2479}
            height={3508}
            priority
            sizes="(min-width: 1024px) 760px, 100vw"
            className={styles.page}
          />
        </div>
      </figure>

      <aside className={styles.glance}>
        <p className={styles.label}>{"// at a glance"}</p>
        <dl className={styles.facts}>
          <div>
            <dt>role</dt>
            <dd>{EXPERIENCE.title}</dd>
          </div>
          <div>
            <dt>period</dt>
            <dd>{EXPERIENCE.period}</dd>
          </div>
          <div>
            <dt>education</dt>
            <dd>
              {PROFILE.education.degree} — {PROFILE.education.school}
            </dd>
          </div>
          <div>
            <dt>languages</dt>
            <dd>{PROFILE.languages.join(", ")}</dd>
          </div>
        </dl>
        <p className={`${styles.label} mt-6`}>{"// skills"}</p>
        <ul className={styles.skills}>
          {RESUME_SKILLS.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <Button
          href={RESUME_SRC}
          download="Pranav-Kadam-Resume.jpg"
          className="mt-6 w-full"
          icon={<Download size={15} />}
        >
          Download resume
        </Button>
      </aside>
    </div>
  );
}
