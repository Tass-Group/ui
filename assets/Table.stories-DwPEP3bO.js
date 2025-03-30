import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-BlmOqGMO.js";import{C as K}from"./index-v2PlnfrG.js";import{P as I}from"./index-DDbHf9l-.js";import{d as u}from"./styled-components.browser.esm-BgH1a_-m.js";import"./index-yBjzXJbu.js";import"./index-D0blc6TN.js";import"./index-CbqPYD7y.js";const oe=u.div`
  position: relative;
  width: 100%;

  ${({$size:e})=>{switch(e){case"small":return"font-size: 12px;";case"large":return"font-size: 16px;";default:return"font-size: 14px;"}}}

  ${({$scroll:e})=>(e==null?void 0:e.y)!==void 0&&`
    max-height: ${typeof e.y=="number"?`${e.y}px`:e.y};
    overflow-y: auto;
  `}

  ${({$scroll:e})=>(e==null?void 0:e.x)!==void 0&&`
    min-width: ${typeof e.x=="number"?`${e.x}px`:e.x};
    overflow-x: auto;
  `}

  ${({$bordered:e})=>e===!0&&`
    &.table-bordered {
      border: 1px solid #f0f0f0;
      border-radius: 2px;
    }
  `}
`,de=u.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: ${e=>e.$tableLayout??"fixed"};
`,le=u.thead`
  background: #fafafa;
  tr:first-child th {
    background: #fafafa;
    font-weight: 500;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    border-bottom: 1px solid #f0f0f0;
    padding: ${e=>e.$bordered?"16px":"12px 8px"};
    transition: background 0.3s ease;
  }
`,ie=u.tbody`
  tr {
    &:hover {
      td {
        background: #fafafa;
      }
    }
  }
`,S=u.tr`
  &:hover {
    td {
      background: ${e=>e.$hoverable??!1?"#fafafa":"transparent"};
    }
  }
  td {
    background: ${e=>e.$selected??!1?"#e6f7ff":"transparent"};
  }
`,N=u.td`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: ${e=>e.$align??"left"};
  box-sizing: border-box;
  vertical-align: middle;
  ${e=>(e.$ellipsis??!1)&&`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`,ce=u.th`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: ${e=>e.$align??"left"};
  cursor: ${e=>e.$sortable??!1?"pointer":"default"};
  ${e=>(e.$ellipsis??!1)&&`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  ${e=>(e.$sorted??!1)&&`
    color: #1890ff;
  `}
`,ue=u.tfoot`
  background: #fafafa;
  tr td {
    padding: 16px 8px;
    border-top: 1px solid #f0f0f0;
  }
`,q=u.div`
  display: flex;
  justify-content: ${e=>{switch(e.$position){case"left":return"flex-start";case"right":return"flex-end";case"center":default:return"center"}}};
  padding: 16px 8px;
`,fe=u.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .loading-content {
    opacity: 1;
  }
`,pe=u.td`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  box-sizing: border-box;
  vertical-align: middle;
`,ge=u.th`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  box-sizing: border-box;
  vertical-align: middle;
  background: #fafafa;
`,y=({columns:e,dataSource:l,rowKey:p,bordered:f=!1,size:v="middle",tableLayout:T,scroll:L,pagination:s,loading:m,rowSelection:o,onRow:k,className:F,style:G})=>{const[x,z]=b.useState((o==null?void 0:o.selectedRowKeys)??[]),[C,Y]=b.useState({}),h=(t,n)=>typeof p=="function"?p(t):p!==void 0?t[p]:"key"in t&&t.key!==void 0?t.key:n,Q=(t,n)=>{var a;Y(d=>({...d,[t.key??String(t.dataIndex)]:n})),(a=t.onSort)==null||a.call(t,n)},U=t=>{var a;const n=l.map((d,i)=>h(d,i));z(t?n:[]),(a=o==null?void 0:o.onChange)==null||a.call(o,t?n:[],t?l:[])},X=(t,n)=>{var c;const a=h(t,l.indexOf(t)),d=n?[...x,a]:x.filter(g=>g!==a);z(d);const i=l.filter(g=>{const re=h(g,l.indexOf(g));return d.includes(re)});(c=o==null?void 0:o.onChange)==null||c.call(o,d,i)},Z=t=>{const n=h(t,l.indexOf(t));return x.includes(n)},D=(t,n=!1)=>{var i;if(n){const c=x.length===l.length,g=x.length>0&&x.length<l.length;return r.jsx(ge,{children:r.jsx(K,{checked:c,indeterminate:g,onChange:U})})}const a=h(t,l.indexOf(t)),d=(i=o==null?void 0:o.getCheckboxProps)==null?void 0:i.call(o,t);return r.jsx(pe,{children:r.jsx(K,{checked:x.includes(a),disabled:d==null?void 0:d.disabled,indeterminate:d==null?void 0:d.indeterminate,onChange:c=>{X(t,c)}})})},ee=(t,n,a)=>{const d=n[t.dataIndex],i=t.render!=null?t.render(d,n,a):d,c=t.key??String(t.dataIndex);return r.jsx(N,{$align:t.align,$ellipsis:t.ellipsis,children:i},c)},te=t=>{const n=C[t.key??String(t.dataIndex)],a=typeof t.sorter=="function"||t.sorter===!0,d=t.key??String(t.dataIndex);return r.jsxs(ce,{$align:t.align,$ellipsis:t.ellipsis,$sortable:a,$sorted:n!==void 0,onClick:()=>{a&&Q(t,n==="ascend"?"descend":n==="descend"?null:"ascend")},children:[t.title,a&&r.jsx("span",{style:{marginLeft:4},children:n==="ascend"?"↑":n==="descend"?"↓":"↕"})]},d)},R=b.useMemo(()=>{const t=e.find(n=>C[n.key??String(n.dataIndex)]!==void 0);return t===void 0||typeof t.sorter!="function"?l:[...l].sort((n,a)=>{const d=C[t.key??String(t.dataIndex)];if(d===void 0)return 0;const i=t.sorter,c=i(n,a);return d==="ascend"?c:-c})},[l,e,C]),ne=b.useMemo(()=>{if(s===void 0||typeof s=="boolean")return R;const{current:t=1,pageSize:n=10}=s,a=(t-1)*n,d=a+n;return R.slice(a,d)},[R,s]),ae=(t,n)=>(k==null?void 0:k(t,n))??{},se=()=>{const t={};return r.jsxs(de,{$bordered:f,$tableLayout:T,children:[r.jsx(le,{$bordered:f,children:r.jsxs(S,{children:[o!==void 0&&D(t,!0),e.map(te)]})}),r.jsx(ie,{$bordered:f,children:ne.map((a,d)=>{const i=ae(a,d),c=h(a,d);return r.jsxs(S,{$hoverable:k!==void 0,$selected:Z(a),...i,children:[o!==void 0&&D(a),e.map(g=>ee(g,a,d))]},c)})}),s!==void 0&&typeof s!="boolean"&&r.jsx(ue,{$bordered:f,children:r.jsx(S,{children:r.jsx(N,{colSpan:o!==void 0?e.length+1:e.length,children:r.jsx(q,{$position:s.position,children:r.jsx(I,{current:s.current??1,pageSize:s.pageSize??10,total:s.total??l.length,onChange:a=>{s.onChange!=null&&s.onChange(a)},position:s.position})})})})})]})};return r.jsxs(oe,{className:`${F??""} ${f?"table-bordered":""}`,style:G,$size:v,$scroll:L,$bordered:f,children:[m===!0&&r.jsx(fe,{className:"loading-wrapper",children:r.jsx("div",{className:"loading-content",role:"alert",children:"Loading..."})}),se(),s!==void 0&&s!==!1&&r.jsx(q,{$position:typeof s=="object"?s.position:void 0,children:r.jsx(I,{current:typeof s=="object"?s.current??1:1,pageSize:typeof s=="object"?s.pageSize??10:10,total:l.length,onChange:t=>{typeof s=="object"&&typeof s.onChange=="function"&&s.onChange(t)},position:typeof s=="object"?s.position:void 0})})]})};try{y.displayName="Table",y.__docgenInfo={description:"",displayName:"Table",props:{columns:{defaultValue:null,description:"",name:"columns",required:!0,type:{name:"ColumnType<T>[]"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"T[]"}},rowKey:{defaultValue:null,description:"",name:"rowKey",required:!1,type:{name:"string | number | symbol | ((record: T) => string | number)"}},bordered:{defaultValue:{value:"false"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"middle"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'},{value:'"middle"'}]}},tableLayout:{defaultValue:null,description:"",name:"tableLayout",required:!1,type:{name:"enum",value:[{value:'"auto"'},{value:'"fixed"'}]}},scroll:{defaultValue:null,description:"",name:"scroll",required:!1,type:{name:"{ x?: string | number; y?: string | number; } | undefined"}},pagination:{defaultValue:null,description:"",name:"pagination",required:!1,type:{name:'boolean | { current: number; pageSize: number; total: number; onChange: (page: number) => void; position?: "left" | "center" | "right"; }'}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},rowSelection:{defaultValue:null,description:"",name:"rowSelection",required:!1,type:{name:"{ selectedRowKeys?: (string | number)[]; onChange?: ((selectedRowKeys: (string | number)[], selectedRows: T[]) => void); getCheckboxProps?: ((record: T) => { ...; }) | undefined; } | undefined"}},onRow:{defaultValue:null,description:"",name:"onRow",required:!1,type:{name:"((record: T, index: number) => { onClick?: MouseEventHandler<Element>; onDoubleClick?: MouseEventHandler<Element>; onContextMenu?: MouseEventHandler<...> | undefined; onMouseEnter?: MouseEventHandler<...> | undefined; onMouseLeave?: MouseEventHandler<...> | undefined; }) | undefined"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const $e={title:"Data Display/Table",component:y,parameters:{layout:"centered",docs:{description:{component:"A table displays rows of data."}}},tags:["autodocs"]},W=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"],status:"active",lastLogin:"2024-03-20 10:00:00"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"],status:"inactive",lastLogin:"2024-03-19 15:30:00"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park",tags:["cool","teacher"],status:"active",lastLogin:"2024-03-20 09:15:00"}],w=[{title:"Name",dataIndex:"name",key:"name",render:e=>r.jsx("a",{href:"#",children:e})},{title:"Age",dataIndex:"age",key:"age",sorter:(e,l)=>e.age-l.age},{title:"Address",dataIndex:"address",key:"address",ellipsis:!0},{title:"Tags",key:"tags",dataIndex:"tags",render:e=>r.jsx(r.Fragment,{children:e.map(l=>r.jsx("span",{style:{marginRight:4,padding:"2px 8px",backgroundColor:l==="loser"?"#ff4d4f":"#87d068",color:"#fff",borderRadius:4,fontSize:"12px"},children:l},l))})},{title:"Status",key:"status",dataIndex:"status",render:e=>r.jsx("span",{style:{padding:"2px 8px",backgroundColor:e==="active"?"#f6ffed":"#fff1f0",color:e==="active"?"#52c41a":"#ff4d4f",borderRadius:4,fontSize:"12px"},children:e})},{title:"Last Login",key:"lastLogin",dataIndex:"lastLogin",sorter:(e,l)=>new Date(e.lastLogin).getTime()-new Date(l.lastLogin).getTime()}],$={args:{columns:w,dataSource:W,bordered:!0}},j={render:()=>{const[e,l]=b.useState([]),p={selectedRowKeys:e,onChange:(f,v)=>{l(f),console.log("selectedRows:",v)}};return r.jsx(y,{columns:w,dataSource:W,rowSelection:p,bordered:!0})}},M={render:()=>{const[e,l]=b.useState(1),p=5,f=50,T={current:e,pageSize:p,total:f,onChange:s=>{l(s)}},L=Array.from({length:f},(s,m)=>({key:String(m+1),name:`Name ${m+1}`,age:20+Math.floor(Math.random()*50),address:`Address ${m+1}`,tags:["tag"+(m%3+1)],status:m%2===0?"active":"inactive",lastLogin:(()=>{const o=new Date;return o.setDate(o.getDate()-Math.floor(Math.random()*7)),o.setHours(Math.floor(Math.random()*24)),o.setMinutes(Math.floor(Math.random()*60)),o.setSeconds(Math.floor(Math.random()*60)),o.toLocaleString()})()}));return r.jsx(y,{columns:w,dataSource:L,pagination:T,bordered:!0})}};var V,_,E;$.parameters={...$.parameters,docs:{...(V=$.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    columns,
    dataSource,
    bordered: true
  }
}`,...(E=(_=$.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var H,A,P;j.parameters={...j.parameters,docs:{...(H=j.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([]);
    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys: Array<string | number>, selectedRows: DataType[]) => {
        setSelectedRowKeys(selectedRowKeys);
        console.log("selectedRows:", selectedRows);
      }
    };
    return <Table<DataType> columns={columns} dataSource={dataSource} rowSelection={rowSelection} bordered />;
  }
}`,...(P=(A=j.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,B,J;M.parameters={...M.parameters,docs:{...(O=M.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [current, setCurrent] = useState(1);
    const pageSize = 5;
    const total = 50;
    const handleChange = (page: number): void => {
      setCurrent(page);
    };
    const pagination = {
      current,
      pageSize,
      total,
      onChange: handleChange
    };
    const allData: DataType[] = Array.from({
      length: total
    }, (_, i) => ({
      key: String(i + 1),
      name: \`Name \${i + 1}\`,
      age: 20 + Math.floor(Math.random() * 50),
      address: \`Address \${i + 1}\`,
      tags: ["tag" + (i % 3 + 1)],
      status: i % 2 === 0 ? "active" as const : "inactive" as const,
      lastLogin: (() => {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 7));
        date.setHours(Math.floor(Math.random() * 24));
        date.setMinutes(Math.floor(Math.random() * 60));
        date.setSeconds(Math.floor(Math.random() * 60));
        return date.toLocaleString();
      })()
    }));
    return <Table<DataType> columns={columns} dataSource={allData} pagination={pagination} bordered />;
  }
}`,...(J=(B=M.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};const je=["Basic","Selection","Pagination"];export{$ as Basic,M as Pagination,j as Selection,je as __namedExportsOrder,$e as default};
