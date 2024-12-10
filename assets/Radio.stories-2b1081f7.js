import{j as S,a as r}from"./jsx-runtime-8a1697f2.js";import{r as y}from"./index-8b3efc3f.js";import{d as x}from"./styled-components.browser.esm-16342693.js";import"./_commonjsHelpers-de833af9.js";const X=x.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({disabled:a})=>a??!1?"not-allowed":"pointer"};
  opacity: ${({disabled:a})=>a??!1?.5:1};
`,Y=x.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Z=x.span`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({checked:a})=>a??!1?"#1890ff":"#d9d9d9"};
  border-radius: 50%;
  margin-right: 8px;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${({checked:a})=>a??!1?1:0});
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #1890ff;
    transition: all 0.3s;
  }

  &:hover {
    border-color: ${({disabled:a})=>a??!1?"#d9d9d9":"#1890ff"};
  }
`,ee=x.div`
  display: inline-flex;
  flex-direction: ${({direction:a})=>a==="vertical"?"column":"row"};
  gap: ${({direction:a})=>"8px"};
`,K=y.createContext(null),d=({checked:a,defaultChecked:O,disabled:l,value:t,onChange:i,className:s,style:V,children:C})=>{const[G,k]=y.useState(O??!1),e=y.useContext(K),c=e!=null?e.value===t:a??G,_=u=>{var p;(l??!1)||(e==null?(k(u.target.checked),i==null||i(u)):(p=e.onChange)==null||p.call(e,u))};return S(X,{className:s,style:V,disabled:l??(e==null?void 0:e.disabled),children:[r(Y,{type:"radio",checked:c,disabled:l??(e==null?void 0:e.disabled),value:t,name:e==null?void 0:e.name,onChange:_}),r(Z,{checked:c,disabled:l??(e==null?void 0:e.disabled)}),C]})},ae=({value:a,defaultValue:O,onChange:l,disabled:t,name:i,options:s,className:V,style:C,children:G,direction:k="horizontal"})=>{const[e,c]=y.useState(O),p={value:a??e,onChange:o=>{const m=o.target.value;a===void 0&&c(m),l==null||l(m)},disabled:t,name:i},Q=()=>s!=null?s.map(o=>{if(typeof o=="string")return r(d,{value:o,disabled:t,children:o},o);const{label:m,value:D,disabled:U}=o;return r(d,{value:D,disabled:t??U,children:m},D.toString())}):G;return r(K.Provider,{value:p,children:r(ee,{className:V,style:C,direction:k,children:Q()})})},n=d;n.Group=ae;try{d.displayName="Radio",d.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const te={title:"Data Entry/Radio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Specifies whether the radio is selected"},disabled:{control:"boolean",description:"Disables the radio"},value:{control:"text",description:"Value of the radio"}}},f={args:{children:"Radio"}},h={args:{disabled:!0,children:"Disabled Radio"}},v={render:()=>S(n.Group,{defaultValue:"1",children:[r(n,{value:"1",children:"Option A"}),r(n,{value:"2",children:"Option B"}),r(n,{value:"3",children:"Option C"})]})},b={render:()=>r(n.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}]})},R={render:()=>S(n.Group,{defaultValue:"1",direction:"vertical",children:[r(n,{value:"1",children:"Option A"}),r(n,{value:"2",children:"Option B"}),r(n,{value:"3",children:"Option C"})]})},g={render:()=>r(n.Group,{direction:"vertical",options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}]})};var A,q,w;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: "Radio"
  }
}`,...(w=(q=f.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};var $,W,E;h.parameters={...h.parameters,docs:{...($=h.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Radio"
  }
}`,...(E=(W=h.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var I,P,B;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="1">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
}`,...(B=(P=v.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var N,j,T;b.parameters={...b.parameters,docs:{...(N=b.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Radio.Group options={[{
    label: "Apple",
    value: "apple"
  }, {
    label: "Pear",
    value: "pear"
  }, {
    label: "Orange",
    value: "orange",
    disabled: true
  }]} />
}`,...(T=(j=b.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var z,H,L;R.parameters={...R.parameters,docs:{...(z=R.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="1" direction="vertical">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
}`,...(L=(H=R.parameters)==null?void 0:H.docs)==null?void 0:L.source}}};var M,F,J;g.parameters={...g.parameters,docs:{...(M=g.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <Radio.Group direction="vertical" options={[{
    label: "Apple",
    value: "apple"
  }, {
    label: "Pear",
    value: "pear"
  }, {
    label: "Orange",
    value: "orange",
    disabled: true
  }]} />
}`,...(J=(F=g.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};const ie=["Default","Disabled","RadioGroup","RadioGroupWithOptions","VerticalRadioGroup","VerticalRadioGroupWithOptions"];export{f as Default,h as Disabled,v as RadioGroup,b as RadioGroupWithOptions,R as VerticalRadioGroup,g as VerticalRadioGroupWithOptions,ie as __namedExportsOrder,te as default};
