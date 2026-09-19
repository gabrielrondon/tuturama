"use client";

import { useState } from "react";

type Labels = {
  what: string;
  can: string;
  for: string;
  stack: string;
  when: string;
  email: string;
  submit: string;
  note: string;
};

/*
  No backend, on purpose: the answers are assembled into a mailto so nothing is stored on the
  site and the sender keeps a copy in their own outbox. If a browser has no mail client the
  text can be copied instead.
*/
export function IntakeForm({ labels, to, subject }: { labels: Labels; to: string; subject: string }) {
  const [v, setV] = useState({ what: "", can: "", for: "", stack: "", when: "", email: "" });
  const [copied, setCopied] = useState(false);
  const set = (k: keyof typeof v) => (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>
    setV({ ...v, [k]: e.target.value });

  const body = [
    `From: ${v.email}`,
    "",
    `1. ${labels.what}`,
    v.what,
    "",
    `2. ${labels.can}`,
    v.can,
    "",
    `3. ${labels.for}`,
    v.for,
    "",
    `4. ${labels.stack}`,
    v.stack,
    "",
    `5. ${labels.when}`,
    v.when,
  ].join("\n");

  const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const field = "mt-2 w-full rounded-2xl border border-hairline bg-surface px-4 py-3 text-cream outline-none focus:border-cream";

  return (
    <form
      className="mt-8 grid max-w-[720px] gap-6"
      onSubmit={(e) => {
        e.preventDefault();
        window.location.href = mailto;
      }}
    >
      {(["what", "can", "for", "stack", "when"] as const).map((k, i) => (
        <label key={k} className="block">
          <span className="text-cream-dim">
            <span className="text-green">{String(i + 1).padStart(2, "0")}</span> {labels[k]}
          </span>
          <textarea required rows={k === "what" ? 4 : 2} value={v[k]} onChange={set(k)} className={field} />
        </label>
      ))}
      <label className="block">
        <span className="text-cream-dim">{labels.email}</span>
        <input required type="email" value={v.email} onChange={set("email")} className={field} />
      </label>
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="pill pill-primary">
          {labels.submit}
        </button>
        <button
          type="button"
          className="pill"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(`${subject}\n\n${body}`);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {
              /* clipboard unavailable; the mailto path still works */
            }
          }}
        >
          {copied ? "copied" : "copy as text"}
        </button>
      </div>
      <p className="text-[15px] text-cream-dim">{labels.note}</p>
    </form>
  );
}
