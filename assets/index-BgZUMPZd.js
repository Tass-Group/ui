import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{d as n,l as o,m as x}from"./styled-components.browser.esm-BgH1a_-m.js";const w=x`
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`,l=o`
  background: ${e=>e.$active??!1?o`linear-gradient(
        90deg,
        rgba(190, 190, 190, 0.2) 25%,
        rgba(129, 129, 129, 0.24) 37%,
        rgba(190, 190, 190, 0.2) 63%
      )`:"#f5f5f5"};
  background-size: 400% 100%;
  animation: ${e=>e.$active??!1?o`${w} 1.4s ease infinite`:"none"};
`,y=n.div.attrs({className:"sc-avatar"})`
  ${l}
  display: inline-block;
  vertical-align: top;
  flex-shrink: 0;
  width: ${e=>{switch(e.$size){case"small":return"32px";case"large":return"80px";default:return"40px"}}};
  height: ${e=>{switch(e.$size){case"small":return"32px";case"large":return"80px";default:return"40px"}}};
  border-radius: ${e=>e.$shape==="circle"?"50%":"4px"};
  margin-right: 16px;
`,v=n.div.attrs({className:"sc-title"})`
  ${l}
  width: ${e=>e.$width??"38%"};
  height: 20px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`,k=n.div.attrs({className:"sc-paragraph"})`
  ${l}
  width: ${e=>Array.isArray(e.$width)?e.$width[e.$rows??0]??"100%":e.$width??"100%"};
  height: 16px;
  margin-bottom: 12px;
  border-radius: 4px;

  &:last-of-type {
    width: ${e=>Array.isArray(e.$width)?e.$width[e.$rows??0]??"61%":e.$width??"61%"};
    margin-bottom: 0;
  }
`,j=n.div.attrs({className:"sc-skeleton sc-content","data-testid":"skeleton"})`
  display: flex;
  width: 100%;
  min-width: 300px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: ${e=>e.$round??!1?"8px":"0"};

  > div:last-child {
    flex: 1;
  }
`,p=({loading:e=!0,active:s,children:m,avatar:a=!1,title:r=!0,paragraph:i=!0,round:h})=>{if(!e)return t.jsx(t.Fragment,{children:m});const d=typeof a=="object"?a:{},f=typeof r=="object"?r:{},u=typeof i=="object"?i:{},g=a===!0||typeof a=="object",$=r===!0||typeof r=="object",b=i===!0||typeof i=="object";return t.jsxs(j,{$round:h,children:[g&&t.jsx(y,{$size:d.size,$shape:d.shape,$active:s}),t.jsxs("div",{style:{width:"100%"},children:[$&&t.jsx(v,{$width:f.width,$active:s}),b&&t.jsx(t.Fragment,{children:Array.from({length:u.rows??1}).map((S,c)=>t.jsx(k,{$rows:c,$width:u.width,$active:s},c))})]})]})};try{p.displayName="Skeleton",p.__docgenInfo={description:"",displayName:"Skeleton",props:{loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},avatar:{defaultValue:{value:"false"},description:"",name:"avatar",required:!1,type:{name:'boolean | { size?: "default" | "small" | "large"; shape?: "circle" | "square"; } | undefined'}},title:{defaultValue:{value:"true"},description:"",name:"title",required:!1,type:{name:"boolean | { width?: string | number; }"}},paragraph:{defaultValue:{value:"true"},description:"",name:"paragraph",required:!1,type:{name:"boolean | { rows?: number; width?: string | number | (string | number)[]; } | undefined"}},round:{defaultValue:null,description:"",name:"round",required:!1,type:{name:"boolean"}}}}}catch{}export{p as S};
