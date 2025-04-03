import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as j}from"./index-BlmOqGMO.js";import{I as G}from"./index-CbqPYD7y.js";import{d as n,l as o}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const U={small:o`
    .collapse-header-text {
      padding: 8px 16px;
      font-size: 14px;
    }
  `,middle:o`
    .collapse-header-text {
      padding: 12px 16px;
      font-size: 14px;
    }
  `,large:o`
    .collapse-header-text {
      padding: 16px 16px;
      font-size: 16px;
    }
  `},X=n.div`
  background: ${e=>e.$ghost??!1?"transparent":"#fff"};
  border: ${e=>!(e.$ghost??!1)&&(e.$bordered??!1)?"1px solid #d9d9d9":"none"};
  border-radius: ${e=>e.$ghost??!1?0:"2px"};
  
  ${e=>U[e.$size??"middle"]}
`,Y=n.div`
  border-bottom: ${e=>!(e.$ghost??!1)&&(e.$bordered??!1)?"1px solid #d9d9d9":"none"};
  background: ${e=>e.$ghost??!1?"transparent":"#fff"};
  
  &:last-child {
    border-bottom: none;
  }

  ${e=>(e.$ghost??!1)&&o`
    & ${R} {
      padding: 0;
      
      &:hover {
        background: transparent;
      }
    }
    
    & ${H} {
      padding-left: 24px;
    }
  `}
`,R=n.div`
  display: flex;
  align-items: center;
  padding: ${e=>e.$expandIconPosition==="start"?"0 16px":"0"};
  color: rgba(0, 0, 0, 0.88);
  cursor: ${e=>e.$disabled??!1?"not-allowed":"pointer"};
  opacity: ${e=>e.$disabled??!1?.5:1};
  transition: all 0.3s;
  
  ${e=>e.$expandIconPosition==="end"&&o`
    flex-direction: row-reverse;
    padding: 0 16px;
    
    ${y} {
      margin-right: 0;
      margin-left: 12px;
    }
  `}

  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  
  .collapse-header-text {
    flex: 1;
  }
`,y=n.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 12px;
  min-width: 12px;
  height: 12px;
  transform: rotate(${e=>e.$expanded??!1?"90deg":"0deg"});
  transition: transform 0.2s;
`,H=n.div`
  overflow: hidden;
  background: transparent;
  max-height: ${e=>e.$active??!1?"1000px":"0"};
  padding: ${e=>e.$active??!1?"16px":"0 16px"};
  opacity: ${e=>e.$active??!1?1:0};
  transition: all 0.3s ease-in-out;
`,Z=n.div`
  margin-left: auto;
  padding: 0 16px;
`,$=({items:e=[],activeKey:O,defaultActiveKey:W,accordion:x=!1,bordered:v=!0,ghost:b=!1,expandIcon:w,expandIconPosition:g="start",size:F="middle",onChange:d,className:J,style:L})=>{const[t,M]=j.useState(()=>{const a=O??W??[];return Array.isArray(a)?a:[a]}),Q=j.useCallback(a=>{let r;x?r=t.includes(a)?[]:[a]:r=t.includes(a)?t.filter(i=>i!==a):[...t,a],M(r),d==null||d(x?r[0]??"":r)},[x,t,d]),I=a=>{const r=t.includes(a.key);return w!==void 0?s.jsx(y,{$expanded:r,children:w(a)}):s.jsx(y,{children:s.jsx(G,{name:r?"chevrondown":"chevronright"})})};return s.jsx(X,{className:J,style:L,$bordered:v,$ghost:b,$size:F,children:e.map(a=>{const r=t.includes(a.key),i=a.collapsible==="disabled";return s.jsxs(Y,{$bordered:v,$ghost:b,children:[s.jsxs(R,{onClick:()=>{!i&&Q(a.key)},$expandIconPosition:g,$disabled:i,children:[g==="start"&&a.showArrow!==!1&&I(a),s.jsx("div",{className:"collapse-header-text",children:a.label}),g==="end"&&a.showArrow!==!1&&I(a),a.extra!==void 0&&s.jsx(Z,{children:a.extra})]}),s.jsx(H,{$active:r,children:a.children})]},a.key)})})};try{$.displayName="Collapse",$.__docgenInfo={description:"",displayName:"Collapse",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"CollapseItemType[]"}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string | string[]"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string | string[]"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"((panelProps: CollapseItemType) => ReactNode)"}},expandIconPosition:{defaultValue:{value:"start"},description:"",name:"expandIconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"middle"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((key: string | string[]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ne={title:"Data Display/Collapse",component:$,parameters:{layout:"centered"},tags:["autodocs"]},h=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,l=[{key:"1",label:"This is panel header 1",children:s.jsx("p",{children:h})},{key:"2",label:"This is panel header 2",children:s.jsx("p",{children:h})},{key:"3",label:"This is panel header 3",children:s.jsx("p",{children:h})}],c={args:{items:l,defaultActiveKey:["1"]}},p={args:{items:l,accordion:!0}},u={args:{items:l,bordered:!1}},m={args:{items:l,ghost:!0}},f={args:{items:l,expandIcon:()=>s.jsx(G,{name:"arrowdowncircle"})}};var A,C,k;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items,
    defaultActiveKey: ["1"]
  }
}`,...(k=(C=c.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var q,V,K;p.parameters={...p.parameters,docs:{...(q=p.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items,
    accordion: true
  }
}`,...(K=(V=p.parameters)==null?void 0:V.docs)==null?void 0:K.source}}};var _,z,S;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items,
    bordered: false
  }
}`,...(S=(z=u.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var E,N,T;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    items,
    ghost: true
  }
}`,...(T=(N=m.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var B,P,D;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items,
    expandIcon: () => <Icon name="arrowdowncircle" />
  }
}`,...(D=(P=f.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};const oe=["Basic","Accordion","Borderless","Ghost","CustomExpandIcon"];export{p as Accordion,c as Basic,u as Borderless,f as CustomExpandIcon,m as Ghost,oe as __namedExportsOrder,ne as default};
