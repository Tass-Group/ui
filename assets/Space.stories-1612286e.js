import{j as e,a as m}from"./jsx-runtime-c9381026.js";import{d as g}from"./styled-components.browser.esm-9b53ad8e.js";import{B as r}from"./index-acbcb172.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const f=g.div`
  display: flex;
  flex-direction: ${({direction:t})=>t==="horizontal"?"row":"column"};
  gap: ${({size:t})=>`${t}px`};
`,o=({children:t,size:B=8,direction:S="horizontal"})=>e(f,{size:B,direction:S,children:t}),i=o;try{o.displayName="Space",o.__docgenInfo={description:"",displayName:"Space",props:{size:{defaultValue:{value:"8"},description:"",name:"size",required:!1,type:{name:"number"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const x={title:"Layout/Space",component:i,tags:["autodocs"]},a={render:t=>m(i,{...t,children:[e(r,{title:"Button 1"}),e(r,{title:"Button 2"}),e(r,{title:"Button 3"})]}),args:{direction:"horizontal"}},n={render:t=>m(i,{...t,children:[e(r,{title:"Button 1"}),e(r,{title:"Button 2"}),e(r,{title:"Button 3"})]}),args:{direction:"vertical"}};var c,s,l;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: SpaceProps) => {
    return <Space {...args}>
        <Button title="Button 1" />
        <Button title="Button 2" />
        <Button title="Button 3" />
      </Space>;
  },
  args: {
    direction: "horizontal"
  }
}`,...(l=(s=a.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var p,u,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: SpaceProps) => {
    return <Space {...args}>
        <Button title="Button 1" />
        <Button title="Button 2" />
        <Button title="Button 3" />
      </Space>;
  },
  args: {
    direction: "vertical"
  }
}`,...(d=(u=n.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const V=["DefaultSpace","VerticalSpace"];export{a as DefaultSpace,n as VerticalSpace,V as __namedExportsOrder,x as default};
