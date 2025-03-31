import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as C}from"./index-BlmOqGMO.js";import{I as V}from"./index-CbqPYD7y.js";import{d as l,l as s,m as le}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";const de=le`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,ce=l.div`
  display: flex;
  flex-direction: ${e=>e.$mode==="vertical"?"row":"column"};
`,me=l.div`
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  margin: ${e=>e.$mode==="vertical"?"0 16px 0 0":"0 0 16px 0"};
  
  ${e=>e.$mode==="vertical"&&s`
    flex-direction: column;
    .tabs-nav-list {
      flex-direction: column;
    }
  `}
  
  ${e=>e.$type==="card"&&s`
    padding: 0 2px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-bottom: 0;
  `}
  
  ${e=>{switch(e.$size){case"small":return s`.tabs-nav-list { font-size: 14px; }`;case"large":return s`.tabs-nav-list { font-size: 16px; }`;default:return s`.tabs-nav-list { font-size: 14px; }`}}}
`,ue=l.div`
  position: relative;
  display: flex;
  flex: auto;
  align-items: center;
  overflow: hidden;
  font-size: inherit;
  justify-content: ${e=>(e.$centered??!1)&&e.$mode==="horizontal"?"center":"flex-start"};
  flex-direction: ${e=>e.$mode==="vertical"?"column":"row"};
`,fe=l.div`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: inherit;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  ${e=>(e.$active??!1)&&s`
    color: #1890ff;
    ${e.$type==="line"&&e.$mode==="horizontal"&&s`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #1890ff;
      }
    `}
    
    ${e.$type==="line"&&e.$mode==="vertical"&&s`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 2px;
        background: #1890ff;
      }
    `}
  `}
  
  ${e=>(e.$disabled??!1)&&s`
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  `}
  
  ${e=>e.$type==="card"&&s`
    margin: 0 2px;
    background: ${e.$active??!1?"#fff":"transparent"};
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    
    &:hover {
      color: #40a9ff;
    }
  `}
`,pe=l.div`
  display: flex;
  width: 100%;

  ${e=>(e.$animated??!1)&&s`
    & > div {
      animation: ${de} 0.3s;
    }
  `}
`,ye=l.div`
  flex: none;
  width: 100%;
  display: ${e=>e.$active??!1?"block":"none"};
`,be=l.button`
  padding: 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #40a9ff;
  }
`,ve=l.button`
  padding: 0 0 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`,i=({activeKey:e,defaultActiveKey:b,items:r=[],centered:v=!1,type:f="line",size:j="middle",mode:p="horizontal",tabBarStyle:n,tabBarGutter:y,destroyInactiveTabPane:d=!1,animated:c=!0,hideAdd:g=!1,addIcon:m=a.jsx(V,{name:"pluscircle"}),onChange:x,onTabClick:z,onEdit:S,className:ne,style:se})=>{var E;const[q,P]=C.useState(e??b??((E=r[0])==null?void 0:E.key)??"");C.useEffect(()=>{e!==void 0&&P(e)},[e]);const re=(t,u)=>{e===void 0&&P(t),x==null||x(t),z==null||z(t,u)},A=(t,u)=>{S==null||S(t,u)},ie=()=>a.jsxs(me,{$type:f,$size:j,$mode:p,style:n,children:[a.jsx(ue,{className:"tabs-nav-list",$centered:v,$mode:p,"data-testid":"tabs-list",children:r.map(t=>a.jsxs(fe,{$active:q===t.key,$disabled:t.disabled,$type:f,$mode:p,onClick:u=>{(t.disabled??!1)||re(t.key,u)},style:y!=null?{marginRight:y}:void 0,children:[t.icon,t.label,f==="editable-card"&&t.closable!==!1&&a.jsx(ve,{onClick:u=>{u.stopPropagation(),A(t.key,"remove")},children:t.closeIcon??a.jsx(V,{name:"cross"})})]},t.key))}),f==="editable-card"&&!g&&a.jsx(be,{onClick:t=>{A(t,"add")},children:m})]}),oe=()=>a.jsx(pe,{$animated:c===!0||(c==null?void 0:c.tabPane),children:r.map(t=>a.jsx(ye,{$active:q===t.key,children:(q===t.key||!d)&&t.children},t.key))});return a.jsxs(ce,{className:ne,style:se,$centered:v,$mode:p,children:[ie(),oe()]})};try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"TabItemType[]"}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'},{value:'"editable-card"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"middle"'}]}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},tabBarStyle:{defaultValue:null,description:"",name:"tabBarStyle",required:!1,type:{name:"CSSProperties"}},tabBarGutter:{defaultValue:null,description:"",name:"tabBarGutter",required:!1,type:{name:"number"}},destroyInactiveTabPane:{defaultValue:{value:"false"},description:"",name:"destroyInactiveTabPane",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | { inkBar: boolean; tabPane: boolean; }"}},hideAdd:{defaultValue:{value:"false"},description:"",name:"hideAdd",required:!1,type:{name:"boolean"}},addIcon:{defaultValue:{value:'<Icon name="pluscircle" />'},description:"",name:"addIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((activeKey: string) => void)"}},onTabClick:{defaultValue:null,description:"",name:"onTabClick",required:!1,type:{name:"((key: string, event: MouseEvent<Element, MouseEvent>) => void)"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!1,type:{name:'((targetKey: string | MouseEvent<Element, MouseEvent>, action: "add" | "remove") => void)'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Ie={title:"Data Display/Tabs",component:i,parameters:{layout:"fullscreen",docs:{story:{inline:!0,iframeHeight:"auto"}}},decorators:[e=>a.jsx("div",{style:{padding:"24px"},children:a.jsx(e,{})})],tags:["autodocs"]},o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],h={args:{items:o}},$={args:{items:o.map(e=>({...e,icon:a.jsx(V,{name:"upload"})}))}},T={args:{type:"card",items:o}},I={render:()=>{const[e,b]=C.useState("1"),[r,v]=C.useState([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),f=()=>{const n=`${r.length+1}`;v([...r,{key:n,label:`New Tab ${n}`,children:`Content of New Tab ${n}`}]),b(n)},j=n=>{var c,g;const y=r.findIndex(m=>m.key===n),d=r.filter(m=>m.key!==n);if(d.length>0&&n===e){const m=Math.min(y,d.length-1),x=((c=d[m])==null?void 0:c.key)??((g=d[0])==null?void 0:g.key)??"";b(x)}v(d)},p=(n,y)=>{y==="add"?f():typeof n=="string"&&j(n)};return a.jsx(i,{type:"editable-card",activeKey:e,onChange:b,onEdit:p,items:r})}},k={args:{centered:!0,items:o}},w={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(i,{size:"small",items:o}),a.jsx(i,{size:"middle",items:o}),a.jsx(i,{size:"large",items:o})]})},K={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a.jsx(i,{mode:"horizontal",items:o}),a.jsx(i,{mode:"vertical",items:o})]})};var N,M,_;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(_=(M=h.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var B,D,R;$.parameters={...$.parameters,docs:{...(B=$.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: <Icon name="upload" />
    }))
  }
}`,...(R=(D=$.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var W,X,G;T.parameters={...T.parameters,docs:{...(W=T.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    type: "card",
    items: defaultItems
  }
}`,...(G=(X=T.parameters)==null?void 0:X.docs)==null?void 0:G.source}}};var H,L,O;I.parameters={...I.parameters,docs:{...(H=I.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [activeKey, setActiveKey] = useState("1");
    const [items, setItems] = useState<TabItemType[]>([{
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1"
    }, {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2"
    }, {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3"
    }]);
    const add = (): void => {
      const newKey = \`\${items.length + 1}\`;
      setItems([...items, {
        key: newKey,
        label: \`New Tab \${newKey}\`,
        children: \`Content of New Tab \${newKey}\`
      }]);
      setActiveKey(newKey);
    };
    const remove = (targetKey: string): void => {
      const targetIndex = items.findIndex(item => item.key === targetKey);
      const newItems = items.filter(item => item.key !== targetKey);
      if (newItems.length > 0 && targetKey === activeKey) {
        const newActiveIndex = Math.min(targetIndex, newItems.length - 1);
        const newActiveKey = newItems[newActiveIndex]?.key ?? newItems[0]?.key ?? "";
        setActiveKey(newActiveKey);
      }
      setItems(newItems);
    };
    const onEdit = (targetKey: string | React.MouseEvent, action: "add" | "remove"): void => {
      if (action === "add") {
        add();
      } else if (typeof targetKey === "string") {
        remove(targetKey);
      }
    };
    return <Tabs type="editable-card" activeKey={activeKey} onChange={setActiveKey} onEdit={onEdit} items={items} />;
  }
}`,...(O=(L=I.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var F,J,Q;k.parameters={...k.parameters,docs:{...(F=k.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    centered: true,
    items: defaultItems
  }
}`,...(Q=(J=k.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var U,Y,Z;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Tabs size="small" items={defaultItems} />
      <Tabs size="middle" items={defaultItems} />
      <Tabs size="large" items={defaultItems} />
    </div>
}`,...(Z=(Y=w.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ae;K.parameters={...K.parameters,docs:{...(ee=K.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Tabs mode="horizontal" items={defaultItems} />
      <Tabs mode="vertical" items={defaultItems} />
    </div>
}`,...(ae=(te=K.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const ke=["Basic","WithIcons","Card","EditableCard","Centered","DifferentSizes","TabModes"];export{h as Basic,T as Card,k as Centered,w as DifferentSizes,I as EditableCard,K as TabModes,$ as WithIcons,ke as __namedExportsOrder,Ie as default};
