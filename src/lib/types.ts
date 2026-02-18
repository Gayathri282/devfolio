import type { LucideIcon } from "lucide-react";

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageId: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
};

export type GithubRepo = {
  id: number;
  name: string;
  description: string | null;
  url: string;
  stars: number;
  forks: number;
};
