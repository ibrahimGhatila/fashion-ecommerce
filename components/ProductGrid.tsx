"use client";

import { useEffect, useState } from "react";
import type { SVGProps } from "react";
import { AnimatePresence, motion } from "motion/react";
import SmartImage from "./SmartImage";
import { PRODUCTS, IMAGES, type Product } from "@/lib/images";
import { buildWhatsAppOrderUrl } from "@/lib/site";

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

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.5 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm0 18.13h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.82c0 4.54-3.69 8.24-8.24 8.24Z" />
    </svg>
  );
}

function ProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [size, setSize] = useState<string | null>(null);
  const [name, setName] = useState("");

  const order = () => {
    if (!size) return;
    const productUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/#collection`
        : "";
    const url = buildWhatsAppOrderUrl({
      productName: product.name,
      motif: product.motif,
      price: product.price,
      size,
      name,
      productUrl,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

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

          {/* Name (optional) */}
          <div className="mt-5">
            <label className="text-xs font-medium uppercase tracking-[0.15em] text-ink">
              Your name <span className="text-muted">(optional)</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="So we know who we're speaking with"
              className="mt-3 w-full rounded-sm border border-ink/30 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-ink"
            />
          </div>

          {/* Order via WhatsApp */}
          <button
            onClick={order}
            disabled={!size}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <WhatsAppIcon className="h-5 w-5" />
            {size ? "Order via WhatsApp" : "Select a size to order"}
          </button>

          <p className="mt-4 text-center text-xs text-muted">
            Opens WhatsApp with your order pre-filled · Free shipping · 30-day returns
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
