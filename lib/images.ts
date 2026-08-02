/**
 * Editorial imagery — hero, heritage and journal sections.
 *
 * These are the styled lifestyle shots (shirt-01..14). Everything that is
 * actually *sold* lives in lib/catalog.ts.
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
