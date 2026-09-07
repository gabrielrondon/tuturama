import Link from "next/link";
import type { ReactNode } from "react";
import { hueClass, type Hue, company } from "@/data/site";
import { href, other, ui, type Lang } from "@/lib/i18n";
import { FlagEE, FlagEU, FlagGB } from "@/components/flags";

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
  art,
  children,
  id,
}: {
  label: string;
  hue: Hue;
  title?: ReactNode;
  art?: ReactNode;
  children: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className="hairline py-14 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Annotation label={label} hue={hue} />
        {title ? (
          <div className="mt-5 grid items-end gap-6 md:grid-cols-[2fr_1fr]">
            <h2 className="display h2 max-w-[16ch]">{title}</h2>
            {art ? <div className={`${hueClass[hue]} hidden justify-self-end md:block`}>{art}</div> : null}
          </div>
        ) : null}
        <div className="mt-8 md:mt-12">{children}</div>
      </div>
    </section>
  );
}

function navItems(lang: Lang) {
  const n = ui[lang].nav;
  return [
    { href: href(lang, "/products"), label: n.products },
    { href: href(lang, "/upstream"), label: n.upstream },
    { href: href(lang, "/agents"), label: n.agents },
    { href: href(lang, "/how-we-work"), label: n.how },
    { href: href(lang, "/about"), label: n.about },
  ];
}

/* Language switch: shows the flag of the language you would switch to. */
export function LangSwitch({ lang, path }: { lang: Lang; path: string }) {
  const target = other(lang);
  const Flag = target === "et" ? FlagEE : FlagGB;
  return (
    <Link
      href={href(target, path)}
      hrefLang={target}
      title={ui[lang].switchTo}
      aria-label={ui[lang].switchTo}
      className="inline-flex items-center gap-2 rounded-full border border-hairline px-2 py-1 no-underline transition-colors hover:border-cream"
    >
      <Flag className="h-[22px] w-[30px]" />
      <span className="text-[14px] font-semibold uppercase tracking-wide text-cream-dim">{target}</span>
    </Link>
  );
}

export function Wordmark({ lang }: { lang: Lang }) {
  return (
    <Link href={href(lang, "/")} className="display text-[22px] no-underline" aria-label="Tuturama">
      <span className="text-green">{"{ "}</span>
      tuturama
      <span className="text-green">{" }"}</span>
    </Link>
  );
}

export function Nav({ lang, path }: { lang: Lang; path: string }) {
  const items = navItems(lang);
  const n = ui[lang].nav;
  return (
    <header className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-6 md:px-10">
      <Wordmark lang={lang} />
      <nav className="hidden items-center gap-7 md:flex">
        {items.map((i) => (
          <Link key={i.href} href={i.href} className="text-cream-dim no-underline hover:text-cream">
            {i.label}
          </Link>
        ))}
        <Link href={href(lang, "/contact")} className="pill">
          {n.contact}
        </Link>
        <LangSwitch lang={lang} path={path} />
      </nav>
      <div className="flex items-center gap-3 md:hidden">
        <Link href={href(lang, "/contact")} className="pill">
          {n.contact}
        </Link>
        <LangSwitch lang={lang} path={path} />
      </div>
    </header>
  );
}

export function Footer({ lang }: { lang: Lang }) {
  const items = navItems(lang);
  const t = ui[lang];
  return (
    <footer className="hairline mt-10">
      <div className="mx-auto grid max-w-[1400px] gap-8 px-5 py-10 md:grid-cols-3 md:px-10">
        <div>
          <div className="display text-[22px]">
            <span className="text-green">{"{ "}</span>
            tuturama
            <span className="text-green">{" }"}</span>
          </div>
          <p className="mt-3 max-w-[32ch] text-cream-dim">{t.tagline}</p>
        </div>
        <nav className="flex flex-col gap-2 md:hidden">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="text-cream-dim no-underline hover:text-cream">
              {i.label}
            </Link>
          ))}
          <Link href={href(lang, "/archive")} className="text-cream-dim no-underline hover:text-cream">
            {t.nav.archive}
          </Link>
        </nav>
        <div className="hidden flex-col gap-2 md:flex">
          <Link href={href(lang, "/archive")} className="text-cream-dim no-underline hover:text-cream">
            {t.nav.archive}
          </Link>
          <a href="https://github.com/gabrielrondon" className="text-cream-dim no-underline hover:text-cream">
            {t.nav.github}
          </a>
          <a href="https://gabrielrondon.com" className="text-cream-dim no-underline hover:text-cream">
            {t.nav.writing}
          </a>
        </div>
        <div className="text-[15px] text-cream-dim">
          <p className="mb-3 flex items-center gap-2">
            <FlagEE className="h-[18px] w-[25px]" />
            <FlagEU className="h-[18px] w-[25px]" />
            <span>{t.footer.estonian}</span>
          </p>
          <p>
            {company.name} · {t.footer.reg} {company.reg}
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
