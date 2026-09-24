import Link from "next/link";
import {
  ArrowRight,
  Droplet,
  Leaf,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import HeroIllustration from "@/components/HeroIllustration";
import SoapIllustration from "@/components/SoapIllustration";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";

const usps = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "No sulphates, parabens or synthetic dyes — ever.",
  },
  {
    icon: Droplet,
    title: "Cold-Pressed Oils",
    description: "Coconut, sesame and almond oils, pressed without heat.",
  },
  {
    icon: ShieldCheck,
    title: "Dermatologically Safe",
    description: "Tested and gentle enough for daily, all-skin use.",
  },
  {
    icon: Sparkles,
    title: "Small-Batch Crafted",
    description: "Hand-poured in batches of 50, cured for six weeks.",
  },
];

const process = [
  {
    step: "01",
    title: "Sourced from the Earth",
    description: "Herbs and oils sourced directly from trusted Indian farms.",
  },
  {
    step: "02",
    title: "Cold-Processed",
    description: "Saponified slowly at low heat to preserve every nutrient.",
  },
  {
    step: "03",
    title: "Cured for 6 Weeks",
    description: "Air-cured bars that last longer and lather richer.",
  },
  {
    step: "04",
    title: "Hand-Packed",
    description: "Wrapped by hand in recyclable, plastic-free paper.",
  },
];

const faqItems = [
  {
    question: "Are Vanaura soaps suitable for sensitive skin?",
    answer:
      "Yes. All our bars are made with cold-pressed carrier oils and no synthetic fragrance, making them gentle enough for sensitive and reactive skin. We still recommend the Rose & Aloe Vera or Lavender & Oatmeal bars if your skin is especially reactive.",
  },
  {
    question: "How long does one soap bar last?",
    answer:
      "With normal daily use on a draining soap dish, a 100g bar typically lasts 4–6 weeks. Keeping it dry between uses extends its life further.",
  },
  {
    question: "Do you offer Cash on Delivery?",
    answer:
      "Yes, Cash on Delivery is available across India on orders placed via WhatsApp. Prepaid orders get an additional 5% off.",
  },
  {
    question: "What is your return and shipping policy?",
    answer:
      "Orders are shipped within 2 business days and typically arrive within 4–7 days. Since these are personal care items, we accept returns only for damaged or incorrect items — reach out within 48 hours of delivery.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-sage-light/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-40 h-64 w-64 rounded-full bg-gold-light/25 blur-3xl" />

        <div className="container-custom grid items-center gap-12 py-14 lg:grid-cols-2 lg:gap-8 lg:py-20">
          <Reveal>
            <span className="eyebrow">Handcrafted Ayurvedic Soaps</span>
            <h1 className="font-display mt-4 text-4xl leading-[1.1] text-forest sm:text-5xl lg:text-[3.4rem]">
              Ancient Ayurveda,
              <br />
              <span className="text-gradient-gold">Bottled in Every Bar</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70">
              {site.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link href="/products" className="btn-primary">
                Shop the Collection
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi Vanaura Ayurveda! I'd like to know more about your soaps.")}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wide text-ink/50">
              <span>100% Vegetarian</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>Cruelty-Free</span>
              <span className="h-1 w-1 rounded-full bg-gold" />
              <span>No Harsh Chemicals</span>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <HeroIllustration className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* USP strip */}
      <section className="border-y border-forest/10 bg-cream-dark/60">
        <div className="container-custom grid grid-cols-2 gap-8 py-12 lg:grid-cols-4">
          {usps.map((usp, i) => (
            <Reveal key={usp.title} delay={i * 0.08} className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                <usp.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">{usp.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-ink/60">{usp.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Signature Bars"
            title="Six Rituals, Rooted in Ayurveda"
            description="Every bar is built around a classic Ayurvedic pairing — chosen for a specific skin need and cold-processed to keep its benefits intact."
          />

          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 3).map((product, i) => (
              <Reveal key={product.id} delay={i * 0.1} className="h-full">
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-12 flex justify-center">
            <Link href="/products" className="btn-outline">
              View All Soaps
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* About teaser */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-custom grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="grid grid-cols-2 gap-5">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="flex aspect-square items-center justify-center rounded-3xl"
                style={{ backgroundColor: product.theme.soft }}
              >
                <SoapIllustration theme={product.theme} className="h-24 w-24 sm:h-28 sm:w-28" />
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.15}>
            <span className="eyebrow text-gold-light">Our Philosophy</span>
            <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
              Rooted in a 5,000-Year-Old Science of Skin
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-cream/75">
              Vanaura began with a simple frustration — soaps promising &ldquo;natural&rdquo;
              while hiding sulphates and synthetic fragrance in fine print. We went back to
              Ayurvedic texts, worked with third-generation soap artisans, and built a
              small-batch process that keeps every herb and oil exactly as nature intended.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-cream/15 pt-8">
              <div>
                <p className="font-display text-2xl text-gold-light sm:text-3xl">10K+</p>
                <p className="mt-1 text-xs text-cream/60">Happy Customers</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-light sm:text-3xl">6</p>
                <p className="mt-1 text-xs text-cream/60">Signature Blends</p>
              </div>
              <div>
                <p className="font-display text-2xl text-gold-light sm:text-3xl">100%</p>
                <p className="mt-1 text-xs text-cream/60">Vegetarian &amp; Vegan</p>
              </div>
            </div>
            <Link href="/about" className="btn-gold mt-9">
              Read Our Story
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="From Farm to Bathroom Shelf"
            title="How Every Bar Is Made"
          />
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.1} className="relative">
                <span className="font-display text-5xl text-gold/30">{item.step}</span>
                <h3 className="font-display mt-3 text-lg text-forest">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">{item.description}</p>
                {i < process.length - 1 ? (
                  <span className="absolute right-[-1.25rem] top-6 hidden h-px w-8 bg-gold/40 lg:block" />
                ) : null}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-cream-dark/60">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Loved Across India"
            title="What Our Customers Say"
          />
          <div className="mt-14">
            <Testimonials />
          </div>
          <Reveal delay={0.2} className="mt-10 flex items-center justify-center gap-2 text-sm text-ink/60">
            <Users className="h-4 w-4 text-gold" />
            Join 10,000+ customers who switched to Ayurvedic skincare.
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Good to Know" title="Frequently Asked Questions" />
          <div className="mt-14">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>

      {/* CTA banner */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-custom">
          <Reveal className="flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-cream/10 bg-forest-light/40 px-8 py-12 text-center lg:flex-row lg:text-left">
            <div>
              <span className="eyebrow text-gold-light">
                <PackageCheck className="mr-2 inline h-3.5 w-3.5" />
                Free Shipping on Orders Above ₹699
              </span>
              <h2 className="font-display mt-4 text-3xl leading-tight sm:text-4xl">
                Ready to Begin Your Ayurveda Ritual?
              </h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/products" className="btn-gold">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi Vanaura Ayurveda! I'd like to place an order.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/30 px-8 py-[0.9rem] text-sm font-medium text-cream transition-colors hover:bg-cream/10"
              >
                <MessageCircle className="h-4 w-4" />
                Order on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
