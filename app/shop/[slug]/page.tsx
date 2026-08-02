import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ProductOrder from "@/components/ProductOrder";
import { PRODUCTS, formatMYR, getCategory, getProduct } from "@/lib/catalog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Not found — CWSK Enterprises" };
  const category = getCategory(product.category);
  return {
    title: `${product.name} — ${category?.name ?? "Batik"} | CWSK Enterprises`,
    description: `${product.name}: ${product.motif} in ${product.colour}. Available unstitched or stitched to size from ${
      category ? formatMYR(category.priceUnstitched) : "RM 250"
    }.`,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  if (!category) notFound();

  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 4);

  return (
    <main>
      <Navbar />

      <section className="bg-white py-10">
        <div className="container-lux">
          {/* Breadcrumb */}
          <nav className="text-xs uppercase tracking-[0.15em] text-muted">
            <Link href="/" className="transition-colors hover:text-ink">
              Home
            </Link>
            <span className="px-2">/</span>
            <Link href="/shop" className="transition-colors hover:text-ink">
              {category.name}
            </Link>
            <span className="px-2">/</span>
            <span className="text-ink">{product.name}</span>
          </nav>

          <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="overflow-hidden rounded-sm bg-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={product.image}
                alt={`${product.name} — ${product.motif}`}
                className="h-full max-h-[720px] w-full object-cover object-top"
              />
            </div>

            {/* Details */}
            <div className="lg:py-4">
              <p className="eyebrow">{category.name}</p>
              <h1 className="mt-3 font-serif text-4xl text-ink">{product.name}</h1>
              <p className="mt-2 text-sm text-muted">{product.motif}</p>

              <ProductOrder product={product} category={category} />

              <dl className="mt-10 space-y-3 border-t border-ink/10 pt-6 text-sm">
                <Row label="Colour" value={product.colour} />
                <Row label="Motif" value={product.motif} />
                <Row label="Fabric" value="Premium cotton" />
                <Row label="Craft" value="Hand-drawn batik" />
                <Row label="Sizes" value={category.sizes.join(" · ")} />
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-ink/10 bg-cream-light py-20">
          <div className="container-lux">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-serif text-3xl text-ink">More from {category.name}</h2>
              <Link
                href="/shop"
                className="shrink-0 text-xs uppercase tracking-[0.15em] text-primary underline-offset-4 hover:underline"
              >
                View all
              </Link>
            </div>
            <div className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right text-ink">{value}</dd>
    </div>
  );
}
