import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as D}from"./index-BlmOqGMO.js";import{l as r,d as s}from"./styled-components.browser.esm-BgH1a_-m.js";import{B as o}from"./index-CtjHNQLu.js";import"./index-yBjzXJbu.js";const M=e=>{switch(e){case"top":return r`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
      `;case"topLeft":return r`
        bottom: 100%;
        left: 0;
        transform: translateY(-10px);
      `;case"topRight":return r`
        bottom: 100%;
        right: 0;
        transform: translateY(-10px);
      `;case"bottom":return r`
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
      `;case"bottomLeft":return r`
        top: 100%;
        left: 0;
        transform: translateY(10px);
      `;case"bottomRight":return r`
        top: 100%;
        right: 0;
        transform: translateY(10px);
      `;case"left":return r`
        top: 50%;
        right: 100%;
        transform: translateY(-50%) translateX(-10px);
      `;case"leftTop":return r`
        top: 0;
        right: 100%;
        transform: translateX(-10px);
      `;case"leftBottom":return r`
        bottom: 0;
        right: 100%;
        transform: translateX(-10px);
      `;case"right":return r`
        top: 50%;
        left: 100%;
        transform: translateY(-50%) translateX(10px);
      `;case"rightTop":return r`
        top: 0;
        left: 100%;
        transform: translateX(10px);
      `;case"rightBottom":return r`
        bottom: 0;
        left: 100%;
        transform: translateX(10px);
      `;default:return r``}},z=s.div`
  position: relative;
  display: inline-block;
`,A=s.div`
  position: absolute;
  z-index: 1030;
  ${e=>M(e.$placement)}
  
  background-color: ${e=>e.$color??"#fff"};
  box-shadow: 0 3px 6px -4px rgba(0,0,0,0.12), 
              0 6px 16px 0 rgba(0,0,0,0.08), 
              0 9px 28px 8px rgba(0,0,0,0.05);
  
  ${e=>e.$color!=null&&r`
    .popover-arrow::before {
      background: ${e.$color};
    }
  `}
`,O=s.div`
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
  
  ${e=>{switch(e.$placement){case"top":return r`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;case"bottom":return r`
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;case"left":return r`
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;case"right":return r`
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;default:return""}}}
`,G=s.div`
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  min-width: 177px;
`,J=s.div`
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  min-width: 177px;
`,n=({content:e,title:f,placement:v="top",trigger:d="hover",open:g,defaultOpen:H=!1,arrow:N=!0,color:x,overlayClassName:R,overlayStyle:E,onOpenChange:m,children:F})=>{const[L,W]=D.useState(H),h=g??L,a=y=>{g===void 0&&W(y),m==null||m(y)},I=()=>d==="click"?{onClick:()=>{a(!h)}}:d==="hover"?{onMouseEnter:()=>{a(!0)},onMouseLeave:()=>{a(!1)}}:d==="focus"?{onFocus:()=>{a(!0)},onBlur:()=>{a(!1)}}:{};return t.jsxs(z,{children:[t.jsx("div",{...I(),children:F}),h&&t.jsxs(A,{className:R,style:E,$placement:v,$color:x,children:[N&&t.jsx(O,{$placement:v,$color:x}),t.jsxs(G,{children:[f!==void 0&&t.jsx(J,{children:f}),e]})]})]})};try{n.displayName="Popover",n.__docgenInfo={description:"",displayName:"Popover",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},placement:{defaultValue:{value:"top"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottomLeft"'},{value:'"bottomRight"'},{value:'"leftTop"'},{value:'"leftBottom"'},{value:'"rightTop"'},{value:'"rightBottom"'}]}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"TriggerType | TriggerType[]"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},defaultOpen:{defaultValue:{value:"false"},description:"",name:"defaultOpen",required:!1,type:{name:"boolean"}},arrow:{defaultValue:{value:"true"},description:"",name:"arrow",required:!1,type:{name:"boolean"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},overlayClassName:{defaultValue:null,description:"",name:"overlayClassName",required:!1,type:{name:"string"}},overlayStyle:{defaultValue:null,description:"",name:"overlayStyle",required:!1,type:{name:"CSSProperties"}},onOpenChange:{defaultValue:null,description:"",name:"onOpenChange",required:!1,type:{name:"((open: boolean) => void)"}}}}}catch{}const te={title:"Data Display/Popover",component:n,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{content:"This is a popover content",children:t.jsx(o,{title:"Hover me"})}},i={args:{title:"Title",content:"This is a popover content",children:t.jsx(o,{title:"Hover me"})}},p={render:()=>t.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:["top","bottom","left","right"].map(e=>t.jsx(n,{placement:e,content:`This is ${e} content`,children:t.jsx(o,{title:e})},e))})},c={render:()=>t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsx(n,{content:"Hover content",trigger:"hover",children:t.jsx(o,{title:"Hover me"})}),t.jsx(n,{content:"Click content",trigger:"click",children:t.jsx(o,{title:"Click me"})}),t.jsx(n,{content:"Focus content",trigger:"focus",children:t.jsx(o,{title:"Focus me"})})]})},u={args:{content:"This is colored content",color:"#f50",children:t.jsx(o,{title:"Colored Popover"})}};var b,T,P;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
}`,...(P=(T=l.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var j,$,B;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: "Title",
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
}`,...(B=($=i.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var k,C,w;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "8px",
    flexWrap: "wrap"
  }}>
      {["top", "bottom", "left", "right"].map(placement => <Popover key={placement} placement={placement as any} content={\`This is \${placement} content\`}>
          <Button title={placement} />
        </Popover>)}
    </div>
}`,...(w=(C=p.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var V,q,S;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(S=(q=c.parameters)==null?void 0:q.docs)==null?void 0:S.source}}};var X,Y,_;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    content: "This is colored content",
    color: "#f50",
    children: <Button title="Colored Popover" />
  }
}`,...(_=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:_.source}}};const re=["Basic","WithTitle","Placement","TriggerTypes","CustomColor"];export{l as Basic,u as CustomColor,p as Placement,c as TriggerTypes,i as WithTitle,re as __namedExportsOrder,te as default};
