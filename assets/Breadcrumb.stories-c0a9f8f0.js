import{j as b,a as B,F as A}from"./jsx-runtime-c9381026.js";import{r as s,a as Se,R as we}from"./index-8b3efc3f.js";import"./index-a38d0dca.js";import{d as $}from"./styled-components.browser.esm-9b53ad8e.js";import{I as U}from"./index-28fff672.js";import"./_commonjsHelpers-de833af9.js";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));const q="popstate";function Pe(e){e===void 0&&(e={});function t(r,a){let{pathname:o,search:i,hash:u}=r.location;return F("",{pathname:o,search:i,hash:u},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(r,a){return typeof a=="string"?a:j(a)}return Ee(t,n,null,e)}function x(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function _e(){return Math.random().toString(36).substr(2,8)}function G(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,n,r){return n===void 0&&(n=null),I({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?M(t):t,{state:n,key:t&&t.key||r||_e()})}function j(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function M(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ee(e,t,n,r){r===void 0&&(r={});let{window:a=document.defaultView,v5Compat:o=!1}=r,i=a.history,u=S.Pop,c=null,l=h();l==null&&(l=0,i.replaceState(I({},i.state,{idx:l}),""));function h(){return(i.state||{idx:null}).idx}function p(){u=S.Pop;let f=h(),m=f==null?null:f-l;l=f,c&&c({action:u,location:d.location,delta:m})}function v(f,m){u=S.Push;let g=F(d.location,f,m);n&&n(g,f),l=h()+1;let y=G(g,l),C=d.createHref(g);try{i.pushState(y,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;a.location.assign(C)}o&&c&&c({action:u,location:d.location,delta:1})}function w(f,m){u=S.Replace;let g=F(d.location,f,m);n&&n(g,f),l=h();let y=G(g,l),C=d.createHref(g);i.replaceState(y,"",C),o&&c&&c({action:u,location:d.location,delta:0})}function R(f){let m=a.location.origin!=="null"?a.location.origin:a.location.href,g=typeof f=="string"?f:j(f);return g=g.replace(/ $/,"%20"),x(m,"No window.location.(origin|href) available to create URL for href: "+g),new URL(g,m)}let d={get action(){return u},get location(){return e(a,i)},listen(f){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(q,p),c=f,()=>{a.removeEventListener(q,p),c=null}},createHref(f){return t(a,f)},createURL:R,encodeLocation(f){let m=R(f);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:v,replace:w,go(f){return i.go(f)}};return d}var X;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(X||(X={}));function pe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Ue(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:a=""}=typeof e=="string"?M(e):e;return{pathname:n?n.startsWith("/")?n:Ie(n,t):t,search:Le(r),hash:Ne(a)}}function Ie(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function D(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oe(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function de(e,t){let n=Oe(e);return t?n.map((r,a)=>a===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function me(e,t,n,r){r===void 0&&(r=!1);let a;typeof e=="string"?a=M(e):(a=I({},e),x(!a.pathname||!a.pathname.includes("?"),D("?","pathname","search",a)),x(!a.pathname||!a.pathname.includes("#"),D("#","pathname","hash",a)),x(!a.search||!a.search.includes("#"),D("#","search","hash",a)));let o=e===""||a.pathname==="",i=o?"/":a.pathname,u;if(i==null)u=n;else{let p=t.length-1;if(!r&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),p-=1;a.pathname=v.join("/")}u=p>=0?t[p]:"/"}let c=Ue(a,u),l=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||h)&&(c.pathname+="/"),c}const ge=e=>e.join("/").replace(/\/\/+/g,"/"),Le=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ne=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,ve=["post","put","patch","delete"];new Set(ve);const Te=["get",...ve];new Set(Te);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}const ye=s.createContext(null),E=s.createContext(null),H=s.createContext(null),W=s.createContext({outlet:null,matches:[],isDataRoute:!1});function Be(e,t){let{relative:n}=t===void 0?{}:t;k()||x(!1);let{basename:r,navigator:a}=s.useContext(E),{hash:o,pathname:i,search:u}=xe(e,{relative:n}),c=i;return r!=="/"&&(c=i==="/"?r:ge([r,i])),a.createHref({pathname:c,search:u,hash:o})}function k(){return s.useContext(H)!=null}function K(){return k()||x(!1),s.useContext(H).location}function be(e){s.useContext(E).static||s.useLayoutEffect(e)}function je(){let{isDataRoute:e}=s.useContext(W);return e?Ae():ze()}function ze(){k()||x(!1);let e=s.useContext(ye),{basename:t,future:n,navigator:r}=s.useContext(E),{matches:a}=s.useContext(W),{pathname:o}=K(),i=JSON.stringify(de(a,n.v7_relativeSplatPath)),u=s.useRef(!1);return be(()=>{u.current=!0}),s.useCallback(function(l,h){if(h===void 0&&(h={}),!u.current)return;if(typeof l=="number"){r.go(l);return}let p=me(l,JSON.parse(i),o,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:ge([t,p.pathname])),(h.replace?r.replace:r.push)(p,h.state,h)},[t,r,i,o,e])}function xe(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=s.useContext(E),{matches:a}=s.useContext(W),{pathname:o}=K(),i=JSON.stringify(de(a,r.v7_relativeSplatPath));return s.useMemo(()=>me(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}var Ce=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Ce||{}),Re=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Re||{});function Me(e){let t=s.useContext(ye);return t||x(!1),t}function We(e){let t=s.useContext(W);return t||x(!1),t}function ke(e){let t=We(),n=t.matches[t.matches.length-1];return n.route.id||x(!1),n.route.id}function Ae(){let{router:e}=Me(Ce.UseNavigateStable),t=ke(Re.UseNavigateStable),n=s.useRef(!1);return be(()=>{n.current=!0}),s.useCallback(function(a,o){o===void 0&&(o={}),n.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,z({fromRouteId:t},o)))},[e,t])}const Y={};function De(e,t){Y[t]||(Y[t]=!0,console.warn(t))}const _=(e,t,n)=>De(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function Fe(e,t){e!=null&&e.v7_startTransition||_("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),!(e!=null&&e.v7_relativeSplatPath)&&(!t||!t.v7_relativeSplatPath)&&_("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(t.v7_fetcherPersist||_("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),t.v7_normalizeFormMethod||_("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),t.v7_partialHydration||_("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),t.v7_skipActionErrorRevalidation||_("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}function Ve(e){let{basename:t="/",children:n=null,location:r,navigationType:a=S.Pop,navigator:o,static:i=!1,future:u}=e;k()&&x(!1);let c=t.replace(/^\/*/,"/"),l=s.useMemo(()=>({basename:c,navigator:o,static:i,future:z({v7_relativeSplatPath:!1},u)}),[c,u,o,i]);typeof r=="string"&&(r=M(r));let{pathname:h="/",search:p="",hash:v="",state:w=null,key:R="default"}=r,d=s.useMemo(()=>{let f=pe(h,c);return f==null?null:{location:{pathname:f,search:p,hash:v,state:w,key:R},navigationType:a}},[c,h,p,v,w,R,a]);return d==null?null:s.createElement(E.Provider,{value:l},s.createElement(H.Provider,{children:n,value:d}))}new Promise(()=>{});/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function Je(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,o;for(o=0;o<r.length;o++)a=r[o],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function $e(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function He(e,t){return e.button===0&&(!t||t==="_self")&&!$e(e)}const Ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qe="6";try{window.__reactRouterVersion=qe}catch{}const Ge="startTransition",Q=Se[Ge];function Xe(e){let{basename:t,children:n,future:r,window:a}=e,o=s.useRef();o.current==null&&(o.current=Pe({window:a,v5Compat:!0}));let i=o.current,[u,c]=s.useState({action:i.action,location:i.location}),{v7_startTransition:l}=r||{},h=s.useCallback(p=>{l&&Q?Q(()=>c(p)):c(p)},[c,l]);return s.useLayoutEffect(()=>i.listen(h),[i,h]),s.useEffect(()=>Fe(r),[r]),s.createElement(Ve,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,future:r})}const Ye=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Qe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ze=s.forwardRef(function(t,n){let{onClick:r,relative:a,reloadDocument:o,replace:i,state:u,target:c,to:l,preventScrollReset:h,viewTransition:p}=t,v=Je(t,Ke),{basename:w}=s.useContext(E),R,d=!1;if(typeof l=="string"&&Qe.test(l)&&(R=l,Ye))try{let y=new URL(window.location.href),C=l.startsWith("//")?new URL(y.protocol+l):new URL(l),P=pe(C.pathname,w);C.origin===y.origin&&P!=null?l=P+C.search+C.hash:d=!0}catch{}let f=Be(l,{relative:a}),m=et(l,{replace:i,state:u,target:c,preventScrollReset:h,relative:a,viewTransition:p});function g(y){r&&r(y),y.defaultPrevented||m(y)}return s.createElement("a",V({},v,{href:R||f,onClick:d||o?r:g,ref:n,target:c}))});var Z;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Z||(Z={}));var ee;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ee||(ee={}));function et(e,t){let{target:n,replace:r,state:a,preventScrollReset:o,relative:i,viewTransition:u}=t===void 0?{}:t,c=je(),l=K(),h=xe(e,{relative:i});return s.useCallback(p=>{if(He(p,n)){p.preventDefault();let v=r!==void 0?r:j(l)===j(h);c(e,{replace:v,state:a,preventScrollReset:o,relative:i,viewTransition:u})}},[l,c,h,r,a,n,e,o,i,u])}const tt=$.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`,nt=$.span`
  color: rgba(0, 0, 0, 0.45);
  
  &:last-child {
    color: rgba(0, 0, 0, 0.85);
  }
  
  a {
    color: rgba(0, 0, 0, 0.45);
    text-decoration: none;
    transition: color 0.2s;
    
    &:hover {
      color: #1890ff;
    }
  }
`,rt=$.span`
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
`,J=({items:e=[],separator:t="/"})=>b(tt,{children:e.map((n,r)=>{const a=r===e.length-1;return B(we.Fragment,{children:[b(nt,{children:n.path!=null&&!a?b(Ze,{to:n.path,children:n.title}):n.title}),!a&&b(rt,{children:t})]},r)})});try{J.displayName="Breadcrumb",J.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"BreadcrumbItemType[]"}},separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const ut={title:"Navigator/Breadcrumb",component:J,decorators:[e=>b(Xe,{children:b(e,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{description:"Breadcrumb items",control:{disable:!0}},separator:{description:"Separator between items",control:"text"}}},O={args:{items:[{title:"Home",path:"/"},{title:"Category",path:"/category"},{title:"Detail"}]}},L={args:{separator:b(U,{name:"chevronright",size:12}),items:[{title:"Home",path:"/"},{title:"Category",path:"/category"},{title:"Detail"}]}},N={args:{items:[{title:"Home"}]}},T={args:{items:[{title:B(A,{children:[b(U,{name:"home",size:14,style:{marginRight:4}}),"Home"]}),path:"/"},{title:B(A,{children:[b(U,{name:"folder",size:14,style:{marginRight:4}}),"Category"]}),path:"/category"},{title:B(A,{children:[b(U,{name:"file",size:14,style:{marginRight:4}}),"Detail"]})}],separator:b(U,{name:"chevronright",size:12})}};var te,ne,re;O.parameters={...O.parameters,docs:{...(te=O.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Home",
      path: "/"
    }, {
      title: "Category",
      path: "/category"
    }, {
      title: "Detail"
    }]
  }
}`,...(re=(ne=O.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ae,ie,oe;L.parameters={...L.parameters,docs:{...(ae=L.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    separator: <Icon name="chevronright" size={12} />,
    items: [{
      title: "Home",
      path: "/"
    }, {
      title: "Category",
      path: "/category"
    }, {
      title: "Detail"
    }]
  }
}`,...(oe=(ie=L.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var se,le,ce;N.parameters={...N.parameters,docs:{...(se=N.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Home"
    }]
  }
}`,...(ce=(le=N.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var ue,fe,he;T.parameters={...T.parameters,docs:{...(ue=T.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    items: [{
      title: <>
            <Icon name="home" size={14} style={{
          marginRight: 4
        }} />
            Home
          </>,
      path: "/"
    }, {
      title: <>
            <Icon name="folder" size={14} style={{
          marginRight: 4
        }} />
            Category
          </>,
      path: "/category"
    }, {
      title: <>
            <Icon name="file" size={14} style={{
          marginRight: 4
        }} />
            Detail
          </>
    }],
    separator: <Icon name="chevronright" size={12} />
  }
}`,...(he=(fe=T.parameters)==null?void 0:fe.docs)==null?void 0:he.source}}};const ft=["DefaultBreadcrumb","CustomSeparator","SingleItemBreadcrumb","WithIcons"];export{L as CustomSeparator,O as DefaultBreadcrumb,N as SingleItemBreadcrumb,T as WithIcons,ft as __namedExportsOrder,ut as default};
