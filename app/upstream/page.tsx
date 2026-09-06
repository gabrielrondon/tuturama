import type { Metadata } from "next";
import { Annotation } from "@/components/ui";
import { merged, inReview, lines } from "@/data/site";

export const metadata: Metadata = {
  title: "Upstream",
  description:
    "Open source contributions merged upstream: Linux kernel, Stellar, FediMint, Rig, Foundry, x402. Plus what is in review.",
};

export default function UpstreamPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label={lines.upstream.label} hue={lines.upstream.hue} />
      <h1 className="display h2 mt-5 max-w-[14ch]">Open source, merged.</h1>
      <p className="mt-8 max-w-[56ch] text-[19px] leading-[1.25]">
        Contributions to projects other people depend on. The maintainers&apos; review is the
        hardest gate we know, so it is the proof we lead with. Every line links to it.
      </p>

      <h2 className="display h3 mt-16">Merged</h2>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left">
          <thead>
            <tr className="text-[14px] uppercase tracking-wide text-cream-dim">
              <th className="hairline py-3 pr-6 font-normal">Project</th>
              <th className="hairline py-3 pr-6 font-normal">What</th>
              <th className="hairline py-3 font-normal">Proof</th>
            </tr>
          </thead>
          <tbody>
            {merged.map((m) => (
              <tr key={m.project} className="align-top">
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

      <h2 className="display h3 mt-16">In review</h2>
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
        Last verified against the source repositories on 6 September 2026. All work is authored by
        Gabriel Rondon, founder of Tuturama, under his own name.
      </p>
    </div>
  );
}
