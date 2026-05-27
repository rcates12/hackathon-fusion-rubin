/**
 * SiteNav — global top navigation for the demo site.
 *
 * Demo-site chrome — NOT a subject of Rubin scans. The nav is intentionally
 * polished and on-brand; planted design weaknesses live only in the page-body
 * components rendered inside the `(site)` route group.
 *
 * Structure mirrors the canonical pendo.io top nav:
 *   - Pendo wordmark + Pank dot on the left
 *   - Four top-level nav items in the center (desktop ≥ md)
 *   - Primary "Request a demo" CTA on the right
 *
 * Sticky on scroll so it stays in frame during long-page Rubin captures.
 * Background uses `bg-bg/95` + a light backdrop blur so content reading
 * underneath gets a subtle frost rather than a hard cut-off.
 *
 * Links are placeholder hrefs (`#`) — the demo never depends on nav
 * navigation. The visual is what matters.
 */

import Link from 'next/link';
import { CTAButton } from '@/components/primitives';

const NAV_ITEMS: Array<{ label: string; href: string }> = [
  { label: 'Product', href: '#product' },
  { label: 'Solutions', href: '/solutions/pendo-for-product' },
  { label: 'Customers', href: '/customers/sage' },
  { label: 'Pricing', href: '#pricing' },
];

export function SiteNav() {
  return (
    <header
      className={
        'sticky top-0 z-50 w-full border-b border-border-subtle ' +
        'bg-bg/95 backdrop-blur-sm supports-[backdrop-filter]:bg-bg/80'
      }
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between gap-8 px-6 sm:px-8 lg:px-12">
        <Wordmark />
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-secondary transition hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="#sign-in"
            className="hidden text-sm font-medium text-secondary transition hover:text-primary sm:inline"
          >
            Sign in
          </Link>
          <CTAButton href="#demo">Request a demo</CTAButton>
        </div>
      </div>
    </header>
  );
}

function Wordmark() {
  return (
    <Link
      href="/solutions/pendo-for-product"
      className="flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-primary"
      aria-label="Pendo — home"
    >
      <span>pendo</span>
      <span aria-hidden className="text-pendo-pink">
        .
      </span>
    </Link>
  );
}
