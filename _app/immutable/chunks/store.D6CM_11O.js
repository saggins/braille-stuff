import{X as E,_ as P,a3 as Y,a4 as T,v as L,a5 as H,j as A,a6 as M,a7 as C,a8 as $,m as F,a9 as N,aa as X,ab as Z,ac as S,ad as y,a1 as I,a2 as x,Y as b,ae as z,af as G,ag as J,ah as K,ai as Q,Z as U,T as ee,p as re,a as te,I as ae,V as R,u as ne,F as se,i as ie,g as ue}from"./runtime.CNodBR5g.js";import{b as oe}from"./disclose-version.a0T19NJ6.js";function ge(e){E&&P(e)!==null&&Y(e)}let V=!1;function fe(){V||(V=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var r;if(!e.defaultPrevented)for(const a of e.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function W(e){var r=H,a=A;T(null),L(null);try{return e()}finally{T(r),L(a)}}function ye(e,r,a,n=a){e.addEventListener(r,()=>W(a));const s=e.__on_r;s?e.__on_r=()=>{s(),n()}:e.__on_r=n,fe()}const ce=new Set,k=new Set;function le(e,r,a,n){function s(t){if(n.capture||p.call(r,t),!t.cancelBubble)return W(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?C(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function we(e,r,a,n,s){var t={capture:n,passive:s},o=le(e,r,a,t);(r===document.body||r===window||r===document)&&M(()=>{r.removeEventListener(e,o,t)})}function p(e){var D;var r=this,a=r.ownerDocument,n=e.type,s=((D=e.composedPath)==null?void 0:D.call(e))||[],t=s[0]||e.target,o=0,v=e.__root;if(v){var l=s.indexOf(v);if(l!==-1&&(r===document||r===window)){e.__root=r;return}var d=s.indexOf(r);if(d===-1)return;l<=d&&(o=l)}if(t=s[o]||e.target,t!==r){$(e,"currentTarget",{configurable:!0,get(){return t||a}});var m=H,f=A;T(null),L(null);try{for(var i,u=[];t!==null;){var c=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(F(_)){var[q,...B]=_;q.apply(t,[e,...B])}else _.call(t,e)}catch(g){i?u.push(g):i=g}if(e.cancelBubble||c===r||c===null)break;t=c}if(i){for(let g of u)queueMicrotask(()=>{throw g});throw i}}finally{e.__root=r,delete e.currentTarget,T(m),L(f)}}}const de=["touchstart","touchmove"];function _e(e){return de.includes(e)}function Ee(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ve(e,r){return j(e,r)}function Te(e,r){N(),r.intro=r.intro??!1;const a=r.target,n=E,s=b;try{for(var t=P(a);t&&(t.nodeType!==8||t.data!==X);)t=Z(t);if(!t)throw S;y(!0),I(t),x();const o=j(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==z)throw G(),S;return y(!1),o}catch(o){if(o===S)return r.recover===!1&&J(),N(),Y(a),y(!1),ve(e,r);throw o}finally{y(n),I(s)}}const h=new Map;function j(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:o=!0}){N();var v=new Set,l=f=>{for(var i=0;i<f.length;i++){var u=f[i];if(!v.has(u)){v.add(u);var c=_e(u);r.addEventListener(u,p,{passive:c});var _=h.get(u);_===void 0?(document.addEventListener(u,p,{passive:c}),h.set(u,1)):h.set(u,_+1)}}};l(K(ce)),k.add(l);var d=void 0,m=Q(()=>{var f=a??r.appendChild(U());return ee(()=>{if(t){re({});var i=ae;i.c=t}s&&(n.$$events=s),E&&oe(f,null),d=e(f,n)||{},E&&(A.nodes_end=b),t&&te()}),()=>{var c;for(var i of v){r.removeEventListener(i,p);var u=h.get(i);--u===0?(document.removeEventListener(i,p),h.delete(i)):h.set(i,u)}k.delete(l),O.delete(d),f!==a&&((c=f.parentNode)==null||c.removeChild(f))}});return O.set(d,m),d}let O=new WeakMap;function Le(e){const r=O.get(e);r&&r()}function he(e,r,a){if(e==null)return r(void 0),R;const n=ne(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let w=!1;function me(e,r,a){const n=a[r]??(a[r]={store:null,source:se(void 0),unsubscribe:R});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=R;else{var s=!0;n.unsubscribe=he(e,t=>{s?n.source.v=t:ue(n.source,t)}),s=!1}return ie(n.source)}function Se(){const e={};return M(()=>{for(var r in e)e[r].unsubscribe()}),e}function Ne(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{Ee as a,me as b,Ne as c,we as e,Te as h,ye as l,ve as m,ge as r,Se as s,Le as u};
