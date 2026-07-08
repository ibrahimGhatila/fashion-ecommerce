const brands = ["ZARA", "Champion", "CHANEL", "FILA", "GUCCI", "GUESS"];

export default function SupportedBy() {
  return (
    <section className="bg-white py-16">
      <div className="container-lux">
        <h2 className="text-center text-2xl font-semibold text-ink">
          We Are Supported By
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex items-center justify-center rounded-xl border border-ink/10 py-6 text-lg font-semibold tracking-wide text-ink/70"
            >
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
