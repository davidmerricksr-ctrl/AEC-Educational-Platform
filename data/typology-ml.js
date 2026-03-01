/* ══ MONEY LAUNDERING TYPOLOGIES ══ */
/* Prepends the Money Laundering category to typologyCategories as the first (default) tab */
typologyCategories.unshift({
  name:"Money Laundering",
  cards:[
    {
      icon:"\ud83d\udd04",
      bg:"#b82d24",
      title:"Trade-Based Money Laundering (TBML)",
      desc:"One of the most sophisticated and widely used methods globally. Criminals manipulate international trade documents and shipments to move and disguise illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Over- or under-invoicing","Phantom shipments","Multiple invoicing for the same goods","False description/quality/quantity of goods","Unusual third-country routing or free trade zones"]
    },
    {
      icon:"\ud83c\udfdb\ufe0f",
      bg:"#1a3a5c",
      title:"Professional Services & Legal Sector",
      desc:"Misuse of lawyers, accountants, and company formation agents to layer and legitimise criminal proceeds through client accounts and complex structures. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Unusual cash payments for professional fees","Misuse of client trust accounts","Rapid creation and dissolution of companies/trusts","Requests for offshore structures with no legitimate business reason"]
    },
    {
      icon:"\u20bf",
      bg:"#18725f",
      title:"Crypto & Virtual Asset Laundering",
      desc:"Using cryptocurrencies, mixers, chain-hopping, and privacy coins to obscure the origin of illicit funds. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Rapid fiat-to-crypto conversions","Use of mixing/tumbling services","High-volume small transactions across wallets","NFTs or digital assets used as stores of value"]
    },
    {
      icon:"\ud83c\udfb0",
      bg:"#b07d1e",
      title:"Gambling & Casino Laundering",
      desc:"Buying casino chips with dirty cash, minimal gambling, then cashing out as \u2018winnings\u2019 \u2014 including junket operators. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Large cash buy-ins with quick cash-outs","Minimal actual play time","Purchasing winning tickets from others","Cross-border junket activity"]
    },
    {
      icon:"\ud83d\uddbc\ufe0f",
      bg:"#b82d24",
      title:"Art, Antiques & Cultural Property",
      desc:"Using high-value art, antiques and collectibles to store and move value anonymously through private sales and freeports. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Transactions via third-party agents","Significant over-/undervaluation","Storage in freeports or bonded warehouses","Private sales with limited documentation"]
    },
    {
      icon:"\ud83d\udc65",
      bg:"#1a3a5c",
      title:"Money Mules & Structuring",
      desc:"Recruiting individuals to receive and forward funds in small amounts to avoid detection thresholds (smurfing/structuring). \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Unexplained funds into personal accounts","Immediate onward transfers overseas","Job offers requiring use of personal bank accounts","Multiple deposits just below reporting limits"]
    },
    {
      icon:"\ud83c\udfe0",
      bg:"#18725f",
      title:"Real Estate Laundering",
      desc:"Purchasing property with criminal proceeds, often using shell companies, cash components, or rapid flipping. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Cash elements in purchases","Opaque corporate ownership","Rapid buy-and-sell with unexplained profit","Buyers with no obvious connection to the property"]
    },
    {
      icon:"\ud83c\udf0d",
      bg:"#b07d1e",
      title:"Alternative Remittance Systems (Hawala)",
      desc:"Informal value transfer networks that move money across borders outside traditional banking systems. \u2014 Common typology reported by FATF, NCA, Europol & Basel Institute",
      flags:["Large value transfers with minimal documentation","Settlement through goods or trade","Ethnic/family/community-based networks"]
    }
  ]
});
