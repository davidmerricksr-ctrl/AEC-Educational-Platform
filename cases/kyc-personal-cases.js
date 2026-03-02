// ═══════════════════════════════════════════════════════════════
// KYC PERSONAL CASES — Individual Customer Due Diligence
// 12 Cases — All names are entirely fictional constructions.
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


  // ══════════════════════════════════════════════════════════════
  // CASE 3: Crypto Wealth — Opaque Source of Funds
  // Difficulty: Medium | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0927",
    name: "Darren Kwok-Elliston",
    teaser: "High-net-worth account — self-declared crypto wealth of $12M, limited documentation trail, opaque source of funds requiring enhanced verification",
    entityType: "Individual",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Private Banking — Premier Account",
      purpose: "Wealth management and property investment",
      expectedVolume: "$500K–1.5M monthly",
      jurisdiction: "United States",
      dateOfBirth: "1994-06-11",
      nationality: "American / Singaporean (dual)",
    },
    documents: [
      { name: "Passport (US)", status: "provided", flag: false, note: "Valid US passport. Photo and biometrics match. Issued 2022." },
      { name: "Passport (Singapore)", status: "provided", flag: false, note: "Valid Singapore passport. Consistent details." },
      { name: "Proof of Address — Lease Agreement", status: "provided", flag: false, note: "Lease for apartment in San Francisco. 12-month term, current." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Declares $12M from 'early cryptocurrency investments (2016-2021).' No exchange records, wallet addresses, or tax filings provided. Claims 'decentralised wallets' make documentation difficult." },
      { name: "Tax Returns (US)", status: "partial", flag: true, note: "2024 return provided showing $180K in capital gains. But claimed $12M wealth is not reflected — either undeclared or from prior years. 2021-2023 returns not provided." },
      { name: "Bank Statements", status: "provided", flag: true, note: "6 months of statements from a neobank. Shows $2.1M balance — but no clear connection to the claimed $12M. Large inflows from 3 different crypto exchanges." },
      { name: "Crypto Exchange Statements", status: "partial", flag: true, note: "Coinbase statement showing $800K in withdrawals. But claimed $12M in crypto wealth should produce more comprehensive records. Other exchange records not provided." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "Named in TechCrunch article about NFT project that collapsed (2022) — investors lost $4M. No criminal charges.", flag: true },
      { type: "Jurisdiction Risk", result: "US/Singapore — both low risk", flag: false },
    ],
    hierarchy: {
      nodes: [
        { id: "kwok", label: "Darren Kwok-Elliston", type: "person", jurisdiction: "US 🇺🇸 / Singapore 🇸🇬", risk: "high", x: 230, y: 39,
          info: "Applicant. 31-year-old dual national. Claims $12M crypto wealth from early Bitcoin and Ethereum investments. Limited traditional documentation. NFT project collapse in 2022 generated adverse media but no criminal proceedings." },
        { id: "neobank", label: "Neobank Account", type: "bank", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Banking", parent: "kwok", x: 80, y: 171,
          info: "Current banking relationship. $2.1M balance. Large inflows from Coinbase, Kraken, and Gemini. Legitimate crypto-to-fiat conversion — but only accounts for a fraction of claimed $12M wealth." },
        { id: "coinbase", label: "Coinbase Account", type: "company", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Exchange", parent: "kwok", x: 380, y: 171,
          info: "Regulated US crypto exchange. Partial statement provided showing $800K in withdrawals. Coinbase is FinCEN-registered MSB with KYC/AML controls. However, only one of multiple claimed exchange relationships documented." },
        { id: "nft", label: "[NFT Project Collapse]", type: "unknown", jurisdiction: "US 🇺🇸", risk: "medium", x: 230, y: 290,
          info: "2022 NFT project 'MetaVault Genesis' raised $4M from investors and collapsed. Kwok-Elliston was co-founder. TechCrunch article describes investor losses. No SEC enforcement action or criminal charges filed. Could indicate poor judgment or potential fraud — ambiguous." },
      ],
      edges: [
        { from: "kwok", to: "neobank", label: "Current Bank" },
        { from: "kwok", to: "coinbase", label: "Exchange Acct" },
        { from: "kwok", to: "nft", label: "Co-Founder" },
      ]
    },
    flags: [
      "Source of wealth largely unverifiable: Claims $12M from 'early crypto investments' but provided documentation accounts for only ~$2.9M ($2.1M bank balance + $800K Coinbase withdrawals). The remaining ~$9M is undocumented.",
      "Tax return gap: Only 2024 return provided ($180K capital gains). If $12M was realized in 2016-2021, prior year returns showing the dispositions should exist. Missing years 2021-2023 are the most relevant period.",
      "Adverse media: Co-founder of MetaVault Genesis NFT project that collapsed in 2022 with $4M in investor losses. No charges filed, but raises integrity questions — was it a failed venture or a rug pull?",
      "Claims 'decentralised wallets make documentation difficult' — while technically true for self-custody wallets, any on-ramp to fiat (exchanges) would have records. The partial documentation suggests selective disclosure.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD is the correct response. Kwok-Elliston's application has <strong>genuine potential</strong> — early crypto investors do exist and can legitimately hold significant wealth — but the documentation gap is too large for standard CDD. You need: (1) complete crypto exchange records from ALL platforms (not just Coinbase), (2) on-chain wallet verification through a blockchain analytics provider, (3) US tax returns for 2021-2023 showing crypto dispositions, (4) explanation and documentation regarding the MetaVault Genesis collapse. This is an EDD case, not a rejection, because the <strong>risk factors are addressable with additional documentation</strong>. If he can produce complete records showing a legitimate accumulation of crypto wealth, this could become an approvable high-value client.",
        coach: "🎓 <strong>AI Coach:</strong> Crypto wealth cases are the modern equivalent of 'unexplained cash.' The wealth might be completely legitimate — many early Bitcoin buyers became multimillionaires. But 'trust me, it's in decentralised wallets' is not documentation. EDD for crypto clients should include: complete exchange records, on-chain analytics (Chainalysis or TRM can verify wallet balances and trace history), and tax documentation. If the wealth is real, this evidence exists.",
      },
      approve: {
        grade: "bad", title: "Insufficient Due Diligence", points: -30,
        explain: "Approving with only $2.9M of a claimed $12M documented would be <strong>inadequate CDD</strong>. The source-of-wealth gap, adverse media, and incomplete tax records require resolution before onboarding. Private banking regulators specifically scrutinise crypto-source wealth for adequacy of verification.",
        coach: "🎓 <strong>AI Coach:</strong> Private banking relationships require the highest standard of source-of-wealth verification. 'I got rich from crypto' without complete records is not sufficient for a premier account.",
      },
      reject: {
        grade: "partial", title: "Premature — EDD First", points: 50,
        explain: "Rejection is premature. The risk factors here are <strong>addressable through EDD</strong>. No sanctions issues, no criminal charges, and crypto wealth is a legitimate (if hard-to-document) source. The NFT collapse is concerning but ambiguous. <strong>Request the additional documentation before deciding.</strong> If he can't or won't provide it, then rejection is appropriate.",
        coach: "🎓 <strong>AI Coach:</strong> Don't reject what you can investigate. If the customer provides complete exchange records, on-chain verification, and tax returns, this could be a legitimate high-value relationship. Reject only after EDD fails.",
      },
      escalate: {
        grade: "partial", title: "Good Caution, But You Can Handle This", points: 40,
        explain: "This is a standard high-risk EDD case — crypto wealth with documentation gaps. You have the authority and framework to request enhanced documentation. <strong>Escalation isn't needed yet</strong> — initiate EDD, and escalate only if the results are ambiguous.",
        coach: "🎓 <strong>AI Coach:</strong> Build confidence in managing crypto wealth cases — they're increasingly common. The EDD framework for crypto clients is well-established: exchange records, on-chain analytics, tax returns. Apply it.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 4: Student with Trust Fund — Legitimate
  // Difficulty: Easy | Correct: Approve
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0938",
    name: "Ananya Mehta-Krishnan",
    teaser: "Student account — trust fund beneficiary with clear documentation, family wealth verified, clean screening",
    entityType: "Individual",
    riskLevel: "low",
    riskLabel: "Low",
    correct: "approve",
    application: {
      type: "Personal Current Account + Savings",
      purpose: "Living expenses during graduate studies, trust distributions",
      expectedVolume: "$5K–15K monthly",
      jurisdiction: "United States",
      dateOfBirth: "2000-09-03",
      nationality: "Indian (US F-1 visa)",
    },
    documents: [
      { name: "Passport (India)", status: "provided", flag: false, note: "Valid Indian passport. Photo and biometrics match. Valid US F-1 student visa." },
      { name: "Proof of Address — University Housing", status: "provided", flag: false, note: "MIT graduate housing assignment letter. Dated within 30 days." },
      { name: "University Enrollment Verification", status: "provided", flag: false, note: "MIT Registrar confirmation. PhD candidate in Computer Science. Full scholarship." },
      { name: "Trust Documentation", status: "provided", flag: false, note: "Mehta Family Trust (established 2005). Trustee: ICICI Bank Wealth Management. Ananya is named beneficiary for educational expenses. Monthly distribution of ₹800K (~$9,500). Trust funded by family textile business — audited accounts provided." },
      { name: "Source of Wealth — Family", status: "provided", flag: false, note: "Krishnan Textiles Pvt Ltd — established 1982, family-owned, 2,200 employees, ₹4.2B annual revenue (~$50M). Audited financials provided. Legitimate source of family wealth." },
      { name: "Bank Statement (India)", status: "provided", flag: false, note: "3 months ICICI statements showing regular trust distributions. Normal spending pattern for a student." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No results", flag: false },
      { type: "Jurisdiction Risk", result: "India — medium risk (standard for Indian nationals)", flag: false },
    ],
    hierarchy: {
      nodes: [
        { id: "ananya", label: "Ananya Mehta-Krishnan", type: "person", jurisdiction: "India 🇮🇳 / US 🇺🇸", risk: "low", x: 230, y: 39,
          info: "Applicant. 25-year-old Indian national. MIT PhD candidate on F-1 visa. Beneficiary of family trust funded by established textile business. Clean screening. Straightforward student account." },
        { id: "trust", label: "Mehta Family Trust", type: "trust", jurisdiction: "India 🇮🇳", risk: "low", ownership: "Beneficiary", parent: "ananya", x: 80, y: 180,
          info: "✅ Family trust established 2005. Trustee: ICICI Bank Wealth Management (India's largest private bank). Funded by Krishnan Textiles profits. Monthly educational distributions of ~$9,500. Well-documented, professionally managed." },
        { id: "textiles", label: "Krishnan Textiles Pvt", type: "company", jurisdiction: "India 🇮🇳", risk: "low", ownership: "Family Business", parent: "trust", x: 380, y: 180,
          info: "✅ Family textile company. Established 1982 — 43 years of operation. 2,200 employees. ₹4.2B annual revenue (~$50M). Audited financials provided. Legitimate source of family wealth." },
      ],
      edges: [
        { from: "ananya", to: "trust", label: "Beneficiary" },
        { from: "trust", to: "textiles", label: "Funded by" },
      ]
    },
    flags: [],
    feedback: {
      approve: {
        grade: "excellent", title: "Correct — Approved!", points: 120,
        explain: "This is a straightforward <strong>low-risk onboarding</strong>. Ananya is a verified MIT PhD student on a valid F-1 visa, beneficiary of a professionally-managed family trust (ICICI Bank as trustee), funded by a 43-year-old family textile business with audited financials. All documentation is complete, screening is clean, and expected volumes ($5-15K/month) are consistent with trust distributions and student living expenses. Standard CDD is sufficient.",
        coach: "🎓 <strong>AI Coach:</strong> International students with family trust funding are a common and usually straightforward onboarding scenario. The key checks: (1) valid visa status, (2) trust documentation with a reputable trustee, (3) verifiable source of family wealth, (4) clean screening. All four are satisfied here. India's 'medium' jurisdiction risk rating for the country doesn't automatically mean the customer is medium risk — individual risk assessment considers the full picture.",
      },
      reject: {
        grade: "bad", title: "Unjustified Rejection", points: -30,
        explain: "There is <strong>no basis for rejection</strong>. Rejecting an international student with complete documentation, clean screening, and a verified family trust would raise serious concerns about discriminatory de-risking practices. Regulators have specifically warned banks against blanket rejection of international students or customers from particular nationalities.",
        coach: "🎓 <strong>AI Coach:</strong> India's medium jurisdiction risk rating does NOT mean all Indian nationals are medium or high risk. Risk-based approach means assessing the individual — not applying country-level labels as blanket rejections. That approach is both bad compliance and potentially discriminatory.",
      },
      edd: {
        grade: "partial", title: "Disproportionate Response", points: 30,
        explain: "There are no risk indicators warranting EDD. The trust is professionally managed by India's largest private bank, the family business has 43 years of audited history, and screening is clean. <strong>Standard CDD is the appropriate measure.</strong> Applying EDD to every international student with family wealth is disproportionate.",
        coach: "🎓 <strong>AI Coach:</strong> EDD should be triggered by specific risk indicators, not by nationality or source country alone. This applicant has better documentation than most domestic customers.",
      },
      escalate: {
        grade: "partial", title: "No Need — Approve Directly", points: 40,
        explain: "This is a routine low-risk application. You have complete documentation, clean screening, and a verified trust structure. <strong>Approve directly</strong> — escalation wastes time on a case with a clear answer.",
        coach: "🎓 <strong>AI Coach:</strong> If you escalate every international student account, you'll overwhelm your senior team. Reserve escalation for genuine ambiguity.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 5: Former PEP — Clean But Requires EDD
  // Difficulty: Medium | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0946",
    name: "Catalina Restrepo-Vargas",
    teaser: "Former PEP — ex-Deputy Minister of Trade (Colombia), now private sector consultant, clean screening but PEP status mandates enhanced due diligence",
    entityType: "Individual",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Personal Current Account + Investment Account",
      purpose: "Consulting income and personal investments",
      expectedVolume: "$30K–80K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1975-11-28",
      nationality: "Colombian (US permanent resident)",
    },
    documents: [
      { name: "Passport (Colombia)", status: "provided", flag: false, note: "Valid Colombian passport. Photo matches. US permanent resident card also provided." },
      { name: "US Green Card", status: "provided", flag: false, note: "Permanent Resident Card (EB-1 category — extraordinary ability). Valid. Issued 2023." },
      { name: "Proof of Address — Mortgage Statement", status: "provided", flag: false, note: "Mortgage on residence in McLean, Virginia. $1.2M property. Mortgage with Wells Fargo — current on payments." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Declares wealth from: (1) government salary savings during 8-year career, (2) family coffee plantation in Caldas, (3) consulting fees since leaving government. Declaration is detailed but requires independent verification given PEP status." },
      { name: "Consulting Contracts", status: "provided", flag: false, note: "Three active consulting contracts: World Bank ($15K/month), IDB ($12K/month), McKinsey Latin America practice ($20K/month). Verifiable and consistent with expected volumes." },
      { name: "Tax Returns (US)", status: "provided", flag: false, note: "2023 and 2024 US returns. $380K and $410K gross income respectively. Consistent with consulting contracts. Properly filed." },
      { name: "Colombian Tax Clearance", status: "provided", flag: false, note: "DIAN (Colombian tax authority) clearance certificate. No outstanding obligations. Asset declaration on file." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "MATCH — Former Deputy Minister of Trade and Tourism, Colombia (2015-2023). Current PEP status: Former PEP (left office 2023).", flag: true },
      { type: "Adverse Media", result: "No adverse results. Positive media: quoted as trade policy expert in Financial Times and Americas Quarterly.", flag: false },
      { type: "Jurisdiction Risk", result: "Colombia — high risk (FATF increased monitoring list until 2024)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "catalina", label: "Catalina Restrepo-Vargas", type: "person", jurisdiction: "Colombia 🇨🇴 / US 🇺🇸", risk: "high", x: 230, y: 39,
          info: "Applicant. Former PEP — Deputy Minister of Trade and Tourism, Colombia (2015-2023). Now US permanent resident. Private sector consultant with World Bank, IDB, and McKinsey contracts. Clean screening — no adverse media, no sanctions. PEP status mandates EDD regardless." },
        { id: "consulting", label: "Consulting Income", type: "company", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Income Source", parent: "catalina", x: 80, y: 180,
          info: "✅ Three verifiable consulting contracts totaling ~$47K/month. World Bank and IDB are international organisations with their own due diligence. McKinsey is a global firm. Income is legitimate and well-documented." },
        { id: "plantation", label: "Restrepo Coffee Estate", type: "company", jurisdiction: "Colombia 🇨🇴", risk: "medium", ownership: "Family Asset", parent: "catalina", x: 380, y: 180,
          info: "Family coffee plantation in Caldas department. Established 1960s — multi-generational. Produces specialty coffee. Colombian agricultural registry confirms ownership. Legitimate family asset but requires SOW verification as part of PEP EDD." },
        { id: "govt", label: "[Former Government Role]", type: "unknown", jurisdiction: "Colombia 🇨🇴", risk: "high", x: 230, y: 300,
          info: "Deputy Minister of Trade and Tourism (2015-2023). Senior government role with access to trade policy, government contracts, and public procurement. FATF Recommendation 12 requires EDD for PEPs regardless of other risk indicators. 'Former PEP' status typically persists for minimum 2-5 years after leaving office." },
      ],
      edges: [
        { from: "catalina", to: "consulting", label: "Income" },
        { from: "catalina", to: "plantation", label: "Family" },
        { from: "catalina", to: "govt", label: "Former Role" },
      ]
    },
    flags: [
      "PEP STATUS: Former Deputy Minister of Trade and Tourism, Colombia (2015-2023). FATF Recommendation 12 mandates Enhanced Due Diligence for all PEPs, including former PEPs for a reasonable period after leaving office (typically 2-5 years). Left office in 2023 — EDD requirement is active.",
      "Colombia jurisdiction risk: Colombia was on the FATF increased monitoring ('grey') list until 2024. While now removed, the recent history and the applicant's senior government role during that period require careful assessment.",
      "Source of wealth requires independent verification: The declaration is detailed (government salary, family plantation, consulting), but PEP EDD standards require independent verification of each source — not just self-declaration.",
      "No adverse indicators: Clean adverse media screening. Positive media presence as trade policy expert. No sanctions matches. US tax compliance confirmed. This is a PEP case where the RISK FACTOR IS THE STATUS, not the behavior.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD is the correct and mandatory response. Under <strong>FATF Recommendation 12</strong> and <strong>31 CFR 1010.620</strong>, Enhanced Due Diligence is <strong>legally required</strong> for Politically Exposed Persons, including former PEPs for a reasonable period after leaving office. Restrepo-Vargas left office in 2023 — well within the EDD window.<br><br>Critically, this is a case where <strong>EDD is required by PEP status, not by suspicious indicators</strong>. The applicant has clean screening, legitimate consulting income, verifiable family wealth, and full tax compliance. EDD here means: (1) independent verification of source of wealth (confirm coffee plantation ownership, validate consulting contracts), (2) senior management sign-off on the relationship, (3) enhanced ongoing monitoring, and (4) annual PEP review until the cooling-off period expires. The expected outcome of EDD is likely <strong>approval with enhanced monitoring</strong> — not rejection.",
        coach: "🎓 <strong>AI Coach:</strong> This case tests whether you understand that PEP EDD is a regulatory obligation, not a suspicion indicator. Many PEPs are entirely legitimate — senior officials who served honourably and now work in the private sector. The EDD requirement exists because of the POTENTIAL for corruption associated with high office, not because every PEP is corrupt. Good EDD distinguishes between PEPs who present genuine risk and those who simply require enhanced documentation. Restrepo-Vargas looks like the latter — but you need EDD to confirm it.",
      },
      approve: {
        grade: "partial", title: "Correct Direction, But EDD First", points: 60,
        explain: "Your instinct that this is likely an approvable customer is probably correct — clean screening, legitimate income, full documentation. But <strong>you cannot approve without completing EDD</strong>. PEP Enhanced Due Diligence is a legal requirement, not optional. Approve AFTER EDD confirms the source of wealth independently. Skipping EDD for a PEP is a regulatory violation regardless of how clean the customer appears.",
        coach: "🎓 <strong>AI Coach:</strong> Even when a PEP looks completely clean, the EDD must be done and documented. It's not about your judgment of the person — it's about regulatory compliance. A regulator examining this file will look for the EDD workpapers first.",
      },
      reject: {
        grade: "bad", title: "Unjustified — PEP ≠ Automatic Rejection", points: -20,
        explain: "Rejecting a former PEP with clean screening, legitimate income, and full documentation would be <strong>inappropriate de-risking</strong>. FATF, FinCEN, and all major regulators have warned against blanket PEP rejection. The risk-based approach requires EDD to assess the individual PEP — not automatic rejection of all PEPs. This applicant presents a strong profile that likely passes EDD.",
        coach: "🎓 <strong>AI Coach:</strong> 'PEP' is not a synonym for 'criminal.' Former government officials with clean records and legitimate post-government careers deserve fair assessment. Blanket PEP rejection is a compliance failure, not a cautious decision.",
      },
      escalate: {
        grade: "partial", title: "Good — But You Know What's Needed", points: 50,
        explain: "PEP onboarding typically requires senior management approval as part of the EDD process — so escalation will happen naturally. But first, <strong>initiate the EDD</strong>. Escalation without a recommendation or EDD workpapers doesn't help your senior team — they'll just send it back to you to do the EDD first.",
        coach: "🎓 <strong>AI Coach:</strong> Senior sign-off is part of PEP EDD — but it comes at the end of the process, not the beginning. Do the EDD work, form a recommendation, then escalate for approval.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 6: Synthetic Identity Fraud
  // Difficulty: Hard | Correct: Reject
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0953",
    name: "James Arthur Whitfield",
    teaser: "Personal account — multiple identity document inconsistencies suggest synthetic identity constructed from stolen and fabricated elements",
    entityType: "Individual",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "reject",
    application: {
      type: "Personal Current Account + Credit Card",
      purpose: "Personal banking and everyday spending",
      expectedVolume: "$10K–25K monthly",
      jurisdiction: "United Kingdom",
      dateOfBirth: "1986-04-17",
      nationality: "British",
    },
    documents: [
      { name: "Passport (UK)", status: "provided", flag: true, note: "UK passport provided. However, HMPO records show no passport issued to this name with this date of birth. Possible counterfeit or fraudulently obtained document." },
      { name: "Driving Licence (UK)", status: "provided", flag: true, note: "UK driving licence provided. DVLA check shows the licence number format is valid but the photograph doesn't match the passport photograph — different individuals." },
      { name: "Proof of Address — Utility Bill", status: "provided", flag: true, note: "Electricity bill at a London address. But Land Registry shows the property is a vacant commercial unit — not residential. The utility account was opened 2 months ago." },
      { name: "Employment Verification", status: "provided", flag: true, note: "Letter claiming employment as 'Senior Analyst at Grafton Partners LLP.' Companies House shows no company registered as 'Grafton Partners LLP.' Letter appears professionally formatted but employer doesn't exist." },
      { name: "Bank Statement (Previous Provider)", status: "provided", flag: true, note: "Statements from 'Meridian Digital Bank' — a neobank. Account opened 3 months ago. Shows regular salary-like credits of £7,500/month from 'Grafton Partners' (the non-existent employer)." },
      { name: "National Insurance Number", status: "provided", flag: true, note: "NI number provided. HMRC verification shows this NI number belongs to a different individual — a 72-year-old woman in Manchester. Identity element stolen from a real person." },
    ],
    screening: [
      { type: "Sanctions", result: "No match (but identity may be fabricated)", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No results for this name (name may not be real)", flag: false },
      { type: "Identity Verification", result: "FAILED — Multiple inconsistencies detected. Passport not confirmed by HMPO. Photo mismatch between documents. NI number belongs to different individual.", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "whitfield", label: "'James Whitfield'", type: "person", jurisdiction: "UK 🇬🇧 (claimed)", risk: "critical", x: 230, y: 39,
          info: "⚠️ SUSPECTED SYNTHETIC IDENTITY. The person presenting as 'James Arthur Whitfield' appears to have constructed an identity from: (1) a possibly counterfeit UK passport, (2) a driving licence with a different person's photo, (3) a stolen NI number from a 72-year-old, (4) a fabricated employer. The real identity of this individual is unknown." },
        { id: "passport", label: "Passport ❌", type: "unknown", jurisdiction: "UK 🇬🇧", risk: "critical", x: 80, y: 180,
          info: "⚠️ HMPO has no record of a passport issued to 'James Arthur Whitfield' with DOB 17/04/1986. The document is either counterfeit or fraudulently obtained through corrupted application processes." },
        { id: "ni_stolen", label: "Stolen NI Number", type: "person", jurisdiction: "UK 🇬🇧", risk: "critical", x: 380, y: 180,
          info: "⚠️ The NI number provided belongs to Margaret Irene Crossley, age 72, of Manchester. This is a stolen identity element — common in synthetic identity construction where real data points from vulnerable individuals (elderly, deceased, children) are combined with fabricated elements." },
        { id: "grafton", label: "'Grafton Partners' ❌", type: "company", jurisdiction: "UK 🇬🇧", risk: "critical", x: 80, y: 300,
          info: "⚠️ No company registered at Companies House. The employer does not exist. The 'salary' credits in the neobank statements are fabricated — likely transferred from another account controlled by the fraudster to build credit history." },
        { id: "address", label: "Vacant Commercial Unit", type: "unknown", jurisdiction: "UK 🇬🇧", risk: "high", x: 380, y: 300,
          info: "⚠️ Land Registry confirms the address on the utility bill is a vacant commercial unit, not a residential property. The utility account was opened only 2 months ago — likely to create a proof-of-address document." },
      ],
      edges: [
        { from: "whitfield", to: "passport", label: "Not verified" },
        { from: "whitfield", to: "ni_stolen", label: "Stolen from" },
        { from: "whitfield", to: "grafton", label: "Fake employer" },
        { from: "whitfield", to: "address", label: "Fake address" },
      ]
    },
    flags: [
      "SYNTHETIC IDENTITY: This application appears to be a constructed identity using stolen and fabricated elements — a passport not confirmed by HMPO, a driving licence with a different person's photo, a National Insurance number belonging to a 72-year-old woman, and a non-existent employer.",
      "Passport verification FAILED: HMPO has no record of a passport issued to this identity. The document is either counterfeit or obtained through a compromised application process.",
      "NI number stolen from Margaret Irene Crossley (age 72, Manchester). Elderly individuals are common targets for identity element theft because they may not actively monitor their credit or identity use.",
      "Employer 'Grafton Partners LLP' does not exist in Companies House records. The employment letter and salary credits are fabricated — part of the synthetic identity's 'history building' to appear legitimate.",
      "Address is a vacant commercial unit. Utility bill opened 2 months ago specifically to create a proof-of-address document for this fraudulent application.",
      "Photo mismatch between passport and driving licence — suggesting at least two different real individuals' documents are being used in the construction of this synthetic identity.",
    ],
    feedback: {
      reject: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Rejection is the only appropriate response. This is a <strong>synthetic identity fraud</strong> attempt — an identity constructed from stolen and fabricated elements. Every document fails verification: the passport isn't in HMPO records, the NI number belongs to a different person, the employer doesn't exist, and the address is a vacant commercial unit. <strong>No amount of EDD can resolve a fraudulent identity.</strong><br><br>Your institution should also: (1) file a Suspicious Activity Report with the NCA (UK) or FinCEN (US), (2) retain copies of all fraudulent documents for law enforcement, (3) notify CIFAS (UK fraud prevention service) or equivalent, (4) consider whether the stolen NI number victim (Margaret Crossley) should be notified through appropriate channels.",
        coach: "🎓 <strong>AI Coach:</strong> Synthetic identity fraud is the fastest-growing type of financial fraud. Fraudsters combine real elements (stolen NI numbers, real addresses) with fabricated elements (fake names, counterfeit documents) to create identities that pass automated checks. The key to detection is CROSS-VERIFICATION — checking each element independently. The passport photo didn't match the driving licence. The NI number belonged to someone else. The employer didn't exist. Any ONE of these failures is grounds for rejection; all four together is a clear fraud attempt.",
      },
      approve: {
        grade: "bad", title: "Onboarding a Fraudulent Identity", points: -40,
        explain: "Approving this application would mean <strong>onboarding a synthetic identity</strong> — a non-existent person constructed for fraud. Every document fails verification. This isn't a documentation gap; it's a criminal fraud attempt. Approval would expose your institution to losses from fraud, regulatory action for CDD failures, and potential criminal facilitation charges.",
        coach: "🎓 <strong>AI Coach:</strong> When the passport isn't real, the NI number is stolen, and the employer doesn't exist — there is no customer. You'd be opening an account for a fiction.",
      },
      edd: {
        grade: "partial", title: "EDD Cannot Fix a Fake Identity", points: 30,
        explain: "EDD is designed for high-risk customers who are REAL but need additional verification. This applicant <strong>does not appear to be a real person</strong>. The identity is fabricated. Requesting additional documentation from a synthetic identity will only produce more fabricated documents. <strong>Reject and report.</strong>",
        coach: "🎓 <strong>AI Coach:</strong> There's a critical difference between 'high-risk customer needing more documentation' and 'fraudulent identity.' EDD investigates risk; rejection stops fraud. Know which tool to use.",
      },
      escalate: {
        grade: "partial", title: "Escalate AND Reject", points: 60,
        explain: "Escalation is reasonable because synthetic identity cases may require involvement of your fraud team, law enforcement liaison, and CIFAS reporting. But the <strong>decision is clear: reject</strong>. Escalate for the fraud reporting process, but don't leave the rejection pending — the applicant may attempt to open accounts elsewhere.",
        coach: "🎓 <strong>AI Coach:</strong> When you identify synthetic identity fraud, the rejection should be immediate. Escalation handles the reporting and investigation — but the door should already be closed.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 7: High-Value Non-Domiciled — Legitimate
  // Difficulty: Easy-Medium | Correct: Approve
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0961",
    name: "Astrid Lindqvist-Berger",
    teaser: "Non-dom relocation — Swedish tech executive moving to London, high-value account with comprehensive documentation and clean screening",
    entityType: "Individual",
    riskLevel: "medium",
    riskLabel: "Medium",
    correct: "approve",
    application: {
      type: "Premier Current Account + Investment Portfolio",
      purpose: "Salary, investment income, and property purchase",
      expectedVolume: "$80K–150K monthly",
      jurisdiction: "United Kingdom",
      dateOfBirth: "1982-05-19",
      nationality: "Swedish (UK Skilled Worker visa)",
    },
    documents: [
      { name: "Passport (Sweden)", status: "provided", flag: false, note: "Valid Swedish passport. EU/EEA national. Photo and biometrics verified." },
      { name: "UK Visa — Skilled Worker", status: "provided", flag: false, note: "Tier 2 (Skilled Worker) visa. Sponsored by Ericsson UK Ltd. Valid 5 years." },
      { name: "Proof of Address — Estate Agent Letter", status: "provided", flag: false, note: "Rental agreement for property in Richmond, London. Savills letting agent. 24-month lease." },
      { name: "Employment Contract", status: "provided", flag: false, note: "VP of Engineering, Ericsson UK Ltd. Base salary £185,000 + bonus up to 40%. Contract verified with Ericsson HR." },
      { name: "Source of Wealth Declaration", status: "provided", flag: false, note: "Wealth from: (1) 15-year career at Spotify and Ericsson (salary + equity), (2) Spotify RSU vesting ($2.3M realized 2018-2023, documented), (3) investment portfolio at SEB Private Banking (statements provided). Total declared NW: $4.8M." },
      { name: "Investment Statements (SEB)", status: "provided", flag: false, note: "SEB Private Banking statements. Diversified portfolio: equities, bonds, property fund. $3.1M balance. 8-year relationship. Clean, well-documented." },
      { name: "Swedish Tax Returns", status: "provided", flag: false, note: "2023-2024 Swedish tax returns (Skatteverket). Consistent with declared salary and capital gains from RSU vesting." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No adverse results. Positive: speaker at Web Summit 2024, LinkedIn profile with 18K followers.", flag: false },
      { type: "Jurisdiction Risk", result: "Sweden — low risk; UK — low risk", flag: false },
    ],
    hierarchy: {
      nodes: [
        { id: "astrid", label: "Astrid Lindqvist-Berger", type: "person", jurisdiction: "Sweden 🇸🇪 / UK 🇬🇧", risk: "low", x: 230, y: 39,
          info: "Applicant. 43-year-old Swedish tech executive. VP Engineering at Ericsson UK. 15-year career at Spotify and Ericsson. $4.8M net worth from salary, equity (Spotify RSUs), and investments. Comprehensive documentation. Clean screening." },
        { id: "ericsson", label: "Ericsson UK Ltd", type: "company", jurisdiction: "UK 🇬🇧", risk: "low", ownership: "Employer", parent: "astrid", x: 80, y: 180,
          info: "✅ Global telecommunications company. £185K base salary + 40% bonus. Employment verified with HR. Ericsson is a publicly traded company (NASDAQ: ERIC). Legitimate employer." },
        { id: "spotify", label: "Spotify RSU Vesting", type: "company", jurisdiction: "Sweden 🇸🇪", risk: "low", ownership: "Prior Employer", parent: "astrid", x: 380, y: 180,
          info: "✅ $2.3M realized from Spotify restricted stock units (2018-2023). Spotify (NYSE: SPOT) equity compensation is well-documented and verifiable. RSU vesting schedules and tax withholding statements provided." },
        { id: "seb", label: "SEB Private Banking", type: "bank", jurisdiction: "Sweden 🇸🇪", risk: "low", ownership: "Banking Rel.", parent: "astrid", x: 230, y: 290,
          info: "✅ SEB (Skandinaviska Enskilda Banken) — one of Sweden's Big Four banks. 8-year private banking relationship. $3.1M diversified portfolio. Well-documented wealth management relationship." },
      ],
      edges: [
        { from: "astrid", to: "ericsson", label: "Employed" },
        { from: "astrid", to: "spotify", label: "Former RSUs" },
        { from: "astrid", to: "seb", label: "8yr Banking" },
      ]
    },
    flags: [],
    feedback: {
      approve: {
        grade: "excellent", title: "Correct — Approved!", points: 120,
        explain: "This is a <strong>well-documented, low-risk onboarding</strong> despite the high expected volumes. Astrid is a verified tech executive relocating from Sweden to the UK with: (1) employment at a publicly-traded global company (Ericsson), (2) documented equity wealth from another publicly-traded company (Spotify RSUs), (3) an 8-year relationship with a major Swedish bank (SEB), (4) complete Swedish tax returns, and (5) clean screening across all databases. The high volumes ($80-150K/month) are consistent with her salary, bonus, and investment income. Standard CDD with ongoing monitoring is sufficient.",
        coach: "🎓 <strong>AI Coach:</strong> High-value doesn't mean high-risk. Tech executives relocating internationally often bring significant documented wealth from equity compensation. The key differentiators from suspicious high-value applications: publicly verifiable employers, documented equity vesting from listed companies, established banking relationships, and complete tax records. All four are present here.",
      },
      reject: {
        grade: "bad", title: "Unjustified Rejection", points: -30,
        explain: "There is <strong>no basis for rejection</strong>. Every document is verified, screening is clean, and the wealth source is transparent (publicly traded company equity). Rejecting a well-documented executive would be unjustified de-risking.",
        coach: "🎓 <strong>AI Coach:</strong> Premium clients with transparent wealth deserve efficient onboarding. Unjustified rejection of well-documented high-value clients harms the business and isn't supported by compliance rationale.",
      },
      edd: {
        grade: "partial", title: "Disproportionate — Standard CDD Sufficient", points: 40,
        explain: "No risk indicators warrant EDD. The applicant has verifiable employment at a public company, documented equity wealth, an established banking relationship, and clean screening. <strong>Standard CDD is appropriate.</strong> High expected volumes alone don't trigger EDD when the income source is transparent and verified.",
        coach: "🎓 <strong>AI Coach:</strong> Don't confuse high-value with high-risk. EDD is triggered by risk indicators, not by account size. When every document verifies and every screening is clean, standard CDD applies even for large accounts.",
      },
      escalate: {
        grade: "partial", title: "No Ambiguity — Approve Directly", points: 40,
        explain: "This case has no ambiguity requiring senior input. Complete documentation, clean screening, verifiable wealth. <strong>Approve with confidence.</strong>",
        coach: "🎓 <strong>AI Coach:</strong> Develop comfort with approving high-value, well-documented clients. If you escalate every six-figure account, you'll create unnecessary bottlenecks.",
      }
    }
  },


  // ══════════════════════════════════════════════════════════════
  // CASE 8: Sanctions Near-Match + TF Risk Indicators
  // Difficulty: Hard | Correct: Reject
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0972",
    name: "Abdulrahman Al-Dhaheri",
    teaser: "Premier account — OFAC SDN near-match on applicant's name, adverse media linking family members to designated terrorist financier, unverifiable source of wealth",
    entityType: "Individual",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "reject",
    application: {
      type: "Premier Current Account + Wire Transfer Access",
      purpose: "Business income and family remittances",
      expectedVolume: "$50K–120K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1979-08-14",
      nationality: "Yemeni (US permanent resident)",
    },
    documents: [
      { name: "Passport (Yemen)", status: "provided", flag: true, note: "Valid Yemeni passport. Yemen is a FATF high-risk jurisdiction under increased monitoring with significant TF and proliferation financing risks." },
      { name: "US Green Card", status: "provided", flag: false, note: "Permanent Resident Card. Valid. EB-5 investor visa category — obtained through $800K investment in a regional centre project in 2019." },
      { name: "Proof of Address — Utility Bill", status: "provided", flag: false, note: "Electric bill at Houston, TX address. Current. Matches application." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Declares wealth from 'family trading business in Aden and Dubai.' No company registration documents, no audited accounts, and no third-party verification of the business provided. Estimated NW declared as $5M." },
      { name: "Bank Statements (UAE)", status: "partial", flag: true, note: "3 months of statements from Emirates NBD showing large inflows from 'Al-Dhaheri General Trading LLC' (UAE). But no corporate registration or trade licence for this entity provided." },
      { name: "Tax Returns (US)", status: "missing", flag: true, note: "Not provided. Claims accountant is 'still preparing' 2024 returns. No prior-year returns offered. If EB-5 was obtained in 2019, 5 years of US tax filings should exist." },
      { name: "EB-5 Investment Documentation", status: "partial", flag: true, note: "EB-5 regional centre approval letter provided. But source-of-funds for the $800K investment is not documented — critical for EB-5 compliance. USCIS requires lawful source of investment funds." },
    ],
    screening: [
      { type: "Sanctions", result: "NEAR-MATCH — 'Abdulrahman Hassan Al-Dhaheri' matches 85% against OFAC SDN entry for 'Abd al-Rahman Hasan al-Dahiri' (designated 2022 for facilitating financial transfers to AQAP). Name transliteration variants are common in Arabic names.", flag: true },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "2023 article in The National (UAE): uncle Mohsen Al-Dhaheri investigated by UAE Central Bank for unlicensed hawala operations linked to Yemen remittance corridors.", flag: true },
      { type: "Jurisdiction Risk", result: "Yemen — FATF high-risk jurisdiction. Active conflict zone. Significant TF risk (AQAP, Houthi).", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "abdulrahman", label: "A. Al-Dhaheri", type: "person", jurisdiction: "Yemen 🇾🇪 / US 🇺🇸", risk: "critical", x: 230, y: 39,
          info: "Applicant. Yemeni national, US permanent resident (EB-5). OFAC near-match on name — transliteration variant of designated AQAP financier. Uncle investigated for unlicensed hawala. Source of wealth unverifiable. Cumulative risk profile is unacceptable." },
        { id: "sdn", label: "OFAC SDN Near-Match ⚠️", type: "unknown", jurisdiction: "US 🇺🇸", risk: "critical", x: 80, y: 180,
          info: "⚠️ 85% match against OFAC SDN: 'Abd al-Rahman Hasan al-Dahiri' — designated 2022 for facilitating financial transfers to Al-Qaeda in the Arabian Peninsula (AQAP). Arabic name transliteration creates legitimate spelling variants — but the match cannot be resolved without definitive biometric or biographical differentiation." },
        { id: "trading", label: "Al-Dhaheri Trading LLC", type: "company", jurisdiction: "UAE 🇦🇪", risk: "high", ownership: "Claims ownership", parent: "abdulrahman", x: 380, y: 180,
          info: "⚠️ UAE-based entity cited as wealth source. No trade licence or commercial registration provided. Emirates NBD statements show large transfers from this entity — but without corporate documentation, the entity's legitimacy and the applicant's actual connection to it are unverifiable." },
        { id: "uncle", label: "Mohsen Al-Dhaheri (uncle)", type: "person", jurisdiction: "UAE 🇦🇪", risk: "high", ownership: "Family", parent: "abdulrahman", x: 80, y: 310,
          info: "⚠️ Applicant's uncle. Investigated by UAE Central Bank (2023) for operating an unlicensed hawala network on the Yemen-UAE remittance corridor. Hawala to Yemen is a documented TF risk corridor per FATF and UN Panel of Experts reports." },
        { id: "yemen", label: "Yemen 🇾🇪", type: "jurisdiction", jurisdiction: "Yemen", risk: "critical", x: 380, y: 310,
          info: "FATF high-risk jurisdiction. Active armed conflict. Significant terrorism financing risk — both AQAP and Houthi designations. UN arms embargo. Extremely limited AML/CFT infrastructure. One of the highest-risk jurisdictions globally." },
      ],
      edges: [
        { from: "abdulrahman", to: "sdn", label: "85% match" },
        { from: "abdulrahman", to: "trading", label: "Claims ownership" },
        { from: "abdulrahman", to: "uncle", label: "Family" },
        { from: "uncle", to: "yemen", label: "Hawala corridor" },
        { from: "trading", to: "yemen", label: "Trade route" },
      ]
    },
    flags: [
      "OFAC SDN NEAR-MATCH: 85% match against 'Abd al-Rahman Hasan al-Dahiri' — designated 2022 for facilitating financial transfers to AQAP. Arabic-to-English transliteration commonly produces variant spellings. This near-match cannot be definitively resolved without biometric differentiation, which the applicant has not provided.",
      "Family TF nexus: Uncle Mohsen Al-Dhaheri investigated by UAE Central Bank (2023) for unlicensed hawala operations on the Yemen remittance corridor — a documented TF risk pathway. Family involvement in unregulated money transfer to a FATF high-risk jurisdiction with active TF threats.",
      "Source of wealth unverifiable: Claims family trading business in Aden and Dubai but provides no corporate registration, trade licence, or audited accounts. The UAE bank statements show transfers from 'Al-Dhaheri General Trading LLC' but the entity itself is undocumented.",
      "Yemen — FATF high-risk jurisdiction with active conflict, AQAP presence, Houthi designations, and UN arms embargo. Combined with the SDN near-match and family hawala connections, the jurisdiction risk is compounding.",
      "Missing US tax returns despite 5+ years of permanent residency (EB-5 obtained 2019). Source of funds for the $800K EB-5 investment is also undocumented — a potential USCIS compliance issue.",
      "The cumulative risk profile — SDN near-match + family TF nexus + unverifiable SOW + FATF high-risk jurisdiction + missing tax returns — exceeds what EDD can reasonably resolve. Rejection is the appropriate risk-based decision.",
    ],
    feedback: {
      reject: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Rejection is the correct decision. The <strong>cumulative risk profile is unmanageable</strong>: an OFAC SDN near-match (85%) against a designated AQAP financier, family connection to investigated hawala operations on the Yemen TF corridor, unverifiable source of wealth, and Yemen as a FATF high-risk jurisdiction. While each factor alone might be addressable through EDD, the <strong>combination creates risk that exceeds institutional tolerance</strong>. The SDN near-match alone would typically require definitive resolution (biometric differentiation) before proceeding — and the applicant hasn't provided it. Adding family TF connections and an unverifiable wealth source makes this a clear rejection.<br><br>Your institution should also: (1) ensure the sanctions team documents the near-match determination, (2) retain application records in case of future law enforcement inquiry, and (3) consider whether a SAR is warranted based on the TF indicators.",
        coach: "🎓 <strong>AI Coach:</strong> This case tests your ability to assess cumulative risk. Any single factor here might not be fatal — many people share names with SDN entries, having a relative under investigation doesn't make you a criminal, and Yemen is a legitimate country of origin. But when SDN proximity, family TF connections, an unverifiable wealth source, and a high-risk jurisdiction all converge in one application, the cumulative risk exceeds what any amount of enhanced due diligence can mitigate. Rejection is the risk-based decision — not discrimination, not de-risking, but a legitimate compliance judgment based on the evidence.",
      },
      approve: {
        grade: "bad", title: "Unacceptable Sanctions and TF Risk", points: -40,
        explain: "Approving an applicant with an <strong>unresolved OFAC SDN near-match</strong>, family connections to investigated hawala operations, and an unverifiable wealth source would expose your institution to catastrophic sanctions liability. If this individual IS the designated person (or closely related), processing their transactions could constitute sanctions violations with strict liability penalties.",
        coach: "🎓 <strong>AI Coach:</strong> OFAC sanctions liability is strict — meaning your institution can be penalised even if the violation was unintentional. An unresolved 85% SDN match is not a risk you can approve your way past.",
      },
      edd: {
        grade: "partial", title: "Cumulative Risk Exceeds EDD Capacity", points: 40,
        explain: "EDD could theoretically address individual risk factors — you could request biometric differentiation for the SDN match, corporate documents for the trading company, and tax returns. But the <strong>combination of SDN near-match + family TF nexus + unverifiable SOW + FATF high-risk jurisdiction</strong> creates cumulative risk that persists even if individual factors are partially resolved. The residual risk after EDD would still likely exceed institutional tolerance. Reject now — if the applicant can independently resolve the SDN near-match and provide comprehensive documentation, they can reapply.",
        coach: "🎓 <strong>AI Coach:</strong> EDD has limits. It can resolve documentation gaps and verify claims — but it can't change who your relatives are, which country you're from, or whether your name matches a designated terrorist financier. When the risk is structural rather than informational, EDD won't solve it.",
      },
      escalate: {
        grade: "partial", title: "Escalate AND Reject", points: 60,
        explain: "Escalation is appropriate because SDN near-matches typically require sanctions team and legal review. But your <strong>recommendation should be clear: reject</strong>. The cumulative risk profile leaves no room for ambiguity. Escalate with a rejection recommendation, not an open question.",
        coach: "🎓 <strong>AI Coach:</strong> When escalating, always include your recommendation. 'I'm escalating because I'm unsure' is weaker than 'I'm escalating to confirm my rejection recommendation given the SDN near-match.' Show your analysis.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 9: Dual National — Tax Evasion Risk Indicators
  // Difficulty: Medium | Correct: EDD
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0984",
    name: "Lucas Ferreira-Campos",
    teaser: "Dual national — US/Brazilian, $3.2M in declared offshore assets with indicators of potential tax evasion, FATCA reporting concerns",
    entityType: "Individual",
    riskLevel: "high",
    riskLabel: "High",
    correct: "edd",
    application: {
      type: "Investment Account + Savings",
      purpose: "Consolidate offshore assets into US-based portfolio",
      expectedVolume: "$100K–200K monthly (initial transfers, then $15K–30K)",
      jurisdiction: "United States",
      dateOfBirth: "1970-02-08",
      nationality: "American / Brazilian (dual)",
    },
    documents: [
      { name: "Passport (US)", status: "provided", flag: false, note: "Valid US passport. Born in São Paulo, naturalised US citizen 2005." },
      { name: "Passport (Brazil)", status: "provided", flag: false, note: "Valid Brazilian passport. Dual nationality confirmed." },
      { name: "Proof of Address — Property Tax Bill", status: "provided", flag: false, note: "Miami, FL property. Owned outright. Property tax current." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Declares $3.2M from Brazilian family property holdings and a medical equipment distribution business. Claims assets are held in Brazilian banks, Swiss private bank, and a Cayman Islands trust. The multi-jurisdiction structure raises FATCA compliance questions." },
      { name: "Tax Returns (US)", status: "provided", flag: true, note: "2023-2024 returns provided. Reported AGI: $195K (medical practice income). NO foreign bank account or trust disclosures on FBAR/FinCEN 114 or Schedule B — despite claiming $3.2M in offshore assets. Potential FBAR non-compliance." },
      { name: "Brazilian Bank Statements", status: "partial", flag: true, note: "Banco Itaú statements showing R$4.8M balance (~$950K). But declared total offshore is $3.2M — remaining ~$2.25M is at 'a Swiss bank and Cayman trust' with no statements provided." },
      { name: "Business Documentation (Brazil)", status: "provided", flag: false, note: "Ferreira Equipamentos Médicos Ltda. CNPJ registration confirmed. $2.1M annual revenue. 45 employees. Legitimate Brazilian medical equipment distributor." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No adverse results", flag: false },
      { type: "Tax Compliance", result: "POTENTIAL FBAR/FATCA ISSUE — US tax returns show no foreign account disclosures despite applicant declaring $3.2M in offshore accounts/trusts.", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "lucas", label: "Lucas Ferreira-Campos", type: "person", jurisdiction: "US 🇺🇸 / Brazil 🇧🇷", risk: "high", x: 230, y: 39,
          info: "Applicant. 56-year-old dual US/Brazilian national. Medical practice in Miami + medical equipment business in Brazil. Declares $3.2M offshore — but US tax returns show NO foreign account disclosures. Potential FBAR non-compliance raises serious questions about the legitimacy of the asset consolidation." },
        { id: "itau", label: "Banco Itaú (Brazil)", type: "bank", jurisdiction: "Brazil 🇧🇷", risk: "medium", ownership: "Banking", parent: "lucas", x: 80, y: 180,
          info: "Brazilian bank. R$4.8M (~$950K) balance documented. Itaú is Brazil's largest private bank — legitimate institution. Account appears consistent with Brazilian business income." },
        { id: "swiss", label: "Swiss Private Bank", type: "bank", jurisdiction: "Switzerland 🇨🇭", risk: "high", ownership: "Banking", parent: "lucas", x: 380, y: 180,
          info: "⚠️ Claims account at unnamed Swiss private bank. No statements provided. Amount undisclosed. Switzerland has historically been associated with tax evasion by US persons — though CRS/AEOI has reduced this. The refusal to name the bank or provide statements is a red flag." },
        { id: "cayman", label: "Cayman Islands Trust", type: "trust", jurisdiction: "Cayman 🇰🇾", risk: "high", ownership: "Beneficiary", parent: "lucas", x: 230, y: 300,
          info: "⚠️ Claims beneficiary interest in a Cayman trust. No trust deed, no trustee identification, no statements provided. Cayman trusts for US persons must be reported on IRS Forms 3520/3520-A. No such reporting appears in the tax returns provided." },
        { id: "fbar", label: "FBAR/FATCA Gap ⚠️", type: "unknown", jurisdiction: "US 🇺🇸", risk: "critical", x: 230, y: 400,
          info: "⚠️ US persons with foreign accounts exceeding $10K must file FBAR (FinCEN 114). US persons with foreign assets exceeding $50K must report on FATCA Form 8938. The applicant's US tax returns contain NEITHER disclosure — despite declaring $3.2M in foreign assets on this application. This is either a filing omission or deliberate non-disclosure." },
      ],
      edges: [
        { from: "lucas", to: "itau", label: "$950K" },
        { from: "lucas", to: "swiss", label: "Undocumented" },
        { from: "lucas", to: "cayman", label: "Beneficiary" },
        { from: "swiss", to: "fbar", label: "Not reported" },
        { from: "cayman", to: "fbar", label: "Not reported" },
      ]
    },
    flags: [
      "FBAR/FATCA non-compliance: US tax returns show NO foreign account or trust disclosures despite the applicant declaring $3.2M in offshore assets across Brazilian, Swiss, and Cayman accounts. US persons must file FBAR (FinCEN 114) for foreign accounts exceeding $10K and FATCA Form 8938 for foreign assets exceeding $50K.",
      "Unnamed Swiss bank: Applicant claims an account at a Swiss private bank but refuses to name the institution or provide statements. This opacity is inconsistent with a legitimate 'asset consolidation' purpose.",
      "Undocumented Cayman trust: Claims beneficiary interest in a Cayman trust but provides no trust deed, trustee identification, or financial statements. Cayman trusts held by US persons must be reported on IRS Forms 3520/3520-A — no such filings appear in the tax returns.",
      "The stated purpose — 'consolidate offshore assets into US-based portfolio' — could be legitimate tax planning or could indicate an attempt to repatriate undeclared assets ahead of increased CRS/AEOI information sharing that might expose the accounts to the IRS.",
      "This is an EDD case, not a rejection, because: (1) the Brazilian business and bank account appear legitimate, (2) there's no sanctions or criminal nexus, (3) FBAR non-compliance may be negligent rather than willful, and (4) the applicant may be working with a tax attorney to remediate. EDD should determine intent and compliance posture.",
    ],
    feedback: {
      edd: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "EDD is the correct response. The tax compliance gaps are serious but <strong>potentially remediable</strong>. Under Enhanced Due Diligence, you should require: (1) <strong>complete identification of all foreign accounts</strong> — name the Swiss bank, identify the Cayman trustee, provide statements for all accounts, (2) <strong>FBAR/FATCA compliance confirmation</strong> — either amended filings or a letter from a US tax attorney confirming that remediation (such as IRS Streamlined Filing Compliance Procedures or Voluntary Disclosure) is underway, (3) <strong>source-of-funds documentation</strong> for the initial large transfers, and (4) confirmation that the asset consolidation has a <strong>legitimate tax planning purpose</strong>.<br><br>If Ferreira-Campos provides complete documentation and demonstrates active tax remediation, this could become an approvable high-value relationship. If he refuses to disclose the Swiss bank or Cayman trust details, rejection is appropriate.",
        coach: "🎓 <strong>AI Coach:</strong> Tax evasion risk in KYC is nuanced. Many US persons with offshore assets have inadvertent FBAR non-compliance — the rules are complex, and dual nationals with legitimate foreign businesses often have legitimate reasons for foreign accounts. The question isn't whether he HAS foreign accounts (that's legal) but whether he's REPORTING them (that's required). EDD here should focus on determining whether this is negligent non-compliance being remediated or deliberate tax evasion. The unnamed Swiss bank is the biggest red flag — legitimate account holders name their banks.",
      },
      approve: {
        grade: "bad", title: "Tax Compliance Gap Unresolved", points: -30,
        explain: "Approving without resolving the FBAR/FATCA non-compliance would mean your institution knowingly receives assets from potentially undeclared foreign accounts. Under <strong>31 USC § 5314</strong> (FBAR) and <strong>IRC § 6038D</strong> (FATCA), these reporting obligations exist specifically to prevent tax evasion. Onboarding without verifying compliance makes your institution part of the problem.",
        coach: "🎓 <strong>AI Coach:</strong> Banks are the front line of FBAR/FATCA enforcement. When a US person tells you they have $3.2M offshore but their tax returns show no foreign account disclosures — that's a compliance gap you must address before onboarding.",
      },
      reject: {
        grade: "partial", title: "Premature — The Risk Is Addressable", points: 50,
        explain: "Rejection is premature because the risk factors are <strong>addressable through EDD</strong>. No sanctions, no criminal indicators, and the Brazilian business is legitimate. The FBAR/FATCA gap may reflect negligent non-compliance being remediated by a tax attorney — common among dual nationals. Request the documentation first. If he refuses to disclose the Swiss and Cayman details, then reject.",
        coach: "🎓 <strong>AI Coach:</strong> Tax compliance issues exist on a spectrum from inadvertent to criminal. This applicant's willingness to consolidate assets in the US could actually indicate a desire to come into compliance. Give EDD a chance to determine intent.",
      },
      escalate: {
        grade: "partial", title: "Good — But Initiate EDD First", points: 50,
        explain: "Escalation may be needed because FBAR/FATCA issues can involve your institution's tax compliance officer and potentially your legal team. But <strong>start the EDD process</strong> — request the Swiss bank details, Cayman trust documentation, and tax remediation confirmation. Escalate with that information in hand.",
        coach: "🎓 <strong>AI Coach:</strong> FBAR/FATCA cases benefit from specialist input, but the initial EDD information gathering is analyst-level work. Collect the data, then escalate with findings.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 10: Domestic Abuse Survivor — Thin Documentation
  // Difficulty: Medium | Correct: Escalate
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-0991",
    name: "Rachel Simmons",
    teaser: "Basic account — domestic abuse survivor with limited ID, address confidentiality program participant, thin documentation requires sensitive handling and specialist guidance",
    entityType: "Individual",
    riskLevel: "medium",
    riskLabel: "Medium",
    correct: "escalate",
    application: {
      type: "Basic Current Account + Debit Card",
      purpose: "Receive wages and daily banking",
      expectedVolume: "$2K–4K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1988-11-22",
      nationality: "American",
    },
    documents: [
      { name: "State ID Card", status: "provided", flag: true, note: "Valid state-issued ID. However, address shown is a PO Box issued through a state Address Confidentiality Program (ACP) — meaning the applicant's physical address is sealed for safety reasons related to domestic violence, stalking, or sexual assault." },
      { name: "Address Confidentiality Program Certificate", status: "provided", flag: true, note: "State ACP participant certificate. This is a government program that provides substitute addresses to survivors of domestic violence, sexual assault, and stalking. Participants' real addresses are sealed by the Secretary of State." },
      { name: "Proof of Address — Standard", status: "missing", flag: true, note: "Cannot provide standard proof of address (utility bill, bank statement) because physical address is sealed under ACP. The ACP substitute address (PO Box) is provided instead." },
      { name: "Employment Verification", status: "provided", flag: false, note: "Letter from employer confirming employment as administrative assistant at a local nonprofit. $3,200/month salary. Employment began 2 months ago." },
      { name: "Social Security Card", status: "provided", flag: false, note: "Valid SSN card. Name matches state ID. SSN verified through standard databases." },
      { name: "Domestic Violence Advocacy Letter", status: "provided", flag: false, note: "Letter from a licensed domestic violence advocacy organisation confirming the applicant is a client and requesting banking access under applicable consumer protection provisions." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "No match", flag: false },
      { type: "Adverse Media", result: "No results", flag: false },
      { type: "Identity Verification", result: "Identity verified via SSN and state ID. Address verification incomplete — ACP substitute address only.", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "rachel", label: "Rachel Simmons", type: "person", jurisdiction: "US 🇺🇸", risk: "low", x: 230, y: 39,
          info: "Applicant. 37-year-old American. Domestic violence survivor participating in her state's Address Confidentiality Program. Identity is verified (SSN + state ID), but physical address is sealed for safety. Employed. Clean screening. Low financial risk — documentation gaps are due to safety circumstances, not concealment." },
        { id: "acp", label: "Address Confidentiality Program", type: "unknown", jurisdiction: "US 🇺🇸", risk: "low", x: 80, y: 180,
          info: "✅ Government program administered by the Secretary of State. Provides substitute mailing addresses to survivors of domestic violence, stalking, and sexual assault. Over 40 US states have ACP programs. Federal banking regulators (OCC, FDIC) have issued guidance affirming that ACP addresses can satisfy KYC address requirements." },
        { id: "employer", label: "Nonprofit Employer", type: "company", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Employer", parent: "rachel", x: 380, y: 180,
          info: "✅ Local nonprofit organisation. Employment verified. $3,200/month salary — consistent with expected account volumes. Legitimate employer." },
        { id: "advocacy", label: "DV Advocacy Org", type: "company", jurisdiction: "US 🇺🇸", risk: "low", x: 230, y: 290,
          info: "✅ Licensed domestic violence advocacy organisation. Has provided a letter supporting the banking application. These organisations help survivors establish financial independence — banking access is a critical component of escape from abusive situations." },
      ],
      edges: [
        { from: "rachel", to: "acp", label: "Participant" },
        { from: "rachel", to: "employer", label: "Employed" },
        { from: "rachel", to: "advocacy", label: "Client" },
      ]
    },
    flags: [
      "ADDRESS VERIFICATION GAP: Physical address is sealed under a state Address Confidentiality Program (ACP) — the applicant cannot provide standard proof of address. This is NOT a suspicious indicator; it is a legally-protected safety measure for domestic violence survivors.",
      "Thin documentation: Limited ID documents available (state ID + SSN card only). Domestic violence survivors frequently have restricted access to documentation because abusers often control or destroy ID documents.",
      "This case requires ESCALATION, not because the applicant is suspicious, but because the non-standard documentation requires specialist handling. Your institution should have a vulnerability policy and/or ACP acceptance procedure. An analyst should not reject or delay based on standard CDD checklists that don't account for protected circumstances.",
      "Federal banking regulators (OCC, FDIC, Fed) have affirmed that ACP addresses satisfy CDD address requirements and that banks should accommodate domestic violence survivors. Rejection based solely on ACP participation could violate consumer protection obligations.",
    ],
    feedback: {
      escalate: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Escalation is the correct response — but for the right reason. This isn't escalation due to suspicion; it's escalation because <strong>non-standard documentation requires specialist handling</strong>. Your institution should have a vulnerability and inclusion policy that covers Address Confidentiality Program participants and domestic violence survivors.<br><br>The escalation should go to your <strong>compliance team or vulnerability specialist</strong> with a clear recommendation: <strong>the applicant should be onboarded</strong>. Identity is verified (SSN + state ID), screening is clean, employment is confirmed, and the ACP certificate is a legitimate government document. <strong>OCC Bulletin 2005-25</strong> and <strong>FDIC guidance</strong> explicitly state that banks should accommodate customers who cannot provide standard address documentation due to domestic violence protections. The expected outcome is approval with the ACP address recorded as the customer's address of record.",
        coach: "🎓 <strong>AI Coach:</strong> This case tests something different from the others — not your ability to spot risk, but your ability to recognise when standard CDD procedures need to flex for vulnerable customers. Domestic violence survivors face enormous barriers to financial independence, and banking access is critical for escape from abusive situations. A rigid application of CDD checklists would reject this applicant — but federal regulators have specifically said that's wrong. The right answer is to recognise the non-standard situation, escalate to someone who knows the institution's vulnerability policy, and advocate for the customer's onboarding.",
      },
      approve: {
        grade: "partial", title: "Right Outcome, But Seek Guidance", points: 80,
        explain: "Your instinct to approve is correct — this applicant should be onboarded. But because the documentation is non-standard (ACP address instead of traditional proof of address), <strong>you should confirm with your compliance team first</strong> to ensure proper documentation of the ACP acceptance and any modified CDD procedures. This protects both the customer and the institution.",
        coach: "🎓 <strong>AI Coach:</strong> When you're confident in the outcome but the path is non-standard, seeking guidance is professional — not a sign of weakness. Document why the ACP address satisfies CDD and get a compliance sign-off.",
      },
      reject: {
        grade: "bad", title: "Harmful and Potentially Unlawful", points: -40,
        explain: "Rejecting a domestic violence survivor based on inability to provide a standard proof of address — when she is participating in a <strong>government-established safety programme</strong> — would be both harmful and potentially unlawful. Federal banking regulators have explicitly stated that ACP addresses satisfy CDD requirements. Rejection could deprive a vulnerable person of financial independence needed to escape an abusive situation, and could expose your institution to consumer protection and fair lending violations.",
        coach: "🎓 <strong>AI Coach:</strong> CDD is meant to prevent financial crime — not to exclude vulnerable people from the banking system. When documentation gaps are caused by safety protections rather than concealment, your obligation is to find a compliant way to serve the customer, not to deny them access.",
      },
      edd: {
        grade: "partial", title: "Disproportionate — She's Not High Risk", points: 40,
        explain: "EDD is not warranted. The documentation gaps are not due to suspicious circumstances — they're due to a <strong>government safety program</strong>. Identity is verified, screening is clean, income is modest and documented. Subjecting a domestic violence survivor to enhanced scrutiny because of her protected status would be both disproportionate and potentially re-traumatising. The appropriate path is escalation to confirm your institution's ACP policy, then standard CDD approval.",
        coach: "🎓 <strong>AI Coach:</strong> EDD should be reserved for genuine risk indicators. Being a domestic violence survivor is not a risk indicator — it's a vulnerability that deserves accommodation. Don't treat a protected person like a suspicious one.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 11: Retired Military — PEP-Adjacent, Clean
  // Difficulty: Easy-Medium | Correct: Approve
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1003",
    name: "Colonel (Ret.) Hans-Peter Vogt",
    teaser: "Joint account — retired US Army Colonel (German-born), military pension and VA benefits, possible PEP-adjacent due to former NATO advisory role, but clean profile",
    entityType: "Individual",
    riskLevel: "medium",
    riskLabel: "Medium",
    correct: "approve",
    application: {
      type: "Joint Current Account + Savings (with spouse)",
      purpose: "Military pension, VA benefits, and retirement savings",
      expectedVolume: "$12K–18K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1963-03-30",
      nationality: "American (naturalised — born Germany)",
    },
    documents: [
      { name: "Passport (US)", status: "provided", flag: false, note: "Valid US passport. Naturalised citizen since 1990. Born in Stuttgart, Germany." },
      { name: "Military Retirement ID (DD Form 2)", status: "provided", flag: false, note: "Retired US Army Colonel (O-6). 28 years of service. Honourable discharge. Retired 2021." },
      { name: "Proof of Address — Property Tax Bill", status: "provided", flag: false, note: "Home in Fairfax, VA. Owned jointly with spouse. Property tax current." },
      { name: "Pension Documentation", status: "provided", flag: false, note: "DFAS (Defense Finance and Accounting Service) pension statement. $8,400/month military retirement pay. VA disability compensation: $2,100/month. Total government income: $10,500/month." },
      { name: "Spouse Documentation", status: "provided", flag: false, note: "Joint applicant: Elisabeth Vogt (née Braun). US citizen (naturalised 1992). Retired federal employee — OPM pension $3,800/month. Clean screening." },
      { name: "Investment Statements", status: "provided", flag: false, note: "TSP (Thrift Savings Plan) balance: $620K. Fidelity IRA: $280K. Combined retirement portfolio ~$900K. Consistent with a career military officer's savings." },
    ],
    screening: [
      { type: "Sanctions", result: "No match", flag: false },
      { type: "PEP", result: "Marginal — Former NATO Military Advisory Committee participant (2018-2021). Advisory role, not decision-making. Most PEP databases do not classify retired military officers as PEPs unless they held political or senior command positions.", flag: true },
      { name: "PEP Spouse", result: "No match — retired federal civil servant does not meet PEP thresholds.", flag: false },
      { type: "Adverse Media", result: "No adverse results. Positive: authored two books on European defence policy (academic). Cited in Congressional Research Service reports.", flag: false },
      { type: "Jurisdiction Risk", result: "US — low risk", flag: false },
    ],
    hierarchy: {
      nodes: [
        { id: "hans", label: "Col. (Ret.) Vogt", type: "person", jurisdiction: "US 🇺🇸", risk: "low", x: 170, y: 39,
          info: "Applicant. 63-year-old retired US Army Colonel. 28 years of honourable service. German-born, US citizen since 1990. Military pension + VA disability = $10,500/month. NATO advisory role triggers marginal PEP screening but does not meet standard PEP classification thresholds." },
        { id: "elisabeth", label: "Elisabeth Vogt", type: "person", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Spouse", parent: "hans", x: 310, y: 39,
          info: "✅ Joint applicant. Retired federal employee. OPM pension $3,800/month. Clean screening. No PEP concerns." },
        { id: "dfas", label: "Military Pension (DFAS)", type: "bank", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Income", parent: "hans", x: 80, y: 190,
          info: "✅ Defense Finance and Accounting Service pension: $8,400/month + VA disability $2,100/month. Government-source income — fully verified, fully transparent." },
        { id: "tsp", label: "TSP + Fidelity IRA", type: "bank", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Investments", parent: "hans", x: 380, y: 190,
          info: "✅ Thrift Savings Plan (federal retirement savings): $620K. Fidelity IRA: $280K. Total ~$900K in retirement savings. Consistent with a 28-year military career at O-6 rank." },
        { id: "nato", label: "[NATO Advisory Role]", type: "unknown", jurisdiction: "International", risk: "low", x: 230, y: 310,
          info: "NATO Military Advisory Committee participant (2018-2021). This was an advisory/consultative role, not a command or political position. Most PEP databases classify military PEPs at the level of Chiefs of Defence, senior general officers, or those with procurement authority. A Colonel-level advisory participant typically falls below PEP thresholds." },
      ],
      edges: [
        { from: "hans", to: "elisabeth", label: "Spouse" },
        { from: "hans", to: "dfas", label: "Pension" },
        { from: "hans", to: "tsp", label: "Savings" },
        { from: "hans", to: "nato", label: "Advisory 2018-21" },
      ]
    },
    flags: [
      "MARGINAL PEP FLAG: Former NATO Military Advisory Committee participant (2018-2021). This triggers a screening flag, but advisory committee participation at Colonel (O-6) rank does not meet standard PEP classification thresholds. PEP definitions focus on senior political, judicial, and military leaders — not mid-grade advisory participants.",
    ],
    feedback: {
      approve: {
        grade: "excellent", title: "Correct — Approved!", points: 120,
        explain: "This is a <strong>standard-risk onboarding with a resolved PEP flag</strong>. Colonel (Ret.) Vogt has: (1) 28 years of honourable US military service, (2) fully verified government-source income (DFAS pension + VA), (3) retirement savings consistent with career earnings, (4) clean screening across all databases, and (5) a NATO advisory role that triggers a marginal PEP flag but falls below standard PEP classification thresholds. The PEP flag should be <strong>documented as reviewed and resolved</strong> — noting that advisory committee participation at O-6 rank is not a PEP-qualifying position under FATF Recommendation 12 or FinCEN guidance. Standard CDD with a documented PEP review note is sufficient.",
        coach: "🎓 <strong>AI Coach:</strong> PEP screening systems produce false positives — especially for military personnel who served in NATO, UN, or other international roles. The skill is knowing which flags require EDD and which can be resolved through analysis. A Colonel-level NATO advisory participant is not the same as a Chief of Defence Staff or a Defence Minister. Document your reasoning, resolve the flag, and approve. Over-classifying PEPs wastes EDD resources.",
      },
      reject: {
        grade: "bad", title: "Unjustified — Military Veterans Deserve Fair Treatment", points: -30,
        explain: "Rejecting a retired US Army Colonel with 28 years of honourable service, government-source income, and clean screening because of a marginal NATO advisory flag would be <strong>unjustified and potentially discriminatory</strong>. Military veterans are among the most transparently-documented customers — government pensions, VA records, and military service records provide comprehensive verification.",
        coach: "🎓 <strong>AI Coach:</strong> Rejecting veterans because of marginal PEP flags on military service is a documented de-risking concern that regulators have flagged. Assess the individual, not the uniform.",
      },
      edd: {
        grade: "partial", title: "Disproportionate — PEP Flag Resolved", points: 40,
        explain: "The NATO advisory role is a marginal PEP flag that <strong>resolves on analysis</strong> — it doesn't meet PEP classification thresholds. EDD is not warranted for an advisory committee participant at Colonel rank. Document the PEP review, note the resolution, and approve under standard CDD.",
        coach: "🎓 <strong>AI Coach:</strong> Not every PEP screening hit requires EDD. PEP databases cast wide nets — your job is to determine which hits are true PEPs requiring EDD and which are marginal flags that resolve on analysis. This resolves.",
      },
      escalate: {
        grade: "partial", title: "No Ambiguity — Approve Directly", points: 40,
        explain: "The PEP flag resolves on analysis. Document your reasoning (advisory role at O-6 does not meet PEP thresholds), and approve. No need to escalate a resolved flag.",
        coach: "🎓 <strong>AI Coach:</strong> Resolving marginal PEP flags is analyst-level work. Document the review in the file — 'PEP flag reviewed, NATO advisory committee participation at Colonel (O-6) rank does not meet PEP classification threshold per FATF Rec 12' — and approve.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 12: Straw Person / Nominee Pattern
  // Difficulty: Hard | Correct: Reject
  // ══════════════════════════════════════════════════════════════
  {
    id: "KYC-2026-1015",
    name: "Derek Wainwright-Patel",
    teaser: "High-value personal account — documentation suggests applicant is acting as a nominee or straw person for an undisclosed third party controlling the account",
    entityType: "Individual",
    riskLevel: "high",
    riskLabel: "High",
    correct: "reject",
    application: {
      type: "Premier Current Account + Wire Transfer Access",
      purpose: "Personal investments and real estate transactions",
      expectedVolume: "$200K–500K monthly",
      jurisdiction: "United States",
      dateOfBirth: "1995-01-12",
      nationality: "Canadian (US work visa — H-1B)",
    },
    documents: [
      { name: "Passport (Canada)", status: "provided", flag: false, note: "Valid Canadian passport. Photo matches. US H-1B visa — software engineer at a tech company." },
      { name: "Proof of Address — Apartment Lease", status: "provided", flag: false, note: "Studio apartment in Seattle, WA. $2,100/month rent. 12-month lease." },
      { name: "Employment Verification", status: "provided", flag: true, note: "Software engineer at a mid-tier tech company. $125K annual salary. The expected account volume ($200K-500K/month) is 20-50× his monthly take-home pay — wildly inconsistent with his employment income." },
      { name: "Source of Wealth Declaration", status: "provided", flag: true, note: "Claims wealth from 'a family friend who is investing through me because they are not yet in the US.' Refuses to identify the family friend. States 'they prefer privacy.' This is a textbook nominee/straw person disclosure." },
      { name: "Power of Attorney", status: "provided", flag: true, note: "Notarised power of attorney granting authority over the account to 'R.K. Sharma, passport number [Canadian].' This confirms a third party will control the account — but no KYC documentation on Sharma is provided." },
      { name: "Tax Returns", status: "provided", flag: false, note: "2024 return showing $125K W-2 income. No investment income. No capital gains. Consistent with tech salary — and completely inconsistent with $200-500K monthly account volume." },
    ],
    screening: [
      { type: "Sanctions", result: "No match on applicant. Unable to screen undisclosed third party ('R.K. Sharma') — insufficient information provided.", flag: true },
      { type: "PEP", result: "No match on applicant. Unable to screen third party.", flag: true },
      { type: "Adverse Media", result: "No results on applicant. Cannot search for unidentified third party.", flag: true },
      { type: "Jurisdiction Risk", result: "Canada — low risk (but true controlling party is unscreened)", flag: true },
    ],
    hierarchy: {
      nodes: [
        { id: "derek", label: "Derek Wainwright-Patel", type: "person", jurisdiction: "Canada 🇨🇦 / US 🇺🇸", risk: "high", x: 230, y: 39,
          info: "Applicant — but likely NOT the true account controller. 30-year-old software engineer earning $125K/year requesting an account with $200-500K monthly volume. Openly states the account will be used by 'a family friend' who 'prefers privacy.' This is a straw person / nominee account." },
        { id: "salary", label: "Tech Salary ($125K)", type: "company", jurisdiction: "US 🇺🇸", risk: "low", ownership: "Employer", parent: "derek", x: 80, y: 170,
          info: "Legitimate employment. $125K salary is normal for a Seattle software engineer. But this income is completely inconsistent with the $200-500K monthly volume requested. His own money would not generate this activity." },
        { id: "sharma", label: "'R.K. Sharma' (POA) ⚠️", type: "person", jurisdiction: "Unknown", risk: "critical", ownership: "Controls", parent: "derek", x: 380, y: 170,
          info: "⚠️ UNDISCLOSED THIRD PARTY. Named only in the power of attorney. Canadian passport referenced but no documentation provided. No KYC performed. Will have full control over the account. Identity, source of wealth, sanctions status, PEP status, and adverse media — all UNKNOWN." },
        { id: "privacy", label: "[Refuses Identification]", type: "unknown", jurisdiction: "Unknown", risk: "critical", x: 380, y: 300,
          info: "⚠️ The third party 'prefers privacy' and the applicant refuses to provide identification. In KYC, an individual who will control an account but refuses to be identified is, by definition, unscreenable. The entire purpose of CDD is to know your customer — and the real customer here is unknown." },
        { id: "volume", label: "$200-500K/month ⚠️", type: "unknown", jurisdiction: "US 🇺🇸", risk: "critical", x: 80, y: 300,
          info: "⚠️ Expected monthly volume ($200-500K) is 20-50× the applicant's monthly take-home pay (~$8K). This money is not Wainwright-Patel's — it's the undisclosed third party's. Your bank would be processing hundreds of thousands in transactions for a person you've never identified." },
      ],
      edges: [
        { from: "derek", to: "salary", label: "$125K/year" },
        { from: "derek", to: "sharma", label: "Straw for" },
        { from: "sharma", to: "privacy", label: "Refuses ID" },
        { from: "sharma", to: "volume", label: "True source" },
      ]
    },
    flags: [
      "STRAW PERSON / NOMINEE ACCOUNT: The applicant openly states the account will be used by 'a family friend who is investing through me because they are not yet in the US.' A power of attorney grants account control to 'R.K. Sharma' — an individual for whom NO KYC documentation has been provided.",
      "Income-volume mismatch: $125K tech salary ($~8K/month take-home) vs. $200-500K expected monthly volume. The applicant's own income cannot generate this activity. The money belongs to the undisclosed third party.",
      "Unscreenable controlling party: R.K. Sharma — the person who will actually control the account — has not been identified beyond a name in a power of attorney. No passport copy, no address, no source of wealth, no screening possible. Sanctions status: unknown. PEP status: unknown. Criminal history: unknown.",
      "The applicant's stated reason — 'they prefer privacy' — is the exact opposite of KYC obligations. CDD requires identification of all persons who will control or benefit from an account. An account controller who 'prefers privacy' is, by definition, a person your institution cannot know.",
      "This is a rejection, not an EDD case, because: (1) the fundamental problem is not documentation gaps but refusal to identify the controlling party, (2) the applicant has been transparent that this is a nominee arrangement, and (3) no amount of EDD on the nominal account holder resolves the risk when the actual controller is unscreened.",
    ],
    feedback: {
      reject: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Rejection is the correct decision. This is an <strong>open nominee / straw person arrangement</strong> where the applicant has explicitly stated that an undisclosed third party will control the account. Under <strong>CDD Rule (31 CFR 1010.230)</strong>, financial institutions must identify all beneficial owners and persons with significant control over an account. An account controller who 'prefers privacy' and refuses identification fundamentally defeats CDD.<br><br>The rejection is based on a clear principle: <strong>you cannot 'Know Your Customer' when the real customer refuses to be known</strong>. This isn't a documentation gap — it's a refusal to comply with the basic premise of customer due diligence. The $200-500K monthly volume from an unscreened individual represents unquantifiable sanctions, PEP, and money laundering risk.",
        coach: "🎓 <strong>AI Coach:</strong> Straw person cases test whether you understand that KYC is about identifying the REAL customer, not just the person whose name is on the application. When someone walks in and says 'I want to open an account for someone else who doesn't want to be identified' — that's not a documentation gap, it's a fundamental CDD failure. The applicant was refreshingly honest about the arrangement, which actually makes your job easier: you know exactly what this is, and you know it can't be approved.",
      },
      approve: {
        grade: "bad", title: "Opening Account for Unknown Person", points: -40,
        explain: "Approving this would mean opening an account that will be <strong>controlled by an unidentified, unscreened individual</strong>. You don't know who R.K. Sharma is, where their money comes from, whether they're sanctioned, or what the account will be used for. This is the exact scenario CDD rules exist to prevent.",
        coach: "🎓 <strong>AI Coach:</strong> 'Know Your Customer' is the most fundamental principle in compliance. If you can't identify the person who will control the account, you haven't met the minimum standard. Full stop.",
      },
      edd: {
        grade: "partial", title: "EDD Cannot Solve Refusal to Identify", points: 40,
        explain: "EDD addresses documentation gaps for identified customers. Here, the problem isn't insufficient documentation — it's <strong>refusal to identify the controlling party at all</strong>. You could request full KYC on R.K. Sharma as a condition of proceeding, but the applicant has already stated that Sharma 'prefers privacy.' If Sharma provides full KYC documentation, this becomes a different case. But as presented, it's a rejection.",
        coach: "🎓 <strong>AI Coach:</strong> EDD is for customers who are identified but need more verification. It's not for customers who refuse to be identified. If someone says 'the person controlling this account won't tell you who they are,' that's a rejection — not an EDD request.",
      },
      escalate: {
        grade: "partial", title: "Clear Enough to Decide", points: 50,
        explain: "The nominee arrangement is openly stated — there's no ambiguity requiring senior input. <strong>Reject directly.</strong> The applicant told you this is a straw person account. Believe them.",
        coach: "🎓 <strong>AI Coach:</strong> When the applicant voluntarily discloses the nominee arrangement, you don't need a second opinion. They've told you the real customer won't be identified. That's a rejection under any CDD framework.",
      }
    }
  },

];
