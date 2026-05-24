/**
 * Primitives barrel export.
 *
 * Single import path for consumers and for Fusion. When generating a page,
 * Fusion can pull all primitives via:
 *
 *   import {
 *     CTAButton,
 *     CTABanner,
 *     Container,
 *     Eyebrow,
 *     GlassCard,
 *     GradientText,
 *     ProductHero,
 *     SectionHeader,
 *   } from '@/components/primitives';
 *
 * Tokens (gradient constants, etc.) also surface here so Fusion can
 * import them by name:
 *
 *   import { PREDICT_GRADIENT } from '@/components/primitives';
 *
 * Adding a primitive: author the component file alongside the existing
 * primitives in this folder, then export it from here. The barrel keeps
 * the public surface area predictable.
 */

export { CTABanner } from './CTABanner';
export { CTAButton } from './CTAButton';
export type { CTAButtonProps } from './CTAButton';
export { Container } from './Container';
export { Eyebrow } from './Eyebrow';
export { GlassCard } from './GlassCard';
export { GradientText, PREDICT_GRADIENT } from './GradientText';
export { ProductHero } from './ProductHero';
export { SectionHeader } from './SectionHeader';
