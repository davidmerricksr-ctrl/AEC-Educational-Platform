// Password gate — must be loaded at start of <body>
(function(){
  if(sessionStorage.getItem('ech_authed')==='1')return;

  // Create overlay and insert as first child of body
  var d=document.createElement('div');
  d.id='ech-g';
  d.setAttribute('style','position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:#06070e;font-family:system-ui,sans-serif');

  var box=document.createElement('div');
  box.setAttribute('style','text-align:center;max-width:380px;padding:24px');

  box.innerHTML=
    '<div style="font-size:13px;font-weight:700;color:#5a6080;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px">ECONOMIC CRIME HUB</div>'+
    '<div style="font-size:24px;font-weight:800;color:#eef0ff;margin-bottom:8px">Access Required</div>'+
    '<div style="font-size:14px;color:#8890b0;margin-bottom:24px;line-height:1.5">Enter the password to continue.</div>'+
    '<form id="ech-gf" style="display:flex;gap:8px;justify-content:center">'+
      '<input id="ech-gi" type="password" placeholder="Password" autocomplete="off" style="padding:10px 16px;font-size:15px;border-radius:8px;border:1.5px solid #252840;background:#0c0d18;color:#eef0ff;outline:none;width:200px;font-family:inherit">'+
      '<button type="submit" style="padding:10px 20px;font-size:14px;font-weight:600;border-radius:8px;border:none;background:#3b82f6;color:#fff;cursor:pointer;font-family:inherit">Enter</button>'+
    '</form>'+
    '<div id="ech-ge" style="color:#ef4444;font-size:13px;margin-top:10px;display:none">Incorrect password</div>';

  d.appendChild(box);
  document.body.insertBefore(d,document.body.firstChild);

  // Hide everything else
  var kids=document.body.children;
  for(var i=0;i<kids.length;i++){
    if(kids[i].id!=='ech-g') kids[i].setAttribute('data-ech-hidden','1'), kids[i].style.display='none';
  }

  document.getElementById('ech-gi').focus();

  document.getElementById('ech-gf').addEventListener('submit',function(e){
    e.preventDefault();
    var inp=document.getElementById('ech-gi');
    if(inp.value==='Hypothetical'){
      sessionStorage.setItem('ech_authed','1');
      d.remove();
      var els=document.body.querySelectorAll('[data-ech-hidden]');
      for(var j=0;j<els.length;j++){els[j].style.display='';els[j].removeAttribute('data-ech-hidden');}
      // Notify on login
      try{fetch('/api/notify',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({page:location.pathname,userAgent:navigator.userAgent,timestamp:new Date().toISOString(),referrer:document.referrer||''})});}catch(e){}
    }else{
      document.getElementById('ech-ge').style.display='block';
      inp.value='';inp.focus();
    }
  });
})();
