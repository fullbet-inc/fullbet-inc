import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import SalesNav from "./_components/SalesNav";
import SalesLogo, { BRAND_NAME, BRAND_NAME_JA } from "./_components/SalesLogo";

// ※ 掲載している社名・数値・事例・連絡先はすべて仮のダミーです。
const PHONE = "03-0000-0000";

export const metadata: Metadata = {
  title: `${BRAND_NAME} | BtoB特化の営業支援・営業代行`,
  description:
    "営業課題に合わせて専門チームを構築するBtoB特化の営業支援サービス。リード獲得から商談・受注、顧客育成まで一気通貫で伴走します。",
  openGraph: {
    title: `${BRAND_NAME} | BtoB特化の営業支援・営業代行`,
    description:
      "営業課題に合わせて専門チームを構築するBtoB特化の営業支援サービス。",
    locale: "ja_JP",
    type: "website",
  },
};

const CLIENTS = [
  "SAMPLE Corp.",
  "Dummy Holdings",
  "Placeholder Inc.",
  "Example Tech",
  "Mock Systems",
  "Logo Partners",
  "Acme Japan",
  "Brand Name Co.",
];

const STRENGTHS = [
  {
    no: "01",
    title: "課題に合わせた\n専門チーム構築",
    body: "業界・商材・営業フェーズを踏まえ、最適なスキルセットを持つメンバーでチームを編成。成果にコミットする体制を短期間で立ち上げます。",
  },
  {
    no: "02",
    title: "柔軟な\n人材供給体制",
    body: "立ち上げ期の少人数体制から、拡大期の大規模体制まで。事業フェーズに応じて人員を柔軟に増減できます。",
  },
  {
    no: "03",
    title: "ノウハウの\n社内定着",
    body: "代行して終わりではなく、トークスクリプトや運用プロセスを資産として残し、貴社の営業組織の自走化まで支援します。",
  },
];

const SERVICES = [
  {
    title: "営業代行・アウトソーシング",
    body: "戦略設計から実行まで、営業活動をまるごとお任せいただけます。",
    icon: "M4 7h16M4 12h16M4 17h10",
  },
  {
    title: "インサイドセールス支援",
    body: "リードナーチャリングから商談化まで、非対面で効率的にパイプラインを構築。",
    icon: "M3 5h18v12H8l-5 4z",
  },
  {
    title: "テレマーケティング支援",
    body: "ターゲットリスト作成からアポイント獲得まで、架電業務を代行します。",
    icon: "M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2",
  },
  {
    title: "フィールドセールス支援",
    body: "経験豊富な営業担当が商談・クロージングを担い、受注率を高めます。",
    icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75",
  },
  {
    title: "カスタマーサクセス支援",
    body: "オンボーディングから活用促進まで、解約防止とアップセルを実現します。",
    icon: "M20 6 9 17l-5-5",
  },
  {
    title: "営業研修・組織開発",
    body: "現場で成果を出してきたノウハウをもとに、営業人材の育成を支援します。",
    icon: "M22 10 12 5 2 10l10 5 10-5zM6 12v5c3 2 9 2 12 0v-5",
  },
];

const CASES = [
  {
    tag: "IT・SaaS",
    company: "A社（SaaS企業）",
    title: "インサイドセールス立ち上げで商談数が大幅に増加",
    challenge: "リードはあるが商談化できず、営業リソースも不足していた。",
  },
  {
    tag: "人材",
    company: "B社（人材サービス）",
    title: "新規開拓チームを外部化し、既存営業はコア業務に集中",
    challenge: "新規開拓と既存対応の両立ができず、成長が鈍化していた。",
  },
  {
    tag: "製造業",
    company: "C社（メーカー）",
    title: "新商材の市場テストを短期間で実施し、販路を確立",
    challenge: "新規事業の検証に割ける社内人材がいなかった。",
  },
];

const FAQS = [
  {
    q: "最低契約期間はありますか？",
    a: "原則として3ヶ月からのご契約をお願いしております。内容に応じて柔軟にご相談可能です。（※ダミーテキスト）",
  },
  {
    q: "依頼してからどのくらいで稼働できますか？",
    a: "ヒアリングから体制構築まで、最短で数週間程度での稼働開始が可能です。（※ダミーテキスト）",
  },
  {
    q: "費用はどのように決まりますか？",
    a: "支援範囲・稼働人数・期間などによって変動します。まずはお気軽にお問い合わせください。（※ダミーテキスト）",
  },
  {
    q: "どこまでの業務を依頼できますか？",
    a: "戦略設計からリスト作成、アポイント獲得、商談、カスタマーサクセスまで、営業プロセス全般に対応しています。",
  },
];

export default function SalesPage() {
  return (
    <div className="flex flex-1 flex-col bg-white text-slate-800 [color-scheme:light]">
      <SalesNav />
      <main className="flex-1">
        <Hero />
        <Clients />
        <About />
        <Strengths />
        <Services />
        <Cases />
        <Faq />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}

function SectionHead({
  en,
  ja,
  light = false,
}: {
  en: string;
  ja: string;
  light?: boolean;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <p className="mb-3 font-mono text-[12px] font-semibold uppercase tracking-[0.2em] text-[#2f6bff]">
        {en}
      </p>
      <h2
        className={`text-[26px] font-bold leading-snug tracking-tight md:text-[36px] ${
          light ? "text-white" : "text-[#0b1b3f]"
        }`}
      >
        {ja}
      </h2>
    </div>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-[#eef3ff] to-white pt-32 pb-20 md:pt-44 md:pb-28"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full bg-[#2f6bff]/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-6 lg:grid-cols-[1.15fr_1fr]">
        <Reveal>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[12px] font-bold text-[#2f6bff] shadow-sm ring-1 ring-[#2f6bff]/15">
            <span className="h-1.5 w-1.5 rounded-full bg-[#2f6bff]" />
            BtoB特化の営業支援サービス
          </p>
          <h1 className="text-[34px] font-bold leading-[1.35] tracking-tight text-[#0b1b3f] sm:text-[44px] xl:text-[52px]">
            <span className="inline-block">営業課題に</span>
            <span className="inline-block">合わせて、</span>
            <br />
            <span className="inline-block">
              <span className="text-[#2f6bff]">専門チーム</span>を
            </span>
            <span className="inline-block">構築する。</span>
          </h1>
          <p className="mt-6 max-w-xl text-[15px] leading-[1.9] text-slate-600 md:text-[16px]">
            {BRAND_NAME_JA}は、営業のプロフェッショナルと人材活用のノウハウを掛け合わせ、
            リード獲得から受注、顧客育成まで、貴社の営業課題を柔軟に解決するパートナーです。
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#2f6bff] px-8 text-[15px] font-bold text-white shadow-lg shadow-[#2f6bff]/25 transition-colors hover:bg-[#1f55e0]"
            >
              無料で資料をダウンロード
              <span aria-hidden>→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-14 items-center justify-center rounded-full border border-[#0b1b3f] bg-white px-8 text-[15px] font-bold text-[#0b1b3f] transition-colors hover:bg-[#0b1b3f] hover:text-white"
            >
              お問い合わせ
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="hidden lg:block">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  const rows = [
    { label: "リード獲得", w: "92%" },
    { label: "アポイント", w: "74%" },
    { label: "商談", w: "56%" },
    { label: "受注", w: "38%" },
  ];
  return (
    <div className="relative">
      <div className="rounded-3xl bg-white p-7 shadow-[0_30px_80px_-30px_rgba(11,27,63,0.35)] ring-1 ring-slate-200">
        <div className="mb-6 flex items-center justify-between">
          <p className="text-[13px] font-bold text-[#0b1b3f]">営業パイプライン</p>
          <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-[11px] font-bold text-[#2f6bff]">
            イメージ
          </span>
        </div>
        <div className="space-y-4">
          {rows.map((r) => (
            <div key={r.label}>
              <div className="mb-1.5 text-[12px] font-medium text-slate-500">{r.label}</div>
              <div className="h-3 rounded-full bg-slate-100">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-[#2f6bff] to-[#6c9bff]"
                  style={{ width: r.w }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-8 -left-8 rounded-2xl bg-[#0b1b3f] px-6 py-5 text-white shadow-xl">
        <p className="text-[11px] font-medium text-white/60">支援領域</p>
        <p className="mt-1 text-[15px] font-bold">戦略設計 → 実行 → 定着</p>
      </div>
    </div>
  );
}

function Clients() {
  return (
    <section className="border-y border-slate-100 bg-white py-10">
      <p className="mb-6 text-center text-[12px] font-bold tracking-wider text-slate-400">
        さまざまな業界の企業様にご利用いただいています（※ロゴはダミー）
      </p>
      <div className="relative overflow-hidden">
        <div className="animate-marquee flex w-max gap-4">
          {[...CLIENTS, ...CLIENTS].map((c, i) => (
            <div
              key={i}
              className="flex h-14 w-44 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-[13px] font-bold text-slate-400 ring-1 ring-slate-100"
            >
              {c}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <SectionHead en="About" ja={`${BRAND_NAME_JA}とは`} />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-[20px] font-bold leading-relaxed text-[#0b1b3f] md:text-[24px]">
            BtoB営業の課題を、
            <br />
            ともに解決するパートナーへ。
          </p>
          <p className="mt-6 text-[15px] leading-[2] text-slate-600">
            私たちは、単なる業務の代行ではなく、貴社の一員として営業課題に向き合う専門チームです。
            リード獲得から商談・クロージング、そして受注後の顧客育成まで。
            営業プロセスのどこに課題があっても、最適な体制とノウハウで成果創出を支援します。
          </p>
          <a
            href="#services"
            className="mt-8 inline-flex items-center gap-2 text-[14px] font-bold text-[#2f6bff] hover:underline"
          >
            ソリューションを見る <span aria-hidden>→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function Strengths() {
  return (
    <section id="strengths" className="scroll-mt-20 bg-[#f5f7fb] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <Reveal>
          <SectionHead en="Strengths" ja="選ばれる3つの理由" />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {STRENGTHS.map((s, i) => (
            <Reveal key={s.no} delay={i * 0.08}>
              <div className="h-full rounded-2xl bg-white p-8 ring-1 ring-slate-200/70">
                <p className="font-mono text-[40px] font-bold leading-none text-[#2f6bff]/20">
                  {s.no}
                </p>
                <h3 className="mt-5 whitespace-pre-line text-[20px] font-bold leading-snug text-[#0b1b3f]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] leading-[1.9] text-slate-600">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <Reveal>
          <SectionHead en="Services" ja="サービス" />
        </Reveal>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-slate-200 ring-1 ring-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group bg-white p-8 transition-colors hover:bg-[#f5f8ff]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#eef3ff] text-[#2f6bff] transition-colors group-hover:bg-[#2f6bff] group-hover:text-white">
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden
                >
                  <path d={s.icon} />
                </svg>
              </div>
              <h3 className="mt-5 text-[17px] font-bold text-[#0b1b3f]">{s.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.85] text-slate-600">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases() {
  return (
    <section id="cases" className="scroll-mt-20 bg-[#0b1b3f] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-6">
        <Reveal>
          <SectionHead
            en="Case Studies"
            ja="上場企業からスタートアップまで、幅広く支援"
            light
          />
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {CASES.map((c, i) => (
            <Reveal key={c.company} delay={i * 0.08}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white">
                <div className="flex aspect-[16/9] items-center justify-center bg-gradient-to-br from-[#dbe5ff] to-[#eef3ff]">
                  <span className="text-[12px] font-bold tracking-wider text-[#2f6bff]/60">
                    CASE IMAGE
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-[#eef3ff] px-3 py-1 text-[11px] font-bold text-[#2f6bff]">
                      {c.tag}
                    </span>
                    <span className="text-[12px] text-slate-500">{c.company}</span>
                  </div>
                  <h3 className="mt-4 text-[16px] font-bold leading-relaxed text-[#0b1b3f]">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[13px] leading-[1.8] text-slate-500">
                    <span className="font-bold text-slate-600">課題：</span>
                    {c.challenge}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-[12px] text-white/50">※ 掲載事例はイメージです。</p>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="scroll-mt-20 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-6">
        <Reveal>
          <SectionHead en="FAQ" ja="よくある質問" />
        </Reveal>
        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {FAQS.map((f) => (
            <details key={f.q} className="group py-2">
              <summary className="flex cursor-pointer list-none items-center gap-4 py-4 [&::-webkit-details-marker]:hidden">
                <span className="font-mono text-[18px] font-bold text-[#2f6bff]">Q</span>
                <span className="flex-1 text-[15px] font-bold text-[#0b1b3f]">{f.q}</span>
                <span className="text-[20px] text-slate-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="flex gap-4 pb-5">
                <span className="font-mono text-[18px] font-bold text-slate-300">A</span>
                <p className="flex-1 text-[14px] leading-[1.9] text-slate-600">{f.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section id="contact" className="scroll-mt-20 bg-[#f5f7fb] px-5 py-20 md:px-6 md:py-24">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2f6bff] to-[#1a3fb8] px-6 py-14 text-center text-white md:px-12 md:py-20">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10"
          />
          <p className="relative text-[13px] font-bold tracking-wider text-white/70">CONTACT</p>
          <h2 className="relative mt-3 text-[24px] font-bold leading-snug md:text-[34px]">
            営業の課題、まずはお気軽にご相談ください。
          </h2>
          <div className="relative mt-10 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
              <p className="text-[13px] text-white/70">お電話でのお問い合わせ</p>
              <p className="mt-2 font-mono text-[28px] font-bold tracking-wide">{PHONE}</p>
              <p className="mt-1 text-[12px] text-white/60">受付時間 平日 10:00〜18:00</p>
            </div>
            <div className="flex flex-col justify-center gap-3 rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
              <a
                href="#contact"
                className="flex h-12 items-center justify-center rounded-full bg-white text-[14px] font-bold text-[#2f6bff] transition-opacity hover:opacity-90"
              >
                無料で資料をダウンロード
              </a>
              <a
                href="#contact"
                className="flex h-12 items-center justify-center rounded-full border border-white/60 text-[14px] font-bold text-white transition-colors hover:bg-white/10"
              >
                フォームでお問い合わせ
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0b1b3f] text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <SalesLogo inverted />
          <p className="mt-4 text-[13px] leading-[1.9] text-white/60">
            BtoB特化の営業支援サービス
            <br />
            〒000-0000 東京都○○区○○ 0-0-0（ダミー）
          </p>
        </div>
        <div>
          <p className="mb-4 text-[12px] font-bold tracking-wider text-white/40">SERVICES</p>
          <ul className="space-y-2.5">
            {SERVICES.map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-[13px] text-white/75 hover:text-white">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-4 text-[12px] font-bold tracking-wider text-white/40">COMPANY</p>
          <ul className="space-y-2.5 text-[13px] text-white/75">
            <li>
              <Link href="/" className="hover:text-white">
                運営会社
              </Link>
            </li>
            <li>
              <a href="#faq" className="hover:text-white">
                よくある質問
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                お問い合わせ
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-[11px] text-white/40">
        © {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </div>
    </footer>
  );
}
