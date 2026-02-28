// ═══════════════════════════════════════════════════════════════
// EDD — ENTITY ENHANCED DUE DILIGENCE REVIEWS
// Periodic deep-dive reviews of high-risk corporate customers.
// All names are fictional and designed to be clearly non-real.
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
];
