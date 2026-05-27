/**
 * CTAButton — the canonical Pendo call-to-action button.
 *
 * Variants align with product-style-guide §9.2:
 *   - `primary`: white fill (#ffffff), black text (#000000), with an animated
 *     pank beam sweep effect. Canonical primary treatment for light themes.
 *   - `ghost`: low-contrast button — subtle border + muted label color.
 *     Used as a secondary CTA next to a `primary` (e.g., "Get a demo" +
 *     "See how it works").
 *
 * Both variants are pill-shaped (border-radius: 9999px) and adapt
 * automatically to light vs. dark theme through semantic CSS variables.
 *
 * `theme` is informational only — the component already adapts via the
 * accent CSS variable. The prop exists so consumers (and Fusion) can be
 * explicit about which surface this CTA sits on, which becomes a useful
 * affordance for downstream auditing/critique passes.
 *
 * Usage:
 *   <CTAButton href="/demo">Get a demo</CTAButton>
 *   <CTAButton variant="ghost" onClick={...}>See how it works</CTAButton>
 */

'use client';

import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CTAVariant = 'primary' | 'ghost';
type CTATheme = 'light' | 'dark';

interface BaseProps {
  variant?: CTAVariant;
  theme?: CTATheme;
  icon?: 'arrow';
  className?: string;
  children: ReactNode;
}

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className' | 'children'> & {
    href: string;
  };

type ButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'> & {
    href?: undefined;
  };

export type CTAButtonProps = AnchorProps | ButtonProps;

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 ' +
  'font-semibold text-sm transition focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 ' +
  'disabled:cursor-not-allowed disabled:opacity-50';

const styles: Record<CTAVariant, string> = {
  primary: 'bg-white text-black hover:opacity-90 cta-beam-sweep',
  ghost:
    'border border-[rgba(6,1,25,0.1)] bg-[rgba(6,1,25,0.04)] text-[rgba(6,1,25,0.6)] hover:text-primary hover:border-primary',
};

export function CTAButton(props: CTAButtonProps) {
  const variant = props.variant ?? 'primary';
  const className = cn(base, styles[variant], props.className);
  const showArrow = props.icon === 'arrow' && variant === 'primary';

  if ('href' in props && props.href !== undefined) {
    const { variant: _v, theme: _t, icon: _i, className: _c, children, href, ...rest } = props;
    return (
      <a href={href} className={className} {...rest}>
        {children}
        {showArrow && <span aria-hidden="true">→</span>}
      </a>
    );
  }

  const { variant: _v, theme: _t, icon: _i, className: _c, children, href: _h, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
      {showArrow && <span aria-hidden="true">→</span>}
    </button>
  );
}
