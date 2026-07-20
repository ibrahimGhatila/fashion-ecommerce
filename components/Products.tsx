import ProductGrid from "./ProductGrid";

export default function Products() {
  return (
    <section id="collection" className="bg-cream-light py-24">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">The Collection</p>
          <h2 className="mt-4 font-serif text-4xl text-ink">Batik Shirts</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            Every shirt is a single, hand-dyed piece in our signature cotton–silk
            blend. When a print is gone, it is gone for good.
          </p>
        </div>

        <ProductGrid />
      </div>
    </section>
  );
}
