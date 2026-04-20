"use client";

import Image from "next/image";
import { useState } from "react";

import { SectionTitle } from "@/app/components/SectionTitle";
import { CONCEPTS } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Concepts() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="relative overflow-hidden py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-50"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        >
          <source src="/videos/2.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle
          label="FOUR PILLARS"
          title="四大体验空间"
          subtitle="Diverge · Everpeak · Crossroads · Nexus"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {CONCEPTS.map((concept) => (
            <div key={concept.id} id={concept.id} className="scroll-mt-24">
              <div className="group relative aspect-3/4 overflow-hidden rounded-3xl border border-white/10 bg-surface transition-transform duration-300 hover:scale-105 hover:border-primary/50">
                <Image
                  src={concept.image}
                  alt={`${concept.nameEn} ${concept.name}`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className={cn("object-cover", failed[concept.id] ? "opacity-0" : "opacity-100")}
                  onError={() => setFailed((s) => ({ ...s, [concept.id]: true }))}
                />
                {failed[concept.id] ? (
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />
                ) : null}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-semibold tracking-tight text-text-primary">
                    {concept.nameEn}
                  </h3>
                  <p className="mt-1 text-lg text-text-secondary">{concept.name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-text-tertiary">
                    {concept.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
