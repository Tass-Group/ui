import{j as a,a as i,F as L}from"./jsx-runtime-c9381026.js";import{m as M,d as n,l as O}from"./styled-components.browser.esm-9b53ad8e.js";import{A as w}from"./index-a197719e.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const h={success:"#52c41a",processing:"#1890ff",default:"#d9d9d9",error:"#ff4d4f",warning:"#faad14"},T=M`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2.4); opacity: 0; }
`,Q=n.span`
  position: relative;
  display: inline-block;
  line-height: 1;
`,X=n.sup`
  position: ${e=>e.$standalone??!1?"relative":"absolute"};
  top: ${e=>{var s;return((s=e.$offset)==null?void 0:s[1])??"auto"}};
  right: ${e=>{var s;return e.$standalone??!1?"auto":`${((s=e.$offset)==null?void 0:s[0])??0}px`}};
  transform: ${e=>e.$standalone??!1?"none":"translate(50%, -50%)"};
  transform-origin: 100% 0%;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: ${e=>e.$dot??!1?"6px":e.$size==="small"?"14px":"20px"};
  height: ${e=>e.$dot??!1?"6px":e.$size==="small"?"14px":"20px"};
  padding: ${e=>e.$dot??!1?0:"0 6px"};
  color: #fff;
  font-size: ${e=>e.$size==="small"?"12px":"14px"};
  line-height: 1;
  white-space: nowrap;
  background: ${e=>e.$color??(e.$status!==void 0?h[e.$status]:"#ff4d4f")};
  border-radius: ${e=>e.$dot??!1?"50%":"10px"};
  box-shadow: 0 0 0 1px #fff;
  
  ${e=>e.$status==="processing"&&O`
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${h.processing};
      content: '';
      animation: ${T} 1.2s infinite ease-in-out;
    }
  `}
`,Y=n.span`
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>h[e.$status??"default"]};
  
  ${e=>e.$status==="processing"&&O`
    &::after {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 100%;
      height: 100%;
      border: 1px solid ${h.processing};
      border-radius: 50%;
      content: '';
      animation: ${T} 1.2s infinite ease-in-out;
    }
  `}
`,ee=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-size: 14px;
`,v=n.span`
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
`,ae=n.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #eee;
`,te=n.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${e=>e.$color??"#1677ff"};
  color: white;
  padding: 6px 12px;
  border-radius: 0 8px 0 8px;
  font-size: 14px;
  line-height: 1;
`,y=({count:e,showZero:s=!1,overflowCount:l=99,dot:d=!1,status:r,color:x,text:o,offset:G,size:J="default",title:K,children:b,className:B,style:S})=>{const $=typeof e=="number"&&e>l?`${l}+`:e,q=(d||$!==void 0&&(s||$!==0))&&a(X,{$dot:d,$status:r,$color:x,$size:J,$standalone:b==null,$offset:G,title:K,children:!d&&$});return b==null?a("span",{className:B,style:S,children:r!==void 0?i(ee,{children:[a(Y,{$status:r,"data-testid":"status-dot"}),o!==void 0&&a(v,{children:o})]}):i(L,{children:[q,o!==void 0&&a(v,{children:o})]})}):i(Q,{className:B,style:S,children:[b,q,r!==void 0&&o!==void 0&&a(v,{children:o})]})},se=({text:e,color:s,placement:l="end",className:d,style:r,children:x})=>i(ae,{className:d,style:r,children:[x,a(te,{$color:s,$placement:l,"data-testid":"ribbon-corner",children:e})]}),t=y;t.Ribbon=se;try{y.displayName="Badge",y.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"ReactNode"}},showZero:{defaultValue:{value:"false"},description:"",name:"showZero",required:!1,type:{name:"boolean"}},overflowCount:{defaultValue:{value:"99"},description:"",name:"overflowCount",required:!1,type:{name:"number"}},dot:{defaultValue:{value:"false"},description:"",name:"dot",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"processing"'},{value:'"error"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"[number, number]"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ce={title:"Data Display/Badge",component:t,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{count:5,children:a(w,{children:"U"})}},u={args:{count:25}},p={args:{dot:!0,children:a(w,{children:"U"})}},f={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[i("div",{style:{display:"flex",gap:"16px"},children:[a(t,{status:"success"}),a(t,{status:"error"}),a(t,{status:"default"}),a(t,{status:"processing"}),a(t,{status:"warning"})]}),a(t,{status:"success",text:"Success"}),a(t,{status:"error",text:"Error"}),a(t,{status:"default",text:"Default"}),a(t,{status:"processing",text:"Processing"}),a(t,{status:"warning",text:"Warning"})]})},g={args:{count:5,color:"#f50",children:a(w,{children:"U"})}},m={render:()=>a(t.Ribbon,{text:"Hippies",color:"#f50",children:a("div",{style:{width:300,height:100,background:"#eee",padding:10},children:"Pushes open the window and raises the spyglass."})})};var V,z,C;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    count: 5,
    children: <Avatar>U</Avatar>
  }
}`,...(C=(z=c.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var R,D,_;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    count: 25
  }
}`,...(_=(D=u.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};var k,A,U;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    dot: true,
    children: <Avatar>U</Avatar>
  }
}`,...(U=(A=p.parameters)==null?void 0:A.docs)==null?void 0:U.source}}};var N,P,W;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  }}>
      <div style={{
      display: "flex",
      gap: "16px"
    }}>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </div>

      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </div>
}`,...(W=(P=f.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var j,E,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    count: 5,
    color: "#f50",
    children: <Avatar>U</Avatar>
  }
}`,...(F=(E=g.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var H,Z,I;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Badge.Ribbon text="Hippies" color="#f50">
      <div style={{
      width: 300,
      height: 100,
      background: "#eee",
      padding: 10
    }}>
        Pushes open the window and raises the spyglass.
      </div>
    </Badge.Ribbon>
}`,...(I=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:I.source}}};const ue=["Basic","Standalone","Dot","Status","CustomColor","Ribbon"];export{c as Basic,g as CustomColor,p as Dot,m as Ribbon,u as Standalone,f as Status,ue as __namedExportsOrder,ce as default};
