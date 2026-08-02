/**
 * Product catalogue — the single source of truth for everything sold.
 *
 * To add a product: drop its photo in /public/images/products and append a
 * row to PRODUCTS with a unique `slug`. Everything else — the shop grid,
 * filters, product pages and WhatsApp ordering — picks it up automatically.
 *
 * To add a category: append to CATEGORIES and tag products with its id.
 */

export type Category = {
  id: string;
  name: string;
  tagline: string;
  /** Price in MYR for the uncut fabric (no size). */
  priceUnstitched: number;
  /** Price in MYR for a made-to-size shirt. */
  priceStitched: number;
  sizes: string[];
};

export type Product = {
  slug: string;
  name: string;
  category: string;
  /** Specific shade, shown on the product page. */
  colour: string;
  /** Broad colour group, used by the shop filter. */
  family: string;
  motif: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    id: "batik-pawang",
    name: "Batik Pawang",
    tagline:
      "Our signature range — bold, hand-drawn batik on premium cotton, available as uncut fabric or stitched to your size.",
    priceUnstitched: 250,
    priceStitched: 250,
    sizes: ["S", "M", "L", "XL"],
  },
];

/** Colour families available as shop filters. */
export const FAMILIES = ["Black & White","Blue","Earth","Green","Multi","Pink & Purple","Red"];

export const PRODUCTS: Product[] = [
  {
    "slug": "rimba-emas",
    "name": "Rimba Emas",
    "colour": "Olive",
    "family": "Green",
    "motif": "Scaled leaf motif",
    "image": "/images/products/rimba-emas.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "ombak-biru",
    "name": "Ombak Biru",
    "colour": "Blue",
    "family": "Blue",
    "motif": "Spiral wave motif",
    "image": "/images/products/ombak-biru.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "senja-nila",
    "name": "Senja Nila",
    "colour": "Navy",
    "family": "Blue",
    "motif": "Swirled dusk motif",
    "image": "/images/products/senja-nila.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "pasir-fajar",
    "name": "Pasir Fajar",
    "colour": "Neutral",
    "family": "Earth",
    "motif": "Patchwork motif",
    "image": "/images/products/pasir-fajar.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "warna-warni",
    "name": "Warna Warni",
    "colour": "Multi",
    "family": "Multi",
    "motif": "Grid patchwork motif",
    "image": "/images/products/warna-warni.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "bunga-raya",
    "name": "Bunga Raya",
    "colour": "Pink",
    "family": "Pink & Purple",
    "motif": "Zigzag bloom motif",
    "image": "/images/products/bunga-raya.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "kunyit-emas",
    "name": "Kunyit Emas",
    "colour": "Yellow",
    "family": "Earth",
    "motif": "Geometric patchwork motif",
    "image": "/images/products/kunyit-emas.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "hitam-putih",
    "name": "Hitam Putih",
    "colour": "Monochrome",
    "family": "Black & White",
    "motif": "Monochrome patch motif",
    "image": "/images/products/hitam-putih.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "nyala-senja",
    "name": "Nyala Senja",
    "colour": "Red",
    "family": "Red",
    "motif": "Swirled ember motif",
    "image": "/images/products/nyala-senja.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "pulau-pirus",
    "name": "Pulau Pirus",
    "colour": "Teal",
    "family": "Blue",
    "motif": "Abstract island motif",
    "image": "/images/products/pulau-pirus.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "malam-biru",
    "name": "Malam Biru",
    "colour": "Navy",
    "family": "Blue",
    "motif": "Paisley swirl motif",
    "image": "/images/products/malam-biru.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "kayu-tua",
    "name": "Kayu Tua",
    "colour": "Brown",
    "family": "Earth",
    "motif": "Aged paisley motif",
    "image": "/images/products/kayu-tua.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "tanah-merah",
    "name": "Tanah Merah",
    "colour": "Maroon",
    "family": "Red",
    "motif": "Earth patchwork motif",
    "image": "/images/products/tanah-merah.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "emas-malam",
    "name": "Emas Malam",
    "colour": "Black",
    "family": "Black & White",
    "motif": "Gilded night motif",
    "image": "/images/products/emas-malam.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "pasir-bakau",
    "name": "Pasir Bakau",
    "colour": "Tan",
    "family": "Earth",
    "motif": "Banded sand motif",
    "image": "/images/products/pasir-bakau.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "bintang-malam",
    "name": "Bintang Malam",
    "colour": "Monochrome",
    "family": "Black & White",
    "motif": "Scattered star motif",
    "image": "/images/products/bintang-malam.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "merah-delima",
    "name": "Merah Delima",
    "colour": "Red",
    "family": "Red",
    "motif": "Ruby patchwork motif",
    "image": "/images/products/merah-delima.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "karat-hutan",
    "name": "Karat Hutan",
    "colour": "Rust",
    "family": "Red",
    "motif": "Forest geometric motif",
    "image": "/images/products/karat-hutan.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "pawang-merah-jambu",
    "name": "Pawang Merah Jambu",
    "colour": "Pink",
    "family": "Pink & Purple",
    "motif": "Signature Pawang motif",
    "image": "/images/products/pawang-merah-jambu.png",
    "category": "batik-pawang"
  },
  {
    "slug": "kencana-pirus",
    "name": "Kencana Pirus",
    "colour": "Teal",
    "family": "Blue",
    "motif": "Kencana wave motif",
    "image": "/images/products/kencana-pirus.png",
    "category": "batik-pawang"
  },
  {
    "slug": "zamrud-tropika",
    "name": "Zamrud Tropika",
    "colour": "Green",
    "family": "Green",
    "motif": "Tropical emerald motif",
    "image": "/images/products/zamrud-tropika.png",
    "category": "batik-pawang"
  },
  {
    "slug": "delima-biru",
    "name": "Delima Biru",
    "colour": "Maroon",
    "family": "Red",
    "motif": "Fanned lattice motif",
    "image": "/images/products/delima-biru.png",
    "category": "batik-pawang"
  },
  {
    "slug": "sulaman-emas",
    "name": "Sulaman Emas",
    "colour": "Maroon",
    "family": "Red",
    "motif": "Gold embroidery motif",
    "image": "/images/products/sulaman-emas.png",
    "category": "batik-pawang"
  },
  {
    "slug": "karang-merah",
    "name": "Karang Merah",
    "colour": "Red",
    "family": "Red",
    "motif": "Coral branch motif",
    "image": "/images/products/karang-merah.png",
    "category": "batik-pawang"
  },
  {
    "slug": "rumbia-malam",
    "name": "Rumbia Malam",
    "colour": "Teal",
    "family": "Blue",
    "motif": "Midnight frond motif",
    "image": "/images/products/rumbia-malam.png",
    "category": "batik-pawang"
  },
  {
    "slug": "cengkih-coklat",
    "name": "Cengkih Coklat",
    "colour": "Brown",
    "family": "Earth",
    "motif": "Clove blossom motif",
    "image": "/images/products/cengkih-coklat.png",
    "category": "batik-pawang"
  },
  {
    "slug": "pelangi-laut",
    "name": "Pelangi Laut",
    "colour": "Blue",
    "family": "Blue",
    "motif": "Sea rainbow motif",
    "image": "/images/products/pelangi-laut.png",
    "category": "batik-pawang"
  },
  {
    "slug": "nyala-jingga",
    "name": "Nyala Jingga",
    "colour": "Orange",
    "family": "Red",
    "motif": "Blazing lattice motif",
    "image": "/images/products/nyala-jingga.png",
    "category": "batik-pawang"
  },
  {
    "slug": "nila-bintang",
    "name": "Nila Bintang",
    "colour": "Navy",
    "family": "Blue",
    "motif": "Indigo star motif",
    "image": "/images/products/nila-bintang.png",
    "category": "batik-pawang"
  },
  {
    "slug": "hutan-pirus",
    "name": "Hutan Pirus",
    "colour": "Teal",
    "family": "Blue",
    "motif": "Forest patch motif",
    "image": "/images/products/hutan-pirus.png",
    "category": "batik-pawang"
  },
  {
    "slug": "hijau-padi",
    "name": "Hijau Padi",
    "colour": "Green",
    "family": "Green",
    "motif": "Paddy field motif",
    "image": "/images/products/hijau-padi.png",
    "category": "batik-pawang"
  },
  {
    "slug": "merah-api",
    "name": "Merah Api",
    "colour": "Red",
    "family": "Red",
    "motif": "Flame texture motif",
    "image": "/images/products/merah-api.png",
    "category": "batik-pawang"
  },
  {
    "slug": "mawar-debu",
    "name": "Mawar Debu",
    "colour": "Pink",
    "family": "Pink & Purple",
    "motif": "Dusty rose motif",
    "image": "/images/products/mawar-debu.png",
    "category": "batik-pawang"
  },
  {
    "slug": "malam-neon",
    "name": "Malam Neon",
    "colour": "Multi",
    "family": "Multi",
    "motif": "Neon grid motif",
    "image": "/images/products/malam-neon.png",
    "category": "batik-pawang"
  },
  {
    "slug": "tembaga",
    "name": "Tembaga",
    "colour": "Brown",
    "family": "Earth",
    "motif": "Copper swirl motif",
    "image": "/images/products/tembaga.png",
    "category": "batik-pawang"
  },
  {
    "slug": "awan-putih",
    "name": "Awan Putih",
    "colour": "White",
    "family": "Black & White",
    "motif": "Cloud sprig motif",
    "image": "/images/products/awan-putih.png",
    "category": "batik-pawang"
  },
  {
    "slug": "orkid-merah",
    "name": "Orkid Merah",
    "colour": "Pink",
    "family": "Pink & Purple",
    "motif": "Orchid paisley motif",
    "image": "/images/products/orkid-merah.png",
    "category": "batik-pawang"
  },
  {
    "slug": "senja-gelap",
    "name": "Senja Gelap",
    "colour": "Maroon",
    "family": "Red",
    "motif": "Dark dusk motif",
    "image": "/images/products/senja-gelap.png",
    "category": "batik-pawang"
  },
  {
    "slug": "biru-istana",
    "name": "Biru Istana",
    "colour": "Navy",
    "family": "Blue",
    "motif": "Palace patchwork motif",
    "image": "/images/products/biru-istana.png",
    "category": "batik-pawang"
  },
  {
    "slug": "rantai-emas",
    "name": "Rantai Emas",
    "colour": "Maroon",
    "family": "Red",
    "motif": "Gold chain motif",
    "image": "/images/products/rantai-emas.png",
    "category": "batik-pawang"
  },
  {
    "slug": "mandala-ungu",
    "name": "Mandala Ungu",
    "colour": "Purple",
    "family": "Pink & Purple",
    "motif": "Mandala burst motif",
    "image": "/images/products/mandala-ungu.png",
    "category": "batik-pawang"
  },
  {
    "slug": "panel-biru",
    "name": "Panel Biru",
    "colour": "Navy",
    "family": "Blue",
    "motif": "Panelled indigo motif",
    "image": "/images/products/panel-biru.png",
    "category": "batik-pawang"
  },
  {
    "slug": "ungu-malam",
    "name": "Ungu Malam",
    "colour": "Purple",
    "family": "Pink & Purple",
    "motif": "Diagonal dusk motif",
    "image": "/images/products/ungu-malam.png",
    "category": "batik-pawang"
  },
  {
    "slug": "gelombang-biru",
    "name": "Gelombang Biru",
    "colour": "Blue",
    "family": "Blue",
    "motif": "Rolling wave motif",
    "image": "/images/products/gelombang-biru.png",
    "category": "batik-pawang"
  },
  {
    "slug": "api-tropika",
    "name": "Api Tropika",
    "colour": "Red",
    "family": "Red",
    "motif": "Tropical flame motif",
    "image": "/images/products/api-tropika.png",
    "category": "batik-pawang"
  },
  {
    "slug": "bulatan-merah",
    "name": "Bulatan Merah",
    "colour": "Red",
    "family": "Red",
    "motif": "Circular bloom motif",
    "image": "/images/products/bulatan-merah.png",
    "category": "batik-pawang"
  },
  {
    "slug": "batu-kelabu",
    "name": "Batu Kelabu",
    "colour": "Grey",
    "family": "Black & White",
    "motif": "Stone geometric motif",
    "image": "/images/products/batu-kelabu.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "emas-pasir",
    "name": "Emas Pasir",
    "colour": "Tan",
    "family": "Earth",
    "motif": "Golden sand motif",
    "image": "/images/products/emas-pasir.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "kelabu-ungu",
    "name": "Kelabu Ungu",
    "colour": "Grey",
    "family": "Black & White",
    "motif": "Ash patchwork motif",
    "image": "/images/products/kelabu-ungu.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "senja-tembaga",
    "name": "Senja Tembaga",
    "colour": "Brown",
    "family": "Earth",
    "motif": "Copper dusk motif",
    "image": "/images/products/senja-tembaga.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "indigo-petak",
    "name": "Indigo Petak",
    "colour": "Blue",
    "family": "Blue",
    "motif": "Indigo tile motif",
    "image": "/images/products/indigo-petak.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "kelabu-biru",
    "name": "Kelabu Biru",
    "colour": "Grey",
    "family": "Black & White",
    "motif": "Mixed patch motif",
    "image": "/images/products/kelabu-biru.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "coklat-diraja",
    "name": "Coklat Diraja",
    "colour": "Brown",
    "family": "Earth",
    "motif": "Royal brown motif",
    "image": "/images/products/coklat-diraja.jpg",
    "category": "batik-pawang"
  },
  {
    "slug": "biru-tanah",
    "name": "Biru Tanah",
    "colour": "Blue",
    "family": "Blue",
    "motif": "Earth and sky motif",
    "image": "/images/products/biru-tanah.jpg",
    "category": "batik-pawang"
  }
];

/** MYR currency formatter — "RM 250". */
export function formatMYR(amount: number) {
  return `RM ${amount.toLocaleString("en-MY")}`;
}

export function getCategory(id: string) {
  return CATEGORIES.find((c) => c.id === id);
}

export function getProduct(slug: string) {
  return PRODUCTS.find((p) => p.slug === slug);
}

/** Colour families that actually appear in a category. */
export function familiesFor(categoryId?: string) {
  const pool = categoryId
    ? PRODUCTS.filter((p) => p.category === categoryId)
    : PRODUCTS;
  return [...new Set(pool.map((p) => p.family))].sort();
}

export function productsIn(categoryId: string) {
  return PRODUCTS.filter((p) => p.category === categoryId);
}
