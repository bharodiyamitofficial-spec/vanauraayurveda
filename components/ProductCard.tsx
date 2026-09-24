import Link from "next/link";
import { MessageCircle } from "lucide-react";
import type { Product } from "@/lib/products";
import { whatsappLink } from "@/lib/site";
import SoapIllustration from "@/components/SoapIllustration";

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <div className="h-full">
      <div className="card-surface group flex h-full flex-col overflow-hidden rounded-3xl transition-transform duration-500 hover:-translate-y-1.5">
        <Link
          href={`/products/${product.slug}`}
          className="relative flex aspect-[4/3.2] items-center justify-center overflow-hidden"
          style={{ backgroundColor: product.theme.soft }}
        >
          <span className="absolute left-4 top-4 rounded-full bg-forest px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream">
            {product.tag}
          </span>
          {discount > 0 ? (
            <span className="absolute right-4 top-4 rounded-full bg-terracotta px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-cream">
              {discount}% off
            </span>
          ) : null}
          <SoapIllustration
            theme={product.theme}
            className="h-40 w-40 transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-3 sm:h-48 sm:w-48"
          />
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <p className="text-xs font-medium uppercase tracking-wider text-terracotta/80">
            {product.skinType}
          </p>
          <Link href={`/products/${product.slug}`}>
            <h3 className="font-display mt-1.5 text-xl text-forest">{product.name}</h3>
          </Link>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            {product.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {product.benefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full bg-sage-light/30 px-2.5 py-1 text-[0.7rem] font-medium text-forest-light"
              >
                {benefit}
              </span>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-between gap-3 border-t border-forest/10 pt-5">
            <div>
              <span className="font-display text-xl text-forest">₹{product.price}</span>
              <span className="ml-2 text-sm text-ink/40 line-through">₹{product.mrp}</span>
              <p className="text-[0.7rem] text-ink/45">{product.weight} bar</p>
            </div>
            <a
              href={whatsappLink(
                `Hi Vanaura Ayurveda! I'd like to order the ${product.name} (${product.weight}).`
              )}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-full bg-forest px-4 py-2.5 text-xs font-semibold text-cream transition-colors hover:bg-forest-light"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Buy Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
