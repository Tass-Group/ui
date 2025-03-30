import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as K}from"./index-BlmOqGMO.js";import{l as i,d as x}from"./styled-components.browser.esm-BgH1a_-m.js";import{I as c}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";const n={background:"#000c17",textColor:"rgba(255, 255, 255, 0.85)",textColorSelected:"#1677FF",textColorHover:"#1677FF",textColorDisabled:"rgba(255, 255, 255, 0.25)",itemSelectedBg:"rgba(22, 119, 255, 0.1)",itemHoverBg:"rgba(255, 255, 255, 0.04)",borderColor:"#16253a"},J=x.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${({menuTheme:a})=>a==="dark"?n.background:"#fff"};
  
  ${({mode:a,menuTheme:t})=>a==="horizontal"?i`
          display: flex;
          border-bottom: 1px solid ${t==="dark"?n.borderColor:"#f0f0f0"};
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
          
          ${P} {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 160px;
            background: ${t==="dark"?n.background:"#fff"};
            box-shadow: ${t==="dark"?"0 2px 8px rgba(0, 0, 0, 0.45)":"0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08)"};
          }
        `:i`
          width: 200px;
          border-right: 1px solid ${t==="dark"?n.borderColor:"#f0f0f0"};
        `}
`,S=x.li`
  position: relative;
  padding: 12px 20px;
  cursor: ${({disabled:a})=>a===!0?"not-allowed":"pointer"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  ${({menuTheme:a,disabled:t,selected:s,isSubmenu:p})=>a==="dark"?i`
          color: ${t??!1?n.textColorDisabled:s??!1?n.textColorSelected:n.textColor};
          
          &:hover {
            ${!(t??!1)&&i`
              color: ${n.textColorHover};
              background: ${n.itemHoverBg};
            `}
          }
          
          ${(s??!1)&&!(p??!1)&&i`
            background: ${n.itemSelectedBg};
            font-weight: 500;
          `}

          .menu-item-icon {
            color: inherit;
          }
        `:i`
          color: ${t??!1?"rgba(0, 0, 0, 0.25)":s??!1?"#1890ff":"rgba(0, 0, 0, 0.85)"};
              
          &:hover {
            ${!(t??!1)&&i`
              color: #1890ff;
              background: ${(a??"horizontal")==="horizontal"?"transparent":"#f5f5f5"};
            `}
          }
          
          ${(s??!1)&&!(p??!1)&&i`
            background: #e6f7ff;
          `}
        `}

  .submenu-arrow {
    margin-left: auto;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${({isOpen:a})=>(a??!1)&&"transform: rotate(180deg);"}
    color: inherit;
  }
`,P=x.div`
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: top;
  transform: ${({isOpen:a})=>a??!1?"scaleY(1)":"scaleY(0)"};
  opacity: ${({isOpen:a})=>a??!1?1:0};
`,Q=x.div`
  position: relative;
`,$=({items:a,mode:t="vertical",menuTheme:s="light",defaultSelectedKey:p,defaultOpenKeys:W=[],className:Y,style:L})=>{const[h,R]=K.useState(p??""),[z,k]=K.useState(W),A=(e,l)=>{l.stopPropagation(),z.includes(e)?k(d=>d.filter(v=>v!==e)):k([e])},M=(e,l,d)=>{R(e),(d??!1)||k([]),l==null||l()},G=e=>{var l;if(((l=e.children)==null?void 0:l.length)!=null){const d=z.includes(e.key),v=e.children.some(o=>o.key===h);return r.jsxs(Q,{children:[r.jsxs(S,{menuTheme:s,isSubmenu:!0,isOpen:d,selected:v,onClick:o=>{A(e.key,o)},children:[e.icon!==null&&r.jsx("span",{className:"menu-item-icon",children:e.icon}),e.label,r.jsx(c,{name:"chevrondown",size:12,className:"submenu-arrow",style:{marginLeft:"auto"}})]}),r.jsx(P,{isOpen:d,children:e.children.map(o=>r.jsxs(S,{menuTheme:s,disabled:o.disabled,selected:h===o.key,onClick:()=>{(o.disabled??!1)||M(o.key,o.onClick,!0)},children:[o.icon!==null&&r.jsx("span",{className:"menu-item-icon",children:o.icon}),o.label]},o.key))})]},e.key)}return r.jsxs(S,{menuTheme:s,disabled:e.disabled,selected:h===e.key,onClick:()=>{(e.disabled??!1)||M(e.key,e.onClick)},children:[e.icon!==null&&r.jsx("span",{className:"menu-item-icon",children:e.icon}),e.label]},e.key)};return r.jsx(J,{mode:t,menuTheme:s,className:Y,style:L,children:a.map(G)})};try{$.displayName="Menu",$.__docgenInfo={description:"",displayName:"Menu",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"MenuItemType[]"}},mode:{defaultValue:{value:"vertical"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},menuTheme:{defaultValue:{value:"light"},description:"",name:"menuTheme",required:!1,type:{name:"enum",value:[{value:'"light"'},{value:'"dark"'}]}},defaultSelectedKey:{defaultValue:null,description:"",name:"defaultSelectedKey",required:!1,type:{name:"string"}},defaultOpenKeys:{defaultValue:{value:"[]"},description:"",name:"defaultOpenKeys",required:!1,type:{name:"string[]"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const re={title:"Navigator/Menu",component:$,parameters:{layout:"centered"},tags:["autodocs"]},u=[{key:"1",label:"Navigation One",icon:r.jsx(c,{name:"home",size:14})},{key:"2",label:"Navigation Two",icon:r.jsx(c,{name:"cog",size:14})},{key:"3",label:"Navigation Three",icon:r.jsx(c,{name:"user",size:14}),disabled:!0},{key:"4",label:"Navigation Four",icon:r.jsx(c,{name:"folder",size:14}),children:[{key:"4-1",label:"Option 1"},{key:"4-2",label:"Option 2"}]}],m={args:{items:u,mode:"vertical",defaultSelectedKey:"1"}},f={args:{items:u,mode:"horizontal",defaultSelectedKey:"1"}},g={args:{items:u.map(({icon:a,...t})=>t),mode:"vertical",defaultSelectedKey:"1"}},b={args:{items:u,mode:"vertical",menuTheme:"dark",defaultSelectedKey:"1"}},y={args:{items:u,mode:"horizontal",menuTheme:"dark",defaultSelectedKey:"1"}};var C,j,N;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    items,
    mode: "vertical",
    defaultSelectedKey: "1"
  }
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var w,_,V;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    items,
    mode: "horizontal",
    defaultSelectedKey: "1"
  }
}`,...(V=(_=f.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var H,I,O;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    items: items.map(({
      icon,
      ...rest
    }) => rest),
    mode: "vertical",
    defaultSelectedKey: "1"
  }
}`,...(O=(I=g.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var q,D,F;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    items,
    mode: "vertical",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
}`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var B,E,T;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items,
    mode: "horizontal",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
}`,...(T=(E=y.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};const te=["VerticalMenu","HorizontalMenu","WithoutIcons","DarkMenu","DarkHorizontalMenu"];export{y as DarkHorizontalMenu,b as DarkMenu,f as HorizontalMenu,m as VerticalMenu,g as WithoutIcons,te as __namedExportsOrder,re as default};
