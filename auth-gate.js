// Site-wide password gate — password: "Hypothetical"
(function(){
  var KEY='ech_authed';
  var PASS='Hypothetical';
  if(sessionStorage.getItem(KEY)==='1') return;

  // Inject a full-screen overlay immediately via document.write so it blocks before any content renders
  document.write(
    '<div id="ech-auth-gate" style="position:fixed;inset:0;z-index:999999;display:flex;align-items:center;justify-content:center;background:#06070e;font-family:system-ui,sans-serif;">' +
      '<div style="text-align:center;max-width:380px;padding:24px;">' +
        '<div style="font-size:13px;font-weight:700;color:#5a6080;letter-spacing:.15em;text-transform:uppercase;margin-bottom:12px;">ECONOMIC CRIME HUB</div>' +
        '<div style="font-size:24px;font-weight:800;color:#eef0ff;margin-bottom:8px;">Access Required</div>' +
        '<div style="font-size:14px;color:#8890b0;margin-bottom:24px;line-height:1.5;">Enter the password to continue.</div>' +
        '<form id="ech-auth-form" style="display:flex;gap:8px;justify-content:center;">' +
          '<input id="ech-auth-input" type="password" placeholder="Password" autocomplete="off" style="padding:10px 16px;font-size:15px;border-radius:8px;border:1.5px solid #252840;background:#0c0d18;color:#eef0ff;outline:none;width:200px;font-family:inherit;"/>' +
          '<button type="submit" style="padding:10px 20px;font-size:14px;font-weight:600;border-radius:8px;border:none;background:#3b82f6;color:#fff;cursor:pointer;font-family:inherit;">Enter</button>' +
        '</form>' +
        '<div id="ech-auth-error" style="color:#ef4444;font-size:13px;margin-top:10px;display:none;">Incorrect password</div>' +
      '</div>' +
    '</div>'
  );

  window.addEventListener('DOMContentLoaded', function(){
    var overlay = document.getElementById('ech-auth-gate');
    var input = document.getElementById('ech-auth-input');
    var error = document.getElementById('ech-auth-error');
    if(!overlay || !input) return;
    input.focus();

    document.getElementById('ech-auth-form').addEventListener('submit', function(e){
      e.preventDefault();
      if(input.value === PASS){
        sessionStorage.setItem(KEY, '1');
        overlay.remove();
      } else {
        error.style.display = 'block';
        input.value = '';
        input.focus();
      }
    });
  });
})();
