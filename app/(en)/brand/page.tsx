import type { Metadata } from "next";
import { Annotation, Nav } from "@/components/ui";
import { Mark, WordmarkLarge } from "@/components/brand";
import { FlagEE, FlagEU } from "@/components/flags";

export const metadata: Metadata = {
  title: "Brand",
  description: "Tuturama mark and wordmark, for avatars, documents and profiles.",
  robots: { index: false },
};

const files = [
  { label: "mark 1024", href: "/brand/tuturama-mark-1024.png" },
  { label: "mark 512", href: "/brand/tuturama-mark-512.png" },
  { label: "mark 180", href: "/brand/tuturama-mark-180.png" },
  { label: "wordmark", href: "/brand/tuturama-wordmark.png" },
];

export default function BrandPage() {
  return (
    <>
      <Nav lang="en" path="/" />
      <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
        <Annotation label="brand" hue="green" />
        <h1 className="display h2 mt-5 max-w-[14ch]">Mark and wordmark.</h1>
        <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">
          One face, two colours. The braces are the signature; the mark is the braces around a single t. Use the
          mark for avatars and app icons, the wordmark everywhere there is room.
        </p>

        <div className="mt-14 grid gap-10 md:grid-cols-[auto_1fr] md:gap-16">
          <div id="mark-1024" className="inline-block">
            <Mark size={1024} />
          </div>
          <div>
            <div id="mark-512" className="inline-block">
              <Mark size={512} />
            </div>
            <div className="mt-8 flex items-end gap-6">
              <div id="mark-180" className="inline-block">
                <Mark size={180} />
              </div>
              <div id="mark-64" className="inline-block">
                <Mark size={64} radius={0.24} />
              </div>
              <div id="mark-32" className="inline-block">
                <Mark size={32} radius={0.26} />
              </div>
            </div>
          </div>
        </div>

        <div id="wordmark" className="mt-16 inline-block bg-canvas p-8">
          <WordmarkLarge size={160} />
        </div>

        <div className="mt-12 flex items-center gap-3 text-cream-dim">
          <FlagEE className="h-[22px] w-[30px]" />
          <FlagEU className="h-[22px] w-[30px]" />
          <span>An Estonian company in the European Union.</span>
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          {files.map((f) => (
            <a key={f.href} href={f.href} className="pill" download>
              {f.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
