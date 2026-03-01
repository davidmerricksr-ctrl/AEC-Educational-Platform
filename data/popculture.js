/* ══════════════════════════════════════════════════════════════
   ECONOMIC CRIME MEDIA LOUNGE — Data Layer
   ══════════════════════════════════════════════════════════════ */
var mediaItems = [
  /* ─── FILMS ─── */
  {id:1, title:"The Big Short", type:"film", year:2015, creator:"Dir. Adam McKay",
   desc:"The true story of the traders who predicted and profited from the 2008 financial crisis, exposing systemic fraud in mortgage-backed securities. A visceral, fourth-wall-breaking masterpiece that makes CDOs and credit default swaps terrifyingly entertaining.",
   themes:["Wall Street","Corporate Fraud","Banking"],
   shelves:["hero","films","mustwatch"],
   featured:true, featuredTagline:"The film that taught a generation how the banks really work.",
   url:"https://www.imdb.com/title/tt1596363/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#1a1a2e,#16213e,#0f3460)"},

  {id:2, title:"The Wolf of Wall Street", type:"film", year:2013, creator:"Dir. Martin Scorsese",
   desc:"Jordan Belfort's rise and fall through securities fraud, money laundering, and corruption on Wall Street. A masterclass in how pump-and-dump schemes work — excess, greed, and zero remorse.",
   themes:["Wall Street","Money Laundering","Fraud"],
   shelves:["hero","films","mustwatch"],
   featured:true, featuredTagline:"Greed is good. Until the FBI shows up.",
   url:"https://www.imdb.com/title/tt0993846/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#0d0d0d,#1a0a0a,#2d1010)"},

  {id:3, title:"The Laundromat", type:"film", year:2019, creator:"Dir. Steven Soderbergh",
   desc:"Based on the Panama Papers scandal, exploring how shell companies and offshore structures enable the global elite to hide wealth and evade taxes. Meryl Streep leads this dark comedy about the machinery of financial secrecy.",
   themes:["Money Laundering","Offshore","Corporate Fraud"],
   shelves:["films"],
   url:"https://www.imdb.com/title/tt5865326/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#0a192f,#112240,#1d3557)"},

  /* ─── TV SERIES ─── */
  {id:4, title:"Ozark", type:"tv", year:2017, creator:"Netflix · 2017–2022",
   desc:"A financial planner launders money for a Mexican drug cartel in Missouri's Lake of the Ozarks. One of the most detailed fictional portrayals of placement, layering, and integration in TV history. Four seasons of escalating moral bankruptcy.",
   themes:["Money Laundering","Organised Crime"],
   shelves:["hero","films","mustwatch"],
   featured:true, featuredTagline:"Every dollar has a story. Most of them are lies.",
   url:"https://www.imdb.com/title/tt5071412/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#0b1622,#162447,#1f4068)"},

  {id:5, title:"McMafia", type:"tv", year:2018, creator:"BBC/AMC · 2018",
   desc:"A Russian-British banker is drawn into the world of organised crime. Highlights trade-based money laundering, hawala networks, and the role of professional enablers who make global dirty money flows possible.",
   themes:["Money Laundering","Organised Crime","Sanctions"],
   shelves:["films"],
   url:"https://www.imdb.com/title/tt6271080/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#1a0000,#2d0a0a,#0d1117)"},

  {id:6, title:"Bad Blood: The Final Chapter", type:"tv", year:2022, creator:"TV Series · 2022",
   desc:"Based on the true story of the Rizzuto crime family in Montreal, showing how organised crime infiltrates legitimate business through money laundering and intimidation.",
   themes:["Organised Crime","Money Laundering"],
   shelves:["films"],
   url:"https://www.imdb.com/title/tt6423776/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#0d0d0d,#1a1a1a,#2d1515)"},

  /* ─── DOCUMENTARY ─── */
  {id:7, title:"Dirty Money", type:"documentary", year:2018, creator:"Netflix · 2018–2020",
   desc:"Documentary series exploring corporate fraud, corruption, and financial crime. Each episode covers a different scandal — from VW emissions fraud to payday lending empires to maple syrup cartels. Essential viewing for compliance professionals.",
   themes:["Corporate Fraud","Regulation","Banking"],
   shelves:["films","mustwatch"],
   url:"https://www.imdb.com/title/tt7889220/", srcLabel:"IMDb",
   gradient:"linear-gradient(135deg,#0a0a0a,#1a1a0a,#2d2d0a)"},

  /* ─── BOOKS ─── */
  {id:8, title:"Moneyland", type:"book", year:2018, creator:"Oliver Bullough",
   desc:"How the world's ultra-rich and corrupt exploit offshore havens, anonymous companies, and complicit professionals to hide their stolen wealth. A tour through the borderless country where the rules don't apply — if you can afford the entry fee.",
   themes:["Money Laundering","Offshore","Kleptocracy"],
   shelves:["books","mustwatch"],
   url:"https://www.goodreads.com/book/show/36099412-moneyland", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#1a0a2e,#16213e,#0f3460)"},

  {id:9, title:"Tracers in the Dark", type:"book", year:2022, creator:"Andy Greenberg",
   desc:"The true story of how a small team of investigators developed blockchain forensics to bring down the world's biggest darknet markets and crypto launderers. The definitive account of how cryptocurrency lost its anonymity.",
   themes:["Crypto Crime","Cyber Crime","Investigation"],
   shelves:["hero","books","mustwatch"],
   featured:true, featuredTagline:"The blockchain never forgets. Neither do they.",
   url:"https://www.goodreads.com/book/show/60462182-tracers-in-the-dark", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#0d1117,#161b22,#21262d)"},

  {id:10, title:"Kleptopia", type:"book", year:2020, creator:"Tom Burgis",
   desc:"How dirty money is conquering the world. Traces the flows of corrupt cash from Central Asia through the City of London and into Western democracies. A masterwork of investigative journalism that reads like a thriller.",
   themes:["Kleptocracy","Money Laundering","Offshore"],
   shelves:["books"],
   url:"https://www.goodreads.com/book/show/49114729-kleptopia", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#0a0a1a,#1a0a2e,#2d0a3e)"},

  {id:11, title:"Billion Dollar Whale", type:"book", year:2018, creator:"Tom Wright & Bradley Hope",
   desc:"The incredible true story of 1MDB — how one young man stole billions from Malaysia's sovereign wealth fund and lived the most extravagant life imaginable. Yachts, Hollywood, and a trail of devastation.",
   themes:["Fraud","Money Laundering","Kleptocracy"],
   shelves:["books","mustwatch"],
   url:"https://www.goodreads.com/book/show/38743564-billion-dollar-whale", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#1a1a0a,#2d2d0a,#3d3d0a)"},

  {id:12, title:"Butler to the World", type:"book", year:2022, creator:"Oliver Bullough",
   desc:"How Britain became the servant of corrupt wealth — from kleptocrats parking dirty money in London property to the army of lawyers, accountants, and fixers who make it all possible.",
   themes:["Money Laundering","Offshore","Kleptocracy","Regulation"],
   shelves:["books"],
   url:"https://www.goodreads.com/book/show/58950859-butler-to-the-world", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#0d1117,#1a0a0a,#2d1515)"},

  {id:13, title:"The Spider Network", type:"book", year:2017, creator:"David Enrich",
   desc:"The true story of Tom Hayes and the LIBOR rigging scandal — how a small group of traders manipulated the world's most important interest rate, affecting trillions in financial contracts worldwide.",
   themes:["Wall Street","Banking","Corporate Fraud"],
   shelves:["books"],
   url:"https://www.goodreads.com/book/show/30755418-the-spider-network", srcLabel:"Goodreads",
   gradient:"linear-gradient(135deg,#1a1a2e,#0a0a1a,#16213e)"},

  /* ─── RECENT PODCASTS (Feb–Mar 2026) ─── */
  {id:14, title:"How Russian Sabotage Is Financed & How to Disrupt It", type:"podcast", year:2026, creator:"RUSI STR · Tom Keatinge",
   desc:"RUSI's Tom Keatinge examines how Russian sabotage campaigns in Europe are funded — from low-cost disposal agents to social media recruitment and crypto transfers — and where financial disruption is possible.",
   themes:["Sanctions","Money Laundering","Terrorism Financing"],
   shelves:["recent","podcasts"],
   url:"https://www.rusi.org/podcasts/suspicious-transaction-report/episode-11-how-russian-sabotage-financed-and-how-disrupt-it", srcLabel:"RUSI.org",
   gradient:"linear-gradient(135deg,#1a0000,#2d0a0a,#0d1117)"},

  {id:15, title:"Incentivising Whistleblowers to Expose Economic Crime", type:"podcast", year:2026, creator:"RUSI STR",
   desc:"Explores whether financial incentives for whistleblowers could accelerate the detection and reporting of money laundering, fraud, and sanctions evasion across the UK and EU.",
   themes:["Regulation","Money Laundering","Whistleblowing"],
   shelves:["recent","podcasts"],
   url:"https://www.rusi.org/podcast-series/suspicious-transaction-report-podcasts", srcLabel:"RUSI.org",
   gradient:"linear-gradient(135deg,#0d1117,#161b22,#21262d)"},

  {id:16, title:"Canada Under Pressure — Tariffs, Illicit Finance & Trump", type:"podcast", year:2026, creator:"RUSI STR",
   desc:"Examines how shifting US trade policy and tariff regimes are creating new vulnerabilities for illicit finance flows across the US-Canada border and impacting AML cooperation.",
   themes:["Money Laundering","Sanctions","Regulation"],
   shelves:["recent","podcasts"],
   url:"https://www.rusi.org/podcast-series/suspicious-transaction-report-podcasts", srcLabel:"RUSI.org",
   gradient:"linear-gradient(135deg,#0a192f,#112240,#1d3557)"},

  {id:17, title:"Sanctions Evasion, FCA Enforcement & ECL", type:"podcast", year:2026, creator:"Financial Crime Weekly · Ep 206",
   desc:"Covers 113 Russian shadow vessels moving €4.7B in oil, FCA insider dealing charges, HMRC's higher Economic Crime Levy rates for April 2026, and INTERPOL's strategy against transnational scam centres.",
   themes:["Sanctions","Regulation","Organised Crime"],
   shelves:["recent","podcasts"],
   url:"https://open.spotify.com/show/69Of8OrKYQnjzxb9MOiNKZ", srcLabel:"Spotify",
   gradient:"linear-gradient(135deg,#0d0d0d,#1a1a1a,#2d2d2d)"},

  {id:18, title:"Crypto Regulatory Shifts Reshaping 2026", type:"podcast", year:2026, creator:"Financial Crime Weekly · Special",
   desc:"Examines how MiCA in the EU, UK Financial Promotions rules, and US stablecoin legislation have ended the era of crypto regulatory ambiguity. Covers chain-hopping, DeFi mixers, and AI-driven compliance.",
   themes:["Crypto Crime","Regulation"],
   shelves:["recent","podcasts"],
   url:"https://redcircle.com/shows/financial-crime-monthly-podcast", srcLabel:"RedCircle",
   gradient:"linear-gradient(135deg,#1a0a2e,#0d1117,#16213e)"},

  {id:19, title:"AUSTRAC CEO on Australia's AML Extension", type:"podcast", year:2026, creator:"ACAMS · Kieran Beer",
   desc:"AUSTRAC CEO Brendan Thomas discusses extending AML obligations to 80,000 new entities — law firms, accountants, estate agents — under Australia's Tranche 2 legislation, effective July 2026.",
   themes:["Regulation","Money Laundering"],
   shelves:["recent","podcasts"],
   url:"https://podcasts.apple.com/us/podcast/financial-crime-matters/id1456666158", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#0d1117,#0a192f,#112240)"},

  {id:20, title:"Wolfsberg Group on Stablecoin Banking", type:"podcast", year:2026, creator:"ACAMS · Kieran Beer",
   desc:"Ned Conway of the Wolfsberg Group discusses new guidance for banks dealing with stablecoin producers, adapting correspondent banking due diligence frameworks for the digital asset era.",
   themes:["Crypto Crime","Banking","Regulation"],
   shelves:["recent","podcasts"],
   url:"https://open.spotify.com/show/5OMCuodxLcTKERGXTJaUO9", srcLabel:"Spotify",
   gradient:"linear-gradient(135deg,#0d0d0d,#161b22,#21262d)"},

  {id:21, title:"Nacha & Proactive Fraud Detection", type:"podcast", year:2026, creator:"DataVisor · What the F Happened?",
   desc:"How Nacha's latest guidance is shifting fraud programmes from reactive investigation to real-time detection, covering AI-enabled attacks and coordinated fraud across the payments ecosystem.",
   themes:["Fraud","Cyber Crime","Regulation"],
   shelves:["recent","podcasts"],
   url:"https://www.datavisor.com/defend-podcast", srcLabel:"DataVisor",
   gradient:"linear-gradient(135deg,#1a1a2e,#0d0d0d,#16213e)"},

  {id:22, title:"What You Need to Know About Money Laundering in 2026", type:"podcast", year:2026, creator:"ICAEW Insights",
   desc:"ICAEW's Head of AML Michelle Giddings explores how sanctions evasion, AI-generated laundering instructions, complex corporate structures, and Companies House reforms are reshaping ML risk.",
   themes:["Money Laundering","Regulation"],
   shelves:["recent","podcasts"],
   url:"https://www.icaew.com/insights/viewpoints-on-the-news/2026/feb-2026/what-you-need-to-know-about-money-laundering-in-2026", srcLabel:"ICAEW",
   gradient:"linear-gradient(135deg,#0a0a1a,#0d1117,#1a1a2e)"},

  {id:23, title:"Cybersecurity Outlook 2026 — Interpol & OT Threats", type:"podcast", year:2026, creator:"Radio Davos · WEF",
   desc:"INTERPOL's cybercrime director Neal Jetton discusses global cyber threats from ransomware to sextortion, alongside WEF's Global Cybersecurity Outlook 2026 findings on operational technology risks.",
   themes:["Cyber Crime","Organised Crime"],
   shelves:["recent","podcasts"],
   url:"https://www.weforum.org/podcasts/radio-davos/episodes/global-cybersecurity-outlook-2026-interpol-dragos/", srcLabel:"WEF",
   gradient:"linear-gradient(135deg,#0d1117,#161b22,#0a192f)"},

  {id:24, title:"Inside the World of Phishing", type:"podcast", year:2026, creator:"Scam Detectors · BBC's Jane Wakefield",
   desc:"Deep dive into phishing attacks — billions of deceptive emails sent daily. BBC tech journalist Jane Wakefield and fraud experts reveal how to spot clues and protect yourself from criminals.",
   themes:["Cyber Crime","Fraud"],
   shelves:["recent","podcasts"],
   url:"https://open.spotify.com/show/1d7RkfbP3NEfn0kdik4NCu", srcLabel:"Spotify",
   gradient:"linear-gradient(135deg,#0d0d0d,#1a0a0a,#2d1010)"},

  {id:25, title:"Tigran Gambaryan & Tracers in the Dark", type:"podcast", year:2026, creator:"ACAMS · Kieran Beer",
   desc:"WIRED's Andy Greenberg and Binance's Tigran Gambaryan discuss blockchain forensics, the Binance Nigeria detention saga, and the future of crypto crime investigation.",
   themes:["Crypto Crime","Investigation"],
   shelves:["recent","podcasts"],
   url:"https://podcasts.apple.com/us/podcast/financial-crime-matters/id1456666158", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#0d1117,#1a0a2e,#0a192f)"},

  /* ─── REPORTS & VIDEO ─── */
  {id:26, title:"FATF Cyber Fraud Report 2026", type:"report", year:2026, creator:"FATF",
   desc:"FATF's landmark report links cyber-enabled fraud directly to money laundering, terror financing, and proliferation financing. UK fraud now exceeds 40% of all recorded crime. A wake-up call for the global financial system.",
   themes:["Fraud","Cyber Crime","Regulation","Money Laundering"],
   shelves:["recent","reports","mustwatch"],
   url:"https://www.fatf-gafi.org/", srcLabel:"FATF",
   gradient:"linear-gradient(135deg,#0a0a1a,#1a0a0a,#2d1515)"},

  {id:27, title:"2026 Crypto Crime Report", type:"report", year:2026, creator:"TRM Labs",
   desc:"Data-driven analysis showing $35 billion in cryptocurrency sent to fraud schemes in 2025. Covers sanctions evasion, nation-state actors, pig butchering scams, ransomware, and industrialised money laundering.",
   themes:["Crypto Crime","Fraud","Money Laundering"],
   shelves:["recent","reports"],
   url:"https://www.trmlabs.com/reports-and-whitepapers/2026-crypto-crime-report", srcLabel:"TRM Labs",
   gradient:"linear-gradient(135deg,#0d1117,#161b22,#1a0a2e)"},

  {id:28, title:"2026 Global AFC Threats Report", type:"report", year:2026, creator:"ACAMS / Compliance Week",
   desc:"Scams targeting individuals ranked as the highest current financial crime risk globally. 47% of respondents cite lack of skilled resources and training as a major operational threat to effective AML.",
   themes:["Fraud","Regulation","Money Laundering"],
   shelves:["recent","reports"],
   url:"https://www.complianceweek.com/opinion/a-snapshot-of-the-state-of-financial-crime-in-the-united-states/36498.article", srcLabel:"Compliance Week",
   gradient:"linear-gradient(135deg,#1a1a2e,#0d0d0d,#16213e)"},

  {id:29, title:"Is the AML Project Achieving Anything?", type:"report", year:2026, creator:"Money Laundering Bulletin",
   desc:"Four-decade retrospective on anti-money laundering — from narcotics focus to today's expanded regime. Asks whether the growing regulatory burden is actually stopping criminal money flows.",
   themes:["Money Laundering","Regulation"],
   shelves:["recent","reports"],
   url:"https://www.moneylaunderingbulletin.com/", srcLabel:"MLB",
   gradient:"linear-gradient(135deg,#0a0a0a,#1a1a1a,#2d2d2d)"},

  /* ─── ESSENTIAL PODCAST SERIES ─── */
  {id:30, title:"Bribe, Swindle or Steal", type:"podcast-series", year:2017, creator:"Alexandra Wrage · TRACE",
   desc:"TRACE president interviews experts on bribery, fraud, money laundering, insider trading and sanctions. One of the longest-running and most respected financial crime podcasts — weekly since 2017.",
   themes:["Fraud","Money Laundering","Sanctions"],
   shelves:["podcasts","mustwatch"],
   url:"https://podcasts.apple.com/us/podcast/bribe-swindle-or-steal/id1240837890", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#1a0a0a,#2d1515,#0d1117)"},

  {id:31, title:"The Dark Money Files", type:"podcast-series", year:2019, creator:"Graham Barrow & Ray Blake",
   desc:"Two veteran financial crime experts explain how dirty money enters the financial system. Accessible 20-minute episodes covering sanctions evasion, money laundering, shell companies, and fraud. Weekly since 2019.",
   themes:["Money Laundering","Offshore","Fraud"],
   shelves:["podcasts","mustwatch"],
   url:"https://podcasts.apple.com/gb/podcast/the-dark-money-files/id1470693335", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#0d0d0d,#1a1a1a,#0d1117)"},

  {id:32, title:"Themis FinCrime Podcast", type:"podcast-series", year:2020, creator:"Themis",
   desc:"Interviews with leading investigative journalists, senior business leaders and changemakers at the forefront of tackling financial crime. Specialist risk management perspective from a leading advisory firm.",
   themes:["Regulation","Money Laundering","Corporate Fraud"],
   shelves:["podcasts"],
   url:"https://www.themisservices.co.uk/", srcLabel:"Themis",
   gradient:"linear-gradient(135deg,#0a192f,#112240,#0d1117)"},

  {id:33, title:"The Perfect Scam", type:"podcast-series", year:2019, creator:"AARP · Bob Sullivan",
   desc:"True stories of people targeted by scams, with professional con artists and experts pulling back the curtain on how fraudsters operate. Practical advice on recognising and avoiding scams.",
   themes:["Fraud","Cyber Crime"],
   shelves:["podcasts"],
   url:"https://podcasts.apple.com/us/podcast/the-perfect-scam/id1455651468", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#0d1117,#1a1a2e,#16213e)"},

  {id:34, title:"FINCast", type:"podcast-series", year:2020, creator:"Juan Zarate · K2 Integrity",
   desc:"Hub of conversation covering AML/CFT, anti-bribery and corruption, cyber crime vulnerabilities, and fintech. Hosted by former Deputy National Security Advisor Juan Zarate — the architect of modern financial warfare.",
   themes:["Sanctions","Terrorism Financing","Regulation"],
   shelves:["podcasts"],
   url:"https://podcasts.apple.com/us/podcast/fincast/id1530197302", srcLabel:"Apple Podcasts",
   gradient:"linear-gradient(135deg,#0d0d0d,#0a192f,#1a0a2e)"}
];

/* ─── Shelf Definitions ─── */
var mediaShelves = [
  {id:"mustwatch", title:"Must-Watch · Must-Read · Must-Listen", icon:"🔥"},
  {id:"recent",    title:"Fresh Intelligence — Feb/Mar 2026", icon:"⚡"},
  {id:"films",     title:"Films & Television", icon:"🎬"},
  {id:"books",     title:"Landmark Books on Economic Crime", icon:"📚"},
  {id:"podcasts",  title:"Podcast Deep Dives", icon:"🎧"},
  {id:"reports",   title:"Reports & Analysis", icon:"📊"}
];

/* ─── Theme Definitions ─── */
var mediaThemes = [
  "Money Laundering","Fraud","Crypto Crime","Wall Street","Sanctions",
  "Corporate Fraud","Organised Crime","Cyber Crime","Regulation",
  "Offshore","Kleptocracy","Investigation","Banking","Terrorism Financing","Whistleblowing"
];

/* ─── Type Labels ─── */
var mediaTypeLabels = {
  film:"Film", tv:"TV Series", documentary:"Documentary", book:"Book",
  podcast:"Podcast", "podcast-series":"Podcast Series", report:"Report / Video"
};

/* ─── Type Icons ─── */
var mediaTypeIcons = {
  film:"🎬", tv:"📺", documentary:"🎥", book:"📖",
  podcast:"🎧", "podcast-series":"🎙️", report:"📊"
};
