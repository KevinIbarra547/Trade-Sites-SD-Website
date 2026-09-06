# Decisions

Running log. One entry per decision. Newest at the bottom.
Paste this file into any new chat so you don't re-explain the project.

---

## 2026-09-04 — This repo is the portfolio site only

tradesitessd.com is one site: it shows my work AND it's where someone hires me.
Not two separate things. My dad's client site is a separate project in a
separate repo, not started yet.

---

## 2026-09-04 — Stack: plain HTML, CSS, vanilla JS

No frameworks, no build step, no npm packages. Deploys to Cloudflare Pages as
static files.

Why: the site is a handful of sections and a contact form. A build step adds
failure modes and load time for no benefit at this size.

---

## 2026-09-04 — One page, not seven

Collapsing the seven-route SPA into a single scrolling page with anchor links.

Why: visitors are trade workers, 30-60, on phones, arriving from a forwarded
text. They scroll, they don't navigate. Seven pages also meant seven near-empty
pages when I have one client. The seven routes were Replit's scaffold default,
not a decision I made.

Revisit at: 5 real clients, when individual case-study pages have real content
and can rank in search on their own.

---

## 2026-09-04 — Client sites are one page each

Not a limitation of the $150 price. A trade worker's site is: who he is, photos
of his work, what he does, phone number. Split across five pages and the
customer has to hunt for the number. One page means the scroll always ends at
the call button.

---

## 2026-09-04 — Follow the live palette, not the old charcoal spec

Site uses navy #162945 and orange #ff7a2f. The charcoal #1C1F23 / #FF7A1A in
early notes came from a mockup, not a decision.

Rule going forward: all colors as CSS custom properties in :root. Never
hardcode a hex anywhere else. Changing the palette later should be four lines,
not forty.

---

## 2026-09-04 — Keep all the Replit files

Zero deletions from the file audit. Kept .replit, .replitignore,
artifact.toml, replit.md.

Why: still using Replit for preview and file browsing. artifact.toml defines
the only working preview server. replit.md is the only written product brief
and Replit looks for that exact filename.

Revisit at: when I stop opening Replit.

---

## 2026-09-04 — Site stays at artifacts/trade-sites-sd/, not repo root

Considered moving it to the root for a cleaner repo. Rejected.

Why: that path is what the Replit preview is built around. Moving it would
cost the preview I use daily. Cloudflare Pages can point at a subdirectory —
one dropdown setting instead of breaking my workflow.

---

## 2026-09-04 — Progressive enhancement is non-negotiable

Content is visible by default in CSS. JavaScript opts into animation via the
js-reveal class. Never the reverse.

Why: found a live bug where content started hidden and JS had to reveal it. If
the script failed, the page rendered blank — not degraded, blank. That hits
anyone on bad LTE, anyone with reduced motion on, and Google's crawler. A
crawler that sees an empty page can't rank me for "drywall El Cajon."

Test that matters: disable JavaScript, reload, can you read the page.

---

## 2026-09-04 — Motion budget: moderate

One orchestrated hero load sequence, plus exactly two below-fold reveals, plus
user-triggered hover/focus/press states. Nothing else moves on its own.

Why: fast and clean reads as more premium than heavy animation, and
per-section scroll reveals are the generic AI-page default. Audience is on
mid-range phones on LTE.

---

## 2026-09-04 — No invented content, ever

No fake client names, testimonials, reviews, star ratings, or case studies.
No href="#". No "Coming soon" or "Lorem ipsum."

Why: my entire advantage is that I'm real — Noe's son, a licensed contractor
vouches for me to guys he works with. A card that says "Torres Painting" and
404s on tap destroys that in one tap. Where I need an example, use Noe. He's
real.

Empty states are invitations, not apologies: "two spots open at this price"
beats three dead links.

---

## 2026-09-04 — Keep the Replit-written copy

Audited it expecting generated filler. It isn't — it has $150, Noe's name,
"20 years of work, now easy to find," "no invented client wins here." Real
specifics in my voice.

Merging it into the single page as-is. Not rewriting it.

---

## 2026-09-04 — Typography: drop the generated-page tells

Removing: all-caps monospace eyebrow labels, middle-dot (·) separators joining
short phrases, trailing → arrow icons on links, monospace for small labels.

Why: four of the five most common AI-generated-page markers were stacked in
two screenshots. Individually fine, together a signature. Mostly a CSS change
(text-transform and --font-mono on .eyebrow, .section-kicker, .brand-sub,
.mono) — not a copy edit.

Stripping a trailing icon does not count as a copy change. Copy is words.

---

## 2026-09-04 — Sticky call bar scrolls, doesn't dial

The sticky bar's button is an in-page anchor to the contact section, matching
the hero CTAs. Only the three protocol links at the contact section itself use
tel:/sms:/mailto:.

Why: better to land someone where they can see the number, the form, and the
context than to fire the dialer mid-scroll.

---

## 2026-09-04 — Spanish version gets its own page and its own branch

"Ver en español" stays in place during the motion pass. Immediately after, it
points at a real index-es.html.

Why: a JS language toggle won't survive the single-page merge cleanly and
won't get indexed by Google. A separate HTML file works without JS and can
rank on its own. Spanish-speaking trade workers in San Diego are a real part
of the market.

Open question: I write the Spanish myself rather than machine-translating it.
My English copy is personal and machine translation would flatten it.

---

## 2026-09-04 — Work section at position 4, not 6

Proof of work comes before pricing. Someone deciding whether I'm real should
hit that before they hit a number.

---

## 2026-09-04 — Contact details confirmed

Phone: 619-381-0139
Email: Tradesitessd@gmail.com

These replace all placeholder contact text on the site.
