/**
 * Tailwind configuration tuned for the Pendo brand system (see
 * `extracted/BRAND.md` in the parent workspace, or BRAND.md in this repo if
 * you've extracted the seed kit to its own project).
 *
 * Token wiring strategy: every color in BRAND.md lives in `app/globals.css`
 * as a CSS variable. This file references those variables — semantic tokens
 * (--bg, --text-primary, --accent) get short class names so Tailwind utility
 * classes feel natural (`bg-bg`, `text-primary`, `border-default`), and the
 * raw palette gets full Pendo-named classes (`bg-pendo-pink`, `bg-pink-5`).
 *
 * Why CSS variables + Tailwind together: the CSS-variable layer is what
 * makes light/dark mode work (the variables get re-bound per `data-theme`
 * scope). Tailwind classes are just the convenient interface to those
 * variables — flipping the data-theme attribute on the body re-themes the
 * whole app without any class swapping.
 */

import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — bind to whatever the active theme exposes.
        bg: 'var(--bg)',
        'bg-card': 'var(--bg-card)',
        'bg-elevated': 'var(--bg-elevated)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent)',
        'border-default': 'var(--border)',
        'border-subtle': 'var(--border-subtle)',
        // Raw palette — full Pendo color names from BRAND.md.
        'pendo-pink': 'var(--color-pendo-pink)',
        graphite: 'var(--color-graphite)',
        'light-mode': 'var(--color-light-mode)',
        // Pink tones P1–P8 (gradients, accents, branded illustration).
        'pink-1': 'var(--color-pink-1)',
        'pink-2': 'var(--color-pink-2)',
        'pink-3': 'var(--color-pink-3)',
        'pink-4': 'var(--color-pink-4)',
        'pink-5': 'var(--color-pink-5)',
        'pink-6': 'var(--color-pink-6)',
        'pink-7': 'var(--color-pink-7)',
        'pink-8': 'var(--color-pink-8)',
        // Warm neutrals from BRAND.md.
        'neutral-1': 'var(--color-neutral-1)',
        'neutral-2': 'var(--color-neutral-2)',
        'neutral-3': 'var(--color-neutral-3)',
        'neutral-4': 'var(--color-neutral-4)',
        'neutral-5': 'var(--color-neutral-5)',
      },
      fontFamily: {
        // Wired in app/layout.tsx via next/font.
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'sans-serif'],
        mono: [
          'var(--font-jetbrains-mono)',
          'ui-monospace',
          'SFMono-Regular',
          'monospace',
        ],
      },
      letterSpacing: {
        // Eyebrow tracking — matches the canonical Pendo pattern.
        eyebrow: '0.12em',
      },
      backgroundImage: {
        // The two canonical radial gradients from BRAND.md §gradients.
        // Anchored to the LEFT edge so they read as a brand identity moment
        // rather than a generic SaaS background wash.
        'pendo-gradient-dark':
          'radial-gradient(ellipse at 0% 50%, #FF9ED7 0%, #FD6AA5 25%, #D80574 50%, #97127A 75%, #000000 100%)',
        'pendo-gradient-light':
          'radial-gradient(ellipse at 0% 50%, #97127A 0%, #D80574 25%, #FD6AA5 50%, #FF9ED7 75%, #EDEEE7 100%)',
        // PREDICT — display-number / stat highlight gradient
        // (product-style-guide §2.6/§2.7). Exposed both as the CSS variable
        // var(--predict-gradient) and this utility (bg-predict-gradient).
        'predict-gradient': 'var(--predict-gradient)',
      },
    },
  },
  plugins: [],
};

export default config;
