# designer-ai-starter-kit

The UXI 2026 conference starter kit — a single-page site that turns "I watched that talk" into "I shipped my first AI POC" in under two hours. Built with Claude Code.

## Stack

Vite + React 18 + TypeScript + Tailwind CSS v3 + Framer Motion. Deploys to GitHub Pages via GitHub Actions on push to `main`.

## Develop

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

## Deploy

Push to `main`. The `Deploy to GitHub Pages` workflow builds and publishes automatically. Enable Pages in the repo settings → `Build and deployment` → `Source: GitHub Actions`.

The Vite `base` is `/designer-ai-starter-kit/` — change it in `vite.config.ts` if the repo is renamed.

## Analytics

Pageviews are tracked with GoatCounter (privacy-first, no cookies). Dashboard: <https://beckdotan.goatcounter.com>. The tracker is wired in `index.html`.

## Content swaps before launch

These are intentional placeholders — swap them in as assets arrive.

| File | What goes there |
|---|---|
| `public/hero.mp4` + `public/hero-poster.jpg` | Hero background clip (Shutter Button deck loop) + poster frame |
| `public/poc-step-01.png` … `poc-step-05.png` | Five AI Studio screenshots (current UI) |
| `public/dotan.jpg` | Services headshot (square, ~400×400) |
| `src/content/en.ts` → `services.linkedin` | Real LinkedIn URL |
| `src/content/en.ts` → `footer.talkRecordingUrl` | Talk recording URL when available |
| `src/content/en.ts` → `hero.receiptItems` | Honest build-time numbers |
| `src/content/he.ts` | Hebrew translations (scaffold present, English fallback) |

## Voice

Direct, confident, first-person plural ("we"). No corporate hedging, no fluff openers. Edit `src/content/en.ts` for all page copy.
