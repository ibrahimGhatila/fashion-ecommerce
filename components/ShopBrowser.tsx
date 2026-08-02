"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { CATEGORIES, PRODUCTS, familiesFor } from "@/lib/catalog";

const PAGE_SIZE = 12;

type Sort = "featured" | "az" | "za";

export default function ShopBrowser() {
  const [category, setCategory] = useState<string>("all");
  const [family, setFamily] = useState<string>("all");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<Sort>("featured");
  const [shown, setShown] = useState(PAGE_SIZE);

  const families = useMemo(
    () => familiesFor(category === "all" ? undefined : category),
    [category]
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = PRODUCTS.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (family !== "all" && p.family !== family) return false;
      if (
        q &&
        !`${p.name} ${p.colour} ${p.motif}`.toLowerCase().includes(q)
      )
        return false;
      return true;
    });
    if (sort === "az") return [...list].sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "za") return [...list].sort((a, b) => b.name.localeCompare(a.name));
    return list;
  }, [category, family, query, sort]);

  // Reset paging whenever the result set changes shape.
  const reset = (fn: () => void) => {
    fn();
    setShown(PAGE_SIZE);
  };

  const visible = results.slice(0, shown);

  return (
    <>
      {/* Controls */}
      <div className="mt-12 space-y-5 border-y border-ink/10 py-6">
        {/* Category */}
        {CATEGORIES.length > 1 && (
          <div className="flex flex-wrap items-center gap-2">
            <Chip
              active={category === "all"}
              onClick={() => reset(() => { setCategory("all"); setFamily("all"); })}
            >
              All Ranges
            </Chip>
            {CATEGORIES.map((c) => (
              <Chip
                key={c.id}
                active={category === c.id}
                onClick={() => reset(() => { setCategory(c.id); setFamily("all"); })}
              >
                {c.name}
              </Chip>
            ))}
          </div>
        )}

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          {/* Colour families */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs uppercase tracking-[0.15em] text-muted">
              Colour
            </span>
            <Chip active={family === "all"} onClick={() => reset(() => setFamily("all"))}>
              All
            </Chip>
            {families.map((f) => (
              <Chip
                key={f}
                active={family === f}
                onClick={() => reset(() => setFamily(f))}
              >
                {f}
              </Chip>
            ))}
          </div>

          {/* Search + sort */}
          <div className="flex items-center gap-3">
            <input
              type="search"
              value={query}
              onChange={(e) => reset(() => setQuery(e.target.value))}
              placeholder="Search prints…"
              className="w-full rounded-sm border border-ink/20 bg-white px-4 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-muted/70 focus:border-ink md:w-52"
            />
            <select
              value={sort}
              onChange={(e) => reset(() => setSort(e.target.value as Sort))}
              aria-label="Sort products"
              className="rounded-sm border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink outline-none focus:border-ink"
            >
              <option value="featured">Featured</option>
              <option value="az">Name A–Z</option>
              <option value="za">Name Z–A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Count */}
      <p className="mt-6 text-xs uppercase tracking-[0.15em] text-muted">
        {results.length} {results.length === 1 ? "design" : "designs"}
      </p>

      {/* Grid */}
      {results.length === 0 ? (
        <div className="py-24 text-center">
          <p className="font-serif text-2xl text-ink">No prints match that.</p>
          <button
            onClick={() =>
              reset(() => {
                setQuery("");
                setFamily("all");
                setCategory("all");
              })
            }
            className="mt-4 text-xs uppercase tracking-[0.15em] text-primary underline underline-offset-4"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-6 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visible.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}

      {/* Load more */}
      {shown < results.length && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShown((n) => n + PAGE_SIZE)}
            className="btn-outline"
          >
            Load more ({results.length - shown} left)
          </button>
        </div>
      )}
    </>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-sm border px-4 py-2 text-xs font-medium uppercase tracking-[0.12em] transition-colors ${
        active
          ? "border-ink bg-ink text-cream-light"
          : "border-ink/20 text-ink-soft hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}
