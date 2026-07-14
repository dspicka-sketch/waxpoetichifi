import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MembershipCard } from "@/components/MembershipCard";
import { membershipTiers, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "The Sound Society",
  description:
    "Join the Wax Poetic Sound Society — a community united through music, with priority access, shared discovery, and member gatherings in Sebastopol.",
};

const whyJoin = [
  {
    title: "Priority Access",
    description:
      "Early access to events and limited-capacity experiences.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
        />
      </svg>
    ),
  },
  {
    title: "Shared Discovery",
    description: "Meet people who love finding and sharing music.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: "Support Local Culture",
    description:
      "Your membership helps sustain artists, programming, and community gathering.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
        aria-hidden
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
] as const;

const memberExperiences = [
  "Album listening nights",
  "Artist conversations",
  "Member gatherings",
  "Exclusive previews",
  "Community playlists",
  "Record recommendations",
] as const;

const faqItems = [
  {
    question: "What is the Sound Society?",
    answer:
      "The Sound Society is the membership community at Wax Poetic — for people who want to gather, discover, and experience music together beyond casual listening.",
  },
  {
    question: "Do I need to be an audiophile?",
    answer:
      "No. Curiosity matters more than equipment. Whether you're new to vinyl or have been collecting for decades, you're welcome here.",
  },
  {
    question: "Can I bring guests?",
    answer:
      "Guest access depends on your membership level. Selector and Patron members receive guest passes; details are outlined in each option below.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Monthly memberships can be cancelled at any time. Founder memberships are one-time and non-refundable.",
  },
  {
    question: "How do member events work?",
    answer:
      "Members receive early access to events on our calendar. Some gatherings are member-only; others offer member pricing or reserved access depending on your level.",
  },
] as const;

export default function MembershipPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[75svh] items-end overflow-hidden">
        <Image
          src="/media/2026/05/group-listening.webp"
          alt="Members gathered for a listening session at Wax Poetic"
          fill
          priority
          className="object-cover"
        />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 w-full section-padding pb-16 pt-32 md:pb-20">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
              The Sound Society
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight text-wax-cream sm:text-5xl md:text-6xl">
              Join a Community United Through Music.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-wax-cream/75 sm:text-lg">
              The Sound Society is the membership community at Wax Poetic. It
              exists for people who believe music deserves more than background
              listening—a place to gather, discover, and experience music
              together.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Link href={site.links.membershipRegister} className="btn-primary">
                Become a Member
              </Link>
              <Link href="/events" className="btn-secondary">
                View Upcoming Events
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-display text-3xl font-semibold text-wax-cream md:text-4xl">
            More Than Membership.
          </h2>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8 lg:gap-16">
            {whyJoin.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-wax-amber/30 bg-wax-charcoal text-wax-amber">
                  {item.icon}
                </div>
                <h3 className="mt-6 font-display text-xl text-wax-cream">
                  {item.title}
                </h3>
                <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-wax-cream/55">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Options */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              Choose How You&apos;d Like to Participate.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-wax-cream/60">
              Whether you visit once a month or every week, there&apos;s a place
              for you in the Sound Society.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {membershipTiers.map((tier) => (
              <MembershipCard key={tier.id} tier={tier} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href={site.links.membershipRegister} className="btn-primary">
              Become a Member
            </Link>
          </div>
        </div>
      </section>

      {/* Member Experiences */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-display text-3xl font-semibold leading-tight text-wax-cream md:text-4xl lg:text-5xl">
                What Membership Feels Like.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-wax-cream/60">
                Membership is about showing up for the music—and the people
                who love it. Here&apos;s what life in the Sound Society looks
                like.
              </p>

              <ul className="mt-10 space-y-4">
                {memberExperiences.map((experience) => (
                  <li
                    key={experience}
                    className="flex items-center gap-4 border-b border-white/8 pb-4 font-display text-lg text-wax-cream/90 last:border-0 last:pb-0 md:text-xl"
                  >
                    <span className="text-wax-amber" aria-hidden>
                      ✦
                    </span>
                    {experience}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]">
              <Image
                src="/media/2026/05/community.webp"
                alt="The Wax Poetic community gathered in the listening room"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-3xl font-semibold text-wax-cream md:text-4xl">
            Common Questions
          </h2>

          <div className="mt-10 divide-y divide-white/8">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg text-wax-cream marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    className="shrink-0 text-wax-amber transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 pr-8 text-sm leading-relaxed text-wax-cream/55">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold text-wax-cream md:text-4xl">
            Your Seat Is Waiting.
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-wax-cream/60">
            Become part of a community united through music.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link href={site.links.membershipRegister} className="btn-primary">
              Become a Member
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
