import Link from "next/link";

export default function CooperationPage() {
  return (
    <main className="pb-24 pt-14">
      <section className="border-b border-white/10 py-20 scroll-mt-20" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              合作
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              我们提供可复制的空间模型、可运营的内容体系，以及面向长期增长的合作结构。
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="licensing"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Licensing
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            品牌授权
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            导入品牌体系、视觉规范与核心体验标准，快速搭建城市级样板门店：从空间动线到运营模块，一次性对齐关键节点体验。
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="renovation">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Renovation
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            空间改造
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            面向存量资产升级，从分区、灯光声学到运营模块的整套方案。目标是把“好看”变成“能跑”的长期收益模型。
          </p>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="investment"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Investment
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            投资合作
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            以区域合伙为目标，提供城市拓展策略、标准化运营与会员体系，帮助你把单店做成可复制的区域网络。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            合作流程
          </h2>
          <ol className="mt-8 divide-y divide-white/10 rounded-3xl border border-white/10 bg-white/5">
            <li className="p-6">
              <p className="font-mono text-sm text-primary">01</p>
              <p className="mt-2 text-base text-text-primary">初步沟通</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                定位、城市、预算、周期，以及你希望优先解决的问题。
              </p>
            </li>
            <li className="p-6">
              <p className="font-mono text-sm text-primary">02</p>
              <p className="mt-2 text-base text-text-primary">方案评估</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                选址与模型匹配，确定空间结构、投资结构与阶段目标。
              </p>
            </li>
            <li className="p-6">
              <p className="font-mono text-sm text-primary">03</p>
              <p className="mt-2 text-base text-text-primary">落地执行</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                设计、施工、设备与培训同步推进，关键节点验收与试运营。
              </p>
            </li>
            <li className="p-6">
              <p className="font-mono text-sm text-primary">04</p>
              <p className="mt-2 text-base text-text-primary">运营增长</p>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                活动体系、会员增长与复购机制，持续优化单店与区域效率。
              </p>
            </li>
          </ol>

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
