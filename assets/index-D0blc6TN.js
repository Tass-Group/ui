import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{l as d,d as u}from"./styled-components.browser.esm-BgH1a_-m.js";const p=u.div`
  display: flex;
  align-items: center;
  justify-content: ${({position:e})=>e==="left"?"flex-start":e==="right"?"flex-end":"center"};
  color: ${({color:e})=>e??"rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  .line {
    flex: 1;
    border-top: ${({orientation:e,variant:t,color:l})=>e==="horizontal"?`1px ${t} ${l??"rgba(0, 0, 0, 0.12)"}`:"none"};
    border-left: ${({orientation:e,variant:t,color:l})=>e==="vertical"?`1px ${t} ${l??"rgba(0, 0, 0, 0.12)"}`:"none"};
    margin: ${({orientation:e})=>e==="horizontal"?"0 8px":"8px 0"};
  }

  .text {
    padding: 0 8px;
    white-space: nowrap;
  }

  ${({orientation:e})=>e==="vertical"&&d`
      flex-direction: column;
      align-items: center;
      height: 100%;

      .line {
        width: 1px;
        height: 100%;
        margin: 4px 0;
      }
    `}
`,n=({className:e="",orientation:t="horizontal",color:l,text:i,position:r="center",style:s={},variant:o="solid"})=>a.jsx(p,{role:"separator",className:e,orientation:t,color:l,position:r,style:s,variant:o,children:i!=null?a.jsxs(a.Fragment,{children:[r!=="right"&&a.jsx("span",{className:"line"}),a.jsx("span",{className:"text",children:i}),r!=="left"&&a.jsx("span",{className:"line"})]}):a.jsx("span",{className:"line",style:{margin:0}})});try{n.displayName="Divider",n.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}}}}}catch{}export{n as D};
