import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{d as l}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as s}from"./index-CbqPYD7y.js";const g=l.div`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({$position:e})=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}}};
`,a=l.button`
  min-width: 32px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({$active:e})=>e===!0?"#1890ff":"#d9d9d9"};
  background-color: ${({$active:e})=>e===!0?"#1890ff":"#ffffff"};
  color: ${({$active:e})=>e===!0?"#ffffff":"rgba(0, 0, 0, 0.85)"};
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
`,h=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.45);
`,d=({current:e,total:c,pageSize:u,onChange:f,position:p="center"})=>{const i=Math.ceil(c/u),o=t=>{t>=1&&t<=i&&f(t)},m=()=>{const t=[];for(let n=1;n<=i;n++)n===1||n===i||n>=e-2&&n<=e+2?t.push(r.jsx(a,{$active:e===n,onClick:()=>{o(n)},children:n},n)):(n===e-3||n===e+3)&&t.push(r.jsx(h,{children:"..."},`ellipsis-${n}`));return t};return r.jsxs(g,{$position:p,children:[r.jsx(a,{onClick:()=>{o(e-1)},disabled:e<=1,children:r.jsx(s,{name:"chevronleft",size:12})}),m(),r.jsx(a,{onClick:()=>{o(e+1)},disabled:e>=i,children:r.jsx(s,{name:"chevronright",size:12})})]})};try{d.displayName="Pagination",d.__docgenInfo={description:"",displayName:"Pagination",props:{current:{defaultValue:null,description:"",name:"current",required:!0,type:{name:"number"}},total:{defaultValue:null,description:"",name:"total",required:!0,type:{name:"number"}},pageSize:{defaultValue:null,description:"",name:"pageSize",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(page: number) => void"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}}}}}catch{}export{d as P};
