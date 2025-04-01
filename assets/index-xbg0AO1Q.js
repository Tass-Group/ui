import{j as l}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d,R as a}from"./index-BlmOqGMO.js";import{l as y,d as V}from"./styled-components.browser.esm-BgH1a_-m.js";const k={small:y`
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
  `,default:y`
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
  `,large:y`
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  `},q=V.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  border-radius: ${e=>e.$shape==="circle"?"50%":"2px"};
  
  ${e=>typeof e.$size=="number"?y`
        width: ${e.$size}px;
        height: ${e.$size}px;
      `:k[e.$size??"default"]}

  span {
    transform-origin: center;
    line-height: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`,S=V.div`
  display: inline-flex;
  
  ${q} {
    border: 2px solid #fff;
    margin-left: -8px;
    
    &:first-child {
      margin-left: 0;
    }
  }
`,I=V(q)`
  background: #ccc;
  cursor: pointer;
`,b=({alt:e,src:t,icon:f,size:i="default",shape:s="circle",gap:u=4,children:r,className:p,style:m,srcSet:n,draggable:o,crossOrigin:h,onError:c,...z})=>{const[R,w]=d.useState(1),[E,A]=d.useState(!0),x=d.useRef(null),v=d.useRef(null);d.useEffect(()=>{if(r==null||x.current==null||v.current==null)return;const g=x.current.offsetWidth,$=v.current.offsetWidth,j=u*2;$+j>g&&w((g-j)/$)},[r,u]);const N=g=>{(c==null?void 0:c(g))!==!1&&A(!1)},_=()=>typeof t=="string"&&E?l.jsx("img",{src:t,alt:e,srcSet:n,draggable:o,crossOrigin:h,onError:N}):t instanceof Object&&E?t:f!==void 0?f:r!==void 0?l.jsx("span",{ref:v,style:{transform:`scale(${R})`},children:r}):null;return l.jsx(q,{ref:x,className:p,style:m,$size:i,$shape:s,...z,children:_()})},W=({children:e,maxCount:t=5,maxStyle:f,size:i="default",shape:s="circle",className:u,style:r})=>{const p=a.Children.toArray(e),m=p.length;if(t!==void 0&&t<m){const n=p.slice(0,t),o=m-t;return l.jsxs(S,{className:u,style:r,children:[n.map((h,c)=>a.isValidElement(h)?a.cloneElement(h,{size:i,shape:s,key:`avatar-key-${c}`}):null),l.jsxs(I,{$size:i,$shape:s,style:f,children:["+",o]})]})}return l.jsx(S,{className:u,style:r,children:a.Children.map(e,(n,o)=>a.isValidElement(n)?a.cloneElement(n,{size:i,shape:s,key:`avatar-key-${o}`}):null)})},O=b;O.Group=W;try{b.displayName="Avatar",b.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:'number | "large" | "small" | "default"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},srcSet:{defaultValue:null,description:"",name:"srcSet",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:'boolean | "true" | "false"'}},crossOrigin:{defaultValue:null,description:"",name:"crossOrigin",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"anonymous"'},{value:'"use-credentials"'}]}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: SyntheticEvent<HTMLImageElement, Event>) => boolean)"}}}}}catch{}export{O as A};
