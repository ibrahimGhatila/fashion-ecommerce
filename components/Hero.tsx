"use client";

import { motion } from "motion/react";
import { Sparkle } from "./icons";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

const categories = ["Women", "Men", "Accessories", "Footwear", "Jewelry"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-light">
      <div className="container-lux grid items-center gap-10 pb-20 pt-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative z-10 max-w-xl"
        >
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-primary">
            <Sparkle className="h-4 w-4" />
            Summer 2026 — New Collection
          </div>

          <h1 className="mt-5 text-[2.75rem] leading-[0.98] tracking-tight text-ink sm:text-[4rem]">
            <span className="block font-bold">TRENDY FASHION</span>
            <span className="block font-light">COLLECTION</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Finding your fashion has never been easier. Browse the best selection
            of famous fashion brands that suit your style and preferences.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a href="#products" className="btn-primary">
              Shop Now
            </a>
            <div className="flex items-center gap-10">
              <div>
                <p className="text-2xl font-semibold text-ink">80+</p>
                <p className="text-xs text-muted">Unique Style</p>
              </div>
              <div>
                <p className="text-2xl font-semibold text-ink">40+</p>
                <p className="text-xs text-muted">Brand Trusted</p>
              </div>
            </div>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-ink/10 pt-6 text-sm text-ink/70">
            {categories.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.08, duration: 0.4, ease: EASE }}
                whileHover={{ y: -3, color: "#E86642" }}
              >
                <a href="#products" className="cursor-pointer">
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="relative"
        >
          {/* soft glow */}
          <div className="absolute -left-10 -top-10 -z-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
          <div className="absolute -bottom-10 right-0 -z-10 h-64 w-64 rounded-full bg-[#f6c9b4]/40 blur-3xl" />

          <Sparkle className="absolute -left-2 top-8 z-10 h-8 w-8 text-primary" />
          <Sparkle className="absolute right-4 top-0 z-10 h-10 w-10 text-ink/20" />
          <Sparkle className="absolute bottom-10 right-1 z-10 h-7 w-7 text-primary/70" />

          <motion.div
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: EASE }}
            className="relative mx-auto aspect-[4/5] w-full max-w-[460px] overflow-hidden rounded-[1.75rem] shadow-2xl"
          >
            <SmartImage
              src={IMAGES.hero.web}
              fallback={IMAGES.hero.local}
              alt="Fashion model in a trendy outfit"
              className="h-full w-full object-cover brightness-[1.03]"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
