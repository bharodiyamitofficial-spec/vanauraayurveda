"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Concern, Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

const filters: Array<Concern | "All"> = [
  "All",
  "Acne & Oily",
  "Brightening",
  "Hydrating & Sensitive",
];

export default function ProductsGrid({ products }: { products: Product[] }) {
  const [active, setActive] = useState<Concern | "All">("All");

  const visible = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.concern === active)),
    [active, products]
  );

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
              active === filter
                ? "border-forest bg-forest text-cream"
                : "border-forest/20 text-forest/70 hover:border-forest/50"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product, i) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 ? (
        <p className="mt-12 text-center text-sm text-ink/60">
          No soaps match this filter yet — check back soon.
        </p>
      ) : null}
    </div>
  );
}
