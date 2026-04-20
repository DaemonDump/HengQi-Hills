import Link from "next/link";

export default function ExperiencePage() {
  return (
    <main className="pb-24 pt-14">
      <section className="border-b border-white/10 py-20 scroll-mt-20" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              体验
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              我们把体验拆成可复用的模块：竞技、恢复、叙事与休息。每一项都能独立成立，也能组合成更强的场景闭环。
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20" id="esports">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            电竞
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            从设备、网络、声学到对战节奏，围绕“职业级稳定”打造持续进化的竞技场。你会感受到更低延迟、更可控的环境，以及更清晰的对局节奏。
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="bath">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            洗浴
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            给高强度社交与对战留出恢复空间，强调安静、私密、干净与可控的动线。恢复不是附属品，而是让体验可持续的关键。
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20" id="tabletop">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            桌游
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            多线叙事与策略选择，核心是“讨论与决策”。我们更重视灯光、音量与桌面尺度这些细节，让沉浸感稳定地发生。
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="stay">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            住宿
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            为夜间长局与跨城赛事提供短时停靠点，把效率与舒适做在同一套标准里：静音、遮光、独立储物与快速入住。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            体验原则
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                Consistency
              </p>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                关键节点体验一致，减少学习成本。
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                Privacy
              </p>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                私密可控，热闹不喧哗。
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
                Flow
              </p>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                动线清晰，切换成本极低。
              </p>
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
