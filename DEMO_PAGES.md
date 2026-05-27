# Demo pages — test-run playbook

Two demo pages built on top of the seed kit, designed to be the targets of
Rubin scans during the FY27 hackathon demo. Each page has **specific,
planted design weaknesses** that Rubin should reliably surface.

This doc is the test-run reference: what to expect, what to type into the
Rubin complaint box, and what to do if a scan misses.

## Routes

| Route | Demo target for | Local URL |
|-------|-----------------|-----------|
| `/solutions/pendo-for-product` | **Direction Mode** | <http://localhost:3000/solutions/pendo-for-product> |
| `/customers/sage` | **Audit Mode** | <http://localhost:3000/customers/sage> |

Fusion preview URLs follow the same path on the Builder Fusion-hosted
preview domain for `rcates12/hackathon-fusion-rubin`. Confirm the live
preview URL in your Fusion dashboard before the demo.

## Site chrome ≠ scan target

The shared `<SiteNav>` and `<SiteFooter>` (under `components/site/`) are
**intentionally polished and on-brand**. They frame both demo pages but
are **not** the subject of Rubin scans. All planted weaknesses live in
the page-body components only.

If Rubin's output mentions the nav or footer, that's a tell that the
substrate is leaking attention away from the body — note it as feedback
but the demo narrative stays focused on the body sections.

## Page 1 — `/solutions/pendo-for-product` (Direction Mode)

Adapted from <https://www.pendo.io/solutions/pendo-for-product/>.

### Page anatomy

1. Hero (centered, polished — single primary + single ghost CTA)
2. Three pillar value cards
3. Deep-dive: **Increase Revenue** (LastPass proof)
4. Deep-dive: **Cut Costs** (Citrix proof)
5. Deep-dive: **Reduce Risk** (Global Payments proof)
6. Resources strip (Podcast / Certification / Playbook)
7. Closing `<CTABanner>` with NBC quote and single primary CTA

### Planted weaknesses

#### 1. CTA proliferation

**What's planted.** The page body contains ~12 secondary "Learn more →" /
"Read →" micro-links across the pillar cards, the three deep-dive
sections, and the resources strip. The single primary CTA
("Request a demo") only appears in the hero and the closing banner.
The visual hierarchy buries the primary path under a chorus of
equally-weighted secondary actions.

**Why it's plantable.** IMPECCABLE.md and CORPUS exemplars both treat
one-primary-path-per-page as a near-axiom. Real Pendo pages cluster
"Learn more" links to feature *sections*, not *every card and every
paragraph*.

**Expected Rubin direction (paraphrased).**

> _"Consolidate the secondary action language. The page currently has 10+
>  'Learn more' affordances at equal visual weight — collapse the per-card
>  links into a single section-level CTA per deep-dive and let 'Request a
>  demo' dominate the page's primary path."_

#### 2. Repetitive section rhythm

**What's planted.** The three deep-dive sections use the exact same
structural layout: eyebrow top-left → two-paragraph body → inline-link
row → customer-proof `<GlassCard>` on the right. No interlude, no flipped
layout, no rhythm break.

**Why it's plantable.** CORPUS exemplars for solutions pages alternate
layout direction (text-left → text-right) every 2–3 sections, or break
the rhythm with a visual interlude (stat strip, full-bleed quote,
animated diagram). Three identical sections in a row reads as a copy
block, not a designed page.

**Expected Rubin direction (paraphrased).**

> _"Break the deep-dive rhythm. Sections 3, 4, and 5 use identical
>  structure (eyebrow + body + right-aligned proof card). Alternate the
>  layout direction, or interrupt with a stat-strip / pull-quote
>  interlude between sections to give the page a designed cadence rather
>  than a list of identically-shaped chunks."_

### Test-run prompts to type into Rubin

Try these in the scan complaint box. They're calibrated to nudge the
generator toward the planted weaknesses without telegraphing them.

```
This solutions page feels busy and the user's eye gets lost. Help me
tighten the action hierarchy and make the page feel designed instead of
templated.
```

Or a tighter version:

```
The page feels noisy and repetitive — too many secondary CTAs and the
three middle sections all look the same. What would you change?
```

### What "reliably surfaces" looks like

Run Direction Mode 3 times back-to-back. You want **at least 2 of 3 runs**
to include a direction that names one of:

- the secondary-CTA proliferation / one-primary-path issue
- the repeating section layout / rhythm break

If neither lands in 2 of 3 runs, the planted weakness is too soft and
needs amplification. Likely tweaks:

- Add 2–3 more "Learn more" links inside the pillar card subheadings to
  push the count from ~12 → ~15.
- Strip the `border-t` between deep-dive sections so they really do read
  as a wall of identical-shaped content.

## Page 2 — `/customers/sage` (Audit Mode)

Adapted from
<https://www.pendo.io/customers/how-sage-scaled-data-driven-in-product-messaging-with-pendo-guide-experiments/>.

### Page anatomy

1. Hero (full-bleed, centered — customer story eyebrow + headline)
2. **Metrics row** (3 tiles directly below hero)
3. "Sage at a glance" company panel
4. Challenge / Solution / Results trio
5. Narrative section + **first pull quote**
6. "Why experiments win" with bulleted list
7. Featured experiment (variant A vs B)
8. "A clear winner" + **second pull quote**
9. Key outcomes grid
10. Closing `<CTABanner>` with "Keep reading" framing

### Planted weaknesses

#### 1. Flat metric tiles

**What's planted.** The three metric tiles directly below the hero use
**identical treatment**: same size (`text-4xl`), same weight (bold),
same color (`text-primary`), same surface (`bg-bg-card` with
`border-border-subtle`). The headline customer outcome (`18%` lift in
CTA clicks) is visually identical to the ancillary stats
(`40–50` concurrent guides, `2–3 wks` cadence).

**Why it's plantable.** A customer-story hero metric is the SINGLE most
important visual moment on the page. CORPUS exemplars treat headline
stats with `<GradientText display>`, a 2–3× larger type ramp, or a
dedicated surface. Making the hero metric equivalent to its neighbors
flattens the page's emotional arc.

**Expected Rubin audit finding (paraphrased).**

> _"Hero metric doesn't dominate. The 18% lift is the page's central
>  evidence and should command the most visual weight in the metrics
>  row — currently it's a peer of 40–50 and 2–3 wks. Treat the 18% with
>  `<GradientText display>` or scale its type ramp 2× so it reads as
>  the headline stat, not a sibling."_

#### 2. Underweighted pull quotes

**What's planted.** Both stakeholder quotes (John Gardiner, Principal
Content Designer at Sage) are rendered as plain italic body text inside
the prose flow: `<blockquote className="italic text-secondary">`. No
oversized type, no attribution photo, no surface break, no accent color,
no quotation glyph.

**Why it's plantable.** On a customer-story page the quote IS the
social proof — it should command a section moment. CORPUS exemplars
for customer stories treat pull quotes with: larger type (2× body),
attribution photo, large quotation glyph, accent-color border-left,
and a surface separation from the surrounding prose.

**Expected Rubin audit finding (paraphrased).**

> _"Pull quote treated as body italics. The Gardiner quote is the
>  highest-leverage social-proof moment on the page but renders the
>  same as the body copy around it. Promote it to a typographic
>  moment: larger size (2× body), Pendo Pank accent border-left, and
>  an attribution block with title + role on a separate line."_

### Test-run prompts to type into Rubin

```
This customer story is fine but the hero stat doesn't pop and the
customer quotes feel buried in the body. What specifically should I
fix?
```

Or:

```
Audit this customer story for visual hierarchy issues — I want to know
the 2-3 most impactful tweaks.
```

### What "reliably surfaces" looks like

Run Audit Mode 3 times back-to-back. You want **at least 2 of 3 runs**
to surface audit findings that name BOTH:

- the flat-metric-tile / hero-stat-doesn't-pop issue
- the underweighted-pull-quote issue

If only one lands, the missed one needs amplification:

- For the metric tiles: stack them in a single row at smaller size, or
  bump the body text up so the metric values look even more pedestrian.
- For the pull quotes: remove the `mt-6` spacing so they sit even more
  flush with the body, making the "lost in prose" feel obvious.

## Demo flow that uses both pages

The two pages naturally support a two-act demo:

1. **Act 1: Direction Mode on the solutions page.**
   - Open `/solutions/pendo-for-product`.
   - Drop the URL + a "feels noisy and repetitive" complaint into Rubin.
   - Three holistic directions come back. Click "Try in Fusion" on the
     one that addresses CTA proliferation or rhythm.
   - Reload after Fusion lands the change. Visible improvement.

2. **Act 2: Audit Mode on the customer story.**
   - Open `/customers/sage`.
   - Drop the URL + a "hero stat doesn't pop, quotes feel buried"
     complaint into Rubin.
   - Per-issue audit findings come back, each with a "Send fix" button.
   - Click "Send fix" on the hero-metric finding. Fusion bumps the 18%
     to a `<GradientText display>`. Reload — the metric now dominates.

The Direction vs. Audit contrast IS the demo narrative: holistic moves
when something feels off, granular fixes when you know what bugs you.

## Iteration log

Keep this section updated as you run test scans pre-demo. Note any
output that's unexpected, any planted weakness that misses, and any
copy/spacing tweak you apply to amplify.

| Date | Page | Mode | Outcome | Notes |
|------|------|------|---------|-------|
| _yyyy-mm-dd_ | solutions/pendo-for-product | Direction | hit / miss | _what Rubin said_ |
| _yyyy-mm-dd_ | customers/sage | Audit | hit / miss | _what Rubin said_ |
