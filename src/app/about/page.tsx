import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why Wax Poetic exists — a listening room and gathering place in Sebastopol where music brings people together through intentional listening and shared discovery.",
};

const values = [
  {
    title: "Intentional Listening",
    description: "Great music deserves our full attention.",
  },
  {
    title: "Community",
    description: "Music means more when it is shared.",
  },
  {
    title: "Discovery",
    description: "There is always another record, artist, or idea worth hearing.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75svh] items-end overflow-hidden">
        <Image
          src="/media/2026/07/WaxPoetic_FriendsFamily-1.jpg"
          alt="Guests gathered in the Wax Poetic listening room"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full section-padding pb-16 pt-32 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              About Wax Poetic
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-wax-cream sm:text-5xl md:text-6xl">
              Why Wax Poetic Exists.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-wax-cream/75 sm:text-lg">
              Music has always brought people together. Wax Poetic was created
              to give that experience a home.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href="/membership" className="btn-primary">
                Join the Sound Society
              </Link>
              <Link href="/events" className="btn-secondary">
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl">
            Music Deserves More Than Background.
          </h2>
          <p className="mt-8 text-base leading-relaxed text-wax-cream/60 md:text-lg">
            Streaming made music available everywhere. But somewhere along the
            way, listening became passive. Wax Poetic exists to create a place
            where albums are experienced with attention, discovery is shared,
            and music becomes a reason to gather.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold text-wax-cream md:text-4xl">
            What We Believe.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="font-display text-xl text-wax-cream md:text-2xl">
                  {value.title}
                </h3>
                <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-wax-cream/55 md:text-base">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Room */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src="/media/2026/05/record-player.webp"
                alt="The Wax Poetic listening room hi-fi system"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl lg:text-5xl">
                A Room Built for Listening.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-wax-cream/60">
                Every detail is designed to help people slow down, listen
                deeply, and connect—with the music and with one another.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Society */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              The Sound Society
            </p>
            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl">
              A Community United Through Music.
            </h2>
            <p className="mt-6 max-w-xl leading-relaxed text-wax-cream/60">
              The Sound Society is the membership community at Wax
              Poetic—bringing people together through events, shared discovery,
              and intentional listening.
            </p>
            <Link href="/membership" className="btn-primary mt-8">
              Explore Membership
            </Link>
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/group-listening.webp"
              alt="Members listening to music together at Wax Poetic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-wax-cream md:text-4xl">
            Come Listen With Us.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-wax-cream/60">
            Join the Sound Society or find your next gathering.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href="/membership" className="btn-primary">
              Join the Sound Society
            </Link>
            <Link href="/events" className="btn-secondary">
              View Events
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
