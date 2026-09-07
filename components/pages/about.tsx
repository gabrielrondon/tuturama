import Link from "next/link";
import { Annotation, Nav } from "@/components/ui";
import { company } from "@/data/site";
import { href, ui, type Lang } from "@/lib/i18n";

export function AboutPage({ lang }: { lang: Lang }) {
  const t = ui[lang].about;
  return (
    <>
      <Nav lang={lang} path="/about" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={t.annotation} hue="green" />
        <h1 className="display h2 mt-5 max-w-[14ch]">{t.h1}</h1>

        <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
          <div className="prose-block max-w-[62ch] text-[19px] leading-[1.3]">
            {t.paras.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <aside className="text-cream-dim">
            <p className="text-[14px] uppercase tracking-wide">{t.company}</p>
            <p className="mt-2 text-cream">{company.name}</p>
            <p>
              {t.registry} {company.reg}
            </p>
            <p>{company.address}</p>
            <p className="mt-6 text-[14px] uppercase tracking-wide">{t.operating}</p>
            <p className="mt-2 text-cream">{t.lisbon}</p>
            <p className="mt-6 text-[14px] uppercase tracking-wide">{t.elsewhere}</p>
            <p className="mt-2 flex flex-col gap-1">
              <a href="https://github.com/tuturama" className="text-cream">
                github.com/tuturama
              </a>
              <a href="https://github.com/gabrielrondon" className="text-cream">
                github.com/gabrielrondon
              </a>
              <a href="https://gabrielrondon.com" className="text-cream">
                gabrielrondon.com
              </a>
              <a href="https://www.linkedin.com/company/tuturama" className="text-cream">
                linkedin.com/company/tuturama
              </a>
            </p>
            <p className="mt-8">
              <Link href={href(lang, "/contact")} className="pill">
                {t.contact}
              </Link>
            </p>
          </aside>
        </div>
      </div>
    </>
  );
}
