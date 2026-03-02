// ═══════════════════════════════════════════════════════════════
// CRYPTO TRACER — Blockchain Fund Flow Intelligence Tool
// crypto-tracer.js — Vanilla JS module for the Ops Simulator
// Depends on: simulator.js (nav functions)
// ═══════════════════════════════════════════════════════════════

// ── NODE TYPES ──
var CT_TYPES={
  wallet:     {color:"#00e5ff",glow:"rgba(0,229,255,.35)",  label:"Personal Wallet",icon:"◈"},
  exchange:   {color:"#00e68a",glow:"rgba(0,230,138,.35)",  label:"Exchange",       icon:"⬡"},
  mixer:      {color:"#bf5af2",glow:"rgba(191,90,242,.35)", label:"Mixer / Tumbler",icon:"◉"},
  contract:   {color:"#ff9f0a",glow:"rgba(255,159,10,.35)", label:"Smart Contract", icon:"⬢"},
  institution:{color:"#ffd60a",glow:"rgba(255,214,10,.35)", label:"Institution/OTC",icon:"◆"},
  unknown:    {color:"#636366",glow:"rgba(99,99,102,.25)",  label:"Unknown",        icon:"○"},
  defi:       {color:"#ff375f",glow:"rgba(255,55,95,.35)",  label:"DeFi Protocol",  icon:"◇"}
};

var CT_CHAINS=[
  {id:"eth",name:"Ethereum",symbol:"ETH",color:"#627eea"},
  {id:"btc",name:"Bitcoin",symbol:"BTC",color:"#f7931a"},
  {id:"sol",name:"Solana",symbol:"SOL",color:"#9945ff"},
  {id:"bsc",name:"BSC",symbol:"BNB",color:"#f0b90b"},
  {id:"matic",name:"Polygon",symbol:"MATIC",color:"#8247e5"},
  {id:"tron",name:"Tron",symbol:"TRX",color:"#ff0013"}
];

// ── HELPERS ──
function ctShort(a){return a?a.slice(0,6)+"…"+a.slice(-4):"";}
function ctFmt(n){if(n>=1e9)return(n/1e9).toFixed(2)+"B";if(n>=1e6)return(n/1e6).toFixed(2)+"M";if(n>=1e3)return(n/1e3).toFixed(1)+"K";return n.toFixed(n<1?4:2);}
function ctDate(ts){return new Date(ts).toISOString().replace("T"," ").slice(0,19)+" UTC";}

// ── STATE ──
var ct={
  canvas:null, ctx:null, animId:null,
  graph:null, particles:[],
  pan:{x:0,y:0,zoom:1,dragging:false,dragNode:null,lastX:0,lastY:0},
  hoverNode:null, selectedNode:null, focusNode:null,
  activeKey:null, chain:"eth", tracing:false,
  history:[], timelinePos:1, contextMenu:null,
  leftOpen:true, rightOpen:true
};

// ═══════════════════════════════════════════════════════════════
// MOCK DATA
// Replace each trace's data with real API calls in the future:
//   - Etherscan / Alchemy for ETH
//   - Blockcypher / Mempool.space for BTC
//   - Solana RPC / Helius for SOL
//   - BSCScan for BNB
// ═══════════════════════════════════════════════════════════════
function ctMockData(){
  var now=Date.now(),h=3600000;
  return {
    "eth-whale":{
      name:"ETH Whale → Coinbase",chain:"eth",
      desc:"10,000 ETH moved through intermediaries to Coinbase",
      startAddr:"0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
      nodes:[
        {id:"n1",address:"0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",label:"Whale Wallet",type:"wallet",balance:"24,350 ETH",risk:22,firstSeen:"2021-03-14"},
        {id:"n2",address:"0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c",label:"Intermediary 1",type:"wallet",balance:"10,200 ETH",risk:18,firstSeen:"2022-01-06"},
        {id:"n3",address:"0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d",label:"Intermediary 2",type:"wallet",balance:"5,100 ETH",risk:15,firstSeen:"2022-08-21"},
        {id:"n4",address:"0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e",label:"Uniswap V3 Router",type:"contract",balance:"—",risk:5,firstSeen:"2021-05-05"},
        {id:"n5",address:"0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f",label:"Intermediary 3",type:"wallet",balance:"5,050 ETH",risk:12,firstSeen:"2023-02-10"},
        {id:"n6",address:"0xdAC17F958D2ee523a2206206994597C13D831ec7",label:"Tether Treasury",type:"institution",balance:"$1.2B USDT",risk:3,firstSeen:"2017-11-28"},
        {id:"n7",address:"0x71660c4005BA85c37ccec55d0C4493E66Fe775d3",label:"Coinbase Hot Wallet",type:"exchange",balance:"142,000 ETH",risk:2,firstSeen:"2019-04-18"},
        {id:"n8",address:"0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f50",label:"Gas Station",type:"contract",balance:"12.4 ETH",risk:8,firstSeen:"2023-06-01"}
      ],
      edges:[
        {from:"n1",to:"n2",amount:10000,token:"ETH",ts:now-48*h,tx:"0xabc1…def1"},
        {from:"n2",to:"n3",amount:5100,token:"ETH",ts:now-36*h,tx:"0xabc2…def2"},
        {from:"n2",to:"n4",amount:4900,token:"ETH",ts:now-35*h,tx:"0xabc3…def3"},
        {from:"n4",to:"n5",amount:4850,token:"ETH",ts:now-30*h,tx:"0xabc4…def4"},
        {from:"n3",to:"n7",amount:5050,token:"ETH",ts:now-24*h,tx:"0xabc5…def5"},
        {from:"n5",to:"n7",amount:4800,token:"ETH",ts:now-12*h,tx:"0xabc6…def6"},
        {from:"n1",to:"n6",amount:50000,token:"USDT",ts:now-50*h,tx:"0xabc7…def7"},
        {from:"n2",to:"n8",amount:0.5,token:"ETH",ts:now-40*h,tx:"0xabc8…def8"}
      ]
    },
    "btc-mixer":{
      name:"BTC Mixer → Kraken",chain:"btc",
      desc:"Bitcoin mixing service obfuscation ending at Kraken exchange",
      startAddr:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      nodes:[
        {id:"b1",address:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",label:"Source Wallet",type:"wallet",balance:"45.2 BTC",risk:65,firstSeen:"2020-06-15"},
        {id:"b2",address:"3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy",label:"Coinjoin Pool",type:"mixer",balance:"—",risk:92,firstSeen:"2019-11-22"},
        {id:"b3",address:"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",label:"Wasabi Wallet",type:"mixer",balance:"—",risk:88,firstSeen:"2020-01-08"},
        {id:"b4",address:"3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5",label:"Hop Wallet 1",type:"unknown",balance:"8.1 BTC",risk:45,firstSeen:"2023-03-17"},
        {id:"b5",address:"bc1q5shngj24323nsrmxv99st02na6skvfmqfmx3rt",label:"Hop Wallet 2",type:"unknown",balance:"12.3 BTC",risk:42,firstSeen:"2023-04-02"},
        {id:"b6",address:"3H28N5WuREZ93CNmQviecrnyiWrnqRhABc",label:"Hop Wallet 3",type:"wallet",balance:"5.5 BTC",risk:38,firstSeen:"2023-05-11"},
        {id:"b7",address:"3AfRBjkBmip9pFMibzFVHKYhkSxm7AaNyq",label:"Kraken Deposit",type:"exchange",balance:"2,400 BTC",risk:3,firstSeen:"2018-09-20"}
      ],
      edges:[
        {from:"b1",to:"b2",amount:20,token:"BTC",ts:now-72*h,tx:"abc123…fed1"},
        {from:"b1",to:"b3",amount:25,token:"BTC",ts:now-70*h,tx:"abc124…fed2"},
        {from:"b2",to:"b4",amount:8,token:"BTC",ts:now-48*h,tx:"abc125…fed3"},
        {from:"b2",to:"b5",amount:11.5,token:"BTC",ts:now-46*h,tx:"abc126…fed4"},
        {from:"b3",to:"b5",amount:12,token:"BTC",ts:now-44*h,tx:"abc127…fed5"},
        {from:"b3",to:"b6",amount:12.5,token:"BTC",ts:now-42*h,tx:"abc128…fed6"},
        {from:"b4",to:"b7",amount:7.8,token:"BTC",ts:now-24*h,tx:"abc129…fed7"},
        {from:"b5",to:"b7",amount:23,token:"BTC",ts:now-18*h,tx:"abc130…fed8"},
        {from:"b6",to:"b7",amount:12,token:"BTC",ts:now-12*h,tx:"abc131…fed9"}
      ]
    },
    "sol-rugpull":{
      name:"SOL Memecoin Rug Pull",chain:"sol",
      desc:"Rug pull: liquidity drained from $MOONDOG token via Raydium",
      startAddr:"7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
      nodes:[
        {id:"s1",address:"7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",label:"Deployer",type:"wallet",balance:"0 SOL",risk:95,firstSeen:"2025-11-02"},
        {id:"s2",address:"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263",label:"$MOONDOG Token",type:"contract",balance:"—",risk:99,firstSeen:"2025-11-02"},
        {id:"s3",address:"8rF8GxBMoAssJE8nBbMGRNPmuVBrhSjRiEfLGJoVNQBx",label:"Raydium LP Pool",type:"defi",balance:"—",risk:15,firstSeen:"2022-03-10"},
        {id:"s4",address:"5nTG2eMEhP3HFN7MiY8z5pRNKv7cER1GBn3FHUHgCPSi",label:"Drain Wallet 1",type:"wallet",balance:"8,200 SOL",risk:88,firstSeen:"2025-11-02"},
        {id:"s5",address:"9pBD3kvxRN7fjmQWuFP2rYsTgZoVNRPT7gMbSuvRaEBq",label:"Drain Wallet 2",type:"wallet",balance:"4,100 SOL",risk:85,firstSeen:"2025-11-02"},
        {id:"s6",address:"FWznbcNXWQuHTawe9RBqDz1cUHKA1VJkcHp6RpCH8has",label:"Jupiter Aggregator",type:"defi",balance:"—",risk:5,firstSeen:"2022-07-14"},
        {id:"s7",address:"2wMEpVnBRbnBi8Gf3tCBqgN9TCmQFB8eUXKLPjmoGTVp",label:"Binance Deposit",type:"exchange",balance:"—",risk:2,firstSeen:"2020-08-05"}
      ],
      edges:[
        {from:"s1",to:"s2",amount:0,token:"Deploy",ts:now-96*h,tx:"5xYz…abc1"},
        {from:"s1",to:"s3",amount:500,token:"SOL",ts:now-94*h,tx:"5xYz…abc2"},
        {from:"s3",to:"s4",amount:8200,token:"SOL",ts:now-24*h,tx:"5xYz…abc3"},
        {from:"s3",to:"s5",amount:4100,token:"SOL",ts:now-24*h,tx:"5xYz…abc4"},
        {from:"s4",to:"s6",amount:8000,token:"SOL",ts:now-12*h,tx:"5xYz…abc5"},
        {from:"s5",to:"s6",amount:4000,token:"SOL",ts:now-10*h,tx:"5xYz…abc6"},
        {from:"s6",to:"s7",amount:11800,token:"SOL",ts:now-6*h,tx:"5xYz…abc7"}
      ]
    },
    "eth-blackrock":{
      name:"BlackRock ETF Inflow",chain:"eth",
      desc:"Institutional ETH accumulation via BlackRock iShares ETF wallet",
      startAddr:"0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",
      nodes:[
        {id:"i1",address:"0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",label:"Authorized Participant",type:"institution",balance:"$420M",risk:3,firstSeen:"2024-01-10"},
        {id:"i2",address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",label:"USDC Contract",type:"contract",balance:"—",risk:2,firstSeen:"2018-09-10"},
        {id:"i3",address:"0x8a3c4e5f6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f",label:"OTC Desk (Cumberland)",type:"institution",balance:"$2.1B",risk:5,firstSeen:"2019-06-22"},
        {id:"i4",address:"0x4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c",label:"Coinbase Prime Custody",type:"exchange",balance:"580,000 ETH",risk:2,firstSeen:"2021-08-15"},
        {id:"i5",address:"0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d",label:"BlackRock iShares ETH Trust",type:"institution",balance:"410,000 ETH",risk:1,firstSeen:"2024-07-23"},
        {id:"i6",address:"0xbe0eB53F46cd790Cd13851d5EFf43D12404d33E8",label:"Binance Cold Wallet",type:"exchange",balance:"1.9M ETH",risk:4,firstSeen:"2019-01-15"}
      ],
      edges:[
        {from:"i1",to:"i2",amount:150000000,token:"USDC",ts:now-72*h,tx:"0xins1…aaa1"},
        {from:"i1",to:"i3",amount:100000000,token:"USDC",ts:now-68*h,tx:"0xins2…aaa2"},
        {from:"i3",to:"i4",amount:42000,token:"ETH",ts:now-48*h,tx:"0xins3…aaa3"},
        {from:"i2",to:"i3",amount:50000000,token:"USDC",ts:now-46*h,tx:"0xins4…aaa4"},
        {from:"i4",to:"i5",amount:41500,token:"ETH",ts:now-24*h,tx:"0xins5…aaa5"},
        {from:"i3",to:"i6",amount:8000,token:"ETH",ts:now-36*h,tx:"0xins6…aaa6"}
      ]
    }
  };
}
var CT_DATA=ctMockData();
var CT_PRESETS=[
  {key:"eth-whale",   label:"🐋 ETH Whale → Coinbase"},
  {key:"btc-mixer",   label:"🔄 BTC Mixer → Kraken"},
  {key:"sol-rugpull",  label:"💀 SOL Memecoin Rug Pull"},
  {key:"eth-blackrock",label:"🏦 BlackRock ETF Inflow"}
];

// ═══════════════════════════════════════════════════════════════
// FORCE-DIRECTED LAYOUT
// ═══════════════════════════════════════════════════════════════
function ctBuildGraph(nodes,edges,w,h){
  var g={
    width:w, height:h, settled:false, alpha:1,
    nodes:nodes.map(function(n,i){
      var r=n.type==="exchange"||n.type==="institution"?24:n.type==="mixer"||n.type==="contract"||n.type==="defi"?20:16;
      return {id:n.id,address:n.address,label:n.label,type:n.type,balance:n.balance,risk:n.risk,firstSeen:n.firstSeen,
        x:w/2+Math.cos(i/nodes.length*Math.PI*2)*Math.min(w,h)*.3,
        y:h/2+Math.sin(i/nodes.length*Math.PI*2)*Math.min(w,h)*.3,
        vx:0,vy:0,radius:r};
    }),
    edges:edges.map(function(e){return{from:e.from,to:e.to,amount:e.amount,token:e.token,ts:e.ts,tx:e.tx};})
  };
  return g;
}
function ctTickGraph(g){
  if(g.settled)return;
  var rep=8000,att=0.008,damp=0.88,cen=0.01,dt=0.3;
  var cx=g.width/2,cy=g.height/2;
  var i,j,a,b,dx,dy,dist,force;
  for(i=0;i<g.nodes.length;i++){
    a=g.nodes[i];
    a.vx+=(cx-a.x)*cen; a.vy+=(cy-a.y)*cen;
    for(j=i+1;j<g.nodes.length;j++){
      b=g.nodes[j];
      dx=a.x-b.x; dy=a.y-b.y; dist=Math.sqrt(dx*dx+dy*dy)||1;
      force=rep/(dist*dist);
      a.vx+=dx/dist*force*dt; a.vy+=dy/dist*force*dt;
      b.vx-=dx/dist*force*dt; b.vy-=dy/dist*force*dt;
    }
  }
  var nMap={};g.nodes.forEach(function(n){nMap[n.id]=n;});
  for(i=0;i<g.edges.length;i++){
    var e=g.edges[i]; a=nMap[e.from]; b=nMap[e.to];
    if(!a||!b)continue;
    dx=b.x-a.x; dy=b.y-a.y; dist=Math.sqrt(dx*dx+dy*dy)||1;
    force=(dist-180)*att;
    a.vx+=dx/dist*force; a.vy+=dy/dist*force;
    b.vx-=dx/dist*force; b.vy-=dy/dist*force;
  }
  var maxV=0;
  for(i=0;i<g.nodes.length;i++){
    a=g.nodes[i]; a.vx*=damp; a.vy*=damp;
    a.x+=a.vx; a.y+=a.vy;
    a.x=Math.max(40,Math.min(g.width-40,a.x));
    a.y=Math.max(40,Math.min(g.height-40,a.y));
    maxV=Math.max(maxV,Math.abs(a.vx)+Math.abs(a.vy));
  }
  g.alpha*=0.98;
  if(g.alpha<0.001||maxV<0.1)g.settled=true;
}

// ═══════════════════════════════════════════════════════════════
// OPEN CRYPTO TRACER (called from desk tile)
// ═══════════════════════════════════════════════════════════════
function openCryptoTracer(){
  // Hide sim navs (same pattern as investigation screens)
  var sn=document.querySelector('.sim-nav');
  var bn=document.querySelector('.site-bnav');
  if(sn)sn.style.display='none';
  if(bn)bn.style.display='none';
  showScreen('crypto');
  setTimeout(ctInit,60);
}

function ctInit(){
  ct.canvas=document.getElementById('ct-canvas');
  if(!ct.canvas)return;
  ct.ctx=ct.canvas.getContext('2d');
  ctRenderLeftPanel();
  ctRenderRightPanel();
  ctBindEvents();
  ctStartLoop();
  // Auto-load first trace if nothing active
  if(!ct.activeKey) ctLoadTrace('eth-whale');
}

// ═══════════════════════════════════════════════════════════════
// LOAD A TRACE
// ═══════════════════════════════════════════════════════════════
function ctLoadTrace(key){
  var trace=CT_DATA[key];
  if(!trace)return;
  ct.tracing=true;
  ct.activeKey=key;
  ct.chain=trace.chain;
  ct.selectedNode=null;
  ct.focusNode=null;
  ct.contextMenu=null;
  ct.timelinePos=1;
  ct.pan={x:0,y:0,zoom:1,dragging:false,dragNode:null,lastX:0,lastY:0};

  // Set input bar
  var sel=document.getElementById('ct-chain-sel');
  if(sel)sel.value=trace.chain;
  var inp=document.getElementById('ct-addr');
  if(inp)inp.value=trace.startAddr;

  // Update chain indicator
  ctUpdateChainIndicator();

  // Build graph
  var wrap=ct.canvas.parentElement;
  var w=wrap.offsetWidth||800, h=wrap.offsetHeight||500;
  ct.graph=ctBuildGraph(trace.nodes,trace.edges,Math.max(w,400),Math.max(h,300));
  ct.particles=[];

  // Add to history
  var exists=ct.history.find(function(h){return h.key===key;});
  if(!exists) ct.history.unshift({key:key,name:trace.name,chain:trace.chain});
  if(ct.history.length>15) ct.history=ct.history.slice(0,15);

  // Spawn particles after layout settles
  setTimeout(function(){
    ctSpawnParticles(trace.edges);
    ct.tracing=false;
  },600);

  ctRenderLeftPanel();
  ctRenderRightPanel();
  // Highlight active preset
  document.querySelectorAll('.ct-preset').forEach(function(el){
    el.classList.toggle('active',el.dataset.key===key);
  });
}

function ctSpawnParticles(edges){
  var ps=[];
  edges.forEach(function(e,i){
    var count=Math.min(Math.max(2,Math.ceil(Math.log10((e.amount||1)+1))),6);
    for(var j=0;j<count;j++){
      ps.push({
        ei:i, from:e.from, to:e.to,
        progress:Math.random(), speed:0.002+Math.random()*0.004,
        size:1.5+Math.random()*1.5, opacity:0.4+Math.random()*0.5
      });
    }
  });
  ct.particles=ps;
}

function ctUpdateChainIndicator(){
  var ch=CT_CHAINS.find(function(c){return c.id===ct.chain;})||CT_CHAINS[0];
  var dot=document.getElementById('ct-chain-dot');
  var lbl=document.getElementById('ct-chain-lbl');
  if(dot){dot.style.background=ch.color;dot.style.boxShadow='0 0 8px '+ch.color;}
  if(lbl)lbl.textContent=ch.name+' Network';
}

// ═══════════════════════════════════════════════════════════════
// RENDER LEFT PANEL
// ═══════════════════════════════════════════════════════════════
function ctRenderLeftPanel(){
  var el=document.getElementById('ct-left-inner');
  if(!el)return;
  var h='<div class="ct-side-sec"><div class="ct-side-title">⬡ Preset Traces</div>';
  CT_PRESETS.forEach(function(p){
    h+='<div class="ct-preset'+(ct.activeKey===p.key?' active':'')+'" data-key="'+p.key+'" onclick="ctLoadTrace(\''+p.key+'\')">'+p.label+'</div>';
  });
  h+='</div>';
  if(ct.history.length){
    h+='<div class="ct-side-sec"><div class="ct-side-title">⏱ History</div>';
    ct.history.forEach(function(hi){
      var sym=(CT_CHAINS.find(function(c){return c.id===hi.chain;})||{}).symbol||'';
      h+='<div class="ct-preset'+(ct.activeKey===hi.key?' active':'')+'" data-key="'+hi.key+'" onclick="ctLoadTrace(\''+hi.key+'\')">';
      h+='<span style="font-size:9px;opacity:.5">'+sym+'</span> '+hi.name+'</div>';
    });
    h+='</div>';
  }
  h+='<div class="ct-side-sec"><div class="ct-side-title">⬡ Legend</div>';
  Object.keys(CT_TYPES).forEach(function(k){
    var t=CT_TYPES[k];
    h+='<div style="display:flex;align-items:center;gap:8px;padding:4px 6px;font-size:10px;color:rgba(255,255,255,.5)">';
    h+='<div style="width:10px;height:10px;border-radius:50%;background:'+t.color+';box-shadow:0 0 6px '+t.glow+';flex-shrink:0"></div>';
    h+=t.label+'</div>';
  });
  h+='</div>';
  el.innerHTML=h;
}

// ═══════════════════════════════════════════════════════════════
// RENDER RIGHT PANEL
// ═══════════════════════════════════════════════════════════════
function ctRenderRightPanel(){
  var el=document.getElementById('ct-right-inner');
  if(!el)return;
  var trace=ct.activeKey?CT_DATA[ct.activeKey]:null;
  var n=ct.selectedNode;

  if(!trace){
    el.innerHTML='<div style="padding:20px;text-align:center;color:rgba(255,255,255,.2);font-size:11px"><div style="font-size:28px;margin-bottom:8px;opacity:.3">◈</div>Load a trace to begin</div>';
    return;
  }

  var h='';
  // Trace summary (always show)
  var ch=CT_CHAINS.find(function(c){return c.id===trace.chain;})||CT_CHAINS[0];
  var highRisk=trace.nodes.filter(function(nd){return nd.risk>60;}).length;
  h+='<div class="ct-side-sec"><div class="ct-side-title">⬡ Trace Summary</div>';
  h+='<div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:8px">';
  var stats=[
    {l:"Nodes",v:trace.nodes.length,c:"#00e5ff"},
    {l:"Edges",v:trace.edges.length,c:"#bf5af2"},
    {l:"Chain",v:ch.symbol,c:ch.color},
    {l:"High Risk",v:highRisk,c:"#ff375f"}
  ];
  stats.forEach(function(s){
    h+='<div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.05);border-radius:6px;padding:8px 10px;text-align:center">';
    h+='<div style="font-family:Orbitron,monospace;font-size:14px;font-weight:700;color:'+s.c+'">'+s.v+'</div>';
    h+='<div style="font-size:8px;color:rgba(255,255,255,.3);text-transform:uppercase;letter-spacing:.06em;margin-top:2px">'+s.l+'</div></div>';
  });
  h+='</div>';
  h+='<div style="font-size:10px;color:rgba(255,255,255,.3);line-height:1.5;padding:4px 0">'+trace.desc+'</div></div>';

  if(n){
    // Node details
    var tp=CT_TYPES[n.type]||CT_TYPES.unknown;
    h+='<div class="ct-side-sec">';
    h+='<button class="ct-btn" onclick="ct.selectedNode=null;ctRenderRightPanel();" style="font-size:9px;padding:4px 8px;width:100%;margin-bottom:8px">← Back to summary</button>';
    h+='<div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">';
    h+='<div style="width:14px;height:14px;border-radius:50%;background:'+tp.color+';box-shadow:0 0 8px '+tp.glow+'"></div>';
    h+='<span style="font-family:Orbitron,monospace;font-size:11px;font-weight:700;color:#fff">'+(n.label||"Unknown")+'</span></div>';
    var rows=[
      {l:"Type",v:'<span style="color:'+tp.color+'">'+tp.label+'</span>'},
      {l:"Address",v:'<span style="font-size:9px;word-break:break-all">'+n.address+'</span>'},
      {l:"Balance",v:n.balance},
      {l:"First Seen",v:n.firstSeen},
      {l:"Risk Score",v:'<span style="color:'+(n.risk>70?'#ff375f':n.risk>40?'#ff9f0a':'#00e68a')+';font-weight:700">'+n.risk+'/100</span>'}
    ];
    rows.forEach(function(r){
      h+='<div style="display:flex;justify-content:space-between;align-items:flex-start;padding:5px 0;border-bottom:1px solid rgba(255,255,255,.03)">';
      h+='<span style="font-size:10px;color:rgba(255,255,255,.35)">'+r.l+'</span>';
      h+='<span style="font-size:10px;color:rgba(255,255,255,.8);text-align:right;max-width:60%">'+r.v+'</span></div>';
    });
    // Risk bar
    h+='<div style="height:4px;border-radius:2px;background:rgba(255,255,255,.06);margin-top:6px;overflow:hidden">';
    h+='<div style="height:100%;width:'+n.risk+'%;background:'+(n.risk>70?'#ff375f':n.risk>40?'#ff9f0a':'#00e68a')+';border-radius:2px"></div></div>';
    h+='</div>';

    // Linked transactions
    var nMap={};trace.nodes.forEach(function(nd){nMap[nd.id]=nd;});
    var linked=trace.edges.filter(function(e){return e.from===n.id||e.to===n.id;});
    if(linked.length){
      h+='<div class="ct-side-sec"><div class="ct-side-title">Linked Transactions</div>';
      linked.forEach(function(e){
        var isOut=e.from===n.id;
        var other=nMap[isOut?e.to:e.from];
        h+='<div style="padding:8px 10px;border-radius:6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);margin-bottom:6px">';
        h+='<div style="display:flex;justify-content:space-between;align-items:center">';
        h+='<span style="font-size:10px;color:'+(isOut?'#ff375f':'#00e68a')+';font-weight:700">'+(isOut?'OUT ↗':'IN ↙')+'</span>';
        h+='<span style="font-size:11px;font-weight:600;color:#fff">'+ctFmt(e.amount)+' '+e.token+'</span></div>';
        h+='<div style="font-size:9px;color:rgba(255,255,255,.35);margin-top:2px">'+(isOut?'→':'←')+' '+(other?other.label||ctShort(other.address):'?')+'</div>';
        h+='<div style="font-size:8px;color:rgba(0,229,255,.4);margin-top:1px">'+ctDate(e.ts)+'</div></div>';
      });
      h+='</div>';
    }
  }

  el.innerHTML=h;
}

// ═══════════════════════════════════════════════════════════════
// CANVAS EVENTS
// ═══════════════════════════════════════════════════════════════
function ctBindEvents(){
  var c=ct.canvas;
  if(!c||c._ctBound)return;
  c._ctBound=true;
  c.addEventListener('mousemove',ctOnMove);
  c.addEventListener('mousedown',ctOnDown);
  c.addEventListener('mouseup',ctOnUp);
  c.addEventListener('mouseleave',ctOnUp);
  c.addEventListener('wheel',ctOnWheel,{passive:false});
  c.addEventListener('dblclick',ctOnDbl);
  c.addEventListener('contextmenu',ctOnCtx);
  // Touch support
  c.addEventListener('touchstart',ctTouchStart,{passive:false});
  c.addEventListener('touchmove',ctTouchMove,{passive:false});
  c.addEventListener('touchend',ctTouchEnd);
}

function ctCanvasToGraph(cx,cy){
  return{x:(cx-ct.pan.x)/ct.pan.zoom, y:(cy-ct.pan.y)/ct.pan.zoom};
}
function ctFindNode(gx,gy){
  if(!ct.graph)return null;
  for(var i=ct.graph.nodes.length-1;i>=0;i--){
    var n=ct.graph.nodes[i],dx=gx-n.x,dy=gy-n.y;
    if(dx*dx+dy*dy<(n.radius+6)*(n.radius+6))return n;
  }
  return null;
}

function ctOnMove(ev){
  var r=ct.canvas.getBoundingClientRect();
  var cx=ev.clientX-r.left,cy=ev.clientY-r.top;
  var p=ct.pan;
  if(p.dragging){
    if(p.dragNode){
      var g=ctCanvasToGraph(cx,cy);
      p.dragNode.x=g.x; p.dragNode.y=g.y;
      p.dragNode.vx=0; p.dragNode.vy=0;
      if(ct.graph)ct.graph.settled=false;
    }else{
      p.x+=cx-p.lastX; p.y+=cy-p.lastY;
    }
    p.lastX=cx; p.lastY=cy; return;
  }
  var gp=ctCanvasToGraph(cx,cy);
  var node=ctFindNode(gp.x,gp.y);
  ct.hoverNode=node?node.id:null;
  ct.canvas.style.cursor=node?"pointer":"grab";
}
function ctOnDown(ev){
  if(ev.button===2)return;
  var r=ct.canvas.getBoundingClientRect();
  var cx=ev.clientX-r.left,cy=ev.clientY-r.top;
  var gp=ctCanvasToGraph(cx,cy);
  var node=ctFindNode(gp.x,gp.y);
  ct.pan.dragging=true; ct.pan.lastX=cx; ct.pan.lastY=cy;
  ct.pan.dragNode=node||null;
  if(node){
    ct.selectedNode=node;
    ct.rightOpen=true;
    ctRenderRightPanel();
    ctTogglePanel('ct-right',true);
  }
  ctHideContextMenu();
}
function ctOnUp(){ct.pan.dragging=false;ct.pan.dragNode=null;}
function ctOnWheel(ev){
  ev.preventDefault();
  var r=ct.canvas.getBoundingClientRect();
  var cx=ev.clientX-r.left,cy=ev.clientY-r.top;
  var factor=ev.deltaY<0?1.08:0.92;
  var nz=Math.max(0.2,Math.min(4,ct.pan.zoom*factor));
  ct.pan.x=cx-(cx-ct.pan.x)*(nz/ct.pan.zoom);
  ct.pan.y=cy-(cy-ct.pan.y)*(nz/ct.pan.zoom);
  ct.pan.zoom=nz;
}
function ctOnDbl(ev){
  var r=ct.canvas.getBoundingClientRect();
  var gp=ctCanvasToGraph(ev.clientX-r.left,ev.clientY-r.top);
  var node=ctFindNode(gp.x,gp.y);
  if(node){
    ct.focusNode=ct.focusNode===node.id?null:node.id;
  }else{ct.focusNode=null;}
  var fb=document.getElementById('ct-focus-btn');
  if(fb)fb.style.display=ct.focusNode?'inline-block':'none';
}
function ctOnCtx(ev){
  ev.preventDefault();
  var r=ct.canvas.getBoundingClientRect();
  var cx=ev.clientX-r.left,cy=ev.clientY-r.top;
  var gp=ctCanvasToGraph(cx,cy);
  var node=ctFindNode(gp.x,gp.y);
  if(node) ctShowContextMenu(cx,cy,node);
}

// Touch
function ctTouchStart(ev){
  if(ev.touches.length!==1)return;
  ev.preventDefault();
  var t=ev.touches[0],r=ct.canvas.getBoundingClientRect();
  var cx=t.clientX-r.left,cy=t.clientY-r.top;
  var gp=ctCanvasToGraph(cx,cy);
  var node=ctFindNode(gp.x,gp.y);
  ct.pan.dragging=true;ct.pan.lastX=cx;ct.pan.lastY=cy;
  ct.pan.dragNode=node||null;
}
function ctTouchMove(ev){
  if(ev.touches.length!==1||!ct.pan.dragging)return;
  ev.preventDefault();
  var t=ev.touches[0],r=ct.canvas.getBoundingClientRect();
  var cx=t.clientX-r.left,cy=t.clientY-r.top;
  var p=ct.pan;
  if(p.dragNode){
    var g=ctCanvasToGraph(cx,cy);
    p.dragNode.x=g.x;p.dragNode.y=g.y;
    p.dragNode.vx=0;p.dragNode.vy=0;
    if(ct.graph)ct.graph.settled=false;
  }else{
    p.x+=cx-p.lastX;p.y+=cy-p.lastY;
  }
  p.lastX=cx;p.lastY=cy;
}
function ctTouchEnd(){ct.pan.dragging=false;ct.pan.dragNode=null;}

// Context menu
function ctShowContextMenu(x,y,node){
  var el=document.getElementById('ct-ctx-menu');
  if(!el)return;
  el.style.left=x+'px';el.style.top=y+'px';el.style.display='block';
  ct.contextMenu=node;
}
function ctHideContextMenu(){
  var el=document.getElementById('ct-ctx-menu');
  if(el)el.style.display='none';
  ct.contextMenu=null;
}
function ctCtxAction(action){
  var n=ct.contextMenu;
  if(!n){ctHideContextMenu();return;}
  if(action==='focus'){ct.focusNode=n.id;var fb=document.getElementById('ct-focus-btn');if(fb)fb.style.display='inline-block';}
  else if(action==='detail'){ct.selectedNode=n;ctRenderRightPanel();ctTogglePanel('ct-right',true);}
  ctHideContextMenu();
}
function ctExitFocus(){
  ct.focusNode=null;
  var fb=document.getElementById('ct-focus-btn');
  if(fb)fb.style.display='none';
}

// Panel toggles
function ctTogglePanel(id,forceOpen){
  var el=document.getElementById(id);
  if(!el)return;
  if(forceOpen!==undefined){
    el.classList.toggle('ct-panel-collapsed',!forceOpen);
  }else{
    el.classList.toggle('ct-panel-collapsed');
  }
}

// ═══════════════════════════════════════════════════════════════
// CANVAS RENDER LOOP
// ═══════════════════════════════════════════════════════════════
function ctStartLoop(){
  if(ct.animId)cancelAnimationFrame(ct.animId);
  function frame(){
    ct.animId=requestAnimationFrame(frame);
    ctDraw();
  }
  frame();
}
function ctStopLoop(){
  if(ct.animId){cancelAnimationFrame(ct.animId);ct.animId=null;}
}

function ctDraw(){
  var canvas=ct.canvas,ctx=ct.ctx;
  if(!canvas||!ctx)return;
  var wrap=canvas.parentElement;
  if(!wrap)return;
  var w=wrap.offsetWidth,h=wrap.offsetHeight;
  canvas.width=w*2; canvas.height=h*2;
  canvas.style.width=w+'px'; canvas.style.height=h+'px';
  ctx.setTransform(2,0,0,2,0,0);
  ctx.clearRect(0,0,w,h);

  // Grid
  var pan=ct.pan;
  ctx.save();ctx.globalAlpha=0.04;ctx.strokeStyle='#00e5ff';
  var gs=50*pan.zoom,ox=pan.x%gs,oy=pan.y%gs;
  for(var x=ox;x<w;x+=gs){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
  for(var y=oy;y<h;y+=gs){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
  ctx.restore();

  var g=ct.graph;
  if(!g)return;
  ctTickGraph(g);

  ctx.save();
  ctx.translate(pan.x,pan.y);
  ctx.scale(pan.zoom,pan.zoom);

  var nMap={};g.nodes.forEach(function(n){nMap[n.id]=n;});
  var maxAmt=1;g.edges.forEach(function(e){if(e.amount>maxAmt)maxAmt=e.amount;});
  var tp=ct.timelinePos;

  // ── Edges ──
  g.edges.forEach(function(e,ei){
    var a=nMap[e.from],b=nMap[e.to];
    if(!a||!b)return;
    if(ct.focusNode&&e.from!==ct.focusNode&&e.to!==ct.focusNode)return;
    if(ei/g.edges.length>tp)return;
    var thick=1+(e.amount/maxAmt)*4;
    var ft=CT_TYPES[a.type]||CT_TYPES.unknown;
    ctx.save();
    ctx.lineWidth=thick;ctx.strokeStyle=ft.color;
    ctx.globalAlpha=0.3+(e.amount/maxAmt)*0.4;
    ctx.shadowColor=ft.color;ctx.shadowBlur=6;
    var mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
    var dx=b.x-a.x,dy=b.y-a.y;
    var cpx=mx+(-dy*0.15),cpy=my+(dx*0.15);
    ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo(cpx,cpy,b.x,b.y);ctx.stroke();
    // Arrow
    var t=0.85,t2=0.83;
    var ax2=(1-t)*(1-t)*a.x+2*(1-t)*t*cpx+t*t*b.x;
    var ay2=(1-t)*(1-t)*a.y+2*(1-t)*t*cpy+t*t*b.y;
    var ax1=(1-t2)*(1-t2)*a.x+2*(1-t2)*t2*cpx+t2*t2*b.x;
    var ay1=(1-t2)*(1-t2)*a.y+2*(1-t2)*t2*cpy+t2*t2*b.y;
    var ang=Math.atan2(ay2-ay1,ax2-ax1);
    ctx.fillStyle=ft.color;ctx.beginPath();
    ctx.moveTo(ax2,ay2);
    ctx.lineTo(ax2-10*Math.cos(ang-0.35),ay2-10*Math.sin(ang-0.35));
    ctx.lineTo(ax2-10*Math.cos(ang+0.35),ay2-10*Math.sin(ang+0.35));
    ctx.closePath();ctx.fill();
    ctx.restore();
  });

  // ── Particles ──
  ct.particles.forEach(function(p){
    var a=nMap[p.from],b=nMap[p.to];
    if(!a||!b)return;
    if(ct.focusNode&&p.from!==ct.focusNode&&p.to!==ct.focusNode)return;
    p.progress+=p.speed;if(p.progress>1)p.progress-=1;
    var t=p.progress;
    var mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
    var dx=b.x-a.x,dy=b.y-a.y;
    var cpx=mx+(-dy*0.15),cpy=my+(dx*0.15);
    var px=(1-t)*(1-t)*a.x+2*(1-t)*t*cpx+t*t*b.x;
    var py=(1-t)*(1-t)*a.y+2*(1-t)*t*cpy+t*t*b.y;
    var ft=CT_TYPES[a.type]||CT_TYPES.unknown;
    ctx.save();ctx.globalAlpha=p.opacity;
    ctx.fillStyle=ft.color;ctx.shadowColor=ft.color;ctx.shadowBlur=8;
    ctx.beginPath();ctx.arc(px,py,p.size,0,Math.PI*2);ctx.fill();
    ctx.restore();
  });

  // ── Nodes ──
  g.nodes.forEach(function(n){
    if(ct.focusNode&&n.id!==ct.focusNode){
      var conn=g.edges.some(function(e){return(e.from===ct.focusNode&&e.to===n.id)||(e.to===ct.focusNode&&e.from===n.id);});
      if(!conn)return;
    }
    var tp=CT_TYPES[n.type]||CT_TYPES.unknown;
    var isHov=n.id===ct.hoverNode;
    var isSel=ct.selectedNode&&n.id===ct.selectedNode.id;
    var r=n.radius*(isHov?1.2:1);
    // Glow ring
    ctx.save();ctx.shadowColor=tp.color;ctx.shadowBlur=isSel?20:isHov?14:8;
    ctx.fillStyle=isSel?tp.color:isHov?tp.glow:'rgba(10,10,20,.85)';
    ctx.strokeStyle=tp.color;ctx.lineWidth=isSel?2.5:1.5;
    ctx.beginPath();ctx.arc(n.x,n.y,r,0,Math.PI*2);ctx.fill();ctx.stroke();
    ctx.restore();
    // Icon
    ctx.save();ctx.fillStyle=isSel?'#000':tp.color;
    ctx.font=Math.round(r*0.8)+'px monospace';
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.fillText(tp.icon,n.x,n.y+1);ctx.restore();
    // Label
    ctx.save();ctx.fillStyle='#fff';ctx.font='bold 9px monospace';
    ctx.textAlign='center';ctx.globalAlpha=0.9;
    ctx.fillText(n.label||ctShort(n.address),n.x,n.y+r+12);
    if(n.label){ctx.font='8px monospace';ctx.globalAlpha=0.4;ctx.fillText(ctShort(n.address),n.x,n.y+r+22);}
    ctx.restore();
  });

  ctx.restore();
}

// ═══════════════════════════════════════════════════════════════
// TRACE BUTTON HANDLER
// ═══════════════════════════════════════════════════════════════
function ctHandleTrace(){
  var addr=(document.getElementById('ct-addr').value||'').toLowerCase().trim();
  var chain=document.getElementById('ct-chain-sel').value;
  ct.chain=chain;
  // Try to match a mock trace
  var matchKey=null;
  Object.keys(CT_DATA).forEach(function(k){
    var d=CT_DATA[k];
    if(d.startAddr.toLowerCase()===addr)matchKey=k;
    else if(!matchKey&&d.chain===chain)matchKey=k;
  });
  if(matchKey)ctLoadTrace(matchKey);
  else ctLoadTrace(CT_PRESETS[0].key);
}
function ctClearTrace(){
  ct.graph=null;ct.activeKey=null;ct.selectedNode=null;ct.focusNode=null;ct.particles=[];
  document.getElementById('ct-addr').value='';
  ctRenderLeftPanel();ctRenderRightPanel();
}
function ctSetTimeline(v){ct.timelinePos=parseFloat(v);}

// ═══════════════════════════════════════════════════════════════
// BACK TO SHIFT (clean up animation loop)
// ═══════════════════════════════════════════════════════════════
function ctBackToDesks(){
  ctStopLoop();
  document.querySelector('.sim-nav').style.display='';
  document.querySelector('.site-bnav').style.display='';
  showScreen('roleselect');
}
