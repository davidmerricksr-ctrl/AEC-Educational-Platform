/* ══ TYPOLOGY REFERENCE DATA ══ */
var typologyCategories = [
  /* ── Money Laundering (8 cards + real-world cases) ── */
  {name:"Money Laundering", cards:[
    {icon:"\ud83d\udd04",bg:"#b82d24",title:"Trade-Based Money Laundering (TBML)",
     desc:"One of the most sophisticated and widely used methods globally. Criminals manipulate international trade documents and shipments to move and disguise illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Over- or under-invoicing","Phantom shipments","Multiple invoicing for the same goods","False description/quality/quantity of goods","Unusual third-country routing or free trade zones"],
     cases:[
       {title:"Lebanese Canadian Bank \u2014 $102M forfeiture for Hezbollah trade-based laundering (DOJ)",url:"https://www.justice.gov/archive/usao/nys/pressreleases/June13/LCBSettlementPR.php"},
       {title:"Altaf Khanani \u2014 Treasury designates global TBML network as transnational criminal org (Treasury)",url:"https://home.treasury.gov/news/press-releases/jl0265"},
       {title:"FATF \u2014 Trade-Based Money Laundering: Trends & Developments",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-basedmoneylaundering.html"}
     ]},
    {icon:"\ud83c\udfdb\ufe0f",bg:"#1a3a5c",title:"Professional Services & Legal Sector",
     desc:"Misuse of lawyers, accountants, and company formation agents to layer and legitimise criminal proceeds through client accounts and complex structures. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Unusual cash payments for professional fees","Misuse of client trust accounts","Rapid creation and dissolution of companies/trusts","Requests for offshore structures with no legitimate business reason"],
     cases:[
       {title:"Panama Papers \u2014 Four charged over global tax evasion via Mossack Fonseca (DOJ)",url:"https://www.justice.gov/archives/opa/pr/four-defendants-charged-panama-papers-investigation-their-roles-panamanian-based-global-law"},
       {title:"Danske Bank \u2014 $2B fraud conspiracy through Estonian branch (DOJ)",url:"https://www.justice.gov/usao-sdny/pr/danske-bank-pleads-guilty-fraud-us-banks-multi-billion-dollar-scheme-access-us"},
       {title:"NCA \u2014 Professional enablers of money laundering",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/money-laundering-and-illicit-finance"}
     ]},
    {icon:"\u20bf",bg:"#18725f",title:"Crypto & Virtual Asset Laundering",
     desc:"Using cryptocurrencies, mixers, chain-hopping, and privacy coins to obscure the origin of illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Rapid fiat-to-crypto conversions","Use of mixing/tumbling services","High-volume small transactions across wallets","NFTs or digital assets used as stores of value"],
     cases:[
       {title:"Hydra Market \u2014 Shutdown of largest darknet marketplace (DOJ)",url:"https://www.justice.gov/archives/opa/pr/justice-department-investigation-leads-shutdown-largest-online-darknet-marketplace"},
       {title:"BitConnect \u2014 Director sentenced for $2.4B crypto fraud (DOJ)",url:"https://www.justice.gov/archives/opa/pr/director-bitconnect-sentenced-38-months-prison"},
       {title:"Silk Road \u2014 Ross Ulbricht sentenced for operating darknet market (DOJ)",url:"https://www.justice.gov/usao-sdny/pr/ross-ulbricht-aka-dread-pirate-roberts-sentenced-manhattan-federal-court-life-prison"}
     ]},
    {icon:"\ud83c\udfb0",bg:"#b07d1e",title:"Gambling & Casino Laundering",
     desc:"Buying casino chips with dirty cash, minimal gambling, then cashing out as \u2018winnings\u2019 \u2014 including junket operators. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Large cash buy-ins with quick cash-outs","Minimal actual play time","Purchasing winning tickets from others","Cross-border junket activity"],
     cases:[
       {title:"Wynn Las Vegas \u2014 $35.5M FinCEN penalty for AML failures (FinCEN)",url:"https://www.fincen.gov/news/news-releases/fincen-assesses-355-million-penalty-against-wynn-las-vegas-llc"},
       {title:"Tinian Dynasty Casino \u2014 $75M FinCEN penalty for facilitating laundering (FinCEN)",url:"https://www.fincen.gov/news/news-releases/fincen-fines-tinian-dynasty-hotel-casino-75-million-significant-anti-money"},
       {title:"FATF \u2014 Vulnerabilities of casinos & gaming sector",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Vulnerabilitiesofcasinosandgamingsector.html"}
     ]},
    {icon:"\ud83d\uddbc\ufe0f",bg:"#b82d24",title:"Art, Antiques & Cultural Property",
     desc:"Using high-value art, antiques and collectibles to store and move value anonymously through private sales and freeports. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
     flags:["Transactions via third-party agents","Significant over-/undervaluation","Storage in freeports or bonded warehouses","Private sales with limited documentation"],
     cases:[
       {title:"1MDB \u2014 US seeks $540M+ in art, real estate & other assets from corruption (DOJ)",url:"https://www.justice.gov/archives/opa/pr/united-states-seeks-recover-approximately-540-million-obtained-corruption-involving-malaysian"},
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
       {title:"DOJ \u2014 Unlicensed hawala network dismantled, $3.6M seized",url:"https://www.justice.gov/archives/opa/pr/four-individuals-charged-operating-unlicensed-money-transmitting-business"},
       {title:"FATF \u2014 Role of hawala and similar service providers in ML/TF",url:"https://www.fatf-gafi.org/en/publications/Methodsandtrends/Role-hawalas-in-ml-tf.html"},
       {title:"FinCEN \u2014 Advisory on informal value transfer systems",url:"https://www.fincen.gov/resources/advisories"}
     ]}
  ]},
  /* ── Fraud (8 cards + real-world cases) ── */
  {name:"Fraud", cards:[
    {icon:"\ud83c\udd94",bg:"#b82d24",title:"Identity & Synthetic Identity Fraud",
     desc:"Using stolen personal data or fabricated \u2018Frankenstein\u2019 identities to open accounts, apply for credit, insurance, or services.",
     flags:["Unusual application patterns","Mismatched personal details","High-volume applications from new identities","Synthetic data combinations bypassing KYC"],
     examples:["Fraudster combines a real stolen SSN with a fabricated name and DOB to build a \u2018Frankenstein\u2019 credit profile over months","A ring opens 50+ bank accounts using synthetic IDs generated with AI-produced fake driver\u2019s licences","Stolen child\u2019s identity used to build credit history undetected for years"],
     cases:[
       {title:"DOJ \u2014 Synthetic identity bank fraud \u2014 300+ fake IDs discovered (DOJ WDNC)",url:"https://www.justice.gov/usao-wdnc/pr/south-carolina-man-sentenced-two-years-synthetic-id-bank-fraud"},
       {title:"DOJ \u2014 700 synthetic identities used to steal $3M+ from banks & COVID relief (DOJ SDFL)",url:"https://www.justice.gov/usao-sdfl/pr/two-men-who-allegedly-used-synthetic-identities-existing-shell-companies-and-prior-0"},
       {title:"FBI \u2014 IC3 2024 Annual Report \u2014 $16.6B total losses, identity fraud rising (FBI)",url:"https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf"}
     ]},
    {icon:"\ud83d\udd11",bg:"#1a3a5c",title:"Account Takeover Fraud",
     desc:"Criminals hijack existing bank, mobile, retail, or insurance accounts using phishing, SIM swap, or credential stuffing.",
     flags:["Sudden changes to contact details","Unrecognised logins or device changes","SIM swap attempts","Rapid password resets followed by large transfers"],
     examples:["Victim\u2019s phone number ported to a new SIM; attacker resets banking passwords and drains the account in minutes","Credential-stuffing bot tries leaked email/password combos against 200+ banking sites overnight","Phishing email mimics a bank\u2019s MFA page, capturing the one-time code in real time to log in"],
     cases:[
       {title:"FBI \u2014 SIM swapping advisory \u2014 $262M+ in losses reported (FBI IC3)",url:"https://www.ic3.gov/PSA/2024/PSA240911"},
       {title:"FBI \u2014 Generative AI used to facilitate financial fraud (FBI IC3 PSA)",url:"https://www.ic3.gov/PSA/2024/PSA241203"},
       {title:"FBI \u2014 2024 Internet Crime Report \u2014 record $16.6B losses (FBI)",url:"https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report"}
     ]},
    {icon:"\ud83d\udcb8",bg:"#18725f",title:"Authorised Push Payment (APP) Scams",
     desc:"Victims are tricked into voluntarily transferring money to fraudsters \u2014 the fastest-growing and highest-harm fraud type in the UK.",
     flags:["Investment or romance scams","Fake invoice or purchase requests","Courier or police impersonation","Payment diversion via spoofed emails"],
     examples:["Caller impersonates bank\u2019s fraud team, convinces victim to \u2018move money to a safe account\u2019 \u2014 which is the criminal\u2019s","Spoofed email from a solicitor changes completion payment details on a house purchase","Fake HMRC officer threatens arrest unless victim makes an immediate bank transfer"],
     cases:[
       {title:"UK PSR \u2014 Mandatory APP fraud reimbursement rules effective Oct 2024 (PSR)",url:"https://www.psr.org.uk/our-work/app-scams/"},
       {title:"UK Finance \u2014 Annual Fraud Report \u2014 APP scam trends & data (UK Finance)",url:"https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications/annual-fraud-report"},
       {title:"FCA \u2014 Warning list of unauthorised firms and scam activity (FCA)",url:"https://www.fca.org.uk/scamsmart/warning-list"}
     ]},
    {icon:"\ud83d\udce7",bg:"#b07d1e",title:"Business Email Compromise (BEC) / CEO Fraud",
     desc:"Spoofed emails impersonating executives or suppliers to trick staff into authorising large payments or changing account details.",
     flags:["Urgent payment requests from spoofed domains","Requests to change supplier bank details","Executive impersonation under pressure"],
     examples:["CFO receives email from \u2018CEO\u2019 during overseas trip requesting urgent wire to new account; domain is one letter off","Supplier\u2019s email hacked; fake invoice with updated bank details sent to accounts payable","Threat actor monitors email thread for weeks, then inserts fraudulent payment instructions at the right moment"],
     cases:[
       {title:"FBI IC3 \u2014 BEC: The $55 Billion Scam \u2014 global BEC losses advisory (IC3)",url:"https://www.ic3.gov/PSA/2024/PSA240911"},
       {title:"FBI \u2014 IC3 2024 Report: BEC caused $2.77B in losses in 2024 alone (FBI)",url:"https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report"},
       {title:"Europol \u2014 BEC fraud: how it works and how to prevent it (Europol)",url:"https://www.europol.europa.eu/crime-areas-and-statistics/crime-areas/economic-crime/online-fraud"}
     ]},
    {icon:"\u2764\ufe0f",bg:"#b82d24",title:"Romance & Investment Scams",
     desc:"Fraudsters build fake relationships or promote fake investment opportunities to extract money or turn victims into money mules.",
     flags:["Rapid escalation to financial requests","Crypto or \u2018high-return\u2019 investment platforms","Pig butchering variants","Pressure to act quickly"],
     examples:["\u2018Pig butchering\u2019: scammer cultivates an online relationship for weeks, then introduces a \u2018guaranteed\u2019 crypto trading platform that shows fake profits","Instagram ad promotes an FCA-clone investment firm; victims see fabricated returns on a dashboard before being asked for larger deposits","Romance scammer asks victim to receive and forward parcels containing fraudulently purchased goods"],
     cases:[
       {title:"FBI \u2014 Operation Level Up: 4,300+ crypto fraud victims identified, $286M saved (FBI)",url:"https://www.fbi.gov/news/press-releases/fbi-releases-annual-internet-crime-report"},
       {title:"FBI IC3 \u2014 Investment fraud topped $6.57B in 2024 losses (IC3)",url:"https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf"},
       {title:"DOJ \u2014 Pig butchering crypto fraud networks dismantled (DOJ)",url:"https://www.justice.gov/criminal/criminal-fraud/case/related-enforcement-actions/2024"}
     ]},
    {icon:"\ud83d\udcb3",bg:"#1a3a5c",title:"Card-Not-Present (CNP) Fraud",
     desc:"Using stolen card details for online, phone, or mail-order purchases without the physical card present.",
     flags:["Unusual online spending patterns","High-value purchases from new devices","Frequent small test transactions"],
     examples:["Stolen card data from a breach used to buy gift cards online; gift cards immediately resold for cash","Fraudster places \u00a30.50 test charges on hundreds of cards to identify active ones, then makes bulk high-value orders","Phished card details loaded into a digital wallet and used for contactless tap-to-pay at retailers"],
     cases:[
       {title:"FBI IC3 \u2014 Credit card & check fraud: $200M+ losses in 2024 (IC3)",url:"https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf"},
       {title:"Europol \u2014 E-commerce fraud and card-not-present threats (Europol)",url:"https://www.europol.europa.eu/crime-areas-and-statistics/crime-areas/economic-crime/online-fraud"},
       {title:"UK Finance \u2014 Card fraud data and prevention measures (UK Finance)",url:"https://www.ukfinance.org.uk/policy-and-guidance/reports-and-publications/annual-fraud-report"}
     ]},
    {icon:"\ud83e\uddd1\u200d\ud83d\udcbc",bg:"#18725f",title:"Insider & Employee Fraud",
     desc:"Staff abusing their position to commit fraud, steal data, or facilitate external crime.",
     flags:["Unexplained expenses or payroll changes","Access to sensitive systems outside normal hours","Sudden lifestyle changes by employees"],
     examples:["Payroll clerk adds ghost employees and diverts salaries to personal accounts over several years","Branch manager overrides transaction limits to process fraudulent loans for associates, earning kickbacks","IT administrator exports client database and sells records to a competitor via an encrypted channel"],
     cases:[
       {title:"ACFE \u2014 Report to the Nations: occupational fraud costs 5% of revenue annually (ACFE)",url:"https://www.acfe.com/fraud-resources/reports-to-the-nations"},
       {title:"DOJ \u2014 2024 Fraud Section Year in Review \u2014 record $2.3B in corporate resolutions (DOJ)",url:"https://www.justice.gov/criminal/criminal-fraud/case/related-enforcement-actions/2024"},
       {title:"NCA \u2014 Fraud threats including insider risk overview (NCA)",url:"https://www.nationalcrimeagency.gov.uk/what-we-do/crime-threats/fraud"}
     ]},
    {icon:"\ud83e\udd16",bg:"#b07d1e",title:"AI-Powered & Emerging Fraud",
     desc:"Deepfakes, voice cloning, automated phishing, and AI-generated documents accelerating almost all other fraud types.",
     flags:["Realistic deepfake video calls","AI-generated documents or voice clones","Automated large-scale phishing campaigns"],
     examples:["Deepfake video call impersonates a CFO instructing finance staff to wire $25M to a new account","AI voice clone replicates a CEO\u2019s voice to authorise an urgent payment over the phone","GPT-generated phishing emails with perfect grammar and personalisation sent to 50,000 targets in minutes"],
     cases:[
       {title:"FBI IC3 \u2014 Criminals use generative AI to facilitate financial fraud (IC3 PSA)",url:"https://www.ic3.gov/PSA/2024/PSA241203"},
       {title:"Europol \u2014 Facing reality: law enforcement and the challenge of deepfakes (Europol)",url:"https://www.europol.europa.eu/publications-events/publications/facing-reality-law-enforcement-and-challenge-of-deepfakes"},
       {title:"FATF \u2014 Opportunities & challenges of new technologies for AML/CFT (FATF)",url:"https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Opportunities-challenges-new-technologies-for-aml-cft.html"}
     ]}
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
