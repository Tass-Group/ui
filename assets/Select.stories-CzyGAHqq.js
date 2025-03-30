import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BlmOqGMO.js";import{d as o}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as L}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";const de=o.div`
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
`,xe=o.div`
  padding: 8px 12px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
`,C=({options:t=[],value:l,defaultValue:X,placeholder:O="Please select",disabled:f=!1,loading:Y=!1,allowClear:Z=!0,showSearch:ee=!1,onChange:n,onSearch:S,className:ae,style:te,dropdownStyle:re,notFoundContent:oe="No data"})=>{const[y,V]=s.useState(l??X),[d,m]=s.useState(!1),[D,c]=s.useState(""),k=s.useRef(null);s.useEffect(()=>{l!==void 0&&V(l)},[l]),s.useEffect(()=>{const e=a=>{k.current!=null&&!k.current.contains(a.target)&&(m(!1),c(""))};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]);const j=t.find(e=>e.value===y),u=t.filter(e=>{if(D==="")return!0;const a=String(e.label).toLowerCase(),ie=String(e.value).toLowerCase(),$=D.toLowerCase();return a.includes($)||ie.includes($)}),E=e=>{(e.disabled??!1)||(l===void 0&&V(e.value),m(!1),c(""),n==null||n(e.value,e))},le=e=>{e.stopPropagation(),l===void 0&&V(void 0);const a={label:"",value:""};n==null||n("",a),c("")},se=e=>{const a=e.target.value;c(a),S==null||S(a)},[p,q]=s.useState(-1),ne=e=>{if(d)switch(e.key){case"ArrowDown":e.preventDefault(),q(a=>a<u.length-1?a+1:a);break;case"ArrowUp":e.preventDefault(),q(a=>a>0?a-1:a);break;case"Enter":if(e.preventDefault(),p>=0&&p<u.length){const a=u[p];a!=null&&!(a.disabled??!1)&&E(a)}break;case"Escape":e.preventDefault(),m(!1),c("");break}};return r.jsxs(de,{ref:k,className:ae,style:te,children:[r.jsxs(ce,{onClick:()=>{!f&&m(!d)},disabled:f,children:[ee&&d?r.jsx(pe,{value:D,onChange:se,onKeyDown:ne,placeholder:O,disabled:f,autoFocus:!0}):r.jsx(ue,{children:(j==null?void 0:j.label)??O}),Z&&y!==void 0&&!f&&r.jsx(me,{onClick:le,role:"button","aria-label":"clear",children:r.jsx(L,{name:"cross",size:12})}),r.jsx(fe,{$visible:d,children:r.jsx(L,{name:"chevrondown",size:12})})]}),r.jsx(be,{visible:d,style:re,children:Y?r.jsx(xe,{children:"Loading..."}):u.length===0?r.jsx(ve,{children:oe}):r.jsx(ge,{children:u.map((e,a)=>r.jsx(he,{selected:e.value===y,disabled:e.disabled,active:a===p,"data-testid":`option-${a}`,"data-active":a===p,onClick:()=>{E(e)},onMouseEnter:()=>{q(a)},children:e.label},e.value))})})]})};try{C.displayName="Select",C.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"SelectOption[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string | number"}},placeholder:{defaultValue:{value:"Please select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},showSearch:{defaultValue:{value:"false"},description:"",name:"showSearch",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: string | number, option: SelectOption) => void)"}},onSearch:{defaultValue:null,description:"",name:"onSearch",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},dropdownStyle:{defaultValue:null,description:"",name:"dropdownStyle",required:!1,type:{name:"CSSProperties"}},notFoundContent:{defaultValue:{value:"No data"},description:"",name:"notFoundContent",required:!1,type:{name:"ReactNode"}}}}}catch{}const ke={title:"Data Entry/Select",component:C,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{description:"Options for select",control:"object"},placeholder:{description:"Placeholder text",control:"text"},disabled:{description:"Whether select is disabled",control:"boolean"},loading:{description:"Whether select is loading",control:"boolean"},allowClear:{description:"Whether allow clear selected option",control:"boolean"},showSearch:{description:"Whether show search input",control:"boolean"}}},i=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"},{label:"Disabled",value:"4",disabled:!0}],b={args:{options:i,placeholder:"Please select"}},g={args:{options:i,defaultValue:"1"}},h={args:{options:i,disabled:!0,defaultValue:"1"}},v={args:{options:i,showSearch:!0,placeholder:"Search and select"}},x={args:{options:i,loading:!0}},w={args:{options:i,placeholder:"Contains disabled option"}};var _,W,N;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Please select"
  }
}`,...(N=(W=b.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var P,I,A;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: "1"
  }
}`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var F,R,z;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    defaultValue: "1"
  }
}`,...(z=(R=h.parameters)==null?void 0:R.docs)==null?void 0:z.source}}};var T,K,M;v.parameters={...v.parameters,docs:{...(T=v.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    options,
    showSearch: true,
    placeholder: "Search and select"
  }
}`,...(M=(K=v.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var U,B,G;x.parameters={...x.parameters,docs:{...(U=x.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    options,
    loading: true
  }
}`,...(G=(B=x.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,Q;w.parameters={...w.parameters,docs:{...(H=w.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Contains disabled option"
  }
}`,...(Q=(J=w.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};const je=["Default","WithDefaultValue","Disabled","WithSearch","Loading","DisabledOption"];export{b as Default,h as Disabled,w as DisabledOption,x as Loading,g as WithDefaultValue,v as WithSearch,je as __namedExportsOrder,ke as default};
