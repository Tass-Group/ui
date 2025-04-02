import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-BlmOqGMO.js";import{d,l as o}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const fe=d.div`
  position: relative;
  width: ${({vertical:e})=>e??!1?"12px":"100%"};
  height: ${({vertical:e})=>e??!1?"100%":"12px"};
  padding: ${({vertical:e})=>e??!1?"0":"4px 0"};
  margin: ${({vertical:e})=>e??!1?"6px 10px":"10px 6px"};
  touch-action: none;
`,pe=d.div`
  position: absolute;
  ${({vertical:e})=>e??!1?o`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `:o`
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 4px;
    `}
  background-color: #f5f5f5;
  border-radius: 2px;
  transition: background-color 0.3s;
`,K=d.div`
  position: absolute;
  background-color: ${({disabled:e})=>e??!1?"#bfbfbf":"#1890ff"};
  border-radius: 2px;
  transition: background-color 0.3s;
  
  ${({vertical:e,offset:s,length:p})=>e??!1?o`
      left: 50%;
      transform: translateX(-50%);
      bottom: ${s}%;
      height: ${p}%;
      width: 4px;
    `:o`
      top: 50%;
      transform: translateY(-50%);
      left: ${s}%;
      width: ${p}%;
      height: 4px;
    `}
`,me=d.div.attrs({role:"slider"})`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border: 2px solid ${({disabled:e})=>e??!1?"#bfbfbf":"#1890ff"};
  border-radius: 50%;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  transition: border-color 0.3s, box-shadow 0.3s;
  touch-action: pan-x;
  
  ${({vertical:e,offset:s})=>e??!1?o`
      left: 50%;
      bottom: ${s}%;
      transform: translate(-50%, 50%);
    `:o`
      top: 50%;
      left: ${s}%;
      transform: translate(-50%, -50%);
    `}
  
  ${({dragging:e,disabled:s})=>!(s??!1)&&(e??!1)&&o`
    border-color: #1890ff;
    box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
  `}
  
  &:hover {
    ${({disabled:e})=>!(e??!1)&&o`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
  
  &:active {
    ${({disabled:e})=>!(e??!1)&&o`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
`,be=d.div`
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  
  ${({vertical:e,offset:s})=>e??!1?o`
      left: 100%;
      margin-left: 12px;
      bottom: ${s}%;
      transform: translateY(50%);
    `:o`
      top: 100%;
      margin-top: 10px;
      left: ${s}%;
      transform: translateX(-50%);
    `}
`,ge=d.div`
  position: absolute;
  background: transparent;
  pointer-events: none;
  
  ${({vertical:e})=>e??!1?o`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `:o`
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 4px;
    `}
`,xe=d.span`
  position: absolute;
  width: 8px;
  height: 8px;
  border: 2px solid ${({$active:e})=>e??!1?"#1890ff":"#e8e8e8"};
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  
  ${({vertical:e,offset:s})=>e??!1?o`
      left: 50%;
      bottom: ${s}%;
      transform: translate(-50%, 50%);
    `:o`
      top: 50%;
      left: ${s}%;
      transform: translate(-50%, -50%);
    `}
`,he=d.div`
  position: absolute;
  display: ${({$visible:e})=>e??!1?"block":"none"};
  padding: 6px 8px;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  transform: translateX(-50%);
  
  ${({vertical:e,offset:s})=>e??!1?o`
      left: -30px;
      bottom: ${s}%;
      transform: translateY(50%);
    `:o`
      top: -30px;
      left: ${s}%;
    `}
`,g=({min:e=0,max:s=100,step:p=1,defaultValue:re=0,value:V,disabled:x=!1,vertical:u=!1,marks:S,included:ae=!0,range:$=!1,onChange:m,onAfterChange:b,className:ne,style:se,tooltipVisible:le=!0})=>{const[oe,Y]=y.useState(re),l=V??oe;y.useEffect(()=>{V!==void 0&&Y(V)},[V]);const[E,R]=y.useState(!1),h=y.useRef(null),c=y.useRef(-1),f=r=>(r-e)/(s-e)*100,C=r=>{const n=r/100*(s-e)+e,i=p!==0?Math.round(n/p)*p:n;return Math.max(e,Math.min(s,i))},N=(r,t)=>{x||(r.preventDefault(),c.current=t,R(!0),document.addEventListener("mousemove",_),document.addEventListener("mouseup",P))},_=r=>{if(h.current===null||c.current===-1)return;const t=h.current.getBoundingClientRect(),n=u?(t.bottom-r.clientY)/t.height*100:(r.clientX-t.left)/t.width*100,i=C(n);T(i)},P=()=>{R(!1),c.current=-1,document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",P),b==null||b(l)},T=r=>{if($&&Array.isArray(l)){const t=[...l];t[c.current]=r,c.current===0?t[0]=Math.min(t[0],t[1]):t[1]=Math.max(t[0],t[1]),Y(t),m==null||m(t)}else $||(Y(r),m==null||m(r))},ie=r=>{if(x||h.current===null)return;const t=h.current.getBoundingClientRect(),n=u?(t.bottom-r.clientY)/t.height*100:(r.clientX-t.left)/t.width*100,i=C(n);if($&&Array.isArray(l)){const[v,D]=l;c.current=Math.abs(i-v)<Math.abs(i-D)?0:1}else c.current=0;T(i),b==null||b(l)},ue=()=>S===void 0?null:Object.entries(S).map(([r,t])=>{const n=f(Number(r)),i=typeof t=="object"&&t!==null&&"label"in t?t.label:t,v=typeof t=="object"&&t!==null&&"style"in t?t.style:void 0;return a.jsx(be,{vertical:u,offset:n,style:v,children:i},r)}),de=()=>{if(S==null)return null;const r=Object.keys(S).map(Number),t=Array.isArray(l)?l:[l];return a.jsx(ge,{vertical:u,children:r.map(n=>{const i=f(n),v=ae&&t.some(D=>D>=n);return a.jsx(xe,{vertical:u,offset:i,$active:v},n)})})},ce=(r,t)=>{if(r.touches[0]===void 0)return;const n=r.touches[0],i={preventDefault:()=>{},clientX:n.clientX,clientY:n.clientY,target:r.target,currentTarget:r.currentTarget,stopPropagation:()=>{},altKey:!1,bubbles:!0,button:0,buttons:1,cancelable:!0,ctrlKey:!1,detail:1,eventPhase:0,metaKey:!1,movementX:0,movementY:0,pageX:n.pageX,pageY:n.pageY,relatedTarget:null,screenX:n.screenX,screenY:n.screenY,shiftKey:!1,type:"mousedown",view:window,getModifierState:()=>!1,isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1,persist:()=>{},nativeEvent:new MouseEvent("mousedown")};N(i,t)},k=(r,t)=>a.jsxs(a.Fragment,{children:[a.jsx(me,{vertical:u,offset:f(r),dragging:E&&c.current===t,disabled:x,onMouseDown:n=>{N(n,t)},onTouchStart:n=>{ce(n,t)}}),a.jsx(he,{$visible:le||E,vertical:u,offset:f(r),children:r})]});return a.jsxs(fe,{ref:h,className:ne,style:se,vertical:u,children:[a.jsx(pe,{vertical:u,onClick:ie}),$&&Array.isArray(l)?a.jsxs(a.Fragment,{children:[a.jsx(K,{vertical:u,offset:f(l[0]),length:f(l[1])-f(l[0]),disabled:x}),k(l[0],0),k(l[1],1)]}):a.jsxs(a.Fragment,{children:[a.jsx(K,{vertical:u,offset:0,length:f(l),disabled:x}),k(l,0)]}),de(),ue()]})};try{g.displayName="Slider",g.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number | [number, number]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | [number, number]"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"",name:"marks",required:!1,type:{name:"SliderMarks"}},included:{defaultValue:{value:"true"},description:"",name:"included",required:!1,type:{name:"boolean"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number | [number, number]) => void)"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"((value: number | [number, number]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tooltipVisible:{defaultValue:{value:"true"},description:"",name:"tooltipVisible",required:!1,type:{name:"boolean"}},tooltipPlacement:{defaultValue:null,description:"",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'}]}}}}}catch{}const te=d.div`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;

  .slider-item {
    margin-bottom: 60px;
  }

  .vertical-container {
    height: 300px;
    padding: 0 60px;
    display: flex;
    gap: 60px;
  }
`,$e={title:"Data Entry/Slider",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>a.jsx(te,{children:a.jsx("div",{className:"slider-item",children:a.jsx(e,{})})})]},w={args:{defaultValue:30}},j={args:{range:!0,defaultValue:[20,50]}},M={args:{marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}},defaultValue:37}},q={args:{disabled:!0,defaultValue:30}},X={render:()=>a.jsxs("div",{className:"vertical-container",children:[a.jsx(g,{vertical:!0,defaultValue:30}),a.jsx(g,{vertical:!0,range:!0,defaultValue:[20,50]}),a.jsx(g,{vertical:!0,marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}},defaultValue:37})]}),decorators:[e=>a.jsx(te,{children:a.jsx(e,{})})]};var L,O,F;w.parameters={...w.parameters,docs:{...(L=w.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    defaultValue: 30
  }
}`,...(F=(O=w.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var I,W,z;j.parameters={...j.parameters,docs:{...(I=j.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    range: true,
    defaultValue: [20, 50]
  }
}`,...(z=(W=j.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var B,H,A;M.parameters={...M.parameters,docs:{...(B=M.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    marks: {
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: {
        style: {
          color: "#f50"
        },
        label: "100°C"
      }
    },
    defaultValue: 37
  }
}`,...(A=(H=M.parameters)==null?void 0:H.docs)==null?void 0:A.source}}};var U,G,J;q.parameters={...q.parameters,docs:{...(U=q.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 30
  }
}`,...(J=(G=q.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,Z,ee;X.parameters={...X.parameters,docs:{...(Q=X.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <div className="vertical-container">
      <Slider vertical defaultValue={30} />
      <Slider vertical range defaultValue={[20, 50]} />
      <Slider vertical marks={{
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: {
        style: {
          color: "#f50"
        },
        label: "100°C"
      }
    }} defaultValue={37} />
    </div>,
  decorators: [Story => <StoryContainer>
        <Story />
      </StoryContainer>]
}`,...(ee=(Z=X.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};const we=["Default","Range","WithMarks","Disabled","Vertical"];export{w as Default,q as Disabled,j as Range,X as Vertical,M as WithMarks,we as __namedExportsOrder,$e as default};
