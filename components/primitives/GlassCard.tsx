/**
 * GlassCard — Pendo's contained-card pattern.
 *
 * Use cases per CORPUS:
 *   - Mid-page conversational CTAs (the "centered dark card on slightly
 *     contrasting background" pattern from
 *     dex_pendo_conversational_cta_heading_modes).
 *   - Editorial callouts inside dense content.
 *   - Per-capability cards inside a bento or grid where each card needs
 *     soft chrome rather than a hard border.
 *
 * Visual properties:
 *   - Rounded corners (rounded-2xl ~16px) — softer than the standard
 *     8-10px UI radius, signalling "this is a content card, not a UI
 *     control."
 *   - Subtle border using the semantic --border-subtle token (which adapts
 *     to the active theme — invisible on cream, faint outline on dark).
 *   - Background uses --bg-card so light cards stay white and dark cards
 *     stay near-black.
 *   - Optional glass effect (`variant="glass"`) adds a backdrop blur for
 *     the conversational-CTA contained-card execution specifically. Use
 *     sparingly per the IMPECCABLE "glassmorphism as default" ban —
 *     this should be a deliberate move, not a default.
 *
 * Usage:
 *   <GlassCard>...</GlassCard>
 *   <GlassCard variant="glass" align="center">...</GlassCard>
 */

import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'solid' | 'glass';
type Align = 'left' | 'center';

interface GlassCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> {
  variant?: Variant;
  align?: Align;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<Variant, string> = {
  solid: 'bg-bg-card border border-border-subtle',
  glass:
    'bg-bg-card/60 backdrop-blur-md border border-border-subtle ' +
    'supports-[not(backdrop-filter:blur(0))]:bg-bg-card',
};

const alignClasses: Record<Align, string> = {
  left: 'items-start text-left',
  center: 'items-center text-center',
};

export function GlassCard({
  variant = 'solid',
  align = 'left',
  className,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-6 rounded-2xl p-8 sm:p-10',
        variantClasses[variant],
        alignClasses[align],
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
