import type { Metadata } from "next";
import Link from "next/link";
import { Annotation } from "@/components/ui";
import { AgentsArt } from "@/components/illustrations";
import { agentsWork, lines } from "@/data/site";

export const metadata: Metadata = {
  title: "Security for AI agents",
  description:
    "Threat models for agentic spend, gates in agent tooling, guards for autonomous payments. What Tuturama works on now.",
};

export default function AgentsPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label={lines.now.label} hue={lines.now.hue} />
      <div className="mt-5 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
        <h1 className="display h2 max-w-[14ch]">Security for AI agents.</h1>
        <AgentsArt className="hidden w-[280px] justify-self-end text-green md:block" />
      </div>
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
        <p className="prose-block max-w-[52ch] text-[19px] leading-[1.25]">
          <span>
            An agent that can browse can be pointed at an internal network. An agent that can pay
            can be told what to pay. An agent that can read private notes can be asked to
            summarise them for a stranger. None of this needs a new class of attacker, only the
            old ones aimed at a new surface.
          </span>
          <span className="mt-4 block">
            We work on the surface itself: the gates inside agent tooling, the policies around
            agent payments, the audit trails that make an autonomous decision reviewable after the
            fact.
          </span>
        </p>
        <div className="text-cream-dim">
          <p>
            Findings go to the maintainers first, through their security process. Methods go
            public afterwards, as skills any coding agent can run.
          </p>
          <p className="mt-4">
            <Link href="/contact" className="pill">
              bring us an agent to break
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
  );
}
