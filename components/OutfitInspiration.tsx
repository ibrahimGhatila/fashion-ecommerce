import { StarSpark } from "./icons";

export default function OutfitInspiration() {
  return (
    <section className="bg-white py-8">
      <div className="container-lux">
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Orange panel */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden rounded-2xl bg-primary p-10 text-white">
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
          <div className="relative flex min-h-[320px] items-center overflow-hidden rounded-2xl bg-cream">
            <div className="relative z-10 p-10">
              <h3 className="text-4xl font-semibold leading-tight text-ink">
                NEW
                <br />
                CASUAL
                <br />
                STYLE
              </h3>
            </div>
            <div className="absolute inset-y-0 right-0 w-1/2">
              <StarSpark className="absolute -left-4 top-8 z-10 h-10 w-10 text-ink/10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/outfit.svg"
                alt="New casual style outfit"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
