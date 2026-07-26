import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-bg py-28 md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.14] blur-[110px] glow-cyan animate-pulse-slow"
      />
      <div
        aria-hidden
        className="bg-grid bg-grid-fade pointer-events-none absolute inset-0"
      />

      <Reveal className="relative mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <p className="eyebrow text-[11px] text-fg-subtle">Get Started</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-fg sm:text-5xl">
          まずは、相談から。
        </h2>
        <p className="mt-5 max-w-md text-[15px] leading-relaxed text-fg-muted">
          貴社の商材とTikTok Shopの相性、次の一手について。
          30分のオンラインMTGで率直にお話しします。
        </p>

        <div className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row">
          <a
            href="mailto:contact@fullbet.co.jp"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-fg px-6 text-[14px] font-medium text-bg transition-all hover:bg-white hover:shadow-[0_0_0_4px_rgba(244,244,245,0.12)]"
          >
            contact@fullbet.co.jp
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
