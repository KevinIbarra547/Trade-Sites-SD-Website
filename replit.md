# Trade Sites SD

Trade Sites SD is Kevin Ibarra's professional portfolio and service website for building affordable hire-me websites for San Diego trade workers.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/trade-sites-sd/src/App.tsx` — route map and page shell composition
- `artifacts/trade-sites-sd/src/pages/site-pages.tsx` — public pages and route-level copy
- `artifacts/trade-sites-sd/src/components/site-shell.tsx` — shared navigation, footer, language toggle, and persistent CTA
- `artifacts/trade-sites-sd/src/components/site-blocks.tsx` — reusable branded content blocks
- `artifacts/trade-sites-sd/src/index.css` — site-wide theme tokens, responsive layout, motion, and accessibility states

## Architecture decisions

- The first build is a frontend-only presentation site; contact submission is intentionally local until Web3Forms credentials are available.
- The site uses Wouter for lightweight multi-page route handling within the Vite artifact.
- English and Spanish copy are implemented in the shared shell/page data so language switching stays consistent across routes.
- Portfolio copy is explicitly honest about Noe's first build being underway and does not invent client proof.

## Product

- Home, Work, Services, Process, About, Contact, and 404 routes
- Text, call, email, and local contact-form interactions
- Responsive mobile-first layout with a sticky mobile Text Kevin CTA
- English/Spanish language switching
- Scroll reveals and reduced-motion support

## User preferences

- The owner wants a professional multi-page site rather than a one-page-only portfolio.
- The visual direction is clean and trustworthy: white, deep navy, and restrained orange.
- The family story with Noe should be visible as a trust asset.

## Gotchas

- Phone numbers, email addresses, and future Web3Forms credentials are placeholders and must be replaced before launch.
- Do not imply that the portfolio has completed client work, reviews, or testimonials until Kevin has them.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
