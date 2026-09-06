import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Nav, Footer } from "@/components/ui";
import "./globals.css";

// Display and body face. Swap for PP Mori once licensed (see app/globals.css).
const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-display-face",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tuturama.com"),
  title: {
    default: "Tuturama",
    template: "%s · Tuturama",
  },
  description:
    "An AI-native software factory for systems that cannot break. Products, embedded security and AI work, and open source merged upstream. Tallinn and Lisbon.",
  openGraph: {
    siteName: "Tuturama",
    type: "website",
    locale: "en_US",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable}>
      <body className="min-h-screen">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
