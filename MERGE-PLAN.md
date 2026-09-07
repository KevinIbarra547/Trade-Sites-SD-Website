# Single-page merge plan

Status: approved, executing on `refactor/single-page`.

## Locked decisions

1. **Mid-page CTA** — keep the Services CTA ("Start with a text", `index.html:82`,
   directly after the $150 price). Cut the other in-body CTAs.
2. **Orphaned headings** — keep all three as text lines; drop only their button
   wrappers.
3. **Section order** — work at position 4, before pricing.
4. **404** — keep the copy, as a standalone `404.html` (Cloudflare Pages serves it
   automatically for unmatched paths).
5. This file is written before any code changes.

## Section order

| # | Section | Source | Anchor |
|---|---------|--------|--------|
| 1 | Hero | home hero | `#home` |
| 2 | Stats ($150 / 2 wk / 1 tap) | home | |
| 3 | The point | home | |
| 4 | "Ready when you are" (text only) | home CTA, button dropped | |
| 5 | The work | work intro | `#work` |
| 6 | Build #001 + empty slots | work | |
| 7 | Services | services intro | `#services` |
| 8 | The starting offer + **kept CTA** | services | |
| 9 | What you bring | services | |
| 10 | Process | process intro | `#process` |
| 11 | The four steps | process | |
| 12 | "No pressure" (text only) | process, button dropped | |
| 13 | About | about intro | `#about` |
| 14 | The Noe story | about | |
| 15 | "The promise" (text only) | about, button dropped | |
| 16 | Contact | contact intro | `#contact` |
| 17 | Contact form | contact | |

Work sits at position 4 in plan numbering (before Services, which carries the
price), per decision 3.

## CTAs

Kept: hero (`:58`), Services (`:82`), footer (`:108`). Header and mobile-menu
buttons unchanged.

Cut (button only — surrounding copy retained per decision 2):

| Line | Text | Heading kept |
|------|------|--------------|
| 72 | "Text Kevin" | "Ready when you are" / "Text Kevin your trade. He will tell you if a one-page site is the right fit." |
| 77 | "Ask about the intro price" | section copy retained |
| 89 | "Ask Kevin" | "No pressure" / "Not sure if this is right for you?" |
| 95 | "Talk with Kevin" | "The promise" / "A local person, not a middleman." |

## Content removed

One section is deleted: the home "First, the honest version" block
(`index.html:71`). It duplicates the work section's "No fake logos. No made-up
reviews." and, with work now at position 4, the two would sit adjacent. Its copy
is preserved here so nothing is lost:

> **First, the honest version** — The portfolio is just getting started. Noe's
> site is build #001 and it is underway now. There are no invented client wins
> here. When a future project is real, it will earn its place on the work page.
> [See what is real today]

## Contact details

Placeholders replaced with the real details:

- phone `619-381-0139` — `tel:+16193810139`, `sms:+16193810139`
- email `Tradesitesd@gmail.com` — `mailto:Tradesitesd@gmail.com`

Only the three protocol links in the contact section dial/text/email. Every other
CTA remains an in-page anchor to `#contact`.

## Out of scope

- The before/after component (`feat/before-after`).
- Motion and typography polish (`feat/motion`).
- The "Ver en español" button — left exactly as-is for a separate branch.
