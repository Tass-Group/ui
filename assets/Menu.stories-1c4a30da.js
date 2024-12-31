import{a as o,j as m}from"./jsx-runtime-8a1697f2.js";import{r as C}from"./index-8b3efc3f.js";import{d as k,l as i}from"./styled-components.browser.esm-16342693.js";import{I as c}from"./index-c9f9c958.js";import"./_commonjsHelpers-de833af9.js";const n={background:"#000c17",textColor:"rgba(255, 255, 255, 0.85)",textColorSelected:"#1677FF",textColorHover:"#1677FF",textColorDisabled:"rgba(255, 255, 255, 0.25)",itemSelectedBg:"rgba(22, 119, 255, 0.1)",itemHoverBg:"rgba(255, 255, 255, 0.04)",subMenuBg:"#000c17",borderColor:"#16253a"},R=k.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${({menuTheme:a})=>a==="dark"?n.background:"#fff"};
  
  ${({mode:a,menuTheme:r})=>a==="horizontal"?i`
          display: flex;
          border-bottom: 1px solid ${r==="dark"?n.borderColor:"#f0f0f0"};
          width: 100%;
          
          > li, > div > li {
            padding: 0 20px;
            height: 46px;
            line-height: 46px;
            background: transparent !important;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
              height: 2px;
              background: transparent;
              transition: all 0.3s;
            }
          }
          
          ${W} {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 160px;
            background: ${r==="dark"?n.background:"#fff"};
            box-shadow: ${r==="dark"?"0 2px 8px rgba(0, 0, 0, 0.45)":"0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08)"};
          }
        `:i`
          width: 200px;
          border-right: 1px solid ${r==="dark"?n.borderColor:"#f0f0f0"};
        `}
`,$=k.li`
  position: relative;
  padding: 12px 20px;
  cursor: ${({disabled:a})=>a===!0?"not-allowed":"pointer"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  ${({menuTheme:a,disabled:r,selected:l,isSubmenu:p})=>a==="dark"?i`
          color: ${r??!1?n.textColorDisabled:l??!1?n.textColorSelected:n.textColor};
          
          &:hover {
            ${!(r??!1)&&i`
              color: ${n.textColorHover};
              background: ${n.itemHoverBg};
            `}
          }
          
          ${(l??!1)&&!(p??!1)&&i`
            background: ${n.itemSelectedBg};
            font-weight: 500;
          `}

          .menu-item-icon {
            color: inherit;
          }
        `:i`
          color: ${r??!1?"rgba(0, 0, 0, 0.25)":l??!1?"#1890ff":"rgba(0, 0, 0, 0.85)"};
              
          &:hover {
            ${!(r??!1)&&i`
              color: #1890ff;
              background: ${(a??"horizontal")==="horizontal"?"transparent":"#f5f5f5"};
            `}
          }
          
          ${(l??!1)&&!(p??!1)&&i`
            background: #e6f7ff;
          `}
        `}

  .submenu-arrow {
    margin-left: auto;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${({isOpen:a})=>(a??!1)&&"transform: rotate(180deg);"}
    color: inherit;
  }
`,W=k.div`
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: top;
  transform: ${({isOpen:a})=>a??!1?"scaleY(1)":"scaleY(0)"};
  opacity: ${({isOpen:a})=>a??!1?1:0};
`,U=k.div`
  position: relative;
`,z=({items:a,mode:r="vertical",menuTheme:l="light",defaultSelectedKey:p,defaultOpenKeys:Y=[],className:L,style:A})=>{const[v,G]=C.useState(p??""),[M,x]=C.useState(Y),J=(e,s)=>{s.stopPropagation(),M.includes(e)?x(d=>d.filter(S=>S!==e)):x([e])},K=(e,s,d)=>{G(e),(d??!1)||x([]),s==null||s()},Q=e=>{var s;if(((s=e.children)==null?void 0:s.length)!=null){const d=M.includes(e.key),S=e.children.some(t=>t.key===v);return m(U,{children:[m($,{menuTheme:l,isSubmenu:!0,isOpen:d,selected:S,onClick:t=>{J(e.key,t)},children:[e.icon!==null&&o("span",{className:"menu-item-icon",children:e.icon}),e.label,o(c,{name:"chevrondown",size:12,className:"submenu-arrow",style:{marginLeft:"auto"}})]}),o(W,{isOpen:d,children:e.children.map(t=>m($,{menuTheme:l,disabled:t.disabled,selected:v===t.key,onClick:()=>{(t.disabled??!1)||K(t.key,t.onClick,!0)},children:[t.icon!==null&&o("span",{className:"menu-item-icon",children:t.icon}),t.label]},t.key))})]},e.key)}return m($,{menuTheme:l,disabled:e.disabled,selected:v===e.key,onClick:()=>{(e.disabled??!1)||K(e.key,e.onClick)},children:[e.icon!==null&&o("span",{className:"menu-item-icon",children:e.icon}),e.label]},e.key)};return o(R,{mode:r,menuTheme:l,className:L,style:A,children:a.map(Q)})};try{z.displayName="Menu",z.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemType[]"}},mode:{defaultValue:{value:"vertical"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},menuTheme:{defaultValue:{value:"light"},description:"",name:"menuTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},defaultSelectedKey:{defaultValue:null,description:"",name:"defaultSelectedKey",required:!1,type:{name:"string"}},defaultOpenKeys:{defaultValue:{value:"[]"},description:"",name:"defaultOpenKeys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const te={title:"Navigator/Menu",component:z,parameters:{layout:"centered"},tags:["autodocs"]},u=[{key:"1",label:"Navigation One",icon:o(c,{name:"home",size:14})},{key:"2",label:"Navigation Two",icon:o(c,{name:"cog",size:14})},{key:"3",label:"Navigation Three",icon:o(c,{name:"user",size:14}),disabled:!0},{key:"4",label:"Navigation Four",icon:o(c,{name:"folder",size:14}),children:[{key:"4-1",label:"Option 1"},{key:"4-2",label:"Option 2"}]}],f={args:{items:u,mode:"vertical",defaultSelectedKey:"1"}},g={args:{items:u,mode:"horizontal",defaultSelectedKey:"1"}},b={args:{items:u.map(({icon:a,...r})=>r),mode:"vertical",defaultSelectedKey:"1"}},y={args:{items:u,mode:"vertical",menuTheme:"dark",defaultSelectedKey:"1"}},h={args:{items:u,mode:"horizontal",menuTheme:"dark",defaultSelectedKey:"1"}};var N,w,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items,
    mode: "vertical",
    defaultSelectedKey: "1"
  }
}`,...(_=(w=f.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};var V,H,I;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items,
    mode: "horizontal",
    defaultSelectedKey: "1"
  }
}`,...(I=(H=g.parameters)==null?void 0:H.docs)==null?void 0:I.source}}};var O,q,D;b.parameters={...b.parameters,docs:{...(O=b.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    items: items.map(({
      icon,
      ...rest
    }) => rest),
    mode: "vertical",
    defaultSelectedKey: "1"
  }
}`,...(D=(q=b.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var B,F,j;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items,
    mode: "vertical",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
}`,...(j=(F=y.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var T,E,P;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    items,
    mode: "horizontal",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
}`,...(P=(E=h.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};const oe=["VerticalMenu","HorizontalMenu","WithoutIcons","DarkMenu","DarkHorizontalMenu"];export{h as DarkHorizontalMenu,y as DarkMenu,g as HorizontalMenu,f as VerticalMenu,b as WithoutIcons,oe as __namedExportsOrder,te as default};
