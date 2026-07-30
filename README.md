# Developer Portfolio

A responsive, data-driven portfolio foundation for a software developer. This first release establishes the complete visual system, page structure, interactions, accessibility, SEO foundation, and production build while keeping personal history easy to replace.

## Tech Stack

- React 19
- Next-compatible App Router via Vinext
- TypeScript 5
- Tailwind CSS 4 build pipeline with a custom tokenized CSS system
- Vite and Cloudflare-compatible server output
- Node.js test runner

The application uses standard React and web APIs. It does not depend on a proprietary application service or a localhost-only feature.

## Project Structure

```text
app/
  globals.css            Design and motion system
  layout.tsx             Fonts, metadata, SEO, and root layout
  page.tsx               Home-page composition
components/
  layout/                Navigation and footer
  motion/                Progressive interaction layer
  sections/              Home-page sections
  ui/                    Shared presentation components
data/
  site.ts                Name, introduction, profile facts, and links
  skills.ts              Skills and technologies
  projects.ts            Featured project records
  experience.ts          Timeline records
  types.ts               Shared content types
public/
  images/projects/       Future project imagery
tests/
  rendered-html.test.mjs Rendered page and architecture contract
```

## Local Development

Requires Node.js `>=22.13.0`.

macOS, Linux, and Windows Command Prompt:

```bash
npm ci
npm run dev
```

Windows PowerShell users whose execution policy blocks `npm.ps1` can use the
equivalent executable directly:

```powershell
npm.cmd ci
npm.cmd run dev
```

Open [http://localhost:3000](http://localhost:3000).

Copy `.env.example` to `.env.local` when setting up another machine. The
repository already defaults this value to `http://localhost:3000` for local
development.

## Quality Checks

```bash
npm run lint
npx tsc --noEmit
npm test
npm run build
```

## Production Run

```bash
npm run build
npm run start
```

## Customization

- Name, role, introduction, availability, contact details, profile facts, navigation, and social links: `data/site.ts`
- Skills and groups: `data/skills.ts`
- Projects, technologies, status, and future URLs: `data/projects.ts`
- Experience and education timeline: `data/experience.ts`
- Theme colors, spacing, typography, breakpoints, and animation timing: `app/globals.css`
- SEO fields and canonical base URL behavior: `app/layout.tsx`
- Optional production URL: copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL`

Placeholder links deliberately point to the Contact section. Replace them before launch. Project image paths are already part of the data model; CSS visuals are used until real case-study images are available.

## Adding Future Pages

The current site is single-page first. New App Router routes can be added without restructuring the data layer:

```text
app/projects/page.tsx
app/projects/[slug]/page.tsx
app/about/page.tsx
app/blog/page.tsx
app/blog/[slug]/page.tsx
app/contact/page.tsx
```

Project detail routes can select an entry from `data/projects.ts` by `slug`.

## Deployment

Set `NEXT_PUBLIC_SITE_URL` to the final domain before publishing.

- **Vercel:** import the repository, use the standard install/build commands, and configure the environment variable.
- **Cloudflare:** use the included Vinext/Vite build and deploy the generated Worker-compatible output.
- **Netlify:** configure the supported Next.js runtime adapter and the same environment variable.
- **Node server:** run `npm run build` followed by `npm run start` on Node.js `>=22.13.0`.

Add the custom domain and its DNS records only after the deployed preview has been reviewed.
