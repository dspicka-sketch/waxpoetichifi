"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { headerCta, primaryNav } from "@/lib/data";

const navLinkClass =
  "rounded-sm text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wax-amber/70";

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-wax-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wax-amber/70"
        >
          <Image
            src="/media/2026/04/record-80px.png"
            alt="Wax Poetic"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div className="hidden sm:block">
            <div className="font-display text-lg font-semibold tracking-wide text-wax-cream">
              Wax Poetic
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-wax-amber/80">
              Sound Society
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActivePath(pathname, item.href) ? "page" : undefined}
              className={`${navLinkClass} ${
                isActivePath(pathname, item.href)
                  ? "text-wax-cream"
                  : "text-wax-cream/70 hover:text-wax-amber"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden shrink-0 md:block">
          <Link href={headerCta.href} className="btn-primary text-xs">
            {headerCta.label}
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wax-amber/70"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-0.5 w-6 bg-wax-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-wax-cream transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-wax-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-white/5 bg-wax-charcoal px-6 py-6 md:hidden"
        >
          <nav aria-label="Main">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={
                  isActivePath(pathname, item.href) ? "page" : undefined
                }
                className={`block rounded-sm py-3 text-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wax-amber/70 ${
                  isActivePath(pathname, item.href)
                    ? "text-wax-cream"
                    : "text-wax-cream/80 hover:text-wax-amber"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4">
            <Link
              href={headerCta.href}
              onClick={() => setOpen(false)}
              className="btn-primary block text-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wax-amber/70"
            >
              {headerCta.label}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
