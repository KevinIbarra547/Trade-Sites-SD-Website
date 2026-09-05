# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Project

tradesitessd.com — the marketing site for Trade Sites SD, a business that
builds one-page "hire-me" websites for free-agent trade workers in San Diego.

Audience: trade workers, roughly 30–60, arriving on phones from a forwarded
text message. Not technical. They decide in about 30 seconds.
Primary goal of every page change: get them to tap "Text me."

This repo is the portfolio site only. My dad's client site is a separate
project and does not live here.

## Stack — do not change without asking

- Plain HTML, CSS, and vanilla JavaScript. Nothing else.
- No frameworks, no React, no TypeScript, no build step, no bundler.
- No npm packages. No `package.json`. No `node_modules`.
- No external CDN scripts, no external fonts loaded at runtime.
- Deploys to Cloudflare Pages as static files.

If a task seems to need a dependency, stop and ask. Do not add one.

## Design

- Follow the existing design system in the site's CSS. Do not introduce a new
  visual direction without asking.
- All colors defined as CSS custom properties in :root. Never hardcode a hex
  value anywhere else in the stylesheet.
- If a task needs a color that isn't already a variable, stop and ask rather
  than inventing one.

## Content rules

- Never invent client names, testimonials, reviews, ratings, or case studies.
- Never write `href="#"`. If there is no URL, the element is not a link.
- Never write "Lorem ipsum" or "Coming soon."
- Do not invent my phone number or email. If you need them and they are not
  already in the code, stop and ask.

## Iteration limit — hard stop at 10

When fixing a bug or making a change work, you get a maximum of 10 attempts.
An attempt is one edit-then-test cycle.

At attempt 10, stop. Do not try an 11th. Report:
1. What I asked for.
2. What you tried, one line per attempt.
3. The exact error text, unedited, not summarized.
4. Your best guess at the root cause, and what you would need from me.

Stop earlier than 10 if any of these happen:
- You are undoing a fix you already made (thrashing).
- Two consecutive attempts produce the same error.
- You are about to change a file the task did not mention.

A stop with a clear error report is a success. Burning 10 attempts and
reporting "fixed" when you are not sure is a failure.

## Self-review gate — check your own diff before showing me

Never present work without reviewing it first. Before you report done:

1. Run `git diff` and read every changed line.
2. Check it against this list:
   - Does the diff contain anything I did not ask for?
   - Did any file get touched that the task did not name?
   - Any dependency, framework, or build step added? (see Stack)
   - Any invented content? (see Content rules)
   - Any leftover `console.log`, commented-out code, or TODO?
   - Does it still work at a 375px viewport with no horizontal scroll?
   - Is every interactive element reachable by keyboard with a visible focus ring?
3. Fix anything that fails, then re-read the diff.
4. Only then show me the final version.

When you present, show me the diff and a plain-English summary of what changed
and why. Do not show me every intermediate attempt.

## Workflow

Explore, plan, implement, commit — in that order.

- Read the relevant files before proposing a plan.
- Tell me the plan and wait for go/no-go before writing code.
- One branch per task. Never work directly on `main`.
- Never merge. Never push to `main`. I do that after I review.
- Keep working code intact. If a change breaks something that worked, revert
  it and tell me rather than layering fixes on top.


## What this is

Trade Sites SD — Kevin Ibarra's portfolio/service site selling affordable "hire-me" websites to San Diego trade workers. The deliverable is a plain static folder, not an app.

`replit.md` is the product/context brief (audience, visual direction, copy rules). Read it before making content or design decisions.

## Commands

There is no package manager, build step, backend, test suite, or linter. `package.json` and `node_modules` were deliberately deleted (see `attached_assets/Pasted--Replit-Prompt-Static-Rebuild-v2-*.txt` for the rebuild spec that produced the current code).

Preview locally — anything that serves the folder works:

```sh
python3 -m http.server 8000 --directory artifacts/trade-sites-sd
```

Opening `artifacts/trade-sites-sd/index.html` directly in a browser also works, because there are no module imports or fetches.

On Replit, `artifacts/trade-sites-sd/.replit-artifact/artifact.toml` defines the preview: a one-liner Node static server in dev on port 24325, and in production a static serve of `artifacts/trade-sites-sd` with a `/* → /index.html` rewrite.

## Architecture

All source lives in `artifacts/trade-sites-sd/` — `index.html`, `styles.css`, `script.js`, `images/`. Nothing at the repo root is site code.

**Single-document hash router.** Every route's markup ships in `index.html` as an `<article class="page-view" id="page-<route>" data-page="<route>">`. `script.js` toggles `.is-active` on exactly one at a time based on `location.hash`, and also swaps `document.title` and the `meta[name=description]` from the `pageTitles`/`pageDescriptions` maps at the top of the file. Routes: `home`, `work`, `services`, `process`, `about`, `contact`, plus a `not-found` fallback for any unknown hash. Hash routing is deliberate — the exported folder must work on a static host with no server rewrites.

**Adding or renaming a route** means touching four places in step: the `<article>` in `index.html`, the `pageTitles` and `pageDescriptions` maps, and any `data-route-link` nav anchors (which get `.active` + `aria-current` from the router).

**Bilingual copy via paired attributes.** Translatable elements carry both `data-en` and `data-es`; `setLanguage()` rewrites `textContent` from `data-<lang>` and sets `documentElement.lang`. There is no translation file — **any new user-facing string needs both attributes**, or it will freeze in English when the toggle flips. Language is in-memory only; no storage is used anywhere by design.

**Section IDs are assigned positionally.** `assignSectionIds()` walks every `<section>` in document order and names it from the hardcoded `sectionIds` array (currently 19 entries for 19 sections). Inserting, deleting, or reordering a `<section>` silently shifts every later ID. Update that array in the same commit.

**Styling.** All color, font, radius, and layout values are CSS custom properties in `:root` at the top of `styles.css`; don't hardcode colors below that block. Mobile-first — base styles are phone, with `min-width: 620px` / `860px` breakpoints and a `prefers-reduced-motion: reduce` block that must keep disabling any animation you add.

**Icons** are inline `<symbol>` definitions in a hidden `svg.svg-sprite` at the bottom of `index.html`, referenced as `<use href="#icon-name">`. Add new icons there rather than loading a library. Animation is CSS transitions plus `IntersectionObserver` reveals (`.reveal` / `.reveal-delay` → `.is-visible`), re-run on every route change; no animation libraries.

## Editing notes

`index.html` is 113 lines but 42KB — most sections are single lines several thousand characters wide. Anchor edits on nearby unique strings rather than reading or rewriting whole lines.

## Content constraints

These come from `replit.md` and are product decisions, not suggestions:

- Contact details are placeholders (`(619) 555-0123`, `hello@tradesitessd.com`) and are labeled as such on the Contact page. Replace before launch.
- The contact form has no backend. `script.js` intercepts submit and shows a local success state, with a `TODO` marking where the Web3Forms endpoint and access key go.
- Do not invent client work, reviews, or testimonials. The portfolio is honest that the first build (for Kevin's dad, Noe) is still underway; the family story is intentionally a visible trust asset.
