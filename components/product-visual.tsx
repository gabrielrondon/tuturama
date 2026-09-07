import Image from "next/image";
import type { Lang } from "@/lib/i18n";
import { ui } from "@/lib/i18n";

/*
  Real captures only. Skywave: the macOS app, captured 2026-09-07. Ulpiano: the landing.
  Listening Robots: its own mark, the product is not public yet.
*/
export function ProductVisual({
  name,
  lang = "en",
  className,
  priority = false,
}: {
  name: string;
  lang?: Lang;
  className?: string;
  priority?: boolean;
}) {
  const alt = ui[lang].products.alt;
  if (name === "Skywave") {
    return (
      <div className={`frame rounded-2xl ${className ?? ""}`}>
        <Image
          src="/products/skywave-mac.png"
          alt={alt.mac}
          width={1568}
          height={1057}
          sizes="(min-width: 768px) 33vw, 100vw"
          priority={priority}
          className="block h-auto w-full"
        />
      </div>
    );
  }
  if (name === "Ulpiano") {
    return (
      <div className={`frame rounded-2xl ${className ?? ""}`}>
        <Image
          src="/products/ulpiano.png"
          alt={alt.ulpiano}
          width={1600}
          height={1000}
          sizes="(min-width: 768px) 33vw, 100vw"
          className="block h-auto w-full"
        />
      </div>
    );
  }
  if (name === "Listening Robots") {
    return (
      <div
        className={`frame flex items-center justify-center rounded-2xl ${className ?? ""}`}
        style={{ background: "#fbf7ea", aspectRatio: "1568 / 1057" }}
      >
        <Image src="/products/listening-robots-logo.svg" alt={alt.lr} width={260} height={200} className="h-auto w-[46%]" />
      </div>
    );
  }
  return null;
}
