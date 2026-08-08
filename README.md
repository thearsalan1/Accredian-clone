# Accredian Enterprise — Partial Clone

A responsive, partial recreation of the Accredian Enterprise landing page, built with
Next.js (App Router), TypeScript, and Tailwind CSS, for the Full Stack Developer Intern assignment.

## Live demo & repo
- Live (Vercel): _add your deployed link here_
- GitHub: _add your repo link here_

## Tech stack
- **Next.js 14 (App Router)** — routing, layouts, API routes
- **TypeScript** — typed components and data models
- **Tailwind CSS** — utility-first styling with a custom design-token setup (colors, fonts) in `tailwind.config.ts`
- **next/font** — self-hosted Google Fonts (Space Grotesk, Inter, IBM Plex Mono), no layout shift

## Setup instructions
```bash
npm install
npm run dev
```
Open http://localhost:3000.

To build for production:
```bash
npm run build
npm start
```

## Deploying to Vercel
1. Push this repo to GitHub.
2. Import it at vercel.com → New Project → select the repo.
3. Framework preset "Next.js" is auto-detected — no extra config needed.
4. Deploy.

## Approach taken
- **Section-by-section rebuild**: the page follows the real site's structure and nav —
  Hero, Track Record (stats), Partnerships, The Accredian Edge (7-point framework), Domain
  Expertise (7 program areas), Course Segmentation, Who Should Join, The CAT Framework,
  How We Deliver Results, FAQs, Testimonials, a closing CTA banner, a lead form, and the footer.
- **Component architecture**: every section is a standalone component in `components/`, each
  consuming typed content from `lib/data.ts` (standing in for a CMS/API response) so copy can
  be swapped without touching layout code.
- **Design tokens**: a navy / indigo / amber palette (matching the source site's blue-forward
  identity) and a Space Grotesk + Inter + IBM Plex Mono type system are defined once in
  `tailwind.config.ts` and reused throughout instead of ad-hoc utility classes per section.
- **Interactive pieces built, not just static markup**: the FAQ section (`components/FAQ.tsx`)
  has real category tabs and an accordion with state; the testimonials section paginates; the
  navbar has a working mobile menu.
- **Mock API + bonus lead form**: `app/api/lead/route.ts` is a real Next.js Route Handler that
  accepts `POST` requests from the lead-capture form (`components/LeadForm.tsx`, wired to every
  "Enquire Now" / "Contact Us" call-to-action via `#lead-form`) and stores submissions in memory
  (swap for a database in production). This satisfies the bonus "store data via API" requirement.
- **Responsiveness & accessibility**: mobile-first Tailwind breakpoints throughout, a working
  hamburger menu on small screens, visible focus rings (`.focus-ring`) on every interactive
  element, and semantic markup (`<ol>` for ordered steps, `aria-expanded` on the accordion, etc).
- **What's intentionally different from the source**: real photography is replaced with an
  abstract SVG placeholder in the hero (no stock/real-person imagery used), and icons are simple
  inline glyphs rather than the source site's custom icon set — kept deliberately simple per the
  assignment's "clarity and structure over pixel-perfect design" note.

## AI usage explanation
I used Claude (Anthropic) throughout this assignment:
- **Where AI helped**: scaffolding the Next.js/Tailwind project structure, generating the initial
  component code and Tailwind design tokens, drafting placeholder copy for each section, and
  writing the mock API route.
- **What I modified/reviewed manually**: I reviewed every component for correctness, adjusted the
  section flow and copy to read naturally, tested responsiveness, verified the lead form
  actually calls the API route end-to-end, and made sure no content was copied directly from the
  live Accredian Enterprise site — only the general structure of a B2B upskilling landing page
  was used as reference, with original wording and a custom visual identity.

## Improvements with more time
- Wire the lead-capture form to a real database (e.g., Postgres via Prisma, matching the stack
  I use on my other projects) instead of the in-memory store.
- Add real program/testimonial content sourced from an actual CMS, plus OG images and structured
  data for SEO.
- Add unit tests for the API route and component-level tests (React Testing Library) for the form.
- Add a scroll-reveal treatment to more sections (currently limited to the Skill Pathway section)
  and a proper 404/loading state.
- Replace the text-based "logo strip" with real partner logos once available.
