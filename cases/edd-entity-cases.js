// ═══════════════════════════════════════════════════════════════
// EDD — ENTITY ENHANCED DUE DILIGENCE REVIEWS
// Periodic deep-dive reviews of high-risk corporate customers.
// 6 Cases — All names are fictional and designed to be clearly non-real.
// No real person, company, or entity bears these names or matches these profiles.
// ═══════════════════════════════════════════════════════════════
const EDD_ENTITY_CASES = [
  // ── CASE 1: NBFI with sanctions proximity and ownership changes — should ESCALATE ──
  {
    id: "EDD-E-2026-0201",
    name: "Krastovek Financial Group Ltd",
    teaser: "Annual entity review — ownership change, sanctions proximity, jurisdiction risk",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "escalate",
    profile: {
      entityName: "Krastovek Financial Group Ltd",
      entityType: "Non-Bank Financial Institution (NBFI) — Payment Services",
      jurisdiction: "Cyprus (EU)",
      incorporationDate: "September 2018",
      registeredAgent: "Levantis Corporate Services, Limassol",
      customerSince: "March 2020",
      accountType: "Corporate Operating + FX Settlement Account",
      declaredTurnover: "$12M/year (payment processing fees)",
      currentRiskRating: "High — triggered for annual review",
      regulatedBy: "Central Bank of Cyprus — Payment Institution Licence #PI-2019-084",
    },
    reviewTrigger: "Mandatory annual EDD review for high-risk NBFI. Additionally triggered by: (1) material change in beneficial ownership reported by Companies House Cyprus, (2) negative screening hit on new shareholder, and (3) 40% increase in transaction volume with no corresponding business explanation.",
    sourceOfWealth: {
      declared: "Payment processing fees from merchant network across Eastern Europe and Central Asia. Founded by Gregor Krastovek (original 100% owner) using proceeds from sale of prior fintech company ($2.4M, 2018).",
      findings: "Gregor Krastovek sold 60% shareholding in November 2025 to Veltrani Capital Partners LLP (UK). Veltrani's UBO is Yusof Peshkani, an Iranian-born businessman with UK residency. Peshkani is not sanctioned but is a known close associate of Arman Tehrazadeh, who IS designated under OFAC SDN List and EU sanctions for links to Iranian Revolutionary Guard procurement networks. Peshkani's name appears in 2024 FinCEN leaked files as a 'person of interest' in IRGC-linked procurement.",
      assessment: "Original source of wealth (Krastovek's company sale) was verified. New majority ownership through Veltrani raises critical sanctions proximity concerns. Peshkani's connection to a designated person creates unacceptable exposure."
    },
    adverseMedia: [
      { date: "2026-01-28", source: "Compliance Intelligence Weekly", summary: "Veltrani Capital Partners linked to investigation into sanctions evasion network. UK NCA reportedly examining Peshkani's business relationships.", flag: true },
      { date: "2025-11-05", source: "Cyprus Business Monitor", summary: "Krastovek Financial Group ownership change filed. 60% acquired by Veltrani Capital Partners. No public explanation for ownership transfer.", flag: true },
      { date: "2025-06-14", source: "OFAC Press Release", summary: "Arman Tehrazadeh designated under E.O. 13846 for supporting IRGC procurement. Multiple associated entities sanctioned.", flag: true },
    ],
    transactions: [
      { amount: "$2,100,000", date: "2026-02-15", to: "Incoming — Merchant settlements (batch)", country: "Multiple", flag: false },
      { amount: "$890,000", date: "2026-02-12", to: "Wire Out → Veltrani Capital Partners LLP", country: "UK", flag: true },
      { amount: "$1,450,000", date: "2026-02-08", to: "Incoming — Merchant settlements (batch)", country: "Multiple", flag: false },
      { amount: "$340,000", date: "2026-02-05", to: "Wire Out → Peshkara Trade FZE", country: "UAE", flag: true },
      { amount: "$1,800,000", date: "2026-01-30", to: "Incoming — Merchant settlements (batch)", country: "Multiple", flag: false },
      { amount: "$520,000", date: "2026-01-22", to: "Wire Out → Zentrova Payments SARL", country: "Lebanon", flag: true },
      { amount: "$275,000", date: "2026-01-15", to: "Wire Out → Veltrani Capital Partners LLP", country: "UK", flag: true },
      { amount: "$1,600,000", date: "2026-01-10", to: "Incoming — Merchant settlements (batch)", country: "Multiple", flag: false },
    ],
    documents: [
      { name: "Certificate of Incorporation", status: "provided", flag: false, note: "Cyprus registered. Valid. Updated to reflect ownership change." },
      { name: "Payment Institution Licence", status: "provided", flag: true, note: "Valid licence — but regulator not yet notified of material ownership change. Potential licence condition breach." },
      { name: "Shareholder Register (updated)", status: "provided", flag: true, note: "Shows Veltrani Capital Partners 60%, Gregor Krastovek 40%. Change effective November 2025." },
      { name: "Veltrani UBO Declaration", status: "provided", flag: true, note: "Declares Yusof Peshkani as UBO (82% of Veltrani). Peshkani is close associate of sanctioned individual." },
      { name: "Audited Financial Statements (2024)", status: "provided", flag: true, note: "Revenue $12.1M. But Q4 2025 unaudited figures show 40% volume increase with no new merchant contracts filed." },
      { name: "AML/CFT Policies", status: "outdated", flag: true, note: "Last updated 2023. Does not reflect new ownership, updated risk assessment, or sanctions screening procedures." },
      { name: "Sanctions Screening Procedures", status: "missing", flag: true, note: "Requested December 2025. Not provided. Critical gap given sanctions proximity." },
    ],
    screening: [
      { type: "Sanctions (Entity)", result: "No direct match", flag: false },
      { type: "Sanctions (UBO — Peshkani)", result: "NO DIRECT MATCH — but close associate of OFAC-designated Arman Tehrazadeh", flag: true },
      { type: "PEP Check (Directors)", result: "No PEP matches", flag: false },
      { type: "Adverse Media (Entity)", result: "2 HITS — sanctions evasion investigation links", flag: true },
      { type: "Adverse Media (UBO)", result: "3 HITS — IRGC procurement, NCA investigation", flag: true },
      { type: "Regulatory Status", result: "Licensed — but ownership change may require regulator notification", flag: true },
    ],
    network: {
      nodes: [
        { id: "kfg", label: "Krastovek Financial", type: "company", x: 230, y: 50, risk: "critical", info: "Cyprus NBFI. Payment services. Majority ownership changed Nov 2025. 40% unexplained volume increase.", jurisdiction: "Cyprus" },
        { id: "veltrani", label: "Veltrani Capital", type: "company", x: 80, y: 165, risk: "critical", info: "UK LLP. Acquired 60% of Krastovek. UBO is Yusof Peshkani. Under NCA examination.", jurisdiction: "United Kingdom" },
        { id: "peshkani", label: "Y. Peshkani", type: "person", x: 80, y: 290, risk: "critical", info: "Iranian-born, UK resident. 82% owner of Veltrani. Close associate of OFAC-designated Arman Tehrazadeh. FinCEN person of interest.", jurisdiction: "UK / Iran" },
        { id: "tehrazadeh", label: "A. Tehrazadeh", type: "unknown", x: 80, y: 390, risk: "critical", info: "OFAC SDN List + EU Sanctions. Designated under E.O. 13846 for IRGC procurement support. DO NOT TRANSACT.", jurisdiction: "⚠️ SANCTIONED" },
        { id: "gregor", label: "G. Krastovek", type: "person", x: 380, y: 165, risk: "medium", info: "Original founder. Sold 60% to Veltrani. Retains 40% and operational role. No adverse findings on individual.", jurisdiction: "Cyprus" },
        { id: "peshkara", label: "Peshkara Trade", type: "company", x: 230, y: 290, risk: "high", info: "UAE Free Zone entity. $340K wire. Name similarity to 'Peshkani' — potential related party. Not disclosed.", jurisdiction: "UAE" },
        { id: "zentrova", label: "Zentrova Payments", type: "company", x: 380, y: 290, risk: "high", info: "Lebanese SARL. $520K wire for 'payment corridor partnership'. Lebanon is FATF grey-listed.", jurisdiction: "Lebanon" },
      ],
      edges: [
        { from: "veltrani", to: "kfg", label: "60%" },
        { from: "gregor", to: "kfg", label: "40%" },
        { from: "peshkani", to: "veltrani", label: "82% UBO" },
        { from: "peshkani", to: "tehrazadeh", label: "Associate" },
        { from: "kfg", to: "peshkara", label: "$340K" },
        { from: "kfg", to: "zentrova", label: "$520K" },
        { from: "kfg", to: "veltrani", label: "$1.16M" },
      ],
    },
    flags: [
      "Material ownership change: 60% acquired by Veltrani Capital (UBO: Yusof Peshkani) — not flagged proactively by customer.",
      "SANCTIONS PROXIMITY: Peshkani is a known close associate of Arman Tehrazadeh (OFAC SDN / EU designated — IRGC procurement).",
      "UK NCA reportedly examining Peshkani's business relationships — active law enforcement interest.",
      "Peshkara Trade FZE ($340K wire) — name similarity to Peshkani suggests potential undisclosed related party.",
      "40% transaction volume increase (Q4 2025) with no new merchant contracts — unexplained business growth.",
      "$520K wire to Zentrova Payments SARL (Lebanon, FATF grey-listed) — high-risk payment corridor.",
      "$1.16M wired to Veltrani Capital Partners — potential extraction of funds to parent/UBO entity.",
      "Payment institution licence may require regulator notification of ownership change — not yet done.",
      "AML/CFT policies outdated (2023). Sanctions screening procedures not provided despite request.",
    ],
    feedback: {
      escalate: {
        grade: "excellent", title: "Excellent Decision!", points: 160,
        explain: "Escalation to the MLRO / senior compliance is exactly right. This case involves <strong>sanctions proximity</strong> to an OFAC-designated individual linked to IRGC procurement — this is too significant for a single analyst to resolve. The MLRO needs to: (1) assess whether the relationship breaches sanctions obligations, (2) consider a voluntary disclosure to the NCA/OFSI, (3) coordinate with legal counsel, and (4) make the exit decision with full institutional backing. You should include a recommendation to exit in your escalation report.",
        coach: "🎓 <strong>AI Coach:</strong> Sanctions proximity cases require senior decision-making and often legal advice. The key distinction: an analyst can recommend exit, but sanctions-related exits need MLRO sign-off and may require regulatory notification. Always escalate sanctions proximity — never try to handle it alone.",
      },
      exit: {
        grade: "partial", title: "Right Instinct, But Escalate First", points: 90,
        explain: "Exit is very likely the correct outcome, but <strong>sanctions proximity cases must go through the MLRO</strong>. A unilateral exit could trigger tipping-off concerns, and the institution may need to file a suspicious activity report or make a voluntary disclosure before taking action. The NCA investigation adds further complexity.",
        coach: "🎓 <strong>AI Coach:</strong> When sanctions are involved, process matters as much as outcome. Exiting without MLRO coordination could inadvertently tip off the customer or breach reporting obligations.",
      },
      maintain: {
        grade: "bad", title: "Critical Risk Unaddressed", points: -50,
        explain: "Maintaining a relationship with an entity whose majority UBO is a <strong>close associate of an OFAC-designated person</strong> linked to IRGC procurement would expose the institution to sanctions breach risk, regulatory enforcement, and severe reputational damage. This is not a manageable risk.",
        coach: "🎓 <strong>AI Coach:</strong> Sanctions proximity is binary — either you can manage the exposure or you can't. When the UBO is one degree from a designated person, you can't.",
      },
      downgrade: {
        grade: "bad", title: "Risk Has Increased — Not Decreased", points: -40,
        explain: "The risk profile has <strong>dramatically worsened</strong> since the last review: new sanctions-proximate ownership, active law enforcement interest, unexplained volume increases, and missing compliance documentation. Downgrading would be indefensible.",
        coach: "🎓 <strong>AI Coach:</strong> Downgrade requires evidence that risk factors have diminished. Here, every indicator has moved in the wrong direction.",
      }
    }
  },

  // ── CASE 2: Offshore fund with layered feeders and PEP exposure ──
  {
    id: "EDD-E-2026-0202",
    name: "Aetherion Alternative Fund SPC",
    teaser: "Cayman SPC fund — layered feeders, multiple indirect PEPs, unexplained redemptions",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "exit",
    profile: {
      entityName: "Aetherion Alternative Fund SPC",
      entityType: "Segregated Portfolio Company (SPC) — Alternative Investment Fund",
      jurisdiction: "Cayman Islands",
      incorporationDate: "July 2021",
      registeredAgent: "Maples Fund Services",
      customerSince: "October 2022",
      accountType: "Fund Custody + Subscription/Redemption Account",
      declaredTurnover: "$45M AUM inflows/outflows annually",
      currentRiskRating: "Very High — annual high-risk fund review",
      regulatedBy: "CIMA — Registered Private Fund",
    },
    reviewTrigger: "Annual EDD for high-risk offshore fund. Triggered by: (1) chain analysis showing indirect PEP exposure in feeders, (2) $18M unexplained redemptions in Q4 2025, (3) feeder funds in opacity jurisdictions refusing full look-through.",
    sourceOfWealth: {
      declared: "Subscriptions from high-net-worth individuals and family offices via feeders.",
      findings: "Three feeder funds (BVI, Mauritius, Labuan) account for 68% of AUM. Administrators refuse to provide investor lists citing privacy. Screening identifies indirect PEP exposure in two feeders (one linked to Azerbaijani elite, one to Malaysian politically-connected family). Large redemptions ($18M) paid to BVI feeder with no corresponding investment activity explanation.",
      assessment: "Critical CDD gap — inability to look through feeders creates conduit risk for illicit funds / PEPs."
    },
    adverseMedia: [
      { date: "2026-02-03", source: "ICIJ Offshore Leaks", summary: "Aetherion feeder structure mentioned in connection with Azerbaijani elite asset concealment.", flag: true },
    ],
    transactions: [
      { amount: "$9,200,000", date: "2025-12-18", to: "Redemption — BVI Feeder Fund", country: "BVI", flag: true },
      { amount: "$8,700,000", date: "2025-11-05", to: "Redemption — Mauritius Feeder", country: "Mauritius", flag: true },
      { amount: "$12,400,000", date: "2025-10-22", from: "Subscription — Labuan Feeder", country: "Malaysia", flag: false },
    ],
    documents: [
      { name: "CIMA Registration Certificate", status: "provided", flag: false },
      { name: "Offering Memorandum", status: "provided", flag: true, note: "Describes feeder structure but no investor disclosure." },
      { name: "Feeder Fund Investor Lists", status: "missing", flag: true, note: "Administrators refuse to provide — critical gap." },
      { name: "AML Policies (Fund)", status: "provided", flag: true, note: "Delegated to administrator — generic document." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP Check (Indirect)", result: "Multiple indirect PEP hits via feeders", flag: true },
      { type: "Adverse Media", result: "Offshore leaks connection to politically exposed families", flag: true },
    ],
    flags: [
      "Layered feeder structure across opacity jurisdictions — no look-through provided.",
      "Indirect PEP exposure confirmed in at least two feeders.",
      "$18M unexplained redemptions in short period — no corresponding investment rationale.",
      "Administrators refuse to disclose underlying investors — critical CDD failure.",
      "High-volume flows through FATF high-risk / grey-listed jurisdictions.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Correct Decision", points: 160,
        explain: "Exit is appropriate. Inability to obtain look-through on feeders + confirmed indirect PEP exposure + large unexplained redemptions = unacceptable money laundering / sanctions risk." },
      escalate: { grade: "partial", title: "Good, but Exit Likely", points: 100,
        explain: "Escalation to senior compliance is sensible, but the recommendation should be exit unless full transparency is immediately provided (unlikely)." },
      maintain: { grade: "bad", title: "Unacceptable", points: -60,
        explain: "Maintaining without investor transparency would make the bank a potential conduit for illicit funds." },
    }
  },

  // ── CASE 3: Commodity trader — conflict minerals supply chain concerns ──
  {
    id: "EDD-E-2026-0203",
    name: "Vantablack Minerals Trading Ltd",
    teaser: "Swiss-based commodities trader — DRC / Zimbabwe supply chain, no audit",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "exit",
    profile: {
      entityName: "Vantablack Minerals Trading Ltd",
      entityType: "Commodity Trading Company",
      jurisdiction: "Switzerland",
      incorporationDate: "March 2019",
      registeredAgent: "Self-registered Geneva",
      customerSince: "August 2021",
      accountType: "Trade Finance + Derivatives Clearing",
      declaredTurnover: "$28M/year (cobalt, tantalum, gold trading)",
      currentRiskRating: "Very High — conflict minerals sector",
      regulatedBy: "None (non-regulated trader)",
    },
    reviewTrigger: "Triggered by (1) NGO report naming supplier network, (2) missing OECD due diligence audit, (3) $4.2M payment to high-risk DRC entity.",
    sourceOfWealth: {
      declared: "Trading margins on 3T minerals and precious metals.",
      findings: "Supply chain includes multiple artisanal mines in eastern DRC and Zimbabwe. No third-party Responsible Minerals Assurance Process (RMAP) audit. Large payment to unnamed DRC SARL with same address as known conflict-linked entity.",
      assessment: "High risk of facilitating conflict financing and human rights abuses."
    },
    adverseMedia: [
      { date: "2026-03-19", source: "Global Witness", summary: "Vantablack named in report on sourcing from non-certified mines in Ituri province, DRC.", flag: true },
    ],
    transactions: [
      { amount: "$4,200,000", date: "2026-02-10", to: "Kivu Minerals SARL", country: "DRC", flag: true },
      { amount: "$3,800,000", date: "2025-12-14", from: "Incoming — End-buyer payment", country: "China", flag: false },
    ],
    documents: [
      { name: "Swiss Commercial Register Extract", status: "provided", flag: false },
      { name: "Supply Chain Due Diligence Policy", status: "provided", flag: true, note: "Basic policy — no independent audit." },
      { name: "Supplier List & Chain of Custody", status: "incomplete", flag: true, note: "Partial list; no third-party verification." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "Adverse Media", result: "Conflict minerals sourcing allegations", flag: true },
    ],
    flags: [
      "Supply chain includes conflict-affected/high-risk areas (eastern DRC, Zimbabwe).",
      "No independent RMAP / OECD-aligned audit despite sector requirements.",
      "Large payment to DRC entity with conflict-area address.",
      "Adverse NGO reporting on sourcing practices.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Strongly Justified", points: 150,
        explain: "Exit is defensible and often prudent in this sector. Lack of supply-chain transparency + adverse reporting = unmanageable human rights / conflict financing risk." },
      escalate: { grade: "partial", title: "Appropriate", points: 90,
        explain: "Escalate to compliance/sustainability team — exit likely outcome." },
      maintain: { grade: "bad", title: "High Risk", points: -50,
        explain: "Continuing without full audit and chain of custody risks facilitating serious abuses." },
    }
  },

  // ── CASE 4: Insurance captive manager — tax haven network & fraud concerns ──
  {
    id: "EDD-E-2026-0204",
    name: "Sylvaris Captive Management Ltd",
    teaser: "Bermuda captive manager — opaque client captives, fraud investigation link",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      entityName: "Sylvaris Captive Management Ltd",
      entityType: "Captive Insurance Manager",
      jurisdiction: "Bermuda",
      incorporationDate: "January 2020",
      registeredAgent: "Conyers",
      customerSince: "September 2022",
      accountType: "Correspondent Reinsurance + Premium Trust Account",
      declaredTurnover: "$32M annual premiums managed",
      currentRiskRating: "Critical — triggered by adverse media",
      regulatedBy: "Bermuda Monetary Authority — Class M Licence",
    },
    reviewTrigger: "Adverse media linking one managed captive to fraud scheme + refusal to provide client list.",
    sourceOfWealth: {
      declared: "Management fees + profit commissions from 14 captives.",
      findings: "One captive (Cayman-domiciled) implicated in 2025 US insurance fraud investigation. Client list refused — cites confidentiality. Multiple captives domiciled in Cayman/Labuan with minimal underlying activity.",
      assessment: "High risk of facilitating premium diversion / reinsurance fraud."
    },
    adverseMedia: [
      { date: "2025-12-07", source: "Insurance Journal", summary: "Cayman captive managed by Sylvaris entity implicated in $47M workers' comp fraud scheme (US).", flag: true },
    ],
    transactions: [
      { amount: "$6,800,000", date: "2026-01-28", from: "Incoming — Premiums (Cayman captive)", country: "Cayman", flag: true },
      { amount: "$5,200,000", date: "2025-11-15", to: "Reinsurance placement — opaque front", country: "Labuan", flag: true },
    ],
    documents: [
      { name: "BMA Licence", status: "provided", flag: false },
      { name: "Captive Client List", status: "missing", flag: true, note: "Refused — confidentiality cited." },
      { name: "AML Program", status: "provided", flag: true, note: "Generic — no captive-specific controls." },
    ],
    screening: [
      { type: "Adverse Media", result: "Fraud scheme connection", flag: true },
    ],
    flags: [
      "Managed captive directly linked to active insurance fraud investigation.",
      "Refusal to provide client list — critical transparency gap.",
      "High volume of premiums through opacity jurisdictions.",
      "Generic AML controls not tailored to captive risk.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Correct", points: 160,
        explain: "Exit is the right call. Active fraud link + refusal of transparency = unacceptable money laundering / fraud facilitation risk." },
      maintain: { grade: "bad", title: "Severe Risk", points: -60,
        explain: "Maintaining relationship would expose bank to serious liability." },
    }
  },

  // ── CASE 5: Trade finance entity — dual-use goods red flags ──
  {
    id: "EDD-E-2026-0205",
    name: "Nexvora Trade Solutions Pte Ltd",
    teaser: "Singapore trade finance firm — dual-use goods shipments, Russia/UAE routing",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      entityName: "Nexvora Trade Solutions Pte Ltd",
      entityType: "Trade Finance Intermediary",
      jurisdiction: "Singapore",
      incorporationDate: "April 2022",
      registeredAgent: "Rikvin Pte Ltd",
      customerSince: "January 2023",
      accountType: "Trade Finance + LC Settlement Account",
      declaredTurnover: "$65M/year (structured trade finance)",
      currentRiskRating: "Critical — sanctions evasion indicators",
      regulatedBy: "None (non-regulated intermediary)",
    },
    reviewTrigger: "Triggered by (1) end-user certificates showing electronics routed via UAE to Russia, (2) adverse media on similar structures, (3) $9M in LCs with high-risk counterparties.",
    sourceOfWealth: {
      declared: "Fees from structuring trade transactions (electronics, industrial equipment).",
      findings: "Multiple LCs for 'test equipment' routed UAE → Russia post-2022 sanctions. End-user certificates list civilian entities but goods match dual-use ECCN categories. Adverse media links similar Singapore intermediaries to Russia sanctions evasion.",
      assessment: "High probability of facilitating export control violations."
    },
    adverseMedia: [
      { date: "2026-04-11", source: "Reuters", summary: "Singapore intermediaries implicated in Russia sanctions evasion networks for dual-use tech.", flag: true },
    ],
    transactions: [
      { amount: "$4,900,000", date: "2026-03-02", to: "LC settlement — UAE intermediary", country: "UAE", flag: true },
      { amount: "$3,200,000", date: "2026-02-18", from: "Incoming — Russian buyer", country: "Russia", flag: true },
    ],
    documents: [
      { name: "ACRA Business Profile", status: "provided", flag: false },
      { name: "End-User Certificates", status: "provided", flag: true, note: "Civilian end-users stated — goods match dual-use categories." },
      { name: "Transaction Records", status: "incomplete", flag: true, note: "Missing full chain of end-use verification." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "Adverse Media", result: "Sanctions evasion patterns", flag: true },
    ],
    flags: [
      "Goods routed via UAE to Russia — high risk of sanctions circumvention.",
      "Transaction patterns match dual-use / export control evasion typologies.",
      "Adverse media on Singapore intermediaries in similar schemes.",
      "Incomplete end-use verification documentation.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Mandatory", points: 160,
        explain: "Exit required. Clear indicators of export control / sanctions evasion facilitation — continuing relationship creates severe legal and reputational risk." },
      maintain: { grade: "bad", title: "Unacceptable", points: -70,
        explain: "Maintaining would likely constitute facilitation of sanctions breach." },
    }
  },

  // ── CASE 6: Crypto exchange — AML program deficiencies & mixer links ──
  {
    id: "EDD-E-2026-0206",
    name: "Cryonex Digital Assets OÜ",
    teaser: "Estonian VASP — outdated AML, mixer exposure, Dubai ops",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "exit",
    profile: {
      entityName: "Cryonex Digital Assets OÜ",
      entityType: "Virtual Asset Service Provider (VASP)",
      jurisdiction: "Estonia",
      incorporationDate: "February 2022",
      registeredAgent: "Baltvern Legal",
      customerSince: "June 2023",
      accountType: "Fiat On/Off Ramp + Settlement Account",
      declaredTurnover: "$38M monthly volume (claimed)",
      currentRiskRating: "Very High — crypto sector + chain alerts",
      regulatedBy: "FIU Estonia — VASP registration (old regime)",
    },
    reviewTrigger: "Chainalysis alert (mixer usage) + outdated AML program + operations shifted to Dubai without licence.",
    sourceOfWealth: {
      declared: "Trading fees and spreads from global user base.",
      findings: "On-chain analysis shows $7.2M inflows linked to mixers/tumblers (2025–2026). AML policy is 2022 template — no travel rule or chain analytics. No employees in Estonia; ops moved to Dubai (no VARA licence).",
      assessment: "High risk of laundering via obfuscated crypto flows."
    },
    adverseMedia: [
      { date: "2026-05-22", source: "CoinDesk", summary: "Cryonex among VASPs flagged for weak mixer screening.", flag: true },
    ],
    transactions: [
      { amount: "$5,400,000", date: "2026-04-10", from: "Incoming — tagged high-risk wallet", country: "Global", flag: true },
      { amount: "$8,100,000", date: "2026-03-15", to: "Outgoing — user withdrawals", country: "Multiple", flag: true },
    ],
    documents: [
      { name: "Estonian VASP Registration", status: "provided", flag: true, note: "Old regime — not re-assessed post-2023 crackdown." },
      { name: "AML/CTF Program", status: "provided", flag: true, note: "2022 template — no travel rule or chain screening." },
      { name: "Audited Financials", status: "missing", flag: true, note: "Not provided — 'audit in progress'." },
    ],
    screening: [
      { type: "Adverse Media", result: "Mixer screening deficiencies", flag: true },
    ],
    flags: [
      "Confirmed on-chain mixer/tumbler exposure.",
      "AML program outdated — lacks FATF travel rule and chain analytics.",
      "Operations shifted to Dubai without regulatory licence.",
      "No audited financials despite high claimed volumes.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Correct", points: 150,
        explain: "Exit is appropriate. Weak AML controls + confirmed mixer exposure + regulatory gap = unacceptable ML/TF risk for fiat-crypto on-ramp." },
      maintain: { grade: "bad", title: "High Risk", points: -60,
        explain: "Continuing would import significant laundering risk into the bank." },
    }
  },
];
