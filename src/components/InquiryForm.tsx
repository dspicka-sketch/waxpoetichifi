"use client";

import { useState } from "react";

type Props = {
  type: "rental" | "contact" | "donate";
};

export function InquiryForm({ type }: Props) {
  const [submitted, setSubmitted] = useState(false);

  const labels = {
    rental: {
      title: "Request a Private Rental",
      subtitle: "Tell us about your event and we'll craft a custom experience.",
      button: "Send Rental Inquiry",
    },
    contact: {
      title: "Drop Us a Line",
      subtitle: "Questions, ideas, or just want to say hello.",
      button: "Send Message",
    },
    donate: {
      title: "Make a Donation",
      subtitle: "Support the room and the culture we're building.",
      button: "Donate Now",
    },
  };

  const l = labels[type];

  if (submitted) {
    return (
      <div className="rounded-2xl border border-wax-amber/30 bg-wax-warm p-12 text-center">
        <div className="text-4xl">✦</div>
        <h3 className="mt-4 font-display text-2xl text-wax-cream">Thank you!</h3>
        <p className="mt-2 text-wax-cream/60">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="rounded-2xl border border-white/8 bg-wax-warm p-8"
    >
      <h3 className="font-display text-2xl text-wax-cream">{l.title}</h3>
      <p className="mt-2 text-sm text-wax-cream/50">{l.subtitle}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
            Name
          </span>
          <input
            required
            type="text"
            className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50"
          />
        </label>
        <label className="block">
          <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
            Email
          </span>
          <input
            required
            type="email"
            className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50"
          />
        </label>
        {type === "rental" && (
          <>
            <label className="block">
              <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
                Event Date
              </span>
              <input
                type="date"
                className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50"
              />
            </label>
            <label className="block">
              <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
                Guest Count
              </span>
              <input
                type="number"
                min="1"
                placeholder="e.g. 25"
                className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50"
              />
            </label>
          </>
        )}
        {type === "donate" && (
          <label className="block sm:col-span-2">
            <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
              Amount
            </span>
            <select className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50">
              <option value="25">$25 — Community session</option>
              <option value="100">$100 — Artist residency</option>
              <option value="250">$250 — Youth workshop</option>
              <option value="500">$500 — Hi-fi equipment</option>
              <option value="custom">Custom amount</option>
            </select>
          </label>
        )}
        <label className="block sm:col-span-2">
          <span className="mb-1 block text-xs uppercase tracking-wider text-wax-cream/40">
            {type === "rental" ? "Tell us about your event" : "Message"}
          </span>
          <textarea
            required
            rows={4}
            className="w-full rounded-lg border border-white/10 bg-wax-charcoal px-4 py-3 text-sm text-wax-cream outline-none focus:border-wax-amber/50"
          />
        </label>
      </div>

      <button type="submit" className="btn-primary mt-6 w-full sm:w-auto">
        {l.button}
      </button>
    </form>
  );
}
