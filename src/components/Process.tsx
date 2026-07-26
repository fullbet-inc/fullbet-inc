import Reveal from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "ヒアリング & 戦略設計",
    desc: "ブランドの現状と目標を整理し、TikTok Shopでの勝ち筋を設計します。",
  },
  {
    n: "02",
    title: "ショップ構築 & 商品登録",
    desc: "出店申請から商品ページ制作まで、販売基盤をスピーディーに構築します。",
  },
  {
    n: "03",
    title: "クリエイティブ制作 & 配信",
    desc: "ショート動画・ライブ配信を継続的に制作し、ショップへの導線を作ります。",
  },
  {
    n: "04",
    title: "グロース & 最適化",
    desc: "データを見ながら広告・商品・配信を改善し続け、売上を伸ばします。",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative bg-bg-elevated py-28 md:py-36">
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0 opacity-60"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-[11px] text-accent-pink">Process</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            立ち上げから成長まで、
            <br />
            4つのステップで。
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-4">
          {STEPS.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.08} className="relative">
              <div className="flex flex-col">
                <span className="eyebrow text-4xl font-semibold text-transparent [-webkit-text-stroke:1px_var(--border-strong)] sm:text-5xl">
                  {step.n}
                </span>
                <h3 className="mt-5 text-[16px] font-medium text-fg">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-fg-muted">
                  {step.desc}
                </p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="pointer-events-none absolute right-[-16px] top-2 hidden h-px w-8 bg-border md:block" />
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
