import{j as g,a as z}from"./jsx-runtime-c9381026.js";import{r as d,R as a}from"./index-8b3efc3f.js";import{l as y,d as V}from"./styled-components.browser.esm-9b53ad8e.js";const j={small:y`
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
      `:j[e.$size??"default"]}

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
`,w=V.div`
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
`,b=({alt:e,src:t,icon:c,size:l="default",shape:i="circle",gap:s=4,children:r,className:f,style:p,srcSet:n,draggable:u,crossOrigin:m,onError:o,...A})=>{const[R,N]=d.useState(1),[E,_]=d.useState(!0),v=d.useRef(null),x=d.useRef(null);d.useEffect(()=>{if(r==null||v.current==null||x.current==null)return;const h=v.current.offsetWidth,$=x.current.offsetWidth,S=s*2;$+S>h&&N((h-S)/$)},[r,s]);const k=h=>{(o==null?void 0:o(h))!==!1&&_(!1)};return g(q,{ref:v,className:f,style:p,$size:l,$shape:i,...A,children:(()=>typeof t=="string"&&E?g("img",{src:t,alt:e,srcSet:n,draggable:u,crossOrigin:m,onError:k}):t instanceof Object&&E?t:c!==void 0?c:r!==void 0?g("span",{ref:x,style:{transform:`scale(${R})`},children:r}):null)()})},W=({children:e,maxCount:t=5,maxStyle:c,size:l="default",shape:i="circle",className:s,style:r})=>{const f=a.Children.toArray(e),p=f.length;if(t!==void 0&&t<p){const n=f.slice(0,t),u=p-t;return z(w,{className:s,style:r,children:[n.map((m,o)=>a.isValidElement(m)?a.cloneElement(m,{size:l,shape:i,key:`avatar-key-${o}`}):null),z(I,{$size:l,$shape:i,style:c,children:["+",u]})]})}return g(w,{className:s,style:r,children:a.Children.map(e,(n,u)=>a.isValidElement(n)?a.cloneElement(n,{size:l,shape:i,key:`avatar-key-${u}`}):null)})},C=b;C.Group=W;try{b.displayName="Avatar",b.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:'number | "large" | "small" | "default"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},srcSet:{defaultValue:null,description:"",name:"srcSet",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:'boolean | "true" | "false"'}},crossOrigin:{defaultValue:null,description:"",name:"crossOrigin",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"anonymous"'},{value:'"use-credentials"'}]}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: SyntheticEvent<HTMLImageElement, Event>) => boolean)"}}}}}catch{}export{C as A};
