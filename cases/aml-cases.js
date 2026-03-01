// ═══════════════════════════════════════════════════════════════
// AML ANALYST CASES — Suspicious Activity Investigation
// All names are fictional and designed to be clearly non-real.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════

const AML_CASES = [
  // ── CASE 1: Classic Structuring / Smurfing ──
  {
    id: "AML-2026-0447",
    name: "Darvek Lunaro",
    teaser: "Multiple $9,900 cash deposits across 7 branches in 14 days",
    amount: "$138,600",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "sar",
    profile: {
      occupation: "Self-employed — Mobile Device Reseller",
      country: "United States",
      pep: "No",
      riskScore: 92,
      accountAge: "8 months",
      income: "$42,000 (declared)",
    },
    transactions: [
      { amount:"$9,900", date:"2026-02-14", to:"Cash Deposit", country:"US", flag:true },
      { amount:"$9,800", date:"2026-02-14", to:"Cash Deposit (Branch 3)", country:"US", flag:true },
      { amount:"$9,900", date:"2026-02-12", to:"Cash Deposit (Branch 7)", country:"US", flag:true },
      { amount:"$9,750", date:"2026-02-10", to:"Cash Deposit (Branch 1)", country:"US", flag:true },
      { amount:"$9,900", date:"2026-02-08", to:"Cash Deposit (Branch 5)", country:"US", flag:true },
      { amount:"$14,200", date:"2026-02-06", to:"Wire → Corvado Trading LLC", country:"US", flag:false },
      { amount:"$9,850", date:"2026-02-04", to:"Cash Deposit (Branch 2)", country:"US", flag:true },
      { amount:"$9,900", date:"2026-02-02", to:"Cash Deposit (Branch 6)", country:"US", flag:true },
      { amount:"$8,500", date:"2026-01-30", to:"Wire → Palmspur Imports Ltd", country:"Panama", flag:true },
      { amount:"$9,900", date:"2026-01-28", to:"Cash Deposit (Branch 4)", country:"US", flag:true },
    ],
    network: {
      nodes: [
        { id:0, label:"D. Lunaro", type:"customer", x:200, y:59, info:"Primary subject. 8-month account, declared income $42K, but $138K in cash deposits in 14 days." },
        { id:1, label:"Branch 1–3", type:"bank", x:65, y:150, info:"3 branches visited on the same day. All deposits just below the $10K CTR threshold." },
        { id:2, label:"Branch 4–7", type:"bank", x:335, y:150, info:"4 more branches within 14 days. Pattern consistent with smurfing across locations." },
        { id:3, label:"Corvado Trading", type:"company", x:88, y:268, info:"LLC registered in New Mexico 4 months ago. No web presence. Single-member entity." },
        { id:4, label:"Palmspur Imports", type:"company", x:312, y:268, info:"Panama-registered import company. No verifiable business records found." },
        { id:5, label:"Panama 🇵🇦", type:"jurisdiction", x:200, y:320, info:"FATF increased-monitoring list. Known deficiencies in AML transparency." },
      ],
      edges: [[0,1],[0,2],[0,3],[0,4],[3,4],[4,5]],
      hotEdges: [[0,1],[0,2],[4,5]]
    },
    flags: [
      "14 cash deposits in 14 days — all between $9,750 and $9,900. Classic structuring below the $10,000 CTR threshold.",
      "Same-day deposits at 2 different branches (smurfing pattern).",
      "Total deposits ($138K) are 3.3× declared annual income ($42K).",
      "Wire to Panama-based Palmspur Imports — no verifiable business. High-risk jurisdiction.",
      "Corvado Trading LLC registered 4 months ago — shell company indicators (no employees, no web presence).",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"Filing a SAR is exactly right. This is textbook <strong>structuring / smurfing</strong>. The customer made 14 cash deposits between $9,750–$9,900 — deliberately below the $10,000 CTR threshold. Under <strong>31 U.S.C. § 5324</strong>, structuring is a federal crime even if the funds are legitimate. The multi-branch pattern, income mismatch, and shell company wires are classic FinCEN red flags.",
        coach:"🎓 <strong>AI Coach:</strong> Structuring is illegal regardless of whether the underlying funds are legitimate. The $10,000 CTR threshold hasn't changed since 1970 — criminals know it well.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"Clearing this would be a serious compliance failure. The deposits show <strong>textbook structuring</strong> — 14 deposits just below $10K across 7 branches in 14 days. Total ($138K) is 3× declared income. Combined with shell company wires and a Panama connection, this required immediate SAR filing.",
        coach:"🎓 <strong>AI Coach:</strong> When deposits cluster just below $10,000, that's structuring until proven otherwise. Always compare total volume against declared income.",
      },
      escalate: {
        grade:"partial", title:"Good Instinct, But Act Now", points:60,
        explain:"Escalating shows caution, but this case has enough evidence for an immediate SAR. The <strong>structuring pattern</strong> is unambiguous — 14 sub-threshold deposits, multiple branches, same-day activity, and totals far exceeding declared income.",
        coach:"🎓 <strong>AI Coach:</strong> When red flags are this clear, file the SAR directly. Escalation is for genuinely ambiguous cases.",
      },
      info: {
        grade:"partial", title:"The Evidence Is Already There", points:40,
        explain:"This case already has overwhelming evidence of <strong>structuring</strong>. The 14 sub-threshold deposits, multi-branch activity, income mismatch, and Panama wires are more than sufficient. Delays risk breaching the 30-day SAR filing window.",
        coach:"🎓 <strong>AI Coach:</strong> Know when you have enough to act. FinCEN expects SARs filed within 30 days of detection.",
      }
    }
  },

  // ── CASE 2: PEP with Unexplained High-Value Wires ──
  {
    id: "AML-2026-0512",
    name: "Yelara Krestova",
    teaser: "PEP — $2.1M wires to UAE & Cyprus, source unknown",
    amount: "$2,140,000",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "sar",
    profile: {
      occupation: "Advisor — Ministry of Energy (Retired)",
      country: "Russian Federation",
      pep: "Yes — Senior Foreign PEP",
      riskScore: 97,
      accountAge: "14 months",
      income: "$85,000 (pension)",
    },
    transactions: [
      { amount:"$485,000", date:"2026-02-18", to:"Wire → Vyranthos Holdings Ltd", country:"UAE", flag:true },
      { amount:"$320,000", date:"2026-02-12", to:"Wire → Thessalora Property Dev.", country:"Cyprus", flag:true },
      { amount:"$510,000", date:"2026-02-05", to:"Wire → Vyranthos Holdings Ltd", country:"UAE", flag:true },
      { amount:"$85,000", date:"2026-01-28", to:"Incoming — RF Pension Fund", country:"Russia", flag:false },
      { amount:"$275,000", date:"2026-01-22", to:"Wire → Soleira Estates SL", country:"Spain", flag:true },
      { amount:"$550,000", date:"2026-01-15", to:"Wire → Vyranthos Holdings Ltd", country:"UAE", flag:true },
      { amount:"$250,000", date:"2026-01-05", to:"Incoming — Volstran Resources CJSC", country:"Russia", flag:true },
      { amount:"$85,000", date:"2025-12-28", to:"Incoming — RF Pension Fund", country:"Russia", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"Y. Krestova", type:"customer", x:200, y:50, info:"Senior Foreign PEP. Former advisor, Ministry of Energy. Pension $85K but moving $2.1M." },
        { id:1, label:"Vyranthos Hldgs", type:"company", x:59, y:163, info:"UAE registered. Nominee director. No public filings. Received $1.54M from subject." },
        { id:2, label:"Thessalora Prop.", type:"company", x:341, y:163, info:"Cyprus property developer. $320K wire received. Cyprus flagged for AML weaknesses." },
        { id:3, label:"Soleira Estates", type:"company", x:59, y:281, info:"Spanish luxury real estate. €245K Mediterranean property purchase in progress." },
        { id:4, label:"Volstran Resources", type:"company", x:341, y:281, info:"Russian resource company. $250K incoming wire — source of wealth unclear." },
        { id:5, label:"UAE 🇦🇪", type:"jurisdiction", x:141, y:324, info:"Over $1.5M in outgoing wires. Opaque corporate ownership structures." },
        { id:6, label:"Cyprus 🇨🇾", type:"jurisdiction", x:271, y:324, info:"EU member, previously grey-listed. Popular for Russian capital flows." },
      ],
      edges: [[0,1],[0,2],[0,3],[0,4],[1,5],[2,6],[3,2]],
      hotEdges: [[0,1],[0,4],[1,5]]
    },
    flags: [
      "Senior Foreign PEP — former advisor to Ministry of Energy. Automatic Enhanced Due Diligence required.",
      "$2.1M outgoing wires vs. declared pension of $85K — massive unexplained source-of-funds gap.",
      "$1.54M to Vyranthos Holdings Ltd (UAE) — shell company with nominee director and no public filings.",
      "Property purchases in Cyprus and Spain — potential integration stage of money laundering.",
      "$250K incoming from Volstran Resources CJSC — possible state-linked entity, source of wealth unknown.",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"Clear SAR case. Yelara is a <strong>Senior Foreign PEP</strong> — FATF Recommendation 12 requires Enhanced Due Diligence. $2.1M dwarfs her $85K pension. Funds flow to a <strong>UAE shell company</strong> and into <strong>luxury real estate</strong> — textbook <strong>Placement → Layering → Integration</strong>.",
        coach:"🎓 <strong>AI Coach:</strong> PEPs are high-risk due to access to public funds. When a PEP moves millions through shell companies into luxury property, that's the classic three-stage laundering cycle.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"Clearing a <strong>Senior Foreign PEP</strong> moving $2.1M through shell companies into luxury real estate — on an $85K pension — would be a very serious compliance failure. Multiple indicators of <strong>corruption proceeds being laundered</strong>.",
        coach:"🎓 <strong>AI Coach:</strong> Never clear a PEP alert without verifying source of wealth and source of funds. The income-to-transaction gap is the key indicator.",
      },
      escalate: {
        grade:"partial", title:"Right Direction, But File the SAR", points:80,
        explain:"PEP cases can be sensitive, so escalation isn't wrong. But the evidence is overwhelming. A <strong>SAR should be filed regardless</strong>. Escalation and SAR filing should happen in parallel.",
        coach:"🎓 <strong>AI Coach:</strong> In PEP cases, don't let internal processes delay regulatory obligations. File and escalate simultaneously.",
      },
      info: {
        grade:"partial", title:"The Picture Is Already Clear", points:50,
        explain:"Current evidence already supports a SAR. Waiting risks breaching FinCEN's 30-day window. The <strong>source-of-funds gap</strong>, shell companies, and luxury property purchases provide ample basis.",
        coach:"🎓 <strong>AI Coach:</strong> You can file a SAR and keep investigating. SARs are intelligence reports, not accusations.",
      }
    }
  }
];
