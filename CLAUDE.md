# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server with Turbopack
npm run build    # Production build (also runs next-sitemap via postbuild)
npm run start    # Start production server
```

No lint or test scripts are configured.

## Architecture

**Czech travel blog** built with Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, and MDX for content.

### Content pipeline

MDX files live in `/_posts/{category}/{slug}.mdx` with YAML frontmatter. They are loaded at build time via `src/lib/api.ts` (`getPosts()`, `getPostByPath()`), rendered server-side using `next-mdx-remote`, and served through dynamic routes:

- `/[posts]/page.tsx` — category list page
- `/[posts]/[slug]/page.tsx` — individual post page

Two content categories: `guides` and `journal`.

### Key directories

- `src/app/_components/` — All UI components (30+ files)
- `src/lib/` — `api.ts` (content loading), `constants.ts`, `utils.ts` (heading ID generation)
- `src/hooks/` — `useImageModal.tsx`
- `_posts/` — MDX content files
- `public/assets/blog/` — Blog images organized by destination

### Custom MDX components

These are mapped in `post-body.tsx` and available in MDX files:

- `<TrailOverview>` — Hiking trail metadata (distance, duration, terrain)
- `<GearList>` — Equipment lists
- `<Checklist>` — Interactive checklists
- `<MDXImage>` — Optimized images with modal view
- `<MultipleImage>` — Image galleries
- `<VerticalImageLayout>` — Vertical image arrangement
- `<TableOfContents>` — Auto-generated from headings

### Styling

Tailwind CSS with custom theme: background `#fcfdf7`, title color `#2e3c21`, accent `#D28D25`. Dark mode uses class strategy. Path alias `@/*` maps to `src/*`.

### SEO

Structured data (JSON-LD HowTo for guides, BlogPosting for journal), Open Graph, sitemap auto-generated via `next-sitemap` after build. Site URL: `https://introvertkanacestach.cz`.

### Images

Next.js Image with WebP + AVIF output, responsive sizes (640–3840px), 1-year cache TTL. Images stored in `public/assets/blog/` as `.webp` files.
