import type { Metadata } from "next";
import { Annotation } from "@/components/ui";
import { products, lines } from "@/data/site";

export const metadata: Metadata = {
  title: "Products",
  description: "Apps with a cognitive layer: Skywave, Listening Robots and Ulpiano.",
};

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label={lines.products.label} hue={lines.products.hue} />
      <h1 className="display h2 mt-5 max-w-[14ch]">Apps with a cognitive layer.</h1>
      <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">
        Each product listens, reads or watches something on the user&apos;s behalf and turns it
        into a decision. They are the factory&apos;s own output: what we sell as method, we ship
        as product first.
      </p>

      <div className="mt-14 flex flex-col">
        {products.map((p) => (
          <article key={p.name} className="hairline grid gap-6 py-12 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <h2 className="display h3">{p.name}</h2>
              <p className="mt-2 text-[14px] uppercase tracking-wide text-orange">{p.status}</p>
            </div>
            <div className="max-w-[60ch]">
              <p className="text-[22px] leading-[1.2]">{p.one}</p>
              <p className="mt-4 text-cream-dim">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} className="pill">
                    {l.label}
                  </a>
                ))}
              </div>
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
