// ═══════════════════════════════════════════════════════════════
// KYC ANALYST CASES — Customer Due Diligence Investigation
// 5 Cases — All names are entirely fictional constructions.
// No real person, company, bank, or trust bears these names.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════

const KYC_CASES = [

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

  // ══════════════════════════════════════════════════════════════
  // CASE 2: Individual — Sanctioned associate + fraud ring
  // Difficulty: Hard | Correct: Reject
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0847",
    name: "Marzek Goleli-Fynn",
    teaser: "Premier account — documentation inconsistencies, sanctioned associate, active fraud investigation",
    entityType: "Individual",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "reject",
    application: {
      type: "Premier Current Account",
      purpose: "Personal banking and investment income",
      expectedVolume: "$200K–400K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1978-03-22",
      nationality: "Irish / Cypriot (dual)",
    },
    documents: [
      { name: "Passport (Ireland)", status: "provided", flag: false, note: "Valid Irish passport. Photo and details match application." },
      { name: "Passport (Cyprus)", status: "provided", flag: true, note: "Cypriot passport obtained through now-suspended 'golden visa' investment scheme (2019)." },
      { name: "Proof of Address — Utility Bill", status: "provided", flag: true, note: "Address: Limassol, Cyprus. But application states US residency. Inconsistent." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Claims wealth from 'technology company exits.' No company names, dates, or verifiable detail provided." },
      { name: "Bank Reference Letter", status: "provided", flag: true, note: "Reference from Delvaris Mutual Bank, Cyprus — a small institution with no correspondent relationships and limited AML controls." },
      { name: "Tax Residency Certificate", status: "missing", flag: true, note: "Not provided. Claims US tax residency but provides Cyprus address. No US tax documentation." },
      { name: "Employment/Income Verification", status: "missing", flag: true, note: "No employment verification. Self-declared 'independent investor' with no supporting documentation." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "Named in Cypriot regulatory investigation into property fraud ring (2024)", flag: true },
      { type: "Close Associates", result: "Known associate of Radovan Tzemekh — sanctioned by OFAC (2025) for sanctions evasion", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "goleli", label: "Marzek Goleli-Fynn", type: "person", jurisdiction: "Ireland 🇮🇪 / Cyprus 🇨🇾", risk: "critical", x: 230, y: 39,
          info: "Applicant. Dual Irish-Cypriot national. Claims US residency but provides Cyprus address. Self-declared 'independent investor' — no verifiable employment history." },
        { id: "novaquo", label: "Novaquo Ventures Ltd", type: "company", jurisdiction: "Cyprus 🇨🇾", risk: "high", ownership: "100% Owner", parent: "goleli", x: 92, y: 171,
          info: "Cyprus-registered investment company. Goleli-Fynn is sole director and shareholder. Registered 2019 — same year as golden visa passport. No audited accounts filed." },
        { id: "brevmark", label: "Uxillar Holdings Ltd", type: "company", jurisdiction: "BVI 🇻🇬", risk: "high", ownership: "100% Owner", parent: "goleli", x: 368, y: 171,
          info: "BVI entity. Goleli-Fynn listed as sole director. No public filings available. Registered agent: offshore service provider with no physical office." },
        { id: "tzemekh", label: "Radovan Tzemekh", type: "person", jurisdiction: "Cyprus 🇨🇾", risk: "critical", ownership: "Associate", parent: "goleli", x: 92, y: 302,
          info: "⚠️ SANCTIONED by OFAC (2025) for facilitating sanctions evasion through Cypriot shell companies. Known close associate of Goleli-Fynn — co-director of Novaquo until 2024." },
        { id: "delvaris", label: "Delvaris Mutual Bank", type: "bank", jurisdiction: "Cyprus 🇨🇾", risk: "high", ownership: "Banking Rel.", parent: "goleli", x: 368, y: 302,
          info: "Small Cypriot bank that provided reference letter. No major correspondent relationships. Subject of ECB supervisory concerns regarding AML controls (2023)." },
        { id: "property", label: "[Property Fraud Ring]", type: "unknown", jurisdiction: "Cyprus 🇨🇾", risk: "critical", x: 230, y: 407,
          info: "⚠️ Cypriot regulatory investigation (2024) into property fraud scheme involving inflated valuations and money laundering. Goleli-Fynn named as a person of interest." },
      ],
      edges: [
        { from: "goleli", to: "novaquo", label: "100% Owner" },
        { from: "goleli", to: "brevmark", label: "100% Owner" },
        { from: "goleli", to: "tzemekh", label: "Associate" },
        { from: "goleli", to: "delvaris", label: "Reference" },
        { from: "novaquo", to: "tzemekh", label: "Fmr Co-Dir" },
        { from: "tzemekh", to: "property", label: "Subject" },
        { from: "goleli", to: "property", label: "Person of Interest" },
      ]
    },
    flags: [
      "Close associate of OFAC-sanctioned individual (Radovan Tzemekh) — co-directed Novaquo Ventures until 2024.",
      "Named as person of interest in Cypriot property fraud investigation (2024).",
      "Cypriot 'golden visa' passport obtained through suspended investment scheme.",
      "Address inconsistency — claims US residency but provides Cyprus utility bill. No US tax documentation.",
      "Source of wealth unverifiable — vague claims of 'technology exits' with no company names or dates.",
      "Bank reference from Delvaris Mutual Bank — institution with ECB supervisory concerns over AML controls.",
    ],
    feedback: {
      reject: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Rejection is the correct call. The combination of an <strong>OFAC-sanctioned close associate</strong>, active regulatory investigation, unverifiable source of wealth, address inconsistencies, and a golden visa passport obtained through a suspended scheme creates unacceptable risk. Onboarding would expose the institution to significant regulatory and reputational risk.",
        coach: "🎓 <strong>AI Coach:</strong> When a prospective customer is a known associate of a sanctioned person AND is named in an active fraud investigation, that's a clear rejection. Sanctions proximity risk cannot be 'managed' through EDD alone.",
      },
      approve: {
        grade: "bad", title: "Critical CDD Failure", points: -40,
        explain: "Approving this application would be <strong>extremely high-risk</strong>. The applicant is a known associate of an OFAC-sanctioned individual, is named in an active fraud investigation, has unverifiable source of wealth, and presents multiple documentation inconsistencies.",
        coach: "🎓 <strong>AI Coach:</strong> Sanctions proximity is one of the most serious risk factors in CDD. A close associate of a sanctioned person must be treated with extreme caution — approval here could make your institution complicit.",
      },
      edd: {
        grade: "partial", title: "Good Caution, But This Is Beyond EDD", points: 60,
        explain: "EDD is normally the right response to elevated risk, but this case goes beyond what EDD can resolve. The <strong>sanctions proximity</strong> and the <strong>active fraud investigation</strong> represent risks that persist regardless of additional documentation.",
        coach: "🎓 <strong>AI Coach:</strong> Not every high-risk case is an EDD case. When the risk factors include sanctions proximity and active criminal investigations, rejection may be the only defensible option.",
      },
      escalate: {
        grade: "partial", title: "Understandable, But Be Decisive", points: 50,
        explain: "Escalating a case with sanctions proximity is reasonable, but the evidence here supports a clear recommendation to <strong>reject</strong>.",
        coach: "🎓 <strong>AI Coach:</strong> Escalate with conviction. When you see sanctions proximity, adverse media, and documentation failures all in one case, your recommendation should be clear: reject.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 3: Charity / NPO — Diversion of funds risk
  // Difficulty: Medium | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0903",
    name: "Lumivara Foundation",
    teaser: "Charity account application — funds flowing to conflict zones, governance concerns",
    entityType: "Non-Profit Organisation (NPO)",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "NPO Operating Account",
      purpose: "Receiving donations and disbursing humanitarian aid",
      expectedVolume: "$800K–1.2M monthly",
      jurisdiction: "Netherlands",
      incorporationDate: "2021-11-03",
      registeredAgent: "Self-registered via KvK (Chamber of Commerce)",
    },
    documents: [
      { name: "KvK Registration Extract", status: "provided", flag: false, note: "Dutch Chamber of Commerce registration. Foundation (Stichting). Active since 2021." },
      { name: "Articles of Association", status: "provided", flag: true, note: "Board of 3 directors. No independent oversight committee. Single signatory authority for transactions up to €500K." },
      { name: "Proof of Address", status: "provided", flag: false, note: "Registered office in Amsterdam. Shared co-working space but legitimate NPO address." },
      { name: "Donor List / Funding Sources", status: "incomplete", flag: true, note: "Lists only 2 donors — a corporate CSR fund and a private individual. Names provided but no supporting verification or due diligence on donors." },
      { name: "Annual Report / Financial Statements", status: "provided", flag: true, note: "Self-prepared financial statements (not independently audited). Revenue €6.2M but only €1.8M documented as aid disbursement. €4.4M gap unexplained." },
      { name: "Beneficiary Country List", status: "provided", flag: true, note: "Aid disbursed to Syria, Yemen, Somalia, and South Sudan — all FATF high-risk / conflict jurisdictions." },
      { name: "UBO Declaration", status: "provided", flag: true, note: "Lists board chair Kasparek Zilnova as UBO. Zilnova has no prior NPO experience — previously ran import/export business." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No direct results for Lumivara. Kasparek Zilnova's former business subject to customs investigation (2020, resolved).", flag: true },
      { type: "Jurisdiction Risk", result: "Beneficiary countries: Syria (sanctioned), Yemen (conflict), Somalia (high-risk), South Sudan (high-risk)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "lumivara", label: "Lumivara Foundation", type: "company", jurisdiction: "Netherlands 🇳🇱", risk: "high", x: 230, y: 39,
          info: "Dutch registered NPO (Stichting). Revenue €6.2M but only €1.8M documented as aid. €4.4M spending gap. No independent audit." },
        { id: "zilnova", label: "Kasparek Zilnova", type: "person", jurisdiction: "Czech Republic 🇨🇿", risk: "medium", ownership: "Board Chair", parent: "lumivara", x: 92, y: 158,
          info: "Board chair and UBO. Czech national. No prior NPO experience. Previously ran Zilnova Import-Export s.r.o. (customs investigation 2020, resolved). Single signatory for transactions up to €500K." },
        { id: "board2", label: "Priti Nandeshwar", type: "person", jurisdiction: "India 🇮🇳", risk: "low", ownership: "Board Member", parent: "lumivara", x: 368, y: 158,
          info: "Board member. Indian national resident in Netherlands. Clean screening. Works part-time as project coordinator. Limited financial oversight role." },
        { id: "donor1", label: "Grellith Industries CSR", type: "company", jurisdiction: "Germany 🇩🇪", risk: "low", ownership: "Donor", parent: "lumivara", x: 115, y: 276,
          info: "German corporate donor. CSR programme donates €200K annually. Legitimate corporation with public filings." },
        { id: "donor2", label: "Unnamed Private Donor", type: "unknown", jurisdiction: "UAE 🇦🇪", risk: "high", ownership: "Donor (~80%)", parent: "lumivara", x: 345, y: 276,
          info: "⚠️ A single private individual provides approximately 80% of all funding (~€5M). Name given as 'H. Al-Qenthuri' — no independent verification performed. UAE-based. Donor due diligence not completed." },
        { id: "conflict", label: "Conflict Zones", type: "unknown", jurisdiction: "Syria/Yemen/Somalia", risk: "critical", x: 230, y: 387,
          info: "⚠️ Aid disbursed to Syria (sanctioned), Yemen, Somalia, South Sudan. All FATF high-risk. Specific beneficiary organisations and end-use not documented." },
      ],
      edges: [
        { from: "lumivara", to: "zilnova", label: "Chair" },
        { from: "lumivara", to: "board2", label: "Board" },
        { from: "donor1", to: "lumivara", label: "€200K/yr" },
        { from: "donor2", to: "lumivara", label: "~€5M/yr" },
        { from: "lumivara", to: "conflict", label: "Aid Disbursement" },
      ]
    },
    flags: [
      "Revenue €6.2M but only €1.8M documented as aid disbursement — €4.4M gap unexplained in unaudited financials.",
      "Single private donor (UAE-based) provides ~80% of all funding. No due diligence on donor. Concentration risk.",
      "Aid disbursed to Syria (sanctioned), Yemen, Somalia, South Sudan — all conflict / FATF high-risk jurisdictions.",
      "Board chair Kasparek Zilnova has no NPO experience and a prior customs investigation on his import/export business.",
      "Single signatory authority up to €500K. No independent oversight committee. Weak governance controls.",
      "Specific beneficiary organisations receiving aid not identified — end-use of funds not documented.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Enhanced Due Diligence is exactly right for this NPO. Charities operating in <strong>conflict zones</strong> and <strong>sanctioned jurisdictions</strong> are high-risk for terrorist financing and diversion of funds. The €4.4M documentation gap, the unverified major donor, weak governance, and the chair's background all require thorough EDD before any onboarding decision. FATF Recommendation 8 specifically addresses NPO vulnerabilities.",
        coach: "🎓 <strong>AI Coach:</strong> NPOs are not automatically suspicious, but this one has multiple risk factors: conflict-zone operations, unverified major donor, financial gaps, and weak governance. EDD should include: audited financials, donor due diligence on the UAE individual, detailed aid distribution records, and an independent governance review.",
      },
      approve: {
        grade: "bad", title: "Significant Risk Missed", points: -40,
        explain: "Approving without resolving the critical gaps would expose the bank to <strong>terrorist financing risk</strong>. The €4.4M financial gap, the unverified UAE donor providing 80% of funds, and operations in sanctioned/conflict zones require resolution before onboarding.",
        coach: "🎓 <strong>AI Coach:</strong> NPOs operating in conflict zones are specifically highlighted by FATF as vulnerable to abuse. The financial documentation gap alone should prevent approval until resolved.",
      },
      reject: {
        grade: "partial", title: "Cautious, But Premature", points: 60,
        explain: "While the red flags are serious, <strong>outright rejection without EDD may be premature</strong>. Legitimate charities do operate in conflict zones, and the issues identified — while concerning — could potentially be resolved through enhanced due diligence. The foundation should be given the chance to provide audited financials, donor verification, and detailed aid records.",
        coach: "🎓 <strong>AI Coach:</strong> De-risking legitimate NPOs is a known problem. FATF Recommendation 8 emphasises a risk-based approach, not blanket rejection. Request the information first — reject only if they can't provide it.",
      },
      escalate: {
        grade: "partial", title: "Reasonable, But Recommend EDD", points: 70,
        explain: "Escalating is appropriate given the complexity, but you should escalate with a clear <strong>recommendation for EDD</strong>. The case needs senior review, but your analysis should drive the next steps.",
        coach: "🎓 <strong>AI Coach:</strong> NPO cases with conflict-zone exposure often benefit from senior input. But always include your recommendation — here, EDD is the proportionate response.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 4: Low-risk individual — legitimate, should be approved
  // Difficulty: Easy | Correct: Approve
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0914",
    name: "Eleri Mostyn-Hale",
    teaser: "Standard personal account — employed professional, clean screening, full documentation",
    entityType: "Individual",
    riskLevel: "low",
    riskLabel: "Low",
    correct: "approve",
    application: {
      type: "Personal Current Account",
      purpose: "Salary payments and personal banking",
      expectedVolume: "$8K–12K monthly",
      jurisdiction: "United Kingdom",
      dateOfBirth: "1991-07-15",
      nationality: "British",
    },
    documents: [
      { name: "Passport (UK)", status: "provided", flag: false, note: "Valid UK passport. Photo matches. Expiry 2031." },
      { name: "Proof of Address — Council Tax Bill", status: "provided", flag: false, note: "Council tax bill, dated within 3 months. Address in Bristol matches application." },
      { name: "Employment Verification Letter", status: "provided", flag: false, note: "Employed as Senior Data Analyst at Crosfield Pharmaceuticals Ltd. Confirmed by HR letter dated 2 weeks ago." },
      { name: "Payslip (Most Recent)", status: "provided", flag: false, note: "Monthly net pay £6,200. Consistent with declared income. PAYE deductions visible." },
      { name: "Bank Statement (Previous Provider)", status: "provided", flag: false, note: "3 months of statements from prior bank. Salary credits match. Normal spending patterns. No unusual activity." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No results", flag: false },
      { type: "Jurisdiction Risk", result: "UK — low risk", flag: false },
    ],
    hierarchy: {
      nodes: [
        { id: "mostyn", label: "Eleri Mostyn-Hale", type: "person", jurisdiction: "UK 🇬🇧", risk: "low", x: 230, y: 66,
          info: "Applicant. British national, age 34. Senior Data Analyst. Employed, stable income. No adverse information. Clean screening results across all databases." },
        { id: "employer", label: "Crosfield Pharma Ltd", type: "company", jurisdiction: "UK 🇬🇧", risk: "low", ownership: "Employer", parent: "mostyn", x: 115, y: 210,
          info: "UK-based pharmaceutical company. Established 2008. 450+ employees. Publicly available accounts. Legitimate employer — salary payments verified." },
        { id: "prevbank", label: "Previous Bank Account", type: "bank", jurisdiction: "UK 🇬🇧", risk: "low", ownership: "Prior Banking", parent: "mostyn", x: 345, y: 210,
          info: "3 months of statements provided. Regular salary credits, normal spending. No suspicious transactions. Account in good standing." },
      ],
      edges: [
        { from: "mostyn", to: "employer", label: "Employed" },
        { from: "mostyn", to: "prevbank", label: "Prior Bank" },
      ]
    },
    flags: [],
    feedback: {
      approve: {
        grade: "excellent", title: "Correct — Approved!", points: 120,
        explain: "This is a straightforward <strong>low-risk onboarding</strong>. Eleri is a UK national, employed professional with verifiable income, clean screening across all databases, full documentation provided, and consistent banking history. Standard CDD is sufficient. No risk factors requiring enhanced measures.",
        coach: "🎓 <strong>AI Coach:</strong> Not every case is suspicious. Recognising genuinely low-risk customers is just as important as catching high-risk ones. Applying EDD or rejecting a clean applicant wastes resources and damages customer experience.",
      },
      reject: {
        grade: "bad", title: "Unjustified Rejection", points: -30,
        explain: "There is <strong>no basis for rejection</strong>. All documentation is complete and verified. Screening is clear. Income is consistent with expected volumes. Rejecting a legitimate low-risk customer without cause exposes the bank to discrimination complaints and regulatory criticism for de-risking.",
        coach: "🎓 <strong>AI Coach:</strong> The risk-based approach works both ways. Low-risk customers should be onboarded efficiently. Unjustified rejection is a compliance failure, not a cautious decision.",
      },
      edd: {
        grade: "partial", title: "Disproportionate Response", points: 30,
        explain: "There is no risk factor that warrants Enhanced Due Diligence. All documentation is complete, screening is clean, and the customer profile is straightforward. <strong>Applying EDD to a low-risk customer</strong> is disproportionate and inconsistent with the risk-based approach.",
        coach: "🎓 <strong>AI Coach:</strong> EDD consumes significant analyst time. Reserve it for cases with genuine risk indicators. Standard CDD is the appropriate measure here.",
      },
      escalate: {
        grade: "partial", title: "No Need to Escalate", points: 40,
        explain: "This is a routine low-risk application. There is nothing ambiguous requiring senior input. <strong>You have the authority and information to approve</strong> this directly.",
        coach: "🎓 <strong>AI Coach:</strong> Build confidence in your own assessments. Escalating routine cases unnecessarily slows the process and signals uncertainty that isn't warranted by the evidence.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 5: Crypto exchange — regulatory grey area
  // Difficulty: Hard | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0929",
    name: "Vextrion Digital Assets OÜ",
    teaser: "Crypto exchange corporate account — Estonian licence, offshore ownership, high volumes",
    entityType: "Private Limited Company (OÜ)",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Corporate Operating Account",
      purpose: "Fiat on/off ramp for digital asset exchange operations",
      expectedVolume: "$15–25M monthly",
      jurisdiction: "Estonia",
      incorporationDate: "2022-03-28",
      registeredAgent: "Baltvern Legal OÜ",
    },
    documents: [
      { name: "Estonian Business Registry Extract", status: "provided", flag: false, note: "OÜ registered in Tallinn. Active since 2022. Share capital €2,500." },
      { name: "Estonian VASP Licence", status: "provided", flag: true, note: "Virtual Asset Service Provider licence obtained under old regime (2022). Estonia revoked 80%+ of VASP licences in 2023 crackdown — this one survived but has not been re-assessed under new rules." },
      { name: "Proof of Registered Address", status: "provided", flag: true, note: "Registered address in Tallinn. No employees at location — mail forwarding service. Operations appear to run from Dubai." },
      { name: "Ownership Structure Chart", status: "provided", flag: true, note: "100% owned by Nexvault Holding Ltd (Seychelles). UBO listed as Petronikh Gharzadze (Georgian national, Dubai resident)." },
      { name: "Petronikh Gharzadze — Passport", status: "provided", flag: false, note: "Georgian passport. Photo matches. Valid until 2029." },
      { name: "Source of Funds — Business Revenue", status: "provided", flag: true, note: "Claims revenue from trading fees and spread. $180M annual revenue claimed — but no audited financials provided. Self-prepared P&L only." },
      { name: "AML/KYC Policy Document", status: "provided", flag: true, note: "Generic 8-page AML policy. Does not reference travel rule, chain analytics, or sanctions screening on wallets. Appears to be a template." },
      { name: "Audited Financial Statements", status: "missing", flag: true, note: "Not provided. Claims 'audit in progress' — but company is 3 years old with no prior audit." },
    ],
    screening: [
      { type: "Sanctions", result: "No direct match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "Vextrion referenced in crypto industry blog alleging facilitation of mixer transactions (2024, unverified)", flag: true },
      { type: "Jurisdiction Risk", result: "Estonia (medium, post-crackdown) + Seychelles (high) + Dubai/UAE (medium-high for crypto)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "vextrion", label: "Vextrion Digital OÜ", type: "company", jurisdiction: "Estonia 🇪🇪", risk: "high", x: 230, y: 39,
          info: "Estonian-registered VASP. Crypto exchange seeking fiat banking. $15–25M/month expected volume. VASP licence from old regime — not re-assessed. No employees in Estonia." },
        { id: "nexvault", label: "Nexvault Holding Ltd", type: "company", jurisdiction: "Seychelles 🇸🇨", risk: "high", ownership: "100%", parent: "vextrion", x: 92, y: 171,
          info: "Seychelles holding company. 100% parent of Vextrion. Seychelles has limited corporate transparency — ownership information not publicly verifiable." },
        { id: "gharzadze", label: "Petronikh Gharzadze", type: "person", jurisdiction: "Georgia 🇬🇪 / Dubai 🇦🇪", risk: "medium", ownership: "100% UBO", parent: "nexvault", x: 92, y: 302,
          info: "Georgian national, Dubai resident. Claims to be sole UBO via Nexvault. No prior crypto industry track record found. Previous career unclear — LinkedIn shows 'entrepreneur' with no specifics." },
        { id: "operations", label: "Dubai Operations", type: "unknown", jurisdiction: "UAE 🇦🇪", risk: "medium", ownership: "Operational HQ", parent: "vextrion", x: 368, y: 171,
          info: "Actual operations run from Dubai despite Estonian registration. Dubai VARA (Virtual Assets Regulatory Authority) licence not obtained. Operating in regulatory gap." },
        { id: "users", label: "Exchange Users (Global)", type: "unknown", jurisdiction: "Multiple", risk: "high", x: 368, y: 302,
          info: "⚠️ Exchange serves global users including high-risk jurisdictions. KYC policy is a generic template — no evidence of robust sanctions screening, travel rule compliance, or chain analytics on customer wallets." },
        { id: "mixer", label: "[Mixer Allegations]", type: "unknown", jurisdiction: "Unknown", risk: "critical", x: 230, y: 394,
          info: "⚠️ Unverified industry blog post (2024) alleges Vextrion facilitated mixer/tumbler transactions. Not confirmed by regulators — but indicates potential typology for obfuscating crypto origins." },
      ],
      edges: [
        { from: "vextrion", to: "nexvault", label: "100%" },
        { from: "nexvault", to: "gharzadze", label: "100% UBO" },
        { from: "vextrion", to: "operations", label: "Ops Base" },
        { from: "vextrion", to: "users", label: "Customers" },
        { from: "users", to: "mixer", label: "Alleged" },
      ]
    },
    flags: [
      "VASP licence obtained under Estonia's old regime (pre-2023 crackdown). 80% of licences were revoked — this one has not been re-assessed under new requirements.",
      "Registered in Estonia but no employees or operations there — actual operations run from Dubai without a VARA licence.",
      "$15–25M monthly expected volume but no audited financial statements in 3 years of operation. Self-prepared P&L only.",
      "100% owned through Seychelles holding company — opacity jurisdiction with limited corporate transparency.",
      "AML/KYC policy is a generic template — no travel rule procedures, no chain analytics, no wallet-level sanctions screening.",
      "Unverified adverse media alleging facilitation of mixer/tumbler transactions.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD is exactly right for a <strong>crypto exchange seeking fiat banking</strong>. This is a high-risk sector with specific regulatory expectations. You need: audited financials, independent assessment of their AML programme (not just a template), verification of the VASP licence status, evidence of chain analytics and travel rule compliance, and clarity on the Dubai operations regulatory status. FATF's updated guidance on VASPs (Recommendation 15) applies directly.",
        coach: "🎓 <strong>AI Coach:</strong> Crypto exchanges are inherently higher-risk banking clients. The key question is whether their AML controls are robust enough to manage the risk they bring. A template policy and no audited financials suggest they're not there yet — EDD will determine if the gap can be closed.",
      },
      approve: {
        grade: "bad", title: "Unacceptable Risk", points: -40,
        explain: "Approving a crypto exchange with <strong>no audited financials, a template AML policy, an unverified VASP licence, and Seychelles ownership</strong> would expose the bank to severe ML/TF risk. This client needs extensive due diligence before any onboarding consideration.",
        coach: "🎓 <strong>AI Coach:</strong> Fiat banking for crypto exchanges is one of the highest-risk relationships a bank can take on. Without evidence of robust AML controls, you're importing their risk onto your institution's books.",
      },
      reject: {
        grade: "partial", title: "Defensible But Consider EDD First", points: 70,
        explain: "The red flags are serious, and many banks do decline crypto exchange relationships outright. However, <strong>the risk-based approach favours EDD before a final decision</strong>. If Vextrion can provide audited financials, a genuine AML programme with chain analytics, and regulatory clarity, the relationship might be manageable under enhanced monitoring.",
        coach: "🎓 <strong>AI Coach:</strong> Blanket rejection of all crypto clients is a known de-risking problem that regulators discourage. Apply EDD — if the client can't meet the bar, then reject with a documented rationale.",
      },
      escalate: {
        grade: "partial", title: "Good Instinct", points: 70,
        explain: "Crypto exchange onboarding decisions often <strong>do require senior or committee-level approval</strong>. Escalating is sensible, but your recommendation should be clear: EDD is required before any decision.",
        coach: "🎓 <strong>AI Coach:</strong> Many banks have specific policies requiring senior approval for VASP/crypto relationships. Escalating with an EDD recommendation shows good judgement.",
      }
    }
  },
];
