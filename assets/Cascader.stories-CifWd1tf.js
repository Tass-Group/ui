import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c}from"./index-BlmOqGMO.js";import{d as o}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as V}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";const U=o.div`
  position: relative;
  display: inline-block;
`,X=o.div`
  min-width: 200px;
  height: 32px;
  padding: 4px 30px 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  display: flex;
  align-items: center;
  background: ${({disabled:e})=>e??!1?"#f5f5f5":"#fff"};
  opacity: ${({disabled:e})=>e??!1?.6:1};

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({disabled:e})=>e??!1?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.85)"};
  }

  &:hover {
    border-color: ${({disabled:e})=>e??!1?"#d9d9d9":"#40a9ff"};
  }
`,Y=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  display: flex;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
`,ee=o.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 120px;
  border-right: 1px solid #f0f0f0;

  &:last-child {
    border-right: none;
  }
`,ae=o.li`
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  color: ${({disabled:e})=>e??!1?"rgba(0, 0, 0, 0.25)":"rgba(0, 0, 0, 0.85)"};
  background: ${({selected:e})=>e??!1?"#e6f7ff":"transparent"};
  opacity: ${({disabled:e})=>e??!1?.6:1};

  &:hover {
    background: ${({disabled:e})=>e??!1?"transparent":"#f5f5f5"};
  }
`,re=o.span`
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({$visible:e})=>e?"rotate(180deg)":"rotate(0)"};
`,le=o.span`
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,z=({options:e=[],defaultValue:H,value:p,onChange:i,placeholder:A="Please select",disabled:v=!1,allowClear:M=!0,expandTrigger:Z="click",displayRender:J=d=>d.join(" / "),className:B,style:F})=>{const[d,y]=c.useState(!1),[u,j]=c.useState(p??H??[]),[k,C]=c.useState([e]),w=c.useRef(null);c.useEffect(()=>{const a=l=>{w.current!=null&&!w.current.contains(l.target)&&y(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),c.useEffect(()=>{p!==void 0&&j(p)},[p]);const O=a=>{const l=[];let r=e;return a.forEach(t=>{const n=r.find(f=>f.value===t);n!=null&&(l.push(n),r=n.children??[])}),l},$=(a,l)=>{var n,f;if(a.disabled??!1)return;const r=[...u.slice(0,l),a.value],t=[...k.slice(0,l+1)];((n=a.children)==null?void 0:n.length)!=null&&t.push(a.children),j(r),C(t),(((f=a.children)==null?void 0:f.length)==null||(a.isLeaf??!1))&&(y(!1),i==null||i(r,O(r)))},G=a=>{a.stopPropagation(),j([]),C([e]),i==null||i([],[])},K=O(u),Q=J(K.map(a=>a.label));return s.jsxs(U,{ref:w,className:B,style:F,children:[s.jsxs(X,{role:"combobox","aria-expanded":d,"aria-haspopup":"listbox",onClick:()=>{!v&&y(!d)},disabled:v,children:[s.jsx("span",{className:"label",children:u.length>0?Q:A}),M&&u.length>0&&!v&&s.jsx(le,{onClick:G,children:s.jsx(V,{name:"cross",size:12})}),s.jsx(re,{$visible:d,children:s.jsx(V,{name:"chevrondown",size:12})})]}),d&&s.jsx(Y,{children:k.map((a,l)=>s.jsx(ee,{children:a.map(r=>{var t;return s.jsxs(ae,{disabled:r.disabled,selected:u[l]===r.value,onMouseEnter:()=>{var n;Z==="hover"&&((n=r.children)==null?void 0:n.length)!=null&&$(r,l)},onClick:()=>{$(r,l)},children:[s.jsx("span",{children:r.label}),((t=r.children)==null?void 0:t.length)!=null&&s.jsx(V,{name:"chevronright",size:12})]},r.value)})},l))})]})};try{z.displayName="Cascader",z.__docgenInfo={description:"",displayName:"Cascader",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CascaderOption[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"(string | number)[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"(string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: (string | number)[], selectedOptions: CascaderOption[]) => void)"}},placeholder:{defaultValue:{value:"Please select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},expandTrigger:{defaultValue:{value:"click"},description:"",name:"expandTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},displayRender:{defaultValue:{value:'labels => labels.join(" / ")'},description:"",name:"displayRender",required:!1,type:{name:"((labels: string[]) => ReactNode)"}}}}}catch{}const de={title:"Data Entry/Cascader",component:z,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{description:"The data options of cascade",control:"object"},defaultValue:{description:"Initial selected value",control:"object"},placeholder:{description:"Input placeholder",control:"text"},disabled:{description:"Whether disabled select",control:"boolean"},allowClear:{description:"Whether show clear button",control:"boolean"},expandTrigger:{description:"Expand trigger mode",control:"radio",options:["click","hover"]}}},x=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],h={args:{options:x,placeholder:"Please select"}},g={args:{options:x,defaultValue:["zhejiang","hangzhou","xihu"]}},m={args:{options:x,disabled:!0,defaultValue:["zhejiang","hangzhou","xihu"]}},b={args:{options:x,expandTrigger:"hover"}};var q,E,S;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Please select"
  }
}`,...(S=(E=h.parameters)==null?void 0:E.docs)==null?void 0:S.source}}};var _,I,T;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
}`,...(T=(I=g.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var D,N,L;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
}`,...(L=(N=m.parameters)==null?void 0:N.docs)==null?void 0:L.source}}};var P,R,W;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    options,
    expandTrigger: "hover"
  }
}`,...(W=(R=b.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};const ce=["Default","WithDefaultValue","Disabled","HoverTrigger"];export{h as Default,m as Disabled,b as HoverTrigger,g as WithDefaultValue,ce as __namedExportsOrder,de as default};
