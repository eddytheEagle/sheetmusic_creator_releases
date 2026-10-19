import{t as e}from"./svgPages-DrpxKEot.js";function t(t){let n=t[0]?.pages[0];if(!n)return;let r=n.width*t[0].spaceMm,i=n.height*t[0].spaceMm,a=`<!doctype html><html><head><meta charset="utf-8"><title>Print</title><style>
    @page { size: ${r}mm ${i}mm; margin: 0 }
    html, body { margin: 0; padding: 0 }
    .page { width: ${r}mm; height: ${i}mm; page-break-after: always; break-after: page; overflow: hidden }
    .page:last-child { page-break-after: auto; break-after: auto }
    svg { display: block }
  </style></head><body>${t.flatMap(t=>t.pages.map(n=>e(n,t.spaceMm))).map(e=>`<div class="page">${e}</div>`).join(``)}</body></html>`,o=document.createElement(`iframe`);o.style.cssText=`position:fixed;right:0;bottom:0;width:0;height:0;border:0`,document.body.appendChild(o);let s=o.contentDocument;s.open(),s.write(a),s.close(),o.contentWindow.addEventListener(`afterprint`,()=>setTimeout(()=>o.remove(),500)),setTimeout(()=>o.contentWindow.print(),200)}export{t as printLayouts};