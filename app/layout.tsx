import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { doctor } from "@/data/doctor";
import { site } from "@/data/site";
import { JsonLd } from "@/components/json-ld";
import { MotionProvider } from "@/components/motion";
import { meta, t } from "@/i18n";
import "./globals.css";

// Self-hosted so the site never depends on Google Fonts being reachable.
const vazirmatn = localFont({
  src: "./fonts/Vazirmatn-Variable.woff2",
  variable: "--font-vazirmatn",
  weight: "100 900",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seo.title, template: site.seo.titleTemplate },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  authors: [{ name: doctor.name }],
  creator: doctor.name,
  alternates: { canonical: "/" },
  formatDetection: { telephone: true, email: true, address: true },
  openGraph: {
    type: "profile",
    locale: meta.ogLocale,
    url: "/",
    siteName: doctor.name,
    title: site.seo.title,
    description: site.seo.description,
    ...(site.seo.ogImage ? { images: [{ url: site.seo.ogImage, width: 1200, height: 630, alt: doctor.name }] } : {}),
  },
  twitter: {
    card: site.seo.ogImage ? "summary_large_image" : "summary",
    title: site.seo.title,
    description: site.seo.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f7f5f1",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={meta.htmlLang} dir={meta.dir} className={vazirmatn.variable}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-canvas"
        >
          {t.skipToContent}
        </a>
        <MotionProvider>{children}</MotionProvider>
        <JsonLd />
      </body>
    </html>
  );
}
