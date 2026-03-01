class Competency {
    constructor({ icon, title, brief, detail, certs }) {
        this.icon = icon; this.title = title; this.brief = brief; this.detail = detail; this.certs = certs || [];
    }
}
const competencies = [
    new Competency({ icon:"🔎", title:"Know Your Customer (KYC)", brief:"Verifying the identity of clients to prevent crime.", detail:"KYC is the process financial institutions use to verify customers' identities, assess risk profiles, and understand financial activities. It involves collecting ID documents, verifying addresses, screening against sanctions lists, and establishing source of funds. FinCEN requires all US financial institutions to implement robust KYC programmes under the Bank Secrecy Act.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Certificate in KYC & CDD",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"}
    ]}),
    new Competency({ icon:"⚖️", title:"Anti-Money Laundering (AML)", brief:"Policies and controls to detect and prevent money laundering.", detail:"AML refers to laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained money as legitimate income. This includes transaction monitoring, filing SARs, maintaining records, and staff training. The Bank Secrecy Act and successive US legislation form the backbone of AML compliance globally.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"ICA Diploma in AML",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"},
        {name:"ABA BSA/AML Certificate",org:"ABA",url:"https://www.aba.com/training-events/online-training/aml-fraud-professionals-certificates"},
        {name:"AMLFC Certification",org:"AMLFC Institute",url:"https://amlfc.institute"}
    ]}),
    new Competency({ icon:"📊", title:"Transaction Monitoring", brief:"Detecting suspicious patterns in financial transactions.", detail:"Transaction monitoring involves systematic review of customer transactions to detect patterns indicating money laundering, terrorist financing, or fraud. Modern systems use rules-based triggers alongside machine learning to identify anomalies across millions of data points. Balancing detection sensitivity with false positive management is a core challenge.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"FCA Certificate Program",org:"Financial Crime Academy",url:"https://financialcrimeacademy.org/"}
    ]}),
    new Competency({ icon:"🛡️", title:"Sanctions Screening", brief:"Checking transactions and customers against sanctions lists.", detail:"Sanctions screening checks customers, transactions, and counterparties against lists maintained by OFAC (US), the UN, EU, and HM Treasury (UK). Screening must occur at onboarding, during transactions, and continuously. OFAC can impose severe civil penalties — sometimes hundreds of millions of dollars — for violations.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Specialist Certificate in Sanctions",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"}
    ]}),
    new Competency({ icon:"📝", title:"Suspicious Activity Reporting", brief:"Filing reports when potential financial crime is identified.", detail:"When a regulated organisation suspects financial crime, it must file a SAR with the relevant FIU — FinCEN in the US, the NCA in the UK. SARs are a critical intelligence source for law enforcement. FinCEN receives over 4 million SARs annually, making the US SAR database the largest financial intelligence repository in the world.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ABA BSA/AML Certificate",org:"ABA",url:"https://www.aba.com/training-events/online-training/aml-fraud-professionals-certificates"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"}
    ]}),
    new Competency({ icon:"🌍", title:"Risk Assessment", brief:"Evaluating exposure to financial crime threats.", detail:"Risk assessment identifies, evaluates, and prioritises money laundering, terrorist financing, and fraud risks. It analyses customer types, product vulnerabilities, geographic exposure, and transaction volumes. The US Treasury publishes National Money Laundering and Terrorist Financing Risk Assessments to guide industry efforts.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Certificate in Financial Crime Prevention",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"FCA Certificate Program",org:"Financial Crime Academy",url:"https://financialcrimeacademy.org/"}
    ]}),
    new Competency({ icon:"🧩", title:"Due Diligence", brief:"Investigating business relationships and transactions.", detail:"Due diligence goes beyond basic KYC to investigate the nature and purpose of business relationships. Enhanced Due Diligence (EDD) is required for higher-risk situations — PEPs, complex structures, or high-risk jurisdictions. The CDD Rule (31 CFR 1010.230) requires financial institutions to identify and verify beneficial owners.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Certificate in KYC & CDD",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"},
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"}
    ]}),
    new Competency({ icon:"💻", title:"Cyber Crime Awareness", brief:"Understanding digital threats to financial security.", detail:"Cybercrime includes phishing, ransomware, BEC, payment fraud, and identity theft. As Get Safe Online and the FBI warn, these attacks grow more targeted each year. FBI IC3 reported record losses from cyber-enabled fraud, with criminals increasingly exploiting AI and cryptocurrency.", certs:[
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"Crypto Compliance Specialization",org:"ACFCS",url:"https://www.acfcs.org/training-overview"},
        {name:"ICA Specialist Certificate in Evolving Risks in FinCrime Technology",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"}
    ]}),
    new Competency({ icon:"📜", title:"Regulatory Compliance", brief:"Adhering to laws governing financial crime.", detail:"Compliance involves implementing requirements set by authorities such as FinCEN, the SEC, FCA (UK), and EBA (EU). Key laws include the Bank Secrecy Act, USA PATRIOT Act, Anti-Money Laundering Act of 2020, and EU AML Directives. Non-compliance can result in billions in fines and criminal prosecution.", certs:[
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Diploma in Governance, Risk & Compliance",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/governance-risk-compliance/"},
        {name:"ABA BSA/AML Certificate",org:"ABA",url:"https://www.aba.com/training-events/online-training/aml-fraud-professionals-certificates"},
        {name:"AMLFC Certification",org:"AMLFC Institute",url:"https://amlfc.institute"}
    ]}),
    new Competency({ icon:"🔗", title:"Supply Chain Integrity", brief:"Ensuring supply chains are free from exploitation.", detail:"As the Slave Free Alliance highlights, modern slavery can be embedded in global supply chains. The US State Department's TIP Report ranks countries on anti-trafficking efforts. The Uyghur Forced Labor Prevention Act (UFLPA) requires importers to prove goods are not made with forced labour — US Customs detained $1.42 billion in shipments in 2023.", certs:[
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"ICA Certificate in Financial Crime Prevention",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"}
    ]}),
    new Competency({ icon:"🧠", title:"Financial Intelligence Analysis", brief:"Analysing data to uncover criminal networks.", detail:"Financial intelligence analysis examines transaction records, SARs, and other data to identify criminal patterns. Analysts use link analysis, network mapping, and statistical modelling. FinCEN's 314(a) and 314(b) programmes enable information sharing between government and the private sector to trace criminal finances.", certs:[
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"Middlebury FCM Certificate",org:"Middlebury Institute",url:"https://www.middlebury.edu/institute/academics/additional-programs/certificates/financial-crime"},
        {name:"FCA Certificate Program",org:"Financial Crime Academy",url:"https://financialcrimeacademy.org/"}
    ]}),
    new Competency({ icon:"🤝", title:"Public-Private Partnerships", brief:"Cross-sector collaboration against financial crime.", detail:"Effective prevention relies on collaboration between government, law enforcement, and the private sector. Initiatives like FinCEN Exchange, the UK's JMLIT, and the BSA Advisory Group enable intelligence exchange and coordinated responses to emerging threats across institutional boundaries.", certs:[
        {name:"CFCS",org:"ACFCS",url:"https://www.acfcs.org/certification-overview"},
        {name:"CAMS",org:"ACAMS",url:"https://www.acams.org/en/certifications/certified-anti-money-laundering-specialist"},
        {name:"ICA Diploma in Financial Crime Prevention",org:"ICA",url:"https://www.int-comp.org/learn-and-develop/subject-areas/financial-crime-prevention/"}
    ]})
];
