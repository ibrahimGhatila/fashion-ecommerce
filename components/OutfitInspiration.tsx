import { Sparkle, StarSpark } from "./icons";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

export default function OutfitInspiration() {
  return (
    <section className="bg-white py-8">
      <div className="container-lux">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Orange panel */}
          <div className="relative flex min-h-[340px] flex-col justify-center overflow-hidden rounded-2xl bg-primary p-10 text-white">
            <StarSpark className="absolute right-10 top-8 h-16 w-16 text-white" />
            <h3 className="mt-8 text-4xl font-semibold leading-tight">
              OUTFIT
              <br />
              INSPIRATION
              <br />
              OT THE DAY
            </h3>
            <p className="mt-6 text-sm text-white/80">
              80+ Molestie hendrerit amet sapien volutpat.
            </p>
          </div>

          {/* Image panel */}
          <div className="relative flex min-h-[340px] items-center overflow-hidden rounded-2xl bg-cream">
            <div className="relative z-10 p-10">
              <h3 className="text-4xl font-semibold leading-tight text-ink">
                NEW
                <br />
                CASUAL
                <br />
                STYLE
              </h3>
            </div>
            <div className="absolute inset-y-0 right-0 flex w-1/2 items-end justify-center bg-cream-dark">
              <Sparkle className="absolute -left-5 top-8 z-10 h-9 w-9 text-ink/25" />
              <SmartImage
                src={IMAGES.outfit.web}
                fallback={IMAGES.outfit.local}
                alt="Outfit of the day shirt"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
