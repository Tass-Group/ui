import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-BlmOqGMO.js";import{P as r}from"./index-BtIfR9nx.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-BgH1a_-m.js";import"./index-CbqPYD7y.js";const P={title:"Navigator/Pagination",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{current:{control:{type:"number",min:1},description:"Current page number"},total:{control:{type:"number",min:0},description:"Total number of data items"},pageSize:{control:{type:"number",min:1},description:"Number of data items per page"},onChange:{description:"Called when page number is changed"}}},a={render:function(){const[e,n]=d.useState(1);return t.jsx(r,{current:e,total:100,pageSize:10,onChange:n})},parameters:{docs:{source:{code:`
import { useState } from "react";        
const [current, setCurrent] = useState(1);
<Pagination
  current={current}
  total={100}
  pageSize={10}
  onChange={setCurrent}
/>
        `}}}},o={render:function(){const[e,n]=d.useState(1);return t.jsxs("div",{style:{width:"100%"},children:[t.jsx(r,{current:e,total:100,pageSize:10,onChange:n,position:"left"}),t.jsx(r,{current:e,total:100,pageSize:10,onChange:n}),t.jsx(r,{current:e,total:100,pageSize:10,onChange:n,position:"right"})]})},parameters:{docs:{source:{code:`
<div style={{ width: "100%" }}>
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="left"
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="right"
  />
</div>
        `}}}};var i,s,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: function Render() {
    const [current, setCurrent] = useState(1);
    return <Pagination current={current} total={100} pageSize={10} onChange={setCurrent} />;
  },
  parameters: {
    docs: {
      source: {
        code: \`
import { useState } from "react";        
const [current, setCurrent] = useState(1);
<Pagination
  current={current}
  total={100}
  pageSize={10}
  onChange={setCurrent}
/>
        \`
      }
    }
  }
}`,...(u=(s=a.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var c,p,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: function Render() {
    const [current, setCurrent] = useState(1);
    return <div style={{
      width: "100%"
    }}>
        <Pagination current={current} total={100} pageSize={10} onChange={setCurrent} position="left" />
        <Pagination current={current} total={100} pageSize={10} onChange={setCurrent} />
        <Pagination current={current} total={100} pageSize={10} onChange={setCurrent} position="right" />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ width: "100%" }}>
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="left"
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="right"
  />
</div>
        \`
      }
    }
  }
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const x=["Default","Position"];export{a as Default,o as Position,x as __namedExportsOrder,P as default};
