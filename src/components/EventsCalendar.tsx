"use client";

import { useState } from "react";
import type { Event } from "@/lib/data";

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function getMonthKey(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`;
}

function getMonthLabel(key: string) {
  const [y, m] = key.split("-");
  const d = new Date(Number(y), Number(m) - 1);
  return d.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

export function EventsCalendar({ events }: { events: Event[] }) {
  const [view, setView] = useState<"list" | "calendar">("list");

  const sorted = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const byMonth = sorted.reduce<Record<string, Event[]>>((acc, e) => {
    const key = getMonthKey(e.date);
    (acc[key] ??= []).push(e);
    return acc;
  }, {});

  const monthKeys = Object.keys(byMonth).sort();

  return (
    <div>
      <div className="mb-8 flex gap-2">
        <button
          onClick={() => setView("list")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            view === "list"
              ? "bg-wax-amber text-wax-charcoal"
              : "text-wax-cream/60 hover:text-wax-cream"
          }`}
        >
          List View
        </button>
        <button
          onClick={() => setView("calendar")}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            view === "calendar"
              ? "bg-wax-amber text-wax-charcoal"
              : "text-wax-cream/60 hover:text-wax-cream"
          }`}
        >
          Calendar View
        </button>
      </div>

      {view === "list" ? (
        <div className="space-y-12">
          {monthKeys.map((key) => (
            <section key={key}>
              <h3 className="mb-6 font-display text-xl text-wax-amber">
                {getMonthLabel(key)}
              </h3>
              <div className="space-y-4">
                {byMonth[key].map((event) => (
                  <CalendarRow key={event.id} event={event} />
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {monthKeys.map((key) => (
            <div
              key={key}
              className="rounded-2xl border border-white/8 bg-wax-warm p-6"
            >
              <h3 className="mb-4 font-display text-lg text-wax-amber">
                {getMonthLabel(key)}
              </h3>
              <ul className="space-y-3">
                {byMonth[key].map((event) => {
                  const day = new Date(event.date + "T12:00:00").getDate();
                  return (
                    <li key={event.id} className="flex gap-3 text-sm">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-wax-purple-deep font-semibold text-wax-amber">
                        {day}
                      </span>
                      <div>
                        <p className="font-medium text-wax-cream">{event.title}</p>
                        <p className="text-wax-cream/50">{event.time}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function CalendarRow({ event }: { event: Event }) {
  const low = event.ticketsRemaining <= 10;

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-white/5 bg-wax-warm/50 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-wax-amber">
            {new Date(event.date + "T12:00:00").getDate()}
          </div>
          <div className="text-xs uppercase text-wax-cream/40">
            {new Date(event.date + "T12:00:00").toLocaleDateString("en-US", { month: "short" })}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg text-wax-cream">{event.title}</h4>
          <p className="text-sm text-wax-cream/50">
            {formatDate(event.date)} · {event.time}
          </p>
          {low && (
            <p className="mt-1 text-xs urgency-pulse text-red-400">
              {event.ticketsRemaining} tickets remaining
            </p>
          )}
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="font-semibold text-wax-amber">{event.price}</span>
        <a href={event.ticketUrl} className="btn-primary text-xs whitespace-nowrap">
          Get Tickets
        </a>
      </div>
    </div>
  );
}
