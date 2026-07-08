import { SearchIcon, BagIcon, StarSpark } from "./icons";

const links = ["Home", "Product", "Blog", "Contact Us"];

export default function Navbar() {
  return (
    <header className="w-full bg-cream-light">
      <div className="container-lux flex items-center justify-between py-5">
        <nav className="hidden items-center gap-8 text-sm text-ink md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="transition-colors hover:text-primary"
            >
              {link}
            </a>
          ))}
        </nav>

        <a href="#" className="flex items-center gap-1.5 font-serif text-2xl tracking-wide text-ink">
          <StarSpark className="h-4 w-4 text-primary" />
          <span>LUX</span>
        </a>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="text-ink transition-colors hover:text-primary">
            <SearchIcon className="h-5 w-5" />
          </button>
          <button aria-label="Cart" className="text-ink transition-colors hover:text-primary">
            <BagIcon className="h-5 w-5" />
          </button>
          <a href="#" className="rounded-full border border-primary px-6 py-2 text-sm text-primary transition-colors hover:bg-primary hover:text-white">
            Login
          </a>
        </div>
      </div>
    </header>
  );
}
