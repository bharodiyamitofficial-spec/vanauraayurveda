"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Leaf, Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 shadow-[0_8px_30px_-20px_rgba(31,58,46,0.4)] backdrop-blur"
          : "bg-cream/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-custom flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-forest text-cream">
            <Leaf className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <span className="font-display text-xl leading-none text-forest">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium tracking-wide transition-colors ${
                  active ? "text-forest" : "text-ink/70 hover:text-forest"
                }`}
              >
                {link.label}
                {active ? (
                  <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-gold" />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={`tel:${site.phoneHref}`}
            className="flex items-center gap-2 text-sm font-medium text-ink/70 hover:text-forest"
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phoneDisplay}
          </a>
          <Link href="/products" className="btn-primary">
            Shop Now
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest/15 text-forest md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-forest/10 bg-cream md:hidden"
          >
            <div className="container-custom flex flex-col gap-1 py-4">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-3 py-3 text-base font-medium ${
                      active ? "bg-forest/5 text-forest" : "text-ink/75"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 px-3 py-3 text-base font-medium text-ink/75"
              >
                <Phone className="h-4 w-4" strokeWidth={1.75} />
                {site.phoneDisplay}
              </a>
              <Link href="/products" onClick={() => setOpen(false)} className="btn-primary mx-3 mt-2">
                Shop Now
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
