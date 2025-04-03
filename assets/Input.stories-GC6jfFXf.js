import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as S}from"./index-BlmOqGMO.js";import{l as s,d}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as W}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";const he=e=>{switch(e){case"small":return s`
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
      `;case"large":return s`
        padding: 8px 11px;
        font-size: 16px;
        line-height: 24px;
      `;default:return s`
        padding: 4px 11px;
        font-size: 14px;
        line-height: 22px;
      `}},me=e=>{switch(e){case"error":return s`
        border-color: #ff4d4f;
        &:hover,
        &:focus {
          border-color: #ff7875;
          box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
        }
      `;case"warning":return s`
        border-color: #faad14;
        &:hover,
        &:focus {
          border-color: #ffc53d;
          box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
        }
      `;default:return s``}},ye=d.span`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  border: ${({bordered:e=!0})=>e?"1px solid #d9d9d9":"none"};
  border-radius: 6px;
  transition: all 0.2s;
  align-items: center;
  
  ${({disabled:e})=>(e??!1)&&s`
    background-color: rgba(0, 0, 0, 0.04);
    cursor: not-allowed;
    opacity: 1;
  `}
  
  ${({$focused:e})=>(e??!1)&&s`
    border-color: #4096ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  `}
  
  ${({status:e})=>me(e)}
  
  &:hover {
    border-color: #4096ff;
  }
`,be=d.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  ${({size:e})=>he(e)}

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,ve=d.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,Ie=d.span`
  margin-left: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,we=d.span`
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,ze=d.span`
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
  
  ${({compact:e})=>(e??!1)&&s`
    display: inline-flex;
    
    & > * {
      border-radius: 0;
      
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`,Se=d.textarea`
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  border: ${({bordered:e=!0})=>e?"1px solid #d9d9d9":"none"};
  border-radius: 6px;
  transition: all 0.2s;
  
  &:hover {
    border-color: #4096ff;
  }
  
  &:focus {
    border-color: #4096ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }
  
  ${({status:e})=>me(e)}
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`,E=({size:e="middle",disabled:i=!1,prefix:t,suffix:n,allowClear:m,onChange:l,onPressEnter:p,status:V,bordered:j=!0,className:_,style:D,value:f,defaultValue:C,...q})=>{const[u,c]=S.useState(!1),[T,$]=S.useState(C??f??""),A=S.useRef(null),fe=o=>{i||($(o.target.value),l==null||l(o))},xe=o=>{o.key==="Enter"&&(p==null||p(o))},ge=()=>{var L,B;$("");const o=new Event("input",{bubbles:!0});(L=A.current)==null||L.dispatchEvent(o),l==null||l(o),(B=A.current)==null||B.focus()};return r.jsxs(ye,{className:_,style:D,disabled:i,bordered:j,status:V,$focused:u,children:[t!==null&&r.jsx(ve,{role:"img","aria-label":typeof t=="string"?t:"input-prefix",children:t}),r.jsx(be,{ref:A,size:e,disabled:i,value:T,onChange:fe,onKeyDown:xe,onFocus:()=>{c(!0)},onBlur:()=>{c(!1)},...q}),(n!==null||(m??!1)&&T!=="")&&r.jsxs(Ie,{children:[(m??!1)&&T!==""&&r.jsx(we,{onClick:ge,role:"button","aria-label":"clear input",children:r.jsx(W,{name:"cross",size:12})}),n!==null&&r.jsx("span",{role:"img","aria-label":typeof n=="string"?n:"input-suffix",children:n})]})]})},G=({children:e,compact:i=!1,className:t,style:n})=>r.jsx(ze,{compact:i,className:t,style:n,children:e}),N=({allowClear:e,bordered:i=!0,maxLength:t,showCount:n,status:m,onChange:l,value:p,defaultValue:V,className:j,style:_,...D})=>{const[f,C]=S.useState(V??p??""),q=u=>{const c=t!=null?u.target.value.slice(0,t):u.target.value;C(c),l==null||l({...u,target:{...u.target,value:c}})};return r.jsxs("div",{className:j,style:_,children:[r.jsx(Se,{value:f,onChange:q,bordered:i,status:m,maxLength:t,...D}),n!==void 0&&r.jsxs("div",{style:{textAlign:"right",color:"rgba(0, 0, 0, 0.45)"},children:[String(f).length,t!=null?`/${t}`:""]})]})},a=E;a.Group=G;a.TextArea=N;try{E.displayName="Input",E.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"middle"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onPressEnter:{defaultValue:null,description:"",name:"onPressEnter",required:!1,type:{name:"((e: KeyboardEvent<HTMLInputElement>) => void)"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'}]}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{G.displayName="Group",G.__docgenInfo={description:"",displayName:"Group",props:{compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{N.displayName="TextAreaComponent",N.__docgenInfo={description:"",displayName:"TextAreaComponent",props:{allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const qe={title:"Data Entry/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:[void 0,"error","warning"]}}},x={args:{placeholder:"Basic usage"}},g={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(a,{size:"large",placeholder:"Large size"}),r.jsx(a,{size:"middle",placeholder:"Default size"}),r.jsx(a,{size:"small",placeholder:"Small size"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input size="large" placeholder="Large size" />
  <Input size="middle" placeholder="Default size" />
  <Input size="small" placeholder="Small size" />
</div>
        `}}}},h={args:{prefix:r.jsx(W,{name:"user"}),placeholder:"Enter username"}},y={args:{suffix:r.jsx(W,{name:"magnifier",size:16}),placeholder:"Search"}},b={args:{allowClear:!0,placeholder:"Clearable input"}},v={args:{disabled:!0,placeholder:"Disabled input"}},I={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(a,{status:"error",placeholder:"Error status"}),r.jsx(a,{status:"warning",placeholder:"Warning status"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input status="error" placeholder="Error status" />
  <Input status="warning" placeholder="Warning status" />
</div>
        `}}}},w={render:()=>r.jsxs(a.Group,{compact:!0,children:[r.jsx(a,{style:{width:"20%"},defaultValue:"0571"}),r.jsx(a,{style:{width:"30%"},defaultValue:"26888888"})]}),parameters:{docs:{source:{code:`
<Input.Group compact>
  <Input style={{ width: "20%" }} defaultValue="0571" />
  <Input style={{ width: "30%" }} defaultValue="26888888" />
</Input.Group>
        `}}}},z={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(a.TextArea,{placeholder:"Basic usage"}),r.jsx(a.TextArea,{showCount:!0,maxLength:100,placeholder:"With character count"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input.TextArea placeholder="Basic usage" />
  <Input.TextArea showCount maxLength={100} placeholder="With character count" />
</div>
        `}}}};var k,R,P;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    placeholder: "Basic usage"
  }
}`,...(P=(R=x.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var H,K,M;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Input size="large" placeholder="Large size" />
      <Input size="middle" placeholder="Default size" />
      <Input size="small" placeholder="Small size" />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input size="large" placeholder="Large size" />
  <Input size="middle" placeholder="Default size" />
  <Input size="small" placeholder="Small size" />
</div>
        \`
      }
    }
  }
}`,...(M=(K=g.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var F,O,J;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    prefix: <Icon name="user" />,
    placeholder: "Enter username"
  }
}`,...(J=(O=h.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var Q,U,X;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    suffix: <Icon name="magnifier" size={16} />,
    placeholder: "Search"
  }
}`,...(X=(U=y.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,ee;b.parameters={...b.parameters,docs:{...(Y=b.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: "Clearable input"
  }
}`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var re,ae,te;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(te=(ae=v.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var le,ne,se;I.parameters={...I.parameters,docs:{...(le=I.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input status="error" placeholder="Error status" />
  <Input status="warning" placeholder="Warning status" />
</div>
        \`
      }
    }
  }
}`,...(se=(ne=I.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,ie,de;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: () => <Input.Group compact>
      <Input style={{
      width: "20%"
    }} defaultValue="0571" />
      <Input style={{
      width: "30%"
    }} defaultValue="26888888" />
    </Input.Group>,
  parameters: {
    docs: {
      source: {
        code: \`
<Input.Group compact>
  <Input style={{ width: "20%" }} defaultValue="0571" />
  <Input style={{ width: "30%" }} defaultValue="26888888" />
</Input.Group>
        \`
      }
    }
  }
}`,...(de=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var ue,pe,ce;z.parameters={...z.parameters,docs:{...(ue=z.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Input.TextArea placeholder="Basic usage" />
      <Input.TextArea showCount maxLength={100} placeholder="With character count" />
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input.TextArea placeholder="Basic usage" />
  <Input.TextArea showCount maxLength={100} placeholder="With character count" />
</div>
        \`
      }
    }
  }
}`,...(ce=(pe=z.parameters)==null?void 0:pe.docs)==null?void 0:ce.source}}};const Te=["Default","Sizes","WithPrefix","WithSuffix","Clearable","Disabled","Status","Group","TextArea"];export{b as Clearable,x as Default,v as Disabled,w as Group,g as Sizes,I as Status,z as TextArea,h as WithPrefix,y as WithSuffix,Te as __namedExportsOrder,qe as default};
