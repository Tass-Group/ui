import{a as r,j as S,F as ee}from"./jsx-runtime-8a1697f2.js";import{r as p,R as l}from"./index-8b3efc3f.js";import{l as z,d as I}from"./styled-components.browser.esm-16342693.js";import{I as re}from"./index-c9f9c958.js";import"./_commonjsHelpers-de833af9.js";const ae={small:z`
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
  `,default:z`
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
  `,large:z`
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  `},E=I.span`
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
  
  ${e=>typeof e.$size=="number"?z`
        width: ${e.$size}px;
        height: ${e.$size}px;
      `:ae[e.$size??"default"]}

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
`,_=I.div`
  display: inline-flex;
  
  ${E} {
    border: 2px solid #fff;
    margin-left: -8px;
    
    &:first-child {
      margin-left: 0;
    }
  }
`,te=I(E)`
  background: #ccc;
  cursor: pointer;
`,q=({alt:e,src:t,icon:m,size:o="default",shape:i="circle",gap:c=4,children:n,className:f,style:g,srcSet:s,draggable:u,crossOrigin:v,onError:d,...J})=>{const[Q,X]=p.useState(1),[G,Y]=p.useState(!0),$=p.useRef(null),C=p.useRef(null);p.useEffect(()=>{if(n==null||$.current==null||C.current==null)return;const h=$.current.offsetWidth,V=C.current.offsetWidth,U=c*2;V+U>h&&X((h-U)/V)},[n,c]);const Z=h=>{(d==null?void 0:d(h))!==!1&&Y(!1)};return r(E,{ref:$,className:f,style:g,$size:o,$shape:i,...J,children:(()=>typeof t=="string"&&G?r("img",{src:t,alt:e,srcSet:s,draggable:u,crossOrigin:v,onError:Z}):t instanceof Object&&G?t:m!==void 0?m:n!==void 0?r("span",{ref:C,style:{transform:`scale(${Q})`},children:n}):null)()})},ne=({children:e,maxCount:t=5,maxStyle:m,size:o="default",shape:i="circle",className:c,style:n})=>{const f=l.Children.toArray(e),g=f.length;if(t!==void 0&&t<g){const s=f.slice(0,t),u=g-t;return S(_,{className:c,style:n,children:[s.map((v,d)=>l.isValidElement(v)?l.cloneElement(v,{size:o,shape:i,key:`avatar-key-${d}`}):null),S(te,{$size:o,$shape:i,style:m,children:["+",u]})]})}return r(_,{className:c,style:n,children:l.Children.map(e,(s,u)=>l.isValidElement(s)?l.cloneElement(s,{size:o,shape:i,key:`avatar-key-${u}`}):null)})},a=q;a.Group=ne;try{q.displayName="Avatar",q.__docgenInfo={description:"",displayName:"Avatar",props:{alt:{defaultValue:null,description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"ReactNode"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:'number | "large" | "small" | "default"'}},shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},gap:{defaultValue:{value:"4"},description:"",name:"gap",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},srcSet:{defaultValue:null,description:"",name:"srcSet",required:!1,type:{name:"string"}},draggable:{defaultValue:null,description:"",name:"draggable",required:!1,type:{name:'boolean | "true" | "false"'}},crossOrigin:{defaultValue:null,description:"",name:"crossOrigin",required:!1,type:{name:"enum",value:[{value:'""'},{value:'"anonymous"'},{value:'"use-credentials"'}]}},onError:{defaultValue:null,description:"",name:"onError",required:!1,type:{name:"((e: SyntheticEvent<HTMLImageElement, Event>) => boolean)"}}}}}catch{}const de={title:"Data Display/Avatar",component:a,parameters:{layout:"centered"},tags:["autodocs"]},y={args:{children:"U"}},A={args:{icon:r(re,{name:"user"})}},b={args:{src:"https://picsum.photos/200",alt:"avatar"}},x={render:()=>S(ee,{children:[r(a,{size:24,children:"U"}),r(a,{size:32,children:"U"}),r(a,{size:40,children:"U"})]})},k={render:()=>S(a.Group,{children:[r(a,{children:"U"}),r(a,{style:{backgroundColor:"#f56a00"},children:"K"}),r(a,{style:{backgroundColor:"#87d068"},children:"L"}),r(a,{style:{backgroundColor:"#1890ff"},children:"P"})]}),parameters:{docs:{source:{code:`
<Avatar.Group>
  <Avatar>U</Avatar>
  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
  <Avatar style={{ backgroundColor: "#87d068" }}>L</Avatar>
  <Avatar style={{ backgroundColor: "#1890ff" }}>P</Avatar>
</Avatar.Group>
`}}}};var w,R,W;y.parameters={...y.parameters,docs:{...(w=y.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "U"
  }
}`,...(W=(R=y.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var N,j,L;A.parameters={...A.parameters,docs:{...(N=A.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="user" />
  }
}`,...(L=(j=A.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var O,P,F;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/200",
    alt: "avatar"
  }
}`,...(F=(P=b.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var K,B,D;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <>
      <Avatar size={24}>U</Avatar>
      <Avatar size={32}>U</Avatar>
      <Avatar size={40}>U</Avatar>
    </>
}`,...(D=(B=x.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var H,M,T;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Avatar.Group>
      <Avatar>U</Avatar>
      <Avatar style={{
      backgroundColor: "#f56a00"
    }}>K</Avatar>
      <Avatar style={{
      backgroundColor: "#87d068"
    }}>L</Avatar>
      <Avatar style={{
      backgroundColor: "#1890ff"
    }}>P</Avatar>
    </Avatar.Group>,
  parameters: {
    docs: {
      source: {
        code: \`
<Avatar.Group>
  <Avatar>U</Avatar>
  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
  <Avatar style={{ backgroundColor: "#87d068" }}>L</Avatar>
  <Avatar style={{ backgroundColor: "#1890ff" }}>P</Avatar>
</Avatar.Group>
\`
      }
    }
  }
}`,...(T=(M=k.parameters)==null?void 0:M.docs)==null?void 0:T.source}}};const pe=["Basic","WithIcon","WithImage","Sizes","Group"];export{y as Basic,k as Group,x as Sizes,A as WithIcon,b as WithImage,pe as __namedExportsOrder,de as default};
