export default function Newsletter() {
  return (
    <section className="bg-white pb-24">
      <div className="container-lux">
        <div className="rounded-sm bg-ink px-6 py-16 text-center text-cream-light">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-primary-light">
            The List
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-serif text-3xl leading-snug sm:text-4xl">
            First access to new prints, before they sell out
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-cream-light/70">
            Each design is one of one. Join the list to see new arrivals first —
            no noise, just the next shirt.
          </p>

          <form className="mx-auto mt-8 flex max-w-md items-center gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-sm border border-cream-light/25 bg-transparent px-5 py-3 text-sm text-cream-light outline-none placeholder:text-cream-light/40 focus:border-primary-light"
            />
            <button
              type="submit"
              className="shrink-0 rounded-sm bg-cream-light px-7 py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-white"
            >
              Join
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
