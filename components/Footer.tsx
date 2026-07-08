import { StarSpark } from "./icons";

const menu = ["Menu", "Women", "Order Tracking", "Blog"];
const help = ["FAQ", "Privacy Policy", "Term Of Conditions"];
const connect = ["Contact Us", "Instagram", "Facebook", "Twitter"];
const payments = ["PayPal", "Apple Pay", "Mastercard", "Visa"];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-white py-14">
      <div className="container-lux">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:pr-10">
            <a href="#" className="flex items-center gap-1.5 font-serif text-2xl text-ink">
              <StarSpark className="h-4 w-4 text-primary" />
              <span>LUX</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Finding your fashion has never been easier. Browse the best
              selection of famous fashion brands that suit your style and
              preferences.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Menu</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {menu.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Help</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {help.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-ink">Connect</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {connect.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-primary">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row">
          <p className="order-2 text-xs text-muted md:order-1">
            © 2026 LUX® Global Inc.
          </p>
          <div className="order-1 flex items-center gap-3 md:order-2">
            <span className="text-xs text-muted">Payment Method</span>
            {payments.map((item) => (
              <span
                key={item}
                className="rounded-md border border-ink/10 px-3 py-1.5 text-[11px] font-medium text-ink/70"
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
