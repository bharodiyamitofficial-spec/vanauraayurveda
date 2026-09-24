"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  subject: "General Enquiry",
  message: "",
};

// UI-only form: no backend is connected yet. Wire this up to an API route
// or a service like Formspree / Resend / EmailJS to actually deliver messages.
export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="card-surface flex flex-col items-center gap-4 rounded-3xl px-8 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10 text-forest">
          <CheckCircle2 className="h-7 w-7" strokeWidth={1.5} />
        </span>
        <h3 className="font-display text-2xl text-forest">Message Ready to Send</h3>
        <p className="max-w-sm text-sm leading-relaxed text-ink/65">
          Thanks, {form.name.split(" ")[0] || "there"}! This form isn&rsquo;t connected to a mail
          server yet — please reach us directly on WhatsApp or email until it is, and we&rsquo;ll
          reply within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setForm(initialState);
            setSubmitted(false);
          }}
          className="btn-outline mt-2"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="card-surface rounded-3xl p-7 sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Full Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-forest/40"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+91 00000 00000"
            className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-forest/40"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-forest/40"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Subject
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => update("subject", e.target.value)}
            className="mt-2 w-full rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-forest/40"
          >
            <option>General Enquiry</option>
            <option>Order Support</option>
            <option>Bulk / Wholesale</option>
            <option>Gifting</option>
            <option>Partnership</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="text-xs font-medium uppercase tracking-wide text-ink/60">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={form.message}
            onChange={(e) => update("message", e.target.value)}
            placeholder="Tell us how we can help..."
            className="mt-2 w-full resize-none rounded-xl border border-forest/15 bg-white px-4 py-3 text-sm text-ink outline-none focus:border-forest/40"
          />
        </div>
      </div>

      <button type="submit" className="btn-primary mt-7 w-full sm:w-auto">
        <Send className="h-4 w-4" />
        Send Message
      </button>
    </form>
  );
}
