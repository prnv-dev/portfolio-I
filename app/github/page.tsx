import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import GithubProfile from "@/components/github/GithubProfile/GithubProfile";
import RepoList from "@/components/github/RepoList/RepoList";
import Button from "@/components/shared/Button/Button";
import PageHeader from "@/components/shared/PageHeader/PageHeader";
import { PROFILE } from "@/data/profile";
import { getGithubUser, getRecentRepos } from "@/lib/github";

export const metadata: Metadata = {
  title: "GitHub",
  description: "Recent public repositories and activity from Pranav Kadam on GitHub.",
};

export const revalidate = 3600;

export default async function GithubPage() {
  const [user, repos] = await Promise.all([getGithubUser(), getRecentRepos()]);
  const profileUrl = `https://github.com/${PROFILE.handle}`;

  return (
    <>
      <PageHeader
        title={["Building", "in the open"]}
        lede="Live from the GitHub API and refreshed hourly — the repositories I've pushed to most recently."
      />
      <section className="px-gutter py-16 sm:py-24">
        {user && repos ? (
          <div className="grid items-start gap-3 lg:grid-cols-[22rem_minmax(0,1fr)]">
            <div className="lg:sticky lg:top-[calc(var(--nav-h)+2rem)]">
              <GithubProfile user={user} />
            </div>
            <RepoList repos={repos} />
          </div>
        ) : (
          <div className="flex flex-col items-start gap-4">
            <p className="text-fg-muted">GitHub didn&apos;t respond just now. The profile is one click away.</p>
            <Button href={profileUrl} icon={<ArrowUpRight size={15} />}>
              @{PROFILE.handle} on GitHub
            </Button>
          </div>
        )}
      </section>
    </>
  );
}
