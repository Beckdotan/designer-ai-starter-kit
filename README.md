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

Pageviews and key interactions are tracked with **GoatCounter** (privacy-first — no cookies, no IPs stored, respects DNT, no consent banner needed).

- **Dashboard:** <https://beckdotan.goatcounter.com>
- **Tracker script:** wired in `index.html`, in SPA mode (`window.goatcounter = { no_onload: true }`) so every hash route is counted explicitly
- **Helper:** `src/lib/track.ts` exposes `trackPath(path)` and `track(eventName)`. Both no-op if the script hasn't loaded (local dev, DNT, blockers).

### Virtual pageviews

The site is a hash-routed SPA, so each route fires its own pageview from `App.tsx`:

| Path | Where |
|---|---|
| `/` | Landing scroll (Hero → Why → POC → Principles → Models → Services → Footer) |
| `/lecture` | Talk page — featured watch CTA, journey timeline, slides, transcript |
| `/who` | Bio page — Neta + Dotan, build credits |

### Events

Events appear in the **Pages** panel tagged `event:true`, and in the **Events** tab if your account has it.

| Event | Fires when | Where |
|---|---|---|
| `cta-press-to-start` | User presses the hero shutter button | `src/sections/Hero.tsx` |
| `cta-watch-talk` | User clicks the featured watch-talk card on the lecture page | `src/pages/Lecture.tsx` |
| `cta-watch-talk-outro` | User clicks the watch-talk text link in the lecture-page outro | `src/pages/Lecture.tsx` |
| `lang-en` | User picks English in the header toggle | `src/components/TopNav.tsx` |
| `lang-he` | User picks Hebrew in the header toggle | `src/components/TopNav.tsx` |
| `copy-principle-01` … `copy-principle-09` | User copies a principle-card snippet | `src/sections/Principles.tsx` |
| `copy-starter-prompt` | User copies the full 9-rule starter prompt | `src/sections/Principles.tsx` |
| `outbound-linkedin-dotan-home` | LinkedIn click in the Services CTA on the landing scroll | `src/sections/Services.tsx` |
| `outbound-linkedin-dotan-who` | LinkedIn click on Dotan's card on `/who` | `src/pages/Who.tsx` |
| `outbound-linkedin-neta-who` | LinkedIn click on Neta's card on `/who` | `src/pages/Who.tsx` |
| `outbound-docs-gemini` | Click on the Gemini docs card | `src/sections/Models.tsx` |
| `outbound-docs-nano-banana` | Click on the Nano Banana docs card | `src/sections/Models.tsx` |
| `outbound-docs-ltx` | Click on the LTX docs card | `src/sections/Models.tsx` |
| `outbound-gem` | Click on any inline `gemini.google.com/gem` link (e.g. POC step 02) | `src/utils/linkify.tsx` |
| `outbound-aistudio` | Click on any inline `aistudio.google.com` link | `src/utils/linkify.tsx` |

### Adding a new event

1. Import the helper: `import { track } from '@/lib/track'`
2. Call it on the click handler: `onClick={() => track('your-event-name')}`
3. Use kebab-case names that read clearly in a dashboard list. Prefix outbound link clicks with `outbound-`, CTAs with `cta-`, and copy actions with `copy-`.
4. For inline markdown links rendered through `linkify()`, add a URL pattern to `TRACK_PATTERNS` in `src/utils/linkify.tsx` instead of editing call sites individually.

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
