import { Reveal } from "@/components/reveal";
import { hueClass } from "@/data/site";
import { threads } from "@/data/threads";
import type { Lang } from "@/lib/i18n";

/*
  Three horizontal lines, one per thread, each in its hue. When a thread scrolls into view the
  line draws itself left to right and the milestones pop in sequence (CSS in globals.css,
  driven by the same Reveal used elsewhere). Below md the lines give way to a vertical list.
*/
export function Threads({ lang }: { lang: Lang }) {
  const list = threads(lang);
  return (
    <div className="flex flex-col gap-14 md:gap-20">
      {list.map((t) => {
        const n = t.items.length;
        // One dot per grid column, sitting on the column's left edge (where the text starts).
        const xs = t.items.map((_, i) => `${(i / n) * 100 + 0.5}%`);
        return (
          <Reveal key={t.key} className={`thread ${hueClass[t.hue]}`}>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1">
              <h3 className="display h3 text-cream">{t.name}</h3>
              <p className="text-cream-dim">{t.lead}</p>
            </div>

            {/* Desktop: the line */}
            <div className="mt-6 hidden md:block">
              <svg className="art h-[40px] w-full" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <line className="draw" pathLength={1} x1={xs[0]} y1="20" x2={xs[n - 1]} y2="20" style={{ "--i": 0 } as React.CSSProperties} />
                {xs.map((x, i) => (
                  <g key={i} className="dot" style={{ "--i": i } as React.CSSProperties}>
                    <circle cx={x} cy="20" r="7" fill="#0e100f" />
                    <circle cx={x} cy="20" r="3.5" fill="currentColor" stroke="none" />
                  </g>
                ))}
              </svg>
              <ol className="grid gap-6" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
                {t.items.map((m, i) => (
                  <li key={m.label} className="dot-text" style={{ "--i": i } as React.CSSProperties}>
                    <p className="text-[14px] uppercase tracking-wide">{m.when}</p>
                    <p className="mt-1 font-semibold text-cream">
                      {m.href ? (
                        <a href={m.href} className="no-underline hover:underline">
                          {m.label}
                        </a>
                      ) : (
                        m.label
                      )}
                    </p>
                    <p className="mt-1 max-w-[30ch] text-[15px] leading-[1.25] text-cream-dim">{m.one}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Mobile: the list */}
            <ol className="mt-5 border-l border-current pl-5 md:hidden">
              {t.items.map((m, i) => (
                <li key={m.label} className="dot-text relative py-3" style={{ "--i": i } as React.CSSProperties}>
                  <span className="absolute -left-[26px] top-[18px] block h-[9px] w-[9px] rounded-full bg-current" />
                  <p className="text-[13px] uppercase tracking-wide">{m.when}</p>
                  <p className="font-semibold text-cream">
                    {m.href ? (
                      <a href={m.href} className="no-underline hover:underline">
                        {m.label}
                      </a>
                    ) : (
                      m.label
                    )}
                  </p>
                  <p className="text-[15px] leading-[1.25] text-cream-dim">{m.one}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        );
      })}
    </div>
  );
}
