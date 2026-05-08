import { readFile } from 'node:fs/promises';
import { URL } from 'node:url';

const source = new URL('../config/projectsData.json', import.meta.url);
const projects = JSON.parse(await readFile(source, 'utf8'));

const statuses = new Set(['active', 'prototype', 'paused', 'archived']);
const slugs = new Set();
const failures = [];

for (const [index, project] of projects.entries()) {
  const label = project.slug || `project at index ${index}`;

  for (const field of ['slug', 'title', 'description', 'href', 'status', 'theme']) {
    if (!project[field] || typeof project[field] !== 'string') {
      failures.push(`${label}: missing string field "${field}"`);
    }
  }

  if (project.slug && slugs.has(project.slug)) {
    failures.push(`${label}: duplicate slug`);
  }
  slugs.add(project.slug);

  if (project.status && !statuses.has(project.status)) {
    failures.push(`${label}: unsupported status "${project.status}"`);
  }

  for (const field of ['href', 'repoUrl', 'demoUrl']) {
    if (!project[field]) continue;
    try {
      new URL(project[field]);
    } catch {
      failures.push(`${label}: invalid URL in "${field}"`);
    }
  }

  for (const field of ['stack', 'signals', 'relatedPosts']) {
    if (!Array.isArray(project[field])) {
      failures.push(`${label}: "${field}" must be an array`);
    }
  }

  if (!project.repoUrl && !project.demoUrl && !project.href) {
    failures.push(`${label}: needs at least one public link`);
  }
}

if (failures.length > 0) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Validated ${projects.length} projects.`);
