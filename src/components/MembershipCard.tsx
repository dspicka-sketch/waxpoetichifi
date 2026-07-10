import Link from "next/link";
import type { MembershipTier } from "@/lib/data";
import { site } from "@/lib/data";

export function MembershipCard({ tier }: { tier: MembershipTier }) {
  return (
    <div
      className={`card-hover relative flex flex-col rounded-2xl border p-8 ${
        tier.popular
          ? "border-wax-amber/50 bg-wax-purple-deep glow-amber"
          : "border-white/8 bg-wax-warm"
      }`}
    >
      {tier.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-wax-amber px-4 py-1 text-xs font-bold text-wax-charcoal">
          Most Popular
        </span>
      )}
      {tier.limited && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full border border-wax-amber/50 bg-wax-charcoal px-4 py-1 text-xs font-semibold text-wax-amber">
          Limited · Closing Soon
        </span>
      )}

      <h3 className="font-display text-2xl font-semibold text-wax-cream">
        {tier.name}
      </h3>
      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-3xl font-bold text-wax-amber">{tier.price}</span>
        <span className="text-sm text-wax-cream/50">{tier.period}</span>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-wax-cream/60">
        {tier.description}
      </p>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-wax-cream/70">
            <span className="mt-0.5 text-wax-amber">✦</span>
            {b}
          </li>
        ))}
      </ul>

      <Link
        href={site.links.membershipRegister}
        className={`mt-8 text-center ${tier.popular ? "btn-primary" : "btn-secondary"}`}
      >
        {tier.cta}
      </Link>
    </div>
  );
}
