import type { Metadata } from "next";
import { Annotation, Nav } from "@/components/ui";
import { Mark, WordmarkLarge, LinkedInBanner } from "@/components/brand";
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
  { label: "mark cream 1024", href: "/brand/tuturama-mark-cream-1024.png" },
  { label: "mark cream 512", href: "/brand/tuturama-mark-cream-512.png" },
  { label: "wordmark", href: "/brand/tuturama-wordmark.png" },
  { label: "wordmark cream", href: "/brand/tuturama-wordmark-cream.png" },
  { label: "linkedin banner", href: "/brand/tuturama-linkedin-banner.png" },
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
          mark for avatars and app icons, the wordmark everywhere there is room. Cream variant for print and light
          documents.
        </p>

        <div className="mt-12 flex flex-wrap gap-3">
          {files.map((f) => (
            <a key={f.href} href={f.href} className="pill" download>
              {f.label}
            </a>
          ))}
        </div>

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

        <div className="mt-16 inline-block bg-[#fffce1] p-10">
          <div className="flex items-end gap-10">
            <div id="mark-cream-1024" className="inline-block">
              <Mark size={1024} variant="cream" />
            </div>
            <div id="mark-cream-512" className="inline-block">
              <Mark size={512} variant="cream" />
            </div>
          </div>
          <div id="wordmark-cream" className="mt-10 inline-block bg-[#fffce1] p-8">
            <WordmarkLarge size={160} variant="cream" />
          </div>
        </div>

        <div id="wordmark" className="mt-16 inline-block bg-canvas p-8">
          <WordmarkLarge size={160} />
        </div>

        <div className="mt-16">
          <p className="mb-4 text-cream-dim">LinkedIn banner, 1128 × 191, exported at 2x.</p>
          <div id="linkedin-banner" className="inline-block">
            <LinkedInBanner scale={2} />
          </div>
        </div>

        <div className="mt-12 flex items-center gap-3 text-cream-dim">
          <FlagEE className="h-[22px] w-[30px]" />
          <FlagEU className="h-[22px] w-[30px]" />
          <span>An Estonian company in the European Union.</span>
        </div>
      </div>
    </>
  );
}
