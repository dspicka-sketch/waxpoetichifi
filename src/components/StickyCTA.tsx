"use client";

import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-white/10 bg-wax-charcoal/95 p-3 backdrop-blur-md md:hidden">
      <div className="flex gap-2">
        <Link href="/events" className="btn-primary flex-1 text-center text-xs">
          Get Tickets
        </Link>
        <Link href="/membership" className="btn-secondary flex-1 text-center text-xs">
          Join
        </Link>
      </div>
    </div>
  );
}
