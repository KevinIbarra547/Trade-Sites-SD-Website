# TODO

Order matters. Each step assumes the one above it landed.

---

## Now

- [x] Answer the 4 open questions on the merge plan
      - Work section at position 4
      - Keep 404.html
      - Mid-page CTA: keep the Services one, after the price
      - The 3 orphaned headings stay as text, buttons dropped
- [x] Add the short-report rule to CLAUDE.md
- [x] Commit TODO.md. CLAUDE.md and DECISIONS.md are gitignored on purpose —
      internal strategy stays local.
- [ ] Review and merge PR #1

## Done — refactor/single-page (PR #1, awaiting merge)

- [x] Seven routes collapse to one scrolling page, nav becomes anchor links
- [x] Delete the router
- [x] Delete `.page-view { display: none }` at styles.css:77 explicitly
      (this is the rule that blanks the page with JS off — orphaned CSS
      survives refactors if nobody names it)
- [x] Replace placeholder contact text with 619-381-0139 and
      Tradesitesd@gmail.com
- [x] Leave "Ver en español" untouched
- [x] Verify: disable JavaScript, reload, page is readable
- [x] PR + review before merge (big enough diff to earn a second pass)

## Then — cleanup

- [ ] Delete files the merge orphaned. Provably unreferenced only.
- [ ] Runs after the merge because dead-file status depends on what the merge
      kept.

## Then — rebase feat/before-after

- [ ] Rebase onto new main
- [ ] Conflict was in the router's sectionIds array, which no longer exists,
      so this gets simpler after the merge rather than harder
- [ ] Use Noe Ibarra in the mock, not an invented business. No star ratings.
      (Currently violates this: the branch ships "Torres Painting" and a
      five-star row. Rework before merge.)

## Then — feat/motion

- [ ] Hero load sequence, 2 below-fold reveals, hover/focus/press states
- [ ] Sticky call bar (anchor link, not tel:)
- [ ] Inline head script to kill the flicker
- [ ] Typography cleanup — grep for `icon-arrow`, not `→`
- [ ] Footer year 2025 → 2026

## Then — index-es.html

- [ ] Build the page structure with English in place
- [ ] I write the Spanish myself and paste it in
- [ ] Point "Ver en español" at it
- [ ] Add the reverse link back to English

## Then — deploy

- [ ] Cloudflare Pages, output directory set to artifacts/trade-sites-sd
- [ ] No _redirects needed once the router is gone
- [ ] Confirm the live URL renders with JavaScript disabled

## Later

- [ ] Dad's site (separate repo, not started)
- [ ] Case-study pages — revisit at 5 clients
- [ ] Formatting pass on the 4,000-character single lines (own branch, never
      mixed into feature work)
