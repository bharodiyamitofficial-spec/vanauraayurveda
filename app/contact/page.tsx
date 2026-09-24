import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ";
import { site, whatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: `Contact Us | ${site.name}`,
  description:
    "Get in touch with Vanaura Ayurveda for orders, bulk enquiries, gifting or partnerships.",
};

const infoCards = [
  {
    icon: MapPin,
    title: "Visit Our Studio",
    lines: [site.address.line1, site.address.line2],
  },
  {
    icon: Phone,
    title: "Call or WhatsApp",
    lines: [site.phoneDisplay, "Quick replies on WhatsApp"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [site.email, "We reply within 24 hours"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    lines: [site.hours, "Closed on Sundays"],
  },
];

const contactFaq = [
  {
    question: "Do you offer bulk or wholesale pricing?",
    answer:
      "Yes — we work with spas, boutique stores and corporate gifting teams across India. Share your requirement over WhatsApp or the form above and we'll send a wholesale price list.",
  },
  {
    question: "Can I customise a gift box?",
    answer:
      "Absolutely. Pick any 3, 6 or 9 bars and we'll pack them in kraft gift boxes with a handwritten note — perfect for weddings, festivals and corporate gifting.",
  },
  {
    question: "I run a store — can I stock Vanaura soaps?",
    answer:
      "We're always looking for retail and spa partners who share our values. Reach out via the Partnership subject in the form and our team will get back within 2 business days.",
  },
];

const mapQuery = encodeURIComponent(`${site.name}, ${site.address.line1}, ${site.address.line2}`);

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-forest/10">
        <div className="pointer-events-none absolute -left-20 -top-16 h-64 w-64 rounded-full bg-sage-light/30 blur-3xl" />
        <div className="container-custom relative py-16 text-center lg:py-20">
          <Reveal className="mx-auto max-w-2xl">
            <span className="eyebrow">We&rsquo;d Love to Hear From You</span>
            <h1 className="font-display mt-4 text-4xl leading-tight text-forest sm:text-5xl">
              Get in Touch
            </h1>
            <p className="mt-5 text-base leading-relaxed text-ink/70">
              Questions about ingredients, bulk orders, or just want to say hello? Reach out —
              a real person replies to every message.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {infoCards.map((card, i) => (
              <Reveal key={card.title} delay={i * 0.06}>
                <div className="card-surface h-full rounded-2xl p-6">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <card.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="font-display mt-4 text-base text-forest">{card.title}</h3>
                  {card.lines.map((line) => (
                    <p key={line} className="mt-1 text-sm leading-relaxed text-ink/60">
                      {line}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
            <Reveal>
              <h2 className="font-display text-2xl text-forest sm:text-3xl">Send Us a Message</h2>
              <p className="mt-2 text-sm text-ink/60">
                Fill the form and we&rsquo;ll get back within 24 hours on business days.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </Reveal>

            <Reveal delay={0.1} className="flex flex-col gap-6">
              <div className="card-surface flex flex-1 flex-col justify-between rounded-3xl bg-forest p-8 text-cream">
                <div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366]">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </span>
                  <h3 className="font-display mt-5 text-xl">Prefer to Chat?</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/70">
                    Skip the form — message us directly on WhatsApp for the fastest response on
                    orders and quick questions.
                  </p>
                </div>
                <a
                  href={whatsappLink("Hi Vanaura Ayurveda! I have a question.")}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-gold mt-6 w-full"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>

              <div className="card-surface overflow-hidden rounded-3xl">
                <div className="flex aspect-[4/3] flex-col items-center justify-center gap-3 bg-cream-dark text-center">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <div className="px-6">
                    <p className="text-sm font-semibold text-forest">{site.name} Studio</p>
                    <p className="mt-1 text-xs leading-relaxed text-ink/60">
                      {site.address.line1}, {site.address.line2}
                    </p>
                  </div>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 flex items-center gap-1.5 text-xs font-semibold text-forest underline underline-offset-4"
                  >
                    <Navigation className="h-3.5 w-3.5" />
                    Get Directions
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark/60">
        <div className="container-custom">
          <Reveal className="mx-auto max-w-xl text-center">
            <span className="eyebrow">Still Curious</span>
            <h2 className="font-display mt-3 text-3xl text-forest">Common Questions</h2>
          </Reveal>
          <div className="mt-12">
            <FAQ items={contactFaq} />
          </div>
        </div>
      </section>
    </>
  );
}
