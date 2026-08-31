# Replit Skeleton Prompt — tradesitessd.com

Paste everything below the line into Replit. This builds structure only,
no design polish and no animations — those come in phase 2.

---

Build a static one-page marketing website. No frameworks, no build step, no
package manager — plain HTML, CSS, and vanilla JavaScript only. It will be
deployed to Cloudflare Pages as static files.

**File structure:**
- index.html
- styles.css
- script.js
- /images (empty folder with a .gitkeep)

**The business:** Trade Sites SD. I build one-page "hire-me" websites for
free-agent trade workers in San Diego — construction, drywall, painting,
landscaping. $150 flat, live in about two weeks.

**Who visits this site:** trade workers, roughly 30–60 years old, arriving on
their phones from a text message forwarded by someone who already hired me.
They are not technical. They decide in about 30 seconds.

**Primary goal:** get them to tap "Text me." Every section should push toward
that one action.

**Build these sections in this exact order:**

1. **Header** — logo text "TRADE SITES SD" (style SITES in the accent color),
   nav links to Work and Pricing, and a "Text me" button.
2. **Hero** — eyebrow text "SAN DIEGO · FREE-AGENT TRADE WORKERS", headline
   "Your work is good. Your phone should ring more.", a subheading about the
   one-page site and price, a large tap-to-call button using a tel: link, and a
   secondary text link pointing down to the work section.
3. **Stats bar** — three cells: "2 wks / From photos to live site",
   "$150 / Flat. Agencies charge $2,000+", "$0/mo / Hosting free, you own it".
4. **Work** — heading "Recent work", subheading about tapping to open live
   versions, then a responsive grid of 3 cards. Each card has a placeholder
   thumbnail area, a client name, and a trade + city line. Cards link out to
   the live site (use # placeholders for now).
5. **What's included** — heading, then a 4-item grid: call and text buttons,
   before and after gallery, reviews on Google, loads fast on any phone. Each
   item has an icon placeholder, a title, and one line of description.
6. **How it works** — 4 numbered steps: You text me / Send photos and info /
   I build it / You approve, then pay.
7. **Pricing comparison** — 3 columns: Trade Sites SD at $150 (highlighted with
   an accent border), Wix or Squarespace at $200+ per year, a design agency at
   $2,000+. Each has a short line of description.
8. **Testimonial** — one quote with an attribution line. Use clearly marked
   placeholder text; I'll replace it with a real quote.
9. **Contact** — heading "Ready when you are", a line inviting them to text
   photos of their work, a large tap-to-call button, and a simple contact form
   with three fields (name, phone, what you need) plus a submit button. Point
   the form action at a Web3Forms placeholder endpoint with a clearly marked
   TODO comment for the access key.
10. **Footer** — business name, San Diego CA, and a contact email.

**Design tokens — define these as CSS custom properties at the top of
styles.css and use them everywhere. Do not hardcode colors:**
- Background: #1C1F23
- Surface (cards): #24282D
- Border: #33383F
- Accent: #FF7A1A
- Text primary: #FFFFFF
- Text secondary: #A8AEB5
- Text on accent: #3A1B00

**Typography:** one Google Font for everything (Inter or similar), loaded via
link tag. Use font weights 400 and 500 only. No weight above 600.

**Requirements:**
- Mobile-first CSS. Write the mobile layout first, then add min-width media
  queries for larger screens.
- All phone numbers must be tel: links. Use (619) 555-0147 as a placeholder and
  mark it with a TODO comment.
- Semantic HTML: header, nav, main, section, footer. Every section gets an id
  so nav links work.
- Accessible: alt text on images, aria-labels on icon-only buttons, visible
  focus states, sufficient color contrast.
- Tap targets at least 44px tall.
- No localStorage, sessionStorage, or any browser storage.
- No animation libraries. Leave script.js mostly empty with comments marking
  where scroll-reveal and animated counters will go later.
- Include a prefers-reduced-motion media query block, empty for now.
- Every piece of placeholder content marked with an HTML comment saying TODO.

**Do not** add animations, hover effects beyond simple color transitions,
gradients, or decorative flourishes yet. Structure and layout only.
