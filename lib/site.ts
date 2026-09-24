// Central place for brand/contact details used across the site.
// Replace the placeholder values below with Vanaura Ayurveda's real details.
export const site = {
  name: "Vanaura Ayurveda",
  shortName: "Vanaura",
  tagline: "Ancient Ayurveda, Modern Bath Rituals",
  description:
    "Handcrafted Ayurvedic soaps made with cold-pressed oils, temple-grade herbs and zero harsh chemicals — for skin that remembers what nature feels like.",
  phoneDisplay: "+91 98765 43210",
  phoneHref: "+919876543210",
  whatsappNumber: "919876543210",
  email: "hello@vanauraayurveda.com",
  address: {
    line1: "12, Green Leaf Lane, Indiranagar",
    line2: "Bengaluru, Karnataka 560038, India",
  },
  hours: "Mon – Sat, 10:00 AM – 7:00 PM",
  socials: {
    instagram: "https://instagram.com/vanaura.ayurveda",
    facebook: "https://facebook.com/vanauraayurveda",
    youtube: "https://youtube.com/@vanauraayurveda",
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
