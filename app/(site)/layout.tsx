/**
 * `(site)` route-group layout — wraps demo pages with the global nav + footer.
 *
 * The parentheses around `site` make this a route group: it does NOT add a
 * URL segment, but it lets us share layout (and chrome) across the demo
 * pages without affecting the seed kit's root `/` landing.
 *
 * Pages under this group:
 *   - /solutions/pendo-for-product  → Pendo for Product demo page
 *   - /customers/sage               → Sage customer story demo page
 *
 * The seed-kit landing at `app/page.tsx` lives OUTSIDE this group and stays
 * chrome-free on purpose (it's the bootstrap/onboarding surface, not a demo
 * page).
 */

import type { ReactNode } from 'react';
import { SiteFooter, SiteNav } from '@/components/site';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-bg text-primary">
      <SiteNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
