const brands = [
  { name: "ZARA", className: "font-serif text-3xl font-bold tracking-tight" },
  { name: "Champion", className: "text-2xl font-semibold italic" },
  { name: "CHANEL", className: "font-serif text-xl font-medium tracking-[0.35em]" },
  { name: "FILA", className: "text-3xl font-extrabold italic tracking-tight" },
  { name: "GUCCI", className: "font-serif text-2xl font-semibold tracking-[0.3em]" },
  { name: "GUESS", className: "text-2xl font-bold tracking-[0.2em]" },
];

export default function SupportedBy() {
  return (
    <section className="bg-white py-16">
      <div className="container-lux">
        <h2 className="text-center text-2xl font-semibold text-ink">
          We Are Supported By
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16">
          {brands.map((brand) => (
            <span
              key={brand.name}
              className={`text-ink/45 transition-colors hover:text-ink ${brand.className}`}
            >
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
