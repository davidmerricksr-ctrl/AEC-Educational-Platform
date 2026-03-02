// ═══════════════════════════════════════════════════════════════
// AML DIRECT CASES — Customer Transaction Monitoring
// 12 Cases — All names are entirely fictional constructions.
// No real person, company, bank, or entity bears these names.
// To add a case: push a new object following the same structure.
// ═══════════════════════════════════════════════════════════════

const AML_DIRECT_CASES = [
// ── CASE 1: Classic Structuring / Smurfing ──
{
id: “AML-2026-0447”,
name: “Darvek Lunaro”,
teaser: “Multiple $9,900 cash deposits across 7 branches in 14 days”,
amount: “$138,600”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Self-employed — Mobile Device Reseller”,
country: “United States”,
pep: “No”,
riskScore: 92,
accountAge: “8 months”,
income: “$42,000 (declared)”,
},
transactions: [
{ amount:”$9,900”, date:“2026-02-14”, to:“Cash Deposit”, country:“US”, flag:true },
{ amount:”$9,800”, date:“2026-02-14”, to:“Cash Deposit (Branch 3)”, country:“US”, flag:true },
{ amount:”$9,900”, date:“2026-02-12”, to:“Cash Deposit (Branch 7)”, country:“US”, flag:true },
{ amount:”$9,750”, date:“2026-02-10”, to:“Cash Deposit (Branch 1)”, country:“US”, flag:true },
{ amount:”$9,900”, date:“2026-02-08”, to:“Cash Deposit (Branch 5)”, country:“US”, flag:true },
{ amount:”$14,200”, date:“2026-02-06”, to:“Wire → Corvado Trading LLC”, country:“US”, flag:false },
{ amount:”$9,850”, date:“2026-02-04”, to:“Cash Deposit (Branch 2)”, country:“US”, flag:true },
{ amount:”$9,900”, date:“2026-02-02”, to:“Cash Deposit (Branch 6)”, country:“US”, flag:true },
{ amount:”$8,500”, date:“2026-01-30”, to:“Wire → Palmspur Imports Ltd”, country:“Panama”, flag:true },
{ amount:”$9,900”, date:“2026-01-28”, to:“Cash Deposit (Branch 4)”, country:“US”, flag:true },
],
network: {
nodes: [
{ id:0, label:“D. Lunaro”, type:“customer”, x:200, y:59, info:“Primary subject. 8-month account, declared income $42K, but $138K in cash deposits in 14 days.” },
{ id:1, label:“Branch 1–3”, type:“bank”, x:65, y:150, info:“3 branches visited on the same day. All deposits just below the $10K CTR threshold.” },
{ id:2, label:“Branch 4–7”, type:“bank”, x:335, y:150, info:“4 more branches within 14 days. Pattern consistent with smurfing across locations.” },
{ id:3, label:“Corvado Trading”, type:“company”, x:88, y:268, info:“LLC registered in New Mexico 4 months ago. No web presence. Single-member entity.” },
{ id:4, label:“Palmspur Imports”, type:“company”, x:312, y:268, info:“Panama-registered import company. No verifiable business records found.” },
{ id:5, label:“Panama 🇵🇦”, type:“jurisdiction”, x:200, y:320, info:“FATF increased-monitoring list. Known deficiencies in AML transparency.” },
],
edges: [[0,1,”$69.4K”],[0,2,”$69.2K”],[0,3,”$14.2K”],[0,4,”$8.5K”],[3,4],[4,5]],
hotEdges: [[0,1],[0,2],[4,5]]
},
flags: [
“14 cash deposits in 14 days — all between $9,750 and $9,900. Classic structuring below the $10,000 CTR threshold.”,
“Same-day deposits at 2 different branches (smurfing pattern).”,
“Total deposits ($138K) are 3.3× declared annual income ($42K).”,
“Wire to Panama-based Palmspur Imports — no verifiable business. High-risk jurisdiction.”,
“Corvado Trading LLC registered 4 months ago — shell company indicators (no employees, no web presence).”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is exactly right. This is textbook <strong>structuring / smurfing</strong>. The customer made 14 cash deposits between $9,750–$9,900 — deliberately below the $10,000 CTR threshold. Under <strong>31 U.S.C. § 5324</strong>, structuring is a federal crime even if the funds are legitimate. The multi-branch pattern, income mismatch, and shell company wires are classic FinCEN red flags.”,
coach:“🎓 <strong>AI Coach:</strong> Structuring is illegal regardless of whether the underlying funds are legitimate. The $10,000 CTR threshold hasn’t changed since 1970 — criminals know it well.”,
},
clear: {
grade:“bad”, title:“Missed Critical Red Flags”, points:-40,
explain:“Clearing this would be a serious compliance failure. The deposits show <strong>textbook structuring</strong> — 14 deposits just below $10K across 7 branches in 14 days. Total ($138K) is 3× declared income. Combined with shell company wires and a Panama connection, this required immediate SAR filing.”,
coach:“🎓 <strong>AI Coach:</strong> When deposits cluster just below $10,000, that’s structuring until proven otherwise. Always compare total volume against declared income.”,
},
escalate: {
grade:“partial”, title:“Good Instinct, But Act Now”, points:60,
explain:“Escalating shows caution, but this case has enough evidence for an immediate SAR. The <strong>structuring pattern</strong> is unambiguous — 14 sub-threshold deposits, multiple branches, same-day activity, and totals far exceeding declared income.”,
coach:“🎓 <strong>AI Coach:</strong> When red flags are this clear, file the SAR directly. Escalation is for genuinely ambiguous cases.”,
},
info: {
grade:“partial”, title:“The Evidence Is Already There”, points:40,
explain:“This case already has overwhelming evidence of <strong>structuring</strong>. The 14 sub-threshold deposits, multi-branch activity, income mismatch, and Panama wires are more than sufficient. Delays risk breaching the 30-day SAR filing window.”,
coach:“🎓 <strong>AI Coach:</strong> Know when you have enough to act. FinCEN expects SARs filed within 30 days of detection.”,
}
}
},

// ── CASE 2: PEP with Unexplained High-Value Wires ──
{
id: “AML-2026-0512”,
name: “Yelara Krestova”,
teaser: “PEP — $2.1M wires to UAE & Cyprus, source unknown”,
amount: “$2,140,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Advisor — Ministry of Energy (Retired)”,
country: “Russian Federation”,
pep: “Yes — Senior Foreign PEP”,
riskScore: 97,
accountAge: “14 months”,
income: “$85,000 (pension)”,
},
transactions: [
{ amount:”$485,000”, date:“2026-02-18”, to:“Wire → Vyranthos Holdings Ltd”, country:“UAE”, flag:true },
{ amount:”$320,000”, date:“2026-02-12”, to:“Wire → Thessalora Property Dev.”, country:“Cyprus”, flag:true },
{ amount:”$510,000”, date:“2026-02-05”, to:“Wire → Vyranthos Holdings Ltd”, country:“UAE”, flag:true },
{ amount:”$85,000”, date:“2026-01-28”, to:“Incoming — RF Pension Fund”, country:“Russia”, flag:false },
{ amount:”$275,000”, date:“2026-01-22”, to:“Wire → Soleira Estates SL”, country:“Spain”, flag:true },
{ amount:”$550,000”, date:“2026-01-15”, to:“Wire → Vyranthos Holdings Ltd”, country:“UAE”, flag:true },
{ amount:”$250,000”, date:“2026-01-05”, to:“Incoming — Volstran Resources CJSC”, country:“Russia”, flag:true },
{ amount:”$85,000”, date:“2025-12-28”, to:“Incoming — RF Pension Fund”, country:“Russia”, flag:false },
],
network: {
nodes: [
{ id:0, label:“Y. Krestova”, type:“customer”, x:200, y:50, info:“Senior Foreign PEP. Former advisor, Ministry of Energy. Pension $85K but moving $2.1M.” },
{ id:1, label:“Vyranthos Hldgs”, type:“company”, x:59, y:163, info:“UAE registered. Nominee director. No public filings. Received $1.54M from subject.” },
{ id:2, label:“Thessalora Prop.”, type:“company”, x:341, y:163, info:“Cyprus property developer. $320K wire received. Cyprus flagged for AML weaknesses.” },
{ id:3, label:“Soleira Estates”, type:“company”, x:59, y:281, info:“Spanish luxury real estate. €245K Mediterranean property purchase in progress.” },
{ id:4, label:“Volstran Resources”, type:“company”, x:341, y:281, info:“Russian resource company. $250K incoming wire — source of wealth unclear.” },
{ id:5, label:“UAE 🇦🇪”, type:“jurisdiction”, x:141, y:324, info:“Over $1.5M in outgoing wires. Opaque corporate ownership structures.” },
{ id:6, label:“Cyprus 🇨🇾”, type:“jurisdiction”, x:271, y:324, info:“EU member, previously grey-listed. Popular for Russian capital flows.” },
],
edges: [[0,1,”$1.54M”],[0,2,”$320K”],[0,3,”$275K”],[0,4,”$250K in”],[1,5],[2,6],[3,2]],
hotEdges: [[0,1],[0,4],[1,5]]
},
flags: [
“Senior Foreign PEP — former advisor to Ministry of Energy. Automatic Enhanced Due Diligence required.”,
“$2.1M outgoing wires vs. declared pension of $85K — massive unexplained source-of-funds gap.”,
“$1.54M to Vyranthos Holdings Ltd (UAE) — shell company with nominee director and no public filings.”,
“Property purchases in Cyprus and Spain — potential integration stage of money laundering.”,
“$250K incoming from Volstran Resources CJSC — possible state-linked entity, source of wealth unknown.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Clear SAR case. Yelara is a <strong>Senior Foreign PEP</strong> — FATF Recommendation 12 requires Enhanced Due Diligence. $2.1M dwarfs her $85K pension. Funds flow to a <strong>UAE shell company</strong> and into <strong>luxury real estate</strong> — textbook <strong>Placement → Layering → Integration</strong>.”,
coach:“🎓 <strong>AI Coach:</strong> PEPs are high-risk due to access to public funds. When a PEP moves millions through shell companies into luxury property, that’s the classic three-stage laundering cycle.”,
},
clear: {
grade:“bad”, title:“Missed Critical Red Flags”, points:-40,
explain:“Clearing a <strong>Senior Foreign PEP</strong> moving $2.1M through shell companies into luxury real estate — on an $85K pension — would be a very serious compliance failure. Multiple indicators of <strong>corruption proceeds being laundered</strong>.”,
coach:“🎓 <strong>AI Coach:</strong> Never clear a PEP alert without verifying source of wealth and source of funds. The income-to-transaction gap is the key indicator.”,
},
escalate: {
grade:“partial”, title:“Right Direction, But File the SAR”, points:80,
explain:“PEP cases can be sensitive, so escalation isn’t wrong. But the evidence is overwhelming. A <strong>SAR should be filed regardless</strong>. Escalation and SAR filing should happen in parallel.”,
coach:“🎓 <strong>AI Coach:</strong> In PEP cases, don’t let internal processes delay regulatory obligations. File and escalate simultaneously.”,
},
info: {
grade:“partial”, title:“The Picture Is Already Clear”, points:50,
explain:“Current evidence already supports a SAR. Waiting risks breaching FinCEN’s 30-day window. The <strong>source-of-funds gap</strong>, shell companies, and luxury property purchases provide ample basis.”,
coach:“🎓 <strong>AI Coach:</strong> You can file a SAR and keep investigating. SARs are intelligence reports, not accusations.”,
}
}
},

// ── CASE 3: Shell Company Layering Network ──
{
id: “AML-2026-0623”,
name: “Talvion Group LLC”,
teaser: “Business account — $4.7M cycled through 6 interconnected shell entities in 45 days, no verifiable operations at any entity”,
amount: “$4,700,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Holding Company — ‘Strategic Investments’”,
country: “United States”,
pep: “No”,
riskScore: 93,
accountAge: “5 months”,
income: “$0 (no revenue declared)”,
},
transactions: [
{ amount:”$820,000”, date:“2026-02-20”, to:“Wire → Nexova Capital Ltd”, country:“UK”, flag:true },
{ amount:”$650,000”, date:“2026-02-17”, to:“Wire → Primsol Trading AG”, country:“Switzerland”, flag:true },
{ amount:”$740,000”, date:“2026-02-14”, to:“Wire → Celvantra Holdings BV”, country:“Netherlands”, flag:true },
{ amount:”$580,000”, date:“2026-02-11”, to:“Incoming — Primsol Trading AG”, country:“Switzerland”, flag:true },
{ amount:”$900,000”, date:“2026-02-08”, to:“Wire → Nexova Capital Ltd”, country:“UK”, flag:true },
{ amount:”$430,000”, date:“2026-02-05”, to:“Incoming — Celvantra Holdings BV”, country:“Netherlands”, flag:true },
{ amount:”$680,000”, date:“2026-02-02”, to:“Wire → Drakon Ventures SARL”, country:“Luxembourg”, flag:true },
{ amount:”$510,000”, date:“2026-01-28”, to:“Incoming — Nexova Capital Ltd”, country:“UK”, flag:true },
{ amount:”$470,000”, date:“2026-01-24”, to:“Wire → Obsidian Bay Corp”, country:“BVI”, flag:true },
{ amount:”$920,000”, date:“2026-01-20”, to:“Incoming — Drakon Ventures SARL”, country:“Luxembourg”, flag:true },
],
network: {
nodes: [
{ id:0, label:“Talvion Group”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. Delaware LLC, 5 months old. Declared purpose: ‘strategic investments.’ Zero revenue. Sole member: Viktor Brennan (US citizen, no prior business history). Registered agent address only — no physical office.” },
{ id:1, label:“Nexova Capital”, type:“company”, x:55, y:170, info:“UK Ltd company. $1.72M outgoing, $510K incoming. Companies House: incorporated 3 months ago. Same registered agent as Celvantra. Sole director: nominee service. Appears in both outgoing and incoming — circular flow.” },
{ id:2, label:“Primsol Trading”, type:“company”, x:345, y:170, info:“Swiss AG. $650K outgoing, $580K incoming. Commercial register shows no employees, no office lease. Registered at a Zug virtual office. Same formation agent used for Drakon Ventures.” },
{ id:3, label:“Celvantra Holdings”, type:“company”, x:55, y:290, info:“Dutch BV. $740K outgoing, $430K incoming. KVK (Dutch Chamber) records show zero trade activity. Single UBO: a Seychelles trust with undisclosed beneficiaries.” },
{ id:4, label:“Drakon Ventures”, type:“company”, x:345, y:290, info:“Luxembourg SARL. $680K outgoing, $920K incoming. Registered capital €12,000. No commercial activity. Part of the circular layering network.” },
{ id:5, label:“Obsidian Bay Corp”, type:“company”, x:200, y:370, info:“BVI company. $470K outgoing — terminus of the chain. No public records. Bearer share company (pre-2017 BVI reforms). Funds reaching Obsidian Bay are effectively untraceable.” },
{ id:6, label:“Viktor Brennan”, type:“person”, x:200, y:150, info:“Sole member of Talvion Group. US citizen. No LinkedIn, no prior business registrations, no tax filings associated with the declared income level. Possible nominee or straw man for undisclosed beneficial owner.” },
],
edges: [
[0,1,”$1.72M”],[0,2,”$650K”],[0,3,”$740K”],[0,4,”$680K”],[0,5,”$470K”],
[1,0,”$510K”],[2,0,”$580K”],[3,0,”$430K”],[4,0,”$920K”],
[6,0,“Sole member”]
],
hotEdges: [[0,1],[0,5],[1,0],[4,0]]
},
flags: [
“Circular layering: Funds leave Talvion to shell entities and partially return — Nexova ($1.72M out, $510K back), Primsol ($650K out, $580K back), Celvantra ($740K out, $430K back), Drakon ($680K out, $920K back). The round-trip pattern creates artificial transaction history and obscures the original source and final destination of funds.”,
“All six entities share characteristics of shell companies: recent incorporation (all <6 months), no employees, no verifiable operations, virtual or registered-agent addresses, nominee directors, and formation through overlapping corporate service providers.”,
“Talvion Group LLC — your direct customer — has zero declared revenue, yet processed $4.7M in wire activity in 45 days. Sole member Viktor Brennan has no verifiable business history. Classic straw-man or nominee structure.”,
“Terminus entity Obsidian Bay Corp (BVI) received $470K. BVI bearer-share company with no public records — funds reaching this entity are effectively untraceable. This is the likely integration point.”,
“Celvantra Holdings BV — ultimate beneficial owner is a Seychelles trust with undisclosed beneficiaries. The layering chain deliberately crosses 6 jurisdictions (US, UK, Switzerland, Netherlands, Luxembourg, BVI) to complicate tracing.”,
“Net flow analysis: $3.36M went out from Talvion, $2.44M came back. The $920K difference between outflows and inflows disappeared into the shell network — likely extracted at the BVI terminus or through cash withdrawals at intermediate entities.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is exactly right. This is a textbook <strong>layering scheme</strong> using interconnected shell companies across 6 jurisdictions. Talvion Group — your direct customer with zero revenue — processed $4.7M in circular wire transfers, bouncing funds between entities that share nominee directors and corporate service providers. Under <strong>FinCEN’s 2016 guidance on shell company indicators</strong>, the combination of recent incorporation, no commercial activity, circular transfers, and a BVI terminus entity represents overwhelming evidence of money laundering at the layering stage. The Seychelles trust at the end of the Celvantra chain is designed to prevent beneficial ownership identification.”,
coach:“🎓 <strong>AI Coach:</strong> Shell company layering works by creating noise. Each wire looks like a normal business payment in isolation — it’s only when you map the full network that the circular pattern emerges. The key skill is looking at BOTH incoming and outgoing flows together. When money goes out to Entity A and comes back from Entity A (or from Entity B which got it from Entity A), that’s not commerce — that’s layering.”,
},
clear: {
grade:“bad”, title:“Critical Compliance Failure”, points:-40,
explain:“A 5-month-old LLC with zero revenue processing $4.7M through 6 shell companies in a circular pattern is <strong>textbook layering</strong>. Clearing this would represent a fundamental failure of transaction monitoring. The entities have no operations, the flows are circular, and the chain terminates in a BVI bearer-share company.”,
coach:“🎓 <strong>AI Coach:</strong> When a brand-new entity with no revenue is sending and receiving millions through recently-formed companies in secrecy jurisdictions, there is no legitimate business explanation. The shell indicators here are not subtle.”,
},
escalate: {
grade:“partial”, title:“Good — But File the SAR”, points:70,
explain:“Escalation is reasonable if your institution requires senior approval for shell company networks. But <strong>the SAR should not wait</strong>. The layering pattern is unambiguous — circular flows, shell entities, and a BVI terminus. File the SAR and escalate in parallel. Also consider whether Talvion’s account should be restricted.”,
coach:“🎓 <strong>AI Coach:</strong> Shell company layering cases often benefit from coordination with your enhanced due diligence team, who may want to issue 314(b) requests to other institutions to map the full network. But don’t let that delay the SAR.”,
},
info: {
grade:“partial”, title:“They’ll Never Answer Honestly”, points:30,
explain:“Requesting source-of-funds documentation from a shell company is unlikely to yield truthful information. The entire purpose of the layering structure is to prevent exactly that inquiry from succeeding. You have sufficient evidence: circular flows, shell indicators, BVI terminus, zero revenue. <strong>File the SAR and restrict the account.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> Asking a shell company for documentation is like asking a burglar for ID. The layering network was built specifically to evade source-of-funds inquiries. File on the pattern — that’s your evidence.”,
}
}
},

// ── CASE 4: Money Mule — Student Account ──
{
id: “AML-2026-0634”,
name: “Jaylen Okafor”,
teaser: “Student checking account — $87K in rapid-fire inflows from unknown third parties, immediately withdrawn or forwarded via Zelle and wire”,
amount: “$87,400”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Full-time Student — State University”,
country: “United States”,
pep: “No”,
riskScore: 71,
accountAge: “14 months”,
income: “$12,000 (part-time campus job)”,
},
transactions: [
{ amount:”$4,800”, date:“2026-02-22”, to:“Zelle out → ‘MikeT_2024’”, country:“US”, flag:true },
{ amount:”$5,200”, date:“2026-02-22”, to:“Incoming Zelle — ‘Barbara S’”, country:“US”, flag:true },
{ amount:”$9,500”, date:“2026-02-20”, to:“Wire out → Kelvort Processing LLC”, country:“US”, flag:true },
{ amount:”$9,800”, date:“2026-02-20”, to:“Incoming ACH — Meadowlark Senior Living”, country:“US”, flag:true },
{ amount:”$7,200”, date:“2026-02-18”, to:“Cash withdrawal — ATM”, country:“US”, flag:true },
{ amount:”$7,500”, date:“2026-02-18”, to:“Incoming Zelle — ‘RobertW_1955’”, country:“US”, flag:true },
{ amount:”$6,400”, date:“2026-02-16”, to:“Wire out → Kelvort Processing LLC”, country:“US”, flag:true },
{ amount:”$12,000”, date:“2026-02-15”, to:“Incoming wire — Hargrove & Associates”, country:“US”, flag:true },
{ amount:”$8,300”, date:“2026-02-14”, to:“Zelle out → ‘DTrading_Global’”, country:“US”, flag:true },
{ amount:”$8,600”, date:“2026-02-13”, to:“Incoming Zelle — ‘Helen M’”, country:“US”, flag:true },
],
network: {
nodes: [
{ id:0, label:“J. Okafor”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. 20-year-old college student. Part-time campus job ($12K/yr). Account normally shows $200-800 balance with small transactions. Sudden spike to $87K in 10 days.” },
{ id:1, label:“Elderly Senders”, type:“person”, x:55, y:170, info:“⚠️ Incoming funds from ‘Barbara S,’ ‘RobertW_1955,’ ‘Helen M,’ and Meadowlark Senior Living (an assisted living facility). Names and associated institutions suggest elderly victims. Combined $31.1K. Possible elder fraud or romance scam victims.” },
{ id:2, label:“Kelvort Processing”, type:“company”, x:345, y:170, info:“⚠️ Wire recipient. $15.9K sent. LLC registered 2 months ago in Wyoming. No website. Single member. Address is a UPS mailbox. Classic money mule collection entity — aggregates funds from multiple mule accounts.” },
{ id:3, label:”‘DTrading_Global’”, type:“person”, x:55, y:290, info:“⚠️ Zelle recipient. $8.3K sent. Username suggests trading/crypto entity. Zelle is used because it’s instant and largely irreversible — preferred by fraud networks for rapid extraction.” },
{ id:4, label:”‘MikeT_2024’”, type:“person”, x:345, y:290, info:“Zelle recipient. $4.8K sent. Unknown individual — possibly another mule in the network forwarding funds further.” },
{ id:5, label:“Hargrove & Assoc.”, type:“company”, x:200, y:290, info:”$12K incoming wire. Appears to be a law firm name. May represent a business email compromise victim — law firm trust accounts are prime BEC targets.” },
{ id:6, label:“Cash Withdrawal”, type:“person”, x:200, y:370, info:”$7.2K cash withdrawal via ATM on same day as $7.5K Zelle inflow. Same-day in-and-out pattern. Cash is the hardest form to trace.” },
],
edges: [
[1,0,”$31.1K”],[5,0,”$12K”],
[0,2,”$15.9K”],[0,3,”$8.3K”],[0,4,”$4.8K”],[0,6,”$7.2K”]
],
hotEdges: [[1,0],[0,2],[0,6]]
},
flags: [
“Money mule pattern: Student account with $12K annual income processed $87.4K in 10 days. Funds arrive from multiple unrelated third parties and are immediately forwarded via Zelle, wire, or cash withdrawal — classic pass-through mule behavior.”,
“Elderly victim indicators: Incoming senders include ‘Barbara S,’ ‘RobertW_1955,’ ‘Helen M,’ and Meadowlark Senior Living (assisted living facility). Names and demographics suggest elderly fraud victims — possibly romance scam, grandparent scam, or tech support fraud targets.”,
“Same-day turnaround: Every inflow is matched by an outflow within 24 hours. The account functions purely as a transit point — funds never rest. This velocity pattern is inconsistent with any legitimate use of a student checking account.”,
“Kelvort Processing LLC (wire recipient, $15.9K) — 2-month-old Wyoming LLC, UPS mailbox address, no operations. Classic mule collection entity that aggregates funds from multiple mule accounts before forwarding offshore or converting to crypto.”,
“Hargrove & Associates ($12K incoming wire) — name suggests law firm. Law firm trust/escrow accounts are the #1 target for Business Email Compromise. This may be a BEC-compromised wire that the firm doesn’t yet know was misdirected.”,
“Account holder is a 20-year-old student with no prior suspicious activity. Money mule recruiters commonly target college students via social media ‘easy money’ offers. The account holder may be a knowing participant or an unwitting victim themselves — either way, the activity is reportable.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is exactly right. This is a textbook <strong>money mule account</strong> — a student with $12K income processing $87K in rapid pass-through transactions from apparent elderly victims to collection entities. <strong>FinCEN Advisory FIN-2022-A003</strong> identifies this exact pattern: young account holders recruited via social media to receive and forward funds. The elderly sender names and the assisted living facility connection suggest the upstream crime may be <strong>elder fraud, romance scams, or tech support fraud</strong>. The SAR should check both the <strong>elder financial exploitation</strong> and <strong>money mule</strong> indicator boxes. Also consider notifying your bank’s elder abuse liaison — some of these victims may be recoverable if flagged quickly.”,
coach:“🎓 <strong>AI Coach:</strong> Money mule cases test your empathy as much as your analytical skills. The account holder may be a willing participant — or they may be a naive student who answered a ‘work from home’ ad. Either way, the activity is suspicious and reportable. But the real victims are likely the elderly senders. Filing quickly can trigger law enforcement action that helps recover their funds.”,
},
clear: {
grade:“bad”, title:“Missed Active Fraud in Progress”, points:-40,
explain:“A student processing $87K in 10 days from elderly senders to shell companies and Zelle aliases is <strong>active fraud laundering</strong>. Clearing this means your bank continues to facilitate what appears to be elder financial exploitation. The same-day pass-through pattern is the opposite of legitimate banking activity.”,
coach:“🎓 <strong>AI Coach:</strong> When you see funds flowing from elderly individuals through a young person’s account to collection entities — that’s not a grey area. It’s a fraud pipeline, and your bank is being used as the plumbing.”,
},
escalate: {
grade:“partial”, title:“Good — But File Urgently”, points:70,
explain:“Escalation is appropriate if your institution has an elder abuse reporting protocol. But <strong>the SAR must be filed immediately</strong> — and in many states, banks are mandatory reporters of suspected elder financial exploitation. This is time-sensitive because fraud victims’ funds may be recoverable if reported within 72 hours.”,
coach:“🎓 <strong>AI Coach:</strong> Elder fraud has special reporting obligations in many jurisdictions. Check whether your state requires mandatory Adult Protective Services reporting in addition to the SAR. And consider account restriction — every day the mule account stays open, more elderly victims may be targeted.”,
},
info: {
grade:“partial”, title:“Don’t Delay — Victims Are Losing Money Now”, points:30,
explain:“The only additional information worth gathering is whether the elderly senders have contacted the bank about fraud — they may not yet know they’re victims. But <strong>this cannot delay the SAR</strong>. The mule pattern is already clear: unrelated third-party inflows, immediate outflows, student account, elderly senders, shell company recipients. File now. Contact the senders’ banks via 314(b) in parallel if your institution participates.”,
coach:“🎓 <strong>AI Coach:</strong> In active fraud cases, every day you spend investigating is a day more victims lose money. The mule account is the chokepoint — restrict it, file the SAR, and the pipeline stops. Then investigate.”,
}
}
},

// ── CASE 5: Cash-Intensive Business — FALSE POSITIVE ──
{
id: “AML-2026-0641”,
name: “Golden Dragon Restaurant”,
teaser: “Restaurant business account — $312K in cash deposits flagged by automated screening, but investigation confirms legitimate high-volume cash-intensive dining establishment”,
amount: “$312,000”,
riskLevel: “medium”,
riskLabel: “Medium”,
correct: “clear”,
profile: {
occupation: “Restaurant Owner — Chinese-American Cuisine”,
country: “United States”,
pep: “No”,
riskScore: 38,
accountAge: “11 years”,
income: “$1,800,000 (gross annual revenue — audited)”,
},
transactions: [
{ amount:”$28,400”, date:“2026-02-22”, to:“Cash Deposit — Weekend receipts”, country:“US”, flag:false },
{ amount:”$18,200”, date:“2026-02-18”, to:“Cash Deposit — Midweek receipts”, country:“US”, flag:false },
{ amount:”$31,600”, date:“2026-02-15”, to:“Cash Deposit — Weekend receipts (Valentine’s week)”, country:“US”, flag:false },
{ amount:”$22,800”, date:“2026-02-11”, to:“Cash Deposit — Midweek receipts”, country:“US”, flag:false },
{ amount:”$34,200”, date:“2026-02-08”, to:“Cash Deposit — Weekend receipts (Lunar New Year)”, country:“US”, flag:false },
{ amount:”$16,500”, date:“2026-02-07”, to:“Wire out → Sysco Food Services”, country:“US”, flag:false },
{ amount:”$12,400”, date:“2026-02-06”, to:“Wire out → Lee’s Asian Produce”, country:“US”, flag:false },
{ amount:”$8,200”, date:“2026-02-05”, to:“ACH out — Payroll (18 employees)”, country:“US”, flag:false },
{ amount:”$45,000”, date:“2026-02-04”, to:“Wire out — Quarterly tax payment (IRS)”, country:“US”, flag:false },
{ amount:”$24,300”, date:“2026-02-01”, to:“Cash Deposit — Weekend receipts”, country:“US”, flag:false },
],
network: {
nodes: [
{ id:0, label:“Golden Dragon”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. Family-owned restaurant, 11-year account history. 180-seat establishment in suburban strip mall. Consistently high cash receipts — customer base includes many older patrons who prefer cash. All deposits supported by POS tape reconciliation.” },
{ id:1, label:“Cash Deposits”, type:“bank”, x:55, y:170, info:“✅ $312K in cash deposits over 45 days. Amounts vary between $14K-$34K per deposit, correlating with weekday vs. weekend patterns. Higher on holidays (Valentine’s, Lunar New Year). Consistent with an 11-year pattern — no sudden spike.” },
{ id:2, label:“Sysco / Suppliers”, type:“company”, x:345, y:170, info:“✅ Major food service distributor. Regular payments ($16.5K) consistent with restaurant supply chain. Long-standing vendor relationship.” },
{ id:3, label:“Lee’s Asian Produce”, type:“company”, x:55, y:290, info:“✅ Local specialty produce supplier. Regular payments ($12.4K) consistent with Asian restaurant ingredient needs. Verifiable local business.” },
{ id:4, label:“Payroll (18 staff)”, type:“person”, x:200, y:290, info:“✅ Regular biweekly payroll to 18 employees via ACH. Amounts consistent with restaurant industry wages for this market. Staff count matches Department of Labor records.” },
{ id:5, label:“IRS Tax Payment”, type:“company”, x:345, y:290, info:“✅ Quarterly estimated tax payment of $45K. Consistent with reported annual revenue of $1.8M. Tax compliance is a strong indicator of legitimate operations.” },
],
edges: [
[1,0,”$312K”],[0,2,”$16.5K”],[0,3,”$12.4K”],[0,4,”$8.2K”],[0,5,”$45K”]
],
hotEdges: []
},
flags: [
“AUTOMATED ALERT — CASH THRESHOLD: This alert was triggered because cumulative cash deposits exceeded the automated cash-intensive business monitoring threshold. No specific structuring pattern or suspicious indicators were identified.”,
“INVESTIGATION FINDINGS — LEGITIMATE ACTIVITY: Golden Dragon Restaurant has an 11-year account history with consistent cash deposit patterns. The current quarter’s deposits are within 8% of the same period last year — no anomalous spike. Cash deposits correlate with weekday/weekend/holiday dining patterns.”,
“Cash deposits are supported by POS (point-of-sale) tape reconciliation provided during the annual business review. Total cash receipts represent approximately 35% of gross revenue — consistent with the restaurant industry average of 30-40% cash payments.”,
“All outgoing payments are to verifiable, long-standing vendors (Sysco, Lee’s Asian Produce), regular payroll to 18 employees via ACH, and quarterly IRS tax payments consistent with reported revenue. No payments to high-risk jurisdictions or unknown entities.”,
“The owner, David Chen, has operated the restaurant for 14 years (3 years before opening this account). Clean personal credit history. No law enforcement inquiries. Active local chamber of commerce member.”,
“Customer base includes a significant elderly population that prefers cash — consistent with the restaurant’s suburban location near two retirement communities. The higher cash-to-card ratio is explained by demographics, not by suspicious activity.”,
],
feedback: {
clear: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Clearing this case is the correct action. This is a <strong>false positive</strong> — an automated cash threshold alert on a legitimate cash-intensive business. Your investigation confirmed: (1) 11-year account with consistent deposit patterns (no sudden spike), (2) cash deposits reconcile to POS receipts (~35% cash ratio, within restaurant industry norms), (3) all outflows go to verifiable vendors, payroll, and IRS, (4) no payments to high-risk entities or jurisdictions, (5) owner has clean 14-year operating history, (6) demographic explanation for high cash ratio (elderly customer base near retirement communities).<br><br>Not every cash-intensive business is laundering money. <strong>Restaurants, laundromats, car washes, and parking garages</strong> legitimately handle large amounts of cash. The ability to distinguish genuine cash-intensive businesses from structuring operations is essential for effective AML analysis. Over-reporting wastes law enforcement resources and can harm legitimate business owners.”,
coach:“🎓 <strong>AI Coach:</strong> Cash-intensive business alerts are the most common false positives in transaction monitoring. The key differentiators: Is the cash pattern consistent over time? Do deposits correlate with business activity (weekends, holidays)? Do outflows match a legitimate supply chain (vendors, payroll, taxes)? Does the owner have verifiable history? Here, every indicator says legitimate. A good analyst clears this quickly and moves on to real threats.”,
},
sar: {
grade:“bad”, title:“Unnecessary SAR — Defensive Filing”, points:-20,
explain:“Filing a SAR on an 11-year-old restaurant with consistent cash patterns, POS reconciliation, verifiable vendors, and quarterly tax compliance would be a <strong>defensive filing</strong>. FinCEN has specifically discouraged this practice. Cash deposits from a legitimate restaurant are exactly what the banking system is for. Defensive filings dilute the SAR database, waste law enforcement resources, and can unfairly stigmatise legitimate business owners.”,
coach:“🎓 <strong>AI Coach:</strong> If you SAR every restaurant that deposits cash, you’ll bury FinCEN in noise and potentially discriminate against cash-intensive ethnic restaurants — which has been a documented fair-lending concern. Investigate, form a judgment, and clear when the evidence supports it.”,
},
escalate: {
grade:“partial”, title:“Unnecessary — You Have the Answer”, points:30,
explain:“Your investigation is thorough and the conclusion is clear. Escalating a confirmed false positive to senior management wastes their time and signals a lack of analytical confidence. <strong>Document your investigation and clear the alert.</strong> If you’re unsure about cash-intensive business thresholds, discuss with your team lead as a learning opportunity — not as an escalation.”,
coach:“🎓 <strong>AI Coach:</strong> Building confidence in clearing decisions is part of professional growth. When 11 years of consistent history, POS reconciliation, and a legitimate supply chain all point to the same answer — trust your analysis.”,
},
info: {
grade:“partial”, title:“You Already Have What You Need”, points:40,
explain:“The investigation has already yielded comprehensive information: 11-year history, POS reconciliation, vendor verification, payroll records, tax compliance, and owner background. Additional information requests would delay resolution of a confirmed false positive. <strong>Clear the alert and document your findings.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> Know when you have enough. Cash-intensive business reviews should check: deposit consistency, POS reconciliation, vendor payments, payroll, and tax compliance. You’ve checked all five. Additional requests are procrastination, not diligence.”,
}
}
},

// ── CASE 6: Elder Financial Exploitation ──
{
id: “AML-2026-0658”,
name: “Margaret Hollingsworth”,
teaser: “Elderly customer — $218K drained from retirement savings via wires to unknown individuals, dramatic departure from 20-year account history”,
amount: “$218,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Retired — Former School Teacher”,
country: “United States”,
pep: “No”,
riskScore: 73,
accountAge: “22 years”,
income: “$38,000 (Social Security + pension)”,
},
transactions: [
{ amount:”$35,000”, date:“2026-02-21”, to:“Wire → Brendan Harwick”, country:“US”, flag:true },
{ amount:”$28,000”, date:“2026-02-17”, to:“Wire → Harwick Capital Advisors”, country:“US”, flag:true },
{ amount:”$42,000”, date:“2026-02-13”, to:“Wire → Brendan Harwick”, country:“US”, flag:true },
{ amount:”$15,000”, date:“2026-02-10”, to:“Wire → Crestview Financial Group”, country:“US”, flag:true },
{ amount:”$38,000”, date:“2026-02-06”, to:“Wire → Brendan Harwick”, country:“US”, flag:true },
{ amount:”$22,000”, date:“2026-02-03”, to:“Wire → Harwick Capital Advisors”, country:“US”, flag:true },
{ amount:”$18,000”, date:“2026-01-30”, to:“Wire → Brendan Harwick”, country:“US”, flag:true },
{ amount:”$20,000”, date:“2026-01-26”, to:“Wire → Crestview Financial Group”, country:“US”, flag:true },
{ amount:”$1,900”, date:“2026-01-15”, to:“ACH — Monthly pension deposit”, country:“US”, flag:false },
{ amount:”$2,100”, date:“2026-01-03”, to:“ACH — Social Security deposit”, country:“US”, flag:false },
],
network: {
nodes: [
{ id:0, label:“M. Hollingsworth”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. 78-year-old retired school teacher. 22-year account history. Normal pattern: pension/SS deposits, grocery/pharmacy purchases, modest utility payments. Total account balance has dropped from $286K to $68K in 30 days — she is being drained.” },
{ id:1, label:“Brendan Harwick”, type:“person”, x:55, y:190, info:“⚠️ Individual recipient. $133K received across 4 wires. No prior relationship to Hollingsworth in bank records. Not a registered investment advisor (checked SEC IAPD and FINRA BrokerCheck). Branch staff report Hollingsworth mentioned ‘her financial advisor Brendan’ — but no advisory agreement exists.” },
{ id:2, label:“Harwick Capital Adv.”, type:“company”, x:345, y:190, info:“⚠️ Unregistered entity. $50K received. Not registered with SEC, FINRA, or any state securities regulator. Address traces to a co-working space. Website created 3 months ago — stock photos, no team bios, fake testimonials. Classic investment fraud front.” },
{ id:3, label:“Crestview Financial”, type:“company”, x:200, y:310, info:“⚠️ Another unregistered entity. $35K received. Not in any financial services registry. Address is a residential apartment. Domain registered 6 weeks ago. May be same operator as Harwick Capital — different name, same fraud.” },
{ id:4, label:“Retirement Savings”, type:“bank”, x:200, y:190, info:“Hollingsworth’s savings: dropped from $286K to $68K in 30 days. These are her life savings — accumulated over a 35-year teaching career. At this rate of depletion, she will be financially destitute within weeks.” },
],
edges: [
[0,1,”$133K”],[0,2,”$50K”],[0,3,”$35K”],
[4,0,“Depleting”]
],
hotEdges: [[0,1],[0,2],[0,3],[4,0]]
},
flags: [
“Elder financial exploitation: 78-year-old retired teacher with a 22-year stable account history is being rapidly drained. $218K withdrawn in 30 days — account balance has dropped from $286K to $68K. This represents her entire life savings.”,
“Complete departure from established pattern: For 20+ years, account activity consisted of pension/SS deposits and modest household spending. The sudden appearance of large wires to unknown individuals and unregistered entities is a dramatic behavioral anomaly.”,
“Brendan Harwick ($133K received) — not a registered investment advisor per SEC IAPD or FINRA BrokerCheck databases. Branch staff report the customer referred to him as ‘her financial advisor,’ but no advisory agreement or fiduciary relationship exists. Classic affinity fraud or romance scam profile.”,
“Harwick Capital Advisors and Crestview Financial Group — neither is registered with any securities regulator (federal or state). Websites are recently created with stock photos and fabricated testimonials. Both are likely fraudulent entities controlled by the same individual.”,
“Mandatory reporting: Many states require banks to report suspected elder financial exploitation to Adult Protective Services. Under the Senior Safe Act (2018), bank employees who report suspected elder exploitation in good faith are protected from liability.”,
“Time-critical: At the current rate of depletion ($218K in 30 days), Hollingsworth will be completely financially depleted within 2-3 weeks. Immediate action — SAR filing, potential account restriction, and APS notification — is essential to preserve her remaining savings.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is the correct and urgent action. This is <strong>elder financial exploitation</strong> — a 78-year-old retired teacher is being systematically defrauded of her life savings. <strong>FinCEN Advisory FIN-2022-A002</strong> (Elder Financial Exploitation) specifically identifies this pattern: rapid depletion of long-held savings, payments to unregistered ‘advisors,’ and dramatic behavioral departure from an established 20-year pattern. The SAR should check the <strong>elder financial exploitation</strong> box and include a narrative that emphasizes the time-sensitivity — this victim is weeks from financial ruin.<br><br>In addition to the SAR: (1) check your state’s mandatory reporting obligations for elder exploitation (many states require notification to Adult Protective Services), (2) consider whether account restriction is warranted to protect remaining funds, (3) the <strong>Senior Safe Act (2018)</strong> provides safe harbor for good-faith reporting of suspected elder exploitation.”,
coach:“🎓 <strong>AI Coach:</strong> Elder financial exploitation SARs are among the most personally impactful filings you can make. This is a 78-year-old woman who spent 35 years teaching — and someone is stealing everything she saved. The behavioral anomaly is obvious: 20 years of stable pension deposits, then suddenly $218K to unregistered ‘advisors.’ Your SAR could trigger an investigation that saves her remaining $68K and potentially holds the fraudster accountable. Don’t hesitate.”,
},
clear: {
grade:“bad”, title:“Potential Facilitation of Elder Abuse”, points:-40,
explain:“Clearing this would mean your bank continues to process payments that are <strong>draining an elderly customer’s life savings</strong>. A 78-year-old with a 22-year stable account history doesn’t suddenly start wiring $218K to unregistered ‘financial advisors’ without something being very wrong. This may constitute facilitation of elder abuse — with potential civil and criminal liability for the institution.”,
coach:“🎓 <strong>AI Coach:</strong> When an elderly customer’s behavior suddenly and dramatically changes — large payments to unknown recipients, account depletion, mentions of ‘advisors’ who don’t exist in any registry — your obligation is clear. These are not gray areas.”,
},
escalate: {
grade:“partial”, title:“Good — But File and Report Immediately”, points:80,
explain:“Escalation is appropriate because elder exploitation may trigger <strong>mandatory state reporting to Adult Protective Services</strong> and may require branch coordination to engage the customer. But <strong>the SAR must be filed urgently and account restrictions considered immediately</strong>. Every day of delay is another potential wire that depletes her savings further. Escalate AND file simultaneously.”,
coach:“🎓 <strong>AI Coach:</strong> Elder exploitation cases often require coordination across compliance, branch operations, and legal. But the SAR and any state-mandated APS reports cannot wait for that coordination. File first, coordinate second.”,
},
info: {
grade:“partial”, title:“She May Not Know She’s Being Exploited”, points:50,
explain:“Reaching out to the customer (or her designated family contacts, if any are on file) is a compassionate and potentially valuable step. However, exploitation victims often <strong>defend their exploiters</strong> — Hollingsworth may insist the payments are legitimate and that Harwick is a trustworthy advisor. Don’t let her reassurance override your analytical findings. The facts are clear: unregistered advisors, fake websites, rapid account depletion. <strong>File the SAR regardless of what the customer says.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> One of the hardest aspects of elder exploitation cases is that victims often resist help. They may feel embarrassed, may have developed emotional dependency on the exploiter (especially in romance scams), or may genuinely believe the ‘investment’ is real. Your obligation is to report based on the objective indicators — not on the victim’s subjective belief.”,
}
}
},

// ── CASE 7: Insider Threat — Bank Employee Account ──
{
id: “AML-2026-0667”,
name: “Ricardo Vasquez”,
teaser: “Bank employee personal account — $1.4M in unexplained deposits from entities matching accounts he services, potential front-running or kickback scheme”,
amount: “$1,400,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “escalate”,
profile: {
occupation: “YOUR BANK — Senior Relationship Manager, Commercial Banking”,
country: “United States”,
pep: “No (Internal Employee)”,
riskScore: 96,
accountAge: “6 years”,
income: “$145,000 (salary + bonus)”,
},
transactions: [
{ amount:”$175,000”, date:“2026-02-21”, to:“Incoming wire — Solmark Logistics Inc”, country:“US”, flag:true },
{ amount:”$120,000”, date:“2026-02-17”, to:“Wire out → R. Vasquez (personal brokerage)”, country:“US”, flag:true },
{ amount:”$200,000”, date:“2026-02-13”, to:“Incoming wire — GrandPeak Development Corp”, country:“US”, flag:true },
{ amount:”$85,000”, date:“2026-02-10”, to:“Wire out → Casa Vasquez LLC”, country:“US”, flag:true },
{ amount:”$150,000”, date:“2026-02-06”, to:“Incoming wire — Trimont Healthcare Group”, country:“US”, flag:true },
{ amount:”$225,000”, date:“2026-02-03”, to:“Incoming wire — Solmark Logistics Inc”, country:“US”, flag:true },
{ amount:”$95,000”, date:“2026-01-30”, to:“Wire out → R. Vasquez (personal brokerage)”, country:“US”, flag:true },
{ amount:”$160,000”, date:“2026-01-27”, to:“Incoming wire — GrandPeak Development Corp”, country:“US”, flag:true },
{ amount:”$110,000”, date:“2026-01-23”, to:“Incoming wire — Trimont Healthcare Group”, country:“US”, flag:true },
{ amount:”$80,000”, date:“2026-01-20”, to:“Wire out → Casa Vasquez LLC”, country:“US”, flag:true },
],
network: {
nodes: [
{ id:0, label:“R. Vasquez”, type:“customer”, x:200, y:50, info:“YOUR BANK EMPLOYEE — Senior Relationship Manager in Commercial Banking. Personal account at your bank. $145K salary+bonus, but $1.4M in activity in 30 days. The three incoming wire senders — Solmark, GrandPeak, Trimont — are ALL clients in his portfolio that he personally manages.” },
{ id:1, label:“Solmark Logistics”, type:“company”, x:55, y:190, info:“⚠️ YOUR BANK’S COMMERCIAL CLIENT — assigned to Vasquez’s portfolio. $400K wired to Vasquez’s personal account. Solmark recently received a $5M line of credit that Vasquez recommended for approval. Possible kickback for favorable credit decisions.” },
{ id:2, label:“GrandPeak Dev.”, type:“company”, x:345, y:190, info:“⚠️ YOUR BANK’S COMMERCIAL CLIENT — assigned to Vasquez’s portfolio. $360K wired to Vasquez’s personal account. GrandPeak’s commercial mortgage application (currently under review) was advanced by Vasquez with ‘strong recommendation.’” },
{ id:3, label:“Trimont Healthcare”, type:“company”, x:55, y:310, info:“⚠️ YOUR BANK’S COMMERCIAL CLIENT — assigned to Vasquez’s portfolio. $260K wired to Vasquez’s personal account. Trimont had a covenant violation waived last quarter — Vasquez approved the waiver. Possible quid pro quo.” },
{ id:4, label:“Personal Brokerage”, type:“company”, x:345, y:310, info:“Vasquez’s personal brokerage account at an external firm. $215K transferred out. If he’s trading on material non-public information about his commercial clients’ credit decisions, this could also constitute insider trading.” },
{ id:5, label:“Casa Vasquez LLC”, type:“company”, x:200, y:390, info:“LLC owned by Vasquez. $165K transferred. State records show it owns two residential investment properties purchased in the past 6 months — funded by these unexplained payments.” },
],
edges: [
[1,0,”$400K”],[2,0,”$360K”],[3,0,”$260K”],
[0,4,”$215K”],[0,5,”$165K”]
],
hotEdges: [[1,0],[2,0],[3,0]]
},
flags: [
“INSIDER THREAT: Ricardo Vasquez is a Senior Relationship Manager at YOUR BANK. The three entities sending him large personal payments — Solmark Logistics ($400K), GrandPeak Development ($360K), and Trimont Healthcare ($260K) — are ALL commercial banking clients assigned to his portfolio.”,
“Potential kickback/corruption scheme: Solmark received a $5M credit line that Vasquez recommended. GrandPeak has a mortgage application Vasquez advanced with ‘strong recommendation.’ Trimont had a covenant violation waived by Vasquez. The payments to his personal account suggest quid pro quo for favorable banking decisions.”,
“$1.4M in personal account activity vs. $145K salary+bonus. The 10:1 ratio between unexplained income and documented compensation is a critical insider threat indicator.”,
“Outflows to personal brokerage ($215K) raise additional concerns: if Vasquez has material non-public information about his commercial clients’ creditworthiness or financial condition, brokerage trades could constitute insider trading or front-running.”,
“Casa Vasquez LLC — owns two residential investment properties purchased in the last 6 months. These appear to be funded by the unexplained payments. Vasquez did not disclose outside business interests as required by your bank’s employee compliance policy.”,
“This case REQUIRES ESCALATION before any other action: (1) Internal Affairs / Employee Conduct team must be notified, (2) Legal/General Counsel involvement needed for employee investigation, (3) all credit decisions Vasquez has influenced must be reviewed, (4) his system access should be restricted, (5) SAR filing will follow but the internal investigation must be coordinated first to preserve evidence.”,
],
feedback: {
escalate: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Escalation is the correct primary action. This is an <strong>insider threat / employee corruption case</strong> that requires a coordinated institutional response before any external reporting. Under your bank’s employee conduct policies and <strong>OCC Bulletin 2004-25</strong> (Bank Secrecy Act / Anti-Money Laundering: Suspicious Activity Report Filing), employee-involved suspicious activity requires: (1) immediate notification of Internal Affairs / Employee Investigations, (2) Legal/General Counsel involvement to manage privilege and evidence preservation, (3) system access restriction for Vasquez, (4) review of ALL credit decisions he influenced, (5) assessment of potential insider trading if brokerage activity involved MNPI.<br><br>A SAR will absolutely be required — but the <strong>internal investigation must be coordinated first</strong> to ensure evidence is preserved, system access is restricted, and the institution’s legal position is protected. Employee SARs are among the most sensitive filings and typically require General Counsel sign-off.”,
coach:“🎓 <strong>AI Coach:</strong> Employee corruption cases are the most sensitive in AML. They implicate your institution directly — not just as a facilitator of someone else’s crime, but as the victim. Every credit decision Vasquez touched is now potentially compromised. The escalation here isn’t just about compliance — it’s about institutional integrity. Internal Affairs needs to act before Vasquez can destroy evidence, and Legal needs to assess the bank’s exposure on every deal he recommended. The SAR comes after the institution is protected.”,
},
sar: {
grade:“partial”, title:“Needed — But Escalate Internally First”, points:80,
explain:“A SAR will definitely be filed — employee-involved suspicious activity is always reportable. But <strong>the internal escalation must happen first</strong>. Filing a SAR on a current employee triggers specific obligations: the employee cannot be tipped off (SAR confidentiality provisions, 31 USC § 5318(g)(2)), but the institution also needs to preserve evidence, restrict system access, and coordinate with Legal. Employee SARs typically require General Counsel review before filing.”,
coach:“🎓 <strong>AI Coach:</strong> The sequence matters: escalate internally → preserve evidence → restrict access → coordinate with Legal → file SAR. If you file the SAR before notifying Internal Affairs, you may inadvertently tip off Vasquez through process breakdowns, and the institution loses the ability to control the investigation.”,
},
clear: {
grade:“bad”, title:“Institutional Corruption Ignored”, points:-40,
explain:“Clearing an insider threat case — where a <strong>senior relationship manager is receiving payments from his own portfolio clients</strong> in apparent exchange for favorable credit decisions — would be a catastrophic institutional failure. This isn’t just an AML violation; it’s potential bank fraud, commercial bribery, and possibly insider trading.”,
coach:“🎓 <strong>AI Coach:</strong> An employee receiving payments from clients he manages isn’t a grey area. It’s corruption. And because he’s your employee making credit decisions with your bank’s capital, the institution is directly harmed.”,
},
info: {
grade:“partial”, title:“Escalate First — Don’t Alert the Subject”, points:50,
explain:“Requesting information from Vasquez or his portfolio clients risks <strong>tipping off the subject</strong>. In employee investigation cases, information gathering must be coordinated by Internal Affairs and Legal to ensure evidence preservation and SAR confidentiality. Do NOT contact Vasquez, Solmark, GrandPeak, or Trimont directly. <strong>Escalate to Internal Affairs immediately</strong> — they will manage the investigation using forensic methods that preserve evidence.”,
coach:“🎓 <strong>AI Coach:</strong> Never approach the subject of an insider threat investigation directly. Employee investigations require forensic evidence gathering — email review, system access logs, recorded line monitoring — all coordinated by Internal Affairs. Your job was to spot the pattern. Their job is to investigate it.”,
}
}
},

// ── CASE 8: Romance Fraud Victim — Outbound ──
{
id: “AML-2026-0674”,
name: “Thomas Brightwell”,
teaser: “Individual account — $165K sent to overseas recipients customer claims are ‘business partners,’ but patterns match romance/investment fraud victimisation”,
amount: “$165,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Retired — Former IT Manager”,
country: “United States”,
pep: “No”,
riskScore: 68,
accountAge: “18 years”,
income: “$52,000 (retirement income)”,
},
transactions: [
{ amount:”$25,000”, date:“2026-02-22”, to:“Wire → ‘Sophia Laurent’ — Bank of Southeast Asia”, country:“Malaysia”, flag:true },
{ amount:”$18,000”, date:“2026-02-18”, to:“Wire → Aurelia Digital Investments”, country:“Hong Kong”, flag:true },
{ amount:”$30,000”, date:“2026-02-14”, to:“Wire → ‘Sophia Laurent’ — Bank of Southeast Asia”, country:“Malaysia”, flag:true },
{ amount:”$12,000”, date:“2026-02-10”, to:“Wire → Aurelia Digital Investments”, country:“Hong Kong”, flag:true },
{ amount:”$22,000”, date:“2026-02-06”, to:“Wire → ‘Sophia Laurent’ — Bank of Southeast Asia”, country:“Malaysia”, flag:true },
{ amount:”$15,000”, date:“2026-02-02”, to:“Wire → Aurelia Digital Investments”, country:“Hong Kong”, flag:true },
{ amount:”$20,000”, date:“2026-01-28”, to:“Wire → ‘Sophia Laurent’ — Bank of Southeast Asia”, country:“Malaysia”, flag:true },
{ amount:”$8,000”, date:“2026-01-24”, to:“Crypto purchase — CoinFlow Exchange”, country:“US”, flag:true },
{ amount:”$15,000”, date:“2026-01-20”, to:“Wire → Aurelia Digital Investments”, country:“Hong Kong”, flag:true },
{ amount:”$2,600”, date:“2026-01-15”, to:“ACH — Monthly retirement income”, country:“US”, flag:false },
],
network: {
nodes: [
{ id:0, label:“T. Brightwell”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. 62-year-old retired IT manager. Recently divorced (8 months ago). 18-year stable account history suddenly shows $165K in outbound wires in 30 days. Likely a romance/investment fraud victim — not the perpetrator.” },
{ id:1, label:”‘Sophia Laurent’”, type:“person”, x:55, y:190, info:“⚠️ Individual beneficiary in Malaysia. $97K received. Branch teller reported Brightwell said she is ‘his girlfriend’ whom he met online 3 months ago but has never met in person. He says she ‘needs help with a business opportunity.’ Classic romance fraud.” },
{ id:2, label:“Aurelia Digital Inv.”, type:“company”, x:345, y:190, info:“⚠️ Hong Kong-registered ‘investment firm.’ $60K received. Not licensed by SFC (HK Securities and Futures Commission). Website shows guaranteed 40% monthly returns — textbook investment fraud. Brightwell says ‘Sophia’ recommended this investment.” },
{ id:3, label:“CoinFlow Exchange”, type:“company”, x:200, y:310, info:“US crypto exchange. $8K in crypto purchases. The crypto was likely transferred to a wallet provided by the fraudsters — a common secondary extraction method when victims start questioning wire transfers.” },
{ id:4, label:“Romance Scam 💔”, type:“jurisdiction”, x:55, y:310, info:”‘Sophia Laurent’ matches the romance fraud playbook: attractive online persona, accelerated emotional relationship, ‘never met in person,’ escalating financial requests. The convergence with an unregistered ‘investment’ firm is the hybrid romance-investment scam (sometimes called ‘pig butchering’).” },
],
edges: [
[0,1,”$97K”],[0,2,”$60K”],[0,3,”$8K”],
[1,2,“Connected”],[1,4]
],
hotEdges: [[0,1],[0,2],[1,2]]
},
flags: [
“Romance/investment fraud (pig butchering) indicators: Recently divorced 62-year-old sending $97K to an online ‘girlfriend’ he has never met in person, plus $60K to an unlicensed ‘investment firm’ she recommended. This is the hybrid romance-investment scam (also known as ‘sha zhu pan’ or pig butchering).”,
“Dramatic behavioral departure: 18-year account history of stable retirement activity. Divorce 8 months ago (emotional vulnerability). $165K in outbound wires in 30 days — more than 3× his annual retirement income. Account being rapidly drained.”,
“Aurelia Digital Investments — not licensed by Hong Kong SFC. Website promises ‘guaranteed 40% monthly returns.’ No legitimate investment offers guaranteed returns. This is a fraudulent entity designed to extract money from fraud victims.”,
“The victim is sending money, not receiving it — this SAR reports outbound fraud victimisation. Although Brightwell is the sender (not the criminal), the activity is still reportable because: (1) the funds are going to fraudulent entities, (2) the SAR may help law enforcement identify and disrupt the fraud network, and (3) the bank has a duty to protect customers from financial exploitation.”,
“$8K in crypto purchases suggests the fraudsters are diversifying extraction methods — common when victims begin questioning traditional wire transfers. The crypto is likely transferred to the fraudsters’ wallets.”,
“Branch teller interaction: Brightwell reportedly became agitated when the teller asked about the purpose of wires, saying ‘it’s my money and my business.’ Defensiveness about wire details is common in romance fraud victims who have been coached by the scammer to resist bank inquiries.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is the correct action. This is a <strong>romance-investment hybrid fraud</strong> (also known as ‘pig butchering’ or ‘sha zhu pan’) targeting a recently divorced, emotionally vulnerable retiree. <strong>FinCEN Advisory FIN-2023-A004</strong> specifically identifies this typology: an online romantic interest who then directs the victim to invest in fraudulent platforms. Your SAR serves dual purposes: (1) alerting law enforcement to the fraud network (the Malaysian and Hong Kong endpoints) and (2) potentially triggering victim outreach. The SAR narrative should emphasize that Brightwell is the <strong>victim, not the perpetrator</strong> — this affects how law enforcement processes the referral. Also consider: (a) whether your bank should conduct a customer welfare intervention, (b) notifying Adult Protective Services if required by your state, and (c) contacting the receiving banks to attempt fund recovery.”,
coach:“🎓 <strong>AI Coach:</strong> Pig butchering is the fastest-growing fraud typology globally. The scam combines emotional manipulation (romance) with financial exploitation (fake investments), creating victims who actively resist intervention because they believe they’re in a real relationship making smart investments. Your SAR on the outbound flows is critical because it identifies the fraud endpoints — many victims never report the crime themselves because they don’t realise it IS a crime until it’s too late. Your filing could help law enforcement map the network and potentially freeze funds.”,
},
clear: {
grade:“bad”, title:“Enabling Continued Exploitation”, points:-40,
explain:“Clearing this case means your bank continues to facilitate outbound payments to what are clearly <strong>romance and investment fraud operators</strong>. A recently divorced retiree sending $165K to an online ‘girlfriend’ he’s never met and an unlicensed ‘investment firm’ promising 40% monthly returns — this is not a grey area. Every wire you process depletes his life savings further.”,
coach:“🎓 <strong>AI Coach:</strong> ‘It’s his money’ is not a compliance defence. When a customer’s behavior dramatically changes and the indicators point overwhelmingly to fraud victimisation, your obligation is to report — not to facilitate. The customer’s right to transact doesn’t override your regulatory reporting obligation.”,
},
escalate: {
grade:“partial”, title:“Good — But File Urgently”, points:70,
explain:“Escalation is appropriate because customer welfare intervention may be needed — your branch team may need to have a sensitive conversation with Brightwell about the fraud indicators. But <strong>the SAR must be filed immediately</strong>. His savings are being drained in real-time. Also consider whether wire restriction is warranted to protect his remaining funds while the situation is assessed.”,
coach:“🎓 <strong>AI Coach:</strong> Romance fraud cases are emotionally complex — the victim often doesn’t want to be saved. Escalation to branch management for a welfare conversation is appropriate, but the SAR filing and potential wire restriction should happen regardless of the customer’s response.”,
},
info: {
grade:“partial”, title:“The Victim May Deny It”, points:50,
explain:“Contacting Brightwell to verify the nature of these transfers is a reasonable customer welfare step. However, <strong>romance fraud victims almost always defend the scammer</strong> — he will likely insist Sophia is real and the investment is legitimate. Don’t let his reassurance override the objective red flags: online-only relationship, never met in person, unlicensed investment firm, guaranteed returns. <strong>File the SAR regardless of what the customer says.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> In pig butchering cases, asking the victim ‘is this legitimate?’ will almost always get a ‘yes.’ The scammer has spent months building trust and has coached the victim to resist exactly this kind of intervention. Report based on the indicators, not the victim’s self-assessment.”,
}
}
},

// ── CASE 9: Rapid Movement — Drug Proceeds ──
{
id: “AML-2026-0689”,
name: “Pinnacle Express Logistics LLC”,
teaser: “Business account — $890K in rapid cash-in/wire-out pattern, cash deposits from multiple cities followed by same-day wires to Mexico, consistent with narcotics proceeds laundering”,
amount: “$890,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “Logistics / Transportation Company”,
country: “United States”,
pep: “No”,
riskScore: 89,
accountAge: “9 months”,
income: “$180,000 (declared annual revenue)”,
},
transactions: [
{ amount:”$78,000”, date:“2026-02-22”, to:“Wire out → Transportes del Bajío SA de CV”, country:“Mexico”, flag:true },
{ amount:”$82,000”, date:“2026-02-22”, to:“Cash Deposit — Phoenix, AZ branch”, country:“US”, flag:true },
{ amount:”$65,000”, date:“2026-02-19”, to:“Wire out → Transportes del Bajío SA de CV”, country:“Mexico”, flag:true },
{ amount:”$71,000”, date:“2026-02-19”, to:“Cash Deposit — Tucson, AZ branch”, country:“US”, flag:true },
{ amount:”$94,000”, date:“2026-02-15”, to:“Wire out → Grupo Industrial Noroeste”, country:“Mexico”, flag:true },
{ amount:”$88,000”, date:“2026-02-15”, to:“Cash Deposit — Denver, CO branch”, country:“US”, flag:true },
{ amount:”$105,000”, date:“2026-02-12”, to:“Wire out → Transportes del Bajío SA de CV”, country:“Mexico”, flag:true },
{ amount:”$110,000”, date:“2026-02-12”, to:“Cash Deposit — Albuquerque, NM branch”, country:“US”, flag:true },
{ amount:”$92,000”, date:“2026-02-08”, to:“Wire out → Grupo Industrial Noroeste”, country:“Mexico”, flag:true },
{ amount:”$95,000”, date:“2026-02-08”, to:“Cash Deposit — El Paso, TX branch”, country:“US”, flag:true },
],
network: {
nodes: [
{ id:0, label:“Pinnacle Express”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. ‘Logistics company’ with $180K declared revenue but $890K in cash/wire activity in 15 days. Cash deposits in 5 different Southwest cities — same day as matching wires to Mexico. Classic narcotics cash-to-wire pipeline.” },
{ id:1, label:“Multi-City Cash”, type:“bank”, x:55, y:180, info:“⚠️ Cash deposits at 5 different branches across the Southwest: Phoenix AZ, Tucson AZ, Denver CO, Albuquerque NM, El Paso TX. All are DEA-designated HIDTA cities on major drug trafficking corridors. Deposits made by 3 different individuals (not the account owner).” },
{ id:2, label:“Transportes del Bajío”, type:“company”, x:345, y:180, info:“⚠️ Mexican transportation company. $248K wired — same day as cash deposits. Located in Guanajuato state — epicenter of CJNG (Cártel Jalisco Nueva Generación) operations. No verifiable freight records matching the wire amounts.” },
{ id:3, label:“Grupo Industrial NW”, type:“company”, x:345, y:300, info:“⚠️ Mexican industrial company. $186K wired. Located in Sinaloa state — historic Sinaloa Cartel territory. Company registered 11 months ago. Wire descriptions say ‘truck parts’ but amounts don’t correspond to any standard parts invoices.” },
{ id:4, label:“3 Cash Depositors”, type:“person”, x:55, y:300, info:“⚠️ Three different individuals make the cash deposits — none is the account owner. Identified by teller logs as ‘Maria G.,’ ‘Jose R.,’ and ‘Carlos P.’ — using different branches in different states. Classic smurfing network across trafficking corridor cities.” },
{ id:5, label:“SW Drug Corridor”, type:“jurisdiction”, x:200, y:380, info:“Phoenix, Tucson, Albuquerque, El Paso, and Denver are all on the Southwest drug trafficking corridor. DEA HIDTA designations. The I-25 and I-10 corridors are primary routes for northbound narcotics and southbound bulk cash.” },
],
edges: [
[1,0,”$446K cash”],[0,2,”$248K”],[0,3,”$186K”],
[4,1,“3 smurfs”],[2,5],[3,5]
],
hotEdges: [[1,0],[0,2],[0,3],[4,1]]
},
flags: [
“Rapid cash-in/wire-out: Every cash deposit is matched by a same-day wire to Mexico of nearly identical amount. $446K deposited, $434K wired — the account is a pure pass-through pipeline. The small difference ($12K) may represent the laundering fee.”,
“Multi-city cash deposits across the Southwest drug corridor: Phoenix AZ, Tucson AZ, Denver CO, Albuquerque NM, El Paso TX. All DEA-designated High Intensity Drug Trafficking Areas (HIDTAs). Cash deposited by 3 different individuals — none is the account holder.”,
“Mexican wire recipients located in cartel strongholds: Transportes del Bajío (Guanajuato — CJNG territory, $248K) and Grupo Industrial Noroeste (Sinaloa — Sinaloa Cartel territory, $186K). Both recently incorporated with no verifiable operations matching wire descriptions.”,
“Declared annual revenue $180K but $890K processed in 15 days — nearly 5× annual revenue in two weeks. The ‘logistics company’ has no DOT operating authority, no fleet registration, and no verifiable freight contracts.”,
“Third-party cash deposits from 3 different individuals across 5 states suggest an organized smurfing network. This is consistent with FinCEN Advisory FIN-2014-A005 identifying Southwest bulk cash movement as a primary narcotics-proceeds laundering methodology.”,
“Wire descriptions claim ‘truck parts’ and ‘transportation services’ but amounts ($65K-$105K per wire) don’t correspond to any standard parts or service invoices. The descriptions are window-dressing for drug money repatriation to Mexico.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is the correct action. This is textbook <strong>narcotics bulk cash laundering</strong> through the Southwest drug corridor. Cash is collected in HIDTA cities by a smurfing network, deposited into a shell ‘logistics’ company, and wired same-day to entities in cartel-controlled Mexican states. <strong>FinCEN Advisory FIN-2014-A005</strong> and <strong>DEA HIDTA intelligence reports</strong> identify this exact pattern: multi-city cash deposits → rapid same-day wire → Mexican recipients in trafficking regions. The SAR should reference the HIDTA corridor, the third-party depositor pattern, and the cartel-territory recipients. This filing will likely be prioritized by FinCEN’s analytical teams due to the narcotics indicators.”,
coach:“🎓 <strong>AI Coach:</strong> Same-day cash-in/wire-out is one of the clearest narcotics laundering signals. Legitimate businesses don’t deposit cash in Phoenix and wire the exact amount to Sinaloa the same afternoon. The multi-city pattern tells you there’s an organized collection network — the cash is drug proceeds gathered from distribution cells across the Southwest, consolidated through this account, and repatriated to Mexico. Your SAR is a piece of a much larger puzzle that DEA and FinCEN are assembling.”,
},
clear: {
grade:“bad”, title:“Narcotics Money Laundering Facilitated”, points:-40,
explain:“Clearing this is equivalent to facilitating <strong>narcotics money laundering</strong>. A 9-month-old shell ‘logistics company’ with no DOT authority is depositing drug-corridor cash and wiring it same-day to cartel-territory Mexico. There is no legitimate business explanation for this pattern.”,
coach:“🎓 <strong>AI Coach:</strong> When cash arrives from HIDTA cities via third-party depositors and immediately wires to cartel regions in Mexico — same day, every time — the only question is how fast you can file the SAR. This is not ambiguous.”,
},
escalate: {
grade:“partial”, title:“Good — But File Immediately”, points:70,
explain:“Escalation is reasonable given the narcotics dimension — your bank may want to coordinate with law enforcement (FinCEN, DEA) and consider account restriction. But <strong>the SAR must be filed immediately</strong>. The account is actively being used as a drug money pipeline. Restrict the account and file simultaneously.”,
coach:“🎓 <strong>AI Coach:</strong> In active narcotics laundering cases, account restriction and SAR filing should happen the same day. Every day the account stays open is another $80-110K in drug money flowing through your bank to Mexico.”,
},
info: {
grade:“partial”, title:“The Activity IS the Evidence”, points:30,
explain:“Requesting DOT records, freight contracts, or invoices from a shell logistics company will yield nothing — because the company has no real operations. The cash-in/wire-out pattern, multi-city deposits, third-party depositors, and cartel-territory recipients are sufficient evidence. <strong>File the SAR, restrict the account, and let law enforcement investigate further.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> Don’t ask the laundromat for its laundry receipts. The transactional pattern is your evidence. File on the pattern and let DEA handle the investigation.”,
}
}
},

// ── CASE 10: Charity/NPO Diversion ──
{
id: “AML-2026-0695”,
name: “Global Mercy Foundation”,
teaser: “Non-profit account — $540K in donations diverted to personal accounts and luxury spending by foundation director, charity fraud with potential terrorism financing nexus”,
amount: “$540,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “escalate”,
profile: {
occupation: “501(c)(3) Non-Profit — Humanitarian Aid”,
country: “United States”,
pep: “No”,
riskScore: 79,
accountAge: “4 years”,
income: “$2,200,000 (annual donations received)”,
},
transactions: [
{ amount:”$85,000”, date:“2026-02-21”, to:“Wire → Dr. Adnan Salehi (personal acct — Turkey)”, country:“Türkiye”, flag:true },
{ amount:”$120,000”, date:“2026-02-17”, to:“Wire → Crescent Relief Int’l”, country:“Jordan”, flag:true },
{ amount:”$65,000”, date:“2026-02-13”, to:“Wire → Dr. Adnan Salehi (personal acct — US)”, country:“US”, flag:true },
{ amount:”$45,000”, date:“2026-02-10”, to:“Wire → Crescent Relief Int’l”, country:“Jordan”, flag:true },
{ amount:”$75,000”, date:“2026-02-06”, to:“Wire → Al-Amanah Exchange Co.”, country:“Somalia”, flag:true },
{ amount:”$30,000”, date:“2026-02-03”, to:“Wire → Dr. Adnan Salehi (personal acct — US)”, country:“US”, flag:true },
{ amount:”$55,000”, date:“2026-01-30”, to:“Wire → Crescent Relief Int’l”, country:“Jordan”, flag:true },
{ amount:”$40,000”, date:“2026-01-27”, to:“Wire → Al-Amanah Exchange Co.”, country:“Somalia”, flag:true },
{ amount:”$25,000”, date:“2026-01-23”, to:“ACH out — Hilltop Luxury Motors (Mercedes-Benz)”, country:“US”, flag:true },
{ amount:”$185,000”, date:“2026-01-20”, to:“Incoming — Legitimate donor contributions”, country:“US”, flag:false },
],
network: {
nodes: [
{ id:0, label:“Global Mercy Found.”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. 501(c)(3) non-profit — registered humanitarian aid charity. $2.2M in annual donations. Director: Dr. Adnan Salehi. IRS Form 990 shows 78% of funds should go to ‘field operations’ — but a significant portion is going to the director personally and to entities with limited verifiable aid operations.” },
{ id:1, label:“Dr. Salehi (personal)”, type:“person”, x:55, y:190, info:“⚠️ Foundation director. $180K wired to his PERSONAL accounts ($85K Turkey, $95K US). Board minutes don’t authorise personal payments of this magnitude. His US personal account shows luxury spending: designer goods, first-class travel, $25K Mercedes payment. Classic charity self-dealing.” },
{ id:2, label:“Crescent Relief Int’l”, type:“company”, x:345, y:190, info:“⚠️ Jordan-registered NGO. $220K received. Claimed purpose: ‘field operations in Syria refugee camps.’ However, OFAC and UN Panel of Experts reports have flagged Crescent Relief’s Jordanian director as having links to designated entities operating in the Syria/Iraq border region. Not itself designated, but high-risk.” },
{ id:3, label:“Al-Amanah Exchange”, type:“company”, x:200, y:310, info:“⚠️ Somali money service business (hawala). $115K wired. Claimed purpose: ‘humanitarian aid — Mogadishu operations.’ Al-Amanah is not OFAC-designated but operates in a jurisdiction with minimal AML controls. Hawala to Somalia has been identified by FATF as a TF risk corridor.” },
{ id:4, label:“Luxury Spending”, type:“company”, x:55, y:310, info:“Dr. Salehi’s personal accounts show: $25K Mercedes-Benz payment, $18K in designer goods purchases, $12K in first-class airline tickets — all within the same period as the charity fund transfers. This spending is inconsistent with his $95K nonprofit director salary.” },
{ id:5, label:“Syria/Iraq Border”, type:“jurisdiction”, x:345, y:310, info:“Crescent Relief’s ‘field operations’ are in the Syria/Iraq border region — an area with active designated terrorist organizations. OFAC, EU, and UN have sanctioned multiple entities operating in this corridor under the guise of humanitarian aid.” },
],
edges: [
[0,1,”$180K”],[0,2,”$220K”],[0,3,”$115K”],
[1,4,“Self-dealing”],[2,5,“Syria ops”],[3,5,“Somalia→Syria?”]
],
hotEdges: [[0,1],[0,2],[0,3],[2,5]]
},
flags: [
“Charity self-dealing: Foundation director Dr. Adnan Salehi received $180K in personal payments from the charity account ($85K to his Turkish account, $95K to his US account). Board minutes do not authorise personal transfers. His personal spending (Mercedes, designer goods, first-class travel) is inconsistent with his $95K nonprofit salary.”,
“Potential terrorism financing nexus: $220K to Crescent Relief International (Jordan) — whose director has been flagged by OFAC and UN Panel of Experts for links to designated entities in the Syria/Iraq border region. Crescent Relief is not itself designated, but the link elevates risk significantly.”,
“$115K to Al-Amanah Exchange (Somalia hawala) — claimed purpose is ‘humanitarian aid in Mogadishu.’ FATF has identified hawala transfers to Somalia as a terrorism financing risk corridor. The ability to trace where these funds ultimately go is extremely limited.”,
“This case requires escalation because: (1) potential TF nexus requires immediate involvement of your bank’s sanctions team, (2) the charity fraud element may require coordination with the IRS (Tax-Exempt Division) and state Attorney General (charity oversight), (3) the OFAC-flagged link to Crescent Relief’s director needs sanctions team determination before further processing, and (4) a SAR will follow but the sanctions and TF dimensions elevate this above routine analyst filing.”,
“IRS Form 990 states 78% of donations fund ‘field operations’ but bank records show $180K going to the director personally and $335K to entities with questioned legitimacy. Only $2.2M - $540K - overhead = approximately $1.5M appears to reach genuine aid operations — a significant diversion.”,
“The combination of charity self-dealing (fraud) and payments to TF-risk entities (Crescent Relief, Al-Amanah) makes this a dual-track case: domestic fraud AND potential international terrorism financing. Both tracks require different institutional responses.”,
],
feedback: {
escalate: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Escalation is the correct primary action for this complex case. It involves <strong>dual risks: charity fraud AND potential terrorism financing</strong>, requiring coordinated institutional response. Under <strong>FATF Recommendation 8</strong> (Non-Profit Organizations) and <strong>FinCEN’s NPO Advisory</strong>, charities with payments to TF-risk regions require enhanced scrutiny and senior compliance involvement.<br><br>Required actions: (1) <strong>sanctions team review</strong> of the Crescent Relief / OFAC-flagged director connection — determine if processing triggers sanctions exposure, (2) <strong>TF risk assessment</strong> of the Somalia hawala transfers, (3) assess whether to restrict the foundation’s account pending investigation, (4) coordinate SAR filing with input from sanctions and TF specialists, (5) consider referral to IRS Criminal Investigation and state Attorney General for the charity fraud dimension. The SAR will need to address both the self-dealing and the TF nexus — this requires more senior narrative construction than a routine filing.”,
coach:“🎓 <strong>AI Coach:</strong> NPO/charity cases are among the most complex in AML because they sit at the intersection of domestic fraud and international terrorism financing. The self-dealing by Dr. Salehi is clear-cut charity fraud — but the payments to Crescent Relief (OFAC-flagged connections) and Al-Amanah (Somalia hawala) introduce a TF dimension that requires sanctions team expertise. These are different risk categories with different regulatory responses: fraud triggers SAR + IRS referral, while TF triggers potential OFAC obligations and possible law enforcement coordination. Escalation ensures both tracks are handled appropriately.”,
},
sar: {
grade:“partial”, title:“Needed — But Escalate for TF Component”, points:80,
explain:“A SAR is definitely required — both for the self-dealing fraud and the potential TF indicators. But the <strong>TF nexus elevates this above routine filing</strong>. The connection to an OFAC-flagged individual (Crescent Relief’s director) requires sanctions team review before further processing. File a SAR AND escalate — but the escalation must happen first to ensure the sanctions dimension is handled correctly.”,
coach:“🎓 <strong>AI Coach:</strong> When a case involves both fraud and potential terrorism financing, the TF component drives the escalation. SAR filing for the fraud is straightforward, but the TF dimension may require OFAC review, law enforcement coordination, and a more sophisticated SAR narrative. Get the specialists involved.”,
},
clear: {
grade:“bad”, title:“Critical Multi-Dimensional Failure”, points:-40,
explain:“Clearing a case involving <strong>charity self-dealing ($180K in personal diversions)</strong> and payments to entities with <strong>OFAC-flagged terrorism financing connections ($335K)</strong> would be a severe compliance failure on multiple fronts. Both the fraud and TF indicators are clear and require immediate action.”,
coach:“🎓 <strong>AI Coach:</strong> When a charity director is diverting funds to himself AND sending money to TF-risk entities — there are no mitigating factors. The combination of fraud and TF makes this one of the most serious cases an analyst can encounter.”,
},
info: {
grade:“partial”, title:“Good Instinct, But Restrict First”, points:60,
explain:“Requesting Dr. Salehi’s board authorisation for the personal payments, Crescent Relief’s audited program reports, and Al-Amanah’s beneficiary identification would all be valuable. But the account should be <strong>restricted pending these responses</strong>, and the sanctions team must review the Crescent Relief connection immediately. Don’t continue processing wires to OFAC-flagged-adjacent entities while you wait for documentation that may never come honestly.”,
coach:“🎓 <strong>AI Coach:</strong> Information requests are appropriate as part of the investigation, but they can’t be your only action when TF indicators are present. Restrict, escalate, request, and report — in that order.”,
}
}
},

// ── CASE 11: Crypto Off-Ramp — Ransomware Proceeds ──
{
id: “AML-2026-0703”,
name: “ByteVault Digital Services LLC”,
teaser: “Business account — $2.8M in crypto-to-fiat conversions traced to ransomware wallet clusters, operating as an unlicensed money service business”,
amount: “$2,800,000”,
riskLevel: “critical”,
riskLabel: “Critical”,
correct: “sar”,
profile: {
occupation: “IT Consulting / Digital Services”,
country: “United States”,
pep: “No”,
riskScore: 90,
accountAge: “10 months”,
income: “$250,000 (declared annual revenue)”,
},
transactions: [
{ amount:”$380,000”, date:“2026-02-22”, to:“Incoming — Crypto exchange settlement (Binance US)”, country:“US”, flag:true },
{ amount:”$245,000”, date:“2026-02-19”, to:“Wire out → Zhoran IT Solutions”, country:“Romania”, flag:true },
{ amount:”$420,000”, date:“2026-02-16”, to:“Incoming — Crypto exchange settlement (Kraken)”, country:“US”, flag:true },
{ amount:”$310,000”, date:“2026-02-13”, to:“Wire out → Zhoran IT Solutions”, country:“Romania”, flag:true },
{ amount:”$350,000”, date:“2026-02-10”, to:“Incoming — Crypto exchange settlement (Binance US)”, country:“US”, flag:true },
{ amount:”$195,000”, date:“2026-02-07”, to:“Wire out → Balan Consulting SRL”, country:“Romania”, flag:true },
{ amount:”$290,000”, date:“2026-02-04”, to:“Incoming — OTC desk settlement (private)”, country:“US”, flag:true },
{ amount:”$275,000”, date:“2026-02-01”, to:“Wire out → Balan Consulting SRL”, country:“Romania”, flag:true },
{ amount:”$185,000”, date:“2026-01-28”, to:“Incoming — Crypto exchange settlement (Coinbase)”, country:“US”, flag:true },
{ amount:”$150,000”, date:“2026-01-25”, to:“Cash withdrawal — $150K (structured: 3 × $50K over 3 days)”, country:“US”, flag:true },
],
network: {
nodes: [
{ id:0, label:“ByteVault Digital”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. ‘IT consulting’ LLC but no verifiable IT clients or contracts. Functions as a crypto-to-fiat off-ramp: receives crypto exchange settlements and immediately wires to Romania or withdraws cash. Declared revenue $250K but processed $2.8M in 30 days.” },
{ id:1, label:“Crypto Exchanges”, type:“bank”, x:55, y:190, info:“⚠️ $1.625M in incoming settlements from Binance US, Kraken, Coinbase, and a private OTC desk. Blockchain forensic services (Chainalysis/TRM) show the originating crypto wallets have exposure to ransomware-linked wallet clusters (LockBit, BlackCat/ALPHV affiliates).” },
{ id:2, label:“Zhoran IT Solutions”, type:“company”, x:345, y:190, info:“⚠️ Romanian company. $555K wired. Registered in Bucharest 8 months ago. No website, no employees listed. Sole director: Romanian national. Romania is a known hub for ransomware operations (per Europol IOCTA 2025). Likely the fiat cash-out point for ransomware operators.” },
{ id:3, label:“Balan Consulting”, type:“company”, x:345, y:310, info:“⚠️ Romanian company. $470K wired. Registered in Timișoara 6 months ago. Same corporate formation agent as Zhoran. Shell entity — no verifiable consulting activity. Second cash-out channel.” },
{ id:4, label:“Cash Withdrawals”, type:“person”, x:55, y:310, info:”$150K in structured cash withdrawals (3 × $50K over 3 days). Cash is the hardest proceeds to trace. Combined with the Romania wires, ByteVault is running dual off-ramp channels: wire and cash.” },
{ id:5, label:“Ransomware Wallets”, type:“jurisdiction”, x:200, y:380, info:“Blockchain forensic analysis identifies wallet exposure to LockBit and BlackCat/ALPHV ransomware affiliate clusters. These ransomware-as-a-service operations have extorted billions from hospitals, schools, and critical infrastructure. ByteVault’s crypto-to-fiat conversion is the last mile of the laundering chain.” },
],
edges: [
[1,0,”$1.625M”],[0,2,”$555K”],[0,3,”$470K”],[0,4,”$150K”],
[1,5,“Ransomware”],[2,3,“Same agent”]
],
hotEdges: [[1,0],[0,2],[0,3],[1,5]]
},
flags: [
“Unlicensed Money Service Business: ByteVault functions as a crypto-to-fiat off-ramp — receiving cryptocurrency exchange settlements and immediately converting to wire transfers and cash. This requires FinCEN MSB registration, which ByteVault does not have. Operating an unlicensed MSB is a federal crime under 18 U.S.C. § 1960.”,
“Ransomware nexus: Blockchain forensic services indicate the originating crypto wallets have direct exposure to wallet clusters associated with LockBit and BlackCat/ALPHV ransomware affiliates. These are among the most destructive ransomware operations globally, targeting hospitals, schools, and critical infrastructure.”,
“Crypto-to-fiat-to-wire pipeline: $1.625M arrives as crypto exchange settlements, $1.025M is wired to two Romanian shell companies, and $150K is withdrawn as cash. The account functions purely as a conversion mechanism — declared as ‘IT consulting’ but performing no verifiable IT services.”,
“Romanian recipients (Zhoran IT, Balan Consulting) — both recently incorporated, same corporate formation agent, no verifiable operations. Romania is identified by Europol’s 2025 Internet Organised Crime Threat Assessment (IOCTA) as a major hub for ransomware affiliate operations.”,
“Structured cash withdrawals: $150K withdrawn as 3 × $50K over 3 days. While individual amounts are above CTR threshold (triggering CTR filing), the pattern of splitting a $150K withdrawal into three transactions over three days suggests deliberate evasion of enhanced scrutiny triggers.”,
“Declared revenue $250K but $2.8M processed in 30 days — 11× annual revenue in a single month. The ‘IT consulting’ cover is purely nominal. ByteVault has no IT clients, no contracts, and no service delivery records.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is the correct action. ByteVault is operating as an <strong>unlicensed money service business</strong> (federal crime under <strong>18 U.S.C. § 1960</strong>) and functioning as the <strong>fiat off-ramp for ransomware proceeds</strong>. Blockchain forensics link the incoming crypto to LockBit and BlackCat/ALPHV ransomware clusters — among the most destructive cyber threats globally. <strong>FinCEN Advisory FIN-2021-A004</strong> (Ransomware) specifically identifies crypto-to-fiat off-ramps as critical chokepoints for disrupting ransomware revenue. Your SAR should: (1) check the <strong>cyber/ransomware</strong> indicator box, (2) include the blockchain forensic evidence (wallet addresses and cluster attributions), (3) reference the Romanian shell company recipients, and (4) flag the unlicensed MSB operation. This SAR will likely be prioritized by FinCEN’s cyber team and shared with FBI’s Internet Crime Complaint Center (IC3).”,
coach:“🎓 <strong>AI Coach:</strong> Ransomware-linked SARs are among the highest-priority filings in the current threat landscape. FinCEN has designated ransomware as a national security threat, and crypto-to-fiat off-ramps are the key vulnerability for ransomware operators — they need to convert crypto to usable money, and that conversion has to touch the traditional banking system at some point. ByteVault is that point. Your SAR doesn’t just report suspicious activity — it potentially disrupts a ransomware operation that’s targeting hospitals and schools.”,
},
clear: {
grade:“bad”, title:“Facilitating Ransomware Proceeds”, points:-40,
explain:“Clearing this means your bank continues to serve as the <strong>fiat off-ramp for ransomware proceeds</strong>. ByteVault is laundering money from LockBit and BlackCat operations that attack hospitals, schools, and critical infrastructure. The blockchain forensics are clear. Continued processing could expose your institution to criminal liability under <strong>18 U.S.C. § 1956</strong> (money laundering) in addition to BSA violations.”,
coach:“🎓 <strong>AI Coach:</strong> When blockchain forensics trace incoming crypto to ransomware wallet clusters — and the fiat immediately wires to Romanian shell companies — there is zero ambiguity. Your bank is the last stop before ransomware profits disappear into the Eastern European underground economy.”,
},
escalate: {
grade:“partial”, title:“Good — But File the SAR Immediately”, points:70,
explain:“Escalation is warranted for the cyber/ransomware dimension — your bank’s information security team and potentially the CISO should be informed, and law enforcement coordination (FBI IC3, Secret Service) may be appropriate. But <strong>the SAR must be filed immediately</strong>. Ransomware operators move fast; delayed reporting means more funds flow through the off-ramp. Restrict the account and file simultaneously.”,
coach:“🎓 <strong>AI Coach:</strong> Ransomware cases benefit from rapid law enforcement engagement. File the SAR, restrict the account, and coordinate with your bank’s cyber team. The blockchain evidence makes this case compelling for criminal prosecution.”,
},
info: {
grade:“partial”, title:“Blockchain Evidence Speaks”, points:30,
explain:“The blockchain forensic evidence already links incoming crypto to ransomware wallet clusters. Requesting ‘IT consulting contracts’ from ByteVault would yield nothing because the company has no real IT operations. The crypto-to-wire pipeline is the evidence. <strong>File the SAR, restrict the account, and let law enforcement subpoena the crypto exchanges for detailed transaction records.</strong>”,
coach:“🎓 <strong>AI Coach:</strong> In crypto-linked cases, blockchain forensics provide evidence that traditional banking records can’t. The wallet-to-cluster attributions are your smoking gun. Don’t ask the shell company for documents — ask the blockchain for data.”,
}
}
},

// ── CASE 12: Loan-Back / Round-Trip Money Laundering ──
{
id: “AML-2026-0718”,
name: “Konstantin Dragomir”,
teaser: “Individual account — $1.1M in round-trip scheme, customer deposits illicit cash then takes a ‘loan’ secured by the deposit, converting dirty money to clean loan proceeds”,
amount: “$1,100,000”,
riskLevel: “high”,
riskLabel: “High”,
correct: “sar”,
profile: {
occupation: “Import/Export Consultant”,
country: “Romania (US permanent resident)”,
pep: “No”,
riskScore: 81,
accountAge: “3 years”,
income: “$72,000 (declared consulting income)”,
},
transactions: [
{ amount:”$250,000”, date:“2026-02-20”, to:“Loan disbursement — Secured personal loan #4782”, country:“US”, flag:true },
{ amount:”$275,000”, date:“2026-02-15”, to:“CD placement — 12-month certificate #9341”, country:“US”, flag:true },
{ amount:”$200,000”, date:“2026-02-10”, to:“Loan disbursement — Secured personal loan #4756”, country:“US”, flag:true },
{ amount:”$225,000”, date:“2026-02-05”, to:“CD placement — 12-month certificate #9338”, country:“US”, flag:true },
{ amount:”$180,000”, date:“2026-01-30”, to:“Wire out → Dragomir Invest SRL (personal company)”, country:“Romania”, flag:true },
{ amount:”$150,000”, date:“2026-01-25”, to:“Loan disbursement — Secured personal loan #4729”, country:“US”, flag:true },
{ amount:”$175,000”, date:“2026-01-20”, to:“CD placement — 6-month certificate #9335”, country:“US”, flag:true },
{ amount:”$210,000”, date:“2026-01-15”, to:“Wire in — Balkanova Trading d.o.o.”, country:“Serbia”, flag:true },
{ amount:”$185,000”, date:“2026-01-10”, to:“Wire in — Carpathian Resources OOD”, country:“Bulgaria”, flag:true },
{ amount:”$280,000”, date:“2026-01-05”, to:“Wire in — Moldex Industrial SA”, country:“Moldova”, flag:true },
],
network: {
nodes: [
{ id:0, label:“K. Dragomir”, type:“customer”, x:200, y:50, info:“YOUR DIRECT CUSTOMER. Romanian-born US permanent resident. ‘Import/export consultant’ with $72K declared income but $1.1M in activity. Operating a loan-back scheme: places incoming wires into CDs, then takes secured loans against the CDs — the loan proceeds are ‘clean’ money with a legitimate banking paper trail.” },
{ id:1, label:“Eastern Europe Wires”, type:“company”, x:55, y:190, info:“⚠️ $675K in incoming wires from three Eastern European entities: Balkanova Trading (Serbia, $210K), Carpathian Resources (Bulgaria, $185K), Moldex Industrial (Moldova, $280K). All recently incorporated, no verifiable operations. Source of these funds is unknown and unexplained.” },
{ id:2, label:“CD Placements”, type:“bank”, x:345, y:190, info:“⚠️ Three CDs totaling $675K placed at your bank. These serve as collateral for the secured loans. The CDs themselves hold the potentially illicit funds — but the LOAN PROCEEDS disbursed against them appear clean on paper.” },
{ id:3, label:“Secured Loans”, type:“bank”, x:345, y:310, info:“⚠️ Three secured personal loans totaling $600K disbursed against the CD collateral. These loan proceeds have a legitimate-looking paper trail: they’re bank loan disbursements, not wire transfers from Eastern Europe. This is the laundering mechanism — converting dirty deposits into clean loan proceeds.” },
{ id:4, label:“Dragomir Invest SRL”, type:“company”, x:55, y:310, info:“Romanian company owned by Dragomir. $180K wired from the ‘clean’ loan proceeds. The funds have now completed the round-trip: Eastern Europe → CD → Loan → Romania. The money left Eastern Europe dirty and returned clean.” },
{ id:5, label:“Round-Trip 🔄”, type:“jurisdiction”, x:200, y:390, info:“The loan-back cycle: (1) Illicit funds arrive from E. European shells, (2) Deposited into CDs at your bank, (3) CDs used as collateral for secured loans, (4) Loan proceeds wired to Dragomir’s Romanian company. Net effect: money leaves E. Europe as suspicious wire transfers and returns as legitimate bank loan disbursements.” },
],
edges: [
[1,0,”$675K”],[0,2,”$675K CDs”],[2,3,“Collateral”],
[3,0,”$600K loans”],[0,4,”$180K”],
[4,5,“Clean return”],[1,5,“Dirty origin”]
],
hotEdges: [[1,0],[2,3],[0,4]]
},
flags: [
“Loan-back (round-trip) money laundering scheme: Dragomir receives $675K from three Eastern European shell companies, places the funds into CDs at your bank, then takes $600K in secured loans against the CDs. The loan proceeds — which have a legitimate banking paper trail — are then wired to his Romanian company. The money has been laundered: dirty wires in, clean loan disbursements out.”,
“Three incoming wire sources — Balkanova Trading (Serbia), Carpathian Resources (Bulgaria), Moldex Industrial (Moldova) — are all recently incorporated companies with no verifiable operations in countries identified by MONEYVAL as having AML deficiencies. Combined $675K with no legitimate business explanation.”,
“Income mismatch: $72K declared consulting income vs. $1.1M in transaction activity. The CD placements alone ($675K) are nearly 10× his declared annual income. No source-of-funds documentation has been provided.”,
“The loan-back mechanism is specifically designed to create a legitimate paper trail: bank loan disbursement records are harder for law enforcement to challenge than international wire transfers. Dragomir can show ‘bank loans’ as his source of funds for the Romanian company — obscuring the Eastern European origin.”,
“Dragomir Invest SRL (Romania) received $180K from the ‘clean’ loan proceeds. This completes the round-trip: funds originate in Serbia/Bulgaria/Moldova, transit through your bank via the CD/loan mechanism, and land in Romania as ‘investment capital’ with a US bank loan paper trail.”,
“Your bank’s lending team approved the secured loans purely based on the CD collateral — as is standard for CD-secured loans. But the compliance question is: where did the funds that purchased the CDs come from? If the CDs are funded by illicit proceeds, the secured loans are facilitating money laundering regardless of the collateral quality.”,
],
feedback: {
sar: {
grade:“excellent”, title:“Excellent Decision!”, points:150,
explain:“Filing a SAR is the correct action. This is a <strong>loan-back (round-trip) money laundering scheme</strong> — one of the most sophisticated integration techniques. Dragomir deposits potentially illicit funds from Eastern European shell companies into CDs, then takes secured loans against those CDs. The loan proceeds have a clean paper trail: ‘bank loan disbursement’ is far harder for investigators to challenge than ‘international wire transfer from Serbian shell company.’ <strong>FATF Typologies Report (2006)</strong> and <strong>Egmont Group case studies</strong> specifically identify the loan-back scheme as a high-sophistication laundering method. The SAR should explain the round-trip mechanism clearly, because this typology is less well-known than structuring or layering — the FinCEN analyst needs to understand that the CDs and loans are the laundering vehicle, not legitimate banking activity.”,
coach:“🎓 <strong>AI Coach:</strong> The loan-back scheme is elegant because it exploits a legitimate banking product. CD-secured loans are routine — lending teams approve them automatically because the collateral is perfect (it’s cash). The AML question isn’t ‘is the loan well-secured?’ — it’s ‘where did the collateral come from?’ When the answer is ‘three Eastern European shell companies with no verifiable operations,’ the CD becomes a laundering vehicle and the loan becomes the integration mechanism. This case tests whether you can see past the legitimate banking product to the illicit purpose.”,
},
clear: {
grade:“bad”, title:“Facilitating Round-Trip Laundering”, points:-40,
explain:“Clearing this would mean your bank continues to facilitate a <strong>loan-back money laundering scheme</strong>. The CDs are funded by Eastern European shell companies, and the secured loans create a clean paper trail for those illicit funds. Your bank’s lending products are being weaponised for money laundering — the loans appear legitimate, but the underlying funds are not.”,
coach:“🎓 <strong>AI Coach:</strong> A CD-secured loan is only as clean as the funds that bought the CD. When the CD is funded by wires from Serbian, Bulgarian, and Moldovan shell companies — the loan is laundering the proceeds. Your lending team sees perfect collateral; your AML team should see a perfect crime.”,
},
escalate: {
grade:“partial”, title:“Good — Coordinate with Lending”, points:70,
explain:“Escalation is appropriate because your lending team needs to be informed that the secured loans they approved are potentially facilitating money laundering. The CDs may need to be frozen, and the loans may need to be called or restricted. But <strong>the SAR must be filed concurrently</strong>. The round-trip is already largely complete — $180K has already been wired to Romania.”,
coach:“🎓 <strong>AI Coach:</strong> Loan-back cases require cross-functional coordination between AML and lending. The lending team sees a well-collateralized loan; you see a laundering mechanism. Both perspectives need to be reconciled quickly. File the SAR and brief lending simultaneously.”,
},
info: {
grade:“partial”, title:“Source-of-Funds Is the Key Question”, points:50,
explain:“Requesting source-of-funds documentation for the Eastern European wires is the right investigative question — but <strong>the answer is already apparent</strong>. Three recently-formed shell companies in Serbia, Bulgaria, and Moldova sending $675K to a ‘consultant’ earning $72K is not explainable by legitimate consulting activity. File the SAR on the loan-back pattern and continue investigating the source in parallel.”,
coach:“🎓 <strong>AI Coach:</strong> In loan-back cases, the source-of-funds question for the CD is the entire case. If the customer can’t explain where $675K came from (and three shell companies is not an explanation), the loan is dirty by extension. File on what you know.”,
}
}
},

];
