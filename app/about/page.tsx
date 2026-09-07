import type { Metadata } from "next";
import Link from "next/link";
import { Annotation } from "@/components/ui";
import { company } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Tuturama OÜ, founded 2020 in Tallinn, run from Lisbon by Gabriel Rondon.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-5 pb-20 pt-6 md:px-10 md:pt-12">
      <Annotation label="about" hue="green" />
      <h1 className="display h2 mt-5 max-w-[14ch]">Frontier technology, inside institutions that cannot afford to break.</h1>

      <div className="mt-12 grid gap-10 md:grid-cols-[2fr_1fr] md:gap-16">
        <div className="prose-block max-w-[62ch] text-[19px] leading-[1.3]">
          <p>
            Tuturama was founded in Tallinn in {company.founded} by Gabriel Berlitz Rondon. It began
            as an education studio for audiences the technology industry overlooked, and became
            what it is now: an AI-native software factory that builds products, embeds with
            security teams, and contributes upstream. Tuturama is the company behind Skywave,
            Listening Robots and Ulpiano, and the vehicle for the founder&apos;s embedded and
            open source work.
          </p>
          <p>
            Gabriel has spent twenty years where new technology meets old structure. He was a
            product manager at Banco do Brasil and Société Générale, in insurance and credit. He
            managed projects at Walmart Brazil. He led the efficacy function at Pearson Education,
            with more than a hundred people, measuring whether the promised learning actually
            happened. He was a product manager at Kraken and Bitfinex during the formation of the
            digital asset market, where a failure is not a defect but a theft.
          </p>
          <p>
            He founded WiseReader in France, backed by the French government through the French
            Tech Ticket, and founded Tuturama in Estonia, through which he advises a European
            retail group on security and artificial intelligence. He is co-founder of DeFarm,
            which makes the origin and compliance of Brazilian livestock verifiable to European
            buyers.
          </p>
          <p>
            He writes code. He has twelve accepted commits in the Linux kernel, reviewed by
            maintainers at Intel and Huawei, and merged contributions to Stellar, FediMint, Rig
            and Foundry. He publishes open research at gabrielrondon.com.
          </p>
          <p>
            He holds an M.Sc. in Innovation and Technology Management from Université Paris 1
            Panthéon-Sorbonne and is completing an MBA in Agribusiness at USP/ESALQ. He was born in
            Campo Grande, Brazil, has lived in Paris and Lisbon, and is moving home.
          </p>
        </div>
        <aside className="text-cream-dim">
          <p className="text-[14px] uppercase tracking-wide">Company</p>
          <p className="mt-2 text-cream">{company.name}</p>
          <p>Registry code {company.reg}</p>
          <p>{company.address}</p>
          <p className="mt-6 text-[14px] uppercase tracking-wide">Operating from</p>
          <p className="mt-2 text-cream">Lisbon, Portugal</p>
          <p className="mt-6 text-[14px] uppercase tracking-wide">Elsewhere</p>
          <p className="mt-2 flex flex-col gap-1">
            <a href="https://github.com/gabrielrondon" className="text-cream">
              github.com/gabrielrondon
            </a>
            <a href="https://gabrielrondon.com" className="text-cream">
              gabrielrondon.com
            </a>
          </p>
          <p className="mt-8">
            <Link href="/contact" className="pill">
              contact
            </Link>
          </p>
        </aside>
      </div>
    </div>
  );
}
