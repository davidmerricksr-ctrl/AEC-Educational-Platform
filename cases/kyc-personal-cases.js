// ═══════════════════════════════════════════════════════════════
// KYC PERSONAL CASES — Individual Customer Due Diligence
// 2 Cases — All names are entirely fictional constructions.
// No real person, company, bank, or trust bears these names.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════

const KYC_PERSONAL_CASES = [

  // ══════════════════════════════════════════════════════════════
  // CASE 1: Individual — Sanctioned associate + fraud ring
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
  // CASE 2: Low-risk individual — legitimate, should be approved
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

];
