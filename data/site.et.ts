/*
  Estonian content. Same shape and same proof links as data/site.ts.
  Written 2026-09-07. Native review recommended before it is put in front of grant reviewers.
*/
import type { Hue, ProductStatus } from "@/data/site";

export const lines = {
  embedded: { label: "kohapeal", hue: "green" as Hue },
  products: { label: "tooted", hue: "orange" as Hue },
  upstream: { label: "upstream", hue: "blue" as Hue },
  writing: { label: "kirjutised", hue: "lilac" as Hue },
  now: { label: "praegu", hue: "green" as Hue },
  threads: { label: "jooned", hue: "lilac" as Hue },
};

export const statusLabel: Record<ProductStatus, string> = {
  live: "väljas",
  pilot: "piloot",
  "private pilot": "suletud piloot",
  building: "ehitamisel",
};

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
    one: "Raadio kogu planeedilt, sinu menüüribal ja taskus.",
    body:
      "Maailmaraadio kaardi, kataloogimuutusi üleelavate lemmikute ja saatekavadega jaamakataloogiga. Selle kognitiivne kiht muudab kuulamise õppimiseks: sõnavara, sessioonid ja eesmärgid on jaamade kõrval. Nimi tuleb ionosfäärilevist (skywave propagation), mille tõttu jõuab Tokyo signaal Tallinna. macOS ja Android on väljas. iOS on ülevaatusel.",
    links: [
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=app.skywave.android" },
    ],
  },
  {
    name: "Listening Robots",
    status: "pilot",
    one: "Audioluure raadiole.",
    body:
      "Pidev eetri kuulamine, millest saavad kvoodiaruanded, eetrisoleku tõendid ja turuluure. Kognitiivne kiht on kuulamine ise: kõne, muusika ja keele äratundmine otsesignaalist, tund tunni järel. Loodud regulaatoritele, autoriõiguste organisatsioonidele ja jaamadele, alustades piirkondlikest keeltest, mida peavoolu kõnetuvastus eirab. Pilootprojektid Euroopas.",
    url: "https://listeningrobots.com",
    links: [{ label: "listeningrobots.com", href: "https://listeningrobots.com" }],
  },
  {
    name: "Ulpiano",
    status: "private pilot",
    one: "Õigusabiline, kes elab sinu kodeerimisagendis.",
    body:
      "Kui projekt sünnib, loeb Ulpiano repositooriumi ning märgib kaubamärgi-, privaatsus-, litsentsi- ja maksuküsimused, kirjutab iga riski koodi kõrvale ja kutsub päris juristi, kui on aeg. Koodi lugemine nii, nagu jurist loeb toimikut, ongi tema kognitiivne kiht. Ta soovitab. Ta ei anna kunagi õiguslikku arvamust.",
    url: "https://ulpiano.tuturama.com",
    links: [{ label: "ulpiano.tuturama.com", href: "https://ulpiano.tuturama.com" }],
  },
];

export const merged: { project: string; what: string; proof: string; href: string }[] = [
  {
    project: "Linuxi tuum",
    what: "Mitu commit'i mainline'is (staging, IIO draiverid), üle vaadanud Inteli ja Huawei hooldajad. Veel on IIO puus järjekorras.",
    proof: "git.kernel.org autoriotsing",
    href: "https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/log/?qt=author&q=Gabriel+Rondon",
  },
  {
    project: "Stellar CLI",
    what: "Parandus: SkipWhitespace tagastas ainult tühikuid sisaldavatel tükkidel enneaegse EOF-i.",
    proof: "stellar/stellar-cli #2461, vastu võetud aprill 2026",
    href: "https://github.com/stellar/stellar-cli/pull/2461",
  },
  {
    project: "FediMint",
    what: "Vastuvõetud PR-id: automaatsed nix flake uuendused, hoiatused peidetud CLI käskudel, unwrap asendatud expect'iga.",
    proof: "fedimint/fedimint #8409, #8416, #8420",
    href: "https://github.com/fedimint/fedimint/pulls?q=is%3Apr+author%3Agabrielrondon+is%3Amerged",
  },
  {
    project: "Rig",
    what: "ResponseFailed vigade püüdmine OpenAI voogrežiimis. Välja antud rig-core 0.34.1-s.",
    proof: "0xPlaygrounds/rig #1582, vastu võetud aprill 2026",
    href: "https://github.com/0xPlaygrounds/rig/pull/1582",
  },
  {
    project: "Foundry",
    what: "Trace-valikute koondamine, autori commit võeti vastu hooldajate PR-i kaudu.",
    proof: "foundry-rs/foundry #15665, vastu võetud juuli 2026",
    href: "https://github.com/foundry-rs/foundry/pull/15665",
  },
  {
    project: "x402",
    what: "Solana täpse makse skeem Rusti teostusele, koos integratsioonitestide ja näidetega.",
    proof: "Daktic/x402 #1 ja #2, vastu võetud aprill ja mai 2026",
    href: "https://github.com/Daktic/x402/pulls?q=is%3Apr+author%3Agabrielrondon+is%3Amerged",
  },
];

export const inReview: { project: string; what: string; href: string }[] = [
  {
    project: "gstack",
    what: "Blokeerida brauseri-deemoni navigeerimisväravas kogu IPv4 link-local vahemik, mitte ainult metaandmete IP.",
    href: "https://github.com/garrytan/gstack/pull/2811",
  },
  {
    project: "Solang",
    what: "Keelata address.transfer ja address.send Soroban sihtmärgil, selle asemel et codegen'is kokku joosta.",
    href: "https://github.com/hyperledger-solang/solang/pull/1915",
  },
  { project: "SP1", what: "Serde Elf tüübile.", href: "https://github.com/succinctlabs/sp1/pull/2691" },
  {
    project: "Internet Computer stable-structures",
    what: "extend() hulgilisamiseks stabiilsesse vektorisse.",
    href: "https://github.com/dfinity/stable-structures/pull/419",
  },
];

export const agentsWork: { title: string; body: string; status: string; href?: string }[] = [
  {
    title: "SSRF-värav gstacki brauseri-deemonis",
    body:
      "Navigeerimisvärav blokeeris ainult pilve metaandmete IP. Ülejäänud link-local vahemik, kus elavad ECS-i ja EKS-i tunnuste otspunktid, oli kättesaadav. Parandus katab punktidega neljandikud, IPv4-mapped IPv6 ja DNS rebinding'u, koos testidega.",
    status: "PR avatud",
    href: "https://github.com/garrytan/gstack/pull/2811",
  },
  {
    title: "Ohumudel agentide kulutustele",
    body:
      "MCP-serverile, mis laseb agendil Stellaris x402 kaudu maksta: server dikteerib summa, vara ja saaja ilma lae ja kinnituseta. Pakkusime kuus primitiivi etappidena: auditilogi, vara kinnitamine, domeenide lubamisnimekiri, kviitungite kontroll, allkirjaeelne konks, kulutuste piirid.",
    status: "Issue avatud",
    href: "https://github.com/jamesbachini/x402-mcp-stellar/issues/3",
  },
  {
    title: "proofpay",
    body: "Nullteadmusega väravaga x402 ligipääs autonoomsetele agentidele Stellaris.",
    status: "Avatud lähtekood",
    href: "https://github.com/gabrielrondon/proofpay",
  },
  {
    title: "Agentic Payment Guard",
    body:
      "Kulutuste kaitse autonoomsetele agentidele: agent otsustab, kõrvalprotsess allkirjastab poliitika piires, vahendaja kontrollib ja arveldab ning iga samm jõuab allkirjastatud auditilogisse. Tõestatud otsast lõpuni Stellari testvõrgus.",
    status: "Ehitamisel, avalik väljalase enne HackMeridiani, oktoober 2026",
  },
  {
    title: "agent-security oskustepakett",
    body:
      "Ülaltoodud meetodid pakendatuna oskusteks kodeerimisagentidele: SSRF-värava audit 40 testvektoriga, ohumudel agentide kulutustele, MCP nähtavuse audit ning allkirjastatud auditilogi käivitatava lisaja ja kontrollijaga. MIT, paigaldus ühe reaga.",
    status: "Avatud lähtekood, v0.1.0",
    href: "https://github.com/tuturama/agent-security",
  },
];

export const archive: { period: string; title: string; body: string }[] = [
  {
    period: "2024",
    title: "Icarus ja Internet Computer",
    body:
      "Audiosari Quest for the Infinite Web, mis selgitab loo kaudu Internet Computeri arhitektuuri ja põhimõtteid. Kirjutanud ja tootnud Tuturama Studios, välja antud taskuhäälinguna Spotifys, mitmekeelsed väljaanded plaanis.",
  },
  {
    period: "2023",
    title: "Tuturama Studios",
    body:
      "Loopõhised audiokursused turgudest ja rahast. The Magical Market of Wonderville kauplemise põhitõdedest ja riskist igale vanusele ning Dojima 18. sajandi Jaapani Dojima riisibörsi sünnist.",
  },
  {
    period: "2021 kuni 2024",
    title: "Finantskirjaoskus peredele",
    body:
      "Programmid ja materjalid rahast peredele ja lastele, Financial Timesi finantskirjaoskuse ja kaasamise kampaania asutajaliikmena.",
  },
  {
    period: "2021 kuni 2024",
    title: "Web3 haridus tähelepanuta publikule",
    body:
      "Õppematerjalid nullteadmusetõestustest, tokeniseerimisest ja avalikest plokiahelatest keeltes, millesse tööstus harva tõlgib. Tuturama Labs tegi demod ja kursuste taga oleva tööriistastiku.",
  },
  {
    period: "2017 kuni 2018, enne Tuturamat",
    title: "WiseReader, Pariis",
    body:
      "Kohanduv raamat, mille asutasid Gabriel Rondon ja Denise Bonatto Duarte. French Tech Ticketi teise hooaja laureaat, üks 70 idufirmast 2700 kandidaadi seast, rahastatud Bpifrance'i kaudu ja inkubeeritud Paris&Co-s.",
  },
];
