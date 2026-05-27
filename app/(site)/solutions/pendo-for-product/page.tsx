/**
 * Pendo for Product — solutions demo page.
 *
 * Demo target for Rubin scans. Structure mirrors the canonical pendo.io
 * solutions page (hero → three pillars → themed deep-dives → resources →
 * closing CTA) so the Direction Generator's CORPUS grounding lands cleanly.
 *
 * Planted weaknesses (kept in the page-body only — nav + footer are clean):
 *
 *   1. CTA PROLIFERATION
 *      The page is studded with ~12 secondary "Learn more →" / "Read →"
 *      micro-links across the three pillar cards, the three deep-dive
 *      sections, and the resources strip. The single primary CTA
 *      (Request a demo) sits only at the bottom. The visual hierarchy
 *      buries the primary path under a chorus of equally-weighted
 *      secondary actions. IMPECCABLE.md calls this out: a page should
 *      have ONE primary path; competing micro-CTAs erode conversion
 *      rate and reader confidence.
 *
 *   2. REPETITIVE SECTION RHYTHM
 *      The three deep-dive sections (Increase Revenue / Cut Costs /
 *      Reduce Risk) use the EXACT same structural layout: eyebrow
 *      top-left, two-paragraph body, two inline links, customer-proof
 *      GlassCard on the right. CORPUS exemplars for solutions pages
 *      alternate layout direction or break the rhythm with a visual
 *      interlude (stat strip, full-bleed quote, animated diagram) every
 *      2–3 sections. Three identical sections in a row reads as a copy
 *      block, not a designed page.
 *
 * Rubin should reliably surface both during Direction Mode scans. See
 * DEMO_PAGES.md for the expected output shape and the test-run prompt to
 * type into the scan complaint box.
 *
 * NOTE: copy is adapted from pendo.io/solutions/pendo-for-product/ —
 * loosely paraphrased to match Pendo's voice without verbatim copy.
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
import Link from 'next/link';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Pendo for Product | Improve software with Pendo',
  description:
    'Get all the tools you need to drive business growth from your product — analytics, in-app guides, feedback, and replay.',
};

export default function PendoForProductPage() {
  return (
    <>
      <ProductHero
        layout="centered"
        theme="light"
        eyebrow={<Eyebrow>Pendo for product</Eyebrow>}
        headline={
          <>
            Does tracking and increasing adoption feel like a{' '}
            <GradientText>guessing game?</GradientText>
          </>
        }
        subhead="Get all the tools you need to drive business growth from your product — analytics, in-app guides, feedback, and session replay in one platform."
        actions={
          <>
            <CTAButton href="#demo">Request a demo</CTAButton>
            <CTAButton href="#tour" variant="ghost">
              Watch the overview
            </CTAButton>
          </>
        }
      />

      <ThreePillars />

      <DeepDive
        eyebrow="Increase Revenue"
        heading="Understand user behavior to find new revenue opportunities"
        body={[
          'Identify the products, features, and user behaviors that drive retention to inform product-led growth and engineering investments. Use targeted in-app guides to drive expansion at the exact moment of intent.',
          'Tie product usage to revenue outcomes with a clear evidence chain — no more guessing which features actually move the business.',
        ]}
        inlineLinks={[
          { label: 'Optimize product revenue', href: '#opt-revenue' },
          { label: 'Drive cross-sell', href: '#cross-sell' },
        ]}
        proof={{
          customer: 'LastPass',
          stat: '$500K',
          statLabel: 'new bookings driven by in-product upgrade guides',
          quote:
            'Pendo Guides became our single highest-ROI channel for upgrade conversion last quarter.',
          attribution: 'VP, Product Growth · LastPass',
        }}
      />

      <DeepDive
        eyebrow="Cut Costs"
        heading="Monitor usage and deliver real-time support to lower costs"
        body={[
          'Combine usage, feedback, and NPS data to understand which products and features correlate with growth and retention so you can better prioritize R&D resources. Surface contextual help inside the product before users escalate to support.',
          'Reduce customer support volume by 20–40% by deflecting common questions with in-app guidance at the moment of friction.',
        ]}
        inlineLinks={[
          { label: 'Reduce customer support costs', href: '#cs-costs' },
          { label: 'Connect work to outcomes', href: '#outcomes' },
        ]}
        proof={{
          customer: 'Citrix',
          stat: '32%',
          statLabel: 'reduction in tier-1 support tickets',
          quote:
            'In-app guides cut our common-issue ticket volume in a single quarter — and the deflection compounds.',
          attribution: 'Director, Customer Operations · Citrix',
        }}
      />

      <DeepDive
        eyebrow="Reduce Risk"
        heading="Put customers at the center to derisk product decisions"
        body={[
          'Lower the risk associated with roadmap bets by using quantitative and qualitative data to validate ideas before development and align decisions with user needs. Run experiments inside the product to learn before you build.',
          'Connect every roadmap item to a measurable behavioral signal so engineering investments land on the highest-conviction bets.',
        ]}
        inlineLinks={[
          { label: 'Make data-driven roadmap decisions', href: '#roadmap' },
        ]}
        proof={{
          customer: 'Global Payments',
          stat: '4×',
          statLabel: 'faster hypothesis validation cycle',
          quote:
            'We use Pendo data to answer questions about users, validate hypotheses, and make smarter decisions in days, not quarters.',
          attribution: 'Head of Product · Global Payments',
        }}
      />

      <ResourcesStrip />

      <CTABanner
        showCard
        theme="light"
        eyebrow={<Eyebrow>Ready when you are</Eyebrow>}
        heading={
          <>
            See how Pendo can help <GradientText>your product team</GradientText>.
          </>
        }
        subhead="“Pendo saved us on resources, saved us on money, and added a sense of uniformity to our applications.” — Kyle Strickland, SVP of Product, NBCUniversal"
        actions={<CTAButton href="#demo">Request a demo</CTAButton>}
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Three pillars                                                      */
/* ------------------------------------------------------------------ */

interface Pillar {
  title: string;
  body: string;
  href: string;
}

const PILLARS: Pillar[] = [
  {
    title: 'Build what your users want',
    body: 'Collect feedback at scale and move quickly with AI-powered analysis to align development with customers’ needs.',
    href: '#build',
  },
  {
    title: 'Improve what you’ve already built',
    body: 'Use product analytics and replay data to spot friction, then take action with no-code in-app messaging.',
    href: '#improve',
  },
  {
    title: 'Use your product to drive growth',
    body: 'Leverage targeted in-app guides to increase product adoption, boost user engagement, and grow revenue.',
    href: '#growth',
  },
];

function ThreePillars() {
  return (
    <Container as="section" className="py-20 sm:py-28">
      <SectionHeader
        align="center"
        eyebrow="The platform at a glance"
        heading="One platform for every product decision"
        subhead="Three intersecting motions that turn product data into product outcomes."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {PILLARS.map((pillar) => (
          <GlassCard key={pillar.title}>
            <h3 className="font-display text-xl font-bold text-primary">
              {pillar.title}
            </h3>
            <p className="text-base text-secondary">{pillar.body}</p>
            <Link
              href={pillar.href}
              className="mt-auto text-sm font-medium text-pendo-pink hover:underline"
            >
              Learn more →
            </Link>
          </GlassCard>
        ))}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Deep dive (REPETITIVE BY DESIGN — see header doc, planted weakness #2) */
/* ------------------------------------------------------------------ */

interface DeepDiveProof {
  customer: string;
  stat: string;
  statLabel: string;
  quote: string;
  attribution: string;
}

interface DeepDiveProps {
  eyebrow: string;
  heading: string;
  body: string[];
  inlineLinks: Array<{ label: string; href: string }>;
  proof: DeepDiveProof;
}

function DeepDive({ eyebrow, heading, body, inlineLinks, proof }: DeepDiveProps) {
  return (
    <Container as="section" className="border-t border-border-subtle py-20 sm:py-24">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="flex flex-col gap-5">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {heading}
          </h2>
          {body.map((para, i) => (
            <p key={i} className="text-base text-secondary sm:text-lg">
              {para}
            </p>
          ))}
          <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2">
            {inlineLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-pendo-pink hover:underline"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
        <ProofCard proof={proof} />
      </div>
    </Container>
  );
}

function ProofCard({ proof }: { proof: DeepDiveProof }) {
  return (
    <GlassCard>
      <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
        Customer story · {proof.customer}
      </p>
      <p className="font-display text-5xl font-bold text-primary">
        {proof.stat}
      </p>
      <p className="text-sm text-secondary">{proof.statLabel}</p>
      <blockquote className="border-l-2 border-pendo-pink pl-4 text-base italic text-secondary">
        “{proof.quote}”
      </blockquote>
      <p className="text-sm text-muted">{proof.attribution}</p>
      <Link
        href="#case-study"
        className="text-sm font-medium text-pendo-pink hover:underline"
      >
        Read the case study →
      </Link>
    </GlassCard>
  );
}

/* ------------------------------------------------------------------ */
/* Resources                                                          */
/* ------------------------------------------------------------------ */

interface Resource {
  type: string;
  title: string;
  description: string;
  href: string;
}

const RESOURCES: Resource[] = [
  {
    type: 'Podcast',
    title: 'Conversations with product leaders',
    description:
      'Hosted by Trisha Price. Candid conversations with product and tech leaders about the pivotal decisions that drive great products.',
    href: '#podcast',
  },
  {
    type: 'Certification',
    title: 'Free certification courses',
    description:
      'Become a Pendo-certified product leader. Self-paced modules across analytics, guides, and feedback.',
    href: '#certification',
  },
  {
    type: 'Playbook',
    title: 'The playbook for AI-enhanced PM',
    description:
      'A 40-page guide to the questions, frameworks, and instrumentation product teams need to ship with AI confidently.',
    href: '#playbook',
  },
];

function ResourcesStrip() {
  return (
    <Container as="section" className="border-t border-border-subtle py-20 sm:py-28">
      <SectionHeader
        eyebrow="Resources"
        heading="For product teams"
        subhead="Free guides, courses, and conversations to sharpen your craft."
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {RESOURCES.map((r) => (
          <ResourceCard key={r.title} resource={r} />
        ))}
      </div>
    </Container>
  );
}

function ResourceCard({ resource }: { resource: Resource }): ReactNode {
  return (
    <GlassCard>
      <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
        {resource.type}
      </p>
      <h3 className="font-display text-lg font-bold text-primary">
        {resource.title}
      </h3>
      <p className="text-sm text-secondary">{resource.description}</p>
      <Link
        href={resource.href}
        className="mt-auto text-sm font-medium text-pendo-pink hover:underline"
      >
        Read →
      </Link>
    </GlassCard>
  );
}
