import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, Leaf, MessageCircle, ShieldCheck, Sparkles, Truck } from "lucide-react";
import SoapIllustration from "@/components/SoapIllustration";
import ProductCard from "@/components/ProductCard";
import Reveal from "@/components/Reveal";
import { getProductBySlug, products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: `Product Not Found | ${site.name}` };

  return {
    title: `${product.name} | ${site.name}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);
  const related = products.filter((p) => p.concern === product.concern && p.id !== product.id).slice(0, 3);
  const fallbackRelated = related.length > 0 ? related : products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <div className="container-custom pt-6">
        <nav className="flex items-center gap-1.5 text-xs text-ink/50">
          <Link href="/" className="hover:text-forest">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link href="/products" className="hover:text-forest">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-forest">{product.name}</span>
        </nav>
      </div>

      <section className="section-padding !pb-16 !pt-8">
        <div className="container-custom grid gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div
              className="sticky top-28 flex aspect-square items-center justify-center overflow-hidden rounded-[2rem]"
              style={{ backgroundColor: product.theme.soft }}
            >
              <span className="absolute left-6 top-6 rounded-full bg-forest px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream">
                {product.tag}
              </span>
              {discount > 0 ? (
                <span className="absolute right-6 top-6 rounded-full bg-terracotta px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-cream">
                  {discount}% off
                </span>
              ) : null}
              <SoapIllustration theme={product.theme} className="h-64 w-64 sm:h-80 sm:w-80" />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-wider text-terracotta/80">
              {product.skinType}
            </p>
            <h1 className="font-display mt-2 text-3xl leading-tight text-forest sm:text-4xl">
              {product.name}
            </h1>

            <div className="mt-5 flex items-baseline gap-3">
              <span className="font-display text-3xl text-forest">₹{product.price}</span>
              <span className="text-base text-ink/40 line-through">₹{product.mrp}</span>
              {discount > 0 ? (
                <span className="text-sm font-semibold text-terracotta">Save {discount}%</span>
              ) : null}
            </div>
            <p className="mt-1 text-xs text-ink/45">Inclusive of all taxes · {product.weight} bar</p>

            <p className="mt-6 text-base leading-relaxed text-ink/70">{product.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {product.benefits.map((benefit) => (
                <span
                  key={benefit}
                  className="rounded-full bg-sage-light/30 px-3 py-1.5 text-xs font-medium text-forest-light"
                >
                  {benefit}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={whatsappLink(
                  `Hi Vanaura Ayurveda! I'd like to order the ${product.name} (${product.weight}) — ₹${product.price}.`
                )}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                <MessageCircle className="h-4 w-4" />
                Order via WhatsApp
              </a>
              <a href={`tel:${site.phoneHref}`} className="btn-outline">
                Call to Order
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 border-y border-forest/10 py-6">
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Truck className="h-5 w-5 text-forest" strokeWidth={1.5} />
                <span className="text-[0.7rem] text-ink/60">Pan-India Shipping</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <ShieldCheck className="h-5 w-5 text-forest" strokeWidth={1.5} />
                <span className="text-[0.7rem] text-ink/60">Dermatologically Safe</span>
              </div>
              <div className="flex flex-col items-center gap-1.5 text-center">
                <Sparkles className="h-5 w-5 text-forest" strokeWidth={1.5} />
                <span className="text-[0.7rem] text-ink/60">Hand-Poured Batches</span>
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-display flex items-center gap-2 text-lg text-forest">
                <Leaf className="h-4 w-4 text-gold" />
                Key Ingredients
              </h2>
              <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
                {product.ingredients.map((ingredient) => (
                  <li key={ingredient} className="flex items-center gap-2 text-sm text-ink/70">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-padding !pt-0">
        <div className="container-custom">
          <Reveal>
            <h2 className="font-display text-2xl text-forest sm:text-3xl">You May Also Like</h2>
          </Reveal>
          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {fallbackRelated.map((relatedProduct, i) => (
              <Reveal key={relatedProduct.id} delay={i * 0.08} className="h-full">
                <ProductCard product={relatedProduct} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
