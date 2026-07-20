/**
 * Image + product config.
 *
 * All photography is the brand's own, committed under /public/images
 * (shirt-01..14, 900x1600 / 9:16). No external image dependency.
 *
 * Each shirt is a single, one-of-one product. The clean studio shots power
 * the shop grid; the styled interior shots power the hero, heritage and
 * journal sections.
 */

const img = (n: number) => `/images/shirt-${String(n).padStart(2, "0")}.png`;

export const IMAGES = {
  hero: img(1), // green geometric, styled
  heritageA: img(5), // teal patchwork, styled
  heritageB: img(14), // brown, styled
  journalA: img(8), // lime, styled
  journalB: img(4), // pink floral, styled
  journalC: img(10), // green tropical, styled
  fallback: "/images/hero.svg",
} as const;

export type Product = {
  name: string;
  motif: string;
  price: string;
  image: string;
};

// Studio shots — the shop grid. Names reference traditional Javanese batik motifs.
export const PRODUCTS: Product[] = [
  { name: "Garnet Parang", motif: "Parang motif", price: "$139", image: img(2) },
  { name: "Crimson Kawung", motif: "Kawung motif", price: "$139", image: img(3) },
  { name: "Rosewood Ceplok", motif: "Ceplok motif", price: "$129", image: img(7) },
  { name: "Midnight Sido Mukti", motif: "Sido Mukti motif", price: "$149", image: img(9) },
  { name: "Olive Sekar Jagad", motif: "Sekar Jagad motif", price: "$145", image: img(11) },
  { name: "Sapphire Truntum", motif: "Truntum motif", price: "$135", image: img(13) },
];
