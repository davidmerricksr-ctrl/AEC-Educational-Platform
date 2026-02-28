// ═══════════════════════════════════════════════════════════════
// EDD — INDIVIDUAL ENHANCED DUE DILIGENCE REVIEWS
// Periodic deep-dive reviews of high-risk individual customers.
// All names are fictional and designed to be clearly non-real.
// ═══════════════════════════════════════════════════════════════

const EDD_INDIVIDUAL_CASES = [
  // ── CASE 1: PEP with lifestyle inconsistency — should EXIT ──
  {
    id: "EDD-I-2026-0101",
    name: "Kaelix Dromov",
    teaser: "Annual PEP review — luxury spending vs. declared government salary",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      fullName: "Kaelix Yevrin Dromov",
      dateOfBirth: "14 March 1971",
      nationality: "Kazvin Republic (fictional)",
      occupation: "Deputy Minister — Ministry of Natural Resources",
      pepStatus: "Yes — Senior Foreign PEP (Tier 1)",
      customerSince: "January 2022",
      accountType: "Personal Current + Savings + Investment Portfolio",
      declaredIncome: "$92,000/year (government salary)",
      declaredWealth: "$350,000 (inheritance — 2019 declaration)",
      riskRating: "Critical — overdue for annual review",
    },
    reviewTrigger: "Mandatory annual PEP review (12 months overdue). Triggered additionally by adverse media alert and transaction monitoring flag for luxury goods spending exceeding 4× declared income.",
    sourceOfWealth: {
      declared: "Government salary ($92K/yr) and inheritance from father's estate ($350K in 2019). No other declared sources.",
      findings: "Inheritance documentation provided in 2022 was a single-page letter from a Kazvin notary — not independently verifiable. No tax returns provided. Property records show acquisition of a $1.8M London apartment in 2023 — not declared to the bank. Companies House shows directorship of Voltrex Consulting Ltd (UK) incorporated March 2024 — also undeclared.",
      assessment: "Significant unexplained wealth. Declared sources ($92K salary + $350K inheritance) cannot support observed lifestyle and asset acquisitions totalling $3.2M+."
    },
    adverseMedia: [
      { date: "2026-01-15", source: "Global Investigations Network", summary: "Dromov named in leaked procurement documents showing $14M in contracts awarded to companies linked to his family.", flag: true },
      { date: "2025-09-22", source: "Kazvin Independent Press", summary: "Investigation into Ministry of Natural Resources alleging systematic overbilling on mining permits. Dromov identified as signatory on 23 contracts.", flag: true },
      { date: "2025-03-10", source: "Transparency Watch Annual Report", summary: "Kazvin Republic ranked 148/180 on corruption index. Ministry of Natural Resources cited as highest-risk department.", flag: true },
    ],
    transactions: [
      { amount: "$48,000", date: "2026-02-10", to: "Harrods — Luxury Goods", country: "UK", flag: true },
      { amount: "$125,000", date: "2026-01-28", to: "Wire → Voltrex Consulting Ltd", country: "UK", flag: true },
      { amount: "$92,000", date: "2026-01-15", to: "Incoming — Kazvin Ministry Salary (annual)", country: "Kazvin", flag: false },
      { amount: "$67,000", date: "2025-12-20", to: "Private Jet Charter — Meridian Aviation", country: "UAE", flag: true },
      { amount: "$34,500", date: "2025-11-15", to: "School Fees — Elite Academy London", country: "UK", flag: false },
      { amount: "$210,000", date: "2025-10-01", to: "Wire → Solveris Holdings SA", country: "Panama", flag: true },
      { amount: "$15,800", date: "2025-09-12", to: "Luxury Car Lease — Mayfair Motors", country: "UK", flag: true },
    ],
    documents: [
      { name: "Passport (Kazvin Republic)", status: "provided", flag: false, note: "Valid until 2029. Diplomatic passport." },
      { name: "Proof of Address (UK)", status: "provided", flag: true, note: "Utility bill for London apartment — address not declared to bank. Property owned since 2023." },
      { name: "Source of Wealth Declaration", status: "outdated", flag: true, note: "Last updated January 2022. Does not reflect $1.8M property or Voltrex directorship." },
      { name: "Tax Returns / Financial Statements", status: "missing", flag: true, note: "Repeatedly requested since 2024. Customer has not provided." },
      { name: "Inheritance Documentation", status: "provided", flag: true, note: "Single-page notary letter from Kazvin. No estate valuation. Cannot be independently verified." },
    ],
    screening: [
      { type: "PEP Check", result: "MATCH — Senior Foreign PEP (Tier 1)", flag: true },
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "Adverse Media", result: "3 HITS — corruption investigations", flag: true },
      { type: "Relatives & Close Associates", result: "Wife Daniyela Dromov — no adverse findings", flag: false },
      { type: "Dual Nationality Check", result: "Kazvin + UK residency visa (Tier 1 Investor)", flag: true },
    ],
    network: {
      nodes: [
        { id: "dromov", label: "K. Dromov", type: "person", x: 230, y: 50, risk: "critical", info: "Deputy Minister. PEP Tier 1. Undeclared UK property and company directorship. Lifestyle far exceeds declared income.", jurisdiction: "Kazvin Republic" },
        { id: "voltrex", label: "Voltrex Consulting", type: "company", x: 80, y: 160, risk: "high", info: "UK company, sole director K. Dromov. Incorporated March 2024 — not declared to bank. £125K wire received.", jurisdiction: "United Kingdom" },
        { id: "solveris", label: "Solveris Holdings", type: "company", x: 380, y: 160, risk: "critical", info: "Panamanian holding company. $210K wire. Bearer shares until 2023. UBO not verified.", jurisdiction: "Panama" },
        { id: "property", label: "London Flat", type: "company", x: 80, y: 280, risk: "high", info: "$1.8M Kensington apartment acquired 2023. Not declared to bank. Purchased through offshore structure.", jurisdiction: "United Kingdom" },
        { id: "ministry", label: "Ministry of NR", type: "company", x: 380, y: 280, risk: "medium", info: "Kazvin Ministry of Natural Resources. Employer. Subject of multiple corruption investigations.", jurisdiction: "Kazvin Republic" },
        { id: "daniyela", label: "D. Dromov (wife)", type: "person", x: 230, y: 340, risk: "low", info: "Daniyela Dromov, spouse. No adverse media. Listed as co-owner of London property.", jurisdiction: "United Kingdom" },
      ],
      edges: [
        { from: "dromov", to: "voltrex", label: "Director" },
        { from: "dromov", to: "solveris", label: "$210K" },
        { from: "ministry", to: "dromov", label: "Salary" },
        { from: "dromov", to: "property", label: "Owner" },
        { from: "daniyela", to: "property", label: "Co-owner" },
        { from: "solveris", to: "property", label: "Funds?" },
      ],
    },
    flags: [
      "Senior Foreign PEP (Tier 1) — Deputy Minister in country ranked 148/180 for corruption.",
      "Unexplained wealth: $3.2M+ in assets/spending against $92K salary and $350K unverifiable inheritance.",
      "$1.8M London property acquired 2023 — not declared to bank. Purchased through offshore structure.",
      "Undeclared UK company directorship (Voltrex Consulting Ltd) — £125K wire to own company.",
      "$210K wire to Solveris Holdings SA (Panama) — opaque jurisdiction, UBO unverified.",
      "Adverse media: named in leaked procurement corruption documents. Ministry under investigation.",
      "Source of wealth documentation outdated (2022) and unverifiable. Tax returns repeatedly refused.",
      "Luxury spending ($48K Harrods, $67K private jet, $15.8K car lease) inconsistent with declared income.",
    ],
    feedback: {
      exit: {
        grade: "excellent", title: "Excellent Decision!", points: 160,
        explain: "Recommending relationship exit is the right call. This is a <strong>Senior Foreign PEP</strong> with overwhelming evidence of unexplained wealth: $3.2M+ in assets on a $92K salary, undeclared property and companies, adverse media linking him to corruption, and repeated refusal to provide source-of-wealth documentation. The bank cannot satisfy its EDD obligations under <strong>FATF Recommendation 12</strong> and continuing the relationship exposes the institution to serious regulatory and reputational risk.",
        coach: "🎓 <strong>AI Coach:</strong> When a PEP refuses to provide source-of-wealth documentation and adverse media links them to corruption — the risk is unmanageable. Exit decisions protect the institution. Always document your rationale thoroughly.",
      },
      maintain: {
        grade: "bad", title: "Unacceptable Risk Retained", points: -50,
        explain: "Maintaining this relationship would mean accepting <strong>unverifiable source of wealth</strong>, undeclared assets, corruption-linked adverse media, and repeated non-cooperation — for a Senior Foreign PEP. This would represent a serious failure to apply Enhanced Due Diligence and could constitute a regulatory breach.",
        coach: "🎓 <strong>AI Coach:</strong> 'Maintain' means you've satisfied yourself the risk is manageable. Here, you can't even verify basic source of wealth. That's the opposite of managed risk.",
      },
      escalate: {
        grade: "partial", title: "Good, But Your Recommendation Matters", points: 80,
        explain: "Escalation to the MLRO is appropriate given the severity, but as the reviewing analyst you should include a <strong>clear recommendation to exit</strong>. The evidence is overwhelming. Escalation without a recommendation shifts responsibility without adding value.",
        coach: "🎓 <strong>AI Coach:</strong> Senior management makes the final exit decision, but your recommendation carries weight. State it clearly in your escalation.",
      },
      downgrade: {
        grade: "bad", title: "Risk Cannot Be Downgraded", points: -40,
        explain: "Downgrading a Senior Foreign PEP with corruption-linked adverse media, unexplained wealth, and non-cooperation would be <strong>indefensible to a regulator</strong>. Risk can only be downgraded when concerns have been resolved — here, they've intensified.",
        coach: "🎓 <strong>AI Coach:</strong> Downgrade is for cases where the original risk factors have genuinely diminished. This customer's risk has increased since the last review.",
      }
    }
  },
];
