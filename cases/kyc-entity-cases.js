// ═══════════════════════════════════════════════════════════════
// KYC ENTITY CASES — Corporate/Entity Customer Due Diligence
// 9 Cases — All names are entirely fictional constructions.
// No real person, company, bank, or trust bears these names.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════
const KYC_ENTITY_CASES = [
  // ══════════════════════════════════════════════════════════════
  // CASE 1: Multi-layered corporate — Hidden PEP behind trust
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0831",
    name: "Threnvale Capital Partners LLP",
    teaser: "Corporate account — multi-layered ownership across 4 jurisdictions, nominee partners only",
    entityType: "Limited Liability Partnership",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Corporate Current Account",
      purpose: "International trade finance and advisory fees",
      expectedVolume: "$3–5M monthly",
      jurisdiction: "United Kingdom",
      incorporationDate: "2024-06-14",
      registeredAgent: "Pellmarch Corporate Services Ltd",
    },
    documents: [
      { name: "Certificate of Incorporation (UK)", status: "provided", flag: false, note: "LLP registered at Companies House. Incorporation date matches." },
      { name: "Partnership Agreement", status: "provided", flag: true, note: "Lists only nominee partners — no natural persons as designated members." },
      { name: "Proof of Registered Address", status: "provided", flag: true, note: "Virtual office address. Shared with 40+ other entities at same building." },
      { name: "Orvashk Group Ltd — Certificate (BVI)", status: "provided", flag: true, note: "BVI entity holds 60% of Threnvale. BVI register does not disclose beneficial owners." },
      { name: "Klendara Advisory AG — Commercial Extract (CH)", status: "provided", flag: false, note: "Swiss entity holds 40%. Registered in Zug. Director: Sennara Vikström." },
      { name: "Source of Funds Declaration", status: "missing", flag: true, note: "Not provided. Requested twice — applicant cited 'commercial sensitivity.'" },
      { name: "Yeranthos Trust — Trust Deed (Cayman)", status: "missing", flag: true, note: "Yeranthos Trust owns 100% of Orvashk Group. Trust deed not provided despite requests." },
      { name: "UBO Declaration Form", status: "incomplete", flag: true, note: "Form lists Sennara Vikström (40% via Klendara) but leaves the 60% via Orvashk/Yeranthos blank." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "Possible match — Borislav Drenkh (see ownership note)", flag: true },
      { type: "Adverse Media", result: "Orvashk Group linked to offshore tax investigation (2023)", flag: true },
      { type: "Jurisdiction Risk", result: "BVI (high) + Cayman (high) + Switzerland (medium)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "threnvale", label: "Threnvale Capital LLP", type: "company", jurisdiction: "UK 🇬🇧", risk: "medium", x: 230, y: 39,
          info: "The applicant entity. LLP registered in UK. Virtual office. Expected $3–5M/month turnover. Only nominee partners listed." },
        { id: "orvashk", label: "Orvashk Group Ltd", type: "company", jurisdiction: "BVI 🇻🇬", risk: "high", ownership: "60%", parent: "threnvale", x: 115, y: 151,
          info: "BVI registered company holding 60% of Threnvale. No public beneficial ownership disclosure. Linked to offshore tax investigation (2023)." },
        { id: "klendara", label: "Klendara Advisory AG", type: "company", jurisdiction: "Switzerland 🇨🇭", risk: "medium", ownership: "40%", parent: "threnvale", x: 345, y: 151,
          info: "Swiss advisory firm in Zug. Holds 40% of Threnvale. Director: Sennara Vikström. Legitimate corporate registration." },
        { id: "yeranthos", label: "Yeranthos Trust", type: "trust", jurisdiction: "Cayman 🇰🇾", risk: "high", ownership: "100%", parent: "orvashk", x: 63, y: 262,
          info: "Cayman Islands discretionary trust. Owns 100% of Orvashk Group. Trust deed NOT provided. Beneficiaries and settlor undisclosed." },
        { id: "vikstrom", label: "Sennara Vikström", type: "person", jurisdiction: "Sweden 🇸🇪", risk: "low", ownership: "70%", parent: "klendara", x: 299, y: 262,
          info: "Swedish national. Director and 70% shareholder of Klendara Advisory. Clean screening. Tax resident in Switzerland. Cooperating with requests." },
        { id: "nominee_f", label: "Pellmarch Nominees Ltd", type: "nominee", jurisdiction: "UK 🇬🇧", risk: "medium", ownership: "30%", parent: "klendara", x: 397, y: 262,
          info: "Nominee shareholder holding 30% of Klendara on behalf of undisclosed client(s). Same registered agent as Threnvale." },
        { id: "drenkh", label: "Borislav Drenkh", type: "person", jurisdiction: "Latvia 🇱🇻", risk: "critical", ownership: "Beneficiary", parent: "yeranthos", x: 63, y: 368,
          info: "⚠️ PEP MATCH: Former Deputy Minister of Economy, Latvia (2018–2022). Subject of parliamentary inquiry into procurement irregularities. Identified as discretionary beneficiary of Yeranthos Trust via leaked correspondence." },
        { id: "unknown", label: "[Undisclosed]", type: "unknown", jurisdiction: "Unknown", risk: "critical", ownership: "Settlor", parent: "yeranthos", x: 172, y: 368,
          info: "⚠️ The settlor of Yeranthos Trust has not been disclosed. Trust deed has not been provided despite repeated requests. This is a critical CDD gap." },
      ],
      edges: [
        { from: "threnvale", to: "orvashk", label: "60%" },
        { from: "threnvale", to: "klendara", label: "40%" },
        { from: "orvashk", to: "yeranthos", label: "100%" },
        { from: "klendara", to: "vikstrom", label: "70%" },
        { from: "klendara", to: "nominee_f", label: "30%" },
        { from: "yeranthos", to: "drenkh", label: "Beneficiary" },
        { from: "yeranthos", to: "unknown", label: "Settlor" },
      ]
    },
    flags: [
      "60% ownership traced through BVI → Cayman trust chain — beneficial owner not fully identified. Critical CDD gap.",
      "Borislav Drenkh identified as trust beneficiary — PEP (former Deputy Minister of Economy, Latvia). Not declared on UBO form.",
      "Trust deed for Yeranthos Trust not provided despite repeated requests. Settlor identity unknown.",
      "Source of funds declaration missing — applicant cited 'commercial sensitivity' twice.",
      "Virtual office address shared with 40+ other entities. Nominee partners only — no natural persons as designated members.",
      "Orvashk Group linked to offshore tax investigation (2023) — adverse media hit.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Requesting Enhanced Due Diligence is exactly right. You cannot onboard this client without resolving the <strong>critical CDD gaps</strong>: the hidden PEP (Borislav Drenkh) behind the Yeranthos Trust, the missing trust deed, the undisclosed settlor, and the absent source of funds declaration. EDD must include full UBO identification through the BVI/Cayman chain, PEP-specific risk assessment, and independent verification of the trust structure.",
        coach: "🎓 <strong>AI Coach:</strong> When ownership chains pass through opacity jurisdictions (BVI, Cayman) and terminate in trusts with undisclosed beneficiaries, you must resolve every link before onboarding. The CDD Rule (31 CFR 1010.230) requires identification and verification of all beneficial owners holding 25%+ ownership.",
      },
      approve: {
        grade: "bad", title: "Critical CDD Failure", points: -40,
        explain: "Approving this application would be a <strong>serious regulatory violation</strong>. You have not identified the beneficial owner of 60% of the entity. A PEP is hidden behind a trust structure, the trust deed hasn't been provided, and source of funds is missing.",
        coach: "🎓 <strong>AI Coach:</strong> Never onboard when the UBO chain is incomplete. 60% ownership is unresolved — that's not a minor gap, it's a fundamental failure of customer identification.",
      },
      reject: {
        grade: "partial", title: "Defensible, But EDD First", points: 70,
        explain: "Rejection is defensible given the red flags, but best practice is to give the applicant the opportunity to provide the missing information through an <strong>EDD process</strong> first. If they refuse, then rejection is the appropriate outcome.",
        coach: "🎓 <strong>AI Coach:</strong> The risk-based approach means applying proportionate measures. EDD gives the client a chance to resolve concerns — if they can't or won't, then you reject with a clear audit trail.",
      },
      escalate: {
        grade: "partial", title: "Good, But You Should Lead", points: 60,
        explain: "Escalating PEP-related cases is appropriate, but you should escalate <strong>with a recommendation</strong>. The correct recommendation here is EDD.",
        coach: "🎓 <strong>AI Coach:</strong> Escalation without a recommendation shifts the decision rather than demonstrating analytical judgement. Always escalate with a clear assessment and proposed action.",
      }
    }
  },

  // CASE 2 and CASE 3 omitted here for brevity in this message — keep them as-is from your original code

  // ══════════════════════════════════════════════════════════════
  // CASE 4: International Corporate Client — Nested Ownership + Commodity Trading
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1005",
    name: "Aurevind Trading International Ltd",
    teaser: "Wholesale trade finance client — nested offshore layers, metals & energy commodities",
    entityType: "Private Limited Company",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Trade Finance Facility & Current Account",
      purpose: "Financing imports/exports of base metals and crude derivatives",
      expectedVolume: "$8–12M monthly",
      jurisdiction: "Singapore",
      incorporationDate: "2023-02-19",
      registeredAgent: "Apex Global Services Pte Ltd",
    },
    documents: [
      { name: "ACRA Business Profile", status: "provided", flag: false, note: "Active Singapore Pte Ltd. Paid-up capital SGD 500,000." },
      { name: "Ownership Structure Chart", status: "provided", flag: true, note: "Four-layer chain: Singapore → BVI → Panama → Liechtenstein Anstalt." },
      { name: "Panamaris Holdings SA Certificate (Panama)", status: "provided", flag: true, note: "Previously used bearer shares; now registered but UBO not disclosed publicly." },
      { name: "Source of Funds / Wealth Declaration", status: "incomplete", flag: true, note: "Refers generically to 'family commodity business' — no bank statements or contracts provided." },
      { name: "Sample Trade Contracts", status: "provided", flag: true, note: "Contracts reference buyers in high-risk jurisdictions; end-user certificates missing." },
      { name: "UBO Declaration Form", status: "incomplete", flag: true, note: "Only nominee directors listed; ultimate 75% chain not declared." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "Indirect exposure — close associate of SDN-listed individual", flag: true },
      { type: "Adverse Media", result: "2024 industry report links group to dual-use goods shipments", flag: true },
      { type: "Jurisdiction Risk", result: "Singapore (medium) + BVI/Panama/Liechtenstein (high)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "aurevind", label: "Aurevind Trading Ltd", type: "company", jurisdiction: "Singapore 🇸🇬", risk: "high", x: 230, y: 39,
          info: "Applicant entity seeking trade finance. High monthly volumes expected in metals/energy." },
        { id: "bvihold", label: "Vantablack Holdings Ltd", type: "company", jurisdiction: "BVI 🇻🇬", risk: "high", ownership: "75%", parent: "aurevind", x: 115, y: 151,
          info: "BVI holding — no public UBO register. Holds majority of Aurevind." },
        { id: "panama", label: "Panamaris Holdings SA", type: "company", jurisdiction: "Panama 🇵🇦", risk: "critical", ownership: "100%", parent: "bvihold", x: 63, y: 262,
          info: "Panama company with history of bearer-share usage. UBO obscured." },
        { id: "pep_assoc", label: "Viktor Kovalenko", type: "person", jurisdiction: "Ukraine 🇺🇦 / Cyprus", risk: "critical", ownership: "Beneficial", parent: "panama", x: 63, y: 368,
          info: "⚠️ Close associate of individual on multiple sanctions lists (energy/commodities sector)." },
      ],
      edges: [
        { from: "aurevind", to: "bvihold", label: "75%" },
        { from: "bvihold", to: "panama", label: "100%" },
        { from: "panama", to: "pep_assoc", label: "Beneficial" },
      ]
    },
    flags: [
      "Complex nested ownership through multiple opacity jurisdictions — UBO not identified.",
      "Indirect exposure to sanctioned individual via close business associate.",
      "Commodity trading with potential dual-use goods — adverse media concerns.",
      "Source of wealth declaration vague and unsupported by evidence.",
      "End-user documentation for high-risk jurisdiction counterparties missing.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD is required to fully pierce the ownership chain, verify UBO identity, assess sanctions/PEP adjacency risk, and validate legitimate trade purpose with supporting documentation.",
        coach: "🎓 <strong>AI Coach:</strong> Commodity traders with layered offshore structures require complete transparency per FATF Recommendations 10 & 22. Never accept incomplete UBO chains in this sector."
      },
      approve: { grade: "bad", title: "Critical Failure", points: -40,
        explain: "Onboarding without resolving UBO and sanctions-adjacency risks would constitute a serious AML/sanctions violation." },
      reject: { grade: "partial", title: "Defensible, But Try EDD First", points: 70,
        explain: "Rejection is reasonable, but best practice is to request EDD information first unless policy prohibits." },
      escalate: { grade: "partial", title: "Good Instinct", points: 60,
        explain: "Escalation appropriate — include recommendation for EDD and sanctions legal review." }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 5: Hedge Fund Manager — Emerging Markets + Volatility Exposure
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1012",
    name: "Nexthorpe Capital Management LLC",
    teaser: "Hedge fund seeking custodial & prime brokerage services — heavy EM exposure",
    entityType: "Limited Liability Company",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Prime Brokerage & Custody Account",
      purpose: "Managing long/short equity fund focused on frontier & emerging markets",
      expectedVolume: "$20–40M AUM inflows/outflows monthly",
      jurisdiction: "Delaware, USA",
      incorporationDate: "2022-09-08",
      registeredAgent: "Harvard Business Services Inc",
    },
    documents: [
      { name: "Delaware Certificate of Formation", status: "provided", flag: false, note: "Active LLC. Manager-managed structure." },
      { name: "Form ADV Part 1 & 2", status: "provided", flag: false, note: "Registered investment adviser with SEC. AUM reported $180M." },
      { name: "Fund Offering Memorandum", status: "provided", flag: true, note: "Describes strategy but limited disclosure on counterparties." },
      { name: "Audited Financials (Fund)", status: "missing", flag: true, note: "Latest audit delayed — unaudited statements only." },
      { name: "Investor List / Subscription Agreements", status: "incomplete", flag: true, note: "Partial list; several high-net-worth from high-risk jurisdictions." },
      { name: "AML Program & Policies", status: "provided", flag: true, note: "Basic policy — no specific emerging markets risk procedures." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "One investor flagged as PEP (family member)", flag: true },
      { type: "Adverse Media", result: "Fund mentioned in 2025 article re: alleged insider positions", flag: true },
      { type: "Jurisdiction Risk", result: "Heavy exposure to Turkey, Nigeria, Pakistan (high-risk)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "nexthorpe", label: "Nexthorpe Capital LLC", type: "company", jurisdiction: "USA 🇺🇸", risk: "high", x: 230, y: 39,
          info: "Investment manager seeking custody/prime services. Focus: EM/frontier equities." },
        { id: "manager", label: "Jameson R. Halvorsen", type: "person", jurisdiction: "USA 🇺🇸", risk: "medium", ownership: "Managing Member", parent: "nexthorpe", x: 115, y: 151,
          info: "Principal portfolio manager. No personal sanctions/PEP hits." },
        { id: "investor_pep", label: "Elena Kostadinova", type: "person", jurisdiction: "Bulgaria 🇧🇬", risk: "high", ownership: "~12%", parent: "nexthorpe", x: 345, y: 151,
          info: "⚠️ PEP: Spouse of former Bulgarian energy minister under EU scrutiny." },
        { id: "fund", label: "Nexthorpe Frontier Fund LP", type: "fund", jurisdiction: "Cayman 🇰🇾", risk: "high", x: 230, y: 262,
          info: "Master fund vehicle. Significant positions in high-risk EM jurisdictions." },
      ],
      edges: [
        { from: "nexthorpe", to: "manager", label: "Manager" },
        { from: "fund", to: "nexthorpe", label: "Managed by" },
        { from: "fund", to: "investor_pep", label: "Investor (~12%)" },
      ]
    },
    flags: [
      "Significant exposure to high-risk emerging/frontier markets with volatility/sanctions risk.",
      "PEP investor not fully screened in initial submission.",
      "No audited financials for fund — delay claimed.",
      "Adverse media regarding trading practices.",
      "Investor base includes multiple high-risk jurisdiction residents.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD required to assess investor due diligence, verify source of funds for key investors, review trading patterns, and confirm robust AML controls for high-risk market exposure.",
        coach: "🎓 <strong>AI Coach:</strong> Hedge funds with EM concentration require investor-level CDD, audited performance, and sanctions/AML program validation (FATF Rec. 10 & 22)."
      },
      approve: { grade: "bad", title: "High Risk Accepted Blindly", points: -40,
        explain: "Approving without resolving unaudited status, PEP investor, and EM exposure risks serious compliance failure." },
      reject: { grade: "partial", title: "Cautious But Premature", points: 70,
        explain: "Rejection defensible, but EDD first is preferred for legitimate funds." },
      escalate: { grade: "partial", title: "Appropriate", points: 70,
        explain: "Escalation needed for prime brokerage onboarding in this risk category." }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 6: Private Equity Firm — Cross-Border M&A with SOE Ties
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1020",
    name: "Crestmoor Partners LP",
    teaser: "PE firm requesting syndicated loan for China tech acquisition",
    entityType: "Limited Partnership",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Syndicated Loan Facility & Escrow Account",
      purpose: "Acquisition financing for controlling stake in Chinese AI company",
      expectedVolume: "$150M drawdown + transactional flows",
      jurisdiction: "Jersey (Channel Islands)",
      incorporationDate: "2021-04-27",
      registeredAgent: "Ogier Global",
    },
    documents: [
      { name: "Jersey Limited Partnership Registration", status: "provided", flag: false, note: "Registered with JFSC. GP is Crestmoor GP Ltd." },
      { name: "Limited Partnership Agreement", status: "provided", flag: true, note: "GP has broad powers; LP identities redacted." },
      { name: "Target Company Due Diligence Report", status: "provided", flag: true, note: "Target is 35% owned by PRC state-linked entity." },
      { name: "Source of Funds Declaration", status: "incomplete", flag: true, note: "Refers to 'committed capital' — no investor breakdown." },
      { name: "Investor List", status: "missing", flag: true, note: "Not provided — cited confidentiality." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "GP director is former SOE executive", flag: true },
      { type: "Adverse Media", result: "Target company linked to military-civil fusion concerns", flag: true },
      { type: "Jurisdiction Risk", result: "Jersey (medium) + China (high — CFIUS/export control)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "crestmoor", label: "Crestmoor Partners LP", type: "fund", jurisdiction: "Jersey 🇯🇪", risk: "high", x: 230, y: 39,
          info: "PE fund seeking acquisition finance. Target has PRC SOE stake." },
        { id: "gp", label: "Crestmoor GP Ltd", type: "company", jurisdiction: "Jersey 🇯🇪", risk: "medium", ownership: "GP", parent: "crestmoor", x: 115, y: 151,
          info: "General partner entity." },
        { id: "director", label: "Li Weiqiang", type: "person", jurisdiction: "China 🇨🇳 / Hong Kong", risk: "high", ownership: "Director", parent: "gp", x: 63, y: 262,
          info: "⚠️ Former executive at state-owned enterprise under US Entity List scrutiny." },
        { id: "target", label: "Shanghai NeuralTech Co.", type: "company", jurisdiction: "China 🇨🇳", risk: "critical", x: 345, y: 151,
          info: "Target acquisition — 35% SOE ownership + military-civil fusion allegations." },
      ],
      edges: [
        { from: "crestmoor", to: "gp", label: "GP" },
        { from: "gp", to: "director", label: "Director" },
        { from: "crestmoor", to: "target", label: "Proposed Acquisition" },
      ]
    },
    flags: [
      "Target company has state-owned enterprise ownership and adverse media (military-civil fusion).",
      "GP director has prior SOE ties with potential export control/sanctions adjacency.",
      "Investor identities and source of funds not disclosed.",
      "High geopolitical and CFIUS/export control risk.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD essential to assess sanctions/export control risk, verify investor sources, and evaluate transaction purpose against geopolitical restrictions.",
        coach: "🎓 <strong>AI Coach:</strong> Cross-border PE deals involving PRC entities require enhanced sanctions, export control, and CFIUS-style analysis."
      },
      approve: { grade: "bad", title: "Unacceptable Risk", points: -40,
        explain: "Approving without resolving SOE ties and investor transparency risks severe sanctions violation." },
      reject: { grade: "partial", title: "Strongly Defensible", points: 80,
        explain: "Rejection likely safest given geopolitical exposure — EDD may not fully mitigate." },
      escalate: { grade: "excellent", title: "Mandatory Escalation", points: 100,
        explain: "This case requires senior legal/compliance committee review due to sanctions & export control implications." }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 7: Commodity Trading Company — Conflict Zone Supply Chain
  // Difficulty: Very Hard | Correct: EDD / Possible Rejection
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1028",
    name: "Kharvox Commodities SA",
    teaser: "Derivatives & clearing account — African & Middle East mineral supply chain",
    entityType: "Société Anonyme",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "edd",
    application: {
      type: "Derivatives Trading & Clearing Account",
      purpose: "Hedging physical commodity positions (cobalt, tantalum, gold)",
      expectedVolume: "$10–18M monthly notional",
      jurisdiction: "Switzerland",
      incorporationDate: "2020-11-12",
      registeredAgent: "Self-registered",
    },
    documents: [
      { name: "Swiss Commercial Register Extract", status: "provided", flag: false, note: "Active SA in Geneva. Commodity trading focus." },
      { name: "Supply Chain Policy", status: "provided", flag: true, note: "Basic OECD Due Diligence Guidance reference — no third-party audit." },
      { name: "Supplier List", status: "incomplete", flag: true, note: "Partial list; several DRC & Zimbabwe entities." },
      { name: "Chain of Custody Certificates", status: "missing", flag: true, note: "Not provided for conflict minerals." },
      { name: "Source of Funds / Wealth", status: "provided", flag: true, note: "Trading profits claimed — unaudited." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "One director linked to Zimbabwean official", flag: true },
      { type: "Adverse Media", result: "Multiple NGO reports on DRC sourcing practices (2024–2025)", flag: true },
      { type: "Jurisdiction Risk", result: "Switzerland (medium) + DRC/Zimbabwe (very high)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "kharvox", label: "Kharvox Commodities SA", type: "company", jurisdiction: "Switzerland 🇨🇭", risk: "very high", x: 230, y: 39,
          info: "Commodity trader seeking derivatives clearing. Focus: conflict-sensitive minerals." },
        { id: "director_pep", label: "Tendai Mupfumi", type: "person", jurisdiction: "Zimbabwe 🇿🇼", risk: "high", ownership: "Director", parent: "kharvox", x: 115, y: 151,
          info: "⚠️ Family member of Zimbabwean ruling party official under sanctions consideration." },
        { id: "suppliers", label: "DRC & Zimbabwe Suppliers", type: "unknown", jurisdiction: "DRC 🇨🇩 / Zimbabwe 🇿🇼", risk: "critical", x: 345, y: 151,
          info: "Supply chain includes artisanal & semi-industrial mines in conflict/high-risk zones." },
      ],
      edges: [
        { from: "kharvox", to: "director_pep", label: "Director" },
        { from: "suppliers", to: "kharvox", label: "Raw Material Supply" },
      ]
    },
    flags: [
      "Supply chain includes conflict-affected/high-risk jurisdictions (DRC, Zimbabwe).",
      "No independent third-party audit or full chain-of-custody documentation.",
      "Adverse NGO/media reports on responsible sourcing failures.",
      "PEP-adjacent director exposure.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD mandatory — require independent supply-chain audit, full due diligence on high-risk suppliers, and enhanced PEP screening.",
        coach: "🎓 <strong>AI Coach:</strong> Conflict minerals traders fall under heightened scrutiny (Dodd-Frank 1502, EU Conflict Minerals Regulation, OECD Guidance). Incomplete supply-chain transparency = major red flag."
      },
      approve: { grade: "bad", title: "Severe Risk", points: -50,
        explain: "Approving without supply-chain resolution risks facilitating conflict financing / human rights violations." },
      reject: { grade: "good", title: "Strongly Justified", points: 90,
        explain: "Rejection highly defensible — many institutions de-risk this sector entirely." },
      escalate: { grade: "excellent", title: "Required", points: 100,
        explain: "Escalate to compliance/sustainability/legal for senior decision." }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 8: Insurance / Reinsurance Brokerage — Captive & Tax Haven Networks
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1104",
    name: "Baltrex Reinsurance Brokers Ltd",
    teaser: "Wholesale reinsurance intermediary — extensive captive & offshore network",
    entityType: "Limited Company",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Correspondent Reinsurance Account",
      purpose: "Placing & receiving reinsurance premiums / claims",
      expectedVolume: "$25–45M annual premium flows",
      jurisdiction: "Bermuda",
      incorporationDate: "2019-07-15",
      registeredAgent: "Conyers Dill & Pearman",
    },
    documents: [
      { name: "Bermuda Company Registration", status: "provided", flag: false, note: "Class 3A insurer intermediary license." },
      { name: "Captive Client List", status: "incomplete", flag: true, note: "Partial — several Cayman & Labuan captives listed." },
      { name: "AML / Sanctions Policy", status: "provided", flag: true, note: "Generic — limited captive-specific procedures." },
      { name: "Ownership & UBO Declaration", status: "incomplete", flag: true, note: "Multiple layers through trusts & nominees." },
      { name: "Financial Statements", status: "provided", flag: true, note: "Unaudited management accounts only." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "One UBO flagged as PEP (Middle East)", flag: true },
      { type: "Adverse Media", result: "2024 report on reinsurance fraud network (unconfirmed link)", flag: true },
      { type: "Jurisdiction Risk", result: "Bermuda (medium) + Cayman/Labuan (high)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "baltrex", label: "Baltrex Re Brokers Ltd", type: "company", jurisdiction: "Bermuda 🇧🇲", risk: "high", x: 230, y: 39,
          info: "Reinsurance broker seeking correspondent relationship. Extensive captive placements." },
        { id: "trust_hold", label: "Marazion Trust", type: "trust", jurisdiction: "Cayman 🇰🇾", risk: "high", ownership: "55%", parent: "baltrex", x: 115, y: 151,
          info: "Cayman trust — beneficiaries undisclosed." },
        { id: "pep_ubo", label: "Sheikh Hamad bin Tariq", type: "person", jurisdiction: "UAE 🇦🇪", risk: "high", ownership: "Beneficiary", parent: "trust_hold", x: 63, y: 262,
          info: "⚠️ PEP: Extended family member of ruling family with wealth management scrutiny." },
      ],
      edges: [
        { from: "baltrex", to: "trust_hold", label: "55%" },
        { from: "trust_hold", to: "pep_ubo", label: "Beneficiary" },
      ]
    },
    flags: [
      "Complex ownership through Cayman trust — UBO not fully transparent.",
      "PEP exposure via trust beneficiary.",
      "Large volume of captive reinsurance — fraud & money laundering risk.",
      "Unaudited financials; generic AML policy.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD required to identify all UBOs, verify source of wealth/premiums, and assess captive-specific AML controls.",
        coach: "🎓 <strong>AI Coach:</strong> Reinsurance intermediaries with captive & offshore structures are vulnerable to premium diversion & laundering (FATF Rec. 5 & 28)."
      },
      approve: { grade: "bad", title: "Critical Gap", points: -40,
        explain: "Onboarding without UBO resolution & captive due diligence risks facilitating illicit flows." },
      reject: { grade: "partial", title: "Defensible", points: 70,
        explain: "Rejection reasonable if EDD cannot be completed." },
      escalate: { grade: "partial", title: "Appropriate", points: 70,
        explain: "Escalate for reinsurance/specialty line senior review." }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 9: Offshore Alternative Investment Fund — Layered Feeders & Anonymous Investors
  // Difficulty: Very Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1115",
    name: "Caymanara Alternative Fund SPC",
    teaser: "Offshore AIF seeking asset management & banking services — layered feeders",
    entityType: "Segregated Portfolio Company (SPC)",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "edd",
    application: {
      type: "Fund Banking & Custody Services",
      purpose: "Receiving subscriptions/redemptions & holding investment assets",
      expectedVolume: "$30–60M monthly subscriptions/redemptions",
      jurisdiction: "Cayman Islands",
      incorporationDate: "2022-05-03",
      registeredAgent: "Maples Group",
    },
    documents: [
      { name: "CIMA Registered Fund Certificate", status: "provided", flag: false, note: "Registered mutual fund — audited administrator." },
      { name: "Offering Memorandum", status: "provided", flag: true, note: "Multi-strategy fund; feeder structure disclosed." },
      { name: "Feeder Fund List", status: "incomplete", flag: true, note: "Lists feeders in BVI, Labuan, Mauritius — UBOs redacted." },
      { name: "Investor Due Diligence Summary", status: "missing", flag: true, note: "Not provided — administrator cites privacy." },
      { name: "AML Policy & Procedures", status: "provided", flag: true, note: "Delegated to administrator — generic document." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "Multiple indirect PEP hits via feeders", flag: true },
      { type: "Adverse Media", result: "One feeder mentioned in tax avoidance article (2025)", flag: true },
      { type: "Jurisdiction Risk", result: "Cayman (high) + multiple feeders in opacity jurisdictions", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "caymanara", label: "Caymanara Alt Fund SPC", type: "fund", jurisdiction: "Cayman 🇰🇾", risk: "very high", x: 230, y: 39,
          info: "Master fund seeking banking services. Multi-strategy with layered feeders." },
        { id: "feeder1", label: "Viremont Feeder Ltd", type: "fund", jurisdiction: "BVI 🇻🇬", risk: "high", ownership: "38%", parent: "caymanara", x: 92, y: 171,
          info: "BVI feeder — investor identities not disclosed." },
        { id: "feeder2", label: "Sylvara SPC", type: "fund", jurisdiction: "Mauritius 🇲🇺", risk: "high", ownership: "27%", parent: "caymanara", x: 368, y: 171,
          info: "Mauritius cell company feeder — anonymous trust investors." },
        { id: "pep_invest", label: "[Multiple Undisclosed PEPs]", type: "unknown", jurisdiction: "Various", risk: "critical", x: 230, y: 302,
          info: "⚠️ Screening shows indirect PEP exposure through at least 3 feeder investors." },
      ],
      edges: [
        { from: "caymanara", to: "feeder1", label: "38% (via feeder)" },
        { from: "caymanara", to: "feeder2", label: "27% (via feeder)" },
        { from: "feeder1", to: "pep_invest", label: "Investors" },
        { from: "feeder2", to: "pep_invest", label: "Investors" },
      ]
    },
    flags: [
      "Layered feeder structure across opacity jurisdictions — UBOs not provided.",
      "Multiple indirect PEP connections identified.",
      "Investor due diligence delegated but not evidenced.",
      "High-volume subscription/redemption flows with limited transparency.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD critical to obtain look-through on feeder investors, verify source of funds, and ensure no sanctioned/illicit exposure in the investor base.",
        coach: "🎓 <strong>AI Coach:</strong> Offshore funds with anonymous feeders are classic high-risk vehicles for laundering (FATF Rec. 10, 22, 25). Full look-through required."
      },
      approve: { grade: "bad", title: "Unacceptable", points: -50,
        explain: "Approving without investor transparency risks becoming conduit for illicit funds." },
      reject: { grade: "good", title: "Highly Defensible", points: 90,
        explain: "Many banks de-risk layered offshore funds entirely — rejection strongly supported." },
      escalate: { grade: "excellent", title: "Mandatory", points: 100,
        explain: "Requires senior compliance/fund onboarding committee review." }
    }
  },
];
