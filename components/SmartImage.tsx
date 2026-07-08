"use client";

import { useState } from "react";

type Props = {
  src: string;
  fallback: string;
  alt: string;
  className?: string;
};

/**
 * Renders a remote (web) image and gracefully falls back to a local
 * placeholder asset if the remote URL fails to load — so the live site
 * never shows a broken image.
 */
export default function SmartImage({ src, fallback, alt, className }: Props) {
  const [current, setCurrent] = useState(src);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={current}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => {
        if (current !== fallback) setCurrent(fallback);
      }}
    />
  );
}
