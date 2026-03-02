// ═══════════════════════════════════════════════════════════════
// EDD — INDIVIDUAL ENHANCED DUE DILIGENCE REVIEWS
// Periodic deep-dive reviews of high-risk individual customers.
// 7 Cases — All names are fictional and designed to be clearly non-real.
// No real person bears these names or matches these profiles.
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
      { amount: "$92,000", date: "2026-01-15", from: "Incoming — Kazvin Ministry Salary (annual)", country: "Kazvin", flag: false },
      { amount: "$67,000", date: "2026-01-15", to: "Private Jet Charter — Meridian Aviation", country: "UAE", flag: true },
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
        { id: "property", label: "London Flat", type: "property", x: 80, y: 280, risk: "high", info: "$1.8M Kensington apartment acquired 2023. Not declared to bank. Purchased through offshore structure.", jurisdiction: "United Kingdom" },
        { id: "ministry", label: "Ministry of NR", type: "organisation", x: 380, y: 280, risk: "medium", info: "Kazvin Ministry of Natural Resources. Employer. Subject of multiple corruption investigations.", jurisdiction: "Kazvin Republic" },
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

  // ── CASE 2: RCA of SDN-listed oligarch — sanctions adjacency ──
  {
    id: "EDD-I-2026-0218",
    name: "Viktoriy Palenko",
    teaser: "Long-term business partner of newly SDN-listed individual",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      fullName: "Viktoriy Mykola Palenko",
      dateOfBirth: "09 November 1968",
      nationality: "Ukraine / Cyprus",
      occupation: "Private Investor / Consultant",
      pepStatus: "No — but RCA of multiple PEPs and SDN-listed person",
      customerSince: "March 2019",
      accountType: "Private Banking Portfolio + Multi-currency Accounts",
      declaredIncome: "Investment returns & consulting fees (~$420,000/year)",
      declaredWealth: "$8.7M (mostly offshore trusts & real estate)",
      riskRating: "Critical — triggered by associate's SDN designation",
    },
    reviewTrigger: "Sanctions alert: long-term associate (since 2015) added to OFAC SDN list in February 2026.",
    sourceOfWealth: {
      declared: "Commodity trading joint ventures (2010–2022) and London/Dubai real estate.",
      findings: "$1.9M received 2023–2025 from companies previously linked to now-sanctioned associate. No updated SoF declaration post-designation. Still holds directorships in Cyprus entities that transacted with SDN-linked firms after designation.",
      assessment: "Unacceptable secondary sanctions risk and potential sanctions circumvention exposure."
    },
    adverseMedia: [
      { date: "2026-02-14", source: "OFAC", summary: "Associate Ivan Hrytsenko designated for Russia-related procurement evasion.", flag: true },
      { date: "2025-11-03", source: "OCCRP", summary: "Palenko identified as Cyprus facilitator moving funds for Hrytsenko network.", flag: true },
    ],
    transactions: [
      { amount: "$840,000", date: "2025-12-05", from: "Metallix Trading Ltd", country: "Cyprus", flag: true },
      { amount: "$1,200,000", date: "2024-08-12", from: "Black Sea Commodities SA", country: "Switzerland", flag: true },
      { amount: "$275,000", date: "2026-01-19", to: "Dubai Property Developer", country: "UAE", flag: false },
    ],
    documents: [
      { name: "Cypriot Passport", status: "provided", flag: false },
      { name: "Source of Funds Declaration", status: "outdated", flag: true, note: "Last update 2023 — pre-dates SDN designation." },
      { name: "Trust Deeds (Cayman & BVI)", status: "provided", flag: true, note: "Protectors and beneficiaries partially redacted." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match — but multiple RCAs", flag: true },
      { type: "PEP Check", result: "RCA of 3 PEPs (Ukraine/Cyprus)", flag: true },
      { type: "Adverse Media", result: "Sanctions facilitation & money laundering concerns", flag: true },
    ],
    flags: [
      "Long-term business partner of newly SDN-listed individual.",
      "Significant receipts from SDN-linked entities post-designation.",
      "No updated source of funds since sanctions hit.",
      "Ongoing Cyprus directorships with opaque funding.",
      "High secondary sanctions exposure (US/UK nexus).",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Correct & Necessary", points: 160,
        explain: "Exit is required. Relationship with close associate of SDN person — especially with post-designation flows — creates unacceptable secondary sanctions and facilitation risk." },
      maintain: { grade: "bad", title: "Severe Risk Accepted", points: -60,
        explain: "Maintaining without exit or draconian restrictions is indefensible post-designation." },
      escalate: { grade: "partial", title: "Mandatory", points: 90,
        explain: "Escalate to sanctions/legal with strong exit recommendation." },
    }
  },

  // ── CASE 3: PEP spouse — opaque consulting revenue ──
  {
    id: "EDD-I-2026-0325",
    name: "Layla al-Qasimi",
    teaser: "Spouse of senior UAE PEP — rapid wealth via consulting firm",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    profile: {
      fullName: "Layla bint Rashid al-Qasimi",
      dateOfBirth: "18 June 1985",
      nationality: "United Arab Emirates",
      occupation: "Director — Al-Qasimi Strategic Consulting LLC",
      pepStatus: "No — RCA (spouse of Ruler's Court Tier 1 PEP)",
      customerSince: "October 2021",
      accountType: "Private Banking + Investment Portfolio",
      declaredIncome: "$1.4M/year (consulting fees)",
      declaredWealth: "$14.2M (2025 declaration)",
      riskRating: "High — annual RCA + transaction alert",
    },
    reviewTrigger: "Annual RCA review + large incoming wires from high-risk jurisdictions.",
    sourceOfWealth: {
      declared: "Consulting contracts with ME government & private entities.",
      findings: "Dubai free-zone firm generated $4.8M in 2025 — 70% from non-tendered contracts. Significant inflows from Lebanon, Iraq, Syria-based entities. Limited contract evidence provided.",
      assessment: "Possible intermediary / conduit risk. Concentration and jurisdictional opacity concerns."
    },
    adverseMedia: [
      { date: "2025-10-30", source: "Middle East Eye", summary: "Al-Qasimi family members linked to non-transparent public-sector consulting awards.", flag: true },
    ],
    transactions: [
      { amount: "$920,000", date: "2026-02-03", from: "Beirut Trade Partners SAL", country: "Lebanon", flag: true },
      { amount: "$1,050,000", date: "2025-11-18", from: "Baghdad Reconstruction Fund LLC", country: "Iraq", flag: true },
      { amount: "$680,000", date: "2025-09-10", from: "Damascus Investment Group", country: "Syria", flag: true },
    ],
    documents: [
      { name: "UAE Passport", status: "provided", flag: false },
      { name: "Company Accounts", status: "provided", flag: true, note: "Management accounts — no external audit." },
      { name: "Consulting Contracts", status: "incomplete", flag: true, note: "Heavily redacted; no client verification." },
    ],
    screening: [
      { type: "PEP Check", result: "RCA — spouse of Tier 1 PEP", flag: true },
      { type: "Adverse Media", result: "Family-linked opacity in public contracts", flag: true },
    ],
    flags: [
      "Spouse of very senior UAE PEP (Ruler's Court).",
      "Rapid wealth growth via non-transparent consulting firm.",
      "Funds from high-risk / conflict jurisdictions.",
      "No audited financials; limited contract documentation.",
    ],
    feedback: {
      edd: { grade: "excellent", title: "Correct", points: 140,
        explain: "Continue EDD: obtain full contracts, audited accounts, enhanced SoF for high-risk inflows." },
      exit: { grade: "partial", title: "Defensible if Non-Cooperation", points: 80,
        explain: "Exit reasonable if client refuses deeper disclosure." },
    }
  },

  // ── CASE 4: Former PEP — now in high-risk jurisdiction banking ──
  {
    id: "EDD-I-2026-0412",
    name: "Amara Nkosi",
    teaser: "Former Zambian Finance Minister — now resident in high-risk jurisdiction",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      fullName: "Amara Chileshe Nkosi",
      dateOfBirth: "22 April 1962",
      nationality: "Zambia",
      occupation: "Retired politician / Consultant",
      pepStatus: "Yes — Former Senior PEP (within 5 years)",
      customerSince: "June 2020",
      accountType: "Private Banking + Offshore Trust Accounts",
      declaredIncome: "$180,000/year (consulting + pension)",
      declaredWealth: "$4.9M (property & investments)",
      riskRating: "Critical — triggered by relocation + adverse media",
    },
    reviewTrigger: "Relocation to high-risk jurisdiction (2025) + new adverse media on post-office enrichment.",
    sourceOfWealth: {
      declared: "Government pension, consulting since 2021, property sales.",
      findings: "Acquired $2.7M villa in Dubai (2025) shortly after moving. Multiple wires from Zambian state-linked companies post-resignation. No detailed SoW update since relocation.",
      assessment: "Classic post-PEP enrichment pattern — high corruption risk."
    },
    adverseMedia: [
      { date: "2026-01-08", source: "Lusaka Times / Africa Confidential", summary: "Nkosi allegedly received kickbacks during 2018–2021 mining licence awards.", flag: true },
    ],
    transactions: [
      { amount: "$1,450,000", date: "2025-10-22", from: "Zambia Mining Dev Corp", country: "Zambia", flag: true },
      { amount: "$2,700,000", date: "2025-12-15", to: "Dubai Real Estate — Villa Purchase", country: "UAE", flag: true },
    ],
    documents: [
      { name: "Zambian Passport", status: "provided", flag: false },
      { name: "Source of Wealth Update", status: "missing", flag: true, note: "Requested post-relocation — not provided." },
      { name: "Property Purchase Docs", status: "provided", flag: true, note: "Dubai title deed — source of funds unclear." },
    ],
    screening: [
      { type: "PEP Check", result: "Former Senior PEP — still within 5-year window", flag: true },
      { type: "Adverse Media", result: "Kickback allegations during tenure", flag: true },
    ],
    flags: [
      "Former senior PEP (Finance Minister) within 5-year cooling-off.",
      "Significant state-linked inflows post-resignation.",
      "Large Dubai property purchase shortly after relocation to high-risk jurisdiction.",
      "No updated SoW documentation despite requests.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Correct", points: 160,
        explain: "Exit strongly recommended. Post-PEP enrichment pattern + state-linked funds + non-cooperation = unmanageable corruption risk." },
      maintain: { grade: "bad", title: "Indefensible", points: -50,
        explain: "Maintaining relationship without full resolution exposes bank to serious AML risk." },
    }
  },

  // ── CASE 5: Direct Sanctions Match — recent designation ──
  {
    id: "EDD-I-2026-0509",
    name: "Sergei Volodin",
    teaser: "Recently designated under EU autonomous Russia sanctions",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "exit",
    profile: {
      fullName: "Sergei Anatolyevich Volodin",
      dateOfBirth: "03 July 1974",
      nationality: "Russian Federation",
      occupation: "Businessman — Energy Sector",
      pepStatus: "No",
      customerSince: "November 2018",
      accountType: "Investment Portfolio + Corporate Accounts (linked)",
      declaredIncome: "Energy trading profits",
      declaredWealth: "$12.4M",
      riskRating: "Critical — immediate sanctions hit",
    },
    reviewTrigger: "Added to EU sanctions list March 2026 (energy sector influence / evasion support).",
    sourceOfWealth: {
      declared: "Ownership in multiple Russian & Cypriot energy trading entities.",
      findings: "Portfolio includes frozen assets. Recent attempts to move funds to third-party accounts before full freeze.",
      assessment: "Direct sanctions violation risk — immediate exit required."
    },
    adverseMedia: [
      { date: "2026-03-05", source: "EU Official Journal", summary: "Volodin designated for material support to Russian energy sector evasion.", flag: true },
    ],
    transactions: [
      { amount: "$980,000", date: "2026-02-20", to: "Third-party Cyprus account", country: "Cyprus", flag: true },
    ],
    documents: [
      { name: "Russian Passport", status: "provided", flag: false },
      { name: "Sanctions Self-Declaration", status: "provided 2025", flag: true, note: "Pre-designation — now invalid." },
    ],
    screening: [
      { type: "Sanctions", result: "DIRECT MATCH — EU list March 2026", flag: true },
    ],
    flags: [
      "Direct sanctions designation — asset freeze required.",
      "Pre-designation fund movement attempts detected.",
    ],
    feedback: {
      exit: { grade: "excellent", title: "Mandatory", points: 200,
        explain: "Immediate exit and asset freeze required under sanctions law. No discretion." },
    }
  },

  // ── CASE 6: High-risk crypto investor — mixer usage ──
  {
    id: "EDD-I-2026-0617",
    name: "Tariq bin Faisal",
    teaser: "HNW crypto trader — on-chain links to mixers & high-risk wallets",
    riskLevel: "very high",
    riskLabel: "Very High",
    correct: "edd",
    profile: {
      fullName: "Tariq bin Faisal Al-Mansoori",
      dateOfBirth: "12 September 1992",
      nationality: "Qatar",
      occupation: "Crypto Asset Trader / Fund Manager",
      pepStatus: "No",
      customerSince: "April 2023",
      accountType: "High-Volume Fiat On/Off Ramp Account",
      declaredIncome: "Crypto trading profits ($2.1M 2025)",
      declaredWealth: "$9.8M",
      riskRating: "Very High — chain analysis alert",
    },
    reviewTrigger: "Blockchain analytics flag: multiple deposits linked to Tornado Cash-style mixers.",
    sourceOfWealth: {
      declared: "Profits from DeFi & spot trading.",
      findings: "Chainalysis report shows $1.4M inflows from wallets previously tagged as high-risk / mixer outputs (2025–2026).",
      assessment: "High risk of laundering proceeds of crime via obfuscation techniques."
    },
    adverseMedia: [],
    transactions: [
      { amount: "$620,000", date: "2026-01-14", from: "Binance — tagged wallet", country: "Global", flag: true },
      { amount: "$450,000", date: "2025-12-08", from: "Mixer-linked deposit", country: "N/A", flag: true },
    ],
    documents: [
      { name: "Qatar ID", status: "provided", flag: false },
      { name: "Trading Statements", status: "provided", flag: true, note: "Exchange exports — incomplete wallet history." },
    ],
    screening: [
      { type: "Adverse Media", result: "No name match — but on-chain red flags", flag: true },
    ],
    flags: [
      "Confirmed on-chain links to mixers / high-risk wallets.",
      "High-volume fiat-crypto flows without full wallet transparency.",
    ],
    feedback: {
      edd: { grade: "excellent", title: "Required", points: 150,
        explain: "Deep EDD mandatory: full wallet history, chain-of-funds analysis, enhanced SoF evidence." },
      exit: { grade: "partial", title: "Defensible", points: 90,
        explain: "Exit justified if client cannot explain mixer usage." },
    }
  },

  // ── CASE 7: Elderly HNW — suspected exploitation / family pressure ──
  {
    id: "EDD-I-2026-0722",
    name: "Margaret Harrington-Wright",
    teaser: "92-year-old HNW — large unexplained transfers to family members",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    profile: {
      fullName: "Margaret Eleanor Harrington-Wright",
      dateOfBirth: "17 May 1934",
      nationality: "United Kingdom",
      occupation: "Retired (widow)",
      pepStatus: "No",
      customerSince: "August 2005",
      accountType: "Private Banking + Trust Accounts",
      declaredIncome: "Pension + dividends (~£180,000/year)",
      declaredWealth: "£11.4M (trusts & property)",
      riskRating: "High — elder abuse / exploitation alert",
    },
    reviewTrigger: "Transaction monitoring: £2.8M transferred to three adult children in 18 months + recent change of attorney.",
    sourceOfWealth: {
      declared: "Inheritance, investments, property portfolio.",
      findings: "Large gifts/transfers lack documented intent or capacity assessment. New power of attorney granted to son (2025) who receives majority of funds.",
      assessment: "Potential financial abuse / undue influence — vulnerable adult risk."
    },
    adverseMedia: [],
    transactions: [
      { amount: "£1,200,000", date: "2025-09-10", to: "Son — Property Purchase", country: "UK", flag: true },
      { amount: "£980,000", date: "2026-01-05", to: "Daughter — Trust Settlement", country: "UK", flag: true },
    ],
    documents: [
      { name: "Last Will & Testament", status: "provided", flag: true, note: "Updated 2024 — significant changes." },
      { name: "Power of Attorney", status: "provided", flag: true, note: "New LPA 2025 — son as attorney." },
    ],
    screening: [
      { type: "Adverse Media", result: "No hits", flag: false },
    ],
    flags: [
      "Elderly vulnerable client — large unexplained transfers to family.",
      "Recent change of attorney + pattern suggests possible undue influence.",
      "No independent capacity / intent documentation for major gifts.",
    ],
    feedback: {
      edd: { grade: "excellent", title: "Correct", points: 150,
        explain: "Immediate EDD required: independent capacity assessment, third-party verification of intent, possible safeguarding referral." },
      escalate: { grade: "partial", title: "Mandatory", points: 100,
        explain: "Escalate to vulnerable customer / safeguarding team urgently." },
    }
  },
];
