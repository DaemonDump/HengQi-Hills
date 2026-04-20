import { SectionTitle } from "@/app/components/SectionTitle";
import { TIMELINE } from "@/lib/content";

export function Timeline() {
  return (
    <section className="py-32 md:py-40">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionTitle
          label="TIMELINE"
          title="发展路径"
          subtitle="从概念到落地的三个阶段"
          align="center"
        />

        <div className="relative mt-16">
          <div className="absolute left-4 top-0 h-full w-px bg-white/20" />
          <div className="space-y-10">
            {TIMELINE.map((item) => (
              <div key={item.phase} className="relative pl-12">
                <div className="absolute left-3 top-2 h-3 w-3 -translate-x-1/2 rounded-full bg-primary" />
                <div className="rounded-3xl border border-white/10 bg-surface/40 p-6">
                  <p className="font-mono text-sm text-primary">
                    Phase {item.phase}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight text-text-primary">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-tertiary">{item.date}</p>
                  <p className="mt-4 text-base leading-relaxed text-text-secondary">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
