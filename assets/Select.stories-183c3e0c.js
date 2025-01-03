import{a as _,j as r}from"./jsx-runtime-c9381026.js";import{r as n}from"./index-8b3efc3f.js";import{d as o}from"./styled-components.browser.esm-9b53ad8e.js";import{I as W}from"./index-28fff672.js";import"./_commonjsHelpers-de833af9.js";const de=o.div`
  position: relative;
  display: inline-block;
`,ce=o.div`
  min-width: 120px;
  height: 32px;
  padding: 4px 30px 4px 11px;
  background-color: ${({disabled:t})=>t??!1?"#f5f5f5":"#fff"};
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: ${({disabled:t})=>t??!1?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  transition: all 0.3s;
  
  &:hover {
    border-color: ${({disabled:t})=>t??!1?"#d9d9d9":"#40a9ff"};
  }
  
  &:focus-within {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`,ue=o.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,pe=o.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.85);
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
  
  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
`,fe=o.span`
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({$visible:t})=>t?"rotate(180deg)":"rotate(0)"};
`,me=o.span`
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,be=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
  display: ${({visible:t})=>t?"block":"none"};
`,ge=o.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  max-height: 250px;
  overflow-y: auto;
`,he=o.li`
  padding: 5px 12px;
  cursor: ${({disabled:t})=>t??!1?"not-allowed":"pointer"};
  color: ${({disabled:t})=>t??!1?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.85)"};
  background: ${({selected:t,active:l})=>t??!1?"#e6f7ff":l??!1?"#f5f5f5":"transparent"};
  transition: background 0.3s;
  
  &:hover {
    background: ${({disabled:t,selected:l})=>t??!1?"transparent":l??!1?"#e6f7ff":"#f5f5f5"};
  }
`,ve=o.div`
  padding: 8px 12px;
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
`,we=o.div`
  padding: 8px 12px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
`,O=({options:t=[],value:l,defaultValue:Y,placeholder:$="Please select",disabled:f=!1,loading:Z=!1,allowClear:ee=!0,showSearch:ae=!1,onChange:s,onSearch:x,className:te,style:re,dropdownStyle:oe,notFoundContent:le="No data"})=>{const[y,V]=n.useState(l??Y),[d,m]=n.useState(!1),[D,c]=n.useState(""),k=n.useRef(null);n.useEffect(()=>{l!==void 0&&V(l)},[l]),n.useEffect(()=>{const e=a=>{k.current!=null&&!k.current.contains(a.target)&&(m(!1),c(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const q=t.find(e=>e.value===y),u=t.filter(e=>{if(D==="")return!0;const a=String(e.label).toLowerCase(),ie=String(e.value).toLowerCase(),L=D.toLowerCase();return a.includes(L)||ie.includes(L)}),E=e=>{(e.disabled??!1)||(l===void 0&&V(e.value),m(!1),c(""),s==null||s(e.value,e))},ne=e=>{e.stopPropagation(),l===void 0&&V(void 0);const a={label:"",value:""};s==null||s("",a),c("")},se=e=>{const a=e.target.value;c(a),x==null||x(a)},[p,C]=n.useState(-1);return _(de,{ref:k,className:te,style:re,children:[_(ce,{onClick:()=>{!f&&m(!d)},disabled:f,children:[ae&&d?r(pe,{value:D,onChange:se,onKeyDown:e=>{if(d)switch(e.key){case"ArrowDown":e.preventDefault(),C(a=>a<u.length-1?a+1:a);break;case"ArrowUp":e.preventDefault(),C(a=>a>0?a-1:a);break;case"Enter":if(e.preventDefault(),p>=0&&p<u.length){const a=u[p];a!=null&&!(a.disabled??!1)&&E(a)}break;case"Escape":e.preventDefault(),m(!1),c("");break}},placeholder:$,disabled:f,autoFocus:!0}):r(ue,{children:(q==null?void 0:q.label)??$}),ee&&y!==void 0&&!f&&r(me,{onClick:ne,role:"button","aria-label":"clear",children:r(W,{name:"cross",size:12})}),r(fe,{$visible:d,children:r(W,{name:"chevrondown",size:12})})]}),r(be,{visible:d,style:oe,children:Z?r(we,{children:"Loading..."}):u.length===0?r(ve,{children:le}):r(ge,{children:u.map((e,a)=>r(he,{selected:e.value===y,disabled:e.disabled,active:a===p,"data-testid":`option-${a}`,"data-active":a===p,onClick:()=>{E(e)},onMouseEnter:()=>{C(a)},children:e.label},e.value))})})]})};try{O.displayName="Select",O.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:{value:"Please select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"false"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string | number, option: SelectOption) => void)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},notFoundContent:{defaultValue:{value:"No data"},description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const qe={title:"Data Entry/Select",component:O,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{description:"Options for select",control:"object"},placeholder:{description:"Placeholder text",control:"text"},disabled:{description:"Whether select is disabled",control:"boolean"},loading:{description:"Whether select is loading",control:"boolean"},allowClear:{description:"Whether allow clear selected option",control:"boolean"},showSearch:{description:"Whether show search input",control:"boolean"}}},i=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Disabled",value:"4",disabled:!0}],b={args:{options:i,placeholder:"Please select"}},g={args:{options:i,defaultValue:"1"}},h={args:{options:i,disabled:!0,defaultValue:"1"}},v={args:{options:i,showSearch:!0,placeholder:"Search and select"}},w={args:{options:i,loading:!0}},S={args:{options:i,placeholder:"Contains disabled option"}};var N,P,I;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Please select"
  }
}`,...(I=(P=b.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var j,A,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: "1"
  }
}`,...(F=(A=g.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var z,K,R;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    defaultValue: "1"
  }
}`,...(R=(K=h.parameters)==null?void 0:K.docs)==null?void 0:R.source}}};var T,M,U;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options,
    showSearch: true,
    placeholder: "Search and select"
  }
}`,...(U=(M=v.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var B,G,H;w.parameters={...w.parameters,docs:{...(B=w.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    options,
    loading: true
  }
}`,...(H=(G=w.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Contains disabled option"
  }
}`,...(X=(Q=S.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Ce=["Default","WithDefaultValue","Disabled","WithSearch","Loading","DisabledOption"];export{b as Default,h as Disabled,S as DisabledOption,w as Loading,g as WithDefaultValue,v as WithSearch,Ce as __namedExportsOrder,qe as default};
