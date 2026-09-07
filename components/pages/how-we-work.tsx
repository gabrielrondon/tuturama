import { Annotation, Nav } from "@/components/ui";
import { ui, type Lang } from "@/lib/i18n";

export function HowWeWorkPage({ lang }: { lang: Lang }) {
  const t = ui[lang].how;
  return (
    <>
      <Nav lang={lang} path="/how-we-work" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={t.annotation} hue="green" />
        <h1 className="display h2 mt-5 max-w-[14ch]">{t.h1}</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-[52ch] text-[19px] leading-[1.25]">{t.lead}</p>
          <p className="max-w-[46ch] text-cream-dim">{t.aside}</p>
        </div>

        <div className="mt-14">
          {t.steps.map((s, i) => (
            <article key={s.name} className="hairline grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-16">
              <h2 className="display h3">
                <span className="text-green">{String(i + 1).padStart(2, "0")}</span> {s.name}
              </h2>
              <p className="max-w-[60ch] text-cream-dim">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
