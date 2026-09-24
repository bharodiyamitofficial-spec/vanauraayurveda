import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Handshake,
  Leaf,
  MessageCircle,
  Recycle,
  Sprout,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import SoapIllustration from "@/components/SoapIllustration";
import { products } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `Our Story | ${site.name}`,
  description:
    "Learn how Vanaura Ayurveda blends ancient Ayurvedic wisdom with small-batch, cold-process soap making.",
};

const values = [
  {
    icon: Leaf,
    title: "Radical Transparency",
    description: "Every ingredient is listed — no vague 'fragrance' or hidden fillers.",
  },
  {
    icon: Sprout,
    title: "Slow, Small Batches",
    description: "We cap batches at 50 bars so every one gets the curing time it deserves.",
  },
  {
    icon: Recycle,
    title: "Plastic-Free Always",
    description: "Compostable paper wraps and recycled shipping boxes, top to bottom.",
  },
  {
    icon: Handshake,
    title: "Fair to Farmers",
    description: "Herbs and oils sourced directly from small Indian farms at fair prices.",
  },
];

const promises = [
  "No Sulphates (SLS/SLES)",
  "No Parabens",
  "No Synthetic Dyes",
  "No Animal Testing",
  "No Synthetic Fragrance",
  "No Plastic Packaging",
];

const ingredientSpotlight = [
  { name: "Neem", benefit: "Antibacterial, calms acne-prone skin" },
  { name: "Turmeric", benefit: "Brightens and evens out skin tone" },
  { name: "Sandalwood", benefit: "Soothes and adds a natural glow" },
  { name: "Aloe Vera", benefit: "Hydrates and cools irritated skin" },
  { name: "Activated Charcoal", benefit: "Draws out deep-set impurities" },
  { name: "Rose Petal", benefit: "Tones and gently softens skin" },
  { name: "Lavender", benefit: "Calms the mind, relaxes the senses" },
  { name: "Kesar (Saffron)", benefit: "Traditional Ayurvedic glow booster" },
];

const timeline = [
  {
    step: "01",
    title: "Sourced from the Earth",
    description:
      "We work directly with small farms across India for neem, tulsi, turmeric and sandalwood — no middlemen, no compromise on quality.",
  },
  {
    step: "02",
    title: "Cold-Processed by Hand",
    description:
      "Oils are saponified slowly at low temperatures, a traditional method that keeps glycerin and nutrients intact instead of stripping them out.",
  },
  {
    step: "03",
    title: "Cured for Six Weeks",
    description:
      "Every bar rests on open racks for six weeks. This is what makes a Vanaura bar last longer and lather richer than mass-produced soap.",
  },
  {
    step: "04",
    title: "Hand-Wrapped & Shipped",
    description:
      "Bars are wrapped in compostable paper by our small team in Bengaluru and shipped in recycled cartons across India.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-forest/10">
        <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-gold-light/25 blur-3xl" />
        <div className="container-custom relative py-16 text-center lg:py-20">
          <Reveal className="mx-auto max-w-2xl">
            <span className="eyebrow">Our Story</span>
            <h1 className="font-display mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Where Ayurveda Meets Everyday Ritual
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Vanaura is a Sanskrit-inspired name meaning &ldquo;the fragrance of the forest.&rdquo;
              It&rsquo;s the closest we could get to describing what we set out to bottle.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
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

          <Reveal delay={0.1}>
            <span className="eyebrow">How It Started</span>
            <h2 className="font-display mt-4 text-3xl leading-tight text-forest sm:text-4xl">
              A Frustration With &ldquo;Natural&rdquo; Soap Aisles
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-ink/70">
              <p>
                Vanaura Ayurveda started in a small Bengaluru kitchen, born out of a simple
                frustration — soap aisles full of bars labelled &ldquo;natural&rdquo; and
                &ldquo;Ayurvedic&rdquo; that, on closer look, still listed sulphates, synthetic
                fragrance and parabens as their first ingredients.
              </p>
              <p>
                We went back to classical Ayurvedic texts and spent over a year working with
                third-generation cold-process soap artisans, testing herb ratios until each bar
                did what it promised — without a chemistry degree needed to read the label.
              </p>
              <p>
                Today, every Vanaura bar is still mixed, poured and wrapped by hand in small
                batches, the same way our very first bar was made.
              </p>
            </div>
            <Link href="/products" className="btn-primary mt-8">
              Shop Our Soaps
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-cream-dark/60">
        <div className="container-custom">
          <SectionHeading eyebrow="What We Stand For" title="Our Values" />
          <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.08}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <value.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-4 text-lg text-forest">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/60">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            eyebrow="Our Process"
            title="From Farm to Your Bathroom Shelf"
            description="Four unhurried steps stand between raw herbs and the bar that reaches your door."
          />

          <div className="relative mx-auto mt-16 max-w-2xl">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-forest/15" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.1}>
                  <div className="relative flex gap-6 pl-14">
                    <div className="absolute left-6 top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-gold bg-cream" />
                    <div>
                      <span className="font-display text-3xl text-gold/40">{item.step}</span>
                      <h3 className="font-display mt-1 text-xl text-forest">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ingredient spotlight */}
      <section className="section-padding bg-forest text-cream">
        <div className="container-custom">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow text-gold-light">Straight From Nature</span>
            <h2 className="font-display mt-3 text-3xl leading-tight sm:text-4xl">
              The Herbs Behind Every Bar
            </h2>
          </Reveal>

          <div className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {ingredientSpotlight.map((ingredient, i) => (
              <Reveal key={ingredient.name} delay={i * 0.05} className="text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream/10 text-gold-light">
                  <Leaf className="h-6 w-6" strokeWidth={1.5} />
                </span>
                <h3 className="font-display mt-3 text-base">{ingredient.name}</h3>
                <p className="mt-1 text-xs leading-relaxed text-cream/60">{ingredient.benefit}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Promise checklist */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading eyebrow="Our Promise" title="What You'll Never Find In a Vanaura Bar" />
          <Reveal delay={0.1} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3">
            {promises.map((promise) => (
              <div
                key={promise}
                className="flex items-center gap-2.5 rounded-2xl border border-forest/10 bg-white/50 px-4 py-3.5 text-sm text-ink/75"
              >
                <Award className="h-4 w-4 shrink-0 text-gold" />
                {promise}
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24">
        <div className="container-custom">
          <Reveal className="flex flex-col items-center justify-between gap-8 rounded-[2rem] bg-cream-dark px-8 py-12 text-center lg:flex-row lg:text-left">
            <div>
              <h2 className="font-display text-3xl leading-tight text-forest sm:text-4xl">
                Experience the Vanaura Ritual
              </h2>
              <p className="mt-3 max-w-md text-sm text-ink/65">
                Six bars, one philosophy — skin that&rsquo;s cared for the way nature intended.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/products" className="btn-primary">
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink("Hi Vanaura Ayurveda! I'd like to know more about your soaps.")}
                target="_blank"
                rel="noreferrer"
                className="btn-outline"
              >
                <MessageCircle className="h-4 w-4" />
                Chat With Us
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
