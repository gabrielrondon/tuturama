import Link from "next/link";
import { Annotation, Nav } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { AgentsArt } from "@/components/illustrations";
import { IntakeForm } from "@/components/intake-form";
import { company } from "@/data/site";
import { href, ui, type Lang } from "@/lib/i18n";

export function AuditPage({ lang }: { lang: Lang }) {
  const t = ui[lang].audit;
  return (
    <>
      <Nav lang={lang} path="/audit" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={t.annotation} hue="green" />
        <div className="mt-5 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
          <h1 className="display h2 max-w-[14ch]">{t.h1}</h1>
          <Reveal className="justify-self-end">
            <AgentsArt className="hidden w-[280px] justify-self-end text-green md:block" />
          </Reveal>
        </div>
        <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-[52ch] text-[19px] leading-[1.25]">{t.lead}</p>
          <div className="flex flex-wrap items-start gap-3 md:justify-end">
            <a href="#intake" className="pill pill-primary">
              {t.form.submit}
            </a>
            <a href="/brand/tuturama-agent-security-audit.pdf" className="pill">
              {t.onePager}
            </a>
          </div>
        </div>

        <section className="hairline mt-16 pt-12">
          <h2 className="display h3">{t.whyTitle}</h2>
          <p className="mt-4 max-w-[60ch] text-[19px] leading-[1.25] text-cream-dim">{t.why}</p>
        </section>

        <section className="hairline mt-16 pt-12">
          <h2 className="display h3">{t.scopeTitle}</h2>
          <div className="mt-8 grid gap-px bg-hairline md:grid-cols-2">
            {t.scope.map((s) => (
              <article key={s.name} className="bg-canvas p-6 md:p-8">
                <h3 className="text-[22px] font-semibold leading-[1.15]">{s.name}</h3>
                <p className="mt-3 max-w-[56ch] text-cream-dim">{s.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hairline mt-16 pt-12">
          <h2 className="display h3">{t.deliverTitle}</h2>
          <div className="mt-8 grid gap-px bg-hairline md:grid-cols-2">
            {t.deliver.map((d) => (
              <article key={d.name} className="bg-canvas p-6 md:p-8">
                <h3 className="text-[22px] font-semibold leading-[1.15]">{d.name}</h3>
                <p className="mt-3 max-w-[56ch] text-cream-dim">{d.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="hairline mt-16 grid gap-10 pt-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="display h3">{t.howTitle}</h2>
            <ol className="mt-6 flex flex-col gap-4">
              {t.how.map((h, i) => (
                <li key={h} className="flex gap-4 text-cream-dim">
                  <span className="display shrink-0 text-green">{String(i + 1).padStart(2, "0")}</span>
                  <span className="max-w-[52ch]">{h}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="display h3">{t.priceTitle}</h2>
            <p className="mt-6 max-w-[48ch] text-cream-dim">{t.price}</p>
            <h2 className="display h3 mt-10">{t.proofTitle}</h2>
            <p className="mt-6 max-w-[48ch] text-cream-dim">{t.proof}</p>
            <p className="mt-4">
              <a href="https://github.com/tuturama/agent-security" className="text-cream">
                {t.proofLink}
              </a>
              {" · "}
              <Link href={href(lang, "/agents")} className="text-cream">
                {ui[lang].nav.agents}
              </Link>
            </p>
          </div>
        </section>

        <section id="intake" className="hairline mt-16 pt-12">
          <Annotation label="intake" hue="green" />
          <h2 className="display h3 mt-4">{t.formTitle}</h2>
          <p className="mt-3 max-w-[52ch] text-cream-dim">{t.formLead}</p>
          <IntakeForm labels={t.form} to={company.email} subject="Agent security audit: intake" />
        </section>
      </div>
    </>
  );
}
