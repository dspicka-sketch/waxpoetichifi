import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { MembershipCard } from "@/components/MembershipCard";
import { ConversionBanner } from "@/components/ConversionBanner";
import { events, membershipTiers } from "@/lib/data";

export default function HomePage() {
  const upcoming = events.slice(0, 3);
  const featuredTiers = membershipTiers
    .filter((tier) => !tier.limited)
    .slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[90svh] items-center justify-center overflow-hidden">
        <Image
          src="/media/2026/07/WaxPoetic_FriendsFamily-1.jpg"
          alt="The Wax Poetic listening room"
          fill
          priority
          className="object-cover"
        />

        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full section-padding py-24 sm:py-28 lg:py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Image
              src="/media/2026/04/logo-hero.png"
              alt="Wax Poetic"
              width={480}
              height={620}
              className="mb-8 h-auto w-72 opacity-75 sm:w-80 md:mb-10 md:w-96 lg:w-[28rem]"
              priority
            />

            <h1 className="max-w-[700px] font-display text-4xl font-semibold leading-[1.05] text-wax-cream sm:text-5xl md:text-6xl">
              A Community United Through Music.
            </h1>

            <p className="mt-6 max-w-[620px] text-base leading-relaxed text-wax-cream/75 sm:text-lg">
              Home to the Sound Society, Wax Poetic is a listening room where
              intentional listening, shared discovery, and unforgettable
              experiences bring people together.
            </p>

            <div className="mt-10 flex w-full max-w-md flex-col justify-center gap-4 sm:w-auto sm:max-w-none sm:flex-row sm:gap-6">
              <Link
                href="/membership"
                className="btn-primary w-full justify-center sm:w-auto"
              >
                Join the Sound Society
              </Link>

              <Link
                href="/events"
                className="btn-secondary w-full justify-center sm:w-auto"
              >
                View Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Society Introduction */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              The Sound Society
            </p>

            <h2 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl">
              More than a membership. A community built around music.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-wax-cream/60">
              The Sound Society brings music lovers together for intentional
              listening, shared discovery, and meaningful connection.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-wax-cream/60">
              Members receive priority access to events, member pricing,
              exclusive gatherings, and a voice in the culture we are building
              together.
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

      {/* Membership Tiers */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Membership
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Find your place in the Sound Society
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-wax-cream/60">
              Choose the membership that fits how you want to listen, gather,
              and participate.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTiers.map((tier) => (
              <MembershipCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/membership" className="btn-secondary">
              Compare Membership Options
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
                Upcoming Events
              </p>

              <h2 className="mt-3 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
                What&apos;s playing next
              </h2>

              <p className="mt-4 max-w-2xl leading-relaxed text-wax-cream/60">
                Listening sessions, artist conversations, performances, and
                gatherings created to bring people closer to music and one
                another.
              </p>
            </div>

            <Link href="/events" className="btn-ghost hidden md:inline-flex">
              View All Events →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, index) => (
              <EventCard
                key={event.id}
                event={event}
                featured={index === 0}
              />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/events" className="btn-secondary">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Shop */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Records &amp; Merchandise
            </p>

            <h2 className="mt-3 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Take the experience home
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-wax-cream/60">
              Discover a focused collection of records, apparel, and objects
              selected for people who care deeply about music.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <Link
              href="/shop"
              className="card-hover group rounded-2xl border border-white/8 bg-wax-charcoal p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
                Curated Vinyl
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold text-wax-cream group-hover:text-wax-amber">
                Records worth spending time with
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-wax-cream/55">
                A thoughtful selection connected to our listening sessions,
                community favorites, and essential albums.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-wax-amber">
                Shop Records →
              </span>
            </Link>

            <Link
              href="/shop"
              className="card-hover group rounded-2xl border border-white/8 bg-wax-charcoal p-8 md:p-10"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
                Wax Poetic Goods
              </p>

              <h3 className="mt-4 font-display text-2xl font-semibold text-wax-cream group-hover:text-wax-amber">
                Wear the culture
              </h3>

              <p className="mt-4 max-w-md leading-relaxed text-wax-cream/55">
                Limited apparel, listening accessories, and goods made for the
                Sound Society.
              </p>

              <span className="mt-6 inline-block text-sm font-semibold text-wax-amber">
                Shop Merchandise →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Private Events */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Host something memorable"
            subtitle="Bring people together for birthdays, celebrations, creative gatherings, retreats, and private listening experiences in a room designed around music."
            cta="Inquire About Private Events"
            href="/rentals"
          />
        </div>
      </section>

      {/* Community / About */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/community.webp"
              alt="The Wax Poetic community gathering in Sebastopol"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              About Wax Poetic
            </p>

            <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl">
              Music has always brought people together.
            </h2>

            <p className="mt-6 max-w-xl leading-relaxed text-wax-cream/60">
              Wax Poetic was created to give that experience a home—a place
              where albums are celebrated, conversations begin, and community
              grows one gathering at a time.
            </p>

            <p className="mt-4 max-w-xl leading-relaxed text-wax-cream/60">
              Rooted in Sebastopol, we are building a welcoming cultural space
              for people who want to listen more deeply and connect more
              meaningfully.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/membership" className="btn-primary">
                Join the Sound Society
              </Link>

              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}