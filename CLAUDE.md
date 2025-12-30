# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "Migo Hacks" (verdant-virgo v4.5.0), a personal blog built with Astro 4.15, forked from the AstroPaper theme. It's a type-safe, minimal, responsive blog with SEO optimization, fuzzy search, and dynamic OG image generation.

**Tech Stack:**
- Astro 4.15.6 (static site generator)
- TypeScript 5.5.3 (strict mode)
- TailwindCSS 3.4.11 (styling)
- React 18.3.1 (interactive components only)
- FuseJS (fuzzy search)

## Development Commands

```bash
npm run dev              # Start dev server at localhost:4321
npm run build            # Build production site to ./dist/
npm run preview          # Preview built site locally
npm run format           # Format code with Prettier
npm run format:check     # Check code formatting
npm run lint             # Run ESLint
npm run sync             # Generate TypeScript types for Astro modules
```

**Docker Alternative:**
```bash
docker compose up -d                 # Run dev server in Docker
docker build -t astropaper .         # Build production Docker image
docker run -p 4321:80 astropaper     # Run production container
```

## Architecture

### Path Aliases (tsconfig.json)

Use these TypeScript path aliases throughout the codebase:

- `@assets/*` → `src/assets/*`
- `@components/*` → `src/components/*`
- `@config` → `src/config.ts`
- `@layouts/*` → `src/layouts/*`
- `@utils/*` → `src/utils/*`
- `@pages/*` → `src/pages/*`
- `@content/*` → `src/content/*`
- `@styles/*` → `src/styles/*`

### Content Collections

Blog posts are managed via Astro's Content Collections API with type-safety:

**Location:** `src/content/blog/*.md`

**Schema (src/content/config.ts):**
```typescript
{
  author: string (default: SITE.author)
  pubDatetime: Date (required)
  modDatetime?: Date | null
  title: string (required)
  featured?: boolean
  draft?: boolean
  tags: string[] (default: ["others"])
  ogImage?: image | string (min 1200x630px if image)
  description: string (required)
  canonicalURL?: string
}
```

**Creating a new blog post:**
1. Add `.md` file to `src/content/blog/`
2. Include required frontmatter fields (author, pubDatetime, title, description)
3. Set `draft: true` to hide from production
4. Set `featured: true` to feature on homepage
5. Use ISO 8601 format for dates: `2025-12-30T00:00:00.000Z`

### Key Utilities

**`src/utils/getSortedPosts.ts`**
- Primary function for retrieving blog posts
- Automatically filters out drafts (unless explicitly requested)
- Sorts by `modDatetime` (if exists) or `pubDatetime` (descending)
- Respects `scheduledPostMargin` (15 minutes) to hide future posts

**`src/utils/getPostsByTag.ts`**
- Filter posts by tag slug
- Uses `slugify()` for consistent tag matching

**`src/utils/slugify.ts`**
- Converts strings to URL-safe slugs
- Uses `lodash.kebabcase` under the hood
- Used for tags and post URLs

**`src/utils/generateOgImages.tsx`**
- Generates dynamic OG images for blog posts
- Uses Satori (JSX to SVG) + @resvg/resvg-js (SVG to PNG)
- Templates in `src/utils/og-templates/`
- Loads IBM Plex Mono font via `loadGoogleFont.ts`

### Routing Structure

| Route | File | Purpose |
|-------|------|---------|
| `/` | `src/pages/index.astro` | Homepage with recent posts |
| `/posts` | `src/pages/posts/[...page].astro` | Paginated posts list |
| `/posts/[slug]` | `src/pages/posts/[slug]/index.astro` | Individual blog post |
| `/tags` | `src/pages/tags/index.astro` | All tags listing |
| `/tags/[tag]` | `src/pages/tags/[tag]/[...page].astro` | Posts filtered by tag |
| `/search` | `src/pages/search.astro` | Client-side fuzzy search |
| `/about` | `src/pages/about.md` | About page |
| `/rss.xml` | `src/pages/rss.xml.ts` | RSS feed |
| `/og.png` | `src/pages/og.png.ts` | Dynamic OG image |

### Component Organization

**Astro Components (`.astro`):**
- `Layout.astro` - Root layout with `<head>`, Google Analytics (Partytown), theme toggle
- `PostDetails.astro` - Blog post detail layout with metadata, breadcrumbs, share links
- `Posts.astro` - Paginated posts list wrapper
- `Header.astro` - Site header with mobile menu
- `Footer.astro` - Site footer
- Reusable: `Card`, `Tag`, `Breadcrumbs`, `ShareLinks`, `Socials`, `Pagination`, etc.

**React Components (`.tsx`):**
- `Search.tsx` - Client-side FuseJS search with debouncing
- `Card.tsx` - Blog post card with Astro view transitions
- `Datetime.tsx` - Formatted datetime display

### Site Configuration

**`src/config.ts`** contains all site-wide configuration:

```typescript
SITE = {
  website: "https://www.migohacks.com/",
  author: "Andres Alcocer",
  title: "Migo Hacks",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 10,     // Posts on homepage
  postPerPage: 10,      // Posts per pagination page
  scheduledPostMargin: 15 * 60 * 1000  // 15 min margin for scheduled posts
}

LOCALE = {
  lang: "en",
  langTag: ["en-EN"]
}

SOCIALS = [...]  // Array of social media links (active: true/false)
```

**Modifying site settings:**
- Website URL, author, title → Update `SITE` object
- Social links → Update `SOCIALS` array (set `active: true` to display)
- Posts per page → Adjust `postPerIndex` or `postPerPage`
- Logo → Update `LOGO_IMAGE` and set `enable: true`

### Styling Architecture

**Theme System:**
- Dark mode via `[data-theme='dark']` attribute (selector strategy)
- Theme toggle: `public/toggle-theme.js` (loaded before hydration to prevent flash)
- CSS variables defined in `src/styles/base.css`:
  - `--color-fill`, `--color-text-base`, `--color-accent`, etc.
  - Light and dark variants via `[data-theme]` selectors

**TailwindCSS Configuration (tailwind.config.cjs):**
- Custom colors map to CSS variables (e.g., `skin-base`, `skin-accent`)
- Typography plugin for prose styling (`@tailwindcss/typography`)
- Monospace font: IBM Plex Mono
- Content scanning: `./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}`

**Global Styles (`src/styles/base.css`):**
- Imports Tailwind directives
- Defines theme CSS variables
- Custom prose styling for blog post content
- Scrollbar customization
- Syntax highlighting via Shiki (no runtime JS needed)

### Markdown Processing

**Remark Plugins (astro.config.ts):**
- `remark-toc` - Generates table of contents
- `remark-collapse` - Collapsible TOC sections (matches "Table of contents" heading)

**Syntax Highlighting (Shiki):**
- Light theme: `min-light`
- Dark theme: `night-owl`
- No runtime JavaScript (pre-rendered at build time)

### Analytics & SEO

**Google Analytics:**
- Implemented via Partytown (off-main-thread script execution)
- Tracking ID: `G-YJR5Q6KFVV` (hardcoded in `Layout.astro`)
- Forward `dataLayer.push` calls to Partytown worker

**SEO Features:**
- Meta tags in `Layout.astro` (title, description, OG, Twitter cards)
- JSON-LD structured data (BlogPosting schema)
- Sitemap generation via `@astrojs/sitemap`
- RSS feed at `/rss.xml`
- Canonical URLs support
- Dynamic OG images per post
- Google Site Verification via `PUBLIC_GOOGLE_SITE_VERIFICATION` env var

**View Transitions:**
- Enabled in `Layout.astro` for smooth page navigation
- Preserves state across route changes

## Important Patterns

### Adding a New Blog Post

1. Create `src/content/blog/my-post-title.md`
2. Add required frontmatter:
   ```yaml
   ---
   author: Andres Alcocer
   pubDatetime: 2025-12-30T00:00:00.000Z
   title: My Post Title
   description: Brief description of the post
   tags:
     - tag1
     - tag2
   ---
   ```
3. Write content in Markdown
4. Run `npm run dev` to preview
5. Post automatically appears in listings and search

### Modifying Post Sorting/Filtering

All post retrieval should use `getSortedPosts()` from `@utils/getSortedPosts`:
- Automatically filters drafts in production
- Respects scheduled post margin
- Sorts by date (newest first)

Example:
```typescript
import getSortedPosts from "@utils/getSortedPosts";

const posts = await getSortedPosts();  // All published posts
const featuredPosts = posts.filter(p => p.data.featured);
```

### Working with Tags

- Tags are defined in post frontmatter as string arrays
- Tag URLs are auto-slugified: "Software Development" → `/tags/software-development`
- Use `getUniqueTags()` to extract all unique tags from posts
- Use `getPostsByTag()` to filter posts by tag slug

### Customizing Theme Colors

Edit CSS variables in `src/styles/base.css`:

```css
:root {
  --color-fill: 251, 254, 251;           /* Light mode background */
  --color-accent: 26, 26, 26;            /* Light mode accent */
  /* ... */
}

[data-theme="dark"] {
  --color-fill: 33, 39, 55;              /* Dark mode background */
  --color-accent: 255, 107, 1;           /* Dark mode accent */
  /* ... */
}
```

## Code Quality Standards

**Formatting:**
- Tab width: 2 spaces
- Print width: 80 characters
- Run `npm run format` before committing

**Linting:**
- ESLint with TypeScript and Astro support
- Run `npm run lint` to check

**Type Safety:**
- Strict TypeScript mode enabled
- All Astro modules have generated types via `npm run sync`
- Content collections provide automatic type inference

**Git Commits:**
- Conventional Commits enforced via Commitizen
- Use `cz` or follow format: `type(scope): message`
- Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

## Docker Deployment

**Development:**
```bash
docker compose up -d
# Access at localhost:4321 with hot reload
```

**Production:**
```bash
docker build -t astropaper .
docker run -p 4321:80 astropaper
# Nginx serves static files from ./dist/
```

## Environment Variables

**Optional:**
- `PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification tag

## Build Output

- Production build: `./dist/`
- Static rendering (SSG) by default
- Supports hybrid rendering (SSG + SSR) if needed
- Compatible with Vercel via `@astrojs/vercel` adapter (available but not currently configured)

## Known Quirks

- **pnpm users:** `.npmrc` has `shamefully-hoist=true` for compatibility
- **yarn 1 users:** May need to install `sharp` manually
- **Windows PowerShell users:** May need `concurrently` package for `astro check --watch`
- **Content Layer:** Uses experimental `contentLayer: true` feature in Astro config
- **Vite optimization:** `@resvg/resvg-js` excluded from optimization (causes build issues)
- **Scoped styles:** Uses `where` strategy for CSS specificity
