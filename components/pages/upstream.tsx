import { Annotation, Nav } from "@/components/ui";
import { getContent, ui, type Lang } from "@/lib/i18n";

export function UpstreamPage({ lang }: { lang: Lang }) {
  const t = ui[lang].upstream;
  const { merged, inReview, lines } = getContent(lang);
  return (
    <>
      <Nav lang={lang} path="/upstream" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={lines.upstream.label} hue={lines.upstream.hue} />
        <h1 className="display h2 mt-5 max-w-[14ch]">{t.h1}</h1>
        <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">{t.lead}</p>

        <h2 className="display h3 mt-16">{t.merged}</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[720px] border-collapse text-left">
            <thead>
              <tr className="text-[14px] uppercase tracking-wide text-cream-dim">
                <th className="hairline py-3 pr-6 font-normal">{t.cols.project}</th>
                <th className="hairline py-3 pr-6 font-normal">{t.cols.what}</th>
                <th className="hairline py-3 font-normal">{t.cols.proof}</th>
              </tr>
            </thead>
            <tbody>
              {merged.map((m) => (
                <tr key={m.href} className="align-top">
                  <td className="hairline py-4 pr-6 whitespace-nowrap font-semibold">{m.project}</td>
                  <td className="hairline py-4 pr-6 max-w-[60ch] text-cream-dim">{m.what}</td>
                  <td className="hairline py-4">
                    <a href={m.href} className="text-blue">
                      {m.proof}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className="display h3 mt-16">{t.inReview}</h2>
        <ul className="mt-6 grid gap-x-16 gap-y-6 md:grid-cols-2">
          {inReview.map((r) => (
            <li key={r.href} className="max-w-[56ch]">
              <a href={r.href} className="display text-[24px] no-underline hover:underline">
                {r.project}
              </a>
              <p className="mt-2 text-cream-dim">{r.what}</p>
            </li>
          ))}
        </ul>

        <p className="hairline mt-16 pt-8 text-cream-dim">
          {t.note}{" "}
          <a href="https://github.com/gabrielrondon" className="text-cream">
            github.com/gabrielrondon
          </a>
        </p>
      </div>
    </>
  );
}
