import{s as O,e as T,v as w,c as _,h as f,i as e,k as g,n as M,m as S}from"./scheduler.z1v5p5l_.js";import{S as C,i as I}from"./index.wUxZk5jp.js";import{r as A,t as R}from"./i18n.T5yPWB9q.js";function V(a){let c,o,h,m,i,u,l,d,s,n,E,p;return document.title=c=a[2],{c(){o=T("meta"),h=T("meta"),m=T("meta"),i=T("meta"),u=T("meta"),d=T("meta"),s=T("meta"),n=T("meta"),E=T("meta"),this.h()},l(r){const t=w("svelte-16rcqg9",document.head);o=_(t,"META",{name:!0,content:!0}),h=_(t,"META",{name:!0,content:!0}),m=_(t,"META",{name:!0,content:!0}),i=_(t,"META",{name:!0,content:!0}),u=_(t,"META",{name:!0,content:!0}),d=_(t,"META",{name:!0,content:!0}),s=_(t,"META",{property:!0,content:!0}),n=_(t,"META",{property:!0,content:!0}),E=_(t,"META",{property:!0,content:!0}),t.forEach(f),this.h()},h(){e(o,"name","description"),e(o,"content",a[0]),e(h,"name","twitter:card"),e(h,"content","summary_large_image"),e(m,"name","twitter:title"),e(m,"content",a[2]),e(i,"name","twitter:description"),e(i,"content",a[0]),e(u,"name","twitter:image"),e(u,"content",l=A("VITE_ROOT")+a[1]),e(d,"name","twitter:image:alt"),e(d,"content",a[2]),e(s,"property","og:title"),e(s,"content",a[2]),e(n,"property","og:description"),e(n,"content",a[0]),e(E,"property","og:image"),e(E,"content",p=A("VITE_ROOT")+a[1])},m(r,t){g(document.head,o),g(document.head,h),g(document.head,m),g(document.head,i),g(document.head,u),g(document.head,d),g(document.head,s),g(document.head,n),g(document.head,E)},p(r,[t]){t&4&&c!==(c=r[2])&&(document.title=c),t&1&&e(o,"content",r[0]),t&4&&e(m,"content",r[2]),t&1&&e(i,"content",r[0]),t&2&&l!==(l=A("VITE_ROOT")+r[1])&&e(u,"content",l),t&4&&e(d,"content",r[2]),t&4&&e(s,"content",r[2]),t&1&&e(n,"content",r[0]),t&2&&p!==(p=A("VITE_ROOT")+r[1])&&e(E,"content",p)},i:M,o:M,d(r){f(o),f(h),f(m),f(i),f(u),f(d),f(s),f(n),f(E)}}}function v(a,c,o){let h,m;S(a,R,n=>o(5,m=n));let i={title:"Tailwind CSS Components ( version 4 update is here )",desc:"Free Tailwind Components",card:"/images/default.jpg"},{formatTitle:u=!0}=c,{title:l=""}=c,{desc:d=i.desc}=c,{img:s=i.card}=c;return a.$$set=n=>{"formatTitle"in n&&o(3,u=n.formatTitle),"title"in n&&o(4,l=n.title),"desc"in n&&o(0,d=n.desc),"img"in n&&o(1,s=n.img)},a.$$.update=()=>{a.$$.dirty&56&&o(2,h=u?l?`${m(l)} — ${m(i.title)}`:`${m(i.title)}`:l)},[d,s,h,u,l,m]}class k extends C{constructor(c){super(),I(this,c,v,V,O,{formatTitle:3,title:4,desc:0,img:1})}}export{k as S};
