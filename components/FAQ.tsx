"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "@/components/Reveal";

export type FAQItem = { question: string; answer: string };

export default function FAQ({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-forest/10 rounded-3xl border border-forest/10 bg-white/40">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <Reveal key={item.question} delay={index * 0.05}>
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base text-forest sm:text-lg">
                {item.question}
              </span>
              <Plus
                className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              />
            </button>
            <div
              className={`grid overflow-hidden px-6 text-sm leading-relaxed text-ink/65 transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
              style={{ display: "grid" }}
            >
              <div className="min-h-0">{item.answer}</div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
