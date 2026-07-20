import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const posts = [
  {
    image: IMAGES.journalA,
    category: "Heritage",
    title: "Reading a Batik: What the Motifs Mean",
    excerpt:
      "Parang, Kawung, Truntum — the patterns on your shirt each carry a story. A short guide to the symbols woven into Javanese batik.",
  },
  {
    image: IMAGES.journalB,
    category: "Styling",
    title: "One Shirt, Three Ways",
    excerpt:
      "From boardroom to dinner — how to style a statement batik shirt with tailoring, denim, and everything in between.",
  },
  {
    image: IMAGES.journalC,
    category: "Care",
    title: "Caring for Cotton &amp; Silk",
    excerpt:
      "Hand-dyed cloth deserves considered care. How to wash, dry and store your shirt so the colour stays true for years.",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="bg-cream-light py-24">
      <div className="container-lux">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Worn &amp; Written</p>
            <h2 className="mt-4 font-serif text-4xl text-ink">The Journal</h2>
          </div>
          <a href="#" className="text-xs font-medium uppercase tracking-[0.15em] text-ink underline-offset-4 hover:underline">
            View all stories
          </a>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-sm">
                <SmartImage
                  src={post.image}
                  fallback={IMAGES.fallback}
                  alt={post.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-primary">
                {post.category}
              </p>
              <h3
                className="mt-2 font-serif text-xl leading-snug text-ink"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <p
                className="mt-2 text-sm leading-relaxed text-muted"
                dangerouslySetInnerHTML={{ __html: post.excerpt }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
