import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as c,R as X}from"./index-BlmOqGMO.js";import{d as i}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as b}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";const Y=i.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  ${e=>e.$direction==="vertical"&&`
    height: 100%;
  `}
`,O=i.div`
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
`,W=i.div`
  flex-shrink: 0;
  width: 100%;
  ${e=>e.$direction==="vertical"&&`
    height: 100%;
  `}
`,G=i.div`
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
`,J=i.span`
  width: 16px;
  height: 3px;
  background-color: ${e=>e.$active?"#fff":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s;
  cursor: pointer;
`,j=i.button`
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
`,m=({children:e,autoplay:h=!1,autoplaySpeed:x=3e3,dots:H=!0,arrows:D=!0,effect:N="slide",className:R,style:z,direction:a="horizontal"})=>{const[l,F]=c.useState(0),[v,$]=c.useState(!1),p=c.useRef(),o=X.Children.toArray(e),g=r=>{v||($(!0),F(r),setTimeout(()=>{$(!1)},300))},y=()=>{const r=(l+1)%o.length;g(r)},P=()=>{const r=(l-1+o.length)%o.length;g(r)};return c.useEffect(()=>(h&&(p.current=setInterval(y,x)),()=>{p.current!=null&&clearInterval(p.current)}),[h,x]),t.jsxs(Y,{className:R,style:z,$direction:a,children:[t.jsx(O,{$effect:N,$currentIndex:l,$isTransitioning:v,$direction:a,children:o.map((r,s)=>t.jsx(W,{$direction:a,children:r},s))}),H&&t.jsx(G,{$direction:a,children:o.map((r,s)=>t.jsx(J,{$active:s===l,onClick:()=>{g(s)}},s))}),D&&t.jsxs(t.Fragment,{children:[t.jsx(j,{onClick:P,$position:"prev",$direction:a,children:t.jsx(b,{name:"chevronleft"})}),t.jsx(j,{onClick:y,$position:"next",$direction:a,children:t.jsx(b,{name:"chevronright"})})]})]})};try{m.displayName="Carousel",m.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:{value:"false"},description:"",name:"autoplay",required:!1,type:{name:"boolean"}},autoplaySpeed:{defaultValue:{value:"3000"},description:"",name:"autoplaySpeed",required:!1,type:{name:"number"}},dots:{defaultValue:{value:"true"},description:"",name:"dots",required:!1,type:{name:"boolean"}},arrows:{defaultValue:{value:"true"},description:"",name:"arrows",required:!1,type:{name:"boolean"}},effect:{defaultValue:{value:"slide"},description:"",name:"effect",required:!1,type:{name:"enum",value:[{value:'"slide"'},{value:'"fade"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},direction:{defaultValue:{value:"horizontal"},description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}}}}}catch{}const Z={title:"Data Display/Carousel",component:m,parameters:{layout:"fullscreen"},tags:["autodocs"]},n={args:{children:[t.jsx("div",{style:{height:200,background:"#364d79",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"1"},"1"),t.jsx("div",{style:{height:200,background:"#64778d",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"2"},"2"),t.jsx("div",{style:{height:200,background:"#2a3f6a",color:"#fff",textAlign:"center",lineHeight:"200px"},children:"3"},"3")]}},d={args:{autoplay:!0,...n.args}},u={args:{effect:"fade",style:{height:"200px",position:"relative"},...n.args}},f={args:{direction:"vertical",style:{height:"200px"},...n.args}};var k,C,I;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(I=(C=n.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var _,A,V;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    autoplay: true,
    ...Basic.args
  }
}`,...(V=(A=d.parameters)==null?void 0:A.docs)==null?void 0:V.source}}};var w,S,q;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    effect: "fade",
    style: {
      height: "200px",
      position: "relative"
    },
    ...Basic.args
  }
}`,...(q=(S=u.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var T,B,E;f.parameters={...f.parameters,docs:{...(T=f.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    direction: "vertical",
    style: {
      height: "200px"
    },
    ...Basic.args
  }
}`,...(E=(B=f.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};const ee=["Basic","AutoPlay","FadeEffect","Vertical"];export{d as AutoPlay,n as Basic,u as FadeEffect,f as Vertical,ee as __namedExportsOrder,Z as default};
