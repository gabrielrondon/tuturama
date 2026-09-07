import type { Metadata } from "next";
import Image from "next/image";
import { Annotation } from "@/components/ui";
import { archive } from "@/data/site";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Before the factory: audio series on the Internet Computer, Tuturama Studios, financial literacy programmes, web3 education, WiseReader.",
};

/* Artwork produced by Tuturama Studios for its own series, 2023 and 2024. */
const art: Record<string, { src: string; alt: string; width: number; height: number }> = {
  "Icarus and the Internet Computer": {
    src: "/archive/icarus.png",
    alt: "Icarus, the pilot of the series, in his craft",
    width: 1000,
    height: 1000,
  },
  "Tuturama Studios": {
    src: "/archive/wonderville.png",
    alt: "Cover art for Dojima, the series on the Dojima Rice Exchange",
    width: 1400,
    height: 947,
  },
};

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label="archive" hue="lilac" />
      <h1 className="display h2 mt-5 max-w-[14ch]">Before the factory.</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-[1fr_1fr] md:gap-16">
        <p className="max-w-[56ch] text-[19px] leading-[1.25]">
          Tuturama spent its first years explaining hard technology to people the industry did not
          bother with: children, families, speakers of languages nobody translates to. The studio
          is quiet now. The habit of explaining stayed.
        </p>
        <div className="frame rounded-2xl">
          <Image
            src="/archive/icarus-site.png"
            alt="Icarus: Quest for the Infinite Web, the podcast page on Spotify, 2024"
            width={1400}
            height={960}
            sizes="(min-width: 768px) 50vw, 100vw"
            className="block h-auto w-full"
          />
        </div>
      </div>

      <div className="mt-14">
        {archive.map((a) => {
          const img = art[a.title];
          return (
            <article
              key={a.title}
              className="hairline grid gap-6 py-10 md:grid-cols-[1fr_2fr_1fr] md:gap-12"
            >
              <div>
                <p className="text-[14px] uppercase tracking-wide text-lilac">{a.period}</p>
                <h2 className="display h3 mt-2">{a.title}</h2>
              </div>
              <p className="max-w-[60ch] text-cream-dim">{a.body}</p>
              {img ? (
                <div className="frame rounded-2xl md:justify-self-end">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    sizes="(min-width: 768px) 25vw, 100vw"
                    className="block h-auto w-full"
                  />
                </div>
              ) : (
                <div />
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
