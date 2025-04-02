import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as j}from"./index-BlmOqGMO.js";import{c as J}from"./client-CDUMOAsi.js";import{I as C}from"./index-CbqPYD7y.js";import{d as l,m as H}from"./styled-components.browser.esm-BgH1a_-m.js";import{B as o}from"./index-DjHEwKNG.js";import"./index-yBjzXJbu.js";import"./index-fNjTmf9T.js";const K=H`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,L=H`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`,P=l.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
`,Q=l.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 8px;
  pointer-events: all;
  animation: ${({$visible:s})=>s?K:L} 0.3s ease-in-out;
  min-width: 250px;
  position: relative;

  ${({$type:s})=>{switch(s){case"success":return`
          border: 1px solid #b7eb8f;
          color: #52c41a;
        `;case"info":return`
          border: 1px solid #91caff;
          color: #1890ff;
        `;case"warning":return`
          border: 1px solid #ffe58f;
          color: #faad14;
        `;case"error":return`
          border: 1px solid #ffa39e;
          color: #ff4d4f;
        `;default:return""}}}
`,U=l.span`
  font-size: 14px;
  line-height: 1.5715;
  margin-left: 8px;
  margin-right: 24px;
`,Z=l.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5715;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`,ee=l.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;let c=null;const w=[],se=({type:s="info",content:i,duration:n=3,onClose:a})=>{const[M,t]=j.useState(!0);j.useEffect(()=>{if(n>0){const S=setTimeout(()=>{t(!1),a==null||a()},n*1e3);return()=>{clearTimeout(S)}}},[n,a]);const b=()=>{t(!1),a==null||a()},k=S=>{switch(S){case"success":return"success";case"info":return"info";case"warning":return"warning";case"error":return"danger";default:return"info"}};return M?e.jsxs(Q,{$type:s,$visible:M,children:[e.jsx(ee,{children:e.jsx(C,{name:k(s),className:`icons icon-${k(s)}`})}),e.jsx(U,{children:i}),e.jsx(Z,{className:"message-close",onClick:b,children:e.jsx(C,{name:"danger",className:"icons icon-close"})})]}):null},m=s=>(i,n,a)=>{if(document.querySelector(".tass-message-container")===null){const t=document.createElement("div");t.className="tass-message-container",document.body.appendChild(t),c={root:J.createRoot(t),container:t}}w.push(e.jsx(se,{type:s,content:i,duration:n,onClose:a},Date.now())),re()},re=()=>{if(c!==null&&w.length>0){const{root:s}=c;s.render(e.jsx(P,{children:w}))}},ae=()=>{var s;if(c!==null){const{root:i,container:n}=c;i.unmount(),(s=n.parentNode)==null||s.removeChild(n),c=null,w.length=0}},r={success:m("success"),info:m("info"),warning:m("warning"),error:m("error"),destroy:ae},ue={title:"Feedback/Message",component:o,parameters:{layout:"centered"},tags:["autodocs"]},g={render:()=>e.jsx(o,{title:"Show Success Message",onClick:()=>{r.success("This is a success message")}})},u={render:()=>e.jsx(o,{title:"Show Info Message",onClick:()=>{r.info("This is an info message")}})},d={render:()=>e.jsx(o,{title:"Show Warning Message",onClick:()=>{r.warning("This is a warning message")}})},p={render:()=>e.jsx(o,{title:"Show Error Message",onClick:()=>{r.error("This is an error message")}})},f={render:()=>e.jsx(o,{title:"Show Message (5s)",onClick:()=>{r.success("This message will stay for 5 seconds",5)}})},h={render:()=>e.jsx(o,{title:"Show Message with Callback",onClick:()=>{r.success("This message has a callback",3,()=>{console.log("Message closed")})}})},x={render:()=>e.jsx(o,{title:"Show Multiple Messages",onClick:()=>{r.success("Success message"),r.info("Info message"),r.warning("Warning message"),r.error("Error message")}})};var T,y,I;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Button title="Show Success Message" onClick={() => {
    message.success("This is a success message");
  }} />
}`,...(I=(y=g.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var v,E,B;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Button title="Show Info Message" onClick={() => {
    message.info("This is an info message");
  }} />
}`,...(B=(E=u.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var W,N,Y;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Button title="Show Warning Message" onClick={() => {
    message.warning("This is a warning message");
  }} />
}`,...(Y=(N=d.parameters)==null?void 0:N.docs)==null?void 0:Y.source}}};var $,z,R;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Button title="Show Error Message" onClick={() => {
    message.error("This is an error message");
  }} />
}`,...(R=(z=p.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var D,O,_;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <Button title="Show Message (5s)" onClick={() => {
    message.success("This message will stay for 5 seconds", 5);
  }} />
}`,...(_=(O=f.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var q,F,V;h.parameters={...h.parameters,docs:{...(q=h.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <Button title="Show Message with Callback" onClick={() => {
    message.success("This message has a callback", 3, () => {
      console.log("Message closed");
    });
  }} />
}`,...(V=(F=h.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var X,A,G;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <Button title="Show Multiple Messages" onClick={() => {
    message.success("Success message");
    message.info("Info message");
    message.warning("Warning message");
    message.error("Error message");
  }} />
}`,...(G=(A=x.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};const de=["Success","Info","Warning","Error","CustomDuration","WithCallback","MultipleMessages"];export{f as CustomDuration,p as Error,u as Info,x as MultipleMessages,g as Success,d as Warning,h as WithCallback,de as __namedExportsOrder,ue as default};
