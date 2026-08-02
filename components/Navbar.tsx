import Link from "next/link";
import { SearchIcon, BagIcon } from "./icons";

const links = [
  { label: "Shop", href: "/shop" },
  { label: "Heritage", href: "/#heritage" },
  { label: "Journal", href: "/#journal" },
  { label: "Contact", href: "/#footer" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-cream-light/90 backdrop-blur">
      <div className="container-lux flex items-center justify-between py-4">
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-ink/80 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </Link>
          ))}
        </nav>

        <Link href="/" aria-label="CWSK Enterprises — home" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo-trimmed.png"
            alt="CWSK Enterprises"
            className="h-12 w-auto mix-blend-multiply sm:h-14"
          />
        </Link>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-ink transition-colors hover:text-primary">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-ink transition-colors hover:text-primary">
            <BagIcon className="h-5 w-5" />
          </button>
          <Link
            href="/shop"
            className="hidden rounded-sm border border-ink/40 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream-light sm:inline-flex"
          >
            Shop All
          </Link>
        </div>
      </div>

      {/* Mobile nav — the desktop links are hidden below md, so mirror them
          here as a compact scrollable strip. */}
      <nav className="flex items-center gap-6 overflow-x-auto border-t border-ink/10 px-5 py-3 text-xs font-medium uppercase tracking-[0.15em] text-ink/80 md:hidden">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="whitespace-nowrap transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
