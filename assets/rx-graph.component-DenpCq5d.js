import{o as e,O as t,R as s,a,C as r}from"./rx-element-D2_hkJVr.js";import{h as i,c as n,t as o}from"./tags-gOzTcAMG.js";import{m as l,c}from"./combineLatest-D9XzB5NX.js";import{R as h}from"./rx-for-C0nBfAd2.js";function d(s,a){const r=arguments.length>=2;return i=>new t(t=>function(t,s,a,r,i,n,o){let l=a,c=s,h=0;n.subscribe(e({destination:o,next:e=>{const s=h++;c=l?t(c,e,s):(l=!0,e),o.next(c)},complete:void 0}))}(s,a,r,0,0,i,t))}var p,u,m,b,g,v,f,y,x,w=Object.create,$=Object.defineProperty,k=Object.getOwnPropertyDescriptor,S=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),O=e=>{throw TypeError(e)},j=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,C=(e,t)=>$(e,"name",{value:t,configurable:!0}),P=["class","method","getter","setter","accessor","field","value","get","set"],R=e=>void 0!==e&&"function"!=typeof e?O("Function expected"):e,M=(e,t,s,a,r)=>({kind:P[e],name:t,metadata:a,addInitializer:e=>s._?O("Already initialized"):r.push(R(e||null))}),E=(e,t,s,a)=>{for(var r=0,i=e[t>>1],n=i&&i.length;r<n;r++)1&t?i[r].call(s):a=i[r].call(s,a);return a},T=(e,t,s,a,r,i)=>{var n,o,l,c,h,d=7&t,p=!!(8&t),u=!!(16&t),m=d>3?e.length+1:d?p?1:2:0,b=P[d+5],g=d>3&&(e[m-1]=[]),v=e[m]||(e[m]=[]),f=d&&(!u&&!p&&(r=r.prototype),d<5&&(d>3||!u)&&k(d<4?r:{get[s](){return I(this,i)},set[s](e){return L(this,i,e)}},s));d?u&&d<4&&C(i,(d>2?"set ":d>1?"get ":"")+s):C(r,s);for(var y=a.length-1;y>=0;y--)c=M(d,s,l={},e[3],v),d&&(c.static=p,c.private=u,h=c.access={has:u?e=>W(r,e):e=>s in e},3^d&&(h.get=u?e=>(1^d?I:D)(e,r,4^d?i:f.get):e=>e[s]),d>2&&(h.set=u?(e,t)=>L(e,r,t,4^d?i:f.set):(e,t)=>e[s]=t)),o=(0,a[y])(d?d<4?u?i:f[b]:d>4?void 0:{get:f.get,set:f.set}:r,c),l._=1,4^d||void 0===o?R(o)&&(d>4?g.unshift(o):d?u?i=o:f[b]=o:r=o):"object"!=typeof o||null===o?O("Object expected"):(R(n=o.get)&&(f.get=n),R(n=o.set)&&(f.set=n),R(n=o.init)&&g.unshift(n));return d||((e,t)=>{j(t,S("metadata"),e[3])})(e,r),f&&$(r,s,f),u?4^d?i:f:r},z=(e,t,s)=>t.has(e)||O("Cannot "+s),W=(e,t)=>Object(t)!==t?O('Cannot use the "in" operator on this value'):e.has(t),I=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),_=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),L=(e,t,s,a)=>(z(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),D=(e,t,s)=>(z(e,t,"access private method"),s);const F=i`
    <div class="track"
         onpointerdown="grab($event)"
         onpointermove="drag($event)"
         onpointerup="release($event)">
        <div class="fill" [style]="fillStyle"></div>
        <div class="thumb" [style]="thumbStyle"></div>
    </div>
`,H=n`
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
`,A=o`@Component({
    selector: 'yaw-slider',
    template: \`${F}\`,
    styles: \`${H}\`,
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
}`;g=[r({selector:"yaw-slider",template:F,styles:H})];class G extends(b=s,m=[a],u=[a],p=[a],b){constructor(){super(...arguments),_(this,f,E(v,8,this,0)),E(v,11,this),_(this,y,E(v,12,this,0)),E(v,15,this),_(this,x,E(v,16,this,100)),E(v,19,this)}grab(e){e.currentTarget.setPointerCapture(e.pointerId),this.apply(e)}drag(e){e.currentTarget.hasPointerCapture(e.pointerId)&&this.apply(e)}release(e){e.currentTarget.releasePointerCapture(e.pointerId)}apply(e){const t=e.currentTarget.getBoundingClientRect(),s=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width));this.value=Math.round(this.min+s*(this.max-this.min))}ratio(e){return(e-this.min)/(this.max-this.min)}get fillStyle$(){return this.value$.pipe(l(e=>`width: ${String(100*this.ratio(e))}%`))}get thumbStyle$(){return this.value$.pipe(l(e=>`left: ${String(100*this.ratio(e))}%`))}}var B;B=b,v=[,,,w(B?.[S("metadata")]??null)],f=new WeakMap,y=new WeakMap,x=new WeakMap,T(v,4,"value",m,G,f),T(v,4,"min",u,G,y),T(v,4,"max",p,G,x),G=T(v,0,"YawSlider",g,G),j(G,"__stateTypes",{value:"number",min:"number",max:"number"}),E(v,1,G);var X,Y,q,J,K,N,Q,U,V,Z=Object.create,ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,se=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ae=e=>{throw TypeError(e)},re=(e,t,s)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,ie=(e,t)=>ee(e,"name",{value:t,configurable:!0}),ne=["class","method","getter","setter","accessor","field","value","get","set"],oe=e=>void 0!==e&&"function"!=typeof e?ae("Function expected"):e,le=(e,t,s,a,r)=>({kind:ne[e],name:t,metadata:a,addInitializer:e=>s._?ae("Already initialized"):r.push(oe(e||null))}),ce=(e,t,s,a)=>{for(var r=0,i=e[t>>1],n=i&&i.length;r<n;r++)1&t?i[r].call(s):a=i[r].call(s,a);return a},he=(e,t,s,a,r,i)=>{var n,o,l,c,h,d=7&t,p=!!(8&t),u=!!(16&t),m=d>3?e.length+1:d?p?1:2:0,b=ne[d+5],g=d>3&&(e[m-1]=[]),v=e[m]||(e[m]=[]),f=d&&(!u&&!p&&(r=r.prototype),d<5&&(d>3||!u)&&te(d<4?r:{get[s](){return ue(this,i)},set[s](e){return be(this,i,e)}},s));d?u&&d<4&&ie(i,(d>2?"set ":d>1?"get ":"")+s):ie(r,s);for(var y=a.length-1;y>=0;y--)c=le(d,s,l={},e[3],v),d&&(c.static=p,c.private=u,h=c.access={has:u?e=>pe(r,e):e=>s in e},3^d&&(h.get=u?e=>(1^d?ue:ge)(e,r,4^d?i:f.get):e=>e[s]),d>2&&(h.set=u?(e,t)=>be(e,r,t,4^d?i:f.set):(e,t)=>e[s]=t)),o=(0,a[y])(d?d<4?u?i:f[b]:d>4?void 0:{get:f.get,set:f.set}:r,c),l._=1,4^d||void 0===o?oe(o)&&(d>4?g.unshift(o):d?u?i=o:f[b]=o:r=o):"object"!=typeof o||null===o?ae("Object expected"):(oe(n=o.get)&&(f.get=n),oe(n=o.set)&&(f.set=n),oe(n=o.init)&&g.unshift(n));return d||((e,t)=>{re(t,se("metadata"),e[3])})(e,r),f&&ee(r,s,f),u?4^d?i:f:r},de=(e,t,s)=>t.has(e)||ae("Cannot "+s),pe=(e,t)=>Object(t)!==t?ae('Cannot use the "in" operator on this value'):e.has(t),ue=(e,t,s)=>(de(e,t,"read from private field"),s?s.call(e):t.get(e)),me=(e,t,s)=>t.has(e)?ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),be=(e,t,s,a)=>(de(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),ge=(e,t,s)=>(de(e,t,"access private method"),s);const ve=i`
    <label>H <em>{{hue}}°</em></label>
    <yaw-slider [(value)]="hue" min="0" max="360"></yaw-slider>

    <label>S <em>{{sat}}%</em></label>
    <yaw-slider [(value)]="sat" min="0" max="100"></yaw-slider>

    <label>L <em>{{lit}}%</em></label>
    <yaw-slider [(value)]="lit" min="0" max="100"></yaw-slider>

    <code class="out">{{css}}</code>
    <div class="swatch" [style]="swatchStyle"></div>
`,fe=n`
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
`,ye=o`@Component({
    selector: 'color-playground',
    template: \`${ve}\`,
    styles: \`${fe}\`,
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
}`;K=[r({selector:"color-playground",template:ve,styles:fe})];class xe extends(J=s,q=[a],Y=[a],X=[a],J){constructor(){super(...arguments),me(this,Q,ce(N,8,this,200)),ce(N,11,this),me(this,U,ce(N,12,this,70)),ce(N,15,this),me(this,V,ce(N,16,this,55)),ce(N,19,this)}get css$(){return c([this.hue$,this.sat$,this.lit$]).pipe(l(([e,t,s])=>`hsl(${String(e)} ${String(t)}% ${String(s)}%)`))}get swatchStyle$(){return this.css$.pipe(l(e=>`background: ${e}`))}}var we;N=(e=>[,,,Z(e?.[se("metadata")]??null)])(J),Q=new WeakMap,U=new WeakMap,V=new WeakMap,he(N,4,"hue",q,xe,Q),he(N,4,"sat",Y,xe,U),he(N,4,"lit",X,xe,V),we=xe=he(N,0,"ColorPlayground",K,xe),re(we,"__stateTypes",{hue:"number",sat:"number",lit:"number"}),ce(N,1,xe);var $e,ke,Se,Oe,je,Ce,Pe,Re=Object.create,Me=Object.defineProperty,Ee=Object.getOwnPropertyDescriptor,Te=(e,t)=>(t=Symbol[e])?t:Symbol.for("Symbol."+e),ze=e=>{throw TypeError(e)},We=(e,t,s)=>t in e?Me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ie=(e,t)=>Me(e,"name",{value:t,configurable:!0}),_e=["class","method","getter","setter","accessor","field","value","get","set"],Le=e=>void 0!==e&&"function"!=typeof e?ze("Function expected"):e,De=(e,t,s,a,r)=>({kind:_e[e],name:t,metadata:a,addInitializer:e=>s._?ze("Already initialized"):r.push(Le(e||null))}),Fe=(e,t,s,a)=>{for(var r=0,i=e[t>>1],n=i&&i.length;r<n;r++)1&t?i[r].call(s):a=i[r].call(s,a);return a},He=(e,t,s,a,r,i)=>{var n,o,l,c,h,d=7&t,p=!!(8&t),u=!!(16&t),m=d>3?e.length+1:d?p?1:2:0,b=_e[d+5],g=d>3&&(e[m-1]=[]),v=e[m]||(e[m]=[]),f=d&&(!u&&!p&&(r=r.prototype),d<5&&(d>3||!u)&&Ee(d<4?r:{get[s](){return Xe(this,i)},set[s](e){return qe(this,i,e)}},s));d?u&&d<4&&Ie(i,(d>2?"set ":d>1?"get ":"")+s):Ie(r,s);for(var y=a.length-1;y>=0;y--)c=De(d,s,l={},e[3],v),d&&(c.static=p,c.private=u,h=c.access={has:u?e=>Be(r,e):e=>s in e},3^d&&(h.get=u?e=>(1^d?Xe:Je)(e,r,4^d?i:f.get):e=>e[s]),d>2&&(h.set=u?(e,t)=>qe(e,r,t,4^d?i:f.set):(e,t)=>e[s]=t)),o=(0,a[y])(d?d<4?u?i:f[b]:d>4?void 0:{get:f.get,set:f.set}:r,c),l._=1,4^d||void 0===o?Le(o)&&(d>4?g.unshift(o):d?u?i=o:f[b]=o:r=o):"object"!=typeof o||null===o?ze("Object expected"):(Le(n=o.get)&&(f.get=n),Le(n=o.set)&&(f.set=n),Le(n=o.init)&&g.unshift(n));return d||((e,t)=>{We(t,Te("metadata"),e[3])})(e,r),f&&Me(r,s,f),u?4^d?i:f:r},Ae=(e,t,s)=>We(e,"symbol"!=typeof t?t+"":t,s),Ge=(e,t,s)=>t.has(e)||ze("Cannot "+s),Be=(e,t)=>Object(t)!==t?ze('Cannot use the "in" operator on this value'):e.has(t),Xe=(e,t,s)=>(Ge(e,t,"read from private field"),s?s.call(e):t.get(e)),Ye=(e,t,s)=>t.has(e)?ze("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),qe=(e,t,s,a)=>(Ge(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),Je=(e,t,s)=>(Ge(e,t,"access private method"),s);const Ke=i`
    <div class="legend" rx-for="{ label, color } of legendItems by label">
        <span><span class="dot" [style.background]="color"></span>{{label}}</span>
    </div>
    <canvas #canvas></canvas>
`,Ne=n`
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
`,Qe=o`@Component({
    selector: 'rx-graph',
    directives: [RxFor],
    template: \`${Ke}\`,
    styles: \`${Ne}\`,
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
}`;Oe=[r({selector:"rx-graph",directives:[h],template:Ke,styles:Ne})];class Ue extends(Se=s,ke=[a],$e=[a],Se){constructor(){super(...arguments),Ye(this,Ce,Fe(je,8,this,{})),Fe(je,11,this),Ye(this,Pe,Fe(je,12,this,{})),Fe(je,15,this),Ae(this,"canvas"),Ae(this,"ro"),Ae(this,"data",new Map),Ae(this,"subs",[])}get legendItems$(){return this.config$.pipe(l(e=>Object.values(e)))}onRender(){this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.canvas),this.resize(),this.series$.subscribe(e=>this.subscribeSeries(e))}onDestroy(){this.ro?.disconnect(),this.subs.forEach(e=>e.unsubscribe())}subscribeSeries(e){this.subs.forEach(e=>e.unsubscribe()),this.subs=[],this.data.clear();for(const[t,s]of Object.entries(e))this.subs.push(s.subscribe(e=>{this.data.set(t,e),this.draw()}))}resize(){this.canvas.width=this.canvas.clientWidth*devicePixelRatio,this.canvas.height=this.canvas.clientHeight*devicePixelRatio,this.draw()}draw(){const e=this.canvas.getContext("2d");if(!e)return;const t=this.canvas.width,s=this.canvas.height;e.clearRect(0,0,t,s);const a=Object.keys(this.config),r=Math.max(0,...a.map(e=>this.data.get(e)?.length??0));if(r<2)return;const i=t/(r-1);for(const n of a){const t=this.config[n];if(!t)continue;const a=this.data.get(n)??[];if(a.length<2)continue;const o=r-a.length,l=Math.max(1,...a);e.beginPath();for(let r=0;r<a.length;r++){const t=(o+r)*i,n=s-a[r]/l*s;0===r?e.moveTo(t,n):e.lineTo(t,n)}e.strokeStyle=t.color,e.lineWidth=(t.width??1)*devicePixelRatio,e.stroke()}}}je=(e=>[,,,Re(e?.[Te("metadata")]??null)])(Se),Ce=new WeakMap,Pe=new WeakMap,He(je,4,"config",ke,Ue,Ce),He(je,4,"series",$e,Ue,Pe),Ue=He(je,0,"Graph",Oe,Ue),Ae(Ue,"__stateTypes",{config:"Record",series:"Record"}),Fe(je,1,Ue);export{ye as C,Qe as G,A as S,d as s};
