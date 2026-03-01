/* ══ INTELLIGENCE DOCUMENTS DATA ══ */
const intelDocuments = [
  {
    id: "egmont-euii-2025",
    icon: "🏛️",
    title: "Horizontal Analysis of IO.2 & IO.6 — Europe II Region",
    publisher: "Egmont Group of Financial Intelligence Units",
    publisherShort: "Egmont Group",
    date: "December 2025",
    region: "Europe II (23 jurisdictions)",
    url: "https://egmontgroup.org/wp-content/uploads/2026/01/EUII-Group-Horizontal-Analysis-of-IO2-and-IO6-Final-version.pdf",
    citation: "Egmont Group Europe II Regional Group, Enhancing the effectiveness of the AML/CFT mechanism through a horizontal analysis of Mutual Evaluation Reports, December 2025.",
    license: "May be reproduced for educational or non-profit purposes with proper acknowledgement of the source.",
    tags: ["FIU","AML/CFT","FATF","MONEYVAL","Mutual Evaluation"],
    summary: "A horizontal review assessing FIU effectiveness across 23 Europe II jurisdictions, examining Immediate Outcome 6 (financial intelligence) and Immediate Outcome 2 (international cooperation) from FATF/MONEYVAL mutual evaluations. Identifies systemic strengths, weaknesses, and recommended actions that explain effectiveness ratings.",
    sections: [
      {
        id: "exec-summary",
        icon: "📄",
        label: "Executive Summary",
        color: "26,58,92",
        title: "Executive Summary",
        content: "This horizontal review assesses FIU effectiveness across 23 Europe II jurisdictions, drawing on FATF and MONEYVAL mutual evaluations. It examines IO.6 (use of financial intelligence) and IO.2 (international cooperation) to identify recurring strengths, weaknesses, and recommended actions.",
        keyPoints: [
          "LEA use of FIU disseminations is the decisive factor — higher-rated jurisdictions systematically apply financial intelligence in investigations, asset tracing, and prosecutions",
          "Higher-rated systems feature stronger IT, wide-ranging data access, structured inter-agency cooperation, and secure international information exchange",
          "Common weaknesses include delays in international requests, limited spontaneous disclosures, defensive STRs (especially from non-financial sectors), and limited FIU resources",
          "Many challenges are systemic rather than jurisdiction-specific — recurrent across the region",
          "Technical compliance establishes a framework, but effectiveness is determined by how standards are implemented in practice"
        ]
      },
      {
        id: "io2-intl-cooperation",
        icon: "🌐",
        label: "IO.2 — International Cooperation",
        color: "24,114,95",
        title: "Immediate Outcome 2 — International Cooperation",
        content: "IO.2 measures the effectiveness of a country's international cooperation in preventing, investigating, and prosecuting ML/TF. It evaluates the promptness, constructiveness, and comprehensiveness of information exchanges between jurisdictions through formal and informal channels.",
        keyPoints: [
          "IO.2 has higher ratings than IO.6 — 61% of jurisdictions rated Substantial, 35% Moderate, 4% High, and no Low ratings",
          "Moderate-rated jurisdictions face delays in responding to foreign requests, often due to resource constraints and lack of prioritisation",
          "Reactive rather than proactive approaches limit spontaneous disclosures to foreign counterparts",
          "Substantial-rated jurisdictions benefit from Egmont Group membership and use of the Egmont Secure Web for confidential intelligence sharing",
          "The only High-rated jurisdiction demonstrates no legal impediments, proactive MOUs, spontaneous information sharing, and structured systems responding within days"
        ],
        subFindings: [
          {label:"Moderate Weakness", text:"Delays in responding to foreign requests; reactive approach; limited spontaneous disclosures"},
          {label:"Substantial Strength", text:"Egmont Group membership; secure platforms; improved response times; proactive dissemination"},
          {label:"High Effectiveness", text:"No legal impediments; proactive MOUs; responds within days; active asset tracing with high-risk countries"}
        ]
      },
      {
        id: "io6-financial-intel",
        icon: "🔍",
        label: "IO.6 — Financial Intelligence",
        color: "184,45,36",
        title: "Immediate Outcome 6 — Financial Intelligence",
        content: "IO.6 focuses on the effectiveness of a country's use of financial intelligence to support investigations, prosecutions, and asset recovery. It assesses STR quality and quantity, FIU analytical capacity, dissemination practices, and the degree to which LEAs use intelligence outputs.",
        keyPoints: [
          "Only 26% of jurisdictions achieved High or Substantial ratings — 65% received Moderate, and 9% received Low",
          "Low-rated jurisdictions suffer from poor STR quality (defensive reporting), limited FIU resources, underutilisation of intelligence by LEAs, and rare parallel financial investigations",
          "Moderate-rated systems show continued resource limitations, inconsistent STR quality (especially from DNFBPs), legal/systemic gaps, and need for empowering LEAs",
          "Substantial-rated systems produce high-quality intelligence with regular and productive FIU–LEA cooperation, though gaps persist in DNFBP reporting and feedback loops",
          "The sole High-rated jurisdiction uses financial intelligence regularly with well-developed IT, trained analysts, and extensive LEA coordination"
        ],
        subFindings: [
          {label:"Low Effectiveness", text:"Defensive STRs; limited FIU resources; LEAs don't prioritise FIU disseminations; rare parallel investigations"},
          {label:"Moderate Effectiveness", text:"Inconsistent STR quality; legal gaps; resource constraints persist; need to empower LEAs"},
          {label:"Substantial Effectiveness", text:"High-quality intelligence; regular FIU–LEA cooperation; gaps in DNFBP reporting and feedback loops"},
          {label:"High Effectiveness", text:"Regular use of financial intelligence; well-developed IT; trained analysts; extensive LEA coordination"}
        ]
      },
      {
        id: "effectiveness-ratings",
        icon: "📊",
        label: "Effectiveness Ratings",
        color: "176,125,30",
        title: "Effectiveness Rating Distribution",
        content: "The FATF Methodology evaluates jurisdictions across 11 Immediate Outcomes using four effectiveness levels: High (minor improvements), Substantial (moderate improvements), Moderate (major improvements), and Low (fundamental improvements needed).",
        keyPoints: [
          "IO.2 ratings: 1 High (4%), 14 Substantial (61%), 8 Moderate (35%), 0 Low",
          "IO.6 ratings: 1 High (4%), 5 Substantial (22%), 15 Moderate (65%), 2 Low (9%)",
          "R.29 compliance: 12 Compliant (52%), 9 Largely Compliant (39%), 2 Partially Compliant (9%)",
          "R.40 compliance: 15 Largely Compliant (65%), 5 Partially Compliant (22%), 3 Compliant (13%)",
          "23 jurisdictions analysed including Albania, Andorra, Armenia, Azerbaijan, Bosnia & Herzegovina, Georgia, Gibraltar, Guernsey, Holy See, Isle of Man, Israel, Jersey, Kosovo, Moldova, Monaco, Montenegro, North Macedonia, San Marino, Serbia, Switzerland, Türkiye, Ukraine, and United Kingdom"
        ]
      },
      {
        id: "horizontal-elements",
        icon: "⚖️",
        label: "Horizontal Elements",
        color: "140,60,120",
        title: "IO.6 — Key Horizontal Elements",
        content: "The horizontal analysis identifies five critical themes that recur across jurisdictions and most strongly correlate with effectiveness ratings. These elements represent the systemic factors that distinguish higher-performing systems from those requiring major reforms.",
        keyPoints: [
          "LEA Use of Financial Intelligence — the most decisive factor. Weakness in 80% of Moderate-rated jurisdictions; strength in 80% of Substantial and 100% of High",
          "Strategic Analysis — weakness in 53% of Moderate and 50% of Low; strength in 47% of Moderate and higher-rated systems. Limited scope undermines risk-based resource allocation",
          "STR Quality — weakness in 100% of Low and 53% of Moderate jurisdictions; absent as weakness in Substantial/High. Central to whether jurisdictions progress beyond Moderate",
          "STR Reporting Process — weakness in 50% of Low and 40% of Moderate; absent in Substantial/High. Functional reporting is an underlying condition for higher effectiveness",
          "National Cooperation & Coordination — strength in 100% of Substantial and High; only 47% of Moderate. Robust cooperation is a critical enabler of higher performance"
        ]
      },
      {
        id: "rec29",
        icon: "🏗️",
        label: "Recommendation 29",
        color: "90,110,60",
        title: "Recommendation 29 — FIU Establishment & Operations",
        content: "R.29 mandates that countries establish an independent, adequately resourced FIU with the legal authority and operational autonomy to receive, analyse, and disseminate financial intelligence. 91% of Europe II jurisdictions are Compliant or Largely Compliant.",
        keyPoints: [
          "Compliant jurisdictions (52%) demonstrate robust legal frameworks, extensive database access, operational and strategic analysis capacity, strong data protection, and Egmont Group membership",
          "Largely Compliant jurisdictions (39%) show gaps in centralised reporting, beneficial ownership information, and mandatory strategic analysis requirements",
          "Partially Compliant jurisdictions (9%) face insufficient human/IT resources, limited strategic analysis capacity, and constrained operational independence",
          "Key recommended actions: strengthen strategic analysis tools, enhance legal frameworks for FIU discretion, improve data security, centralise reporting, reduce staff turnover, and build institutional memory"
        ]
      },
      {
        id: "rec40",
        icon: "🤝",
        label: "Recommendation 40",
        color: "50,90,140",
        title: "Recommendation 40 — International Cooperation",
        content: "R.40 highlights the importance of timely, constructive, and reciprocal international cooperation including MLA, extradition, and information exchange. It calls for removal of legal, procedural, and practical barriers to cross-border collaboration.",
        keyPoints: [
          "65% of jurisdictions are Largely Compliant, 22% Partially Compliant, 13% Compliant, and none Non-Compliant",
          "Compliant jurisdictions maintain broad, multi-channel cooperation across FIUs, LEAs, supervisors, and judicial bodies — with no significant barriers identified",
          "Largely Compliant jurisdictions show gaps in spontaneous information sharing, incomplete legal gateways for non-counterpart exchanges, and limited cross-border cooperation for certain offence categories",
          "Partially Compliant jurisdictions face significant barriers including narrow legal mandates for cooperation, lack of formal bilateral agreements, and restrictions on sharing information with non-counterpart authorities"
        ]
      },
      {
        id: "key-actions",
        icon: "🎯",
        label: "Key Recommended Actions",
        color: "184,45,36",
        title: "Key Recommended Actions Across Themes",
        content: "The analysis identifies four priority areas for recommended action that recur across IO.6 evaluations, representing the most impactful reforms for improving effectiveness ratings.",
        keyPoints: [
          "Enhance Strategic Analysis — develop products aligned with competent authority priorities; identify trends, typologies, and red flags; consider jurisdictional risks; share with reporting entities; utilise diverse information sources",
          "Effective LEA Use of Financial Intelligence — encourage proactive use in criminal investigations; develop guidelines and methodological tools; provide specialised training; align with National Risk Assessment findings",
          "Enhance Operational Analysis — strengthen methods, data use, and systematic application; establish FIU–LEA feedback loops; ensure adequate resourcing; reduce staff turnover and preserve institutional memory",
          "Improve Suspicious Activity Reporting — engage with private sector; coordinate with competent authorities; provide targeted training and feedback; prioritise high-risk sectors; modernise electronic reporting systems"
        ]
      }
    ]
  }
];
