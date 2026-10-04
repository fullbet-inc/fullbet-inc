"use client";

import { useEffect, useState } from "react";
import SalesLogo, { CONTACT_MAILTO } from "./SalesLogo";

const LINKS = [
  { href: "#about", label: "私たちについて" },
  { href: "#strengths", label: "強み" },
  { href: "#services", label: "サービス" },
  { href: "#cases", label: "支援事例" },
  { href: "#faq", label: "よくある質問" },
  { href: "#contact", label: "お問い合わせ" },
];

export default function SalesNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-slate-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-20 md:px-6">
        <a href="#top" aria-label="トップへ戻る">
          <SalesLogo />
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[13px] font-medium text-slate-600 transition-colors hover:text-[#2f6bff]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={CONTACT_MAILTO}
          className="hidden h-10 items-center rounded-full bg-[#2f6bff] px-5 text-[13px] font-bold text-white transition-colors hover:bg-[#1f55e0] lg:inline-flex"
        >
          メールで問い合わせる
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="メニューを開閉"
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#0b1b3f] lg:hidden"
        >
          <span className="relative block h-3 w-5">
            <span
              className={`absolute left-0 h-[2px] w-5 bg-current transition-all ${
                open ? "top-1.5 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 h-[2px] w-5 bg-current transition-all ${
                open ? "top-1.5 -rotate-45" : "top-3"
              }`}
            />
          </span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-slate-200 bg-white px-5 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block border-b border-slate-100 py-3.5 text-[15px] font-medium text-slate-700"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={CONTACT_MAILTO}
            onClick={() => setOpen(false)}
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-[#2f6bff] text-[14px] font-bold text-white"
          >
            メールで問い合わせる
          </a>
        </div>
      )}
    </header>
  );
}
