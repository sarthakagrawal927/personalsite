import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { readingPaths, themeClusters } from '@/data/essayKnowledge'
import { genPageMetadata } from 'app/seo'
import { allBlogs } from 'contentlayer/generated'
import { allCoreContent, sortPosts } from 'pliny/utils/contentlayer'
import { formatDate } from 'pliny/utils/formatDate'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'Essays',
  description: 'A knowledge graph and guided reading paths through the essay archive.',
})

function bySlug(slug: string) {
  return allCoreContent(sortPosts(allBlogs)).find((post) => post.slug === slug)
}

function postsForTags(tags: string[]) {
  const tagSet = new Set(tags)

  return allCoreContent(sortPosts(allBlogs))
    .filter((post) => post.tags?.some((tag) => tagSet.has(tag)))
    .slice(0, 5)
}

function getClusterStrength(tags: string[]) {
  const tagSet = new Set(tags)

  return allCoreContent(sortPosts(allBlogs)).filter((post) =>
    post.tags?.some((tag) => tagSet.has(tag))
  ).length
}

export default function EssaysPage() {
  const posts = allCoreContent(sortPosts(allBlogs))
  const totalReadingMinutes = posts.reduce((total, post) => {
    const minutes = Math.ceil(post.readingTime?.minutes ?? 0)
    return total + minutes
  }, 0)

  return (
    <div className="space-y-12">
      <div className="space-y-4 pt-6 pb-4">
        <p className="text-primary-500 text-sm font-semibold tracking-wide uppercase">Essays</p>
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Knowledge graph
        </h1>
        <p className="max-w-3xl text-lg leading-7 text-gray-500 dark:text-gray-400">
          The archive is organized as themes instead of a reverse-chronological pile: use the graph
          for adjacent ideas, or follow a path when you want a guided sequence.
        </p>
        <dl className="grid gap-3 sm:grid-cols-3">
          <div className="rounded border border-gray-200 p-4 dark:border-gray-700">
            <dt className="text-sm text-gray-500 uppercase dark:text-gray-400">Essays</dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {posts.length}
            </dd>
          </div>
          <div className="rounded border border-gray-200 p-4 dark:border-gray-700">
            <dt className="text-sm text-gray-500 uppercase dark:text-gray-400">Themes</dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {themeClusters.length}
            </dd>
          </div>
          <div className="rounded border border-gray-200 p-4 dark:border-gray-700">
            <dt className="text-sm text-gray-500 uppercase dark:text-gray-400">Reading time</dt>
            <dd className="mt-1 text-2xl font-bold text-gray-900 dark:text-gray-100">
              {totalReadingMinutes} min
            </dd>
          </div>
        </dl>
      </div>

      <section className="space-y-6" aria-labelledby="guided-paths">
        <div className="flex items-end justify-between gap-4 border-b border-gray-200 pb-3 dark:border-gray-700">
          <div>
            <h2
              id="guided-paths"
              className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
            >
              Guided reading paths
            </h2>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              Curated routes through older and newer essays that share a question.
            </p>
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {readingPaths.map((path) => {
            const pathPosts = path.slugs.map(bySlug).filter(Boolean)

            return (
              <article
                key={path.title}
                className="rounded border border-gray-200 p-5 dark:border-gray-700"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                    {path.title}
                  </h3>
                  <p className="text-sm leading-6 text-gray-500 dark:text-gray-400">
                    {path.description}
                  </p>
                </div>
                <ol className="mt-5 space-y-4">
                  {pathPosts.map((post, index) => (
                    <li key={post.slug} className="flex gap-4">
                      <span className="border-primary-500 text-primary-500 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-semibold">
                        {index + 1}
                      </span>
                      <div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary-500 dark:hover:text-primary-400 font-semibold text-gray-900 dark:text-gray-100"
                        >
                          {post.title}
                        </Link>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          <time dateTime={post.date}>
                            {formatDate(post.date, siteMetadata.locale)}
                          </time>
                          {' · '}
                          {Math.ceil(post.readingTime?.minutes ?? 0)} min
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </article>
            )
          })}
        </div>
      </section>

      <section className="space-y-6" aria-labelledby="theme-graph">
        <div className="border-b border-gray-200 pb-3 dark:border-gray-700">
          <h2
            id="theme-graph"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100"
          >
            Theme graph
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Themes are connected by repeated tags and recurring questions across the archive.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {themeClusters.map((cluster) => {
            const relatedClusters = themeClusters.filter((item) =>
              cluster.related.includes(item.id)
            )
            const clusterPosts = postsForTags(cluster.tags)

            return (
              <article
                key={cluster.id}
                id={cluster.id}
                className="rounded border border-gray-200 p-5 dark:border-gray-700"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {cluster.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                      {cluster.description}
                    </p>
                  </div>
                  <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/40 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-semibold">
                    {getClusterStrength(cluster.tags)}
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap gap-y-2">
                  {cluster.tags.map((tag) => (
                    <Tag key={tag} text={tag} />
                  ))}
                </div>
                <div className="mt-5">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                    Start here
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {clusterPosts.map((post) => (
                      <li key={post.slug}>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="hover:text-primary-500 dark:hover:text-primary-400 text-sm font-medium text-gray-700 dark:text-gray-300"
                        >
                          {post.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {relatedClusters.length > 0 && (
                  <div className="mt-5 border-t border-gray-200 pt-4 dark:border-gray-700">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">
                      Adjacent themes
                    </h4>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {relatedClusters.map((related) => (
                        <a
                          key={related.id}
                          href={`#${related.id}`}
                          className="hover:border-primary-500 hover:text-primary-500 dark:hover:border-primary-400 dark:hover:text-primary-400 rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-600 dark:border-gray-700 dark:text-gray-300"
                        >
                          {related.title}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </div>
  )
}
