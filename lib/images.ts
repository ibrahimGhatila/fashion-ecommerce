/**
 * Central image config.
 *
 * `web`   = the primary image shown on the site (now the brand's own photos,
 *           committed under /public/images — no external dependency).
 * `local` = an SVG fallback, only shown if the primary ever fails to load.
 *
 * All product photography is 900x1600 (9:16 portrait). Components render it
 * with object-contain so the full garment always fits inside its frame.
 *
 * 14 shirts are available (shirt-01..14). The unused ones are ready to drop
 * into a "See All Products" grid later.
 */
export const IMAGES = {
  hero: { web: "/images/shirt-01.png", local: "/images/hero.svg" },
  winterCoat: { web: "/images/shirt-02.png", local: "/images/winter-coat.svg" },
  autumnDress: { web: "/images/shirt-11.png", local: "/images/autumn-dress.svg" },
  casualTshirt: { web: "/images/shirt-13.png", local: "/images/casual-tshirt.svg" },
  casualStyle: { web: "/images/shirt-08.png", local: "/images/casual-style.svg" },
  springDating: { web: "/images/shirt-07.png", local: "/images/spring-dating.svg" },
  outfit: { web: "/images/shirt-06.png", local: "/images/outfit.svg" },
} as const;
