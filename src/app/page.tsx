import Image from "next/image";
import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import { MembershipCard } from "@/components/MembershipCard";
import { ConversionBanner } from "@/components/ConversionBanner";
import { events, membershipTiers, site } from "@/lib/data";

export default function HomePage() {
  const upcoming = events.slice(0, 3);
  const featuredTiers = membershipTiers.filter((t) => !t.limited).slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center">
        <Image
          src="/media/2026/07/WaxPoetic_FriendsFamily-1.jpg"
          alt="Wax Poetic listening room"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 w-full section-padding py-32">
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <Image
              src="/media/2026/04/logo-hero.png"
              alt="Wax Poetic"
              width={480}
              height={620}
              className="mb-10 h-auto w-72 sm:w-80 md:w-96 lg:w-[28rem]"
              priority
            />
            <h1 className="font-display text-4xl font-semibold leading-tight text-wax-cream md:text-6xl">
              A place to slow down{" "}
              <span className="text-gradient">and listen.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-wax-cream/70">
              Curated vinyl listening room &amp; cultural venue in Sebastopol.
              Limited capacity. Intentional sound.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link href="/events" className="btn-primary">
                Get Tickets
              </Link>
              <Link href="/membership" className="btn-secondary">
                Join the Sound Society
              </Link>
              <Link href="/rentals" className="btn-ghost">
                Book a Private Event →
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-wax-cream/40">
              <span>Sebastopol, CA</span>
              <span>·</span>
              <span>Limited Capacity</span>
              <span>·</span>
              <span>Member-Driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conversion paths */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Events & Tickets",
                desc: "Listening sessions, DJ nights, workshops. Limited seats — book early.",
                href: "/events",
                cta: "View Calendar",
                icon: "🎵",
              },
              {
                title: "Membership",
                desc: "Priority access, member pricing, and a place in the program.",
                href: "/membership",
                cta: "View Tiers",
                icon: "✦",
              },
              {
                title: "Private Rentals",
                desc: "Birthdays, retreats, listening salons. Tailored to your group.",
                href: "/rentals",
                cta: "Inquire",
                icon: "🎙",
              },
              {
                title: "Donate",
                desc: "Support the room, artists, and community programs.",
                href: "/donate",
                cta: "Give Back",
                icon: "♥",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="card-hover group rounded-2xl border border-white/8 bg-wax-charcoal p-6"
              >
                <span className="text-2xl">{item.icon}</span>
                <h3 className="mt-4 font-display text-lg text-wax-cream group-hover:text-wax-amber">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-wax-cream/50">{item.desc}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-wax-amber">
                  {item.cta} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What is it */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              What is it?
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Music deserves attention.
            </h2>
            <p className="mt-6 leading-relaxed text-wax-cream/60">
              Wax Poetic is a community-driven listening room and event space in
              Sebastopol, California, built around the idea that music deserves
              attention. With limited capacity and a focus on intentional
              listening, we exist as both a neighborhood gathering space and a
              cultural refuge.
            </p>
            <p className="mt-4 leading-relaxed text-wax-cream/60">
              Designed with intention — a place for slowing down, listening
              deeply, and sharing that experience with others who value the same.
            </p>
            <Link href="/membership" className="btn-secondary mt-8">
              Become a Member
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/group-listening.webp"
              alt="Group listening at Wax Poetic"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
                Upcoming Events
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-wax-cream">
                What&apos;s playing next
              </h2>
            </div>
            <Link href="/events" className="btn-ghost hidden md:inline-flex">
              Full Calendar →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcoming.map((event, i) => (
              <EventCard key={event.id} event={event} featured={i === 0} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Link href="/events" className="btn-secondary">
              View Full Calendar
            </Link>
          </div>
        </div>
      </section>

      {/* Membership */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Sound Society
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Choose your place in the room
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-wax-cream/60">
              Memberships support the room, unlock access to private events, and
              deepen your connection to the culture we&apos;re building.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredTiers.map((tier) => (
              <MembershipCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/membership" className="btn-ghost">
              Compare all tiers including Founder →
            </Link>
          </div>
        </div>
      </section>

      {/* Private Rentals CTA */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Host an unforgettable event"
            subtitle="Birthdays, anniversaries, community groups, or business retreats — each event is tailored to the room and intentionally limited in capacity."
            cta="Request a Rental"
            href="/rentals"
          />
        </div>
      </section>

      {/* Community */}
      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/media/2026/05/community.webp"
              alt="Wax Poetic community"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              Community
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold text-wax-cream">
              The Wax Poetic Sound Society
            </h2>
            <p className="mt-6 leading-relaxed text-wax-cream/60">
              A group of music-forward people with the common goal of deepening
              the music in their lives. As a member, you&apos;re not just
              attending events — you&apos;re part of the program.
            </p>
            <div className="mt-8 flex gap-4">
              <Link href={site.links.membershipRegister} className="btn-primary">
                Join Us
              </Link>
              <Link href="/donate" className="btn-secondary">
                Support the Room
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
