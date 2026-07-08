const filters = ["All", "T-Shirt", "Shirt", "Pants", "Accessories"];

const products = [
  {
    name: "Winter Coat",
    category: "Coat",
    price: "$144.99",
    image: "/images/winter-coat.svg",
  },
  {
    name: "Autumn Dress",
    category: "Dress",
    price: "$124.99",
    image: "/images/autumn-dress.svg",
  },
  {
    name: "Casual T-Shirt",
    category: "T-Shirt",
    price: "$39.99",
    image: "/images/casual-tshirt.svg",
  },
];

export default function Products() {
  return (
    <section id="products" className="bg-white py-20">
      <div className="container-lux">
        <h2 className="text-3xl font-semibold text-ink">Our Products</h2>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button className="flex items-center gap-2 rounded-full border border-ink/15 px-5 py-2 text-sm text-ink">
            Women
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.6}>
              <path d="m6 9 6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`rounded-full px-6 py-2 text-sm transition-colors ${
                i === 0
                  ? "bg-ink text-white"
                  : "text-muted hover:text-ink"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article key={product.name} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-cream">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium text-ink">{product.name}</h3>
                  <p className="mt-1 text-xs text-muted">{product.category}</p>
                </div>
                <span className="rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink shadow-card">
                  {product.price}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a href="#" className="btn-outline">
            See All Product
          </a>
        </div>
      </div>
    </section>
  );
}
