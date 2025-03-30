import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as g}from"./index-BlmOqGMO.js";import{d as i}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as s}from"./index-CbqPYD7y.js";import{B as o}from"./index-Bmy7Hsvv.js";import"./index-yBjzXJbu.js";const z=i.div`
  position: relative;
  display: inline-block;
`,I=i.div`
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
`,h=i.div`
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
`,O=i.div`
  position: relative;

  &:hover > .submenu-content {
    display: block;
  }
`,V=i.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
`,S=e=>{var n;return((n=e.children)==null?void 0:n.length)!=null?t.jsxs(O,{children:[t.jsxs(h,{children:[e.icon!=null&&t.jsx("span",{className:"menu-item-icon",children:e.icon}),e.label,t.jsx(s,{name:"chevronright",size:12,style:{marginLeft:"auto"}})]}),t.jsx(V,{className:"submenu-content",children:e.children.map(u=>S(u))})]},e.key):t.jsxs(h,{disabled:e.disabled,$isDanger:e.$isDanger,onClick:e.onClick,children:[e.icon!=null&&t.jsx("span",{className:"menu-item-icon",children:e.icon}),e.label]},e.key)},r=({items:e,trigger:n="hover",placement:u="bottom",children:B,className:_,style:E})=>{const[x,l]=g.useState(!1),f=g.useRef(null);g.useEffect(()=>{const c=L=>{f.current!=null&&!f.current.contains(L.target)&&l(!1)};return n==="click"&&document.addEventListener("mousedown",c),()=>{n==="click"&&document.removeEventListener("mousedown",c)}},[n]);const N=()=>{n==="click"&&l(!x)},T=()=>{n==="hover"&&l(!0)},$=()=>{n==="hover"&&l(!1)};return t.jsxs(z,{ref:f,className:_,style:E,onClick:N,onMouseEnter:T,onMouseLeave:$,children:[B,x&&t.jsx(I,{placement:u,children:e.map(c=>S(c))})]})};try{r.displayName="Dropdown",r.__docgenInfo={description:"",displayName:"Dropdown",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemType[]"}},trigger:{defaultValue:{value:"hover"},description:"",name:"trigger",required:!1,type:{name:"enum",value:[{value:'"click"'},{value:'"hover"'}]}},placement:{defaultValue:{value:"bottom"},description:"",name:"placement",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const A={title:"Navigator/Dropdown",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"radio",options:["hover","click"],description:"Trigger mode"},placement:{control:"radio",options:["top","bottom","left","right"],description:"Placement of dropdown menu"}}},a=[{key:"1",label:"Option 1",icon:t.jsx(s,{name:"file",size:14})},{key:"2",label:"Option 2",icon:t.jsx(s,{name:"folder",size:14}),disabled:!0},{key:"3",label:"Danger option",icon:t.jsx(s,{name:"trash",size:14}),$isDanger:!0},{key:"submenu",label:"Sub Menu",icon:t.jsx(s,{name:"folder",size:14}),children:[{key:"4",label:"Sub Option 1"},{key:"5",label:"Sub Option 2"}]}],p={args:{items:a,trigger:"hover",placement:"bottom",children:t.jsx(o,{title:"Hover me"})}},d={args:{items:a,trigger:"click",placement:"bottom",children:t.jsx(o,{title:"Click me"})}},m={render:()=>t.jsxs("div",{style:{display:"flex",gap:"50px",padding:"50px"},children:[t.jsx(r,{items:a,placement:"top",children:t.jsx(o,{title:"Top"})}),t.jsx(r,{items:a,placement:"bottom",children:t.jsx(o,{title:"Bottom"})}),t.jsx(r,{items:a,placement:"left",children:t.jsx(o,{title:"Left"})}),t.jsx(r,{items:a,placement:"right",children:t.jsx(o,{title:"Right"})})]})};var b,v,y;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items,
    trigger: "hover",
    placement: "bottom",
    children: <Button title="Hover me" />
  }
}`,...(y=(v=p.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var k,j,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items,
    trigger: "click",
    placement: "bottom",
    children: <Button title="Click me" />
  }
}`,...(w=(j=d.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var D,C,M;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(M=(C=m.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};const F=["Default","ClickTrigger","DifferentPlacements"];export{d as ClickTrigger,p as Default,m as DifferentPlacements,F as __namedExportsOrder,A as default};
