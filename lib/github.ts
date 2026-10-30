import { PROFILE } from "@/data/profile";

export interface GithubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  created_at: string;
}

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  fork: boolean;
}

const API = "https://api.github.com";
const REVALIDATE_SECONDS = 3600;

async function request<T>(path: string): Promise<T | null> {
  try {
    const response = await fetch(`${API}${path}`, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: REVALIDATE_SECONDS },
    });
    if (!response.ok) return null;
    return (await response.json()) as T;
  } catch {
    return null;
  }
}

export const getGithubUser = () => request<GithubUser>(`/users/${PROFILE.handle}`);

export async function getRecentRepos(limit = 8) {
  const repos = await request<GithubRepo[]>(`/users/${PROFILE.handle}/repos?sort=pushed&per_page=30`);
  if (!repos) return null;
  return repos
    .filter((repo) => !repo.fork && repo.name.toLowerCase() !== PROFILE.handle.toLowerCase())
    .slice(0, limit);
}
