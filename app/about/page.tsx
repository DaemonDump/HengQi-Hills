import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="pb-24 pt-14">
      <section className="border-b border-white/10 py-20 scroll-mt-20" id="top">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-5xl">
              关于
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary md:text-lg">
              我们把空间当作一种产品，把体验当作一种系统，把运营当作一种长期能力。
            </p>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="mission"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Mission
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            使命
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            让年轻人拥有更高质量的线上娱乐与社交场域：更好的设备、更好的动线、更好的恢复空间，以及更好的夜间体验。
          </p>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 scroll-mt-20" id="values">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Values
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            价值观
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            克制、稳定、可复用。我们更愿意把问题做“更简单”，而不是把页面做“更热闹”。
          </p>
        </div>
      </section>

      <section
        className="border-b border-white/10 bg-surface/15 py-20 scroll-mt-20"
        id="team"
      >
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <p className="text-xs font-medium uppercase tracking-widest text-text-tertiary">
            Team
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-text-primary md:text-4xl">
            团队
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-text-secondary">
            内容策划负责“玩法与活动”，空间设计负责“动线与氛围”，运营增长负责“会员与复购”，技术团队负责“效率与一致性”。
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <h2 className="text-2xl font-semibold tracking-tight text-text-primary md:text-3xl">
            联系方式
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-text-secondary">
            <p>
              邮箱：<span className="text-text-primary">contact@hengqihills.com</span>
            </p>
            <p>
              地址：<span className="text-text-primary">地址占位符</span>
            </p>
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
