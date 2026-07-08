import { Sparkle, StarSpark } from "./icons";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

export default function LatestCollections() {
  return (
    <section className="bg-white pb-20">
      <div className="container-lux">
        <div className="grid items-end gap-6 md:grid-cols-2">
          <h2 className="text-3xl font-semibold leading-tight text-ink">
            New Style for Latest
            <br />
            Collections
          </h2>
          <p className="text-sm leading-relaxed text-muted">
            Discover our latest collection of clothing, shoes, and accessories
            that are perfect for any occasion. From casual wear to formal attire,
            we have everything you need to revamp your wardrobe and stay on trend.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* New Casual Style */}
          <div className="relative flex min-h-[360px] overflow-hidden rounded-2xl bg-cream">
            <div className="relative z-10 flex flex-col justify-center p-10">
              <Sparkle className="absolute right-6 top-6 h-8 w-8 text-ink/20" />
              <h3 className="text-4xl font-semibold leading-none text-ink">
                NEW
                <br />
                CASUAL
                <br />
                STYLE
              </h3>
              <p className="mt-3 text-sm text-muted">Collection</p>
              <div className="mt-6">
                <a href="#" className="btn-dark">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="relative ml-auto w-1/2 self-stretch">
              <SmartImage
                src={IMAGES.casualStyle.web}
                fallback={IMAGES.casualStyle.local}
                alt="Casual style model"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Spring Dating + Get $15 Off */}
          <div className="grid grid-rows-2 gap-6">
            <div className="flex items-center gap-6 overflow-hidden rounded-2xl bg-cream p-8">
              <div>
                <p className="text-sm text-muted">SPRING</p>
                <h3 className="text-3xl font-semibold text-ink">DATING</h3>
                <p className="mt-2 text-sm text-muted">Collection</p>
              </div>
              <div className="ml-auto h-32 w-32 shrink-0 overflow-hidden rounded-xl">
                <SmartImage
                  src={IMAGES.springDating.web}
                  fallback={IMAGES.springDating.local}
                  alt="Spring dating collection"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="relative flex flex-col justify-center overflow-hidden rounded-2xl bg-primary p-8 text-white">
              <StarSpark className="absolute right-8 top-1/2 h-24 w-24 -translate-y-1/2 text-white/25" />
              <h3 className="text-4xl font-semibold leading-none">
                GET
                <br />
                $15 OFF
              </h3>
              <p className="mt-3 text-sm text-white/80">
                For all item in our store or website
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
