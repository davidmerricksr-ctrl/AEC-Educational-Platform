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
      edges: [[0,1,"$69K"],[0,2,"$69K"],[0,3,"$14.2K"],[0,4,"$8.5K"],[3,4,""],[4,5,""]],
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
      edges: [[0,1,"$1.54M"],[0,2,"$320K"],[0,3,"$275K"],[4,0,"$250K"],[1,5,""],[2,6,""],[3,2,""]],
      hotEdges: [[0,1],[4,0],[1,5]]
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
,
  // ── CASE 3: Trade-Based Money Laundering (TBML) ──
  {
    id: "AML-2026-0583",
    name: "Fenrik Odalys",
    teaser: "Import invoices inflated 400% above market — $3.7M moved offshore",
    amount: "$3,720,000",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "sar",
    profile: {
      occupation: "Director — Zephyren Trading Co.",
      country: "United Kingdom",
      pep: "No",
      riskScore: 89,
      accountAge: "22 months",
      income: "$180,000 (business account)",
    },
    transactions: [
      { amount:"$840,000", date:"2026-02-20", to:"Wire → Ghazrik Commodities FZE", country:"UAE", flag:true },
      { amount:"$675,000", date:"2026-02-13", to:"Wire → Ghazrik Commodities FZE", country:"UAE", flag:true },
      { amount:"$910,000", date:"2026-02-06", to:"Wire → Tavrosian Metals SARL", country:"Lebanon", flag:true },
      { amount:"$520,000", date:"2026-01-28", to:"Wire → Ghazrik Commodities FZE", country:"UAE", flag:true },
      { amount:"$775,000", date:"2026-01-19", to:"Wire → Tavrosian Metals SARL", country:"Lebanon", flag:true },
      { amount:"$190,000", date:"2026-01-12", to:"Incoming — Zephyren Trading Revenue", country:"UK", flag:false },
      { amount:"$62,000", date:"2026-01-05", to:"Incoming — Zephyren Trading Revenue", country:"UK", flag:false },
      { amount:"$44,000", date:"2025-12-22", to:"Incoming — Zephyren Trading Revenue", country:"UK", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"F. Odalys", type:"customer", x:200, y:50, info:"Director of Zephyren Trading. Business revenue £296K but outgoing wires total $3.7M. Severe mismatch." },
        { id:1, label:"Zephyren Trading", type:"company", x:72, y:150, info:"UK-registered import/export. Trades in 'industrial metals'. Revenue doesn't support wire volume." },
        { id:2, label:"Ghazrik Commodities", type:"company", x:328, y:150, info:"UAE Free Zone entity. $2.03M received. Invoices show copper at $18,400/ton — market rate is $4,200/ton." },
        { id:3, label:"Tavrosian Metals", type:"company", x:200, y:255, info:"Lebanese SARL. $1.69M received for 'nickel shipments'. No shipping records on file." },
        { id:4, label:"UAE 🇦🇪", type:"jurisdiction", x:88, y:320, info:"Free Zone companies enjoy minimal oversight. Popular vehicle for TBML." },
        { id:5, label:"Lebanon 🇱🇧", type:"jurisdiction", x:312, y:320, info:"FATF grey-listed. Banking system under severe strain. High ML/TF risk." },
      ],
      edges: [[0,1,""],[1,2,"$2.03M"],[1,3,"$1.69M"],[0,2,""],[0,3,""],[2,4,""],[3,5,""]],
      hotEdges: [[1,2],[1,3],[3,5]]
    },
    flags: [
      "Copper invoiced at $18,400/ton — market rate is ~$4,200/ton. Invoice inflation of ~340%, classic TBML indicator.",
      "$3.7M in outgoing wires against $296K documented business revenue — 12.5× mismatch.",
      "Tavrosian Metals SARL (Lebanon) — $1.69M for 'nickel shipments' with no shipping documentation or bills of lading.",
      "Both counterparties are in high-risk jurisdictions (UAE Free Zone, Lebanon grey-list).",
      "Goods described as 'industrial metals' but Zephyren has no warehouse, logistics contracts, or customs broker on file.",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"This is textbook <strong>Trade-Based Money Laundering (TBML)</strong>. Invoice manipulation — pricing goods at 4× market rate — is one of FATF's primary TBML red flags. The value gap between real and invoiced prices is how illicit funds move across borders disguised as trade. Combined with high-risk jurisdictions and zero shipping documentation, this is a clear SAR.",
        coach:"🎓 <strong>AI Coach:</strong> TBML accounts for an estimated 80% of illicit financial flows from developing countries. Always compare invoiced prices against market benchmarks — the FATF TBML red flag indicators guide is essential reading.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"$3.7M flowing through a business with $296K revenue, invoices at 340% over market price, and no shipping records — this is classic <strong>TBML</strong>. Clearing this case would represent a major compliance failure.",
        coach:"🎓 <strong>AI Coach:</strong> When wire volume massively exceeds business revenue, investigate the underlying trade documents. Phantom shipments and inflated invoices are hallmarks of TBML.",
      },
      escalate: {
        grade:"partial", title:"Good Instinct, But File the SAR", points:70,
        explain:"Escalation is reasonable given the cross-border complexity, but the evidence for <strong>TBML</strong> is already compelling. Inflated invoices, no shipping records, and high-risk jurisdictions provide ample basis for immediate SAR filing.",
        coach:"🎓 <strong>AI Coach:</strong> TBML cases often need coordination with trade finance teams — but don't delay the SAR. File and escalate in parallel.",
      },
      info: {
        grade:"partial", title:"Evidence Already Supports a SAR", points:50,
        explain:"While trade documents could be investigated further, the <strong>340% invoice inflation</strong>, missing shipping records, and high-risk counterparties already meet the threshold. File the SAR within the 30-day window.",
        coach:"🎓 <strong>AI Coach:</strong> You can request trade documents while filing the SAR. SARs aren't accusations — they're intelligence reports.",
      }
    }
  },

  // ── CASE 4: Funnel Account / Money Mule Network ──
  {
    id: "AML-2026-0614",
    name: "Teshira Bolwen",
    teaser: "50+ peer-to-peer deposits from unknown senders, rapid outflows",
    amount: "$87,400",
    riskLevel: "high",
    riskLabel: "High",
    correct: "sar",
    profile: {
      occupation: "University Student — Part-time Barista",
      country: "United States",
      pep: "No",
      riskScore: 78,
      accountAge: "5 months",
      income: "$14,500 (declared)",
    },
    transactions: [
      { amount:"$2,400", date:"2026-02-22", to:"Incoming — P2P from Unknown #37", country:"US", flag:true },
      { amount:"$1,800", date:"2026-02-22", to:"Incoming — P2P from Unknown #38", country:"US", flag:true },
      { amount:"$4,200", date:"2026-02-21", to:"Wire Out → Belvossa Remit Corp", country:"Mexico", flag:true },
      { amount:"$1,950", date:"2026-02-21", to:"Incoming — P2P from Unknown #35", country:"US", flag:true },
      { amount:"$2,100", date:"2026-02-20", to:"Incoming — P2P from Unknown #33", country:"US", flag:true },
      { amount:"$3,800", date:"2026-02-19", to:"Wire Out → Belvossa Remit Corp", country:"Mexico", flag:true },
      { amount:"$1,600", date:"2026-02-19", to:"Incoming — P2P from Unknown #31", country:"US", flag:true },
      { amount:"$5,100", date:"2026-02-18", to:"Wire Out → Ondravex Holdings SA", country:"Colombia", flag:true },
      { amount:"$2,250", date:"2026-02-17", to:"Incoming — P2P from Unknown #28", country:"US", flag:true },
      { amount:"$1,400", date:"2026-02-16", to:"Incoming — P2P from Unknown #25", country:"US", flag:true },
    ],
    network: {
      nodes: [
        { id:0, label:"T. Bolwen", type:"customer", x:200, y:50, info:"21-year-old student, part-time barista. Account is 5 months old. 50+ P2P deposits from unrelated senders." },
        { id:1, label:"50+ P2P Senders", type:"customer", x:72, y:155, info:"Over 50 unique senders via Zelle/Venmo. None match known contacts. Likely fraud victims or other mules." },
        { id:2, label:"Belvossa Remit", type:"company", x:328, y:155, info:"Mexican remittance company. $32K wired out in small bursts. Not a licensed MSB in FinCEN records." },
        { id:3, label:"Ondravex Holdings", type:"company", x:200, y:260, info:"Colombian holding company. $18K wire. No verifiable business purpose. Nominee directors." },
        { id:4, label:"Mexico 🇲🇽", type:"jurisdiction", x:88, y:320, info:"High-risk corridor for money mule networks and narcotics-linked flows." },
        { id:5, label:"Colombia 🇨🇴", type:"jurisdiction", x:312, y:320, info:"FATF monitored. Narcotics trafficking and trade-based ML risks." },
      ],
      edges: [[1,0,"$87K"],[0,2,"$32K"],[0,3,"$18K"],[2,4,""],[3,5,""]],
      hotEdges: [[1,0],[0,2],[0,3]]
    },
    flags: [
      "50+ P2P deposits from unrelated senders in 3 months — classic money mule / funnel account pattern.",
      "Rapid pass-through: funds arrive via P2P and are wired internationally within 24–48 hours.",
      "$87K total volume against $14.5K declared income — 6× annual earnings in 3 months.",
      "Wires to Mexico (Belvossa Remit) and Colombia (Ondravex Holdings) — high-risk narcotics corridors.",
      "Account holder is 21-year-old student — profile consistent with recruited money mule (social media recruitment).",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"This is a textbook <strong>money mule / funnel account</strong>. The pattern — dozens of P2P deposits from strangers, rapid wire-outs to high-risk jurisdictions — is a major FinCEN priority. The account holder is likely recruited (often through social media job scams) to pass illicit funds through a domestic account to obscure the money trail.",
        coach:"🎓 <strong>AI Coach:</strong> Money mule recruitment via social media is an epidemic. FinCEN Advisory FIN-2020-A002 specifically addresses funnel account typologies. Young people are disproportionately targeted.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"50+ unrelated P2P deposits with rapid international wire-outs is the <strong>definitive funnel account pattern</strong>. This student's account is being used — likely unknowingly — to launder illicit proceeds. Clearing this enables ongoing criminal activity and puts the account holder at legal risk.",
        coach:"🎓 <strong>AI Coach:</strong> Funnel accounts are a top FinCEN priority. Multiple incoming / rapid outgoing is the key pattern.",
      },
      escalate: {
        grade:"partial", title:"SAR Needed — Not Just Escalation", points:70,
        explain:"While the account holder may be a victim (recruited mule), the <strong>SAR must still be filed</strong>. The account is an active laundering vehicle. Escalation alongside SAR filing is appropriate, particularly to coordinate with fraud and law enforcement.",
        coach:"🎓 <strong>AI Coach:</strong> Money mules can be both victims and perpetrators. File the SAR to protect the institution and trigger law enforcement review.",
      },
      info: {
        grade:"partial", title:"The Pattern Is Clear", points:40,
        explain:"50+ P2P deposits from strangers and rapid international wires provide overwhelming evidence. Requesting more info delays regulatory obligations — file the SAR within 30 days.",
        coach:"🎓 <strong>AI Coach:</strong> With funnel accounts, volume and velocity tell the story. Don't wait for the mule to explain.",
      }
    }
  },

  // ── CASE 5: Crypto-to-Fiat Layering ──
  {
    id: "AML-2026-0651",
    name: "Quillon Sevrade",
    teaser: "Large crypto exchange deposits, immediate wire-outs to 4 jurisdictions",
    amount: "$1,280,000",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "sar",
    profile: {
      occupation: "Self-employed — Digital Marketing Consultant",
      country: "Estonia",
      pep: "No",
      riskScore: 91,
      accountAge: "11 months",
      income: "$65,000 (declared)",
    },
    transactions: [
      { amount:"$310,000", date:"2026-02-19", to:"Incoming — Nexovault Exchange", country:"Seychelles", flag:true },
      { amount:"$185,000", date:"2026-02-18", to:"Wire Out → Dravencore AG", country:"Switzerland", flag:true },
      { amount:"$125,000", date:"2026-02-17", to:"Wire Out → Kosmara Ventures Ltd", country:"BVI", flag:true },
      { amount:"$290,000", date:"2026-02-14", to:"Incoming — Nexovault Exchange", country:"Seychelles", flag:true },
      { amount:"$275,000", date:"2026-02-12", to:"Wire Out → Pellaren Capital LLC", country:"US (Delaware)", flag:false },
      { amount:"$240,000", date:"2026-02-08", to:"Incoming — Nexovault Exchange", country:"Seychelles", flag:true },
      { amount:"$180,000", date:"2026-02-05", to:"Wire Out → Vossenthal Immobilien", country:"Germany", flag:true },
      { amount:"$440,000", date:"2026-01-30", to:"Incoming — Nexovault Exchange", country:"Seychelles", flag:true },
      { amount:"$95,000", date:"2026-01-22", to:"Wire Out → Kosmara Ventures Ltd", country:"BVI", flag:true },
    ],
    network: {
      nodes: [
        { id:0, label:"Q. Sevrade", type:"customer", x:200, y:50, info:"Estonian 'digital marketing consultant'. $1.28M flow in 4 weeks vs. $65K declared income. Account is 11 months old." },
        { id:1, label:"Nexovault Exchange", type:"company", x:72, y:150, info:"Seychelles-registered crypto exchange. No VASP licence verified. $1.28M deposited from crypto-to-fiat conversions." },
        { id:2, label:"Dravencore AG", type:"company", x:328, y:150, info:"Swiss holding. $185K wire. Registered 6 months ago. Single director matches no known business." },
        { id:3, label:"Kosmara Ventures", type:"company", x:72, y:260, info:"BVI company. $220K in two wires. Nominee directors. No financial statements available." },
        { id:4, label:"Pellaren Capital", type:"company", x:328, y:260, info:"Delaware LLC. $275K wire. Registered agent only. No employees or website." },
        { id:5, label:"Vossenthal Immob.", type:"company", x:200, y:320, info:"German property firm. $180K — appears to be real estate purchase. Potential integration stage." },
      ],
      edges: [[1,0,"$1.28M"],[0,2,"$185K"],[0,3,"$220K"],[0,4,"$275K"],[0,5,"$180K"],[3,4,""]],
      hotEdges: [[1,0],[0,3],[0,5]]
    },
    flags: [
      "$1.28M incoming from Nexovault Exchange (Seychelles) — unlicensed crypto exchange. No Travel Rule compliance.",
      "Immediate fan-out: funds distributed to 4 entities across Switzerland, BVI, US, and Germany within days.",
      "All recipient companies show shell indicators — nominee directors, no employees, recent incorporation.",
      "Declared income $65K — funds processed are 20× annual earnings.",
      "Wire to Vossenthal Immobilien (Germany) suggests real estate integration — final stage of laundering cycle.",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"Classic <strong>crypto-to-fiat layering</strong>. Illicit crypto is converted through an unlicensed exchange, deposited into a bank account, and rapidly fanned out to shell companies across 4 jurisdictions. The final wire to a German property firm suggests <strong>integration</strong>. This is the complete laundering cycle: Placement (crypto→fiat) → Layering (shell company fan-out) → Integration (real estate).",
        coach:"🎓 <strong>AI Coach:</strong> FATF's Updated Guidance on Virtual Assets (2021) requires VASPs to comply with the Travel Rule. Unlicensed exchanges are a huge red flag. When you see crypto deposits immediately fanned out to shells — that's layering.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"$1.28M from an unlicensed crypto exchange fanning out to shell companies in BVI, Switzerland, and Delaware — ending in German property. This is a <strong>complete laundering cycle</strong>. Clearing this would be a severe compliance failure.",
        coach:"🎓 <strong>AI Coach:</strong> Crypto-fiat conversion followed by rapid international wire-outs is a primary ML typology. Always check exchange licensing.",
      },
      escalate: {
        grade:"partial", title:"SAR Should Come First", points:70,
        explain:"The evidence is overwhelming: unlicensed exchange, shell companies, 20× income. File the SAR immediately. Escalation can happen in parallel for the crypto-specific investigation.",
        coach:"🎓 <strong>AI Coach:</strong> Don't let cross-border complexity delay filing. SARs can be supplemented with additional information later.",
      },
      info: {
        grade:"partial", title:"The Evidence Is Clear", points:45,
        explain:"Nexovault is unlicensed, the shell companies are apparent, and the income gap is 20×. The SAR threshold has been met. File within 30 days.",
        coach:"🎓 <strong>AI Coach:</strong> Blockchain analysis can strengthen the case later, but don't delay the filing to get it.",
      }
    }
  },

  // ── CASE 6: Loan-Back / Self-Laundering Scheme ──
  {
    id: "AML-2026-0687",
    name: "Meridia Halstren",
    teaser: "Customer loans to own offshore company — circular fund flow detected",
    amount: "$920,000",
    riskLevel: "high",
    riskLabel: "High",
    correct: "sar",
    profile: {
      occupation: "Owner — Halstren Luxury Motors Ltd",
      country: "United Kingdom",
      pep: "No",
      riskScore: 82,
      accountAge: "3 years",
      income: "$240,000 (business + personal)",
    },
    transactions: [
      { amount:"$350,000", date:"2026-02-15", to:"Wire Out → Calveris Finance SA", country:"Panama", flag:true },
      { amount:"$280,000", date:"2026-02-10", to:"Incoming — 'Loan' from Calveris Finance SA", country:"Panama", flag:true },
      { amount:"$290,000", date:"2026-01-28", to:"Wire Out → Calveris Finance SA", country:"Panama", flag:true },
      { amount:"$240,000", date:"2026-01-20", to:"Incoming — 'Loan' from Calveris Finance SA", country:"Panama", flag:true },
      { amount:"$280,000", date:"2026-01-08", to:"Wire Out → Calveris Finance SA", country:"Panama", flag:true },
      { amount:"$195,000", date:"2025-12-28", to:"Cash Deposit — Personal Account", country:"UK", flag:true },
      { amount:"$165,000", date:"2025-12-15", to:"Cash Deposit — Personal Account", country:"UK", flag:true },
      { amount:"$78,000", date:"2025-12-01", to:"Incoming — Vehicle Sales Revenue", country:"UK", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"M. Halstren", type:"customer", x:200, y:50, info:"UK luxury car dealer. Large cash deposits followed by wire→loan cycle with own offshore entity." },
        { id:1, label:"Halstren Motors", type:"company", x:72, y:155, info:"UK car dealership. Legitimate business, but declared revenue doesn't match cash deposit volumes." },
        { id:2, label:"Calveris Finance SA", type:"company", x:328, y:155, info:"Panamanian company. Sole director: M. Halstren. 'Loans' back to Halstren exactly match prior wire-outs." },
        { id:3, label:"Personal Account", type:"bank", x:200, y:260, info:"Large cash deposits: $360K in December alone. Source claimed as 'private vehicle sales' — no invoices." },
        { id:4, label:"Panama 🇵🇦", type:"jurisdiction", x:328, y:310, info:"FATF grey-listed. Bearer shares recently abolished but corporate opacity persists." },
      ],
      edges: [[0,1,""],[0,2,"$920K"],[2,0,"$520K"],[3,0,"$360K"],[2,4,""],[0,3,""]],
      hotEdges: [[0,2],[2,0],[3,0]]
    },
    flags: [
      "Circular flow: wires out to Calveris Finance SA (Panama), then 'loans' return to Halstren — loan-back scheme.",
      "Calveris Finance SA is owned by the customer herself — self-dealing to create a paper trail for illicit cash.",
      "$360K in cash deposits in December — claimed as 'private vehicle sales' but no invoices or buyer records provided.",
      "Loan amounts approximately match wire-out amounts — no genuine lending purpose. Manufactured paper trail.",
      "High-value car dealerships are a known laundering vehicle — FATF has flagged the sector repeatedly.",
    ],
    feedback: {
      sar: {
        grade:"excellent", title:"Excellent Decision!", points:150,
        explain:"This is a <strong>loan-back scheme</strong> (also called self-laundering). Halstren sends cash through her offshore company, then 'borrows' it back — creating a legitimate-looking paper trail. The cash deposits (likely proceeds of crime) are laundered through the circular flow, and the returning 'loan' provides a clean paper trail. FATF specifically flags car dealerships and loan-back structures.",
        coach:"🎓 <strong>AI Coach:</strong> Loan-back schemes are elegant but detectable. The key tell: the 'borrower' is also the beneficial owner of the 'lender'. Always check UBO of counterparties in loan arrangements.",
      },
      clear: {
        grade:"bad", title:"Missed Critical Red Flags", points:-40,
        explain:"Circular money flows between a customer and her own offshore company, funded by large unexplained cash deposits — this is a <strong>loan-back laundering scheme</strong>. Clearing this would miss one of the most common self-laundering typologies.",
        coach:"🎓 <strong>AI Coach:</strong> When loans flow from an entity the customer controls, it's not a real loan. It's laundering with paperwork.",
      },
      escalate: {
        grade:"partial", title:"Good, But File the SAR", points:75,
        explain:"The circular flow is unmistakable: wire out → 'loan' back from own company. Escalation for investigation of the cash source is appropriate, but the <strong>SAR should be filed immediately</strong> — the pattern is clear.",
        coach:"🎓 <strong>AI Coach:</strong> Escalate the cash source investigation but file the SAR in parallel. Don't wait for the full picture.",
      },
      info: {
        grade:"partial", title:"The Circular Flow Is Evident", points:45,
        explain:"The wire-out and loan-back pattern is already documented. Requesting invoices for the cash deposits is reasonable but shouldn't delay the SAR filing.",
        coach:"🎓 <strong>AI Coach:</strong> You have enough to file. Request documentation in parallel — it may never arrive, and that's evidence too.",
      }
    }
  },

  // ── CASE 7: Legitimate Business — False Positive ──
  {
    id: "AML-2026-0723",
    name: "Wendara Porvisk",
    teaser: "Seasonal spike in wire activity — restaurant supply chain",
    amount: "$156,000",
    riskLevel: "med",
    riskLabel: "Medium",
    correct: "clear",
    profile: {
      occupation: "Owner — Porvisk Catering Supplies Ltd",
      country: "United States",
      pep: "No",
      riskScore: 41,
      accountAge: "6 years",
      income: "$420,000 (business revenue)",
    },
    transactions: [
      { amount:"$38,000", date:"2026-02-20", to:"Wire → Vastrellan Foods LLC", country:"US", flag:false },
      { amount:"$24,500", date:"2026-02-15", to:"Wire → Dulvare Kitchen Equipment", country:"US", flag:false },
      { amount:"$18,200", date:"2026-02-10", to:"Wire → Vastrellan Foods LLC", country:"US", flag:false },
      { amount:"$31,000", date:"2026-02-05", to:"Wire → Prentova Packaging Co.", country:"US", flag:false },
      { amount:"$22,800", date:"2026-01-30", to:"Wire → Vastrellan Foods LLC", country:"US", flag:false },
      { amount:"$12,500", date:"2026-01-25", to:"Wire → Dulvare Kitchen Equipment", country:"US", flag:false },
      { amount:"$9,000", date:"2026-01-20", to:"Wire → Prentova Packaging Co.", country:"US", flag:false },
      { amount:"$42,000", date:"2026-01-10", to:"Incoming — Customer Payments (B2B)", country:"US", flag:false },
      { amount:"$58,000", date:"2026-01-02", to:"Incoming — Customer Payments (B2B)", country:"US", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"W. Porvisk", type:"customer", x:200, y:50, info:"6-year customer. Owns catering supply business. Seasonal revenue spikes in Jan-Mar (restaurant restocking season)." },
        { id:1, label:"Porvisk Catering", type:"company", x:72, y:155, info:"US-registered LLC, 6 years old. Health department-approved supplier. Annual revenue ~$420K. Q1 is peak season." },
        { id:2, label:"Vastrellan Foods", type:"company", x:328, y:155, info:"US wholesale food distributor. 4-year supplier relationship. Invoices match payments. BBB-accredited." },
        { id:3, label:"Dulvare Kitchen", type:"company", x:72, y:260, info:"US kitchen equipment supplier. 3-year relationship. All invoices verified. Licensed contractor." },
        { id:4, label:"Prentova Packaging", type:"company", x:328, y:260, info:"US packaging company. 2-year supplier. Invoices on file and verified. Standard trade terms." },
      ],
      edges: [[0,1,""],[1,2,"$79K"],[1,3,"$37K"],[1,4,"$40K"]],
      hotEdges: []
    },
    flags: [],
    feedback: {
      clear: {
        grade:"excellent", title:"Excellent Decision!", points:120,
        explain:"Well done — this is a <strong>legitimate seasonal business spike</strong>. Porvisk Catering is a 6-year customer with verified suppliers, matching invoices, and a predictable Q1 peak (restaurant restocking). All counterparties are domestic, verified, and long-standing. The alert triggered on transaction volume alone — but context shows normal commercial activity. <strong>Good analysts clear legitimate alerts quickly</strong> to focus resources on real risk.",
        coach:"🎓 <strong>AI Coach:</strong> Not every alert is suspicious. Understanding seasonal patterns and industry norms is critical. False positive management is a core compliance skill — clearing good customers efficiently protects the business relationship.",
      },
      sar: {
        grade:"bad", title:"Unnecessary SAR — False Positive", points:-30,
        explain:"Filing a SAR on a 6-year customer with verified suppliers, matching invoices, and a well-documented seasonal pattern would be a <strong>defensive over-filing</strong>. FinCEN has warned that low-quality SARs waste law enforcement resources and can harm customer relationships.",
        coach:"🎓 <strong>AI Coach:</strong> Defensive SAR filing is a problem. FinCEN receives 4M+ SARs annually — only useful ones help. When the business context is clear, clear the alert.",
      },
      escalate: {
        grade:"partial", title:"Unnecessary — Context Is Clear", points:30,
        explain:"All counterparties are domestic, verified, and long-standing. Invoices match payments. The seasonal pattern is well-documented. Escalation wastes senior resources on a <strong>clear false positive</strong>.",
        coach:"🎓 <strong>AI Coach:</strong> Trust your analysis. When you've verified the business context and everything checks out, clear it confidently.",
      },
      info: {
        grade:"partial", title:"You Already Have What You Need", points:40,
        explain:"The customer has a 6-year history, all suppliers are verified with matching invoices, and Q1 seasonal spikes are documented. No further information is needed — <strong>clear the alert</strong>.",
        coach:"🎓 <strong>AI Coach:</strong> Over-investigating low-risk alerts is as costly as under-investigating high-risk ones. Efficient triage is key.",
      }
    }
  },
];
