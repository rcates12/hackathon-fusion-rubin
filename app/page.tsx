import {
  CTAButton,
  Eyebrow,
  GradientText,
} from '@/components/primitives';

export default function HomePage() {
  return (
    <main data-theme="dark" className="bg-black text-white">
      {/* Hero Section — Full-bleed editorial opener */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-pendo-gradient-dark px-6 py-24">
        <div className="absolute inset-0 opacity-30" aria-hidden />
        <div className="relative max-w-4xl text-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-display font-bold leading-tight mb-6">
            Dark Editorial
          </h1>
          <p className="text-lg sm:text-xl text-neutral-2 font-light leading-relaxed mb-12">
            A microsite built for telling stories at scale.
          </p>
          <div className="flex justify-center">
            <svg
              className="w-6 h-6 text-accent animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Chapter 1.0 */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-4">
              — CHAPTER ONE
            </p>
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              The Foundation
            </h2>
            <p className="text-lg text-neutral-2">
              Every great story begins with a solid foundation, and every great design system does too.
            </p>
          </div>

          {/* 1.1 */}
          <div className="mb-16 pb-16 border-b border-neutral-3">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              1.1
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Semantic theming with CSS variables
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                The color system adapts to context. A single set of semantic tokens—bg, text-primary,
                accent—rebinds based on theme scope, eliminating the need for class swapping or
                manual overrides. Change data-theme="dark" once and watch every component inside
                that scope re-theme automatically.
              </p>
              <p>
                This approach keeps the design system orthogonal: colors stay decoupled from
                components, and components stay decoupled from themes. A GlassCard in light mode
                and dark mode isn't two components—it's one component with two semantic bindings.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-neutral-2">
              <li>✓ No runtime theme switching complexity</li>
              <li>✓ Scope-based theming (nest dark inside light or vice versa)</li>
              <li>✓ Semantic tokens stay predictable across contexts</li>
            </ul>
          </div>

          {/* 1.2 */}
          <div className="mb-16 pb-16 border-b border-neutral-3">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              1.2
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Tailwind + CSS variables in concert
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                Tailwind's utility layer provides the convenience of class-based styling, while
                CSS variables handle the theme rebinding underneath. This hybrid approach gives
                you both the predictability of tokens and the velocity of utilities.
              </p>
              <p>
                The Tailwind config extends with semantic color names (bg, primary, accent) that
                reference CSS variables. When a theme scope shifts, every Tailwind utility using
                those colors auto-updates—no recompilation needed.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-neutral-2">
              <li>✓ Tailwind utilities feel natural (bg-bg, text-primary)</li>
              <li>✓ CSS variables handle the re-binding</li>
              <li>✓ Single source of truth in globals.css</li>
            </ul>
          </div>

          {/* 1.3 */}
          <div className="mb-16">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              1.3
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Pendo Pank as the persistent accent
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                The accent color (#FF4876, Pendo Pank) stays constant across both light and dark
                themes. It's the brand signal—when users see that pink in any context, they know
                they're inside a Pendo experience.
              </p>
              <p>
                Use it sparingly: eyebrows, highlights, call-to-action buttons, and interactive
                affordances. Restraint is the anti-slop floor. Glassmorphism, color washes, and
                accent overuse water down impact.
              </p>
            </div>
            <ul className="mt-6 space-y-2 text-neutral-2">
              <li>✓ Consistent brand presence across themes</li>
              <li>✓ High contrast in dark mode (#FF4876 on black)</li>
              <li>✓ Reserve for key interaction moments</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Chapter 2.0 */}
      <section className="py-24 sm:py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-4">
              — CHAPTER TWO
            </p>
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              Composable Primitives
            </h2>
            <p className="text-lg text-neutral-2">
              Small, intentional components that compose into complex layouts without inducing bloat or abstraction overhead.
            </p>
          </div>

          {/* 2.1 */}
          <div className="mb-16 pb-16 border-b border-neutral-3">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              2.1
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Container: scope and rhythm
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                The Container primitive is a scoped section wrapper. Pass theme="dark" to flip
                all semantic tokens inside, or className="py-24" to control vertical rhythm.
                It accepts an as prop—render it as section, div, or article.
              </p>
              <p>
                Container is not a layout grid. It's a semantics boundary: a way to say "everything
                inside this scope shares a theme context." That boundary makes theming predictable
                and nesting safe.
              </p>
            </div>
          </div>

          {/* 2.2 */}
          <div className="mb-16 pb-16 border-b border-neutral-3">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              2.2
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              GlassCard: surfaces with intent
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                A card primitive with two variants: solid (contained, no border) and glass
                (semitransparent blur). Solid is the default and the preferred execution—it's
                restrained and reads clearly in any light.
              </p>
              <p>
                Use glass sparingly. Glassmorphism is a visual flourish, not a default surface
                treatment. Reserve it for moments that demand visual emphasis or depth
                layering.
              </p>
            </div>
          </div>

          {/* 2.3 */}
          <div>
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              2.3
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              CTAButton: the interaction primitive
            </h3>
            <div className="space-y-4 text-neutral-2">
              <p>
                Two variants: primary (solid, accent background) and ghost (outline, minimal).
                In dark mode, primary is crisp: white text on #FF4876. Ghost provides a softer
                call-to-action for secondary actions or crowded layouts.
              </p>
              <p>
                The button semantic matters. Use CTAButton for explicit user actions—form
                submission, navigation, API calls. Reserve the semantic for moments where the
                user's choice moves the experience forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3.0 Close */}
      <section className="py-24 sm:py-32 px-6 border-t border-neutral-3">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-4">
              — CHAPTER THREE
            </p>
            <h2 className="text-5xl sm:text-6xl font-display font-bold mb-6">
              Building with Intent
            </h2>
            <p className="text-lg text-neutral-2">
              Every choice compounds. Choose primitives over one-off solutions. Choose semantics
              over magic numbers. Choose restraint over embellishment.
            </p>
          </div>

          {/* 3.1 */}
          <div>
            <p className="text-sm font-mono tracking-eyebrow text-accent uppercase mb-3">
              3.1
            </p>
            <h3 className="text-3xl sm:text-4xl font-display font-bold mb-6">
              Ready to build your story
            </h3>
            <p className="text-neutral-2 mb-8">
              You now have everything you need to craft beautiful, coherent experiences. Edit
              app/page.tsx, build with the primitives in components/primitives/, and ship.
              The system scales with you.
            </p>
            <CTAButton href="#" variant="primary" theme="dark">
              Start building
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  );
}
