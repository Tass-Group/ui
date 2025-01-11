import{a as l,j as t}from"./jsx-runtime-c9381026.js";import{r as h}from"./index-8b3efc3f.js";import{d as s}from"./styled-components.browser.esm-9b53ad8e.js";import{I as i}from"./index-28fff672.js";import{B as o}from"./index-76227826.js";import"./_commonjsHelpers-de833af9.js";const $=s.div`
  position: relative;
  display: inline-block;
`,z=s.div`
  position: absolute;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
  z-index: 1050;

  ${({placement:e})=>{switch(e){case"top":return`
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4px;
        `;case"bottom":return`
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 4px;
        `;case"left":return`
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 4px;
        `;case"right":return`
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 4px;
        `;default:return""}}}
`,v=s.div`
  padding: 8px 12px;
  cursor: ${({disabled:e})=>e??!1?"not-allowed":"pointer"};
  color: ${({disabled:e,$isDanger:n})=>e??!1?"rgba(0, 0, 0, 0.25)":n??!1?"#ff4d4f":"rgba(0, 0, 0, 0.85)"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({disabled:e,$isDanger:n})=>e??!1?"transparent":n??!1?"#fff1f0":"#f5f5f5"};
    color: ${({disabled:e,$isDanger:n})=>e??!1?"rgba(0, 0, 0, 0.25)":n??!1?"#ff7875":"rgba(0, 0, 0, 0.85)"};
  }
`,I=s.div`
  position: relative;

  &:hover > .submenu-content {
    display: block;
  }
`,O=s.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
`,_=e=>{var n;return((n=e.children)==null?void 0:n.length)!=null?l(I,{children:[l(v,{children:[e.icon!=null&&t("span",{className:"menu-item-icon",children:e.icon}),e.label,t(i,{name:"chevronright",size:12,style:{marginLeft:"auto"}})]}),t(O,{className:"submenu-content",children:e.children.map(f=>_(f))})]},e.key):l(v,{disabled:e.disabled,$isDanger:e.$isDanger,onClick:e.onClick,children:[e.icon!=null&&t("span",{className:"menu-item-icon",children:e.icon}),e.label]},e.key)},r=({items:e,trigger:n="hover",placement:f="bottom",children:T,className:E,style:L})=>{const[b,c]=h.useState(!1),g=h.useRef(null);return h.useEffect(()=>{const d=N=>{g.current!=null&&!g.current.contains(N.target)&&c(!1)};return n==="click"&&document.addEventListener("mousedown",d),()=>{n==="click"&&document.removeEventListener("mousedown",d)}},[n]),l($,{ref:g,className:E,style:L,onClick:()=>{n==="click"&&c(!b)},onMouseEnter:()=>{n==="hover"&&c(!0)},onMouseLeave:()=>{n==="hover"&&c(!1)},children:[T,b&&t(z,{placement:f,children:e.map(d=>_(d))})]})};try{r.displayName="Dropdown",r.__docgenInfo={description:"",displayName:"Dropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemType[]"}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const F={title:"Navigator/Dropdown",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"radio",options:["hover","click"],description:"Trigger mode"},placement:{control:"radio",options:["top","bottom","left","right"],description:"Placement of dropdown menu"}}},a=[{key:"1",label:"Option 1",icon:t(i,{name:"file",size:14})},{key:"2",label:"Option 2",icon:t(i,{name:"folder",size:14}),disabled:!0},{key:"3",label:"Danger option",icon:t(i,{name:"trash",size:14}),$isDanger:!0},{key:"submenu",label:"Sub Menu",icon:t(i,{name:"folder",size:14}),children:[{key:"4",label:"Sub Option 1"},{key:"5",label:"Sub Option 2"}]}],p={args:{items:a,trigger:"hover",placement:"bottom",children:t(o,{title:"Hover me"})}},m={args:{items:a,trigger:"click",placement:"bottom",children:t(o,{title:"Click me"})}},u={render:()=>l("div",{style:{display:"flex",gap:"50px",padding:"50px"},children:[t(r,{items:a,placement:"top",children:t(o,{title:"Top"})}),t(r,{items:a,placement:"bottom",children:t(o,{title:"Bottom"})}),t(r,{items:a,placement:"left",children:t(o,{title:"Left"})}),t(r,{items:a,placement:"right",children:t(o,{title:"Right"})})]})};var x,y,k;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    items,
    trigger: "hover",
    placement: "bottom",
    children: <Button title="Hover me" />
  }
}`,...(k=(y=p.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var w,D,M;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items,
    trigger: "click",
    placement: "bottom",
    children: <Button title="Click me" />
  }
}`,...(M=(D=m.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var C,S,B;u.parameters={...u.parameters,docs:{...(C=u.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "50px",
    padding: "50px"
  }}>
      <Dropdown items={items} placement="top">
        <Button title="Top" />
      </Dropdown>
      <Dropdown items={items} placement="bottom">
        <Button title="Bottom" />
      </Dropdown>
      <Dropdown items={items} placement="left">
        <Button title="Left" />
      </Dropdown>
      <Dropdown items={items} placement="right">
        <Button title="Right" />
      </Dropdown>
    </div>
}`,...(B=(S=u.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const G=["Default","ClickTrigger","DifferentPlacements"];export{m as ClickTrigger,p as Default,u as DifferentPlacements,G as __namedExportsOrder,F as default};
