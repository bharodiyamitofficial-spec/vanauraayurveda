export type Concern = "Acne & Oily" | "Brightening" | "Hydrating & Sensitive";

export type Product = {
  id: string;
  slug: string;
  name: string;
  tag: string;
  concern: Concern;
  price: number;
  mrp: number;
  weight: string;
  skinType: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  theme: {
    base: string;
    band: string;
    swirl: string;
    soft: string;
  };
};

export const products: Product[] = [
  {
    id: "1",
    slug: "neem-tulsi-purifying-soap",
    name: "Neem & Tulsi Purifying Soap",
    tag: "Bestseller",
    concern: "Acne & Oily",
    price: 249,
    mrp: 299,
    weight: "100g",
    skinType: "Oily & Acne-Prone",
    description:
      "A clarifying blend of neem and tulsi that draws out impurities and calms troubled skin, leaving it clean without stripping moisture.",
    ingredients: ["Neem Extract", "Tulsi (Holy Basil)", "Cold-Pressed Coconut Oil", "Vitamin E"],
    benefits: ["Fights blemishes", "Purifies pores", "Soothes irritation"],
    theme: { base: "#e4efd6", band: "#5b7a4f", swirl: "#8fae72", soft: "#f1f6e9" },
  },
  {
    id: "2",
    slug: "sandalwood-saffron-glow-soap",
    name: "Sandalwood & Saffron Glow Soap",
    tag: "Luxury Pick",
    concern: "Brightening",
    price: 299,
    mrp: 349,
    weight: "100g",
    skinType: "Dry & Dull Skin",
    description:
      "A royal infusion of sandalwood and saffron, traditionally used to restore natural radiance and an even, luminous complexion.",
    ingredients: ["Sandalwood Oil", "Kesar (Saffron)", "Shea Butter", "Almond Oil"],
    benefits: ["Brightens complexion", "Deeply nourishes", "Evens skin tone"],
    theme: { base: "#f3e2bf", band: "#bf9b30", swirl: "#e0c266", soft: "#faf1de" },
  },
  {
    id: "3",
    slug: "turmeric-honey-brightening-soap",
    name: "Turmeric & Honey Brightening Soap",
    tag: "Everyday Glow",
    concern: "Brightening",
    price: 229,
    mrp: 269,
    weight: "100g",
    skinType: "All Skin Types",
    description:
      "Golden turmeric and raw honey team up in this everyday bar to brighten skin, calm redness and lock in moisture.",
    ingredients: ["Turmeric (Haldi)", "Raw Honey", "Milk Cream", "Olive Oil"],
    benefits: ["Brightens skin", "Anti-inflammatory", "Deep hydration"],
    theme: { base: "#f6dfa8", band: "#c97f2b", swirl: "#e8a94a", soft: "#fbeed0" },
  },
  {
    id: "4",
    slug: "charcoal-tea-tree-detox-soap",
    name: "Charcoal & Tea Tree Detox Soap",
    tag: "Deep Cleanse",
    concern: "Acne & Oily",
    price: 279,
    mrp: 329,
    weight: "100g",
    skinType: "Oily & Combination",
    description:
      "Activated charcoal pulls out pollution, sweat and excess oil while tea tree keeps breakouts in check — a deep reset for city skin.",
    ingredients: ["Activated Charcoal", "Tea Tree Oil", "Neem Oil", "Aloe Vera"],
    benefits: ["Draws out toxins", "Controls excess oil", "Minimises pores"],
    theme: { base: "#d8dcdb", band: "#2a2420", swirl: "#5b7a4f", soft: "#eceeed" },
  },
  {
    id: "5",
    slug: "rose-aloe-vera-hydrating-soap",
    name: "Rose & Aloe Vera Hydrating Soap",
    tag: "Gentle Care",
    concern: "Hydrating & Sensitive",
    price: 249,
    mrp: 289,
    weight: "100g",
    skinType: "Dry & Sensitive",
    description:
      "Fresh aloe vera and real rose petals soothe, hydrate and calm reactive skin — gentle enough for daily rituals.",
    ingredients: ["Rose Petal Extract", "Aloe Vera Gel", "Cocoa Butter", "Glycerine"],
    benefits: ["Soothes sensitivity", "Locks in moisture", "Softens skin"],
    theme: { base: "#f3d9d9", band: "#b5613f", swirl: "#e0a3a3", soft: "#fbeeee" },
  },
  {
    id: "6",
    slug: "lavender-oatmeal-soothing-soap",
    name: "Lavender & Oatmeal Soothing Soap",
    tag: "Calming Ritual",
    concern: "Hydrating & Sensitive",
    price: 259,
    mrp: 299,
    weight: "100g",
    skinType: "Sensitive & Stressed Skin",
    description:
      "A gentle oatmeal exfoliant meets calming lavender oil for a slow, spa-like unwind at the end of a long day.",
    ingredients: ["Lavender Essential Oil", "Colloidal Oatmeal", "Shea Butter", "Chamomile"],
    benefits: ["Gently exfoliates", "Calms the senses", "Restores softness"],
    theme: { base: "#e3dcf0", band: "#7a6aa8", swirl: "#b7a9d9", soft: "#f2eef9" },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}
