import * as en from "@/data/site";
import * as et from "@/data/site.et";

export type Lang = "en" | "et";
export const langs: Lang[] = ["en", "et"];

export function other(lang: Lang): Lang {
  return lang === "en" ? "et" : "en";
}

/* Route prefix: English lives at the root, Estonian under /et. Same slugs in both. */
export function href(lang: Lang, path: string): string {
  const p = path === "/" ? "" : path;
  return lang === "en" ? p || "/" : `/et${p}`;
}

export function getContent(lang: Lang) {
  if (lang === "et") {
    return {
      products: et.products,
      merged: et.merged,
      inReview: et.inReview,
      agentsWork: et.agentsWork,
      archive: et.archive,
      company: en.company,
      lines: et.lines,
    };
  }
  return {
    products: en.products,
    merged: en.merged,
    inReview: en.inReview,
    agentsWork: en.agentsWork,
    archive: en.archive,
    company: en.company,
    lines: en.lines,
  };
}

/* UI strings, by page. Estonian copy written 2026-09-07; native review recommended before grant reviewers read it. */
export const ui = {
  en: {
    siteName: "Tuturama",
    tagline: "An AI-native software factory for systems that cannot break. Tallinn and Lisbon.",
    description:
      "An AI-native software factory for systems that cannot break. Products, embedded security and AI work, and open source merged upstream. Tallinn and Lisbon.",
    nav: { products: "products", upstream: "upstream", agents: "agents", how: "how we work", about: "about", contact: "contact", archive: "archive", github: "github", writing: "writing" },
    switchTo: "Eesti keeles",
    footer: { reg: "Reg.", estonian: "Registered in Estonia. Based in Lisbon." },
    home: {
      annotation: "software factory",
      hero: "Software factory for systems that cannot break.",
      lead: "Tuturama is an AI-native software factory. We build products, embed with security teams inside large institutions, and contribute to the code the world runs on.",
      ctaWork: "work with us",
      ctaShipped: "see what shipped",
      embeddedTitle: "Security and AI, inside the institution.",
      embeddedBody: "We work embedded, forward-deployed in the client's own team, with a mandate on security and artificial intelligence. The advice comes with the engineering that follows it: threat models for AI adoption, architecture reviews, tooling the team keeps after we leave.",
      embeddedModel: "We also install the operating model we run on inside a team: roles as skills, gates before shipping, memory that outlives the session. Two to four weeks. Your people keep it.",
      embeddedAside: "Right now that seat is inside the CISO Office of a European retail group. Over twenty years the same seat has been inside Pearson, Société Générale, Walmart, Banco do Brasil and Kraken, always where new technology meets old structure.",
      embeddedLink: "Ask about an embedded engagement",
      productsTitle: "Apps with a cognitive layer.",
      productsNote: "The factory's own output. It is how we know the method works.",
      productsMore: "More on the products",
      upstreamTitle: "Open source, merged.",
      upstreamNote: "Every item links to the maintainers' review. Nothing here is self-published. The work is continuous; the live state is on GitHub.",
      upstreamMore: "Full list, including what is in review",
      nowTitle: "Security for AI agents.",
      nowBody: "Agents now browse, pay and read private data on our behalf. The security around them lags behind what they can do. This is where the factory spends its own time in 2026: threat models for agentic spend, gates in agent tooling, guards for autonomous payments.",
      nowAside: "Findings go to the maintainers first. Methods go public as skills.",
      nowCta: "what is open right now",
      writingBody: "Research and essays by the founder, on traceability, verification, and the engineering hidden inside institutions, at",
    },
    products: {
      title: "Products",
      description: "Apps with a cognitive layer: Skywave, Listening Robots and Ulpiano.",
      h1: "Apps with a cognitive layer.",
      lead: "Each product listens, reads or watches something on the user's behalf and turns it into a decision. The cognitive layer is the part in between: the understanding. They are the factory's own output: what we sell as method, we ship as product first.",
      archiveNote: "Earlier work, from audio series to financial literacy programmes, lives in the",
      archiveLink: "archive",
      alt: {
        mac: "Skywave on macOS: explore view with stations, focus and easy-to-follow rows",
        android1: "Skywave on Android: now playing",
        android2: "Skywave on Android: explore",
        feature: "Skywave: 1,000+ stations, 60+ languages, no sign-up",
        ulpiano: "Ulpiano landing page with a terminal running ulpiano check",
        lr: "Listening Robots mark",
      },
    },
    upstream: {
      title: "Upstream",
      description: "Open source contributions merged upstream: Linux kernel, Stellar, FediMint, Rig, Foundry, x402. Plus what is in review.",
      h1: "Open source, merged.",
      lead: "Contributions to projects other people depend on. The maintainers' review is the hardest gate we know, so it is the proof we lead with. Every line links to it.",
      merged: "Merged",
      inReview: "In review",
      cols: { project: "Project", what: "What", proof: "Proof" },
      note: "Verified against the source repositories before each content change. The work is continuous and the live state is on GitHub, under Gabriel Rondon, founder of Tuturama, in his own name.",
    },
    agents: {
      title: "Security for AI agents",
      description: "Threat models for agentic spend, gates in agent tooling, guards for autonomous payments. What Tuturama works on now.",
      h1: "Security for AI agents.",
      p1: "An agent that can browse can be pointed at an internal network. An agent that can pay can be told what to pay. An agent that can read private notes can be asked to summarise them for a stranger. None of this needs a new class of attacker, only the old ones aimed at a new surface.",
      p2: "We work on the surface itself: the gates inside agent tooling, the policies around agent payments, the audit trails that make an autonomous decision reviewable after the fact.",
      aside: "Findings go to the maintainers first, through their security process. Methods go public afterwards, as skills any coding agent can run.",
      cta: "bring us an agent to break",
    },
    how: {
      title: "How we work",
      description: "One founder, a team's output. Skills as roles, gates before shipping, every claim verified at the source.",
      annotation: "method",
      h1: "One founder, a team's output.",
      lead: "Tuturama is run by one person and a set of coding agents, organised the way a small engineering team would be. The unit of work is small, the gates are strict, and the output is measured by what shipped and what got merged, not by what was typed.",
      aside: "Small by design. The size is what lets us sit inside a client's team without becoming a vendor, and ship products without a roadmap committee.",
      steps: [
        { name: "Skills as roles", body: "The factory is organised as a set of skills, each one a written role with its own checklist: reviewer, security officer, release engineer, accountant. An agent loads the role, does the work, and hands over to the next. The founder holds the judgement calls." },
        { name: "Gates before shipping", body: "Nothing ships on the first draft. Code goes through build, tests and a cold review before a pull request. Text goes through three passes and a hostile read. Upstream contributions then meet the hardest gate of all, the maintainers." },
        { name: "Verified at the source", body: "Every technical claim is checked against the code, the file, the line, before it is written down. A claim that was not verified does not go out. The rule exists because the alternative was tested and failed in public." },
        { name: "Memory that outlives the session", body: "Decisions, corrections and state live in files, not in a chat window. A new session starts with what the last one learned. The company's own bookkeeping runs on the same method." },
        { name: "Separation of concerns", body: "Client work, products and open source do not share accounts, secrets or repositories. What a client sees never leaks into a product. What we learn in a product never leaks into a client's name." },
      ],
    },
    about: {
      title: "About",
      description: "Tuturama OÜ, founded 2020 in Tallinn, run from Lisbon by Gabriel Rondon.",
      annotation: "about",
      h1: "Frontier technology, inside institutions that cannot afford to break.",
      paras: [
        "Tuturama was founded in Tallinn in 2020 by Gabriel Berlitz Rondon. It began as an education studio for audiences the technology industry overlooked, and became what it is now: an AI-native software factory that builds products, embeds with security teams, and contributes upstream. Tuturama is the company behind Skywave, Listening Robots and Ulpiano, and the vehicle for the founder's embedded and open source work.",
        "Gabriel has spent twenty years where new technology meets old structure. He was a product manager at Banco do Brasil and Société Générale, in insurance and credit. He managed projects at Walmart Brazil. He led the efficacy function at Pearson Education, with more than a hundred people, measuring whether the promised learning actually happened. He was a product manager at Kraken and Bitfinex during the formation of the digital asset market, where a failure is not a defect but a theft.",
        "He founded WiseReader in France, backed by the French government through the French Tech Ticket, and founded Tuturama in Estonia, through which he advises a European retail group on security and artificial intelligence. He is co-founder of DeFarm, which makes the origin and compliance of Brazilian livestock verifiable to European buyers.",
        "He writes code. He has accepted commits in the Linux kernel, reviewed by maintainers at Intel and Huawei, and merged contributions to Stellar, FediMint, Rig and Foundry. He publishes open research at gabrielrondon.com.",
        "He holds an M.Sc. in Innovation and Technology Management from Université Paris 1 Panthéon-Sorbonne and is completing an MBA in Agribusiness at USP/ESALQ.",
      ],
      company: "Company",
      registry: "Registry code",
      operating: "Operating from",
      lisbon: "Lisbon, Portugal",
      elsewhere: "Elsewhere",
      contact: "contact",
    },
    archive: {
      title: "Archive",
      description: "Before the factory: audio series on the Internet Computer, Tuturama Studios, financial literacy programmes, web3 education, WiseReader.",
      annotation: "archive",
      h1: "Before the factory.",
      lead: "Tuturama spent its first years explaining hard technology to people the industry did not bother with: children, families, speakers of languages nobody translates to. The studio is quiet now. The habit of explaining stayed.",
      altSpotify: "Icarus: Quest for the Infinite Web, the podcast page on Spotify, 2024",
      altIcarus: "Icarus, the pilot of the series, in his craft",
      altDojima: "Cover art for Dojima, the series on the Dojima Rice Exchange",
    },
    contact: {
      title: "Contact",
      description: "Embedded security and AI work, an operating model for your team, or an agent to break.",
      annotation: "contact",
      h1: "Write to us.",
      lead: "One founder reads every message. Say what you are building, what cannot break, and when you need an answer.",
      asks: [
        { title: "An embedded engagement", body: "Security and AI advisory inside your team, with the engineering that follows. Months, not days." },
        { title: "An operating model for your team", body: "We install the model we run on inside one team or function: roles as skills, gates before shipping, memory that outlives the session. Two to four weeks. Your people keep it." },
        { title: "An agent to break", body: "A threat model or a security review of an agent, an MCP server, or an agentic payment flow." },
      ],
      registry: "Registry code",
    },
  },
  et: {
    siteName: "Tuturama",
    tagline: "AI-natiivne tarkvaratehas süsteemidele, mis ei tohi katki minna. Tallinn ja Lissabon.",
    description:
      "AI-natiivne tarkvaratehas süsteemidele, mis ei tohi katki minna. Tooted, sisseehitatud turva- ja AI-töö ning avatud lähtekood, mis on upstream'is vastu võetud. Tallinn ja Lissabon.",
    nav: { products: "tooted", upstream: "upstream", agents: "agendid", how: "kuidas me töötame", about: "meist", contact: "kontakt", archive: "arhiiv", github: "github", writing: "kirjutised" },
    switchTo: "In English",
    footer: { reg: "Reg.", estonian: "Registreeritud Eestis. Tegutseb Lissabonist." },
    home: {
      annotation: "tarkvaratehas",
      hero: "Tarkvaratehas süsteemidele, mis ei tohi katki minna.",
      lead: "Tuturama on AI-natiivne tarkvaratehas. Me ehitame tooteid, töötame suurte organisatsioonide turvameeskondade sees ja panustame koodi, millel maailm töötab.",
      ctaWork: "tee meiega koostööd",
      ctaShipped: "vaata, mis on valmis",
      embeddedTitle: "Turvalisus ja AI, organisatsiooni sees.",
      embeddedBody: "Töötame sisseehitatult, kliendi enda meeskonnas, turvalisuse ja tehisintellekti mandaadiga. Nõuga tuleb kaasa ka inseneritöö: ohumudelid AI kasutuselevõtuks, arhitektuuri ülevaatused, tööriistad, mis jäävad meeskonnale alles.",
      embeddedModel: "Paigaldame meeskonda ka töömudeli, millel me ise töötame: rollid oskustena, väravad enne väljalaset, mälu, mis elab sessiooni üle. Kaks kuni neli nädalat. Teie inimesed hoiavad selle alles.",
      embeddedAside: "Praegu on see koht ühe Euroopa jaekontserni CISO Office'is. Kahekümne aasta jooksul on sama koht olnud Pearsonis, Société Générale'is, Walmartis, Banco do Brasilis ja Krakenis, alati seal, kus uus tehnoloogia kohtub vana struktuuriga.",
      embeddedLink: "Küsi sisseehitatud koostöö kohta",
      productsTitle: "Rakendused kognitiivse kihiga.",
      productsNote: "Tehase enda toodang. Nii me teame, et meetod töötab.",
      productsMore: "Toodetest lähemalt",
      upstreamTitle: "Avatud lähtekood, vastu võetud.",
      upstreamNote: "Iga rida viitab hooldajate ülevaatusele. Siin pole midagi ise avaldatut. Töö on pidev; hetkeseis on GitHubis.",
      upstreamMore: "Täisnimekiri, koos ülevaatusel olevaga",
      nowTitle: "Turvalisus AI-agentidele.",
      nowBody: "Agendid sirvivad, maksavad ja loevad meie nimel privaatseid andmeid. Nende ümber olev turvalisus jääb maha sellest, mida nad suudavad. Siia kulutab tehas 2026. aastal oma aja: ohumudelid agentide kulutustele, väravad agenditööriistades, kaitsed autonoomsetele maksetele.",
      nowAside: "Leiud lähevad kõigepealt hooldajatele. Meetodid avaldatakse oskustena.",
      nowCta: "mis on praegu lahti",
      writingBody: "Asutaja uurimused ja esseed jälgitavusest, kontrollitavusest ja institutsioonide sees peituvast inseneritööst aadressil",
    },
    products: {
      title: "Tooted",
      description: "Rakendused kognitiivse kihiga: Skywave, Listening Robots ja Ulpiano.",
      h1: "Rakendused kognitiivse kihiga.",
      lead: "Iga toode kuulab, loeb või jälgib midagi kasutaja nimel ja teeb sellest otsuse. Kognitiivne kiht on see, mis jääb vahele: arusaamine. Need on tehase enda toodang: mida me müüme meetodina, anname kõigepealt välja tootena.",
      archiveNote: "Varasem töö, audiosarjadest finantskirjaoskuse programmideni, elab",
      archiveLink: "arhiivis",
      alt: {
        mac: "Skywave macOS-is: avastamisvaade jaamade, fookuse ja lihtsalt jälgitavate ridadega",
        android1: "Skywave Androidis: praegu mängib",
        android2: "Skywave Androidis: avasta",
        feature: "Skywave: 1000+ jaama, 60+ keelt, ilma registreerimiseta",
        ulpiano: "Ulpiano avaleht terminaliga, mis käivitab ulpiano check",
        lr: "Listening Robotsi märk",
      },
    },
    upstream: {
      title: "Upstream",
      description: "Upstream'is vastu võetud avatud lähtekoodi panused: Linuxi tuum, Stellar, FediMint, Rig, Foundry, x402. Lisaks see, mis on ülevaatusel.",
      h1: "Avatud lähtekood, vastu võetud.",
      lead: "Panused projektidesse, millest teised sõltuvad. Hooldajate ülevaatus on kõige rangem värav, mida me teame, seega on see tõend, millega alustame. Iga rida viitab sellele.",
      merged: "Vastu võetud",
      inReview: "Ülevaatusel",
      cols: { project: "Projekt", what: "Mis", proof: "Tõend" },
      note: "Kontrollitud lähterepositooriumide vastu enne iga sisumuudatust. Töö on pidev ja hetkeseis on GitHubis, Tuturama asutaja Gabriel Rondoni enda nime all.",
    },
    agents: {
      title: "Turvalisus AI-agentidele",
      description: "Ohumudelid agentide kulutustele, väravad agenditööriistades, kaitsed autonoomsetele maksetele. Millega Tuturama praegu tegeleb.",
      h1: "Turvalisus AI-agentidele.",
      p1: "Agendi, kes oskab sirvida, saab suunata sisevõrku. Agendile, kes oskab maksta, saab öelda, mida maksta. Agendilt, kes loeb privaatseid märkmeid, saab paluda need võõrale kokku võtta. Ükski neist ei vaja uut ründajate klassi, ainult vanu, sihitud uuele pinnale.",
      p2: "Töötame pinna endaga: väravad agenditööriistade sees, poliitikad agendimaksete ümber, auditijäljed, mis teevad autonoomse otsuse tagantjärele ülevaadatavaks.",
      aside: "Leiud lähevad kõigepealt hooldajatele, nende turvaprotsessi kaudu. Meetodid avaldatakse pärast oskustena, mida iga kodeerimisagent saab käivitada.",
      cta: "too meile agent, mida murda",
    },
    how: {
      title: "Kuidas me töötame",
      description: "Üks asutaja, meeskonna toodang. Rollid oskustena, väravad enne väljalaset, iga väide kontrollitud allikast.",
      annotation: "meetod",
      h1: "Üks asutaja, meeskonna toodang.",
      lead: "Tuturamat juhib üks inimene koos kodeerimisagentidega, korraldatuna nii, nagu oleks korraldatud väike insenerimeeskond. Tööühik on väike, väravad ranged ja tulemust mõõdetakse selle järgi, mis välja läks ja mis vastu võeti, mitte selle järgi, mis kirja pandi.",
      aside: "Väike kavatsuslikult. Suurus on see, mis lubab meil istuda kliendi meeskonna sees ilma tarnijaks muutumata ja anda välja tooteid ilma teekaardi komiteeta.",
      steps: [
        { name: "Rollid oskustena", body: "Tehas on korraldatud oskuste kogumina, millest igaüks on kirjapandud roll oma kontrollnimekirjaga: ülevaataja, turvajuht, väljalaseinsener, raamatupidaja. Agent laeb rolli, teeb töö ära ja annab järgmisele üle. Otsused jäävad asutajale." },
        { name: "Väravad enne väljalaset", body: "Miski ei lähe välja esimese mustandina. Kood läbib ehituse, testid ja külma ülevaatuse enne pull request'i. Tekst läbib kolm ringi ja vaenuliku lugemise. Upstream-panused kohtuvad seejärel kõige rangema väravaga: hooldajatega." },
        { name: "Kontrollitud allikast", body: "Iga tehniline väide kontrollitakse koodi, faili ja rea vastu enne, kui see kirja pannakse. Kontrollimata väide välja ei lähe. Reegel on olemas, sest alternatiivi katsetati avalikult ja see kukkus läbi." },
        { name: "Mälu, mis elab sessiooni üle", body: "Otsused, parandused ja seis elavad failides, mitte vestlusaknas. Uus sessioon algab sellest, mida eelmine õppis. Ettevõtte enda raamatupidamine käib sama meetodiga." },
        { name: "Vastutuse lahusus", body: "Klienditöö, tooted ja avatud lähtekood ei jaga kontosid, saladusi ega repositooriume. See, mida klient näeb, ei leki kunagi tootesse. See, mida me tootes õpime, ei leki kunagi kliendi nimesse." },
      ],
    },
    about: {
      title: "Meist",
      description: "Tuturama OÜ, asutatud 2020 Tallinnas, juhitud Lissabonist Gabriel Rondoni poolt.",
      annotation: "meist",
      h1: "Tipptehnoloogia institutsioonidesse, mis ei tohi katki minna.",
      paras: [
        "Tuturama asutas Tallinnas 2020. aastal Gabriel Berlitz Rondon. See sündis haridusstuudiona publikule, kellest tehnoloogiatööstus mööda vaatas, ja sai selleks, mis ta praegu on: AI-natiivne tarkvaratehas, mis ehitab tooteid, töötab turvameeskondade sees ja panustab upstream'i. Tuturama on ettevõte Skywave'i, Listening Robotsi ja Ulpiano taga ning asutaja sisseehitatud ja avatud lähtekoodiga töö vahend.",
        "Gabriel on kakskümmend aastat töötanud seal, kus uus tehnoloogia kohtub vana struktuuriga. Ta oli tootejuht Banco do Brasilis ja Société Générale'is, kindlustuses ja krediidis. Ta juhtis projekte Walmart Brasilis. Ta juhtis Pearson Educationi tulemuslikkuse üksust enam kui saja inimesega, mõõtes, kas lubatud õppimine päriselt toimus. Ta oli tootejuht Krakenis ja Bitfinexis digivarade turu kujunemise ajal, kus tõrge pole defekt, vaid vargus.",
        "Ta asutas Prantsusmaal WiseReaderi, mida toetas Prantsuse valitsus French Tech Ticketi kaudu, ja Eestis Tuturama, mille kaudu ta nõustab üht Euroopa jaekontserni turvalisuse ja tehisintellekti alal. Ta on DeFarmi kaasasutaja; DeFarm teeb Brasiilia kariloomade päritolu ja nõuetele vastavuse Euroopa ostjatele kontrollitavaks.",
        "Ta kirjutab koodi. Tal on Linuxi tuumas vastuvõetud commit'e, mille vaatasid üle Inteli ja Huawei hooldajad, ning vastuvõetud panused Stellari, FediMinti, Rigi ja Foundrysse. Ta avaldab avatud uurimusi aadressil gabrielrondon.com.",
        "Tal on innovatsiooni- ja tehnoloogiajuhtimise magistrikraad Université Paris 1 Panthéon-Sorbonne'ist ja ta lõpetab agroäri MBA-d USP/ESALQ-is.",
      ],
      company: "Ettevõte",
      registry: "Registrikood",
      operating: "Tegutseb",
      lisbon: "Lissabon, Portugal",
      elsewhere: "Mujal",
      contact: "kontakt",
    },
    archive: {
      title: "Arhiiv",
      description: "Enne tehast: audiosari Internet Computerist, Tuturama Studios, finantskirjaoskuse programmid, web3 haridus, WiseReader.",
      annotation: "arhiiv",
      h1: "Enne tehast.",
      lead: "Tuturama veetis oma esimesed aastad, selgitades keerulist tehnoloogiat inimestele, kellega tööstus ei vaevunud tegelema: lastele, peredele, keelte kõnelejatele, kellele keegi ei tõlgi. Stuudio on praegu vait. Selgitamise harjumus jäi.",
      altSpotify: "Icarus: Quest for the Infinite Web, taskuhäälingu leht Spotifys, 2024",
      altIcarus: "Icarus, sarja piloot, oma sõidukis",
      altDojima: "Dojima, Dojima riisibörsi sarja kaanepilt",
    },
    contact: {
      title: "Kontakt",
      description: "Sisseehitatud turva- ja AI-töö, töömudel teie meeskonnale või agent, mida murda.",
      annotation: "kontakt",
      h1: "Kirjuta meile.",
      lead: "Üks asutaja loeb iga kirja. Ütle, mida sa ehitad, mis ei tohi katki minna ja millal sa vastust vajad.",
      asks: [
        { title: "Sisseehitatud koostöö", body: "Turvalisuse ja AI nõustamine teie meeskonna sees, koos sellele järgneva inseneritööga. Kuud, mitte päevad." },
        { title: "Töömudel teie meeskonnale", body: "Paigaldame ühte meeskonda või funktsiooni mudeli, millel me ise töötame: rollid oskustena, väravad enne väljalaset, mälu, mis elab sessiooni üle. Kaks kuni neli nädalat. Teie inimesed hoiavad selle alles." },
        { title: "Agent, mida murda", body: "Ohumudel või turvaülevaatus agendile, MCP-serverile või agendimakse voole." },
      ],
      registry: "Registrikood",
    },
  },
} as const;

export type UI = (typeof ui)["en"];
