import{C as e,a as t,R as n}from"./rx-element-D2_hkJVr.js";import{T as s,a,b as i,c as o}from"./toc-menu.component-CSzLVmYt.js";import{D as r}from"./doc-section.component-DgTS4Z7j.js";import{h as c,e as l,c as d,t as h}from"./tags-gOzTcAMG.js";import"./code-block.component-CyrfD49W.js";import{S as p,C as m,G as u,s as v}from"./rx-graph.component-DenpCq5d.js";import{S as b}from"./signal-meter.component-BEm_WwUE.js";import{i as g}from"./interval-CIWgPubr.js";import{m as f,c as y}from"./combineLatest-D9XzB5NX.js";import{R as w}from"./rx-for-C0nBfAd2.js";import"./injectable-QoOGU05v.js";import"./toc-menu.service-BAvN9lV7.js";var k,x,S,$,T,M,O=Object.create,P=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),I=e=>{throw TypeError(e)},A=(e,t,n)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>P(e,"name",{value:t,configurable:!0}),z=["class","method","getter","setter","accessor","field","value","get","set"],D=e=>void 0!==e&&"function"!=typeof e?I("Function expected"):e,W=(e,t,n,s,a)=>({kind:z[e],name:t,metadata:s,addInitializer:e=>n._?I("Already initialized"):a.push(D(e||null))}),E=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},F=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=z[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&j(h<4?a:{get[n](){return L(this,i)},set[n](e){return N(this,i,e)}},n));h?m&&h<4&&_(i,(h>2?"set ":h>1?"get ":"")+n):_(a,n);for(var y=s.length-1;y>=0;y--)l=W(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>q(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?L:H)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>N(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?D(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?I("Object expected"):(D(o=r.get)&&(f.get=o),D(o=r.set)&&(f.set=o),D(o=r.init)&&b.unshift(o));return h||((e,t)=>{A(t,C("metadata"),e[3])})(e,a),f&&P(a,n,f),m?4^h?i:f:a},R=(e,t,n)=>t.has(e)||I("Cannot "+n),q=(e,t)=>Object(t)!==t?I('Cannot use the "in" operator on this value'):e.has(t),L=(e,t,n)=>(R(e,t,"read from private field"),n?n.call(e):t.get(e)),N=(e,t,n,s)=>(R(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),H=(e,t,n)=>(R(e,t,"access private method"),n);S=[e({selector:"slider-section",directives:[s,a],template:`\n        <h1 toc-anchor="custom-slider">Custom slider</h1>\n        <p class="lede">A custom slider built from DOM pointer events —\n           <code class="inline">pointerdown</code>,\n           <code class="inline">pointermove</code>, and\n           <code class="inline">pointerup</code> track the user's drag gesture.\n           Two CSS <code class="inline">[style]</code> bindings position the fill\n           and the thumb. The parent communicates with the slider through\n           a single <a href="/docs/components/bindings/data">tap binding</a>,\n           <code class="inline">${l`[(value)]="propName"`}</code>, which pushes\n           the slider's value into the parent's field whenever it changes.</p>\n\n        <section class="host">\n            <h2>The slider component</h2>\n            <p class="note">Three <a href="/docs/components/state"><code class="inline">@state</code></a> fields —\n               <code class="inline">value</code>,\n               <code class="inline">min</code>, and\n               <code class="inline">max</code>.\n               <code class="inline">grab</code> captures the pointer,\n               <code class="inline">drag</code> normalises the cursor position into\n               a value between min and max, and\n               <code class="inline">release</code> lets go. Two derived getters\n               (<code class="inline">fillStyle$</code> and\n               <code class="inline">thumbStyle$</code>) map the current value to\n               CSS <code class="inline">width</code> and\n               <code class="inline">left</code> percentages that the template's\n               <a href="/docs/components/bindings">[style] bindings</a> apply\n               directly to the track elements.</p>\n            <code-block syntax="ts">${l`${p}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>In use</h2>\n            <p class="note">Declare an <code class="inline">@state</code> field on the\n               parent and bind it with\n               <code class="inline">${l`[(value)]="prop"`}</code>. Drag the\n               thumb and the text binding below updates in real time.</p>\n            <div class="split">\n                <code-block syntax="html">${l`${c`<yaw-slider [(value)]="value" min="0" max="100"></yaw-slider>
<p>value = {{value}}</p>`}`}</code-block>\n                <div class="live">\n                    <yaw-slider [(value)]="value" min="0" max="100"></yaw-slider>\n                    <p class="state">value = <span class="status">{{value}}</span></p>\n                </div>\n            </div>\n        </section>\n    `,styles:"\n        :host { display: block; }\n        .live { display: flex; flex-direction: column; gap: 1rem; }\n        .state { margin: 0; font-family: var(--font-mono); color: var(--secondary); font-size: 0.85rem; }\n        .state .status { color: var(--accent); }\n    "})];class G extends(x=r,k=[t],x){constructor(){var e,t,n;super(...arguments),e=this,t=T,n=E($,8,this,50),t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),E($,11,this)}}M=x,F($=[,,,O(M?.[C("metadata")]??null)],4,"value",k,G,T=new WeakMap),G=F($,0,"SliderExample",S,G),A(G,"__stateTypes",{value:"number"}),E($,1,G);var Y,B,V,J=Object.create,K=Object.defineProperty,U=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Q=e=>{throw TypeError(e)},X=["class","method","getter","setter","accessor","field","value","get","set"],Z=e=>void 0!==e&&"function"!=typeof e?Q("Function expected"):e,ee=(e,t,n,s,a)=>({kind:X[e],name:t,metadata:s,addInitializer:e=>n._?Q("Already initialized"):a.push(Z(e||null))});Y=[e({selector:"color-playground-section",directives:[s,a],template:`\n        <h1 toc-anchor="reactive-palette">Reactive palette</h1>\n        <p class="lede">A colour palette built from three\n           <a href="/docs/components/state"><code class="inline">@state</code></a>\n           fields — <code class="inline">hue</code>,\n           <code class="inline">sat</code>, and\n           <code class="inline">lit</code> — representing a colour in the HSL\n           colour space. Each field is bound to a\n           <code class="inline">${l`<yaw-slider>`}</code> through a\n           <a href="/docs/components/bindings/data">tap binding</a>. A single\n           <a href="/docs/components/bindings">[style] binding</a> applies the\n           combined colour as a CSS <code class="inline">background</code> to the\n           swatch element.</p>\n\n        <section class="host">\n            <h2>The palette component</h2>\n            <p class="note">Each slider's\n               <code class="inline">${l`[(value)]="fieldName"`}</code>\n               tap binding writes one\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> stream</a>.\n               The derived getter <code class="inline">css$</code> joins all three\n               streams with <code class="inline">combineLatest</code> and maps the\n               result to an <code class="inline">hsl(...)</code> string.\n               <code class="inline">swatchStyle$</code> wraps that string in a\n               <code class="inline">background:</code> declaration that the\n               template's <code class="inline">[style]</code> binding reads.</p>\n            <code-block syntax="ts">${l`${m}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>HSL on three sliders</h2>\n            <p class="note">Drag any slider and the swatch colour changes in\n               real time.</p>\n            <div class="split">\n                <code-block syntax="html">${l`<color-playground></color-playground>`}</code-block>\n                <div class="live"><color-playground></color-playground></div>\n            </div>\n        </section>\n    `,styles:d`
    .live { padding: 1.5rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
    .live color-playground { display: grid; grid-template-columns: auto 1fr;
            gap: 0.75rem 1rem; align-items: center; }
    .live color-playground .out,
    .live color-playground .swatch { grid-column: 1 / -1; }
`})];class te extends(V=r){}B=(e=>[,,,J(e?.[U("metadata")]??null)])(V),te=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{K(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=ee(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,Z(i)&&(a=i);return((e,t)=>{return n=t,s=U("metadata"),a=e[3],s in n?K(n,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[s]=a;var n,s,a})(e,a),a})(B,0,"ColorPlaygroundExample",Y,te),((e,t,n)=>{for(var s=0,a=B[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,te);var ne,se,ae,ie,oe,re,ce=Object.create,le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,he=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),pe=e=>{throw TypeError(e)},me=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ue=(e,t)=>le(e,"name",{value:t,configurable:!0}),ve=["class","method","getter","setter","accessor","field","value","get","set"],be=e=>void 0!==e&&"function"!=typeof e?pe("Function expected"):e,ge=(e,t,n,s,a)=>({kind:ve[e],name:t,metadata:s,addInitializer:e=>n._?pe("Already initialized"):a.push(be(e||null))}),fe=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},ye=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=ve[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&de(h<4?a:{get[n](){return xe(this,i)},set[n](e){return Se(this,i,e)}},n));h?m&&h<4&&ue(i,(h>2?"set ":h>1?"get ":"")+n):ue(a,n);for(var y=s.length-1;y>=0;y--)l=ge(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>ke(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?xe:$e)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Se(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?be(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?pe("Object expected"):(be(o=r.get)&&(f.get=o),be(o=r.set)&&(f.set=o),be(o=r.init)&&b.unshift(o));return h||((e,t)=>{me(t,he("metadata"),e[3])})(e,a),f&&le(a,n,f),m?4^h?i:f:a},we=(e,t,n)=>t.has(e)||pe("Cannot "+n),ke=(e,t)=>Object(t)!==t?pe('Cannot use the "in" operator on this value'):e.has(t),xe=(e,t,n)=>(we(e,t,"read from private field"),n?n.call(e):t.get(e)),Se=(e,t,n,s)=>(we(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),$e=(e,t,n)=>(we(e,t,"access private method"),n);ae=[e({selector:"signal-meter-section",directives:[s,a],template:`\n        <h1 toc-anchor="signal-meter">SVG signal meter</h1>\n        <p class="lede">An SVG arc whose sweep, colour, and glow are all driven by\n           CSS custom properties. A single\n           <a href="/docs/components/bindings">[style] binding</a> writes four\n           custom properties to the host element, and CSS does the rest — the\n           SVG's <code class="inline">stroke-dashoffset</code> and\n           <code class="inline">stroke</code> colour both reference those\n           properties directly.</p>\n\n        <section class="host">\n            <h2>The meter component</h2>\n            <p class="note">Six\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               fields —\n               <code class="inline">strength</code>,\n               <code class="inline">hueStart</code>,\n               <code class="inline">hueEnd</code>,\n               <code class="inline">lightness</code>,\n               <code class="inline">glow</code>, and\n               <code class="inline">dp</code> — each settable via an attribute\n               binding from the parent. The derived getter\n               <code class="inline">displayStrength$</code> rounds the raw\n               strength to <code class="inline">dp</code> decimal places for the\n               readout text. <code class="inline">meterStyle$</code> joins the\n               five visual\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> streams</a>\n               with <code class="inline">combineLatest</code> and maps them to four\n               CSS custom properties\n               (<code class="inline">--pct</code>,\n               <code class="inline">--hue</code>,\n               <code class="inline">--lit</code>,\n               <code class="inline">--glow</code>) that the SVG template\n               references in its inline styles.</p>\n            <code-block syntax="ts">${l`${b}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Drag to modulate</h2>\n            <p class="note">Drag the slider and the arc sweeps, the hue rotates,\n               and the glow follows — all from a single\n               <code class="inline">strength</code> value flowing through the\n               component's reactive chain into CSS.</p>\n            <div class="split">\n                <code-block syntax="html">${l`<signal-meter strength="65" hueStart="140" hueEnd="340" lightness="62" glow="14"></signal-meter>`}</code-block>\n                <div class="live">\n                    <signal-meter [strength]="strength"></signal-meter>\n                    <yaw-slider [(value)]="strength" min="0" max="100"></yaw-slider>\n                </div>\n            </div>\n        </section>\n    `,styles:d`
    .live { display: flex; flex-direction: column; align-items: center;
            gap: 1.25rem; padding: 1.75rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
    .live yaw-slider { width: 100%; max-width: 22rem; }
`})];class Te extends(se=r,ne=[t],se){constructor(){var e,t,n;super(...arguments),e=this,t=oe,n=fe(ie,8,this,65),t.has(e)?pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),fe(ie,11,this)}}ie=(e=>[,,,ce(e?.[he("metadata")]??null)])(se),ye(ie,4,"strength",ne,Te,oe=new WeakMap),re=Te=ye(ie,0,"SignalMeterExample",ae,Te),me(re,"__stateTypes",{strength:"number"}),fe(ie,1,Te);var Me,Oe,Pe,je,Ce,Ie,Ae,_e=Object.create,ze=Object.defineProperty,De=Object.getOwnPropertyDescriptor,We=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ee=e=>{throw TypeError(e)},Fe=(e,t,n)=>t in e?ze(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Re=(e,t)=>ze(e,"name",{value:t,configurable:!0}),qe=["class","method","getter","setter","accessor","field","value","get","set"],Le=e=>void 0!==e&&"function"!=typeof e?Ee("Function expected"):e,Ne=(e,t,n,s,a)=>({kind:qe[e],name:t,metadata:s,addInitializer:e=>n._?Ee("Already initialized"):a.push(Le(e||null))}),He=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Ge=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=qe[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&De(h<4?a:{get[n](){return Je(this,i)},set[n](e){return Ue(this,i,e)}},n));h?m&&h<4&&Re(i,(h>2?"set ":h>1?"get ":"")+n):Re(a,n);for(var y=s.length-1;y>=0;y--)l=Ne(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Ve(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Je:Qe)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Ue(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?Le(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?Ee("Object expected"):(Le(o=r.get)&&(f.get=o),Le(o=r.set)&&(f.set=o),Le(o=r.init)&&b.unshift(o));return h||((e,t)=>{Fe(t,We("metadata"),e[3])})(e,a),f&&ze(a,n,f),m?4^h?i:f:a},Ye=(e,t,n)=>Fe(e,"symbol"!=typeof t?t+"":t,n),Be=(e,t,n)=>t.has(e)||Ee("Cannot "+n),Ve=(e,t)=>Object(t)!==t?Ee('Cannot use the "in" operator on this value'):e.has(t),Je=(e,t,n)=>(Be(e,t,"read from private field"),n?n.call(e):t.get(e)),Ke=(e,t,n)=>t.has(e)?Ee("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ue=(e,t,n,s)=>(Be(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Qe=(e,t,n)=>(Be(e,t,"access private method"),n);je=[e({selector:"graph-section",directives:[s,a],template:`\n        <h1 toc-anchor="rx-graph">Reactive graph</h1>\n        <p class="lede">A canvas-based graph component driven by\n           <code class="inline">${l`Observable<number[]>`}</code> streams. The\n           parent passes named observables into the\n           <code class="inline">[series]</code>\n           <a href="/docs/components/bindings">property binding</a> and a\n           configuration record into <code class="inline">[config]</code> — the\n           graph draws itself as data arrives and redraws whenever a stream\n           emits.</p>\n\n        <section class="host">\n            <h2>The graph component</h2>\n            <p class="note">Two\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               fields.\n               <code class="inline">config</code> is a record that maps series\n               names to labels and colours.\n               <code class="inline">series</code> is a record that maps series\n               names to <code class="inline">${l`Observable<number[]>`}</code>\n               streams. When the parent writes a new\n               <code class="inline">series</code> map, the component unsubscribes\n               from every stream in the old map and subscribes to every stream in\n               the new one.</p>\n            <code-block syntax="ts">${l`${u}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Live — random walk</h2>\n            <p class="note">The graph below is fed a single series built from\n               <code class="inline">interval</code> and\n               <code class="inline">scan</code> — a random walk that emits a new\n               point array every 80ms. The line draws itself as the data\n               arrives.</p>\n            <div class="split">\n                <code-block syntax="html">${l`${c`<rx-graph [config]="config" [series]="series"></rx-graph>`}`}</code-block>\n                <div class="live">\n                    <rx-graph [config]="graphConfig" [series]="graphSeries"></rx-graph>\n                </div>\n            </div>\n        </section>\n    `,styles:`\n        :host { display: block; }\n        ${d`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`}\n    `})];class Xe extends(Pe=r,Oe=[t],Me=[t],Pe){constructor(){super(...arguments),Ke(this,Ie,He(Ce,8,this,{walk:{label:"random walk",color:"#8af"}})),He(Ce,11,this),Ke(this,Ae,He(Ce,12,this,{})),He(Ce,15,this),Ye(this,"io"),Ye(this,"walk$",g(80).pipe(v(e=>{const t=Math.max(0,Math.min(100,(e[e.length-1]??50)+8*(Math.random()-.5))),n=[...e,t];return n.length>120?n.slice(n.length-120):n},new Array(120).fill(50))))}onInit(){this.io=new IntersectionObserver(([e])=>{e.isIntersecting?this.resume():this.pause()}),this.io.observe(this)}onDestroy(){this.io?.disconnect(),this.pause()}resume(){this.graphSeries={walk:this.walk$}}pause(){this.graphSeries={}}}Ce=(e=>[,,,_e(e?.[We("metadata")]??null)])(Pe),Ie=new WeakMap,Ae=new WeakMap,Ge(Ce,4,"graphConfig",Oe,Xe,Ie),Ge(Ce,4,"graphSeries",Me,Xe,Ae),Xe=Ge(Ce,0,"GraphExample",je,Xe),Ye(Xe,"__stateTypes",{graphConfig:"Object",graphSeries:"Record"}),He(Ce,1,Xe);var Ze,et,tt,nt,st,at,it,ot,rt,ct,lt,dt,ht,pt=Object.create,mt=Object.defineProperty,ut=Object.getOwnPropertyDescriptor,vt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),bt=e=>{throw TypeError(e)},gt=(e,t,n)=>t in e?mt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ft=(e,t)=>mt(e,"name",{value:t,configurable:!0}),yt=["class","method","getter","setter","accessor","field","value","get","set"],wt=e=>void 0!==e&&"function"!=typeof e?bt("Function expected"):e,kt=(e,t,n,s,a)=>({kind:yt[e],name:t,metadata:s,addInitializer:e=>n._?bt("Already initialized"):a.push(wt(e||null))}),xt=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},St=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=yt[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&ut(h<4?a:{get[n](){return Mt(this,i)},set[n](e){return Pt(this,i,e)}},n));h?m&&h<4&&ft(i,(h>2?"set ":h>1?"get ":"")+n):ft(a,n);for(var y=s.length-1;y>=0;y--)l=kt(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Tt(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Mt:jt)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Pt(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?wt(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?bt("Object expected"):(wt(o=r.get)&&(f.get=o),wt(o=r.set)&&(f.set=o),wt(o=r.init)&&b.unshift(o));return h||((e,t)=>{gt(t,vt("metadata"),e[3])})(e,a),f&&mt(a,n,f),m?4^h?i:f:a},$t=(e,t,n)=>t.has(e)||bt("Cannot "+n),Tt=(e,t)=>Object(t)!==t?bt('Cannot use the "in" operator on this value'):e.has(t),Mt=(e,t,n)=>($t(e,t,"read from private field"),n?n.call(e):t.get(e)),Ot=(e,t,n)=>t.has(e)?bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Pt=(e,t,n,s)=>($t(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),jt=(e,t,n)=>($t(e,t,"access private method"),n);const Ct=c`
    <div class="controls">
        <div class="row">
            <span class="label">wave 1</span>
            <yaw-slider [(value)]="freq1" min="1" max="20"></yaw-slider>
            <span class="readout">{{freq1}} Hz</span>
        </div>
        <div class="row">
            <span class="label">wave 2</span>
            <yaw-slider [(value)]="freq2" min="1" max="20"></yaw-slider>
            <span class="readout">{{freq2}} Hz</span>
        </div>
        <div class="row">
            <span class="label">wave 3</span>
            <yaw-slider [(value)]="freq3" min="1" max="20"></yaw-slider>
            <span class="readout">{{freq3}} Hz</span>
        </div>
    </div>
    <rx-graph [config]="graphConfig" [series]="graphSeries"></rx-graph>
`,It=d`
    :host { display: block; }
    .controls { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem; }
    .row { display: flex; gap: 0.3rem; align-items: center; }
    .row yaw-slider { flex: 1; }
    .label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted);
             text-transform: uppercase; letter-spacing: 0.06em; }
    .readout { font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); text-align: right; }
    rx-graph { --canvas-height: 10rem; }
    rx-graph canvas { height: 10rem; }
`,At=h`const POINTS = 200;

@Component({
    selector: 'wave-mixer',
    template: \`${Ct}\`,
    styles: \`${It}\`,
})
export class WaveMixer extends RxElement {
    @state freq1 = 1;
    @state freq2 = 1;
    @state freq3 = 1;
    @state graphConfig = {
        wave1: { label: 'wave 1', color: '#f44' },
        wave2: { label: 'wave 2', color: '#4f4' },
        wave3: { label: 'wave 3', color: '#44f' },
        sum:   { label: 'sum',    color: '#fff', width: 2 },
    };
    @state graphSeries: Record<string, Observable<number[]>> = {};

    private sine(freq: number): number[] {
        const pts: number[] = [];
        for (let i = 0; i < POINTS; i++) {
            pts.push(Math.sin(2 * Math.PI * freq * (i / POINTS)) * 0.5 + 0.5);
        }
        return pts;
    }

    override onInit(): void {
        const wave1$ = this.freq1$.pipe(map((f) => this.sine(f)));
        const wave2$ = this.freq2$.pipe(map((f) => this.sine(f)));
        const wave3$ = this.freq3$.pipe(map((f) => this.sine(f)));

        this.graphSeries = {
            wave1: wave1$,
            wave2: wave2$,
            wave3: wave3$,
            sum: combineLatest([wave1$, wave2$, wave3$]).pipe(
                map(([a, b, c]) => a.map((v, i) => (v + b[i]! + c[i]!) / 3)),
            ),
        };
    }
}`;it=[e({selector:"wave-mixer",template:Ct,styles:It})];class _t extends(at=n,st=[t],nt=[t],tt=[t],et=[t],Ze=[t],at){constructor(){super(...arguments),Ot(this,rt,xt(ot,8,this,1)),xt(ot,11,this),Ot(this,ct,xt(ot,12,this,1)),xt(ot,15,this),Ot(this,lt,xt(ot,16,this,1)),xt(ot,19,this),Ot(this,dt,xt(ot,20,this,{wave1:{label:"wave 1",color:"#f44"},wave2:{label:"wave 2",color:"#4f4"},wave3:{label:"wave 3",color:"#44f"},sum:{label:"sum",color:"#fff",width:2}})),xt(ot,23,this),Ot(this,ht,xt(ot,24,this,{})),xt(ot,27,this)}sine(e){const t=[];for(let n=0;n<200;n++)t.push(.5*Math.sin(2*Math.PI*e*(n/200))+.5);return t}onInit(){const e=this.freq1$.pipe(f(e=>this.sine(e))),t=this.freq2$.pipe(f(e=>this.sine(e))),n=this.freq3$.pipe(f(e=>this.sine(e)));this.graphSeries={wave1:e,wave2:t,wave3:n,sum:y([e,t,n]).pipe(f(([e,t,n])=>e.map((e,s)=>(e+t[s]+n[s])/3)))}}}ot=(e=>[,,,pt(e?.[vt("metadata")]??null)])(at),rt=new WeakMap,ct=new WeakMap,lt=new WeakMap,dt=new WeakMap,ht=new WeakMap,St(ot,4,"freq1",st,_t,rt),St(ot,4,"freq2",nt,_t,ct),St(ot,4,"freq3",tt,_t,lt),St(ot,4,"graphConfig",et,_t,dt),St(ot,4,"graphSeries",Ze,_t,ht),(e=>{gt(e,"__stateTypes",{freq1:"number",freq2:"number",freq3:"number",graphConfig:"Object",graphSeries:"Record"})})(_t=St(ot,0,"WaveMixer",it,_t)),xt(ot,1,_t);var zt,Dt,Wt,Et=Object.create,Ft=Object.defineProperty,Rt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),qt=e=>{throw TypeError(e)},Lt=["class","method","getter","setter","accessor","field","value","get","set"],Nt=e=>void 0!==e&&"function"!=typeof e?qt("Function expected"):e,Ht=(e,t,n,s,a)=>({kind:Lt[e],name:t,metadata:s,addInitializer:e=>n._?qt("Already initialized"):a.push(Nt(e||null))});zt=[e({selector:"wave-mixer-section",directives:[s,a],template:`\n        <h1 toc-anchor="wave-mixer">Wave mixer</h1>\n        <p class="lede">Three sine waves at different frequencies, mixed into a\n           summed wave and drawn on a single\n           <code class="inline">${l`<rx-graph>`}</code>. Each slider controls\n           one frequency through a\n           <a href="/docs/components/bindings/data">tap binding</a>, and the graph\n           receives all four observable streams through a\n           <a href="/docs/components/bindings">[series] property binding</a>.</p>\n\n        <section class="host">\n            <h2>The wave mixer component</h2>\n            <p class="note">Three\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               frequency fields —\n               <code class="inline">freq1</code>,\n               <code class="inline">freq2</code>, and\n               <code class="inline">freq3</code>. Each slider writes one of them\n               through a tap binding. In\n               <code class="inline">onInit</code>, each field's\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> stream</a>\n               is piped through a <code class="inline">sine</code> function that\n               generates a 200-point array. A\n               <code class="inline">combineLatest</code> of all three produces the\n               summed wave. The resulting four observable streams are written into\n               the <code class="inline">graphSeries</code> record that the template\n               binds to\n               <code class="inline">${l`<rx-graph>`}</code>.</p>\n            <code-block syntax="ts">${l`${At}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Drag to modulate</h2>\n            <p class="note">Each slider controls one frequency. Drag it and the\n               corresponding sine wave recomputes, the sum recalculates, and the\n               graph redraws all four lines.</p>\n            <div class="split">\n                <code-block syntax="html">${l`<wave-mixer></wave-mixer>`}</code-block>\n                <div class="live"><wave-mixer></wave-mixer></div>\n            </div>\n        </section>\n    `,styles:d`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`})];class Gt extends(Wt=r){}Dt=(e=>[,,,Et(e?.[Rt("metadata")]??null)])(Wt),Gt=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{Ft(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=Ht(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,Nt(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?Ft(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,Rt("metadata"),e[3])})(e,a),a})(Dt,0,"WaveMixerExample",zt,Gt),((e,t,n)=>{for(var s=0,a=Dt[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Gt);var Yt,Bt,Vt,Jt=Object.create,Kt=Object.defineProperty,Ut=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Qt=e=>{throw TypeError(e)},Xt=["class","method","getter","setter","accessor","field","value","get","set"],Zt=e=>void 0!==e&&"function"!=typeof e?Qt("Function expected"):e,en=(e,t,n,s,a)=>({kind:Xt[e],name:t,metadata:s,addInitializer:e=>n._?Qt("Already initialized"):a.push(Zt(e||null))});Yt=[e({selector:"nested-level",template:'\n        <div class="nested">\n            <div class="tag">nested scope</div>\n            <div class="content"><slot></slot></div>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .nested { border: 1px dashed var(--border); border-radius: var(--radius);\n                  padding: 0.5rem 0.75rem 0.6rem; margin: 0.3rem 0; background: #070707; }\n        .tag { color: var(--dim); font-size: 0.65rem; letter-spacing: var(--tracking);\n               text-transform: uppercase; margin-bottom: 0.4rem; }\n        .content { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }\n    "})];class tn extends(Vt=n){}Bt=(e=>[,,,Jt(e?.[Ut("metadata")]??null)])(Vt),tn=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{Kt(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=en(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,Zt(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,Ut("metadata"),e[3])})(e,a),a})(Bt,0,"NestedLevel",Yt,tn),((e,t,n)=>{for(var s=0,a=Bt[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,tn);var nn,sn,an,on,rn,cn,ln,dn=Object.create,hn=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,mn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),un=e=>{throw TypeError(e)},vn=(e,t,n)=>t in e?hn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bn=(e,t)=>hn(e,"name",{value:t,configurable:!0}),gn=["class","method","getter","setter","accessor","field","value","get","set"],fn=e=>void 0!==e&&"function"!=typeof e?un("Function expected"):e,yn=(e,t,n,s,a)=>({kind:gn[e],name:t,metadata:s,addInitializer:e=>n._?un("Already initialized"):a.push(fn(e||null))}),wn=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},kn=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=gn[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&pn(h<4?a:{get[n](){return Tn(this,i)},set[n](e){return On(this,i,e)}},n));h?m&&h<4&&bn(i,(h>2?"set ":h>1?"get ":"")+n):bn(a,n);for(var y=s.length-1;y>=0;y--)l=yn(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>$n(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Tn:Pn)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>On(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?fn(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?un("Object expected"):(fn(o=r.get)&&(f.get=o),fn(o=r.set)&&(f.set=o),fn(o=r.init)&&b.unshift(o));return h||((e,t)=>{vn(t,mn("metadata"),e[3])})(e,a),f&&hn(a,n,f),m?4^h?i:f:a},xn=(e,t,n)=>vn(e,"symbol"!=typeof t?t+"":t,n),Sn=(e,t,n)=>t.has(e)||un("Cannot "+n),$n=(e,t)=>Object(t)!==t?un('Cannot use the "in" operator on this value'):e.has(t),Tn=(e,t,n)=>(Sn(e,t,"read from private field"),n?n.call(e):t.get(e)),Mn=(e,t,n)=>t.has(e)?un("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),On=(e,t,n,s)=>(Sn(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Pn=(e,t,n)=>(Sn(e,t,"access private method"),n);on=[e({selector:"page-echo",template:'\n        <div class="echo" [class.blended]="blend">\n            <div class="section">\n                <div class="label">child template — caret prefix reaches the parent host</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">^count</span> {{ ^count }}</code>\n                        <span class="sep">·</span>\n                        <code><span class="pre">^status</span> {{ ^status }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="^increment(2)">^increment(2)</button>\n                        <button onclick="^reset">^reset</button>\n                    </div>\n                </div>\n            </div>\n            <div class="section">\n                <div class="label">local <code class="inline">accent</code> state pushes to the host via tap binding</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">accent</span> {{ accent }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="cycleAccent" [style]="accentBtnStyle">accent</button>\n                    </div>\n                </div>\n            </div>\n            <div class="section">\n                <div class="label">local <code class="inline">blend</code> state — stays in this component, never leaves</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">blend</span> {{ blend }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="toggleBlend" [class.active]="blend">blend</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .echo { background: #0a1128; border: var(--border-width) solid var(--navy); border-radius: var(--radius);\n                padding: 1rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.85rem; }\n        .section + .section { margin-top: 1rem; }\n        .label { color: var(--slate); font-size: 0.7rem; letter-spacing: var(--tracking);\n                 text-transform: uppercase; margin-bottom: 0.5rem; }\n        .label code { color: var(--accent); font-size: inherit; }\n        .body { display: flex; flex-direction: column; gap: 0.4rem;\n                padding: 0.5rem 0.6rem; background: var(--bg-1);\n                border-radius: var(--radius-sm); }\n        .row { display: flex; gap: 0.5rem; align-items: center; }\n        .row code { color: var(--accent); background: transparent; padding: 0.35rem 0.4rem; }\n        .pre { color: var(--slate); }\n        .sep { color: #334; }\n        .row button { background: #0f1a3a; border: var(--border-width) solid var(--navy); color: var(--accent);\n                      padding: 0.35rem 0.7rem; font: inherit; font-size: 0.8rem;\n                      cursor: pointer; border-radius: var(--radius-sm); }\n        .row button:hover { background: #182555; color: var(--white); }\n        .row button.active { background: var(--navy); border-color: var(--accent); color: var(--white); }\n        .echo.blended { mix-blend-mode: difference; }\n    "})];class jn extends(an=n,sn=[t],nn=[t],an){constructor(){super(...arguments),Mn(this,cn,wn(rn,8,this,"#050505")),wn(rn,11,this),Mn(this,ln,wn(rn,12,this,!1)),wn(rn,15,this),xn(this,"accents",["#050505","#0f2538","#250f28","#0f2510","#25200f","#280f0f","#0f0f28"])}lighten(e,t){const n=n=>Math.min(255,parseInt(e.slice(n,n+2),16)+t);return`rgb(${n(1)},${n(3)},${n(5)})`}contrastColor(e,t){const n=n=>Math.min(255,parseInt(e.slice(n,n+2),16)+t);return(.299*n(1)+.587*n(3)+.114*n(5))/255>.5?"#050505":"#f5f5f5"}get accentBtnStyle$(){return this.accent$.pipe(f(e=>({accent:e,bg:this.lighten(e,70),fg:this.contrastColor(e,70)})),f(({accent:e,bg:t,fg:n})=>`border-color: ${e}; color: ${n}; background: ${t}`))}cycleAccent(){const e=this.accents.indexOf(this.accent);this.accent=this.accents[(e+1)%this.accents.length]}toggleBlend(){this.blend=!this.blend}}rn=(e=>[,,,dn(e?.[mn("metadata")]??null)])(an),cn=new WeakMap,ln=new WeakMap,kn(rn,4,"accent",sn,jn,cn),kn(rn,4,"blend",nn,jn,ln),jn=kn(rn,0,"PageEcho",on,jn),xn(jn,"__stateTypes",{accent:"string",blend:"boolean"}),wn(rn,1,jn);var Cn,In,An,_n,zn,Dn,Wn,En=Object.create,Fn=Object.defineProperty,Rn=Object.getOwnPropertyDescriptor,qn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ln=e=>{throw TypeError(e)},Nn=(e,t,n)=>t in e?Fn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Hn=(e,t)=>Fn(e,"name",{value:t,configurable:!0}),Gn=["class","method","getter","setter","accessor","field","value","get","set"],Yn=e=>void 0!==e&&"function"!=typeof e?Ln("Function expected"):e,Bn=(e,t,n,s,a)=>({kind:Gn[e],name:t,metadata:s,addInitializer:e=>n._?Ln("Already initialized"):a.push(Yn(e||null))}),Vn=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Jn=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Gn[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&Rn(h<4?a:{get[n](){return Qn(this,i)},set[n](e){return Zn(this,i,e)}},n));h?m&&h<4&&Hn(i,(h>2?"set ":h>1?"get ":"")+n):Hn(a,n);for(var y=s.length-1;y>=0;y--)l=Bn(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Un(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Qn:es)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Zn(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?Yn(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?Ln("Object expected"):(Yn(o=r.get)&&(f.get=o),Yn(o=r.set)&&(f.set=o),Yn(o=r.init)&&b.unshift(o));return h||((e,t)=>{Nn(t,qn("metadata"),e[3])})(e,a),f&&Fn(a,n,f),m?4^h?i:f:a},Kn=(e,t,n)=>t.has(e)||Ln("Cannot "+n),Un=(e,t)=>Object(t)!==t?Ln('Cannot use the "in" operator on this value'):e.has(t),Qn=(e,t,n)=>(Kn(e,t,"read from private field"),n?n.call(e):t.get(e)),Xn=(e,t,n)=>t.has(e)?Ln("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Zn=(e,t,n,s)=>(Kn(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),es=(e,t,n)=>(Kn(e,t,"access private method"),n);const ts=c`
<!-- depth 0: buttons sit directly in the host's template -->
<div class="buttons">
    <button onclick="increment(1)">+1</button>
    <button onclick="increment(-1)">-1</button>
    <button onclick="reset">reset</button>
</div>
<p class="state">count = {{count}} <span class="status">({{status}})</span></p>

<!-- depth 1: buttons wrapped in one <nested-level> -->
<nested-level>
    <button onclick="increment(5)">+5</button>
    <button onclick="increment(-5)">-5</button>
</nested-level>
<p class="state">count = {{count}} <span class="status">({{status}})</span></p>

<!-- depth 2: buttons wrapped in two <nested-level>s -->
<nested-level>
    <nested-level>
        <button onclick="increment(10)">+10</button>
        <button onclick="increment(100)">+100</button>
    </nested-level>
</nested-level>
<p class="state">count = {{count}} <span class="status">({{status}})</span></p>

<!-- page-echo: a separate component with its own template and state -->
<page-echo [(accent)]="accent"></page-echo>
`;_n=[e({selector:"nesting-section",directives:[s,a],template:`\n        <div class="page">\n            <h1 toc-anchor="nesting-example">Nesting example</h1>\n\n            <p class="lede"><a href="/docs/components/bindings">Bindings</a> resolve\n               against the component whose template they're written in. Nesting depth\n               is irrelevant. A <code class="inline">${l`<div>`}</code> wrapper,\n               a custom element wrapper, two custom element wrappers — doesn't matter.\n               If the binding is in your template, it resolves against you.</p>\n\n            <section class="host">\n                <h2><code class="inline">${l`<nested-level>`}</code> — a stateless wrapper</h2>\n                <p class="note">A stateless wrapper that\n                   <a href="/docs/components/projection">projects</a> its children\n                   through a <code class="inline">${l`<slot>`}</code> inside a\n                   dashed border and a label. It has no state and no behaviour — it\n                   exists to prove that wrapping bindings in a custom element doesn't\n                   redirect where they resolve. This component adds visual framing\n                   but introduces no scope boundary.</p>\n                <code-block syntax="ts">${l`${h`@Component({
    selector: 'nested-level',
    template: \`
        <div class="nested">
            <div class="tag">nested scope</div>
            <div class="content"><slot></slot></div>
        </div>
    \`,
    styles: \`
        :host { display: block; }
        .nested { border: 1px dashed var(--border); border-radius: var(--radius);
                  padding: 0.5rem 0.75rem 0.6rem; margin: 0.3rem 0; background: #070707; }
        .tag { color: var(--dim); font-size: 0.65rem; letter-spacing: var(--tracking);
               text-transform: uppercase; margin-bottom: 0.4rem; }
        .content { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }
    \`
})
export class NestedLevel extends RxElement {}`}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${l`<page-echo>`}</code> — a component boundary</h2>\n                <p class="note">This <em>is</em> a\n                   <a href="/docs/components/bindings">component boundary</a>.\n                   Its bindings resolve against itself by default —\n                   its <a href="/docs/components/state"><code class="inline">@state</code></a> fields\n                   <code class="inline">blend</code> and\n                   <code class="inline">accent</code> are local. It assumes its host\n                   has a <code class="inline">count</code> field and an\n                   <code class="inline">increment</code> method, and uses\n                   <a href="/docs/components/paths/carets">caret bindings</a>\n                   to reach them\n                   (<code class="inline">${l`^count`}</code>,\n                   <code class="inline">${l`^increment(2)`}</code>). The tap binding\n                   <code class="inline">${l`[(accent)]="accent"`}</code> writes\n                   in the opposite direction — when\n                   <code class="inline">${l`[(accent)]`}</code> changes, the new\n                   value pushes into the host's\n                   <code class="inline">accent</code>.\n                   Wrapping in a stateless element doesn't change scope, but a component\n                   with its own template does — and carets are how you cross that\n                   boundary.</p>\n                <code-block syntax="ts">${l`${h`@Component({
    selector: 'page-echo',
    template: \`
        <div class="echo" [class.blended]="blend">
            <div class="section">
                <div class="label">child template — caret prefix reaches the parent host</div>
                <div class="body">
                    <div class="row">
                        <code><span class="pre">^count</span> {{ ^count }}</code>
                        <span class="sep">·</span>
                        <code><span class="pre">^status</span> {{ ^status }}</code>
                    </div>
                    <div class="row">
                        <button onclick="^increment(2)">^increment(2)</button>
                        <button onclick="^reset">^reset</button>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="label">local <code class="inline">accent</code> state pushes to the host via tap binding</div>
                <div class="body">
                    <div class="row">
                        <code><span class="pre">accent</span> {{ accent }}</code>
                    </div>
                    <div class="row">
                        <button onclick="cycleAccent" [style]="accentBtnStyle">accent</button>
                    </div>
                </div>
            </div>
            <div class="section">
                <div class="label">local <code class="inline">blend</code> state — stays in this component, never leaves</div>
                <div class="body">
                    <div class="row">
                        <code><span class="pre">blend</span> {{ blend }}</code>
                    </div>
                    <div class="row">
                        <button onclick="toggleBlend" [class.active]="blend">blend</button>
                    </div>
                </div>
            </div>
        </div>
    \`,
    styles: \`
        :host { display: block; }
        .echo { background: #0a1128; border: var(--border-width) solid var(--navy); border-radius: var(--radius);
                padding: 1rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.85rem; }
        .section + .section { margin-top: 1rem; }
        .label { color: var(--slate); font-size: 0.7rem; letter-spacing: var(--tracking);
                 text-transform: uppercase; margin-bottom: 0.5rem; }
        .label code { color: var(--accent); font-size: inherit; }
        .body { display: flex; flex-direction: column; gap: 0.4rem;
                padding: 0.5rem 0.6rem; background: var(--bg-1);
                border-radius: var(--radius-sm); }
        .row { display: flex; gap: 0.5rem; align-items: center; }
        .row code { color: var(--accent); background: transparent; padding: 0.35rem 0.4rem; }
        .pre { color: var(--slate); }
        .sep { color: #334; }
        .row button { background: #0f1a3a; border: var(--border-width) solid var(--navy); color: var(--accent);
                      padding: 0.35rem 0.7rem; font: inherit; font-size: 0.8rem;
                      cursor: pointer; border-radius: var(--radius-sm); }
        .row button:hover { background: #182555; color: var(--white); }
        .row button.active { background: var(--navy); border-color: var(--accent); color: var(--white); }
        .echo.blended { mix-blend-mode: difference; }
    \`
})
export class PageEcho extends RxElement {
    @state accent = '#050505';
    @state blend = false;

    private readonly accents = ['#050505', '#0f2538', '#250f28', '#0f2510', '#25200f', '#280f0f', '#0f0f28'];

    private lighten(hex: string, amount: number): string {
        const c = (o: number) => Math.min(255, parseInt(hex.slice(o, o + 2), 16) + amount);
        return \`rgb(\${c(1)},\${c(3)},\${c(5)})\`;
    }

    private contrastColor(hex: string, amount: number): string {
        const ch = (o: number) => Math.min(255, parseInt(hex.slice(o, o + 2), 16) + amount);
        const lum = (0.299 * ch(1) + 0.587 * ch(3) + 0.114 * ch(5)) / 255;
        return lum > 0.5 ? '#050505' : '#f5f5f5';
    }

    get accentBtnStyle$() {
        return this.accent$.pipe(
            map((a) => ({ accent: a, bg: this.lighten(a, 70), fg: this.contrastColor(a, 70) })),
            map(({ accent, bg, fg }) => \`border-color: \${accent}; color: \${fg}; background: \${bg}\`),
        );
    }

    cycleAccent(): void {
        const i = this.accents.indexOf(this.accent);
        this.accent = this.accents[(i + 1) % this.accents.length]!;
    }

    toggleBlend(): void {
        this.blend = !this.blend;
    }
}`}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${l`<nesting-section>`}</code> — the host template (<code class="inline">NESTING_TEMPLATE</code>)</h2>\n                <p class="note">The host template places buttons at three\n                   nesting depths. Some sit directly in the template, some are\n                   wrapped in one\n                   <code class="inline">${l`<nested-level>`}</code>, and some\n                   are wrapped in two.\n                   All three groups\n                   <a href="/docs/components/paths">resolve against</a> this component\n                   because all three are written in its template. At the bottom,\n                   <code class="inline">${l`<page-echo [(accent)]="accent">`}</code>\n                   — when <code class="inline">${l`<page-echo>`}</code>'s\n                   <code class="inline">${l`[(accent)]`}</code> changes, the\n                   <a href="/docs/components/bindings/data">tap binding</a> pushes\n                   it into the host's <code class="inline">accent</code>.</p>\n                <code-block syntax="html">${l`${ts}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${l`<nesting-section>`}</code> — the host class</h2>\n                <p class="note">The class owns all the state that the template and\n                   its children read. <code class="inline">count</code> and\n                   <code class="inline">accent</code> are\n                   <code class="inline">@state</code> fields — each one backs an\n                   observable stream that bindings subscribe to.\n                   <code class="inline">status$</code> is a derived getter that maps\n                   <code class="inline">count</code> to the strings\n                   "zero", "positive", or "negative".\n                   <code class="inline">increment</code> and\n                   <code class="inline">reset</code> are the methods that the\n                   template's <code class="inline">onclick</code> bindings call.</p>\n                <code-block syntax="ts">${l`${h`@Component({
    selector: 'nesting-section',
    template: NESTING_TEMPLATE,
})
export class NestingExample extends RxElement {
    @state count = 0;
    @state accent = '#050505';

    get status$(): Observable<string> {
        return this.count$.pipe(map((c) => {
            if (c === 0) { return 'zero'; }
            return c > 0 ? 'positive' : 'negative';
        }));
    }

    increment(amount: number): void {
        this.count += amount;
    }

    reset(): void {
        this.count = 0;
    }
}`}`}</code-block>\n            </section>\n\n            <section class="ex">\n                <h2>Live</h2>\n                <p class="note">All three components rendered together. The\n                   buttons at depth 0 sit directly in the\n                   <code class="inline">${l`<nesting-section>`}</code> template.\n                   The buttons inside the dashed boxes are wrapped in one or two\n                   <code class="inline">${l`<nested-level>`}</code> elements —\n                   but they still resolve against the host, so they read and write\n                   the same <code class="inline">count</code>. At the bottom,\n                   <code class="inline">${l`<page-echo>`}</code> reaches\n                   <code class="inline">count</code> via carets, and its tap binding\n                   <code class="inline">${l`[(accent)]="accent"`}</code> pushes\n                   <code class="inline">${l`<page-echo>`}</code>'s\n                   <code class="inline">accent</code> into the host's\n                   <code class="inline">accent</code> — click the accent button to\n                   cycle the background.\n                   <code class="inline">blend</code> stays entirely inside\n                   <code class="inline">${l`<page-echo>`}</code> and nothing\n                   outside sees it.</p>\n                <div class="live" [style.background]="accent">${ts}</div>\n            </section>\n        </div>\n    `,styles:`${d`
    :host { display: block; }
    .buttons { display: flex; flex-wrap: wrap; gap: 0.3rem; }
    .state { margin: 0.75rem 0 0; font-family: var(--font-mono);
             color: var(--secondary); font-size: 0.85rem; }
    .state .status { color: var(--accent); }
    button { background: var(--bg-3); border: var(--border-width) solid var(--border); color: var(--white);
             padding: 0.5rem 1rem; font: inherit; font-size: 0.9rem;
             cursor: pointer; border-radius: var(--radius); margin: 0.15rem; }
    button:hover { background: var(--bg-5); border-color: var(--dim); }
`}\n${d`
    .live { display: flex; flex-direction: column; gap: 0.5rem;
            padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`}`})];class ns extends(An=r,In=[t],Cn=[t],An){constructor(){super(...arguments),Xn(this,Dn,Vn(zn,8,this,0)),Vn(zn,11,this),Xn(this,Wn,Vn(zn,12,this,"#050505")),Vn(zn,15,this)}get status$(){return this.count$.pipe(f(e=>0===e?"zero":e>0?"positive":"negative"))}increment(e){this.count+=e}reset(){this.count=0}}zn=(e=>[,,,En(e?.[qn("metadata")]??null)])(An),Dn=new WeakMap,Wn=new WeakMap,Jn(zn,4,"count",In,ns,Dn),Jn(zn,4,"accent",Cn,ns,Wn),(e=>{Nn(e,"__stateTypes",{count:"number",accent:"string"})})(ns=Jn(zn,0,"NestingExample",_n,ns)),Vn(zn,1,ns);var ss,as,is,os,rs,cs,ls,ds,hs,ps,ms,us,vs,bs,gs,fs,ys,ws,ks,xs,Ss,$s,Ts,Ms,Os,Ps,js,Cs,Is,As=Object.create,_s=Object.defineProperty,zs=Object.getOwnPropertyDescriptor,Ds=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ws=e=>{throw TypeError(e)},Es=(e,t,n)=>t in e?_s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Fs=(e,t)=>_s(e,"name",{value:t,configurable:!0}),Rs=["class","method","getter","setter","accessor","field","value","get","set"],qs=e=>void 0!==e&&"function"!=typeof e?Ws("Function expected"):e,Ls=(e,t,n,s,a)=>({kind:Rs[e],name:t,metadata:s,addInitializer:e=>n._?Ws("Already initialized"):a.push(qs(e||null))}),Ns=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Hs=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Rs[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&zs(h<4?a:{get[n](){return Vs(this,i)},set[n](e){return Ks(this,i,e)}},n));h?m&&h<4&&Fs(i,(h>2?"set ":h>1?"get ":"")+n):Fs(a,n);for(var y=s.length-1;y>=0;y--)l=Ls(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Bs(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Vs:Us)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Ks(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?qs(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?Ws("Object expected"):(qs(o=r.get)&&(f.get=o),qs(o=r.set)&&(f.set=o),qs(o=r.init)&&b.unshift(o));return h||((e,t)=>{Es(t,Ds("metadata"),e[3])})(e,a),f&&_s(a,n,f),m?4^h?i:f:a},Gs=(e,t,n)=>Es(e,"symbol"!=typeof t?t+"":t,n),Ys=(e,t,n)=>t.has(e)||Ws("Cannot "+n),Bs=(e,t)=>Object(t)!==t?Ws('Cannot use the "in" operator on this value'):e.has(t),Vs=(e,t,n)=>(Ys(e,t,"read from private field"),n?n.call(e):t.get(e)),Js=(e,t,n)=>t.has(e)?Ws("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ks=(e,t,n,s)=>(Ys(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Us=(e,t,n)=>(Ys(e,t,"access private method"),n);const Qs=c`
    <div class="controls">
        <div class="actions">
            <button onclick="toggle">{{label}}</button>
            <button onclick="clear">clear</button>
            <span class="fps"><span class="dot" [style.background]="dotColor"></span><em>{{fps}}</em> fps</span>
        </div>
        <table class="stats">
            <tr><th>rows</th><th>inserts/frame</th><th>inserts/s</th></tr>
            <tr><td>{{count}}</td><td>{{batch}}</td><td>{{ips}}</td></tr>
        </table>
    </div>
    <div class="graphs">
        <rx-graph [config]="fpsConfig" [series]="fpsSeries"></rx-graph>
        <rx-graph [config]="insertsConfig" [series]="insertsSeries"></rx-graph>
    </div>
    <div class="head">
        <div>#</div>
        <div>timestamp</div>
        <div>random</div>
    </div>
    <div class="scroll">
        <div class="body" #body></div>
        <div class="anchor"></div>
    </div>
`,Xs=d`
    :host { display: block; }
    .controls { display: flex; gap: 1rem; align-items: center;
                flex-wrap: wrap; margin-bottom: 1rem; }
    .actions { display: flex; gap: 0.5rem; align-items: center; }
    .fps { display: grid; grid-template-columns: 8px auto auto; gap: 0.4rem;
           align-items: center; font-family: var(--font-mono); font-size: 0.85rem; color: var(--secondary); }
    .dot { width: 8px; height: 8px; border-radius: 50%; }
    .fps em { color: var(--accent); font-style: normal; min-width: 3ch; text-align: right; }
    button { background: var(--bg-3); border: var(--border-width) solid var(--border); color: var(--white);
             padding: 0.5rem 1rem; font: inherit; font-size: 0.85rem;
             font-family: var(--font-mono); cursor: pointer; border-radius: var(--radius); }
    button:hover { background: var(--bg-5); border-color: var(--accent); color: var(--accent); }
    .stats { border-collapse: collapse; font-family: var(--font-mono); font-size: 0.8rem; }
    .stats th { color: var(--muted); font-weight: normal; padding: 0.2rem 0.5rem;
                text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.7rem; }
    .stats td { color: var(--accent); padding: 0.2rem 0.5rem;
                border-top: var(--border-width) solid var(--bg-5); }
    em { color: var(--accent); font-style: normal; }

    .graphs { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-bottom: 0.75rem; }
    .scroll { height: 12rem; overflow-y: auto; overflow-anchor: auto;
              display: flex; flex-direction: column-reverse;
              background: #030303; border: var(--border-width) solid var(--bg-5); border-radius: 0 0 8px 8px;
              scrollbar-width: thin; scrollbar-color: var(--border) var(--bg-2); }
    .scroll::-webkit-scrollbar { width: 10px; }
    .scroll::-webkit-scrollbar-track { background: var(--bg-2); border-radius: var(--radius-lg); }
    .scroll::-webkit-scrollbar-thumb { background: var(--border); border-radius: 5px;
                                       border: 2px solid var(--bg-2); }
    .scroll::-webkit-scrollbar-thumb:hover { background: var(--accent); }
    .anchor { overflow-anchor: auto; height: 1px; }

    .head { display: grid; grid-template-columns: 5ch 12ch 1fr; gap: 0 1.5rem;
            padding: 0.65rem 1rem; background: var(--bg-2); color: var(--muted);
            font-family: var(--font-mono); font-size: 0.7rem;
            text-transform: uppercase; letter-spacing: 0.1em;
            border: var(--border-width) solid var(--bg-5); border-bottom: none;
            border-radius: 8px 8px 0 0; }
    .body { overflow-anchor: none; width: 100%; }
    .body > .row { display: grid; grid-template-columns: 5ch 12ch 1fr; gap: 0 1.5rem;
                   padding: 0.3rem 1rem; font-family: var(--font-mono);
                   font-size: 0.8rem; color: var(--text);
                   border-bottom: var(--border-width) solid var(--bg-2); }
    .body > .row:nth-child(odd) { background: #080808; }
    .body > .row > :first-child { color: var(--accent); }
    .body > .row > :nth-child(3) { color: var(--muted); }
`,Zs=h`const TARGET_FPS = 60;
const KP = 0.4;
const FPS_WINDOW = 30;
const IPS_WINDOW = 10;
const MIN_BATCH = 1;
const INITIAL_BATCH = 16;
const GRAPH_POINTS = 120;
const GRAPH_SAMPLE_MS = 90;

@Component({
    selector: 'scheduler-theatre',
    template: \`${Qs}\`,
    styles: \`${Xs}\`,
})
export class SchedulerTheatre extends RxElement {
    @state count = 0;
    @state batch = 0;
    @state ips = 0;
    @state label = 'flood';
    @state fps = 0;
    @state dotColor = '#555';
    @state fpsPoints: number[] = [];
    @state batchPoints: number[] = [];
    @state ipsPoints: number[] = [];
    @state fpsConfig = { fps: { label: 'fps', color: '#4f4' } };
    @state insertsConfig = {
        batch: { label: 'inserts/frame', color: '#fa4' },
        ips: { label: 'inserts/s', color: '#8af' },
    };
    @state fpsSeries: Record<string, Observable<number[]>> = {};
    @state insertsSeries: Record<string, Observable<number[]>> = {};

    body!: HTMLElement;
    private fpsRaf = 0;
    private fpsLast = 0;
    private insertRaf = 0;
    private graphInterval = 0;
    private running = false;
    private visible = false;
    private seeded = false;
    private current = INITIAL_BATCH;
    private fpsSamples: number[] = [];
    private ipsSamples: number[] = [];
    private lastInsertTick = 0;
    private io: IntersectionObserver | undefined;

    // P controller: measures fps via rAF timing, adjusts batch size
    fpsTick(now: number): void {
        const dt = now - this.fpsLast;
        this.fpsLast = now;
        if (dt > 0) {
            this.fpsSamples.push(dt);
            if (this.fpsSamples.length > FPS_WINDOW) this.fpsSamples.shift();
            const avgDt = this.fpsSamples.reduce((a, b) => a + b, 0)
                        / this.fpsSamples.length;
            this.fps = Math.round(1000 / avgDt);
            if (!this.seeded) {
                this.fpsPoints = new Array(GRAPH_POINTS).fill(this.fps);
                this.fpsPoints$.touch();
                this.seeded = true;
            }
            if (this.running) {
                const error = (this.fps - TARGET_FPS) / TARGET_FPS;
                this.dotColor = error < 0 ? '#f44' : '#4f4';
                this.current = Math.max(MIN_BATCH,
                    Math.round(this.current * (1 + KP * error)));
                this.batch = this.current;
            }
        }
        this.fpsRaf = requestAnimationFrame((t) => this.fpsTick(t));
    }

    override onInit(): void {
        this.fpsSeries = { fps: this.fpsPoints$ };
        this.insertsSeries = { batch: this.batchPoints$, ips: this.ipsPoints$ };
        this.io = new IntersectionObserver(([entry]) => {
            if (entry!.isIntersecting) this.onVisible();
            else this.onHidden();
        });
        this.io.observe(this);
    }

    override onDestroy(): void {
        this.io?.disconnect();
        this.onHidden();
    }

    private onVisible(): void {
        if (this.visible) return;
        this.visible = true;
        this.fpsLast = performance.now();
        this.fpsSamples = [];
        this.fpsRaf = requestAnimationFrame((t) => this.fpsTick(t));
        this.graphInterval = window.setInterval(() => {
            this.fpsPoints.push(this.fps);
            if (this.fpsPoints.length > GRAPH_POINTS) this.fpsPoints.shift();
            this.fpsPoints$.touch();
            this.batchPoints.push(this.batch);
            if (this.batchPoints.length > GRAPH_POINTS) this.batchPoints.shift();
            this.batchPoints$.touch();
            this.ipsPoints.push(this.ips);
            if (this.ipsPoints.length > GRAPH_POINTS) this.ipsPoints.shift();
            this.ipsPoints$.touch();
        }, GRAPH_SAMPLE_MS);
        if (this.running) {
            this.lastInsertTick = performance.now();
            this.insertRaf = requestAnimationFrame(() => this.insertTick());
        }
    }

    private onHidden(): void {
        if (!this.visible) return;
        this.visible = false;
        cancelAnimationFrame(this.fpsRaf);
        clearInterval(this.graphInterval);
        if (this.running) cancelAnimationFrame(this.insertRaf);
    }

    toggle(): void {
        if (this.running) { this.stop(); } else { this.start(); }
    }

    clear(): void {
        this.stop();
        this.body.replaceChildren();
        this.count = 0;
        this.batch = 0;
        this.ips = 0;
    }

    private start(): void {
        this.running = true;
        this.label = 'stop';
        this.current = INITIAL_BATCH;
        this.ipsSamples = [];
        if (this.visible) {
            this.lastInsertTick = performance.now();
            this.insertRaf = requestAnimationFrame(() => this.insertTick());
        }
    }

    private stop(): void {
        cancelAnimationFrame(this.insertRaf);
        this.running = false;
        this.label = 'flood';
        this.dotColor = '#555';
    }

    private insertTick(): void {
        if (!this.running) return;
        const now = performance.now();
        const dt = now - this.lastInsertTick;
        this.lastInsertTick = now;

        const n = this.current;
        const base = this.count;
        let html = '';
        for (let i = 0; i < n; i++) {
            const idx = base + i + 1;
            html += \\\`<div class="row"><div>\\\${idx}</div><div>\\\${now.toFixed(1)}</div><div>\\\${Math.random().toFixed(6)}</div></div>\\\`;
        }
        this.body.insertAdjacentHTML('beforeend', html);
        this.count = base + n;

        if (dt > 0) {
            this.ipsSamples.push(n / (dt / 1000));
            if (this.ipsSamples.length > IPS_WINDOW) this.ipsSamples.shift();
            const avg = this.ipsSamples.reduce((a, b) => a + b, 0)
                      / this.ipsSamples.length;
            this.ips = Math.round(avg);
        }

        this.insertRaf = requestAnimationFrame(() => this.insertTick());
    }
}`,ea=120;gs=[e({selector:"scheduler-theatre",template:Qs,styles:Xs})];class ta extends(bs=n,vs=[t],us=[t],ms=[t],ps=[t],hs=[t],ds=[t],ls=[t],cs=[t],rs=[t],os=[t],is=[t],as=[t],ss=[t],bs){constructor(){super(...arguments),Js(this,ys,Ns(fs,8,this,0)),Ns(fs,11,this),Js(this,ws,Ns(fs,12,this,0)),Ns(fs,15,this),Js(this,ks,Ns(fs,16,this,0)),Ns(fs,19,this),Js(this,xs,Ns(fs,20,this,"flood")),Ns(fs,23,this),Js(this,Ss,Ns(fs,24,this,0)),Ns(fs,27,this),Js(this,$s,Ns(fs,28,this,"#555")),Ns(fs,31,this),Js(this,Ts,Ns(fs,32,this,[])),Ns(fs,35,this),Js(this,Ms,Ns(fs,36,this,[])),Ns(fs,39,this),Js(this,Os,Ns(fs,40,this,[])),Ns(fs,43,this),Js(this,Ps,Ns(fs,44,this,{fps:{label:"fps",color:"#4f4"}})),Ns(fs,47,this),Js(this,js,Ns(fs,48,this,{batch:{label:"inserts/frame",color:"#fa4"},ips:{label:"inserts/s",color:"#8af"}})),Ns(fs,51,this),Js(this,Cs,Ns(fs,52,this,{})),Ns(fs,55,this),Js(this,Is,Ns(fs,56,this,{})),Ns(fs,59,this),Gs(this,"body"),Gs(this,"fpsRaf",0),Gs(this,"fpsLast",0),Gs(this,"insertRaf",0),Gs(this,"graphInterval",0),Gs(this,"running",!1),Gs(this,"visible",!1),Gs(this,"seeded",!1),Gs(this,"current",16),Gs(this,"fpsSamples",[]),Gs(this,"ipsSamples",[]),Gs(this,"lastInsertTick",0),Gs(this,"io")}fpsTick(e){const t=e-this.fpsLast;if(this.fpsLast=e,t>0){this.fpsSamples.push(t),this.fpsSamples.length>30&&this.fpsSamples.shift();const e=this.fpsSamples.reduce((e,t)=>e+t,0)/this.fpsSamples.length;if(this.fps=Math.round(1e3/e),this.seeded||(this.fpsPoints=new Array(ea).fill(this.fps),this.fpsPoints$.touch(),this.seeded=!0),this.running){const e=(this.fps-60)/60;this.dotColor=e<0?"#f44":"#4f4",this.current=Math.max(1,Math.round(this.current*(1+.4*e))),this.batch=this.current}}this.fpsRaf=requestAnimationFrame(e=>{this.fpsTick(e)})}onInit(){this.fpsSeries={fps:this.fpsPoints$},this.insertsSeries={batch:this.batchPoints$,ips:this.ipsPoints$},this.io=new IntersectionObserver(([e])=>{e.isIntersecting?this.onVisible():this.onHidden()}),this.io.observe(this)}onDestroy(){this.io?.disconnect(),this.onHidden()}onVisible(){this.visible||(this.visible=!0,console.log("RESUME",this.fpsPoints),this.fpsLast=performance.now(),this.fpsSamples=[],this.fpsRaf=requestAnimationFrame(e=>{this.fpsTick(e)}),this.graphInterval=window.setInterval(()=>{this.fpsPoints.push(this.fps),this.fpsPoints.length>ea&&this.fpsPoints.shift(),this.fpsPoints$.touch(),this.batchPoints.push(this.batch),this.batchPoints.length>ea&&this.batchPoints.shift(),this.batchPoints$.touch(),this.ipsPoints.push(this.ips),this.ipsPoints.length>ea&&this.ipsPoints.shift(),this.ipsPoints$.touch()},90),this.running&&(this.lastInsertTick=performance.now(),this.insertRaf=requestAnimationFrame(()=>this.insertTick())))}onHidden(){this.visible&&(this.visible=!1,console.log("PAUSE"),cancelAnimationFrame(this.fpsRaf),clearInterval(this.graphInterval),this.running&&cancelAnimationFrame(this.insertRaf))}toggle(){this.running?this.stop():this.start()}clear(){this.stop(),this.body.replaceChildren(),this.count=0,this.batch=0,this.ips=0}start(){this.running=!0,this.label="stop",this.current=16,this.ipsSamples=[],this.visible&&(this.lastInsertTick=performance.now(),this.insertRaf=requestAnimationFrame(()=>this.insertTick()))}stop(){cancelAnimationFrame(this.insertRaf),this.running=!1,this.label="flood",this.dotColor="#555"}insertTick(){if(!this.running)return;const e=performance.now(),t=e-this.lastInsertTick;this.lastInsertTick=e;const n=this.current,s=this.count;let a="";for(let i=0;i<n;i++)a+=`<div class="row"><div>${String(s+i+1)}</div><div>${e.toFixed(1)}</div><div>${Math.random().toFixed(6)}</div></div>`;if(this.body.insertAdjacentHTML("beforeend",a),this.count=s+n,t>0){this.ipsSamples.push(n/(t/1e3)),this.ipsSamples.length>10&&this.ipsSamples.shift();const e=this.ipsSamples.reduce((e,t)=>e+t,0)/this.ipsSamples.length;this.ips=Math.round(e)}this.insertRaf=requestAnimationFrame(()=>this.insertTick())}}fs=(e=>[,,,As(e?.[Ds("metadata")]??null)])(bs),ys=new WeakMap,ws=new WeakMap,ks=new WeakMap,xs=new WeakMap,Ss=new WeakMap,$s=new WeakMap,Ts=new WeakMap,Ms=new WeakMap,Os=new WeakMap,Ps=new WeakMap,js=new WeakMap,Cs=new WeakMap,Is=new WeakMap,Hs(fs,4,"count",vs,ta,ys),Hs(fs,4,"batch",us,ta,ws),Hs(fs,4,"ips",ms,ta,ks),Hs(fs,4,"label",ps,ta,xs),Hs(fs,4,"fps",hs,ta,Ss),Hs(fs,4,"dotColor",ds,ta,$s),Hs(fs,4,"fpsPoints",ls,ta,Ts),Hs(fs,4,"batchPoints",cs,ta,Ms),Hs(fs,4,"ipsPoints",rs,ta,Os),Hs(fs,4,"fpsConfig",os,ta,Ps),Hs(fs,4,"insertsConfig",is,ta,js),Hs(fs,4,"fpsSeries",as,ta,Cs),Hs(fs,4,"insertsSeries",ss,ta,Is),ta=Hs(fs,0,"SchedulerTheatre",gs,ta),Gs(ta,"__stateTypes",{count:"number",batch:"number",ips:"number",label:"string",fps:"number",dotColor:"string",fpsPoints:"Array",batchPoints:"Array",ipsPoints:"Array",fpsConfig:"Object",insertsConfig:"Object",fpsSeries:"Record",insertsSeries:"Record"}),Ns(fs,1,ta);var na,sa,aa,ia=Object.create,oa=Object.defineProperty,ra=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ca=e=>{throw TypeError(e)},la=["class","method","getter","setter","accessor","field","value","get","set"],da=e=>void 0!==e&&"function"!=typeof e?ca("Function expected"):e,ha=(e,t,n,s,a)=>({kind:la[e],name:t,metadata:s,addInitializer:e=>n._?ca("Already initialized"):a.push(da(e||null))});na=[e({selector:"scheduler-theatre-section",directives:[s,a],template:`\n        <h1 toc-anchor="scheduler-theatre">Scheduler theatre</h1>\n        <p class="lede">Click flood to start inserting rows into a table. A proportional controller\n           measures frame rate and adjusts batch size per frame to try to maintain 60 fps. Watch the\n           graphs as elements pile up. FPS will sag\n           and the batch size shrink to compensate — this is a game it will quickly lose. The writes\n           haven't slowed down — <code class="inline">insertAdjacentHTML</code> is still\n           microseconds. Layout and paint got expensive. That cost lives in the browser's C++\n           layout engine, on the other side of a boundary no abstraction can cross.\n           No amount of diffing, batching, or dirty-checking will ever move that line.\n           The P controller in this demo is like any other popular framework. It reacts to the symptom,\n           backs off proportionally, and loses anyway.</p>\n\n        <p class="lede"><em>The framework could insert 10,000 rows in a blink without dropping\n           a frame. This demo throttles on purpose with heavy instrumentation to prove a point.</em></p>\n\n        <section class="host">\n            <code-block syntax="ts">${l`${Zs}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Flood</h2>\n            <p class="note">Press flood, watch the graphs.</p>\n            <div class="split">\n                <code-block syntax="html">${l`<scheduler-theatre></scheduler-theatre>`}</code-block>\n                <div class="live"><scheduler-theatre></scheduler-theatre></div>\n            </div>\n        </section>\n    `,styles:d`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`})];class pa extends(aa=r){}sa=(e=>[,,,ia(e?.[ra("metadata")]??null)])(aa),pa=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{oa(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=ha(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,da(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?oa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,ra("metadata"),e[3])})(e,a),a})(sa,0,"SchedulerTheatreExample",na,pa),((e,t,n)=>{for(var s=0,a=sa[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,pa);const ma=["January","February","March","April","May","June","July","August","September","October","November","December"],ua=e=>String(e).padStart(2,"0"),va=(e,t,n)=>`${String(e)}-${ua(t+1)}-${ua(n)}`;var ba,ga,fa,ya,wa,ka,xa,Sa,$a,Ta,Ma,Oa=Object.create,Pa=Object.defineProperty,ja=Object.getOwnPropertyDescriptor,Ca=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ia=e=>{throw TypeError(e)},Aa=(e,t,n)=>t in e?Pa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_a=(e,t)=>Pa(e,"name",{value:t,configurable:!0}),za=["class","method","getter","setter","accessor","field","value","get","set"],Da=e=>void 0!==e&&"function"!=typeof e?Ia("Function expected"):e,Wa=(e,t,n,s,a)=>({kind:za[e],name:t,metadata:s,addInitializer:e=>n._?Ia("Already initialized"):a.push(Da(e||null))}),Ea=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Fa=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=za[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&ja(h<4?a:{get[n](){return La(this,i)},set[n](e){return Ha(this,i,e)}},n));h?m&&h<4&&_a(i,(h>2?"set ":h>1?"get ":"")+n):_a(a,n);for(var y=s.length-1;y>=0;y--)l=Wa(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>qa(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?La:Ga)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Ha(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?Da(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?Ia("Object expected"):(Da(o=r.get)&&(f.get=o),Da(o=r.set)&&(f.set=o),Da(o=r.init)&&b.unshift(o));return h||((e,t)=>{Aa(t,Ca("metadata"),e[3])})(e,a),f&&Pa(a,n,f),m?4^h?i:f:a},Ra=(e,t,n)=>t.has(e)||Ia("Cannot "+n),qa=(e,t)=>Object(t)!==t?Ia('Cannot use the "in" operator on this value'):e.has(t),La=(e,t,n)=>(Ra(e,t,"read from private field"),n?n.call(e):t.get(e)),Na=(e,t,n)=>t.has(e)?Ia("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ha=(e,t,n,s)=>(Ra(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Ga=(e,t,n)=>(Ra(e,t,"access private method"),n);ka=[e({selector:"calendar-day",template:'<button onclick="^^selectDate(date)"\n                       [class.selected]="selected"\n                       [class.in-month]="inMonth">{{day}}</button>',styles:"\n        :host { display: block; }\n        button { width: 100%; aspect-ratio: 1; background: transparent;\n                 border: var(--border-width) solid var(--bg-4); border-radius: var(--radius-sm);\n                 color: #3a3a3a; font: inherit; font-family: var(--font-mono);\n                 font-size: 0.85rem; cursor: pointer; padding: 0;\n                 transition: background 0.08s, border-color 0.08s, color 0.08s; }\n        button:hover { border-color: #3a5a88; color: var(--accent); }\n        button.in-month { color: #bbb; }\n        button.selected { background: var(--accent); border-color: var(--accent);\n                          color: var(--black); font-weight: 700;\n                          box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 50%, transparent); }\n    "})];class Ya extends(wa=n,ya=[t],fa=[t],ga=[t],ba=[t],wa){constructor(){super(...arguments),Na(this,Sa,Ea(xa,8,this,"")),Ea(xa,11,this),Na(this,$a,Ea(xa,12,this,0)),Ea(xa,15,this),Na(this,Ta,Ea(xa,16,this,!1)),Ea(xa,19,this),Na(this,Ma,Ea(xa,20,this,!1)),Ea(xa,23,this)}}xa=(e=>[,,,Oa(e?.[Ca("metadata")]??null)])(wa),Sa=new WeakMap,$a=new WeakMap,Ta=new WeakMap,Ma=new WeakMap,Fa(xa,4,"date",ya,Ya,Sa),Fa(xa,4,"day",fa,Ya,$a),Fa(xa,4,"inMonth",ga,Ya,Ta),Fa(xa,4,"selected",ba,Ya,Ma),(e=>{Aa(e,"__stateTypes",{date:"string",day:"number",inMonth:"boolean",selected:"boolean"})})(Ya=Fa(xa,0,"CalendarDay",ka,Ya)),Ea(xa,1,Ya);var Ba,Va,Ja,Ka,Ua,Qa,Xa,Za=Object.create,ei=Object.defineProperty,ti=Object.getOwnPropertyDescriptor,ni=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),si=e=>{throw TypeError(e)},ai=(e,t,n)=>t in e?ei(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ii=(e,t)=>ei(e,"name",{value:t,configurable:!0}),oi=["class","method","getter","setter","accessor","field","value","get","set"],ri=e=>void 0!==e&&"function"!=typeof e?si("Function expected"):e,ci=(e,t,n,s,a)=>({kind:oi[e],name:t,metadata:s,addInitializer:e=>n._?si("Already initialized"):a.push(ri(e||null))}),li=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},di=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=oi[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&ti(h<4?a:{get[n](){return mi(this,i)},set[n](e){return vi(this,i,e)}},n));h?m&&h<4&&ii(i,(h>2?"set ":h>1?"get ":"")+n):ii(a,n);for(var y=s.length-1;y>=0;y--)l=ci(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>pi(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?mi:bi)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>vi(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?ri(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?si("Object expected"):(ri(o=r.get)&&(f.get=o),ri(o=r.set)&&(f.set=o),ri(o=r.init)&&b.unshift(o));return h||((e,t)=>{ai(t,ni("metadata"),e[3])})(e,a),f&&ei(a,n,f),m?4^h?i:f:a},hi=(e,t,n)=>t.has(e)||si("Cannot "+n),pi=(e,t)=>Object(t)!==t?si('Cannot use the "in" operator on this value'):e.has(t),mi=(e,t,n)=>(hi(e,t,"read from private field"),n?n.call(e):t.get(e)),ui=(e,t,n)=>t.has(e)?si("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),vi=(e,t,n,s)=>(hi(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),bi=(e,t,n)=>(hi(e,t,"access private method"),n);Ka=[e({selector:"calendar-week",directives:[w],template:'\n        <div class="days" rx-for="days by key">\n            <calendar-day></calendar-day>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .days { display: grid; grid-template-columns: repeat(7, 1fr);\n                gap: 0.25rem; }\n    "})];class gi extends(Ja=n,Va=[t],Ba=[t],Ja){constructor(){super(...arguments),ui(this,Qa,li(Ua,8,this,0)),li(Ua,11,this),ui(this,Xa,li(Ua,12,this,[])),li(Ua,15,this)}}Ua=(e=>[,,,Za(e?.[ni("metadata")]??null)])(Ja),Qa=new WeakMap,Xa=new WeakMap,di(Ua,4,"weekIdx",Va,gi,Qa),di(Ua,4,"days",Ba,gi,Xa),(e=>{ai(e,"__stateTypes",{weekIdx:"number",days:"Array"})})(gi=di(Ua,0,"CalendarWeek",Ka,gi)),li(Ua,1,gi);var fi,yi,wi,ki,xi,Si,$i,Ti,Mi,Oi=Object.create,Pi=Object.defineProperty,ji=Object.getOwnPropertyDescriptor,Ci=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ii=e=>{throw TypeError(e)},Ai=(e,t,n)=>t in e?Pi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_i=(e,t)=>Pi(e,"name",{value:t,configurable:!0}),zi=["class","method","getter","setter","accessor","field","value","get","set"],Di=e=>void 0!==e&&"function"!=typeof e?Ii("Function expected"):e,Wi=(e,t,n,s,a)=>({kind:zi[e],name:t,metadata:s,addInitializer:e=>n._?Ii("Already initialized"):a.push(Di(e||null))}),Ei=(e,t,n,s)=>{for(var a=0,i=e[t>>1],o=i&&i.length;a<o;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Fi=(e,t,n,s,a,i)=>{var o,r,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=zi[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&ji(h<4?a:{get[n](){return Li(this,i)},set[n](e){return Hi(this,i,e)}},n));h?m&&h<4&&_i(i,(h>2?"set ":h>1?"get ":"")+n):_i(a,n);for(var y=s.length-1;y>=0;y--)l=Wi(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>qi(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Li:Gi)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Hi(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),r=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===r?Di(r)&&(h>4?b.unshift(r):h?m?i=r:f[v]=r:a=r):"object"!=typeof r||null===r?Ii("Object expected"):(Di(o=r.get)&&(f.get=o),Di(o=r.set)&&(f.set=o),Di(o=r.init)&&b.unshift(o));return h||((e,t)=>{Ai(t,Ci("metadata"),e[3])})(e,a),f&&Pi(a,n,f),m?4^h?i:f:a},Ri=(e,t,n)=>t.has(e)||Ii("Cannot "+n),qi=(e,t)=>Object(t)!==t?Ii('Cannot use the "in" operator on this value'):e.has(t),Li=(e,t,n)=>(Ri(e,t,"read from private field"),n?n.call(e):t.get(e)),Ni=(e,t,n)=>t.has(e)?Ii("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Hi=(e,t,n,s)=>(Ri(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Gi=(e,t,n)=>(Ri(e,t,"access private method"),n);xi=[e({selector:"calendar-grid",directives:[w],template:'\n        <header class="toolbar">\n            <button class="nav" onclick="prevMonth">‹</button>\n            <div class="title">{{monthLabel}}</div>\n            <button class="nav" onclick="nextMonth">›</button>\n            <div class="slot-wrap"><slot name="actions"></slot></div>\n        </header>\n        <div class="dow">\n            <div>Mo</div><div>Tu</div><div>We</div>\n            <div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>\n        </div>\n        <div class="weeks" rx-for="weeks by key">\n            <calendar-week></calendar-week>\n        </div>\n    ',styles:"\n        :host { display: block; background: var(--bg-1); border: var(--border-width) solid var(--bg-5);\n                border-radius: var(--radius-lg); padding: 1rem; }\n        .toolbar { display: flex; align-items: center; gap: 0.5rem;\n                   margin-bottom: 0.75rem; padding-bottom: 0.75rem;\n                   border-bottom: var(--border-width) solid var(--bg-4); }\n        .title { flex: 1; text-align: center; color: var(--white);\n                 font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700;\n                 letter-spacing: 0.05em; }\n        .nav { background: transparent; border: var(--border-width) solid var(--bg-6);\n               color: var(--accent); width: 2rem; height: 2rem; border-radius: var(--radius-sm);\n               font: inherit; cursor: pointer; }\n        .nav:hover { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }\n        .slot-wrap { display: flex; gap: 0.4rem; }\n        .dow { display: grid; grid-template-columns: repeat(7, 1fr);\n               gap: 0.25rem; margin-bottom: 0.5rem; }\n        .dow > div { text-align: center; font-family: var(--font-mono);\n                     color: var(--dim); font-size: 0.7rem; letter-spacing: 0.1em;\n                     padding: 0.3rem 0; }\n        .weeks { display: flex; flex-direction: column; gap: 0.25rem; }\n    "})];class Yi extends(ki=n,wi=[t],yi=[t],fi=[t],ki){constructor(){super(...arguments),Ni(this,$i,Ei(Si,8,this,(new Date).getFullYear())),Ei(Si,11,this),Ni(this,Ti,Ei(Si,12,this,(new Date).getMonth())),Ei(Si,15,this),Ni(this,Mi,Ei(Si,16,this,null)),Ei(Si,19,this)}get weeks$(){return y([this.currentYear$,this.currentMonth$,this.selectedDate$]).pipe(f(([e,t,n])=>((e,t,n)=>{const s=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t,1-s),i=[];for(let o=0;o<6;o++){const e=[];for(let s=0;s<7;s++){const i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+7*o+s),r=va(i.getFullYear(),i.getMonth(),i.getDate());e.push({key:r,date:r,day:i.getDate(),inMonth:i.getMonth()===t,selected:r===n})}i.push({key:`w${String(o)}`,weekIdx:o,days:e})}return i})(e,t,n)))}get monthLabel$(){return y([this.currentYear$,this.currentMonth$]).pipe(f(([e,t])=>`${ma[t]} ${String(e)}`))}prevMonth(){0===this.currentMonth?(this.currentMonth=11,this.currentYear-=1):this.currentMonth-=1}nextMonth(){11===this.currentMonth?(this.currentMonth=0,this.currentYear+=1):this.currentMonth+=1}today(){const e=new Date;this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth(),this.selectedDate=va(e.getFullYear(),e.getMonth(),e.getDate())}selectDate(e){this.selectedDate=e}}Si=(e=>[,,,Oi(e?.[Ci("metadata")]??null)])(ki),$i=new WeakMap,Ti=new WeakMap,Mi=new WeakMap,Fi(Si,4,"currentYear",wi,Yi,$i),Fi(Si,4,"currentMonth",yi,Yi,Ti),Fi(Si,4,"selectedDate",fi,Yi,Mi),(e=>{Ai(e,"__stateTypes",{currentYear:"number",currentMonth:"number",selectedDate:"string | null"})})(Yi=Fi(Si,0,"CalendarGrid",xi,Yi)),Ei(Si,1,Yi);var Bi,Vi,Ji,Ki=Object.create,Ui=Object.defineProperty,Qi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Xi=e=>{throw TypeError(e)},Zi=["class","method","getter","setter","accessor","field","value","get","set"],eo=e=>void 0!==e&&"function"!=typeof e?Xi("Function expected"):e,to=(e,t,n,s,a)=>({kind:Zi[e],name:t,metadata:s,addInitializer:e=>n._?Xi("Already initialized"):a.push(eo(e||null))});const no=c`<calendar-grid>
    <button slot="actions" onclick="today">Today</button>
</calendar-grid>`;Bi=[e({selector:"calendar-section",template:`\n        <h1>Calendar</h1>\n        <p class="lede">Three components stacked —\n           <code class="inline">calendar-grid</code> owns the state and renders a list of\n           <code class="inline">calendar-week</code>, each week renders a list of\n           <code class="inline">calendar-day</code>. Click any day and the event crosses two\n           component boundaries to mutate one <code class="inline">selectedDate</code> on the\n           grid. The bindings are authored flat; the compiler injects carets based on how\n           many custom-element layers each call sits inside. Resolution at runtime is a\n           literal <code class="inline">closest('[data-rx-host]')</code> walk.</p>\n\n        <section class="host">\n            <h2>calendar-grid — owns the state</h2>\n            <p class="note">The root of the tree. Holds\n               <code class="inline">currentYear</code>,\n               <code class="inline">currentMonth</code>, and\n               <code class="inline">selectedDate</code>. Derives the grid via\n               <code class="inline">combineLatest</code> + <code class="inline">rx-for</code>.\n               The toolbar's prev/next are authored at depth 0 — no carets needed, same scope\n               as the host.</p>\n            <code-block syntax="ts">${l`${h`@Component({
    selector: 'calendar-grid',
    template: \`
        <header class="toolbar">
            <button class="nav" onclick="prevMonth">‹</button>
            <div class="title">{{monthLabel}}</div>
            <button class="nav" onclick="nextMonth">›</button>
            <div class="slot-wrap"><slot name="actions"></slot></div>
        </header>
        <div class="dow">
            <div>Mo</div><div>Tu</div><div>We</div>
            <div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>
        </div>
        <div class="weeks" rx-for="weeks by key">
            <calendar-week></calendar-week>
        </div>
    \`,
})
export class CalendarGrid extends RxElement {
    @state currentYear = new Date().getFullYear();
    @state currentMonth = new Date().getMonth();
    @state selectedDate: string | null = null;

    get weeks$(): Observable<readonly WeekSeed[]> {
        return combineLatest([this.currentYear$, this.currentMonth$, this.selectedDate$])
            .pipe(map(([y, m, sel]) => buildWeeks(y, m, sel)));
    }

    get monthLabel$(): Observable<string> {
        return combineLatest([this.currentYear$, this.currentMonth$])
            .pipe(map(([y, m]) => \`\${MONTH_NAMES[m]} \${y}\`));
    }

    prevMonth(): void { /* decrement month, wrap year */ }
    nextMonth(): void { /* increment month, wrap year */ }
    today(): void     { /* jump to today, select it */ }
    selectDate(date: string): void { this.selectedDate = date; }
}`}`}</code-block>\n        </section>\n\n        <section class="host">\n            <h2>calendar-week — thin row</h2>\n            <p class="note">Nothing but an <code class="inline">rx-for</code> over its\n               <code class="inline">days</code>. No state of its own, no methods — it exists\n               to give the day cells a structural parent so the caret story has a middle\n               layer to walk through.</p>\n            <code-block syntax="ts">${l`${h`@Component({
    selector: 'calendar-week',
    template: \`
        <div class="days" rx-for="days by key">
            <calendar-day></calendar-day>
        </div>
    \`,
})
export class CalendarWeek extends RxElement {
    @state weekIdx = 0;
    @state days: readonly DayCell[] = [];
}`}`}</code-block>\n        </section>\n\n        <section class="host">\n            <h2>calendar-day — the leaf</h2>\n            <p class="note">One button, two class bindings, one method call reaching up two\n               custom-element layers — <code class="inline">^^selectDate(date)</code> walks\n               day → week → grid. Authored as-is; nothing is synthesised at runtime.</p>\n            <code-block syntax="ts">${l`${h`@Component({
    selector: 'calendar-day',
    template: \`<button onclick="^^selectDate(date)"
                       [class.selected]="selected"
                       [class.in-month]="inMonth">{{day}}</button>\`,
})
export class CalendarDay extends RxElement {
    @state date = '';
    @state day = 0;
    @state inMonth = false;
    @state selected = false;
}`}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>In use</h2>\n            <p class="note">Drop a <code class="inline">calendar-grid</code> anywhere, project\n               a <code class="inline">Today</code> button into the named slot. The projected\n               button sits one layer down from the grid — compiler rewrites\n               <code class="inline">onclick="today"</code> to\n               <code class="inline">^today</code> because a <code class="inline">&lt;slot&gt;</code>\n               is transparent to scope but being lexically inside a custom element is not.</p>\n            <div class="split">\n                <code-block syntax="html">${l`${no}`}</code-block>\n                <div class="live">${no}</div>\n            </div>\n        </section>\n\n        <section class="ex">\n            <h2>Where the carets come from</h2>\n            <p class="note">Three <code class="inline">onclick</code> calls, three different\n               depths, one flat author-time style. The compiler counts how many custom-element\n               layers each call is nested inside and injects that many carets:</p>\n            <ul class="depths">\n                <li><code class="inline">onclick="prevMonth"</code> — inside\n                   <code class="inline">calendar-grid</code>'s own template. Depth 0. Compiled\n                   verbatim.</li>\n                <li><code class="inline">onclick="today"</code> — projected into\n                   <code class="inline">&lt;calendar-grid&gt;</code> via a slot. Depth 1.\n                   Compiled to <code class="inline">^today</code>.</li>\n                <li><code class="inline">onclick="^^selectDate(date)"</code> — inside\n                   <code class="inline">calendar-day</code>, two custom-element layers away\n                   from the grid. Authored with explicit carets since the day component itself\n                   owns that binding. Could equivalently be written\n                   <code class="inline">hostNode.hostNode.selectDate(date)</code> -\n                   spelling choice.</li>\n            </ul>\n        </section>\n\n        <section class="ex">\n            <h2>How a caret resolves at runtime</h2>\n            <p class="note">Every <code class="inline">@Component</code> element gets\n               <code class="inline">data-rx-host=""</code> written on it on connect. A caret\n               is one <code class="inline">parentElement.closest('[data-rx-host]')</code>\n               hop. The whole scope walker is six lines of DOM, no framework state, nothing\n               cached:</p>\n            <code-block syntax="ts">${l`${h`const nextHost = (el) =>
    el.parentElement?.closest('[data-rx-host]');

const walkScope = (host, carets) => {
    let scope = nextHost(host);
    for (let i = 0; i < carets; i++) scope = nextHost(scope);
    return scope;
};`}`}</code-block>\n            <p class="note">Mirrors (<code class="inline">rx-div</code>,\n               <code class="inline">rx-button</code>) and plain DOM don't carry the\n               <code class="inline">data-rx-host</code> attribute, so\n               <code class="inline">closest</code> skips past them and lands on the next real\n               component host. That's why projection through a slot doesn't add a layer:\n               the slot tag itself isn't a component and doesn't mark a host.</p>\n        </section>\n\n        <section class="ex">\n            <h2>Siblings share the one source of truth</h2>\n            <p class="note">Any day cell, the prev/next buttons, the projected Today — all\n               mutate the same three observables on the one\n               <code class="inline">calendar-grid</code>. There's no fan-out, no store, no\n               shared state container. The component you clicked walked up the DOM to find\n               its host, and wrote to it directly.</p>\n        </section>\n    `,styles:"\n        :host { display: block; }\n        .depths { list-style: none; padding: 0; margin: 0;\n                  display: flex; flex-direction: column; gap: 0.5rem;\n                  color: var(--secondary); font-size: 0.9rem; line-height: 1.6; }\n        .depths li { padding: 0.6rem 0.8rem; background: var(--bg-1);\n                     border-left: 2px solid var(--navy); border-radius: 3px; }\n    "})];class so extends(Ji=r){}Vi=(e=>[,,,Ki(e?.[Qi("metadata")]??null)])(Ji),so=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{Ui(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=to(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,eo(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?Ui(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,Qi("metadata"),e[3])})(e,a),a})(Vi,0,"CalendarExample",Bi,so),((e,t,n)=>{for(var s=0,a=Vi[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,so);var ao,io,oo,ro=Object.create,co=Object.defineProperty,lo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ho=e=>{throw TypeError(e)},po=["class","method","getter","setter","accessor","field","value","get","set"],mo=e=>void 0!==e&&"function"!=typeof e?ho("Function expected"):e,uo=(e,t,n,s,a)=>({kind:po[e],name:t,metadata:s,addInitializer:e=>n._?ho("Already initialized"):a.push(mo(e||null))});ao=[e({selector:"examples-page",providers:[i],directives:[s,a,o],template:'\n        <toc-menu toc-menu-collapse></toc-menu>\n        <main class="content">\n            <header class="intro" toc-section="intro">\n                <h1 toc-anchor="intro">Examples</h1>\n                <p class="lede">Small, real components — each exercising one piece of\n                   the framework. Every example includes the full source, a live\n                   instance running beside it, and links back to the\n                   <a href="/docs">documentation</a> that explains the mechanisms\n                   involved.</p>\n            </header>\n\n            <slider-section toc-section="custom-slider"></slider-section>\n            <color-playground-section toc-section="reactive-palette"></color-playground-section>\n            <signal-meter-section toc-section="signal-meter"></signal-meter-section>\n            \x3c!-- <calendar-section></calendar-section> --\x3e\n            <graph-section toc-section="rx-graph"></graph-section>\n            <wave-mixer-section toc-section="wave-mixer"></wave-mixer-section>\n            <nesting-section toc-section="nesting-example"></nesting-section>\n            <scheduler-theatre-section toc-section="scheduler-theatre"></scheduler-theatre-section>\n        </main>\n    ',styles:"\n        :host { display: flex; background: var(--black); min-height: 100vh;\n                color: var(--text); box-sizing: border-box; }\n        :host > .content { flex: 1 1 0; min-width: 0; box-sizing: border-box;\n                          padding: 6rem 1.25rem 4rem 1.25rem; }\n        .intro { margin-bottom: 2.5rem; }\n        h1 { color: var(--white); font-size: 2.5rem; font-weight: 900;\n             letter-spacing: -1px; margin: 0 0 1rem; }\n        .lede { color: var(--secondary); line-height: 1.7; max-width: 72ch; margin: 0; }\n        .reveal { opacity: 0; transform: translateY(24px);\n                  transition: opacity 0.6s ease, transform 0.6s ease; }\n        .reveal.revealed { opacity: 1; transform: none; }\n    "})];class vo extends(oo=n){}io=(e=>[,,,ro(e?.[lo("metadata")]??null)])(oo),vo=((e,t,n,s,a)=>{var i,o,r,c=e[0]||(e[0]=[]);((e,t)=>{co(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)r=uo(0,n,o={},e[3],c),i=(0,s[l])(a,r),o._=1,mo(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?co(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,lo("metadata"),e[3])})(e,a),a})(io,0,"ExamplesPage",ao,vo),((e,t,n)=>{for(var s=0,a=io[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,vo);export{vo as ExamplesPage};
