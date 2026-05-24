/**
 * SectionHeader — Eyebrow + heading + optional subhead, composed.
 *
 * Bundles the three most-common section opener elements into one primitive
 * so a Fusion direction can prescribe a section opener in a single
 * component reference rather than three separate tags.
 *
 * Supports DUAL-TREATMENT headings (the Pendo pattern where a single phrase
 * inside the heading takes a different visual treatment — italic + color)
 * via the `headingAccent` prop. When supplied, the component renders the
 * heading with the `headingAccent` substring italicized in Pendo Pank.
 * Pattern reference: dex_pendo_heading_dual_treatment.
 *
 * Usage:
 *   <SectionHeader eyebrow="Capabilities" heading="Make smarter AI investments" />
 *   <SectionHeader
 *     eyebrow="One tool"
 *     heading="One tool, every team"
 *     headingAccent="every team"
 *     subhead="A short framing sentence."
 *   />
 */

import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Eyebrow } from './Eyebrow';

interface SectionHeaderProps {
  eyebrow?: ReactNode;
  heading: string;
  /**
   * Optional substring within `heading` to render with dual-treatment
   * (italic + Pendo Pank). The substring must appear verbatim in `heading`
   * — if it doesn't, the heading renders without dual treatment.
   */
  headingAccent?: string;
  subhead?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  heading,
  headingAccent,
  subhead,
  align = 'left',
  className,
}: SectionHeaderProps) {
  const alignmentClasses =
    align === 'center'
      ? 'items-center text-center mx-auto max-w-3xl'
      : 'items-start text-left';

  return (
    <div className={cn('flex flex-col gap-4', alignmentClasses, className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        {renderHeading(heading, headingAccent)}
      </h2>
      {subhead ? (
        <p className="max-w-2xl text-base text-secondary sm:text-lg">
          {subhead}
        </p>
      ) : null}
    </div>
  );
}

function renderHeading(heading: string, accent?: string): ReactNode {
  if (!accent || !heading.includes(accent)) return heading;
  const idx = heading.indexOf(accent);
  const before = heading.slice(0, idx);
  const after = heading.slice(idx + accent.length);
  return (
    <>
      {before}
      <span className="italic text-pendo-pink">{accent}</span>
      {after}
    </>
  );
}
