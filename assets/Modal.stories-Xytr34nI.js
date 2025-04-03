import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as oe,r as a}from"./index-BlmOqGMO.js";import{I as ae}from"./index-CbqPYD7y.js";import{B as o}from"./index-CtjHNQLu.js";import{d as r,m as f}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const se=f`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,re=f`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`,le=f`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`,ie=f`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`,de=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: ${({$visible:n})=>n?"block":"none"};
`,ce=r.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  animation: ${({$visible:n})=>n?se:re} 0.3s ease-in-out;
`,pe=r.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${({$width:n})=>typeof n=="number"?`${n}px`:n??"520px"};
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
  animation: ${({$visible:n})=>n?le:ie} 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
  transform: translate(-50%, -50%) scale(1);
`,ue=r.div`
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.88);
  background: #fff;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,me=r.div`
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
`,fe=r.button`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.88);
  }
`,he=r.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
`,xe=r.div`
  padding: 16px 24px;
  text-align: end;
  background: transparent;
  border-top: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`,s=({open:n=!1,title:t,content:H,footer:h,width:Z,centered:C=!1,maskClosable:K=!0,closable:O=!0,closeIcon:P,mask:A=!0,zIndex:G=1e3,className:J,style:L,onOk:b,onCancel:g,afterClose:x,children:Q})=>{const[l,M]=oe.useState(n),U=a.useRef(null);a.useEffect(()=>{M(n)},[n]),a.useEffect(()=>{!l&&x!==void 0&&x()},[l,x]);const k=()=>{M(!1),g!==void 0&&g()},X=y=>{K&&y.target===y.currentTarget&&k()},Y=()=>{b!==void 0&&b()},ee=()=>h===void 0?e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Cancel",onClick:k}),e.jsx(o,{title:"OK",type:"primary",onClick:Y})]}):h,te=t!=null||O,ne=t!=null;return l?e.jsxs(de,{$visible:l,style:{zIndex:G},children:[A&&e.jsx(ce,{$visible:l,onClick:X,"data-testid":"modal-mask"}),e.jsxs(pe,{ref:U,$visible:l,$width:Z,$centered:C,className:J,style:L,"data-testid":"modal-content","data-centered":C,children:[te&&e.jsxs(ue,{children:[ne&&e.jsx(me,{children:t}),O&&e.jsx(fe,{onClick:k,children:P??e.jsx(ae,{name:"cross"})})]}),e.jsx(he,{children:H??Q}),h!==null&&e.jsx(xe,{children:ee()})]})]}):null};try{s.displayName="Modal",s.__docgenInfo={description:"",displayName:"Modal",props:{open:{defaultValue:{value:"false"},description:"",name:"open",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},footer:{defaultValue:null,description:"",name:"footer",required:!1,type:{name:"ReactNode"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},maskClosable:{defaultValue:{value:"true"},description:"",name:"maskClosable",required:!1,type:{name:"boolean"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"ReactNode"}},mask:{defaultValue:{value:"true"},description:"",name:"mask",required:!1,type:{name:"boolean"}},zIndex:{defaultValue:{value:"1000"},description:"",name:"zIndex",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},onOk:{defaultValue:null,description:"",name:"onOk",required:!1,type:{name:"(() => void)"}},onCancel:{defaultValue:null,description:"",name:"onCancel",required:!1,type:{name:"(() => void)"}},afterClose:{defaultValue:null,description:"",name:"afterClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const ye={title:"Feedback/Modal",component:s,parameters:{layout:"centered"},tags:["autodocs"]},i={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Modal",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Basic Modal",content:"This is a basic modal example.",onCancel:()=>{t(!1)},onOk:()=>{t(!1)}})]})}},d={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Modal with Footer",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Modal with Custom Footer",content:"This modal has a custom footer with multiple buttons.",onCancel:()=>{t(!1)},footer:e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Cancel",onClick:()=>{t(!1)}}),e.jsx(o,{title:"Save",onClick:()=>{t(!1)}}),e.jsx(o,{title:"Delete",onClick:()=>{t(!1)}})]})})]})}},c={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Centered Modal",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Centered Modal",content:"This modal is centered on the screen.",centered:!0,onCancel:()=>{t(!1)},onOk:()=>{t(!1)}})]})}},p={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Wide Modal",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Custom Width Modal",content:"This modal has a custom width of 800px.",width:800,onCancel:()=>{t(!1)},onOk:()=>{t(!1)}})]})}},u={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Modal without Mask",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Modal Without Mask",content:"This modal doesn't have a background mask.",mask:!1,onCancel:()=>{t(!1)},onOk:()=>{t(!1)}})]})}},m={render:()=>{const[n,t]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Open Modal without Close Button",onClick:()=>{t(!0)}}),e.jsx(s,{open:n,title:"Modal Without Close Button",content:"This modal doesn't have a close button.",closable:!1,onCancel:()=>{t(!1)},onOk:()=>{t(!1)}})]})}};var j,v,w;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Modal" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Basic Modal" content="This is a basic modal example." onCancel={() => {
        setOpen(false);
      }} onOk={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,B,F;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Modal with Footer" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Modal with Custom Footer" content="This modal has a custom footer with multiple buttons." onCancel={() => {
        setOpen(false);
      }} footer={<>
              <Button title="Cancel" onClick={() => {
          setOpen(false);
        }} />
              <Button title="Save" onClick={() => {
          setOpen(false);
        }} />
              <Button title="Delete" onClick={() => {
          setOpen(false);
        }} />
            </>} />
      </>;
  }
}`,...(F=(B=d.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var V,q,T;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Centered Modal" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Centered Modal" content="This modal is centered on the screen." centered onCancel={() => {
        setOpen(false);
      }} onOk={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...(T=(q=c.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var W,N,_;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Wide Modal" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Custom Width Modal" content="This modal has a custom width of 800px." width={800} onCancel={() => {
        setOpen(false);
      }} onOk={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...(_=(N=p.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var I,R,$;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Modal without Mask" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Modal Without Mask" content="This modal doesn't have a background mask." mask={false} onCancel={() => {
        setOpen(false);
      }} onOk={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...($=(R=u.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var z,E,D;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button title="Open Modal without Close Button" onClick={() => {
        setOpen(true);
      }} />
        <Modal open={open} title="Modal Without Close Button" content="This modal doesn't have a close button." closable={false} onCancel={() => {
        setOpen(false);
      }} onOk={() => {
        setOpen(false);
      }} />
      </>;
  }
}`,...(D=(E=m.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const je=["Basic","WithFooter","Centered","CustomWidth","NoMask","NoCloseButton"];export{i as Basic,c as Centered,p as CustomWidth,m as NoCloseButton,u as NoMask,d as WithFooter,je as __namedExportsOrder,ye as default};
