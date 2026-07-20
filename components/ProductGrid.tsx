"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import SmartImage from "./SmartImage";
import { PRODUCTS, IMAGES, type Product } from "@/lib/images";

const SIZES = ["S", "M", "L", "XL", "XXL"];

export default function ProductGrid() {
  const [active, setActive] = useState<Product | null>(null);

  return (
    <>
      <div className="mt-14 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <button
            key={product.name}
            onClick={() => setActive(product)}
            className="group text-left"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-cream">
              <SmartImage
                src={product.image}
                fallback={IMAGES.fallback}
                alt={product.name}
                className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-center bg-ink/80 py-3 text-xs font-medium uppercase tracking-[0.15em] text-cream-light opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                Quick View
              </span>
            </div>
            <div className="mt-5 flex items-start justify-between">
              <div>
                <h3 className="font-serif text-lg text-ink">{product.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-[0.12em] text-muted">
                  {product.motif}
                </p>
              </div>
              <span className="text-sm font-medium text-ink">{product.price}</span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {active && <ProductModal product={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/70 p-4 backdrop-blur-sm"
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[90svh] w-full max-w-4xl overflow-hidden rounded-sm bg-cream-light md:grid-cols-2"
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-cream-light/90 text-ink transition-colors hover:bg-ink hover:text-cream-light"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {/* Image */}
        <div className="hidden bg-cream md:block">
          <SmartImage
            src={product.image}
            fallback={IMAGES.fallback}
            alt={product.name}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {/* Details */}
        <div className="max-h-[90svh] overflow-y-auto p-8 sm:p-10">
          <p className="eyebrow">{product.motif}</p>
          <h2 className="mt-3 font-serif text-3xl text-ink">{product.name}</h2>
          <p className="mt-3 text-xl font-medium text-ink">{product.price}</p>

          <p className="mt-5 text-sm leading-relaxed text-muted">{product.blurb}</p>

          <dl className="mt-6 space-y-2 border-y border-ink/10 py-5 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Fabric</dt>
              <dd className="text-ink">Cotton–silk blend</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Craft</dt>
              <dd className="text-ink">Hand-dyed batik</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Availability</dt>
              <dd className="text-ink">One of one</dd>
            </div>
          </dl>

          {/* Size */}
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">Size</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {SIZES.map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`h-11 w-11 rounded-sm border text-sm transition-colors ${
                    size === s
                      ? "border-ink bg-ink text-cream-light"
                      : "border-ink/30 text-ink hover:border-ink"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => setAdded(true)}
            className="mt-8 w-full rounded-sm bg-ink py-4 text-xs font-medium uppercase tracking-[0.15em] text-cream-light transition-colors hover:bg-black disabled:opacity-60"
            disabled={!size}
          >
            {added ? "Added to Bag ✓" : size ? "Add to Bag" : "Select a size"}
          </button>

          <p className="mt-4 text-center text-xs text-muted">
            Free worldwide shipping · 30-day returns
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
