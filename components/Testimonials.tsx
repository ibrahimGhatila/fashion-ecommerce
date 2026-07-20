import { QuoteMark } from "./icons";

const testimonials = [
  {
    text: "The fabric is unlike any shirt I own — it breathes like cotton but falls like silk. I've had endless compliments, and no two people have the same print.",
    name: "Daniyal Rehman",
    role: "Karachi",
  },
  {
    text: "You can feel the hand-work in it. The stitching, the weight, the way the colour sits in the cloth. This is a grown man's shirt, not a novelty print.",
    name: "Omar Sheikh",
    role: "Dubai",
  },
  {
    text: "I bought one for a wedding and now I reach for it constantly. Knowing it's one of one makes it feel like something worth keeping.",
    name: "Arjun Mehta",
    role: "London",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container-lux">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">In Their Words</p>
          <h2 className="mt-4 font-serif text-4xl text-ink">Worn with confidence</h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-sm border border-ink/10 p-8">
              <QuoteMark className="h-6 w-6 text-primary" />
              <blockquote className="mt-5 text-sm leading-relaxed text-ink-soft">
                {item.text}
              </blockquote>
              <figcaption className="mt-7">
                <p className="font-serif text-base text-ink">{item.name}</p>
                <p className="mt-0.5 text-xs uppercase tracking-[0.15em] text-muted">
                  {item.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
