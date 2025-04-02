import{j as C}from"./jsx-runtime-Cf8x2fCZ.js";import{C as o}from"./index-Dc5wjjRp.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";import"./styled-components.browser.esm-BgH1a_-m.js";import"./index--ehRUsl2.js";const V={title:"Data Entry/Checkbox",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Checked status"},disabled:{control:"boolean",description:"Disable checkbox"},indeterminate:{control:"boolean",description:"Indeterminate status"}}},e={args:{children:"Checkbox"}},a={args:{disabled:!0,children:"Disabled Checkbox"}},l={args:{indeterminate:!0,children:"Indeterminate Checkbox"}},r={render:()=>C.jsx(o.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange",disabled:!0}],defaultValue:["apple"]}),parameters:{docs:{source:{code:`
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange", disabled: true }
  ]}
  defaultValue={["apple"]}
/>
        `}}}},n={render:()=>C.jsx(o.Group,{options:[{label:"Apple",value:"apple"},{label:"Pear",value:"pear"},{label:"Orange",value:"orange"},{label:"Banana",value:"banana",disabled:!0}],defaultValue:["apple"],showSelectAll:!0,selectAllText:"Select All Fruits"}),parameters:{docs:{source:{code:`
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
        `}}}};var t,s,p;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: "Checkbox"
  }
}`,...(p=(s=e.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};var u,c,d;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    disabled: true,
    children: "Disabled Checkbox"
  }
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var i,b,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    indeterminate: true,
    children: "Indeterminate Checkbox"
  }
}`,...(m=(b=l.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var g,h,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var x,A,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(A=n.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};const I=["Default","Disabled","Indeterminate","Group","GroupWithSelectAll"];export{e as Default,a as Disabled,r as Group,n as GroupWithSelectAll,l as Indeterminate,I as __namedExportsOrder,V as default};
