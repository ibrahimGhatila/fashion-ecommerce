import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ShopBrowser from "@/components/ShopBrowser";
import { CATEGORIES, PRODUCTS, formatMYR } from "@/lib/catalog";

export const metadata: Metadata = {
  title: "Shop All Batik Shirts — CWSK Enterprises",
  description:
    "Browse the full CWSK Enterprises batik collection. Every design available unstitched or stitched to your size, from RM 250.",
};

export default function ShopPage() {
  const pawang = CATEGORIES[0];

  return (
    <main>
      <Navbar />

      {/* Header */}
      <section className="border-b border-ink/10 bg-cream-light py-16">
        <div className="container-lux">
          <p className="eyebrow">The Collection</p>
          <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
            {pawang.name}
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
            {pawang.tagline}
          </p>

          <dl className="mt-8 flex flex-wrap gap-x-12 gap-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                Designs
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                {PRODUCTS.length}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                Unstitched
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                {formatMYR(pawang.priceUnstitched)}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                Stitched to size
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                {formatMYR(pawang.priceStitched)}
              </dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted">
                Sizes
              </dt>
              <dd className="mt-1 font-serif text-2xl text-ink">
                {pawang.sizes.join(" · ")}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Browser */}
      <section className="bg-white pb-24">
        <div className="container-lux">
          <ShopBrowser />
        </div>
      </section>

      <Footer />
    </main>
  );
}
