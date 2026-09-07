import type { Metadata } from "next";
import Image from "next/image";
import { Annotation } from "@/components/ui";
import { ProductVisual } from "@/components/product-visual";
import { ProductsArt } from "@/components/illustrations";
import { products, lines } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Apps with a cognitive layer: Skywave, Listening Robots and Ulpiano.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label={lines.products.label} hue={lines.products.hue} />
      <div className="mt-5 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
        <h1 className="display h2 max-w-[14ch]">Apps with a cognitive layer.</h1>
        <ProductsArt className="hidden w-[280px] justify-self-end text-orange md:block" />
      </div>
      <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">
        Each product listens, reads or watches something on the user&apos;s behalf and turns it
        into a decision. They are the factory&apos;s own output: what we sell as method, we ship
        as product first.
      </p>

      <div className="mt-14 flex flex-col">
        {products.map((p) => (
          <article key={p.name} className="hairline grid gap-8 py-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div>
              <h2 className="display h3">{p.name}</h2>
              <p className="mt-2 text-[14px] uppercase tracking-wide text-orange">{p.status}</p>
              <p className="mt-6 max-w-[48ch] text-[22px] leading-[1.2]">{p.one}</p>
              <p className="mt-4 max-w-[52ch] text-cream-dim">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} className="pill">
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <ProductVisual name={p.name} priority={p.name === "Skywave"} />
              {p.name === "Skywave" ? (
                <div className="mt-4 grid grid-cols-3 gap-4">
                  <div className="frame rounded-xl">
                    <Image
                      src="/products/skywave-android-2.png"
                      alt="Skywave on Android: explore"
                      width={1080}
                      height={2424}
                      sizes="20vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  <div className="frame rounded-xl">
                    <Image
                      src="/products/skywave-android-1.png"
                      alt="Skywave on Android: now playing"
                      width={1080}
                      height={2424}
                      sizes="20vw"
                      className="block h-auto w-full"
                    />
                  </div>
                  <div className="frame flex items-center justify-center rounded-xl p-4">
                    <Image
                      src="/products/skywave-feature.png"
                      alt="Skywave: 1,000+ stations, 60+ languages, no sign-up"
                      width={1024}
                      height={500}
                      sizes="20vw"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              ) : null}
            </div>
          </article>
        ))}
      </div>

      <p className="hairline pt-10 text-cream-dim">
        Earlier work, from audio series to financial literacy programmes, lives in the{" "}
        <a href="/archive" className="text-cream">
          archive
        </a>
        .
      </p>
    </div>
  );
}
