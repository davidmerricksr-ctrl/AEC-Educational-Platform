// Site-wide password gate — password: "Hypothetical"
(function(){
  var KEY='ech_authed';
  var PASS='Hypothetical';
  if(sessionStorage.getItem(KEY)==='1') return;

  // Hide page content
  document.documentElement.style.visibility='hidden';
  document.documentElement.style.overflow='hidden';

  function show(){
    document.documentElement.style.visibility='';
    document.documentElement.style.overflow='';
  }

  window.addEventListener('DOMContentLoaded',function(){
    // Create overlay
    var overlay=document.createElement('div');
    overlay.id='ech-auth-gate';
    overlay.style.cssText='position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:#06070e;font-family:Source Sans 3,system-ui,sans-serif;';

    overlay.innerHTML=
      '<div style="text-align:center;max-width:380px;padding:24px;">'+
        '<div style="font-size:13px;font-weight:700;color:#5a6080;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;">ECONOMIC CRIME HUB</div>'+
        '<div style="font-size:24px;font-weight:800;color:#eef0ff;margin-bottom:8px;">Access Required</div>'+
        '<div style="font-size:14px;color:#8890b0;margin-bottom:24px;line-height:1.5;">Enter the password to continue.</div>'+
        '<form id="ech-auth-form" style="display:flex;gap:8px;justify-content:center;">'+
          '<input id="ech-auth-input" type="password" placeholder="Password" autocomplete="off" style="padding:10px 16px;font-size:15px;border-radius:8px;border:1.5px solid #252840;background:#0c0d18;color:#eef0ff;outline:none;width:200px;font-family:inherit;"/>'+
          '<button type="submit" style="padding:10px 20px;font-size:14px;font-weight:600;border-radius:8px;border:none;background:#3b82f6;color:#fff;cursor:pointer;font-family:inherit;">Enter</button>'+
        '</form>'+
        '<div id="ech-auth-error" style="color:#ef4444;font-size:13px;margin-top:10px;display:none;">Incorrect password</div>'+
      '</div>';

    document.body.appendChild(overlay);
    var input=document.getElementById('ech-auth-input');
    var error=document.getElementById('ech-auth-error');
    input.focus();

    document.getElementById('ech-auth-form').addEventListener('submit',function(e){
      e.preventDefault();
      if(input.value===PASS){
        sessionStorage.setItem(KEY,'1');
        overlay.remove();
        show();
      } else {
        error.style.display='block';
        input.value='';
        input.focus();
      }
    });
  });
})();
