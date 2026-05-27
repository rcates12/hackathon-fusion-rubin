/**
 * Sage customer story — demo page.
 *
 * Demo target for Rubin scans. Structure mirrors the canonical pendo.io
 * customer-story page (hero → headline metric → company-at-a-glance →
 * challenge / solution / results → long-form narrative + pull quote →
 * featured experiment → key outcomes → closing) so the Audit Generator's
 * CORPUS grounding lands cleanly.
 *
 * Planted weaknesses (kept in the page-body only — nav + footer are clean):
 *
 *   1. BURIED HEADLINE STAT (visual hierarchy — AMPLIFIED for demo)
 *      The three metric tiles directly below the hero invert the
 *      expected hierarchy: the 18% headline outcome is the SMALLEST
 *      (`text-2xl`), LIGHTEST (`font-medium`), GREYEST (`text-muted`),
 *      and LAST tile — while two ancillary stats (40–50 concurrent
 *      guides, 2–3 wk cadence) get the largest, boldest, primary-color
 *      treatment (`text-5xl font-bold text-primary`). A customer-story
 *      hero metric is the SINGLE most important visual moment on the
 *      page; subordinating it to ancillary stats is the kind of mistake
 *      a marketer ships when they copy a "three stats" template without
 *      thinking about which IS the headline. CORPUS exemplars treat
 *      headline stats with `<GradientText display>`, a larger type
 *      ramp, or a dedicated surface — Rubin should call this out
 *      pointedly during the Audit Mode scan.
 *
 *   2. UNDERWEIGHTED PULL QUOTES (visual hierarchy)
 *      The two stakeholder quotes (John Gardiner) are rendered as
 *      plain italic body text inside the prose flow. No oversized
 *      type, no attribution photo, no surface break, no accent color,
 *      no quotation glyph. On a customer-story page the quote IS the
 *      social proof — it should command a section moment. As shipped,
 *      the quotes are easy to skim past.
 *
 * Rubin should reliably surface both during Audit Mode scans. See
 * DEMO_PAGES.md for the expected output shape and the test-run prompt to
 * type into the scan complaint box.
 *
 * NOTE: copy is adapted from pendo.io/customers/how-sage-scaled-data-driven-
 * in-product-messaging-with-pendo-guide-experiments/ — paraphrased close to
 * the source for demo authenticity, with attribution kept verbatim where
 * present in the public page.
 */

import {
  CTABanner,
  CTAButton,
  Container,
  Eyebrow,
  GlassCard,
  GradientText,
  ProductHero,
} from '@/components/primitives';
import Link from 'next/link';

export const metadata = {
  title:
    'How Sage scaled data-driven in-product messaging with Pendo Guide experiments',
  description:
    'A short video preview drove an 18% lift in CTA clicks — one of many wins from Sage’s new in-product testing practice.',
};

export default function SageCustomerStoryPage() {
  return (
    <>
      <ProductHero
        layout="split"
        theme="light"
        eyebrow={<Eyebrow>Customer story</Eyebrow>}
        headline={
          <>
            How Sage scaled{' '}
            <span style={{ color: '#FF4876' }}>data-driven in-product messaging</span> with
            Pendo Guide experiments
          </>
        }
        subhead="A short video preview drove an 18% lift in CTA clicks — one of many wins from Sage’s new in-product testing practice."
        actions={
          <>
            <CTAButton href="#story" variant="primary" theme="light" icon="arrow">
              Read the case study
            </CTAButton>
            <CTAButton href="#guides" variant="ghost" theme="light">
              Explore Pendo Guides
            </CTAButton>
          </>
        }
        media={
          <div className="rounded-2xl border border-border-subtle bg-white p-6 sm:p-8">
            {/* Experiment dashboard placeholder */}
            <div className="space-y-6">
              {/* Header */}
              <div className="border-b border-border-subtle pb-4">
                <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
                  A/B Test Results
                </p>
                <h3 className="mt-2 font-display text-lg font-bold text-primary">
                  Event-promotion guide experiment
                </h3>
              </div>

              {/* Variant comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-bg p-4">
                  <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
                    Control
                  </p>
                  <div className="mt-3 h-16 rounded bg-border-subtle" />
                  <p className="mt-3 text-sm text-secondary">Copy only</p>
                  <p className="mt-2 font-display text-lg font-bold text-primary">
                    2,400 clicks
                  </p>
                </div>
                <div className="rounded-lg bg-bg p-4">
                  <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
                    Winner
                  </p>
                  <div className="mt-3 h-16 rounded bg-border-subtle" />
                  <p className="mt-3 text-sm text-secondary">Copy + video</p>
                  <p className="mt-2 font-display text-lg font-bold text-pendo-pink">
                    2,832 clicks
                  </p>
                </div>
              </div>

              {/* Key metric */}
              <div className="border-t border-border-subtle pt-4">
                <div className="text-center">
                  <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
                    Lift
                  </p>
                  <p className="mt-2 font-display text-4xl font-bold text-pendo-pink">
                    +18%
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      />

      <MetricsRow />

      <CompanyAtGlance />

      <ChallengeSolutionResults />

      <NarrativeSection />

      <ExperimentsWin />

      <FeaturedExperiment />

      <ClearWinner />

      <KeyOutcomes />

      <CTABanner
        showCard
        theme="light"
        eyebrow={<Eyebrow>Keep reading</Eyebrow>}
        heading={
          <>
            See how teams like yours use <GradientText>Pendo Guides</GradientText>.
          </>
        }
        subhead="Browse customer stories or talk to our team about running your first experiment."
        actions={
          <>
            <CTAButton href="#stories">More customer stories</CTAButton>
          </>
        }
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Metrics row (PLANTED WEAKNESS #1 — buried headline stat)           */
/*                                                                    */
/* AMPLIFIED for demo drama: the 18% headline outcome is intentionally */
/* the SMALLEST, LIGHTEST, and LAST tile — visually subordinate to two */
/* ancillary stats (40–50 concurrent guides, 2–3 wks cadence). When   */
/* Audit Mode catches this and Fusion applies the fix (promote 18% to */
/* GradientText display, move to first position, scale type ramp), the */
/* before/after delta is visible from the back row of a demo audience. */
/* ------------------------------------------------------------------ */

interface Metric {
  value: string;
  label: string;
  hero?: boolean;
}

const METRICS: Metric[] = [
  { value: '40–50', label: 'Concurrent in-product guides running at any time', hero: true },
  { value: '2–3 wks', label: 'Typical experiment cadence per quarterly release', hero: true },
  { value: '18%', label: 'Increase in CTA clicks for an event-promotion guide', hero: true },
];

function MetricsRow() {
  return (
    <Container as="section" className="border-t border-border-subtle py-16 sm:py-20">
      <div id="story" className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {METRICS.map((m) => (
          <div
            key={m.label}
            className="flex flex-col gap-2 rounded-2xl border border-border-subtle bg-bg-card p-8"
          >
            <p
              className={
                m.hero
                  ? 'font-display text-5xl font-bold text-primary'
                  : 'font-display text-2xl font-medium text-muted'
              }
            >
              {m.value}
            </p>
            <p className="text-sm text-secondary">{m.label}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Company at a glance                                                */
/* ------------------------------------------------------------------ */

function CompanyAtGlance() {
  return (
    <Container as="section" className="py-12 sm:py-16">
      <div className="rounded-2xl bg-bg-card p-8 sm:p-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_3fr] md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
              Sage at a glance
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">
              The finance software trusted by millions
            </h2>
          </div>
          <p className="text-base text-secondary">
            Sage provides businesses with simple, easy-to-use software and
            services. Customers trust their Payroll, HR, and Finance software to
            make business flow with ease.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 border-t border-border-subtle pt-8 sm:grid-cols-3">
          <GlanceTile label="Industry" value="Software" />
          <GlanceTile label="Company size" value="5,000+" />
          <GlanceTile label="Pendo products" value="In-app Guides · Analytics" />
        </div>
      </div>
    </Container>
  );
}

function GlanceTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
        {label}
      </p>
      <p className="font-display text-lg font-bold text-primary">{value}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Challenge / Solution / Results                                     */
/* ------------------------------------------------------------------ */

function ChallengeSolutionResults() {
  return (
    <Container as="section" className="py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Trio
          eyebrow="The challenge"
          heading="Slow, manual experimentation"
          body="Sage relied on in-app guides to educate users, but experimentation was slow and manual — making it hard to know what worked. With 40–50 live guides at a time, the team needed faster insights and clearer data to guide decisions."
        />
        <Trio
          eyebrow="Pendo’ing it"
          heading="Side-by-side A/B testing"
          body="By adopting Pendo’s Guides experiments, Sage shifted from guesswork to side-by-side A/B testing — enabling faster learning and evidence-backed decisions. The team built a simple, scalable testing framework tied to real user behaviors."
        />
        <Trio
          eyebrow="The results"
          heading="An 18% lift, and a new playbook"
          body="A short video preview drove an 18% lift in CTA clicks — one of many wins from Sage’s new testing practice. Experiments now fuel smarter content, reusable assets, and more confident conversations with leadership."
        />
      </div>
    </Container>
  );
}

function Trio({
  eyebrow,
  heading,
  body,
}: {
  eyebrow: string;
  heading: string;
  body: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h3 className="font-display text-xl font-bold text-primary">{heading}</h3>
      <p className="text-base text-secondary">{body}</p>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Narrative section + pull quote (PLANTED WEAKNESS #2)               */
/* ------------------------------------------------------------------ */

function NarrativeSection() {
  return (
    <Container as="section" width="narrow" className="py-16 sm:py-20">
      <Eyebrow>The story</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        The shift from “ship and hope”
      </h2>
      <div className="mt-6 flex flex-col gap-5 text-base text-secondary sm:text-lg">
        <p>
          For years, Sage has relied on in-product guides to engage users —
          promoting education events, spotlighting features, and driving key
          actions. But experimentation was manual and linear. A team would run
          one variant for a while, read the results, then try another. That
          slowed learning and made it hard to isolate what truly worked.
        </p>

        {/* PLANTED WEAKNESS #2 — pull quote rendered as plain italic body text. */}
        <blockquote className="italic text-secondary">
          “We were always trying different guides, but it was a very manual
          process. We’d run one version, wait, then try a new one and hope it
          moved the needle.” — John Gardiner, Principal Content Designer, Sage
        </blockquote>

        <p>
          Scale added pressure. With 40–50 guides running (carefully segmented to
          avoid overload), the organization wanted clearer answers: which
          message, visual, or format actually resonates with customers the most?
          Leadership — true to a finance software company’s culture — expected
          numbers to justify decisions.
        </p>
        <p>
          At the same time, the team wanted more sophistication in what they
          measured. Much of the desired impact (clicking a “Register now” button
          inside a guide, for example) happens within the guide itself, not just
          via downstream product usage — making attribution and success-metric
          setup trickier with traditional approaches.
        </p>
      </div>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Why experiments win                                                */
/* ------------------------------------------------------------------ */

function ExperimentsWin() {
  return (
    <Container as="section" width="narrow" className="py-16 sm:py-20">
      <Eyebrow>Why experiments win</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        Side-by-side, not sequential
      </h2>
      <p className="mt-6 text-base text-secondary sm:text-lg">
        When Pendo launched Guides experiments, Gardiner raised his hand
        immediately. Running simultaneous A/B tests let the team compare
        variants head-to-head, shorten learning cycles, and build an evidence
        base for what to scale.
      </p>
      <ul className="mt-8 flex flex-col gap-4 text-base text-secondary sm:text-lg">
        <Bullet
          term="Variant structure"
          desc="Keep tests simple. Change one variable at a time (e.g., add a visual vs. no visual) to isolate impact."
        />
        <Bullet
          term="Segmentation"
          desc="Target the right users so experiments reflect real customer context without overwhelming anyone."
        />
        <Bullet
          term="Success metrics"
          desc="Define clear, behavior-based goals (e.g., “Register now” clicks)."
        />
        <Bullet
          term="Operational cadence"
          desc="Many experiments align with quarterly releases and run for 2–3 weeks; some persist longer for ongoing engagement."
        />
      </ul>
    </Container>
  );
}

function Bullet({ term, desc }: { term: string; desc: string }) {
  return (
    <li className="flex gap-4">
      <span
        aria-hidden
        className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-pendo-pink"
      />
      <span>
        <strong className="text-primary">{term}.</strong> {desc}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Featured experiment                                                */
/* ------------------------------------------------------------------ */

function FeaturedExperiment() {
  return (
    <Container as="section" className="py-16 sm:py-20">
      <div className="rounded-2xl bg-bg-card p-8 sm:p-10 lg:p-12">
        <Eyebrow>Featured experiment</Eyebrow>
        <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-primary sm:text-3xl">
          The 10-second video preview
        </h2>
        <p className="mt-4 max-w-3xl text-base text-secondary sm:text-lg">
          To promote a training event for the Financial Report Writer feature,
          the team tested two variants — copy-only vs. copy + a 10-second
          screen-capture video preview with the presenter speaking
          picture-in-picture.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <VariantCard
            label="Variant A · Control"
            description="Copy-only guide with “Register now” CTA. No motion, no preview imagery."
          />
          <VariantCard
            label="Variant B · Winner"
            description="Identical copy + a 10-second video clip of a screen capture with the presenter speaking picture-in-picture."
            winner
          />
        </div>
      </div>
    </Container>
  );
}

function VariantCard({
  label,
  description,
  winner,
}: {
  label: string;
  description: string;
  winner?: boolean;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-border-subtle bg-bg p-6">
      <p className="font-mono text-xs uppercase tracking-eyebrow text-muted">
        {label}
      </p>
      <p className="text-base text-secondary">{description}</p>
      {winner ? (
        <p className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-pendo-pink">
          <span aria-hidden>↑</span> +18% lift in “Register now” clicks
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* A clear winner — second pull quote (still weakness #2)             */
/* ------------------------------------------------------------------ */

function ClearWinner() {
  return (
    <Container as="section" width="narrow" className="py-16 sm:py-20">
      <Eyebrow>A clear winner</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        A common language with leadership
      </h2>
      <p className="mt-6 text-base text-secondary sm:text-lg">
        The video variant outperformed the copy-only control, delivering an 18%
        increase in “Register now” clicks. Beyond the one-off lift, the team now
        has reusable video assets they can recycle for recurring education
        events — compounding returns on the initial creative effort.
      </p>

      {/* PLANTED WEAKNESS #2 (second instance) — same flat-italic treatment. */}
      <blockquote className="mt-6 italic text-secondary">
        “Executives love numbers. Now I can say: here are the variants, here are
        the metrics, and here’s what won. That shapes where we take in-product
        messaging next.” — John Gardiner
      </blockquote>

      <p className="mt-6 text-base text-secondary sm:text-lg">
        Instead of subjective opinions about messaging, Gardiner now brings
        clear, comparative metrics to executive conversations.
      </p>
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Key outcomes                                                       */
/* ------------------------------------------------------------------ */

const OUTCOMES: string[] = [
  '+18% CTA clicks for an event-promotion guide with a 10-second video preview',
  'Faster learning cycles with simultaneous A/B tests vs. slow, sequential trials',
  'Repeatable assets (talking-head + screen capture) that continue to lift engagement',
  'Stronger stakeholder alignment through concise, evidence-based reporting',
  'Scalable practice across 40–50 concurrent guides, protected by smart segmentation',
];

function KeyOutcomes() {
  return (
    <Container as="section" className="py-16 sm:py-20">
      <Eyebrow>Key outcomes</Eyebrow>
      <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
        What changed at Sage
      </h2>
      <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {OUTCOMES.map((o) => (
          <li
            key={o}
            className="flex gap-3 rounded-xl border border-border-subtle bg-bg-card p-5 text-base text-secondary"
          >
            <span aria-hidden className="text-pendo-pink">
              ✓
            </span>
            <span>{o}</span>
          </li>
        ))}
      </ul>
      <p className="mt-10 max-w-3xl text-base text-muted sm:text-lg">
        “In the end, everything boils down to changing user behavior. Experiments
        help us be clear on what success looks like — and how to get there.”
        <Link
          href="#story"
          className="ml-2 font-medium text-pendo-pink hover:underline"
        >
          Read more →
        </Link>
      </p>
    </Container>
  );
}
