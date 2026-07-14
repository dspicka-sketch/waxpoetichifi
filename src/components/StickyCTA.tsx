"use client";

import Link from "next/link";
import { headerCta } from "@/lib/data";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-wax-charcoal/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href={headerCta.href}
        className="btn-primary block w-full text-center text-xs focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-wax-amber/70"
      >
        {headerCta.label}
      </Link>
    </div>
  );
}
