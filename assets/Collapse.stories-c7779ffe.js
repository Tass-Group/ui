import{j as r,a as A}from"./jsx-runtime-c9381026.js";import{r as C}from"./index-8b3efc3f.js";import{I as H}from"./index-28fff672.js";import{l as o,d as n}from"./styled-components.browser.esm-9b53ad8e.js";import"./_commonjsHelpers-de833af9.js";const X={small:o`
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
  `},Y=n.div`
  background: ${e=>e.$ghost??!1?"transparent":"#fff"};
  border: ${e=>!(e.$ghost??!1)&&(e.$bordered??!1)?"1px solid #d9d9d9":"none"};
  border-radius: ${e=>e.$ghost??!1?0:"2px"};
  
  ${e=>X[e.$size??"middle"]}
`,Z=n.div`
  border-bottom: ${e=>!(e.$ghost??!1)&&(e.$bordered??!1)?"1px solid #d9d9d9":"none"};
  background: ${e=>e.$ghost??!1?"transparent":"#fff"};
  
  &:last-child {
    border-bottom: none;
  }

  ${e=>(e.$ghost??!1)&&o`
    & ${O} {
      padding: 0;
      
      &:hover {
        background: transparent;
      }
    }
    
    & ${R} {
      padding-left: 24px;
    }
  `}
`,O=n.div`
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
`,R=n.div`
  overflow: hidden;
  background: transparent;
  max-height: ${e=>e.$active??!1?"1000px":"0"};
  padding: ${e=>e.$active??!1?"16px":"0 16px"};
  opacity: ${e=>e.$active??!1?1:0};
  transition: all 0.3s ease-in-out;
`,ee=n.div`
  margin-left: auto;
  padding: 0 16px;
`,$=({items:e=[],activeKey:W,defaultActiveKey:F,accordion:g=!1,bordered:v=!0,ghost:b=!1,expandIcon:w,expandIconPosition:h="start",size:J="middle",onChange:d,className:L,style:M})=>{const[t,Q]=C.useState(()=>{const a=W??F??[];return Array.isArray(a)?a:[a]}),U=C.useCallback(a=>{let s;g?s=t.includes(a)?[]:[a]:s=t.includes(a)?t.filter(i=>i!==a):[...t,a],Q(s),d==null||d(g?s[0]??"":s)},[g,t,d]),I=a=>{const s=t.includes(a.key);return w!==void 0?r(y,{$expanded:s,children:w(a)}):r(y,{children:r(H,{name:s?"chevrondown":"chevronright"})})};return r(Y,{className:L,style:M,$bordered:v,$ghost:b,$size:J,children:e.map(a=>{const s=t.includes(a.key),i=a.collapsible==="disabled";return A(Z,{$bordered:v,$ghost:b,children:[A(O,{onClick:()=>{!i&&U(a.key)},$expandIconPosition:h,$disabled:i,children:[h==="start"&&a.showArrow!==!1&&I(a),r("div",{className:"collapse-header-text",children:a.label}),h==="end"&&a.showArrow!==!1&&I(a),a.extra!==void 0&&r(ee,{children:a.extra})]}),r(R,{$active:s,children:a.children})]},a.key)})})};try{$.displayName="Collapse",$.__docgenInfo={description:"",displayName:"Collapse",props:{items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"CollapseItemType[]"}},activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string | string[]"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string | string[]"}},accordion:{defaultValue:{value:"false"},description:"",name:"accordion",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},ghost:{defaultValue:{value:"false"},description:"",name:"ghost",required:!1,type:{name:"boolean"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"((panelProps: CollapseItemType) => ReactNode)"}},expandIconPosition:{defaultValue:{value:"start"},description:"",name:"expandIconPosition",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"middle"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((key: string | string[]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const oe={title:"Data Display/Collapse",component:$,parameters:{layout:"centered"},tags:["autodocs"]},x=`
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`,l=[{key:"1",label:"This is panel header 1",children:r("p",{children:x})},{key:"2",label:"This is panel header 2",children:r("p",{children:x})},{key:"3",label:"This is panel header 3",children:r("p",{children:x})}],c={args:{items:l,defaultActiveKey:["1"]}},p={args:{items:l,accordion:!0}},u={args:{items:l,bordered:!1}},m={args:{items:l,ghost:!0}},f={args:{items:l,expandIcon:()=>r(H,{name:"arrowdowncircle"})}};var k,q,V;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items,
    defaultActiveKey: ["1"]
  }
}`,...(V=(q=c.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var K,_,z;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    items,
    accordion: true
  }
}`,...(z=(_=p.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var S,E,N;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    items,
    bordered: false
  }
}`,...(N=(E=u.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var T,j,B;m.parameters={...m.parameters,docs:{...(T=m.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items,
    ghost: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var P,D,G;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    items,
    expandIcon: () => <Icon name="arrowdowncircle" />
  }
}`,...(G=(D=f.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const le=["Basic","Accordion","Borderless","Ghost","CustomExpandIcon"];export{p as Accordion,c as Basic,u as Borderless,f as CustomExpandIcon,m as Ghost,le as __namedExportsOrder,oe as default};
