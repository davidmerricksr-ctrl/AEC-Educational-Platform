// ═══════════════════════════════════════════════════════════════
// AML CORRESPONDENT BANKING CASES — Respondent Bank Monitoring
// 2 Cases — All names are entirely fictional constructions.
// No real person, company, bank, institution, or entity bears
// these names. Any resemblance is purely coincidental.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════

const AML_CORRESP_CASES = [

  // ══════════════════════════════════════════════════════════════
  // CASE 1: Wire Stripping — Sanctions evasion via respondent bank
  // Difficulty: Hard | Correct: SAR
  // ══════════════════════════════════════════════════════════════
  {
    id: "AML-CB-2026-0101",
    name: "Zerkova Merkantil Bank",
    teaser: "Respondent bank — wire stripping detected, originator fields missing on $18.6M in transfers to sanctioned-nexus entities",
    amount: "$18,600,000",
    riskLevel: "critical",
    riskLabel: "Critical",
    correct: "sar",
    profile: {
      occupation: "Respondent Bank — Correspondent Account",
      country: "Türkiye",
      pep: "N/A — Institutional",
      riskScore: 94,
      accountAge: "3 years",
      income: "Avg monthly throughput: $120M",
    },
    transactions: [
      { amount:"$3,200,000", date:"2026-02-20", to:"Wire → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$2,800,000", date:"2026-02-18", to:"Wire → Al-Burjeel General Trading", country:"UAE", flag:true },
      { amount:"$1,750,000", date:"2026-02-15", to:"Wire → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$4,100,000", date:"2026-02-12", to:"Wire → Shomal Petrochemical PJSC", country:"Iran", flag:true },
      { amount:"$890,000", date:"2026-02-10", to:"Wire → Al-Burjeel General Trading", country:"UAE", flag:true },
      { amount:"$1,400,000", date:"2026-02-07", to:"Wire → Persianex Import-Export GmbH", country:"Germany", flag:true },
      { amount:"$2,100,000", date:"2026-02-04", to:"Wire → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$950,000", date:"2026-02-01", to:"Wire → Tavriz Commodities Ltd", country:"Türkiye", flag:false },
      { amount:"$1,410,000", date:"2026-01-28", to:"Wire → Shomal Petrochemical PJSC", country:"Iran", flag:true },
      { amount:"$45,200,000", date:"2026-01-25", to:"Routine clearing — legitimate traffic", country:"Various", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"YOUR BANK", type:"bank", x:200, y:39, info:"Your institution holds the correspondent (nostro) account for Zerkova. You process their USD wire traffic." },
        { id:1, label:"Zerkova Merkantil", type:"bank", x:200, y:135, info:"Turkish respondent bank, 850 staff, licensed by BDDK. Avg $120M/month throughput. Recent compliance officer departure not publicly explained." },
        { id:2, label:"Qeshm FTZ Trading", type:"company", x:55, y:253, info:"⚠️ Iranian free-trade-zone entity. Qeshm Island FTZ used to circumvent sanctions. $7.05M received across 3 wires — originator field shows only 'ZMB Client' with no natural person or ordering entity." },
        { id:3, label:"Shomal Petrochem", type:"company", x:345, y:253, info:"⚠️ Iranian petrochemical company. Possible SDN-adjacent — shares address with OFAC-listed Karaneh Petrochemical. $5.51M received. Originator fields stripped." },
        { id:4, label:"Al-Burjeel Trading", type:"company", x:55, y:360, info:"UAE general trading company. $3.69M received. Acts as apparent intermediary — re-routes funds to Iranian-nexus recipients. Classic front-company pattern." },
        { id:5, label:"Persianex GmbH", type:"company", x:345, y:360, info:"German-registered import-export firm. Iranian beneficial owner (per German trade register). $1.4M wire — originator listed only as 'Corporate Client.'" },
        { id:6, label:"Iran 🇮🇷", type:"jurisdiction", x:120, y:430, info:"Comprehensive OFAC sanctions programme. FATF counter-measures jurisdiction (blacklist). Any USD-clearing exposure requires immediate review." },
        { id:7, label:"Türkiye 🇹🇷", type:"jurisdiction", x:280, y:430, info:"FATF grey list (removed 2024 but under enhanced follow-up). Known corridor for Iranian sanctions evasion via trade-based schemes." },
      ],
      edges: [[0,1],[1,2],[1,3],[1,4],[1,5],[2,6],[3,6],[4,2],[5,3],[1,7]],
      hotEdges: [[1,2],[1,3],[4,2],[5,3]]
    },
    flags: [
      "Wire stripping detected: 8 of 10 flagged wires have originator fields showing only 'ZMB Client' or 'Corporate Client' — no natural person, no ordering institution, no address. Violates FATF Recommendation 16 (Travel Rule) and Wolfsberg Correspondent Banking Principles.",
      "$12.56M routed directly to Iranian entities (Qeshm FTZ, Shomal Petrochemical) — Iran is subject to comprehensive OFAC sanctions and FATF counter-measures (blacklist).",
      "Shomal Petrochemical PJSC shares registered address with OFAC-listed Karaneh Petrochemical Co. — potential SDN evasion through alias entities.",
      "Al-Burjeel General Trading (UAE) appears to function as a front company — funds received from Zerkova are re-routed onward to Qeshm FTZ. Classic layering via intermediary jurisdiction.",
      "Persianex Import-Export GmbH (Germany) has Iranian beneficial ownership per German trade register. Wire from Zerkova listed originator as 'Corporate Client' only.",
      "Zerkova's chief compliance officer departed 3 months ago — position remains unfilled. No updated KYC refresh received despite annual review being overdue.",
    ],
    feedback: {
      sar: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Filing a SAR is absolutely correct. This is textbook <strong>wire stripping for sanctions evasion</strong>. Zerkova is systematically removing originator information from wires destined for Iranian-nexus entities — a direct violation of <strong>FATF Recommendation 16</strong> (the Travel Rule) and <strong>31 CFR 1010.410(f)</strong> requiring complete originator information on funds transfers. Your bank, as the correspondent, has an obligation under <strong>FinCEN's 2014 Correspondent Banking Advisory</strong> to detect and report exactly this pattern. The $18.6M in Iranian-nexus traffic through your USD clearing means your institution has potential OFAC exposure.",
        coach: "🎓 <strong>AI Coach:</strong> Wire stripping is one of the most serious correspondent banking red flags. When a respondent bank consistently sends wires with incomplete originator fields — especially to sanctioned jurisdictions — that's not a data quality issue, it's deliberate obfuscation. Your bank processes these wires in USD, which gives the US jurisdiction over every transaction regardless of where the parties are located.",
      },
      clear: {
        grade: "bad", title: "Critical Compliance Failure", points: -40,
        explain: "Clearing this would be a <strong>severe sanctions and AML violation</strong>. Your bank is processing $18.6M in USD wires with stripped originator information to Iranian-nexus entities. As the correspondent bank, you are the last line of defence. Clearing this traffic exposes your institution to <strong>OFAC enforcement action</strong>, potential secondary sanctions, and enormous reputational and financial penalties.",
        coach: "🎓 <strong>AI Coach:</strong> In correspondent banking, 'we didn't know' is not a defence. The Wolfsberg Principles and FinCEN advisories are clear: correspondent banks must monitor wire traffic for sanctions red flags, especially incomplete originator information on high-risk corridors.",
      },
      escalate: {
        grade: "partial", title: "Good — But File Simultaneously", points: 70,
        explain: "Escalation to senior management and your sanctions team is appropriate given the Iranian nexus and potential OFAC exposure. However, <strong>a SAR should be filed in parallel</strong>. Escalation alone does not satisfy your regulatory reporting obligation. Given the sanctions dimension, also consider a voluntary self-disclosure to OFAC.",
        coach: "🎓 <strong>AI Coach:</strong> Sanctions-related correspondent banking findings require dual-track action: file the SAR to FinCEN AND escalate internally to your sanctions compliance and legal teams. Time is critical — OFAC voluntary self-disclosure carries significantly reduced penalties.",
      },
      info: {
        grade: "partial", title: "The Evidence Is Overwhelming", points: 40,
        explain: "Requesting more information from Zerkova is prudent as part of ongoing monitoring, but it <strong>must not delay the SAR filing</strong>. You already have sufficient evidence: stripped originator fields, Iranian-nexus beneficiaries, a potential SDN address match, and a front-company pattern. FinCEN's 30-day filing window applies from the date of detection.",
        coach: "🎓 <strong>AI Coach:</strong> In correspondent banking, you can request enhanced data from the respondent AND file a SAR simultaneously. Waiting for a response from a bank that's stripping wires is like asking the fox to guard the henhouse.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 2: Nested Banking — Downstream shell bank access
  // Difficulty: Hard | Correct: escalate
  // ══════════════════════════════════════════════════════════════
  {
    id: "AML-CB-2026-0102",
    name: "Brevkanta Commercial Bank",
    teaser: "Respondent bank — suspected nested banking, unidentified downstream institutions accessing your clearing services",
    amount: "$7,400,000",
    riskLevel: "high",
    riskLabel: "High",
    correct: "escalate",
    profile: {
      occupation: "Respondent Bank — Correspondent Account",
      country: "Latvia",
      pep: "N/A — Institutional",
      riskScore: 78,
      accountAge: "6 years",
      income: "Avg monthly throughput: $55M",
    },
    transactions: [
      { amount:"$1,200,000", date:"2026-02-22", to:"Wire → Grozneft Supply Chain AG", country:"Switzerland", flag:true },
      { amount:"$850,000", date:"2026-02-19", to:"Wire → Belvesta Commodity Trading", country:"UAE", flag:true },
      { amount:"$475,000", date:"2026-02-17", to:"Wire → Nordenvaal Shipping OÜ", country:"Estonia", flag:false },
      { amount:"$2,100,000", date:"2026-02-14", to:"Wire → Grozneft Supply Chain AG", country:"Switzerland", flag:true },
      { amount:"$640,000", date:"2026-02-11", to:"Wire → Belvesta Commodity Trading", country:"UAE", flag:true },
      { amount:"$380,000", date:"2026-02-08", to:"Wire → Ulanthar Resources Ltd", country:"BVI", flag:true },
      { amount:"$1,100,000", date:"2026-02-05", to:"Wire → Grozneft Supply Chain AG", country:"Switzerland", flag:true },
      { amount:"$28,500,000", date:"2026-02-03", to:"Routine clearing — Brevkanta clients", country:"Various", flag:false },
      { amount:"$655,000", date:"2026-01-30", to:"Wire → Caspera Finanz GmbH", country:"Germany", flag:true },
      { amount:"$12,400,000", date:"2026-01-28", to:"Routine clearing — Brevkanta clients", country:"Various", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"YOUR BANK", type:"bank", x:200, y:39, info:"Your institution holds the USD correspondent account for Brevkanta. You provide clearing and settlement services for their international wire traffic." },
        { id:1, label:"Brevkanta Comm.", type:"bank", x:200, y:135, info:"Latvian commercial bank. Licensed by FKTK (now Latvijas Banka). 380 staff. History of serving CIS/NIS clientele. Passed MONEYVAL assessment 2023 with 'largely compliant' rating — but examiners noted weak downstream monitoring." },
        { id:2, label:"[Unknown FI #1]", type:"bank", x:55, y:253, info:"⚠️ ORDERING INSTITUTION UNIDENTIFIED. Multiple wires to Grozneft ($4.4M) list ordering institution as 'BKB/NRI' — not a known BIC or registered bank. Suspected nested institution — possibly Nariman Reserve Bank (unregulated, Kyrgyzstan)." },
        { id:3, label:"[Unknown FI #2]", type:"bank", x:345, y:253, info:"⚠️ ORDERING INSTITUTION UNIDENTIFIED. Wires to Belvesta and Ulanthar ($1.87M) list ordering institution as 'DVBK' — not a valid SWIFT code. No institution found in SWIFT directory or Bankers Almanac. Possible shell bank." },
        { id:4, label:"Grozneft Supply AG", type:"company", x:55, y:368, info:"Swiss-registered commodity trader. Specialises in Central Asian oil and gas. Beneficial owner: Bekzhan Turdaliyev (Kazakh national). $4.4M received. Legitimate registration but operating in sanctioned goods corridor." },
        { id:5, label:"Belvesta Commodity", type:"company", x:345, y:368, info:"UAE-registered commodity trading. $1.49M received. No public website. Registered at virtual office address in DMCC free zone. Beneficial ownership opaque." },
        { id:6, label:"Ulanthar Resources", type:"company", x:118, y:443, info:"BVI-registered. $380K wire. No verifiable business operations. Registered agent only. Classic opacity-jurisdiction shell entity." },
        { id:7, label:"Caspera Finanz", type:"company", x:282, y:443, info:"German-registered finance company. $655K wire. BaFin records show licence application was withdrawn. Operating without financial services licence." },
      ],
      edges: [[0,1],[1,2],[1,3],[2,4],[3,5],[3,6],[2,7],[1,4],[1,5]],
      hotEdges: [[1,2],[1,3],[3,6],[2,7]]
    },
    flags: [
      "Two unidentified ordering institutions detected — 'BKB/NRI' and 'DVBK' are not valid SWIFT BICs and do not appear in the SWIFT directory or Bankers Almanac. This suggests nested banking: downstream institutions are accessing your USD clearing via Brevkanta without your knowledge or approval.",
      "'BKB/NRI' may correspond to 'Nariman Reserve Bank' — an unregulated institution in Kyrgyzstan that lost its banking licence in 2024 for AML deficiencies. If confirmed, this is a shell bank accessing the US financial system through your correspondent account.",
      "$4.4M to Grozneft Supply Chain AG (Switzerland) — commodity trader in Central Asian oil and gas. Potential sanctions risk given the corridor (Kyrgyzstan → Switzerland → commodity markets).",
      "Belvesta Commodity Trading (UAE) and Ulanthar Resources (BVI) — both opacity-jurisdiction entities with no verifiable operations. Combined $1.87M from unidentified ordering institution 'DVBK.'",
      "Caspera Finanz GmbH (Germany) — BaFin records show its financial services licence application was withdrawn. Operating without authorisation. $655K wire originated through unidentified institution.",
      "Brevkanta's MONEYVAL 2023 assessment noted weak downstream monitoring as a specific concern — the bank may not be adequately screening its own respondent relationships.",
    ],
    feedback: {
      escalate: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Escalation is the correct primary action here. Nested banking — where a respondent bank allows unidentified downstream institutions to access your clearing services — is a <strong>fundamental correspondent banking risk</strong> that requires immediate senior management and legal involvement. Under <strong>Section 312 of the USA PATRIOT Act</strong>, your bank is required to take reasonable steps to detect and prevent use of its correspondent accounts by foreign shell banks. The unidentified ordering institutions ('BKB/NRI' and 'DVBK') suggest Brevkanta may be providing indirect access to entities that would not qualify for a direct relationship with your institution. This requires: (1) immediate restriction of the account pending investigation, (2) formal demand to Brevkanta for full disclosure of all downstream institutions using the account, (3) assessment of whether a SAR and/or OFAC voluntary disclosure is also warranted, and (4) a decision on whether to terminate the relationship.",
        coach: "🎓 <strong>AI Coach:</strong> Nested banking is not just an AML risk — it's a <strong>regulatory and legal risk</strong> to your entire institution. Section 312 of the USA PATRIOT Act imposes specific due diligence obligations on US banks maintaining correspondent accounts for foreign financial institutions, including determining whether the respondent provides correspondent services to other foreign banks (so-called 'nesting'). Unlike a standard SAR case where an analyst can file independently, nested banking typically requires coordinated action across compliance, legal, sanctions, and the business line. That's why escalation — not just a SAR — is the right first move.",
      },
      sar: {
        grade: "partial", title: "Good, But Escalation Needed First", points: 80,
        explain: "A SAR will likely be needed, but the <strong>primary action should be escalation</strong>. Nested banking is a relationship-level risk, not just a transaction-level alert. Before filing, you need senior management to assess: whether to restrict the account, whether to demand downstream disclosure from Brevkanta, and whether the shell bank indicators trigger OFAC obligations. A SAR alone doesn't address the systemic exposure.",
        coach: "🎓 <strong>AI Coach:</strong> Think about the difference between transaction-level and relationship-level risk. A SAR reports suspicious activity — but nested banking means the entire correspondent relationship may need to be restricted or terminated. That decision sits above the analyst level.",
      },
      clear: {
        grade: "bad", title: "Critical Compliance Failure", points: -40,
        explain: "Clearing this case would be <strong>extremely dangerous</strong>. Two unidentified financial institutions are accessing your USD clearing services through Brevkanta. One may be a shell bank that lost its licence for AML failures. Under Section 312 of the USA PATRIOT Act, your bank is <strong>prohibited</strong> from providing correspondent services that it knows are being used by foreign shell banks.",
        coach: "🎓 <strong>AI Coach:</strong> Failing to detect nested banking is one of the costliest correspondent banking failures. Multiple banks have paid nine- and ten-figure fines for allowing shell banks and sanctioned entities to access the US financial system through nested correspondent relationships.",
      },
      info: {
        grade: "partial", title: "Request Info, But Don't Wait", points: 60,
        explain: "Requesting information from Brevkanta about the unidentified ordering institutions is appropriate as a <strong>component</strong> of the response, but it cannot be the only action. The account should be <strong>restricted pending their response</strong>, and you must escalate to senior management immediately. If Brevkanta cannot identify 'BKB/NRI' and 'DVBK' — or confirms they are downstream respondent banks — that confirms nesting and likely triggers account closure.",
        coach: "🎓 <strong>AI Coach:</strong> When you suspect nested banking, you restrict first and ask questions second. The risk isn't just the $7.4M in flagged wires — it's what else may be flowing through the account that you haven't detected yet.",
      }
    }
  },

];
