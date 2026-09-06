import type { Metadata } from "next";
import { Annotation } from "@/components/ui";
import { archive } from "@/data/site";

export const metadata: Metadata = {
  title: "Archive",
  description:
    "Before the factory: audio series on the Internet Computer, Tuturama Studios, financial literacy programmes, web3 education, WiseReader.",
};

export default function ArchivePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label="archive" hue="lilac" />
      <h1 className="display h2 mt-5 max-w-[14ch]">Before the factory.</h1>
      <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">
        Tuturama spent its first years explaining hard technology to people the industry did not
        bother with: children, families, speakers of languages nobody translates to. The studio
        is quiet now. The habit of explaining stayed.
      </p>

      <div className="mt-14">
        {archive.map((a) => (
          <article key={a.title} className="hairline grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <div>
              <p className="text-[14px] uppercase tracking-wide text-lilac">{a.period}</p>
              <h2 className="display h3 mt-2">{a.title}</h2>
            </div>
            <p className="max-w-[60ch] text-cream-dim">{a.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
