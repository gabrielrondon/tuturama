import type { Metadata } from "next";
import { Annotation } from "@/components/ui";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Embedded security and AI work, fixed-scope builds, or an agent to break.",
};

const asks = [
  {
    title: "An embedded engagement",
    body: "Security and AI advisory inside your team, with the engineering that follows. Months, not days.",
  },
  {
    title: "A fixed-scope build",
    body: "A product, a tool, an integration, delivered by the factory with the gates described in how we work.",
  },
  {
    title: "An agent to break",
    body: "A threat model or a security review of an agent, an MCP server, or an agentic payment flow.",
  },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label="contact" hue="green" />
      <h1 className="display h2 mt-5 max-w-[14ch]">Write to us.</h1>
      <p className="mt-8 text-[19px] leading-[1.25]">
        <a href={`mailto:${company.email}`} className="pill pill-primary">
          {company.email}
        </a>
      </p>
      <p className="mt-6 max-w-[52ch] text-cream-dim">
        One founder reads every message. Say what you are building, what cannot break, and when
        you need an answer.
      </p>

      <div className="mt-14 grid gap-px bg-hairline md:grid-cols-3">
        {asks.map((a) => (
          <article key={a.title} className="bg-canvas p-6 md:p-8">
            <h2 className="display h3">{a.title}</h2>
            <p className="mt-4 text-cream-dim">{a.body}</p>
          </article>
        ))}
      </div>

      <p className="hairline mt-14 pt-8 text-[15px] text-cream-dim">
        {company.name} · Registry code {company.reg} · {company.address}
      </p>
    </div>
  );
}
