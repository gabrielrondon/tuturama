import Link from "next/link";
import { Annotation, Nav, Section } from "@/components/ui";
import { EmbeddedArt, ProductsArt, UpstreamArt, AgentsArt } from "@/components/illustrations";
import { ProductVisual } from "@/components/product-visual";
import { statusLabel } from "@/data/site.et";
import { getContent, href, ui, type Lang } from "@/lib/i18n";

const artClass = "w-[220px] lg:w-[280px]";

export function HomePage({ lang }: { lang: Lang }) {
  const t = ui[lang].home;
  const { products, merged, lines } = getContent(lang);
  return (
    <>
      <Nav lang={lang} path="/" />
      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-20">
        <div className="flourish flourish-emerald right-[-10%] top-[-10%] h-[520px] w-[520px] md:right-[4%] md:top-[-6%] md:h-[720px] md:w-[720px]" />
        <div className="flourish flourish-crush right-[10%] top-[40%] h-[320px] w-[320px] opacity-30 md:right-[18%] md:top-[46%] md:h-[420px] md:w-[420px]" />
        {/* The hero bleeds to the viewport edge, all of it: annotation, headline, lead and buttons share one left edge. Sections below sit in the centred container. */}
        <div className="relative hero-in">
          <div>
            <Annotation label={t.annotation} hue="green" />
          </div>
          <h1 className="display hero-title mt-6 max-w-[12.5ch] pr-0">{t.hero}</h1>
          <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:gap-12">
            <p className="max-w-[46ch] text-[19px] leading-[1.2] text-cream">{t.lead}</p>
            <div className="flex flex-wrap items-start gap-3">
              <Link href={href(lang, "/contact")} className="pill pill-primary">
                {t.ctaWork}
              </Link>
              <Link href={href(lang, "/upstream")} className="pill">
                {t.ctaShipped}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section label={lines.embedded.label} hue={lines.embedded.hue} id="embedded" title={t.embeddedTitle} art={<EmbeddedArt className={artClass} />}>
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="prose-block max-w-[52ch] text-[19px] leading-[1.25]">
            {t.embeddedBody}
            <span className="mt-4 block">{t.embeddedModel}</span>
          </p>
          <div className="max-w-[46ch] text-cream-dim">
            <p>{t.embeddedAside}</p>
            <p className="mt-4">
              <Link href={href(lang, "/contact")} className="text-cream">
                {t.embeddedLink}
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section label={lines.products.label} hue={lines.products.hue} id="products" title={t.productsTitle} art={<ProductsArt className={artClass} />}>
        <div className="grid gap-px bg-hairline md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="bg-canvas p-6 md:p-8">
              <ProductVisual name={p.name} lang={lang} className="mb-6" />
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display h3">{p.name}</h3>
                <span className="text-[14px] uppercase tracking-wide text-orange">
                  {lang === "et" ? statusLabel[p.status] : p.status}
                </span>
              </div>
              <p className="mt-4 text-[19px] leading-[1.2]">{p.one}</p>
              <p className="mt-4 text-cream-dim">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} className="pill">
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-cream-dim">
          {t.productsNote}{" "}
          <Link href={href(lang, "/products")} className="text-cream">
            {t.productsMore}
          </Link>
        </p>
      </Section>

      <Section label={lines.upstream.label} hue={lines.upstream.hue} id="upstream" title={t.upstreamTitle} art={<UpstreamArt className={artClass} />}>
        <ul className="grid gap-x-16 gap-y-6 md:grid-cols-2">
          {merged.map((m) => (
            <li key={m.href} className="max-w-[56ch]">
              <a href={m.href} className="display text-[26px] no-underline hover:underline">
                {m.project}
              </a>
              <p className="mt-2 text-cream-dim">{m.what}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-cream-dim">
          {t.upstreamNote}{" "}
          <a href="https://github.com/gabrielrondon" className="text-cream">
            github.com/gabrielrondon
          </a>
          {" · "}
          <Link href={href(lang, "/upstream")} className="text-cream">
            {t.upstreamMore}
          </Link>
        </p>
      </Section>

      <Section label={lines.now.label} hue={lines.now.hue} id="now" title={t.nowTitle} art={<AgentsArt className={artClass} />}>
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-[50ch] text-[19px] leading-[1.25]">{t.nowBody}</p>
          <div className="text-cream-dim">
            <p>{t.nowAside}</p>
            <p className="mt-4">
              <Link href={href(lang, "/agents")} className="pill">
                {t.nowCta}
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section label={lines.writing.label} hue={lines.writing.hue} id="writing">
        <p className="max-w-[56ch] text-[19px] leading-[1.25]">
          {t.writingBody}{" "}
          <a href="https://gabrielrondon.com" className="text-lilac">
            gabrielrondon.com
          </a>
          .
        </p>
      </Section>
    </>
  );
}
