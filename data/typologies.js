/* ══ TYPOLOGY REFERENCE DATA ══ */
var typologyCategories = [
  /* ── Money Laundering (8 cards + real-world cases) ── */
  {name:"Money Laundering", cards:[
    {icon:"\ud83d\udd04",bg:"#b82d24",title:"Trade-Based Money Laundering (TBML)",
     desc:"One of the most sophisticated and widely used methods globally. Criminals manipulate international trade documents and shipments to move and disguise illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Over- or under-invoicing","Phantom shipments","Multiple invoicing for the same goods","False description/quality/quantity of goods","Unusual third-country routing or free trade zones"],
     cases:[
       {title:"Lebanese Canadian Bank \u2014 $102M forfeiture for Hezbollah trade-based laundering (DOJ)",url:"https://www.justice.gov/opa/pr/lebanese-canadian-bank-sal-agrees-forfeiture-102-million"},
       {title:"Altaf Khanani \u2014 Global TBML network leader sentenced (DOJ)",url:"https://www.justice.gov/opa/pr/leader-global-money-laundering-network-pleads-guilty"},
       {title:"FATF \u2014 Trade-Based Money Laundering: Trends & Developments",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-basedmoneylaundering.html"}
     ]},
    {icon:"\ud83c\udfdb\ufe0f",bg:"#1a3a5c",title:"Professional Services & Legal Sector",
     desc:"Misuse of lawyers, accountants, and company formation agents to layer and legitimise criminal proceeds through client accounts and complex structures. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Unusual cash payments for professional fees","Misuse of client trust accounts","Rapid creation and dissolution of companies/trusts","Requests for offshore structures with no legitimate business reason"],
     cases:[
       {title:"Panama Papers \u2014 Four charged over global tax evasion via Mossack Fonseca (DOJ)",url:"https://www.justice.gov/usao-sdny/pr/four-defendants-charged-connection-panama-papers-global-tax-evasion-scheme"},
       {title:"Danske Bank \u2014 $2B fraud conspiracy through Estonian branch (DOJ)",url:"https://www.justice.gov/opa/pr/danske-bank-pleads-guilty-fraud-conspiracy"},
       {title:"NCA \u2014 Professional enablers of money laundering",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance"}
     ]},
    {icon:"\u20bf",bg:"#18725f",title:"Crypto & Virtual Asset Laundering",
     desc:"Using cryptocurrencies, mixers, chain-hopping, and privacy coins to obscure the origin of illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Rapid fiat-to-crypto conversions","Use of mixing/tumbling services","High-volume small transactions across wallets","NFTs or digital assets used as stores of value"],
     cases:[
       {title:"Hydra Market \u2014 Shutdown of largest darknet marketplace (DOJ)",url:"https://www.justice.gov/opa/pr/justice-department-investigation-leads-shutdown-largest-online-darknet-marketplace"},
       {title:"BitConnect \u2014 Director sentenced for $2.4B crypto fraud (DOJ)",url:"https://www.justice.gov/opa/pr/director-bitconnect-sentenced-38-months-prison"},
       {title:"Silk Road \u2014 Ross Ulbricht sentenced for operating darknet market (DOJ)",url:"https://www.justice.gov/usao-sdny/pr/ross-ulbricht-aka-dread-pirate-roberts-sentenced-manhattan-federal-court-life-prison"}
     ]},
    {icon:"\ud83c\udfb0",bg:"#b07d1e",title:"Gambling & Casino Laundering",
     desc:"Buying casino chips with dirty cash, minimal gambling, then cashing out as \u2018winnings\u2019 \u2014 including junket operators. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Large cash buy-ins with quick cash-outs","Minimal actual play time","Purchasing winning tickets from others","Cross-border junket activity"],
     cases:[
       {title:"Wynn Las Vegas \u2014 $35.5M FinCEN penalty for AML failures (FinCEN)",url:"https://www.fincen.gov/news/news-releases/fincen-assesses-355-million-penalty-against-wynn-las-vegas-llc"},
       {title:"Tinian Dynasty Casino \u2014 $75M FinCEN penalty for facilitating laundering (FinCEN)",url:"https://www.fincen.gov/news/news-releases/fincen-fines-tinian-dynasty-hotel-casino-75-million-significant-anti-money"},
       {title:"FATF \u2014 Vulnerabilities of casinos & gaming sector",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Vulnerabilities-casinos.html"}
     ]},
    {icon:"\ud83d\uddbc\ufe0f",bg:"#b82d24",title:"Art, Antiques & Cultural Property",
     desc:"Using high-value art, antiques and collectibles to store and move value anonymously through private sales and freeports. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Transactions via third-party agents","Significant over-/undervaluation","Storage in freeports or bonded warehouses","Private sales with limited documentation"],
     cases:[
       {title:"1MDB \u2014 US seeks $540M+ in art, real estate & other assets from corruption (DOJ)",url:"https://www.justice.gov/opa/pr/united-states-seeks-recover-approximately-540-million-obtained-corruption-involving-malaysian"},
       {title:"Subhash Kapoor \u2014 Stolen antiquities trafficking network (FBI)",url:"https://www.fbi.gov/news/stories/stolen-art-and-antiquities-returned-to-countries-of-origin"},
       {title:"FATF \u2014 Money laundering in the art & antiquities market",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Money-Laundering-Terrorist-Financing-Art-Antiquities-Market.html"}
     ]},
    {icon:"\ud83d\udc65",bg:"#1a3a5c",title:"Money Mules & Structuring",
     desc:"Recruiting individuals to receive and forward funds in small amounts to avoid detection thresholds (smurfing/structuring). \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Unexplained funds into personal accounts","Immediate onward transfers overseas","Job offers requiring use of personal bank accounts","Multiple deposits just below reporting limits"],
     cases:[
       {title:"European Money Mule Action (EMMA) \u2014 474 mules identified across Europe (Europol)",url:"https://www.europol.europa.eu/media-press/newsroom/news/european-money-mule-action-leads-to-identification-of-474-money-mules"},
       {title:"NCA \u2014 Money mule enforcement & awareness campaigns",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance"},
       {title:"FinCEN \u2014 Advisory on structuring transactions to evade reporting",url:"https://www.fincen.gov/resources/advisories/fincen-advisory-fin-2014-a005"}
     ]},
    {icon:"\ud83c\udfe0",bg:"#18725f",title:"Real Estate Laundering",
     desc:"Purchasing property with criminal proceeds, often using shell companies, cash components, or rapid flipping. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Cash elements in purchases","Opaque corporate ownership","Rapid buy-and-sell with unexplained profit","Buyers with no obvious connection to the property"],
     cases:[
       {title:"FinCEN \u2014 Geographic Targeting Orders for all-cash real estate purchases",url:"https://www.fincen.gov/news/news-releases/fincen-renews-and-expands-real-estate-geographic-targeting-orders"},
       {title:"Zamira Hajiyeva \u2014 UK\u2019s first Unexplained Wealth Order on \u00a311.5M property (NCA)",url:"https://www.nationalcrimeagency.gov.uk/news/first-unexplained-wealth-order-upheld-by-supreme-court"},
       {title:"Transparency International \u2014 Faulty Towers: UK property & corruption",url:"https://www.transparency.org.uk/publications/faulty-towers-understanding-impact-overseas-corruption-london-property-market"}
     ]},
    {icon:"\ud83c\udf0d",bg:"#b07d1e",title:"Alternative Remittance Systems (Hawala)",
     desc:"Informal value transfer networks that move money across borders outside traditional banking systems. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Large value transfers with minimal documentation","Settlement through goods or trade","Ethnic/family/community-based networks"],
     cases:[
       {title:"DOJ \u2014 Unlicensed hawala network dismantled, $3.6M seized",url:"https://www.justice.gov/opa/pr/four-individuals-charged-operating-unlicensed-money-transmitting-business"},
       {title:"FATF \u2014 Role of hawala and similar service providers in ML/TF",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Role-hawalas-in-ml-tf.html"},
       {title:"FinCEN \u2014 Advisory on informal value transfer systems",url:"https://www.fincen.gov/resources/advisories"}
     ]}
  ]},
  /* ── Fraud ── */
  {name:"Fraud", cards:[
    {icon:"\ud83d\udce7",bg:"rgba(192,57,43,.06)",title:"Business Email Compromise",
     desc:"Criminals impersonate executives via compromised or spoofed emails to instruct urgent payments. FBI IC3 reports BEC caused over $2.9 billion in losses in 2023.",
     flags:["Urgent payment requests from leadership","Slight email address variations","Requests to bypass approval processes"]},
    {icon:"\ud83c\udfad",bg:"rgba(26,58,92,.08)",title:"Identity Fraud",
     desc:"Using stolen, fabricated, or synthetic identities to open accounts or commit financial crimes. Increasingly sophisticated with deepfakes and AI-generated documents.",
     flags:["Documents that don\u2019t match across databases","Rapid account opening across institutions","Synthetic identities mixing real and fake data"]},
    {icon:"\ud83d\udcc8",bg:"rgba(26,107,90,.07)",title:"Investment & Ponzi Schemes",
     desc:"Fraudulent schemes promising high returns with little risk. The SEC and DOJ have prosecuted numerous cases where new investor funds pay existing investors.",
     flags:["Returns consistently above market rates","Difficulty withdrawing funds","Unregistered products or advisors"]},
    {icon:"\ud83c\udfe5",bg:"rgba(200,144,46,.07)",title:"Insurance & Benefits Fraud",
     desc:"Filing false or inflated claims. DOJ healthcare fraud enforcement alone recovers billions annually through the False Claims Act.",
     flags:["Claims inconsistent with history","Multiple claims in short succession","Staged incidents or exaggerated injuries"]}
  ]},
  /* ── Bribery & Corruption ── */
  {name:"Bribery & Corruption", cards:[
    {icon:"\ud83d\udcbc",bg:"rgba(192,57,43,.06)",title:"Facilitation Payments & FCPA",
     desc:"Bribes to foreign officials for business advantages. The DOJ and SEC enforce the Foreign Corrupt Practices Act, which has resulted in over $31 billion in penalties since 1977.",
     flags:["Unexplained \u2018consulting fees\u2019","Payments to officials via intermediaries","Contracts awarded without competition"]},
    {icon:"\ud83c\udfdb\ufe0f",bg:"rgba(26,58,92,.08)",title:"Political Corruption",
     desc:"Misuse of public office for private gain. The DOJ Public Integrity Section is the nation\u2019s primary federal prosecutor of government corruption.",
     flags:["Unexplained official wealth","Contracts to politically connected parties","Lack of procurement transparency"]},
    {icon:"\ud83e\udd1d",bg:"rgba(26,107,90,.07)",title:"Private Sector Bribery",
     desc:"Offering or accepting inducements in commercial transactions \u2014 kickbacks, secret commissions, and gifts designed to influence business decisions.",
     flags:["Lavish gifts to procurement officials","Third-party agents in weak governance areas","Unusual commission structures"]}
  ]},
  /* ── Cyber-Enabled Crime ── */
  {name:"Cyber-Enabled Crime", cards:[
    {icon:"\ud83c\udfa3",bg:"rgba(192,57,43,.06)",title:"Phishing & Social Engineering",
     desc:"Deceptive communications tricking people into revealing information. As Get Safe Online and the FBI warn, these attacks grow more targeted each year.",
     flags:["Urgent or threatening language","Links mimicking legitimate sites","Requests for passwords or financial details"]},
    {icon:"\ud83d\udd10",bg:"rgba(26,58,92,.08)",title:"Ransomware",
     desc:"Malware encrypting data with ransom demands in cryptocurrency. FBI IC3 and CISA report escalating attacks on critical infrastructure, healthcare, and government systems.",
     flags:["Unexpected system lockouts","Ransom demands in cryptocurrency","Unusual network activity or data exfiltration"]},
    {icon:"\ud83d\udcb3",bg:"rgba(200,144,46,.07)",title:"Payment & Card Fraud",
     desc:"Unauthorised use of card details from breaches or skimming. FBI IC3 data shows payment fraud among the fastest-growing cyber crime categories.",
     flags:["Transactions in unusual locations","Rapid card-not-present transactions","Small \u2018test\u2019 charges then larger ones"]}
  ]},
  /* ── Terrorist Financing ── */
  {name:"Terrorist Financing", cards:[
    {icon:"\ud83c\udf10",bg:"rgba(192,57,43,.06)",title:"Abuse of Charitable Organisations",
     desc:"Exploiting charity structures to fund terrorism. The US Treasury has designated numerous entities under Executive Order 13224 for charity-based terrorist financing.",
     flags:["Funds diverted to conflict zones","Lack of transparency in allocation","Minimal legitimate charitable activities"]},
    {icon:"\ud83d\udcb0",bg:"rgba(26,58,92,.08)",title:"Informal Value Transfer",
     desc:"Using hawala networks to move money without formal banking. FinCEN advisories highlight these systems as high-risk for terrorist financing and sanctions evasion.",
     flags:["Large cash transactions without business purpose","Counterpart transactions in high-risk areas","No formal records or paper trail"]},
    {icon:"\ud83d\udcf1",bg:"rgba(26,107,90,.07)",title:"Digital Platform Exploitation",
     desc:"Using crowdfunding, crypto, and encrypted messaging to raise and move funds. The US Treasury has identified growing virtual asset exploitation for terrorist financing.",
     flags:["Crowdfunding with vague purposes","Crypto to designated-entity wallets","Coordinated small donations"]}
  ]}
];
