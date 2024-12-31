import{a as l,j as d,F as u}from"./jsx-runtime-8a1697f2.js";import{d as c,l as p}from"./styled-components.browser.esm-16342693.js";const m=c.div`
  display: flex;
  align-items: center;
  justify-content: ${({position:e})=>e==="left"?"flex-start":e==="right"?"flex-end":"center"};
  color: ${({color:e})=>e??"rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  .line {
    flex: 1;
    border-top: ${({orientation:e,variant:a,color:t})=>e==="horizontal"?`1px ${a} ${t??"rgba(0, 0, 0, 0.12)"}`:"none"};
    border-left: ${({orientation:e,variant:a,color:t})=>e==="vertical"?`1px ${a} ${t??"rgba(0, 0, 0, 0.12)"}`:"none"};
    margin: ${({orientation:e})=>e==="horizontal"?"0 8px":"8px 0"};
  }

  .text {
    padding: 0 8px;
    white-space: nowrap;
  }

  ${({orientation:e})=>e==="vertical"&&p`
      flex-direction: column;
      align-items: center;
      height: 100%;

      .line {
        width: 1px;
        height: 100%;
        margin: 4px 0;
      }
    `}
`,i=({className:e="",orientation:a="horizontal",color:t,text:n,position:r="center",style:s={},variant:o="solid"})=>l(m,{role:"separator",className:e,orientation:a,color:t,position:r,style:s,variant:o,children:n!=null?d(u,{children:[r!=="right"&&l("span",{className:"line"}),l("span",{className:"text",children:n}),r!=="left"&&l("span",{className:"line"})]}):l("span",{className:"line",style:{margin:0}})}),g=i;try{i.displayName="Divider",i.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"center"'}]}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}}}}}catch{}export{g as D};
