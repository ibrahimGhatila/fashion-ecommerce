import { ReturnIcon, ShieldIcon, TruckIcon } from "./icons";

const services = [
  {
    icon: ReturnIcon,
    title: "Free Returns",
    text: "Our customers can return or exchange their purchases hassle-free, with our easy to use return policy.",
  },
  {
    icon: ShieldIcon,
    title: "Secure Payment",
    text: "We offer a secure checkout that protects our customers' personal and financial information.",
  },
  {
    icon: TruckIcon,
    title: "Customer Support",
    text: "Our customer support team is available to help customers with any questions or concerns they may have, ensuring a seamless and stress-free shopping experience.",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-20">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl font-semibold text-ink">Our Services</h2>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              We understand the importance of a seamless and enjoyable shopping
              experience.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.title}>
                <service.icon className="h-9 w-9 text-primary" />
                <h3 className="mt-4 font-semibold text-ink">{service.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted">
                  {service.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
