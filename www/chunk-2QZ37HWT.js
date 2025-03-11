import{b as E,d as P}from"./chunk-LEIMCQKJ.js";import{b as k,r as R}from"./chunk-72KDLSWN.js";import{c as D}from"./chunk-74HROR7T.js";import{b as m,g as p,h as N,k as L,l as g}from"./chunk-6NHAVPM2.js";import{f as h}from"./chunk-RW4GY4BD.js";var it=class{constructor(t){m(this,t),this.ionRouteDataChanged=g(this,"ionRouteDataChanged",7),this.url="",this.component=void 0,this.componentProps=void 0,this.beforeLeave=void 0,this.beforeEnter=void 0}onUpdate(t){this.ionRouteDataChanged.emit(t)}onComponentProps(t,e){if(t===e)return;let n=t?Object.keys(t):[],s=e?Object.keys(e):[];if(n.length!==s.length){this.onUpdate(t);return}for(let r of n)if(t[r]!==e[r]){this.onUpdate(t);return}}connectedCallback(){this.ionRouteDataChanged.emit()}static get watchers(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}}},at=class{constructor(t){m(this,t),this.ionRouteRedirectChanged=g(this,"ionRouteRedirectChanged",7),this.from=void 0,this.to=void 0}propDidChange(){this.ionRouteRedirectChanged.emit()}connectedCallback(){this.ionRouteRedirectChanged.emit()}static get watchers(){return{from:["propDidChange"],to:["propDidChange"]}}},f="root",U="forward",A="back",d=t=>"/"+t.filter(n=>n.length>0).join("/"),x=(t,e,n)=>{let s=d(t);return e&&(s="#"+s),n!==void 0&&(s+="?"+n),s},q=(t,e,n,s,r,i,o)=>{let a=x([...l(e).segments,...s],n,o);r===U?t.pushState(i,"",a):t.replaceState(i,"",a)},H=t=>{let e=[];for(let n of t)for(let s of n.segments)if(s[0]===":"){let r=n.params&&n.params[s.slice(1)];if(!r)return null;e.push(r)}else s!==""&&e.push(s);return e},M=(t,e)=>{if(t.length>e.length)return null;if(t.length<=1&&t[0]==="")return e;for(let n=0;n<t.length;n++)if(t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)},F=(t,e,n)=>{let s=l(e).segments,r=n?t.hash.slice(1):t.pathname,i=l(r).segments;return M(s,i)},l=t=>{let e=[""],n;if(t!=null){let s=t.indexOf("?");s>-1&&(n=t.substring(s+1),t=t.substring(0,s)),e=t.split("/").map(r=>r.trim()).filter(r=>r.length>0),e.length===0&&(e=[""])}return{segments:e,queryString:n}},G=t=>{console.group(`[ion-core] ROUTES[${t.length}]`);for(let e of t){let n=[];e.forEach(r=>n.push(...r.segments));let s=e.map(r=>r.id);console.debug(`%c ${d(n)}`,"font-weight: bold; padding-left: 20px","=>	",`(${s.join(", ")})`)}console.groupEnd()},B=t=>{console.group(`[ion-core] REDIRECTS[${t.length}]`);for(let e of t)e.to&&console.debug("FROM: ",`$c ${d(e.from)}`,"font-weight: bold"," TO: ",`$c ${d(e.to.segments)}`,"font-weight: bold");console.groupEnd()},I=(t,e,n,s,r=!1,i)=>h(void 0,null,function*(){try{let o=S(t);if(s>=e.length||!o)return r;yield new Promise(u=>k(o,u));let a=e[s],c=yield o.setRouteId(a.id,a.params,n,i);return c.changed&&(n=f,r=!0),r=yield I(c.element,e,n,s+1,r,i),c.markVisible&&(yield c.markVisible()),r}catch(o){return console.error(o),!1}}),z=t=>h(void 0,null,function*(){let e=[],n,s=t;for(;n=S(s);){let r=yield n.getRouteId();if(r)s=r.element,r.element=void 0,e.push(r);else break}return{ids:e,outlet:n}}),K=()=>S(document.body)?Promise.resolve():new Promise(t=>{window.addEventListener("ionNavWillLoad",()=>t(),{once:!0})}),O=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet",S=t=>{if(!t)return;if(t.matches(O))return t;let e=t.querySelector(O);return e!=null?e:void 0},J=(t,e)=>{let{from:n,to:s}=e;if(s===void 0||n.length>t.length)return!1;for(let r=0;r<n.length;r++){let i=n[r];if(i==="*")return!0;if(i!==t[r])return!1}return n.length===t.length},T=(t,e)=>e.find(n=>J(t,n)),Q=(t,e)=>{let n=Math.min(t.length,e.length),s=0;for(let r=0;r<n;r++){let i=t[r],o=e[r];if(i.id.toLowerCase()!==o.id)break;if(i.params){let a=Object.keys(i.params);if(a.length===o.segments.length){let c=a.map(u=>`:${u}`);for(let u=0;u<c.length&&c[u].toLowerCase()===o.segments[u];u++)s++}}s++}return s},X=(t,e)=>{let n=new C(t),s=!1,r;for(let o=0;o<e.length;o++){let a=e[o].segments;if(a[0]==="")s=!0;else{for(let c of a){let u=n.next();if(c[0]===":"){if(u==="")return null;r=r||[];let $=r[o]||(r[o]={});$[c.slice(1)]=u}else if(u!==c)return null}s=!1}}return(s?s===(n.next()===""):!0)?r?e.map((o,a)=>({id:o.id,segments:o.segments,params:_(o.params,r[a]),beforeEnter:o.beforeEnter,beforeLeave:o.beforeLeave})):e:null},_=(t,e)=>t||e?Object.assign(Object.assign({},t),e):void 0,Y=(t,e)=>{let n=null,s=0;for(let r of e){let i=Q(t,r);i>s&&(n=r,s=i)}return n?n.map((r,i)=>{var o;return{id:r.id,segments:r.segments,params:_(r.params,(o=t[i])===null||o===void 0?void 0:o.params)}}):null},v=(t,e)=>{let n=null,s=0;for(let r of e){let i=X(t,r);if(i!==null){let o=Z(i);o>s&&(s=o,n=i)}}return n},Z=t=>{let e=1,n=1;for(let s of t)for(let r of s.segments)r[0]===":"?e+=Math.pow(1,n):r!==""&&(e+=Math.pow(2,n)),n++;return e},C=class{constructor(e){this.segments=e.slice()}next(){return this.segments.length>0?this.segments.shift():""}},w=(t,e)=>e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null,y=t=>Array.from(t.children).filter(e=>e.tagName==="ION-ROUTE-REDIRECT").map(e=>{let n=w(e,"to");return{from:l(w(e,"from")).segments,to:n==null?void 0:l(n)}}),b=t=>V(j(t)),j=t=>Array.from(t.children).filter(e=>e.tagName==="ION-ROUTE"&&e.component).map(e=>{let n=w(e,"component");return{segments:l(w(e,"url")).segments,id:n.toLowerCase(),params:e.componentProps,beforeLeave:e.beforeLeave,beforeEnter:e.beforeEnter,children:j(e)}}),V=t=>{let e=[];for(let n of t)W([],e,n);return e},W=(t,e,n)=>{if(t=[...t,{id:n.id,segments:n.segments,params:n.params,beforeLeave:n.beforeLeave,beforeEnter:n.beforeEnter}],n.children.length===0){e.push(t);return}for(let s of n.children)W(t,e,s)},ct=class{constructor(t){m(this,t),this.ionRouteWillChange=g(this,"ionRouteWillChange",7),this.ionRouteDidChange=g(this,"ionRouteDidChange",7),this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}componentWillLoad(){return h(this,null,function*(){yield K();let t=yield this.runGuards(this.getSegments());if(t!==!0){if(typeof t=="object"){let{redirect:e}=t,n=l(e);this.setSegments(n.segments,f,n.queryString),yield this.writeNavStateRoot(n.segments,f)}}else yield this.onRoutesChanged()})}componentDidLoad(){window.addEventListener("ionRouteRedirectChanged",R(this.onRedirectChanged.bind(this),10)),window.addEventListener("ionRouteDataChanged",R(this.onRoutesChanged.bind(this),100))}onPopState(){return h(this,null,function*(){let t=this.historyDirection(),e=this.getSegments(),n=yield this.runGuards(e);if(n!==!0)if(typeof n=="object")e=l(n.redirect).segments;else return!1;return this.writeNavStateRoot(e,t)})}onBackButton(t){t.detail.register(0,e=>{this.back(),e()})}canTransition(){return h(this,null,function*(){let t=yield this.runGuards();return t!==!0?typeof t=="object"?t.redirect:!1:!0})}push(t,e="forward",n){return h(this,null,function*(){var s;if(t.startsWith(".")){let o=(s=this.previousPath)!==null&&s!==void 0?s:"/",a=new URL(t,`https://host/${o}`);t=a.pathname+a.search}let r=l(t),i=yield this.runGuards(r.segments);if(i!==!0)if(typeof i=="object")r=l(i.redirect);else return!1;return this.setSegments(r.segments,e,r.queryString),this.writeNavStateRoot(r.segments,e,n)})}back(){return window.history.back(),Promise.resolve(this.waitPromise)}printDebug(){return h(this,null,function*(){G(b(this.el)),B(y(this.el))})}navChanged(t){return h(this,null,function*(){if(this.busy)return console.warn("[ion-router] router is busy, navChanged was cancelled"),!1;let{ids:e,outlet:n}=yield z(window.document.body),s=b(this.el),r=Y(e,s);if(!r)return console.warn("[ion-router] no matching URL for ",e.map(o=>o.id)),!1;let i=H(r);return i?(this.setSegments(i,t),yield this.safeWriteNavState(n,r,f,i,null,e.length),!0):(console.warn("[ion-router] router could not match path because some required param is missing"),!1)})}onRedirectChanged(){let t=this.getSegments();t&&T(t,y(this.el))&&this.writeNavStateRoot(t,f)}onRoutesChanged(){return this.writeNavStateRoot(this.getSegments(),f)}historyDirection(){var t;let e=window;e.history.state===null&&(this.state++,e.history.replaceState(this.state,e.document.title,(t=e.document.location)===null||t===void 0?void 0:t.href));let n=e.history.state,s=this.lastState;return this.lastState=n,n>s||n>=s&&s>0?U:n<s?A:f}writeNavStateRoot(t,e,n){return h(this,null,function*(){if(!t)return console.error("[ion-router] URL is not part of the routing set"),!1;let s=y(this.el),r=T(t,s),i=null;if(r){let{segments:c,queryString:u}=r.to;this.setSegments(c,e,u),i=r.from,t=c}let o=b(this.el),a=v(t,o);return a?this.safeWriteNavState(document.body,a,e,t,i,0,n):(console.error("[ion-router] the path does not match any route"),!1)})}safeWriteNavState(t,e,n,s,r,i=0,o){return h(this,null,function*(){let a=yield this.lock(),c=!1;try{c=yield this.writeNavState(t,e,n,s,r,i,o)}catch(u){console.error(u)}return a(),c})}lock(){return h(this,null,function*(){let t=this.waitPromise,e;return this.waitPromise=new Promise(n=>e=n),t!==void 0&&(yield t),e})}runGuards(){return h(this,arguments,function*(t=this.getSegments(),e){if(e===void 0&&(e=l(this.previousPath).segments),!t||!e)return!0;let n=b(this.el),s=v(e,n),r=s&&s[s.length-1].beforeLeave,i=r?yield r():!0;if(i===!1||typeof i=="object")return i;let o=v(t,n),a=o&&o[o.length-1].beforeEnter;return a?a():!0})}writeNavState(t,e,n,s,r,i=0,o){return h(this,null,function*(){if(this.busy)return console.warn("[ion-router] router is busy, transition was cancelled"),!1;this.busy=!0;let a=this.routeChangeEvent(s,r);a&&this.ionRouteWillChange.emit(a);let c=yield I(t,e,n,i,!1,o);return this.busy=!1,a&&this.ionRouteDidChange.emit(a),c})}setSegments(t,e,n){this.state++,q(window.history,this.root,this.useHash,t,e,this.state,n)}getSegments(){return F(window.location,this.root,this.useHash)}routeChangeEvent(t,e){let n=this.previousPath,s=d(t);if(this.previousPath=s,s===n)return null;let r=e?d(e):null;return{from:n,redirectedFrom:r,to:s}}get el(){return L(this)}},tt=":host{--background:transparent;--color:var(--ion-color-primary, #0054e9);background:var(--background);color:var(--color)}:host(.ion-color){color:var(--ion-color-base)}a{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit}",et=tt,ut=(()=>{let t=class{constructor(e){m(this,e),this.onClick=n=>{P(this.href,n,this.routerDirection,this.routerAnimation)},this.color=void 0,this.href=void 0,this.rel=void 0,this.routerDirection="forward",this.routerAnimation=void 0,this.target=void 0}render(){let e=D(this),n={href:this.href,rel:this.rel,target:this.target};return p(N,{key:"529ceed5beaf92d7b4cc315c82f449eac18310e8",onClick:this.onClick,class:E(this.color,{[e]:!0,"ion-activatable":!0})},p("a",Object.assign({key:"d5f1f8b256695d70bdafd20ff3d1b625963fa2da"},n),p("slot",{key:"613fcdb36a71e076f989551ea21f1d5c118b1cd2"})))}};return t.style=et,t})();export{it as ion_route,at as ion_route_redirect,ct as ion_router,ut as ion_router_link};
