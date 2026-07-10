"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { site } from "@/lib/data";

const nav = [
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
  { href: "/rentals", label: "Private Rentals" },
  { href: "/donate", label: "Donate" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/5 bg-wax-charcoal/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
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

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-wax-cream/70 transition-colors hover:text-wax-amber"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href={site.links.memberLogin} className="btn-ghost">
            Sign In
          </Link>
          <Link href="/events" className="btn-primary text-xs">
            Get Tickets
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-wax-cream transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-wax-cream transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-wax-cream transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-white/5 bg-wax-charcoal px-6 py-6 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-lg text-wax-cream/80"
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/events" className="btn-primary text-center">
              Get Tickets
            </Link>
            <Link href={site.links.memberLogin} className="btn-secondary text-center">
              Member Sign In
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
