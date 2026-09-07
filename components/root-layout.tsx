import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Footer } from "@/components/ui";
import { ui, type Lang } from "@/lib/i18n";
import "@/app/globals.css";

// Display and body face. Swap for PP Mori once licensed (see app/globals.css).
const display = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600"],
  variable: "--font-display-face",
  display: "swap",
});

export function baseMetadata(lang: Lang): Metadata {
  const t = ui[lang];
  return {
    metadataBase: new URL("https://tuturama.com"),
    title: { default: t.siteName, template: `%s · ${t.siteName}` },
    description: t.description,
    openGraph: { siteName: "Tuturama", type: "website", locale: lang === "et" ? "et_EE" : "en_US" },
    twitter: { card: "summary_large_image" },
  };
}

/* hreflang alternates for one path, e.g. "/products". */
export function alternates(path: string) {
  const p = path === "/" ? "" : path;
  return {
    canonical: undefined,
    languages: { en: `https://tuturama.com${p || "/"}`, et: `https://tuturama.com/et${p}`, "x-default": `https://tuturama.com${p || "/"}` },
  };
}

export function RootShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={display.variable}>
      <body className="min-h-screen">
        {children}
        <Footer lang={lang} />
        <Analytics />
      </body>
    </html>
  );
}
