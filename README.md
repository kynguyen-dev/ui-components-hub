# UI Components Hub

UI Components Hub is a hybrid **Astro + Starlight** documentation platform for browsing UI patterns, shipping component docs, and embedding interactive React islands only where they add value.

## Stack

- Astro 6 with TypeScript strict mode
- Starlight for `/docs/**` documentation pages
- React islands via `@astrojs/react`
- MDX and content collections for typed docs metadata
- Tailwind CSS v4 + shadcn/ui for custom marketing and catalog pages
- Nanostores for lightweight shared UI state

## Project shape

```text
src/
├── components/
│   ├── demos/         # React islands used by docs previews
│   ├── docs/          # MDX authoring primitives
│   └── ui/            # shadcn/ui primitives
├── content/
│   └── docs/
│       └── docs/      # Starlight content routed under /docs
├── lib/
│   └── docs.ts        # Typed helper layer for navigation, catalog, and related items
├── pages/
│   ├── index.astro
│   └── components/
└── styles/
    ├── global.css
    └── starlight.css
```

## Key ideas

- `src/content/docs/docs/**` is the source of truth for docs metadata.
- Marketing pages (`/` and `/components`) read from content helpers instead of hardcoded navigation.
- Starlight handles sidebar, TOC, search, and docs page chrome.
- React islands are used for demos such as preview cards and animated showcases.

## Commands

```bash
pnpm install
pnpm dev
pnpm check
pnpm build
```

## Content model

The `docs` collection extends Starlight frontmatter with UI Hub specific fields:

- `entryType`
- `category`
- `tags`
- `library`
- `status`
- `featured`
- `order`
- `toc`
- `demo`
- `source`
- `dependencies`

These fields drive catalog summaries, featured cards, and future related-content experiences without duplicating config across the site.
