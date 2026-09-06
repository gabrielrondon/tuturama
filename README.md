# tuturama.com

The public site of Tuturama OÜ. Next.js App Router, Tailwind v4, no CMS, no database.

## Content rules

- Every fact lives in `data/site.ts`, with a public proof link. No claim without proof.
- Client names never appear. The consulting engagement is described, not named.
- Numbers (kernel commits, merged PRs) are re-verified against the source repositories before each content change. Last check: 2026-09-06.

## Design

Adapted from the GSAP style reference on Refero (dark canvas, one cream surface, colour as taxonomy, ghost pill buttons, `{ }` annotations). Tokens in `app/globals.css`.

Display face is Inter Tight today. To switch to PP Mori once licensed: drop the woff2 files in `public/fonts/`, uncomment the `@font-face` block in `app/globals.css`, and point `--font-display-face` at it in `app/layout.tsx`.

## Run

```bash
npm install
npm run dev
```

Deploys from `main` on Vercel (project `tuturama-site`).
