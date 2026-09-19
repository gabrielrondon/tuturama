import type { Metadata } from "next";
import { Mark } from "@/components/brand";
import { company } from "@/data/site";
import { ui } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Agent security audit, one page",
  robots: { index: false },
};

/*
  Print source for the one-page PDF (public/brand/tuturama-agent-security-audit.pdf).
  Rendered with Playwright at A4; regenerate after editing: see README.
*/
export default function OnePager() {
  const t = ui.en.audit;
  return (
    <main
      className="mx-auto bg-[#fffce1] text-[#0e100f]"
      style={{ width: "210mm", minHeight: "297mm", padding: "16mm 18mm", fontSize: "11.5px", lineHeight: 1.3 }}
    >
      <header className="flex items-start justify-between">
        <div>
          <p className="text-[12px]" style={{ color: "#1f7a2e" }}>
            {"{ agent security audit }"}
          </p>
          <h1 className="display mt-2" style={{ fontSize: "34px", lineHeight: 0.95, maxWidth: "12ch" }}>
            {t.h1}
          </h1>
        </div>
        <Mark size={64} radius={0.24} variant="cream" />
      </header>

      <p className="mt-5 max-w-[68ch] text-[13px] leading-[1.3]">{t.lead}</p>

      <section className="mt-5 grid grid-cols-2 gap-x-8 gap-y-4">
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#1f7a2e" }}>
            {t.scopeTitle}
          </h2>
          <ul className="mt-2 flex flex-col gap-2">
            {t.scope.map((s) => (
              <li key={s.name}>
                <span className="font-semibold">{s.name}.</span> {s.body}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#1f7a2e" }}>
            {t.deliverTitle}
          </h2>
          <ul className="mt-2 flex flex-col gap-2">
            {t.deliver.map((d) => (
              <li key={d.name}>
                <span className="font-semibold">{d.name}.</span> {d.body}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-5 grid grid-cols-2 gap-x-8">
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#1f7a2e" }}>
            {t.howTitle}
          </h2>
          <ol className="mt-2 flex flex-col gap-1.5">
            {t.how.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#1f7a2e" }}>
            {t.priceTitle}
          </h2>
          <p className="mt-2">{t.price}</p>
          <h2 className="mt-4 text-[12px] font-semibold uppercase tracking-wide" style={{ color: "#1f7a2e" }}>
            {t.proofTitle}
          </h2>
          <p className="mt-2">{t.proof} github.com/tuturama/agent-security</p>
        </div>
      </section>

      <footer className="mt-6 flex items-end justify-between border-t pt-3 text-[10.5px]" style={{ borderColor: "#d9d5b8" }}>
        <div>
          <p className="font-semibold">Tuturama. An AI-native software factory for systems that cannot break.</p>
          <p>
            {company.name} · Reg. {company.reg} · {company.address}
          </p>
        </div>
        <div className="text-right">
          <p>tuturama.com/audit</p>
          <p>{company.email}</p>
        </div>
      </footer>
    </main>
  );
}
