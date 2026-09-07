import { Annotation, Nav } from "@/components/ui";
import { company } from "@/data/site";
import { ui, type Lang } from "@/lib/i18n";

export function ContactPage({ lang }: { lang: Lang }) {
  const t = ui[lang].contact;
  return (
    <>
      <Nav lang={lang} path="/contact" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={t.annotation} hue="green" />
        <h1 className="display h2 mt-5 max-w-[14ch]">{t.h1}</h1>
        <p className="mt-8 text-[19px] leading-[1.25]">
          <a href={`mailto:${company.email}`} className="pill pill-primary">
            {company.email}
          </a>
        </p>
        <p className="mt-6 max-w-[52ch] text-cream-dim">{t.lead}</p>

        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-3">
          {t.asks.map((a) => (
            <article key={a.title} className="bg-canvas p-6 md:p-8">
              <h2 className="display h3">{a.title}</h2>
              <p className="mt-4 text-cream-dim">{a.body}</p>
            </article>
          ))}
        </div>

        <p className="hairline mt-14 pt-8 text-[15px] text-cream-dim">
          {company.name} · {t.registry} {company.reg} · {company.address}
        </p>
      </div>
    </>
  );
}
