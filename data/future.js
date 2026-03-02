class FutureTech {
  constructor({icon, title, desc, currentState, futureState}) {
    this.icon = icon;
    this.title = title;
    this.desc = desc;          // Original overview / teaser (kept unchanged)
    this.currentState = currentState;  // How the activity is conducted today (~2026)
    this.futureState = futureState;    // Projected state in 3 years (~March 2029)
  }
}

const futures = [
  new FutureTech({
    icon: "🤖",
    title: "AI & Machine Learning",
    desc: "AI is revolutionising transaction monitoring — detecting subtle anomalies across billions of data points and identifying emerging typologies in real time. FinCEN has endorsed responsible AI adoption for AML compliance.",
    currentState: "Today, institutions rely on hybrid rule-based systems supplemented by supervised and unsupervised ML models for transaction monitoring. These generate high volumes of false positives (often 80–95%), requiring extensive manual review by compliance analysts working with siloed datasets.",
    futureState: "By 2029, autonomous, explainable AI agents with continuous multimodal learning will process global transaction streams in real time, autonomously investigate alerts, predict novel typologies, and enable automated SAR filing with dramatically reduced false positives and full regulatory endorsement."
  }),
  new FutureTech({
    icon: "⛓️",
    title: "Blockchain Analytics",
    desc: "While criminals exploit crypto for anonymity, blockchain's transparent ledger enables powerful investigation. Analytics platforms trace funds across wallets, exchanges, and mixing services.",
    currentState: "Currently, tools like Chainalysis and Elliptic enable address clustering, flow tracing, and exchange off-ramp identification. Privacy-enhancing technologies, mixers, and cross-chain bridges still require significant manual expertise and time to unravel.",
    futureState: "In 2029, AI-powered cross-chain platforms will deliver near-instantaneous automated tracing, predictive wallet clustering, and seamless integration with traditional banking data, rendering even sophisticated obfuscation techniques visible and actionable in real time."
  }),
  new FutureTech({
    icon: "🔬",
    title: "Behavioural Biometrics",
    desc: "Next-generation fraud detection analyses how people interact with devices — typing patterns, mouse movements, swipe gestures — detecting account takeover in real time.",
    currentState: "Today, behavioural biometrics are deployed selectively for high-risk sessions, analysing keystroke dynamics, mouse trajectories, and swipe patterns alongside traditional credentials, but coverage and integration remain inconsistent across channels.",
    futureState: "By 2029, continuous passive behavioural profiling fused with contextual AI and multi-sensor data will create dynamic, adaptive trust scores across all digital interactions, predicting and preventing sophisticated takeovers and synthetic-behaviour attacks before any transaction occurs."
  }),
  new FutureTech({
    icon: "🛰️",
    title: "Satellite & Geospatial Intelligence",
    desc: "Satellite imagery detects forced labour, illegal mining, and undeclared activity. Combined with financial data, it corroborates or challenges supply chain audit claims.",
    currentState: "Currently, analysts periodically review commercial satellite imagery and geospatial data for high-risk regions, manually correlating it with trade records and supplier declarations in supply-chain due diligence.",
    futureState: "In 2029, AI-processed real-time high-resolution satellite constellations will automatically detect physical anomalies (new infrastructure, vessel movements, deforestation) and instantly fuse them with transaction networks, triggering automated compliance alerts and predictive risk scoring."
  }),
  new FutureTech({
    icon: "🧬",
    title: "Digital Identity & Biometrics",
    desc: "Facial recognition, liveness detection, and verifiable digital credentials make it harder for criminals to exploit stolen or synthetic identities.",
    currentState: "Today, remote KYC relies on document scanning, facial matching with basic liveness checks, and database lookups. Deepfakes and synthetic identities continue to challenge these methods, often requiring additional manual verification.",
    futureState: "By 2029, decentralised self-sovereign identity frameworks with advanced multi-modal biometrics, dynamic liveness detection, and zero-knowledge verifiable credentials will enable instant, privacy-first global onboarding and authentication, virtually eliminating identity-based financial crime."
  }),
  new FutureTech({
    icon: "📡",
    title: "Real-Time Information Sharing",
    desc: "Secure, real-time intelligence sharing between banks, law enforcement, and regulators — enabled by privacy-enhancing technologies.",
    currentState: "Currently, sharing occurs through periodic SAR filings, formal requests, and limited public-private partnerships, constrained by data-privacy regulations and resulting in delayed collaborative responses.",
    futureState: "In 2029, privacy-enhancing technologies such as federated learning and secure multi-party computation will power permissioned, real-time intelligence networks, allowing instant querying of threat indicators across the ecosystem without exposing underlying customer data."
  }),
  new FutureTech({
    icon: "🌐",
    title: "RegTech & Automated Compliance",
    desc: "Regulatory technology automates compliance — from KYC to sanctions screening. NLP monitors regulatory changes across jurisdictions in real time.",
    currentState: "Today, RegTech tools automate repetitive tasks (screening, reporting, basic KYC) using rule engines and emerging NLP, but regulatory change management and complex decisioning still require substantial manual oversight.",
    futureState: "By 2029, intelligent RegTech platforms with generative AI and adaptive knowledge graphs will autonomously interpret, implement, and predict regulatory shifts globally, orchestrating end-to-end compliance lifecycles with predictive gap analysis and minimal human intervention."
  }),
  new FutureTech({
    icon: "🧠",
    title: "Predictive Analytics & Network Science",
    desc: "Predictive models combine financial data, social network analysis, and open-source intelligence to identify threats before they materialise.",
    currentState: "Currently, graph analytics and basic predictive models help map known networks and prioritise investigations based on historical patterns within siloed datasets.",
    futureState: "In 2029, sophisticated graph neural networks and agent-based simulations integrating financial, social, geospatial, and OSINT data will forecast criminal network evolution and emerging threats weeks or months ahead, enabling truly pre-emptive controls and collaborative disruption."
  }),
  new FutureTech({
    icon: "🎮",
    title: "Gamification & Immersive Training",
    desc: "VR simulations and gamified platforms transform compliance training — practitioners practise identifying red flags in realistic safe environments.",
    currentState: "Today, training consists primarily of e-learning modules, quizzes, and basic gamified scenarios, which often suffer from low engagement and limited real-world skill transfer.",
    futureState: "By 2029, fully immersive VR/AR environments powered by AI will generate personalised, adaptive threat scenarios based on the latest typologies. Gamification elements and real-time performance analytics will dramatically improve knowledge retention, decision-making under pressure, and measurable competency."
  })
];
