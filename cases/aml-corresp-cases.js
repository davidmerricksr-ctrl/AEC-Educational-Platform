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
  // Flow: Respondent clients → Respondent → MY BANK → Direct
  //       customer / 2nd Respondent → 2nd Respondent clients
  // ══════════════════════════════════════════════════════════════
  {
    id: "AML-CB-2026-0101",
    name: "Zerkova Merkantil Bank",
    teaser: "Respondent bank — wire stripping detected, originator fields missing on $18.6M in transfers to sanctioned-nexus entities routed through your clearing services",
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
      { amount:"$3,200,000", date:"2026-02-20", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$2,800,000", date:"2026-02-18", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Al-Burjeel General Trading", country:"UAE", flag:true },
      { amount:"$1,750,000", date:"2026-02-15", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$4,100,000", date:"2026-02-12", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Shomal Petrochemical PJSC", country:"Iran", flag:true },
      { amount:"$890,000", date:"2026-02-10", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Al-Burjeel General Trading", country:"UAE", flag:true },
      { amount:"$1,400,000", date:"2026-02-07", to:"Zerkova client → YOUR BANK → Persianex Import-Export GmbH (direct acct)", country:"Germany", flag:true },
      { amount:"$2,100,000", date:"2026-02-04", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.", country:"Iran", flag:true },
      { amount:"$950,000", date:"2026-02-01", to:"Tavriz Commodities → Zerkova → YOUR BANK → Meridian AG (direct acct)", country:"Switzerland", flag:false },
      { amount:"$1,410,000", date:"2026-01-28", to:"Zerkova client → YOUR BANK → Al-Dafra Exch. → Shomal Petrochemical PJSC", country:"Iran", flag:true },
      { amount:"$45,200,000", date:"2026-01-25", to:"Routine clearing — legitimate correspondent traffic", country:"Various", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"YOUR BANK", type:"bank", x:200, y:35, info:"Your institution — the correspondent bank. You hold USD nostro/vostro accounts for both Zerkova Merkantil (respondent) and Al-Dafra National Exchange (respondent). All USD payment flows between their clients clear through your books." },
        { id:1, label:"Zerkova Merkantil", type:"bank", x:60, y:140, info:"Turkish respondent bank, 850 staff, licensed by BDDK. Avg $120M/month throughput. You hold their USD correspondent account. Recent compliance officer departure not publicly explained. Sending side of the flagged wires — originator fields are stripped." },
        { id:2, label:"Al-Dafra Nat. Exch.", type:"bank", x:340, y:140, info:"UAE-licensed exchange house and respondent bank. You also hold their USD correspondent account. Receiving side of $15.76M in flagged wires. Their downstream clients include Iranian-nexus entities in the Qeshm FTZ." },
        { id:3, label:"'ZMB Client'", type:"person", x:60, y:260, info:"⚠️ ORIGINATOR UNIDENTIFIED. 8 of 10 flagged wires list originator only as 'ZMB Client' or 'Corporate Client' — no natural person name, no address, no ordering institution BIC. Violates FATF Rec. 16 Travel Rule. This is the wire stripping: Zerkova is deliberately removing originator details." },
        { id:4, label:"Qeshm FTZ Trading", type:"company", x:265, y:260, info:"⚠️ Iranian free-trade-zone entity. Qeshm Island FTZ used to circumvent sanctions. $7.05M received across 3 wires via Al-Dafra. Al-Dafra lists them as a 'trading client' but beneficial ownership traces to IRGC-linked interests." },
        { id:5, label:"Shomal Petrochem", type:"company", x:395, y:260, info:"⚠️ Iranian petrochemical company. Possible SDN-adjacent — shares registered address with OFAC-listed Karaneh Petrochemical. $5.51M received via Al-Dafra. Client of Al-Dafra's exchange services." },
        { id:6, label:"Al-Burjeel Trading", type:"company", x:265, y:365, info:"UAE general trading company. $3.69M received via Al-Dafra. Acts as intermediary — re-routes funds onward to Qeshm FTZ. Classic front-company layering. Client of Al-Dafra." },
        { id:7, label:"Persianex GmbH", type:"company", x:85, y:365, info:"German-registered import-export firm. Iranian beneficial owner per German trade register. $1.4M wire received — holds a direct account at YOUR BANK. Originator listed only as 'Corporate Client.' Direct customer relationship means your bank has primary KYC obligation." },
        { id:8, label:"Iran 🇮🇷", type:"jurisdiction", x:335, y:440, info:"Comprehensive OFAC sanctions programme. FATF counter-measures jurisdiction (blacklist). All USD flows touched your clearing books — giving US jurisdiction over every transaction." },
        { id:9, label:"Tavriz Commodities", type:"company", x:60, y:365, info:"Legitimate Turkish commodity trader. Client of Zerkova. $950K wire with complete originator information — serves as contrast showing Zerkova CAN provide full details when the client permits it." },
      ],
      edges: [
        [1,0,"$18.6M"],[0,2,"$15.76M"],[0,7,"$1.4M"],
        [3,1,"Stripped"],[2,4,"$7.05M"],[2,5,"$5.51M"],[2,6,"$3.69M"],
        [6,4,"Layering"],[4,8],[5,8],
        [9,1,"$950K"]
      ],
      hotEdges: [[1,0],[0,2],[3,1],[2,4],[2,5],[6,4]]
    },
    flags: [
      "Wire stripping detected: 8 of 10 flagged wires have originator fields showing only 'ZMB Client' or 'Corporate Client' — no natural person, no ordering institution, no address. Violates FATF Recommendation 16 (Travel Rule) and Wolfsberg Correspondent Banking Principles.",
      "Your bank is the central clearing hub: Zerkova (respondent) sends USD wires through your nostro account, which you then credit to Al-Dafra's nostro account (also your respondent). Both sides of this payment flow run through YOUR books — you have full visibility and full liability.",
      "$15.76M cleared through your bank and onward to Al-Dafra, whose downstream clients include Iranian-nexus entities (Qeshm FTZ, Shomal Petrochemical) — Iran is subject to comprehensive OFAC sanctions and FATF counter-measures (blacklist).",
      "Shomal Petrochemical PJSC shares registered address with OFAC-listed Karaneh Petrochemical Co. — potential SDN evasion through alias entities. Funds reached them via your clearing of Al-Dafra's account.",
      "Persianex Import-Export GmbH is a direct account holder at YOUR BANK. $1.4M credit from Zerkova with stripped originator. Iranian beneficial ownership per German trade register. Your bank has primary KYC obligation for this customer.",
      "Al-Burjeel General Trading (Al-Dafra client, UAE) functions as a front company — funds received from your clearing are re-routed onward to Qeshm FTZ. Classic layering via intermediary jurisdiction.",
      "Zerkova's chief compliance officer departed 3 months ago — position remains unfilled. No updated KYC refresh received despite annual review being overdue.",
    ],
    feedback: {
      sar: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Filing a SAR is absolutely correct. This is textbook <strong>wire stripping for sanctions evasion</strong> — and your bank sits at the centre of the payment chain. Zerkova (your respondent) is stripping originator information from wires that clear through your USD accounts and land at Al-Dafra (also your respondent), whose clients include Iranian-nexus entities. Because <strong>both respondent banks hold accounts with you</strong>, every dollar of this $18.6M touched your books — giving you both the visibility and the obligation to detect and report it. This is a direct violation of <strong>FATF Recommendation 16</strong> (the Travel Rule) and <strong>31 CFR 1010.410(f)</strong>. Your bank, as the correspondent processing both legs, has exposure under <strong>FinCEN's 2014 Correspondent Banking Advisory</strong>. The Iranian nexus also triggers potential OFAC liability — especially for Persianex GmbH, which holds a direct account at your institution with Iranian beneficial ownership.",
        coach: "🎓 <strong>AI Coach:</strong> This case illustrates why correspondent banks are the critical control point. When you hold accounts for both the sending and receiving respondent banks, you are literally the hub through which all value flows. Wire stripping by the originating respondent doesn't just hide the originator — it prevents the beneficiary respondent (and its regulator) from doing proper screening too. Your bank is the only institution that sees both sides of the payment and can detect the pattern.",
      },
      clear: {
        grade: "bad", title: "Critical Compliance Failure", points: -40,
        explain: "Clearing this would be a <strong>severe sanctions and AML violation</strong>. Your bank processes both sides of this flow: Zerkova's outgoing wires and Al-Dafra's incoming credits. $18.6M in USD wires with stripped originator information, routed through your books to Iranian-nexus entities, represents direct OFAC exposure. Persianex GmbH is your own direct customer with Iranian beneficial ownership — that's a KYC failure on top of the correspondent banking failure.",
        coach: "🎓 <strong>AI Coach:</strong> As the correspondent in the middle, 'we didn't know' is not a defence. The Wolfsberg Principles are clear: correspondent banks must monitor wire traffic for sanctions red flags, and when you hold accounts for both sides of the payment, you have maximum visibility and maximum responsibility.",
      },
      escalate: {
        grade: "partial", title: "Good — But File Simultaneously", points: 70,
        explain: "Escalation to senior management and your sanctions team is appropriate given the Iranian nexus, OFAC exposure, and the fact that two of your respondent relationships are implicated. However, <strong>a SAR should be filed in parallel</strong>. Escalation alone does not satisfy your regulatory reporting obligation. Also consider a voluntary self-disclosure to OFAC given the sanctions dimension, and an immediate KYC review of Persianex GmbH (your direct customer).",
        coach: "🎓 <strong>AI Coach:</strong> Sanctions-related correspondent banking findings require dual-track action: file the SAR to FinCEN AND escalate internally. The added complexity here is that both respondent banks are your clients — so the commercial pressure to 'handle it quietly' will be significant. That's exactly why the SAR filing can't wait.",
      },
      info: {
        grade: "partial", title: "The Evidence Is Overwhelming", points: 40,
        explain: "Requesting more information from Zerkova is prudent as part of ongoing monitoring, but it <strong>must not delay the SAR filing</strong>. You already have sufficient evidence: stripped originator fields, Iranian-nexus beneficiaries through Al-Dafra, a potential SDN address match, a direct customer with Iranian BO, and a front-company pattern. FinCEN's 30-day filing window applies from the date of detection.",
        coach: "🎓 <strong>AI Coach:</strong> In correspondent banking, you can request enhanced data from the respondent AND file a SAR simultaneously. Waiting for a response from a bank that's actively stripping wires is like asking the fox to guard the henhouse. Meanwhile, you should also be asking Al-Dafra for enhanced due diligence on their downstream clients.",
      }
    }
  },

  // ══════════════════════════════════════════════════════════════
  // CASE 2: Nested Banking — Downstream shell bank access
  // Difficulty: Hard | Correct: escalate
  // Flow: Unknown nested FI clients → nested FI → Respondent →
  //       MY BANK → Direct customer / 2nd Respondent → clients
  // ══════════════════════════════════════════════════════════════
  {
    id: "AML-CB-2026-0102",
    name: "Brevkanta Commercial Bank",
    teaser: "Respondent bank — suspected nested banking, unidentified downstream institutions routing payments through your clearing services to commodity traders and opacity-jurisdiction shells",
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
      { amount:"$1,200,000", date:"2026-02-22", to:"'BKB/NRI' via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)", country:"Switzerland", flag:true },
      { amount:"$850,000", date:"2026-02-19", to:"'DVBK' via Brevkanta → YOUR BANK → Kaspara Trade Bank → Belvesta Commodity", country:"UAE", flag:true },
      { amount:"$475,000", date:"2026-02-17", to:"Brevkanta client → YOUR BANK → Nordenvaal Shipping OÜ (direct acct)", country:"Estonia", flag:false },
      { amount:"$2,100,000", date:"2026-02-14", to:"'BKB/NRI' via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)", country:"Switzerland", flag:true },
      { amount:"$640,000", date:"2026-02-11", to:"'DVBK' via Brevkanta → YOUR BANK → Kaspara Trade Bank → Belvesta Commodity", country:"UAE", flag:true },
      { amount:"$380,000", date:"2026-02-08", to:"'DVBK' via Brevkanta → YOUR BANK → Kaspara Trade Bank → Ulanthar Resources", country:"BVI", flag:true },
      { amount:"$1,100,000", date:"2026-02-05", to:"'BKB/NRI' via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)", country:"Switzerland", flag:true },
      { amount:"$28,500,000", date:"2026-02-03", to:"Routine clearing — legitimate Brevkanta client traffic", country:"Various", flag:false },
      { amount:"$655,000", date:"2026-01-30", to:"'BKB/NRI' via Brevkanta → YOUR BANK → Caspera Finanz GmbH (direct acct)", country:"Germany", flag:true },
      { amount:"$12,400,000", date:"2026-01-28", to:"Routine clearing — legitimate Brevkanta client traffic", country:"Various", flag:false },
    ],
    network: {
      nodes: [
        { id:0, label:"YOUR BANK", type:"bank", x:200, y:35, info:"Your institution — the correspondent bank. You hold USD accounts for both Brevkanta (respondent) and Kaspara Trade Bank (respondent). Payments from Brevkanta's clients clear through your books to either your direct customers or onward to Kaspara's clients." },
        { id:1, label:"Brevkanta Comm.", type:"bank", x:60, y:140, info:"Latvian commercial bank. Licensed by Latvijas Banka. 380 staff. History of serving CIS/NIS clientele. Your respondent — holds USD correspondent account with you. MONEYVAL 2023 assessment noted weak downstream monitoring as a specific concern." },
        { id:2, label:"Kaspara Trade Bank", type:"bank", x:340, y:140, info:"Georgian trade finance bank. Also your respondent — holds a separate USD correspondent account with you. Specialises in Central Asian and Caspian commodity finance. Receiving side of $1.87M in flagged wires from Brevkanta's unidentified ordering institutions." },
        { id:3, label:"[Unknown FI #1]", type:"bank", x:60, y:260, info:"⚠️ ORDERING INSTITUTION UNIDENTIFIED. Multiple wires ($5.05M) list ordering institution as 'BKB/NRI' — not a known BIC or registered bank. Suspected nested institution — possibly Nariman Reserve Bank (unregulated, Kyrgyzstan, lost licence 2024 for AML deficiencies). Accessing your USD clearing via Brevkanta without your knowledge." },
        { id:4, label:"[Unknown FI #2]", type:"bank", x:60, y:365, info:"⚠️ ORDERING INSTITUTION UNIDENTIFIED. Wires ($1.87M) list ordering institution as 'DVBK' — not a valid SWIFT code. No institution found in SWIFT directory or Bankers Almanac. Possible shell bank. Accessing your USD clearing illegally via Brevkanta." },
        { id:5, label:"Grozneft Supply AG", type:"company", x:200, y:260, info:"Swiss-registered commodity trader. Specialises in Central Asian oil and gas. Beneficial owner: Bekzhan Turdaliyev (Kazakh national). $4.4M received. Holds a DIRECT ACCOUNT at your bank — your institution has primary KYC obligation. Funds from unidentified 'BKB/NRI' are landing in your own customer's account." },
        { id:6, label:"Belvesta Commodity", type:"company", x:340, y:260, info:"UAE-registered commodity trading. $1.49M received via Kaspara Trade Bank. Client of Kaspara. No public website. Registered at virtual office in DMCC free zone. Beneficial ownership opaque." },
        { id:7, label:"Ulanthar Resources", type:"company", x:395, y:365, info:"BVI-registered shell entity. $380K wire via Kaspara. Client of Kaspara. No verifiable business operations. Registered agent only. Classic opacity-jurisdiction shell." },
        { id:8, label:"Caspera Finanz", type:"company", x:200, y:365, info:"German-registered finance company. $655K wire from 'BKB/NRI' via Brevkanta. Holds a DIRECT ACCOUNT at your bank. BaFin records show licence application was withdrawn — operating without financial services authorisation. Your direct customer." },
        { id:9, label:"Nordenvaal Shipping", type:"company", x:200, y:440, info:"Estonian shipping company. $475K wire — legitimate Brevkanta client with complete originator info. Holds a direct account at your bank. No red flags — included as contrast showing Brevkanta CAN provide full details." },
      ],
      edges: [
        [1,0,"$7.4M"],[0,5,"$4.4M"],[0,2,"$1.87M"],[0,8,"$655K"],[0,9,"$475K"],
        [3,1,"$5.05M"],[4,1,"$1.87M"],
        [2,6,"$1.49M"],[2,7,"$380K"]
      ],
      hotEdges: [[1,0],[3,1],[4,1],[0,2],[2,7]]
    },
    flags: [
      "Two unidentified ordering institutions detected in wires clearing through your bank — 'BKB/NRI' and 'DVBK' are not valid SWIFT BICs and do not appear in the SWIFT directory or Bankers Almanac. This suggests nested banking: downstream institutions are accessing your USD clearing via Brevkanta without your knowledge or approval.",
      "Your bank is the central clearing hub: Brevkanta's wires debit their nostro account with you. Funds then credit either your direct customers (Grozneft, Caspera Finanz, Nordenvaal) or Kaspara Trade Bank's nostro account (also your respondent), who forwards to Belvesta and Ulanthar. Both legs of every payment run through YOUR books.",
      "'BKB/NRI' may correspond to 'Nariman Reserve Bank' — an unregulated institution in Kyrgyzstan that lost its banking licence in 2024 for AML deficiencies. If confirmed, this is a shell bank accessing the US financial system through your correspondent accounts. $5.05M attributed to this source.",
      "Grozneft Supply Chain AG ($4.4M) and Caspera Finanz GmbH ($655K) are YOUR direct customers — funds from unidentified ordering institutions are landing in accounts you hold. Your bank has primary KYC obligation for these customers and must assess whether they are receiving proceeds of nesting.",
      "Caspera Finanz GmbH — BaFin records show its financial services licence application was withdrawn. Operating without authorisation. $655K received from unidentified institution 'BKB/NRI' via Brevkanta, landing in their account at your bank.",
      "Kaspara Trade Bank (your 2nd respondent) receives $1.87M from the Brevkanta flow and forwards to Belvesta (UAE virtual office) and Ulanthar Resources (BVI shell). The entire chain runs through your clearing: nested FI → Brevkanta → YOUR BANK → Kaspara → opacity-jurisdiction entities.",
      "Brevkanta's MONEYVAL 2023 assessment noted weak downstream monitoring as a specific concern — the bank may not be adequately screening its own respondent relationships, enabling nesting.",
    ],
    feedback: {
      escalate: {
        grade: "excellent", title: "Excellent Decision!", points: 150,
        explain: "Escalation is the correct primary action here. Nested banking — where a respondent bank allows unidentified downstream institutions to access your clearing services — is a <strong>fundamental correspondent banking risk</strong> that requires immediate senior management and legal involvement. Under <strong>Section 312 of the USA PATRIOT Act</strong>, your bank is required to take reasonable steps to detect and prevent use of its correspondent accounts by foreign shell banks. The unidentified ordering institutions ('BKB/NRI' and 'DVBK') suggest Brevkanta is providing indirect access to entities that would not qualify for a direct relationship with your institution.<br><br>Critically, <strong>your bank holds accounts for both respondents (Brevkanta and Kaspara) AND two direct customers (Grozneft, Caspera Finanz) in this payment chain</strong>. This means virtually every link in the suspicious flow touches your books. Required actions include: (1) immediate restriction of Brevkanta's account pending investigation, (2) formal demand to Brevkanta for full disclosure of all downstream institutions, (3) enhanced scrutiny of Kaspara's incoming traffic from Brevkanta, (4) KYC review of Grozneft and Caspera Finanz, (5) assessment of whether SAR and/or OFAC voluntary disclosure is warranted, and (6) a decision on whether to terminate one or both respondent relationships.",
        coach: "🎓 <strong>AI Coach:</strong> Nested banking is not just an AML risk — it's a <strong>regulatory and legal risk</strong> to your entire institution. Section 312 of the USA PATRIOT Act imposes specific due diligence obligations on US banks maintaining correspondent accounts. This case is especially dangerous because your bank is the central hub: you hold accounts for the sending respondent, the receiving respondent, AND two of the end beneficiaries. That's unprecedented visibility — and unprecedented liability. Every compliance failure at any point in this chain reflects on you, because the money never left your institution's ecosystem.",
      },
      sar: {
        grade: "partial", title: "Good, But Escalation Needed First", points: 80,
        explain: "A SAR will likely be needed, but the <strong>primary action should be escalation</strong>. Nested banking is a relationship-level risk, not just a transaction-level alert. Before filing, you need senior management to assess: whether to restrict Brevkanta's account, whether to demand downstream disclosure, whether Kaspara's account also needs restriction, and whether the shell bank indicators trigger OFAC obligations. A SAR alone doesn't address the systemic exposure across multiple respondent relationships and direct customer accounts.",
        coach: "🎓 <strong>AI Coach:</strong> Think about the difference between transaction-level and relationship-level risk. A SAR reports suspicious activity — but nested banking means multiple correspondent relationships and direct customer accounts may need to be restricted or terminated simultaneously. That decision sits above the analyst level, especially when it involves this many of your institution's own relationships.",
      },
      clear: {
        grade: "bad", title: "Critical Compliance Failure", points: -40,
        explain: "Clearing this case would be <strong>extremely dangerous</strong>. Two unidentified financial institutions are accessing your USD clearing services through Brevkanta, and the funds are landing at your other respondent (Kaspara) and in your own direct customer accounts (Grozneft, Caspera). One nested institution may be a shell bank that lost its licence for AML failures. Under Section 312 of the USA PATRIOT Act, your bank is <strong>prohibited</strong> from providing correspondent services that it knows are being used by foreign shell banks.",
        coach: "🎓 <strong>AI Coach:</strong> Failing to detect nested banking is one of the costliest correspondent banking failures. When the money flows from an unknown source, through one of your respondents, across your books, and into another of your respondents or your own customers — you are the control point. Multiple banks have paid nine- and ten-figure fines for allowing shell banks to access the US financial system through nested correspondent relationships.",
      },
      info: {
        grade: "partial", title: "Request Info, But Don't Wait", points: 60,
        explain: "Requesting information from Brevkanta about the unidentified ordering institutions is appropriate as a <strong>component</strong> of the response, but it cannot be the only action. The account should be <strong>restricted pending their response</strong>, and you must escalate to senior management immediately. You should also be asking Kaspara Trade Bank about Belvesta and Ulanthar — are these legitimate clients? If Brevkanta cannot identify 'BKB/NRI' and 'DVBK' — or confirms they are downstream respondent banks — that confirms nesting and likely triggers account closure for Brevkanta and enhanced monitoring of Kaspara.",
        coach: "🎓 <strong>AI Coach:</strong> When you suspect nested banking, you restrict first and ask questions second. The risk isn't just the $7.4M in flagged wires — it's what else may be flowing through the account that you haven't detected. And because both respondent banks and two direct customers are involved, the blast radius of inaction is enormous.",
      }
    }
  },

];
