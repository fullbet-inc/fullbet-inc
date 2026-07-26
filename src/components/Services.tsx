import Reveal from "./Reveal";

const SERVICES = [
  {
    tag: "01",
    title: "TikTok Shop運用代行",
    desc: "出店設計から日々の在庫・広告運用まで、ショップ運営を一気通貫で代行します。",
  },
  {
    tag: "02",
    title: "ライブコマース制作",
    desc: "企画・配信・アフターフォローまでワンストップ。配信を売上に直結させます。",
  },
  {
    tag: "03",
    title: "商品ソーシング & 企画",
    desc: "トレンドを捉えたプロダクト開発と、サプライチェーンの構築を支援します。",
  },
  {
    tag: "04",
    title: "クリエイティブ制作",
    desc: "ショート動画・LP・バナーなど、TikTok Shopに最適化したクリエイティブを制作。",
  },
  {
    tag: "05",
    title: "データ分析 & グロース設計",
    desc: "購買データを起点にしたPDCAで、継続的な売上成長のサイクルを構築します。",
  },
  {
    tag: "06",
    title: "物流 & カスタマーサポート",
    desc: "フルフィルメントから問い合わせ対応まで、バックオフィスをシームレスに代行。",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-bg py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow text-[11px] text-accent-cyan">Services</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
            EC運営に必要なすべてを、
            <br />
            ワンストップで。
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">
            企画から配信、物流まで。TikTok Shopで成果を出すために必要な機能を、
            チームごと組み込みます。
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.tag} delay={i * 0.06}>
              <div className="group relative h-full bg-bg p-7 transition-colors duration-300 hover:bg-bg-elevated">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(240px circle at var(--x,50%) var(--y,0%), rgba(37,244,238,0.06), transparent 70%)",
                  }}
                />
                <span className="eyebrow text-[11px] text-fg-subtle">
                  {s.tag}
                </span>
                <h3 className="mt-5 text-[16px] font-medium text-fg">
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[13.5px] leading-relaxed text-fg-muted">
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
