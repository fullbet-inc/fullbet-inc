// 仮ロゴ。正式なロゴが決まったら差し替える。
export const BRAND_NAME = "Fullbet Sales";
export const BRAND_NAME_JA = "フルベット・セールス";
export const CONTACT_EMAIL = "y.yoshizawa@fullbet-inc.com";
export const CONTACT_MAILTO = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("営業支援サービスについてのお問い合わせ")}`;

export default function SalesLogo({ inverted = false }: { inverted?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg viewBox="0 0 32 32" className="h-8 w-8" aria-hidden="true">
        <rect width="32" height="32" rx="8" fill={inverted ? "#ffffff" : "#0b1b3f"} />
        <path
          d="M9 21.5 14 16l3.5 3.5L23 12"
          fill="none"
          stroke="#2f6bff"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="23" cy="12" r="2.2" fill={inverted ? "#0b1b3f" : "#ffffff"} />
      </svg>
      <span
        className={`text-[17px] font-bold tracking-tight ${
          inverted ? "text-white" : "text-[#0b1b3f]"
        }`}
      >
        {BRAND_NAME}
      </span>
    </span>
  );
}
