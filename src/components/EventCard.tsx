import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/data";

const categoryLabels: Record<Event["category"], string> = {
  listening: "Listening Session",
  dj: "DJ Night",
  workshop: "Workshop",
  member: "Members Only",
  special: "Special Event",
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

export function EventCard({ event, featured }: { event: Event; featured?: boolean }) {
  const lowTickets = event.ticketsRemaining <= 10;
  const soldOut = event.ticketsRemaining === 0;

  return (
    <article
      className={`card-hover overflow-hidden rounded-2xl border border-white/8 bg-wax-warm ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      {event.image && (
        <div className={`relative ${featured ? "h-64 md:h-full" : "h-48"} bg-wax-purple-deep`}>
          <Image
            src={event.image}
            alt={event.title}
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wax-warm to-transparent" />
          {event.memberOnly && (
            <span className="absolute left-4 top-4 rounded-full bg-wax-purple px-3 py-1 text-xs font-semibold text-wax-amber">
              Members Only
            </span>
          )}
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center gap-3 text-xs text-wax-cream/50">
          <span className="uppercase tracking-wider text-wax-amber">
            {categoryLabels[event.category]}
          </span>
          <span>·</span>
          <time>{formatDate(event.date)}</time>
          <span>·</span>
          <span>{event.time}</span>
        </div>

        <h3 className="mt-3 font-display text-xl font-semibold text-wax-cream">
          {event.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-wax-cream/60">
          {event.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span className="text-lg font-semibold text-wax-amber">{event.price}</span>
            {lowTickets && !soldOut && (
              <span className="ml-2 text-xs urgency-pulse text-red-400">
                Only {event.ticketsRemaining} left
              </span>
            )}
          </div>
          {soldOut ? (
            <span className="rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-wax-cream/40">
              Sold Out
            </span>
          ) : (
            <Link
              href={event.ticketUrl}
              className="btn-primary text-xs"
            >
              {event.memberOnly ? "Join to Attend" : "Get Tickets"}
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
