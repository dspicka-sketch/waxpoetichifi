"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { EventCard } from "@/components/EventCard";
import type { Event } from "@/lib/data";

const categoryLabels: Record<Event["category"], string> = {
  listening: "Listening Session",
  dj: "DJ Night",
  workshop: "Workshop",
  member: "Members Only",
  special: "Special Event",
};

function getUpcomingEvents(events: Event[]) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return [...events]
    .filter((event) => new Date(event.date + "T12:00:00") >= today)
    .sort(
      (a, b) =>
        new Date(a.date).getTime() - new Date(b.date).getTime()
    );
}

export function UpcomingEventsSection({ events }: { events: Event[] }) {
  const upcoming = useMemo(() => getUpcomingEvents(events), [events]);
  const [activeCategory, setActiveCategory] = useState<Event["category"] | "all">(
    "all"
  );

  const categories = useMemo(
    () => [...new Set(upcoming.map((event) => event.category))],
    [upcoming]
  );

  const filtered =
    activeCategory === "all"
      ? upcoming
      : upcoming.filter((event) => event.category === activeCategory);

  const [featured, ...remaining] = filtered;

  if (upcoming.length === 0) {
    return (
      <section id="upcoming-events" className="section-padding">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl rounded-2xl border border-white/8 bg-wax-warm px-8 py-16 text-center md:px-12">
            <h2 className="font-display text-3xl font-semibold text-wax-cream md:text-4xl">
              The next gathering is taking shape.
            </h2>
            <p className="mt-4 leading-relaxed text-wax-cream/60">
              Join the list to hear about new listening sessions, performances,
              and special events first.
            </p>
            <Link href="/membership" className="btn-primary mt-8">
              Join the Sound Society
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="upcoming-events" className="section-padding">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
          Upcoming Events
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold text-wax-cream md:text-4xl">
          What&apos;s on the calendar
        </h2>

        {categories.length > 1 && (
          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-wax-amber text-wax-charcoal"
                  : "text-wax-cream/60 hover:text-wax-cream"
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-wax-amber text-wax-charcoal"
                    : "text-wax-cream/60 hover:text-wax-cream"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        )}

        {filtered.length === 0 ? (
          <p className="mt-10 text-wax-cream/60">
            No events in this category right now. Try another filter or check
            back soon.
          </p>
        ) : (
          <div className="mt-10">
            <p className="mb-4 text-xs uppercase tracking-widest text-wax-amber">
              Next Up
            </p>
            <EventCard event={featured} featured />

            {remaining.length > 0 && (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {remaining.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
