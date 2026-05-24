/**
 * `cn` — the standard Tailwind className utility.
 *
 * Combines `clsx` (truthy-conditional class composition) with `tailwind-merge`
 * (so later utilities override earlier ones of the same property — e.g.,
 * `cn('p-4', 'p-6')` resolves to `p-6` instead of producing both).
 *
 * Use this in every primitive that accepts a `className` prop so consumers
 * can extend / override the primitive's defaults.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
