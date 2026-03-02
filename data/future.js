<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Future of AML & Financial Crime Technology</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; }
  </style>
</head>
<body class="bg-gray-50 py-12 px-6">
  <div class="max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-center text-gray-900 mb-3">The Future of Financial Crime Prevention</h1>
    <p class="text-center text-gray-600 mb-12">How leading technologies are transforming AML today vs. in 3 years</p>

    <div id="grid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
  </div>

  <script>
    // === PASTE YOUR FULL CLASS + ARRAY HERE ===
    class FutureTech {
      constructor({icon,title,desc,currentState,futureState}){
        this.icon=icon; this.title=title; this.desc=desc;
        this.currentState=currentState; this.futureState=futureState;
      }
    }

    const futures = [
      // ←←← REPLACE THIS ENTIRE LINE WITH THE FULL futures = [ ... ] ARRAY
      // I gave you in my previous message (all 9 items)
    ];

    // Rendering function
    function render() {
      const container = document.getElementById('grid');
      container.innerHTML = '';

      futures.forEach(item => {
        const card = `
          <div class="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
            <div class="p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="text-6xl">${item.icon}</div>
                <h3 class="text-2xl font-semibold text-gray-900">${item.title}</h3>
              </div>
              
              <p class="text-gray-600 leading-relaxed mb-10">${item.desc}</p>

              <!-- Current State -->
              <div class="mb-9">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xl">📍</span>
                  <span class="uppercase text-xs font-semibold tracking-widest text-amber-600">CURRENT STATE — MARCH 2026</span>
                </div>
                <div class="bg-amber-50 border border-amber-100 rounded-2xl p-6 text-gray-700 text-[15px] leading-relaxed">
                  ${item.currentState}
                </div>
              </div>

              <!-- Future State -->
              <div>
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-xl">🚀</span>
                  <span class="uppercase text-xs font-semibold tracking-widest text-emerald-600">FUTURE STATE — MARCH 2029</span>
                </div>
                <div class="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 text-gray-700 text-[15px] leading-relaxed">
                  ${item.futureState}
                </div>
              </div>
            </div>
          </div>
        `;
        container.innerHTML += card;
      });
    }

    render();
  </script>
</body>
</html>
