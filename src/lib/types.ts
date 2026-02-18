import type { LucideIcon } from "lucide-react";
import { Timestamp } from "firebase/firestore";

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

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Timestamp;
}
