const d="modulepreload",b=function(c,s){return new URL(c,s).href},_={},y=function(s,a,i){let u=Promise.resolve();if(a&&a.length>0){const o=document.getElementsByTagName("link");u=Promise.all(a.map(e=>{if(e=b(e,i),e in _)return;_[e]=!0;const r=e.endsWith(".css"),f=r?'[rel="stylesheet"]':"";if(!!i)for(let n=o.length-1;n>=0;n--){const l=o[n];if(l.href===e&&(!r||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${e}"]${f}`))return;const t=document.createElement("link");if(t.rel=r?"stylesheet":d,r||(t.as="script",t.crossOrigin=""),t.href=e,document.head.appendChild(t),r)return new Promise((n,l)=>{t.addEventListener("load",n),t.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${e}`)))})}))}return u.then(()=>s()).catch(o=>{const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=o,window.dispatchEvent(e),!e.defaultPrevented)throw o})},m=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),S=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),v=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),h=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),p=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),O=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"})),j=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{y as _,m as a,S as b,v as c,h as d,p as e,O as f,j as g};