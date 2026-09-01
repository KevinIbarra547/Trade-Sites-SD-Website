# Trade Sites SD

Trade Sites SD is Kevin Ibarra's professional portfolio and service website for building affordable hire-me websites for San Diego trade workers.

## Run & Operate

- The finished site is a plain static folder ready to upload or host anywhere.
- Preview is served from `artifacts/trade-sites-sd/` by the artifact workflow.
- No package manager, build step, backend, database, or required environment variables are needed.

## Stack

- Plain HTML, CSS, and vanilla JavaScript
- Static assets live in `artifacts/trade-sites-sd/images/`
- Hash-based navigation keeps the multi-page experience upload-friendly without a backend

## Where things live

- `artifacts/trade-sites-sd/index.html` — all route markup and inline SVG icon symbols
- `artifacts/trade-sites-sd/styles.css` — site-wide theme tokens, responsive layout, motion, and accessibility states
- `artifacts/trade-sites-sd/script.js` — hash routing, language switching, mobile menu, form state, and scroll reveals
- `artifacts/trade-sites-sd/images/favicon.svg` — local favicon

## Architecture decisions

- The first build is a frontend-only presentation site; contact submission is intentionally local until Web3Forms credentials are available.
- The site uses hash-based navigation so the exported folder works on static hosts without server rewrites.
- English and Spanish copy are implemented with paired data attributes so language switching stays consistent across routes.
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

- Replace placeholder phone, email, and Web3Forms details before launch.
