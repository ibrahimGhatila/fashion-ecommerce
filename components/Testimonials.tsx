import { QuoteMark } from "./icons";

const testimonials = [
  {
    text: "I recently purchased the most beautiful dress from this brand and I couldn't be happier with my purchase! The dress is made of high-quality materials and fits like a glove. The color is so vibrant and the cut is extremely flattering.",
    name: "James Lipshutz",
  },
  {
    text: "I absolutely love my new shoes! They are so comfortable and stylish at the same time. The quality is amazing and they have held up really well after multiple wears. I especially love the attention to detail in the design.",
    name: "Giana Dokidis",
  },
  {
    text: "I've been using my new handbag for a few weeks now and I'm absolutely in love with it! The size is perfect - it's big enough to hold all of my essentials but not so big that it's cumbersome to carry around.",
    name: "Jordyn Botosh",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16">
      <div className="container-lux">
        <h2 className="text-center text-3xl font-semibold text-ink">
          What our clients have to say!
        </h2>
        <p className="mt-3 text-center text-sm text-muted">
          80+ Molestie hendrerit amet sapien volutpat.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-ink/10 p-7"
            >
              <QuoteMark className="h-6 w-6 text-primary" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                {item.text}
              </blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-ink">
                {item.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
