import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fullbet.co.jp"),
  title: "Fullbet Inc. | TikTok Shop グロースパートナー",
  description:
    "Fullbet株式会社は、TikTok Shopに特化したEC運用パートナー。商品企画からライブコマース、物流までワンストップで支援し、ブランドの売上成長を実現します。",
  openGraph: {
    title: "Fullbet Inc. | TikTok Shop グロースパートナー",
    description:
      "TikTok Shopに特化したEC運用パートナー。商品企画からライブコマース、物流までワンストップで支援します。",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-fg">{children}</body>
    </html>
  );
}
