/**
 * Site-wide configuration.
 *
 * ADMIN_WHATSAPP: the number that receives order enquiries, in full
 * international format WITHOUT the leading "+" or spaces.
 * Malaysian example: 60 (country code) + 123456789 => "60123456789".
 */
export const ADMIN_WHATSAPP = "60192224457";

export const BRAND_NAME = "CWSK Enterprises";

/** How a shirt is supplied: uncut fabric, or stitched to size. */
export type Make = "unstitched" | "stitched";

export const MAKE_LABEL: Record<Make, string> = {
  unstitched: "Unstitched (fabric only)",
  stitched: "Stitched to size",
};

/** Build a WhatsApp "click to chat" link with a pre-filled order message. */
export function buildWhatsAppOrderUrl(opts: {
  productName: string;
  motif: string;
  price: string;
  make: Make;
  /** Only meaningful when make === "stitched". */
  size?: string | null;
  name?: string;
  productUrl: string;
}) {
  const lines = [
    `Hi ${BRAND_NAME}! I'd like to order:`,
    "",
    `*${opts.productName}* — ${opts.motif}`,
    `Option: ${MAKE_LABEL[opts.make]}`,
  ];
  if (opts.make === "stitched" && opts.size) lines.push(`Size: ${opts.size}`);
  lines.push(`Price: ${opts.price}`);
  if (opts.name?.trim()) lines.push("", `Name: ${opts.name.trim()}`);
  lines.push("", `Product: ${opts.productUrl}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
}
