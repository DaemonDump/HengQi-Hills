import Link from "next/link";

export default function SpacesPage() {
  return (
    <main className="pb-24 pt-14">
      <section className="border-b border-white/10 py-20 scroll-mt-20" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              空间
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              四个子品牌对应四种核心场景与门店形态，组合在一起形成完整的“娱乐综合体”体验闭环。
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="diverge-lab"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Diverge Lab
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            策略选择，多线叙事的实验场
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            业态：桌游 / 剧本杀 / 社交。门店形态：300-500㎡社区店。目标客群：20-30岁，小团体聚会。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              私密包间
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              玩法策划
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              社群活动
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="everpeak-arena">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Everpeak Arena
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            巅峰竞技，持续进化的竞技场
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            业态：电竞 / 赛事 / 直播。门店形态：800-1500㎡旗舰店。目标客群：18-25岁，硬核玩家。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              赛事舞台
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              职业设备
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              训练体系
            </span>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="crossroads-lounge"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Crossroads Lounge
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            人流交汇，轻社交的入口
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            业态：咖啡 / 轻食 / 社交大厅。门店形态：200-400㎡流量入口。目标客群：25-35岁，自由职业者。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              共享工位
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              轻食补给
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              社交活动
            </span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="nexus-stay">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Nexus Stay
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            身心连接，能量恢复的枢纽
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            业态：胶囊住宿 / 休息舱。门店形态：与前三者配套或独立。目标客群：所有业态的过夜需求。
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              静音遮光
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              快速入住
            </span>
            <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-text-secondary">
              独立储物
            </span>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            组合建议
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-secondary">
            城市旗舰可用 Everpeak 作为中心引擎，Crossroads 做流量入口，Diverge 做社群粘性，Nexus 补全夜间与长局体验。
          </p>
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
