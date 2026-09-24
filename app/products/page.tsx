import type { Metadata } from "next";
import { Leaf } from "lucide-react";
import Reveal from "@/components/Reveal";
import ProductsGrid from "@/components/ProductsGrid";
import { products } from "@/lib/products";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `Shop Ayurvedic Soaps | ${site.name}`,
  description:
    "Browse Vanaura Ayurveda's full range of handcrafted, cold-processed Ayurvedic soap bars for every skin concern.",
};

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-forest/10">
        <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-sage-light/30 blur-3xl" />
        <div className="container-custom relative py-16 text-center lg:py-20">
          <Reveal className="mx-auto max-w-2xl">
            <span className="eyebrow">The Full Collection</span>
            <h1 className="font-display mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Shop Our Ayurvedic Soaps
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Six cold-processed bars, each built around a classic Ayurvedic herb pairing.
              Filter by skin concern to find your ritual.
            </p>
            <div className="mt-6 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-wide text-forest-light">
              <Leaf className="h-3.5 w-3.5" />
              Free shipping across India on orders above ₹699
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <ProductsGrid products={products} />
        </div>
      </section>
    </>
  );
}
