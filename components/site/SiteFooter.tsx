/**
 * SiteFooter — global site footer for the demo.
 *
 * Demo-site chrome — NOT a subject of Rubin scans. Polished, on-brand,
 * intentionally free of the kind of weaknesses planted in the page-body
 * components inside the `(site)` route group.
 *
 * Layout follows the canonical pendo.io footer: dark surface, four link
 * columns (Product / Solutions / Resources / Company), wordmark + tagline
 * stacked on the left, fine-print copyright line at the bottom.
 *
 * Links are placeholder hrefs (`#...`) for the demo. The point is the visual
 * footing, not the IA.
 */

import Link from 'next/link';

interface FooterColumn {
  heading: string;
  links: Array<{ label: string; href: string }>;
}

const COLUMNS: FooterColumn[] = [
  {
    heading: 'Product',
    links: [
      { label: 'Analytics', href: '#analytics' },
      { label: 'Guides', href: '#guides' },
      { label: 'Feedback', href: '#feedback' },
      { label: 'Session Replay', href: '#replay' },
      { label: 'Roadmap', href: '#roadmap' },
    ],
  },
  {
    heading: 'Solutions',
    links: [
      { label: 'For product teams', href: '/solutions/pendo-for-product' },
      { label: 'For customer success', href: '#cs' },
      { label: 'For marketing', href: '#marketing' },
      { label: 'For revenue ops', href: '#revops' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Customer stories', href: '/customers/sage' },
      { label: 'Guide library', href: '#library' },
      { label: 'Product analytics 101', href: '#pa101' },
      { label: 'Pendo Pulse podcast', href: '#podcast' },
      { label: 'Help center', href: '#help' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Security', href: '#security' },
      { label: 'Contact', href: '#contact' },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer
      data-theme="dark"
      className="bg-bg text-primary"
      aria-labelledby="site-footer-heading"
    >
      <h2 id="site-footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-6">
          <div className="col-span-2">
            <FooterWordmark />
            <p className="mt-4 max-w-xs text-sm text-secondary">
              The all-in-one platform for product analytics, in-app guidance,
              and customer feedback.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <FooterColumn key={col.heading} column={col} />
          ))}
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-border-default pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} Pendo.io, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            <Link href="#privacy" className="hover:text-primary">
              Privacy
            </Link>
            <Link href="#terms" className="hover:text-primary">
              Terms
            </Link>
            <Link href="#cookies" className="hover:text-primary">
              Cookie settings
            </Link>
            <Link href="#dpa" className="hover:text-primary">
              DPA
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="font-sans text-xs font-bold uppercase tracking-eyebrow text-primary">
        {column.heading}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {column.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-secondary transition hover:text-primary"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterWordmark() {
  return (
    <Link
      href="/solutions/pendo-for-product"
      className="inline-flex items-center gap-1 font-display text-2xl font-bold tracking-tight text-primary"
      aria-label="Pendo — home"
    >
      <span>pendo</span>
      <span aria-hidden className="text-pendo-pink">
        .
      </span>
    </Link>
  );
}
