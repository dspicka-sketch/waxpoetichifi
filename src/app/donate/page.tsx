import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ConversionBanner } from "@/components/ConversionBanner";
import { donationImpacts } from "@/lib/data";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Wax Poetic's listening room, artist programs, youth workshops, and community sessions in Sebastopol.",
};

export default function DonatePage() {
  return (
    <>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
            Support the Room
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-wax-cream md:text-5xl">
            Help us keep the music playing
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-wax-cream/60">
            Wax Poetic anchors a cultural ecosystem — creating space for artists,
            makers, and neighbors to gather around sound. Your support makes it
            possible.
          </p>
        </div>
      </section>

      {/* Impact tiers */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {donationImpacts.map((d) => (
            <div
              key={d.amount}
              className="card-hover rounded-2xl border border-white/8 bg-wax-warm p-6 text-center"
            >
              <p className="text-3xl font-bold text-wax-amber">{d.amount}</p>
              <p className="mt-2 text-sm text-wax-cream/60">{d.impact}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/curation.png"
              alt="Wax Poetic curation"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-2xl text-wax-cream">
              Where your gift goes
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                "Youth programs — free workshops for under-18s",
                "Artist grants — funded residency stipends",
                "Open nights — free community sessions weekly",
                "Local sourcing — 80%+ from local vendors",
                "Hi-fi maintenance — keeping the sound pristine",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-wax-cream/70"
                >
                  <span className="text-wax-amber">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Donation form */}
      <section className="section-padding">
        <div className="mx-auto max-w-2xl">
          <InquiryForm type="donate" />
        </div>
      </section>

      {/* Alternative: membership */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Want ongoing support? Become a Patron"
            subtitle="Patron membership includes monthly curated gifts, private session invitations, and direct support of the Wax Poetic experience."
            cta="View Patron Tier"
            href="/membership"
          />
        </div>
      </section>
    </>
  );
}
