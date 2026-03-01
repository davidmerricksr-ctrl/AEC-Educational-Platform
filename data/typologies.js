class TypologyCard {
    constructor({ icon, bg, title, desc, flags }) {
        this.icon=icon;this.bg=bg;this.title=title;this.desc=desc;this.flags=flags;
    }
}
class TypologyCategory {
    constructor({ name, cards }) { this.name=name;this.cards=cards; }
}
const typologyCategories = [
    new TypologyCategory({ name:"Money Laundering", cards:[
        new TypologyCard({ icon:"🏦",bg:"rgba(26,58,92,.08)",title:"Smurfing / Structuring",desc:"Breaking large sums into deposits below reporting thresholds. FinCEN identifies structuring as one of the most commonly reported suspicious activities in US SAR filings.",flags:["Multiple deposits just below $10,000","Numerous accounts under different names","Rapid movement between accounts"] }),
        new TypologyCard({ icon:"🏢",bg:"rgba(192,57,43,.06)",title:"Shell Companies",desc:"Creating fictitious companies with no genuine activity to obscure beneficial ownership. DOJ cases frequently feature networks of shell entities across jurisdictions.",flags:["Companies with no physical presence","Complex cross-jurisdictional ownership","Transactions inconsistent with business purpose"] }),
        new TypologyCard({ icon:"🔄",bg:"rgba(26,107,90,.07)",title:"Trade-Based Laundering",desc:"Manipulating trade invoices to transfer value across borders. The US Treasury has identified trade-based laundering as a primary money laundering methodology.",flags:["Invoice values deviating from market norms","Goods to/from high-risk jurisdictions","Repeated transactions with same counterparties"] }),
        new TypologyCard({ icon:"💱",bg:"rgba(200,144,46,.07)",title:"Currency Exchange Exploitation",desc:"Using MSBs, exchanges, or crypto platforms to convert and move illicit funds, exploiting regulatory gaps between jurisdictions and asset classes.",flags:["Frequent large cash-to-crypto conversions","Multiple exchanges across jurisdictions","Use of mixing services or privacy coins"] })
    ]}),
    new TypologyCategory({ name:"Fraud", cards:[
        new TypologyCard({ icon:"📧",bg:"rgba(192,57,43,.06)",title:"Business Email Compromise",desc:"Criminals impersonate executives via compromised or spoofed emails to instruct urgent payments. FBI IC3 reports BEC caused over $2.9 billion in losses in 2023.",flags:["Urgent payment requests from leadership","Slight email address variations","Requests to bypass approval processes"] }),
        new TypologyCard({ icon:"🎭",bg:"rgba(26,58,92,.08)",title:"Identity Fraud",desc:"Using stolen, fabricated, or synthetic identities to open accounts or commit financial crimes. Increasingly sophisticated with deepfakes and AI-generated documents.",flags:["Documents that don't match across databases","Rapid account opening across institutions","Synthetic identities mixing real and fake data"] }),
        new TypologyCard({ icon:"📈",bg:"rgba(26,107,90,.07)",title:"Investment & Ponzi Schemes",desc:"Fraudulent schemes promising high returns with little risk. The SEC and DOJ have prosecuted numerous cases where new investor funds pay existing investors.",flags:["Returns consistently above market rates","Difficulty withdrawing funds","Unregistered products or advisors"] }),
        new TypologyCard({ icon:"🏥",bg:"rgba(200,144,46,.07)",title:"Insurance & Benefits Fraud",desc:"Filing false or inflated claims. DOJ healthcare fraud enforcement alone recovers billions annually through the False Claims Act.",flags:["Claims inconsistent with history","Multiple claims in short succession","Staged incidents or exaggerated injuries"] })
    ]}),
    new TypologyCategory({ name:"Bribery & Corruption", cards:[
        new TypologyCard({ icon:"💼",bg:"rgba(192,57,43,.06)",title:"Facilitation Payments & FCPA",desc:"Bribes to foreign officials for business advantages. The DOJ and SEC enforce the Foreign Corrupt Practices Act, which has resulted in over $31 billion in penalties since 1977.",flags:["Unexplained 'consulting fees'","Payments to officials via intermediaries","Contracts awarded without competition"] }),
        new TypologyCard({ icon:"🏛️",bg:"rgba(26,58,92,.08)",title:"Political Corruption",desc:"Misuse of public office for private gain. The DOJ Public Integrity Section is the nation's primary federal prosecutor of government corruption.",flags:["Unexplained official wealth","Contracts to politically connected parties","Lack of procurement transparency"] }),
        new TypologyCard({ icon:"🤝",bg:"rgba(26,107,90,.07)",title:"Private Sector Bribery",desc:"Offering or accepting inducements in commercial transactions — kickbacks, secret commissions, and gifts designed to influence business decisions.",flags:["Lavish gifts to procurement officials","Third-party agents in weak governance areas","Unusual commission structures"] })
    ]}),
    new TypologyCategory({ name:"Cyber-Enabled Crime", cards:[
        new TypologyCard({ icon:"🎣",bg:"rgba(192,57,43,.06)",title:"Phishing & Social Engineering",desc:"Deceptive communications tricking people into revealing information. As Get Safe Online and the FBI warn, these attacks grow more targeted each year.",flags:["Urgent or threatening language","Links mimicking legitimate sites","Requests for passwords or financial details"] }),
        new TypologyCard({ icon:"🔐",bg:"rgba(26,58,92,.08)",title:"Ransomware",desc:"Malware encrypting data with ransom demands in cryptocurrency. FBI IC3 and CISA report escalating attacks on critical infrastructure, healthcare, and government systems.",flags:["Unexpected system lockouts","Ransom demands in cryptocurrency","Unusual network activity or data exfiltration"] }),
        new TypologyCard({ icon:"💳",bg:"rgba(200,144,46,.07)",title:"Payment & Card Fraud",desc:"Unauthorised use of card details from breaches or skimming. FBI IC3 data shows payment fraud among the fastest-growing cyber crime categories.",flags:["Transactions in unusual locations","Rapid card-not-present transactions","Small 'test' charges then larger ones"] })
    ]}),
    new TypologyCategory({ name:"Terrorist Financing", cards:[
        new TypologyCard({ icon:"🌐",bg:"rgba(192,57,43,.06)",title:"Abuse of Charitable Organisations",desc:"Exploiting charity structures to fund terrorism. The US Treasury has designated numerous entities under Executive Order 13224 for charity-based terrorist financing.",flags:["Funds diverted to conflict zones","Lack of transparency in allocation","Minimal legitimate charitable activities"] }),
        new TypologyCard({ icon:"💰",bg:"rgba(26,58,92,.08)",title:"Informal Value Transfer",desc:"Using hawala networks to move money without formal banking. FinCEN advisories highlight these systems as high-risk for terrorist financing and sanctions evasion.",flags:["Large cash transactions without business purpose","Counterpart transactions in high-risk areas","No formal records or paper trail"] }),
        new TypologyCard({ icon:"📱",bg:"rgba(26,107,90,.07)",title:"Digital Platform Exploitation",desc:"Using crowdfunding, crypto, and encrypted messaging to raise and move funds. The US Treasury has identified growing virtual asset exploitation for terrorist financing.",flags:["Crowdfunding with vague purposes","Crypto to designated-entity wallets","Coordinated small donations"] })
    ]})
];
