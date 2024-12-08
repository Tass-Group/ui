import{j as y,a as t}from"./jsx-runtime-8a1697f2.js";import{r as P}from"./index-8b3efc3f.js";import{d as p}from"./styled-components.browser.esm-16342693.js";import{I as g}from"./index-6ca76d44.js";import"./_commonjsHelpers-de833af9.js";const _=p.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$position:e})=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}};
`,d=p.button`
  min-width: 32px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({active:e})=>e===!0?"#1890ff":"#d9d9d9"};
  background-color: ${({active:e})=>e===!0?"#1890ff":"#ffffff"};
  color: ${({active:e})=>e===!0?"#ffffff":"rgba(0, 0, 0, 0.85)"};
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 2px;
  outline: none;
  user-select: none;

  &:hover:not(:disabled) {
    color: #1890ff;
    border-color: #1890ff;
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    background-color: #f5f5f5;
  }

  &:active:not(:disabled) {
    color: #096dd9;
    border-color: #096dd9;
  }
`,w=p.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.45);
`,i=({current:e,total:r,pageSize:a,onChange:z,position:v="center"})=>{const s=Math.ceil(r/a),l=o=>{o>=1&&o<=s&&z(o)},x=()=>{const o=[];for(let n=1;n<=s;n++)n===1||n===s||n>=e-2&&n<=e+2?o.push(t(d,{active:e===n,onClick:()=>{l(n)},children:n},n)):(n===e-3||n===e+3)&&o.push(t(w,{children:"..."},`ellipsis-${n}`));return o};return y(_,{$position:v,children:[t(d,{onClick:()=>{l(e-1)},disabled:e<=1,children:t(g,{name:"chevronleft",size:12})}),x(),t(d,{onClick:()=>{l(e+1)},disabled:e>=s,children:t(g,{name:"chevronright",size:12})})]})};try{i.displayName="Pagination",i.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}const V={title:"Navigator/Pagination",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{current:{control:{type:"number",min:1},description:"Current page number"},total:{control:{type:"number",min:0},description:"Total number of data items"},pageSize:{control:{type:"number",min:1},description:"Number of data items per page"},onChange:{description:"Called when page number is changed"}}},c={render:function(){const[r,a]=P.useState(1);return t(i,{current:r,total:100,pageSize:10,onChange:a})},parameters:{docs:{source:{code:`
import { useState } from "react";        
const [current, setCurrent] = useState(1);
<Pagination
  current={current}
  total={100}
  pageSize={10}
  onChange={setCurrent}
/>
        `}}}},u={render:function(){const[r,a]=P.useState(1);return y("div",{style:{width:"100%"},children:[t(i,{current:r,total:100,pageSize:10,onChange:a,position:"left"}),t(i,{current:r,total:100,pageSize:10,onChange:a}),t(i,{current:r,total:100,pageSize:10,onChange:a,position:"right"})]})},parameters:{docs:{source:{code:`
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
        `}}}};var m,f,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,S,b;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};const R=["Default","Position"];export{c as Default,u as Position,R as __namedExportsOrder,V as default};
