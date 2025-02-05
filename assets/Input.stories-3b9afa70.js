import{a as i,j as r}from"./jsx-runtime-c9381026.js";import{r as V}from"./index-8b3efc3f.js";import{d as u,l as s}from"./styled-components.browser.esm-9b53ad8e.js";import{I as $}from"./index-28fff672.js";import"./_commonjsHelpers-de833af9.js";const ye=e=>{switch(e){case"small":return s`
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
      `}},fe=e=>{switch(e){case"error":return s`
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
      `;default:return s``}},be=u.span`
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
  
  ${({status:e})=>fe(e)}
  
  &:hover {
    border-color: #4096ff;
  }
`,ve=u.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  ${({size:e})=>ye(e)}

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    cursor: not-allowed;
  }
`,Ie=u.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,we=u.span`
  margin-left: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,ze=u.span`
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,Se=u.span`
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
`,Ve=u.textarea`
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
  
  ${({status:e})=>fe(e)}
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`,G=({size:e="middle",disabled:d=!1,prefix:t,suffix:n,allowClear:f,onChange:l,onPressEnter:c,status:_,bordered:D=!0,className:C,style:q,value:g,defaultValue:T,...L})=>{const[p,m]=V.useState(!1),[A,B]=V.useState(T??g??""),E=V.useRef(null),ge=o=>{d||(B(o.target.value),l==null||l(o))},he=o=>{o.key==="Enter"&&(c==null||c(o))},xe=()=>{var k,P;B("");const o=new Event("input",{bubbles:!0});(k=E.current)==null||k.dispatchEvent(o),l==null||l(o),(P=E.current)==null||P.focus()};return i(be,{className:C,style:q,disabled:d,bordered:D,status:_,$focused:p,children:[t!==null&&r(Ie,{role:"img","aria-label":typeof t=="string"?t:"input-prefix",children:t}),r(ve,{ref:E,size:e,disabled:d,value:A,onChange:ge,onKeyDown:he,onFocus:()=>{m(!0)},onBlur:()=>{m(!1)},...L}),(n!==null||(f??!1)&&A!=="")&&i(we,{children:[(f??!1)&&A!==""&&r(ze,{onClick:xe,role:"button","aria-label":"clear input",children:r($,{name:"cross",size:12})}),n!==null&&r("span",{role:"img","aria-label":typeof n=="string"?n:"input-suffix",children:n})]})]})},N=({children:e,compact:d=!1,className:t,style:n})=>r(Se,{compact:d,className:t,style:n,children:e}),W=({allowClear:e,bordered:d=!0,maxLength:t,showCount:n,status:f,onChange:l,value:c,defaultValue:_,className:D,style:C,...q})=>{const[g,T]=V.useState(_??c??"");return i("div",{className:D,style:C,children:[r(Ve,{value:g,onChange:p=>{const m=t!=null?p.target.value.slice(0,t):p.target.value;T(m),l==null||l({...p,target:{...p.target,value:m}})},bordered:d,status:f,maxLength:t,...q}),n!==void 0&&i("div",{style:{textAlign:"right",color:"rgba(0, 0, 0, 0.45)"},children:[String(g).length,t!=null?`/${t}`:""]})]})},a=G;a.Group=N;a.TextArea=W;try{G.displayName="Input",G.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"middle"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onPressEnter:{defaultValue:null,description:"",name:"onPressEnter",required:!1,type:{name:"((e: KeyboardEvent<HTMLInputElement>) => void)"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'}]}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{N.displayName="Group",N.__docgenInfo={description:"",displayName:"Group",props:{compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{W.displayName="TextAreaComponent",W.__docgenInfo={description:"",displayName:"TextAreaComponent",props:{allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"warning"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Ae={title:"Data Entry/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:[void 0,"error","warning"]}}},h={args:{placeholder:"Basic usage"}},x={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a,{size:"large",placeholder:"Large size"}),r(a,{size:"middle",placeholder:"Default size"}),r(a,{size:"small",placeholder:"Small size"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input size="large" placeholder="Large size" />
  <Input size="middle" placeholder="Default size" />
  <Input size="small" placeholder="Small size" />
</div>
        `}}}},y={args:{prefix:r($,{name:"user"}),placeholder:"Enter username"}},b={args:{suffix:r($,{name:"magnifier",size:16}),placeholder:"Search"}},v={args:{allowClear:!0,placeholder:"Clearable input"}},I={args:{disabled:!0,placeholder:"Disabled input"}},w={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a,{status:"error",placeholder:"Error status"}),r(a,{status:"warning",placeholder:"Warning status"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input status="error" placeholder="Error status" />
  <Input status="warning" placeholder="Warning status" />
</div>
        `}}}},z={render:()=>i(a.Group,{compact:!0,children:[r(a,{style:{width:"20%"},defaultValue:"0571"}),r(a,{style:{width:"30%"},defaultValue:"26888888"})]}),parameters:{docs:{source:{code:`
<Input.Group compact>
  <Input style={{ width: "20%" }} defaultValue="0571" />
  <Input style={{ width: "30%" }} defaultValue="26888888" />
</Input.Group>
        `}}}},S={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a.TextArea,{placeholder:"Basic usage"}),r(a.TextArea,{showCount:!0,maxLength:100,placeholder:"With character count"})]}),parameters:{docs:{source:{code:`
<div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
  <Input.TextArea placeholder="Basic usage" />
  <Input.TextArea showCount maxLength={100} placeholder="With character count" />
</div>
        `}}}};var R,j,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    placeholder: "Basic usage"
  }
}`,...(H=(j=h.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var K,M,F;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(F=(M=x.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var O,J,Q;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    prefix: <Icon name="user" />,
    placeholder: "Enter username"
  }
}`,...(Q=(J=y.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,X,Y;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    suffix: <Icon name="magnifier" size={16} />,
    placeholder: "Search"
  }
}`,...(Y=(X=b.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,re;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    allowClear: true,
    placeholder: "Clearable input"
  }
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,le;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(le=(te=I.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,se,oe;w.parameters={...w.parameters,docs:{...(ne=w.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
}`,...(oe=(se=w.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ie,de,ue;z.parameters={...z.parameters,docs:{...(ie=z.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
}`,...(ue=(de=z.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var pe,ce,me;S.parameters={...S.parameters,docs:{...(pe=S.parameters)==null?void 0:pe.docs,source:{originalSource:`{
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
}`,...(me=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:me.source}}};const Ee=["Default","Sizes","WithPrefix","WithSuffix","Clearable","Disabled","Status","Group","TextArea"];export{v as Clearable,h as Default,I as Disabled,z as Group,x as Sizes,w as Status,S as TextArea,y as WithPrefix,b as WithSuffix,Ee as __namedExportsOrder,Ae as default};
