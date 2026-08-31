# Trade Sites SD — Phase 1 Build Prompt

Build the first real version of a static, one-page marketing website for **Trade Sites SD**. This is phase 1: implement the structure and responsive layout cleanly. Keep the code simple so phase 2 can add the polished visual treatment and animations.

## Business

Trade Sites SD is Kevin Ibarra's side hustle. He builds one-page "hire-me" websites for free-agent trade workers in San Diego: construction, drywall, painting, landscaping, and similar trades.

- Price: $150 flat introductory price
- Timeline: about 2 weeks
- The client's domain costs about $12/year and belongs to the client
- Includes 2 rounds of changes before launch
- Includes 30 days of free bug fixes after launch
- No deposit: the client approves the site, then pays
- Primary conversion: tap **Text me**

Audience: trade workers roughly 30–60 years old, arriving on their phones from a text message forwarded by someone who knows Kevin. They are not technical and should understand the offer within 30 seconds.

## Direction already chosen

Use a clean, trustworthy visual direction: white background, deep navy typography and surfaces, restrained orange accent for calls to action. It should feel more like a reliable local professional than a tech startup.

Use the family story as an important trust asset, but keep the page professional at first glance:

- Hero headline: **I built my dad's hire-me site. Yours is next.**
- About section: Kevin is Noe's son; Noe is the first build, with a strong reputation but no online presence.
- Do not claim the dad's site is live yet. Label it **First build underway**.

Include an English/Spanish toggle in the header. Spanish copy can be added in phase 2, but the toggle control and translation structure should be present now.

## File structure

- index.html
- styles.css
- script.js
- images/.gitkeep

Use plain HTML, CSS, and vanilla JavaScript only. No frameworks, build step, package manager, animation libraries, or browser storage. The result will be deployed as static files to Cloudflare Pages.

## Sections, in this exact order

1. **Header**
   - Logo: TRADE SITES SD, with SITES in the orange accent
   - Anchor links: Work, What You Get, How It Works, Pricing, About
   - Persistent orange Text Me button
   - English/Spanish toggle

2. **Hero**
   - Eyebrow: SAN DIEGO · ONE-PAGE HIRE-ME WEBSITES
   - Headline: I built my dad's hire-me site. Yours is next.
   - Explain that Kevin builds one-page sites for trade workers with work photos, services, reviews, and direct call/text buttons.
   - State $150 and about 2 weeks.
   - Primary CTA: Text me
   - Secondary link: See the work
   - Include a simple phone-shaped placeholder showing a sample trade-worker site.

3. **Stats bar**
   - 2 wks / From photos to live site
   - $150 / Flat introductory price
   - $0/mo / Hosting is free; you own your site

4. **Work**
   - Heading: First build underway
   - Explain that the portfolio is starting with build #001.
   - Card 1: Noe Ibarra — Construction — Build #001 / In progress
   - Cards 2 and 3: clearly marked spots reserved for first clients
   - Use placeholder thumbnails with TODO comments; do not pretend demo work is client work.
   - Cards may use # links for now.

5. **What's included**
   Four items:
   - Call and text buttons — customers reach the owner in one tap
   - Work photo gallery — the owner's best jobs do the selling
   - Services and reviews — visitors know what the owner does and why to trust them
   - Fast on any phone — designed for job-site mobile data

6. **How it works**
   Four numbered steps:
   - You text me
   - Send photos and information
   - I build it, with 2 rounds of changes
   - You approve it, then pay
   Include 30 days of free bug fixes and explain that the domain is purchased by and owned by the client.

7. **Pricing comparison**
   Three columns:
   - Trade Sites SD: $150 once — built for you, 2 change rounds, 30 days of bug fixes
   - Wix or Squarespace: $200+ per year — the owner still has to build it
   - Design agency: $2,000+ — outside the budget of most solo trade workers
   Highlight Trade Sites SD with a navy border and orange label. Add an honest note that $150 is the introductory price while Kevin builds his portfolio.

8. **About**
   - Heading: Built in San Diego. Son of the trades.
   - Explain Kevin's connection to Noe and why Trade Sites SD exists.
   - Use a clearly marked TODO image placeholder for a future photo of Kevin and Noe.

9. **Testimonial placeholder**
   - Include one clearly labeled TODO quote placeholder.
   - Do not invent a testimonial or imply that a client has endorsed the service.

10. **Contact**
   - Heading: Ready when you are
   - Invite visitors to text their trade and photos of their work.
   - Large Text Me and Call buttons.
   - Simple form with name, phone, and what you need.
   - Use a Web3Forms placeholder action and add a TODO comment for the access key.

11. **Footer**
   - Trade Sites SD
   - San Diego, CA
   - Business email placeholder marked TODO
   - Phone placeholder marked TODO

## Technical requirements

- Mobile-first CSS. Add min-width media queries for larger screens.
- Semantic header, nav, main, section, footer elements.
- Every section needs an id so navigation works.
- Use CSS custom properties for all colors. Recommended tokens:
  - --navy: #0F2B4C
  - --navy-dark: #0B1F38
  - --orange: #FF7A2F
  - --orange-dark: #E5661D
  - --background: #FFFFFF
  - --surface: #F4F7FB
  - --border: #DCE5F0
  - --text: #12233A
  - --muted: #5A6B80
- Load one readable Google Font, such as Inter.
- Use font weights 400, 500, 600, and 700 where useful.
- All phone numbers must be tel: or sms: links. Use (619) 555-0147 as a placeholder and mark it with TODO comments.
- Tap targets must be at least 44px tall.
- Add visible keyboard focus states and meaningful alt text.
- Keep the page accessible and ensure text contrast is readable.
- Include a prefers-reduced-motion media query for phase 2.
- Do not add gradients, animation, hover effects, or decorative flourishes in phase 1 beyond simple color transitions.
- Mark every placeholder image, quote, email, phone, endpoint, and client detail with an HTML TODO comment.

## Important honesty rule

The portfolio is empty except for Noe's first build, which is not live yet. Never write copy that implies Trade Sites SD has completed client websites, reviews, or testimonials. The page should sell the quality of the product through its own structure and clarity, not through invented proof.
