import Link from "next/link";
import { Annotation, Nav } from "@/components/ui";
import { AgentsArt } from "@/components/illustrations";
import { getContent, href, ui, type Lang } from "@/lib/i18n";

export function AgentsPage({ lang }: { lang: Lang }) {
  const t = ui[lang].agents;
  const { agentsWork, lines } = getContent(lang);
  return (
    <>
      <Nav lang={lang} path="/agents" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={lines.now.label} hue={lines.now.hue} />
        <div className="mt-5 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
          <h1 className="display h2 max-w-[14ch]">{t.h1}</h1>
          <AgentsArt className="hidden w-[280px] justify-self-end text-green md:block" />
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="prose-block max-w-[52ch] text-[19px] leading-[1.25]">
            <span>{t.p1}</span>
            <span className="mt-4 block">{t.p2}</span>
          </p>
          <div className="text-cream-dim">
            <p>{t.aside}</p>
            <p className="mt-4">
              <Link href={href(lang, "/contact")} className="pill">
                {t.cta}
              </Link>
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px bg-hairline md:grid-cols-2">
          {agentsWork.map((w) => (
            <article key={w.title} className="bg-canvas p-6 md:p-8">
              <p className="text-[14px] uppercase tracking-wide text-green">{w.status}</p>
              <h2 className="display h3 mt-3">
                {w.href ? (
                  <a href={w.href} className="no-underline hover:underline">
                    {w.title}
                  </a>
                ) : (
                  w.title
                )}
              </h2>
              <p className="mt-4 max-w-[56ch] text-cream-dim">{w.body}</p>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
