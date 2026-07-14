import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConversionBanner } from "@/components/ConversionBanner";
import { UpcomingEventsSection } from "@/components/UpcomingEventsSection";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Listening sessions, artist conversations, performances, and gatherings at Wax Poetic in Sebastopol.",
};

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75svh] items-end overflow-hidden">
        <Image
          src="/media/2026/07/WaxPoetic_FriendsFamily-1.jpg"
          alt="Guests gathered for a listening session at Wax Poetic"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full section-padding pb-16 pt-32 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Wax Poetic Presents
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-wax-cream sm:text-5xl md:text-6xl">
              Gather Around the Music.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-wax-cream/75 sm:text-lg">
              Listening sessions, artist conversations, performances, and
              gatherings created to bring people closer to music and one
              another.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <a href="#upcoming-events" className="btn-primary">
                View Upcoming Events
              </a>
              <Link href="/membership" className="btn-secondary">
                Join the Sound Society
              </Link>
            </div>
          </div>
        </div>
      </section>

      <UpcomingEventsSection events={events} />

      {/* Membership */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Member Access
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Hear About It First.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-wax-cream/60">
              Sound Society members receive early access, member pricing, and
              invitations to select gatherings.
            </p>
            <Link href="/membership" className="btn-primary mt-8">
              Explore Membership
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/group-listening.webp"
              alt="Members listening together at Wax Poetic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Private events */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Make the Room Yours."
            subtitle="Host a celebration, creative gathering, or private listening experience in a space designed around music."
            cta="Inquire About Private Events"
            href="/rentals"
          />
        </div>
      </section>
    </>
  );
}
