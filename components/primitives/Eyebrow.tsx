/**
 * Eyebrow — Pendo's canonical section eyebrow with a leading dash.
 *
 * Format: `— LABEL TEXT` rendered in uppercase, tracked, ~12px, in Pendo
 * Pank (#FF4876). The leading character is a 12px-wide horizontal rule
 * (em-dash + space), NOT the actual `—` character — using a styled span
 * gives us pixel-precise control over the dash width and color, and lets
 * the eyebrow stay visually consistent regardless of the font's em-dash
 * glyph.
 *
 * This pattern appears across nearly every Pendo product page, microsite,
 * and editorial surface. It's the single highest-leverage eyebrow exemplar
 * in CORPUS (dex_agent_analytics_eyebrow_dash). Always render the dash
 * even when the surrounding theme is dark — the Pank stays the accent.
 *
 * Usage:
 *   <Eyebrow>Capabilities</Eyebrow>
 *   <Eyebrow as="h2">How it works</Eyebrow>
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface EyebrowProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Eyebrow({
  as: Tag = 'p',
  className,
  children,
  ...rest
}: EyebrowProps) {
  return (
    <Tag
      className={cn(
        'flex items-center gap-2 text-[11px] font-bold uppercase tracking-eyebrow text-pendo-pink',
        className,
      )}
      {...rest}
    >
      <span
        aria-hidden
        className="inline-block h-px w-3 bg-pendo-pink"
      />
      <span>{children}</span>
    </Tag>
  );
}
