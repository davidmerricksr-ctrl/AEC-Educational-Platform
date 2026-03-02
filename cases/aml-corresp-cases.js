// ═══════════════════════════════════════════════════════════════
// AML CORRESPONDENT BANKING CASES — Respondent Bank Monitoring
// 12 Cases — All names are entirely fictional constructions.
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
id: “AML-CB-2026-0101”,
name: “Zerkova Merkantil Bank”,
teaser: “Respondent bank — wire stripping detected, originator fields missing on $18.6M in transfers to sanctioned-nexus entities routed through your clearing services”,
amount: “$18,600,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Türkiye”,
pep: “N/A — Institutional”,
riskScore: 94,
accountAge: “3 years”,
income: “Avg monthly throughput: $120M”,
},
transactions: [
{ amount:”$3,200,000”, date:“2026-02-20”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.”, country:“Iran”, flag:true },
{ amount:”$2,800,000”, date:“2026-02-18”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Al-Burjeel General Trading”, country:“UAE”, flag:true },
{ amount:”$1,750,000”, date:“2026-02-15”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.”, country:“Iran”, flag:true },
{ amount:”$4,100,000”, date:“2026-02-12”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Shomal Petrochemical PJSC”, country:“Iran”, flag:true },
{ amount:”$890,000”, date:“2026-02-10”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Al-Burjeel General Trading”, country:“UAE”, flag:true },
{ amount:”$1,400,000”, date:“2026-02-07”, to:“Zerkova client → YOUR BANK → Persianex Import-Export GmbH (direct acct)”, country:“Germany”, flag:true },
{ amount:”$2,100,000”, date:“2026-02-04”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Qeshm FTZ Trading Co.”, country:“Iran”, flag:true },
{ amount:”$950,000”, date:“2026-02-01”, to:“Tavriz Commodities → Zerkova → YOUR BANK → Meridian AG (direct acct)”, country:“Switzerland”, flag:false },
{ amount:”$1,410,000”, date:“2026-01-28”, to:“Zerkova client → YOUR BANK → Al-Dafra Exch. → Shomal Petrochemical PJSC”, country:“Iran”, flag:true },
{ amount:”$45,200,000”, date:“2026-01-25”, to:“Routine clearing — legitimate correspondent traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD nostro/vostro accounts for both Zerkova Merkantil (respondent) and Al-Dafra National Exchange (respondent). All USD payment flows between their clients clear through your books.” },
{ id:1, label:“Zerkova Merkantil”, type:“bank”, x:60, y:140, info:“Turkish respondent bank, 850 staff, licensed by BDDK. Avg $120M/month throughput. You hold their USD correspondent account. Recent compliance officer departure not publicly explained. Sending side of the flagged wires — originator fields are stripped.” },
{ id:2, label:“Al-Dafra Nat. Exch.”, type:“bank”, x:340, y:140, info:“UAE-licensed exchange house and respondent bank. You also hold their USD correspondent account. Receiving side of $15.76M in flagged wires. Their downstream clients include Iranian-nexus entities in the Qeshm FTZ.” },
{ id:3, label:”‘ZMB Client’”, type:“person”, x:60, y:260, info:“⚠️ ORIGINATOR UNIDENTIFIED. 8 of 10 flagged wires list originator only as ‘ZMB Client’ or ‘Corporate Client’ — no natural person name, no address, no ordering institution BIC. Violates FATF Rec. 16 Travel Rule. This is the wire stripping: Zerkova is deliberately removing originator details.” },
{ id:4, label:“Qeshm FTZ Trading”, type:“company”, x:265, y:260, info:“⚠️ Iranian free-trade-zone entity. Qeshm Island FTZ used to circumvent sanctions. $7.05M received across 3 wires via Al-Dafra. Al-Dafra lists them as a ‘trading client’ but beneficial ownership traces to IRGC-linked interests.” },
{ id:5, label:“Shomal Petrochem”, type:“company”, x:395, y:260, info:“⚠️ Iranian petrochemical company. Possible SDN-adjacent — shares registered address with OFAC-listed Karaneh Petrochemical. $5.51M received via Al-Dafra. Client of Al-Dafra’s exchange services.” },
{ id:6, label:“Al-Burjeel Trading”, type:“company”, x:265, y:365, info:“UAE general trading company. $3.69M received via Al-Dafra. Acts as intermediary — re-routes funds onward to Qeshm FTZ. Classic front-company layering. Client of Al-Dafra.” },
{ id:7, label:“Persianex GmbH”, type:“company”, x:85, y:365, info:“German-registered import-export firm. Iranian beneficial owner per German trade register. $1.4M wire received — holds a direct account at YOUR BANK. Originator listed only as ‘Corporate Client.’ Direct customer relationship means your bank has primary KYC obligation.” },
{ id:8, label:“Iran 🇮🇷”, type:“jurisdiction”, x:335, y:440, info:“Comprehensive OFAC sanctions programme. FATF counter-measures jurisdiction (blacklist). All USD flows touched your clearing books — giving US jurisdiction over every transaction.” },
{ id:9, label:“Tavriz Commodities”, type:“company”, x:60, y:365, info:“Legitimate Turkish commodity trader. Client of Zerkova. $950K wire with complete originator information — serves as contrast showing Zerkova CAN provide full details when the client permits it.” },
],
edges: [
[1,0,”$18.6M”],[0,2,”$15.76M”],[0,7,”$1.4M”],
[3,1,“Stripped”],[2,4,”$7.05M”],[2,5,”$5.51M”],[2,6,”$3.69M”],
[6,4,“Layering”],[4,8],[5,8],
[9,1,”$950K”]
],
hotEdges: [[1,0],[0,2],[3,1],[2,4],[2,5],[6,4]]
},
flags: [
“Wire stripping detected: 8 of 10 flagged wires have originator fields showing only ‘ZMB Client’ or ‘Corporate Client’ — no natural person, no ordering institution, no address. Violates FATF Recommendation 16 (Travel Rule) and Wolfsberg Correspondent Banking Principles.”,
“Your bank is the central clearing hub: Zerkova (respondent) sends USD wires through your nostro account, which you then credit to Al-Dafra’s nostro account (also your respondent). Both sides of this payment flow run through YOUR books — you have full visibility and full liability.”,
“$15.76M cleared through your bank and onward to Al-Dafra, whose downstream clients include Iranian-nexus entities (Qeshm FTZ, Shomal Petrochemical) — Iran is subject to comprehensive OFAC sanctions and FATF counter-measures (blacklist).”,
“Shomal Petrochemical PJSC shares registered address with OFAC-listed Karaneh Petrochemical Co. — potential SDN evasion through alias entities. Funds reached them via your clearing of Al-Dafra’s account.”,
“Persianex Import-Export GmbH is a direct account holder at YOUR BANK. $1.4M credit from Zerkova with stripped originator. Iranian beneficial ownership per German trade register. Your bank has primary KYC obligation for this customer.”,
“Al-Burjeel General Trading (Al-Dafra client, UAE) functions as a front company — funds received from your clearing are re-routed onward to Qeshm FTZ. Classic layering via intermediary jurisdiction.”,
“Zerkova’s chief compliance officer departed 3 months ago — position remains unfilled. No updated KYC refresh received despite annual review being overdue.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is absolutely correct. This is textbook <strong>wire stripping for sanctions evasion</strong> — and your bank sits at the centre of the payment chain. Zerkova (your respondent) is stripping originator information from wires that clear through your USD accounts and land at Al-Dafra (also your respondent), whose clients include Iranian-nexus entities. Because <strong>both respondent banks hold accounts with you</strong>, every dollar of this $18.6M touched your books — giving you both the visibility and the obligation to detect and report it. This is a direct violation of <strong>FATF Recommendation 16</strong> (the Travel Rule) and <strong>31 CFR 1010.410(f)</strong>. Your bank, as the correspondent processing both legs, has exposure under <strong>FinCEN’s 2014 Correspondent Banking Advisory</strong>. The Iranian nexus also triggers potential OFAC liability — especially for Persianex GmbH, which holds a direct account at your institution with Iranian beneficial ownership.”,
coach: “🎓 <strong>AI Coach:</strong> This case illustrates why correspondent banks are the critical control point. When you hold accounts for both the sending and receiving respondent banks, you are literally the hub through which all value flows. Wire stripping by the originating respondent doesn’t just hide the originator — it prevents the beneficiary respondent (and its regulator) from doing proper screening too. Your bank is the only institution that sees both sides of the payment and can detect the pattern.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would be a <strong>severe sanctions and AML violation</strong>. Your bank processes both sides of this flow: Zerkova’s outgoing wires and Al-Dafra’s incoming credits. $18.6M in USD wires with stripped originator information, routed through your books to Iranian-nexus entities, represents direct OFAC exposure. Persianex GmbH is your own direct customer with Iranian beneficial ownership — that’s a KYC failure on top of the correspondent banking failure.”,
coach: “🎓 <strong>AI Coach:</strong> As the correspondent in the middle, ‘we didn’t know’ is not a defence. The Wolfsberg Principles are clear: correspondent banks must monitor wire traffic for sanctions red flags, and when you hold accounts for both sides of the payment, you have maximum visibility and maximum responsibility.”,
},
escalate: {
grade: “partial”, title: “Good — But File Simultaneously”, points: 70,
explain: “Escalation to senior management and your sanctions team is appropriate given the Iranian nexus, OFAC exposure, and the fact that two of your respondent relationships are implicated. However, <strong>a SAR should be filed in parallel</strong>. Escalation alone does not satisfy your regulatory reporting obligation. Also consider a voluntary self-disclosure to OFAC given the sanctions dimension, and an immediate KYC review of Persianex GmbH (your direct customer).”,
coach: “🎓 <strong>AI Coach:</strong> Sanctions-related correspondent banking findings require dual-track action: file the SAR to FinCEN AND escalate internally. The added complexity here is that both respondent banks are your clients — so the commercial pressure to ‘handle it quietly’ will be significant. That’s exactly why the SAR filing can’t wait.”,
},
info: {
grade: “partial”, title: “The Evidence Is Overwhelming”, points: 40,
explain: “Requesting more information from Zerkova is prudent as part of ongoing monitoring, but it <strong>must not delay the SAR filing</strong>. You already have sufficient evidence: stripped originator fields, Iranian-nexus beneficiaries through Al-Dafra, a potential SDN address match, a direct customer with Iranian BO, and a front-company pattern. FinCEN’s 30-day filing window applies from the date of detection.”,
coach: “🎓 <strong>AI Coach:</strong> In correspondent banking, you can request enhanced data from the respondent AND file a SAR simultaneously. Waiting for a response from a bank that’s actively stripping wires is like asking the fox to guard the henhouse. Meanwhile, you should also be asking Al-Dafra for enhanced due diligence on their downstream clients.”,
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
id: “AML-CB-2026-0102”,
name: “Brevkanta Commercial Bank”,
teaser: “Respondent bank — suspected nested banking, unidentified downstream institutions routing payments through your clearing services to commodity traders and opacity-jurisdiction shells”,
amount: “$7,400,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “escalate”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Latvia”,
pep: “N/A — Institutional”,
riskScore: 78,
accountAge: “6 years”,
income: “Avg monthly throughput: $55M”,
},
transactions: [
{ amount:”$1,200,000”, date:“2026-02-22”, to:”‘BKB/NRI’ via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)”, country:“Switzerland”, flag:true },
{ amount:”$850,000”, date:“2026-02-19”, to:”‘DVBK’ via Brevkanta → YOUR BANK → Kaspara Trade Bank → Belvesta Commodity”, country:“UAE”, flag:true },
{ amount:”$475,000”, date:“2026-02-17”, to:“Brevkanta client → YOUR BANK → Nordenvaal Shipping OÜ (direct acct)”, country:“Estonia”, flag:false },
{ amount:”$2,100,000”, date:“2026-02-14”, to:”‘BKB/NRI’ via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)”, country:“Switzerland”, flag:true },
{ amount:”$640,000”, date:“2026-02-11”, to:”‘DVBK’ via Brevkanta → YOUR BANK → Kaspara Trade Bank → Belvesta Commodity”, country:“UAE”, flag:true },
{ amount:”$380,000”, date:“2026-02-08”, to:”‘DVBK’ via Brevkanta → YOUR BANK → Kaspara Trade Bank → Ulanthar Resources”, country:“BVI”, flag:true },
{ amount:”$1,100,000”, date:“2026-02-05”, to:”‘BKB/NRI’ via Brevkanta → YOUR BANK → Grozneft Supply Chain AG (direct acct)”, country:“Switzerland”, flag:true },
{ amount:”$28,500,000”, date:“2026-02-03”, to:“Routine clearing — legitimate Brevkanta client traffic”, country:“Various”, flag:false },
{ amount:”$655,000”, date:“2026-01-30”, to:”‘BKB/NRI’ via Brevkanta → YOUR BANK → Caspera Finanz GmbH (direct acct)”, country:“Germany”, flag:true },
{ amount:”$12,400,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Brevkanta client traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD accounts for both Brevkanta (respondent) and Kaspara Trade Bank (respondent). Payments from Brevkanta’s clients clear through your books to either your direct customers or onward to Kaspara’s clients.” },
{ id:1, label:“Brevkanta Comm.”, type:“bank”, x:60, y:140, info:“Latvian commercial bank. Licensed by Latvijas Banka. 380 staff. History of serving CIS/NIS clientele. Your respondent — holds USD correspondent account with you. MONEYVAL 2023 assessment noted weak downstream monitoring as a specific concern.” },
{ id:2, label:“Kaspara Trade Bank”, type:“bank”, x:340, y:140, info:“Georgian trade finance bank. Also your respondent — holds a separate USD correspondent account with you. Specialises in Central Asian and Caspian commodity finance. Receiving side of $1.87M in flagged wires from Brevkanta’s unidentified ordering institutions.” },
{ id:3, label:”[Unknown FI #1]”, type:“bank”, x:60, y:260, info:“⚠️ ORDERING INSTITUTION UNIDENTIFIED. Multiple wires ($5.05M) list ordering institution as ‘BKB/NRI’ — not a known BIC or registered bank. Suspected nested institution — possibly Nariman Reserve Bank (unregulated, Kyrgyzstan, lost licence 2024 for AML deficiencies). Accessing your USD clearing via Brevkanta without your knowledge.” },
{ id:4, label:”[Unknown FI #2]”, type:“bank”, x:60, y:365, info:“⚠️ ORDERING INSTITUTION UNIDENTIFIED. Wires ($1.87M) list ordering institution as ‘DVBK’ — not a valid SWIFT code. No institution found in SWIFT directory or Bankers Almanac. Possible shell bank. Accessing your USD clearing illegally via Brevkanta.” },
{ id:5, label:“Grozneft Supply AG”, type:“company”, x:200, y:260, info:“Swiss-registered commodity trader. Specialises in Central Asian oil and gas. Beneficial owner: Bekzhan Turdaliyev (Kazakh national). $4.4M received. Holds a DIRECT ACCOUNT at your bank — your institution has primary KYC obligation. Funds from unidentified ‘BKB/NRI’ are landing in your own customer’s account.” },
{ id:6, label:“Belvesta Commodity”, type:“company”, x:340, y:260, info:“UAE-registered commodity trading. $1.49M received via Kaspara Trade Bank. Client of Kaspara. No public website. Registered at virtual office in DMCC free zone. Beneficial ownership opaque.” },
{ id:7, label:“Ulanthar Resources”, type:“company”, x:395, y:365, info:“BVI-registered shell entity. $380K wire via Kaspara. Client of Kaspara. No verifiable business operations. Registered agent only. Classic opacity-jurisdiction shell.” },
{ id:8, label:“Caspera Finanz”, type:“company”, x:200, y:365, info:“German-registered finance company. $655K wire from ‘BKB/NRI’ via Brevkanta. Holds a DIRECT ACCOUNT at your bank. BaFin records show licence application was withdrawn — operating without financial services authorisation. Your direct customer.” },
{ id:9, label:“Nordenvaal Shipping”, type:“company”, x:200, y:440, info:“Estonian shipping company. $475K wire — legitimate Brevkanta client with complete originator info. Holds a direct account at your bank. No red flags — included as contrast showing Brevkanta CAN provide full details.” },
],
edges: [
[1,0,”$7.4M”],[0,5,”$4.4M”],[0,2,”$1.87M”],[0,8,”$655K”],[0,9,”$475K”],
[3,1,”$5.05M”],[4,1,”$1.87M”],
[2,6,”$1.49M”],[2,7,”$380K”]
],
hotEdges: [[1,0],[3,1],[4,1],[0,2],[2,7]]
},
flags: [
“Two unidentified ordering institutions detected in wires clearing through your bank — ‘BKB/NRI’ and ‘DVBK’ are not valid SWIFT BICs and do not appear in the SWIFT directory or Bankers Almanac. This suggests nested banking: downstream institutions are accessing your USD clearing via Brevkanta without your knowledge or approval.”,
“Your bank is the central clearing hub: Brevkanta’s wires debit their nostro account with you. Funds then credit either your direct customers (Grozneft, Caspera Finanz, Nordenvaal) or Kaspara Trade Bank’s nostro account (also your respondent), who forwards to Belvesta and Ulanthar. Both legs of every payment run through YOUR books.”,
“‘BKB/NRI’ may correspond to ‘Nariman Reserve Bank’ — an unregulated institution in Kyrgyzstan that lost its banking licence in 2024 for AML deficiencies. If confirmed, this is a shell bank accessing the US financial system through your correspondent accounts. $5.05M attributed to this source.”,
“Grozneft Supply Chain AG ($4.4M) and Caspera Finanz GmbH ($655K) are YOUR direct customers — funds from unidentified ordering institutions are landing in accounts you hold. Your bank has primary KYC obligation for these customers and must assess whether they are receiving proceeds of nesting.”,
“Caspera Finanz GmbH — BaFin records show its financial services licence application was withdrawn. Operating without authorisation. $655K received from unidentified institution ‘BKB/NRI’ via Brevkanta, landing in their account at your bank.”,
“Kaspara Trade Bank (your 2nd respondent) receives $1.87M from the Brevkanta flow and forwards to Belvesta (UAE virtual office) and Ulanthar Resources (BVI shell). The entire chain runs through your clearing: nested FI → Brevkanta → YOUR BANK → Kaspara → opacity-jurisdiction entities.”,
“Brevkanta’s MONEYVAL 2023 assessment noted weak downstream monitoring as a specific concern — the bank may not be adequately screening its own respondent relationships, enabling nesting.”,
],
feedback: {
escalate: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Escalation is the correct primary action here. Nested banking — where a respondent bank allows unidentified downstream institutions to access your clearing services — is a <strong>fundamental correspondent banking risk</strong> that requires immediate senior management and legal involvement. Under <strong>Section 312 of the USA PATRIOT Act</strong>, your bank is required to take reasonable steps to detect and prevent use of its correspondent accounts by foreign shell banks. The unidentified ordering institutions (‘BKB/NRI’ and ‘DVBK’) suggest Brevkanta is providing indirect access to entities that would not qualify for a direct relationship with your institution.<br><br>Critically, <strong>your bank holds accounts for both respondents (Brevkanta and Kaspara) AND two direct customers (Grozneft, Caspera Finanz) in this payment chain</strong>. This means virtually every link in the suspicious flow touches your books. Required actions include: (1) immediate restriction of Brevkanta’s account pending investigation, (2) formal demand to Brevkanta for full disclosure of all downstream institutions, (3) enhanced scrutiny of Kaspara’s incoming traffic from Brevkanta, (4) KYC review of Grozneft and Caspera Finanz, (5) assessment of whether SAR and/or OFAC voluntary disclosure is warranted, and (6) a decision on whether to terminate one or both respondent relationships.”,
coach: “🎓 <strong>AI Coach:</strong> Nested banking is not just an AML risk — it’s a <strong>regulatory and legal risk</strong> to your entire institution. Section 312 of the USA PATRIOT Act imposes specific due diligence obligations on US banks maintaining correspondent accounts. This case is especially dangerous because your bank is the central hub: you hold accounts for the sending respondent, the receiving respondent, AND two of the end beneficiaries. That’s unprecedented visibility — and unprecedented liability. Every compliance failure at any point in this chain reflects on you, because the money never left your institution’s ecosystem.”,
},
sar: {
grade: “partial”, title: “Good, But Escalation Needed First”, points: 80,
explain: “A SAR will likely be needed, but the <strong>primary action should be escalation</strong>. Nested banking is a relationship-level risk, not just a transaction-level alert. Before filing, you need senior management to assess: whether to restrict Brevkanta’s account, whether to demand downstream disclosure, whether Kaspara’s account also needs restriction, and whether the shell bank indicators trigger OFAC obligations. A SAR alone doesn’t address the systemic exposure across multiple respondent relationships and direct customer accounts.”,
coach: “🎓 <strong>AI Coach:</strong> Think about the difference between transaction-level and relationship-level risk. A SAR reports suspicious activity — but nested banking means multiple correspondent relationships and direct customer accounts may need to be restricted or terminated simultaneously. That decision sits above the analyst level, especially when it involves this many of your institution’s own relationships.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this case would be <strong>extremely dangerous</strong>. Two unidentified financial institutions are accessing your USD clearing services through Brevkanta, and the funds are landing at your other respondent (Kaspara) and in your own direct customer accounts (Grozneft, Caspera). One nested institution may be a shell bank that lost its licence for AML failures. Under Section 312 of the USA PATRIOT Act, your bank is <strong>prohibited</strong> from providing correspondent services that it knows are being used by foreign shell banks.”,
coach: “🎓 <strong>AI Coach:</strong> Failing to detect nested banking is one of the costliest correspondent banking failures. When the money flows from an unknown source, through one of your respondents, across your books, and into another of your respondents or your own customers — you are the control point. Multiple banks have paid nine- and ten-figure fines for allowing shell banks to access the US financial system through nested correspondent relationships.”,
},
info: {
grade: “partial”, title: “Request Info, But Don’t Wait”, points: 60,
explain: “Requesting information from Brevkanta about the unidentified ordering institutions is appropriate as a <strong>component</strong> of the response, but it cannot be the only action. The account should be <strong>restricted pending their response</strong>, and you must escalate to senior management immediately. You should also be asking Kaspara Trade Bank about Belvesta and Ulanthar — are these legitimate clients? If Brevkanta cannot identify ‘BKB/NRI’ and ‘DVBK’ — or confirms they are downstream respondent banks — that confirms nesting and likely triggers account closure for Brevkanta and enhanced monitoring of Kaspara.”,
coach: “🎓 <strong>AI Coach:</strong> When you suspect nested banking, you restrict first and ask questions second. The risk isn’t just the $7.4M in flagged wires — it’s what else may be flowing through the account that you haven’t detected. And because both respondent banks and two direct customers are involved, the blast radius of inaction is enormous.”,
}
}
},

// ═══════════════════════════════════════════════════════════════
// AML CORRESPONDENT BANKING CASES — 10 ADDITIONAL CASES
// Paste these objects into the AML_CORRESP_CASES array after the
// existing 2 cases (add a comma after the closing } of Case 2).
// All names are entirely fictional constructions.
// ═══════════════════════════════════════════════════════════════

// ══════════════════════════════════════════════════════════════
// CASE 3: Trade-Based Money Laundering — Over/Under Invoicing
// Difficulty: Hard | Correct: SAR
// Flow: Huaqiao respondent clients → Huaqiao → YOUR BANK →
//       Condor Mercantil (2nd respondent) → LatAm importers
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0103”,
name: “Huaqiao Commercial Bank”,
teaser: “Respondent bank — trade-based money laundering detected, $32.1M in grossly mis-invoiced goods flowing through your clearing to Latin American shell importers”,
amount: “$32,100,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “China”,
pep: “N/A — Institutional”,
riskScore: 88,
accountAge: “5 years”,
income: “Avg monthly throughput: $210M”,
},
transactions: [
{ amount:”$6,400,000”, date:“2026-02-21”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Miraflores Import SA”, country:“Peru”, flag:true },
{ amount:”$4,200,000”, date:“2026-02-18”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Andes Distribuidora SRL”, country:“Bolivia”, flag:true },
{ amount:”$3,800,000”, date:“2026-02-15”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Miraflores Import SA”, country:“Peru”, flag:true },
{ amount:”$5,100,000”, date:“2026-02-12”, to:“Huaqiao client → YOUR BANK → Zenith Commodity Trading (direct acct)”, country:“Panama”, flag:true },
{ amount:”$2,900,000”, date:“2026-02-09”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Plata Celeste LLC”, country:“Colombia”, flag:true },
{ amount:”$3,600,000”, date:“2026-02-06”, to:“Huaqiao client → YOUR BANK → Zenith Commodity Trading (direct acct)”, country:“Panama”, flag:true },
{ amount:”$2,700,000”, date:“2026-02-03”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Andes Distribuidora SRL”, country:“Bolivia”, flag:true },
{ amount:”$3,400,000”, date:“2026-01-31”, to:“Huaqiao client → YOUR BANK → Condor Mercantil → Miraflores Import SA”, country:“Peru”, flag:true },
{ amount:”$82,000,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Huaqiao trade finance”, country:“Various”, flag:false },
{ amount:”$48,500,000”, date:“2026-01-25”, to:“Routine clearing — legitimate Huaqiao trade finance”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD correspondent accounts for both Huaqiao Commercial Bank (China) and Condor Mercantil (Panama). All trade-finance payments between their clients clear through your books.” },
{ id:1, label:“Huaqiao Comm.”, type:“bank”, x:55, y:140, info:“Chinese commercial bank. PBOC-licensed, 1,200 staff. Avg $210M/month throughput. Your respondent — heavy trade finance activity. Sending side of all flagged wires. Invoice descriptions are generic: ‘consumer electronics,’ ‘textiles,’ ‘machinery parts.’” },
{ id:2, label:“Condor Mercantil”, type:“bank”, x:345, y:140, info:“Panamanian trade bank. Also your respondent — holds separate USD correspondent account. Receives $23.6M of the flagged traffic. Specialises in Latin American commodity imports. Weak GAFILAT mutual evaluation (2024) — ‘partially compliant’ on wire transfer rules.” },
{ id:3, label:“Shenzhen Longhui”, type:“company”, x:55, y:260, info:“⚠️ Shenzhen-registered trading company. Originator on $24.4M in wires. Exports ‘consumer electronics’ but customs data shows unit prices 400-800% above market. Registered capital only ¥500K (~$69K) — wildly inconsistent with $32M in monthly wire volume.” },
{ id:4, label:“Miraflores Import”, type:“company”, x:265, y:260, info:“⚠️ Peruvian import company. $13.6M received via Condor Mercantil. Client of Condor. Customs declarations show ‘electronic components’ at $4,200/kg — market rate is ~$80/kg. Classic over-invoicing to justify value transfer.” },
{ id:5, label:“Andes Distribuidora”, type:“company”, x:395, y:260, info:“⚠️ Bolivian distributor. $6.9M received via Condor. No public presence. Registered at residential address in Santa Cruz. Beneficial owner linked to Chapare region — major coca-producing area.” },
{ id:6, label:“Zenith Commodity”, type:“company”, x:130, y:350, info:“Panamanian commodity trader. $8.7M received. Holds DIRECT ACCOUNT at your bank — your institution has primary KYC obligation. BVI subsidiary handles ‘logistics.’ No employees listed. Re-exports goods to Colombia and Venezuela at below-cost prices — under-invoicing on the reverse leg.” },
{ id:7, label:“Plata Celeste LLC”, type:“company”, x:345, y:350, info:“Colombian company. $2.9M received via Condor. Recently incorporated (4 months old). Single director. Address matches a residential apartment in Medellín. No verifiable import licence.” },
{ id:8, label:“Chapare Region 🇧🇴”, type:“jurisdiction”, x:395, y:420, info:“Major coca-producing region of Bolivia. The Andes Distribuidora beneficial owner connection to this area, combined with grossly inflated trade invoices, is a textbook indicator of narcotics-linked trade-based money laundering.” },
],
edges: [
[1,0,”$32.1M”],[0,2,”$23.6M”],[0,6,”$8.7M”],
[3,1,“Over-invoiced”],[2,4,”$13.6M”],[2,5,”$6.9M”],[2,7,”$2.9M”],
[5,8],[6,7,“Under-inv.”]
],
hotEdges: [[1,0],[0,2],[3,1],[2,4],[2,5],[6,7]]
},
flags: [
“Trade-based money laundering indicators: Shenzhen Longhui Trading exports ‘consumer electronics’ at unit prices 400-800% above market rates. Customs data cross-referenced via trade transparency databases shows systematic over-invoicing to inflate the legitimate value of wire transfers.”,
“Shenzhen Longhui has registered capital of only ¥500K (~$69K) but originated $32.1M in wires in a single month. The disparity between capitalisation and transaction volume is a critical TBML red flag per FATF Trade-Based ML guidance (2006, updated 2020).”,
“Your bank clears both sides: Huaqiao (sending respondent) debits through your nostro, and Condor Mercantil (receiving respondent) credits through your nostro. $8.7M also credits your direct customer Zenith Commodity Trading. Full visibility, full liability.”,
“Andes Distribuidora SRL (Bolivia, $6.9M via Condor) — beneficial owner linked to Chapare region, Bolivia’s primary coca-producing area. Combined with phantom invoicing, this matches the TBML pattern used to launder narcotics proceeds through the China–Latin America trade corridor.”,
“Zenith Commodity Trading (your direct customer, $8.7M) re-exports goods to Colombia and Venezuela at below-cost prices — the reverse-leg under-invoicing completes the round-trip. Value moves China→Panama→LatAm as over-priced goods; returns as under-priced goods. Net effect: $32M laundered.”,
“Plata Celeste LLC (Colombia) — 4-month-old company, single director, residential address, no import licence. $2.9M received. Classic shell importer in a TBML chain.”,
“Condor Mercantil’s GAFILAT 2024 evaluation rated it ‘partially compliant’ on Recommendation 16 (wire transfers) — raising concerns about its trade document verification and beneficial ownership screening.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is absolutely correct. This is a textbook <strong>trade-based money laundering (TBML)</strong> scheme using your correspondent clearing as the value transfer mechanism. Shenzhen Longhui is over-invoicing exports through Huaqiao, your respondent, to inflate wire transfers that clear through your books to Latin American shell importers via Condor Mercantil, your second respondent. Your direct customer Zenith then under-invoices the return leg, completing the laundering cycle. <strong>FATF’s TBML typologies report</strong> and <strong>FinCEN Advisory FIN-2020-A008</strong> specifically identify this over/under-invoicing pattern in the China–Latin America corridor. The Chapare-region beneficial ownership connection to Andes Distribuidora adds potential <strong>narcotics nexus</strong>, which elevates the reporting priority.”,
coach: “🎓 <strong>AI Coach:</strong> Trade-based money laundering is the hardest typology to detect because it hides behind legitimate-looking trade documents. The key skill is learning to spot the mismatches: unit prices wildly above or below market, company capitalisation inconsistent with wire volumes, and phantom goods that never physically move. As the correspondent bank clearing both sides, you’re uniquely positioned to see these patterns — the sending bank sees only exports, the receiving bank sees only imports, but you see the whole value chain.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would miss one of the most prolific money laundering typologies in global trade finance. $32.1M in grossly over-invoiced trade payments is flowing through your clearing to shell importers with narcotics-region beneficial ownership. Your own direct customer Zenith is participating in the reverse leg. <strong>FinCEN’s TBML Advisory</strong> specifically warns correspondent banks about this pattern.”,
coach: “🎓 <strong>AI Coach:</strong> Trade-based ML accounts for an estimated $1.6 trillion annually in illicit flows. When a company with $69K in capital is moving $32M through your clearing — that’s not a sophisticated scheme, it’s a screaming red flag that demands action.”,
},
escalate: {
grade: “partial”, title: “Good — But File Simultaneously”, points: 70,
explain: “Escalation is warranted given two respondent relationships and a direct customer are implicated. However, a <strong>SAR must be filed concurrently</strong>. You have sufficient evidence: gross over-invoicing, shell importers, narcotics-region connections, and a direct customer doing reverse under-invoicing. The 30-day filing clock is ticking. Also consider whether your bank’s trade finance team needs to freeze Zenith Commodity’s account pending KYC review.”,
coach: “🎓 <strong>AI Coach:</strong> TBML cases often require coordinated action because they implicate multiple relationships. But don’t let the complexity delay the SAR. File on the evidence you have and supplement later — FinCEN allows SAR amendments.”,
},
info: {
grade: “partial”, title: “Trade Data Already Tells the Story”, points: 40,
explain: “While requesting trade documentation (invoices, bills of lading, customs declarations) from both respondents is a valid investigative step, <strong>the pricing anomalies already constitute reportable suspicious activity</strong>. 400-800% over-invoicing is not a rounding error — it’s intentional. You should request the documents AND file a SAR simultaneously. Check whether Zenith Commodity Trading (your direct customer) can provide shipping documentation for its ‘re-exports’ — this will likely reveal the goods either don’t exist or never moved.”,
coach: “🎓 <strong>AI Coach:</strong> In TBML investigations, trade documents often reveal more lies than truths. But you don’t need to prove fraud to file a SAR — you only need to identify ‘known or suspected’ suspicious activity. The pricing data alone clears that bar by a wide margin.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 4: Mirror Trading — Identical Opposite Trades
// Difficulty: Hard | Correct: SAR
// Flow: Vistara respondent clients → Vistara → YOUR BANK →
//       Palladian Capital (direct acct) / Oresund Bank (2nd resp)
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0104”,
name: “Vistara Agroindbank”,
teaser: “Respondent bank — mirror trading pattern detected, $11.2M in perfectly matched opposite-direction securities trades converting Moldovan lei to USD through your clearing”,
amount: “$11,200,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Moldova”,
pep: “N/A — Institutional”,
riskScore: 82,
accountAge: “4 years”,
income: “Avg monthly throughput: $35M”,
},
transactions: [
{ amount:”$1,800,000”, date:“2026-02-22”, to:“Vistara client buys → YOUR BANK settles → Oresund Bank → Palladian sells identical position”, country:“Cyprus”, flag:true },
{ amount:”$1,400,000”, date:“2026-02-19”, to:“Vistara client buys → YOUR BANK settles → Palladian Capital (direct acct) sells”, country:“Cyprus”, flag:true },
{ amount:”$1,650,000”, date:“2026-02-16”, to:“Vistara client buys → YOUR BANK settles → Oresund Bank → Palladian sells identical position”, country:“Cyprus”, flag:true },
{ amount:”$1,200,000”, date:“2026-02-13”, to:“Vistara client buys → YOUR BANK settles → Palladian Capital (direct acct) sells”, country:“Cyprus”, flag:true },
{ amount:”$1,900,000”, date:“2026-02-10”, to:“Vistara client buys → YOUR BANK settles → Oresund Bank → Palladian sells identical position”, country:“Cyprus”, flag:true },
{ amount:”$1,100,000”, date:“2026-02-07”, to:“Vistara client buys → YOUR BANK settles → Palladian Capital (direct acct) sells”, country:“Cyprus”, flag:true },
{ amount:”$2,150,000”, date:“2026-02-04”, to:“Vistara client buys → YOUR BANK settles → Oresund Bank → Palladian sells identical position”, country:“Cyprus”, flag:true },
{ amount:”$14,200,000”, date:“2026-02-01”, to:“Routine clearing — legitimate Vistara client activity”, country:“Various”, flag:false },
{ amount:”$8,600,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Vistara client activity”, country:“Various”, flag:false },
{ amount:”$950,000”, date:“2026-01-25”, to:“Legitimate Vistara treasury position — market hedging”, country:“UK”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing accounts for both Vistara Agroindbank (Moldova) and Oresund Nordic Bank (Cyprus). You also hold a direct brokerage/custody account for Palladian Capital. All settlement flows pass through your books.” },
{ id:1, label:“Vistara Agroindbank”, type:“bank”, x:55, y:140, info:“Moldovan commercial bank. Licensed by National Bank of Moldova. 420 staff. Your respondent. Buy-side of every flagged trade: their clients purchase illiquid securities with Moldovan lei-funded USD, and the USD settlement clears through your bank.” },
{ id:2, label:“Oresund Nordic Bank”, type:“bank”, x:345, y:140, info:“Cyprus-licensed bank. Also your respondent. Receives $7.5M in settlement flows. Palladian Capital is their client for some trades, routing sell-side proceeds through Oresund’s nostro account with you.” },
{ id:3, label:“Galderi Holdings”, type:“company”, x:55, y:260, info:“⚠️ Moldovan holding company. Client of Vistara. Buyer on all flagged trades. Beneficial owner: Anatol Cebotaru (Moldovan national, no public profile). Converts MDL to USD via these ‘securities purchases’ — but the securities are illiquid instruments with no genuine market.” },
{ id:4, label:“Palladian Capital”, type:“company”, x:200, y:260, info:“⚠️ Cypriot investment firm. Seller on every flagged trade — perfectly matched opposite positions. $3.7M settles via DIRECT ACCOUNT at your bank. $7.5M settles via Oresund. Same beneficial owner network as Galderi (shared Cypriot registered agent). Net effect: MDL in Moldova becomes USD in Cyprus.” },
{ id:5, label:“Oresund clients”, type:“company”, x:345, y:260, info:“Palladian uses Oresund to settle larger trades ($7.5M). Oresund may not recognise the mirror pattern because they only see the sell side.” },
{ id:6, label:“Volkov & Assoc.”, type:“person”, x:130, y:365, info:“Chișinău-based corporate services firm. Registered agent for both Galderi Holdings AND Palladian Capital. This shared registered agent is the link proving coordinated control of both sides of the mirror trades.” },
{ id:7, label:“Moldova 🇲🇩”, type:“jurisdiction”, x:55, y:430, info:“MONEYVAL member. Recent assessments identified mirror trading via Moldovan banks as a specific national risk. Several Moldovan banks have lost licences for facilitating Russian capital flight through mirror and ‘laundromat’ schemes.” },
],
edges: [
[1,0,”$11.2M”],[0,4,”$3.7M”],[0,2,”$7.5M”],
[3,1,“Buys MDL→USD”],[2,5,”$7.5M”],[5,4,“Sell proceeds”],
[6,3,“Agent”],[6,4,“Agent”],[3,7]
],
hotEdges: [[1,0],[0,4],[0,2],[6,3],[6,4]]
},
flags: [
“Mirror trading pattern detected: Galderi Holdings (Vistara client, Moldova) buys illiquid securities, and Palladian Capital (Cyprus) simultaneously sells identical positions. Every buy has a perfectly matched sell — same instrument, same quantity, same day. Net effect: Moldovan lei becomes USD in Cyprus.”,
“The securities used are illiquid, thinly-traded instruments with no genuine market depth. They serve purely as the conversion vehicle — nobody is making an investment decision. This matches the mirror trading typology used in the Deutsche Bank / Russian laundromat enforcement actions.”,
“Shared registered agent: Volkov & Associates (Chișinău) is the corporate services provider for BOTH Galderi Holdings and Palladian Capital. This proves the buyer and seller are controlled by the same network — the trades are pre-arranged, not arm’s-length.”,
“Your bank sees both sides: Vistara’s settlement debits clear through your books (buy side), and Palladian’s proceeds credit either your direct custody account ($3.7M) or Oresund’s nostro ($7.5M). You are the only institution with visibility of the complete round-trip.”,
“Palladian Capital holds a direct brokerage/custody account at your bank — $3.7M in sell-side proceeds landed there. Your institution has primary KYC obligation and should have flagged the pattern of always selling exactly what Galderi buys.”,
“Moldova has been specifically identified by MONEYVAL as vulnerable to mirror trading schemes. Several Moldovan banks lost licences in 2014-2017 for facilitating the ‘Russian Laundromat’ — a $20B+ mirror trading operation that converted rubles to dollars through Moldovan courts and banks.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is correct. This is a <strong>mirror trading scheme</strong> — one of the most well-documented correspondent banking laundering typologies. Galderi Holdings buys illiquid securities in Moldova (converting lei to USD) and Palladian Capital simultaneously sells the identical position in Cyprus (receiving USD). Because both sides settle through your clearing, your bank is the mechanism enabling the currency conversion. The <strong>Deutsche Bank mirror trading enforcement action ($630M in penalties, 2017)</strong> involved the identical typology through Moscow and London. The shared registered agent (Volkov & Associates) proves coordinated control. Under <strong>FinCEN Advisory FIN-2017-A006</strong>, mirror trading through correspondent accounts is specifically flagged as reportable suspicious activity.”,
coach: “🎓 <strong>AI Coach:</strong> Mirror trading is elegant in its simplicity: if you can arrange to buy and sell the same security at the same time in two different countries, you’ve effectively moved money across borders without a conventional wire transfer. The correspondent bank sitting in the middle processes what looks like normal securities settlement — until you notice that the buyer and seller are the same beneficial network, the securities are illiquid garbage, and the net effect is always one-directional: lei in, dollars out.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would replicate the exact failure that cost Deutsche Bank $630M in penalties. Mirror trading through your correspondent clearing is a well-known money laundering typology. The shared registered agent between buyer and seller, the use of illiquid securities, and the one-directional flow (lei→USD) are textbook indicators. Your own direct customer Palladian is receiving the laundered proceeds.”,
coach: “🎓 <strong>AI Coach:</strong> After Deutsche Bank, every correspondent bank should have mirror trading in its typology library. When you see perfectly matched opposite trades through your clearing — same instrument, same day, same quantity — that’s not coincidence, it’s coordination.”,
},
escalate: {
grade: “partial”, title: “Good — But File Simultaneously”, points: 70,
explain: “Escalation is appropriate given two respondent relationships and a direct customer are involved. However, <strong>a SAR must be filed in parallel</strong>. The mirror trading pattern is unambiguous — shared agent, illiquid instruments, perfectly matched trades. You should also notify your brokerage/custody team about Palladian’s account and consider whether Oresund Nordic Bank’s relationship needs enhanced monitoring.”,
coach: “🎓 <strong>AI Coach:</strong> Mirror trading cases often require coordination with your markets/trading compliance team because the activity looks like normal settlement. Make sure the SAR narrative explains the typology clearly — not everyone reading it will understand securities settlement mechanics.”,
},
info: {
grade: “partial”, title: “The Pattern Speaks for Itself”, points: 40,
explain: “You can request trade confirmations and beneficial ownership documentation from Vistara and Oresund, but <strong>the mirror pattern is already conclusive</strong>. Every buy has an identical sell. The buyer and seller share a registered agent. The securities are illiquid. This isn’t circumstantial — it’s structural. File the SAR now and continue investigating in parallel.”,
coach: “🎓 <strong>AI Coach:</strong> Mirror trading is unusual among ML typologies because the pattern itself is the evidence. You don’t need to trace the money further — the perfectly matched opposite trades ARE the laundering mechanism. Additional documentation may help you quantify the total exposure, but it won’t change the conclusion.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 5: Funnel Accounts — Structuring via Respondent
// Difficulty: Hard | Correct: SAR
// Flow: Multiple depositors → Bancomex respondent → YOUR BANK →
//       Direct customers (real estate / auto dealers)
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0105”,
name: “Bancomex Regional”,
teaser: “Respondent bank — funnel account pattern, $4.8M in structured cash deposits aggregated and wired through your clearing to US real estate and luxury purchases”,
amount: “$4,800,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Mexico”,
pep: “N/A — Institutional”,
riskScore: 76,
accountAge: “7 years”,
income: “Avg monthly throughput: $85M”,
},
transactions: [
{ amount:”$875,000”, date:“2026-02-22”, to:“Multiple Bancomex depositors → YOUR BANK → Sunbelt Title & Escrow (direct acct)”, country:“US”, flag:true },
{ amount:”$640,000”, date:“2026-02-19”, to:“Multiple Bancomex depositors → YOUR BANK → Prestige Auto Holdings (direct acct)”, country:“US”, flag:true },
{ amount:”$920,000”, date:“2026-02-15”, to:“Multiple Bancomex depositors → YOUR BANK → Sunbelt Title & Escrow (direct acct)”, country:“US”, flag:true },
{ amount:”$450,000”, date:“2026-02-12”, to:“Multiple Bancomex depositors → YOUR BANK → Apex Realty Partners (direct acct)”, country:“US”, flag:true },
{ amount:”$780,000”, date:“2026-02-09”, to:“Multiple Bancomex depositors → YOUR BANK → Sunbelt Title & Escrow (direct acct)”, country:“US”, flag:true },
{ amount:”$535,000”, date:“2026-02-06”, to:“Multiple Bancomex depositors → YOUR BANK → Prestige Auto Holdings (direct acct)”, country:“US”, flag:true },
{ amount:”$600,000”, date:“2026-02-03”, to:“Multiple Bancomex depositors → YOUR BANK → Apex Realty Partners (direct acct)”, country:“US”, flag:true },
{ amount:”$38,200,000”, date:“2026-01-30”, to:“Routine clearing — legitimate Bancomex traffic”, country:“Various”, flag:false },
{ amount:”$22,100,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Bancomex remittance traffic”, country:“US”, flag:false },
{ amount:”$18,400,000”, date:“2026-01-25”, to:“Routine clearing — legitimate Bancomex traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for Bancomex Regional. All three receiving entities — Sunbelt Title, Prestige Auto, Apex Realty — are YOUR direct customers. You clear both sides of every flagged payment.” },
{ id:1, label:“Bancomex Regional”, type:“bank”, x:70, y:150, info:“Mexican regional bank. CNBV-licensed. 280 staff. Border region (Chihuahua). Your respondent. Sending side of all flagged wires. Wire descriptions say ‘commercial payments’ but underlying deposits are structured cash from 15+ individuals — none exceeding MXN $149,000 (~$8,300 USD) individually.” },
{ id:2, label:“15+ Cash Depositors”, type:“person”, x:70, y:275, info:“⚠️ FUNNEL ACCOUNT PATTERN. At least 15 different individuals make cash deposits into a single Bancomex account (held by ‘Grupo Fronterizo SA de CV’) in amounts just below Mexico’s $8,500 USD reporting threshold. Deposits occur at multiple branches within hours of each other. Combined deposits are then wired as single lump-sum payments through your bank.” },
{ id:3, label:“Grupo Fronterizo”, type:“company”, x:70, y:385, info:“⚠️ Mexican company. The Bancomex account holder receiving the structured cash deposits. Registered as ‘import/export’ but no verifiable trade activity. Located in Ciudad Juárez, directly across the border from El Paso, TX. Account opened 8 months ago.” },
{ id:4, label:“Sunbelt Title”, type:“company”, x:270, y:200, info:“Texas title and escrow company. $2.575M received. YOUR DIRECT CUSTOMER. Handles real estate closings. Three properties purchased in cash — all in El Paso, TX, all purchased by LLCs with opaque beneficial ownership. Your bank has BSA obligations on these closings.” },
{ id:5, label:“Prestige Auto”, type:“company”, x:330, y:310, info:“Texas luxury auto dealer. $1.175M received. YOUR DIRECT CUSTOMER. Two high-value vehicle purchases: a $490K exotic car and a $685K armored SUV. Buyers listed as Grupo Fronterizo’s ‘officers’ but names don’t match any corporate registration.” },
{ id:6, label:“Apex Realty”, type:“company”, x:200, y:400, info:“New Mexico real estate firm. $1.05M received. YOUR DIRECT CUSTOMER. Commercial property purchased via anonymous LLC in Las Cruces, NM — 45 minutes from Ciudad Juárez. FinCEN Geographic Targeting Order (GTO) area.” },
{ id:7, label:“Ciudad Juárez 🇲🇽”, type:“jurisdiction”, x:70, y:450, info:“Border city. Major drug trafficking corridor. DEA High Intensity Drug Trafficking Area (HIDTA). FinCEN has issued multiple advisories on cross-border structuring and funnel accounts originating from this corridor.” },
],
edges: [
[1,0,”$4.8M”],[0,4,”$2.575M”],[0,5,”$1.175M”],[0,6,”$1.05M”],
[2,3,”<$8.3K each”],[3,1,“Aggregated”],[3,7]
],
hotEdges: [[1,0],[2,3],[3,1]]
},
flags: [
“Funnel account pattern: 15+ individuals make cash deposits into a single Bancomex account (Grupo Fronterizo SA de CV) in amounts just below Mexico’s reporting threshold (~$8,300 USD equivalent). Deposits occur at multiple branches within hours. Cash is then aggregated and wired as single lump sums through your clearing.”,
“Grupo Fronterizo is registered in Ciudad Juárez — a DEA-designated High Intensity Drug Trafficking Area (HIDTA) and FinCEN Geographic Targeting Order (GTO) zone. The company has no verifiable import/export operations despite its stated business purpose.”,
“All three receiving entities are YOUR DIRECT CUSTOMERS: Sunbelt Title & Escrow ($2.575M), Prestige Auto Holdings ($1.175M), and Apex Realty Partners ($1.05M). Your bank has primary BSA/AML obligations for all three accounts and should have detected the pattern of payments from a single Mexican originator funding US real estate and luxury purchases.”,
“Three El Paso properties purchased through Sunbelt Title by LLCs with opaque beneficial ownership — potentially triggering FinCEN’s Geographic Targeting Orders requiring disclosure of beneficial owners in all-cash real estate transactions in covered areas.”,
“Prestige Auto Holdings received $1.175M for a $490K exotic car and a $685K armoured SUV — vehicle type consistent with narcotics trafficking (armoured vehicles are standard for cartel operatives). Buyers’ names don’t match Grupo Fronterizo’s registered officers.”,
“Apex Realty: commercial property in Las Cruces, NM (45 minutes from Ciudad Juárez) purchased via anonymous LLC. FinCEN GTO coverage area. Combined with the funnel account origin of funds, this is a high-confidence narcotics money laundering indicator.”,
“FinCEN Advisory FIN-2016-A003 specifically identifies cross-border funnel accounts from Mexican border regions as a primary narcotics-proceeds laundering methodology. The structured deposit → aggregation → wire → US real estate chain is the textbook pattern.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is absolutely correct. This is a textbook <strong>funnel account / structuring scheme</strong> tied to the US-Mexico border narcotics corridor. Multiple individuals make structured cash deposits below Mexico’s reporting threshold into a single Bancomex account, which then wires aggregated amounts through your USD clearing to your own direct customers in Texas and New Mexico. <strong>FinCEN Advisory FIN-2016-A003</strong> specifically identifies this pattern. All three receiving entities are your direct customers, giving you both maximum visibility and maximum BSA obligation. The Ciudad Juárez origin, structured cash deposits, anonymous LLC real estate purchases, and armoured vehicle purchase collectively create an overwhelming narcotics-ML profile. You should also file CTRs on the real estate transactions if they fall within FinCEN GTO coverage.”,
coach: “🎓 <strong>AI Coach:</strong> Funnel accounts are the workhorse of cross-border drug money laundering. The pattern is simple: structured cash deposits in Mexico aggregate into wires that purchase US assets. What makes this case especially clear-cut is that ALL THREE receiving entities are your direct customers. You’re not just the clearing bank — you’re the bank where the laundered money ultimately lands. That means you have dual obligations: as the correspondent AND as the depository institution for the beneficiaries.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would be a <strong>textbook BSA/AML failure</strong>. Structured cash deposits from 15+ individuals in Ciudad Juárez, aggregated and wired through your clearing to purchase US real estate and armoured vehicles via your own direct customers — this is the exact pattern FinCEN’s border advisories warn about. Your bank’s failure to detect this could result in enforcement action on both the correspondent side and the direct customer side.”,
coach: “🎓 <strong>AI Coach:</strong> When structured cash from a drug trafficking corridor arrives at your direct customers’ accounts to buy anonymous real estate and armoured cars — there is no innocent explanation. This is not a grey area.”,
},
escalate: {
grade: “partial”, title: “Good — But File the SAR Now”, points: 70,
explain: “Escalation to BSA/AML leadership is appropriate because three direct customer accounts are implicated alongside the respondent relationship. However, the <strong>SAR must be filed immediately</strong> — the structuring and funnel account indicators are unambiguous. You should also alert your real estate and auto dealer compliance teams to review Sunbelt Title, Prestige Auto, and Apex Realty’s broader activity.”,
coach: “🎓 <strong>AI Coach:</strong> This case requires action on two fronts: the correspondent relationship (Bancomex) and your direct customer relationships (Sunbelt, Prestige, Apex). Escalate for the customer-side review, but file the SAR on the correspondent-side immediately. Don’t let one slow down the other.”,
},
info: {
grade: “partial”, title: “The Structure IS the Evidence”, points: 40,
explain: “Requesting deposit detail from Bancomex (who deposited, when, where, how much) would enrich your investigation. But <strong>the funnel account pattern is already established</strong> from the wire data alone: multiple wires from a single originator in a border city to US real estate and luxury purchases. You don’t need deposit-level detail to file the SAR — you need it to quantify the full exposure. File now, request detail in parallel.”,
coach: “🎓 <strong>AI Coach:</strong> In funnel account cases, the wire data tells the story. The deposit detail just fills in the cast of characters. Don’t wait for a character list when the plot is already clear.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 6: PEP Kleptocracy — Corruption Proceeds
// Difficulty: Hard | Correct: escalate
// Flow: Abuja-Lagos clients → Zenith Afrique respondent →
//       YOUR BANK → Mayfair Trust (2nd resp) / Direct customers
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0106”,
name: “Zenith Afrique Bank”,
teaser: “Respondent bank — $26.3M in suspected corruption proceeds from PEP-linked entities flowing through your clearing to UK luxury property and French investment accounts”,
amount: “$26,300,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “escalate”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Nigeria”,
pep: “N/A — Institutional (PEP clients identified downstream)”,
riskScore: 91,
accountAge: “8 years”,
income: “Avg monthly throughput: $180M”,
},
transactions: [
{ amount:”$5,200,000”, date:“2026-02-21”, to:“Zenith Afrique client → YOUR BANK → Mayfair Trust → Belgrave Estates Ltd”, country:“UK”, flag:true },
{ amount:”$3,800,000”, date:“2026-02-18”, to:“Zenith Afrique client → YOUR BANK → Château Patrimoine SAS (direct acct)”, country:“France”, flag:true },
{ amount:”$4,500,000”, date:“2026-02-14”, to:“Zenith Afrique client → YOUR BANK → Mayfair Trust → Belgrave Estates Ltd”, country:“UK”, flag:true },
{ amount:”$2,100,000”, date:“2026-02-11”, to:“Zenith Afrique client → YOUR BANK → Château Patrimoine SAS (direct acct)”, country:“France”, flag:true },
{ amount:”$3,700,000”, date:“2026-02-08”, to:“Zenith Afrique client → YOUR BANK → Mayfair Trust → Knightsbridge Holdings”, country:“UK”, flag:true },
{ amount:”$2,600,000”, date:“2026-02-05”, to:“Zenith Afrique client → YOUR BANK → Château Patrimoine SAS (direct acct)”, country:“France”, flag:true },
{ amount:”$4,400,000”, date:“2026-02-02”, to:“Zenith Afrique client → YOUR BANK → Mayfair Trust → Belgrave Estates Ltd”, country:“UK”, flag:true },
{ amount:”$68,000,000”, date:“2026-01-29”, to:“Routine clearing — legitimate Zenith Afrique corporate traffic”, country:“Various”, flag:false },
{ amount:”$42,000,000”, date:“2026-01-26”, to:“Routine clearing — legitimate Zenith Afrique energy sector”, country:“Various”, flag:false },
{ amount:”$1,200,000”, date:“2026-01-23”, to:“Zenith Afrique client → YOUR BANK → educational institution tuition”, country:“UK”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for both Zenith Afrique (Nigeria) and Mayfair Trust Bank (UK). You also hold a direct investment account for Château Patrimoine SAS. All PEP-linked flows pass through your books.” },
{ id:1, label:“Zenith Afrique”, type:“bank”, x:55, y:150, info:“Nigerian commercial bank. CBN-licensed. 3,200 staff. Major correspondent client — $180M/month throughput. Your respondent. Originating bank for all flagged wires. The ordering party on flagged wires is ‘Okonkwo Energy Consortium Ltd’ — a government contractor.” },
{ id:2, label:“Mayfair Trust Bank”, type:“bank”, x:345, y:150, info:“UK private bank. FCA-authorised. Also your respondent — holds USD correspondent account with you. Receives $17.8M of the flagged traffic. Specialises in high-net-worth African clients. Their downstream clients include UK property SPVs.” },
{ id:3, label:“Okonkwo Energy”, type:“company”, x:55, y:275, info:“⚠️ Nigerian government contractor. Originator of all flagged wires ($26.3M). Won $340M in Nigerian National Petroleum Corporation (NNPC) contracts in 2024-2025. Beneficial owner: Chief Emmanuel Okonkwo — identified as a POLITICALLY EXPOSED PERSON (state governor’s brother-in-law, former NNPC board member).” },
{ id:4, label:“Belgrave Estates”, type:“company”, x:290, y:275, info:“⚠️ UK property SPV. $14.1M received via Mayfair Trust. Client of Mayfair. Purchased three Mayfair/Belgravia properties via off-market transactions. Companies House shows BVI holding company as sole shareholder — beneficial ownership opaque.” },
{ id:5, label:“Knightsbridge Hold.”, type:“company”, x:395, y:275, info:“UK property holding company. $3.7M received via Mayfair Trust. Client of Mayfair. Single luxury apartment purchase in Knightsbridge. Director listed as a Cypriot nominee.” },
{ id:6, label:“Château Patrimoine”, type:“company”, x:200, y:360, info:“French investment holding company. $8.5M received. YOUR DIRECT CUSTOMER — holds investment account at your bank. Manages a portfolio of French vineyard properties and luxury assets. Beneficial owner: a trust whose settlor is Chief Okonkwo’s spouse.” },
{ id:7, label:“Chief Okonkwo (PEP)”, type:“person”, x:55, y:400, info:“⚠️ POLITICALLY EXPOSED PERSON. Brother-in-law of sitting Nigerian state governor. Former NNPC board member (2020-2023). Controls Okonkwo Energy directly and Château Patrimoine indirectly through his spouse’s trust. Classic PEP kleptocracy pattern: government contracts → overpricing → proceeds → foreign luxury assets.” },
],
edges: [
[1,0,”$26.3M”],[0,2,”$17.8M”],[0,6,”$8.5M”],
[3,1,“Govt contracts”],[2,4,”$14.1M”],[2,5,”$3.7M”],
[7,3,“Controls”],[7,6,“Via spouse”]
],
hotEdges: [[1,0],[0,2],[0,6],[7,3],[7,6]]
},
flags: [
“PEP identification: Chief Emmanuel Okonkwo is a Politically Exposed Person — brother-in-law of a sitting Nigerian state governor and former NNPC board member. He controls the originating entity (Okonkwo Energy Consortium) directly and the receiving entity (Château Patrimoine) indirectly via his spouse’s trust. This is a classic self-dealing kleptocracy pattern.”,
“Okonkwo Energy Consortium won $340M in NNPC contracts in 2024-2025. The $26.3M flowing through your clearing may represent overpricing proceeds — the difference between inflated contract values and actual costs, siphoned offshore. Nigerian EFCC has investigated similar patterns in the petroleum sector.”,
“Your bank clears both sides: Zenith Afrique (respondent, sending) and Mayfair Trust Bank (respondent, receiving £17.8M). Château Patrimoine (your direct customer) receives $8.5M. The PEP’s money enters through one respondent, crosses your books, and exits through your other respondent and your own direct customer.”,
“Belgrave Estates Ltd ($14.1M via Mayfair Trust) purchased three Mayfair/Belgravia properties via off-market transactions — a red flag per UK NCA’s ‘Red Alert’ on PEP property purchases. Companies House shows BVI holding company as sole shareholder.”,
“Château Patrimoine SAS (your direct customer, $8.5M) manages French vineyard properties purchased with funds from Okonkwo Energy. Beneficial owner is a trust settled by Chief Okonkwo’s spouse — this means PEP proceeds are landing in your own customer’s account and you have primary KYC/EDD obligation.”,
“This case requires escalation before SAR because: (1) PEP status may trigger enhanced diplomatic/legal considerations, (2) two respondent relationships need coordinated review, (3) your direct customer Château Patrimoine needs immediate EDD, and (4) potential Unexplained Wealth Order (UWO) implications in the UK require legal team involvement.”,
],
feedback: {
escalate: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Escalation is the correct primary action. PEP-linked kleptocracy cases involving <strong>$26.3M in suspected corruption proceeds</strong> require coordinated senior management, legal, and compliance involvement before proceeding. Unlike standard SAR cases, PEP kleptocracy implicates: (1) enhanced due diligence obligations under <strong>FATF Recommendation 12</strong> and <strong>31 CFR 1010.620</strong> (PEP provisions), (2) potential coordination with law enforcement (FBI International Corruption Unit, UK NCA Kleptocracy team), (3) Unexplained Wealth Order considerations in the UK for the London properties, (4) diplomatic sensitivities given the connection to a sitting state governor, (5) review of both respondent relationships AND your direct customer Château Patrimoine. A SAR will certainly follow — but the scope and narrative require senior sign-off because filing will likely trigger law enforcement engagement.”,
coach: “🎓 <strong>AI Coach:</strong> PEP kleptocracy is where AML meets geopolitics. Unlike a straightforward structuring case where an analyst can file a SAR independently, PEP cases often involve diplomatic considerations, potential government enquiries, and multi-jurisdictional enforcement. The UK’s Unexplained Wealth Order regime, introduced under the Criminal Finances Act 2017, means the London properties could be subject to civil recovery. Your bank’s legal team needs to be involved before you SAR because the filing itself may trigger NCA action on the properties held by your other respondent’s clients.”,
},
sar: {
grade: “partial”, title: “Good Instinct — But Escalate First”, points: 80,
explain: “A SAR will absolutely be needed, and your instinct to file is correct. However, PEP kleptocracy cases of this magnitude — involving two respondent relationships, a direct customer, potential UWO implications, and a connection to a foreign government official — require <strong>escalation and senior sign-off before filing</strong>. The SAR narrative for a $26.3M PEP case needs careful construction and legal review. File within days, not weeks — but get the right people involved first.”,
coach: “🎓 <strong>AI Coach:</strong> In PEP cases, the difference between ‘escalate then SAR’ and ‘SAR directly’ can be significant. A well-coordinated PEP SAR, filed with senior buy-in and legal review, is much more effective than a rushed filing that misses the full picture. You may also need to coordinate with UK and French counterparts.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing a $26.3M PEP kleptocracy case would be <strong>catastrophic</strong>. Chief Okonkwo is a textbook PEP funnelling suspected government contract overpricing proceeds through your clearing into London luxury real estate and French investment properties. This is the type of case that leads to institutional enforcement actions, front-page headlines, and criminal referrals against compliance officers.”,
coach: “🎓 <strong>AI Coach:</strong> PEP kleptocracy failures are among the most reputationally damaging. When the story is ‘bank helped governor’s relative buy Mayfair mansions with stolen oil money,’ no fine amount matters as much as the headline. Your bank’s name would be in the same sentence as the corruption.”,
},
info: {
grade: “partial”, title: “EDD Is Needed, But Act Now”, points: 60,
explain: “Enhanced Due Diligence (EDD) on Chief Okonkwo and all associated entities is absolutely required. But this information request must be <strong>paired with escalation and account restrictions</strong>. You should: (1) request source-of-wealth documentation from Zenith Afrique regarding Okonkwo Energy, (2) conduct EDD on Château Patrimoine (your direct customer), (3) ask Mayfair Trust about Belgrave Estates’ beneficial ownership. But none of this should delay escalation — the PEP connection is already confirmed and the amounts are already known.”,
coach: “🎓 <strong>AI Coach:</strong> EDD is a component of the response, not the response itself. In PEP cases, your obligation to conduct enhanced due diligence is triggered the moment you identify the PEP connection. If you haven’t been conducting EDD on these flows already, that itself is a compliance gap that needs to be reported internally.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 7: Human Trafficking Proceeds
// Difficulty: Hard | Correct: SAR
// Flow: Khmer Workers → Mekong respondent → YOUR BANK →
//       Orchid Exchange (2nd respondent) / Direct customers
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0107”,
name: “Mekong Commerce Bank”,
teaser: “Respondent bank — $3.1M in patterns consistent with forced-labour human trafficking proceeds, repetitive small wires from Cambodian labour agencies to Thai and Hong Kong recipients”,
amount: “$3,100,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Cambodia”,
pep: “N/A — Institutional”,
riskScore: 74,
accountAge: “2 years”,
income: “Avg monthly throughput: $18M”,
},
transactions: [
{ amount:”$380,000”, date:“2026-02-22”, to:“Khmer Star Agency → Mekong → YOUR BANK → Orchid Exchange → Siam Harvest Foods”, country:“Thailand”, flag:true },
{ amount:”$210,000”, date:“2026-02-20”, to:“Khmer Star Agency → Mekong → YOUR BANK → Golden Jade Trading (direct acct)”, country:“Hong Kong”, flag:true },
{ amount:”$445,000”, date:“2026-02-17”, to:“Khmer Star Agency → Mekong → YOUR BANK → Orchid Exchange → Siam Harvest Foods”, country:“Thailand”, flag:true },
{ amount:”$190,000”, date:“2026-02-14”, to:“Tonle Sap Recruit → Mekong → YOUR BANK → Orchid Exchange → Phuket Seafood Proc.”, country:“Thailand”, flag:true },
{ amount:”$360,000”, date:“2026-02-11”, to:“Khmer Star Agency → Mekong → YOUR BANK → Golden Jade Trading (direct acct)”, country:“Hong Kong”, flag:true },
{ amount:”$275,000”, date:“2026-02-08”, to:“Tonle Sap Recruit → Mekong → YOUR BANK → Orchid Exchange → Siam Harvest Foods”, country:“Thailand”, flag:true },
{ amount:”$520,000”, date:“2026-02-05”, to:“Khmer Star Agency → Mekong → YOUR BANK → Orchid Exchange → Phuket Seafood Proc.”, country:“Thailand”, flag:true },
{ amount:”$340,000”, date:“2026-02-02”, to:“Tonle Sap Recruit → Mekong → YOUR BANK → Golden Jade Trading (direct acct)”, country:“Hong Kong”, flag:true },
{ amount:”$380,000”, date:“2026-01-30”, to:“Khmer Star Agency → Mekong → YOUR BANK → Orchid Exchange → Siam Harvest Foods”, country:“Thailand”, flag:true },
{ amount:”$6,400,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Mekong client traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for both Mekong Commerce Bank (Cambodia) and Orchid Exchange Bank (Thailand). You also hold a direct trade account for Golden Jade Trading. All trafficker payment flows transit your books.” },
{ id:1, label:“Mekong Commerce”, type:“bank”, x:55, y:150, info:“Cambodian commercial bank. NBC-licensed. 180 staff. Your respondent. Sending side of all flagged wires. Known to serve Cambodia’s labour recruitment sector. Two clients originate all flagged activity: Khmer Star Agency and Tonle Sap Recruitment.” },
{ id:2, label:“Orchid Exchange Bank”, type:“bank”, x:345, y:150, info:“Thai commercial bank. BOT-licensed. Also your respondent. Receives $2.19M of the flagged traffic. Their downstream clients are Thai seafood processing companies — an industry flagged by the US State Department for forced labour.” },
{ id:3, label:“Khmer Star Agency”, type:“company”, x:55, y:275, info:“⚠️ Cambodian labour recruitment agency. Originator of $2.3M in wires. Registered 18 months ago. Recruitment agencies in Cambodia’s fishing/seafood sector have been repeatedly identified by ILO and US TIP Report as fronts for trafficking operations that recruit workers under false pretences and sell them to Thai fishing vessels.” },
{ id:4, label:“Tonle Sap Recruit”, type:“company”, x:55, y:385, info:“⚠️ Cambodian recruitment agency. Originator of $805K in wires. Located in Siem Reap Province near Tonle Sap Lake — a documented origin point for trafficking victims destined for Thai fishing boats. Two former directors appear on Cambodia’s trafficking watchlist.” },
{ id:5, label:“Siam Harvest Foods”, type:“company”, x:345, y:275, info:“Thai seafood processing company. $1.48M received via Orchid Exchange. Client of Orchid. Located in Samut Sakhon — Thailand’s seafood processing hub, identified by ILO as a forced-labour hotspot. US State Department TIP Report 2025 flagged this region specifically.” },
{ id:6, label:“Phuket Seafood”, type:“company”, x:345, y:385, info:“Thai seafood processor. $710K received via Orchid Exchange. Client of Orchid. Southern Thailand operation. Two NGO reports (2024) identified forced labour conditions in Phuket seafood operations involving Cambodian and Myanmar nationals.” },
{ id:7, label:“Golden Jade Trading”, type:“company”, x:200, y:300, info:“Hong Kong trading company. $910K received. YOUR DIRECT CUSTOMER. Acts as intermediary buyer of processed seafood from Thai operators. Beneficial owner is also a shareholder in Khmer Star Agency — connecting the recruiter to the buyer. Classic trafficking integration.” },
],
edges: [
[1,0,”$3.1M”],[0,2,”$2.19M”],[0,7,”$910K”],
[3,1,”$2.3M”],[4,1,”$805K”],
[2,5,”$1.48M”],[2,6,”$710K”],
[3,7,“Shared BO”]
],
hotEdges: [[1,0],[0,2],[3,1],[4,1],[3,7]]
},
flags: [
“Human trafficking indicators: Cambodian labour recruitment agencies (Khmer Star, Tonle Sap) are sending payments through your clearing to Thai seafood processors in regions flagged by the US State Department TIP Report and ILO for forced labour. The Cambodia→Thailand fishing/seafood corridor is one of the world’s most documented trafficking routes.”,
“Tonle Sap Recruitment has two former directors on Cambodia’s trafficking watchlist. Located in Siem Reap Province — a documented origin point for trafficking victims destined for Thai fishing boats and processing plants.”,
“Siam Harvest Foods and Phuket Seafood Processing are located in Samut Sakhon and Phuket respectively — both identified by ILO as forced-labour hotspots in Thailand’s seafood industry. Combined $2.19M received through your clearing via Orchid Exchange.”,
“Golden Jade Trading (your direct customer, $910K) shares beneficial ownership with Khmer Star Agency (the Cambodian recruiter). This connects the recruitment end to the commercial end — the same network recruits the workers AND buys the product of their labour. Classic trafficking vertical integration.”,
“Payment pattern: regular, similarly-sized wires ($190K-$520K) at 2-3 day intervals from two recruitment agencies to seafood processors. Consistent with ongoing labour supply payments — traffickers are paid per worker delivered and per production output. The regularity suggests an established trafficking pipeline.”,
“FinCEN Advisory FIN-2014-A008 on human trafficking and FinCEN Advisory FIN-2020-A008 on human trafficking in the fishing industry both identify this exact pattern: recruitment agency payments from origin countries to seafood/fishing operations in destination countries, with intermediary trading companies handling the commercial integration.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is the correct action. This is a <strong>human trafficking financial pattern</strong> matching the Cambodia→Thailand forced-labour corridor in the seafood industry — one of the most well-documented trafficking routes globally. <strong>FinCEN Advisory FIN-2014-A008</strong> and <strong>FIN-2020-A008</strong> (fishing industry trafficking) both identify this exact typology: recruitment agency payments from Cambodia to Thai seafood processors, with Hong Kong trading companies handling commercial integration. The shared beneficial ownership between Khmer Star Agency (recruiter) and Golden Jade Trading (your direct customer) proves the trafficking network controls both ends. Your bank should flag the SAR with the <strong>human trafficking indicator box</strong> and consider notifying your bank’s human trafficking liaison if one exists. Many institutions now have dedicated HT escalation protocols.”,
coach: “🎓 <strong>AI Coach:</strong> Human trafficking SARs are among the most impactful filings a financial institution can make. FinCEN has specifically asked banks to prioritise HT detection because financial flows are often the only evidence trail. The regularity and pattern of these payments — same originators, same beneficiaries, same intervals — is what makes this detectable. In the fishing/seafood industry, workers are often held in debt bondage on vessels for years. Your SAR could contribute to law enforcement action that frees real people from slavery.”,
},
clear: {
grade: “bad”, title: “Potential Facilitation of Human Trafficking”, points: -40,
explain: “Clearing this case means your institution continues to facilitate payments in a <strong>suspected human trafficking operation</strong>. Two Cambodian recruitment agencies — one with directors on a trafficking watchlist — are sending regular payments through your clearing to Thai seafood processors in forced-labour hotspots. Your own direct customer shares beneficial ownership with one of the recruiters. Failure to act doesn’t just violate AML regulations — it potentially makes your bank complicit in modern slavery.”,
coach: “🎓 <strong>AI Coach:</strong> Human trafficking is the one area where ‘failure to detect’ feels morally different from other AML failings. Every payment you clear in this chain potentially represents workers recruited under false pretences, trapped in debt bondage, and forced to work in dangerous conditions. Financial institutions have a unique role in disrupting these networks.”,
},
escalate: {
grade: “partial”, title: “Good — But File Urgently”, points: 70,
explain: “Escalation is warranted given the human trafficking dimension — many institutions have dedicated HT protocols that should be activated. However, <strong>the SAR must be filed urgently</strong>. Human trafficking cases have a time-sensitivity that other AML cases don’t — delayed filing could mean continued trafficking of real victims. Most institutions’ HT protocols actually require FASTER filing, not slower. Escalate AND file simultaneously.”,
coach: “🎓 <strong>AI Coach:</strong> In trafficking cases, speed matters more than perfection. A timely SAR that triggers law enforcement investigation can save lives. File on what you know, supplement later. Many jurisdictions also have dedicated HT reporting mechanisms separate from standard SARs.”,
},
info: {
grade: “partial”, title: “Don’t Wait — Lives May Be at Stake”, points: 40,
explain: “Requesting information from Mekong Commerce about the recruitment agencies and from Orchid Exchange about the seafood processors would enrich the investigation. But <strong>this cannot delay the SAR filing</strong>. You already have: trafficking-watchlisted directors, shared beneficial ownership between recruiter and buyer, and payments to forced-labour hotspot processors. This is sufficient — and in trafficking cases, every day of delay potentially means continued exploitation of trafficking victims.”,
coach: “🎓 <strong>AI Coach:</strong> Human trafficking is the rare AML case where the moral imperative overrides the investigative instinct to gather more information before acting. You can always file a supplemental SAR with additional details. You can’t undo harm to trafficking victims caused by delayed reporting.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 8: Payable-Through Accounts — Direct Sub-Account Access
// Difficulty: Hard | Correct: escalate
// Flow: Unknown sub-account holders → Carib respondent →
//       YOUR BANK → various direct customers
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0108”,
name: “Caribbean Mercantile Bank”,
teaser: “Respondent bank — payable-through account abuse detected, $9.6M in wires originated by sub-account holders given direct access to your clearing services without your knowledge”,
amount: “$9,600,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “escalate”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Belize”,
pep: “N/A — Institutional”,
riskScore: 80,
accountAge: “5 years”,
income: “Avg monthly throughput: $42M”,
},
transactions: [
{ amount:”$1,800,000”, date:“2026-02-21”, to:“CMB Sub-Acct ‘Tradewinds IBC’ → YOUR BANK → Meridian Property Group (direct acct)”, country:“US”, flag:true },
{ amount:”$1,200,000”, date:“2026-02-18”, to:“CMB Sub-Acct ‘Coral Bay Holdings’ → YOUR BANK → Atlas Maritime Inc (direct acct)”, country:“Greece”, flag:true },
{ amount:”$950,000”, date:“2026-02-15”, to:“CMB Sub-Acct ‘Tradewinds IBC’ → YOUR BANK → Meridian Property Group (direct acct)”, country:“US”, flag:true },
{ amount:”$1,400,000”, date:“2026-02-12”, to:“CMB Sub-Acct ‘Pelican Trust’ → YOUR BANK → Monaco Wealth Advisors (direct acct)”, country:“Monaco”, flag:true },
{ amount:”$800,000”, date:“2026-02-09”, to:“CMB Sub-Acct ‘Coral Bay Holdings’ → YOUR BANK → Atlas Maritime Inc (direct acct)”, country:“Greece”, flag:true },
{ amount:”$1,650,000”, date:“2026-02-06”, to:“CMB Sub-Acct ‘Tradewinds IBC’ → YOUR BANK → Meridian Property Group (direct acct)”, country:“US”, flag:true },
{ amount:”$1,100,000”, date:“2026-02-03”, to:“CMB Sub-Acct ‘Pelican Trust’ → YOUR BANK → Monaco Wealth Advisors (direct acct)”, country:“Monaco”, flag:true },
{ amount:”$700,000”, date:“2026-02-01”, to:“CMB Sub-Acct ‘Coral Bay Holdings’ → YOUR BANK → Atlas Maritime Inc (direct acct)”, country:“Greece”, flag:true },
{ amount:”$16,800,000”, date:“2026-01-28”, to:“Routine clearing — legitimate CMB client traffic”, country:“Various”, flag:false },
{ amount:”$9,200,000”, date:“2026-01-25”, to:“Routine clearing — legitimate CMB client traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold a single USD correspondent account for Caribbean Mercantile Bank. However, CMB has created internal sub-accounts that allow its clients to initiate USD wires directly through your clearing — effectively a payable-through arrangement that was never authorised by your compliance team.” },
{ id:1, label:“Caribbean Mercantile”, type:“bank”, x:70, y:155, info:“Belizean commercial bank. CBB-licensed. 85 staff. Your respondent. Has created sub-account designations (Tradewinds, Coral Bay, Pelican Trust) that allow its IBC clients to initiate wires directly — functioning as payable-through accounts. Your bank approved a standard correspondent relationship, not a payable-through arrangement.” },
{ id:2, label:“Tradewinds IBC”, type:“company”, x:70, y:280, info:“⚠️ Belize International Business Company. Sub-account holder at CMB. $4.4M originated. IBCs are exempt from Belize taxation and have minimal disclosure requirements. No known physical operations. Beneficial ownership: unknown to your bank. CMB refuses to provide UBO information citing ‘client confidentiality.’” },
{ id:3, label:“Coral Bay Holdings”, type:“company”, x:70, y:380, info:“⚠️ Belize IBC. Sub-account holder at CMB. $2.7M originated. Registered to same registered agent as Tradewinds IBC. Single nominee director (same individual for both entities). Beneficial ownership: unknown.” },
{ id:4, label:“Pelican Trust”, type:“company”, x:70, y:450, info:“⚠️ Belize trust. Sub-account holder at CMB. $2.5M originated. Trustee is CMB’s own trust department — meaning the bank is both the account provider AND the trustee. Settlor and beneficiaries: unknown to your bank.” },
{ id:5, label:“Meridian Property”, type:“company”, x:330, y:210, info:“US real estate investment company. $4.4M received. YOUR DIRECT CUSTOMER. Florida-based. Purchased luxury condominiums on behalf of ‘foreign investors’ — but your bank’s KYC file for Meridian doesn’t identify the ultimate buyers.” },
{ id:6, label:“Atlas Maritime”, type:“company”, x:330, y:320, info:“Greek shipping company. $2.7M received. YOUR DIRECT CUSTOMER. Piraeus-based. Payment descriptions say ‘vessel charter fees’ but amounts don’t correspond to standard charter rates for the vessel classes described.” },
{ id:7, label:“Monaco Wealth Adv.”, type:“company”, x:330, y:430, info:“Monaco wealth advisory firm. $2.5M received. YOUR DIRECT CUSTOMER. Not regulated as a financial institution. Invests in luxury assets (art, yachts, wine) on behalf of unnamed clients. Your KYC file is thin.” },
],
edges: [
[1,0,”$9.6M”],[0,5,”$4.4M”],[0,6,”$2.7M”],[0,7,”$2.5M”],
[2,1,“Sub-acct”],[3,1,“Sub-acct”],[4,1,“Sub-acct”],
[2,5],[3,6],[4,7]
],
hotEdges: [[1,0],[2,1],[3,1],[4,1]]
},
flags: [
“Payable-through account (PTA) abuse detected: Caribbean Mercantile Bank has created internal sub-account designations that allow its IBC and trust clients to initiate USD wires directly through your clearing system. Your bank approved a standard correspondent relationship — not a PTA arrangement. These sub-account holders are effectively your bank’s indirect customers, but without your knowledge, approval, or due diligence.”,
“Under Section 312(a)(2) of the USA PATRIOT Act and 31 CFR 1010.630, your bank must determine whether the correspondent account provides payable-through access and, if so, conduct due diligence on sub-account holders as if they were your own customers. This requirement has not been met.”,
“Three unidentified sub-account holders — all Belize IBCs or trusts with opaque beneficial ownership — originated $9.6M in wires through your clearing. CMB has refused to provide beneficial ownership information for these entities, citing ‘client confidentiality.’ This non-cooperation is a critical red flag.”,
“Tradewinds IBC and Coral Bay Holdings share the same registered agent and nominee director — suggesting common control. Combined $7.1M originated. Beneficial ownership unknown to your institution despite the funds flowing through your books.”,
“Pelican Trust ($2.5M) — CMB’s own trust department is the trustee, meaning the bank is both the account provider and the trustee. Settlor and beneficiaries unknown. This self-dealing arrangement eliminates any independent oversight of the trust’s activities.”,
“All three receiving entities are YOUR DIRECT CUSTOMERS: Meridian Property (US real estate), Atlas Maritime (Greek shipping), Monaco Wealth Advisors (luxury assets). The combination of opaque Caribbean IBC originators and luxury/real estate/yacht beneficiaries matches the kleptocracy and tax evasion pattern identified in FinCEN’s correspondent banking advisories.”,
“This is a relationship-level failure requiring escalation, not just a transaction-level alert. The payable-through arrangement was never authorised, CMB is non-cooperative on beneficial ownership, and three of your direct customer accounts are receiving the proceeds. Account restriction and senior management involvement are required.”,
],
feedback: {
escalate: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Escalation is the correct primary action. Payable-through account abuse is a <strong>relationship-level compliance failure</strong> that goes beyond individual suspicious transactions. Under <strong>Section 312(a)(2) of the USA PATRIOT Act</strong> and <strong>31 CFR 1010.630</strong>, your bank was required to determine whether CMB’s correspondent account provides payable-through access — and if it does, to apply due diligence to the sub-account holders as if they were your own customers. This obligation was never met because the PTA arrangement was never authorised or disclosed.<br><br>Required actions: (1) <strong>immediately restrict CMB’s correspondent account</strong> pending resolution, (2) issue formal demand to CMB for complete beneficial ownership of all sub-account holders, (3) review your three direct customer accounts (Meridian, Atlas, Monaco Wealth) for source-of-funds adequacy, (4) assess whether a SAR is also required (likely yes), (5) determine whether to terminate the CMB relationship if beneficial ownership is not provided within a set timeframe.”,
coach: “🎓 <strong>AI Coach:</strong> Payable-through accounts represent one of the original correspondent banking risks that the PATRIOT Act was designed to address. The difference between a standard correspondent account and a PTA is that PTA sub-account holders get to initiate transactions directly — effectively making them your bank’s indirect customers. If you don’t know who they are, you don’t know who’s using your clearing system. CMB created this arrangement without your approval, and their refusal to disclose beneficial ownership means you currently have three anonymous Belizean entities routing millions through your clearing to purchase US real estate, charter Greek vessels, and acquire luxury assets in Monaco. That’s textbook offshore laundering infrastructure.”,
},
sar: {
grade: “partial”, title: “SAR Likely Needed — But Escalate First”, points: 80,
explain: “A SAR will likely be required, but the <strong>primary action is escalation and account restriction</strong>. The PTA abuse represents a systemic relationship failure, not just a suspicious transaction. Before filing, senior management needs to: assess the full scope of PTA activity (is $9.6M the total, or just what you’ve flagged?), make a relationship decision on CMB, and coordinate the response across your three direct customer accounts. A SAR filed without addressing the underlying PTA failure would be incomplete.”,
coach: “🎓 <strong>AI Coach:</strong> Think of it this way: the SAR reports what happened, but escalation stops it from continuing. With an unauthorized PTA arrangement, you need to stop the bleeding (restrict the account) before you document the wound (file the SAR).”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would mean your bank continues to provide <strong>unauthorized payable-through access</strong> to three anonymous Belizean entities. You don’t know who controls Tradewinds IBC, Coral Bay Holdings, or Pelican Trust — yet they’re moving $9.6M through your clearing to luxury assets. This is a direct violation of <strong>Section 312 of the USA PATRIOT Act</strong> and one of the most fundamental correspondent banking controls.”,
coach: “🎓 <strong>AI Coach:</strong> If a regulator discovers you’re providing PTA access to anonymous IBCs without conducting sub-account holder due diligence, the enforcement action will be severe. This was literally the scenario that prompted the PATRIOT Act’s correspondent banking provisions.”,
},
info: {
grade: “partial”, title: “Essential — But Restrict First”, points: 60,
explain: “Requesting beneficial ownership information from CMB is exactly what’s needed — in fact, it’s legally required under the PTA provisions. But the request must be accompanied by <strong>immediate account restriction and escalation</strong>. CMB has already refused to provide UBO information once, citing ‘client confidentiality.’ Your formal demand should set a strict deadline: provide full beneficial ownership for all sub-account holders within 10 business days or the account will be closed. Meanwhile, no further PTA-originated wires should be processed.”,
coach: “🎓 <strong>AI Coach:</strong> When a respondent bank refuses to identify who’s using their account at your institution, that’s not a data request — it’s a relationship crisis. Restrict the account, demand the information, and prepare for the possibility that CMB will refuse again. In that case, account termination is the only option.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 9: Black Market Peso Exchange — Narcotics Laundering
// Difficulty: Hard | Correct: SAR
// Flow: Colombian peso brokers → Banco Cordillera → YOUR BANK →
//       Dixieland Wholesale (2nd resp) / Direct customers
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0109”,
name: “Banco Cordillera de Comercio”,
teaser: “Respondent bank — $14.7M in suspected Black Market Peso Exchange activity, Colombian peso brokers purchasing US goods through your clearing on behalf of narcotics traffickers”,
amount: “$14,700,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Colombia”,
pep: “N/A — Institutional”,
riskScore: 86,
accountAge: “6 years”,
income: “Avg monthly throughput: $95M”,
},
transactions: [
{ amount:”$2,400,000”, date:“2026-02-22”, to:“Broker via Cordillera → YOUR BANK → Dixieland Wholesale → US electronics”, country:“US”, flag:true },
{ amount:”$1,800,000”, date:“2026-02-19”, to:“Broker via Cordillera → YOUR BANK → SteelStar Industrial (direct acct)”, country:“US”, flag:true },
{ amount:”$2,100,000”, date:“2026-02-16”, to:“Broker via Cordillera → YOUR BANK → Dixieland Wholesale → US auto parts”, country:“US”, flag:true },
{ amount:”$1,350,000”, date:“2026-02-13”, to:“Broker via Cordillera → YOUR BANK → Pacific Rim Exports (direct acct)”, country:“US”, flag:true },
{ amount:”$1,900,000”, date:“2026-02-10”, to:“Broker via Cordillera → YOUR BANK → Dixieland Wholesale → consumer goods”, country:“US”, flag:true },
{ amount:”$1,650,000”, date:“2026-02-07”, to:“Broker via Cordillera → YOUR BANK → SteelStar Industrial (direct acct)”, country:“US”, flag:true },
{ amount:”$1,200,000”, date:“2026-02-04”, to:“Broker via Cordillera → YOUR BANK → Pacific Rim Exports (direct acct)”, country:“US”, flag:true },
{ amount:”$2,300,000”, date:“2026-02-01”, to:“Broker via Cordillera → YOUR BANK → Dixieland Wholesale → mixed goods”, country:“US”, flag:true },
{ amount:”$36,500,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Cordillera trade payments”, country:“Various”, flag:false },
{ amount:”$22,000,000”, date:“2026-01-25”, to:“Routine clearing — legitimate Cordillera trade payments”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for both Banco Cordillera (Colombia) and Dixieland Wholesale Bank (US). You also hold direct accounts for SteelStar Industrial and Pacific Rim Exports. The BMPE scheme uses your clearing to purchase US goods with narcotics-derived pesos.” },
{ id:1, label:“Banco Cordillera”, type:“bank”, x:55, y:155, info:“Colombian commercial bank. SFC-licensed. 1,100 staff. Your respondent. Originating bank for all flagged wires. Three ‘import brokers’ originate 100% of the flagged activity — all purchasing US goods at premium prices, consistent with BMPE broker margins.” },
{ id:2, label:“Dixieland Wholesale”, type:“bank”, x:345, y:155, info:“US regional bank. Your 2nd respondent — holds correspondent account for wholesale trade clients. Receives $8.7M of the flagged traffic. Their clients are US goods wholesalers who ship electronics, auto parts, and consumer goods to Colombia.” },
{ id:3, label:“3 Peso Brokers”, type:“person”, x:55, y:290, info:“⚠️ Three Colombian ‘import companies’ that function as peso brokers: Inversiones Montaña ($5.8M), Comercial Pacífico ($4.7M), and Grupo Andino Imports ($4.2M). They purchase US goods on behalf of legitimate Colombian merchants — but pay with narcotics pesos at a discount. The US goods are the laundering mechanism.” },
{ id:4, label:“US Wholesalers”, type:“company”, x:345, y:290, info:“Multiple US wholesalers receiving payments via Dixieland. Ship electronics, auto parts, clothing, and consumer goods to Colombia. These are legitimate businesses — but the payments they receive originate from peso brokers using drug money. The wholesalers may or may not know.” },
{ id:5, label:“SteelStar Industrial”, type:“company”, x:240, y:370, info:“US industrial supply company. $3.45M received. YOUR DIRECT CUSTOMER. Ships heavy machinery and steel products to Colombia. Accepts orders from Cordillera clients at 15-20% above market price — the premium is the broker’s fee. Your bank’s KYC file doesn’t explain why Colombian importers consistently overpay.” },
{ id:6, label:“Pacific Rim Exports”, type:“company”, x:130, y:370, info:“US export company. $2.55M received. YOUR DIRECT CUSTOMER. Exports consumer electronics to Latin America. High volume of orders from three Colombian entities — all routed through Cordillera. No direct relationship between Pacific Rim and the Colombian buyers outside of these wire payments.” },
{ id:7, label:“Drug Proceeds 💊”, type:“jurisdiction”, x:55, y:430, info:“In the BMPE scheme, drug traffickers sell narcotics in the US for USD cash. That cash can’t easily enter the US banking system. Instead, peso brokers in Colombia collect pesos from the traffickers (at a discount) and use those pesos to purchase USD goods through legitimate trade channels. The goods are the vehicle — the value has been laundered from USD cash to USD goods.” },
],
edges: [
[1,0,”$14.7M”],[0,2,”$8.7M”],[0,5,”$3.45M”],[0,6,”$2.55M”],
[3,1,“Peso brokers”],[2,4,”$8.7M”],
[3,7,“Drug pesos”],[4,3,“US goods”]
],
hotEdges: [[1,0],[0,2],[3,1],[3,7]]
},
flags: [
“Black Market Peso Exchange (BMPE) indicators: Three Colombian ‘import companies’ originate 100% of the flagged activity through Banco Cordillera. They purchase US goods at 15-20% above market price — the premium represents the peso broker’s margin. This is the single most common narcotics money laundering methodology in the Western Hemisphere.”,
“In the BMPE cycle: (1) traffickers sell drugs in the US for USD cash, (2) peso brokers collect pesos from traffickers in Colombia at a discount, (3) brokers use the pesos to buy USD goods from US suppliers through the banking system, (4) goods are shipped to Colombia and sold. The trade payment flowing through your clearing IS the laundering — it converts narcotics pesos into legitimate US goods.”,
“Three concentrated originators — Inversiones Montaña ($5.8M), Comercial Pacífico ($4.7M), and Grupo Andino Imports ($4.2M) — account for all $14.7M. High concentration from few originators purchasing diverse goods (electronics, auto parts, machinery, clothing) at above-market prices matches FinCEN’s BMPE typology indicators.”,
“SteelStar Industrial and Pacific Rim Exports (your direct customers, $6M combined) consistently receive above-market payments from Colombian buyers through Cordillera. Your KYC files for these customers don’t explain the pricing premium. Either they know they’re participating in BMPE (complicit) or they don’t (unwitting beneficiaries) — either way, it’s reportable.”,
“FinCEN Advisory FIN-2014-A005 specifically identifies the BMPE as a priority threat. Key indicators matched: Colombian origin, above-market pricing, multiple commodity types in single orders, concentrated broker originators, and goods shipped to Colombia. Your bank’s position as the USD clearing hub makes you the critical chokepoint for this scheme.”,
“Dixieland Wholesale Bank (your 2nd respondent, $8.7M) may not recognise the BMPE pattern because they only see ‘normal trade payments to US wholesalers.’ Your bank, seeing both the Colombian origin and the US destination, has the unique vantage point to detect the scheme.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is correct. This is a <strong>Black Market Peso Exchange (BMPE)</strong> operation — the single most prolific narcotics money laundering methodology in the Americas. <strong>FinCEN Advisory FIN-2014-A005</strong> and <strong>DEA intelligence assessments</strong> identify the BMPE as responsible for laundering billions annually in Colombian narcotics proceeds. Your bank sits at the centre: peso brokers use Banco Cordillera (your respondent) to purchase US goods from wholesalers at your second respondent (Dixieland) and your direct customers (SteelStar, Pacific Rim). The above-market pricing, concentrated broker originators, and diverse commodity mix are textbook BMPE indicators. The SAR narrative should reference the BMPE typology explicitly so that FinCEN’s analysts can connect it to existing narcotics investigations.”,
coach: “🎓 <strong>AI Coach:</strong> The BMPE is brilliant in its simplicity: drug money never actually enters the US banking system as cash. Instead, it enters as legitimate-looking trade payments for real goods. That’s what makes it so hard to detect — every individual transaction looks like normal trade finance. The pattern only becomes visible when you see the same few Colombian ‘importers’ buying everything from electronics to auto parts to clothing at premium prices, all through the same banking channel. As the correspondent bank, you see the full pattern. The sending bank sees exports; the receiving bank sees imports. Only you see both sides.”,
},
clear: {
grade: “bad”, title: “Critical Compliance Failure”, points: -40,
explain: “Clearing this would mean your bank continues to process <strong>$14.7M in suspected narcotics money laundering</strong> through the BMPE channel. The peso broker indicators are unambiguous: concentrated Colombian originators, above-market pricing, diverse commodity types, and goods flowing to Colombia. FinCEN has issued specific advisories on this exact pattern. Your two direct customers are receiving narcotics-derived funds.”,
coach: “🎓 <strong>AI Coach:</strong> The BMPE has been identified as the #1 narcotics laundering methodology since the 1990s. Every major US bank has it in their typology library. If your institution can’t detect a BMPE pattern clearing through its own correspondent accounts, the regulatory response will be severe.”,
},
escalate: {
grade: “partial”, title: “Good — But File Simultaneously”, points: 70,
explain: “Escalation is appropriate given two respondent relationships and two direct customers are implicated. However, <strong>the SAR should be filed concurrently</strong>. The BMPE pattern is well-established and the indicators are clear. You should also consider whether SteelStar and Pacific Rim are complicit or unwitting — that assessment may require your direct customer compliance team’s involvement.”,
coach: “🎓 <strong>AI Coach:</strong> In BMPE cases, one of the hardest questions is whether the US goods sellers know they’re being used. Some are complicit (knowingly accepting premium prices); others are simply happy to have a good customer. Either way, the SAR should be filed — but the follow-up investigation of your direct customers may determine whether they need their own SARs.”,
},
info: {
grade: “partial”, title: “Pattern Already Established”, points: 40,
explain: “Requesting trade documentation (invoices, shipping records, customs declarations) from Cordillera and Dixieland would help quantify the pricing premium and confirm the goods flow. But <strong>the BMPE indicators are already conclusive</strong>: concentrated broker originators, above-market prices, diverse goods to Colombia. File the SAR now. The documentation will help you assess whether your direct customers are complicit, which is a separate question from whether to report.”,
coach: “🎓 <strong>AI Coach:</strong> In BMPE investigations, the trade documentation often confirms what the wire data already shows. But don’t wait for perfect documentation — the pattern of above-market payments from concentrated Colombian brokers IS the evidence.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 10: Cyber Fraud / BEC Laundering
// Difficulty: Hard | Correct: SAR
// Flow: Fraud victims → Akuafo respondent → YOUR BANK →
//       Direct customers / 2nd respondent → E. Europe cash-out
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0110”,
name: “Akuafo Savings & Loans”,
teaser: “Respondent bank — $5.9M in suspected BEC and romance fraud proceeds, rapid pass-through of victim payments to Eastern European cash-out accounts via your clearing”,
amount: “$5,900,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Respondent Bank — Savings & Loans Institution”,
country: “Ghana”,
pep: “N/A — Institutional”,
riskScore: 77,
accountAge: “3 years”,
income: “Avg monthly throughput: $22M”,
},
transactions: [
{ amount:”$340,000”, date:“2026-02-22”, to:“Victims → Akuafo collector → YOUR BANK → Varta Bank → Baltic cash-out”, country:“Latvia”, flag:true },
{ amount:”$890,000”, date:“2026-02-20”, to:“Victims → Akuafo collector → YOUR BANK → Pinnacle Consulting (direct acct)”, country:“UK”, flag:true },
{ amount:”$420,000”, date:“2026-02-17”, to:“Victims → Akuafo collector → YOUR BANK → Varta Bank → Romanian cash-out”, country:“Romania”, flag:true },
{ amount:”$1,100,000”, date:“2026-02-14”, to:“Victims → Akuafo collector → YOUR BANK → Pinnacle Consulting (direct acct)”, country:“UK”, flag:true },
{ amount:”$560,000”, date:“2026-02-11”, to:“Victims → Akuafo collector → YOUR BANK → Varta Bank → Baltic cash-out”, country:“Latvia”, flag:true },
{ amount:”$780,000”, date:“2026-02-08”, to:“Victims → Akuafo collector → YOUR BANK → Pinnacle Consulting (direct acct)”, country:“UK”, flag:true },
{ amount:”$650,000”, date:“2026-02-05”, to:“Victims → Akuafo collector → YOUR BANK → Varta Bank → Estonian cash-out”, country:“Estonia”, flag:true },
{ amount:”$1,160,000”, date:“2026-02-02”, to:“Victims → Akuafo collector → YOUR BANK → Pinnacle Consulting (direct acct)”, country:“UK”, flag:true },
{ amount:”$8,200,000”, date:“2026-01-29”, to:“Routine clearing — legitimate Akuafo client traffic”, country:“Various”, flag:false },
{ amount:”$5,600,000”, date:“2026-01-26”, to:“Routine clearing — legitimate Akuafo remittance traffic”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for both Akuafo S&L (Ghana) and Varta Commercial Bank (Latvia). You also hold a direct account for Pinnacle Consulting Ltd. Fraud proceeds from multiple victims transit through your clearing before being cashed out.” },
{ id:1, label:“Akuafo S&L”, type:“bank”, x:55, y:155, info:“Ghanaian savings & loans institution. BOG-licensed. 120 staff. Your respondent. Sending side of all flagged wires. Two accounts originate all flagged activity — both opened within the past 6 months. Rapid inflow-outflow pattern: funds arrive from multiple countries and are wired out within 24-48 hours.” },
{ id:2, label:“Varta Comm. Bank”, type:“bank”, x:345, y:155, info:“Latvian commercial bank. Also your respondent. Receives $1.97M of the flagged traffic. Their downstream accounts are in Latvia, Romania, and Estonia — jurisdictions identified by Europol as major BEC cash-out corridors.” },
{ id:3, label:“2 Collector Accounts”, type:“person”, x:55, y:290, info:“⚠️ Two accounts at Akuafo: ‘GlobeTech Solutions’ ($3.8M) and ‘Emerald Ventures Ltd’ ($2.1M). Both opened <6 months ago. Receive incoming wires from 40+ different countries — descriptions include ‘invoice payment,’ ‘consulting fee,’ ‘tax refund,’ ‘insurance claim.’ The diversity of payers and descriptions is consistent with BEC/romance fraud collection.” },
{ id:4, label:“40+ Victim Payers”, type:“person”, x:55, y:400, info:“⚠️ Incoming funds to the collector accounts originate from 40+ different parties in 15+ countries: individuals, small businesses, law firms, and accounting firms. Wire descriptions are inconsistent: some say ‘invoice,’ others ‘personal transfer,’ others ‘loan repayment.’ This diversity of unrelated payers is the hallmark of fraud victim collection.” },
{ id:5, label:“Pinnacle Consulting”, type:“company”, x:250, y:290, info:“UK-registered consulting company. $3.93M received. YOUR DIRECT CUSTOMER. Companies House shows incorporation 4 months ago. Sole director: Romanian national resident in London. No verifiable consulting activity. Account shows immediate onward transfers to Romanian and Bulgarian personal accounts — second-layer cash-out.” },
{ id:6, label:“Baltic Cash-out”, type:“company”, x:345, y:290, info:“Multiple Latvian, Estonian, and Romanian accounts receiving $1.97M via Varta. Clients of Varta. Rapid conversion to cash or cryptocurrency within hours of receipt. Classic BEC/romance fraud cash-out infrastructure.” },
{ id:7, label:“Fraud Victims 🎯”, type:“jurisdiction”, x:55, y:460, info:“Business Email Compromise victims (tricked into paying fake invoices) and romance fraud victims (tricked into sending money to fake romantic partners). Losses are devastating — many victims are elderly individuals or small businesses. FBI IC3 reports BEC losses exceeded $2.9B in 2023.” },
],
edges: [
[1,0,”$5.9M”],[0,5,”$3.93M”],[0,2,”$1.97M”],
[4,3,“40+ victims”],[3,1,“24-48hr pass”],
[2,6,”$1.97M”],[5,6,“Onward xfer”],
[4,7]
],
hotEdges: [[1,0],[4,3],[3,1],[0,5],[0,2]]
},
flags: [
“BEC/Romance fraud collection pattern: Two recently-opened accounts at Akuafo receive funds from 40+ different payers in 15+ countries with inconsistent descriptions (‘invoice payment,’ ‘consulting fee,’ ‘tax refund,’ ‘insurance claim’). This diversity of unrelated payers with varied descriptions is the #1 BEC collection indicator per FinCEN Advisory FIN-2019-A005.”,
“Rapid pass-through: Funds arrive at the Akuafo collector accounts and are wired out to your clearing within 24-48 hours. The accounts function purely as transit points — no funds remain. This velocity pattern is characteristic of fraud laundering, not legitimate business activity.”,
“Pinnacle Consulting Ltd (your direct customer, $3.93M) — UK company incorporated 4 months ago. Sole director is Romanian national. No verifiable consulting activity. Account shows immediate onward transfers to Romanian and Bulgarian personal accounts. Classic BEC cash-out mule company. Your bank has primary KYC obligation.”,
“Varta Commercial Bank (your 2nd respondent, $1.97M) — downstream accounts in Latvia, Romania, and Estonia convert funds to cash or cryptocurrency within hours. Europol’s 2025 IOCTA report identifies the Baltics as a primary BEC cash-out corridor.”,
“Both collector accounts at Akuafo (‘GlobeTech Solutions’ and ‘Emerald Ventures Ltd’) were opened within the past 6 months. Account age under 6 months combined with high-volume, multi-source inflows is a critical fraud collection indicator.”,
“FBI IC3’s 2024 Internet Crime Report identified BEC as the costliest cybercrime, with $2.9B in reported losses. Many victims are elderly individuals (romance fraud) or small businesses (invoice fraud). Delayed reporting by your bank means continued victimisation.”,
],
feedback: {
sar: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Filing a SAR is the correct action. This is a <strong>Business Email Compromise / romance fraud laundering operation</strong> using your correspondent clearing as the transit mechanism. <strong>FinCEN Advisory FIN-2019-A005</strong> specifically identifies this pattern: newly-opened accounts receiving funds from dozens of unrelated payers with inconsistent descriptions, followed by rapid outbound wires. Your bank is uniquely positioned to disrupt this scheme — you see the collection (via Akuafo), the transit (through your books), and the cash-out (via Pinnacle and Varta). The SAR should check the <strong>cyber-related</strong> and <strong>elder fraud</strong> boxes if applicable, and include all 40+ incoming payer details to help law enforcement identify victims. Many victims don’t know they’ve been defrauded — your SAR may be the first notification.”,
coach: “🎓 <strong>AI Coach:</strong> BEC/romance fraud SARs have a special urgency because they can trigger victim notification and fund recovery. If reported within 72 hours, FinCEN’s Rapid Response Program can help freeze and return stolen funds. The 40+ different payers sending money to two recently-opened Ghanaian accounts is the red flag — no legitimate business has that many unrelated payers with that many different payment descriptions. Your SAR could literally get money back for fraud victims.”,
},
clear: {
grade: “bad”, title: “Continued Facilitation of Fraud”, points: -40,
explain: “Clearing this means your bank continues to facilitate the laundering of <strong>cyber fraud proceeds from 40+ victims</strong>. The collection pattern is unambiguous — recently-opened accounts, dozens of unrelated payers, inconsistent descriptions, rapid pass-through. Your own direct customer (Pinnacle Consulting) is a mule company immediately forwarding funds to Eastern European personal accounts. Every day of inaction means more victims are defrauded.”,
coach: “🎓 <strong>AI Coach:</strong> BEC and romance fraud target vulnerable people — elderly individuals, small business owners, people who trust too easily. When your bank processes these funds without flagging them, you’re the last opportunity to stop the money before it disappears into cash-out networks.”,
},
escalate: {
grade: “partial”, title: “Good — But Time Is Critical”, points: 70,
explain: “Escalation is warranted given the cyber fraud dimension — your bank may need to activate its fraud response protocol and coordinate with law enforcement. However, <strong>the SAR must be filed urgently</strong>. FinCEN’s Rapid Response Program can freeze funds within hours if the SAR is filed quickly. In BEC cases, the difference between filing today and filing next week can be the difference between recovering victim funds and losing them permanently.”,
coach: “🎓 <strong>AI Coach:</strong> For BEC cases, FinCEN’s rapid response mechanism is your most powerful tool. File the SAR with urgency and flag it for rapid response. Every hour counts — the cash-out network converts funds to cash or crypto within 24-48 hours of receipt.”,
},
info: {
grade: “partial”, title: “File First — Investigate in Parallel”, points: 40,
explain: “Requesting information from Akuafo about the collector accounts and from Varta about the cash-out accounts would be valuable for the investigation. But <strong>do not delay the SAR</strong>. The collection pattern (40+ unrelated payers, inconsistent descriptions, rapid pass-through, recently-opened accounts) is already conclusive. More importantly, a timely SAR filing can trigger FinCEN’s Rapid Response Program to freeze funds and potentially recover money for victims.”,
coach: “🎓 <strong>AI Coach:</strong> In fraud cases, speed of reporting directly correlates with victim fund recovery. Every day you spend gathering information is a day the cash-out network uses to convert and disappear the funds. File now, supplement later.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 11: Legitimate Complex Trade — FALSE POSITIVE
// Difficulty: Medium | Correct: clear
// Flow: Raintree clients → Raintree → YOUR BANK → Direct
//       customers (commodity traders)
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0111”,
name: “Raintree Asia Pacific Bank”,
teaser: “Respondent bank — $41.5M in high-value commodity trade payments flagged by automated screening, but investigation reveals legitimate agricultural and metals trading with complete documentation”,
amount: “$41,500,000”,
riskLevel: “medium”,
riskLabel: “Medium”,
correct: “clear”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Singapore”,
pep: “N/A — Institutional”,
riskScore: 42,
accountAge: “12 years”,
income: “Avg monthly throughput: $340M”,
},
transactions: [
{ amount:”$8,200,000”, date:“2026-02-22”, to:“Raintree client → YOUR BANK → Hartland Metals (direct acct) — palladium contract”, country:“UK”, flag:false },
{ amount:”$6,400,000”, date:“2026-02-19”, to:“Raintree client → YOUR BANK → AgriVerde Trading SA (direct acct) — palm oil futures”, country:“Switzerland”, flag:false },
{ amount:”$5,800,000”, date:“2026-02-16”, to:“Raintree client → YOUR BANK → Hartland Metals (direct acct) — platinum settlement”, country:“UK”, flag:false },
{ amount:”$7,100,000”, date:“2026-02-13”, to:“Raintree client → YOUR BANK → AgriVerde Trading SA (direct acct) — soybean contract”, country:“Switzerland”, flag:false },
{ amount:”$4,500,000”, date:“2026-02-10”, to:“Raintree client → YOUR BANK → Hartland Metals (direct acct) — rhodium delivery”, country:“UK”, flag:false },
{ amount:”$3,200,000”, date:“2026-02-07”, to:“Raintree client → YOUR BANK → AgriVerde Trading SA (direct acct) — rubber futures”, country:“Switzerland”, flag:false },
{ amount:”$6,300,000”, date:“2026-02-04”, to:“Raintree client → YOUR BANK → Hartland Metals (direct acct) — palladium settlement”, country:“UK”, flag:false },
{ amount:”$125,000,000”, date:“2026-02-01”, to:“Routine clearing — Raintree commodity trade settlements”, country:“Various”, flag:false },
{ amount:”$98,000,000”, date:“2026-01-28”, to:“Routine clearing — Raintree FX and trade finance”, country:“Various”, flag:false },
{ amount:”$82,000,000”, date:“2026-01-25”, to:“Routine clearing — Raintree sovereign and corporate”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for Raintree Asia Pacific Bank — a 12-year relationship. Both receiving entities (Hartland Metals, AgriVerde Trading) are long-standing direct customers with full KYC on file. This alert was triggered by automated volume screening, not by specific risk indicators.” },
{ id:1, label:“Raintree Asia Pac.”, type:“bank”, x:70, y:155, info:“Singaporean commercial bank. MAS-licensed. 2,800 staff. Top-tier institution. Your respondent for 12 years. Clean compliance record. Annual KYC refresh completed January 2026 — no findings. Singapore is a major global commodity trading hub.” },
{ id:2, label:“Trafigura Asia”, type:“company”, x:70, y:280, info:“✅ Major Singaporean commodity trading firm. Client of Raintree. Originator of flagged wires. One of the world’s largest independent commodity traders. Publicly reported $231B in revenue (2024). Regulated by MAS. Active in precious metals and agricultural commodities.” },
{ id:3, label:“Hartland Metals”, type:“company”, x:330, y:220, info:“✅ UK precious metals dealer. $30.8M received. YOUR DIRECT CUSTOMER — account open 9 years. FCA-authorised. LBMA member (London Bullion Market Association). Full KYC on file including audited financials. Commodity contract references match LME/LBMA settlement codes. Pricing consistent with spot market rates at time of each wire.” },
{ id:4, label:“AgriVerde Trading”, type:“company”, x:330, y:340, info:“✅ Swiss agricultural commodity trader. $10.7M received. YOUR DIRECT CUSTOMER — account open 6 years. FINMA-registered. Commodity contract references match CME/ICE settlement codes. Pricing verified against published futures curves. Long-standing Raintree counterparty.” },
{ id:5, label:“Singapore 🇸🇬”, type:“jurisdiction”, x:70, y:390, info:“MAS-regulated jurisdiction. FATF ‘compliant’ rating. Major global commodity trading hub — Singapore handles ~40% of global physical commodity trading. High-value trade finance flows are expected and normal for Singaporean banks.” },
],
edges: [
[1,0,”$41.5M”],[0,3,”$30.8M”],[0,4,”$10.7M”],
[2,1,“Commodity trades”],[1,5]
],
hotEdges: []
},
flags: [
“AUTOMATED ALERT — VOLUME THRESHOLD: This alert was triggered because the $41.5M in payments from a single respondent to two beneficiaries exceeded the automated high-value monitoring threshold. No specific risk indicators were identified by the screening system.”,
“INVESTIGATION FINDINGS — LEGITIMATE ACTIVITY: All wire descriptions include verifiable commodity contract references (LME settlement codes, LBMA reference numbers, CME/ICE futures contract identifiers). Pricing on all trades has been verified against published spot and futures rates at the time of each wire — no over- or under-invoicing detected.”,
“Raintree Asia Pacific Bank — 12-year correspondent relationship, MAS-licensed, clean compliance record. Annual KYC refresh completed January 2026 with no findings. Singapore is the world’s largest commodity trading hub.”,
“Originator (major Singapore-based commodity trader) — publicly traded, $231B annual revenue, MAS-regulated. Legitimate originator with established global trading operations in precious metals and agricultural commodities.”,
“Hartland Metals (your direct customer, $30.8M) — FCA-authorised, LBMA member, 9-year customer, full KYC including audited financials on file. Precious metals settlement is their core business. Transaction volumes are consistent with their established pattern.”,
“AgriVerde Trading SA (your direct customer, $10.7M) — FINMA-registered, 6-year customer. Agricultural commodity settlements are their core business. Volumes and counterparties are consistent with their established trading pattern.”,
],
feedback: {
clear: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Clearing this case is the correct action. This is a <strong>false positive</strong> — an automated volume alert on legitimate commodity trade settlements. Your investigation confirmed: (1) all commodity contract references are verifiable against exchange settlement systems, (2) pricing is consistent with published market rates (no over/under-invoicing), (3) the respondent bank (Raintree) is MAS-licensed with a 12-year clean relationship, (4) the originator is a major publicly-traded commodity trader, (5) both beneficiaries are your long-standing direct customers with full KYC and regulatory authorisation (FCA, FINMA), and (6) Singapore is a legitimate global commodity trading hub where these volumes are normal.<br><br>Not every alert is suspicious. The ability to <strong>confidently clear legitimate activity</strong> after thorough investigation is just as important as the ability to identify genuinely suspicious activity. Clearing false positives efficiently allows your team to focus resources on real risks.”,
coach: “🎓 <strong>AI Coach:</strong> This case tests whether you can distinguish signal from noise. In correspondent banking, high-value commodity trade flows from Singapore are routine — Singapore handles roughly 40% of global physical commodity trading. The key differentiators from suspicious activity: verifiable contract references tied to real exchange settlements, pricing consistent with published markets, long-standing regulated counterparties, and transparent beneficial ownership. An analyst who SARs everything is no more effective than one who clears everything — true skill is knowing the difference.”,
},
sar: {
grade: “bad”, title: “Unnecessary SAR — Defensive Filing”, points: -20,
explain: “Filing a SAR on this activity would be a <strong>defensive filing</strong> — reporting activity you know to be legitimate simply to avoid potential criticism. FinCEN has specifically discouraged defensive filing because it: (1) wastes law enforcement resources reviewing legitimate activity, (2) dilutes the SAR database with noise, making it harder to find genuine suspicious activity, and (3) can harm your respondent’s reputation without cause. Your investigation found verifiable contracts, market-rate pricing, and regulated counterparties. There is nothing suspicious to report.”,
coach: “🎓 <strong>AI Coach:</strong> The temptation to file ‘just in case’ is understandable, but it’s counterproductive. FinCEN receives over 4 million SARs per year — adding defensive filings on legitimate commodity trades makes it harder for analysts to find actual laundering. Your job is to investigate, form a judgment, and act on it. In this case, the judgment is clear: legitimate business.”,
},
escalate: {
grade: “partial”, title: “Unnecessary — You Have the Answer”, points: 30,
explain: “Escalation isn’t needed here. You’ve completed a thorough investigation and found <strong>no suspicious indicators</strong>. All contract references verify, pricing is market-rate, counterparties are regulated and long-standing. Escalating a confirmed false positive to senior management wastes their time and signals a lack of confidence in your own analytical judgment. Document your investigation thoroughly and clear the alert.”,
coach: “🎓 <strong>AI Coach:</strong> Part of developing as an AML analyst is building the confidence to clear alerts when the evidence supports it. Not every alert needs to go upstairs. If your investigation is thorough and your conclusions are documented, clearing a false positive is the right call — and it’s the call your institution needs you to make so that escalation channels stay clear for real risks.”,
},
info: {
grade: “partial”, title: “You Already Have Enough”, points: 40,
explain: “Your investigation has already gathered sufficient information: verified contract references, market-rate pricing, regulated counterparties, long-standing relationships, and clean KYC. Requesting additional information would delay resolution of a confirmed false positive. <strong>Document your findings and clear the alert.</strong> If you’re concerned about commodity pricing, your bank’s trade finance team can provide market rate verification — but the exchange settlement codes already confirm the transactions are real.”,
coach: “🎓 <strong>AI Coach:</strong> There’s a difference between thorough investigation and analysis paralysis. When every indicator points to legitimate activity, continued information-gathering becomes procrastination. Clear it, document it, move on to the cases that actually need your attention.”,
}
}
},

// ══════════════════════════════════════════════════════════════
// CASE 12: Sanctions Circumvention via Crypto Off-Ramp
// Difficulty: Hard | Correct: escalate
// Flow: Russian-nexus entities → Anadolu respondent → YOUR BANK →
//       Direct customer (crypto OTC) / 2nd respondent → off-ramp
// ══════════════════════════════════════════════════════════════
{
id: “AML-CB-2026-0112”,
name: “Anadolu Ticaret Bankası”,
teaser: “Respondent bank — $8.3M in suspected sanctions circumvention using crypto off-ramps, Russian-nexus entities converting sanctioned assets to fiat through your clearing”,
amount: “$8,300,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “escalate”,
profile: {
occupation: “Respondent Bank — Correspondent Account”,
country: “Türkiye”,
pep: “N/A — Institutional”,
riskScore: 85,
accountAge: “4 years”,
income: “Avg monthly throughput: $65M”,
},
transactions: [
{ amount:”$1,400,000”, date:“2026-02-22”, to:“Anadolu client → YOUR BANK → DigitalBridge OTC (direct acct) → crypto off-ramp”, country:“UAE”, flag:true },
{ amount:”$950,000”, date:“2026-02-19”, to:“Anadolu client → YOUR BANK → Gulf Digital Bank → Riyadh off-ramp”, country:“Saudi Arabia”, flag:true },
{ amount:”$1,200,000”, date:“2026-02-16”, to:“Anadolu client → YOUR BANK → DigitalBridge OTC (direct acct) → crypto off-ramp”, country:“UAE”, flag:true },
{ amount:”$1,650,000”, date:“2026-02-13”, to:“Anadolu client → YOUR BANK → Gulf Digital Bank → Dubai off-ramp”, country:“UAE”, flag:true },
{ amount:”$800,000”, date:“2026-02-10”, to:“Anadolu client → YOUR BANK → DigitalBridge OTC (direct acct) → crypto off-ramp”, country:“UAE”, flag:true },
{ amount:”$1,100,000”, date:“2026-02-07”, to:“Anadolu client → YOUR BANK → Gulf Digital Bank → Abu Dhabi off-ramp”, country:“UAE”, flag:true },
{ amount:”$1,200,000”, date:“2026-02-04”, to:“Anadolu client → YOUR BANK → DigitalBridge OTC (direct acct) → crypto off-ramp”, country:“UAE”, flag:true },
{ amount:”$24,500,000”, date:“2026-02-01”, to:“Routine clearing — legitimate Anadolu commercial traffic”, country:“Various”, flag:false },
{ amount:”$18,200,000”, date:“2026-01-28”, to:“Routine clearing — legitimate Anadolu trade finance”, country:“Various”, flag:false },
{ amount:”$12,800,000”, date:“2026-01-25”, to:“Routine clearing — legitimate Anadolu treasury”, country:“Various”, flag:false },
],
network: {
nodes: [
{ id:0, label:“YOUR BANK”, type:“bank”, x:200, y:35, info:“Your institution — the correspondent bank. You hold USD clearing for both Anadolu Ticaret (Türkiye) and Gulf Digital Bank (UAE). You also hold a direct account for DigitalBridge OTC Desk. Sanctions-evasion flows transit your clearing into the crypto ecosystem via these accounts.” },
{ id:1, label:“Anadolu Ticaret”, type:“bank”, x:55, y:155, info:“Turkish commercial bank. BDDK-licensed. 650 staff. Your respondent. Sending side of all flagged wires. Two clients originate all flagged activity — both are recently-incorporated Turkish trading companies with Russian beneficial ownership.” },
{ id:2, label:“Gulf Digital Bank”, type:“bank”, x:345, y:155, info:“UAE-licensed digital bank. Also your respondent. Receives $3.7M of the flagged traffic. Specialises in crypto-fiat bridge services. Their clients include cryptocurrency OTC desks and off-ramp service providers across the Gulf region.” },
{ id:3, label:“Volga Trading Ltd”, type:“company”, x:55, y:280, info:“⚠️ Turkish-registered trading company. Originator of $5.1M. Incorporated 7 months ago. Beneficial owner: Dmitry Volkov (Russian national). Subject to EU sanctions since March 2024 as a ‘person associated with’ a sanctioned Russian oligarch. OFAC SDN screening shows near-match but spelling variant (‘Volkoff’) — possible evasion via transliteration.” },
{ id:4, label:“Caspian Commerce”, type:“company”, x:55, y:390, info:“⚠️ Turkish-registered company. Originator of $3.2M. Incorporated 5 months ago. Beneficial owner: Andrei Petrov (Russian national). Not personally sanctioned but is a known associate of Volkov. Both companies share the same Istanbul registered office — same floor, same suite.” },
{ id:5, label:“DigitalBridge OTC”, type:“company”, x:260, y:280, info:“UAE-based crypto OTC desk. $4.6M received. YOUR DIRECT CUSTOMER. Converts fiat USD to cryptocurrency (primarily USDT on Tron network). On-chain analysis would likely show the USDT flowing to wallets associated with Russian exchanges (Garantex successor entities). Your bank has primary KYC obligation.” },
{ id:6, label:“Gulf Off-Ramps”, type:“company”, x:345, y:280, info:“Multiple Gulf-region crypto off-ramp providers receiving $3.7M via Gulf Digital Bank. Convert USD to crypto and then back to local currency — effectively moving value from the sanctioned Russian ecosystem into the Gulf financial system via your clearing.” },
{ id:7, label:“Russia Sanctions 🇷🇺”, type:“jurisdiction”, x:200, y:430, info:“Dmitry Volkov (Volga Trading BO) is EU-sanctioned since March 2024. OFAC SDN near-match suggests possible US designation under spelling variant. The Türkiye→UAE crypto corridor is a documented sanctions evasion route per Chainalysis and TRM Labs 2025 reports.” },
],
edges: [
[1,0,”$8.3M”],[0,5,”$4.6M”],[0,2,”$3.7M”],
[3,1,”$5.1M”],[4,1,”$3.2M”],
[2,6,”$3.7M”],[5,6,“Crypto bridge”],
[3,7,“EU sanctioned”],[4,7,“Associate”]
],
hotEdges: [[1,0],[3,1],[4,1],[0,5],[3,7]]
},
flags: [
“Sanctions nexus: Volga Trading Ltd beneficial owner Dmitry Volkov is subject to EU sanctions (March 2024) as a ‘person associated with’ a sanctioned Russian oligarch. OFAC SDN screening shows near-match under spelling variant ‘Volkoff’ — possible transliteration evasion. This requires immediate sanctions team review before any further processing.”,
“Both originating entities (Volga Trading, Caspian Commerce) are recently-incorporated Turkish companies with Russian beneficial ownership sharing the same Istanbul registered office. This is a classic sanctions evasion structure: newly-created entities in a non-sanctioning jurisdiction to access USD clearing.”,
“Crypto off-ramp destination: $4.6M flows to DigitalBridge OTC (your direct customer) and $3.7M to Gulf Digital Bank’s crypto clients. Both convert fiat USD to cryptocurrency. The Türkiye→UAE→crypto corridor is specifically identified by Chainalysis and TRM Labs as a primary Russian sanctions evasion route.”,
“DigitalBridge OTC Desk (your direct customer, $4.6M) converts USD to USDT on the Tron network — the preferred stablecoin and blockchain for sanctions evasion due to lower fees and reduced compliance monitoring. On-chain analysis would likely trace these funds to Garantex successor exchanges or other Russian-linked platforms.”,
“Your bank sits at the critical juncture: sanctioned-nexus fiat USD enters from Anadolu (your respondent), crosses your books, and exits into the crypto ecosystem via your direct customer and second respondent. Once the funds are crypto, traditional sanctions controls no longer apply — making your bank the last control point.”,
“This case requires escalation before SAR because: (1) the sanctions near-match requires immediate OFAC review and possible Voluntary Self-Disclosure, (2) your direct customer DigitalBridge may need account freezing, (3) two respondent relationships are implicated, and (4) the crypto dimension means law enforcement coordination (FinCEN, OFAC, FBI Crypto Unit) may be needed.”,
],
feedback: {
escalate: {
grade: “excellent”, title: “Excellent Decision!”, points: 150,
explain: “Escalation is the correct primary action. This case involves a <strong>potential OFAC sanctions match</strong> — which triggers obligations that go beyond standard SAR filing. Under <strong>OFAC’s sanctions compliance framework</strong>, a near-match on the SDN list (Volkov/Volkoff spelling variant) requires immediate escalation to your sanctions compliance officer for determination. If it’s a true match, your bank must: (1) <strong>block the funds</strong> and file a blocking report with OFAC within 10 business days, (2) consider a Voluntary Self-Disclosure for the $5.1M already processed, (3) freeze DigitalBridge OTC’s account pending investigation, (4) restrict Anadolu Ticaret’s correspondent account. The crypto dimension adds complexity — once funds convert to USDT, they leave the regulated financial system. Your bank is literally the <strong>last chokepoint</strong> before sanctioned funds disappear into the crypto ecosystem.”,
coach: “🎓 <strong>AI Coach:</strong> Sanctions + crypto is the emerging frontier of evasion risk. Russian-nexus entities are increasingly using the fiat→Türkiye→UAE→crypto pipeline to move value outside of SWIFT sanctions monitoring. Your bank’s role as the USD correspondent gives you both visibility and liability. The OFAC near-match is the trigger for escalation, but the crypto off-ramp is what makes it urgent — every day you don’t act, more funds convert to untraceable cryptocurrency. OFAC Voluntary Self-Disclosure typically results in significantly reduced penalties compared to OFAC discovering the violation on their own.”,
},
sar: {
grade: “partial”, title: “Needed — But Sanctions Review First”, points: 80,
explain: “A SAR is definitely required, but the <strong>sanctions near-match must be resolved first</strong>. If Volkov IS the sanctioned individual (spelling variant), your bank has a <strong>blocking obligation under OFAC regulations</strong> that supersedes the SAR timeline. Block first, then SAR. If you SAR without addressing the sanctions match, and OFAC later determines it was a true match, your bank faces penalties for failure to block — a far more serious violation than late SAR filing.”,
coach: “🎓 <strong>AI Coach:</strong> In the hierarchy of AML obligations, sanctions blocking trumps SAR filing. Blocking is measured in hours; SARs in days. Get the sanctions determination done first, then build the SAR around the complete picture including the blocking decision.”,
},
clear: {
grade: “bad”, title: “Potential Sanctions Violation”, points: -40,
explain: “Clearing this case would potentially violate <strong>OFAC sanctions regulations</strong>. Dmitry Volkov is EU-sanctioned and shows a near-match on the OFAC SDN list. Processing $8.3M from his companies through your clearing to crypto off-ramps — where the funds become untraceable — could constitute facilitation of sanctions evasion. OFAC penalties for sanctions violations can exceed $1M per transaction, and willful violations carry criminal liability.”,
coach: “🎓 <strong>AI Coach:</strong> Never clear a case with an unresolved sanctions near-match. OFAC’s strict liability standard means your bank can be penalised even if the sanctions violation was unintentional. The cost of stopping to investigate is measured in days; the cost of a sanctions violation is measured in millions.”,
},
info: {
grade: “partial”, title: “Request, But Block and Restrict First”, points: 60,
explain: “Requesting sanctions-related information from Anadolu (beneficial ownership confirmation, Volkov’s full identity details) is necessary to resolve the near-match. But <strong>the account must be restricted immediately</strong> pending the response. OFAC’s guidance is clear: when you have reason to believe a transaction involves a sanctioned party, you must exercise caution and not process until the determination is made. You should also request blockchain analytics from DigitalBridge showing where the converted crypto went — this will likely confirm Russian-exchange destinations.”,
coach: “🎓 <strong>AI Coach:</strong> In sanctions cases, the sequence is: restrict first, investigate second, report third. You can’t un-ring the bell on a sanctions violation — once the funds are in crypto, they’re gone. Restrict the accounts, gather the information, make the determination, then file accordingly.”,
}
}
},

];
