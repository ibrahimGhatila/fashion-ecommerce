/**
 * Central image config.
 *
 * `web` = a placeholder photo from the web (shown on the live site).
 * `local` = a self-contained SVG fallback (shown if the web URL ever fails).
 *
 * To use the brand's real photography later, just replace the `web` values
 * (or drop files into /public/images and point these at them).
 */
const u = (id: string, w = 800, h = 1000) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&h=${h}&q=80`;

export const IMAGES = {
  hero: { web: u("1483985988355-763728e1935b", 900, 1120), local: "/images/hero.svg" },
  winterCoat: { web: u("1539533018447-63fcce2678e3"), local: "/images/winter-coat.svg" },
  autumnDress: { web: u("1595777457583-95e059d581b8"), local: "/images/autumn-dress.svg" },
  casualTshirt: { web: u("1521572163474-6864f9cf17ab"), local: "/images/casual-tshirt.svg" },
  casualStyle: { web: u("1516257984-b1b4d707412e", 700, 900), local: "/images/casual-style.svg" },
  springDating: { web: u("1487222477894-8943e31ef7b2", 500, 500), local: "/images/spring-dating.svg" },
  outfit: { web: u("1529139574466-a303027c1d8b", 700, 800), local: "/images/outfit.svg" },
} as const;
