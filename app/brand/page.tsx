import Link from "next/link";

export default function BrandPage() {
  return (
    <main className="pb-24 pt-14">
      <section className="border-b border-white/10 py-20 scroll-mt-20" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              品牌
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              HengQi Hills 是一个关于选择与汇聚的叙事系统：在分歧处探索，在巅峰处竞技，在交汇处遇见，在枢纽处恢复。
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="brand-story"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Brand Story
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            起源与愿景
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              恒歧山不是把所有内容堆在一起，而是把不同强度的体验拆成清晰模块，让人可以自由切换：热闹、专注、社交、休息。
            </p>
            <p>
              我们追求的是“高强度娱乐”的可持续：动线更清晰、噪音更可控、体验更稳定，所有细节都围绕长期运营优化。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="visual-system">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Visual System
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            视觉识别
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              深色为底、蓝色为光。大留白与大字号提供叙事空间，毛玻璃与微光把“科技感”做得克制而高级。
            </p>
            <p>
              视觉系统服务于内容：减少装饰，突出层级；减少噪声，增加节奏；减少堆叠，增加秩序。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20" id="milestones">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Milestones
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            发展路径
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>我们用“单店模型验证 → 城市复制 → 全国连锁”的节奏推进。</p>
            <p>
              在每一个阶段，标准化体验与数字化运营都会先于规模扩张，确保复制的是可运行的系统，而不是一次性的热度。
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
                下一步
              </h2>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                你可以从空间与体验开始理解产品，也可以直接进入合作页面了解对接方式。
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/spaces"
                className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-black"
              >
                浏览空间
              </Link>
              <Link
                href="/cooperation"
                className="rounded-full border border-white/20 px-6 py-3 text-sm text-text-primary"
              >
                查看合作
              </Link>
            </div>
          </div>

          <Link
            href="/"
            className="mt-10 inline-flex text-sm text-text-secondary hover:text-text-primary"
          >
            返回首页
          </Link>
        </div>
      </section>
    </main>
  );
}
