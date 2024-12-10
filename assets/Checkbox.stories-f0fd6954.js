import{j as G,a as o,F as U}from"./jsx-runtime-8a1697f2.js";import{r as A}from"./index-8b3efc3f.js";import{d as f,l as w}from"./styled-components.browser.esm-16342693.js";import{D as X}from"./index-3fc8d310.js";import"./_commonjsHelpers-de833af9.js";const Y=f.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e??!1?.5:1};
`,Z=f.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,ee=f.span`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  background-color: ${({checked:e,indeterminate:n})=>(e??!1)||(n??!1)?"#1890ff":"#fff"};
  border-color: ${({checked:e,indeterminate:n})=>(e??!1)||(n??!1)?"#1890ff":"#d9d9d9"};

  &::after {
    position: absolute;
    content: '';
    transition: all 0.2s;
    
    ${({checked:e,indeterminate:n})=>n??!1?w`
          top: 7px;
          left: 3px;
          width: 8px;
          height: 2px;
          background: #fff;
        `:e??!1?w`
          top: 2px;
          left: 5px;
          width: 5px;
          height: 8px;
          border: 2px solid #fff;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg);
        `:""}
  }

  &:hover {
    border-color: #1890ff;
  }
`,ae=f.span`
  padding-left: 8px;
  font-size: 14px;
`,le=f.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
`,p=({checked:e,defaultChecked:n=!1,disabled:l=!1,indeterminate:s=!1,onChange:i,className:C,style:V,children:b})=>{const[m,r]=A.useState(n);return A.useEffect(()=>{e!==void 0&&r(e)},[e]),G(Y,{className:C,style:V,disabled:l,children:[o(Z,{type:"checkbox",checked:m,disabled:l,onChange:d=>{if(!l){const t=d.target.checked;e===void 0&&r(t),i==null||i(t,d)}}}),o(ee,{checked:m,disabled:l,indeterminate:s}),b!==void 0&&o(ae,{children:b})]})},q=({options:e=[],defaultValue:n=[],value:l,onChange:s,disabled:i=!1,className:C,style:V,showSelectAll:b=!1,selectAllText:m="Select All"})=>{const[r,h]=A.useState(n);A.useEffect(()=>{l!==void 0&&h(l)},[l]);const d=e.filter(a=>!(a.disabled??!1)).map(a=>a.value),t=d.length,_=r.filter(a=>d.includes(a)).length,M=t>0&&_===t,J=_>0&&_<t,K=a=>{const c=a?[...r,...d.filter(u=>!r.includes(u))]:r.filter(u=>!d.includes(u));l===void 0&&h(c),s==null||s(c)},Q=(a,c)=>{const u=c?[...r,a]:r.filter(R=>R!==a);l===void 0&&h(u),s==null||s(u)};return G(le,{className:C,style:V,children:[b&&G(U,{children:[o(p,{checked:M,indeterminate:J,disabled:i||t===0,onChange:K,children:m}),t>0&&t!==0&&o(X,{})]}),e.map(a=>o(p,{checked:r.includes(a.value),disabled:i||a.disabled,onChange:c=>{Q(a.value,c)},children:a.label},a.value))]})},S=p;S.Group=q;try{p.displayName="Checkbox",p.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{q.displayName="Group",q.__docgenInfo={description:"",displayName:"Group",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CheckboxOptionType[]"}},defaultValue:{defaultValue:{value:"[]"},description:"",name:"defaultValue",required:!1,type:{name:"(string | number)[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"(string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checkedValues: (string | number)[]) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},showSelectAll:{defaultValue:{value:"false"},description:"",name:"showSelectAll",required:!1,type:{name:"boolean"}},selectAllText:{defaultValue:{value:"Select All"},description:"",name:"selectAllText",required:!1,type:{name:"string"}}}}}catch{}const de={title:"Data Entry/Checkbox",component:S,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Checked status"},disabled:{control:"boolean",description:"Disable checkbox"},indeterminate:{control:"boolean",description:"Indeterminate status"}}},v={args:{children:"Checkbox"}},x={args:{disabled:!0,children:"Disabled Checkbox"}},g={args:{indeterminate:!0,children:"Indeterminate Checkbox"}},k={render:()=>o(S.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}],defaultValue:["apple"]}),parameters:{docs:{source:{code:`
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange", disabled: true }
  ]}
  defaultValue={["apple"]}
/>
        `}}}},y={render:()=>o(S.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana",disabled:!0}],defaultValue:["apple"],showSelectAll:!0,selectAllText:"Select All Fruits"}),parameters:{docs:{source:{code:`
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange" },
    { label: "Banana", value: "banana", disabled: true }
  ]}
  defaultValue={["apple"]}
  showSelectAll
  selectAllText="Select All Fruits"
/>
        `}}}};var I,D,O;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: "Checkbox"
  }
}`,...(O=(D=v.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var P,T,N;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Checkbox"
  }
}`,...(N=(T=x.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var E,F,$;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    children: "Indeterminate Checkbox"
  }
}`,...($=(F=g.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var B,j,W;k.parameters={...k.parameters,docs:{...(B=k.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Checkbox.Group options={[{
    label: "Apple",
    value: "apple"
  }, {
    label: "Pear",
    value: "pear"
  }, {
    label: "Orange",
    value: "orange",
    disabled: true
  }]} defaultValue={["apple"]} />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange", disabled: true }
  ]}
  defaultValue={["apple"]}
/>
        \`
      }
    }
  }
}`,...(W=(j=k.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var H,L,z;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Checkbox.Group options={[{
    label: "Apple",
    value: "apple"
  }, {
    label: "Pear",
    value: "pear"
  }, {
    label: "Orange",
    value: "orange"
  }, {
    label: "Banana",
    value: "banana",
    disabled: true
  }]} defaultValue={["apple"]} showSelectAll selectAllText="Select All Fruits" />,
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange" },
    { label: "Banana", value: "banana", disabled: true }
  ]}
  defaultValue={["apple"]}
  showSelectAll
  selectAllText="Select All Fruits"
/>
        \`
      }
    }
  }
}`,...(z=(L=y.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};const ie=["Default","Disabled","Indeterminate","Group","GroupWithSelectAll"];export{v as Default,x as Disabled,k as Group,y as GroupWithSelectAll,g as Indeterminate,ie as __namedExportsOrder,de as default};
