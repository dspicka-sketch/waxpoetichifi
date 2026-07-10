import Link from "next/link";
import { site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-wax-purple-deep">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <h3 className="font-display text-2xl font-semibold text-wax-cream">
              Wax Poetic
            </h3>
            <p className="mt-2 text-sm text-wax-cream/60">
              {site.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-wax-cream/50">
              {site.description}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-wax-amber">
              Visit
            </h4>
            <p className="text-sm text-wax-cream/70">{site.location.full}</p>
            <p className="mt-2 text-sm text-wax-cream/50">
              <a href={`mailto:${site.email}`} className="hover:text-wax-amber">
                {site.email}
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-wax-amber">
              Explore
            </h4>
            <ul className="space-y-2 text-sm text-wax-cream/70">
              <li><Link href="/events" className="hover:text-wax-amber">Events & Tickets</Link></li>
              <li><Link href="/membership" className="hover:text-wax-amber">Membership</Link></li>
              <li><Link href="/rentals" className="hover:text-wax-amber">Private Rentals</Link></li>
              <li><Link href="/donate" className="hover:text-wax-amber">Donate</Link></li>
              <li><Link href={site.links.memberLogin} className="hover:text-wax-amber">Member Login</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-wax-cream/40 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Wax Poetic. All rights reserved.</p>
          <p>Designed with intention. Built for deep listening.</p>
        </div>
      </div>
    </footer>
  );
}
