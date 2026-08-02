const shop = ["Batik Pawang", "All Shirts", "Order Tracking", "Size Guide"];
const about = ["Our Heritage", "The Journal", "Fabric &amp; Care", "Contact"];
const help = ["FAQ", "Shipping &amp; Returns", "Privacy Policy", "Terms"];
const payments = ["Touch 'n Go", "Visa"];

export default function Footer() {
  return (
    <footer id="footer" className="border-t border-ink/10 bg-cream-light py-16">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:pr-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo-trimmed.png"
              alt="CWSK Enterprises"
              className="h-16 w-auto mix-blend-multiply"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Hand-crafted batik shirts for men, cut from a cotton–silk blend and
              dyed by artisans in Java. One print, one shirt — made to be worn for
              years.
            </p>
          </div>

          <FooterCol title="Shop" items={shop} />
          <FooterCol title="About" items={about} />
          <FooterCol title="Help" items={help} />
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row">
          <p className="order-2 text-xs text-muted md:order-1">
            © 2026 CWSK Enterprises. All rights reserved.
          </p>
          <div className="order-1 flex items-center gap-3 md:order-2">
            {payments.map((item) => (
              <span
                key={item}
                className="rounded-sm border border-ink/15 px-3 py-1.5 text-[11px] font-medium text-ink/60"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-ink">{title}</h3>
      <ul className="mt-5 space-y-3 text-sm text-muted">
        {items.map((item) => (
          <li key={item}>
            <a
              href="#"
              className="transition-colors hover:text-primary"
              dangerouslySetInnerHTML={{ __html: item }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
