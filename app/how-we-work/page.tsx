import type { Metadata } from "next";
import { Annotation } from "@/components/ui";

export const metadata: Metadata = {
  title: "How we work",
  description:
    "One founder, a team's output. Skills as roles, gates before shipping, every claim verified at the source.",
};

const steps: { name: string; body: string }[] = [
  {
    name: "Skills as roles",
    body:
      "The factory is organised as a set of skills, each one a written role with its own checklist: reviewer, security officer, release engineer, accountant. An agent loads the role, does the work, and hands over to the next. The founder holds the judgement calls.",
  },
  {
    name: "Gates before shipping",
    body:
      "Nothing ships on the first draft. Code goes through build, tests and a cold review before a pull request. Text goes through three passes and a hostile read. Upstream contributions then meet the hardest gate of all, the maintainers.",
  },
  {
    name: "Verified at the source",
    body:
      "Every technical claim is checked against the code, the file, the line, before it is written down. A claim that was not verified does not go out. The rule exists because the alternative was tested and failed in public.",
  },
  {
    name: "Memory that outlives the session",
    body:
      "Decisions, corrections and state live in files, not in a chat window. A new session starts with what the last one learned. The company's own bookkeeping runs on the same method.",
  },
  {
    name: "Separation of concerns",
    body:
      "Client work, products and open source do not share accounts, secrets or repositories. What a client sees never leaks into a product. What we learn in a product never leaks into a client's name.",
  },
];

export default function HowWeWorkPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label="method" hue="green" />
      <h1 className="display h2 mt-5 max-w-[14ch]">One founder, a team&apos;s output.</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2 md:gap-16">
        <p className="max-w-[52ch] text-[19px] leading-[1.25]">
          Tuturama is run by one person and a set of coding agents, organised the way a small
          engineering team would be. The unit of work is small, the gates are strict, and the
          output is measured by what shipped and what got merged, not by what was typed.
        </p>
        <p className="max-w-[46ch] text-cream-dim">
          Small by design. The size is what lets us sit inside a client&apos;s team without
          becoming a vendor, and ship products without a roadmap committee.
        </p>
      </div>

      <div className="mt-14">
        {steps.map((s, i) => (
          <article key={s.name} className="hairline grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-16">
            <h2 className="display h3">
              <span className="text-green">{String(i + 1).padStart(2, "0")}</span> {s.name}
            </h2>
            <p className="max-w-[60ch] text-cream-dim">{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
