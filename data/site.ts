/*
  Every fact on the site comes from here.
  Rule: no claim without a public proof link. Client names never appear.
  Source of truth for the founder's facts: cerveau-gabriel/identidade/_fatos.md
  Source of truth for open source state: cerveau-gabriel/pipeline/oss.md
  Last verified against GitHub: 2026-09-06.
*/

export type Hue = "green" | "orange" | "blue" | "lilac";

export const lines = {
  embedded: { label: "embedded", hue: "green" as Hue },
  products: { label: "products", hue: "orange" as Hue },
  upstream: { label: "upstream", hue: "blue" as Hue },
  writing: { label: "writing", hue: "lilac" as Hue },
  now: { label: "now", hue: "green" as Hue },
  threads: { label: "threads", hue: "lilac" as Hue },
};

export const hueClass: Record<Hue, string> = {
  green: "text-green",
  orange: "text-orange",
  blue: "text-blue",
  lilac: "text-lilac",
};

export type ProductStatus = "live" | "pilot" | "private pilot" | "building";

export const products: {
  name: string;
  status: ProductStatus;
  one: string;
  body: string;
  url?: string;
  links: { label: string; href: string }[];
}[] = [
  {
    name: "Skywave",
    status: "live",
    one: "Radio from the whole planet, in your menu bar and in your pocket.",
    body:
      "A world radio player with a map, favourites that survive catalogue changes, and a curated station catalogue with programme schedules. Its cognitive layer turns listening into learning: vocabulary, sessions and goals sit next to the stations. The name comes from skywave propagation, the ionospheric bounce that lets a signal from Tokyo reach Tallinn. macOS and Android are live. iOS is in review.",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=app.skywave.android",
      },
    ],
  },
  {
    name: "Listening Robots",
    status: "pilot",
    one: "Audio intelligence for radio.",
    body:
      "Continuous listening to the broadcast, turned into quota compliance reports, proof of airplay and market intelligence. The cognitive layer is the listening itself: recognising speech, music and language on the live signal, hour after hour. Built for regulators, rights societies and stations, starting with regional languages that mainstream speech recognition ignores. Piloting in Europe.",
    url: "https://listeningrobots.com",
    links: [{ label: "listeningrobots.com", href: "https://listeningrobots.com" }],
  },
  {
    name: "Ulpiano",
    status: "private pilot",
    one: "A legal companion that lives inside your coding agent.",
    body:
      "While the project is being born, Ulpiano reads the repository and flags trademark, privacy, licence and tax issues, records each risk next to the code, and calls a real lawyer when it is time. Reading code the way a lawyer reads a file is its cognitive layer. It suggests. It never issues a legal opinion.",
    url: "https://ulpiano.tuturama.com",
    links: [{ label: "ulpiano.tuturama.com", href: "https://ulpiano.tuturama.com" }],
  },
];

export const merged: {
  project: string;
  what: string;
  proof: string;
  href: string;
}[] = [
  {
    project: "Linux kernel",
    what: "Multiple commits in mainline (staging, IIO drivers), reviewed by maintainers at Intel and Huawei. More in the IIO queue.",
    proof: "git.kernel.org author search",
    href: "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Gabriel+Rondon",
  },
  {
    project: "Stellar CLI",
    what: "Fix for SkipWhitespace returning an early EOF on whitespace-only chunks.",
    proof: "stellar/stellar-cli #2461, merged April 2026",
    href: "https://github.com/stellar/stellar-cli/pull/2461",
  },
  {
    project: "FediMint",
    what: "Merged PRs: automated nix flake updates, deprecation warnings on hidden CLI commands, unwrap to expect in non-test code.",
    proof: "fedimint/fedimint #8409, #8416, #8420",
    href: "https://github.com/fedimint/fedimint/pulls?q=is%3Apr+author%3Agabrielrondon+is%3Amerged",
  },
  {
    project: "Rig",
    what: "Capture ResponseFailed errors in OpenAI stream mode. Released in rig-core 0.34.1.",
    proof: "0xPlaygrounds/rig #1582, merged April 2026",
    href: "https://github.com/0xPlaygrounds/rig/pull/1582",
  },
  {
    project: "Foundry",
    what: "Trace option consolidation, authored commit merged through the maintainers' PR.",
    proof: "foundry-rs/foundry #15665, merged July 2026",
    href: "https://github.com/foundry-rs/foundry/pull/15665",
  },
  {
    project: "x402",
    what: "Solana exact payment scheme for the Rust implementation, with integration tests and examples.",
    proof: "Daktic/x402 #1 and #2, merged April and May 2026",
    href: "https://github.com/Daktic/x402/pulls?q=is%3Apr+author%3Agabrielrondon+is%3Amerged",
  },
];

export const inReview: { project: string; what: string; href: string }[] = [
  {
    project: "gstack",
    what: "Block the whole IPv4 link-local range in the browse daemon's navigation gate, not just the metadata IP.",
    href: "https://github.com/garrytan/gstack/pull/2811",
  },
  {
    project: "Solang",
    what: "Reject address.transfer and address.send on the Soroban target instead of panicking in codegen.",
    href: "https://github.com/hyperledger-solang/solang/pull/1915",
  },
  {
    project: "SP1",
    what: "Serde for the Elf type.",
    href: "https://github.com/succinctlabs/sp1/pull/2691",
  },
  {
    project: "Internet Computer stable-structures",
    what: "extend() for batch insertion in the stable vector.",
    href: "https://github.com/dfinity/stable-structures/pull/419",
  },
];

export const agentsWork: {
  title: string;
  body: string;
  status: string;
  href?: string;
}[] = [
  {
    title: "SSRF gate in gstack's browser daemon",
    body:
      "The navigation gate blocked only the cloud metadata IP. The rest of the link-local range, where ECS and EKS credential endpoints live, was reachable. Fix covers dotted quads, IPv4-mapped IPv6 and DNS rebinding, with tests.",
    status: "PR open",
    href: "https://github.com/garrytan/gstack/pull/2811",
  },
  {
    title: "Threat model for agentic spend",
    body:
      "For an MCP server that lets an agent pay over x402 on Stellar: the server dictates amount, asset and recipient with no ceiling and no pinning. Proposed six primitives in phases: audit log, asset pinning, domain allowlist, receipt verification, pre-signature hook, spending caps.",
    status: "Issue open",
    href: "https://github.com/jamesbachini/x402-mcp-stellar/issues/3",
  },
  {
    title: "proofpay",
    body: "Zero-knowledge gated x402 access for autonomous agents on Stellar.",
    status: "Open source",
    href: "https://github.com/gabrielrondon/proofpay",
  },
  {
    title: "Agentic Payment Guard",
    body:
      "A spending guard for autonomous agents: the agent decides, a sidecar signs within policy, a facilitator verifies and settles, and every step lands in a signed audit log. Proven end to end on Stellar testnet.",
    status: "Building, public release ahead of HackMeridian, October 2026",
  },
  {
    title: "agent-security skill pack",
    body:
      "The methods above, packaged as skills for coding agents: SSRF gate audit with 40 test vectors, threat model for agentic spend, MCP visibility audit, and a signed audit log with a runnable appender and verifier. MIT, install in one line.",
    status: "Open source, v0.1.0",
    href: "https://github.com/tuturama/agent-security",
  },
];

export const archive: {
  period: string;
  title: string;
  body: string;
}[] = [
  {
    period: "2024",
    title: "Icarus and the Internet Computer",
    body:
      "An audio series, Quest for the Infinite Web, that explains the architecture and fundamentals of the Internet Computer through a story. Written and produced by Tuturama Studios and released as a podcast on Spotify, with multilingual editions planned.",
  },
  {
    period: "2023",
    title: "Tuturama Studios",
    body:
      "Story-driven audio courses on markets and money. The Magical Market of Wonderville, on trading fundamentals and risk for all ages, and Dojima, on the birth of the Dojima Rice Exchange in 18th-century Japan.",
  },
  {
    period: "2021 to 2024",
    title: "Financial literacy for families",
    body:
      "Programmes and materials on money for families and children, as a Founding Member of the Financial Times' Financial Literacy and Inclusion Campaign.",
  },
  {
    period: "2021 to 2024",
    title: "Web3 education for overlooked audiences",
    body:
      "Educational material on tokenization and public blockchains, in languages the industry rarely translates to. Tuturama Labs, the technical arm, built the demos and the tooling behind the courses.",
  },
  {
    period: "2017 to 2018, before Tuturama",
    title: "WiseReader, Paris",
    body:
      "An adaptive book, founded by Gabriel Rondon and Denise Bonatto Duarte. Laureate of the French Tech Ticket, season 2, one of 70 startups selected from 2,700 applications, funded through Bpifrance and incubated at Paris&Co.",
  },
];

export const company = {
  name: "Tuturama OÜ",
  reg: "16022682",
  address: "Tornimäe 7, 10145 Tallinn, Estonia",
  email: "contact@tuturama.com",
  founded: "2020",
};
