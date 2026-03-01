/* ══ INTELLIGENCE DIRECTORY DATA ══ */
var intelligenceOrgs = [
  {
    name:"National Economic Crime Centre",
    acronym:"NECC",
    icon:"\ud83c\uddf2",
    shortDesc:"Coordinates the UK\u2019s operational response to serious and organised economic crime, bringing together law enforcement, government departments, regulators, and the private sector.",
    longDesc:"The NECC operates within the National Crime Agency and serves as the UK\u2019s central coordinating body for tackling high-end economic crime. It brings together personnel from multiple agencies and private sector partners to deliver a unified national response. Its work spans intelligence development, threat assessment, and operational coordination across money laundering, fraud, bribery, and sanctions evasion. The centre plays a leading role in producing the UK National Risk Assessment for money laundering and terrorist financing.",
    whyMatters:"Understanding the NECC helps learners see how the UK structures its multi-agency response to economic crime and how intelligence coordination works across organisational boundaries.",
    geography:"UK National",
    type:"Law Enforcement & Intelligence",
    themes:["Money Laundering","Fraud & Organised Crime","Bribery & Corruption","Sanctions Evasion","Asset Recovery"],
    website:"https://www.nationalcrimeagency.gov.uk/what-we-do/national-economic-crime-centre",
    keyResources:[
      {title:"UK National Risk Assessment of ML & TF",url:"https://www.gov.uk/government/publications/national-risk-assessment-of-money-laundering-and-terrorist-financing-2020"},
      {title:"NCA Annual Report",url:"https://www.nationalcrimeagency.gov.uk/who-we-are/publications"},
      {title:"NCA Threat Assessments",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats"}
    ],
    attributionText:"Independent educational summary. Source: National Economic Crime Centre (NECC) / National Crime Agency, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"UK Financial Intelligence Unit",
    acronym:"UKFIU",
    icon:"\ud83d\udcca",
    shortDesc:"Receives, analyses, and disseminates suspicious activity reports (SARs) from the regulated sector to support law enforcement investigations across the UK.",
    longDesc:"The UKFIU sits within the NCA and is the UK\u2019s designated financial intelligence unit under FATF standards. It serves as the central hub for receiving SARs from banks, accountants, solicitors, and other regulated entities. The unit analyses these reports to produce intelligence products that support investigations into money laundering, terrorist financing, and predicate offences. It also manages the Defence Against Money Laundering (DAML) consent regime and cooperates with international FIU counterparts through the Egmont Group.",
    whyMatters:"The UKFIU is central to understanding how suspicious activity reports flow from the private sector into law enforcement intelligence systems \u2014 a core mechanism in the UK\u2019s AML framework.",
    geography:"UK National",
    type:"Financial Intelligence Unit (FIU)",
    themes:["Money Laundering","Fraud & Organised Crime","Sanctions Evasion"],
    website:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance/ukfiu",
    keyResources:[
      {title:"UKFIU SARs Annual Report",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance/ukfiu"},
      {title:"SAR Glossary Codes & Guidance",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance/ukfiu"}
    ],
    attributionText:"Independent educational summary. Source: UK Financial Intelligence Unit (UKFIU) / National Crime Agency, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"National Fraud Intelligence Bureau",
    acronym:"NFIB",
    icon:"\ud83d\udee1\ufe0f",
    shortDesc:"Collects and analyses fraud and cyber-enabled crime reports for the UK, providing intelligence packages to police forces for investigation.",
    longDesc:"The NFIB operates within the City of London Police and serves as the UK\u2019s central intelligence authority for fraud and financially motivated cybercrime. It receives reports from Action Fraud (the public reporting service) and analyses them to identify serial offenders, organised crime groups, and emerging fraud trends. Intelligence packages are distributed to police forces for investigation, and the bureau produces regular strategic assessments of the fraud landscape.",
    whyMatters:"The NFIB demonstrates how fraud intelligence is centralised and prioritised in the UK system, and helps learners understand the pipeline from public reporting to police action.",
    geography:"UK National",
    type:"Law Enforcement & Intelligence",
    themes:["Fraud & Organised Crime","Emerging Threats (Crypto/AI)"],
    website:"https://www.cityoflondon.police.uk/advice/advice-and-information/fa/fraud/nfib/",
    keyResources:[
      {title:"NFIB Fraud Intelligence Publications",url:"https://www.cityoflondon.police.uk/advice/advice-and-information/fa/fraud/"},
      {title:"Action Fraud Reporting Service",url:"https://www.actionfraud.police.uk/"}
    ],
    attributionText:"Independent educational summary. Source: National Fraud Intelligence Bureau (NFIB) / City of London Police, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"CIFAS",
    acronym:"CIFAS",
    icon:"\ud83d\udd12",
    shortDesc:"A UK not-for-profit membership organisation focused on fraud prevention through data sharing, threat intelligence, and cross-sector collaboration.",
    longDesc:"CIFAS is a fraud prevention community that enables member organisations \u2014 spanning banking, insurance, retail, telecoms, and the public sector \u2014 to share data about confirmed fraud and financial crime. Through its National Fraud Database and other intelligence-sharing mechanisms, CIFAS helps members identify fraud risks, protect customers, and detect organised fraud networks. It also campaigns for better fraud awareness and produces annual research on fraud trends in the UK.",
    whyMatters:"CIFAS illustrates the role of private-sector collaboration and data sharing in fraud prevention \u2014 a model increasingly recognised internationally as essential to tackling economic crime.",
    geography:"UK National",
    type:"Public-Private Partnership",
    themes:["Fraud & Organised Crime","Money Laundering"],
    website:"https://www.cifas.org.uk/",
    keyResources:[
      {title:"Fraudscape Annual Report",url:"https://www.cifas.org.uk/research"},
      {title:"CIFAS Intelligence Resources",url:"https://www.cifas.org.uk/intelligence"}
    ],
    attributionText:"Independent educational summary. Source: CIFAS, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Serious Fraud Office",
    acronym:"SFO",
    icon:"\u2696\ufe0f",
    shortDesc:"Investigates and prosecutes the most serious and complex cases of fraud, bribery, and corruption in England, Wales, and Northern Ireland.",
    longDesc:"The SFO is an independent UK government department with unique powers to both investigate and prosecute top-tier fraud, bribery, and corruption cases. Its jurisdiction covers cases of sufficient seriousness or complexity \u2014 often involving corporate wrongdoing, international bribery, or large-scale financial market manipulation. The SFO uses compulsory powers under the Criminal Justice Act 1987 and has a dedicated intelligence function to identify and assess potential cases aligned with its case acceptance criteria.",
    whyMatters:"The SFO helps learners understand how high-end corporate fraud and bribery are investigated and prosecuted, including the use of Deferred Prosecution Agreements (DPAs) as an enforcement tool.",
    geography:"UK National",
    type:"Law Enforcement & Intelligence",
    themes:["Fraud & Organised Crime","Bribery & Corruption","Asset Recovery"],
    website:"https://www.sfo.gov.uk/",
    keyResources:[
      {title:"SFO Annual Reports & Publications",url:"https://www.sfo.gov.uk/publications/"},
      {title:"SFO Case Information",url:"https://www.sfo.gov.uk/our-cases/"},
      {title:"SFO Operational Handbook (Public)",url:"https://www.sfo.gov.uk/publications/guidance-policy-and-protocols/"}
    ],
    attributionText:"Independent educational summary. Source: Serious Fraud Office (SFO), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Financial Conduct Authority",
    acronym:"FCA",
    icon:"\ud83c\udfe6",
    shortDesc:"The UK\u2019s conduct regulator for financial services firms, responsible for overseeing AML compliance and market integrity across the regulated sector.",
    longDesc:"The FCA regulates the conduct of approximately 42,000 financial services firms in the UK and is the AML/CFT supervisor for a large portion of the regulated sector. Its role in economic crime spans supervising firms\u2019 anti-money laundering controls, enforcing market abuse regulations, and protecting consumers from financial fraud. The FCA publishes guidance, thematic reviews, and enforcement outcomes that shape industry practice.",
    whyMatters:"Understanding the FCA\u2019s role is essential for anyone working in UK financial services compliance \u2014 it sets the supervisory expectations that firms must meet to prevent economic crime.",
    geography:"UK National",
    type:"Regulator",
    themes:["Money Laundering","Fraud & Organised Crime","Sanctions Evasion"],
    website:"https://www.fca.org.uk/",
    keyResources:[
      {title:"FCA Financial Crime Guide",url:"https://www.fca.org.uk/firms/financial-crime"},
      {title:"FCA Enforcement Actions",url:"https://www.fca.org.uk/news/search-results?np_category=enforcement-actions"},
      {title:"FCA Strategy & Annual Reports",url:"https://www.fca.org.uk/publications"}
    ],
    attributionText:"Independent educational summary. Source: Financial Conduct Authority (FCA), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Europol \u2013 European Financial and Economic Crime Centre",
    acronym:"EFECC",
    icon:"\ud83c\uddea\ud83c\uddfa",
    shortDesc:"Europol\u2019s dedicated centre for supporting EU member states in combating financial and economic crime through intelligence, analysis, and operational coordination.",
    longDesc:"The EFECC was established within Europol to strengthen the EU\u2019s collective capacity to fight money laundering, fraud, corruption, counterfeiting, and intellectual property crime. It provides operational analysis, coordinates joint investigation teams, and supports cross-border operations. The centre also produces strategic threat assessments that inform EU policy priorities and resource allocation in the economic crime domain.",
    whyMatters:"The EFECC shows how European-level intelligence coordination works and why cross-border cooperation is critical for tackling financial crime that exploits jurisdictional boundaries.",
    geography:"European",
    type:"Law Enforcement & Intelligence",
    themes:["Money Laundering","Fraud & Organised Crime","Bribery & Corruption","Asset Recovery"],
    website:"https://www.europol.europa.eu/crime-areas/economic-crime",
    keyResources:[
      {title:"Europol Serious & Organised Crime Threat Assessment (SOCTA)",url:"https://www.europol.europa.eu/socta-report"},
      {title:"Europol Financial Intelligence Publications",url:"https://www.europol.europa.eu/publications-events"}
    ],
    attributionText:"Independent educational summary. Source: Europol \u2013 European Financial and Economic Crime Centre (EFECC), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Financial Action Task Force",
    acronym:"FATF",
    icon:"\ud83c\udf10",
    shortDesc:"The global standard-setting body for anti-money laundering and counter-terrorist financing, producing recommendations, mutual evaluations, and risk assessments.",
    longDesc:"FATF is the inter-governmental body that sets international standards on combating money laundering, terrorist financing, and proliferation financing. Its 40 Recommendations form the global benchmark against which countries\u2019 AML/CFT systems are assessed. FATF conducts mutual evaluation reviews, publishes typologies and guidance, and maintains lists identifying jurisdictions with strategic deficiencies. Its work shapes national legislation, supervisory practice, and private sector compliance globally.",
    whyMatters:"FATF standards underpin virtually every AML/CFT framework worldwide. Understanding FATF is foundational for anyone studying or working in the economic crime prevention field.",
    geography:"Global/International",
    type:"Standards Body",
    themes:["Money Laundering","Fraud & Organised Crime","Bribery & Corruption","Sanctions Evasion","Emerging Threats (Crypto/AI)"],
    website:"https://www.fatf-gafi.org/",
    keyResources:[
      {title:"FATF 40 Recommendations",url:"https://www.fatf-gafi.org/en/topics/fatf-recommendations.html"},
      {title:"Mutual Evaluation Reports",url:"https://www.fatf-gafi.org/en/publications/mutualevaluations.html"},
      {title:"FATF High-Risk Jurisdictions List",url:"https://www.fatf-gafi.org/en/countries/black-and-grey-lists.html"},
      {title:"FATF Typologies & Guidance",url:"https://www.fatf-gafi.org/en/publications/methodsandtrends.html"}
    ],
    attributionText:"Independent educational summary. Source: Financial Action Task Force (FATF), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Egmont Group of Financial Intelligence Units",
    acronym:"Egmont Group",
    icon:"\ud83c\udf0d",
    shortDesc:"A global network of 174 Financial Intelligence Units facilitating secure information exchange and international cooperation in the fight against money laundering and terrorist financing.",
    longDesc:"The Egmont Group connects FIUs worldwide through a secure communication platform (Egmont Secure Web) and provides a framework for intelligence sharing, capacity building, and best practice development. It enables FIUs to exchange financial intelligence rapidly and confidentially, supporting investigations into money laundering, terrorist financing, and associated predicate offences. The group also conducts research and publishes analyses that inform global AML/CFT standards and practices.",
    whyMatters:"The Egmont Group demonstrates why international FIU cooperation matters \u2014 financial crime is inherently cross-border, and intelligence must flow securely between jurisdictions to be effective.",
    geography:"Global/International",
    type:"Financial Intelligence Unit (FIU)",
    themes:["Money Laundering","Sanctions Evasion","Fraud & Organised Crime"],
    website:"https://egmontgroup.org/",
    keyResources:[
      {title:"Egmont Group Publications & Reports",url:"https://egmontgroup.org/egmont-documents/"},
      {title:"Europe II Horizontal Analysis of IO.2 & IO.6",url:"https://egmontgroup.org/wp-content/uploads/2026/01/EUII-Group-Horizontal-Analysis-of-IO2-and-IO6-Final-version.pdf"},
      {title:"Egmont Group Annual Report",url:"https://egmontgroup.org/egmont-documents/"}
    ],
    attributionText:"Independent educational summary. Source: Egmont Group of Financial Intelligence Units, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Joint Money Laundering Intelligence Taskforce",
    acronym:"JMLIT",
    icon:"\ud83e\udd1d",
    shortDesc:"A UK public-private partnership enabling banks, law enforcement, and regulators to share intelligence on money laundering threats in real time.",
    longDesc:"JMLIT is a pioneering partnership between UK financial institutions, the NCA, and other law enforcement bodies that enables the real-time sharing of intelligence about suspected money laundering. Operating under a legal gateway provided by the Crime and Courts Act 2013, JMLIT allows banks to share customer information with each other and with law enforcement where there is a suspicion of money laundering. It also produces strategic threat assessments and typology reports that help the sector understand evolving threats.",
    whyMatters:"JMLIT is widely considered one of the most effective public-private intelligence-sharing models in the world, and is frequently cited as a template for similar initiatives globally.",
    geography:"UK National",
    type:"Public-Private Partnership",
    themes:["Money Laundering","Fraud & Organised Crime","Sanctions Evasion","Asset Recovery"],
    website:"https://www.nationalcrimeagency.gov.uk/what-we-do/national-economic-crime-centre",
    keyResources:[
      {title:"JMLIT Typology Reports",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/national-economic-crime-centre"},
      {title:"NCA Public-Private Partnerships",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance"}
    ],
    attributionText:"Independent educational summary. Source: Joint Money Laundering Intelligence Taskforce (JMLIT) / National Crime Agency, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Transparency International UK",
    acronym:"TI-UK",
    icon:"\ud83d\udca1",
    shortDesc:"An independent anti-corruption organisation campaigning for transparency in UK public and corporate life and publishing research on corruption risks.",
    longDesc:"Transparency International UK is the UK chapter of the global anti-corruption movement. It conducts independent research into corruption vulnerabilities in the UK \u2014 including in property markets, political finance, company formation, and overseas territories. TI-UK advocates for legal and regulatory reforms, publishes reports on illicit financial flows, and provides tools and guidance to support good governance. Its work informs both public debate and policy development.",
    whyMatters:"TI-UK provides a civil society perspective on corruption and economic crime that complements official law enforcement and regulatory views \u2014 essential for a well-rounded understanding.",
    geography:"UK National",
    type:"NGO & Think Tank",
    themes:["Bribery & Corruption","Money Laundering","Asset Recovery"],
    website:"https://www.transparency.org.uk/",
    keyResources:[
      {title:"TI-UK Research & Reports",url:"https://www.transparency.org.uk/research"},
      {title:"Corruption Perceptions Index",url:"https://www.transparency.org/en/cpi"}
    ],
    attributionText:"Independent educational summary. Source: Transparency International UK (TI-UK), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Spotlight on Corruption",
    acronym:"SoC",
    icon:"\ud83d\udd26",
    shortDesc:"An independent UK-based civil society organisation dedicated to holding authorities accountable for tackling corruption and economic crime effectively.",
    longDesc:"Spotlight on Corruption monitors and evaluates the UK\u2019s response to corruption and economic crime, producing analysis and policy recommendations. It scrutinises government policy, enforcement agency performance, and the effectiveness of the UK\u2019s legal framework for tackling corruption. The organisation campaigns for stronger enforcement, greater transparency, and better resourcing of agencies tackling financial crime.",
    whyMatters:"Spotlight on Corruption offers an accountability lens on economic crime policy \u2014 helping learners understand the gap between policy ambition and practical enforcement outcomes.",
    geography:"UK National",
    type:"NGO & Think Tank",
    themes:["Bribery & Corruption","Asset Recovery","Money Laundering"],
    website:"https://www.spotlightcorruption.org/",
    keyResources:[
      {title:"SoC Research & Analysis",url:"https://www.spotlightcorruption.org/research/"},
      {title:"SoC Policy Briefings",url:"https://www.spotlightcorruption.org/"}
    ],
    attributionText:"Independent educational summary. Source: Spotlight on Corruption (SoC), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"UK Finance \u2013 Economic Crime Team",
    acronym:"UK Finance",
    icon:"\ud83c\udfe6",
    shortDesc:"The trade body for UK banking and finance, whose economic crime team coordinates industry-wide intelligence sharing, threat assessments, and fraud prevention initiatives.",
    longDesc:"UK Finance represents nearly 300 firms across the UK banking and finance sector. Its economic crime division coordinates industry responses to fraud, money laundering, and cyber-enabled financial crime. The team produces annual fraud reports, manages intelligence-sharing protocols, and works with government and law enforcement on policy development. UK Finance also operates Take Five and other public awareness campaigns.",
    whyMatters:"UK Finance provides the industry perspective on economic crime trends and the effectiveness of prevention measures \u2014 essential context for understanding the private sector\u2019s role.",
    geography:"UK National",
    type:"Professional Association",
    themes:["Fraud & Organised Crime","Money Laundering","Emerging Threats (Crypto/AI)"],
    website:"https://www.ukfinance.org.uk/",
    keyResources:[
      {title:"Annual Fraud Report",url:"https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications"},
      {title:"Economic Crime Prevention Resources",url:"https://www.ukfinance.org.uk/our-expertise/economic-crime"}
    ],
    attributionText:"Independent educational summary. Source: UK Finance, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Basel Institute on Governance",
    acronym:"Basel Institute",
    icon:"\ud83c\udfdb\ufe0f",
    shortDesc:"An independent not-for-profit centre of excellence working on international anti-corruption, anti-money laundering, and asset recovery.",
    longDesc:"The Basel Institute on Governance is an independent Swiss-based organisation that combines research, policy advice, and operational support to strengthen governance and combat financial crime globally. It produces the Basel AML Index (a country-level ML/TF risk ranking), supports asset recovery in developing countries through the International Centre for Asset Recovery (ICAR), and delivers technical assistance to governments and international organisations.",
    whyMatters:"The Basel AML Index is a widely used risk assessment tool, and the Institute\u2019s asset recovery work demonstrates the practical challenges of returning stolen assets to victim countries.",
    geography:"Global/International",
    type:"NGO & Think Tank",
    themes:["Money Laundering","Bribery & Corruption","Asset Recovery"],
    website:"https://baselgovernance.org/",
    keyResources:[
      {title:"Basel AML Index",url:"https://index.baselgovernance.org/"},
      {title:"Asset Recovery Publications",url:"https://baselgovernance.org/publications"},
      {title:"ICAR \u2013 International Centre for Asset Recovery",url:"https://baselgovernance.org/asset-recovery"}
    ],
    attributionText:"Independent educational summary. Source: Basel Institute on Governance, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"Global Coalition to Fight Financial Crime",
    acronym:"GCFFC",
    icon:"\ud83c\udf1f",
    shortDesc:"An international coalition of public, private, and non-profit organisations working together to improve the global fight against financial crime and illicit finance.",
    longDesc:"The GCFFC brings together banks, regulators, law enforcement agencies, and civil society organisations to advocate for reforms that make the global financial crime prevention system more effective. It focuses on improving information sharing between public and private sectors, strengthening beneficial ownership transparency, and leveraging technology for better detection. The coalition produces policy recommendations and convenes stakeholders at major international forums.",
    whyMatters:"The GCFFC embodies the growing consensus that no single sector can tackle financial crime alone \u2014 effective prevention requires structured collaboration between public, private, and civil society actors.",
    geography:"Global/International",
    type:"Public-Private Partnership",
    themes:["Money Laundering","Fraud & Organised Crime","Emerging Threats (Crypto/AI)"],
    website:"https://www.gcffc.org/",
    keyResources:[
      {title:"GCFFC Policy Papers",url:"https://www.gcffc.org/resources/"},
      {title:"GCFFC Campaign Materials",url:"https://www.gcffc.org/"}
    ],
    attributionText:"Independent educational summary. Source: Global Coalition to Fight Financial Crime (GCFFC), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"UNODC Corruption and Economic Crime Branch",
    acronym:"UNODC",
    icon:"\ud83c\uddfa\ud83c\uddf3",
    shortDesc:"The United Nations office responsible for supporting member states in preventing and combating corruption, money laundering, and economic crime through technical assistance and policy development.",
    longDesc:"The UNODC\u2019s Corruption and Economic Crime Branch assists countries in implementing the UN Convention against Corruption (UNCAC) and develops tools, guidance, and technical assistance programmes to strengthen national AML/CFT frameworks. It supports legal reform, institution building, and capacity development, particularly in developing countries. The branch also conducts research on global corruption trends and the links between economic crime, organised crime, and development.",
    whyMatters:"UNODC provides the UN\u2019s perspective on how economic crime undermines development and governance \u2014 connecting financial crime to broader human rights and development outcomes.",
    geography:"Global/International",
    type:"Standards Body",
    themes:["Bribery & Corruption","Money Laundering","Asset Recovery"],
    website:"https://www.unodc.org/unodc/en/corruption/",
    keyResources:[
      {title:"UN Convention Against Corruption (UNCAC)",url:"https://www.unodc.org/unodc/en/corruption/uncac.html"},
      {title:"UNODC Publications on Economic Crime",url:"https://www.unodc.org/unodc/en/publications-by-topic.html"},
      {title:"goAML Platform",url:"https://www.unodc.org/unodc/en/money-laundering/goAML/"}
    ],
    attributionText:"Independent educational summary. Source: United Nations Office on Drugs and Crime (UNODC), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"ACAMS",
    acronym:"ACAMS",
    icon:"\ud83c\udf93",
    shortDesc:"The world\u2019s largest professional association for anti-financial crime practitioners, providing training, certifications, and resources to the AML/CFT community.",
    longDesc:"ACAMS (Association of Certified Anti-Money Laundering Specialists) serves over 100,000 members across 180 jurisdictions. It offers professional certifications including the Certified Anti-Money Laundering Specialist (CAMS) designation, which is widely recognised as an industry benchmark. ACAMS also provides training programmes, conferences, publications, and a peer network for compliance professionals, law enforcement officers, and regulators working to prevent financial crime.",
    whyMatters:"ACAMS certifications and resources are among the most widely recognised professional development pathways in the economic crime field \u2014 valuable context for career planning.",
    geography:"Global/International",
    type:"Professional Association",
    themes:["Money Laundering","Sanctions Evasion","Fraud & Organised Crime","Emerging Threats (Crypto/AI)"],
    website:"https://www.acams.org/",
    keyResources:[
      {title:"CAMS Certification Overview",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
      {title:"ACAMS Today (Publication)",url:"https://www.acams.org/en/resources/acams-today"},
      {title:"ACAMS Research & Reports",url:"https://www.acams.org/en/resources"}
    ],
    attributionText:"Independent educational summary. Source: Association of Certified Anti-Money Laundering Specialists (ACAMS), official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  },
  {
    name:"INTERPOL Financial Crime Unit",
    acronym:"INTERPOL FC",
    icon:"\ud83d\udd35",
    shortDesc:"INTERPOL\u2019s specialist unit supporting international police cooperation on money laundering, financial fraud, corruption, and asset recovery across 196 member countries.",
    longDesc:"INTERPOL\u2019s Financial Crime and Anti-Corruption Centre (IFCACC) provides operational support, analysis, and coordination for international police cooperation on financial crime. It assists member countries with multi-jurisdictional investigations, asset tracing, and the identification of criminal networks involved in money laundering, fraud, and corruption. INTERPOL also manages global police databases and communication networks that enable secure cross-border information sharing.",
    whyMatters:"INTERPOL demonstrates the practical mechanics of international police cooperation on financial crime \u2014 from red notices to coordinated operations targeting criminal assets across borders.",
    geography:"Global/International",
    type:"Law Enforcement & Intelligence",
    themes:["Fraud & Organised Crime","Money Laundering","Bribery & Corruption","Asset Recovery"],
    website:"https://www.interpol.int/en/Crimes/Financial-crime",
    keyResources:[
      {title:"INTERPOL Financial Crime Assessments",url:"https://www.interpol.int/en/Crimes/Financial-crime"},
      {title:"INTERPOL Global Financial Crime Strategy",url:"https://www.interpol.int/en/Crimes/Financial-crime"},
      {title:"INTERPOL Annual Report",url:"https://www.interpol.int/en/Resources/Documents"}
    ],
    attributionText:"Independent educational summary. Source: INTERPOL Financial Crime and Anti-Corruption Centre, official public resources. Accessed March 2026. Not endorsed by or affiliated with the organisation."
  }
];
