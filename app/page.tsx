/**
 * Default page shell — a minimal three-section page that exercises every
 * seed-kit primitive.
 *
 * Purpose: when Fusion connects to a freshly cloned seed kit, this page is
 * what it sees first. It needs to:
 *   1. Demonstrate the primitives in actual use (so Fusion learns the
 *      component API by example).
 *   2. Show the brand tokens applied (so the visual analyzer sees a real
 *      Pendo-flavored surface, not a Next.js boilerplate).
 *   3. Leave plenty of room for extension (a minimal demo page — Fusion
 *      and the user fill in the actual product story).
 *
 * Intentionally NOT included: real product copy, real imagery (the media
 * slot in <ProductHero> shows an empty placeholder surface), full motion
 * choreography. Replace the headlines, subheads, and CTAs with real
 * content when you start authoring.
 *
 * The placeholder phrases here ("Replace this hero with your story",
 * "This seed kit ships with Pendo brand tokens") are detected by Rubin's
 * no-grounding heuristic (unstuck/lib/grounding.ts), which switches the
 * Direction Generator into build-from-scratch mode. Don't change those
 * phrases unless you also update the detector list.
 */

import {
  CTABanner,
  CTAButton,
  Container,
  Eyebrow,
  GlassCard,
  GradientText,
  ProductHero,
  SectionHeader,
} from '@/components/primitives';

export default function HomePage() {
  return (
    <main>
      <ProductHero
        layout="split"
        theme="light"
        eyebrow={<Eyebrow>Getting started</Eyebrow>}
        headline={
          <>
            Replace this hero with{' '}
            <GradientText>your story</GradientText>.
          </>
        }
        subhead="This seed kit ships with Pendo brand tokens, Sora + Inter typography, and a handful of primitives ready to extend. Start by editing app/page.tsx."
        actions={
          <>
            <CTAButton href="#">Primary CTA</CTAButton>
            <CTAButton href="#" variant="ghost">
              Secondary CTA
            </CTAButton>
          </>
        }
        media={
          <div
            aria-hidden
            className="aspect-[4/3] w-full rounded-2xl border border-border-subtle bg-bg-elevated"
          />
        }
      />

      <Container as="section" theme="dark" className="py-24 sm:py-32">
        <SectionHeader
          align="center"
          eyebrow="Sections can flip theme with one prop"
          heading="Pass theme=&quot;dark&quot; to any container or section primitive."
          headingAccent='theme="dark"'
          subhead="Semantic tokens re-bind under the scope and every primitive inside the section re-themes. Useful for alternating rhythm without rewriting components."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <GlassCard>
            <h3 className="text-2xl">Solid card</h3>
            <p className="text-secondary">
              Default contained-card execution. Use for content callouts
              that need soft chrome without a hard outline.
            </p>
          </GlassCard>
          <GlassCard variant="glass" align="center">
            <h3 className="text-2xl">Glass card</h3>
            <p className="text-secondary">
              Use sparingly. Per Pendo&apos;s anti-slop floor,
              glassmorphism should be a deliberate move, not a default.
            </p>
            <CTAButton href="#">Single CTA</CTAButton>
          </GlassCard>
        </div>
      </Container>

      <CTABanner
        showCard
        theme="light"
        eyebrow={<Eyebrow>Ready when you are</Eyebrow>}
        heading={
          <>
            Less guesswork. <GradientText>More signal.</GradientText>
          </>
        }
        subhead="Conversational CTAs read as a statement or fragment, not an imperative. Replace this copy with the real ask."
        actions={<CTAButton href="#">Single primary CTA</CTAButton>}
      />
    </main>
  );
}
