import{o as e,O as t,R as n,a as s,C as a}from"./rx-element-4ZUxoBWu.js";import{T as i,a as r,S as o,b as c,c as l}from"./signal-meter.component-CdepveK8.js";import{D as d,R as h}from"./rx-for-B1kau3Sb.js";import{h as p,c as m,t as u,e as v}from"./code-block.component-SfvraQFF.js";import{m as b,c as g}from"./injectable-D92TCiPx.js";import{i as f}from"./interval-GrA6VLTr.js";import"./toc-menu.service-CWF5-U3_.js";var y,w,x,k,S,$,T,M,O,P=Object.create,j=Object.defineProperty,C=Object.getOwnPropertyDescriptor,I=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),A=e=>{throw TypeError(e)},_=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,z=(e,t)=>j(e,"name",{value:t,configurable:!0}),E=["class","method","getter","setter","accessor","field","value","get","set"],W=e=>void 0!==e&&"function"!=typeof e?A("Function expected"):e,R=(e,t,n,s,a)=>({kind:E[e],name:t,metadata:s,addInitializer:e=>n._?A("Already initialized"):a.push(W(e||null))}),D=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},F=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=E[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&C(h<4?a:{get[n](){return H(this,i)},set[n](e){return G(this,i,e)}},n));h?m&&h<4&&z(i,(h>2?"set ":h>1?"get ":"")+n):z(a,n);for(var y=s.length-1;y>=0;y--)l=R(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>q(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?H:Y)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>G(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?W(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?A("Object expected"):(W(r=o.get)&&(f.get=r),W(r=o.set)&&(f.set=r),W(r=o.init)&&b.unshift(r));return h||((e,t)=>{_(t,I("metadata"),e[3])})(e,a),f&&j(a,n,f),m?4^h?i:f:a},L=(e,t,n)=>t.has(e)||A("Cannot "+n),q=(e,t)=>Object(t)!==t?A('Cannot use the "in" operator on this value'):e.has(t),H=(e,t,n)=>(L(e,t,"read from private field"),n?n.call(e):t.get(e)),N=(e,t,n)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),G=(e,t,n,s)=>(L(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Y=(e,t,n)=>(L(e,t,"access private method"),n);const B=p`
    <div class="track"
         onpointerdown="grab($event)"
         onpointermove="drag($event)"
         onpointerup="release($event)">
        <div class="fill" [style]="fillStyle"></div>
        <div class="thumb" [style]="thumbStyle"></div>
    </div>
`,V=m`
    :host { display: block; padding: 0.5rem 0.6rem; }
    .track { position: relative; height: 0.5rem; background: var(--bg-5);
             border: var(--border-width) solid var(--bg-6); border-radius: 1rem;
             cursor: pointer; touch-action: none; user-select: none; }
    .fill { position: absolute; top: 0; bottom: 0; left: 0;
            background: linear-gradient(90deg, #557 0%, var(--accent) 100%);
            border-radius: 1rem; pointer-events: none; }
    .thumb { position: absolute; top: 50%;
             width: 1.2rem; height: 1.2rem;
             background: var(--white); border: 2px solid var(--accent); border-radius: 50%;
             transform: translate(-50%, -50%);
             box-shadow: 0 0 10px color-mix(in srgb, var(--accent) 55%, transparent);
             pointer-events: none;
             transition: box-shadow 0.15s ease; }
    .track:active .thumb { box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 90%, transparent); }
`,J=u`@Component({
    selector: 'yaw-slider',
    template: \`${B}\`,
    styles: \`${V}\`,
})
export class YawSlider extends RxElement {
    @state value = 0;
    @state min = 0;
    @state max = 100;

    grab(e: PointerEvent): void {
        (e.currentTarget as Element).setPointerCapture(e.pointerId);
        this.apply(e);
    }
    drag(e: PointerEvent): void {
        if ((e.currentTarget as Element).hasPointerCapture(e.pointerId)) this.apply(e);
    }
    release(e: PointerEvent): void {
        (e.currentTarget as Element).releasePointerCapture(e.pointerId);
    }

    private apply(e: PointerEvent): void {
        const rect = (e.currentTarget as Element).getBoundingClientRect();
        const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        this.value = Math.round(this.min + pct * (this.max - this.min));
    }

    private ratio(v: number): number { return (v - this.min) / (this.max - this.min); }
    get fillStyle$(): Observable<string>  { return this.value$.pipe(map((v) => \`width: \${this.ratio(v) * 100}%\`)); }
    get thumbStyle$(): Observable<string> { return this.value$.pipe(map((v) => \`left: \${this.ratio(v) * 100}%\`)); }
}`;S=[a({selector:"yaw-slider",template:B,styles:V})];class K extends(k=n,x=[s],w=[s],y=[s],k){constructor(){super(...arguments),N(this,T,D($,8,this,0)),D($,11,this),N(this,M,D($,12,this,0)),D($,15,this),N(this,O,D($,16,this,100)),D($,19,this)}grab(e){e.currentTarget.setPointerCapture(e.pointerId),this.apply(e)}drag(e){e.currentTarget.hasPointerCapture(e.pointerId)&&this.apply(e)}release(e){e.currentTarget.releasePointerCapture(e.pointerId)}apply(e){const t=e.currentTarget.getBoundingClientRect(),n=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width));this.value=Math.round(this.min+n*(this.max-this.min))}ratio(e){return(e-this.min)/(this.max-this.min)}get fillStyle$(){return this.value$.pipe(b(e=>`width: ${String(100*this.ratio(e))}%`))}get thumbStyle$(){return this.value$.pipe(b(e=>`left: ${String(100*this.ratio(e))}%`))}}var U;U=k,$=[,,,P(U?.[I("metadata")]??null)],T=new WeakMap,M=new WeakMap,O=new WeakMap,F($,4,"value",x,K,T),F($,4,"min",w,K,M),F($,4,"max",y,K,O),K=F($,0,"YawSlider",S,K),_(K,"__stateTypes",{value:"number",min:"number",max:"number"}),D($,1,K);var X,Q,Z,ee,te,ne,se=Object.create,ae=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,re=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),oe=e=>{throw TypeError(e)},ce=(e,t,n)=>t in e?ae(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,le=(e,t)=>ae(e,"name",{value:t,configurable:!0}),de=["class","method","getter","setter","accessor","field","value","get","set"],he=e=>void 0!==e&&"function"!=typeof e?oe("Function expected"):e,pe=(e,t,n,s,a)=>({kind:de[e],name:t,metadata:s,addInitializer:e=>n._?oe("Already initialized"):a.push(he(e||null))}),me=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},ue=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=de[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&ie(h<4?a:{get[n](){return ge(this,i)},set[n](e){return fe(this,i,e)}},n));h?m&&h<4&&le(i,(h>2?"set ":h>1?"get ":"")+n):le(a,n);for(var y=s.length-1;y>=0;y--)l=pe(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>be(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?ge:ye)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>fe(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?he(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?oe("Object expected"):(he(r=o.get)&&(f.get=r),he(r=o.set)&&(f.set=r),he(r=o.init)&&b.unshift(r));return h||((e,t)=>{ce(t,re("metadata"),e[3])})(e,a),f&&ae(a,n,f),m?4^h?i:f:a},ve=(e,t,n)=>t.has(e)||oe("Cannot "+n),be=(e,t)=>Object(t)!==t?oe('Cannot use the "in" operator on this value'):e.has(t),ge=(e,t,n)=>(ve(e,t,"read from private field"),n?n.call(e):t.get(e)),fe=(e,t,n,s)=>(ve(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),ye=(e,t,n)=>(ve(e,t,"access private method"),n);Z=[a({selector:"slider-section",directives:[i,r],template:`\n        <h1 toc-anchor="custom-slider">Custom slider</h1>\n        <p class="lede">A custom slider built from DOM pointer events —\n           <code class="inline">pointerdown</code>,\n           <code class="inline">pointermove</code>, and\n           <code class="inline">pointerup</code> track the user's drag gesture.\n           Two CSS <code class="inline">[style]</code> bindings position the fill\n           and the thumb. The parent communicates with the slider through\n           a single <a href="/docs/components/bindings/data">tap binding</a>,\n           <code class="inline">${v`[(value)]="propName"`}</code>, which pushes\n           the slider's value into the parent's field whenever it changes.</p>\n\n        <section class="host">\n            <h2>The slider component</h2>\n            <p class="note">Three <a href="/docs/components/state"><code class="inline">@state</code></a> fields —\n               <code class="inline">value</code>,\n               <code class="inline">min</code>, and\n               <code class="inline">max</code>.\n               <code class="inline">grab</code> captures the pointer,\n               <code class="inline">drag</code> normalises the cursor position into\n               a value between min and max, and\n               <code class="inline">release</code> lets go. Two derived getters\n               (<code class="inline">fillStyle$</code> and\n               <code class="inline">thumbStyle$</code>) map the current value to\n               CSS <code class="inline">width</code> and\n               <code class="inline">left</code> percentages that the template's\n               <a href="/docs/components/bindings">[style] bindings</a> apply\n               directly to the track elements.</p>\n            <code-block syntax="ts">${v`${J}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>In use</h2>\n            <p class="note">Declare an <code class="inline">@state</code> field on the\n               parent and bind it with\n               <code class="inline">${v`[(value)]="prop"`}</code>. Drag the\n               thumb and the text binding below updates in real time.</p>\n            <div class="split">\n                <code-block syntax="html">${v`${p`<yaw-slider [(value)]="value" min="0" max="100"></yaw-slider>
<p>value = {{value}}</p>`}`}</code-block>\n                <div class="live">\n                    <yaw-slider [(value)]="value" min="0" max="100"></yaw-slider>\n                    <p class="state">value = <span class="status">{{value}}</span></p>\n                </div>\n            </div>\n        </section>\n    `,styles:"\n        :host { display: block; }\n        .live { display: flex; flex-direction: column; gap: 1rem; }\n        .state { margin: 0; font-family: var(--font-mono); color: var(--secondary); font-size: 0.85rem; }\n        .state .status { color: var(--accent); }\n    "})];class we extends(Q=d,X=[s],Q){constructor(){var e,t,n;super(...arguments),e=this,t=te,n=me(ee,8,this,50),t.has(e)?oe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),me(ee,11,this)}}ee=(e=>[,,,se(e?.[re("metadata")]??null)])(Q),ue(ee,4,"value",X,we,te=new WeakMap),ne=we=ue(ee,0,"SliderExample",Z,we),ce(ne,"__stateTypes",{value:"number"}),me(ee,1,we);var xe,ke,Se,$e,Te,Me,Oe,Pe,je,Ce=Object.create,Ie=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,_e=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ze=e=>{throw TypeError(e)},Ee=(e,t,n)=>t in e?Ie(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,We=(e,t)=>Ie(e,"name",{value:t,configurable:!0}),Re=["class","method","getter","setter","accessor","field","value","get","set"],De=e=>void 0!==e&&"function"!=typeof e?ze("Function expected"):e,Fe=(e,t,n,s,a)=>({kind:Re[e],name:t,metadata:s,addInitializer:e=>n._?ze("Already initialized"):a.push(De(e||null))}),Le=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},qe=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Re[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&Ae(h<4?a:{get[n](){return Ge(this,i)},set[n](e){return Be(this,i,e)}},n));h?m&&h<4&&We(i,(h>2?"set ":h>1?"get ":"")+n):We(a,n);for(var y=s.length-1;y>=0;y--)l=Fe(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Ne(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Ge:Ve)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Be(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?De(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?ze("Object expected"):(De(r=o.get)&&(f.get=r),De(r=o.set)&&(f.set=r),De(r=o.init)&&b.unshift(r));return h||((e,t)=>{Ee(t,_e("metadata"),e[3])})(e,a),f&&Ie(a,n,f),m?4^h?i:f:a},He=(e,t,n)=>t.has(e)||ze("Cannot "+n),Ne=(e,t)=>Object(t)!==t?ze('Cannot use the "in" operator on this value'):e.has(t),Ge=(e,t,n)=>(He(e,t,"read from private field"),n?n.call(e):t.get(e)),Ye=(e,t,n)=>t.has(e)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Be=(e,t,n,s)=>(He(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Ve=(e,t,n)=>(He(e,t,"access private method"),n);const Je=p`
    <label>H <em>{{hue}}°</em></label>
    <yaw-slider [(value)]="hue" min="0" max="360"></yaw-slider>

    <label>S <em>{{sat}}%</em></label>
    <yaw-slider [(value)]="sat" min="0" max="100"></yaw-slider>

    <label>L <em>{{lit}}%</em></label>
    <yaw-slider [(value)]="lit" min="0" max="100"></yaw-slider>

    <code class="out">{{css}}</code>
    <div class="swatch" [style]="swatchStyle"></div>
`,Ke=m`
    :host { display: grid; grid-template-columns: auto 1fr;
            gap: 0.75rem 1rem; align-items: center; }
    label { color: var(--secondary); font-size: 0.8rem;
            font-family: var(--font-mono); text-transform: uppercase;
            letter-spacing: var(--tracking); }
    em { color: var(--accent); font-style: normal;
         display: inline-block; width: 4ch; text-align: right; }
    .out { grid-column: 1 / -1; background: var(--bg-2); padding: 0.6rem 0.75rem;
           border-radius: var(--radius-sm); color: var(--accent); font-family: var(--font-mono);
           font-size: 0.8rem; border: var(--border-width) solid var(--bg-5); }
    .swatch { grid-column: 1 / -1; border-radius: var(--radius-lg); border: var(--border-width) solid var(--bg-5);
              min-height: 6rem; box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.35);
              transition: background 0.1s linear; }
`,Ue=u`@Component({
    selector: 'color-playground',
    template: \`${Je}\`,
    styles: \`${Ke}\`,
})
export class ColorPlayground extends RxElement {
    @state hue = 200;
    @state sat = 70;
    @state lit = 55;

    get css$(): Observable<string> {
        return combineLatest([this.hue$, this.sat$, this.lit$]).pipe(
            map(([h, s, l]) => \`hsl(\${h} \${s}% \${l}%)\`)
        );
    }

    get swatchStyle$(): Observable<string> {
        return this.css$.pipe(map((c) => \`background: \${c}\`));
    }
}`;Te=[a({selector:"color-playground",template:Je,styles:Ke})];class Xe extends($e=n,Se=[s],ke=[s],xe=[s],$e){constructor(){super(...arguments),Ye(this,Oe,Le(Me,8,this,200)),Le(Me,11,this),Ye(this,Pe,Le(Me,12,this,70)),Le(Me,15,this),Ye(this,je,Le(Me,16,this,55)),Le(Me,19,this)}get css$(){return g([this.hue$,this.sat$,this.lit$]).pipe(b(([e,t,n])=>`hsl(${String(e)} ${String(t)}% ${String(n)}%)`))}get swatchStyle$(){return this.css$.pipe(b(e=>`background: ${e}`))}}Me=(e=>[,,,Ce(e?.[_e("metadata")]??null)])($e),Oe=new WeakMap,Pe=new WeakMap,je=new WeakMap,qe(Me,4,"hue",Se,Xe,Oe),qe(Me,4,"sat",ke,Xe,Pe),qe(Me,4,"lit",xe,Xe,je),(e=>{Ee(e,"__stateTypes",{hue:"number",sat:"number",lit:"number"})})(Xe=qe(Me,0,"ColorPlayground",Te,Xe)),Le(Me,1,Xe);var Qe,Ze,et,tt=Object.create,nt=Object.defineProperty,st=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),at=e=>{throw TypeError(e)},it=["class","method","getter","setter","accessor","field","value","get","set"],rt=e=>void 0!==e&&"function"!=typeof e?at("Function expected"):e,ot=(e,t,n,s,a)=>({kind:it[e],name:t,metadata:s,addInitializer:e=>n._?at("Already initialized"):a.push(rt(e||null))});Qe=[a({selector:"color-playground-section",directives:[i,r],template:`\n        <h1 toc-anchor="reactive-palette">Reactive palette</h1>\n        <p class="lede">A colour palette built from three\n           <a href="/docs/components/state"><code class="inline">@state</code></a>\n           fields — <code class="inline">hue</code>,\n           <code class="inline">sat</code>, and\n           <code class="inline">lit</code> — representing a colour in the HSL\n           colour space. Each field is bound to a\n           <code class="inline">${v`<yaw-slider>`}</code> through a\n           <a href="/docs/components/bindings/data">tap binding</a>. A single\n           <a href="/docs/components/bindings">[style] binding</a> applies the\n           combined colour as a CSS <code class="inline">background</code> to the\n           swatch element.</p>\n\n        <section class="host">\n            <h2>The palette component</h2>\n            <p class="note">Each slider's\n               <code class="inline">${v`[(value)]="fieldName"`}</code>\n               tap binding writes one\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> stream</a>.\n               The derived getter <code class="inline">css$</code> joins all three\n               streams with <code class="inline">combineLatest</code> and maps the\n               result to an <code class="inline">hsl(...)</code> string.\n               <code class="inline">swatchStyle$</code> wraps that string in a\n               <code class="inline">background:</code> declaration that the\n               template's <code class="inline">[style]</code> binding reads.</p>\n            <code-block syntax="ts">${v`${Ue}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>HSL on three sliders</h2>\n            <p class="note">Drag any slider and the swatch colour changes in\n               real time.</p>\n            <div class="split">\n                <code-block syntax="html">${v`<color-playground></color-playground>`}</code-block>\n                <div class="live"><color-playground></color-playground></div>\n            </div>\n        </section>\n    `,styles:m`
    .live { padding: 1.5rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
    .live color-playground { display: grid; grid-template-columns: auto 1fr;
            gap: 0.75rem 1rem; align-items: center; }
    .live color-playground .out,
    .live color-playground .swatch { grid-column: 1 / -1; }
`})];class ct extends(et=d){}Ze=(e=>[,,,tt(e?.[st("metadata")]??null)])(et),ct=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{nt(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=ot(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,rt(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?nt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,st("metadata"),e[3])})(e,a),a})(Ze,0,"ColorPlaygroundExample",Qe,ct),((e,t,n)=>{for(var s=0,a=Ze[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,ct);var lt,dt,ht,pt,mt,ut=Object.create,vt=Object.defineProperty,bt=Object.getOwnPropertyDescriptor,gt=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ft=e=>{throw TypeError(e)},yt=(e,t,n)=>t in e?vt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wt=(e,t)=>vt(e,"name",{value:t,configurable:!0}),xt=["class","method","getter","setter","accessor","field","value","get","set"],kt=e=>void 0!==e&&"function"!=typeof e?ft("Function expected"):e,St=(e,t,n,s,a)=>({kind:xt[e],name:t,metadata:s,addInitializer:e=>n._?ft("Already initialized"):a.push(kt(e||null))}),$t=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Tt=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=xt[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&bt(h<4?a:{get[n](){return Pt(this,i)},set[n](e){return jt(this,i,e)}},n));h?m&&h<4&&wt(i,(h>2?"set ":h>1?"get ":"")+n):wt(a,n);for(var y=s.length-1;y>=0;y--)l=St(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Ot(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Pt:Ct)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>jt(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?kt(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?ft("Object expected"):(kt(r=o.get)&&(f.get=r),kt(r=o.set)&&(f.set=r),kt(r=o.init)&&b.unshift(r));return h||((e,t)=>{yt(t,gt("metadata"),e[3])})(e,a),f&&vt(a,n,f),m?4^h?i:f:a},Mt=(e,t,n)=>t.has(e)||ft("Cannot "+n),Ot=(e,t)=>Object(t)!==t?ft('Cannot use the "in" operator on this value'):e.has(t),Pt=(e,t,n)=>(Mt(e,t,"read from private field"),n?n.call(e):t.get(e)),jt=(e,t,n,s)=>(Mt(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Ct=(e,t,n)=>(Mt(e,t,"access private method"),n);ht=[a({selector:"signal-meter-section",directives:[i,r],template:`\n        <h1 toc-anchor="signal-meter">SVG signal meter</h1>\n        <p class="lede">An SVG arc whose sweep, colour, and glow are all driven by\n           CSS custom properties. A single\n           <a href="/docs/components/bindings">[style] binding</a> writes four\n           custom properties to the host element, and CSS does the rest — the\n           SVG's <code class="inline">stroke-dashoffset</code> and\n           <code class="inline">stroke</code> colour both reference those\n           properties directly.</p>\n\n        <section class="host">\n            <h2>The meter component</h2>\n            <p class="note">Five\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               fields —\n               <code class="inline">strength</code>,\n               <code class="inline">hueStart</code>,\n               <code class="inline">hueEnd</code>,\n               <code class="inline">lightness</code>, and\n               <code class="inline">glow</code> — each settable via an attribute\n               binding from the parent. The derived getter\n               <code class="inline">meterStyle$</code> joins all five\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> streams</a>\n               with <code class="inline">combineLatest</code> and maps them to four\n               CSS custom properties\n               (<code class="inline">--pct</code>,\n               <code class="inline">--hue</code>,\n               <code class="inline">--lit</code>,\n               <code class="inline">--glow</code>) that the SVG template\n               references in its inline styles.</p>\n            <code-block syntax="ts">${v`${o}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Drag to modulate</h2>\n            <p class="note">Drag the slider and the arc sweeps, the hue rotates,\n               and the glow follows — all from a single\n               <code class="inline">strength</code> value flowing through the\n               component's reactive chain into CSS.</p>\n            <div class="split">\n                <code-block syntax="html">${v`<signal-meter strength="65" hueStart="140" hueEnd="340" lightness="62" glow="14"></signal-meter>`}</code-block>\n                <div class="live">\n                    <signal-meter [strength]="strength"></signal-meter>\n                    <yaw-slider [(value)]="strength" min="0" max="100"></yaw-slider>\n                </div>\n            </div>\n        </section>\n    `,styles:m`
    .live { display: flex; flex-direction: column; align-items: center;
            gap: 1.25rem; padding: 1.75rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
    .live yaw-slider { width: 100%; max-width: 22rem; }
`})];class It extends(dt=d,lt=[s],dt){constructor(){super(...arguments),((e,t,n)=>{t.has(e)?ft("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n)})(this,mt,$t(pt,8,this,65)),$t(pt,11,this)}}pt=(e=>[,,,ut(e?.[gt("metadata")]??null)])(dt),Tt(pt,4,"strength",lt,It,mt=new WeakMap),(e=>{yt(e,"__stateTypes",{strength:"number"})})(It=Tt(pt,0,"SignalMeterExample",ht,It)),$t(pt,1,It);var At,_t,zt,Et,Wt,Rt,Dt,Ft=Object.create,Lt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Ht=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Nt=e=>{throw TypeError(e)},Gt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Yt=(e,t)=>Lt(e,"name",{value:t,configurable:!0}),Bt=["class","method","getter","setter","accessor","field","value","get","set"],Vt=e=>void 0!==e&&"function"!=typeof e?Nt("Function expected"):e,Jt=(e,t,n,s,a)=>({kind:Bt[e],name:t,metadata:s,addInitializer:e=>n._?Nt("Already initialized"):a.push(Vt(e||null))}),Kt=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Ut=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Bt[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&qt(h<4?a:{get[n](){return en(this,i)},set[n](e){return nn(this,i,e)}},n));h?m&&h<4&&Yt(i,(h>2?"set ":h>1?"get ":"")+n):Yt(a,n);for(var y=s.length-1;y>=0;y--)l=Jt(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Zt(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?en:sn)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>nn(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?Vt(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?Nt("Object expected"):(Vt(r=o.get)&&(f.get=r),Vt(r=o.set)&&(f.set=r),Vt(r=o.init)&&b.unshift(r));return h||((e,t)=>{Gt(t,Ht("metadata"),e[3])})(e,a),f&&Lt(a,n,f),m?4^h?i:f:a},Xt=(e,t,n)=>Gt(e,"symbol"!=typeof t?t+"":t,n),Qt=(e,t,n)=>t.has(e)||Nt("Cannot "+n),Zt=(e,t)=>Object(t)!==t?Nt('Cannot use the "in" operator on this value'):e.has(t),en=(e,t,n)=>(Qt(e,t,"read from private field"),n?n.call(e):t.get(e)),tn=(e,t,n)=>t.has(e)?Nt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),nn=(e,t,n,s)=>(Qt(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),sn=(e,t,n)=>(Qt(e,t,"access private method"),n);const an=p`
    <div class="legend" rx-for="{ label, color } of legendItems by label">
        <span><span class="dot" [style.background]="color"></span>{{label}}</span>
    </div>
    <canvas #canvas></canvas>
`,rn=m`
    :host { display: block; position: relative; }
    .legend { position: absolute; top: 0.25rem; left: 0.4rem;
              display: flex; flex-direction: column; gap: 0.1rem;
              font-family: var(--font-mono); font-size: 0.55rem; color: var(--secondary);
              text-transform: uppercase; letter-spacing: 0.06em; pointer-events: none;
              background: rgba(3, 3, 3, 0.75); padding: 0.2rem 0.4rem; border-radius: var(--radius-sm); }
    .legend span { display: flex; align-items: center; gap: 0.2rem; }
    .legend .dot { display: inline-block; width: 5px; height: 5px; border-radius: 50%; }
    canvas { display: block; width: 100%; height: 6rem; background: #030303;
             border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`,on=u`@Component({
    selector: 'rx-graph',
    directives: [RxFor],
    template: \`${an}\`,
    styles: \`${rn}\`,
})
export class Graph extends RxElement {
    @state config: Record<string, { label: string; color: string; width?: number }> = {};
    @state series: Record<string, Observable<number[]>> = {};

    canvas!: HTMLCanvasElement;
    private ro: ResizeObserver | undefined;
    private data = new Map<string, number[]>();
    private subs: Subscription[] = [];

    get legendItems$(): Observable<{ label: string; color: string }[]> {
        return this.config$.pipe(map(cfg => Object.values(cfg)));
    }

    override onRender(): void {
        this.ro = new ResizeObserver(() => this.resize());
        this.ro.observe(this.canvas);
        this.resize();
        this.series$.subscribe((seriesMap) => this.subscribeSeries(seriesMap));
    }

    override onDestroy(): void {
        this.ro?.disconnect();
        this.subs.forEach(s => s.unsubscribe());
    }

    private subscribeSeries(seriesMap: Record<string, Observable<number[]>>): void {
        this.subs.forEach(s => s.unsubscribe());
        this.subs = [];
        this.data.clear();
        for (const [name, obs$] of Object.entries(seriesMap)) {
            this.subs.push(obs$.subscribe((points) => {
                this.data.set(name, points);
                this.draw();
            }));
        }
    }

    private resize(): void {
        this.canvas.width = this.canvas.clientWidth * devicePixelRatio;
        this.canvas.height = this.canvas.clientHeight * devicePixelRatio;
        this.draw();
    }

    private draw(): void {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) return;
        const w = this.canvas.width;
        const h = this.canvas.height;
        ctx.clearRect(0, 0, w, h);

        const names = Object.keys(this.config);
        const maxLen = Math.max(0, ...names.map(n => this.data.get(n)?.length ?? 0));
        if (maxLen < 2) return;

        const step = w / (maxLen - 1);

        for (const name of names) {
            const cfg = this.config[name];
            if (!cfg) continue;
            const pts = this.data.get(name) ?? [];
            if (pts.length < 2) continue;

            const pad = maxLen - pts.length;
            const ceil = Math.max(1, ...pts);

            ctx.beginPath();
            for (let i = 0; i < pts.length; i++) {
                const x = (pad + i) * step;
                const y = h - (pts[i]! / ceil) * h;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.strokeStyle = cfg.color;
            ctx.lineWidth = (cfg.width ?? 1) * devicePixelRatio;
            ctx.stroke();
        }
    }
}`;Et=[a({selector:"rx-graph",directives:[h],template:an,styles:rn})];class cn extends(zt=n,_t=[s],At=[s],zt){constructor(){super(...arguments),tn(this,Rt,Kt(Wt,8,this,{})),Kt(Wt,11,this),tn(this,Dt,Kt(Wt,12,this,{})),Kt(Wt,15,this),Xt(this,"canvas"),Xt(this,"ro"),Xt(this,"data",new Map),Xt(this,"subs",[])}get legendItems$(){return this.config$.pipe(b(e=>Object.values(e)))}onRender(){this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.canvas),this.resize(),this.series$.subscribe(e=>this.subscribeSeries(e))}onDestroy(){this.ro?.disconnect(),this.subs.forEach(e=>e.unsubscribe())}subscribeSeries(e){this.subs.forEach(e=>e.unsubscribe()),this.subs=[],this.data.clear();for(const[t,n]of Object.entries(e))this.subs.push(n.subscribe(e=>{this.data.set(t,e),this.draw()}))}resize(){this.canvas.width=this.canvas.clientWidth*devicePixelRatio,this.canvas.height=this.canvas.clientHeight*devicePixelRatio,this.draw()}draw(){const e=this.canvas.getContext("2d");if(!e)return;const t=this.canvas.width,n=this.canvas.height;e.clearRect(0,0,t,n);const s=Object.keys(this.config),a=Math.max(0,...s.map(e=>this.data.get(e)?.length??0));if(a<2)return;const i=t/(a-1);for(const r of s){const t=this.config[r];if(!t)continue;const s=this.data.get(r)??[];if(s.length<2)continue;const o=a-s.length,c=Math.max(1,...s);e.beginPath();for(let a=0;a<s.length;a++){const t=(o+a)*i,r=n-s[a]/c*n;0===a?e.moveTo(t,r):e.lineTo(t,r)}e.strokeStyle=t.color,e.lineWidth=(t.width??1)*devicePixelRatio,e.stroke()}}}Wt=(e=>[,,,Ft(e?.[Ht("metadata")]??null)])(zt),Rt=new WeakMap,Dt=new WeakMap,Ut(Wt,4,"config",_t,cn,Rt),Ut(Wt,4,"series",At,cn,Dt),cn=Ut(Wt,0,"Graph",Et,cn),Xt(cn,"__stateTypes",{config:"Record",series:"Record"}),Kt(Wt,1,cn);var ln,dn,hn,pn,mn,un,vn,bn=Object.create,gn=Object.defineProperty,fn=Object.getOwnPropertyDescriptor,yn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),wn=e=>{throw TypeError(e)},xn=(e,t,n)=>t in e?gn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,kn=(e,t)=>gn(e,"name",{value:t,configurable:!0}),Sn=["class","method","getter","setter","accessor","field","value","get","set"],$n=e=>void 0!==e&&"function"!=typeof e?wn("Function expected"):e,Tn=(e,t,n,s,a)=>({kind:Sn[e],name:t,metadata:s,addInitializer:e=>n._?wn("Already initialized"):a.push($n(e||null))}),Mn=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},On=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Sn[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&fn(h<4?a:{get[n](){return In(this,i)},set[n](e){return _n(this,i,e)}},n));h?m&&h<4&&kn(i,(h>2?"set ":h>1?"get ":"")+n):kn(a,n);for(var y=s.length-1;y>=0;y--)l=Tn(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Cn(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?In:zn)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>_n(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?$n(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?wn("Object expected"):($n(r=o.get)&&(f.get=r),$n(r=o.set)&&(f.set=r),$n(r=o.init)&&b.unshift(r));return h||((e,t)=>{xn(t,yn("metadata"),e[3])})(e,a),f&&gn(a,n,f),m?4^h?i:f:a},Pn=(e,t,n)=>xn(e,"symbol"!=typeof t?t+"":t,n),jn=(e,t,n)=>t.has(e)||wn("Cannot "+n),Cn=(e,t)=>Object(t)!==t?wn('Cannot use the "in" operator on this value'):e.has(t),In=(e,t,n)=>(jn(e,t,"read from private field"),n?n.call(e):t.get(e)),An=(e,t,n)=>t.has(e)?wn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),_n=(e,t,n,s)=>(jn(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),zn=(e,t,n)=>(jn(e,t,"access private method"),n);pn=[a({selector:"graph-section",directives:[i,r],template:`\n        <h1 toc-anchor="rx-graph">Reactive graph</h1>\n        <p class="lede">A canvas-based graph component driven by\n           <code class="inline">${v`Observable<number[]>`}</code> streams. The\n           parent passes named observables into the\n           <code class="inline">[series]</code>\n           <a href="/docs/components/bindings">property binding</a> and a\n           configuration record into <code class="inline">[config]</code> — the\n           graph draws itself as data arrives and redraws whenever a stream\n           emits.</p>\n\n        <section class="host">\n            <h2>The graph component</h2>\n            <p class="note">Two\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               fields.\n               <code class="inline">config</code> is a record that maps series\n               names to labels and colours.\n               <code class="inline">series</code> is a record that maps series\n               names to <code class="inline">${v`Observable<number[]>`}</code>\n               streams. When the parent writes a new\n               <code class="inline">series</code> map, the component unsubscribes\n               from every stream in the old map and subscribes to every stream in\n               the new one.</p>\n            <code-block syntax="ts">${v`${on}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Live — random walk</h2>\n            <p class="note">The graph below is fed a single series built from\n               <code class="inline">interval</code> and\n               <code class="inline">scan</code> — a random walk that emits a new\n               point array every 80ms. The line draws itself as the data\n               arrives.</p>\n            <div class="split">\n                <code-block syntax="html">${v`${p`<rx-graph [config]="config" [series]="series"></rx-graph>`}`}</code-block>\n                <div class="live">\n                    <rx-graph [config]="graphConfig" [series]="graphSeries"></rx-graph>\n                </div>\n            </div>\n        </section>\n    `,styles:`\n        :host { display: block; }\n        ${m`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`}\n    `})];class En extends(hn=d,dn=[s],ln=[s],hn){constructor(){super(...arguments),An(this,un,Mn(mn,8,this,{walk:{label:"random walk",color:"#8af"}})),Mn(mn,11,this),An(this,vn,Mn(mn,12,this,{})),Mn(mn,15,this),Pn(this,"io"),Pn(this,"walk$",f(80).pipe(function(n,s){const a=arguments.length>=2;return i=>new t(t=>function(t,n,s,a,i,r,o){let c=s,l=n,d=0;r.subscribe(e({destination:o,next:e=>{const n=d++;l=c?t(l,e,n):(c=!0,e),o.next(l)},complete:void 0}))}(n,s,a,0,0,i,t))}(e=>{const t=Math.max(0,Math.min(100,(e[e.length-1]??50)+8*(Math.random()-.5))),n=[...e,t];return n.length>120?n.slice(n.length-120):n},new Array(120).fill(50))))}onInit(){this.io=new IntersectionObserver(([e])=>{e.isIntersecting?this.resume():this.pause()}),this.io.observe(this)}onDestroy(){this.io?.disconnect(),this.pause()}resume(){this.graphSeries={walk:this.walk$}}pause(){this.graphSeries={}}}mn=(e=>[,,,bn(e?.[yn("metadata")]??null)])(hn),un=new WeakMap,vn=new WeakMap,On(mn,4,"graphConfig",dn,En,un),On(mn,4,"graphSeries",ln,En,vn),En=On(mn,0,"GraphExample",pn,En),Pn(En,"__stateTypes",{graphConfig:"Object",graphSeries:"Record"}),Mn(mn,1,En);var Wn,Rn,Dn,Fn,Ln,qn,Hn,Nn,Gn,Yn,Bn,Vn,Jn,Kn=Object.create,Un=Object.defineProperty,Xn=Object.getOwnPropertyDescriptor,Qn=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Zn=e=>{throw TypeError(e)},es=(e,t,n)=>t in e?Un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ts=(e,t)=>Un(e,"name",{value:t,configurable:!0}),ns=["class","method","getter","setter","accessor","field","value","get","set"],ss=e=>void 0!==e&&"function"!=typeof e?Zn("Function expected"):e,as=(e,t,n,s,a)=>({kind:ns[e],name:t,metadata:s,addInitializer:e=>n._?Zn("Already initialized"):a.push(ss(e||null))}),is=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},rs=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=ns[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&Xn(h<4?a:{get[n](){return ls(this,i)},set[n](e){return hs(this,i,e)}},n));h?m&&h<4&&ts(i,(h>2?"set ":h>1?"get ":"")+n):ts(a,n);for(var y=s.length-1;y>=0;y--)l=as(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>cs(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?ls:ps)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>hs(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?ss(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?Zn("Object expected"):(ss(r=o.get)&&(f.get=r),ss(r=o.set)&&(f.set=r),ss(r=o.init)&&b.unshift(r));return h||((e,t)=>{es(t,Qn("metadata"),e[3])})(e,a),f&&Un(a,n,f),m?4^h?i:f:a},os=(e,t,n)=>t.has(e)||Zn("Cannot "+n),cs=(e,t)=>Object(t)!==t?Zn('Cannot use the "in" operator on this value'):e.has(t),ls=(e,t,n)=>(os(e,t,"read from private field"),n?n.call(e):t.get(e)),ds=(e,t,n)=>t.has(e)?Zn("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),hs=(e,t,n,s)=>(os(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),ps=(e,t,n)=>(os(e,t,"access private method"),n);const ms=p`
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
`,us=m`
    :host { display: block; }
    .controls { display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 0.75rem; }
    .row { display: flex; gap: 0.3rem; align-items: center; }
    .row yaw-slider { flex: 1; }
    .label { font-family: var(--font-mono); font-size: 0.75rem; color: var(--muted);
             text-transform: uppercase; letter-spacing: 0.06em; }
    .readout { font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); text-align: right; }
    rx-graph { --canvas-height: 10rem; }
    rx-graph canvas { height: 10rem; }
`,vs=u`const POINTS = 200;

@Component({
    selector: 'wave-mixer',
    template: \`${ms}\`,
    styles: \`${us}\`,
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
}`;Hn=[a({selector:"wave-mixer",template:ms,styles:us})];class bs extends(qn=n,Ln=[s],Fn=[s],Dn=[s],Rn=[s],Wn=[s],qn){constructor(){super(...arguments),ds(this,Gn,is(Nn,8,this,1)),is(Nn,11,this),ds(this,Yn,is(Nn,12,this,1)),is(Nn,15,this),ds(this,Bn,is(Nn,16,this,1)),is(Nn,19,this),ds(this,Vn,is(Nn,20,this,{wave1:{label:"wave 1",color:"#f44"},wave2:{label:"wave 2",color:"#4f4"},wave3:{label:"wave 3",color:"#44f"},sum:{label:"sum",color:"#fff",width:2}})),is(Nn,23,this),ds(this,Jn,is(Nn,24,this,{})),is(Nn,27,this)}sine(e){const t=[];for(let n=0;n<200;n++)t.push(.5*Math.sin(2*Math.PI*e*(n/200))+.5);return t}onInit(){const e=this.freq1$.pipe(b(e=>this.sine(e))),t=this.freq2$.pipe(b(e=>this.sine(e))),n=this.freq3$.pipe(b(e=>this.sine(e)));this.graphSeries={wave1:e,wave2:t,wave3:n,sum:g([e,t,n]).pipe(b(([e,t,n])=>e.map((e,s)=>(e+t[s]+n[s])/3)))}}}Nn=(e=>[,,,Kn(e?.[Qn("metadata")]??null)])(qn),Gn=new WeakMap,Yn=new WeakMap,Bn=new WeakMap,Vn=new WeakMap,Jn=new WeakMap,rs(Nn,4,"freq1",Ln,bs,Gn),rs(Nn,4,"freq2",Fn,bs,Yn),rs(Nn,4,"freq3",Dn,bs,Bn),rs(Nn,4,"graphConfig",Rn,bs,Vn),rs(Nn,4,"graphSeries",Wn,bs,Jn),(e=>{es(e,"__stateTypes",{freq1:"number",freq2:"number",freq3:"number",graphConfig:"Object",graphSeries:"Record"})})(bs=rs(Nn,0,"WaveMixer",Hn,bs)),is(Nn,1,bs);var gs,fs,ys,ws=Object.create,xs=Object.defineProperty,ks=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Ss=e=>{throw TypeError(e)},$s=["class","method","getter","setter","accessor","field","value","get","set"],Ts=e=>void 0!==e&&"function"!=typeof e?Ss("Function expected"):e,Ms=(e,t,n,s,a)=>({kind:$s[e],name:t,metadata:s,addInitializer:e=>n._?Ss("Already initialized"):a.push(Ts(e||null))});gs=[a({selector:"wave-mixer-section",directives:[i,r],template:`\n        <h1 toc-anchor="wave-mixer">Wave mixer</h1>\n        <p class="lede">Three sine waves at different frequencies, mixed into a\n           summed wave and drawn on a single\n           <code class="inline">${v`<rx-graph>`}</code>. Each slider controls\n           one frequency through a\n           <a href="/docs/components/bindings/data">tap binding</a>, and the graph\n           receives all four observable streams through a\n           <a href="/docs/components/bindings">[series] property binding</a>.</p>\n\n        <section class="host">\n            <h2>The wave mixer component</h2>\n            <p class="note">Three\n               <a href="/docs/components/state"><code class="inline">@state</code></a>\n               frequency fields —\n               <code class="inline">freq1</code>,\n               <code class="inline">freq2</code>, and\n               <code class="inline">freq3</code>. Each slider writes one of them\n               through a tap binding. In\n               <code class="inline">onInit</code>, each field's\n               <a href="/docs/components/state/dollar"><code class="inline">$</code> stream</a>\n               is piped through a <code class="inline">sine</code> function that\n               generates a 200-point array. A\n               <code class="inline">combineLatest</code> of all three produces the\n               summed wave. The resulting four observable streams are written into\n               the <code class="inline">graphSeries</code> record that the template\n               binds to\n               <code class="inline">${v`<rx-graph>`}</code>.</p>\n            <code-block syntax="ts">${v`${vs}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Drag to modulate</h2>\n            <p class="note">Each slider controls one frequency. Drag it and the\n               corresponding sine wave recomputes, the sum recalculates, and the\n               graph redraws all four lines.</p>\n            <div class="split">\n                <code-block syntax="html">${v`<wave-mixer></wave-mixer>`}</code-block>\n                <div class="live"><wave-mixer></wave-mixer></div>\n            </div>\n        </section>\n    `,styles:m`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`})];class Os extends(ys=d){}fs=(e=>[,,,ws(e?.[ks("metadata")]??null)])(ys),Os=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{xs(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=Ms(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,Ts(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?xs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,ks("metadata"),e[3])})(e,a),a})(fs,0,"WaveMixerExample",gs,Os),((e,t,n)=>{for(var s=0,a=fs[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Os);var Ps,js,Cs,Is=Object.create,As=Object.defineProperty,_s=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),zs=e=>{throw TypeError(e)},Es=["class","method","getter","setter","accessor","field","value","get","set"],Ws=e=>void 0!==e&&"function"!=typeof e?zs("Function expected"):e,Rs=(e,t,n,s,a)=>({kind:Es[e],name:t,metadata:s,addInitializer:e=>n._?zs("Already initialized"):a.push(Ws(e||null))});Ps=[a({selector:"nested-level",template:'\n        <div class="nested">\n            <div class="tag">nested scope</div>\n            <div class="content"><slot></slot></div>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .nested { border: 1px dashed var(--border); border-radius: var(--radius);\n                  padding: 0.5rem 0.75rem 0.6rem; margin: 0.3rem 0; background: #070707; }\n        .tag { color: var(--dim); font-size: 0.65rem; letter-spacing: var(--tracking);\n               text-transform: uppercase; margin-bottom: 0.4rem; }\n        .content { display: flex; flex-wrap: wrap; gap: 0.4rem; align-items: center; }\n    "})];class Ds extends(Cs=n){}js=(e=>[,,,Is(e?.[_s("metadata")]??null)])(Cs),Ds=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{As(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=Rs(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,Ws(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?As(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,_s("metadata"),e[3])})(e,a),a})(js,0,"NestedLevel",Ps,Ds),((e,t,n)=>{for(var s=0,a=js[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Ds);var Fs,Ls,qs,Hs,Ns,Gs,Ys,Bs=Object.create,Vs=Object.defineProperty,Js=Object.getOwnPropertyDescriptor,Ks=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Us=e=>{throw TypeError(e)},Xs=(e,t,n)=>t in e?Vs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Qs=(e,t)=>Vs(e,"name",{value:t,configurable:!0}),Zs=["class","method","getter","setter","accessor","field","value","get","set"],ea=e=>void 0!==e&&"function"!=typeof e?Us("Function expected"):e,ta=(e,t,n,s,a)=>({kind:Zs[e],name:t,metadata:s,addInitializer:e=>n._?Us("Already initialized"):a.push(ea(e||null))}),na=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},sa=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Zs[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&Js(h<4?a:{get[n](){return oa(this,i)},set[n](e){return la(this,i,e)}},n));h?m&&h<4&&Qs(i,(h>2?"set ":h>1?"get ":"")+n):Qs(a,n);for(var y=s.length-1;y>=0;y--)l=ta(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>ra(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?oa:da)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>la(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?ea(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?Us("Object expected"):(ea(r=o.get)&&(f.get=r),ea(r=o.set)&&(f.set=r),ea(r=o.init)&&b.unshift(r));return h||((e,t)=>{Xs(t,Ks("metadata"),e[3])})(e,a),f&&Vs(a,n,f),m?4^h?i:f:a},aa=(e,t,n)=>Xs(e,"symbol"!=typeof t?t+"":t,n),ia=(e,t,n)=>t.has(e)||Us("Cannot "+n),ra=(e,t)=>Object(t)!==t?Us('Cannot use the "in" operator on this value'):e.has(t),oa=(e,t,n)=>(ia(e,t,"read from private field"),n?n.call(e):t.get(e)),ca=(e,t,n)=>t.has(e)?Us("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),la=(e,t,n,s)=>(ia(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),da=(e,t,n)=>(ia(e,t,"access private method"),n);Hs=[a({selector:"page-echo",template:'\n        <div class="echo" [class.blended]="blend">\n            <div class="section">\n                <div class="label">child template — caret prefix reaches the parent host</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">^count</span> {{ ^count }}</code>\n                        <span class="sep">·</span>\n                        <code><span class="pre">^status</span> {{ ^status }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="^increment(2)">^increment(2)</button>\n                        <button onclick="^reset">^reset</button>\n                    </div>\n                </div>\n            </div>\n            <div class="section">\n                <div class="label">local <code class="inline">accent</code> state pushes to the host via tap binding</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">accent</span> {{ accent }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="cycleAccent" [style]="accentBtnStyle">accent</button>\n                    </div>\n                </div>\n            </div>\n            <div class="section">\n                <div class="label">local <code class="inline">blend</code> state — stays in this component, never leaves</div>\n                <div class="body">\n                    <div class="row">\n                        <code><span class="pre">blend</span> {{ blend }}</code>\n                    </div>\n                    <div class="row">\n                        <button onclick="toggleBlend" [class.active]="blend">blend</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .echo { background: #0a1128; border: var(--border-width) solid var(--navy); border-radius: var(--radius);\n                padding: 1rem; color: var(--accent); font-family: var(--font-mono); font-size: 0.85rem; }\n        .section + .section { margin-top: 1rem; }\n        .label { color: var(--slate); font-size: 0.7rem; letter-spacing: var(--tracking);\n                 text-transform: uppercase; margin-bottom: 0.5rem; }\n        .label code { color: var(--accent); font-size: inherit; }\n        .body { display: flex; flex-direction: column; gap: 0.4rem;\n                padding: 0.5rem 0.6rem; background: var(--bg-1);\n                border-radius: var(--radius-sm); }\n        .row { display: flex; gap: 0.5rem; align-items: center; }\n        .row code { color: var(--accent); background: transparent; padding: 0.35rem 0.4rem; }\n        .pre { color: var(--slate); }\n        .sep { color: #334; }\n        .row button { background: #0f1a3a; border: var(--border-width) solid var(--navy); color: var(--accent);\n                      padding: 0.35rem 0.7rem; font: inherit; font-size: 0.8rem;\n                      cursor: pointer; border-radius: var(--radius-sm); }\n        .row button:hover { background: #182555; color: var(--white); }\n        .row button.active { background: var(--navy); border-color: var(--accent); color: var(--white); }\n        .echo.blended { mix-blend-mode: difference; }\n    "})];class ha extends(qs=n,Ls=[s],Fs=[s],qs){constructor(){super(...arguments),ca(this,Gs,na(Ns,8,this,"#050505")),na(Ns,11,this),ca(this,Ys,na(Ns,12,this,!1)),na(Ns,15,this),aa(this,"accents",["#050505","#0f2538","#250f28","#0f2510","#25200f","#280f0f","#0f0f28"])}lighten(e,t){const n=n=>Math.min(255,parseInt(e.slice(n,n+2),16)+t);return`rgb(${n(1)},${n(3)},${n(5)})`}contrastColor(e,t){const n=n=>Math.min(255,parseInt(e.slice(n,n+2),16)+t);return(.299*n(1)+.587*n(3)+.114*n(5))/255>.5?"#050505":"#f5f5f5"}get accentBtnStyle$(){return this.accent$.pipe(b(e=>({accent:e,bg:this.lighten(e,70),fg:this.contrastColor(e,70)})),b(({accent:e,bg:t,fg:n})=>`border-color: ${e}; color: ${n}; background: ${t}`))}cycleAccent(){const e=this.accents.indexOf(this.accent);this.accent=this.accents[(e+1)%this.accents.length]}toggleBlend(){this.blend=!this.blend}}Ns=(e=>[,,,Bs(e?.[Ks("metadata")]??null)])(qs),Gs=new WeakMap,Ys=new WeakMap,sa(Ns,4,"accent",Ls,ha,Gs),sa(Ns,4,"blend",Fs,ha,Ys),ha=sa(Ns,0,"PageEcho",Hs,ha),aa(ha,"__stateTypes",{accent:"string",blend:"boolean"}),na(Ns,1,ha);var pa,ma,ua,va,ba,ga,fa,ya=Object.create,wa=Object.defineProperty,xa=Object.getOwnPropertyDescriptor,ka=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Sa=e=>{throw TypeError(e)},$a=(e,t,n)=>t in e?wa(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ta=(e,t)=>wa(e,"name",{value:t,configurable:!0}),Ma=["class","method","getter","setter","accessor","field","value","get","set"],Oa=e=>void 0!==e&&"function"!=typeof e?Sa("Function expected"):e,Pa=(e,t,n,s,a)=>({kind:Ma[e],name:t,metadata:s,addInitializer:e=>n._?Sa("Already initialized"):a.push(Oa(e||null))}),ja=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Ca=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Ma[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&xa(h<4?a:{get[n](){return _a(this,i)},set[n](e){return Ea(this,i,e)}},n));h?m&&h<4&&Ta(i,(h>2?"set ":h>1?"get ":"")+n):Ta(a,n);for(var y=s.length-1;y>=0;y--)l=Pa(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Aa(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?_a:Wa)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Ea(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?Oa(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?Sa("Object expected"):(Oa(r=o.get)&&(f.get=r),Oa(r=o.set)&&(f.set=r),Oa(r=o.init)&&b.unshift(r));return h||((e,t)=>{$a(t,ka("metadata"),e[3])})(e,a),f&&wa(a,n,f),m?4^h?i:f:a},Ia=(e,t,n)=>t.has(e)||Sa("Cannot "+n),Aa=(e,t)=>Object(t)!==t?Sa('Cannot use the "in" operator on this value'):e.has(t),_a=(e,t,n)=>(Ia(e,t,"read from private field"),n?n.call(e):t.get(e)),za=(e,t,n)=>t.has(e)?Sa("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ea=(e,t,n,s)=>(Ia(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Wa=(e,t,n)=>(Ia(e,t,"access private method"),n);const Ra=p`
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
`;va=[a({selector:"nesting-section",directives:[i,r],template:`\n        <div class="page">\n            <h1 toc-anchor="nesting-example">Nesting example</h1>\n\n            <p class="lede"><a href="/docs/components/bindings">Bindings</a> resolve\n               against the component whose template they're written in. Nesting depth\n               is irrelevant. A <code class="inline">${v`<div>`}</code> wrapper,\n               a custom element wrapper, two custom element wrappers — doesn't matter.\n               If the binding is in your template, it resolves against you.</p>\n\n            <section class="host">\n                <h2><code class="inline">${v`<nested-level>`}</code> — a stateless wrapper</h2>\n                <p class="note">A stateless wrapper that\n                   <a href="/docs/components/projection">projects</a> its children\n                   through a <code class="inline">${v`<slot>`}</code> inside a\n                   dashed border and a label. It has no state and no behaviour — it\n                   exists to prove that wrapping bindings in a custom element doesn't\n                   redirect where they resolve. This component adds visual framing\n                   but introduces no scope boundary.</p>\n                <code-block syntax="ts">${v`${u`@Component({
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
export class NestedLevel extends RxElement {}`}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${v`<page-echo>`}</code> — a component boundary</h2>\n                <p class="note">This <em>is</em> a\n                   <a href="/docs/components/bindings">component boundary</a>.\n                   Its bindings resolve against itself by default —\n                   its <a href="/docs/components/state"><code class="inline">@state</code></a> fields\n                   <code class="inline">blend</code> and\n                   <code class="inline">accent</code> are local. It assumes its host\n                   has a <code class="inline">count</code> field and an\n                   <code class="inline">increment</code> method, and uses\n                   <a href="/docs/components/paths/carets">caret bindings</a>\n                   to reach them\n                   (<code class="inline">${v`^count`}</code>,\n                   <code class="inline">${v`^increment(2)`}</code>). The tap binding\n                   <code class="inline">${v`[(accent)]="accent"`}</code> writes\n                   in the opposite direction — when\n                   <code class="inline">${v`[(accent)]`}</code> changes, the new\n                   value pushes into the host's\n                   <code class="inline">accent</code>.\n                   Wrapping in a stateless element doesn't change scope, but a component\n                   with its own template does — and carets are how you cross that\n                   boundary.</p>\n                <code-block syntax="ts">${v`${u`@Component({
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
}`}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${v`<nesting-section>`}</code> — the host template (<code class="inline">NESTING_TEMPLATE</code>)</h2>\n                <p class="note">The host template places buttons at three\n                   nesting depths. Some sit directly in the template, some are\n                   wrapped in one\n                   <code class="inline">${v`<nested-level>`}</code>, and some\n                   are wrapped in two.\n                   All three groups\n                   <a href="/docs/components/paths">resolve against</a> this component\n                   because all three are written in its template. At the bottom,\n                   <code class="inline">${v`<page-echo [(accent)]="accent">`}</code>\n                   — when <code class="inline">${v`<page-echo>`}</code>'s\n                   <code class="inline">${v`[(accent)]`}</code> changes, the\n                   <a href="/docs/components/bindings/data">tap binding</a> pushes\n                   it into the host's <code class="inline">accent</code>.</p>\n                <code-block syntax="html">${v`${Ra}`}</code-block>\n            </section>\n\n            <section class="host">\n                <h2><code class="inline">${v`<nesting-section>`}</code> — the host class</h2>\n                <p class="note">The class owns all the state that the template and\n                   its children read. <code class="inline">count</code> and\n                   <code class="inline">accent</code> are\n                   <code class="inline">@state</code> fields — each one backs an\n                   observable stream that bindings subscribe to.\n                   <code class="inline">status$</code> is a derived getter that maps\n                   <code class="inline">count</code> to the strings\n                   "zero", "positive", or "negative".\n                   <code class="inline">increment</code> and\n                   <code class="inline">reset</code> are the methods that the\n                   template's <code class="inline">onclick</code> bindings call.</p>\n                <code-block syntax="ts">${v`${u`@Component({
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
}`}`}</code-block>\n            </section>\n\n            <section class="ex">\n                <h2>Live</h2>\n                <p class="note">All three components rendered together. The\n                   buttons at depth 0 sit directly in the\n                   <code class="inline">${v`<nesting-section>`}</code> template.\n                   The buttons inside the dashed boxes are wrapped in one or two\n                   <code class="inline">${v`<nested-level>`}</code> elements —\n                   but they still resolve against the host, so they read and write\n                   the same <code class="inline">count</code>. At the bottom,\n                   <code class="inline">${v`<page-echo>`}</code> reaches\n                   <code class="inline">count</code> via carets, and its tap binding\n                   <code class="inline">${v`[(accent)]="accent"`}</code> pushes\n                   <code class="inline">${v`<page-echo>`}</code>'s\n                   <code class="inline">accent</code> into the host's\n                   <code class="inline">accent</code> — click the accent button to\n                   cycle the background.\n                   <code class="inline">blend</code> stays entirely inside\n                   <code class="inline">${v`<page-echo>`}</code> and nothing\n                   outside sees it.</p>\n                <div class="live" [style.background]="accent">${Ra}</div>\n            </section>\n        </div>\n    `,styles:`${m`
    :host { display: block; }
    .buttons { display: flex; flex-wrap: wrap; gap: 0.3rem; }
    .state { margin: 0.75rem 0 0; font-family: var(--font-mono);
             color: var(--secondary); font-size: 0.85rem; }
    .state .status { color: var(--accent); }
    button { background: var(--bg-3); border: var(--border-width) solid var(--border); color: var(--white);
             padding: 0.5rem 1rem; font: inherit; font-size: 0.9rem;
             cursor: pointer; border-radius: var(--radius); margin: 0.15rem; }
    button:hover { background: var(--bg-5); border-color: var(--dim); }
`}\n${m`
    .live { display: flex; flex-direction: column; gap: 0.5rem;
            padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`}`})];class Da extends(ua=d,ma=[s],pa=[s],ua){constructor(){super(...arguments),za(this,ga,ja(ba,8,this,0)),ja(ba,11,this),za(this,fa,ja(ba,12,this,"#050505")),ja(ba,15,this)}get status$(){return this.count$.pipe(b(e=>0===e?"zero":e>0?"positive":"negative"))}increment(e){this.count+=e}reset(){this.count=0}}ba=(e=>[,,,ya(e?.[ka("metadata")]??null)])(ua),ga=new WeakMap,fa=new WeakMap,Ca(ba,4,"count",ma,Da,ga),Ca(ba,4,"accent",pa,Da,fa),(e=>{$a(e,"__stateTypes",{count:"number",accent:"string"})})(Da=Ca(ba,0,"NestingExample",va,Da)),ja(ba,1,Da);var Fa,La,qa,Ha,Na,Ga,Ya,Ba,Va,Ja,Ka,Ua,Xa,Qa,Za,ei,ti,ni,si,ai,ii,ri,oi,ci,li,di,hi,pi,mi,ui=Object.create,vi=Object.defineProperty,bi=Object.getOwnPropertyDescriptor,gi=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),fi=e=>{throw TypeError(e)},yi=(e,t,n)=>t in e?vi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,wi=(e,t)=>vi(e,"name",{value:t,configurable:!0}),xi=["class","method","getter","setter","accessor","field","value","get","set"],ki=e=>void 0!==e&&"function"!=typeof e?fi("Function expected"):e,Si=(e,t,n,s,a)=>({kind:xi[e],name:t,metadata:s,addInitializer:e=>n._?fi("Already initialized"):a.push(ki(e||null))}),$i=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Ti=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=xi[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&bi(h<4?a:{get[n](){return ji(this,i)},set[n](e){return Ii(this,i,e)}},n));h?m&&h<4&&wi(i,(h>2?"set ":h>1?"get ":"")+n):wi(a,n);for(var y=s.length-1;y>=0;y--)l=Si(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Pi(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?ji:Ai)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Ii(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?ki(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?fi("Object expected"):(ki(r=o.get)&&(f.get=r),ki(r=o.set)&&(f.set=r),ki(r=o.init)&&b.unshift(r));return h||((e,t)=>{yi(t,gi("metadata"),e[3])})(e,a),f&&vi(a,n,f),m?4^h?i:f:a},Mi=(e,t,n)=>yi(e,"symbol"!=typeof t?t+"":t,n),Oi=(e,t,n)=>t.has(e)||fi("Cannot "+n),Pi=(e,t)=>Object(t)!==t?fi('Cannot use the "in" operator on this value'):e.has(t),ji=(e,t,n)=>(Oi(e,t,"read from private field"),n?n.call(e):t.get(e)),Ci=(e,t,n)=>t.has(e)?fi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Ii=(e,t,n,s)=>(Oi(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Ai=(e,t,n)=>(Oi(e,t,"access private method"),n);const _i=p`
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
`,zi=m`
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
`,Ei=u`const TARGET_FPS = 60;
const KP = 0.4;
const FPS_WINDOW = 30;
const IPS_WINDOW = 10;
const MIN_BATCH = 1;
const INITIAL_BATCH = 16;
const GRAPH_POINTS = 120;
const GRAPH_SAMPLE_MS = 90;

@Component({
    selector: 'scheduler-theatre',
    template: \`${_i}\`,
    styles: \`${zi}\`,
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
}`,Wi=120;Za=[a({selector:"scheduler-theatre",template:_i,styles:zi})];class Ri extends(Qa=n,Xa=[s],Ua=[s],Ka=[s],Ja=[s],Va=[s],Ba=[s],Ya=[s],Ga=[s],Na=[s],Ha=[s],qa=[s],La=[s],Fa=[s],Qa){constructor(){super(...arguments),Ci(this,ti,$i(ei,8,this,0)),$i(ei,11,this),Ci(this,ni,$i(ei,12,this,0)),$i(ei,15,this),Ci(this,si,$i(ei,16,this,0)),$i(ei,19,this),Ci(this,ai,$i(ei,20,this,"flood")),$i(ei,23,this),Ci(this,ii,$i(ei,24,this,0)),$i(ei,27,this),Ci(this,ri,$i(ei,28,this,"#555")),$i(ei,31,this),Ci(this,oi,$i(ei,32,this,[])),$i(ei,35,this),Ci(this,ci,$i(ei,36,this,[])),$i(ei,39,this),Ci(this,li,$i(ei,40,this,[])),$i(ei,43,this),Ci(this,di,$i(ei,44,this,{fps:{label:"fps",color:"#4f4"}})),$i(ei,47,this),Ci(this,hi,$i(ei,48,this,{batch:{label:"inserts/frame",color:"#fa4"},ips:{label:"inserts/s",color:"#8af"}})),$i(ei,51,this),Ci(this,pi,$i(ei,52,this,{})),$i(ei,55,this),Ci(this,mi,$i(ei,56,this,{})),$i(ei,59,this),Mi(this,"body"),Mi(this,"fpsRaf",0),Mi(this,"fpsLast",0),Mi(this,"insertRaf",0),Mi(this,"graphInterval",0),Mi(this,"running",!1),Mi(this,"visible",!1),Mi(this,"seeded",!1),Mi(this,"current",16),Mi(this,"fpsSamples",[]),Mi(this,"ipsSamples",[]),Mi(this,"lastInsertTick",0),Mi(this,"io")}fpsTick(e){const t=e-this.fpsLast;if(this.fpsLast=e,t>0){this.fpsSamples.push(t),this.fpsSamples.length>30&&this.fpsSamples.shift();const e=this.fpsSamples.reduce((e,t)=>e+t,0)/this.fpsSamples.length;if(this.fps=Math.round(1e3/e),this.seeded||(this.fpsPoints=new Array(Wi).fill(this.fps),this.fpsPoints$.touch(),this.seeded=!0),this.running){const e=(this.fps-60)/60;this.dotColor=e<0?"#f44":"#4f4",this.current=Math.max(1,Math.round(this.current*(1+.4*e))),this.batch=this.current}}this.fpsRaf=requestAnimationFrame(e=>{this.fpsTick(e)})}onInit(){this.fpsSeries={fps:this.fpsPoints$},this.insertsSeries={batch:this.batchPoints$,ips:this.ipsPoints$},this.io=new IntersectionObserver(([e])=>{e.isIntersecting?this.onVisible():this.onHidden()}),this.io.observe(this)}onDestroy(){this.io?.disconnect(),this.onHidden()}onVisible(){this.visible||(this.visible=!0,console.log("RESUME",this.fpsPoints),this.fpsLast=performance.now(),this.fpsSamples=[],this.fpsRaf=requestAnimationFrame(e=>{this.fpsTick(e)}),this.graphInterval=window.setInterval(()=>{this.fpsPoints.push(this.fps),this.fpsPoints.length>Wi&&this.fpsPoints.shift(),this.fpsPoints$.touch(),this.batchPoints.push(this.batch),this.batchPoints.length>Wi&&this.batchPoints.shift(),this.batchPoints$.touch(),this.ipsPoints.push(this.ips),this.ipsPoints.length>Wi&&this.ipsPoints.shift(),this.ipsPoints$.touch()},90),this.running&&(this.lastInsertTick=performance.now(),this.insertRaf=requestAnimationFrame(()=>this.insertTick())))}onHidden(){this.visible&&(this.visible=!1,console.log("PAUSE"),cancelAnimationFrame(this.fpsRaf),clearInterval(this.graphInterval),this.running&&cancelAnimationFrame(this.insertRaf))}toggle(){this.running?this.stop():this.start()}clear(){this.stop(),this.body.replaceChildren(),this.count=0,this.batch=0,this.ips=0}start(){this.running=!0,this.label="stop",this.current=16,this.ipsSamples=[],this.visible&&(this.lastInsertTick=performance.now(),this.insertRaf=requestAnimationFrame(()=>this.insertTick()))}stop(){cancelAnimationFrame(this.insertRaf),this.running=!1,this.label="flood",this.dotColor="#555"}insertTick(){if(!this.running)return;const e=performance.now(),t=e-this.lastInsertTick;this.lastInsertTick=e;const n=this.current,s=this.count;let a="";for(let i=0;i<n;i++)a+=`<div class="row"><div>${String(s+i+1)}</div><div>${e.toFixed(1)}</div><div>${Math.random().toFixed(6)}</div></div>`;if(this.body.insertAdjacentHTML("beforeend",a),this.count=s+n,t>0){this.ipsSamples.push(n/(t/1e3)),this.ipsSamples.length>10&&this.ipsSamples.shift();const e=this.ipsSamples.reduce((e,t)=>e+t,0)/this.ipsSamples.length;this.ips=Math.round(e)}this.insertRaf=requestAnimationFrame(()=>this.insertTick())}}ei=(e=>[,,,ui(e?.[gi("metadata")]??null)])(Qa),ti=new WeakMap,ni=new WeakMap,si=new WeakMap,ai=new WeakMap,ii=new WeakMap,ri=new WeakMap,oi=new WeakMap,ci=new WeakMap,li=new WeakMap,di=new WeakMap,hi=new WeakMap,pi=new WeakMap,mi=new WeakMap,Ti(ei,4,"count",Xa,Ri,ti),Ti(ei,4,"batch",Ua,Ri,ni),Ti(ei,4,"ips",Ka,Ri,si),Ti(ei,4,"label",Ja,Ri,ai),Ti(ei,4,"fps",Va,Ri,ii),Ti(ei,4,"dotColor",Ba,Ri,ri),Ti(ei,4,"fpsPoints",Ya,Ri,oi),Ti(ei,4,"batchPoints",Ga,Ri,ci),Ti(ei,4,"ipsPoints",Na,Ri,li),Ti(ei,4,"fpsConfig",Ha,Ri,di),Ti(ei,4,"insertsConfig",qa,Ri,hi),Ti(ei,4,"fpsSeries",La,Ri,pi),Ti(ei,4,"insertsSeries",Fa,Ri,mi),Ri=Ti(ei,0,"SchedulerTheatre",Za,Ri),Mi(Ri,"__stateTypes",{count:"number",batch:"number",ips:"number",label:"string",fps:"number",dotColor:"string",fpsPoints:"Array",batchPoints:"Array",ipsPoints:"Array",fpsConfig:"Object",insertsConfig:"Object",fpsSeries:"Record",insertsSeries:"Record"}),$i(ei,1,Ri);var Di,Fi,Li,qi=Object.create,Hi=Object.defineProperty,Ni=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Gi=e=>{throw TypeError(e)},Yi=["class","method","getter","setter","accessor","field","value","get","set"],Bi=e=>void 0!==e&&"function"!=typeof e?Gi("Function expected"):e,Vi=(e,t,n,s,a)=>({kind:Yi[e],name:t,metadata:s,addInitializer:e=>n._?Gi("Already initialized"):a.push(Bi(e||null))});Di=[a({selector:"scheduler-theatre-section",directives:[i,r],template:`\n        <h1 toc-anchor="scheduler-theatre">Scheduler theatre</h1>\n        <p class="lede">Click flood to start inserting rows into a table. A proportional controller\n           measures frame rate and adjusts batch size per frame to try to maintain 60 fps. Watch the\n           graphs as elements pile up. FPS will sag\n           and the batch size shrink to compensate — this is a game it will quickly lose. The writes\n           haven't slowed down — <code class="inline">insertAdjacentHTML</code> is still\n           microseconds. Layout and paint got expensive. That cost lives in the browser's C++\n           layout engine, on the other side of a boundary no abstraction can cross.\n           No amount of diffing, batching, or dirty-checking will ever move that line.\n           The P controller in this demo is like any other popular framework. It reacts to the symptom,\n           backs off proportionally, and loses anyway.</p>\n\n        <p class="lede"><em>The framework could insert 10,000 rows in a blink without dropping\n           a frame. This demo throttles on purpose with heavy instrumentation to prove a point.</em></p>\n\n        <section class="host">\n            <code-block syntax="ts">${v`${Ei}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>Flood</h2>\n            <p class="note">Press flood, watch the graphs.</p>\n            <div class="split">\n                <code-block syntax="html">${v`<scheduler-theatre></scheduler-theatre>`}</code-block>\n                <div class="live"><scheduler-theatre></scheduler-theatre></div>\n            </div>\n        </section>\n    `,styles:m`
    .live { padding: 1.25rem; background: var(--bg-1);
            border: var(--border-width) solid var(--bg-5); border-radius: var(--radius-lg); }
`})];class Ji extends(Li=d){}Fi=(e=>[,,,qi(e?.[Ni("metadata")]??null)])(Li),Ji=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{Hi(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=Vi(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,Bi(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,Ni("metadata"),e[3])})(e,a),a})(Fi,0,"SchedulerTheatreExample",Di,Ji),((e,t,n)=>{for(var s=0,a=Fi[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Ji);const Ki=["January","February","March","April","May","June","July","August","September","October","November","December"],Ui=e=>String(e).padStart(2,"0"),Xi=(e,t,n)=>`${String(e)}-${Ui(t+1)}-${Ui(n)}`;var Qi,Zi,er,tr,nr,sr,ar,ir,rr,or,cr,lr=Object.create,dr=Object.defineProperty,hr=Object.getOwnPropertyDescriptor,pr=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),mr=e=>{throw TypeError(e)},ur=(e,t,n)=>t in e?dr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vr=(e,t)=>dr(e,"name",{value:t,configurable:!0}),br=["class","method","getter","setter","accessor","field","value","get","set"],gr=e=>void 0!==e&&"function"!=typeof e?mr("Function expected"):e,fr=(e,t,n,s,a)=>({kind:br[e],name:t,metadata:s,addInitializer:e=>n._?mr("Already initialized"):a.push(gr(e||null))}),yr=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},wr=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=br[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&hr(h<4?a:{get[n](){return Sr(this,i)},set[n](e){return Tr(this,i,e)}},n));h?m&&h<4&&vr(i,(h>2?"set ":h>1?"get ":"")+n):vr(a,n);for(var y=s.length-1;y>=0;y--)l=fr(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>kr(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Sr:Mr)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Tr(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?gr(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?mr("Object expected"):(gr(r=o.get)&&(f.get=r),gr(r=o.set)&&(f.set=r),gr(r=o.init)&&b.unshift(r));return h||((e,t)=>{ur(t,pr("metadata"),e[3])})(e,a),f&&dr(a,n,f),m?4^h?i:f:a},xr=(e,t,n)=>t.has(e)||mr("Cannot "+n),kr=(e,t)=>Object(t)!==t?mr('Cannot use the "in" operator on this value'):e.has(t),Sr=(e,t,n)=>(xr(e,t,"read from private field"),n?n.call(e):t.get(e)),$r=(e,t,n)=>t.has(e)?mr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Tr=(e,t,n,s)=>(xr(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Mr=(e,t,n)=>(xr(e,t,"access private method"),n);sr=[a({selector:"calendar-day",template:'<button onclick="^^selectDate(date)"\n                       [class.selected]="selected"\n                       [class.in-month]="inMonth">{{day}}</button>',styles:"\n        :host { display: block; }\n        button { width: 100%; aspect-ratio: 1; background: transparent;\n                 border: var(--border-width) solid var(--bg-4); border-radius: var(--radius-sm);\n                 color: #3a3a3a; font: inherit; font-family: var(--font-mono);\n                 font-size: 0.85rem; cursor: pointer; padding: 0;\n                 transition: background 0.08s, border-color 0.08s, color 0.08s; }\n        button:hover { border-color: #3a5a88; color: var(--accent); }\n        button.in-month { color: #bbb; }\n        button.selected { background: var(--accent); border-color: var(--accent);\n                          color: var(--black); font-weight: 700;\n                          box-shadow: 0 0 14px color-mix(in srgb, var(--accent) 50%, transparent); }\n    "})];class Or extends(nr=n,tr=[s],er=[s],Zi=[s],Qi=[s],nr){constructor(){super(...arguments),$r(this,ir,yr(ar,8,this,"")),yr(ar,11,this),$r(this,rr,yr(ar,12,this,0)),yr(ar,15,this),$r(this,or,yr(ar,16,this,!1)),yr(ar,19,this),$r(this,cr,yr(ar,20,this,!1)),yr(ar,23,this)}}ar=(e=>[,,,lr(e?.[pr("metadata")]??null)])(nr),ir=new WeakMap,rr=new WeakMap,or=new WeakMap,cr=new WeakMap,wr(ar,4,"date",tr,Or,ir),wr(ar,4,"day",er,Or,rr),wr(ar,4,"inMonth",Zi,Or,or),wr(ar,4,"selected",Qi,Or,cr),(e=>{ur(e,"__stateTypes",{date:"string",day:"number",inMonth:"boolean",selected:"boolean"})})(Or=wr(ar,0,"CalendarDay",sr,Or)),yr(ar,1,Or);var Pr,jr,Cr,Ir,Ar,_r,zr,Er=Object.create,Wr=Object.defineProperty,Rr=Object.getOwnPropertyDescriptor,Dr=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Fr=e=>{throw TypeError(e)},Lr=(e,t,n)=>t in e?Wr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,qr=(e,t)=>Wr(e,"name",{value:t,configurable:!0}),Hr=["class","method","getter","setter","accessor","field","value","get","set"],Nr=e=>void 0!==e&&"function"!=typeof e?Fr("Function expected"):e,Gr=(e,t,n,s,a)=>({kind:Hr[e],name:t,metadata:s,addInitializer:e=>n._?Fr("Already initialized"):a.push(Nr(e||null))}),Yr=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},Br=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=Hr[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&Rr(h<4?a:{get[n](){return Kr(this,i)},set[n](e){return Xr(this,i,e)}},n));h?m&&h<4&&qr(i,(h>2?"set ":h>1?"get ":"")+n):qr(a,n);for(var y=s.length-1;y>=0;y--)l=Gr(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>Jr(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?Kr:Qr)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Xr(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?Nr(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?Fr("Object expected"):(Nr(r=o.get)&&(f.get=r),Nr(r=o.set)&&(f.set=r),Nr(r=o.init)&&b.unshift(r));return h||((e,t)=>{Lr(t,Dr("metadata"),e[3])})(e,a),f&&Wr(a,n,f),m?4^h?i:f:a},Vr=(e,t,n)=>t.has(e)||Fr("Cannot "+n),Jr=(e,t)=>Object(t)!==t?Fr('Cannot use the "in" operator on this value'):e.has(t),Kr=(e,t,n)=>(Vr(e,t,"read from private field"),n?n.call(e):t.get(e)),Ur=(e,t,n)=>t.has(e)?Fr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Xr=(e,t,n,s)=>(Vr(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Qr=(e,t,n)=>(Vr(e,t,"access private method"),n);Ir=[a({selector:"calendar-week",directives:[h],template:'\n        <div class="days" rx-for="days by key">\n            <calendar-day></calendar-day>\n        </div>\n    ',styles:"\n        :host { display: block; }\n        .days { display: grid; grid-template-columns: repeat(7, 1fr);\n                gap: 0.25rem; }\n    "})];class Zr extends(Cr=n,jr=[s],Pr=[s],Cr){constructor(){super(...arguments),Ur(this,_r,Yr(Ar,8,this,0)),Yr(Ar,11,this),Ur(this,zr,Yr(Ar,12,this,[])),Yr(Ar,15,this)}}Ar=(e=>[,,,Er(e?.[Dr("metadata")]??null)])(Cr),_r=new WeakMap,zr=new WeakMap,Br(Ar,4,"weekIdx",jr,Zr,_r),Br(Ar,4,"days",Pr,Zr,zr),(e=>{Lr(e,"__stateTypes",{weekIdx:"number",days:"Array"})})(Zr=Br(Ar,0,"CalendarWeek",Ir,Zr)),Yr(Ar,1,Zr);var eo,to,no,so,ao,io,ro,oo,co,lo=Object.create,ho=Object.defineProperty,po=Object.getOwnPropertyDescriptor,mo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),uo=e=>{throw TypeError(e)},vo=(e,t,n)=>t in e?ho(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bo=(e,t)=>ho(e,"name",{value:t,configurable:!0}),go=["class","method","getter","setter","accessor","field","value","get","set"],fo=e=>void 0!==e&&"function"!=typeof e?uo("Function expected"):e,yo=(e,t,n,s,a)=>({kind:go[e],name:t,metadata:s,addInitializer:e=>n._?uo("Already initialized"):a.push(fo(e||null))}),wo=(e,t,n,s)=>{for(var a=0,i=e[t>>1],r=i&&i.length;a<r;a++)1&t?i[a].call(n):s=i[a].call(n,s);return s},xo=(e,t,n,s,a,i)=>{var r,o,c,l,d,h=7&t,p=!!(8&t),m=!!(16&t),u=h>3?e.length+1:h?p?1:2:0,v=go[h+5],b=h>3&&(e[u-1]=[]),g=e[u]||(e[u]=[]),f=h&&(!m&&!p&&(a=a.prototype),h<5&&(h>3||!m)&&po(h<4?a:{get[n](){return $o(this,i)},set[n](e){return Mo(this,i,e)}},n));h?m&&h<4&&bo(i,(h>2?"set ":h>1?"get ":"")+n):bo(a,n);for(var y=s.length-1;y>=0;y--)l=yo(h,n,c={},e[3],g),h&&(l.static=p,l.private=m,d=l.access={has:m?e=>So(a,e):e=>n in e},3^h&&(d.get=m?e=>(1^h?$o:Oo)(e,a,4^h?i:f.get):e=>e[n]),h>2&&(d.set=m?(e,t)=>Mo(e,a,t,4^h?i:f.set):(e,t)=>e[n]=t)),o=(0,s[y])(h?h<4?m?i:f[v]:h>4?void 0:{get:f.get,set:f.set}:a,l),c._=1,4^h||void 0===o?fo(o)&&(h>4?b.unshift(o):h?m?i=o:f[v]=o:a=o):"object"!=typeof o||null===o?uo("Object expected"):(fo(r=o.get)&&(f.get=r),fo(r=o.set)&&(f.set=r),fo(r=o.init)&&b.unshift(r));return h||((e,t)=>{vo(t,mo("metadata"),e[3])})(e,a),f&&ho(a,n,f),m?4^h?i:f:a},ko=(e,t,n)=>t.has(e)||uo("Cannot "+n),So=(e,t)=>Object(t)!==t?uo('Cannot use the "in" operator on this value'):e.has(t),$o=(e,t,n)=>(ko(e,t,"read from private field"),n?n.call(e):t.get(e)),To=(e,t,n)=>t.has(e)?uo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Mo=(e,t,n,s)=>(ko(e,t,"write to private field"),s?s.call(e,n):t.set(e,n),n),Oo=(e,t,n)=>(ko(e,t,"access private method"),n);ao=[a({selector:"calendar-grid",directives:[h],template:'\n        <header class="toolbar">\n            <button class="nav" onclick="prevMonth">‹</button>\n            <div class="title">{{monthLabel}}</div>\n            <button class="nav" onclick="nextMonth">›</button>\n            <div class="slot-wrap"><slot name="actions"></slot></div>\n        </header>\n        <div class="dow">\n            <div>Mo</div><div>Tu</div><div>We</div>\n            <div>Th</div><div>Fr</div><div>Sa</div><div>Su</div>\n        </div>\n        <div class="weeks" rx-for="weeks by key">\n            <calendar-week></calendar-week>\n        </div>\n    ',styles:"\n        :host { display: block; background: var(--bg-1); border: var(--border-width) solid var(--bg-5);\n                border-radius: var(--radius-lg); padding: 1rem; }\n        .toolbar { display: flex; align-items: center; gap: 0.5rem;\n                   margin-bottom: 0.75rem; padding-bottom: 0.75rem;\n                   border-bottom: var(--border-width) solid var(--bg-4); }\n        .title { flex: 1; text-align: center; color: var(--white);\n                 font-family: var(--font-mono); font-size: 0.95rem; font-weight: 700;\n                 letter-spacing: 0.05em; }\n        .nav { background: transparent; border: var(--border-width) solid var(--bg-6);\n               color: var(--accent); width: 2rem; height: 2rem; border-radius: var(--radius-sm);\n               font: inherit; cursor: pointer; }\n        .nav:hover { border-color: var(--accent); background: color-mix(in srgb, var(--accent) 8%, transparent); }\n        .slot-wrap { display: flex; gap: 0.4rem; }\n        .dow { display: grid; grid-template-columns: repeat(7, 1fr);\n               gap: 0.25rem; margin-bottom: 0.5rem; }\n        .dow > div { text-align: center; font-family: var(--font-mono);\n                     color: var(--dim); font-size: 0.7rem; letter-spacing: 0.1em;\n                     padding: 0.3rem 0; }\n        .weeks { display: flex; flex-direction: column; gap: 0.25rem; }\n    "})];class Po extends(so=n,no=[s],to=[s],eo=[s],so){constructor(){super(...arguments),To(this,ro,wo(io,8,this,(new Date).getFullYear())),wo(io,11,this),To(this,oo,wo(io,12,this,(new Date).getMonth())),wo(io,15,this),To(this,co,wo(io,16,this,null)),wo(io,19,this)}get weeks$(){return g([this.currentYear$,this.currentMonth$,this.selectedDate$]).pipe(b(([e,t,n])=>((e,t,n)=>{const s=(new Date(e,t,1).getDay()+6)%7,a=new Date(e,t,1-s),i=[];for(let r=0;r<6;r++){const e=[];for(let s=0;s<7;s++){const i=new Date(a.getFullYear(),a.getMonth(),a.getDate()+7*r+s),o=Xi(i.getFullYear(),i.getMonth(),i.getDate());e.push({key:o,date:o,day:i.getDate(),inMonth:i.getMonth()===t,selected:o===n})}i.push({key:`w${String(r)}`,weekIdx:r,days:e})}return i})(e,t,n)))}get monthLabel$(){return g([this.currentYear$,this.currentMonth$]).pipe(b(([e,t])=>`${Ki[t]} ${String(e)}`))}prevMonth(){0===this.currentMonth?(this.currentMonth=11,this.currentYear-=1):this.currentMonth-=1}nextMonth(){11===this.currentMonth?(this.currentMonth=0,this.currentYear+=1):this.currentMonth+=1}today(){const e=new Date;this.currentYear=e.getFullYear(),this.currentMonth=e.getMonth(),this.selectedDate=Xi(e.getFullYear(),e.getMonth(),e.getDate())}selectDate(e){this.selectedDate=e}}io=(e=>[,,,lo(e?.[mo("metadata")]??null)])(so),ro=new WeakMap,oo=new WeakMap,co=new WeakMap,xo(io,4,"currentYear",no,Po,ro),xo(io,4,"currentMonth",to,Po,oo),xo(io,4,"selectedDate",eo,Po,co),(e=>{vo(e,"__stateTypes",{currentYear:"number",currentMonth:"number",selectedDate:"string | null"})})(Po=xo(io,0,"CalendarGrid",ao,Po)),wo(io,1,Po);var jo,Co,Io,Ao=Object.create,_o=Object.defineProperty,zo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Eo=e=>{throw TypeError(e)},Wo=["class","method","getter","setter","accessor","field","value","get","set"],Ro=e=>void 0!==e&&"function"!=typeof e?Eo("Function expected"):e,Do=(e,t,n,s,a)=>({kind:Wo[e],name:t,metadata:s,addInitializer:e=>n._?Eo("Already initialized"):a.push(Ro(e||null))});const Fo=p`<calendar-grid>
    <button slot="actions" onclick="today">Today</button>
</calendar-grid>`;jo=[a({selector:"calendar-section",template:`\n        <h1>Calendar</h1>\n        <p class="lede">Three components stacked —\n           <code class="inline">calendar-grid</code> owns the state and renders a list of\n           <code class="inline">calendar-week</code>, each week renders a list of\n           <code class="inline">calendar-day</code>. Click any day and the event crosses two\n           component boundaries to mutate one <code class="inline">selectedDate</code> on the\n           grid. The bindings are authored flat; the compiler injects carets based on how\n           many custom-element layers each call sits inside. Resolution at runtime is a\n           literal <code class="inline">closest('[data-rx-host]')</code> walk.</p>\n\n        <section class="host">\n            <h2>calendar-grid — owns the state</h2>\n            <p class="note">The root of the tree. Holds\n               <code class="inline">currentYear</code>,\n               <code class="inline">currentMonth</code>, and\n               <code class="inline">selectedDate</code>. Derives the grid via\n               <code class="inline">combineLatest</code> + <code class="inline">rx-for</code>.\n               The toolbar's prev/next are authored at depth 0 — no carets needed, same scope\n               as the host.</p>\n            <code-block syntax="ts">${v`${u`@Component({
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
}`}`}</code-block>\n        </section>\n\n        <section class="host">\n            <h2>calendar-week — thin row</h2>\n            <p class="note">Nothing but an <code class="inline">rx-for</code> over its\n               <code class="inline">days</code>. No state of its own, no methods — it exists\n               to give the day cells a structural parent so the caret story has a middle\n               layer to walk through.</p>\n            <code-block syntax="ts">${v`${u`@Component({
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
}`}`}</code-block>\n        </section>\n\n        <section class="host">\n            <h2>calendar-day — the leaf</h2>\n            <p class="note">One button, two class bindings, one method call reaching up two\n               custom-element layers — <code class="inline">^^selectDate(date)</code> walks\n               day → week → grid. Authored as-is; nothing is synthesised at runtime.</p>\n            <code-block syntax="ts">${v`${u`@Component({
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
}`}`}</code-block>\n        </section>\n\n        <section class="ex">\n            <h2>In use</h2>\n            <p class="note">Drop a <code class="inline">calendar-grid</code> anywhere, project\n               a <code class="inline">Today</code> button into the named slot. The projected\n               button sits one layer down from the grid — compiler rewrites\n               <code class="inline">onclick="today"</code> to\n               <code class="inline">^today</code> because a <code class="inline">&lt;slot&gt;</code>\n               is transparent to scope but being lexically inside a custom element is not.</p>\n            <div class="split">\n                <code-block syntax="html">${v`${Fo}`}</code-block>\n                <div class="live">${Fo}</div>\n            </div>\n        </section>\n\n        <section class="ex">\n            <h2>Where the carets come from</h2>\n            <p class="note">Three <code class="inline">onclick</code> calls, three different\n               depths, one flat author-time style. The compiler counts how many custom-element\n               layers each call is nested inside and injects that many carets:</p>\n            <ul class="depths">\n                <li><code class="inline">onclick="prevMonth"</code> — inside\n                   <code class="inline">calendar-grid</code>'s own template. Depth 0. Compiled\n                   verbatim.</li>\n                <li><code class="inline">onclick="today"</code> — projected into\n                   <code class="inline">&lt;calendar-grid&gt;</code> via a slot. Depth 1.\n                   Compiled to <code class="inline">^today</code>.</li>\n                <li><code class="inline">onclick="^^selectDate(date)"</code> — inside\n                   <code class="inline">calendar-day</code>, two custom-element layers away\n                   from the grid. Authored with explicit carets since the day component itself\n                   owns that binding. Could equivalently be written\n                   <code class="inline">hostNode.hostNode.selectDate(date)</code> -\n                   spelling choice.</li>\n            </ul>\n        </section>\n\n        <section class="ex">\n            <h2>How a caret resolves at runtime</h2>\n            <p class="note">Every <code class="inline">@Component</code> element gets\n               <code class="inline">data-rx-host=""</code> written on it on connect. A caret\n               is one <code class="inline">parentElement.closest('[data-rx-host]')</code>\n               hop. The whole scope walker is six lines of DOM, no framework state, nothing\n               cached:</p>\n            <code-block syntax="ts">${v`${u`const nextHost = (el) =>
    el.parentElement?.closest('[data-rx-host]');

const walkScope = (host, carets) => {
    let scope = nextHost(host);
    for (let i = 0; i < carets; i++) scope = nextHost(scope);
    return scope;
};`}`}</code-block>\n            <p class="note">Mirrors (<code class="inline">rx-div</code>,\n               <code class="inline">rx-button</code>) and plain DOM don't carry the\n               <code class="inline">data-rx-host</code> attribute, so\n               <code class="inline">closest</code> skips past them and lands on the next real\n               component host. That's why projection through a slot doesn't add a layer:\n               the slot tag itself isn't a component and doesn't mark a host.</p>\n        </section>\n\n        <section class="ex">\n            <h2>Siblings share the one source of truth</h2>\n            <p class="note">Any day cell, the prev/next buttons, the projected Today — all\n               mutate the same three observables on the one\n               <code class="inline">calendar-grid</code>. There's no fan-out, no store, no\n               shared state container. The component you clicked walked up the DOM to find\n               its host, and wrote to it directly.</p>\n        </section>\n    `,styles:"\n        :host { display: block; }\n        .depths { list-style: none; padding: 0; margin: 0;\n                  display: flex; flex-direction: column; gap: 0.5rem;\n                  color: var(--secondary); font-size: 0.9rem; line-height: 1.6; }\n        .depths li { padding: 0.6rem 0.8rem; background: var(--bg-1);\n                     border-left: 2px solid var(--navy); border-radius: 3px; }\n    "})];class Lo extends(Io=d){}Co=(e=>[,,,Ao(e?.[zo("metadata")]??null)])(Io),Lo=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{_o(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=Do(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,Ro(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?_o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,zo("metadata"),e[3])})(e,a),a})(Co,0,"CalendarExample",jo,Lo),((e,t,n)=>{for(var s=0,a=Co[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Lo);var qo,Ho,No,Go=Object.create,Yo=Object.defineProperty,Bo=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),Vo=e=>{throw TypeError(e)},Jo=["class","method","getter","setter","accessor","field","value","get","set"],Ko=e=>void 0!==e&&"function"!=typeof e?Vo("Function expected"):e,Uo=(e,t,n,s,a)=>({kind:Jo[e],name:t,metadata:s,addInitializer:e=>n._?Vo("Already initialized"):a.push(Ko(e||null))});qo=[a({selector:"examples-page",providers:[c],directives:[i,r,l],template:'\n        <toc-menu toc-menu-collapse></toc-menu>\n        <main class="content">\n            <header class="intro" toc-section="intro">\n                <h1 toc-anchor="intro">Examples</h1>\n                <p class="lede">Small, real components — each exercising one piece of\n                   the framework. Every example includes the full source, a live\n                   instance running beside it, and links back to the\n                   <a href="/docs">documentation</a> that explains the mechanisms\n                   involved.</p>\n            </header>\n\n            <slider-section toc-section="custom-slider"></slider-section>\n            <color-playground-section toc-section="reactive-palette"></color-playground-section>\n            <signal-meter-section toc-section="signal-meter"></signal-meter-section>\n            \x3c!-- <calendar-section></calendar-section> --\x3e\n            <graph-section toc-section="rx-graph"></graph-section>\n            <wave-mixer-section toc-section="wave-mixer"></wave-mixer-section>\n            <nesting-section toc-section="nesting-example"></nesting-section>\n            <scheduler-theatre-section toc-section="scheduler-theatre"></scheduler-theatre-section>\n        </main>\n    ',styles:"\n        :host { display: flex; background: var(--black); min-height: 100vh;\n                color: var(--text); box-sizing: border-box; }\n        :host > .content { flex: 1 1 0; min-width: 0; box-sizing: border-box;\n                          padding: 6rem 1.25rem 4rem 1.25rem; }\n        .intro { margin-bottom: 2.5rem; }\n        h1 { color: var(--white); font-size: 2.5rem; font-weight: 900;\n             letter-spacing: -1px; margin: 0 0 1rem; }\n        .lede { color: var(--secondary); line-height: 1.7; max-width: 72ch; margin: 0; }\n        .reveal { opacity: 0; transform: translateY(24px);\n                  transition: opacity 0.6s ease, transform 0.6s ease; }\n        .reveal.revealed { opacity: 1; transform: none; }\n    "})];class Xo extends(No=n){}Ho=(e=>[,,,Go(e?.[Bo("metadata")]??null)])(No),Xo=((e,t,n,s,a)=>{var i,r,o,c=e[0]||(e[0]=[]);((e,t)=>{Yo(e,"name",{value:t,configurable:!0})})(a,n);for(var l=s.length-1;l>=0;l--)o=Uo(0,n,r={},e[3],c),i=(0,s[l])(a,o),r._=1,Ko(i)&&(a=i);return((e,t)=>{((e,t,n)=>{t in e?Yo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(t,Bo("metadata"),e[3])})(e,a),a})(Ho,0,"ExamplesPage",qo,Xo),((e,t,n)=>{for(var s=0,a=Ho[0],i=a&&a.length;s<i;s++)a[s].call(n)})(0,0,Xo);export{Xo as ExamplesPage};
