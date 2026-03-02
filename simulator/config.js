// ═══════════════════════════════════════════════════════════════
// ECONOMIC CRIME HUB — OPERATIONS SIMULATOR
// config.js — Static data: tips, levels, flag categories, operator names
// ═══════════════════════════════════════════════════════════════

var TIPS=[
  "Structuring is a federal crime under 31 U.S.C. § 5324 — even if the funds are legitimate.",
  "FATF Recommendation 12 requires Enhanced Due Diligence for all PEPs.",
  "The CDD Rule (31 CFR 1010.230) requires identifying beneficial owners holding 25%+ of a legal entity.",
  "FinCEN receives over 4 million SARs annually.",
  "BVI, Cayman, and Panama are opacity jurisdictions — ownership information is not publicly available.",
  "A SAR is not an accusation — it's an intelligence report. File when you have reasonable suspicion.",
  "Nominee directors and shareholders are used to obscure the true beneficial owner of an entity.",
  "Golden visa schemes have been exploited for money laundering — several EU programmes have been suspended.",
  "Shell companies with no employees, no website, and virtual offices are classic laundering vehicles.",
  "Source of wealth and source of funds are different concepts — both must be verified for high-risk customers.",
  "FATF Recommendation 8 addresses NPO vulnerabilities to terrorist financing — apply risk-based measures, not blanket rejection.",
  "De-risking (blanket rejection of entire sectors) is discouraged by FATF and national regulators. Apply proportionate EDD instead.",
  "Estonia revoked 80%+ of VASP licences in 2023 — always verify crypto licence status independently.",
  "Sanctions proximity (close associates of sanctioned persons) can be as serious as a direct sanctions match.",
  "A low-risk customer approved quickly is as important as a high-risk customer flagged correctly — both demonstrate good judgement.",
];

var LEVELS=[
  {title:"Trainee Analyst",xp:0},
  {title:"Junior Analyst",xp:200},
  {title:"Analyst",xp:500},
  {title:"Senior Analyst",xp:900},
  {title:"Lead Investigator",xp:1500},
  {title:"AML Manager",xp:2500},
  {title:"Compliance Officer",xp:4000},
  {title:"Head of Financial Crime",xp:6000},
  {title:"Chief Compliance Officer",xp:9000}
];

var FLAG_CATS=[
  {icon:'🌍',label:'Jurisdiction',keys:['jurisdiction','fatf','grey-list','grey list','high-risk','offshore','panama','uae','cyprus','lebanon','bvi','seychelles']},
  {icon:'💰',label:'Source of Funds',keys:['source of','income','salary','wealth','mismatch','declared','earnings','revenue','turnover']},
  {icon:'📄',label:'Documentation',keys:['document','missing','outdated','not provided','no invoice','unverifiable','no shipping','not declared']},
  {icon:'🏢',label:'Shell / Structure',keys:['shell','nominee','bearer','no employees','no web','single-member','circular','loan-back','funnel']},
  {icon:'⚠️',label:'Sanctions',keys:['sanction','ofac','sdn','designated','irgc','proximity']},
  {icon:'👤',label:'PEP',keys:['pep','politically exposed','minister','government','corruption','procurement']},
  {icon:'📊',label:'Volume / Pattern',keys:['structuring','smurfing','threshold','volume','increase','rapid','same-day','multiple','p2p','mule']},
  {icon:'📰',label:'Adverse Media',keys:['adverse','media','investigation','leaked','press','report','nca']}
];

var OP_FIRST=['A.','J.','M.','S.','R.','K.','D.','L.','E.','N.','T.','C.','P.','H.','B.'];
var OP_LAST=['Reeves','Okafor','Chen','Patel','Novak','Andersen','Moreau','Duarte','Kim','Petrova','Yılmaz','Rossi','Mbeki','Tanaka','Abbas'];

var ROLE_LABELS={
  amld:'AML Analyst — Customer Transactions',
  amlc:'AML Analyst — Correspondent Banking',
  kycp:'KYC Analyst — Personal Accounts',
  kyce:'KYC Analyst — Entity Accounts',
  eddi:'EDD Analyst — Individual Reviews',
  edde:'EDD Analyst — Entity Reviews'
};

var ROLE_COLORS={
  amld:'#ff4d6a',
  amlc:'#fb923c',
  kycp:'#38bdf8',
  kyce:'#06b6d4',
  eddi:'#a78bfa',
  edde:'#ffb833'
};

var CONFETTI_COLORS=['#00e68a','#38bdf8','#ffb833','#a78bfa','#ff4d6a','#fff'];
