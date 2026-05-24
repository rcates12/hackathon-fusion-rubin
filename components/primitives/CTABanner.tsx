/**
 * CTABanner — section-level conversational CTA.
 *
 * Mirrors the canonical Pendo product-page CTA banner (product-style-guide
 * §11.5). Two layout modes:
 *
 *   - `showCard={true}`: contained glass-card execution (rounded-2xl,
 *     padding 10–16, soft border). The dominant pattern on Pendo product
 *     pages and microsites mid-page CTA moments. Pairs well with a
 *     conversational, statement-not-imperative heading.
 *
 *   - `showCard={false}`: full-bleed execution. The banner reads as a
 *     section moment rather than a contained card. Use sparingly and
 *     only when the surrounding rhythm calls for it (typically when the
 *     adjacent section is already card-dense).
 *
 * Per CORPUS `dex_pendo_conversational_cta_heading_modes`, the canonical
 * heading inside a CTABanner reads as a soft statement or fragment
 * ("Less guesswork. More signal.", "Here's how good it gets.") rather
 * than an imperative ("Try Pendo today!"). The seed-kit version doesn't
 * enforce this — the consumer chooses — but the JSDoc + README call it
 * out so Fusion gets the nudge.
 *
 * Usage:
 *   <CTABanner
 *     showCard
 *     theme="dark"
 *     eyebrow={<Eyebrow>Ready when you are</Eyebrow>}
 *     heading={<>Less guesswork. More signal.</>}
 *     subhead="See how Pendo turns product data into product decisions."
 *     actions={<CTAButton href="/demo">Get a demo</CTAButton>}
 *   />
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CTABannerTheme = 'light' | 'dark';

interface CTABannerProps {
  /**
   * When true (default), renders the banner as a contained glass card.
   * When false, renders as a full-bleed section.
   */
  showCard?: boolean;
  theme?: CTABannerTheme;
  eyebrow?: ReactNode;
  heading: ReactNode;
  subhead?: ReactNode;
  /** CTA slot — typically a single <CTAButton>. */
  actions?: ReactNode;
  /**
   * Override the headline's max-width. Pass any valid Tailwind max-width
   * class (e.g., 'max-w-3xl', 'max-w-[42ch]'). When omitted, the headline
   * is unconstrained — let the natural line break decide.
   */
  headlineMaxWidth?: string;
  className?: string;
}

export function CTABanner({
  showCard = true,
  theme = 'dark',
  eyebrow,
  heading,
  subhead,
  actions,
  headlineMaxWidth,
  className,
}: CTABannerProps) {
  return (
    <section
      data-theme={theme}
      className={cn('bg-bg text-primary', 'py-20 sm:py-28', className)}
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        {showCard ? (
          <CardBanner
            eyebrow={eyebrow}
            heading={heading}
            subhead={subhead}
            actions={actions}
            headlineMaxWidth={headlineMaxWidth}
          />
        ) : (
          <FullBleedBanner
            eyebrow={eyebrow}
            heading={heading}
            subhead={subhead}
            actions={actions}
            headlineMaxWidth={headlineMaxWidth}
          />
        )}
      </div>
    </section>
  );
}

interface InnerProps {
  eyebrow?: ReactNode;
  heading: ReactNode;
  subhead?: ReactNode;
  actions?: ReactNode;
  headlineMaxWidth?: string;
}

function CardBanner({
  eyebrow,
  heading,
  subhead,
  actions,
  headlineMaxWidth,
}: InnerProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-6 rounded-2xl text-center',
        'border border-border-subtle bg-bg-card',
        'p-10 md:p-14 lg:p-16',
      )}
    >
      {eyebrow}
      <h2
        className={cn(
          'font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl',
          headlineMaxWidth,
        )}
      >
        {heading}
      </h2>
      {subhead ? (
        <p className="max-w-[52ch] text-base text-secondary sm:text-lg">
          {subhead}
        </p>
      ) : null}
      {actions ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {actions}
        </div>
      ) : null}
    </div>
  );
}

function FullBleedBanner({
  eyebrow,
  heading,
  subhead,
  actions,
  headlineMaxWidth,
}: InnerProps) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      {eyebrow}
      <h2
        className={cn(
          'font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
          headlineMaxWidth,
        )}
      >
        {heading}
      </h2>
      {subhead ? (
        <p className="max-w-[52ch] text-base text-secondary sm:text-lg">
          {subhead}
        </p>
      ) : null}
      {actions ? (
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          {actions}
        </div>
      ) : null}
    </div>
  );
}
