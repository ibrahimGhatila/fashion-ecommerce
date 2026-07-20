import { ReturnIcon, ShieldIcon, TruckIcon } from "./icons";

const services = [
  {
    icon: TruckIcon,
    title: "Worldwide Delivery",
    text: "Insured, tracked shipping on every order, carefully packed to protect the cloth in transit.",
  },
  {
    icon: ReturnIcon,
    title: "30-Day Returns",
    text: "Not the right fit? Return or exchange any unworn shirt within 30 days, no questions asked.",
  },
  {
    icon: ShieldIcon,
    title: "Secure Checkout",
    text: "Encrypted payments and a private, straightforward checkout — your details stay yours.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-ink/10 bg-white py-20">
      <div className="container-lux">
        <div className="grid gap-12 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="flex gap-5">
              <service.icon className="h-8 w-8 shrink-0 text-primary" />
              <div>
                <h3 className="font-serif text-lg text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {service.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
