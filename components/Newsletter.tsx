export default function Newsletter() {
  return (
    <section className="bg-white pb-20">
      <div className="container-lux">
        <div className="rounded-2xl bg-cream px-6 py-14 text-center">
          <h2 className="text-3xl font-semibold text-ink">
            Subscribe Newsletter and Get $15 Off
          </h2>
          <p className="mt-3 text-sm text-muted">
            80+ Molestie hendrerit amet sapien volutpat.
          </p>

          <form className="mx-auto mt-8 flex max-w-md items-center gap-2 rounded-full bg-white p-1.5 shadow-card">
            <input
              type="email"
              placeholder="Enter mail address"
              className="w-full bg-transparent px-5 py-2 text-sm text-ink outline-none placeholder:text-muted"
            />
            <button type="submit" className="btn-primary shrink-0">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
