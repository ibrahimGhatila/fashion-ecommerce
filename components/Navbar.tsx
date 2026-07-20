import { SearchIcon, BagIcon } from "./icons";

const links = [
  { label: "Shop", href: "#collection" },
  { label: "Heritage", href: "#heritage" },
  { label: "Journal", href: "#journal" },
  { label: "Contact", href: "#footer" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-ink/10 bg-cream-light/90 backdrop-blur">
      <div className="container-lux flex items-center justify-between py-4">
        <nav className="hidden items-center gap-8 text-xs font-medium uppercase tracking-[0.15em] text-ink/80 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-primary">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#" className="font-serif text-2xl tracking-[0.35em] text-ink">
          LUX
        </a>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-ink transition-colors hover:text-primary">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-ink transition-colors hover:text-primary">
            <BagIcon className="h-5 w-5" />
          </button>
          <a
            href="#"
            className="hidden rounded-sm border border-ink/40 px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:bg-ink hover:text-cream-light sm:inline-flex"
          >
            Account
          </a>
        </div>
      </div>
    </header>
  );
}
