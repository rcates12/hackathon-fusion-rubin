/**
 * GradientText — inline span with a CSS gradient text-clip.
 *
 * Mirrors the canonical Pendo product-page component (product-style-guide
 * §9.1). The default `gradient` is PREDICT (a 135° pink → magenta → light
 * pink ramp), used on display numbers, stat values, and highlighted
 * payoff phrases inside Sora display headlines.
 *
 * Why this is its own primitive: the gradient text-clip technique requires
 * three coordinated CSS properties (`background-image`, `background-clip:
 * text`, and `-webkit-text-fill-color: transparent`). Encoding it once
 * avoids consumers (and Fusion) reinventing it inconsistently.
 *
 * The IMPECCABLE substrate calls out "gradient text" as an AI design tell
 * when used as decoration. The Pendo usage is deliberate and constrained:
 * stat values, single payoff phrases inside a Sora headline, occasional
 * eyebrow numerals. Use this primitive sparingly and inside text that
 * already earns its visual weight.
 *
 * Usage:
 *   <h1>
 *     One tool, <GradientText>every team</GradientText>
 *   </h1>
 *
 *   <p className="text-6xl font-display">
 *     <GradientText display>92%</GradientText>
 *   </p>
 *
 *   <GradientText gradient="linear-gradient(135deg, #FF4876, #97127A)">
 *     Custom gradient
 *   </GradientText>
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** PREDICT — the canonical Pendo display-number / stat gradient. */
export const PREDICT_GRADIENT =
  'linear-gradient(135deg, #97127a 0%, #d80574 35%, #fd6aa5 70%, #ff9ed7 100%)';

type GradientTextElement = 'span' | 'em' | 'strong';

interface GradientTextProps {
  /** CSS gradient. Defaults to PREDICT_GRADIENT. */
  gradient?: string;
  /** HTML element to render. Defaults to span. */
  as?: GradientTextElement;
  /**
   * When true, applies display-size styling (Sora, large) so the gradient
   * reads with the same weight as a hero stat. Use for standalone stat
   * values; leave off when embedded inside an existing headline.
   */
  display?: boolean;
  className?: string;
  children: ReactNode;
}

export function GradientText({
  gradient = PREDICT_GRADIENT,
  as: Tag = 'span',
  display = false,
  className,
  children,
}: GradientTextProps) {
  return (
    <Tag
      style={{
        backgroundImage: gradient,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        color: 'transparent',
      }}
      className={cn(
        'inline',
        display && 'font-display text-5xl font-bold sm:text-6xl lg:text-7xl',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
