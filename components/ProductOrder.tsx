"use client";

import { useState } from "react";
import type { SVGProps } from "react";
import { formatMYR, type Category, type Product } from "@/lib/catalog";
import { buildWhatsAppOrderUrl, MAKE_LABEL, type Make } from "@/lib/site";

export default function ProductOrder({
  product,
  category,
}: {
  product: Product;
  category: Category;
}) {
  const [make, setMake] = useState<Make>("unstitched");
  const [size, setSize] = useState<string | null>(null);
  const [name, setName] = useState("");

  const priceValue =
    make === "stitched" ? category.priceStitched : category.priceUnstitched;
  const price = formatMYR(priceValue);

  // A stitched shirt needs a size; uncut fabric does not.
  const ready = make === "unstitched" || Boolean(size);

  const order = () => {
    if (!ready) return;
    const productUrl =
      typeof window !== "undefined"
        ? `${window.location.origin}/shop/${product.slug}`
        : "";
    window.open(
      buildWhatsAppOrderUrl({
        productName: product.name,
        motif: product.motif,
        price,
        make,
        size,
        name,
        productUrl,
      }),
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div>
      <p className="mt-4 text-2xl font-medium text-ink">{price}</p>
      <p className="mt-1 text-xs text-muted">{MAKE_LABEL[make]}</p>

      {/* Unstitched / stitched */}
      <div className="mt-8">
        <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">
          Option
        </p>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(["unstitched", "stitched"] as Make[]).map((m) => (
            <button
              key={m}
              onClick={() => setMake(m)}
              className={`rounded-sm border px-4 py-4 text-left transition-colors ${
                make === m
                  ? "border-ink bg-ink text-cream-light"
                  : "border-ink/25 text-ink hover:border-ink"
              }`}
            >
              <span className="block text-sm font-medium">
                {m === "unstitched" ? "Unstitched" : "Stitched"}
              </span>
              <span
                className={`mt-1 block text-xs ${
                  make === m ? "text-cream-light/70" : "text-muted"
                }`}
              >
                {m === "unstitched"
                  ? "Fabric only"
                  : `Made to size · ${category.sizes.join(", ")}`}
              </span>
              <span className="mt-2 block text-sm">
                {formatMYR(
                  m === "stitched"
                    ? category.priceStitched
                    : category.priceUnstitched
                )}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Size — only for stitched */}
      {make === "stitched" && (
        <div className="mt-6">
          <p className="text-xs font-medium uppercase tracking-[0.15em] text-ink">
            Size
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {category.sizes.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`h-12 w-12 rounded-sm border text-sm transition-colors ${
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
      )}

      {/* Name */}
      <div className="mt-6">
        <label
          htmlFor="order-name"
          className="text-xs font-medium uppercase tracking-[0.15em] text-ink"
        >
          Your name <span className="text-muted">(optional)</span>
        </label>
        <input
          id="order-name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="So we know who we're speaking with"
          className="mt-3 w-full rounded-sm border border-ink/30 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-muted/70 focus:border-ink"
        />
      </div>

      <button
        onClick={order}
        disabled={!ready}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-sm bg-[#25D366] py-4 text-xs font-medium uppercase tracking-[0.15em] text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <WhatsAppIcon className="h-5 w-5" />
        {ready ? "Order via WhatsApp" : "Select a size to order"}
      </button>

      <p className="mt-4 text-center text-xs text-muted">
        Opens WhatsApp with your order pre-filled · Free shipping over RM 400 · 30-day returns
      </p>
    </div>
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
