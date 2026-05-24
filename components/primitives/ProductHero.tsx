/**
 * ProductHero — viewport-tall hero with two canonical Pendo layouts.
 *
 * Mirrors the canonical Pendo product-page hero (product-style-guide §11.1)
 * but ships a deliberately reduced execution surface for the seed kit:
 *
 *   - Layouts: `centered` and `split`. Skips `centered-dither` (the dither
 *     wave canvas adds animation + WebGL dependencies that aren't worth
 *     it for a seed-kit primitive — Fusion can layer that on later).
 *   - No GSAP scroll choreography. The canonical product-page component
 *     uses GSAP for the floating-chip parallax. Static for now; if a
 *     consumer wants motion, wrap the media slot in Framer Motion.
 *   - No first-class media TYPE (screenshot / video / image). Instead a
 *     `media` slot accepts arbitrary JSX so the consumer picks the
 *     execution. In the canonical kit, that slot would render a
 *     <ProductScreenshotFrame>; here, anything goes.
 *
 * The PROP SHAPE is intentionally faithful to the style guide so Fusion's
 * prescriptions ("<ProductHero layout='split' theme='dark'>") slot in
 * without translation. When the seed kit grows up, the internals can be
 * upgraded without changing the prop API.
 *
 * Usage:
 *   <ProductHero
 *     layout="split"
 *     theme="light"
 *     eyebrow={<Eyebrow>Agent Analytics</Eyebrow>}
 *     headline={
 *       <>
 *         Make smarter <GradientText>AI investments</GradientText>
 *       </>
 *     }
 *     subhead="Track every agent interaction, measure performance, improve results."
 *     actions={
 *       <>
 *         <CTAButton href="/demo">Get a demo</CTAButton>
 *         <CTAButton href="/learn" variant="ghost">See how it works</CTAButton>
 *       </>
 *     }
 *     media={<div className="aspect-video rounded-2xl bg-bg-elevated" />}
 *   />
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type ProductHeroLayout = 'centered' | 'split';
type ProductHeroTheme = 'light' | 'dark';

interface ProductHeroProps {
  layout?: ProductHeroLayout;
  theme?: ProductHeroTheme;
  eyebrow?: ReactNode;
  headline: ReactNode;
  subhead?: ReactNode;
  /** CTA slot — typically one or two <CTAButton>s in a flex row. */
  actions?: ReactNode;
  /**
   * Right-side content for split layout. Ignored when layout === 'centered'.
   * Provide a placeholder (e.g., an empty rounded surface) when you don't
   * have real media — DO NOT prescribe AI-generated screenshots.
   */
  media?: ReactNode;
  className?: string;
}

export function ProductHero({
  layout = 'centered',
  theme = 'light',
  eyebrow,
  headline,
  subhead,
  actions,
  media,
  className,
}: ProductHeroProps) {
  return (
    <section
      data-theme={theme}
      className={cn(
        'relative bg-bg text-primary',
        'min-h-[80vh] flex items-center',
        'py-20 sm:py-28',
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-8 lg:px-12">
        {layout === 'split' ? (
          <SplitLayout
            eyebrow={eyebrow}
            headline={headline}
            subhead={subhead}
            actions={actions}
            media={media}
          />
        ) : (
          <CenteredLayout
            eyebrow={eyebrow}
            headline={headline}
            subhead={subhead}
            actions={actions}
            media={media}
          />
        )}
      </div>
    </section>
  );
}

interface LayoutProps {
  eyebrow?: ReactNode;
  headline: ReactNode;
  subhead?: ReactNode;
  actions?: ReactNode;
  media?: ReactNode;
}

function SplitLayout({
  eyebrow,
  headline,
  subhead,
  actions,
  media,
}: LayoutProps) {
  return (
    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
      <div className="flex flex-col gap-6">
        {eyebrow}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          {headline}
        </h1>
        {subhead ? (
          <p className="max-w-xl text-lg text-secondary">{subhead}</p>
        ) : null}
        {actions ? (
          <div className="mt-2 flex flex-wrap items-center gap-3">{actions}</div>
        ) : null}
      </div>
      {media ? <div className="w-full">{media}</div> : null}
    </div>
  );
}

function CenteredLayout({
  eyebrow,
  headline,
  subhead,
  actions,
  media,
}: LayoutProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex w-full max-w-3xl flex-col items-center gap-6">
        {eyebrow}
        <h1 className="font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-7xl">
          {headline}
        </h1>
        {subhead ? (
          <p className="max-w-2xl text-lg text-secondary">{subhead}</p>
        ) : null}
        {actions ? (
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            {actions}
          </div>
        ) : null}
      </div>
      {media ? <div className="mt-16 w-full">{media}</div> : null}
    </div>
  );
}
