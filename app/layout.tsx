/**
 * Root layout — wires Sora (display), Inter (body), and JetBrains Mono
 * via next/font/google so all three are preloaded with zero CLS.
 *
 * The font CSS variables (--font-sora, --font-inter, --font-jetbrains-mono)
 * are referenced from app/globals.css (the `body` rule + the `h1, h2, h3`
 * rule) and from tailwind.config.ts (font-display, font-sans, font-mono
 * Tailwind utilities). Changing the font selection here automatically
 * cascades through both layers.
 *
 * BRAND.md weights to preserve:
 *   - Sora: Bold (700) only. BRAND explicitly says "never SemiBold/600".
 *     We still load 400 + 500 + 700 here so display copy can choose, but
 *     hero headlines should default to 700.
 *   - Inter: 300, 400, 500, 700 — Light through Bold.
 *   - JetBrains Mono: 400, 700 — for code or technical content.
 */

import type { Metadata } from 'next';
import { Inter, JetBrains_Mono, Sora } from 'next/font/google';
import './globals.css';

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-sora',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pendo seed kit',
  description:
    'Pendo-flavored Next.js starter for Builder.io Fusion. Brand tokens, fonts, and 5 primitives ready to extend.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
