import{j as d}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s,a as Ce,R as we}from"./index-BlmOqGMO.js";import"./index-DuqhnXMO.js";import{d as D}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as E}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";import"./index-fNjTmf9T.js";/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}var R;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(R||(R={}));const K="popstate";function Re(e){e===void 0&&(e={});function t(a,r){let{pathname:o,search:i,hash:u}=a.location;return F("",{pathname:o,search:i,hash:u},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function n(a,r){return typeof r=="string"?r:N(r)}return Pe(t,n,null,e)}function b(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Se(){return Math.random().toString(36).substr(2,8)}function $(e,t){return{usr:e.state,key:e.key,idx:t}}function F(e,t,n,a){return n===void 0&&(n=null),j({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?T(t):t,{state:n,key:t&&t.key||a||Se()})}function N(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function T(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Pe(e,t,n,a){a===void 0&&(a={});let{window:r=document.defaultView,v5Compat:o=!1}=a,i=r.history,u=R.Pop,c=null,l=h();l==null&&(l=0,i.replaceState(j({},i.state,{idx:l}),""));function h(){return(i.state||{idx:null}).idx}function p(){u=R.Pop;let f=h(),g=f==null?null:f-l;l=f,c&&c({action:u,location:m.location,delta:g})}function v(f,g){u=R.Push;let y=F(m.location,f,g);l=h()+1;let x=$(y,l),C=m.createHref(y);try{i.pushState(x,"",C)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;r.location.assign(C)}o&&c&&c({action:u,location:m.location,delta:1})}function S(f,g){u=R.Replace;let y=F(m.location,f,g);l=h();let x=$(y,l),C=m.createHref(y);i.replaceState(x,"",C),o&&c&&c({action:u,location:m.location,delta:0})}function w(f){let g=r.location.origin!=="null"?r.location.origin:r.location.href,y=typeof f=="string"?f:N(f);return y=y.replace(/ $/,"%20"),b(g,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,g)}let m={get action(){return u},get location(){return e(r,i)},listen(f){if(c)throw new Error("A history only accepts one active listener");return r.addEventListener(K,p),c=f,()=>{r.removeEventListener(K,p),c=null}},createHref(f){return t(r,f)},createURL:w,encodeLocation(f){let g=w(f);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:v,replace:S,go(f){return i.go(f)}};return m}var H;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(H||(H={}));function fe(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}function Ue(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:r=""}=typeof e=="string"?T(e):e;return{pathname:n?n.startsWith("/")?n:Ee(n,t):t,search:Le(a),hash:Ie(r)}}function Ee(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(r=>{r===".."?n.length>1&&n.pop():r!=="."&&n.push(r)}),n.length>1?n.join("/"):"/"}function M(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function je(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function he(e,t){let n=je(e);return t?n.map((a,r)=>r===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function pe(e,t,n,a){a===void 0&&(a=!1);let r;typeof e=="string"?r=T(e):(r=j({},e),b(!r.pathname||!r.pathname.includes("?"),M("?","pathname","search",r)),b(!r.pathname||!r.pathname.includes("#"),M("#","pathname","hash",r)),b(!r.search||!r.search.includes("#"),M("#","search","hash",r)));let o=e===""||r.pathname==="",i=o?"/":r.pathname,u;if(i==null)u=n;else{let p=t.length-1;if(!a&&i.startsWith("..")){let v=i.split("/");for(;v[0]==="..";)v.shift(),p-=1;r.pathname=v.join("/")}u=p>=0?t[p]:"/"}let c=Ue(r,u),l=i&&i!=="/"&&i.endsWith("/"),h=(o||i===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(l||h)&&(c.pathname+="/"),c}const de=e=>e.join("/").replace(/\/\/+/g,"/"),Le=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ie=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,me=["post","put","patch","delete"];new Set(me);const Oe=["get",...me];new Set(Oe);/**
 * React Router v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}const ge=s.createContext(null),U=s.createContext(null),V=s.createContext(null),W=s.createContext({outlet:null,matches:[],isDataRoute:!1});function _e(e,t){let{relative:n}=t===void 0?{}:t;z()||b(!1);let{basename:a,navigator:r}=s.useContext(U),{hash:o,pathname:i,search:u}=ye(e,{relative:n}),c=i;return a!=="/"&&(c=i==="/"?a:de([a,i])),r.createHref({pathname:c,search:u,hash:o})}function z(){return s.useContext(V)!=null}function J(){return z()||b(!1),s.useContext(V).location}function ve(e){s.useContext(U).static||s.useLayoutEffect(e)}function Ne(){let{isDataRoute:e}=s.useContext(W);return e?Me():Be()}function Be(){z()||b(!1);let e=s.useContext(ge),{basename:t,future:n,navigator:a}=s.useContext(U),{matches:r}=s.useContext(W),{pathname:o}=J(),i=JSON.stringify(he(r,n.v7_relativeSplatPath)),u=s.useRef(!1);return ve(()=>{u.current=!0}),s.useCallback(function(l,h){if(h===void 0&&(h={}),!u.current)return;if(typeof l=="number"){a.go(l);return}let p=pe(l,JSON.parse(i),o,h.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:de([t,p.pathname])),(h.replace?a.replace:a.push)(p,h.state,h)},[t,a,i,o,e])}function ye(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=s.useContext(U),{matches:r}=s.useContext(W),{pathname:o}=J(),i=JSON.stringify(he(r,a.v7_relativeSplatPath));return s.useMemo(()=>pe(e,JSON.parse(i),o,n==="path"),[e,i,o,n])}var xe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(xe||{}),be=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(be||{});function Te(e){let t=s.useContext(ge);return t||b(!1),t}function We(e){let t=s.useContext(W);return t||b(!1),t}function ze(e){let t=We(),n=t.matches[t.matches.length-1];return n.route.id||b(!1),n.route.id}function Me(){let{router:e}=Te(xe.UseNavigateStable),t=ze(be.UseNavigateStable),n=s.useRef(!1);return ve(()=>{n.current=!0}),s.useCallback(function(r,o){o===void 0&&(o={}),n.current&&(typeof r=="number"?e.navigate(r):e.navigate(r,B({fromRouteId:t},o)))},[e,t])}const q={};function Fe(e,t){q[t]||(q[t]=!0,console.warn(t))}const G=(e,t,n)=>Fe(e,"⚠️ React Router Future Flag Warning: "+t+". "+("You can use the `"+e+"` future flag to opt-in early. ")+("For more information, see "+n+"."));function ke(e,t){e!=null&&e.v7_startTransition||G("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),e!=null&&e.v7_relativeSplatPath||G("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath")}function Ae(e){let{basename:t="/",children:n=null,location:a,navigationType:r=R.Pop,navigator:o,static:i=!1,future:u}=e;z()&&b(!1);let c=t.replace(/^\/*/,"/"),l=s.useMemo(()=>({basename:c,navigator:o,static:i,future:B({v7_relativeSplatPath:!1},u)}),[c,u,o,i]);typeof a=="string"&&(a=T(a));let{pathname:h="/",search:p="",hash:v="",state:S=null,key:w="default"}=a,m=s.useMemo(()=>{let f=fe(h,c);return f==null?null:{location:{pathname:f,search:p,hash:v,state:S,key:w},navigationType:r}},[c,h,p,v,S,w,r]);return m==null?null:s.createElement(U.Provider,{value:l},s.createElement(V.Provider,{children:n,value:m}))}new Promise(()=>{});/**
 * React Router DOM v6.28.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},k.apply(this,arguments)}function De(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,o;for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function Ve(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Je(e,t){return e.button===0&&(!t||t==="_self")&&!Ve(e)}const Ke=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],$e="6";try{window.__reactRouterVersion=$e}catch{}const He="startTransition",X=Ce[He];function qe(e){let{basename:t,children:n,future:a,window:r}=e,o=s.useRef();o.current==null&&(o.current=Re({window:r,v5Compat:!0}));let i=o.current,[u,c]=s.useState({action:i.action,location:i.location}),{v7_startTransition:l}=a||{},h=s.useCallback(p=>{l&&X?X(()=>c(p)):c(p)},[c,l]);return s.useLayoutEffect(()=>i.listen(h),[i,h]),s.useEffect(()=>ke(a),[a]),s.createElement(Ae,{basename:t,children:n,location:u.location,navigationType:u.action,navigator:i,future:a})}const Ge=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ye=s.forwardRef(function(t,n){let{onClick:a,relative:r,reloadDocument:o,replace:i,state:u,target:c,to:l,preventScrollReset:h,viewTransition:p}=t,v=De(t,Ke),{basename:S}=s.useContext(U),w,m=!1;if(typeof l=="string"&&Xe.test(l)&&(w=l,Ge))try{let x=new URL(window.location.href),C=l.startsWith("//")?new URL(x.protocol+l):new URL(l),P=fe(C.pathname,S);C.origin===x.origin&&P!=null?l=P+C.search+C.hash:m=!0}catch{}let f=_e(l,{relative:r}),g=Qe(l,{replace:i,state:u,target:c,preventScrollReset:h,relative:r,viewTransition:p});function y(x){a&&a(x),x.defaultPrevented||g(x)}return s.createElement("a",k({},v,{href:w||f,onClick:m||o?a:y,ref:n,target:c}))});var Y;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Y||(Y={}));var Q;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Q||(Q={}));function Qe(e,t){let{target:n,replace:a,state:r,preventScrollReset:o,relative:i,viewTransition:u}=t===void 0?{}:t,c=Ne(),l=J(),h=ye(e,{relative:i});return s.useCallback(p=>{if(Je(p,n)){p.preventDefault();let v=a!==void 0?a:N(l)===N(h);c(e,{replace:v,state:r,preventScrollReset:o,relative:i,viewTransition:u})}},[l,c,h,a,r,n,e,o,i,u])}const Ze=D.nav`
  display: flex;
  align-items: center;
  font-size: 14px;
`,et=D.span`
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
`,tt=D.span`
  margin: 0 8px;
  color: rgba(0, 0, 0, 0.45);
`,A=({items:e=[],separator:t="/"})=>d.jsx(Ze,{children:e.map((n,a)=>{const r=a===e.length-1;return d.jsxs(we.Fragment,{children:[d.jsx(et,{children:n.path!=null&&!r?d.jsx(Ye,{to:n.path,children:n.title}):n.title}),!r&&d.jsx(tt,{children:t})]},a)})});try{A.displayName="Breadcrumb",A.__docgenInfo={description:"",displayName:"Breadcrumb",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"BreadcrumbItemType[]"}},separator:{defaultValue:{value:"/"},description:"",name:"separator",required:!1,type:{name:"ReactNode"}}}}}catch{}const ct={title:"Navigator/Breadcrumb",component:A,decorators:[e=>d.jsx(qe,{children:d.jsx(e,{})})],parameters:{layout:"centered"},tags:["autodocs"],argTypes:{items:{description:"Breadcrumb items",control:{disable:!0}},separator:{description:"Separator between items",control:"text"}}},L={args:{items:[{title:"Home",path:"/"},{title:"Category",path:"/category"},{title:"Detail"}]}},I={args:{separator:d.jsx(E,{name:"chevronright",size:12}),items:[{title:"Home",path:"/"},{title:"Category",path:"/category"},{title:"Detail"}]}},O={args:{items:[{title:"Home"}]}},_={args:{items:[{title:d.jsxs(d.Fragment,{children:[d.jsx(E,{name:"home",size:14,style:{marginRight:4}}),"Home"]}),path:"/"},{title:d.jsxs(d.Fragment,{children:[d.jsx(E,{name:"folder",size:14,style:{marginRight:4}}),"Category"]}),path:"/category"},{title:d.jsxs(d.Fragment,{children:[d.jsx(E,{name:"file",size:14,style:{marginRight:4}}),"Detail"]})}],separator:d.jsx(E,{name:"chevronright",size:12})}};var Z,ee,te;L.parameters={...L.parameters,docs:{...(Z=L.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(te=(ee=L.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,ae,re;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(re=(ae=I.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var ie,oe,se;O.parameters={...O.parameters,docs:{...(ie=O.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    items: [{
      title: "Home"
    }]
  }
}`,...(se=(oe=O.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var le,ce,ue;_.parameters={..._.parameters,docs:{...(le=_.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ue=(ce=_.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};const ut=["DefaultBreadcrumb","CustomSeparator","SingleItemBreadcrumb","WithIcons"];export{I as CustomSeparator,L as DefaultBreadcrumb,O as SingleItemBreadcrumb,_ as WithIcons,ut as __namedExportsOrder,ct as default};
