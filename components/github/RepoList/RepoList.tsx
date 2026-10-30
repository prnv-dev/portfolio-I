import { ArrowUpRight, Globe, Star } from "lucide-react";
import Reveal from "@/components/shared/Reveal/Reveal";
import type { GithubRepo } from "@/lib/github";
import styles from "./RepoList.module.css";

const formatDay = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "short", year: "numeric" }).format(new Date(iso));

export default function RepoList({ repos }: { repos: GithubRepo[] }) {
  return (
    <div className={styles.list}>
      <div className={styles.head}>
        <span>recently pushed</span>
        <span>{repos.length} repositories</span>
      </div>
      <ul>
        {repos.map((repo, index) => (
          <li key={repo.id}>
            <Reveal delay={index * 0.03} y={8}>
              <div className={styles.row}>
                <div className="min-w-0">
                  <a href={repo.html_url} target="_blank" rel="noreferrer" className={styles.name}>
                    {repo.name}
                    <ArrowUpRight size={14} aria-hidden="true" className={styles.arrow} />
                  </a>
                  {repo.description ? <p className={styles.description}>{repo.description}</p> : null}
                  <p className={styles.meta}>
                    {repo.language ? <span>{repo.language.toLowerCase()}</span> : null}
                    <span className="inline-flex items-center gap-1">
                      <Star size={12} aria-hidden="true" /> {repo.stargazers_count}
                    </span>
                    <span>pushed {formatDay(repo.pushed_at)}</span>
                  </p>
                </div>
                {repo.homepage ? (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.live}
                    aria-label={`Open the live site for ${repo.name}`}
                  >
                    <Globe size={14} aria-hidden="true" />
                    <span>live</span>
                  </a>
                ) : null}
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}
