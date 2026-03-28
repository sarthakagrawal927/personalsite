# Significant Hobbies Blog

Personal blog for Sarthak Agrawal covering philosophy, psychology, productivity, startups, and tech. Live at `blog.significanthobbies.com`.

## Tech Stack

- **Framework**: Next.js 13.5.6 (App Router)
- **Styling**: Tailwind CSS 3 + `@tailwindcss/typography` + `@tailwindcss/forms`
- **Content**: Contentlayer2 (MDX) -- blog posts in `data/blog/`, author bios in `data/authors/`
- **Search**: kbar (local JSON-based search)
- **Analytics**: Umami (via pliny)
- **Comments**: Giscus (currently disabled)
- **Font**: Space Grotesk (Google Fonts)
- **Theme**: Dark/light via `next-themes`, class-based
- **Linting**: ESLint + Prettier, Husky + lint-staged
- **Package manager**: Yarn 3.6.1
- **Node**: 24.x
- **Template**: timlrx/tailwind-nextjs-starter-blog

## Architecture

```
app/                    # Next.js App Router pages
  layout.tsx            # Root layout (font, theme, analytics, search, header/footer)
  page.tsx              # Home -- latest 5 posts
  Main.tsx              # Home page component
  blog/                 # /blog + /blog/[...slug] dynamic post pages
  about/                # /about page
  projects/             # /projects page
  tags/                 # /tags + /tags/[tag] pages
  tag-data.json         # Auto-generated tag counts
components/             # Reusable UI (Header, Footer, Tag, Card, MDXComponents, etc.)
layouts/                # Post/author page layouts (PostLayout, PostSimple, PostBanner, ListLayout, AuthorLayout)
data/
  blog/                 # MDX blog posts organized by year (2023/, 2024/, 2025/)
  authors/default.mdx   # Author bio
  siteMetadata.js       # Global site config
  headerNavLinks.ts     # Nav link definitions
  projectsData.ts       # Projects showcase data
css/                    # tailwind.css + prism.css
public/static/          # Static assets (images, favicons)
scripts/                # postbuild.mjs (RSS generation)
contentlayer.config.ts  # Blog + Authors document types, MDX plugins
```

### Data Flow

1. MDX files in `data/blog/` processed by Contentlayer2 at build time
2. Generated typed content in `.contentlayer/generated/`
3. `pliny` utilities sort/filter posts
4. Build generates `tag-data.json` and `public/search.json`
5. Postbuild generates RSS feed

## Key Conventions

- **Path aliases**: `@/components/*`, `@/data/*`, `@/layouts/*`, `@/css/*`
- **Primary color**: `colors.pink` (Tailwind theme)
- **Prettier**: no semicolons, single quotes, 100 char width
- **Blog frontmatter**: `title`, `date` (required), `tags`, `summary`, `draft`, `authors`, `layout`, `images`
- **Layouts selectable per post** via frontmatter `layout` field
- **MDX plugins**: remark-gfm, remark-math, rehype-katex, rehype-prism-plus, rehype-citation

## Commands

```bash
yarn dev          # Start dev server
yarn build        # Production build (+ postbuild RSS)
yarn serve        # Start production server
yarn lint         # ESLint with --fix
yarn analyze      # Bundle analysis
```

## Environment Variables

```
NEXT_UMAMI_ID     # Umami analytics website ID (active)
```

Other newsletter/comment vars in `.env.example` are template leftovers and not wired up.

## Current State

- **Working**: Blog with 30+ posts (2023-2025), projects page, about page, tags, search, dark mode, RSS, SEO/OpenGraph
- **Disabled**: Comments system (Giscus config exists but set to null)
- **Status**: Paused -- no recent feature development, content-ready
