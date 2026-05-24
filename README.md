# Pendo seed kit

A Pendo-flavored Next.js starter for [Builder.io Fusion](https://www.builder.io/c/docs/fusion). Drop Fusion into a fresh repo built from this template and it has real design opinion from the first prompt — brand tokens, typography, and a small set of primitives — instead of synthesizing a design system from scratch.

## Why this exists

Fusion produces its best work when the connected repo already has a design system to lean on (tokens, typography, primitives, page chrome). Without it, Fusion is doing two jobs at once on every prompt: synthesize a design system **and** apply your change. Job 1 is where the slop tends to enter.

This seed kit gives Fusion job 1 for free, so every prompt only does job 2.

## What's included

- **Next.js 15** (App Router) + **React 18** + **TypeScript** (strict).
- **Tailwind CSS 3** with Pendo brand tokens wired in. Every color in `BRAND.md` (Pendo Pank, pink tones P1–P8, warm neutrals) is available as a Tailwind utility (`bg-pendo-pink`, `text-pink-5`, `border-neutral-1`).
- **Semantic tokens** for light/dark theming. `bg`, `bg-card`, `primary`, `secondary`, `muted`, `accent`, `border-default` all flip automatically when a section sets `data-theme="dark"`.
- **Typography** via `next/font`:
  - `font-display` → Sora (hero headlines, page titles — Bold 700 only per BRAND.md)
  - `font-sans` → Inter (body, secondary headlines, data)
  - `font-mono` → JetBrains Mono (code, technical content)
- **Eight primitives** covering the highest-leverage Pendo patterns. API shapes match `extracted/product-style-guide.md` so prescriptions from Rubin slot in without translation.
  - `<ProductHero>` — viewport-tall hero with `layout='centered' | 'split'`, `theme='light' | 'dark'`, slots for `eyebrow`, `headline`, `subhead`, `actions`, `media`. Skips dither-wave + GSAP from the canonical kit; static for now.
  - `<CTABanner>` — section-level conversational CTA with `showCard` (contained glass card, default) and full-bleed variants. Slots for `eyebrow`, `heading`, `subhead`, `actions`. Designed for statement/fragment headings, not imperatives.
  - `<CTAButton>` — pill button with `primary` (Pank fill) and `ghost` (subtle border + muted label) variants. Variant names match the style guide so Fusion's prescriptions like `<CTAButton variant='ghost' theme='light'>` work directly.
  - `<GradientText>` — inline span with CSS gradient text-clip. Defaults to `PREDICT_GRADIENT`. Use sparingly — for stat values and single payoff phrases inside a Sora headline, not as decoration.
  - `<SectionHeader>` — eyebrow + heading + optional subhead, with dual-treatment heading support (`headingAccent` prop).
  - `<Container>` — width-capped section wrapper with `theme='light' | 'dark'` scoping that re-binds semantic tokens for the section.
  - `<GlassCard>` — contained-card pattern for callouts and CTAs, with `solid` (default) and `glass` (use sparingly) variants.
  - `<Eyebrow>` — the canonical dash-prefix eyebrow (`— LABEL`) in Pendo Pank.

## Getting started

Clone, install, run:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). You'll see a two-section starter page that exercises every primitive.

## Using with Fusion

1. Push this repo to GitHub (or fork the template if it's published as one).
2. In Builder.io Fusion, connect to the repo.
3. Author your first prompt. Fusion will see:
   - Tailwind config + globals.css already tinted with Pendo tokens
   - Sora + Inter loaded and available as `font-display` / `font-sans`
   - Five primitives ready to import from `@/components/primitives`
4. Reference primitives by name in your Fusion prompts where appropriate (`<CTAButton variant="primary">`, `<SectionHeader eyebrow="..." heading="..." />`). Fusion will compose them rather than redrawing them from scratch.

## Extending the kit

When you find yourself reaching for a pattern more than twice, promote it to a primitive:

1. Author the component in `components/primitives/`. Follow the conventions of the existing primitives: explicit prop interface, JSDoc explaining intent, `cn(...)` for className composition, theme-aware via semantic Tailwind tokens.
2. Add the export to `components/primitives/index.ts`.
3. Add a usage example to `app/page.tsx` so Fusion can see the new primitive in context.

When you find a pattern documented in `extracted/CORPUS.md` (in the parent workspace) that's not yet a primitive but would benefit from one, the corpus exemplar gives you the spec — port it here.

## File layout

```
pendo-seed-kit/
├── app/
│   ├── globals.css          ← CSS variables for brand tokens + semantic theming
│   ├── layout.tsx           ← Root layout, next/font wiring
│   └── page.tsx             ← Starter page shell (replace with your content)
├── components/
│   └── primitives/
│       ├── CTABanner.tsx
│       ├── CTAButton.tsx
│       ├── Container.tsx
│       ├── Eyebrow.tsx
│       ├── GlassCard.tsx
│       ├── GradientText.tsx
│       ├── ProductHero.tsx
│       ├── SectionHeader.tsx
│       └── index.ts         ← Barrel export (components + PREDICT_GRADIENT)
├── lib/
│   └── cn.ts                ← clsx + tailwind-merge utility
├── tailwind.config.ts       ← Token wiring (CSS vars → Tailwind utilities)
├── postcss.config.js
├── tsconfig.json
├── next.config.ts
└── package.json
```

## Brand reference

This seed kit is a Pendo-specific implementation of the brand identity captured in `extracted/BRAND.md` in the parent workspace. If a design needs a hue, weight, or pattern this kit doesn't have, propose the addition in `BRAND.md` first, then port back here.

## License

Internal to Pendo. Not licensed for redistribution outside Pendo.
