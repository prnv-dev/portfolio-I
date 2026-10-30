import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Button from "@/components/shared/Button/Button";
import type { GithubUser } from "@/lib/github";
import styles from "./GithubProfile.module.css";

const formatMonth = (iso: string) =>
  new Intl.DateTimeFormat("en-GB", { month: "short", year: "numeric" }).format(new Date(iso));

export default function GithubProfile({ user }: { user: GithubUser }) {
  const stats = [
    { label: "public repos", value: String(user.public_repos) },
    { label: "followers", value: String(user.followers) },
    { label: "on github since", value: formatMonth(user.created_at) },
  ];

  return (
    <div className={styles.card}>
      <div className="flex items-center gap-4">
        <Image src={user.avatar_url} alt="" width={56} height={56} className={styles.avatar} />
        <div className="min-w-0">
          <p className={styles.name}>{user.name?.trim() || user.login}</p>
          <p className={styles.login}>@{user.login}</p>
        </div>
      </div>
      {user.bio ? <p className={`${styles.bio} mt-5`}>{user.bio}</p> : null}
      <dl className={`${styles.stats} mt-6`}>
        {stats.map((stat) => (
          <div key={stat.label}>
            <dt>{stat.label}</dt>
            <dd>{stat.value}</dd>
          </div>
        ))}
      </dl>
      <Button href={user.html_url} className="mt-6 w-full" icon={<ArrowUpRight size={15} />}>
        Open profile
      </Button>
    </div>
  );
}
