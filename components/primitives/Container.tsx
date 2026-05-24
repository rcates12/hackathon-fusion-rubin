/**
 * Container — section-level layout wrapper.
 *
 * Three jobs:
 *   1. Cap content width at a sensible reading column (max-w-7xl by default
 *      — Pendo's product pages settle around 1200–1280px on desktop).
 *   2. Provide consistent horizontal padding that adapts to viewport.
 *   3. Optionally render as a `<section>` with a theme attribute so the
 *      semantic color tokens flip without re-passing classes.
 *
 * Width variants:
 *   - `default` (max-w-7xl ~1280px) — most sections
 *   - `narrow` (max-w-3xl ~768px) — editorial body copy, single-claim heros
 *   - `wide` (max-w-screen-2xl ~1536px) — full-bleed feature sections,
 *     homepage hero rows
 *
 * Theme prop: when set, the container becomes a `data-theme` scope. The
 * CSS variables defined in app/globals.css re-bind under this scope, so
 * everything inside (semantic colors, primitives that use them) re-themes
 * automatically. Useful for the canonical Pendo pattern of alternating
 * light and dark sections within a single page.
 *
 * Usage:
 *   <Container>...</Container>
 *   <Container as="section" theme="dark" width="wide">...</Container>
 */

import type { ElementType, HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Width = 'narrow' | 'default' | 'wide';
type Theme = 'light' | 'dark';

interface ContainerProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  as?: ElementType;
  width?: Width;
  /** When set, scopes a data-theme attribute that re-binds the semantic tokens. */
  theme?: Theme;
  className?: string;
  children: ReactNode;
}

const widthClasses: Record<Width, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-7xl',
  wide: 'max-w-screen-2xl',
};

export function Container({
  as: Tag = 'div',
  width = 'default',
  theme,
  className,
  children,
  ...rest
}: ContainerProps) {
  const themed = theme !== undefined;
  return (
    <Tag
      data-theme={theme}
      className={cn(
        // The inner content is the centered, capped column.
        // When themed, we also paint the section's background + text color
        // so the scope visibly applies; consumers can override via className.
        themed && 'bg-bg text-primary',
        'w-full',
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          'mx-auto w-full px-6 sm:px-8 lg:px-12',
          widthClasses[width],
        )}
      >
        {children}
      </div>
    </Tag>
  );
}
