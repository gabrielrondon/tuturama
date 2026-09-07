import Image from "next/image";
import { Annotation, Nav } from "@/components/ui";
import { Threads } from "@/components/threads";
import { getContent, ui, type Lang } from "@/lib/i18n";

/* Artwork produced by Tuturama Studios for its own series, 2023 and 2024. Keyed by position. */
const art = [
  { src: "/archive/icarus.png", width: 1000, height: 1000, altKey: "altIcarus" as const },
  { src: "/archive/wonderville.png", width: 1400, height: 947, altKey: "altDojima" as const },
];

export function ArchivePage({ lang }: { lang: Lang }) {
  const t = ui[lang].archive;
  const { archive } = getContent(lang);
  return (
    <>
      <Nav lang={lang} path="/archive" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label={t.annotation} hue="lilac" />
        <h1 className="display h2 mt-5 max-w-[14ch]">{t.h1}</h1>
        <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
          <p className="max-w-[56ch] text-[19px] leading-[1.25]">{t.lead}</p>
          <div className="frame rounded-2xl">
            <Image src="/archive/icarus-site.png" alt={t.altSpotify} width={1400} height={960} sizes="(min-width: 768px) 50vw, 100vw" className="block h-auto w-full" />
          </div>
        </div>

        <div className="hairline mt-14 pt-12">
          <Threads lang={lang} />
        </div>

        <div className="mt-14">
          {archive.map((a, i) => {
            const img = art[i];
            return (
              <article key={a.title} className="hairline grid gap-6 py-10 md:grid-cols-[1fr_2fr_1fr] md:gap-12">
                <div>
                  <p className="text-[14px] uppercase tracking-wide text-lilac">{a.period}</p>
                  <h2 className="display h3 mt-2">{a.title}</h2>
                </div>
                <p className="max-w-[60ch] text-cream-dim">{a.body}</p>
                {img ? (
                  <div className="frame rounded-2xl md:justify-self-end">
                    <Image src={img.src} alt={t[img.altKey]} width={img.width} height={img.height} sizes="(min-width: 768px) 25vw, 100vw" className="block h-auto w-full" />
                  </div>
                ) : (
                  <div />
                )}
              </article>
            );
          })}
        </div>
      </div>
    </>
  );
}
