import { Star } from "lucide-react";
import Reveal from "@/components/Reveal";

const testimonials = [
  {
    name: "Ananya R.",
    location: "Bengaluru",
    initials: "AR",
    color: "#5b7a4f",
    quote:
      "My skin has never felt this calm. The Neem & Tulsi bar cleared up my breakouts in two weeks without any dryness.",
    product: "Neem & Tulsi Purifying Soap",
  },
  {
    name: "Kavya M.",
    location: "Hyderabad",
    initials: "KM",
    color: "#bf9b30",
    quote:
      "The Sandalwood & Saffron soap smells like a temple visit and feels like silk. Worth every rupee, this is luxury done right.",
    product: "Sandalwood & Saffron Glow Soap",
  },
  {
    name: "Rohan D.",
    location: "Pune",
    initials: "RD",
    color: "#b5613f",
    quote:
      "Finally a soap brand that lists real ingredients and means it. The charcoal bar keeps my skin matte all day at work.",
    product: "Charcoal & Tea Tree Detox Soap",
  },
  {
    name: "Meera S.",
    location: "Mumbai",
    initials: "MS",
    color: "#7a6aa8",
    quote:
      "Gifted the lavender soap set to my mother — she now reorders it every month. Packaging is beautiful too.",
    product: "Lavender & Oatmeal Soothing Soap",
  },
];

export default function Testimonials() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {testimonials.map((t, i) => (
        <Reveal key={t.name} delay={i * 0.08} className="h-full">
          <div className="card-surface flex h-full flex-col rounded-2xl p-6">
            <div className="flex gap-0.5 text-gold">
              {Array.from({ length: 5 }).map((_, idx) => (
                <Star key={idx} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/75">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-4">
              <span
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-cream"
                style={{ backgroundColor: t.color }}
              >
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-semibold text-forest">{t.name}</p>
                <p className="text-xs text-ink/50">{t.location}</p>
              </div>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
