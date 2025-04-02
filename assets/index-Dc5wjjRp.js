import{j as s}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-BlmOqGMO.js";import{d as m,l as V}from"./styled-components.browser.esm-BgH1a_-m.js";import{D as j}from"./index--ehRUsl2.js";const $=m.label`
  display: inline-flex;
  align-items: center;
  cursor: ${({$disabled:e})=>e??!1?"not-allowed":"pointer"};
  opacity: ${({$disabled:e})=>e??!1?.5:1};
`,A=m.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`,N=m.span`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  background-color: ${({$checked:e,$indeterminate:n})=>(e??!1)||(n??!1)?"#1890ff":"#fff"};
  border-color: ${({$checked:e,$indeterminate:n})=>(e??!1)||(n??!1)?"#1890ff":"#d9d9d9"};

  &::after {
    position: absolute;
    content: '';
    transition: all 0.2s;
    
    ${({$checked:e,$indeterminate:n})=>n??!1?V`
          top: 7px;
          left: 3px;
          width: 8px;
          height: 2px;
          background: #fff;
        `:e??!1?V`
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
`,E=m.span`
  padding-left: 8px;
  font-size: 14px;
`,I=m.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
`,p=({checked:e,defaultChecked:n=!1,disabled:a=!1,indeterminate:r=!1,onChange:o,className:y,style:v,children:h})=>{const[x,t]=b.useState(n);b.useEffect(()=>{e!==void 0&&t(e)},[e]);const f=d=>{if(!a){const i=d.target.checked;e===void 0&&t(i),o==null||o(i,d)}};return s.jsxs($,{className:y,style:v,$disabled:a,children:[s.jsx(A,{type:"checkbox",checked:x,disabled:a,onChange:f}),s.jsx(N,{$checked:x,$disabled:a,$indeterminate:r}),h!==void 0&&s.jsx(E,{children:h})]})},g=({options:e=[],defaultValue:n=[],value:a,onChange:r,disabled:o=!1,className:y,style:v,showSelectAll:h=!1,selectAllText:x="Select All"})=>{const[t,f]=b.useState(n);b.useEffect(()=>{a!==void 0&&f(a)},[a]);const d=e.filter(l=>!(l.disabled??!1)).map(l=>l.value),i=d.length,k=t.filter(l=>d.includes(l)).length,q=i>0&&k===i,_=k>0&&k<i,w=l=>{const c=l?[...t,...d.filter(u=>!t.includes(u))]:t.filter(u=>!d.includes(u));a===void 0&&f(c),r==null||r(c)},C=(l,c)=>{const u=c?[...t,l]:t.filter(S=>S!==l);a===void 0&&f(u),r==null||r(u)};return s.jsxs(I,{className:y,style:v,children:[h&&s.jsxs(s.Fragment,{children:[s.jsx(p,{checked:q,indeterminate:_,disabled:o||i===0,onChange:w,children:x}),i>0&&i!==0&&s.jsx(j,{})]}),e.map(l=>s.jsx(p,{checked:t.includes(l.value),disabled:o||l.disabled,onChange:c=>{C(l.value,c)},children:l.label},l.value))]})},G=p;G.Group=g;try{p.displayName="Checkbox",p.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},defaultChecked:{defaultValue:{value:"false"},description:"",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:{value:"false"},description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean, e: ChangeEvent<HTMLInputElement>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}try{g.displayName="Group",g.__docgenInfo={description:"",displayName:"Group",props:{options:{defaultValue:{value:"[]"},description:"",name:"options",required:!1,type:{name:"CheckboxOptionType[]"}},defaultValue:{defaultValue:{value:"[]"},description:"",name:"defaultValue",required:!1,type:{name:"(string | number)[]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"(string | number)[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checkedValues: (string | number)[]) => void)"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},showSelectAll:{defaultValue:{value:"false"},description:"",name:"showSelectAll",required:!1,type:{name:"boolean"}},selectAllText:{defaultValue:{value:"Select All"},description:"",name:"selectAllText",required:!1,type:{name:"string"}}}}}catch{}export{G as C};
