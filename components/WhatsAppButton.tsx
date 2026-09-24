"use client";

import { motion } from "framer-motion";
import { whatsappLink } from "@/lib/site";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Hi Vanaura Ayurveda! I'd like to know more about your soaps.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.4, ease: "backOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="#ffffff" aria-hidden="true">
        <path d="M16.02 3C9.4 3 4 8.38 4 15c0 2.31.64 4.47 1.76 6.32L4 29l7.86-1.7A11.9 11.9 0 0 0 16.02 27C22.65 27 28 21.62 28 15S22.65 3 16.02 3Zm0 21.8c-1.94 0-3.75-.54-5.3-1.47l-.38-.22-4.66 1 1.02-4.53-.25-.4A9.7 9.7 0 0 1 5.9 15c0-5.6 4.56-10.14 10.12-10.14S26.14 9.4 26.14 15 20.58 24.8 16.02 24.8Zm5.55-7.44c-.3-.15-1.79-.88-2.07-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.08-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.25 5.16 4.56.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.79-.73 2.04-1.44.25-.7.25-1.31.18-1.44-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </motion.a>
  );
}
