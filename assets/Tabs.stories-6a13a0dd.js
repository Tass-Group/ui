import{a as h,j as a}from"./jsx-runtime-c9381026.js";import{r as z}from"./index-8b3efc3f.js";import{I as A}from"./index-28fff672.js";import{m as de,d as l,l as r}from"./styled-components.browser.esm-9b53ad8e.js";import"./_commonjsHelpers-de833af9.js";const ce=de`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`,me=l.div`
  display: flex;
  flex-direction: ${e=>e.$mode==="vertical"?"row":"column"};
`,ue=l.div`
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  margin: ${e=>e.$mode==="vertical"?"0 16px 0 0":"0 0 16px 0"};
  
  ${e=>e.$mode==="vertical"&&r`
    flex-direction: column;
    .tabs-nav-list {
      flex-direction: column;
    }
  `}
  
  ${e=>e.$type==="card"&&r`
    padding: 0 2px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-bottom: 0;
  `}
  
  ${e=>{switch(e.$size){case"small":return r`.tabs-nav-list { font-size: 14px; }`;case"large":return r`.tabs-nav-list { font-size: 16px; }`;default:return r`.tabs-nav-list { font-size: 14px; }`}}}
`,fe=l.div`
  position: relative;
  display: flex;
  flex: auto;
  align-items: center;
  overflow: hidden;
  font-size: inherit;
  justify-content: ${e=>(e.$centered??!1)&&e.$mode==="horizontal"?"center":"flex-start"};
  flex-direction: ${e=>e.$mode==="vertical"?"column":"row"};
`,pe=l.div`
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
  
  ${e=>(e.$active??!1)&&r`
    color: #1890ff;
    ${e.$type==="line"&&e.$mode==="horizontal"&&r`
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
    
    ${e.$type==="line"&&e.$mode==="vertical"&&r`
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
  
  ${e=>(e.$disabled??!1)&&r`
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  `}
  
  ${e=>e.$type==="card"&&r`
    margin: 0 2px;
    background: ${e.$active??!1?"#fff":"transparent"};
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    
    &:hover {
      color: #40a9ff;
    }
  `}
`,ye=l.div`
  display: flex;
  width: 100%;

  ${e=>(e.$animated??!1)&&r`
    & > div {
      animation: ${ce} 0.3s;
    }
  `}
`,be=l.div`
  flex: none;
  width: 100%;
  display: ${e=>e.$active??!1?"block":"none"};
`,ve=l.button`
  padding: 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #40a9ff;
  }
`,ge=l.button`
  padding: 0 0 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`,i=({activeKey:e,defaultActiveKey:y,items:s=[],centered:b=!1,type:f="line",size:S="middle",mode:v="horizontal",tabBarStyle:n,tabBarGutter:p,destroyInactiveTabPane:d=!1,animated:c=!0,hideAdd:x=!1,addIcon:m=a(A,{name:"pluscircle"}),onChange:g,onTabClick:q,onEdit:V,className:re,style:se})=>{var M;const[P,E]=z.useState(e??y??((M=s[0])==null?void 0:M.key)??"");z.useEffect(()=>{e!==void 0&&E(e)},[e]);const ie=(t,u)=>{e===void 0&&E(t),g==null||g(t),q==null||q(t,u)},N=(t,u)=>{V==null||V(t,u)},oe=()=>h(ue,{$type:f,$size:S,$mode:v,style:n,children:[a(fe,{className:"tabs-nav-list",$centered:b,$mode:v,"data-testid":"tabs-list",children:s.map(t=>h(pe,{$active:P===t.key,$disabled:t.disabled,$type:f,$mode:v,onClick:u=>{(t.disabled??!1)||ie(t.key,u)},style:p!=null?{marginRight:p}:void 0,children:[t.icon,t.label,f==="editable-card"&&t.closable!==!1&&a(ge,{onClick:u=>{u.stopPropagation(),N(t.key,"remove")},children:t.closeIcon??a(A,{name:"cross"})})]},t.key))}),f==="editable-card"&&!x&&a(ve,{onClick:t=>{N(t,"add")},children:m})]}),le=()=>a(ye,{$animated:c===!0||(c==null?void 0:c.tabPane),children:s.map(t=>a(be,{$active:P===t.key,children:(P===t.key||!d)&&t.children},t.key))});return h(me,{className:re,style:se,$centered:b,$mode:v,children:[oe(),le()]})};try{i.displayName="Tabs",i.__docgenInfo={description:"",displayName:"Tabs",props:{activeKey:{defaultValue:null,description:"",name:"activeKey",required:!1,type:{name:"string"}},defaultActiveKey:{defaultValue:null,description:"",name:"defaultActiveKey",required:!1,type:{name:"string"}},items:{defaultValue:{value:"[]"},description:"",name:"items",required:!1,type:{name:"TabItemType[]"}},centered:{defaultValue:{value:"false"},description:"",name:"centered",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"line"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"line"'},{value:'"card"'},{value:'"editable-card"'}]}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"middle"'}]}},mode:{defaultValue:{value:"horizontal"},description:"",name:"mode",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},tabBarStyle:{defaultValue:null,description:"",name:"tabBarStyle",required:!1,type:{name:"CSSProperties"}},tabBarGutter:{defaultValue:null,description:"",name:"tabBarGutter",required:!1,type:{name:"number"}},destroyInactiveTabPane:{defaultValue:{value:"false"},description:"",name:"destroyInactiveTabPane",required:!1,type:{name:"boolean"}},animated:{defaultValue:{value:"true"},description:"",name:"animated",required:!1,type:{name:"boolean | { inkBar: boolean; tabPane: boolean; }"}},hideAdd:{defaultValue:{value:"false"},description:"",name:"hideAdd",required:!1,type:{name:"boolean"}},addIcon:{defaultValue:{value:'<Icon name="pluscircle" />'},description:"",name:"addIcon",required:!1,type:{name:"ReactNode"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((activeKey: string) => void)"}},onTabClick:{defaultValue:null,description:"",name:"onTabClick",required:!1,type:{name:"((key: string, event: MouseEvent<Element, MouseEvent>) => void)"}},onEdit:{defaultValue:null,description:"",name:"onEdit",required:!1,type:{name:'((targetKey: string | MouseEvent<Element, MouseEvent>, action: "add" | "remove") => void)'}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const ke={title:"Data Display/Tabs",component:i,parameters:{layout:"fullscreen",docs:{story:{inline:!0,iframeHeight:"auto"}}},decorators:[e=>a("div",{style:{padding:"24px"},children:a(e,{})})],tags:["autodocs"]},o=[{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}],$={args:{items:o}},T={args:{items:o.map(e=>({...e,icon:a(A,{name:"upload"})}))}},I={args:{type:"card",items:o}},k={render:()=>{const[e,y]=z.useState("1"),[s,b]=z.useState([{key:"1",label:"Tab 1",children:"Content of Tab Pane 1"},{key:"2",label:"Tab 2",children:"Content of Tab Pane 2"},{key:"3",label:"Tab 3",children:"Content of Tab Pane 3"}]),f=()=>{const n=`${s.length+1}`;b([...s,{key:n,label:`New Tab ${n}`,children:`Content of New Tab ${n}`}]),y(n)},S=n=>{var c,x;const p=s.findIndex(m=>m.key===n),d=s.filter(m=>m.key!==n);if(d.length>0&&n===e){const m=Math.min(p,d.length-1),g=((c=d[m])==null?void 0:c.key)??((x=d[0])==null?void 0:x.key)??"";y(g)}b(d)};return a(i,{type:"editable-card",activeKey:e,onChange:y,onEdit:(n,p)=>{p==="add"?f():typeof n=="string"&&S(n)},items:s})}},w={args:{centered:!0,items:o}},K={render:()=>h("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(i,{size:"small",items:o}),a(i,{size:"middle",items:o}),a(i,{size:"large",items:o})]})},C={render:()=>h("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[a(i,{mode:"horizontal",items:o}),a(i,{mode:"vertical",items:o})]})};var _,B,D;$.parameters={...$.parameters,docs:{...(_=$.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  }
}`,...(D=(B=$.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var j,R,W;T.parameters={...T.parameters,docs:{...(j=T.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: <Icon name="upload" />
    }))
  }
}`,...(W=(R=T.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var X,G,H;I.parameters={...I.parameters,docs:{...(X=I.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    type: "card",
    items: defaultItems
  }
}`,...(H=(G=I.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var L,O,F;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(O=k.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,Q,U;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    centered: true,
    items: defaultItems
  }
}`,...(U=(Q=w.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Y,Z,ee;K.parameters={...K.parameters,docs:{...(Y=K.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Tabs size="small" items={defaultItems} />
      <Tabs size="middle" items={defaultItems} />
      <Tabs size="large" items={defaultItems} />
    </div>
}`,...(ee=(Z=K.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;C.parameters={...C.parameters,docs:{...(te=C.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>
      <Tabs mode="horizontal" items={defaultItems} />
      <Tabs mode="vertical" items={defaultItems} />
    </div>
}`,...(ne=(ae=C.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};const we=["Basic","WithIcons","Card","EditableCard","Centered","DifferentSizes","TabModes"];export{$ as Basic,I as Card,w as Centered,K as DifferentSizes,k as EditableCard,C as TabModes,T as WithIcons,we as __namedExportsOrder,ke as default};
