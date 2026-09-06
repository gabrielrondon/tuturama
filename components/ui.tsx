import Link from "next/link";
import type { ReactNode } from "react";
import { company, hueClass, type Hue } from "@/data/site";

export function Annotation({ label, hue }: { label: string; hue: Hue }) {
  return (
    <span className={`annotation ${hueClass[hue]}`}>
      {"{ "}
      {label}
      {" }"}
    </span>
  );
}

export function Section({
  label,
  hue,
  title,
  children,
  id,
}: {
  label: string;
  hue: Hue;
  title?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="hairline py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Annotation label={label} hue={hue} />
        {title ? <h2 className="display h2 mt-5 max-w-[16ch]">{title}</h2> : null}
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

const nav = [
  { href: "/products", label: "products" },
  { href: "/upstream", label: "upstream" },
  { href: "/agents", label: "agents" },
  { href: "/how-we-work", label: "how we work" },
  { href: "/about", label: "about" },
];

export function Nav() {
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 md:px-10">
      <Link href="/" className="display text-[22px] no-underline" aria-label="Tuturama home">
        <span className="text-green">{"{ "}</span>
        tuturama
        <span className="text-green">{" }"}</span>
      </Link>
      <nav className="hidden items-center gap-7 md:flex">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="text-cream-dim no-underline hover:text-cream">
            {n.label}
          </Link>
        ))}
        <Link href="/contact" className="pill">
          contact
        </Link>
      </nav>
      <Link href="/contact" className="pill md:hidden">
        contact
      </Link>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="hairline mt-10">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 md:grid-cols-3 md:px-10">
        <div>
          <div className="display text-[22px]">
            <span className="text-green">{"{ "}</span>
            tuturama
            <span className="text-green">{" }"}</span>
          </div>
          <p className="mt-3 max-w-[32ch] text-cream-dim">
            An AI-native software factory for systems that cannot break. Tallinn and Lisbon.
          </p>
        </div>
        <nav className="flex flex-col gap-2 md:hidden">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="text-cream-dim no-underline hover:text-cream">
              {n.label}
            </Link>
          ))}
          <Link href="/archive" className="text-cream-dim no-underline hover:text-cream">
            archive
          </Link>
        </nav>
        <div className="hidden flex-col gap-2 md:flex">
          <Link href="/archive" className="text-cream-dim no-underline hover:text-cream">
            archive
          </Link>
          <a href="https://github.com/gabrielrondon" className="text-cream-dim no-underline hover:text-cream">
            github
          </a>
          <a href="https://gabrielrondon.com" className="text-cream-dim no-underline hover:text-cream">
            writing
          </a>
        </div>
        <div className="text-[15px] text-cream-dim">
          <p>
            {company.name} · Reg. {company.reg}
          </p>
          <p>{company.address}</p>
          <p>
            <a href={`mailto:${company.email}`} className="hover:text-cream">
              {company.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
