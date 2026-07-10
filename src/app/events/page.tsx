import type { Metadata } from "next";
import { EventCard } from "@/components/EventCard";
import { EventsCalendar } from "@/components/EventsCalendar";
import { ConversionBanner } from "@/components/ConversionBanner";
import { events } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events & Tickets",
  description:
    "Upcoming listening sessions, DJ nights, workshops, and member events at Wax Poetic in Sebastopol.",
};

export default function EventsPage() {
  const featured = events[0];

  return (
    <>
      <section className="section-padding pt-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs uppercase tracking-[0.2em] text-wax-amber">
            Calendar
          </p>
          <h1 className="mt-2 font-display text-4xl font-semibold text-wax-cream md:text-5xl">
            Upcoming Events
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-wax-cream/60">
            Listening sessions, member selector nights, guest DJs, classes, and
            workshops. Limited capacity — reserve your seat.
          </p>
        </div>
      </section>

      {/* Featured event */}
      <section className="px-6 pb-12 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs uppercase tracking-widest text-wax-amber">
            Featured · Limited Seats
          </p>
          <EventCard event={featured} featured />
        </div>
      </section>

      {/* Calendar */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <EventsCalendar events={events} />
        </div>
      </section>

      {/* All events grid */}
      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <h2 className="font-display text-2xl text-wax-cream">All Events</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Membership upsell */}
      <section className="section-padding bg-wax-warm">
        <div className="mx-auto max-w-7xl">
          <ConversionBanner
            title="Members get early access"
            subtitle="Join the Sound Society for priority booking, member-only sessions, and discounted tickets."
            cta="View Membership"
            href="/membership"
            variant="purple"
          />
        </div>
      </section>
    </>
  );
}
