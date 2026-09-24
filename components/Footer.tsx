import Link from "next/link";
import { Leaf, Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";
import NewsletterForm from "@/components/NewsletterForm";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "@/components/SocialIcons";

const shopLinks = [
  { href: "/products", label: "All Soaps" },
  { href: "/about", label: "Our Ingredients" },
  { href: "/about", label: "Our Process" },
  { href: "/contact", label: "Bulk & Gifting" },
];

const companyLinks = [
  { href: "/about", label: "Our Story" },
  { href: "/products", label: "Shop" },
  { href: "/contact", label: "Contact Us" },
  { href: "/contact", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="leaf-texture bg-forest text-cream">
      <div className="container-custom relative grid gap-12 py-16 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] lg:py-20">
        <div>
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold text-forest">
              <Leaf className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="font-display text-xl leading-none text-cream">
              {site.name}
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            {site.description}
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href={site.socials.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <FacebookIcon className="h-4 w-4" />
            </a>
            <a
              href={site.socials.youtube}
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/80 transition-colors hover:border-gold hover:text-gold"
            >
              <YoutubeIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Shop</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {shopLinks.map((link, i) => (
              <li key={`${link.href}-${i}`}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Company</h3>
          <ul className="mt-5 space-y-3 text-sm text-cream/70">
            {companyLinks.map((link, i) => (
              <li key={`${link.href}-${i}`}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold-light">Stay in the loop</h3>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Ritual tips, new launches and festive offers — a couple of emails a month, never more.
          </p>
          <div className="mt-4">
            <NewsletterForm />
          </div>

          <ul className="mt-7 space-y-3 text-sm text-cream/70">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-light" />
              <span>
                {site.address.line1}
                <br />
                {site.address.line2}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`tel:${site.phoneHref}`}>{site.phoneDisplay}</a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-gold-light" />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-custom flex flex-col items-center justify-between gap-3 py-6 text-xs text-cream/55 sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Handcrafted with Ayurveda, for skin that deserves better.</p>
        </div>
      </div>
    </footer>
  );
}
