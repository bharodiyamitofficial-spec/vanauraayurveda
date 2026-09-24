"use client";

import { motion } from "framer-motion";

const items = [
  "100% Natural",
  "Cold-Processed",
  "Cruelty-Free",
  "Small-Batch",
  "Plastic-Free Packaging",
  "Vegan & Vegetarian",
  "Handcrafted in India",
  "No Harsh Chemicals",
];

export default function Marquee() {
  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-cream/10 bg-forest py-4">
      <motion.div
        className="flex w-max items-center gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      >
        {loopItems.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-medium uppercase tracking-wider text-cream/75"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
