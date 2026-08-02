"use client";

import { useState, type FormEvent } from "react";
import { conditions, services } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export default function AppointmentForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Replace with a real endpoint: a Next.js API route, Formspree, or a
    // webhook that emails/SMS/WhatsApps the clinic front desk.
    await new Promise((resolve) => setTimeout(resolve, 700));
    console.log("Appointment request:", data);
    setStatus("success");
    form.reset();
  }

  if (status === "success") {
    return (
      <div className="card flex flex-col items-center gap-3 p-10 text-center">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green/15 text-green">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="text-xl font-bold text-ink">Request received</h3>
        <p className="max-w-sm text-sm text-slateBlue">
          Thank you. Our front desk will call you shortly to confirm your slot. For anything urgent,
          please call the clinic directly.
        </p>
        <button onClick={() => setStatus("idle")} className="mt-2 text-sm font-semibold text-navy hover:text-green">
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card grid gap-5 p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input id="name" name="name" type="text" required placeholder="Your full name" className="input" />
        </Field>
        <Field label="Phone number" htmlFor="phone">
          <input id="phone" name="phone" type="tel" required placeholder="10-digit mobile number" className="input" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Email (optional)" htmlFor="email">
          <input id="email" name="email" type="email" placeholder="you@example.com" className="input" />
        </Field>
        <Field label="Condition / Concern" htmlFor="condition">
          <select id="condition" name="condition" required defaultValue="" className="input">
            <option value="" disabled>
              Select your concern
            </option>
            {conditions.map((c) => (
              <option key={c.slug} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Preferred service" htmlFor="service">
          <select id="service" name="service" defaultValue="" className="input">
            <option value="" disabled>
              Select a service (optional)
            </option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Preferred date" htmlFor="date">
          <input id="date" name="date" type="date" required className="input" />
        </Field>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Preferred time slot" htmlFor="time">
          <select id="time" name="time" required defaultValue="" className="input">
            <option value="" disabled>
              Select a time
            </option>
            <option value="Morning (9 AM – 1 PM)">Morning (9 AM – 1 PM)</option>
            <option value="Evening (4 PM – 8 PM)">Evening (4 PM – 8 PM)</option>
          </select>
        </Field>
        <Field label="Message / notes (optional)" htmlFor="message">
          <input id="message" name="message" type="text" placeholder="Anything else we should know" className="input" />
        </Field>
      </div>

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full disabled:opacity-60 md:w-fit">
        {status === "submitting" ? "Sending request…" : "Request Appointment"}
      </button>

      <style jsx global>{`
        .input {
          width: 100%;
          border: 1px solid #dce6f0;
          background: #ffffff;
          border-radius: 0.75rem;
          padding: 0.7rem 0.9rem;
          font-family: var(--font-open-sans);
          font-size: 0.925rem;
          color: #152437;
        }
        .input:focus {
          outline: 2px solid #33a1ff;
          outline-offset: 1px;
          border-color: #33a1ff;
        }
      `}</style>
    </form>
  );
}

function Field({ label, htmlFor, children }: { label: string; htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-widest text-slateBlue">{label}</span>
      {children}
    </label>
  );
}
