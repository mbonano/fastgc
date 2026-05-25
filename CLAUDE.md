# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

**fastgc** — AI to help speed up the green card application process. Next.js 16.2.6 with React 19, TypeScript, Tailwind CSS v4. Currently in early development (default scaffold).

## Commands

```bash
npm run dev      # Development server at http://localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```

## Architecture

App Router only (no Pages Router). All routes live under `app/`. Read `node_modules/next/dist/docs/01-app/` for this version's API docs before writing route handlers, caching, or navigation code.

### Breaking changes in Next.js 16 (vs. training data)

**`params` is a Promise** — always `await params` in pages, layouts, and route handlers:
```tsx
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
}
```

**Caching is opt-in** — `fetch` is NOT cached by default (opposite of earlier versions). Use the `use cache` directive with `cacheLife` from `next/cache` to cache functions or components. Opt in via `cacheComponents: true` in `next.config.ts`.

**Instant client-side navigation** — `<Suspense>` boundaries alone are not enough. Also export `unstable_instant` from the route. See `node_modules/next/dist/docs/01-app/02-guides/instant-navigation.md`.

**Tailwind CSS v4** — no `tailwind.config.*` file. Uses `@tailwindcss/postcss` plugin in `postcss.config.mjs` and `@import "tailwindcss"` in CSS. Customize via `@theme inline {}` blocks in CSS files.
