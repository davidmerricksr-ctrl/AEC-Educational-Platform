import { useState, useEffect, useRef, useCallback, useMemo } from "react";

// ═══════════════════════════════════════════════════════════════
// CRYPTO TRACER — Blockchain Analytics Intelligence Tool
// A cyberpunk-styled blockchain fund tracing visualization
// ═══════════════════════════════════════════════════════════════

// ── TYPE COLORS & CONFIG ──
const NODE_TYPES = {
  wallet:     { color: "#00e5ff", glow: "rgba(0,229,255,.35)",  label: "Personal Wallet", icon: "◈" },
  exchange:   { color: "#00e68a", glow: "rgba(0,230,138,.35)",  label: "Exchange",        icon: "⬡" },
  mixer:      { color: "#bf5af2", glow: "rgba(191,90,242,.35)", label: "Mixer/Tumbler",   icon: "◉" },
  contract:   { color: "#ff9f0a", glow: "rgba(255,159,10,.35)", label: "Smart Contract",  icon: "⬢" },
  institution:{ color: "#ffd60a", glow: "rgba(255,214,10,.35)", label: "Institution/OTC", icon: "◆" },
  unknown:    { color: "#636366", glow: "rgba(99,99,102,.25)",  label: "Unknown",         icon: "○" },
  defi:       { color: "#ff375f", glow: "rgba(255,55,95,.35)",  label: "DeFi Protocol",   icon: "◇" },
};

const CHAINS = [
  { id: "eth",  name: "Ethereum",  symbol: "ETH",  color: "#627eea" },
  { id: "btc",  name: "Bitcoin",   symbol: "BTC",  color: "#f7931a" },
  { id: "sol",  name: "Solana",    symbol: "SOL",  color: "#9945ff" },
  { id: "bsc",  name: "BSC",       symbol: "BNB",  color: "#f0b90b" },
  { id: "matic",name: "Polygon",   symbol: "MATIC",color: "#8247e5" },
  { id: "tron", name: "Tron",      symbol: "TRX",  color: "#ff0013" },
];

const shortenAddr = (a) => a ? a.slice(0,6)+"…"+a.slice(-4) : "";
const fmtAmt = (n) => {
  if(n>=1e9) return (n/1e9).toFixed(2)+"B";
  if(n>=1e6) return (n/1e6).toFixed(2)+"M";
  if(n>=1e3) return (n/1e3).toFixed(1)+"K";
  return n.toFixed(n<1?4:2);
};
const fmtDate = (ts) => new Date(ts).toISOString().replace("T"," ").slice(0,19)+" UTC";
const randBetween = (a,b) => a+Math.random()*(b-a);

// ═══════════════════════════════════════════════════════════════
// MOCK DATA — Replace with real API calls (Etherscan, Blockcypher, etc.)
// ═══════════════════════════════════════════════════════════════
function generateMockTraces() {
  const now = Date.now();
  const h = 3600000;
  return {
    "eth-whale": {
      name: "ETH Whale → Coinbase",
      chain: "eth",
      desc: "10,000 ETH moved through intermediaries to Coinbase",
      startAddr: "0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b",
      nodes: [
        { id:"n1", address:"0x1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b", label:"Whale Wallet", type:"wallet", balance:"24,350 ETH", riskScore:22, firstSeen:"2021-03-14" },
        { id:"n2", address:"0x2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c", label:"Intermediary 1", type:"wallet", balance:"10,200 ETH", riskScore:18, firstSeen:"2022-01-06" },
        { id:"n3", address:"0x3c4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d", label:"Intermediary 2", type:"wallet", balance:"5,100 ETH", riskScore:15, firstSeen:"2022-08-21" },
        { id:"n4", address:"0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e", label:"Uniswap V3 Router", type:"contract", balance:"—", riskScore:5, firstSeen:"2021-05-05" },
        { id:"n5", address:"0x5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f", label:"Intermediary 3", type:"wallet", balance:"5,050 ETH", riskScore:12, firstSeen:"2023-02-10" },
        { id:"n6", address:"0xdAC17F958D2ee523a2206206994597C13D831ec7", label:"Tether Treasury", type:"institution", balance:"$1.2B USDT", riskScore:3, firstSeen:"2017-11-28" },
        { id:"n7", address:"0x71660c4005BA85c37ccec55d0C4493E66Fe775d3", label:"Coinbase Hot Wallet", type:"exchange", balance:"142,000 ETH", riskScore:2, firstSeen:"2019-04-18" },
        { id:"n8", address:"0x6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f50", label:"Gas Station", type:"contract", balance:"12.4 ETH", riskScore:8, firstSeen:"2023-06-01" },
      ],
      edges: [
        { from:"n1", to:"n2", amount:10000, token:"ETH", timestamp:now-48*h, txHash:"0xabc1...def1" },
        { from:"n2", to:"n3", amount:5100, token:"ETH", timestamp:now-36*h, txHash:"0xabc2...def2" },
        { from:"n2", to:"n4", amount:4900, token:"ETH", timestamp:now-35*h, txHash:"0xabc3...def3" },
        { from:"n4", to:"n5", amount:4850, token:"ETH", timestamp:now-30*h, txHash:"0xabc4...def4" },
        { from:"n3", to:"n7", amount:5050, token:"ETH", timestamp:now-24*h, txHash:"0xabc5...def5" },
        { from:"n5", to:"n7", amount:4800, token:"ETH", timestamp:now-12*h, txHash:"0xabc6...def6" },
        { from:"n1", to:"n6", amount:50000, token:"USDT", timestamp:now-50*h, txHash:"0xabc7...def7" },
        { from:"n2", to:"n8", amount:0.5, token:"ETH", timestamp:now-40*h, txHash:"0xabc8...def8" },
      ]
    },
    "btc-mixer": {
      name: "BTC Mixer → Kraken",
      chain: "btc",
      desc: "Bitcoin mixing service obfuscation ending at Kraken",
      startAddr: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      nodes: [
        { id:"b1", address:"1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa", label:"Source Wallet", type:"wallet", balance:"45.2 BTC", riskScore:65, firstSeen:"2020-06-15" },
        { id:"b2", address:"3J98t1WpEZ73CNmQviecrnyiWrnqRhWNLy", label:"Coinjoin Pool", type:"mixer", balance:"—", riskScore:92, firstSeen:"2019-11-22" },
        { id:"b3", address:"bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh", label:"Wasabi Wallet", type:"mixer", balance:"—", riskScore:88, firstSeen:"2020-01-08" },
        { id:"b4", address:"3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5", label:"Hop Wallet 1", type:"unknown", balance:"8.1 BTC", riskScore:45, firstSeen:"2023-03-17" },
        { id:"b5", address:"bc1q5shngj24323nsrmxv99st02na6skvfmqfmx3rt", label:"Hop Wallet 2", type:"unknown", balance:"12.3 BTC", riskScore:42, firstSeen:"2023-04-02" },
        { id:"b6", address:"3H28N5WuREZ93CNmQviecrnyiWrnqRhABc", label:"Hop Wallet 3", type:"wallet", balance:"5.5 BTC", riskScore:38, firstSeen:"2023-05-11" },
        { id:"b7", address:"3AfRBjkBmip9pFMibzFVHKYhkSxm7AaNyq", label:"Kraken Deposit", type:"exchange", balance:"2,400 BTC", riskScore:3, firstSeen:"2018-09-20" },
      ],
      edges: [
        { from:"b1", to:"b2", amount:20, token:"BTC", timestamp:now-72*h, txHash:"abc123...fed1" },
        { from:"b1", to:"b3", amount:25, token:"BTC", timestamp:now-70*h, txHash:"abc124...fed2" },
        { from:"b2", to:"b4", amount:8, token:"BTC", timestamp:now-48*h, txHash:"abc125...fed3" },
        { from:"b2", to:"b5", amount:11.5, token:"BTC", timestamp:now-46*h, txHash:"abc126...fed4" },
        { from:"b3", to:"b5", amount:12, token:"BTC", timestamp:now-44*h, txHash:"abc127...fed5" },
        { from:"b3", to:"b6", amount:12.5, token:"BTC", timestamp:now-42*h, txHash:"abc128...fed6" },
        { from:"b4", to:"b7", amount:7.8, token:"BTC", timestamp:now-24*h, txHash:"abc129...fed7" },
        { from:"b5", to:"b7", amount:23, token:"BTC", timestamp:now-18*h, txHash:"abc130...fed8" },
        { from:"b6", to:"b7", amount:12, token:"BTC", timestamp:now-12*h, txHash:"abc131...fed9" },
      ]
    },
    "sol-rugpull": {
      name: "SOL Memecoin Rug Pull",
      chain: "sol",
      desc: "Rug pull: liquidity drained from $MOONDOG token",
      startAddr: "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
      nodes: [
        { id:"s1", address:"7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU", label:"Deployer", type:"wallet", balance:"0 SOL", riskScore:95, firstSeen:"2025-11-02" },
        { id:"s2", address:"DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263", label:"$MOONDOG Token", type:"contract", balance:"—", riskScore:99, firstSeen:"2025-11-02" },
        { id:"s3", address:"8rF8GxBMoAssJE8nBbMGRNPmuVBrhSjRiEfLGJoVNQBx", label:"Raydium LP Pool", type:"defi", balance:"—", riskScore:15, firstSeen:"2022-03-10" },
        { id:"s4", address:"5nTG2eMEhP3HFN7MiY8z5pRNKv7cER1GBn3FHUHgCPSi", label:"Drain Wallet 1", type:"wallet", balance:"8,200 SOL", riskScore:88, firstSeen:"2025-11-02" },
        { id:"s5", address:"9pBD3kvxRN7fjmQWuFP2rYsTgZoVNRPT7gMbSuvRaEBq", label:"Drain Wallet 2", type:"wallet", balance:"4,100 SOL", riskScore:85, firstSeen:"2025-11-02" },
        { id:"s6", address:"FWznbcNXWQuHTawe9RBqDz1cUHKA1VJkcHp6RpCH8has", label:"Jupiter Aggregator", type:"defi", balance:"—", riskScore:5, firstSeen:"2022-07-14" },
        { id:"s7", address:"2wMEpVnBRbnBi8Gf3tCBqgN9TCmQFB8eUXKLPjmoGTVp", label:"Binance Deposit", type:"exchange", balance:"—", riskScore:2, firstSeen:"2020-08-05" },
      ],
      edges: [
        { from:"s1", to:"s2", amount:0, token:"Deploy", timestamp:now-96*h, txHash:"5xYz...abc1" },
        { from:"s1", to:"s3", amount:500, token:"SOL", timestamp:now-94*h, txHash:"5xYz...abc2" },
        { from:"s3", to:"s4", amount:8200, token:"SOL", timestamp:now-24*h, txHash:"5xYz...abc3" },
        { from:"s3", to:"s5", amount:4100, token:"SOL", timestamp:now-24*h, txHash:"5xYz...abc4" },
        { from:"s4", to:"s6", amount:8000, token:"SOL", timestamp:now-12*h, txHash:"5xYz...abc5" },
        { from:"s5", to:"s6", amount:4000, token:"SOL", timestamp:now-10*h, txHash:"5xYz...abc6" },
        { from:"s6", to:"s7", amount:11800, token:"SOL", timestamp:now-6*h, txHash:"5xYz...abc7" },
      ]
    },
    "eth-blackrock": {
      name: "BlackRock ETF Inflow",
      chain: "eth",
      desc: "Institutional ETH accumulation via BlackRock iShares ETF",
      startAddr: "0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b",
      nodes: [
        { id:"i1", address:"0x9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b", label:"Authorized Participant", type:"institution", balance:"$420M", riskScore:3, firstSeen:"2024-01-10" },
        { id:"i2", address:"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48", label:"USDC Contract", type:"contract", balance:"—", riskScore:2, firstSeen:"2018-09-10" },
        { id:"i3", address:"0x8a3c4e5f6b7c8d9e0a1b2c3d4e5f6a7b8c9d0e1f", label:"OTC Desk (Cumberland)", type:"institution", balance:"$2.1B", riskScore:5, firstSeen:"2019-06-22" },
        { id:"i4", address:"0x4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c", label:"Coinbase Prime Custody", type:"exchange", balance:"580,000 ETH", riskScore:2, firstSeen:"2021-08-15" },
        { id:"i5", address:"0x5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d", label:"BlackRock iShares ETH Trust", type:"institution", balance:"410,000 ETH", riskScore:1, firstSeen:"2024-07-23" },
        { id:"i6", address:"0xbe0eB53F46cd790Cd13851d5EFf43D12404d33E8", label:"Binance Cold Wallet", type:"exchange", balance:"1.9M ETH", riskScore:4, firstSeen:"2019-01-15" },
      ],
      edges: [
        { from:"i1", to:"i2", amount:150000000, token:"USDC", timestamp:now-72*h, txHash:"0xins1...aaa1" },
        { from:"i1", to:"i3", amount:100000000, token:"USDC", timestamp:now-68*h, txHash:"0xins2...aaa2" },
        { from:"i3", to:"i4", amount:42000, token:"ETH", timestamp:now-48*h, txHash:"0xins3...aaa3" },
        { from:"i2", to:"i3", amount:50000000, token:"USDC", timestamp:now-46*h, txHash:"0xins4...aaa4" },
        { from:"i4", to:"i5", amount:41500, token:"ETH", timestamp:now-24*h, txHash:"0xins5...aaa5" },
        { from:"i3", to:"i6", amount:8000, token:"ETH", timestamp:now-36*h, txHash:"0xins6...aaa6" },
      ]
    }
  };
}

// ═══════════════════════════════════════════════════════════════
// FORCE-DIRECTED GRAPH ENGINE
// ═══════════════════════════════════════════════════════════════
class ForceGraph {
  constructor(nodes, edges, width, height) {
    this.width = width;
    this.height = height;
    this.nodes = nodes.map((n,i) => ({
      ...n,
      x: width/2 + Math.cos(i/nodes.length*Math.PI*2)*Math.min(width,height)*0.3,
      y: height/2 + Math.sin(i/nodes.length*Math.PI*2)*Math.min(width,height)*0.3,
      vx: 0, vy: 0,
      radius: n.type==="exchange"||n.type==="institution"?24:n.type==="mixer"||n.type==="contract"||n.type==="defi"?20:16,
    }));
    this.edges = edges.map(e => ({...e}));
    this.alpha = 1;
    this.settled = false;
  }
  tick() {
    if(this.settled) return;
    const dt = 0.3, repulsion = 8000, attraction = 0.008, damping = 0.88, center = 0.01;
    const cx = this.width/2, cy = this.height/2;
    for(let i=0;i<this.nodes.length;i++){
      const a = this.nodes[i];
      a.vx += (cx - a.x)*center;
      a.vy += (cy - a.y)*center;
      for(let j=i+1;j<this.nodes.length;j++){
        const b = this.nodes[j];
        let dx = a.x-b.x, dy = a.y-b.y;
        let dist = Math.sqrt(dx*dx+dy*dy)||1;
        let force = repulsion/(dist*dist);
        a.vx += dx/dist*force*dt;
        a.vy += dy/dist*force*dt;
        b.vx -= dx/dist*force*dt;
        b.vy -= dy/dist*force*dt;
      }
    }
    const nMap = {};
    this.nodes.forEach(n => nMap[n.id]=n);
    for(const e of this.edges){
      const a = nMap[e.from], b = nMap[e.to];
      if(!a||!b) continue;
      let dx = b.x-a.x, dy = b.y-a.y;
      let dist = Math.sqrt(dx*dx+dy*dy)||1;
      let force = (dist-180)*attraction;
      a.vx += dx/dist*force;
      a.vy += dy/dist*force;
      b.vx -= dx/dist*force;
      b.vy -= dy/dist*force;
    }
    let maxV = 0;
    for(const n of this.nodes){
      n.vx *= damping; n.vy *= damping;
      n.x += n.vx; n.y += n.vy;
      n.x = Math.max(40, Math.min(this.width-40, n.x));
      n.y = Math.max(40, Math.min(this.height-40, n.y));
      maxV = Math.max(maxV, Math.abs(n.vx)+Math.abs(n.vy));
    }
    this.alpha *= 0.98;
    if(this.alpha < 0.001 || maxV < 0.1) this.settled = true;
  }
}

// ═══════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════
export default function CryptoTracer() {
  const canvasRef = useRef(null);
  const graphRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);
  const panRef = useRef({ x:0, y:0, zoom:1, dragging:false, lastX:0, lastY:0 });
  const hoverNodeRef = useRef(null);
  const selectedNodeRef = useRef(null);
  const [selectedNode, setSelectedNode] = useState(null);
  const [hoverEdge, setHoverEdge] = useState(null);
  const [mousePos, setMousePos] = useState({x:0,y:0});
  const [chain, setChain] = useState("eth");
  const [address, setAddress] = useState("");
  const [traceHistory, setTraceHistory] = useState([]);
  const [activeTrace, setActiveTrace] = useState(null);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [depth, setDepth] = useState(5);
  const [contextMenu, setContextMenu] = useState(null);
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [tracing, setTracing] = useState(false);
  const [timelinePos, setTimelinePos] = useState(1);
  const [focusNode, setFocusNode] = useState(null);
  const sizeRef = useRef({w:1200,h:700});

  const mockTraces = useMemo(() => generateMockTraces(), []);

  const presets = [
    { key:"eth-whale", label:"🐋 ETH Whale → Coinbase" },
    { key:"btc-mixer", label:"🔄 BTC Mixer → Kraken" },
    { key:"sol-rugpull", label:"💀 SOL Memecoin Rug Pull" },
    { key:"eth-blackrock", label:"🏦 BlackRock ETF Inflow" },
  ];

  // ── Load a trace ──
  const loadTrace = useCallback((key) => {
    const trace = mockTraces[key];
    if(!trace) return;
    setTracing(true);
    setActiveTrace(key);
    setChain(trace.chain);
    setAddress(trace.startAddr);
    setSelectedNode(null);
    selectedNodeRef.current = null;
    setFocusNode(null);
    setContextMenu(null);
    setTimelinePos(1);
    setHoverEdge(null);

    const cw = sizeRef.current.w - (leftOpen?220:0) - (rightOpen?280:0);
    const ch = sizeRef.current.h - 130;
    graphRef.current = new ForceGraph(trace.nodes, trace.edges, Math.max(cw,600), Math.max(ch,400));
    particlesRef.current = [];
    panRef.current = {x:0,y:0,zoom:1,dragging:false,lastX:0,lastY:0};

    // Spawn particles after layout settles
    setTimeout(() => {
      spawnParticles(trace.edges, trace.nodes);
      setTracing(false);
    }, 800);

    setTraceHistory(prev => {
      const exists = prev.find(h => h.key===key);
      if(exists) return prev;
      return [{key, name:trace.name, chain:trace.chain, time:Date.now()}, ...prev].slice(0,20);
    });
  }, [mockTraces, leftOpen, rightOpen]);

  // ── Spawn animated particles along edges ──
  const spawnParticles = useCallback((edges) => {
    const ps = [];
    edges.forEach((e,ei) => {
      const count = Math.min(Math.max(2, Math.ceil(Math.log10(e.amount+1))), 6);
      for(let i=0;i<count;i++){
        ps.push({
          edgeIdx: ei,
          from: e.from, to: e.to,
          progress: Math.random(),
          speed: randBetween(0.002, 0.006),
          size: randBetween(1.5, 3),
          opacity: randBetween(0.4, 0.9),
        });
      }
    });
    particlesRef.current = ps;
  }, []);

  // ── Canvas render loop ──
  useEffect(() => {
    const canvas = canvasRef.current;
    if(!canvas) return;
    const ctx = canvas.getContext("2d");
    let running = true;

    const render = () => {
      if(!running) return;
      const g = graphRef.current;
      const rect = canvas.parentElement?.getBoundingClientRect();
      if(rect) {
        canvas.width = rect.width * 2;
        canvas.height = rect.height * 2;
        canvas.style.width = rect.width+"px";
        canvas.style.height = rect.height+"px";
        sizeRef.current = {w:rect.width, h:rect.height};
      }
      ctx.setTransform(2,0,0,2,0,0);
      ctx.clearRect(0,0,canvas.width,canvas.height);

      // Grid background
      const pan = panRef.current;
      ctx.save();
      ctx.globalAlpha = 0.04;
      ctx.strokeStyle = "#00e5ff";
      const gridSize = 50 * pan.zoom;
      const ox = pan.x % gridSize, oy = pan.y % gridSize;
      const w = canvas.width/2, h = canvas.height/2;
      for(let x=ox;x<w;x+=gridSize){ ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke(); }
      for(let y=oy;y<h;y+=gridSize){ ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke(); }
      ctx.restore();

      if(!g){ animRef.current = requestAnimationFrame(render); return; }
      g.tick();

      ctx.save();
      ctx.translate(pan.x, pan.y);
      ctx.scale(pan.zoom, pan.zoom);

      const nMap = {};
      g.nodes.forEach(n => nMap[n.id]=n);
      const maxAmt = Math.max(...g.edges.map(e=>e.amount||1));
      const tp = timelinePos;

      // ── Draw edges ──
      g.edges.forEach((e,ei) => {
        const a = nMap[e.from], b = nMap[e.to];
        if(!a||!b) return;
        if(focusNode && e.from!==focusNode && e.to!==focusNode) { return; }
        const progress = ei / g.edges.length;
        if(progress > tp) return;

        const thickness = 1 + (e.amount/maxAmt)*4;
        const fromType = NODE_TYPES[a.type] || NODE_TYPES.unknown;
        const toType = NODE_TYPES[b.type] || NODE_TYPES.unknown;

        ctx.save();
        ctx.lineWidth = thickness;
        ctx.strokeStyle = fromType.color;
        ctx.globalAlpha = 0.3 + (e.amount/maxAmt)*0.4;
        ctx.shadowColor = fromType.color;
        ctx.shadowBlur = 6;

        // Curved edge
        const mx = (a.x+b.x)/2, my = (a.y+b.y)/2;
        const dx = b.x-a.x, dy = b.y-a.y;
        const perpX = -dy*0.15, perpY = dx*0.15;
        const cpx = mx+perpX, cpy = my+perpY;

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.quadraticCurveTo(cpx, cpy, b.x, b.y);
        ctx.stroke();

        // Arrow
        const t = 0.85;
        const ax2 = (1-t)*(1-t)*a.x + 2*(1-t)*t*cpx + t*t*b.x;
        const ay2 = (1-t)*(1-t)*a.y + 2*(1-t)*t*cpy + t*t*b.y;
        const t2 = 0.83;
        const ax1 = (1-t2)*(1-t2)*a.x + 2*(1-t2)*t2*cpx + t2*t2*b.x;
        const ay1 = (1-t2)*(1-t2)*a.y + 2*(1-t2)*t2*cpy + t2*t2*b.y;
        const angle = Math.atan2(ay2-ay1, ax2-ax1);
        ctx.fillStyle = fromType.color;
        ctx.beginPath();
        ctx.moveTo(ax2, ay2);
        ctx.lineTo(ax2-10*Math.cos(angle-0.35), ay2-10*Math.sin(angle-0.35));
        ctx.lineTo(ax2-10*Math.cos(angle+0.35), ay2-10*Math.sin(angle+0.35));
        ctx.closePath();
        ctx.fill();

        ctx.restore();
      });

      // ── Draw particles ──
      particlesRef.current.forEach(p => {
        const a = nMap[p.from], b = nMap[p.to];
        if(!a||!b) return;
        if(focusNode && p.from!==focusNode && p.to!==focusNode) return;
        p.progress += p.speed;
        if(p.progress > 1) p.progress -= 1;
        const t = p.progress;
        const mx = (a.x+b.x)/2, my = (a.y+b.y)/2;
        const dx = b.x-a.x, dy = b.y-a.y;
        const cpx = mx + (-dy*0.15), cpy = my + (dx*0.15);
        const px = (1-t)*(1-t)*a.x + 2*(1-t)*t*cpx + t*t*b.x;
        const py = (1-t)*(1-t)*a.y + 2*(1-t)*t*cpy + t*t*b.y;
        const fromType = NODE_TYPES[a.type] || NODE_TYPES.unknown;
        ctx.save();
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = fromType.color;
        ctx.shadowColor = fromType.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI*2);
        ctx.fill();
        ctx.restore();
      });

      // ── Draw nodes ──
      const hovId = hoverNodeRef.current;
      const selId = selectedNodeRef.current;
      g.nodes.forEach(n => {
        if(focusNode && n.id!==focusNode) {
          const connected = g.edges.some(e => (e.from===focusNode && e.to===n.id) || (e.to===focusNode && e.from===n.id));
          if(!connected) return;
        }
        const type = NODE_TYPES[n.type] || NODE_TYPES.unknown;
        const isHov = n.id === hovId;
        const isSel = n.id === selId;
        const r = n.radius * (isHov?1.2:1);

        // Glow
        ctx.save();
        ctx.shadowColor = type.color;
        ctx.shadowBlur = isSel?20:isHov?14:8;
        ctx.fillStyle = isSel ? type.color : isHov ? type.glow : "rgba(10,10,20,.85)";
        ctx.strokeStyle = type.color;
        ctx.lineWidth = isSel?2.5:1.5;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI*2);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Icon
        ctx.save();
        ctx.fillStyle = isSel ? "#000" : type.color;
        ctx.font = `${r*0.8}px monospace`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(type.icon, n.x, n.y+1);
        ctx.restore();

        // Label
        ctx.save();
        ctx.fillStyle = "#fff";
        ctx.font = "bold 9px 'SF Mono',monospace";
        ctx.textAlign = "center";
        ctx.globalAlpha = 0.9;
        const lbl = n.label || shortenAddr(n.address);
        ctx.fillText(lbl, n.x, n.y+r+12);
        if(n.label) {
          ctx.font = "8px monospace";
          ctx.globalAlpha = 0.4;
          ctx.fillText(shortenAddr(n.address), n.x, n.y+r+22);
        }
        ctx.restore();
      });

      ctx.restore();
      animRef.current = requestAnimationFrame(render);
    };
    render();
    return () => { running=false; cancelAnimationFrame(animRef.current); };
  }, [activeTrace, timelinePos, focusNode]);

  // ── Canvas mouse events ──
  const canvasToGraph = useCallback((cx, cy) => {
    const pan = panRef.current;
    return { x: (cx - pan.x) / pan.zoom, y: (cy - pan.y) / pan.zoom };
  }, []);

  const findNodeAt = useCallback((gx, gy) => {
    const g = graphRef.current;
    if(!g) return null;
    for(let i=g.nodes.length-1;i>=0;i--){
      const n = g.nodes[i];
      const dx = gx-n.x, dy = gy-n.y;
      if(dx*dx+dy*dy < (n.radius+6)*(n.radius+6)) return n;
    }
    return null;
  }, []);

  const findEdgeAt = useCallback((gx, gy) => {
    const g = graphRef.current;
    if(!g) return null;
    const nMap = {};
    g.nodes.forEach(n => nMap[n.id]=n);
    for(const e of g.edges) {
      const a = nMap[e.from], b = nMap[e.to];
      if(!a||!b) continue;
      const mx=(a.x+b.x)/2, my=(a.y+b.y)/2;
      const dx=b.x-a.x, dy=b.y-a.y;
      const cpx=mx+(-dy*0.15), cpy=my+(dx*0.15);
      // Simple proximity check along curve
      for(let t=0;t<=1;t+=0.05){
        const px=(1-t)*(1-t)*a.x+2*(1-t)*t*cpx+t*t*b.x;
        const py=(1-t)*(1-t)*a.y+2*(1-t)*t*cpy+t*t*b.y;
        if(Math.abs(gx-px)<12 && Math.abs(gy-py)<12) return e;
      }
    }
    return null;
  }, []);

  const onCanvasMouseMove = useCallback((ev) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if(!rect) return;
    const cx = ev.clientX - rect.left, cy = ev.clientY - rect.top;
    const pan = panRef.current;

    if(pan.dragging) {
      if(pan.dragNode) {
        const {x,y} = canvasToGraph(cx,cy);
        pan.dragNode.x = x;
        pan.dragNode.y = y;
        pan.dragNode.vx = 0;
        pan.dragNode.vy = 0;
      } else {
        pan.x += cx - pan.lastX;
        pan.y += cy - pan.lastY;
      }
      pan.lastX = cx;
      pan.lastY = cy;
      return;
    }

    const {x,y} = canvasToGraph(cx,cy);
    const node = findNodeAt(x,y);
    hoverNodeRef.current = node?.id || null;
    canvasRef.current.style.cursor = node ? "pointer" : "grab";

    const edge = !node ? findEdgeAt(x,y) : null;
    setHoverEdge(edge);
    if(edge) setMousePos({x:cx,y:cy});
  }, [canvasToGraph, findNodeAt, findEdgeAt]);

  const onCanvasMouseDown = useCallback((ev) => {
    if(ev.button === 2) return; // right click handled separately
    const rect = canvasRef.current?.getBoundingClientRect();
    if(!rect) return;
    const cx = ev.clientX-rect.left, cy = ev.clientY-rect.top;
    const {x,y} = canvasToGraph(cx,cy);
    const node = findNodeAt(x,y);
    const pan = panRef.current;
    pan.dragging = true;
    pan.lastX = cx;
    pan.lastY = cy;
    pan.dragNode = node || null;

    if(node) {
      selectedNodeRef.current = node.id;
      setSelectedNode(node);
      setRightOpen(true);
    }
    setContextMenu(null);
  }, [canvasToGraph, findNodeAt]);

  const onCanvasMouseUp = useCallback(() => {
    panRef.current.dragging = false;
    panRef.current.dragNode = null;
  }, []);

  const onCanvasWheel = useCallback((ev) => {
    ev.preventDefault();
    const pan = panRef.current;
    const rect = canvasRef.current?.getBoundingClientRect();
    if(!rect) return;
    const cx = ev.clientX-rect.left, cy = ev.clientY-rect.top;
    const factor = ev.deltaY < 0 ? 1.08 : 0.92;
    const newZoom = Math.max(0.2, Math.min(4, pan.zoom*factor));
    pan.x = cx - (cx-pan.x)*(newZoom/pan.zoom);
    pan.y = cy - (cy-pan.y)*(newZoom/pan.zoom);
    pan.zoom = newZoom;
  }, []);

  const onCanvasDblClick = useCallback((ev) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if(!rect) return;
    const cx = ev.clientX-rect.left, cy = ev.clientY-rect.top;
    const {x,y} = canvasToGraph(cx,cy);
    const node = findNodeAt(x,y);
    if(node) {
      setFocusNode(prev => prev===node.id ? null : node.id);
    } else {
      setFocusNode(null);
    }
  }, [canvasToGraph, findNodeAt]);

  const onCanvasContextMenu = useCallback((ev) => {
    ev.preventDefault();
    const rect = canvasRef.current?.getBoundingClientRect();
    if(!rect) return;
    const cx = ev.clientX-rect.left, cy = ev.clientY-rect.top;
    const {x,y} = canvasToGraph(cx,cy);
    const node = findNodeAt(x,y);
    if(node) {
      setContextMenu({ x:ev.clientX-rect.left, y:ev.clientY-rect.top, node });
    }
  }, [canvasToGraph, findNodeAt]);

  const handleTrace = useCallback(() => {
    const addrLow = address.toLowerCase().trim();
    const matchKey = Object.keys(mockTraces).find(k => mockTraces[k].startAddr.toLowerCase()===addrLow || mockTraces[k].chain===chain);
    if(matchKey) loadTrace(matchKey);
    else if(presets[0]) loadTrace(presets[0].key); // fallback demo
  }, [address, chain, mockTraces, loadTrace, presets]);

  const activeData = activeTrace ? mockTraces[activeTrace] : null;
  const chainInfo = CHAINS.find(c => c.id===chain) || CHAINS[0];

  // ── Edge tooltip data ──
  const edgeTooltip = useMemo(() => {
    if(!hoverEdge || !activeData) return null;
    const nMap = {};
    activeData.nodes.forEach(n => nMap[n.id]=n);
    const from = nMap[hoverEdge.from];
    const to = nMap[hoverEdge.to];
    return { ...hoverEdge, fromLabel: from?.label||shortenAddr(from?.address), toLabel: to?.label||shortenAddr(to?.address) };
  }, [hoverEdge, activeData]);

  // ── RENDER ──
  return (<div style={S.root}>
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;600;700&family=Orbitron:wght@400;700;900&display=swap');
      .ct-btn{background:rgba(0,229,255,.08);border:1px solid rgba(0,229,255,.25);color:#00e5ff;padding:6px 14px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s;white-space:nowrap}
      .ct-btn:hover{background:rgba(0,229,255,.18);border-color:#00e5ff;box-shadow:0 0 12px rgba(0,229,255,.3)}
      .ct-btn:active{transform:scale(.97)}
      .ct-btn-primary{background:linear-gradient(135deg,rgba(0,229,255,.2),rgba(191,90,242,.15));border-color:#00e5ff;font-size:13px;padding:8px 24px;text-transform:uppercase;letter-spacing:.1em}
      .ct-btn-primary:hover{background:linear-gradient(135deg,rgba(0,229,255,.35),rgba(191,90,242,.25));box-shadow:0 0 24px rgba(0,229,255,.4)}
      .ct-input{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#e0e0e0;padding:7px 12px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:12px;outline:none;transition:border .15s}
      .ct-input:focus{border-color:#00e5ff;box-shadow:0 0 8px rgba(0,229,255,.2)}
      .ct-select{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);color:#e0e0e0;padding:7px 10px;border-radius:6px;font-family:'JetBrains Mono',monospace;font-size:11px;outline:none;cursor:pointer;-webkit-appearance:none}
      .ct-select option{background:#0a0a14;color:#e0e0e0}
      .ct-scrollbar::-webkit-scrollbar{width:4px}.ct-scrollbar::-webkit-scrollbar-track{background:transparent}.ct-scrollbar::-webkit-scrollbar-thumb{background:rgba(0,229,255,.2);border-radius:2px}
      .ct-preset{display:flex;align-items:center;gap:8px;padding:8px 10px;border-radius:6px;cursor:pointer;transition:all .12s;font-size:11px;color:rgba(255,255,255,.6);border:1px solid transparent}
      .ct-preset:hover{background:rgba(0,229,255,.06);border-color:rgba(0,229,255,.15);color:#fff}
      .ct-preset.active{background:rgba(0,229,255,.1);border-color:rgba(0,229,255,.3);color:#00e5ff}
      .ct-cm-item{padding:7px 12px;font-size:11px;color:rgba(255,255,255,.7);cursor:pointer;border-radius:4px;transition:all .1s;font-family:'JetBrains Mono',monospace}
      .ct-cm-item:hover{background:rgba(0,229,255,.12);color:#00e5ff}
      @keyframes ctPulse{0%,100%{opacity:.4}50%{opacity:1}}
      @keyframes ctScan{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}
      @keyframes ctGlow{0%,100%{box-shadow:0 0 8px rgba(0,229,255,.2)}50%{box-shadow:0 0 20px rgba(0,229,255,.5)}}
      @keyframes ctScanline{0%{top:-2px}100%{top:100%}}
      .ct-scanline{position:absolute;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,rgba(0,229,255,.06),transparent);pointer-events:none;animation:ctScanline 8s linear infinite;z-index:1}
    `}</style>

    {/* ── TITLE BAR ── */}
    <div style={S.titleBar}>
      <div style={{display:"flex",alignItems:"center",gap:10}}>
        <div style={S.titleIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth="2">
            <circle cx="6" cy="6" r="3"/><circle cx="18" cy="6" r="3"/><circle cx="12" cy="18" r="3"/>
            <line x1="8.5" y1="7.5" x2="10" y2="16"/><line x1="15.5" y1="7.5" x2="14" y2="16"/><line x1="9" y1="6" x2="15" y2="6"/>
          </svg>
        </div>
        <span style={{fontFamily:"'Orbitron',monospace",fontWeight:900,fontSize:14,letterSpacing:".12em",color:"#00e5ff"}}>CRYPTO TRACER</span>
        <div style={{width:6,height:6,borderRadius:"50%",background:"#00e68a",animation:"ctPulse 2s infinite",marginLeft:4}}/>
        <span style={{fontSize:10,color:"rgba(255,255,255,.25)",fontFamily:"'JetBrains Mono',monospace"}}>v1.0 — Intelligence Mode</span>
      </div>
      <div style={{display:"flex",alignItems:"center",gap:12}}>
        <span style={{fontSize:10,color:"rgba(255,255,255,.3)",fontFamily:"'JetBrains Mono',monospace"}}>{chainInfo.name} Network</span>
        <div style={{width:8,height:8,borderRadius:"50%",background:chainInfo.color,boxShadow:`0 0 8px ${chainInfo.color}`}}/>
      </div>
    </div>

    {/* ── INPUT BAR ── */}
    <div style={S.inputBar}>
      <select className="ct-select" value={chain} onChange={e=>setChain(e.target.value)} style={{minWidth:120}}>
        {CHAINS.map(c => <option key={c.id} value={c.id}>{c.name} ({c.symbol})</option>)}
      </select>
      <input className="ct-input" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Wallet address or transaction hash…" style={{flex:1,minWidth:200}} onKeyDown={e=>e.key==="Enter"&&handleTrace()} />
      <button className="ct-btn ct-btn-primary" onClick={handleTrace} disabled={tracing}>
        {tracing ? "⟳ TRACING…" : "⬡ TRACE"}
      </button>
      <button className="ct-btn" onClick={()=>{setActiveTrace(null);graphRef.current=null;setSelectedNode(null);setAddress("");}}>Clear</button>
      <button className="ct-btn" onClick={()=>setShowAdvanced(!showAdvanced)} style={{fontSize:10,padding:"6px 10px"}}>
        {showAdvanced?"▾":"▸"} Advanced
      </button>
      {showAdvanced && (
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <span style={{fontSize:10,color:"rgba(255,255,255,.4)"}}>Depth:</span>
          <input type="range" min={1} max={10} value={depth} onChange={e=>setDepth(+e.target.value)} style={{width:80,accentColor:"#00e5ff"}} />
          <span style={{fontSize:10,color:"#00e5ff",fontFamily:"monospace"}}>{depth}</span>
        </div>
      )}
    </div>

    {/* ── MAIN CONTENT ── */}
    <div style={S.main}>

      {/* ── LEFT SIDEBAR ── */}
      <div style={{...S.sidebar, width:leftOpen?220:0, minWidth:leftOpen?220:0, opacity:leftOpen?1:0, overflow:"hidden", transition:"all .25s ease"}}>
        <div style={S.sidebarInner} className="ct-scrollbar">
          <div style={S.sideSection}>
            <div style={S.sideSectionTitle}>⬡ Preset Traces</div>
            {presets.map(p => (
              <div key={p.key} className={`ct-preset ${activeTrace===p.key?"active":""}`} onClick={()=>loadTrace(p.key)}>
                {p.label}
              </div>
            ))}
          </div>
          {traceHistory.length > 0 && (
            <div style={S.sideSection}>
              <div style={S.sideSectionTitle}>⏱ History</div>
              {traceHistory.map((h,i) => (
                <div key={i} className={`ct-preset ${activeTrace===h.key?"active":""}`} onClick={()=>loadTrace(h.key)}>
                  <span style={{fontSize:10}}>{CHAINS.find(c=>c.id===h.chain)?.symbol}</span>
                  <span>{h.name}</span>
                </div>
              ))}
            </div>
          )}
          <div style={S.sideSection}>
            <div style={S.sideSectionTitle}>ℹ Legend</div>
            {Object.entries(NODE_TYPES).map(([k,v]) => (
              <div key={k} style={{display:"flex",alignItems:"center",gap:8,padding:"4px 6px",fontSize:10,color:"rgba(255,255,255,.55)"}}>
                <div style={{width:10,height:10,borderRadius:"50%",background:v.color,boxShadow:`0 0 6px ${v.glow}`,flexShrink:0}} />
                {v.label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── GRAPH AREA ── */}
      <div style={S.graphArea}>
        <div className="ct-scanline" />
        <div style={{position:"absolute",top:8,left:8,zIndex:10,display:"flex",gap:4}}>
          <button className="ct-btn" onClick={()=>setLeftOpen(!leftOpen)} style={{padding:"4px 8px",fontSize:10}}>{leftOpen?"◀":"▶"}</button>
          {focusNode && <button className="ct-btn" onClick={()=>setFocusNode(null)} style={{padding:"4px 8px",fontSize:10}}>✕ Exit Focus</button>}
        </div>
        <div style={{position:"absolute",top:8,right:8,zIndex:10}}>
          <button className="ct-btn" onClick={()=>setRightOpen(!rightOpen)} style={{padding:"4px 8px",fontSize:10}}>{rightOpen?"▶":"◀"}</button>
        </div>

        {!activeTrace && (
          <div style={S.emptyState}>
            <div style={{fontSize:48,marginBottom:16,opacity:.3}}>⬡</div>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:16,fontWeight:700,color:"rgba(0,229,255,.4)",marginBottom:8}}>No Active Trace</div>
            <div style={{fontSize:12,color:"rgba(255,255,255,.25)",maxWidth:300,textAlign:"center",lineHeight:1.6}}>
              Select a preset trace from the left panel, or enter a wallet address and click TRACE to begin analysis.
            </div>
          </div>
        )}

        <canvas
          ref={canvasRef}
          style={{width:"100%",height:"100%",display:"block",cursor:"grab"}}
          onMouseMove={onCanvasMouseMove}
          onMouseDown={onCanvasMouseDown}
          onMouseUp={onCanvasMouseUp}
          onMouseLeave={onCanvasMouseUp}
          onWheel={onCanvasWheel}
          onDoubleClick={onCanvasDblClick}
          onContextMenu={onCanvasContextMenu}
        />

        {/* Edge tooltip */}
        {edgeTooltip && (
          <div style={{...S.edgeTooltip, left:mousePos.x+16, top:mousePos.y-20}}>
            <div style={{fontSize:10,color:"#00e5ff",fontWeight:700,marginBottom:4}}>⬡ Transfer</div>
            <div style={{fontSize:11}}>{fmtAmt(edgeTooltip.amount)} {edgeTooltip.token}</div>
            <div style={{fontSize:9,color:"rgba(255,255,255,.4)",marginTop:2}}>{edgeTooltip.fromLabel} → {edgeTooltip.toLabel}</div>
            <div style={{fontSize:9,color:"rgba(255,255,255,.3)",marginTop:2}}>{fmtDate(edgeTooltip.timestamp)}</div>
            <div style={{fontSize:9,color:"rgba(0,229,255,.5)",marginTop:2}}>{edgeTooltip.txHash}</div>
          </div>
        )}

        {/* Context menu */}
        {contextMenu && (
          <div style={{...S.contextMenu, left:contextMenu.x, top:contextMenu.y}}>
            <div className="ct-cm-item" onClick={()=>{setFocusNode(contextMenu.node.id);setContextMenu(null);}}>🔍 Focus on node</div>
            <div className="ct-cm-item" onClick={()=>{setSelectedNode(contextMenu.node);setRightOpen(true);setContextMenu(null);}}>📋 View details</div>
            <div className="ct-cm-item" onClick={()=>setContextMenu(null)}>🏷️ Label as…</div>
            <div className="ct-cm-item" onClick={()=>setContextMenu(null)}>🌐 View on explorer</div>
            <div className="ct-cm-item" onClick={()=>setContextMenu(null)}>📝 Add note</div>
            <div className="ct-cm-item" style={{borderTop:"1px solid rgba(255,255,255,.06)"}} onClick={()=>setContextMenu(null)}>✕ Close</div>
          </div>
        )}

        {/* Tracing overlay */}
        {tracing && (
          <div style={S.tracingOverlay}>
            <div style={{fontFamily:"'Orbitron',monospace",fontSize:14,color:"#00e5ff",animation:"ctPulse 1s infinite"}}>⟳ Tracing fund flow…</div>
            <div style={{width:200,height:3,background:"rgba(0,229,255,.1)",borderRadius:2,overflow:"hidden",marginTop:12}}>
              <div style={{width:"40%",height:"100%",background:"linear-gradient(90deg,transparent,#00e5ff,transparent)",animation:"ctScan 1.2s linear infinite"}} />
            </div>
          </div>
        )}
      </div>

      {/* ── RIGHT SIDEBAR ── */}
      <div style={{...S.sidebar, width:rightOpen?280:0, minWidth:rightOpen?280:0, opacity:rightOpen?1:0, overflow:"hidden", transition:"all .25s ease"}}>
        <div style={S.sidebarInner} className="ct-scrollbar">
          {activeData && !selectedNode && (
            <div style={S.sideSection}>
              <div style={S.sideSectionTitle}>⬡ Trace Summary</div>
              <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginBottom:8}}>
                {[
                  {label:"Nodes",value:activeData.nodes.length,color:"#00e5ff"},
                  {label:"Edges",value:activeData.edges.length,color:"#bf5af2"},
                  {label:"Chain",value:CHAINS.find(c=>c.id===activeData.chain)?.symbol,color:CHAINS.find(c=>c.id===activeData.chain)?.color},
                  {label:"Risk Nodes",value:activeData.nodes.filter(n=>n.riskScore>60).length,color:"#ff375f"},
                ].map((s,i)=>(
                  <div key={i} style={{background:"rgba(255,255,255,.03)",border:"1px solid rgba(255,255,255,.05)",borderRadius:6,padding:"8px 10px",textAlign:"center"}}>
                    <div style={{fontFamily:"'Orbitron',monospace",fontSize:14,fontWeight:700,color:s.color}}>{s.value}</div>
                    <div style={{fontSize:8,color:"rgba(255,255,255,.3)",textTransform:"uppercase",letterSpacing:".06em",marginTop:2}}>{s.label}</div>
                  </div>
                ))}
              </div>
              <div style={{fontSize:10,color:"rgba(255,255,255,.3)",lineHeight:1.5,padding:"4px 0"}}>{activeData.desc}</div>
            </div>
          )}
          {selectedNode ? (<>
            <div style={{marginBottom:8}}>
              <button className="ct-btn" onClick={()=>{setSelectedNode(null);selectedNodeRef.current=null;}} style={{fontSize:9,padding:"4px 8px",width:"100%"}}>← Back to summary</button>
            </div>
            <div style={S.sideSection}>
              <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
                <div style={{width:14,height:14,borderRadius:"50%",background:NODE_TYPES[selectedNode.type]?.color||"#636366",boxShadow:`0 0 8px ${NODE_TYPES[selectedNode.type]?.glow}`}} />
                <span style={{fontFamily:"'Orbitron',monospace",fontSize:11,fontWeight:700,color:"#fff"}}>{selectedNode.label||"Unknown"}</span>
              </div>
              <div style={S.detailRow}><span style={S.detailLabel}>Type</span><span style={{...S.detailValue,color:NODE_TYPES[selectedNode.type]?.color}}>{NODE_TYPES[selectedNode.type]?.label}</span></div>
              <div style={S.detailRow}><span style={S.detailLabel}>Address</span><span style={{...S.detailValue,fontSize:9,wordBreak:"break-all"}}>{selectedNode.address}</span></div>
              <div style={S.detailRow}><span style={S.detailLabel}>Balance</span><span style={S.detailValue}>{selectedNode.balance}</span></div>
              <div style={S.detailRow}><span style={S.detailLabel}>First Seen</span><span style={S.detailValue}>{selectedNode.firstSeen}</span></div>
              <div style={S.detailRow}>
                <span style={S.detailLabel}>Risk Score</span>
                <span style={{...S.detailValue, color:selectedNode.riskScore>70?"#ff375f":selectedNode.riskScore>40?"#ff9f0a":"#00e68a",fontWeight:700}}>
                  {selectedNode.riskScore}/100
                </span>
              </div>
              {/* Risk bar */}
              <div style={{height:4,borderRadius:2,background:"rgba(255,255,255,.06)",marginTop:6,overflow:"hidden"}}>
                <div style={{height:"100%",width:`${selectedNode.riskScore}%`,background:selectedNode.riskScore>70?"#ff375f":selectedNode.riskScore>40?"#ff9f0a":"#00e68a",borderRadius:2,transition:"width .3s"}} />
              </div>
            </div>
            {/* Connected transactions */}
            {activeData && (
              <div style={S.sideSection}>
                <div style={S.sideSectionTitle}>Linked Transactions</div>
                {activeData.edges.filter(e=>e.from===selectedNode.id||e.to===selectedNode.id).map((e,i) => {
                  const isOut = e.from===selectedNode.id;
                  const nMap = {};
                  activeData.nodes.forEach(n=>nMap[n.id]=n);
                  const other = nMap[isOut?e.to:e.from];
                  return (
                    <div key={i} style={S.txRow}>
                      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                        <span style={{fontSize:10,color:isOut?"#ff375f":"#00e68a",fontWeight:700}}>{isOut?"OUT ↗":"IN ↙"}</span>
                        <span style={{fontSize:11,fontWeight:600,color:"#fff"}}>{fmtAmt(e.amount)} {e.token}</span>
                      </div>
                      <div style={{fontSize:9,color:"rgba(255,255,255,.35)",marginTop:2}}>{isOut?"→":"←"} {other?.label||shortenAddr(other?.address)}</div>
                      <div style={{fontSize:8,color:"rgba(0,229,255,.4)",marginTop:1}}>{fmtDate(e.timestamp)}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </>) : !activeData ? (
            <div style={{padding:20,textAlign:"center",color:"rgba(255,255,255,.2)",fontSize:11}}>
              <div style={{fontSize:28,marginBottom:8,opacity:.3}}>◈</div>
              Load a trace to begin analysis
            </div>
          ) : (
            <div style={{padding:20,textAlign:"center",color:"rgba(255,255,255,.2)",fontSize:11}}>
              <div style={{fontSize:28,marginBottom:8,opacity:.3}}>◈</div>
              Click a node to inspect
            </div>
          )}
        </div>
      </div>
    </div>

    {/* ── TIMELINE ── */}
    {activeTrace && (
      <div style={S.timeline}>
        <span style={{fontSize:9,color:"rgba(255,255,255,.3)",fontFamily:"monospace",minWidth:60}}>Timeline</span>
        <input
          type="range" min={0} max={1} step={0.01} value={timelinePos}
          onChange={e=>setTimelinePos(+e.target.value)}
          style={{flex:1,accentColor:"#00e5ff",height:3}}
        />
        <span style={{fontSize:9,color:"#00e5ff",fontFamily:"monospace",minWidth:40,textAlign:"right"}}>{Math.round(timelinePos*100)}%</span>
      </div>
    )}

    {/* ── STATUS BAR ── */}
    <div style={S.statusBar}>
      <span>{activeData ? `${activeData.nodes.length} nodes · ${activeData.edges.length} edges` : "Ready"}</span>
      <span>{activeData?.desc || "Select a trace to begin"}</span>
      <span>Zoom: {(panRef.current.zoom*100).toFixed(0)}% {focusNode ? " · Focus Mode" : ""}</span>
    </div>
  </div>);
}

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════
const S = {
  root: {
    width:"100%", height:"100vh", display:"flex", flexDirection:"column",
    background:"#06060f", color:"#e0e0e0", fontFamily:"'JetBrains Mono',monospace",
    overflow:"hidden", position:"relative",
  },
  titleBar: {
    display:"flex", alignItems:"center", justifyContent:"space-between",
    padding:"8px 16px", background:"rgba(0,0,0,.4)",
    borderBottom:"1px solid rgba(0,229,255,.1)", flexShrink:0,
  },
  titleIcon: {
    width:28, height:28, borderRadius:6,
    background:"rgba(0,229,255,.08)", border:"1px solid rgba(0,229,255,.2)",
    display:"grid", placeItems:"center",
  },
  inputBar: {
    display:"flex", alignItems:"center", gap:8, padding:"8px 16px",
    background:"rgba(0,0,0,.25)", borderBottom:"1px solid rgba(255,255,255,.04)",
    flexShrink:0, flexWrap:"wrap",
  },
  main: {
    flex:1, display:"flex", overflow:"hidden", position:"relative",
  },
  sidebar: {
    background:"rgba(10,10,20,.6)", borderRight:"1px solid rgba(255,255,255,.04)",
    flexShrink:0,
  },
  sidebarInner: {
    height:"100%", overflowY:"auto", padding:"12px 10px",
  },
  sideSection: {
    marginBottom:16,
  },
  sideSectionTitle: {
    fontSize:10, fontWeight:700, color:"rgba(0,229,255,.6)", letterSpacing:".08em",
    textTransform:"uppercase", marginBottom:8, padding:"0 6px",
  },
  graphArea: {
    flex:1, position:"relative", overflow:"hidden",
    background:"radial-gradient(ellipse at 50% 50%,rgba(0,229,255,.015) 0%,#06060f 70%)",
  },
  emptyState: {
    position:"absolute", inset:0, display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center", zIndex:5, pointerEvents:"none",
  },
  edgeTooltip: {
    position:"absolute",
    background:"rgba(10,10,20,.92)", border:"1px solid rgba(0,229,255,.2)",
    borderRadius:8, padding:"10px 14px", pointerEvents:"none",
    backdropFilter:"blur(12px)", zIndex:100, fontFamily:"'JetBrains Mono',monospace",
    color:"#fff", maxWidth:240,
  },
  contextMenu: {
    position:"absolute", background:"rgba(10,10,20,.95)", border:"1px solid rgba(0,229,255,.2)",
    borderRadius:8, padding:4, zIndex:200, backdropFilter:"blur(12px)", minWidth:170,
  },
  tracingOverlay: {
    position:"absolute", inset:0, display:"flex", flexDirection:"column",
    alignItems:"center", justifyContent:"center",
    background:"rgba(6,6,15,.7)", zIndex:50,
  },
  timeline: {
    display:"flex", alignItems:"center", gap:10, padding:"6px 16px",
    background:"rgba(0,0,0,.3)", borderTop:"1px solid rgba(255,255,255,.04)",
    flexShrink:0,
  },
  statusBar: {
    display:"flex", justifyContent:"space-between", padding:"4px 16px",
    background:"rgba(0,0,0,.5)", borderTop:"1px solid rgba(0,229,255,.06)",
    fontSize:9, color:"rgba(255,255,255,.25)", flexShrink:0,
  },
  detailRow: {
    display:"flex", justifyContent:"space-between", alignItems:"flex-start",
    padding:"5px 0", borderBottom:"1px solid rgba(255,255,255,.03)",
  },
  detailLabel: { fontSize:10, color:"rgba(255,255,255,.35)", fontWeight:500 },
  detailValue: { fontSize:10, color:"rgba(255,255,255,.8)", fontWeight:600, textAlign:"right", maxWidth:"60%" },
  txRow: {
    padding:"8px 10px", borderRadius:6, background:"rgba(255,255,255,.02)",
    border:"1px solid rgba(255,255,255,.04)", marginBottom:6,
  },
};
