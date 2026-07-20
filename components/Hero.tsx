"use client";

import { motion } from "motion/react";
import SmartImage from "./SmartImage";
import { IMAGES } from "@/lib/images";

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="bg-cream-light">
      <div className="container-lux grid min-h-[calc(100svh-65px)] items-center gap-10 py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-0">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          className="max-w-xl"
        >
          <p className="eyebrow">Handcrafted Batik · Est. Java</p>

          <h1 className="mt-6 font-serif text-5xl leading-[1.05] text-ink sm:text-6xl">
            Batik, Tailored
            <br />
            for the Modern Man
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
            Hand-crafted shirts cut from a cotton–silk blend and dyed by artisans
            using techniques passed down for generations. One print. One shirt.
            Made to be worn, not repeated.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a href="#collection" className="btn-primary">
              Explore the Collection
            </a>
            <a href="#heritage" className="text-xs font-medium uppercase tracking-[0.15em] text-ink underline-offset-4 hover:underline">
              Our Craft
            </a>
          </div>

          <div className="mt-12 flex items-center gap-12 border-t border-ink/10 pt-8">
            <div>
              <p className="font-serif text-3xl text-ink">100%</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Hand-Dyed</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">Cotton</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">&amp; Silk Blend</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-ink">1 of 1</p>
              <p className="mt-1 text-xs uppercase tracking-[0.15em] text-muted">Per Design</p>
            </div>
          </div>
        </motion.div>

        {/* Right — image fills the frame, no matting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: EASE }}
          className="mx-auto h-[58svh] max-h-[560px] min-h-[380px] w-full max-w-[440px] overflow-hidden rounded-sm shadow-card"
        >
          <SmartImage
            src={IMAGES.hero}
            fallback={IMAGES.fallback}
            alt="Model wearing a LUX handcrafted batik shirt"
            className="h-full w-full object-cover object-top"
          />
        </motion.div>
      </div>
    </section>
  );
}
