"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-bg pt-40 pb-28 md:pt-48 md:pb-36"
    >
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[110px] glow-cyan"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[8%] top-[18%] h-[360px] w-[360px] rounded-full opacity-[0.14] blur-[100px] glow-pink"
      />

      {/* Grid backdrop */}
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          variants={item}
          className="eyebrow mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated px-3.5 py-1.5 text-[11px] text-fg-muted"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-cyan opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-cyan" />
          </span>
          TikTok Shop Growth Partner
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance text-[2.6rem] font-semibold leading-[1.12] tracking-tight text-fg sm:text-6xl md:text-[4.2rem]"
        >
          TikTok Shopを、
          <br />
          <span className="text-gradient">売上の主戦場に。</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-7 max-w-xl text-balance text-[15px] leading-relaxed text-fg-muted sm:text-lg"
        >
          Fullbetは、商品企画・ライブコマース・物流までを一気通貫で支援する
          TikTok Shop特化のEC運用パートナーです。動画とデータで、
          売れる仕組みを設計します。
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-3.5 sm:flex-row"
        >
          <a
            href="#contact"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[14px] font-medium text-bg transition-all hover:bg-white hover:shadow-[0_0_0_4px_rgba(244,244,245,0.12)]"
          >
            無料相談を申し込む
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
          <a
            href="#services"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-border px-6 text-[14px] font-medium text-fg transition-colors hover:border-border-strong hover:bg-bg-elevated"
          >
            サービスを見る
          </a>
        </motion.div>

        <motion.div
          variants={item}
          className="mt-8 flex items-center gap-2 text-[12px] text-fg-subtle"
        >
          <span className="eyebrow">TIKTOK SHOP</span>
          <span className="h-1 w-1 rounded-full bg-fg-subtle" />
          <span>出店設計 &middot; ライブコマース &middot; クリエイティブ &middot; 物流</span>
        </motion.div>
      </motion.div>

      {/* Floating product / metric cards */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-20 hidden max-w-5xl px-6 md:block"
      >
        <div className="relative rounded-2xl border border-border bg-bg-elevated/60 p-2 shadow-[0_0_80px_-20px_rgba(37,244,238,0.15)] backdrop-blur">
          <div className="grid grid-cols-3 gap-2">
            <FloatingCard
              label="LIVE"
              title="ライブコマース配信"
              sub="視聴 12.4K &middot; 進行中"
              accent="cyan"
            />
            <FloatingCard
              label="GMV"
              title="売上トラッキング"
              sub="今月の推移をリアルタイム可視化"
              accent="mix"
            />
            <FloatingCard
              label="SHOP"
              title="商品ラインナップ"
              sub="新商品を自動でショップに反映"
              accent="pink"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function FloatingCard({
  label,
  title,
  sub,
  accent,
}: {
  label: string;
  title: string;
  sub: string;
  accent: "cyan" | "pink" | "mix";
}) {
  const dot =
    accent === "cyan"
      ? "bg-accent-cyan"
      : accent === "pink"
        ? "bg-accent-pink"
        : "bg-gradient-to-r from-accent-cyan to-accent-pink";

  return (
    <div className="rounded-xl border border-border bg-bg p-5 text-left transition-colors hover:border-border-strong">
      <div className="mb-4 flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className="eyebrow text-[10px] text-fg-subtle">{label}</span>
      </div>
      <p className="text-[13px] font-medium text-fg">{title}</p>
      <p className="mt-1.5 text-[12px] leading-relaxed text-fg-subtle">{sub}</p>
    </div>
  );
}
