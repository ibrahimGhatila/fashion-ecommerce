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
  logo: "/images/logo.png",
  fallback: "/images/hero.svg",
} as const;

export type Product = {
  name: string;
  motif: string;
  price: string;
  image: string;
  blurb: string;
};

const PRICE = "RM 250";

// Studio shots — the shop grid. Names reference traditional Javanese batik motifs.
export const PRODUCTS: Product[] = [
  {
    name: "Garnet Parang",
    motif: "Parang motif",
    price: PRICE,
    image: img(2),
    blurb:
      "The Parang is one of the oldest batik motifs — a diagonal blade pattern once reserved for royalty, symbolising strength and unbroken resolve.",
  },
  {
    name: "Crimson Kawung",
    motif: "Kawung motif",
    price: PRICE,
    image: img(3),
    blurb:
      "Kawung's intersecting circles represent purity and self-control — a quietly geometric print with deep symbolic roots.",
  },
  {
    name: "Rosewood Ceplok",
    motif: "Ceplok motif",
    price: PRICE,
    image: img(7),
    blurb:
      "Ceplok arranges rosettes and stars into perfect symmetry — order and balance, rendered by hand across the whole cloth.",
  },
  {
    name: "Midnight Sido Mukti",
    motif: "Sido Mukti motif",
    price: PRICE,
    image: img(9),
    blurb:
      "Sido Mukti translates to 'to become prosperous' — traditionally worn at ceremonies to carry wishes of happiness and fortune.",
  },
  {
    name: "Olive Sekar Jagad",
    motif: "Sekar Jagad motif",
    price: PRICE,
    image: img(11),
    blurb:
      "Sekar Jagad — 'flower of the universe' — is a patchwork of motifs celebrating the beauty and diversity of the world.",
  },
  {
    name: "Sapphire Truntum",
    motif: "Truntum motif",
    price: PRICE,
    image: img(13),
    blurb:
      "Truntum symbolises love that grows and never fades — a delicate scattering of blooms hand-drawn across indigo cloth.",
  },
];
