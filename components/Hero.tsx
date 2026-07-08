import { StarSpark } from "./icons";

export default function Hero() {
  return (
    <section className="bg-cream-light">
      <div className="container-lux grid items-center gap-8 pb-16 pt-6 lg:grid-cols-2 lg:gap-4">
        {/* Left */}
        <div className="max-w-lg">
          <h1 className="text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl">
            <span className="font-semibold">TRENDY FASHION</span>
            <br />
            <span className="font-light">COLLECTION</span>
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Finding your fashion has never been easier. Browse the best selection
            of famous fashion brands that suit your style and preferences.
          </p>
          <div className="mt-8">
            <a href="#products" className="btn-primary">
              Shop Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-12">
            <div>
              <p className="text-3xl font-semibold text-ink">80+</p>
              <p className="mt-1 text-xs text-muted">Unique Style</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-ink">40+</p>
              <p className="mt-1 text-xs text-muted">Brand Trusted</p>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <div className="flex">
              <span className="h-6 w-6 rounded-full bg-[#EB001B]" />
              <span className="-ml-2 h-6 w-6 rounded-full bg-[#F79E1B]/90" />
            </div>
            <p className="text-xs text-muted">
              80+ Molestie hendrerit amet sapien volutpat.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <StarSpark className="absolute -left-2 top-4 h-8 w-8 text-primary/70" />
          <StarSpark className="absolute right-8 top-0 h-10 w-10 text-ink/10" />
          <StarSpark className="absolute -bottom-2 left-1/3 h-6 w-6 text-primary/50" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/hero.svg"
              alt="Fashion model in trendy outfit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
