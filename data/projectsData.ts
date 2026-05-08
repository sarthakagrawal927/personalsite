import projects from '../config/projectsData.json';

export type ProjectStatus = 'active' | 'prototype' | 'paused' | 'archived';

export interface Project {
  slug: string;
  title: string;
  description: string;
  href: string;
  repoUrl?: string;
  demoUrl?: string;
  imgSrc?: string;
  status: ProjectStatus;
  theme: string;
  stack: string[];
  signals: string[];
  relatedPosts: string[];
}

export default projects as Project[];
