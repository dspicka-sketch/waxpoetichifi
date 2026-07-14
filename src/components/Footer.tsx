import Link from "next/link";
import { primaryNav, site } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-wax-purple-deep">
      <div className="section-padding mx-auto max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="font-display text-2xl font-semibold text-wax-cream">
              Wax Poetic
            </h3>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-wax-cream/60">
              A community united through music.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-wax-amber">
              Navigate
            </h4>
            <ul className="space-y-2 text-sm text-wax-cream/70">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-wax-amber">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-wax-amber">
              Community
            </h4>
            <ul className="space-y-2 text-sm text-wax-cream/70">
              <li>
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wax-amber"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-wax-amber">
              Location
            </h4>
            <p className="text-sm text-wax-cream/70">
              {site.location.city}, California
            </p>
            <p className="mt-2 text-sm text-wax-cream/50">
              <a
                href={`mailto:${site.email}`}
                className="hover:text-wax-amber"
              >
                {site.email}
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-wax-cream/40 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Wax Poetic. All rights reserved.
          </p>
          <p>Designed with intention. Built for deep listening.</p>
        </div>
      </div>
    </footer>
  );
}
