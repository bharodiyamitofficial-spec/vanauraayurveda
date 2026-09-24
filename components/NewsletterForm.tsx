"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    setEmail("");
  }

  if (submitted) {
    return (
      <div className="flex items-center gap-2 rounded-full border border-gold-light/40 bg-forest-light/40 px-4 py-3 text-sm text-cream">
        <Check className="h-4 w-4 text-gold-light" />
        You&apos;re on the list — welcome to the ritual.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm gap-2">
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Your email address"
        className="w-full rounded-full border border-cream/25 bg-cream/10 px-4 py-3 text-sm text-cream placeholder:text-cream/50 outline-none focus:border-gold-light"
      />
      <button
        type="submit"
        aria-label="Subscribe"
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-forest transition-colors hover:bg-gold-light"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
