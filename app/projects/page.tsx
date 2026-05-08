import Link from '@/components/Link';
import projectsData, { type Project } from '@/data/projectsData';
import { genPageMetadata } from 'app/seo';

export const metadata = genPageMetadata({ title: 'Projects' });

type ProjectsSearchParams = Promise<{
  status?: string;
  theme?: string;
}>;

const statusLabels: Record<Project['status'], string> = {
  active: 'Active',
  prototype: 'Prototype',
  paused: 'Paused',
  archived: 'Archived',
};

function unique(values: string[]) {
  return Array.from(new Set(values)).sort((a, b) => a.localeCompare(b));
}

function projectUrl(project: Project) {
  return project.demoUrl || project.repoUrl || project.href;
}

function optionHref(kind: 'status' | 'theme', value: string) {
  return `/projects?${kind}=${encodeURIComponent(value)}`;
}

function formatTheme(theme: string) {
  return theme
    .split('-')
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(' ');
}

export default async function Projects({ searchParams }: { searchParams: ProjectsSearchParams }) {
  const params = await searchParams;
  const selectedStatus = params.status;
  const selectedTheme = params.theme;

  const statuses = unique(projectsData.map((project) => project.status));
  const themes = unique(projectsData.map((project) => project.theme));
  const visibleProjects = projectsData.filter((project) => {
    return (
      (!selectedStatus || project.status === selectedStatus) &&
      (!selectedTheme || project.theme === selectedTheme)
    );
  });
  const activeProjects = projectsData.filter((project) => project.status === 'active').length;

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <section className="space-y-6 pt-6 pb-10">
        <div className="space-y-3">
          <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold tracking-wide uppercase">
            Living constellation
          </p>
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Projects
          </h1>
          <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
            A current map of the products, experiments, and operating systems I keep alive across
            the fleet.
          </p>
        </div>

        <dl className="grid gap-4 sm:grid-cols-3">
          <div className="border-primary-500 border-l-4 py-2 pl-4">
            <dt className="text-sm text-gray-500 dark:text-gray-400">Tracked</dt>
            <dd className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {projectsData.length}
            </dd>
          </div>
          <div className="border-l-4 border-emerald-500 py-2 pl-4">
            <dt className="text-sm text-gray-500 dark:text-gray-400">Active</dt>
            <dd className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {activeProjects}
            </dd>
          </div>
          <div className="border-l-4 border-amber-500 py-2 pl-4">
            <dt className="text-sm text-gray-500 dark:text-gray-400">Themes</dt>
            <dd className="text-2xl font-bold text-gray-900 dark:text-gray-100">{themes.length}</dd>
          </div>
        </dl>
      </section>

      <section className="space-y-6 py-8">
        <div className="flex flex-wrap gap-2">
          <Link
            href="/projects"
            className={`rounded-md border px-3 py-2 text-sm font-medium ${
              !selectedStatus && !selectedTheme
                ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                : 'hover:border-primary-400 border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </Link>
          {statuses.map((status) => (
            <Link
              key={status}
              href={optionHref('status', status)}
              className={`rounded-md border px-3 py-2 text-sm font-medium ${
                selectedStatus === status
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'hover:border-primary-400 border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              {statusLabels[status as Project['status']]}
            </Link>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <Link
              key={theme}
              href={optionHref('theme', theme)}
              className={`rounded-md border px-3 py-2 text-sm font-medium ${
                selectedTheme === theme
                  ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                  : 'hover:border-primary-400 border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300'
              }`}
            >
              {formatTheme(theme)}
            </Link>
          ))}
        </div>
      </section>

      <section className="grid gap-6 py-10 md:grid-cols-2">
        {visibleProjects.map((project) => (
          <article
            key={project.slug}
            className="rounded-md border border-gray-200 p-5 dark:border-gray-700"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                  {formatTheme(project.theme)}
                </p>
                <h2 className="mt-1 text-2xl leading-8 font-bold tracking-tight text-gray-900 dark:text-gray-100">
                  <Link href={projectUrl(project)}>{project.title}</Link>
                </h2>
              </div>
              <span className="rounded-md border border-gray-200 px-2 py-1 text-xs font-semibold text-gray-500 uppercase dark:border-gray-700 dark:text-gray-400">
                {statusLabels[project.status]}
              </span>
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.signals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm font-medium">
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  Open app
                </Link>
              )}
              {project.repoUrl && (
                <Link
                  href={project.repoUrl}
                  className="text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  Repository
                </Link>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
