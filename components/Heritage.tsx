import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const steps = [
  {
    n: "01",
    title: "Drawn by Hand",
    body: "Molten wax is applied with a canting pen, tracing each motif line by line before a single drop of dye touches the cloth.",
  },
  {
    n: "02",
    title: "Dyed in Stages",
    body: "The cloth is submerged, dried and re-waxed through repeated baths — every colour a separate immersion, built up over days.",
  },
  {
    n: "03",
    title: "Cotton &amp; Silk",
    body: "We print on a cotton–silk blend: the cotton breathes and holds the dye, the silk lends the drape and quiet sheen of a dress shirt.",
  },
];

export default function Heritage() {
  return (
    <section id="heritage" className="bg-white py-24">
      <div className="container-lux">
        {/* Split intro */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <SmartImage
                src={IMAGES.heritageA}
                fallback={IMAGES.fallback}
                alt="Batik shirt detail"
                className="h-full w-full object-cover object-top"
              />
            </div>
            <div className="mt-10 aspect-[3/4] overflow-hidden rounded-sm">
              <SmartImage
                src={IMAGES.heritageB}
                fallback={IMAGES.fallback}
                alt="Batik shirt worn"
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="max-w-lg lg:pl-6">
            <p className="eyebrow">The Craft</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink">
              Batik is not printed.
              <br />
              It is made by hand.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Batik is a centuries-old wax-resist dyeing tradition from the island
              of Java, recognised by UNESCO as a masterpiece of human heritage.
              There are no machines in this process — only wax, dye, cloth, and the
              patience of an artisan.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              A single shirt can take days to complete. That is the point. Each
              piece carries the small irregularities of a human hand, which is
              precisely what makes it yours alone.
            </p>
          </div>
        </div>

        {/* Process steps */}
        <div className="mt-20 grid gap-10 border-t border-ink/10 pt-14 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.n}>
              <p className="font-serif text-2xl text-primary">{step.n}</p>
              <h3
                className="mt-3 font-serif text-xl text-ink"
                dangerouslySetInnerHTML={{ __html: step.title }}
              />
              <p
                className="mt-3 text-sm leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: step.body }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
