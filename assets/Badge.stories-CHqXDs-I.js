import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{d as n,l as I,m as K}from"./styled-components.browser.esm-BgH1a_-m.js";import{A as y}from"./index-Rws8Cf-V.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const m={success:"#52c41a",processing:"#1890ff",default:"#d9d9d9",error:"#ff4d4f",warning:"#faad14"},O=K`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2.4); opacity: 0; }
`,L=n.span`
  position: relative;
  display: inline-block;
  line-height: 1;
`,M=n.sup`
  position: ${e=>e.$standalone??!1?"relative":"absolute"};
  top: ${e=>{var t;return((t=e.$offset)==null?void 0:t[1])??"auto"}};
  right: ${e=>{var t;return e.$standalone??!1?"auto":`${((t=e.$offset)==null?void 0:t[0])??0}px`}};
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
  background: ${e=>e.$color??(e.$status!==void 0?m[e.$status]:"#ff4d4f")};
  border-radius: ${e=>e.$dot??!1?"50%":"10px"};
  box-shadow: 0 0 0 1px #fff;
  
  ${e=>e.$status==="processing"&&I`
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${m.processing};
      content: '';
      animation: ${O} 1.2s infinite ease-in-out;
    }
  `}
`,Q=n.span`
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>m[e.$status??"default"]};
  
  ${e=>e.$status==="processing"&&I`
    &::after {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 100%;
      height: 100%;
      border: 1px solid ${m.processing};
      border-radius: 50%;
      content: '';
      animation: ${O} 1.2s infinite ease-in-out;
    }
  `}
`,X=n.div`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-size: 14px;
`,$=n.span`
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
`,Y=n.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #eee;
`,ee=n.div`
  position: absolute;
  top: 0;
  right: 0;
  background: ${e=>e.$color??"#1677ff"};
  color: white;
  padding: 6px 12px;
  border-radius: 0 8px 0 8px;
  font-size: 14px;
  line-height: 1;
`,v=({count:e,showZero:t=!1,overflowCount:d=99,dot:i=!1,status:r,color:x,text:o,offset:T,size:G="default",title:J,children:h,className:j,style:w})=>{const b=typeof e=="number"&&e>d?`${d}+`:e,B=(i||b!==void 0&&(t||b!==0))&&s.jsx(M,{$dot:i,$status:r,$color:x,$size:G,$standalone:h==null,$offset:T,title:J,children:!i&&b});return h==null?s.jsx("span",{className:j,style:w,children:r!==void 0?s.jsxs(X,{children:[s.jsx(Q,{$status:r,"data-testid":"status-dot"}),o!==void 0&&s.jsx($,{children:o})]}):s.jsxs(s.Fragment,{children:[B,o!==void 0&&s.jsx($,{children:o})]})}):s.jsxs(L,{className:j,style:w,children:[h,B,r!==void 0&&o!==void 0&&s.jsx($,{children:o})]})},se=({text:e,color:t,placement:d="end",className:i,style:r,children:x})=>s.jsxs(Y,{className:i,style:r,children:[x,s.jsx(ee,{$color:t,$placement:d,"data-testid":"ribbon-corner",children:e})]}),a=v;a.Ribbon=se;try{v.displayName="Badge",v.__docgenInfo={description:"",displayName:"Badge",props:{count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"ReactNode"}},showZero:{defaultValue:{value:"false"},description:"",name:"showZero",required:!1,type:{name:"boolean"}},overflowCount:{defaultValue:{value:"99"},description:"",name:"overflowCount",required:!1,type:{name:"number"}},dot:{defaultValue:{value:"false"},description:"",name:"dot",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"success"'},{value:'"warning"'},{value:'"processing"'},{value:'"error"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"ReactNode"}},offset:{defaultValue:null,description:"",name:"offset",required:!1,type:{name:"[number, number]"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const de={title:"Data Display/Badge",component:a,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{count:5,children:s.jsx(y,{children:"U"})}},u={args:{count:25}},c={args:{dot:!0,children:s.jsx(y,{children:"U"})}},p={render:()=>s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px"},children:[s.jsxs("div",{style:{display:"flex",gap:"16px"},children:[s.jsx(a,{status:"success"}),s.jsx(a,{status:"error"}),s.jsx(a,{status:"default"}),s.jsx(a,{status:"processing"}),s.jsx(a,{status:"warning"})]}),s.jsx(a,{status:"success",text:"Success"}),s.jsx(a,{status:"error",text:"Error"}),s.jsx(a,{status:"default",text:"Default"}),s.jsx(a,{status:"processing",text:"Processing"}),s.jsx(a,{status:"warning",text:"Warning"})]})},f={args:{count:5,color:"#f50",children:s.jsx(y,{children:"U"})}},g={render:()=>s.jsx(a.Ribbon,{text:"Hippies",color:"#f50",children:s.jsx("div",{style:{width:300,height:100,background:"#eee",padding:10},children:"Pushes open the window and raises the spyglass."})})};var S,q,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    count: 5,
    children: <Avatar>U</Avatar>
  }
}`,...(R=(q=l.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var V,z,C;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    count: 25
  }
}`,...(C=(z=u.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var D,_,k;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dot: true,
    children: <Avatar>U</Avatar>
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var A,U,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(N=(U=p.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var P,W,E;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    count: 5,
    color: "#f50",
    children: <Avatar>U</Avatar>
  }
}`,...(E=(W=f.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var H,Z,F;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};const le=["Basic","Standalone","Dot","Status","CustomColor","Ribbon"];export{l as Basic,f as CustomColor,c as Dot,g as Ribbon,u as Standalone,p as Status,le as __namedExportsOrder,de as default};
