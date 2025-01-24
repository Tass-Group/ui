import{a as b,j as t,F as Y}from"./jsx-runtime-c9381026.js";import{r as c,R as O}from"./index-8b3efc3f.js";import{d as i}from"./styled-components.browser.esm-9b53ad8e.js";import{I as k}from"./index-28fff672.js";import"./_commonjsHelpers-de833af9.js";const W=i.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${e=>e.$direction==="vertical"&&`
    height: 100%;
  `}
`,G=i.div`
  display: flex;
  width: 100%;
  height: 100%;
  ${e=>e.$direction==="vertical"&&`
    flex-direction: column;
  `}

  ${e=>e.$effect==="slide"&&`
    transform: ${e.$direction==="vertical"?`translateY(-${e.$currentIndex*100}%)`:`translateX(-${e.$currentIndex*100}%)`};
    transition: ${e.$isTransitioning?"transform 0.3s":"none"};
  `}

  ${e=>e.$effect==="fade"&&`
    position: relative;
    
    & > * {
      position: absolute;
      opacity: 0;
      transition: opacity ${e.$isTransitioning?"0.3s":"0s"};
      
      &:nth-child(${e.$currentIndex+1}) {
        opacity: 1;
      }
    }
  `}
`,J=i.div`
  flex-shrink: 0;
  width: 100%;
  ${e=>e.$direction==="vertical"&&`
    height: 100%;
  `}
`,K=i.div`
  position: absolute;
  ${e=>e.$direction==="vertical"?`
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      flex-direction: column;
    `:`
      bottom: 12px;
      left: 50%;
      transform: translateX(-50%);
    `}
  display: flex;
  gap: 4px;
`,L=i.span`
  width: 16px;
  height: 3px;
  background-color: ${e=>e.$active?"#fff":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s;
  cursor: pointer;
`,C=i.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.2);
  border: none;
  cursor: pointer;
  transition: all 0.3s;
  color: white;
  padding: 8px;

  ${e=>e.$direction==="vertical"?`
      left: 50%;
      transform: translateX(-50%) rotate(${e.$position==="prev","90deg"});
      ${e.$position==="prev"?"top: 10px":"bottom: 10px"};
    `:`
      top: 50%;
      transform: translateY(-50%);
      ${e.$position==="prev"?"left: 10px":"right: 10px"};
    `}

  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
`,m=({children:e,autoplay:h=!1,autoplaySpeed:v=3e3,dots:D=!0,arrows:F=!0,effect:N="slide",className:z,style:P,direction:a="horizontal"})=>{const[l,R]=c.useState(0),[x,$]=c.useState(!1),p=c.useRef(),o=O.Children.toArray(e),g=r=>{x||($(!0),R(r),setTimeout(()=>{$(!1)},300))},y=()=>{const r=(l+1)%o.length;g(r)},X=()=>{const r=(l-1+o.length)%o.length;g(r)};return c.useEffect(()=>(h&&(p.current=setInterval(y,v)),()=>{p.current!=null&&clearInterval(p.current)}),[h,v]),b(W,{className:z,style:P,$direction:a,children:[t(G,{$effect:N,$currentIndex:l,$isTransitioning:x,$direction:a,children:o.map((r,s)=>t(J,{$direction:a,children:r},s))}),D&&t(K,{$direction:a,children:o.map((r,s)=>t(L,{$active:s===l,onClick:()=>{g(s)}},s))}),F&&b(Y,{children:[t(C,{onClick:X,$position:"prev",$direction:a,children:t(k,{name:"chevronleft"})}),t(C,{onClick:y,$position:"next",$direction:a,children:t(k,{name:"chevronright"})})]})]})};try{m.displayName="Carousel",m.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:{value:"false"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}},autoplaySpeed:{defaultValue:{value:"3000"},description:"",name:"autoplaySpeed",required:!1,type:{name:"number"}},dots:{defaultValue:{value:"true"},description:"",name:"dots",required:!1,type:{name:"boolean"}},arrows:{defaultValue:{value:"true"},description:"",name:"arrows",required:!1,type:{name:"boolean"}},effect:{defaultValue:{value:"slide"},description:"",name:"effect",required:!1,type:{name:"enum",value:[{value:'"slide"'},{value:'"fade"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const te={title:"Data Display/Carousel",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{children:[t("div",{style:{height:200,background:"#364d79",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"1"},"1"),t("div",{style:{height:200,background:"#64778d",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"2"},"2"),t("div",{style:{height:200,background:"#2a3f6a",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"3"},"3")]}},d={args:{autoplay:!0,...n.args}},u={args:{effect:"fade",style:{height:"200px",position:"relative"},...n.args}},f={args:{direction:"vertical",style:{height:"200px"},...n.args}};var I,_,A;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: [<div key="1" style={{
      height: 200,
      background: "#364d79",
      color: "#fff",
      textAlign: "center",
      lineHeight: "200px"
    }}>1</div>, <div key="2" style={{
      height: 200,
      background: "#64778d",
      color: "#fff",
      textAlign: "center",
      lineHeight: "200px"
    }}>2</div>, <div key="3" style={{
      height: 200,
      background: "#2a3f6a",
      color: "#fff",
      textAlign: "center",
      lineHeight: "200px"
    }}>3</div>]
  }
}`,...(A=(_=n.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var V,w,S;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    ...Basic.args
  }
}`,...(S=(w=d.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var q,T,B;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    effect: "fade",
    style: {
      height: "200px",
      position: "relative"
    },
    ...Basic.args
  }
}`,...(B=(T=u.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var H,E,j;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    style: {
      height: "200px"
    },
    ...Basic.args
  }
}`,...(j=(E=f.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};const re=["Basic","AutoPlay","FadeEffect","Vertical"];export{d as AutoPlay,n as Basic,u as FadeEffect,f as Vertical,re as __namedExportsOrder,te as default};
