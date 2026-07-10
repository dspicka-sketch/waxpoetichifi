import type { Metadata } from "next";
import Image from "next/image";
import { MembershipCard } from "@/components/MembershipCard";
import { ConversionBanner } from "@/components/ConversionBanner";
import { membershipTiers, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Join the Wax Poetic Sound Society. Listener, Selector, Patron, and Founder tiers with priority access and exclusive perks.",
};

export default function MembershipPage() {
  return (
    <>
      <section className="relative section-padding pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <Image
            src="/media/2026/04/waxpoetic-soundsociety-wordmark.png"
            alt="Sound Society"
            width={300}
            height={80}
            className="mx-auto mb-8"
          />
          <h1 className="font-display text-4xl font-semibold text-wax-cream md:text-5xl">
            Choose Your Place in the Room
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-wax-cream/60">
            Wax Poetic is membership-driven and intentionally small. Memberships
            support the room, unlock access to private events, and deepen your
            connection to the culture we&apos;re building in Sebastopol.
          </p>
        </div>
      </section>

      {/* Tiers */}
      <section className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {membershipTiers.map((tier) => (
            <MembershipCard key={tier.id} tier={tier} />
          ))}
        </div>
      </section>

      {/* Value props */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-2xl text-wax-cream">
            Why become a member?
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Priority Access",
                desc: "Be first in line for limited-capacity events that sell out fast.",
              },
              {
                title: "Member Pricing",
                desc: "Discounted tickets, wine, and merch — your membership pays for itself.",
              },
              {
                title: "Shape the Culture",
                desc: "Selector and Patron tiers influence programming and curated sessions.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-wax-purple-deep text-wax-amber">
                  ✦
                </div>
                <h3 className="mt-4 font-display text-lg text-wax-cream">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-wax-cream/50">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social proof + urgency */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Founder tier is limited and closing soon"
            subtitle="Lifetime membership for two, first priority access to all events, private dinners, and a personalized gold record display."
            cta="Become a Founder"
            href={site.links.membershipRegister}
          />
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-2xl text-wax-cream">
            Common questions
          </h2>
          <dl className="mt-8 space-y-6">
            {[
              {
                q: "Can I cancel anytime?",
                a: "Monthly memberships can be cancelled at any time. Founder memberships are one-time and non-refundable.",
              },
              {
                q: "Do members still pay for tickets?",
                a: "Members get early access and discounted pricing on most events. Some member-only sessions are included with your tier.",
              },
              {
                q: "How many members are there?",
                a: "We keep membership intentionally small to preserve the intimate experience. Spots open periodically.",
              },
            ].map((item) => (
              <div key={item.q}>
                <dt className="font-semibold text-wax-cream">{item.q}</dt>
                <dd className="mt-2 text-sm text-wax-cream/50">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
