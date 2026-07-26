import Reveal from "./Reveal";

const POINTS = [
  {
    title: "TikTok Shop特化",
    desc: "複数のECモールを浅く広く扱うのではなく、TikTok Shopのアルゴリズムと購買導線を深く理解した専任チームが伴走します。",
  },
  {
    title: "動画発想のクリエイティブ",
    desc: "『広告に見えないコンテンツ』を軸に、視聴からショップ遷移・購入までの離脱を減らす設計を行います。",
  },
  {
    title: "運用とデータの両輪",
    desc: "配信・クリエイティブの現場感と、購買データの分析を同じチームで扱うことで、改善のサイクルを速く回します。",
  },
];

export default function WhyUs() {
  return (
    <section id="why" className="relative bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-[11px] text-accent-cyan">Why Fullbet</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            なぜ、Fullbetなのか。
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {POINTS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-bg-elevated p-8">
                <div
                  aria-hidden
                  className="absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-[0.12] blur-2xl"
                  style={{
                    background:
                      i % 2 === 0
                        ? "radial-gradient(circle, #25f4ee, transparent 70%)"
                        : "radial-gradient(circle, #fe2c55, transparent 70%)",
                  }}
                />
                <span className="eyebrow text-[11px] text-fg-subtle">
                  0{i + 1}
                </span>
                <h3 className="mt-5 text-[17px] font-medium text-fg">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-fg-muted">
                  {p.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
