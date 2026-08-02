import Link from "next/link";
import { formatMYR, type Product, getCategory } from "@/lib/catalog";

/** A single product tile — used by the shop grid and the homepage. */
export default function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.category);
  const price = category ? formatMYR(category.priceUnstitched) : "";

  return (
    <Link href={`/shop/${product.slug}`} className="group block">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={`${product.name} — ${product.motif}`}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-ink/80 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View Details
        </span>
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate font-serif text-lg text-ink">{product.name}</h3>
          <p className="mt-1 truncate text-xs uppercase tracking-[0.12em] text-muted">
            {product.colour} · {product.motif}
          </p>
        </div>
        <span className="shrink-0 text-sm font-medium text-ink">{price}</span>
      </div>
    </Link>
  );
}
