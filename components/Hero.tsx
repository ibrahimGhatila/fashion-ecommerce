import { Sparkle } from "./icons";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-light">
      <div className="container-lux grid items-center gap-8 pb-20 pt-10 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* Left */}
        <div className="relative z-10 max-w-xl">
          <h1 className="text-[2.5rem] leading-[1.05] tracking-tight text-ink sm:text-[3.25rem]">
            <span className="font-bold">TRENDY FASHION</span>
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

          <div className="mt-12 flex items-center gap-14">
            <div>
              <p className="text-4xl font-semibold text-ink">80+</p>
              <p className="mt-1 text-xs text-muted">Unique Style</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-ink">40+</p>
              <p className="mt-1 text-xs text-muted">Brand Trusted</p>
            </div>
          </div>

          <div className="mt-10 flex items-center gap-3">
            <div className="flex">
              <span className="h-6 w-6 rounded-full bg-[#EB001B]" />
              <span className="-ml-2.5 h-6 w-6 rounded-full bg-[#F79E1B]/90" />
            </div>
            <p className="text-xs text-muted">
              80+ Molestie hendrerit amet sapien volutpat.
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="relative">
          <Sparkle className="absolute -left-3 top-10 z-10 h-9 w-9 text-primary" />
          <Sparkle className="absolute right-6 top-0 z-10 h-12 w-12 text-ink/25" />
          <Sparkle className="absolute -bottom-3 left-10 z-10 h-7 w-7 text-primary/70" />
          <Sparkle className="absolute bottom-16 right-2 z-10 h-8 w-8 text-ink/15" />
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[480px] overflow-hidden rounded-2xl">
            <SmartImage
              src={IMAGES.hero.web}
              fallback={IMAGES.hero.local}
              alt="Fashion model in a trendy outfit"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
