# Developer Portfolio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, responsive, data-driven developer portfolio foundation for Mark.

**Architecture:** A Vinext/Next-compatible server page composes focused React sections from typed data modules. One client-side experience layer progressively enhances navigation, viewport reveals, scroll progress, the mobile menu, and a desktop-only pointer spotlight.

**Tech Stack:** React 19, Next-compatible App Router, TypeScript 5, Tailwind 4 build pipeline, authored CSS, Node test runner, Vinext/Vite.

## Global Constraints

- Use `#0F172A`, `#111827`, `#009B95`, `#00A19B`, `#F8FAFC`, and `#94A3B8` through CSS variables.
- Do not invent real employers, roles, awards, contact details, or social URLs.
- Support 1920, 1440, 1280, 1024, 768, 430, and 390 pixel layouts.
- Respect `prefers-reduced-motion`.
- Keep the site portable beyond localhost and avoid platform-private application features.

---

### Task 1: Rendered contract and data models

**Files:**
- Modify: `tests/rendered-html.test.mjs`
- Create: `data/types.ts`
- Create: `data/site.ts`
- Create: `data/skills.ts`
- Create: `data/projects.ts`
- Create: `data/experience.ts`

**Interfaces:**
- Produces: `siteConfig`, `skillGroups`, `projects`, and `experience` as readonly typed data.

- [ ] Write rendered-output assertions for the title, landmarks, seven sections, CTA labels, and starter removal.
- [ ] Run `npm test` and confirm those assertions fail against the starter.
- [ ] Add the typed data modules with explicit placeholder values.

### Task 2: Semantic page and section components

**Files:**
- Create: `components/layout/site-header.tsx`
- Create: `components/layout/site-footer.tsx`
- Create: `components/sections/hero.tsx`
- Create: `components/sections/about.tsx`
- Create: `components/sections/skills.tsx`
- Create: `components/sections/projects.tsx`
- Create: `components/sections/experience.tsx`
- Create: `components/sections/contact.tsx`
- Create: `components/ui/section-heading.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Consumes: typed exports from `data/`.
- Produces: one semantic document with `header`, `main`, named sections, and `footer`.

- [ ] Implement the smallest server-rendered components that satisfy the failing HTML contract.
- [ ] Rebuild and run the rendered tests until green.

### Task 3: Progressive interaction layer

**Files:**
- Create: `components/motion/site-experience.tsx`
- Create: `components/motion/reveal.tsx`
- Modify: `components/layout/site-header.tsx`
- Modify: `app/page.tsx`

**Interfaces:**
- Produces: `SiteExperience` for scroll progress, active section state, drawer behavior, and pointer coordinates; `Reveal` for viewport activation.

- [ ] Add client behavior without making content visibility depend on JavaScript.
- [ ] Verify Escape, hash-link collapse, fine-pointer detection, and rAF scheduling in source and rendered markup.

### Task 4: Design and motion system

**Files:**
- Modify: `app/globals.css`

**Interfaces:**
- Consumes: stable class names from Tasks 2–3.
- Produces: responsive layouts, design tokens, state styling, and reduced-motion overrides.

- [ ] Implement the tokenized dark theme, editorial grids, project covers, timeline, focus states, and three motion durations.
- [ ] Add responsive breakpoints and reduced-motion behavior.

### Task 5: Metadata, assets, and starter cleanup

**Files:**
- Modify: `app/layout.tsx`
- Modify: `public/favicon.svg`
- Modify: `package.json`
- Modify: `package-lock.json`
- Delete: `app/_sites-preview/SkeletonPreview.tsx`
- Delete: `app/_sites-preview/preview.css`

**Interfaces:**
- Produces: configurable `metadataBase`, Open Graph metadata, favicon, and starter-free dependency tree.

- [ ] Replace all starter metadata and remove preview code/dependency.
- [ ] Run `npm install --package-lock-only --ignore-scripts` to refresh the lockfile.

### Task 6: Documentation and environment template

**Files:**
- Modify: `README.md`
- Create: `.env.example`

**Interfaces:**
- Documents all user-editable data modules and deployment targets.

- [ ] Document install, development, build, start, customization, structure, and deployment.
- [ ] Define optional `NEXT_PUBLIC_SITE_URL` without hardcoding localhost.

### Task 7: Final verification

**Files:**
- Modify only if a verification failure identifies a defect.

- [ ] Run `npm run lint` and fix all errors.
- [ ] Run `npx tsc --noEmit` and fix all type errors.
- [ ] Run `npm test` and confirm rendered tests pass.
- [ ] Run `npm run build` once more after the final source state.
- [ ] Confirm the retained local development server serves the finished home page.

