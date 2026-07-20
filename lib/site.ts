/**
 * Site-wide configuration.
 *
 * ADMIN_WHATSAPP: the number that receives order enquiries, in full
 * international format WITHOUT the leading "+" or spaces.
 * Malaysian example: 60 (country code) + 123456789 => "60123456789".
 *
 * TODO: replace the placeholder below with CWSK Enterprises' real number.
 */
export const ADMIN_WHATSAPP = "60123456789";

export const BRAND_NAME = "CWSK Enterprises";

/** Build a WhatsApp "click to chat" link with a pre-filled order message. */
export function buildWhatsAppOrderUrl(opts: {
  productName: string;
  motif: string;
  price: string;
  size: string;
  name?: string;
  productUrl: string;
}) {
  const lines = [
    `Hi ${BRAND_NAME}! I'd like to order:`,
    "",
    `*${opts.productName}* — ${opts.motif}`,
    `Size: ${opts.size}`,
    `Price: ${opts.price}`,
  ];
  if (opts.name?.trim()) lines.push("", `Name: ${opts.name.trim()}`);
  lines.push("", `Product: ${opts.productUrl}`);

  const text = encodeURIComponent(lines.join("\n"));
  return `https://wa.me/${ADMIN_WHATSAPP}?text=${text}`;
}
