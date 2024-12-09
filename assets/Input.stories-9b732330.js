import{j as i,a as r}from"./jsx-runtime-8a1697f2.js";import{r as z}from"./index-8b3efc3f.js";import{d as u,l as o}from"./styled-components.browser.esm-16342693.js";import{I as W}from"./index-6ca76d44.js";import"./_commonjsHelpers-de833af9.js";const ye=e=>{switch(e){case"small":return o`
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
      `;case"large":return o`
        padding: 8px 11px;
        font-size: 16px;
        line-height: 24px;
      `;default:return o`
        padding: 4px 11px;
        font-size: 14px;
        line-height: 22px;
      `}},fe=e=>{switch(e){case"error":return o`
        border-color: #ff4d4f;
        &:hover,
        &:focus {
          border-color: #ff7875;
          box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
        }
      `;case"warning":return o`
        border-color: #faad14;
        &:hover,
        &:focus {
          border-color: #ffc53d;
          box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
        }
      `;default:return o``}},be=u.span`
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
  
  ${({disabled:e})=>(e??!1)&&o`
    background-color: rgba(0, 0, 0, 0.04);
    cursor: not-allowed;
    opacity: 1;
  `}
  
  ${({$focused:e})=>(e??!1)&&o`
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
`,we=u.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,Se=u.span`
  margin-left: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`,Ie=u.span`
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,Ve=u.span`
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
  
  ${({compact:e})=>(e??!1)&&o`
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
`,ze=u.textarea`
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
`,A=({size:e="middle",disabled:d=!1,prefix:t,suffix:n,allowClear:f,onChange:l,onPressEnter:p,status:_,bordered:q=!0,className:C,style:D,value:g,defaultValue:T,...k})=>{const[c,m]=z.useState(!1),[E,B]=z.useState(T??g??""),N=z.useRef(null),ge=s=>{d||(B(s.target.value),l==null||l(s))},he=s=>{s.key==="Enter"&&(p==null||p(s))},xe=()=>{var L,P;B("");const s=new Event("input",{bubbles:!0});(L=N.current)==null||L.dispatchEvent(s),l==null||l(s),(P=N.current)==null||P.focus()};return i(be,{className:C,style:D,disabled:d,bordered:q,status:_,$focused:c,children:[t!==null&&r(we,{role:"img","aria-label":typeof t=="string"?t:"input-prefix",children:t}),r(ve,{ref:N,size:e,disabled:d,value:E,onChange:ge,onKeyDown:he,onFocus:()=>{m(!0)},onBlur:()=>{m(!1)},...k}),(n!==null||(f??!1)&&E!=="")&&i(Se,{children:[(f??!1)&&E!==""&&r(Ie,{onClick:xe,role:"button","aria-label":"clear input",children:r(W,{name:"cross",size:12})}),n!==null&&r("span",{role:"img","aria-label":typeof n=="string"?n:"input-suffix",children:n})]})]})},$=({children:e,compact:d=!1,className:t,style:n})=>r(Ve,{compact:d,className:t,style:n,children:e}),G=({allowClear:e,bordered:d=!0,maxLength:t,showCount:n,status:f,onChange:l,value:p,defaultValue:_,className:q,style:C,...D})=>{const[g,T]=z.useState(_??p??"");return i("div",{className:q,style:C,children:[r(ze,{value:g,onChange:c=>{const m=t!=null?c.target.value.slice(0,t):c.target.value;T(m),l==null||l({...c,target:{...c.target,value:m}})},bordered:d,status:f,maxLength:t,...D}),n!==void 0&&i("div",{style:{textAlign:"right",color:"rgba(0, 0, 0, 0.45)"},children:[String(g).length,t!=null?`/${t}`:""]})]})},a=A;a.Group=$;a.TextArea=G;try{A.displayName="Input",A.__docgenInfo={description:"",displayName:"Input",props:{size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"middle"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},onPressEnter:{defaultValue:null,description:"",name:"onPressEnter",required:!1,type:{name:"((e: KeyboardEvent<HTMLInputElement>) => void)"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{$.displayName="Group",$.__docgenInfo={description:"",displayName:"Group",props:{compact:{defaultValue:{value:"false"},description:"",name:"compact",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{G.displayName="TextAreaComponent",G.__docgenInfo={description:"",displayName:"TextAreaComponent",props:{allowClear:{defaultValue:null,description:"",name:"allowClear",required:!1,type:{name:"boolean"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},showCount:{defaultValue:null,description:"",name:"showCount",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"warning"'},{value:'"error"'}]}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLTextAreaElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Ee={title:"Data Entry/Input",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"]},status:{control:"select",options:[void 0,"error","warning"]}}},h={args:{placeholder:"Basic usage"}},x={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a,{size:"large",placeholder:"Large size"}),r(a,{size:"middle",placeholder:"Default size"}),r(a,{size:"small",placeholder:"Small size"})]})},y={args:{prefix:r(W,{name:"user"}),placeholder:"Enter username"}},b={args:{suffix:r(W,{name:"magnifier",size:16}),placeholder:"Search"}},v={args:{allowClear:!0,placeholder:"Clearable input"}},w={args:{disabled:!0,placeholder:"Disabled input"}},S={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a,{status:"error",placeholder:"Error status"}),r(a,{status:"warning",placeholder:"Warning status"})]})},I={render:()=>i(a.Group,{compact:!0,children:[r(a,{style:{width:"20%"},defaultValue:"0571"}),r(a,{style:{width:"30%"},defaultValue:"26888888"})]})},V={render:()=>i("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r(a.TextArea,{placeholder:"Basic usage"}),r(a.TextArea,{showCount:!0,maxLength:100,placeholder:"With character count"})]})};var R,j,H;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
    </div>
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
}`,...(re=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:re.source}}};var ae,te,le;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    disabled: true,
    placeholder: "Disabled input"
  }
}`,...(le=(te=w.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,oe,se;S.parameters={...S.parameters,docs:{...(ne=S.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Input status="error" placeholder="Error status" />
      <Input status="warning" placeholder="Warning status" />
    </div>
}`,...(se=(oe=S.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,de,ue;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => <Input.Group compact>
      <Input style={{
      width: "20%"
    }} defaultValue="0571" />
      <Input style={{
      width: "30%"
    }} defaultValue="26888888" />
    </Input.Group>
}`,...(ue=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ue.source}}};var ce,pe,me;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }}>
      <Input.TextArea placeholder="Basic usage" />
      <Input.TextArea showCount maxLength={100} placeholder="With character count" />
    </div>
}`,...(me=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};const Ne=["Default","Sizes","WithPrefix","WithSuffix","Clearable","Disabled","Status","Group","TextArea"];export{v as Clearable,h as Default,w as Disabled,I as Group,x as Sizes,S as Status,V as TextArea,y as WithPrefix,b as WithSuffix,Ne as __namedExportsOrder,Ee as default};
