import type { Metadata } from "next";
import Image from "next/image";
import { InquiryForm } from "@/components/InquiryForm";
import { ConversionBanner } from "@/components/ConversionBanner";
import { rentalPackages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Private Rentals",
  description:
    "Host birthdays, anniversaries, corporate retreats, and listening salons at Wax Poetic in Sebastopol.",
};

export default function RentalsPage() {
  return (
    <>
      <section className="relative flex min-h-[60vh] items-end">
        <Image
          src="/media/2026/05/listen-wine.webp"
          alt="Private event at Wax Poetic"
          fill
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full section-padding pt-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Private Events
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-wax-cream md:text-5xl">
              Host something unforgettable
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-wax-cream/70">
              Birthdays, anniversaries, community groups, or business retreats —
              each event is tailored to the room and intentionally limited in
              capacity to preserve the experience.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl text-wax-cream">
            Rental packages
          </h2>
          <p className="mt-2 text-wax-cream/50">
            Every event is custom. Start with a package and we&apos;ll tailor the details.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {rentalPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="card-hover flex flex-col rounded-2xl border border-white/8 bg-wax-warm p-8"
              >
                <h3 className="font-display text-xl text-wax-cream">
                  {pkg.name}
                </h3>
                <div className="mt-2 flex gap-4 text-sm text-wax-cream/50">
                  <span>{pkg.duration}</span>
                  <span>·</span>
                  <span>{pkg.capacity}</span>
                </div>
                <p className="mt-1 text-2xl font-bold text-wax-amber">
                  {pkg.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-wax-cream/60">
                  {pkg.description}
                </p>
                <ul className="mt-6 flex-1 space-y-2">
                  {pkg.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-wax-cream/70"
                    >
                      <span className="text-wax-amber">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl text-wax-cream">
            Perfect for
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "Curated vinyl listening experience",
              "Elevated date night",
              "Birthday gathering",
              "Post-show reception",
              "Artist conversations",
              "Team offsite / retreat",
              "Listening salon",
              "Community group event",
            ].map((use) => (
              <div
                key={use}
                className="rounded-xl border border-white/5 bg-wax-charcoal/50 px-5 py-4 text-sm text-wax-cream/70"
              >
                {use}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          <InquiryForm type="rental" />
        </div>
      </section>

      {/* Cross-sell */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Already a member? Ask about member rental rates"
            subtitle="Selector and Patron members receive preferred pricing on private events."
            cta="View Membership"
            href="/membership"
            variant="purple"
          />
        </div>
      </section>
    </>
  );
}
