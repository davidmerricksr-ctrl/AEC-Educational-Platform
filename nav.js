/* ══ SHARED NAVIGATION ══
 *
 * Usage (from any page):
 *   <link rel="stylesheet" href="nav.css">        ← or "../nav.css" from subdirs
 *   <script>window.NAV_BASE='';</script>           ← path prefix to site root ('' for root, '../' for subdirs)
 *   <script>window.NAV_ACTIVE='home';</script>     ← which tab to highlight (optional, auto-detected on index.html)
 *   <script src="nav.js"></script>                 ← or "../nav.js" from subdirs
 */

(function(){
  var base = window.NAV_BASE || '';

  /* ── Are we on the main SPA (index.html)? ── */
  var isSPA = !!document.querySelector('.page');

  /* ── Inject nav HTML ── */
  var navHTML = '' +
    '<nav class="bnav"><div class="bni">' +
      '<button class="nb" data-pg="home" onclick="go(\'home\')"><span class="bi">&#x1F3E0;</span>Home</button>' +
      '<button class="nb" data-pg="impact" onclick="go(\'impact\')"><span class="bi">&#x1F4CA;</span>Impact</button>' +
      '<button class="nb" data-pg="reference" onclick="go(\'reference\')"><span class="bi">&#x1F4CB;</span>Typologies</button>' +
      '<button class="nb" onclick="go(\'simulator\')"><span class="bi">&#x1F575;&#xFE0F;</span>Ops Sim</button>' +
      '<button class="nb" data-pg="future" onclick="go(\'future\')"><span class="bi">&#x1F680;</span>Evolution</button>' +
      '<button class="nb" data-pg="intelligence" onclick="go(\'intelligence\')"><span class="bi">&#x1F50E;</span>Directory</button>' +
      '<button class="nb" onclick="toggleMore()"><span class="bi">&#x2261;</span>More</button>' +
    '</div></nav>' +
    '<div class="mo" id="moreOverlay" onclick="if(event.target===this)closeMore()">' +
      '<div class="msh">' +
        '<h3>More Sections</h3>' +
        '<div class="mi" onclick="go(\'competencies\');closeMore()"><div class="ic">&#x1F511;</div><div><div class="ml">Competencies</div><div class="ms">Essential skills &amp; certifications</div></div></div>' +
        '<div class="mi" onclick="go(\'glossary\');closeMore()"><div class="ic">&#x1F4D6;</div><div><div class="ml">Glossary</div><div class="ms">A&#x2013;Z terminology</div></div></div>' +
        '<div class="mi" onclick="go(\'journey\');closeMore()"><div class="ic">&#x1F4D3;</div><div><div class="ml">Building Journey</div><div class="ms">AI interview journal</div></div></div>' +
        '<div class="mi" onclick="go(\'about\');closeMore()"><div class="ic">&#x2139;&#xFE0F;</div><div><div class="ml">About</div><div class="ms">Educational purpose &amp; sources</div></div></div>' +
      '</div>' +
    '</div>';

  /* Insert at start of <body> so nav renders first */
  document.body.insertAdjacentHTML('afterbegin', navHTML);

  /* ── Standalone page routes (page id → URL from root) ── */
  var standaloneRoutes = {
    simulator: 'simulator/index.html',
    popculture: 'vault.html',
    about: 'about/index.html',
    journey: 'journey/index.html'
  };

  /* ── SPA page ids (handled by hash routing on index.html) ── */
  var spaPages = ['home','impact','reference','future','intelligence','competencies','glossary'];

  /* ── go() — main navigation function ── */
  window.go = function(id){
    /* Always route standalone pages to their own URL */
    if(standaloneRoutes[id]){
      window.location.assign(base + standaloneRoutes[id]);
      return;
    }

    if(isSPA){
      /* SPA mode: switch pages in-place */
      document.querySelectorAll('.page').forEach(function(p){p.classList.remove('active')});
      var target = document.getElementById(id);
      if(target) target.classList.add('active');
      document.querySelectorAll('.nb[data-pg]').forEach(function(b){
        b.classList.toggle('act', b.dataset.pg === id);
      });
      window.scrollTo(0,0);
    } else {
      /* Standalone page: redirect to index.html with hash */
      if(spaPages.indexOf(id) > -1){
        window.location.assign(base + 'index.html#' + id);
      }
    }
  };

  /* ── More overlay ── */
  window.toggleMore = function(){ document.getElementById('moreOverlay').classList.add('open'); };
  window.closeMore = function(){ document.getElementById('moreOverlay').classList.remove('open'); };

  /* ── Highlight active tab ── */
  var active = window.NAV_ACTIVE || null;

  /* Auto-detect on SPA from hash or first active page */
  if(!active && isSPA){
    var hash = window.location.hash.replace('#','');
    if(hash && document.getElementById(hash)){
      active = hash;
    } else {
      var ap = document.querySelector('.page.active');
      if(ap) active = ap.id;
    }
  }

  if(active){
    document.querySelectorAll('.nb[data-pg]').forEach(function(b){
      b.classList.toggle('act', b.dataset.pg === active);
    });
  }

})();
