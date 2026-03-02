class FutureTech {
  constructor({icon, title, desc, currentState, futureState, skills}) {
    this.icon = icon;
    this.title = title;
    this.desc = desc;
    this.currentState = currentState;
    this.futureState = futureState;
    this.skills = skills || [];       // Skills to develop now
  }
}

const futures = [
  new FutureTech({
    icon: "\u{1F916}",
    title: "AI & Machine Learning",
    desc: "AI is revolutionising transaction monitoring \u2014 detecting subtle anomalies across billions of data points and identifying emerging typologies in real time. FinCEN has endorsed responsible AI adoption for AML compliance.",
    currentState: "Today, institutions rely on hybrid rule-based systems supplemented by supervised and unsupervised ML models for transaction monitoring. These generate high volumes of false positives (often 80\u201395%), requiring extensive manual review by compliance analysts working with siloed datasets.",
    futureState: "By 2029, autonomous, explainable AI agents with continuous multimodal learning will process global transaction streams in real time, autonomously investigate alerts, predict novel typologies, and enable automated SAR filing with dramatically reduced false positives and full regulatory endorsement.",
    skills: [
      {skill: "Python & SQL for Data Analysis", why: "The lingua franca of ML pipelines \u2014 essential for building, querying, and validating transaction monitoring models and alert datasets."},
      {skill: "Supervised & Unsupervised ML Fundamentals", why: "Understanding classification, clustering, and anomaly detection lets you evaluate vendor models, tune thresholds, and explain outcomes to regulators."},
      {skill: "Explainable AI (XAI) Techniques", why: "Regulators increasingly require model interpretability \u2014 skills in SHAP, LIME, and feature importance are critical for audit-ready AI deployments."},
      {skill: "Prompt Engineering & LLM Integration", why: "Generative AI is entering compliance workflows \u2014 knowing how to craft effective prompts and integrate LLMs into investigation tools is a near-term differentiator."},
      {skill: "AI Governance & Ethical Frameworks", why: "Understanding bias testing, fairness metrics, and regulatory expectations (e.g. EU AI Act) is essential as AI takes on higher-stakes compliance decisions."}
    ]
  }),
  new FutureTech({
    icon: "\u26D3\uFE0F",
    title: "Blockchain Analytics",
    desc: "While criminals exploit crypto for anonymity, blockchain\u2019s transparent ledger enables powerful investigation. Analytics platforms trace funds across wallets, exchanges, and mixing services.",
    currentState: "Currently, tools like Chainalysis and Elliptic enable address clustering, flow tracing, and exchange off-ramp identification. Privacy-enhancing technologies, mixers, and cross-chain bridges still require significant manual expertise and time to unravel.",
    futureState: "In 2029, AI-powered cross-chain platforms will deliver near-instantaneous automated tracing, predictive wallet clustering, and seamless integration with traditional banking data, rendering even sophisticated obfuscation techniques visible and actionable in real time.",
    skills: [
      {skill: "Blockchain Fundamentals & DeFi Mechanics", why: "You cannot investigate what you don\u2019t understand \u2014 grasp how consensus mechanisms, smart contracts, liquidity pools, and bridges work at a technical level."},
      {skill: "On-Chain Investigation Tools", why: "Hands-on proficiency with Chainalysis Reactor, Elliptic, or open-source explorers (Etherscan, Blockchair) is table stakes for crypto compliance roles."},
      {skill: "Cross-Chain Tracing & Mixer Analysis", why: "Criminals increasingly hop between chains and use mixers/tumblers \u2014 understanding these obfuscation patterns is a high-demand, scarce skill."},
      {skill: "Travel Rule & Crypto Regulation", why: "FATF\u2019s Travel Rule and evolving MiCA/EU frameworks are reshaping VASP compliance \u2014 regulatory knowledge here is immediately applicable."},
      {skill: "OSINT for Wallet Attribution", why: "Combining on-chain data with off-chain intelligence (social media, forums, darknet) to attribute wallets is the core investigative skill in crypto AML."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F52C}",
    title: "Behavioural Biometrics",
    desc: "Next-generation fraud detection analyses how people interact with devices \u2014 typing patterns, mouse movements, swipe gestures \u2014 detecting account takeover in real time.",
    currentState: "Today, behavioural biometrics are deployed selectively for high-risk sessions, analysing keystroke dynamics, mouse trajectories, and swipe patterns alongside traditional credentials, but coverage and integration remain inconsistent across channels.",
    futureState: "By 2029, continuous passive behavioural profiling fused with contextual AI and multi-sensor data will create dynamic, adaptive trust scores across all digital interactions, predicting and preventing sophisticated takeovers and synthetic-behaviour attacks before any transaction occurs.",
    skills: [
      {skill: "Fraud Pattern Recognition & Typologies", why: "Understanding account takeover, synthetic identity, and social engineering attack patterns is the foundation for designing and tuning behavioural detection systems."},
      {skill: "Data Privacy & Consent Engineering", why: "Behavioural biometrics collect sensitive personal data \u2014 GDPR, CCPA, and emerging privacy laws require deep understanding of lawful processing and consent models."},
      {skill: "Signal Processing & Time-Series Analysis", why: "Keystroke dynamics and gesture data are time-series signals \u2014 statistical and ML skills for analysing sequential, noisy data are directly applicable."},
      {skill: "UX & Frictionless Security Design", why: "The best biometric systems are invisible to users \u2014 understanding how to balance security with user experience is a critical design skill."},
      {skill: "Adversarial ML & Deepfake Detection", why: "As attackers use AI to generate synthetic behaviours and deepfakes, defenders need skills in adversarial robustness testing and detection countermeasures."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F6F0}\uFE0F",
    title: "Satellite & Geospatial Intelligence",
    desc: "Satellite imagery detects forced labour, illegal mining, and undeclared activity. Combined with financial data, it corroborates or challenges supply chain audit claims.",
    currentState: "Currently, analysts periodically review commercial satellite imagery and geospatial data for high-risk regions, manually correlating it with trade records and supplier declarations in supply-chain due diligence.",
    futureState: "In 2029, AI-processed real-time high-resolution satellite constellations will automatically detect physical anomalies (new infrastructure, vessel movements, deforestation) and instantly fuse them with transaction networks, triggering automated compliance alerts and predictive risk scoring.",
    skills: [
      {skill: "GIS & Remote Sensing Fundamentals", why: "Understanding coordinate systems, raster/vector data, and satellite image interpretation is foundational for any geospatial intelligence work."},
      {skill: "Supply Chain Due Diligence & ESG Risk", why: "Geospatial intelligence is most valuable when combined with trade finance and ESG knowledge \u2014 knowing how supply chains work helps you spot what\u2019s anomalous."},
      {skill: "Python for Geospatial Analysis", why: "Libraries like GeoPandas, Rasterio, and Google Earth Engine APIs let you automate satellite image analysis and integrate it with financial data pipelines."},
      {skill: "OSINT & Multi-Source Fusion", why: "Combining satellite imagery with shipping data (AIS), corporate registries, and sanctions lists is the core analytical workflow in trade-based investigations."},
      {skill: "Environmental & Human Rights Crime Typologies", why: "Understanding illegal mining, forced labour, and deforestation patterns helps you know what to look for in imagery and how it connects to financial flows."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F9EC}",
    title: "Digital Identity & Biometrics",
    desc: "Facial recognition, liveness detection, and verifiable digital credentials make it harder for criminals to exploit stolen or synthetic identities.",
    currentState: "Today, remote KYC relies on document scanning, facial matching with basic liveness checks, and database lookups. Deepfakes and synthetic identities continue to challenge these methods, often requiring additional manual verification.",
    futureState: "By 2029, decentralised self-sovereign identity frameworks with advanced multi-modal biometrics, dynamic liveness detection, and zero-knowledge verifiable credentials will enable instant, privacy-first global onboarding and authentication, virtually eliminating identity-based financial crime.",
    skills: [
      {skill: "KYC/CDD Process & Regulatory Frameworks", why: "Deep knowledge of identity verification requirements across jurisdictions (FATF, EU AMLD, FinCEN CDD Rule) is the bedrock of digital identity work."},
      {skill: "Synthetic Identity & Document Fraud Detection", why: "Understanding how fraudsters create synthetic identities, forge documents, and exploit KYC weaknesses is essential for designing robust verification systems."},
      {skill: "Self-Sovereign Identity (SSI) & Verifiable Credentials", why: "W3C DIDs, verifiable credentials, and zero-knowledge proofs are the building blocks of next-gen identity \u2014 early familiarity is a strategic advantage."},
      {skill: "Biometric Technology Evaluation", why: "Knowing how to assess liveness detection quality, presentation attack detection (PAD), and bias across demographics helps you select and govern identity vendors."},
      {skill: "Data Protection Impact Assessments (DPIAs)", why: "Biometric data is special-category under GDPR \u2014 the ability to conduct DPIAs and design privacy-by-default systems is essential for any identity programme."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F4E1}",
    title: "Real-Time Information Sharing",
    desc: "Secure, real-time intelligence sharing between banks, law enforcement, and regulators \u2014 enabled by privacy-enhancing technologies.",
    currentState: "Currently, sharing occurs through periodic SAR filings, formal requests, and limited public-private partnerships, constrained by data-privacy regulations and resulting in delayed collaborative responses.",
    futureState: "In 2029, privacy-enhancing technologies such as federated learning and secure multi-party computation will power permissioned, real-time intelligence networks, allowing instant querying of threat indicators across the ecosystem without exposing underlying customer data.",
    skills: [
      {skill: "Privacy-Enhancing Technologies (PETs)", why: "Federated learning, secure multi-party computation, homomorphic encryption, and differential privacy are the enablers of safe data sharing \u2014 understanding their trade-offs is critical."},
      {skill: "SAR Writing & Financial Intelligence Analysis", why: "Effective intelligence sharing starts with high-quality intelligence production \u2014 strong SAR narrative skills and analytical rigour make shared intelligence actionable."},
      {skill: "Public-Private Partnership Frameworks", why: "Understanding how PPPs like JMLIT (UK), FinCEN Exchange (US), and AFCA (NL) operate helps you design and participate in collaborative intelligence programmes."},
      {skill: "Data Governance & Information Barriers", why: "Knowing how to manage data classification, access controls, and legal gateways (e.g. GDPR Art. 6 bases) is essential for lawful cross-institutional sharing."},
      {skill: "API Design & Secure Integration", why: "Real-time sharing requires secure, standardised APIs \u2014 familiarity with RESTful design, OAuth, and messaging standards (ISO 20022) is increasingly valuable."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F310}",
    title: "RegTech & Automated Compliance",
    desc: "Regulatory technology automates compliance \u2014 from KYC to sanctions screening. NLP monitors regulatory changes across jurisdictions in real time.",
    currentState: "Today, RegTech tools automate repetitive tasks (screening, reporting, basic KYC) using rule engines and emerging NLP, but regulatory change management and complex decisioning still require substantial manual oversight.",
    futureState: "By 2029, intelligent RegTech platforms with generative AI and adaptive knowledge graphs will autonomously interpret, implement, and predict regulatory shifts globally, orchestrating end-to-end compliance lifecycles with predictive gap analysis and minimal human intervention.",
    skills: [
      {skill: "Regulatory Change Management", why: "Understanding how regulations move from consultation to enforcement across jurisdictions \u2014 and how to operationalise changes \u2014 is the core problem RegTech solves."},
      {skill: "NLP & Text Analytics for Legal Documents", why: "Regulations are unstructured text \u2014 NLP skills (entity extraction, classification, semantic search) are directly applicable to regulatory monitoring and gap analysis."},
      {skill: "Process Mapping & Automation Design", why: "Before you can automate compliance, you need to map it \u2014 skills in BPMN, workflow design, and identifying automation candidates are foundational."},
      {skill: "Knowledge Graphs & Ontology Design", why: "Linking regulations, obligations, controls, and risks in a knowledge graph enables intelligent compliance \u2014 this is a growing specialism at the intersection of law and data."},
      {skill: "Sanctions Screening & List Management", why: "Understanding how screening engines work (fuzzy matching, alias resolution, threshold tuning) and how to manage sanctions lists is one of the most immediately employable RegTech skills."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F9E0}",
    title: "Predictive Analytics & Network Science",
    desc: "Predictive models combine financial data, social network analysis, and open-source intelligence to identify threats before they materialise.",
    currentState: "Currently, graph analytics and basic predictive models help map known networks and prioritise investigations based on historical patterns within siloed datasets.",
    futureState: "In 2029, sophisticated graph neural networks and agent-based simulations integrating financial, social, geospatial, and OSINT data will forecast criminal network evolution and emerging threats weeks or months ahead, enabling truly pre-emptive controls and collaborative disruption.",
    skills: [
      {skill: "Graph Theory & Network Analysis", why: "Understanding centrality, community detection, and path analysis is fundamental \u2014 criminal networks are graphs, and the ability to map and interpret them is a core investigative skill."},
      {skill: "Graph Databases & Query Languages", why: "Hands-on skills with Neo4j, TigerGraph, or Amazon Neptune \u2014 and their query languages (Cypher, GSQL) \u2014 let you build and explore relationship networks at scale."},
      {skill: "OSINT Collection & Verification", why: "Open-source intelligence from corporate registries, social media, leaked databases, and news feeds is the fuel for network analysis \u2014 knowing how to collect and verify it is essential."},
      {skill: "Statistical Modelling & Risk Scoring", why: "Logistic regression, survival analysis, and Bayesian methods underpin the predictive models that prioritise which leads to investigate first."},
      {skill: "Data Visualisation for Intelligence Products", why: "The ability to create clear, compelling network maps and analytical products (using tools like Maltego, Gephi, or D3.js) makes intelligence actionable for decision-makers."}
    ]
  }),
  new FutureTech({
    icon: "\u{1F3AE}",
    title: "Gamification & Immersive Training",
    desc: "VR simulations and gamified platforms transform compliance training \u2014 practitioners practise identifying red flags in realistic safe environments.",
    currentState: "Today, training consists primarily of e-learning modules, quizzes, and basic gamified scenarios, which often suffer from low engagement and limited real-world skill transfer.",
    futureState: "By 2029, fully immersive VR/AR environments powered by AI will generate personalised, adaptive threat scenarios based on the latest typologies. Gamification elements and real-time performance analytics will dramatically improve knowledge retention, decision-making under pressure, and measurable competency.",
    skills: [
      {skill: "Instructional Design & Adult Learning Theory", why: "Effective training requires understanding how adults learn, retain, and apply knowledge \u2014 andragogy, spaced repetition, and scenario-based learning are foundational."},
      {skill: "Scenario Design & Red-Flag Simulation", why: "Creating realistic, branching investigation scenarios that teach decision-making under ambiguity is a specialised and valuable skill for compliance training teams."},
      {skill: "Learning Analytics & Competency Measurement", why: "Measuring training effectiveness beyond completion rates \u2014 using performance analytics, pre/post assessments, and competency frameworks \u2014 proves ROI and identifies gaps."},
      {skill: "Unity/Unreal & WebXR Development", why: "VR/AR compliance simulations need developers who understand both the technology (3D environments, interaction design) and the compliance domain they\u2019re simulating."},
      {skill: "Behavioural Psychology & Engagement Design", why: "Gamification that works goes beyond points and badges \u2014 understanding intrinsic motivation, flow states, and habit formation creates training that people actually want to complete."}
    ]
  })
];
