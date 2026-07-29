# Developer Portfolio Design

## Goal

Create a production-ready, single-page developer portfolio foundation for Mark. The first release emphasizes architecture, visual identity, responsive behavior, accessibility, and motion; personal history remains intentionally replaceable placeholder content.

## Visual direction

The site uses a dark editorial canvas (`#0F172A`) with graphite surfaces (`#111827`), restrained teal focus (`#009B95`), and a brighter PETRONAS accent (`#00A19B`) only for hover, glow, and active states. Thin rules, disciplined spacing, mono labels, asymmetrical section layouts, a subtle grid, and low-opacity environmental light create the technical character without neon, terminal, or cyberpunk motifs.

## Architecture

- Vinext/Next-compatible React 19 and TypeScript, preserving the Sites starter's Cloudflare-compatible build while avoiding platform-only application APIs.
- One server-rendered home route composed from focused section components.
- Personal content lives in `data/` modules; components render typed models and contain no invented biography.
- A small client shell owns progressive enhancements: navigation state, mobile drawer, scroll progress, reveal behavior, and pointer spotlight.
- CSS variables define the design and motion tokens. CSS handles motion with `prefers-reduced-motion`; JavaScript only adds viewport and pointer state.

## Page structure

1. Floating navigation with a compact `M/` mark, active-section indicator, contact CTA, and accessible mobile drawer.
2. Hero with availability label, name, role, concise placeholder positioning, two CTAs, social placeholders, and a scroll cue.
3. About with editorial split copy and replaceable profile facts.
4. Skills grouped by Languages, Frameworks, AI / ML, Tools, and Infrastructure.
5. Selected Projects rendered from a typed project data set and styled with varied abstract CSS covers.
6. Experience timeline rendered from typed placeholder records.
7. Contact statement with placeholder email/social links and an explicit “replace before launch” cue.
8. Footer with automatic year and back-to-top control.

## Interaction and accessibility

- Hash navigation uses native anchors and CSS smooth scrolling.
- Intersection Observer updates the active navigation section and reveals sections.
- The mobile drawer traps no focus because it is a short inline disclosure; Escape closes it and route selection collapses it.
- A passive, `requestAnimationFrame`-scheduled pointer spotlight runs only on fine-pointer desktops.
- Buttons, links, focus states, headings, landmarks, labels, and color contrast remain usable without animation.
- Reduced-motion mode disables smooth scrolling, reveals, stagger, spotlight interpolation, and decorative movement.

## SEO and future growth

Metadata includes a configurable title, description, keywords, canonical base, Open Graph fields, X card fields, favicon, and theme color. `NEXT_PUBLIC_SITE_URL` is optional and falls back to a non-local placeholder URL. The `data/projects.ts` shape already includes slug, image, source, demo, status, and featured flags so future `/projects/[slug]` pages can reuse it.

## Verification

- Node rendered-HTML tests verify semantic landmarks, every required section, metadata, data-driven copy, and removal of starter artifacts.
- ESLint verifies code quality.
- TypeScript runs with `tsc --noEmit`.
- The production build verifies the Vinext/Cloudflare output.
- Local preview remains running at the dev server URL for user review.

