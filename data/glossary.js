// ═══════════════════════════════════════════════════════════════
// GLOSSARY DATA — Economic crime terminology A–Z
// ═══════════════════════════════════════════════════════════════
// To add a term:  Push a new Term({...}) to the array
// To edit/remove: Modify or delete entries directly
// Terms are auto-sorted alphabetically at render time
// ═══════════════════════════════════════════════════════════════

class Term {
    /**
     * @param {string} term - The term or acronym
     * @param {string} def  - Plain-language definition
     */
    constructor({ term, def }) {
        this.term = term;
        this.def  = def;
    }
}

const glossary = [
    new Term({ term:"AML", def:"Anti-Money Laundering — the set of laws, regulations, and procedures designed to prevent criminals from disguising illegally obtained funds as legitimate income." }),
    new Term({ term:"Bank Secrecy Act (BSA)", def:"The primary US anti-money laundering law (1970), requiring financial institutions to maintain records and file reports that help detect and prevent financial crime. Also known as the Currency and Foreign Transactions Reporting Act." }),
    new Term({ term:"Beneficial Owner", def:"The natural person who ultimately owns or controls a legal entity, or on whose behalf a transaction is conducted. The Corporate Transparency Act requires reporting of beneficial owners to FinCEN." }),
    new Term({ term:"BEC", def:"Business Email Compromise — a fraud scheme where criminals impersonate executives or trusted parties via email to trick employees into making unauthorised wire transfers or sharing sensitive data." }),
    new Term({ term:"CTR", def:"Currency Transaction Report — a report filed by US financial institutions for each cash transaction exceeding $10,000 in a single business day, as required by the BSA." }),
    new Term({ term:"CDD", def:"Customer Due Diligence — the process of verifying customer identity, understanding the nature and purpose of the business relationship, and assessing risk. Required under the FinCEN CDD Rule (31 CFR 1010.230)." }),
    new Term({ term:"Correspondent Banking", def:"An arrangement where one bank (the correspondent) holds deposits and provides services on behalf of another bank (the respondent), often across borders. A key channel monitored for money laundering risk." }),
    new Term({ term:"Corporate Transparency Act (CTA)", def:"US law (2021) requiring most companies to report beneficial ownership information to FinCEN, aimed at combating the misuse of anonymous shell companies for money laundering and other crimes." }),
    new Term({ term:"De-risking", def:"The practice of financial institutions terminating or restricting business relationships with clients or categories of clients perceived as high-risk, rather than managing the risk. Can lead to financial exclusion." }),
    new Term({ term:"EDD", def:"Enhanced Due Diligence — additional scrutiny applied to higher-risk customers, transactions, or jurisdictions. Required for PEPs, complex ownership structures, and high-risk geographies." }),
    new Term({ term:"Egmont Group", def:"A global network of 167 Financial Intelligence Units (FIUs) that facilitates international information exchange to combat money laundering and terrorist financing." }),
    new Term({ term:"FATF", def:"Financial Action Task Force — the international standard-setting body for anti-money laundering and counter-terrorist financing measures. Issues the '40 Recommendations' and maintains the grey/black lists." }),
    new Term({ term:"FCPA", def:"Foreign Corrupt Practices Act — US law (1977) prohibiting the payment of bribes to foreign government officials to obtain or retain business. Enforced by the DOJ and SEC." }),
    new Term({ term:"FinCEN", def:"Financial Crimes Enforcement Network — a bureau of the US Department of the Treasury that collects and analyses financial intelligence to combat money laundering, terrorist financing, and other financial crimes." }),
    new Term({ term:"FIU", def:"Financial Intelligence Unit — a national agency responsible for receiving, analysing, and disseminating financial intelligence from suspicious transaction reports. FinCEN is the US FIU." }),
    new Term({ term:"Front Company", def:"A legitimate business used as a cover for money laundering or other criminal activity. Unlike shell companies, front companies may have real operations but inflate or fabricate transactions." }),
    new Term({ term:"Gatekeepers", def:"Professionals such as lawyers, accountants, real estate agents, and trust and company service providers who can facilitate or prevent the misuse of the financial system for criminal purposes." }),
    new Term({ term:"Geographic Targeting Order (GTO)", def:"A FinCEN order requiring specific businesses in designated geographic areas to report certain transactions. Currently used to identify beneficial owners in all-cash real estate purchases." }),
    new Term({ term:"Grey List", def:"The FATF list of jurisdictions under increased monitoring for strategic deficiencies in their AML/CTF frameworks. Grey-listed countries commit to resolving identified deficiencies within agreed timeframes." }),
    new Term({ term:"Hawala", def:"An informal value transfer system where money is paid to an agent in one location and an equivalent amount is disbursed in another, with no physical money movement. Commonly used in South Asia, the Middle East, and Africa." }),
    new Term({ term:"Integration", def:"The third stage of money laundering, where laundered funds are reintroduced into the legitimate economy through investments, real estate purchases, luxury goods, or business ventures." }),
    new Term({ term:"KYC", def:"Know Your Customer — the process of verifying a customer's identity and assessing their risk profile before and during a business relationship. A core component of AML compliance." }),
    new Term({ term:"Layering", def:"The second stage of money laundering, involving complex layers of financial transactions designed to separate illicit funds from their source. Techniques include wire transfers, shell companies, and currency conversion." }),
    new Term({ term:"ML", def:"Money Laundering — the process of making illegally obtained money appear legitimate by moving it through a series of transactions or business operations." }),
    new Term({ term:"MSB", def:"Money Services Business — a non-bank financial institution that provides services such as money transmission, currency exchange, cheque cashing, or prepaid access. Subject to BSA registration and reporting requirements." }),
    new Term({ term:"Mule Account", def:"A bank account used to receive and transfer illicit funds on behalf of criminals. Account holders (money mules) may be witting accomplices or unwitting victims recruited through scams." }),
    new Term({ term:"Mutual Legal Assistance Treaty (MLAT)", def:"A bilateral or multilateral agreement between countries enabling the exchange of evidence and information for criminal investigations, including financial crime." }),
    new Term({ term:"OFAC", def:"Office of Foreign Assets Control — a division of the US Treasury that administers and enforces economic and trade sanctions against targeted countries, entities, and individuals." }),
    new Term({ term:"PEP", def:"Politically Exposed Person — an individual who holds or has held a prominent public function, such as a head of state, senior politician, military leader, or judicial officer. PEPs present higher corruption and money laundering risk." }),
    new Term({ term:"Placement", def:"The first stage of money laundering, where illicit cash is introduced into the financial system through deposits, purchases, or other means." }),
    new Term({ term:"Predicate Offence", def:"The underlying criminal activity that generates the proceeds which are subsequently laundered. Examples include drug trafficking, fraud, corruption, and tax evasion." }),
    new Term({ term:"Red Flag", def:"An indicator or pattern that suggests potential financial crime. Red flags prompt further investigation under AML programmes but do not by themselves confirm illegal activity." }),
    new Term({ term:"SAR", def:"Suspicious Activity Report — a report filed by financial institutions with FinCEN when a transaction is suspected of involving funds derived from illegal activity or designed to evade BSA reporting requirements." }),
    new Term({ term:"Sanctions", def:"Restrictions imposed by governments or international bodies (OFAC, UN, EU) against countries, entities, or individuals to achieve foreign policy and national security goals. Violations can carry severe civil and criminal penalties." }),
    new Term({ term:"SDD", def:"Simplified Due Diligence — reduced CDD measures permitted for customers or products assessed as lower risk. Not available in all jurisdictions or for all customer types." }),
    new Term({ term:"Shell Company", def:"A legal entity with no genuine business operations, employees, or physical presence, often used to obscure beneficial ownership and facilitate money laundering, tax evasion, or sanctions evasion." }),
    new Term({ term:"Smurfing", def:"A form of structuring where multiple individuals ('smurfs') make small deposits or transactions to avoid reporting thresholds, particularly the $10,000 CTR threshold in the US." }),
    new Term({ term:"STR", def:"Suspicious Transaction Report — the equivalent of a SAR in many jurisdictions outside the US. Filed with the local FIU when suspicious activity is detected." }),
    new Term({ term:"Structuring", def:"Deliberately breaking a transaction into smaller amounts to avoid triggering regulatory reporting thresholds. Structuring is a federal crime in the US under 31 U.S.C. § 5324, even if the underlying funds are legitimate." }),
    new Term({ term:"TF", def:"Terrorist Financing — the process of providing, collecting, or managing funds with the intention or knowledge that they will be used to carry out acts of terrorism." }),
    new Term({ term:"Tipping Off", def:"The offence of disclosing to a customer or third party that a SAR has been filed or that a money laundering investigation is underway. A criminal offence in most jurisdictions." }),
    new Term({ term:"Trade-Based Money Laundering (TBML)", def:"The misuse of international trade transactions to move value across borders and disguise the origins of criminal proceeds. Techniques include over- and under-invoicing, multiple invoicing, and phantom shipments." }),
    new Term({ term:"Transaction Monitoring", def:"The ongoing surveillance of customer transactions to detect patterns or activities that may indicate money laundering, terrorist financing, fraud, or other financial crime." }),
    new Term({ term:"UBO", def:"Ultimate Beneficial Owner — the natural person who ultimately owns or controls an entity, even if ownership is exercised through a chain of other entities. Synonym of beneficial owner in many contexts." }),
    new Term({ term:"USA PATRIOT Act", def:"Uniting and Strengthening America by Providing Appropriate Tools Required to Intercept and Obstruct Terrorism Act (2001). Expanded BSA requirements, mandated information-sharing programmes, and enhanced CDD for correspondent accounts." }),
    new Term({ term:"VASP", def:"Virtual Asset Service Provider — any entity that conducts exchange, transfer, safekeeping, or financial services involving virtual assets (cryptocurrency). Subject to AML/CTF obligations under FATF recommendations." }),
    new Term({ term:"Whistleblower", def:"An individual who reports suspected wrongdoing within an organisation. US laws including the Dodd-Frank Act and the AML Whistleblower Improvement Act provide financial incentives and protections for whistleblowers reporting financial crime." }),
    new Term({ term:"Wolfsberg Group", def:"An association of thirteen global banks that develops financial crime risk management frameworks, including guidance on AML, KYC, sanctions screening, and correspondent banking due diligence." }),
    new Term({ term:"314(a) Programme", def:"A FinCEN programme allowing law enforcement agencies to request financial institutions search their records for accounts and transactions related to specific suspects in money laundering or terrorist financing investigations." }),
    new Term({ term:"314(b) Programme", def:"A voluntary FinCEN programme that allows financial institutions to share information with each other to identify and report money laundering or terrorist financing. Provides safe harbour from liability." }),
    new Term({ term:"Black List", def:"The FATF list of high-risk jurisdictions subject to a call for action due to significant strategic deficiencies in their AML/CTF frameworks. Currently includes countries like North Korea and Iran." }),
    new Term({ term:"Compliance Officer", def:"The individual designated within a regulated entity to oversee the AML/CTF compliance programme, including policies, procedures, training, and regulatory reporting." }),
    new Term({ term:"CIP", def:"Customer Identification Program — the minimum identity verification procedures a financial institution must implement under the USA PATRIOT Act, including collecting name, date of birth, address, and identification number." }),
    new Term({ term:"Cyber-Enabled Crime", def:"Criminal activity that uses computers, networks, or digital technology as the primary tool, including phishing, ransomware, business email compromise, and online fraud." }),
    new Term({ term:"Darknet", def:"An encrypted portion of the internet accessible only through specific software (e.g., Tor). Used for legitimate privacy purposes but also for illicit markets, money laundering, and the sale of stolen data." }),
    new Term({ term:"Designated Non-Financial Businesses and Professions (DNFBPs)", def:"Sectors outside traditional banking that are subject to AML obligations, including real estate agents, dealers in precious metals, lawyers, notaries, accountants, and trust and company service providers." }),
    new Term({ term:"E.O. 13224", def:"Executive Order 13224 — a US presidential executive order authorising the Treasury Department to designate and freeze the assets of individuals and entities associated with terrorism." }),
    new Term({ term:"False Claims Act", def:"US federal law that imposes liability on persons and companies who defraud governmental programmes. Used extensively by the DOJ to recover losses from healthcare fraud and government contract fraud." }),
    new Term({ term:"Forensic Accounting", def:"The use of accounting, auditing, and investigative techniques to examine financial records for evidence of fraud, embezzlement, money laundering, or other financial crime." }),
    new Term({ term:"Kleptocracy", def:"A form of government in which leaders use political power to steal from the people, typically moving stolen state assets into the international financial system. The DOJ's Kleptocracy Asset Recovery Initiative targets such assets." }),
    new Term({ term:"Know Your Transaction (KYT)", def:"An extension of KYC principles applied to monitoring and analysing individual transactions, particularly in cryptocurrency and digital asset environments." }),
    new Term({ term:"Layered Ownership", def:"A corporate structure where multiple entities are stacked to obscure the ultimate beneficial owner. Shell companies, trusts, and nominees in different jurisdictions create layers that complicate investigation." }),
    new Term({ term:"Mixing Service (Tumbler)", def:"A service that pools cryptocurrency from multiple users and redistributes it to different wallets to obscure the transaction trail. The US Treasury sanctioned Tornado Cash for facilitating laundering." }),
    new Term({ term:"Nominee", def:"A person or entity appointed to act on behalf of another to conceal the true owner's identity. Nominee directors, shareholders, and account holders are commonly used in money laundering schemes." }),
    new Term({ term:"Ponzi Scheme", def:"A fraudulent investment scheme where returns to existing investors are paid using funds from new investors rather than from legitimate profits. Named after Charles Ponzi (1920)." }),
    new Term({ term:"Privacy Coin", def:"Cryptocurrencies designed to provide enhanced transaction anonymity, such as Monero (XMR) and Zcash (ZEC). Flagged by FATF and law enforcement as higher risk for money laundering." }),
    new Term({ term:"Proliferation Financing", def:"The provision of funds, financial services, or economic resources to contribute to the development of nuclear, chemical, or biological weapons and their delivery systems. Subject to UN and OFAC sanctions." }),
    new Term({ term:"RegTech", def:"Regulatory Technology — the use of technology (AI, machine learning, NLP, cloud computing) to automate and improve regulatory compliance processes including KYC, transaction monitoring, and regulatory reporting." }),
    new Term({ term:"Risk-Based Approach (RBA)", def:"A methodology endorsed by FATF where resources are allocated based on the assessed level of risk, allowing higher-risk areas to receive enhanced scrutiny while lower-risk areas receive simplified measures." }),
    new Term({ term:"Sanctions Evasion", def:"Deliberate actions to circumvent economic sanctions, including the use of front companies, intermediaries, falsified documents, or cryptocurrency to conduct prohibited transactions." }),
    new Term({ term:"Source of Funds", def:"Documentation or evidence establishing the origin of funds used in a particular transaction, distinguishing it from 'source of wealth' which concerns the origin of a customer's entire net worth." }),
    new Term({ term:"Source of Wealth", def:"The origin of a customer's total assets and financial standing, including employment, business activities, investments, and inheritance. Assessed during EDD for higher-risk customers." }),
    new Term({ term:"Straight-Through Processing (STP)", def:"Automated processing of transactions without manual intervention. While efficient, STP can reduce opportunities for human review of potentially suspicious activity." }),
    new Term({ term:"Synthetic Identity", def:"A fabricated identity combining real and fictitious personal information (e.g., a real SSN with a fake name) to create a new identity used for fraud." }),
    new Term({ term:"Tax Haven", def:"A jurisdiction offering very low or zero tax rates and financial secrecy, often used to minimise tax obligations or conceal assets. May lack transparency and effective AML/CTF controls." }),
    new Term({ term:"Trafficking in Persons (TIP)", def:"The recruitment, transportation, or harbouring of people through force, fraud, or coercion for exploitation. The US State Department publishes an annual TIP Report ranking global anti-trafficking efforts." }),
    new Term({ term:"Typology", def:"A documented pattern or method by which financial crimes are committed. Typologies help institutions recognise and detect specific money laundering, fraud, or terrorist financing techniques." }),
    new Term({ term:"Wire Transfer", def:"An electronic transfer of funds between financial institutions. International wires are subject to the 'Travel Rule' requiring originator and beneficiary information to accompany the transfer." }),
    new Term({ term:"Travel Rule", def:"FATF Recommendation 16 requiring financial institutions to include originator and beneficiary information with wire transfers so the information 'travels' with the transaction for traceability." })
];
