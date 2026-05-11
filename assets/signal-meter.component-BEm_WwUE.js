import{R as t,a as e,C as s}from"./rx-element-D2_hkJVr.js";import{h as r,c as a,t as i}from"./tags-gOzTcAMG.js";import{c as n,m as l}from"./combineLatest-D9XzB5NX.js";var o,h,c,p,d,g,u,m,v,f,b,w,y,$,S,k=Object.create,x=Object.defineProperty,j=Object.getOwnPropertyDescriptor,M=(t,e)=>(e=Symbol[t])?e:Symbol.for("Symbol."+t),O=t=>{throw TypeError(t)},E=(t,e,s)=>e in t?x(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,W=(t,e)=>x(t,"name",{value:e,configurable:!0}),C=["class","method","getter","setter","accessor","field","value","get","set"],z=t=>void 0!==t&&"function"!=typeof t?O("Function expected"):t,_=(t,e,s,r,a)=>({kind:C[t],name:e,metadata:r,addInitializer:t=>s._?O("Already initialized"):a.push(z(t||null))}),F=(t,e,s,r)=>{for(var a=0,i=t[e>>1],n=i&&i.length;a<n;a++)1&e?i[a].call(s):r=i[a].call(s,r);return r},L=(t,e,s,r,a,i)=>{var n,l,o,h,c,p=7&e,d=!!(8&e),g=!!(16&e),u=p>3?t.length+1:p?d?1:2:0,m=C[p+5],v=p>3&&(t[u-1]=[]),f=t[u]||(t[u]=[]),b=p&&(!g&&!d&&(a=a.prototype),p<5&&(p>3||!g)&&j(p<4?a:{get[s](){return R(this,i)},set[s](t){return A(this,i,t)}},s));p?g&&p<4&&W(i,(p>2?"set ":p>1?"get ":"")+s):W(a,s);for(var w=r.length-1;w>=0;w--)h=_(p,s,o={},t[3],f),p&&(h.static=d,h.private=g,c=h.access={has:g?t=>P(a,t):t=>s in t},3^p&&(c.get=g?t=>(1^p?R:B)(t,a,4^p?i:b.get):t=>t[s]),p>2&&(c.set=g?(t,e)=>A(t,a,e,4^p?i:b.set):(t,e)=>t[s]=e)),l=(0,r[w])(p?p<4?g?i:b[m]:p>4?void 0:{get:b.get,set:b.set}:a,h),o._=1,4^p||void 0===l?z(l)&&(p>4?v.unshift(l):p?g?i=l:b[m]=l:a=l):"object"!=typeof l||null===l?O("Object expected"):(z(n=l.get)&&(b.get=n),z(n=l.set)&&(b.set=n),z(n=l.init)&&v.unshift(n));return p||((t,e)=>{E(e,M("metadata"),t[3])})(t,a),b&&x(a,s,b),g?4^p?i:b:a},N=(t,e,s)=>e.has(t)||O("Cannot "+s),P=(t,e)=>Object(e)!==e?O('Cannot use the "in" operator on this value'):t.has(e),R=(t,e,s)=>(N(t,e,"read from private field"),s?s.call(t):e.get(t)),T=(t,e,s)=>e.has(t)?O("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),A=(t,e,s,r)=>(N(t,e,"write to private field"),r?r.call(t,s):e.set(t,s),s),B=(t,e,s)=>(N(t,e,"access private method"),s);const D=r`
    <div class="meter" [style]="meterStyle">
        <svg viewBox="0 0 100 100" class="ring">
            <circle cx="50" cy="50" r="42" class="track"></circle>
            <circle cx="50" cy="50" r="42" class="fill"></circle>
        </svg>
        <div class="readout">
            <div class="value">{{displayStrength}}</div>
            <div class="unit">%</div>
        </div>
    </div>
`,I=a`
    :host { display: block; }
    .meter { position: relative; width: 14rem; height: 14rem; }
    .ring { width: 100%; height: 100%; transform: rotate(-90deg); overflow: visible; }
    .track { fill: none; stroke: #161616; stroke-width: 6; }
    .fill { fill: none; stroke-width: 7; stroke-linecap: round;
            stroke-dasharray: 264;
            stroke: hsl(var(--hue), 85%, var(--lit));
            stroke-dashoffset: calc(264 - 264 * var(--pct, 0));
            filter: drop-shadow(0 0 var(--glow) hsl(var(--hue), 90%, var(--lit))); }
    .readout { position: absolute; inset: 0; display: flex;
               align-items: center; justify-content: center;
               gap: 0.2rem; pointer-events: none; }
    .value { font-size: 2.8rem; font-weight: 800; font-family: var(--font-mono);
             color: hsl(var(--hue), 90%, var(--lit));
             text-shadow: 0 0 var(--glow) hsl(var(--hue), 90%, var(--lit)); }
    .unit { font-size: 1rem; color: var(--dim); font-family: var(--font-mono); margin-top: 1rem; }
`,q=i`@Component({
    selector: 'signal-meter',
    template: \`${D}\`,
    styles: \`${I}\`,
})
export class SignalMeter extends RxElement {
    @state strength = 0;
    @state hueStart = 140;
    @state hueEnd = 340;
    @state lightness = 62;
    @state glow = 14;
    @state dp = 0;

    get displayStrength$(): Observable<string> {
        return combineLatest([this.strength$, this.dp$]).pipe(
            map(([s, dp]) => Number(s).toFixed(dp)),
        );
    }

    get meterStyle$(): Observable<string> {
        return combineLatest([this.strength$, this.hueStart$, this.hueEnd$, this.lightness$, this.glow$]).pipe(
            map(([s, start, end, lit, glow]) => {
                const pct = s / 100;
                const hue = start + pct * (end - start);
                return \`--pct: \${pct}; --hue: \${hue}; --lit: \${lit}%; --glow: \${glow}px\`;
            }),
        );
    }
}`;m=[s({selector:"signal-meter",template:D,styles:I})];class G extends(u=t,g=[e],d=[e],p=[e],c=[e],h=[e],o=[e],u){constructor(){super(...arguments),T(this,f,F(v,8,this,0)),F(v,11,this),T(this,b,F(v,12,this,140)),F(v,15,this),T(this,w,F(v,16,this,340)),F(v,19,this),T(this,y,F(v,20,this,62)),F(v,23,this),T(this,$,F(v,24,this,14)),F(v,27,this),T(this,S,F(v,28,this,0)),F(v,31,this)}get displayStrength$(){return n([this.strength$,this.dp$]).pipe(l(([t,e])=>Number(t).toFixed(e)))}get meterStyle$(){return n([this.strength$,this.hueStart$,this.hueEnd$,this.lightness$,this.glow$]).pipe(l(([t,e,s,r,a])=>{const i=t/100,n=e+i*(s-e);return`--pct: ${String(i)}; --hue: ${String(n)}; --lit: ${String(r)}%; --glow: ${String(a)}px`}))}}var H;H=u,v=[,,,k(H?.[M("metadata")]??null)],f=new WeakMap,b=new WeakMap,w=new WeakMap,y=new WeakMap,$=new WeakMap,S=new WeakMap,L(v,4,"strength",g,G,f),L(v,4,"hueStart",d,G,b),L(v,4,"hueEnd",p,G,w),L(v,4,"lightness",c,G,y),L(v,4,"glow",h,G,$),L(v,4,"dp",o,G,S),G=L(v,0,"SignalMeter",m,G),E(G,"__stateTypes",{strength:"number",hueStart:"number",hueEnd:"number",lightness:"number",glow:"number",dp:"number"}),F(v,1,G);export{q as S};
