// ═══════════════════════════════════════════════════════════════
// ECONOMIC CRIME HUB — OPERATIONS SIMULATOR
// simulator.js v2.1 — Core application logic
// Depends on: config.js (loaded first), case data files
// BUILD 20260302v2.2
// ═══════════════════════════════════════════════════════════════

// ═══ STATE ═══
var state={xp:0,casesCompleted:[],streak:0,lastPlayDate:null,badges:[],notes:{},shiftResults:[],currentCase:null,currentRole:null};
function loadState(){try{var s=JSON.parse(localStorage.getItem('ech-state'));if(s){state.xp=s.xp||0;state.casesCompleted=s.casesCompleted||[];state.streak=s.streak||0;state.lastPlayDate=s.lastPlayDate;state.badges=s.badges||[];state.notes=s.notes||{};}}catch(e){}var today=new Date().toISOString().slice(0,10);if(state.lastPlayDate&&state.lastPlayDate!==today){var diff=Math.floor((new Date(today)-new Date(state.lastPlayDate))/86400000);if(diff>1)state.streak=0;}}
function saveState(){localStorage.setItem('ech-state',JSON.stringify({xp:state.xp,casesCompleted:state.casesCompleted,streak:state.streak,lastPlayDate:state.lastPlayDate,badges:state.badges,notes:state.notes}));}
function getLevel(){var l=0;for(var i=LEVELS.length-1;i>=0;i--){if(state.xp>=LEVELS[i].xp){l=i;break;}}return l;}
function getLevelInfo(){var l=getLevel(),c=LEVELS[l],n=LEVELS[l+1]||{xp:c.xp+2000};return{level:l+1,title:c.title,xpForNext:n.xp,progress:Math.min(((state.xp-c.xp)/(n.xp-c.xp))*100,100)};}
function getAccuracy(){if(!state.casesCompleted.length)return null;return Math.round((state.casesCompleted.filter(function(c){return c.correct;}).length/state.casesCompleted.length)*100);}
function getCases(){return state.currentRole==='amld'?AML_DIRECT_CASES:state.currentRole==='amlc'?AML_CORRESP_CASES:state.currentRole==='kycp'?KYC_PERSONAL_CASES:state.currentRole==='kyce'?KYC_ENTITY_CASES:state.currentRole==='eddi'?EDD_INDIVIDUAL_CASES:state.currentRole==='edde'?EDD_ENTITY_CASES:AML_DIRECT_CASES;}

// ═══ NAV ═══
function nav(id){showScreen(id);document.querySelectorAll('.sim-b').forEach(function(b){b.classList.toggle('act',b.dataset.s===id);});document.getElementById('simNav').style.display='';}
function showScreen(id){document.querySelectorAll('.screen').forEach(function(s){s.classList.remove('active');});var el=document.getElementById('scr-'+id);if(el){el.classList.add('active');el.scrollTop=0;}if(id==='dashboard')renderDashboard();if(id==='cases')renderCaseLog();if(id==='profile')renderProfile();var isInv=id==='aml'||id==='kyc'||id==='eddi'||id==='edde'||id==='crypto';var sn=document.querySelector('.sim-nav');var bn=document.querySelector('.site-bnav');if(sn)sn.style.display=isInv?'none':'';if(bn)bn.style.display=isInv?'none':'';}
function backToShift(){document.getElementById('simNav').style.display='';showScreen('shift');renderShift();}

// ═══ DASHBOARD ═══
function renderDashboard(){var li=getLevelInfo(),acc=getAccuracy();document.getElementById('d-streak').innerHTML='<span class="fire">🔥</span> '+state.streak+' day streak';document.getElementById('d-level').textContent=li.title;document.getElementById('d-lvl-num').textContent=li.level;document.getElementById('d-xp-cur').textContent=state.xp;document.getElementById('d-xp-max').textContent=li.xpForNext;document.getElementById('d-xp-bar').style.width=li.progress+'%';document.getElementById('d-score').textContent=state.xp;document.getElementById('d-cases').textContent=state.casesCompleted.length;document.getElementById('d-acc').textContent=acc!==null?acc+'%':'—';document.getElementById('d-tip').textContent=TIPS[Math.floor(Math.random()*TIPS.length)];}

// ═══ SHIFT ═══
function startShift(role){state.currentRole=role;state.shiftResults=[];var today=new Date().toISOString().slice(0,10);if(state.lastPlayDate!==today)state.streak=(state.streak||0)+1;state.lastPlayDate=today;saveState();var badge=document.getElementById('shift-role-badge');badge.textContent=ROLE_LABELS[role]||role;badge.style.color=ROLE_COLORS[role]||'#00e68a';showScreen('shift');renderShift();document.querySelectorAll('.sim-b').forEach(function(b){b.classList.remove('act');});}

function renderShift(){
  var cases=getCases(),el=document.getElementById('shift-cards'),done=state.shiftResults||[];
  var html='<div class="tbl-wrap"><table class="case-table"><thead><tr>';
  html+='<th>Case ID</th><th>Subject</th><th>Description</th><th>Risk</th><th>Amount / Type</th><th>Status</th>';
  html+='</tr></thead><tbody>';
  cases.forEach(function(c,i){
    var resolved=done.find(function(r){return r.id===c.id;});
    var pc={critical:'pill-crit',high:'pill-high',med:'pill-med',low:'pill-low'}[c.riskLevel];
    html+='<tr class="'+(resolved?'resolved':'')+'" onclick="'+(resolved?'':'openCase('+i+')')+'">';
    html+='<td class="col-id">'+c.id+'</td>';
    html+='<td class="col-name">'+c.name+'</td>';
    html+='<td class="col-desc">'+c.teaser+'</td>';
    html+='<td class="col-risk"><span class="pill '+pc+'">'+c.riskLabel+'</span></td>';
    html+='<td class="col-amt">'+(c.amount||c.entityType||'—')+'</td>';
    if(resolved){
      html+='<td class="col-status"><span style="font-size:.62rem;font-weight:700;color:'+(resolved.correct?'#00e68a':'#ff4d6a')+'">'+(resolved.correct?'✓ Correct':'✗ Incorrect')+'</span></td>';
    }else{
      html+='<td class="col-status"><span style="font-size:.6rem;color:#00e68a;font-weight:600">Open →</span></td>';
    }
    html+='</tr>';
  });
  html+='</tbody></table></div>';
  el.innerHTML=html;
}

// ═══ SHARED RENDERERS ═══
function toggleColl(id){var el=document.getElementById(id);if(el)el.classList.toggle('open');}
function setCollCount(id,total,flagged){var el=document.getElementById(id);if(!el)return;el.textContent=flagged>0?flagged+' flagged / '+total:total+' items';}
function flagCategory(f){var fl=f.toLowerCase();for(var i=0;i<FLAG_CATS.length;i++){var cat=FLAG_CATS[i];for(var j=0;j<cat.keys.length;j++){if(fl.indexOf(cat.keys[j])!==-1)return cat;}}return{icon:'🔴',label:'Other'};}
// ═══ RISK GAUGE (SVG arc) ═══
function renderRiskGauge(elId,score,level){
  var el=document.getElementById(elId);if(!el)return;
  var col=score>80?'#ff4d6a':score>50?'#ffb833':score>30?'#38bdf8':'#00e68a';
  var label=score>80?'CRITICAL':score>50?'HIGH':score>30?'MEDIUM':'LOW';
  // Arc from 180° to 0° (left to right), radius 52, center 65,62
  var r=52,cx=65,cy=62;
  var startA=Math.PI,endA=Math.PI*(1-score/100);
  var x1=cx+r*Math.cos(startA),y1=cy-r*Math.sin(startA);
  var x2=cx+r*Math.cos(endA),y2=cy-r*Math.sin(endA);
  var large=score>50?1:0;
  var trackD='M '+(cx-r)+' '+cy+' A '+r+' '+r+' 0 1 1 '+(cx+r)+' '+cy;
  var arcD='M '+x1+' '+y1+' A '+r+' '+r+' 0 '+large+' 1 '+x2+' '+y2;
  el.innerHTML='<svg viewBox="0 0 130 75" width="130" height="75" style="display:block;margin:0 auto">'+
    '<defs><filter id="glow-g"><feGaussianBlur stdDeviation="3" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>'+
    '<path d="'+trackD+'" fill="none" stroke="rgba(74,106,138,.2)" stroke-width="8" stroke-linecap="round"/>'+
    '<path d="'+arcD+'" fill="none" stroke="'+col+'" stroke-width="8" stroke-linecap="round" filter="url(#glow-g)"/>'+
    '<circle cx="'+x2+'" cy="'+y2+'" r="4" fill="'+col+'" filter="url(#glow-g)"/>'+
    '</svg>'+
    '<div class="rg-score" style="color:'+col+'">'+score+'<span style="font-size:.7rem;color:#4a6a8a">/100</span></div>'+
    '<div class="rg-label" style="color:'+col+'">'+label+'</div>';
}

// ═══ DETAIL POPUP ═══
var _caseData=null;
var _popups={};
function openDetail(title,html){document.getElementById('detail-title').innerHTML=title;document.getElementById('detail-body').innerHTML=html;document.getElementById('ov-detail').classList.add('show');}
function closeDetail(){document.getElementById('ov-detail').classList.remove('show');}
function showPopup(key){if(_popups[key])openDetail(_popups[key].title,_popups[key].fn());}

// ═══ FLAG SUMMARY (clickable counts) ═══
function renderFlagSummary(elId,flags){
  var html='<div class="fsum"><div class="fsum-title">🚩 Flag Summary</div>';
  FLAG_CATS.forEach(function(cat,ci){
    var matched=[];flags.forEach(function(f){var fl=f.toLowerCase();for(var i=0;i<cat.keys.length;i++){if(fl.indexOf(cat.keys[i])!==-1){matched.push(f);break;}}});
    var count=matched.length;
    html+='<div class="fsum-row'+(count>0?' clickable':'')+'"'+(count>0?' onclick="showFlagCat('+ci+')"':'')+'>'+
      '<span class="fsum-label">'+cat.icon+' '+cat.label+'</span>'+
      '<span class="fsum-val '+(count>0?'hit':'ok')+'">'+count+(count>0?' ▸':'')+'</span></div>';
  });
  html+='<div style="margin-top:6px;padding-top:6px;border-top:1px solid rgba(255,77,106,.08)">'+
    '<div class="fsum-row clickable" onclick="showAllFlags()">'+
    '<span class="fsum-label" style="font-weight:700;color:#fff">Total Flags</span>'+
    '<span class="fsum-val hit" style="font-size:.62rem">'+flags.length+' ▸</span></div></div></div>';
  var el=document.getElementById(elId);if(el){el.innerHTML=flags.length?html:'';}
}
function showFlagCat(ci){
  if(!_caseData)return;var cat=FLAG_CATS[ci];var matched=[];
  _caseData.flags.forEach(function(f){var fl=f.toLowerCase();for(var i=0;i<cat.keys.length;i++){if(fl.indexOf(cat.keys[i])!==-1){matched.push(f);break;}}});
  openDetail(cat.icon+' '+cat.label+' ('+matched.length+')',
    matched.length?matched.map(function(f){return '<div class="flag-chip" style="margin-bottom:6px"><div class="flag-dot"></div><div>'+f+'</div></div>';}).join(''):'<div style="color:#4a6a8a;font-size:.76rem;padding:8px 0">No flags in this category.</div>');
}
function showAllFlags(){
  if(!_caseData)return;
  openDetail('🚩 All Red Flags ('+_caseData.flags.length+')',
    _caseData.flags.map(function(f){var cat=flagCategory(f);return '<div class="flag-chip" style="margin-bottom:6px"><div class="flag-dot"></div><div><span style="display:inline-block;font-size:.5rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:1px 6px;border-radius:3px;background:rgba(255,77,106,.1);color:#ff4d6a;margin-right:6px;vertical-align:middle">'+cat.icon+' '+cat.label+'</span>'+f+'</div></div>';}).join(''));
}

// ═══ CLICKABLE SUMMARY PANELS ═══
function renderTxSummary(elId,txs){
  var flagged=txs.filter(function(t){return t.flag;}).length;
  _popups.txs={title:'💳 Transaction History ('+txs.length+')',fn:function(){
    return txs.map(function(tx){return '<div class="gc-s p-3" style="margin-bottom:6px;display:flex;justify-content:space-between;align-items:center;gap:8px;'+(tx.flag?'border-left:3px solid #ff4d6a':'')+'"><div style="min-width:0;flex:1"><div style="font-family:Anybody;font-size:.88rem;font-weight:700;color:'+(tx.flag?'#ff4d6a':'#fff')+'">'+tx.amount+'</div><div style="font-size:.62rem;color:#4a6a8a;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">'+tx.to+'</div></div><div style="text-align:right;flex-shrink:0"><div style="font-size:.56rem;color:#4a6a8a;font-family:JetBrains Mono,monospace">'+tx.date+'</div><div style="font-size:.54rem;color:#8ba4c0">'+tx.country+'</div></div></div>';}).join('');
  }};
  document.getElementById(elId).innerHTML=
    '<div onclick="showPopup(\'txs\')" style="cursor:pointer">'+
    '<div style="display:flex;gap:12px;align-items:center;margin-top:4px">'+
    '<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#38bdf8">'+txs.length+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Total</div></div>'+
    (flagged?'<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#ff4d6a">'+flagged+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Flagged</div></div>':'')+
    '</div><div class="click-hint">Click to view all transactions ▸</div></div>';
}
function renderMediaSummary(elId,media,countId){
  var flagged=media.filter(function(m){return m.flag;}).length;
  if(countId){var ce=document.getElementById(countId);if(ce)ce.textContent=media.length+(flagged?' ('+flagged+' ⚠)':'');}
  _popups.media={title:'📰 Adverse Media ('+media.length+')',fn:function(){
    return media.map(function(m){return '<div class="gc-s p-3" style="margin-bottom:6px;'+(m.flag?'border-left:3px solid #ff4d6a':'')+'"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:.66rem;font-weight:700;color:#fff">'+m.source+'</span><span style="font-size:.56rem;color:#4a6a8a;font-family:JetBrains Mono,monospace">'+m.date+'</span></div><div style="font-size:.74rem;color:#8ba4c0;line-height:1.5">'+m.summary+'</div></div>';}).join('');
  }};
  document.getElementById(elId).innerHTML=
    '<div onclick="showPopup(\'media\')" style="cursor:pointer">'+
    '<div style="display:flex;gap:12px;align-items:center;margin-top:4px">'+
    '<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#ff4d6a">'+media.length+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Articles</div></div>'+
    (flagged?'<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#ff4d6a">'+flagged+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Flagged</div></div>':'')+
    '</div><div class="click-hint">Click to view all media ▸</div></div>';
}
function renderDocsSummary(elId,docs){
  var ok=docs.filter(function(d){return d.status==='provided'&&!d.flag;}).length;
  var issues=docs.length-ok;
  _popups.docs={title:'📄 Document Review ('+docs.length+')',fn:function(){
    return docs.map(function(d){var sCls=d.status==='provided'?(d.flag?'doc-inc':'doc-ok'):d.status==='missing'?'doc-miss':'doc-inc';var sLabel=d.status==='provided'?(d.flag?'⚠ Review':'✓ OK'):d.status==='missing'?'✗ Missing':'⚠ '+d.status.charAt(0).toUpperCase()+d.status.slice(1);return '<div class="doc-card'+(d.flag?' flagged':'')+'" style="margin-bottom:6px"><div class="doc-ico">'+(d.flag?'⚠️':'📄')+'</div><div style="flex:1"><div style="font-weight:600;color:#fff;font-size:.74rem;margin-bottom:2px">'+d.name+'</div><div style="font-size:.66rem;color:#8ba4c0;line-height:1.4">'+d.note+'</div><span class="doc-status '+sCls+'">'+sLabel+'</span></div></div>';}).join('');
  }};
  document.getElementById(elId).innerHTML=
    '<div onclick="showPopup(\'docs\')" style="cursor:pointer">'+
    '<div style="display:flex;gap:12px;align-items:center;margin-top:4px">'+
    '<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#00e68a">'+ok+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">OK</div></div>'+
    (issues?'<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#ff4d6a">'+issues+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Issues</div></div>':'')+
    '</div><div class="click-hint">Click to view all documents ▸</div></div>';
}
function renderScreeningSummary(elId,scr){
  var hits=scr.filter(function(s){return s.flag;}).length;
  _popups.scr={title:'🛡️ Screening Results ('+scr.length+')',fn:function(){
    return scr.map(function(s){return '<div class="scr-row'+(s.flag?' flagged':'')+'" style="margin-bottom:6px"><div><span style="font-weight:600;color:#fff">'+s.type+'</span></div><div style="text-align:right;font-size:.7rem;color:'+(s.flag?'#ff4d6a':'#00e68a')+'">'+s.result+'</div></div>';}).join('');
  }};
  document.getElementById(elId).innerHTML=
    '<div onclick="showPopup(\'scr\')" style="cursor:pointer">'+
    '<div style="display:flex;gap:12px;align-items:center;margin-top:4px">'+
    '<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:'+(hits?'#ff4d6a':'#00e68a')+'">'+scr.length+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Checks</div></div>'+
    (hits?'<div style="text-align:center"><div style="font-family:Anybody;font-size:1.1rem;font-weight:800;color:#ff4d6a">'+hits+'</div><div style="font-size:.42rem;color:#4a6a8a;text-transform:uppercase;font-weight:700">Hits</div></div>':'')+
    '</div><div class="click-hint">Click to view screening results ▸</div></div>';
}

function renderCategorizedFlags(elId,flags){document.getElementById(elId).innerHTML=flags.map(function(f){var cat=flagCategory(f);return '<div class="flag-chip"><div class="flag-dot"></div><div><span style="display:inline-block;font-size:.52rem;font-weight:700;letter-spacing:.05em;text-transform:uppercase;padding:1px 6px;border-radius:3px;background:rgba(255,77,106,.1);color:#ff4d6a;margin-right:6px;vertical-align:middle">'+cat.icon+' '+cat.label+'</span>'+f+'</div></div>';}).join('');}
function renderSOW(elId,sow){document.getElementById(elId).innerHTML='<div style="margin-bottom:8px"><div style="font-size:.55rem;font-weight:700;color:#4a6a8a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">Declared</div><div style="color:#8ba4c0;line-height:1.5">'+sow.declared+'</div></div><div style="margin-bottom:8px"><div style="font-size:.55rem;font-weight:700;color:#ff4d6a;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">Findings</div><div style="color:#c8daf0;line-height:1.5">'+sow.findings+'</div></div><div style="padding:8px 10px;border-radius:8px;background:rgba(255,184,51,.06);border:1px solid rgba(255,184,51,.12)"><div style="font-size:.55rem;font-weight:700;color:#ffb833;text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px">Assessment</div><div style="color:#ffb833;line-height:1.5;font-size:.72rem">'+sow.assessment+'</div></div>';}

function renderMedia(elId,media){document.getElementById(elId).innerHTML=media.map(function(m){return '<div class="gc-s p-3'+(m.flag?' flagged':'')+'" style="'+(m.flag?'border-left:3px solid #ff4d6a':'')+'"><div style="display:flex;justify-content:space-between;margin-bottom:3px"><span style="font-size:.6rem;font-weight:700;color:#fff">'+m.source+'</span><span style="font-size:.56rem;color:#4a6a8a;font-family:\'JetBrains Mono\',monospace">'+m.date+'</span></div><div style="font-size:.72rem;color:#8ba4c0;line-height:1.45">'+m.summary+'</div></div>';}).join('');}
function renderEDDTxs(elId,txs){document.getElementById(elId).innerHTML=txs.map(function(tx){return '<div class="gc-s p-3 tx-card flex justify-between items-center gap-3" style="'+(tx.flag?'border-left:3px solid #ff4d6a':'')+'"><div class="flex-1 min-w-0"><div style="font-family:\'Anybody\',sans-serif;font-size:.88rem;font-weight:700;color:'+(tx.flag?'#ff4d6a':'#fff')+'">'+tx.amount+'</div><div style="font-size:.62rem;color:#4a6a8a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">'+tx.to+'</div></div><div class="text-right flex-shrink-0"><div style="font-size:.58rem;color:#4a6a8a;font-family:\'JetBrains Mono\',monospace">'+tx.date+'</div><div style="font-size:.56rem;color:#8ba4c0">'+tx.country+'</div></div></div>';}).join('');}
function renderEDDDocs(elId,docs){document.getElementById(elId).innerHTML=docs.map(function(d){var sCls=d.status==='provided'?(d.flag?'doc-inc':'doc-ok'):d.status==='missing'?'doc-miss':'doc-inc';var sLabel=d.status==='provided'?(d.flag?'⚠ Review':'✓ OK'):d.status==='missing'?'✗ Missing':'⚠ '+d.status.charAt(0).toUpperCase()+d.status.slice(1);return '<div class="doc-card'+(d.flag?' flagged':'')+'"><div class="doc-ico">'+(d.flag?'⚠️':'📄')+'</div><div class="flex-1"><div style="font-weight:600;color:#fff;font-size:.74rem;margin-bottom:2px">'+d.name+'</div><div style="font-size:.64rem;color:#8ba4c0;line-height:1.4">'+d.note+'</div><span class="doc-status '+sCls+'">'+sLabel+'</span></div></div>';}).join('');}
function renderEDDScreening(elId,scr){document.getElementById(elId).innerHTML=scr.map(function(s){return '<div class="scr-row'+(s.flag?' flagged':'')+'"><div><span style="font-weight:600;color:#fff">'+s.type+'</span></div><div style="text-align:right;font-size:.68rem;color:'+(s.flag?'#ff4d6a':'#00e68a')+';max-width:55%">'+s.result+'</div></div>';}).join('');}

// ═══ OWNERSHIP GRAPH — EDD (with null-safety guard) ═══
function renderOwnershipGraph_EDD(h,svgId,tipId,mode){
  var svg=document.getElementById(svgId),tip=document.getElementById(tipId);
  tip.classList.remove('show');

  // ── GUARD: handle missing or malformed network data ──
  if(!h||!h.nodes||!h.edges){
    svg.innerHTML='<text x="50%" y="50%" text-anchor="middle" fill="#4a6a8a" font-size="13" font-family="Inter,sans-serif">No ownership graph data available for this case</text>';
    return;
  }

  var riskCol={critical:'#ff4d6a',high:'#ffb833',medium:'#38bdf8',low:'#00e68a'};
  var typeIco={company:'🏢',person:'🧑',trust:'🏛️',nominee:'👤',bank:'🏦',unknown:'❓'};
  svg.innerHTML='';
  var edgeG=document.createElementNS('http://www.w3.org/2000/svg','g');
  h.edges.forEach(function(e){
    var from=h.nodes.find(function(n){return n.id===e.from;}),to=h.nodes.find(function(n){return n.id===e.to;});
    if(!from||!to)return;
    var isHot=to.risk==='critical'||from.risk==='critical';
    var line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',from.x);line.setAttribute('y1',from.y);
    line.setAttribute('x2',to.x);line.setAttribute('y2',to.y);
    line.setAttribute('class','net-edge'+(isHot?' hot':''));
    if(isHot)line.setAttribute('stroke-dasharray','6 3');
    line.dataset.from=e.from;line.dataset.to=e.to;edgeG.appendChild(line);
    var mx=(from.x+to.x)/2,my=(from.y+to.y)/2;
    var lg=document.createElementNS('http://www.w3.org/2000/svg','g');
    lg.dataset.efrom=e.from;lg.dataset.eto=e.to;
    var tw=Math.max((e.label||'').length*5.5+10,52);
    lg.innerHTML='<rect x="'+(mx-tw/2)+'" y="'+(my-8)+'" width="'+tw+'" height="16" rx="4" fill="#0b1a2e" stroke="rgba(74,106,138,.2)" stroke-width="1"/><text x="'+mx+'" y="'+(my+4)+'" class="net-elabel">'+(e.label||'')+'</text>';
    edgeG.appendChild(lg);
  });
  svg.appendChild(edgeG);
  h.nodes.forEach(function(n){
    var col=riskCol[n.risk]||'#8ba4c0';var ico=typeIco[n.type]||'🔷';
    var g=document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class','net-node');g.dataset.nid=n.id;g.style.cursor='grab';
    var alert=n.risk==='critical'?'<circle class="nd-alert" cx="'+(n.x+24)+'" cy="'+(n.y-16)+'" r="5" fill="#ff4d6a"><animate attributeName="opacity" values="1;.3;1" dur="1.5s" repeatCount="indefinite"/></circle>':'';
    g.innerHTML='<rect class="nd-bg" x="'+(n.x-28)+'" y="'+(n.y-20)+'" width="56" height="40" rx="10" fill="'+col+'" fill-opacity=".1" stroke="'+col+'" stroke-width="1.5" stroke-opacity=".4"/><text class="nd-ico" x="'+n.x+'" y="'+(n.y+5)+'" text-anchor="middle" style="font-size:18px;fill:#fff;pointer-events:none">'+ico+'</text><text x="'+n.x+'" y="'+(n.y+36)+'" class="net-label nd-lbl">'+n.label+'</text>'+alert;
    svg.appendChild(g);
  });
  initDrag(svg,mode,h.nodes,h.edges,tipId);
}


// ═══ OPEN CASE (with defensive guards for all data properties) ═══
function openCase(idx){state.currentCase=idx;var c=getCases()[idx];if(!c){console.warn('openCase: no case at index',idx);return;}document.getElementById('simNav').style.display='none';if(state.currentRole==='kycp'||state.currentRole==='kyce')openKYC(c);else if(state.currentRole==='eddi')openEDDI(c);else if(state.currentRole==='edde')openEDDE(c);else openAML(c);}

// ═══ AML INVESTIGATION ═══
function openAML(c){
  document.getElementById('aml-id').textContent=c.id;document.getElementById('aml-name').textContent=c.name;
  document.getElementById('aml-pill').innerHTML='<span class="pill pill-'+(c.riskLevel==='critical'?'crit':c.riskLevel)+'">'+c.riskLabel+'</span>';
  var pf=c.profile;var pepHigh=pf.pep.startsWith('Yes');var rsHigh=pf.riskScore>80;var rsMed=pf.riskScore>50;
  var pepTip=pepHigh?'Politically Exposed Person — Enhanced Due Diligence required under FATF Recommendation 12':'Not a PEP — standard due diligence applies';
  var rsTip=rsHigh?'Critical risk — immediate investigation required':rsMed?'Elevated risk — enhanced monitoring recommended':'Low risk — standard monitoring';
  var incTip='Compare declared income against transaction volume to identify mismatches';
  document.getElementById('aml-profile').innerHTML=[['Occupation',pf.occupation],['Country',pf.country],['PEP Status','<span title="'+pepTip+'" style="color:'+(pepHigh?'#ff4d6a':'#00e68a')+';font-weight:700;cursor:help;border-bottom:1px dotted currentColor">'+pf.pep+'</span>'],['Account Age',pf.accountAge],['Declared Income','<span title="'+incTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+pf.income+'</span>']].map(function(r){return '<div class="pf-label">'+r[0]+'</div><div class="pf-value">'+r[1]+'</div>';}).join('');
  // Risk gauge
  renderRiskGauge('aml-gauge',pf.riskScore,c.riskLevel);
  // Key stats
  var totalAmt=0;c.transactions.forEach(function(t){var n=parseFloat(t.amount.replace(/[^0-9.]/g,''));if(!isNaN(n))totalAmt+=n;});
  var flaggedTx=c.transactions.filter(function(t){return t.flag;}).length;
  document.getElementById('aml-keystats').innerHTML='<div class="inv-keystat"><div class="ks-val" style="color:#ff4d6a">'+c.flags.length+'</div><div class="ks-label">Flags</div></div><div class="inv-keystat"><div class="ks-val" style="color:#ffb833">'+c.transactions.length+'</div><div class="ks-label">Transactions</div></div><div class="inv-keystat"><div class="ks-val" style="color:#38bdf8">$'+(totalAmt>=1e6?(totalAmt/1e6).toFixed(1)+'M':totalAmt>=1e3?(totalAmt/1e3).toFixed(0)+'K':totalAmt.toFixed(0))+'</div><div class="ks-label">Exposure</div></div>';
  
  renderNetworkAML(c.network,c.transactions);document.getElementById('aml-notes').value=state.notes[c.id]||'';
  _caseData=c;renderFlagSummary('aml-flagsum',c.flags);
  renderTxSummary('aml-txs',c.transactions);var txFlagged=c.transactions.filter(function(t){return t.flag;}).length;setCollCount('aml-txs-count',c.transactions.length,txFlagged);showScreen('aml');
}

// ═══ ENHANCED AML NETWORK RENDERER — with directional flow arrows + amount overlays ═══
function renderNetworkAML(net,txs){
  var svg=document.getElementById('aml-net'),tip=document.getElementById('aml-tip');
  tip.classList.remove('show');
  var hotSet={};
  net.hotEdges.forEach(function(e){hotSet[e[0]+'-'+e[1]]=true;});
  var colors={customer:'#00e68a',bank:'#38bdf8',company:'#ffb833',jurisdiction:'#ff4d6a'};
  var icons={customer:'🧑',bank:'🏦',company:'🏢',jurisdiction:'🌍'};
  svg.innerHTML='';

  // ── Auto-compute viewBox from node positions ──
  var vPad=55;
  var minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
  net.nodes.forEach(function(n){
    if(n.x-32<minX)minX=n.x-32; if(n.y-32<minY)minY=n.y-32;
    if(n.x+32>maxX)maxX=n.x+32; if(n.y+55>maxY)maxY=n.y+55;
  });
  var vbX=Math.max(0,minX-vPad),vbY=Math.max(0,minY-vPad);
  var vbW=(maxX-minX)+vPad*2,vbH=(maxY-minY)+vPad*2;
  svg._baseVB={x:vbX,y:vbY,w:vbW,h:vbH};
  svg._curVB={x:vbX,y:vbY,w:vbW,h:vbH};
  svg.setAttribute('viewBox',vbX+' '+vbY+' '+vbW+' '+vbH);
  var svgH=Math.max(380,vbH+20);
  svg.setAttribute('height',svgH);
  svg.parentNode.style.minHeight=svgH+'px';

  // ── Auto-derive edge amounts from transactions ──
  var edgeAmts={};
  if(txs&&txs.length){
    var nodeWords=[];
    net.nodes.forEach(function(n){
      var clean=(n.label||'').replace(/[^a-zA-Z0-9\s\-]/g,'').trim().toLowerCase();
      var parts=clean.split(/[\s\-]+/).filter(function(w){return w.length>2;});
      nodeWords.push({id:n.id, words:parts, full:clean});
    });

    var nodeTotals={};
    txs.forEach(function(tx){
      var dest=(tx.to||'').replace(/[^a-zA-Z0-9\s\-]/g,'').toLowerCase().trim();
      if(!dest)return;
      var rawAmt=parseFloat((tx.amount||'').replace(/[^0-9.]/g,''));
      if(!rawAmt||isNaN(rawAmt))return;

      var bestId=-1,bestScore=0;
      nodeWords.forEach(function(nw){
        if(nw.id===0)return;
        var score=0;
        if(nw.full.length>3 && dest.indexOf(nw.full)!==-1) score+=20;
        nw.words.forEach(function(w){
          if(w.length>3 && dest.indexOf(w)!==-1) score+=4;
          else if(w.length>2 && dest.indexOf(w)!==-1) score+=2;
        });
        if(score>bestScore){bestScore=score;bestId=nw.id;}
      });
      if(bestId>=0 && bestScore>=4){
        if(!nodeTotals[bestId])nodeTotals[bestId]=0;
        nodeTotals[bestId]+=rawAmt;
      }
    });

    net.edges.forEach(function(e){
      if(e[2]){edgeAmts[e[0]+'-'+e[1]]=e[2];return;}
      var tgtAmt=nodeTotals[e[1]];
      if(tgtAmt && tgtAmt>0){
        edgeAmts[e[0]+'-'+e[1]]=fmtCurrency(tgtAmt);
      }
    });
  }

  function fmtCurrency(v){
    if(v>=1000000) return '$'+(v/1000000).toFixed(v%1000000===0?0:1).replace(/\.0$/,'')+'M';
    if(v>=1000) return '$'+Math.round(v/1000)+'K';
    return '$'+Math.round(v).toLocaleString();
  }

  var defs=document.createElementNS('http://www.w3.org/2000/svg','defs');
  defs.innerHTML=
    '<marker id="ah" viewBox="0 0 12 10" refX="11" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse">'+
      '<path d="M0,0 L12,5 L0,10 L3,5 Z" fill="rgba(0,230,138,.6)"/>'+
    '</marker>'+
    '<marker id="ah-hot" viewBox="0 0 12 10" refX="11" refY="5" markerWidth="10" markerHeight="8" orient="auto-start-reverse">'+
      '<path d="M0,0 L12,5 L0,10 L3,5 Z" fill="rgba(255,77,106,.75)"/>'+
    '</marker>'+
    '<filter id="amt-glow"><feGaussianBlur stdDeviation="2" result="g"/><feMerge><feMergeNode in="g"/><feMergeNode in="SourceGraphic"/></feMerge></filter>';
  svg.appendChild(defs);

  var edgeG=document.createElementNS('http://www.w3.org/2000/svg','g');
  net.edges.forEach(function(e){
    var na=net.nodes[e[0]],nb=net.nodes[e[1]];
    if(!na||!nb)return;
    var hot=hotSet[e[0]+'-'+e[1]];
    var dx=nb.x-na.x,dy=nb.y-na.y,len=Math.sqrt(dx*dx+dy*dy)||1;
    var ux=dx/len,uy=dy/len,nodePad=28;
    var x1=na.x+ux*nodePad,y1=na.y+uy*nodePad;
    var x2=nb.x-ux*nodePad,y2=nb.y-uy*nodePad;

    var line=document.createElementNS('http://www.w3.org/2000/svg','line');
    line.setAttribute('x1',x1);line.setAttribute('y1',y1);
    line.setAttribute('x2',x2);line.setAttribute('y2',y2);
    line.setAttribute('class','net-edge flow'+(hot?' hot':''));
    line.setAttribute('marker-end','url(#ah'+(hot?'-hot':'')+')')
    line.dataset.from=e[0];line.dataset.to=e[1];
    edgeG.appendChild(line);

    var label=edgeAmts[e[0]+'-'+e[1]]||'';
    if(label){
      var mx=(na.x+nb.x)/2,my=(na.y+nb.y)/2;
      var perpX=-uy*14,perpY=ux*14;
      var lx=mx+perpX,ly=my+perpY;
      var lg=document.createElementNS('http://www.w3.org/2000/svg','g');
      lg.setAttribute('class','net-amt-g');
      lg.dataset.efrom=e[0];lg.dataset.eto=e[1];
      var tw=Math.max(label.length*7+14,44);
      var bgCls=hot?'net-amt-bg hot':'net-amt-bg';
      var txtCls=hot?'net-amt hot':'net-amt';
      lg.innerHTML=
        '<rect class="'+bgCls+'" x="'+(lx-tw/2)+'" y="'+(ly-9)+'" width="'+tw+'" height="18" rx="9"'+(hot?' filter="url(#amt-glow)"':'')+'/>'+
        '<text x="'+lx+'" y="'+(ly+4)+'" class="'+txtCls+'" style="font-size:10px;letter-spacing:.03em">'+label+'</text>';
      edgeG.appendChild(lg);
    }
  });
  svg.appendChild(edgeG);

  net.nodes.forEach(function(n){
    var col=colors[n.type]||'#a78bfa';
    var g=document.createElementNS('http://www.w3.org/2000/svg','g');
    g.setAttribute('class','net-node');g.dataset.nid=n.id;g.style.cursor='grab';
    g.innerHTML=
      '<circle class="nd-bg" cx="'+n.x+'" cy="'+n.y+'" r="24" fill="'+col+'" fill-opacity=".12" stroke="'+col+'" stroke-width="1.5" stroke-opacity=".4"/>'+
      '<circle class="nd-fg" cx="'+n.x+'" cy="'+n.y+'" r="16" fill="'+col+'" fill-opacity=".25"/>'+
      '<text class="nd-ico" x="'+n.x+'" y="'+(n.y+5)+'" text-anchor="middle" style="font-size:16px;fill:#fff;pointer-events:none">'+icons[n.type]+'</text>'+
      '<text x="'+n.x+'" y="'+(n.y+40)+'" class="net-label nd-lbl">'+n.label+'</text>';
    svg.appendChild(g);
  });

  initDrag(svg,'aml',net.nodes,net.edges,'aml-tip');
  initGraphPan(svg);
}

// ── Graph Pan + Zoom ──
function initGraphPan(svg){
  if(svg._panOff)svg._panOff();
  var panning=false,sx=0,sy=0,svbx=0,svby=0;
  function toSVG(e){
    var p=svg.createSVGPoint();
    var t=e.touches?e.touches[0]:e;
    p.x=t.clientX;p.y=t.clientY;
    return p.matrixTransform(svg.getScreenCTM().inverse());
  }
  function isBackground(el){
    if(el===svg||el.tagName==='svg')return true;
    if(el.classList&&el.classList.contains('net-edge'))return true;
    return false;
  }
  function down(e){
    if(!isBackground(e.target))return;
    e.preventDefault();panning=true;
    var pt=toSVG(e);sx=pt.x;sy=pt.y;
    var vb=svg._curVB;svbx=vb.x;svby=vb.y;
    svg.style.cursor='move';
  }
  function move(e){
    if(!panning)return;e.preventDefault();
    var pt=toSVG(e);
    var vb=svg._curVB;
    vb.x=svbx-(pt.x-sx);vb.y=svby-(pt.y-sy);
    svg.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.h);
  }
  function up(){panning=false;svg.style.cursor='';}
  function wheel(e){
    e.preventDefault();
    var dir=e.deltaY>0?1:-1;
    var vb=svg._curVB;if(!vb)return;
    var f=dir>0?1.12:0.89;
    var nw=vb.w*f,nh=vb.h*f;
    if(nw<80||nh<60||nw>2400||nh>1800)return;
    var r=svg.getBoundingClientRect();
    var px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
    var cx=vb.x+vb.w*px,cy=vb.y+vb.h*py;
    vb.w=nw;vb.h=nh;vb.x=cx-nw*px;vb.y=cy-nh*py;
    svg.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.h);
  }
  svg.addEventListener('mousedown',down);svg.addEventListener('mousemove',move);
  svg.addEventListener('mouseup',up);svg.addEventListener('mouseleave',up);
  svg.addEventListener('wheel',wheel,{passive:false});
  svg._panOff=function(){
    svg.removeEventListener('mousedown',down);svg.removeEventListener('mousemove',move);
    svg.removeEventListener('mouseup',up);svg.removeEventListener('mouseleave',up);
    svg.removeEventListener('wheel',wheel);
  };
}
function graphZoom(id,dir){
  var svg=document.getElementById(id+'-net');
  if(!svg||!svg._curVB)return;
  var vb=svg._curVB,f=dir>0?0.85:1.18;
  var nw=vb.w*f,nh=vb.h*f;
  if(nw<80||nh<60||nw>2400||nh>1800)return;
  var cx=vb.x+vb.w/2,cy=vb.y+vb.h/2;
  vb.w=nw;vb.h=nh;vb.x=cx-nw/2;vb.y=cy-nh/2;
  svg.setAttribute('viewBox',vb.x+' '+vb.y+' '+vb.w+' '+vb.h);
}
function graphFit(id){
  var svg=document.getElementById(id+'-net');
  if(!svg||!svg._baseVB)return;
  var b=svg._baseVB;
  svg._curVB={x:b.x,y:b.y,w:b.w,h:b.h};
  svg.setAttribute('viewBox',b.x+' '+b.y+' '+b.w+' '+b.h);
}

// ═══ KYC INVESTIGATION ═══
function openKYC(c){document.getElementById('kyc-id').textContent=c.id;document.getElementById('kyc-name').textContent=c.name;document.getElementById('kyc-pill').innerHTML='<span class="pill pill-'+(c.riskLevel==='critical'?'crit':c.riskLevel)+'">'+c.riskLabel+'</span>';var a=c.application;var volTip='Expected monthly transaction volume. Compare against actual activity after onboarding.';var jurisTip='Assess jurisdiction risk against FATF high-risk and grey-list countries. Consider tax haven and secrecy indicators.';document.getElementById('kyc-app').innerHTML=[['Account Type',a.type],['Purpose',a.purpose],['Expected Volume','<span title="'+volTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+a.expectedVolume+'</span>'],['Jurisdiction','<span title="'+jurisTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+a.jurisdiction+'</span>'],['Entity Type / DOB',a.incorporationDate||a.dateOfBirth],['Nationality / Agent',a.registeredAgent||a.nationality]].map(function(r){return '<div class="pf-label">'+r[0]+'</div><div class="pf-value">'+r[1]+'</div>';}).join('');renderOwnershipGraph(c.hierarchy);renderDocsSummary('kyc-docs',c.documents);renderScreeningSummary('kyc-scr',c.screening);document.getElementById('kyc-notes').value=state.notes[c.id]||'';_caseData=c;renderFlagSummary('kyc-flagsum',c.flags);showScreen('kyc');}
function renderOwnershipGraph(h){var svg=document.getElementById('kyc-net'),tip=document.getElementById('kyc-tip');tip.classList.remove('show');var riskCol={critical:'#ff4d6a',high:'#ffb833',medium:'#38bdf8',low:'#00e68a'};var typeIco={company:'🏢',person:'🧑',trust:'🏛️',nominee:'👤',bank:'🏦',unknown:'❓'};svg.innerHTML='';var edgeG=document.createElementNS('http://www.w3.org/2000/svg','g');h.edges.forEach(function(e){var from=h.nodes.find(function(n){return n.id===e.from;}),to=h.nodes.find(function(n){return n.id===e.to;});if(!from||!to)return;var isHot=to.risk==='critical'||from.risk==='critical';var line=document.createElementNS('http://www.w3.org/2000/svg','line');line.setAttribute('x1',from.x);line.setAttribute('y1',from.y);line.setAttribute('x2',to.x);line.setAttribute('y2',to.y);line.setAttribute('class','net-edge'+(isHot?' hot':''));if(isHot)line.setAttribute('stroke-dasharray','6 3');line.dataset.from=e.from;line.dataset.to=e.to;edgeG.appendChild(line);var mx=(from.x+to.x)/2,my=(from.y+to.y)/2;var lg=document.createElementNS('http://www.w3.org/2000/svg','g');lg.dataset.efrom=e.from;lg.dataset.eto=e.to;lg.innerHTML='<rect x="'+(mx-26)+'" y="'+(my-8)+'" width="52" height="16" rx="4" fill="#0b1a2e" stroke="rgba(74,106,138,.2)" stroke-width="1"/><text x="'+mx+'" y="'+(my+4)+'" class="net-elabel">'+e.label+'</text>';edgeG.appendChild(lg);});svg.appendChild(edgeG);h.nodes.forEach(function(n){var col=riskCol[n.risk]||'#8ba4c0';var ico=typeIco[n.type]||'🔷';var g=document.createElementNS('http://www.w3.org/2000/svg','g');g.setAttribute('class','net-node');g.dataset.nid=n.id;g.style.cursor='grab';var alert=n.risk==='critical'?'<circle class="nd-alert" cx="'+(n.x+24)+'" cy="'+(n.y-16)+'" r="5" fill="#ff4d6a"><animate attributeName="opacity" values="1;.3;1" dur="1.5s" repeatCount="indefinite"/></circle>':'';g.innerHTML='<rect class="nd-bg" x="'+(n.x-28)+'" y="'+(n.y-20)+'" width="56" height="40" rx="10" fill="'+col+'" fill-opacity=".1" stroke="'+col+'" stroke-width="1.5" stroke-opacity=".4"/><text class="nd-ico" x="'+n.x+'" y="'+(n.y+5)+'" text-anchor="middle" style="font-size:18px;fill:#fff;pointer-events:none">'+ico+'</text><text x="'+n.x+'" y="'+(n.y+36)+'" class="net-label nd-lbl">'+n.label+'</text>'+alert;svg.appendChild(g);});initDrag(svg,'kyc',h.nodes,h.edges,'kyc-tip');}

// ═══ EDD INDIVIDUAL ═══
function openEDDI(c){document.getElementById('eddi-id').textContent=c.id;document.getElementById('eddi-name').textContent=c.name;document.getElementById('eddi-pill').innerHTML='<span class="pill pill-'+(c.riskLevel==='critical'?'crit':c.riskLevel)+'">'+c.riskLabel+'</span>';var p=c.profile;var pepHigh=p.pepStatus.startsWith('Yes');var pepTip=pepHigh?'Politically Exposed Person — Enhanced Due Diligence required under FATF Recommendation 12. Must verify source of wealth and source of funds.':'Not a PEP — standard due diligence applies';var riskTip='Risk rating assigned based on PEP status, jurisdiction, transaction patterns, and adverse media. Critical = immediate senior review required.';var incTip='Compare declared income against observed spending and asset acquisitions to identify lifestyle inconsistencies';var wealthTip='Verify declared wealth against independent sources. Unverifiable claims are a major red flag for PEPs.';document.getElementById('eddi-profile').innerHTML=[['Full Name',p.fullName],['Date of Birth',p.dateOfBirth],['Nationality',p.nationality],['Occupation',p.occupation],['PEP Status','<span title="'+pepTip+'" style="color:'+(pepHigh?'#ff4d6a':'#00e68a')+';font-weight:700;cursor:help;border-bottom:1px dotted currentColor">'+p.pepStatus+'</span>'],['Customer Since',p.customerSince],['Account Type',p.accountType],['Declared Income','<span title="'+incTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+p.declaredIncome+'</span>'],['Declared Wealth','<span title="'+wealthTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+p.declaredWealth+'</span>'],['Risk Rating','<span title="'+riskTip+'" style="color:#ff4d6a;font-weight:700;cursor:help;border-bottom:1px dotted currentColor">'+p.riskRating+'</span>']].map(function(r){return '<div class="pf-label">'+r[0]+'</div><div class="pf-value">'+r[1]+'</div>';}).join('');document.getElementById('eddi-trigger').textContent=c.reviewTrigger;renderSOW('eddi-sow',c.sourceOfWealth);renderMediaSummary('eddi-media',c.adverseMedia,'eddi-media-count');renderTxSummary('eddi-txs',c.transactions);renderDocsSummary('eddi-docs',c.documents);renderScreeningSummary('eddi-scr',c.screening);renderOwnershipGraph_EDD(c.network,'eddi-net','eddi-tip','eddi');document.getElementById('eddi-notes').value=state.notes[c.id]||'';_caseData=c;renderFlagSummary('eddi-flagsum',c.flags);setCollCount('eddi-media-count',c.adverseMedia.length,c.adverseMedia.filter(function(m){return m.flag;}).length);var txFlagged=c.transactions.filter(function(t){return t.flag;}).length;setCollCount('eddi-txs-count',c.transactions.length,txFlagged);showScreen('eddi');}

// ═══ EDD ENTITY (with defensive guards) ═══
function openEDDE(c){
  document.getElementById('edde-id').textContent=c.id;
  document.getElementById('edde-name').textContent=c.name;
  document.getElementById('edde-pill').innerHTML='<span class="pill pill-'+(c.riskLevel==='critical'?'crit':c.riskLevel)+'">'+c.riskLabel+'</span>';

  var p=c.profile;
  var riskTip='Entity risk rating based on jurisdiction, entity type, ownership structure, sanctions exposure, and transaction patterns.';
  var turnTip='Compare declared turnover against actual transaction volumes. Unexplained volume increases are a key EDD trigger.';
  var regTip='Check whether material changes (ownership, directors) have been reported to the regulator as required by licence conditions.';
  var typeTip='Non-Bank Financial Institutions (NBFIs) and Payment Service Providers carry inherent higher ML/TF risk due to transaction volumes and cross-border activity.';

  document.getElementById('edde-profile').innerHTML=[
    ['Entity Name',p.entityName],
    ['Entity Type','<span title="'+typeTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+p.entityType+'</span>'],
    ['Jurisdiction',p.jurisdiction],
    ['Incorporated',p.incorporationDate],
    ['Registered Agent',p.registeredAgent],
    ['Customer Since',p.customerSince],
    ['Account Type',p.accountType],
    ['Declared Turnover','<span title="'+turnTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+p.declaredTurnover+'</span>'],
    ['Current Risk','<span title="'+riskTip+'" style="color:#ff4d6a;font-weight:700;cursor:help;border-bottom:1px dotted currentColor">'+p.currentRiskRating+'</span>'],
    ['Regulated By','<span title="'+regTip+'" style="cursor:help;border-bottom:1px dotted #4a6a8a">'+p.regulatedBy+'</span>']
  ].map(function(r){return '<div class="pf-label">'+r[0]+'</div><div class="pf-value">'+r[1]+'</div>';}).join('');

  document.getElementById('edde-trigger').textContent=c.reviewTrigger;

  // ── Safe renders with fallbacks for missing data ──
  if(c.sourceOfWealth){renderSOW('edde-sow',c.sourceOfWealth);}
  else{document.getElementById('edde-sow').innerHTML='<div style="color:#4a6a8a;font-size:.72rem;padding:8px 0">No source of wealth data available.</div>';}

  var media=c.adverseMedia||[];
  renderMediaSummary('edde-media',media,'edde-media-count');

  var txs=c.transactions||[];
  renderTxSummary('edde-txs',txs);

  var docs=c.documents||[];
  renderDocsSummary('edde-docs',docs);

  var scr=c.screening||[];
  renderScreeningSummary('edde-scr',scr);

  // ── Network graph: supports both 'network' and 'hierarchy' property names ──
  var netData=c.network||c.hierarchy||null;
  renderOwnershipGraph_EDD(netData,'edde-net','edde-tip','edde');

  document.getElementById('edde-notes').value=state.notes[c.id]||'';
  _caseData=c;

  var flags=c.flags||[];
  renderFlagSummary('edde-flagsum',flags);
  setCollCount('edde-media-count',media.length,media.filter(function(m){return m.flag;}).length);
  var txFlagged=txs.filter(function(t){return t.flag;}).length;
  setCollCount('edde-txs-count',txs.length,txFlagged);
  showScreen('edde');
}

// ═══ DRAG SYSTEM ═══
function initDrag(svg,mode,nodes,edges,tipId){if(svg._dc)svg._dc();var dragging=null,wasDrag=false;var nMap={};nodes.forEach(function(n){nMap[mode==='aml'?n.id:n.id]=n;});function pt(e){var p=svg.createSVGPoint();var t=e.touches?e.touches[0]:e;p.x=t.clientX;p.y=t.clientY;return p.matrixTransform(svg.getScreenCTM().inverse());}function findG(el){while(el&&el!==svg){if(el.dataset&&el.dataset.nid!==undefined)return el;el=el.parentNode;}return null;}function moveNode(g,n){g.querySelectorAll('circle.nd-bg,circle.nd-fg').forEach(function(c){c.setAttribute('cx',n.x);c.setAttribute('cy',n.y);});var bg=g.querySelector('rect.nd-bg');if(bg){var w=+bg.getAttribute('width'),bh=+bg.getAttribute('height');bg.setAttribute('x',n.x-w/2);bg.setAttribute('y',n.y-bh/2);}var ico=g.querySelector('.nd-ico');if(ico){ico.setAttribute('x',n.x);ico.setAttribute('y',n.y+5);}var lbl=g.querySelector('.nd-lbl');if(lbl){lbl.setAttribute('x',n.x);lbl.setAttribute('y',n.y+(mode==='aml'?40:36));}var dot=g.querySelector('.nd-alert');if(dot){dot.setAttribute('cx',n.x+24);dot.setAttribute('cy',n.y-16);}}function moveEdges(){svg.querySelectorAll('line[data-from]').forEach(function(ln){var fk=ln.dataset.from,tk=ln.dataset.to;var fn=nMap[mode==='aml'?+fk:fk],tn=nMap[mode==='aml'?+tk:tk];if(fn&&tn){if(mode==='aml'){var dx=tn.x-fn.x,dy=tn.y-fn.y,len=Math.sqrt(dx*dx+dy*dy)||1;var ux=dx/len,uy=dy/len,pad=28;ln.setAttribute('x1',fn.x+ux*pad);ln.setAttribute('y1',fn.y+uy*pad);ln.setAttribute('x2',tn.x-ux*pad);ln.setAttribute('y2',tn.y-uy*pad);}else{ln.setAttribute('x1',fn.x);ln.setAttribute('y1',fn.y);ln.setAttribute('x2',tn.x);ln.setAttribute('y2',tn.y);}}});svg.querySelectorAll('g[data-efrom]').forEach(function(lg){var fk=lg.dataset.efrom,tk=lg.dataset.eto;var fn=nMap[mode==='aml'?+fk:fk],tn=nMap[mode==='aml'?+tk:tk];if(fn&&tn){var mx=(fn.x+tn.x)/2,my=(fn.y+tn.y)/2;if(mode==='aml'){var dx=tn.x-fn.x,dy=tn.y-fn.y,len=Math.sqrt(dx*dx+dy*dy)||1;var perpX=(-dy/len)*14,perpY=(dx/len)*14;mx+=perpX;my+=perpY;}var r=lg.querySelector('rect'),t=lg.querySelector('text');if(r){var hw=+r.getAttribute('width')/2;r.setAttribute('x',mx-hw);r.setAttribute('y',my-(mode==='aml'?9:8));}if(t){t.setAttribute('x',mx);t.setAttribute('y',my+(mode==='aml'?4:4));}}});}function onDown(e){var g=findG(e.target);if(!g)return;e.preventDefault();var p=pt(e);var nid=mode==='aml'?+g.dataset.nid:g.dataset.nid;dragging={g:g,n:nMap[nid],ox:p.x,oy:p.y};wasDrag=false;g.style.cursor='grabbing';}function onMove(e){if(!dragging)return;e.preventDefault();var p=pt(e);var dx=p.x-dragging.ox,dy=p.y-dragging.oy;if(Math.abs(dx)>2||Math.abs(dy)>2)wasDrag=true;dragging.n.x+=dx;dragging.n.y+=dy;dragging.ox=p.x;dragging.oy=p.y;moveNode(dragging.g,dragging.n);moveEdges();}function onUp(){if(!dragging)return;dragging.g.style.cursor='grab';if(!wasDrag){var nid=mode==='aml'?+dragging.g.dataset.nid:dragging.g.dataset.nid;showNodePanel(tipId,nid,mode);}dragging=null;}svg.addEventListener('mousedown',onDown);svg.addEventListener('mousemove',onMove);svg.addEventListener('mouseup',onUp);svg.addEventListener('mouseleave',onUp);svg.addEventListener('touchstart',onDown,{passive:false});svg.addEventListener('touchmove',onMove,{passive:false});svg.addEventListener('touchend',onUp);svg._dc=function(){svg.removeEventListener('mousedown',onDown);svg.removeEventListener('mousemove',onMove);svg.removeEventListener('mouseup',onUp);svg.removeEventListener('mouseleave',onUp);svg.removeEventListener('touchstart',onDown);svg.removeEventListener('touchmove',onMove);svg.removeEventListener('touchend',onUp);};}

// ═══ NODE PANEL ═══
function closeTip(tipId){var el=document.getElementById(tipId);if(el){el.classList.remove('show');}}
function showNodePanel(tipId,nodeId,mode){var c=getCases()[state.currentCase];var n;if(mode==='kyc'){n=c.hierarchy.nodes.find(function(nd){return nd.id===nodeId;});}else if(mode==='eddi'||mode==='edde'){var netData=c.network||c.hierarchy;if(!netData||!netData.nodes)return;n=netData.nodes.find(function(nd){return nd.id===nodeId;});}else{n=c.network.nodes[nodeId];}if(!n)return;var tip=document.getElementById(tipId);var riskBadge=n.risk?'<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:.55rem;font-weight:700;text-transform:uppercase;margin-left:6px;background:rgba('+(n.risk==='critical'?'255,77,106':n.risk==='high'?'255,184,51':n.risk==='medium'?'56,189,248':'0,230,138')+',.15);color:'+(n.risk==='critical'?'#ff4d6a':n.risk==='high'?'#ffb833':n.risk==='medium'?'#38bdf8':'#00e68a')+'">'+n.risk+'</span>':'';var juris=n.jurisdiction?'<div style="font-size:.62rem;color:#4a6a8a;margin:3px 0">'+n.jurisdiction+'</div>':'';var flags=c.flags||[];var label=(n.label||'').toLowerCase();var relevantFlags=flags.filter(function(f){var fl=f.toLowerCase();if(label.length>3&&fl.indexOf(label)!==-1)return true;var parts=label.replace(/[\[\]()]/g,'').split(/[\s,\-]+/);for(var i=0;i<parts.length;i++){if(parts[i].length>3&&fl.indexOf(parts[i])!==-1)return true;}if(n.type==='unknown'&&(fl.indexOf('undisclosed')!==-1||fl.indexOf('settlor')!==-1||fl.indexOf('unknown')!==-1))return true;return false;});var html='<div class="tip-drag" id="'+tipId+'-drag"><div style="display:flex;align-items:center;gap:6px"><span style="color:#4a6a8a;font-size:.6rem;letter-spacing:1px">⠿</span><strong style="color:#fff;font-size:.78rem">'+n.label+'</strong>'+riskBadge+'</div><button onclick="closeTip(\''+tipId+'\')" style="background:0;border:0;color:#8ba4c0;font-size:1.1rem;cursor:pointer;padding:4px 6px;line-height:1;border-radius:4px" onmouseover="this.style.color=\'#ff4d6a\'" onmouseout="this.style.color=\'#8ba4c0\'">✕</button></div>';html+='<div class="tip-body">';html+=juris;html+='<div style="font-size:.72rem;line-height:1.5;color:#8ba4c0">'+n.info+'</div>';if(relevantFlags.length){html+='<div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(74,106,138,.15)"><div style="font-size:.55rem;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#ff4d6a;margin-bottom:6px">🚩 Related Red Flags</div>';relevantFlags.forEach(function(f){html+='<div style="display:flex;align-items:flex-start;gap:6px;margin-bottom:6px;font-size:.68rem;line-height:1.4;color:#c8daf0"><span style="width:6px;height:6px;border-radius:50%;background:#ff4d6a;flex-shrink:0;margin-top:5px"></span><span>'+f+'</span></div>';});html+='</div>';}else if(n.risk==='low'){html+='<div style="margin-top:10px;padding-top:8px;border-top:1px solid rgba(74,106,138,.15);font-size:.68rem;color:#00e68a">✅ No red flags associated with this entity.</div>';}html+='</div>';tip.innerHTML=html;tip.classList.add('show');clearTimeout(tip._t);tip.style.right='8px';tip.style.left='auto';tip.style.top='8px';initTipDrag(tip,tipId+'-drag');}
function initTipDrag(tip,dragId){if(tip._tipClean)tip._tipClean();var drag=document.getElementById(dragId);if(!drag)return;var dragging=false,ox=0,oy=0,startL=0,startT=0;function onDown(e){var tgt=e.target;while(tgt&&tgt!==drag){if(tgt.tagName==='BUTTON')return;tgt=tgt.parentNode;}e.preventDefault();var ev=e.touches?e.touches[0]:e;var rect=tip.getBoundingClientRect();startL=rect.left-tip.parentElement.getBoundingClientRect().left;startT=rect.top-tip.parentElement.getBoundingClientRect().top;ox=ev.clientX;oy=ev.clientY;dragging=true;drag.style.cursor='grabbing';tip.style.left=startL+'px';tip.style.right='auto';}function onMove(e){if(!dragging)return;e.preventDefault();var ev=e.touches?e.touches[0]:e;var dx=ev.clientX-ox,dy=ev.clientY-oy;tip.style.left=(startL+dx)+'px';tip.style.top=(startT+dy)+'px';}function onUp(){if(!dragging)return;dragging=false;drag.style.cursor='grab';}drag.addEventListener('mousedown',onDown);document.addEventListener('mousemove',onMove);document.addEventListener('mouseup',onUp);drag.addEventListener('touchstart',onDown,{passive:false});document.addEventListener('touchmove',onMove,{passive:false});document.addEventListener('touchend',onUp);tip._tipClean=function(){drag.removeEventListener('mousedown',onDown);document.removeEventListener('mousemove',onMove);document.removeEventListener('mouseup',onUp);drag.removeEventListener('touchstart',onDown);document.removeEventListener('touchmove',onMove);document.removeEventListener('touchend',onUp);};}
function saveNotes(){if(state.currentCase===null)return;var c=getCases()[state.currentCase];var noteEl=(state.currentRole==='kycp'||state.currentRole==='kyce')?document.getElementById('kyc-notes'):state.currentRole==='eddi'?document.getElementById('eddi-notes'):state.currentRole==='edde'?document.getElementById('edde-notes'):document.getElementById('aml-notes');state.notes[c.id]=noteEl.value;saveState();}

// ═══ DECISION ═══
function decide(action){if(navigator.vibrate)navigator.vibrate(30);var c=getCases()[state.currentCase],fb=c.feedback[action];if(!fb)return;var isCorrect=(action===c.correct);var icons={excellent:'🎯',partial:'🔶',bad:'❌'};var tc={excellent:'#00e68a',partial:'#ffb833',bad:'#ff4d6a'};document.getElementById('fb-icon').textContent=icons[fb.grade];document.getElementById('fb-title').textContent=fb.title;document.getElementById('fb-title').style.color=tc[fb.grade];document.getElementById('fb-points').innerHTML='<span style="color:'+(fb.points>=0?'#00e68a':'#ff4d6a')+';font-family:\'Anybody\',sans-serif;font-size:1.2rem">'+(fb.points>=0?'+':'')+fb.points+' XP</span>';document.getElementById('fb-explain').innerHTML=fb.explain;document.getElementById('fb-coach').innerHTML=fb.coach;var result={id:c.id,decision:action,correct:isCorrect,points:fb.points,role:state.currentRole};state.casesCompleted.push(result);state.shiftResults.push(result);state.xp=Math.max(0,state.xp+fb.points);state.lastPlayDate=new Date().toISOString().slice(0,10);checkBadges(c,action);saveState();var allDone=state.shiftResults.length>=getCases().length;document.getElementById('fb-btn').textContent=allDone?'View Shift Summary':'Continue to Next Case';document.getElementById('fb-btn').dataset.allDone=allDone;document.getElementById('ov-feedback').classList.add('show');if(fb.grade==='excellent')spawnConfetti();}
function afterFeedback(){document.getElementById('ov-feedback').classList.remove('show');if(document.getElementById('fb-btn').dataset.allDone==='true'){showShiftSummary();}else{document.getElementById('simNav').style.display='';showScreen('shift');renderShift();}}

// ═══ SUMMARY ═══
function showShiftSummary(){var pts=state.shiftResults.reduce(function(s,r){return s+r.points;},0);var correct=state.shiftResults.filter(function(r){return r.correct;}).length;var acc=Math.round((correct/state.shiftResults.length)*100);document.getElementById('sum-pts').textContent=(pts>=0?'+':'')+pts;document.getElementById('sum-pts').style.color=pts>=0?'#00e68a':'#ff4d6a';document.getElementById('sum-cases').textContent=state.shiftResults.length;document.getElementById('sum-acc').textContent=acc+'%';var nb=state.badges.filter(function(b){return b.shift;});document.getElementById('sum-badges').innerHTML=nb.map(function(b){return '<div class="badge-card"><div class="badge-ico">'+b.icon+'</div><div><div style="font-size:.78rem;font-weight:700;color:#a78bfa">'+b.name+'</div><div style="font-size:.6rem;color:#4a6a8a">New badge!</div></div></div>';}).join('');document.getElementById('sum-msg').textContent=acc===100?"Perfect shift! 🎯":acc>=50?"Solid work — review feedback to improve.":"Tough shift — every case teaches something.";document.getElementById('ov-feedback').classList.remove('show');document.getElementById('ov-summary').classList.add('show');if(acc===100)spawnConfetti();state.badges.forEach(function(b){delete b.shift;});saveState();}
function closeSummary(){document.getElementById('ov-summary').classList.remove('show');state.shiftResults=[];nav('dashboard');}

// ═══ BADGES ═══
function checkBadges(c,action){function has(n){return state.badges.some(function(b){return b.name===n;});}if(c.id==='AML-2026-0447'&&action==='sar'&&!has('Structuring Spotter'))state.badges.push({icon:'🔍',name:'Structuring Spotter',shift:true});if(c.id==='AML-2026-0512'&&action==='sar'&&!has('PEP Watchdog'))state.badges.push({icon:'🐕',name:'PEP Watchdog',shift:true});if(c.id==='AML-2026-0583'&&action==='sar'&&!has('TBML Tracker'))state.badges.push({icon:'📦',name:'TBML Tracker',shift:true});if(c.id==='AML-2026-0614'&&action==='sar'&&!has('Mule Hunter'))state.badges.push({icon:'🕸️',name:'Mule Hunter',shift:true});if(c.id==='AML-2026-0651'&&action==='sar'&&!has('Chain Analyst'))state.badges.push({icon:'⛓️',name:'Chain Analyst',shift:true});if(c.id==='AML-2026-0687'&&action==='sar'&&!has('Loop Breaker'))state.badges.push({icon:'🔄',name:'Loop Breaker',shift:true});if(c.id==='AML-2026-0723'&&action==='clear'&&!has('Clear Thinker'))state.badges.push({icon:'✅',name:'Clear Thinker',shift:true});if(c.id==='EDD-I-2026-0101'&&action==='exit'&&!has('Risk Gatekeeper'))state.badges.push({icon:'🚪',name:'Risk Gatekeeper',shift:true});if(c.id==='EDD-E-2026-0201'&&action==='escalate'&&!has('Sanctions Sentinel'))state.badges.push({icon:'🛡️',name:'Sanctions Sentinel',shift:true});if(c.id==='KYC-2026-0831'&&action==='edd'&&!has('UBO Detective'))state.badges.push({icon:'🏛️',name:'UBO Detective',shift:true});if(c.id==='KYC-2026-0847'&&action==='reject'&&!has('Gatekeeper'))state.badges.push({icon:'🚫',name:'Gatekeeper',shift:true});if(c.id==='KYC-2026-0903'&&action==='edd'&&!has('NPO Watchdog'))state.badges.push({icon:'🏥',name:'NPO Watchdog',shift:true});if(c.id==='KYC-2026-0914'&&action==='approve'&&!has('Fair Analyst'))state.badges.push({icon:'⚖️',name:'Fair Analyst',shift:true});if(c.id==='KYC-2026-0929'&&action==='edd'&&!has('Crypto Sleuth'))state.badges.push({icon:'🪙',name:'Crypto Sleuth',shift:true});if(state.casesCompleted.filter(function(cc){return cc.correct;}).length>=4&&!has('Sharp Eye'))state.badges.push({icon:'🎯',name:'Sharp Eye',shift:true});if(state.casesCompleted.filter(function(cc){return cc.correct;}).length>=7&&!has('Eagle Eye'))state.badges.push({icon:'🦅',name:'Eagle Eye',shift:true});if(state.streak>=3&&!has('Dedicated Analyst'))state.badges.push({icon:'🔥',name:'Dedicated Analyst',shift:true});if(state.xp>=500&&!has('Rising Star'))state.badges.push({icon:'⭐',name:'Rising Star',shift:true});if(state.xp>=1500&&!has('Compliance Pro'))state.badges.push({icon:'💎',name:'Compliance Pro',shift:true});saveState();}

// ═══ CASE LOG ═══
function renderCaseLog(){var list=document.getElementById('cases-list'),empty=document.getElementById('cases-empty');if(!state.casesCompleted.length){list.innerHTML='';empty.style.display='';return;}empty.style.display='none';var seen={},unique=[];state.casesCompleted.slice().reverse().forEach(function(c){if(!seen[c.id]){seen[c.id]=true;unique.push(c);}});var allCases=AML_DIRECT_CASES.concat(AML_CORRESP_CASES).concat(KYC_PERSONAL_CASES).concat(KYC_ENTITY_CASES).concat(EDD_INDIVIDUAL_CASES).concat(EDD_ENTITY_CASES);list.innerHTML=unique.map(function(c){var cd=allCases.find(function(x){return x.id===c.id;});var roleLabel={amld:'AML-D',amlc:'AML-CB',kycp:'KYC-P',kyce:'KYC-E',eddi:'EDD-I',edde:'EDD-E'}[c.role]||c.role;var roleCol={amld:'255,77,106',amlc:'251,146,60',kycp:'56,189,248',kyce:'6,182,212',eddi:'167,139,250',edde:'255,184,51'}[c.role]||'0,230,138';return '<div class="gc p-4"><div class="flex justify-between items-center mb-1"><span style="font-size:.54rem;color:#4a6a8a;font-family:\'JetBrains Mono\',monospace">'+c.id+'</span><span style="font-size:.62rem;font-weight:700;color:'+(c.correct?'#00e68a':'#ff4d6a')+'">'+(c.correct?'✓':'✗')+' '+c.decision.toUpperCase()+'</span></div><div style="font-weight:700;color:#fff;font-size:.86rem;margin-bottom:.15rem">'+(cd?cd.name:c.id)+'</div><div class="flex justify-between items-center"><span style="font-size:.6rem;padding:2px 8px;border-radius:4px;font-weight:700;background:rgba('+roleCol+',.1);color:rgba('+roleCol+',1)">'+roleLabel+'</span><span style="font-size:.72rem;font-weight:700;color:'+(c.points>=0?'#00e68a':'#ff4d6a')+'">'+(c.points>=0?'+':'')+c.points+' XP</span></div></div>';}).join('');}

// ═══ PROFILE ═══
function renderProfile(){var li=getLevelInfo(),acc=getAccuracy();document.getElementById('p-level').textContent=li.title;document.getElementById('p-lvl').textContent=li.level;document.getElementById('p-xp').textContent=state.xp;document.getElementById('p-cases').textContent=state.casesCompleted.length;document.getElementById('p-acc').textContent=acc!==null?acc+'%':'—';document.getElementById('p-streak').textContent=state.streak;var b=document.getElementById('p-badges'),nb=document.getElementById('p-no-badges');if(state.badges.length){nb.style.display='none';b.innerHTML=state.badges.map(function(bd){return '<div class="badge-card"><div class="badge-ico">'+bd.icon+'</div><div style="font-size:.78rem;font-weight:700;color:#a78bfa">'+bd.name+'</div></div>';}).join('');}else{nb.style.display='';b.innerHTML='';}}

// ═══ CONFETTI ═══
function spawnConfetti(){for(var i=0;i<50;i++){var el=document.createElement('div');el.className='confetti';el.style.left=Math.random()*100+'vw';el.style.top='-10px';el.style.background=CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)];el.style.animationDelay=(Math.random()*.8)+'s';el.style.animationDuration=(2+Math.random()*1.5)+'s';el.style.width=(6+Math.random()*6)+'px';el.style.height=(4+Math.random()*4)+'px';document.body.appendChild(el);setTimeout(function(e){e.remove();}.bind(null,el),3500);}}

// ═══ SITE MORE MODAL ═══
function toggleSiteMore(){document.getElementById('siteMoreOverlay').classList.add('open');}
function closeSiteMore(){document.getElementById('siteMoreOverlay').classList.remove('open');}

// ═══ OPERATOR NAME & LIVE CLOCK ═══
var opName='';
function getOperatorName(){if(!opName){var fi=OP_FIRST[Math.floor(Math.random()*OP_FIRST.length)];var la=OP_LAST[Math.floor(Math.random()*OP_LAST.length)];opName=fi+' '+la;}return opName;}
function updateClock(){var el=document.getElementById('op-clock');if(!el)return;var now=new Date();var days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var d=days[now.getDay()]+' '+now.getDate()+' '+months[now.getMonth()]+' '+now.getFullYear();var h=now.getHours(),m=now.getMinutes(),s=now.getSeconds();var t=(h<10?'0':'')+h+':'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s;el.textContent=d+' · '+t;var nameEl=document.getElementById('op-analyst-name');if(nameEl)nameEl.textContent=getOperatorName();}
setInterval(updateClock,1000);updateClock();

// ═══ INIT ═══
loadState();renderDashboard();
