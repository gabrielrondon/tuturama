/*
  The three lines that run through the work, 2021 to now. Dates verified 2026-09-07 against
  the old site captures, the founder's fact file and repository timestamps.
  Sigillo is deliberately absent (private until its funding decision).
*/
import type { Hue } from "@/data/site";
import type { Lang } from "@/lib/i18n";

export type Milestone = { when: string; label: string; one: string; href?: string };
export type Thread = { key: string; name: string; hue: Hue; lead: string; items: Milestone[] };

const en: Thread[] = [
  {
    key: "audio",
    name: "Audio",
    hue: "orange",
    lead: "From explaining by ear to machines that listen.",
    items: [
      { when: "2023", label: "Tuturama Studios", one: "Story-driven audio courses on markets and money: Wonderville, Dojima." },
      { when: "2024", label: "Icarus", one: "An audio series on the Internet Computer, released as a podcast on Spotify." },
      { when: "2026", label: "Skywave", one: "World radio on macOS and Android. Listening turned into learning.", href: "https://play.google.com/store/apps/details?id=app.skywave.android" },
      { when: "2026", label: "Listening Robots", one: "Continuous listening to the broadcast, turned into compliance reports and proof of airplay. Piloting.", href: "https://listeningrobots.com" },
    ],
  },
  {
    key: "proof",
    name: "Proof",
    hue: "blue",
    lead: "Prove it without revealing it.",
    items: [
      { when: "2024", label: "Tuturama Labs", one: "The studio's technical arm: tokenization and zero-knowledge development behind the courses." },
      { when: "2025", label: "ZK demos", one: "Zero-knowledge proof demos and zkvox, a ZK voting prototype, public on GitHub.", href: "https://github.com/gabrielrondon/zkvox" },
      { when: "2025", label: "Ghost", one: "A zero-knowledge canister on the Internet Computer.", href: "https://github.com/gabrielrondon/ghost_dev" },
      { when: "2026", label: "proofpay", one: "Zero-knowledge gated x402 access for autonomous agents on Stellar.", href: "https://github.com/gabrielrondon/proofpay" },
    ],
  },
  {
    key: "agents",
    name: "Agents",
    hue: "green",
    lead: "Agents that pay and browse, and the guards around them.",
    items: [
      { when: "Apr 2026", label: "x402", one: "Solana payment scheme merged into the Rust implementation.", href: "https://github.com/Daktic/x402/pull/1" },
      { when: "Aug 2026", label: "Threat model", one: "For an MCP server that lets an agent pay over x402 on Stellar. Six primitives, in phases.", href: "https://github.com/jamesbachini/x402-mcp-stellar/issues/3" },
      { when: "Aug 2026", label: "Payment guard", one: "Policy before the signature and a signed audit log, proven end to end on Stellar testnet." },
      { when: "Sep 2026", label: "agent-security", one: "Four audits as skills for coding agents, with a runnable verifier. MIT.", href: "https://github.com/tuturama/agent-security" },
    ],
  },
];

const et: Thread[] = [
  {
    key: "audio",
    name: "Heli",
    hue: "orange",
    lead: "Kõrva kaudu selgitamisest masinateni, mis kuulavad.",
    items: [
      { when: "2023", label: "Tuturama Studios", one: "Loopõhised audiokursused turgudest ja rahast: Wonderville, Dojima." },
      { when: "2024", label: "Icarus", one: "Audiosari Internet Computerist, välja antud taskuhäälinguna Spotifys." },
      { when: "2026", label: "Skywave", one: "Maailmaraadio macOS-is ja Androidis. Kuulamine muudetud õppimiseks.", href: "https://play.google.com/store/apps/details?id=app.skywave.android" },
      { when: "2026", label: "Listening Robots", one: "Pidev eetri kuulamine, millest saavad vastavusaruanded ja eetrisoleku tõendid. Piloot.", href: "https://listeningrobots.com" },
    ],
  },
  {
    key: "proof",
    name: "Tõestus",
    hue: "blue",
    lead: "Tõesta seda ilma paljastamata.",
    items: [
      { when: "2024", label: "Tuturama Labs", one: "Stuudio tehniline haru: tokeniseerimise ja nullteadmuse arendus kursuste taga." },
      { when: "2025", label: "ZK demod", one: "Nullteadmusetõestuste demod ja zkvox, ZK hääletamise prototüüp, avalikult GitHubis.", href: "https://github.com/gabrielrondon/zkvox" },
      { when: "2025", label: "Ghost", one: "Nullteadmuse canister Internet Computeris.", href: "https://github.com/gabrielrondon/ghost_dev" },
      { when: "2026", label: "proofpay", one: "Nullteadmusega väravaga x402 ligipääs autonoomsetele agentidele Stellaris.", href: "https://github.com/gabrielrondon/proofpay" },
    ],
  },
  {
    key: "agents",
    name: "Agendid",
    hue: "green",
    lead: "Agendid, mis maksavad ja sirvivad, ja kaitsed nende ümber.",
    items: [
      { when: "apr 2026", label: "x402", one: "Solana makseskeem võeti vastu Rusti teostusse.", href: "https://github.com/Daktic/x402/pull/1" },
      { when: "aug 2026", label: "Ohumudel", one: "MCP-serverile, mis laseb agendil Stellaris x402 kaudu maksta. Kuus primitiivi, etappidena.", href: "https://github.com/jamesbachini/x402-mcp-stellar/issues/3" },
      { when: "aug 2026", label: "Maksekaitse", one: "Poliitika enne allkirja ja allkirjastatud auditilogi, tõestatud otsast lõpuni Stellari testvõrgus." },
      { when: "sept 2026", label: "agent-security", one: "Neli auditit oskustena kodeerimisagentidele, käivitatava kontrollijaga. MIT.", href: "https://github.com/tuturama/agent-security" },
    ],
  },
];

export function threads(lang: Lang): Thread[] {
  return lang === "et" ? et : en;
}
