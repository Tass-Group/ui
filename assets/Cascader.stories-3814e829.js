import{j,a as s}from"./jsx-runtime-8a1697f2.js";import{r as c}from"./index-8b3efc3f.js";import{d as o}from"./styled-components.browser.esm-16342693.js";import{I as z}from"./index-c9f9c958.js";import"./_commonjsHelpers-de833af9.js";const X=o.div`
  position: relative;
  display: inline-block;
`,Y=o.div`
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
`,ee=o.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  display: flex;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
`,ae=o.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 120px;
  border-right: 1px solid #f0f0f0;

  &:last-child {
    border-right: none;
  }
`,re=o.li`
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
`,le=o.span`
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({$visible:e})=>e?"rotate(180deg)":"rotate(0)"};
`,ne=o.span`
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`,k=({options:e=[],defaultValue:A,value:p,onChange:i,placeholder:M="Please select",disabled:x=!1,allowClear:Z=!0,expandTrigger:J="click",displayRender:B=d=>d.join(" / "),className:F,style:G})=>{const[d,y]=c.useState(!1),[u,w]=c.useState(p??A??[]),[C,O]=c.useState([e]),V=c.useRef(null);c.useEffect(()=>{const a=l=>{V.current!=null&&!V.current.contains(l.target)&&y(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[]),c.useEffect(()=>{p!==void 0&&w(p)},[p]);const $=a=>{const l=[];let r=e;return a.forEach(t=>{const n=r.find(f=>f.value===t);n!=null&&(l.push(n),r=n.children??[])}),l},q=(a,l)=>{var n,f;if(a.disabled??!1)return;const r=[...u.slice(0,l),a.value],t=[...C.slice(0,l+1)];((n=a.children)==null?void 0:n.length)!=null&&t.push(a.children),w(r),O(t),(((f=a.children)==null?void 0:f.length)==null||(a.isLeaf??!1))&&(y(!1),i==null||i(r,$(r)))},K=a=>{a.stopPropagation(),w([]),O([e]),i==null||i([],[])},Q=$(u),U=B(Q.map(a=>a.label));return j(X,{ref:V,className:F,style:G,children:[j(Y,{role:"combobox","aria-expanded":d,"aria-haspopup":"listbox",onClick:()=>{!x&&y(!d)},disabled:x,children:[s("span",{className:"label",children:u.length>0?U:M}),Z&&u.length>0&&!x&&s(ne,{onClick:K,children:s(z,{name:"cross",size:12})}),s(le,{$visible:d,children:s(z,{name:"chevrondown",size:12})})]}),d&&s(ee,{children:C.map((a,l)=>s(ae,{children:a.map(r=>{var t;return j(re,{disabled:r.disabled,selected:u[l]===r.value,onMouseEnter:()=>{var n;J==="hover"&&((n=r.children)==null?void 0:n.length)!=null&&q(r,l)},onClick:()=>{q(r,l)},children:[s("span",{children:r.label}),((t=r.children)==null?void 0:t.length)!=null&&s(z,{name:"chevronright",size:12})]},r.value)})},l))})]})};try{k.displayName="Cascader",k.__docgenInfo={description:"",displayName:"Cascader",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CascaderOption[]"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"(string | number)[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"(string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: (string | number)[], selectedOptions: CascaderOption[]) => void)"}},placeholder:{defaultValue:{value:"Please select"},description:"",name:"placeholder",required:!1,type:{name:"string"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},allowClear:{defaultValue:{value:"true"},description:"",name:"allowClear",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},expandTrigger:{defaultValue:{value:"click"},description:"",name:"expandTrigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},displayRender:{defaultValue:{value:'labels => labels.join(" / ")'},description:"",name:"displayRender",required:!1,type:{name:"((labels: string[]) => ReactNode)"}}}}}catch{}const ce={title:"Data Entry/Cascader",component:k,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{options:{description:"The data options of cascade",control:"object"},defaultValue:{description:"Initial selected value",control:"object"},placeholder:{description:"Input placeholder",control:"text"},disabled:{description:"Whether disabled select",control:"boolean"},allowClear:{description:"Whether show clear button",control:"boolean"},expandTrigger:{description:"Expand trigger mode",control:"radio",options:["click","hover"]}}},v=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}],h={args:{options:v,placeholder:"Please select"}},g={args:{options:v,defaultValue:["zhejiang","hangzhou","xihu"]}},m={args:{options:v,disabled:!0,defaultValue:["zhejiang","hangzhou","xihu"]}},b={args:{options:v,expandTrigger:"hover"}};var E,S,_;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    options,
    placeholder: "Please select"
  }
}`,...(_=(S=h.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var I,T,D;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
}`,...(D=(T=g.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};var N,L,P;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    options,
    disabled: true,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
}`,...(P=(L=m.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var R,W,H;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    options,
    expandTrigger: "hover"
  }
}`,...(H=(W=b.parameters)==null?void 0:W.docs)==null?void 0:H.source}}};const ue=["Default","WithDefaultValue","Disabled","HoverTrigger"];export{h as Default,m as Disabled,b as HoverTrigger,g as WithDefaultValue,ue as __namedExportsOrder,ce as default};
