import SmartImage from "./SmartImage";
import { PRODUCTS, IMAGES } from "@/lib/images";

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

        <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.name} className="group">
              <div className="aspect-[3/4] overflow-hidden rounded-sm bg-cream">
                <SmartImage
                  src={product.image}
                  fallback={IMAGES.fallback}
                  alt={product.name}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-5 flex items-start justify-between">
                <div>
                  <h3 className="font-serif text-lg text-ink">{product.name}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                    {product.motif}
                  </p>
                </div>
                <span className="text-sm font-medium text-ink">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
