import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-BlmOqGMO.js";import{d as y}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const U=y.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({disabled:a})=>a??!1?"not-allowed":"pointer"};
  opacity: ${({disabled:a})=>a??!1?.5:1};
`,X=y.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,Y=y.span`
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
`,Z=y.div`
  display: inline-flex;
  flex-direction: ${({direction:a})=>a==="vertical"?"column":"row"};
  gap: ${({direction:a})=>"8px"};
`,J=g.createContext(null),s=({checked:a,defaultChecked:O,disabled:l,value:t,onChange:i,className:d,style:j,children:V})=>{const[C,G]=g.useState(O??!1),e=g.useContext(J),c=e!=null?e.value===t:a??C,k=u=>{var p;(l??!1)||(e==null?(G(u.target.checked),i==null||i(u)):(p=e.onChange)==null||p.call(e,u))};return r.jsxs(U,{className:d,style:j,disabled:l??(e==null?void 0:e.disabled),children:[r.jsx(X,{type:"radio",checked:c,disabled:l??(e==null?void 0:e.disabled),value:t,name:e==null?void 0:e.name,onChange:k}),r.jsx(Y,{checked:c,disabled:l??(e==null?void 0:e.disabled)}),V]})},ee=({value:a,defaultValue:O,onChange:l,disabled:t,name:i,options:d,className:j,style:V,children:C,direction:G="horizontal"})=>{const[e,c]=g.useState(O),p={value:a??e,onChange:o=>{const m=o.target.value;a===void 0&&c(m),l==null||l(m)},disabled:t,name:i},K=()=>d!=null?d.map(o=>{if(typeof o=="string")return r.jsx(s,{value:o,disabled:t,children:o},o);const{label:m,value:S,disabled:Q}=o;return r.jsx(s,{value:S,disabled:t??Q,children:m},S.toString())}):C;return r.jsx(J.Provider,{value:p,children:r.jsx(Z,{className:j,style:V,direction:G,children:K()})})},n=s;n.Group=ee;try{s.displayName="Radio",s.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:null,description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const oe={title:"Data Entry/Radio",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Specifies whether the radio is selected"},disabled:{control:"boolean",description:"Disables the radio"},value:{control:"text",description:"Value of the radio"}}},f={args:{children:"Radio"}},h={args:{disabled:!0,children:"Disabled Radio"}},v={render:()=>r.jsxs(n.Group,{defaultValue:"1",children:[r.jsx(n,{value:"1",children:"Option A"}),r.jsx(n,{value:"2",children:"Option B"}),r.jsx(n,{value:"3",children:"Option C"})]})},b={render:()=>r.jsx(n.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}]})},R={render:()=>r.jsxs(n.Group,{defaultValue:"1",direction:"vertical",children:[r.jsx(n,{value:"1",children:"Option A"}),r.jsx(n,{value:"2",children:"Option B"}),r.jsx(n,{value:"3",children:"Option C"})]})},x={render:()=>r.jsx(n.Group,{direction:"vertical",options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}]})};var _,D,A;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: "Radio"
  }
}`,...(A=(D=f.parameters)==null?void 0:D.docs)==null?void 0:A.source}}};var q,w,$;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Radio"
  }
}`,...($=(w=h.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var E,W,I;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="1">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
}`,...(I=(W=v.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var P,B,N;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(N=(B=b.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};var T,z,H;R.parameters={...R.parameters,docs:{...(T=R.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="1" direction="vertical">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
}`,...(H=(z=R.parameters)==null?void 0:z.docs)==null?void 0:H.source}}};var L,M,F;x.parameters={...x.parameters,docs:{...(L=x.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(M=x.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};const te=["Default","Disabled","RadioGroup","RadioGroupWithOptions","VerticalRadioGroup","VerticalRadioGroupWithOptions"];export{f as Default,h as Disabled,v as RadioGroup,b as RadioGroupWithOptions,R as VerticalRadioGroup,x as VerticalRadioGroupWithOptions,te as __namedExportsOrder,oe as default};
