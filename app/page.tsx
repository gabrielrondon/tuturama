import Link from "next/link";
import { Annotation, Section } from "@/components/ui";
import { EmbeddedArt, ProductsArt, UpstreamArt, AgentsArt } from "@/components/illustrations";
import { ProductVisual } from "@/components/product-visual";
import { products, merged, lines } from "@/data/site";

const artClass = "w-[220px] lg:w-[280px]";

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-20">
        {/* Gradient flourish, the one place the canvas gets colour washes. */}
        <div className="flourish flourish-emerald right-[-10%] top-[-10%] h-[520px] w-[520px] md:right-[4%] md:top-[-6%] md:h-[720px] md:w-[720px]" />
        <div className="flourish flourish-crush right-[10%] top-[40%] h-[320px] w-[320px] opacity-30 md:right-[18%] md:top-[46%] md:h-[420px] md:w-[420px]" />
        <div className="relative">
          <div className="mx-auto max-w-[1400px]">
            <Annotation label="software factory" hue="green" />
          </div>
          <h1 className="display hero-title mt-6 max-w-[12.5ch] pr-0">
            Software factory for systems that cannot break.
          </h1>
          <div className="mx-auto mt-10 grid max-w-[1400px] gap-8 md:grid-cols-2 md:gap-16">
            <p className="max-w-[46ch] text-[19px] leading-[1.2] text-cream">
              Tuturama is an AI-native software factory. We build products, embed with security
              teams inside large institutions, and contribute to the code the world runs on.
              Tallinn and Lisbon.
            </p>
            <div className="flex flex-wrap items-start gap-3 md:justify-end">
              <Link href="/contact" className="pill pill-primary">
                work with us
              </Link>
              <Link href="/upstream" className="pill">
                see what shipped
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section
        label={lines.embedded.label}
        hue={lines.embedded.hue}
        id="embedded"
        title="Security and AI, inside the institution."
        art={<EmbeddedArt className={artClass} />}
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="prose-block max-w-[52ch] text-[19px] leading-[1.25]">
            We work embedded, forward-deployed in the client&apos;s own team, with a mandate on
            security and artificial intelligence. The advice comes with the engineering that
            follows it: threat models for AI adoption, architecture reviews, tooling the team
            keeps after we leave.
          </p>
          <div className="max-w-[46ch] text-cream-dim">
            <p>
              Currently advisor to the CISO Office of a European retail group, through Tuturama.
              Institutions we have worked inside over twenty years include Pearson, Société
              Générale, Walmart, Banco do Brasil and Kraken.
            </p>
            <p className="mt-4">
              <Link href="/contact" className="text-cream">
                Ask about an embedded engagement
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section
        label={lines.products.label}
        hue={lines.products.hue}
        id="products"
        title="Apps with a cognitive layer."
        art={<ProductsArt className={artClass} />}
      >
        <div className="grid gap-px bg-hairline md:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="bg-canvas p-6 md:p-8">
              <ProductVisual name={p.name} className="mb-6" />
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="display h3">{p.name}</h3>
                <span className="text-[14px] uppercase tracking-wide text-orange">{p.status}</span>
              </div>
              <p className="mt-4 text-[19px] leading-[1.2]">{p.one}</p>
              <p className="mt-4 text-cream-dim">{p.body}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a key={l.href} href={l.href} className="pill">
                    {l.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="mt-8 text-cream-dim">
          The factory&apos;s own output. It is how we know the method works.{" "}
          <Link href="/products" className="text-cream">
            More on the products
          </Link>
        </p>
      </Section>

      <Section
        label={lines.upstream.label}
        hue={lines.upstream.hue}
        id="upstream"
        title="Open source, merged."
        art={<UpstreamArt className={artClass} />}
      >
        <ul className="grid gap-x-16 gap-y-6 md:grid-cols-2">
          {merged.map((m) => (
            <li key={m.project} className="max-w-[56ch]">
              <a href={m.href} className="display text-[26px] no-underline hover:underline">
                {m.project}
              </a>
              <p className="mt-2 text-cream-dim">{m.what}</p>
            </li>
          ))}
        </ul>
        <p className="mt-10 text-cream-dim">
          Every item links to the maintainers&apos; review. Nothing here is self-published.{" "}
          <Link href="/upstream" className="text-cream">
            Full list, including what is in review
          </Link>
        </p>
      </Section>

      <Section
        label={lines.now.label}
        hue={lines.now.hue}
        id="now"
        title="Security for AI agents."
        art={<AgentsArt className={artClass} />}
      >
        <div className="grid gap-8 md:grid-cols-2 md:gap-16">
          <p className="max-w-[50ch] text-[19px] leading-[1.25]">
            Agents now browse, pay and read private data on our behalf. The security around them
            lags behind what they can do. This is where the factory spends its own time in 2026:
            threat models for agentic spend, gates in agent tooling, guards for autonomous
            payments.
          </p>
          <div className="text-cream-dim">
            <p>Findings go to the maintainers first. Methods go public as skills.</p>
            <p className="mt-4">
              <Link href="/agents" className="pill">
                what is open right now
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section label={lines.writing.label} hue={lines.writing.hue} id="writing">
        <p className="max-w-[56ch] text-[19px] leading-[1.25]">
          Research and essays by the founder, on traceability, verification, and the engineering
          hidden inside institutions, at{" "}
          <a href="https://gabrielrondon.com" className="text-lilac">
            gabrielrondon.com
          </a>
          .
        </p>
      </Section>
    </>
  );
}
