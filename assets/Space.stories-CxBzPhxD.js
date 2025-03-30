import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{d as B}from"./styled-components.browser.esm-BgH1a_-m.js";import{B as r}from"./index-DBQBbmqj.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const S=B.div`
  display: flex;
  flex-direction: ${({direction:t})=>t==="horizontal"?"row":"column"};
  gap: ${({size:t})=>`${t}px`};
`,n=({children:t,size:d=8,direction:m="horizontal"})=>e.jsx(S,{size:d,direction:m,children:t});try{n.displayName="Space",n.__docgenInfo={description:"",displayName:"Space",props:{size:{defaultValue:{value:"8"},description:"",name:"size",required:!1,type:{name:"number"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const h={title:"Layout/Space",component:n,tags:["autodocs"]},a={render:t=>e.jsxs(n,{...t,children:[e.jsx(r,{title:"Button 1"}),e.jsx(r,{title:"Button 2"}),e.jsx(r,{title:"Button 3"})]}),args:{direction:"horizontal"}},o={render:t=>e.jsxs(n,{...t,children:[e.jsx(r,{title:"Button 1"}),e.jsx(r,{title:"Button 2"}),e.jsx(r,{title:"Button 3"})]}),args:{direction:"vertical"}};var s,i,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var u,l,p;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const v=["DefaultSpace","VerticalSpace"];export{a as DefaultSpace,o as VerticalSpace,v as __namedExportsOrder,h as default};
