import Logo from "./Logo";

const COLUMNS = [
  {
    heading: "Service",
    links: [
      { label: "TikTok Shop運用代行", href: "#services" },
      { label: "ライブコマース制作", href: "#services" },
      { label: "商品ソーシング", href: "#services" },
      { label: "クリエイティブ制作", href: "#services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "サービス", href: "#services" },
      { label: "プロセス", href: "#process" },
      { label: "強み", href: "#why" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-xs">
            <a href="#top" className="flex items-center gap-2.5">
              <Logo className="h-6 w-6" />
              <span className="text-[15px] font-semibold tracking-tight text-fg">
                Fullbet
              </span>
            </a>
            <p className="mt-4 text-[13px] leading-relaxed text-fg-subtle">
              TikTok Shopに特化したEC運用パートナー。
              商品企画からライブコマース、物流までをワンストップで支援します。
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            {COLUMNS.map((col) => (
              <div key={col.heading}>
                <p className="eyebrow text-[11px] text-fg-subtle">
                  {col.heading}
                </p>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[13px] text-fg-muted transition-colors hover:text-fg"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-[12px] text-fg-subtle sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Fullbet Inc.</p>
          <p>Tokyo, Japan</p>
        </div>
      </div>
    </footer>
  );
}
