"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

import { APP_CONFIG } from "@/lib/config";
import { HERO_CONFIG, SITE_CONFIG } from "@/lib/content";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [videoError, setVideoError] = useState(false);
  const [posterError, setPosterError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const contentVariants = useMemo(() => {
    return {
      container: {
        hidden: { opacity: 1 },
        show: { opacity: 1, transition: { staggerChildren: 0.1 } }
      },
      item: {
        hidden: { opacity: 0, y: 20 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" }
        }
      }
    };
  }, []);

  const enableMotion = mounted && !shouldReduceMotion;
  const showVideo = APP_CONFIG.heroMode === "video" && !videoError;
  const showPoster = !posterError;

  return (
    <section id="top" className="relative h-screen overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={enableMotion ? { opacity: 0 } : false}
        animate={enableMotion ? { opacity: 1 } : undefined}
        transition={enableMotion ? { duration: 1, ease: "easeOut" } : undefined}
      >
        <div className="relative h-full w-full">
          {showPoster ? (
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${videoReady ? "opacity-0" : "opacity-100"}`}
            >
              <Image
                src={HERO_CONFIG.poster}
                alt={HERO_CONFIG.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
                onError={() => setPosterError(true)}
              />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />
          )}

          {showVideo ? (
            <video
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${videoReady ? "opacity-100" : "opacity-0"}`}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster={HERO_CONFIG.poster}
              onCanPlay={() => setVideoReady(true)}
              onError={() => setVideoError(true)}
            >
              <source src={HERO_CONFIG.src} type="video/mp4" />
            </video>
          ) : null}
        </div>
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative flex h-full flex-col items-center justify-center px-6 text-center md:px-8">
        <motion.div
          variants={contentVariants.container}
          initial={enableMotion ? "hidden" : false}
          animate={enableMotion ? "show" : undefined}
          className="mx-auto max-w-4xl"
        >
          <motion.p
            variants={contentVariants.item}
            initial={enableMotion ? "hidden" : false}
            animate={enableMotion ? "show" : undefined}
            className="text-xs font-medium uppercase tracking-widest text-text-tertiary"
          >
            {SITE_CONFIG.nameEn.toUpperCase()}
          </motion.p>

          <motion.h1
            variants={contentVariants.item}
            initial={enableMotion ? "hidden" : false}
            animate={enableMotion ? "show" : undefined}
            className="mt-4 text-5xl font-semibold tracking-[0.07em] text-text-primary md:text-8xl lg:text-9xl"
          >
            {SITE_CONFIG.name}
          </motion.h1>

          <motion.p
            variants={contentVariants.item}
            initial={enableMotion ? "hidden" : false}
            animate={enableMotion ? "show" : undefined}
            className="mt-4 text-lg font-normal leading-relaxed text-text-secondary md:text-2xl"
          >
            Where Paths Diverge
          </motion.p>

          <motion.div
            variants={contentVariants.item}
            initial={enableMotion ? "hidden" : false}
            animate={enableMotion ? "show" : undefined}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <span className="rounded-full border border-white/20 px-4 py-1 text-sm text-text-secondary">
              电竞 · 洗浴 · 桌游 · 胶囊住宿
            </span>
          </motion.div>
        </motion.div>

        <motion.a
          href="#diverge"
          className="absolute bottom-8 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-colors hover:text-text-primary"
          aria-label="向下滚动"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  y: [0, 8, 0]
                }
          }
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 2, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <ChevronDown className="h-5 w-5" />
        </motion.a>
      </div>
    </section>
  );
}

