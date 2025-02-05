import{a as d,j as r}from"./jsx-runtime-c9381026.js";import{r as D}from"./index-8b3efc3f.js";import{l as t,d as l}from"./styled-components.browser.esm-9b53ad8e.js";import{B as o}from"./index-76227826.js";import"./_commonjsHelpers-de833af9.js";const M=e=>{switch(e){case"top":return t`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
      `;case"topLeft":return t`
        bottom: 100%;
        left: 0;
        transform: translateY(-10px);
      `;case"topRight":return t`
        bottom: 100%;
        right: 0;
        transform: translateY(-10px);
      `;case"bottom":return t`
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
      `;case"bottomLeft":return t`
        top: 100%;
        left: 0;
        transform: translateY(10px);
      `;case"bottomRight":return t`
        top: 100%;
        right: 0;
        transform: translateY(10px);
      `;case"left":return t`
        top: 50%;
        right: 100%;
        transform: translateY(-50%) translateX(-10px);
      `;case"leftTop":return t`
        top: 0;
        right: 100%;
        transform: translateX(-10px);
      `;case"leftBottom":return t`
        bottom: 0;
        right: 100%;
        transform: translateX(-10px);
      `;case"right":return t`
        top: 50%;
        left: 100%;
        transform: translateY(-50%) translateX(10px);
      `;case"rightTop":return t`
        top: 0;
        left: 100%;
        transform: translateX(10px);
      `;case"rightBottom":return t`
        bottom: 0;
        left: 100%;
        transform: translateX(10px);
      `;default:return t``}},z=l.div`
  position: relative;
  display: inline-block;
`,A=l.div`
  position: absolute;
  z-index: 1030;
  ${e=>M(e.$placement)}
  
  background-color: ${e=>e.$color??"#fff"};
  box-shadow: 0 3px 6px -4px rgba(0,0,0,0.12), 
              0 6px 16px 0 rgba(0,0,0,0.08), 
              0 9px 28px 8px rgba(0,0,0,0.05);
  
  ${e=>e.$color!=null&&t`
    .popover-arrow::before {
      background: ${e.$color};
    }
  `}
`,O=l.div`
  position: absolute;
  width: 8px;
  height: 8px;
  background: transparent;
  
  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${e=>e.$color??"#fff"};
    content: "";
    transform: rotate(45deg);
  }
  
  ${e=>{switch(e.$placement){case"top":return t`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom":return t`
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;case"left":return t`
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;case"right":return t`
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;default:return""}}}
`,G=l.div`
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  min-width: 177px;
`,J=l.div`
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  min-width: 177px;
`,n=({content:e,title:v,placement:g="top",trigger:m="hover",open:h,defaultOpen:R=!1,arrow:E=!0,color:x,overlayClassName:F,overlayStyle:L,onOpenChange:f,children:W})=>{const[j,I]=D.useState(R),y=h??j,a=b=>{h===void 0&&I(b),f==null||f(b)};return d(z,{children:[r("div",{...(()=>m==="click"?{onClick:()=>{a(!y)}}:m==="hover"?{onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)}}:m==="focus"?{onFocus:()=>{a(!0)},onBlur:()=>{a(!1)}}:{})(),children:W}),y&&d(A,{className:F,style:L,$placement:g,$color:x,children:[E&&r(O,{$placement:g,$color:x}),d(G,{children:[v!==void 0&&r(J,{children:v}),e]})]})]})};try{n.displayName="Popover",n.__docgenInfo={description:"",displayName:"Popover",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[]"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const re={title:"Data Display/Popover",component:n,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{content:"This is a popover content",children:r(o,{title:"Hover me"})}},i={args:{title:"Title",content:"This is a popover content",children:r(o,{title:"Hover me"})}},c={render:()=>r("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["top","bottom","left","right"].map(e=>r(n,{placement:e,content:`This is ${e} content`,children:r(o,{title:e})},e))})},p={render:()=>d("div",{style:{display:"flex",gap:"8px"},children:[r(n,{content:"Hover content",trigger:"hover",children:r(o,{title:"Hover me"})}),r(n,{content:"Click content",trigger:"click",children:r(o,{title:"Click me"})}),r(n,{content:"Focus content",trigger:"focus",children:r(o,{title:"Focus me"})})]})},u={args:{content:"This is colored content",color:"#f50",children:r(o,{title:"Colored Popover"})}};var T,P,$;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
}`,...($=(P=s.parameters)==null?void 0:P.docs)==null?void 0:$.source}}};var B,k,C;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: "Title",
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
}`,...(C=(k=i.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var w,V,q;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      {["top", "bottom", "left", "right"].map(placement => <Popover key={placement} placement={placement as any} content={\`This is \${placement} content\`}>
          <Button title={placement} />
        </Popover>)}
    </div>
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var H,S,X;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px"
  }}>
      <Popover content="Hover content" trigger="hover">
        <Button title="Hover me" />
      </Popover>
      <Popover content="Click content" trigger="click">
        <Button title="Click me" />
      </Popover>
      <Popover content="Focus content" trigger="focus">
        <Button title="Focus me" />
      </Popover>
    </div>
}`,...(X=(S=p.parameters)==null?void 0:S.docs)==null?void 0:X.source}}};var Y,_,N;u.parameters={...u.parameters,docs:{...(Y=u.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    content: "This is colored content",
    color: "#f50",
    children: <Button title="Colored Popover" />
  }
}`,...(N=(_=u.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};const oe=["Basic","WithTitle","Placement","TriggerTypes","CustomColor"];export{s as Basic,u as CustomColor,c as Placement,p as TriggerTypes,i as WithTitle,oe as __namedExportsOrder,re as default};
