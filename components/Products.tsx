import Link from "next/link";
import ProductCard from "./ProductCard";
import { CATEGORIES, PRODUCTS, formatMYR } from "@/lib/catalog";

/** Homepage teaser — a curated handful, with the full range one click away. */
const FEATURED = 8;

export default function Products() {
  const category = CATEGORIES[0];
  const featured = PRODUCTS.slice(0, FEATURED);

  return (
    <section id="collection" className="bg-cream-light py-24">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{category.name}</p>
          <h2 className="mt-4 font-serif text-4xl text-ink">Batik Shirts</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {category.tagline} From {formatMYR(category.priceUnstitched)}.
          </p>
        </div>

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Link href="/shop" className="btn-primary">
            View all {PRODUCTS.length} designs
          </Link>
        </div>
      </div>
    </section>
  );
}
