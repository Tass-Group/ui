import{a as V,j as o,F as C}from"./jsx-runtime-c9381026.js";import{r as y}from"./index-8b3efc3f.js";import{d,l as s}from"./styled-components.browser.esm-9b53ad8e.js";import"./_commonjsHelpers-de833af9.js";const me=d.div`
  position: relative;
  width: ${({vertical:e})=>e??!1?"12px":"100%"};
  height: ${({vertical:e})=>e??!1?"100%":"12px"};
  padding: ${({vertical:e})=>e??!1?"0":"4px 0"};
  margin: ${({vertical:e})=>e??!1?"6px 10px":"10px 6px"};
  touch-action: none;
`,be=d.div`
  position: absolute;
  ${({vertical:e})=>e??!1?s`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `:s`
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 4px;
    `}
  background-color: #f5f5f5;
  border-radius: 2px;
  transition: background-color 0.3s;
`,L=d.div`
  position: absolute;
  background-color: ${({disabled:e})=>e??!1?"#bfbfbf":"#1890ff"};
  border-radius: 2px;
  transition: background-color 0.3s;
  
  ${({vertical:e,offset:n,length:p})=>e??!1?s`
      left: 50%;
      transform: translateX(-50%);
      bottom: ${n}%;
      height: ${p}%;
      width: 4px;
    `:s`
      top: 50%;
      transform: translateY(-50%);
      left: ${n}%;
      width: ${p}%;
      height: 4px;
    `}
`,ge=d.div.attrs({role:"slider"})`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border: 2px solid ${({disabled:e})=>e??!1?"#bfbfbf":"#1890ff"};
  border-radius: 50%;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  transition: border-color 0.3s, box-shadow 0.3s;
  touch-action: pan-x;
  
  ${({vertical:e,offset:n})=>e??!1?s`
      left: 50%;
      bottom: ${n}%;
      transform: translate(-50%, 50%);
    `:s`
      top: 50%;
      left: ${n}%;
      transform: translate(-50%, -50%);
    `}
  
  ${({dragging:e,disabled:n})=>!(n??!1)&&(e??!1)&&s`
    border-color: #1890ff;
    box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
  `}
  
  &:hover {
    ${({disabled:e})=>!(e??!1)&&s`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
  
  &:active {
    ${({disabled:e})=>!(e??!1)&&s`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
`,he=d.div`
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  
  ${({vertical:e,offset:n})=>e??!1?s`
      left: 100%;
      margin-left: 12px;
      bottom: ${n}%;
      transform: translateY(50%);
    `:s`
      top: 100%;
      margin-top: 10px;
      left: ${n}%;
      transform: translateX(-50%);
    `}
`,ve=d.div`
  position: absolute;
  background: transparent;
  pointer-events: none;
  
  ${({vertical:e})=>e??!1?s`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `:s`
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
  
  ${({vertical:e,offset:n})=>e??!1?s`
      left: 50%;
      bottom: ${n}%;
      transform: translate(-50%, 50%);
    `:s`
      top: 50%;
      left: ${n}%;
      transform: translate(-50%, -50%);
    `}
`,ye=d.div`
  position: absolute;
  display: ${({$visible:e})=>e??!1?"block":"none"};
  padding: 6px 8px;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  transform: translateX(-50%);
  
  ${({vertical:e,offset:n})=>e??!1?s`
      left: -30px;
      bottom: ${n}%;
      transform: translateY(50%);
    `:s`
      top: -30px;
      left: ${n}%;
    `}
`,g=({min:e=0,max:n=100,step:p=1,defaultValue:ne=0,value:S,disabled:h=!1,vertical:u=!1,marks:$,included:le=!0,range:w=!1,onChange:m,onAfterChange:b,className:se,style:oe,tooltipVisible:ie=!0})=>{const[ue,D]=y.useState(ne),l=S??ue;y.useEffect(()=>{S!==void 0&&D(S)},[S]);const[N,R]=y.useState(!1),v=y.useRef(null),c=y.useRef(-1),f=r=>(r-e)/(n-e)*100,_=r=>{const a=r/100*(n-e)+e,i=p!==0?Math.round(a/p)*p:a;return Math.max(e,Math.min(n,i))},j=(r,t)=>{h||(r.preventDefault(),c.current=t,R(!0),document.addEventListener("mousemove",P),document.addEventListener("mouseup",T))},P=r=>{if(v.current===null||c.current===-1)return;const t=v.current.getBoundingClientRect(),a=u?(t.bottom-r.clientY)/t.height*100:(r.clientX-t.left)/t.width*100,i=_(a);K(i)},T=()=>{R(!1),c.current=-1,document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",T),b==null||b(l)},K=r=>{if(w&&Array.isArray(l)){const t=[...l];t[c.current]=r,c.current===0?t[0]=Math.min(t[0],t[1]):t[1]=Math.max(t[0],t[1]),D(t),m==null||m(t)}else w||(D(r),m==null||m(r))},de=r=>{if(h||v.current===null)return;const t=v.current.getBoundingClientRect(),a=u?(t.bottom-r.clientY)/t.height*100:(r.clientX-t.left)/t.width*100,i=_(a);if(w&&Array.isArray(l)){const[x,B]=l;c.current=Math.abs(i-x)<Math.abs(i-B)?0:1}else c.current=0;K(i),b==null||b(l)},ce=()=>$===void 0?null:Object.entries($).map(([r,t])=>{const a=f(Number(r)),i=typeof t=="object"&&t!==null&&"label"in t?t.label:t,x=typeof t=="object"&&t!==null&&"style"in t?t.style:void 0;return o(he,{vertical:u,offset:a,style:x,children:i},r)}),fe=()=>{if($==null)return null;const r=Object.keys($).map(Number),t=Array.isArray(l)?l:[l];return o(ve,{vertical:u,children:r.map(a=>{const i=f(a),x=le&&t.some(B=>B>=a);return o(xe,{vertical:u,offset:i,$active:x},a)})})},pe=(r,t)=>{if(r.touches[0]===void 0)return;const a=r.touches[0],i={preventDefault:()=>{},clientX:a.clientX,clientY:a.clientY,target:r.target,currentTarget:r.currentTarget,stopPropagation:()=>{},altKey:!1,bubbles:!0,button:0,buttons:1,cancelable:!0,ctrlKey:!1,detail:1,eventPhase:0,metaKey:!1,movementX:0,movementY:0,pageX:a.pageX,pageY:a.pageY,relatedTarget:null,screenX:a.screenX,screenY:a.screenY,shiftKey:!1,type:"mousedown",view:window,getModifierState:()=>!1,isDefaultPrevented:()=>!1,isPropagationStopped:()=>!1,persist:()=>{},nativeEvent:new MouseEvent("mousedown")};j(i,t)},E=(r,t)=>V(C,{children:[o(ge,{vertical:u,offset:f(r),dragging:N&&c.current===t,disabled:h,onMouseDown:a=>{j(a,t)},onTouchStart:a=>{pe(a,t)}}),o(ye,{$visible:ie||N,vertical:u,offset:f(r),children:r})]});return V(me,{ref:v,className:se,style:oe,vertical:u,children:[o(be,{vertical:u,onClick:de}),w&&Array.isArray(l)?V(C,{children:[o(L,{vertical:u,offset:f(l[0]),length:f(l[1])-f(l[0]),disabled:h}),E(l[0],0),E(l[1],1)]}):V(C,{children:[o(L,{vertical:u,offset:0,length:f(l),disabled:h}),E(l,0)]}),fe(),ce()]})};try{g.displayName="Slider",g.__docgenInfo={description:"",displayName:"Slider",props:{min:{defaultValue:{value:"0"},description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:{value:"100"},description:"",name:"max",required:!1,type:{name:"number"}},step:{defaultValue:{value:"1"},description:"",name:"step",required:!1,type:{name:"number"}},defaultValue:{defaultValue:{value:"0"},description:"",name:"defaultValue",required:!1,type:{name:"number | [number, number]"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"number | [number, number]"}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},vertical:{defaultValue:{value:"false"},description:"",name:"vertical",required:!1,type:{name:"boolean"}},marks:{defaultValue:null,description:"",name:"marks",required:!1,type:{name:"SliderMarks"}},included:{defaultValue:{value:"true"},description:"",name:"included",required:!1,type:{name:"boolean"}},range:{defaultValue:{value:"false"},description:"",name:"range",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number | [number, number]) => void)"}},onAfterChange:{defaultValue:null,description:"",name:"onAfterChange",required:!1,type:{name:"((value: number | [number, number]) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},tooltipVisible:{defaultValue:{value:"true"},description:"",name:"tooltipVisible",required:!1,type:{name:"boolean"}},tooltipPlacement:{defaultValue:null,description:"",name:"tooltipPlacement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}}}}}catch{}const ae=d.div`
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
`,Me={title:"Data Entry/Slider",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],decorators:[e=>o(ae,{children:o("div",{className:"slider-item",children:o(e,{})})})]},M={args:{defaultValue:30}},q={args:{range:!0,defaultValue:[20,50]}},X={args:{marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}},defaultValue:37}},Y={args:{disabled:!0,defaultValue:30}},k={render:()=>V("div",{className:"vertical-container",children:[o(g,{vertical:!0,defaultValue:30}),o(g,{vertical:!0,range:!0,defaultValue:[20,50]}),o(g,{vertical:!0,marks:{0:"0°C",26:"26°C",37:"37°C",100:{style:{color:"#f50"},label:"100°C"}},defaultValue:37})]}),decorators:[e=>o(ae,{children:o(e,{})})]};var O,I,W;M.parameters={...M.parameters,docs:{...(O=M.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    defaultValue: 30
  }
}`,...(W=(I=M.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var z,F,H;q.parameters={...q.parameters,docs:{...(z=q.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    range: true,
    defaultValue: [20, 50]
  }
}`,...(H=(F=q.parameters)==null?void 0:F.docs)==null?void 0:H.source}}};var A,U,G;X.parameters={...X.parameters,docs:{...(A=X.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(G=(U=X.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var J,Q,Z;Y.parameters={...Y.parameters,docs:{...(J=Y.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 30
  }
}`,...(Z=(Q=Y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var ee,te,re;k.parameters={...k.parameters,docs:{...(ee=k.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(re=(te=k.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const qe=["Default","Range","WithMarks","Disabled","Vertical"];export{M as Default,Y as Disabled,q as Range,k as Vertical,X as WithMarks,qe as __namedExportsOrder,Me as default};
