import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BlmOqGMO.js";import{d as s}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const u=(e="default")=>({small:"14px",default:"20px",large:"32px"})[e],O=s.div`
  position: relative;
  display: ${({$spinning:e})=>e?"flex":"none"};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.sc-spin {
    width: ${({$size:e})=>u(e??"default")};
    height: ${({$size:e})=>u(e??"default")};
  }
`,P=s.div`
  position: relative;
  display: inline-block;
  width: ${({$size:e})=>u(e)};
  height: ${({$size:e})=>u(e)};
  transform: rotate(45deg);
  animation: rotate 1.2s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(405deg);
    }
  }
`,i=s.div`
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  opacity: 0.3;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  animation: spinMove 1s infinite linear alternate;

  &:nth-child(1) {
    top: 0;
    left: 0;
  }

  &:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }

  @keyframes spinMove {
    to {
      opacity: 1;
    }
  }
`,A=s.div`
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: ${({$size:e})=>e==="small"?"12px":"14px"};
`,B=s.div`
  position: relative;
  transition: opacity 0.3s;

  ${({$spinning:e})=>e&&`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      opacity: 0.3;
      pointer-events: none;
    }
  `}
`,n=({size:e="default",spinning:r=!0,tip:x,style:M,className:F,children:h,delay:m=0})=>{const[f,g]=v.useState(r);v.useEffect(()=>{let y;return m>0?r?y=setTimeout(()=>{g(!0)},m):g(!1):g(r),()=>{y&&clearTimeout(y)}},[r,m]);const S=t.jsxs(O,{$spinning:f,$size:e,style:M,className:`sc-spin ${F??""}`,children:[t.jsxs(P,{$size:e,children:[t.jsx(i,{$size:e}),t.jsx(i,{$size:e}),t.jsx(i,{$size:e}),t.jsx(i,{$size:e})]}),x!==void 0&&t.jsx(A,{$size:e,children:x})]});return h!==void 0?t.jsxs(B,{$spinning:f,children:[h,f&&S]}):S};try{n.displayName="Spin",n.__docgenInfo={description:"",displayName:"Spin",props:{size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"default"'}]}},spinning:{defaultValue:{value:"true"},description:"",name:"spinning",required:!1,type:{name:"boolean"}},tip:{defaultValue:null,description:"",name:"tip",required:!1,type:{name:"ReactNode"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},delay:{defaultValue:{value:"0"},description:"",name:"delay",required:!1,type:{name:"number"}}}}}catch{}const Q={title:"Feedback/Spin",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","default","large"],description:"组件大小"},spinning:{control:"boolean",description:"是否显示加载状态"},tip:{control:"text",description:"自定义描述文案"},delay:{control:"number",description:"延迟显示加载效果的时间（防止闪烁）"}}},a={args:{spinning:!0}},o={args:{spinning:!0,tip:"Loading..."}},l={render:()=>t.jsxs("div",{style:{display:"flex",gap:"20px"},children:[t.jsx(n,{size:"small"}),t.jsx(n,{size:"default"}),t.jsx(n,{size:"large"})]})},p={render:()=>t.jsx(n,{children:t.jsx("div",{style:{padding:"20px",background:"#f5f5f5",borderRadius:"4px"},children:"Content"})})},d={args:{spinning:!0,delay:1e3}},c={args:{spinning:!0,style:{color:"#ff4d4f"}}};var b,j,$;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    spinning: true
  }
}`,...($=(j=a.parameters)==null?void 0:j.docs)==null?void 0:$.source}}};var z,_,k;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    spinning: true,
    tip: "Loading..."
  }
}`,...(k=(_=o.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var C,D,W;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "20px"
  }}>
      <Spin size="small" />
      <Spin size="default" />
      <Spin size="large" />
    </div>
}`,...(W=(D=l.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var q,N,T;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Spin>
      <div style={{
      padding: "20px",
      background: "#f5f5f5",
      borderRadius: "4px"
    }}>
        Content
      </div>
    </Spin>
}`,...(T=(N=p.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,w,E;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    spinning: true,
    delay: 1000
  }
}`,...(E=(w=d.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var R,I,L;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    spinning: true,
    style: {
      color: "#ff4d4f"
    }
  }
}`,...(L=(I=c.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};const U=["Default","WithTip","DifferentSizes","WithChildren","WithDelay","CustomStyle"];export{c as CustomStyle,a as Default,l as DifferentSizes,p as WithChildren,d as WithDelay,o as WithTip,U as __namedExportsOrder,Q as default};
