"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { SectionTitle } from "@/app/components/SectionTitle";
import { cn } from "@/lib/utils";

const features = [
  {
    no: "01",
    title: "职业级电竞设备",
    desc: "高刷新率显示器与低延迟外设，面向训练与赛事的统一标准。",
    bullets: ["高配硬件标准化", "赛事级网络与音频", "多房型灵活组合"],
    image: "/images/concept-everpeak.webp"
  },
  {
    no: "02",
    title: "沉浸式洗浴恢复",
    desc: "从高压节奏到身心归位，提供更安静、更私密的恢复空间。",
    bullets: ["分区动线清晰", "私密与安全优先", "轻量社交可控"],
    image: "/images/concept-nexus.webp"
  },
  {
    no: "03",
    title: "策略桌游与剧本",
    desc: "多线叙事与社交推演，在“分歧”处打开新的可能。",
    bullets: ["主题房间可扩展", "主持与玩法体系", "社群活动机制"],
    image: "/images/concept-diverge.webp"
  },
  {
    no: "04",
    title: "胶囊住宿与补给",
    desc: "夜间长局与跨城赛事的短时停靠点，把效率与舒适同时做满。",
    bullets: ["静音与遮光", "独立储物与充电", "快速入住与退房"],
    image: "/images/concept-crossroads.webp"
  }
] as const;

export function Features() {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionTitle
          label="FEATURES"
          title="功能特色"
          subtitle="四大业态的统一体验标准"
        />
      </div>

      <div className="mt-16">
        {features.map((item, idx) => {
          const reversed = idx % 2 === 1;
          return (
            <div
              key={item.no}
              className={idx % 2 === 1 ? "bg-surface/30" : undefined}
            >
              <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
                <div
                  className={[
                    "flex flex-col gap-16",
                    reversed ? "lg:flex-row-reverse" : "lg:flex-row"
                  ].join(" ")}
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-3xl border border-white/10 bg-surface lg:w-1/2">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className={cn("object-cover", failed[item.no] ? "opacity-0" : "opacity-100")}
                      onError={() => setFailed((s) => ({ ...s, [item.no]: true }))}
                    />
                    {failed[item.no] ? (
                      <div className="absolute inset-0 bg-gradient-to-b from-black via-surface to-black" />
                    ) : null}
                  </div>

                  <div className="flex w-full flex-col justify-center lg:w-1/2">
                    <p className="font-mono text-sm text-primary">{item.no}</p>
                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
                      {item.desc}
                    </p>
                    <ul className="mt-8 space-y-3">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-3 text-sm text-text-secondary md:text-base"
                        >
                          <Check className="mt-1 h-4 w-4 flex-none text-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
