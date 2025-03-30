import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{l as o,d as a,m as P}from"./styled-components.browser.esm-BgH1a_-m.js";import{A as J}from"./index-Rws8Cf-V.js";import{I as h}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const K=a.div`
  position: relative;
  background: #fff;
  border-radius: 2px;
  ${r=>(r.$bordered??!1)&&o`
    border: 1px solid #f0f0f0;
  `}
  
  ${r=>(r.$hoverable??!1)&&o`
    cursor: pointer;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16), 
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}

  ${r=>r.$size==="small"&&o`
    .ant-card-head {
      min-height: 36px;
      padding: 0 12px;
      font-size: 14px;
    }
    .ant-card-head-title,
    .ant-card-extra {
      padding: 8px 0;
    }
    .ant-card-body {
      padding: 12px;
    }
  `}
`,Q=a.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 48px;
  margin-bottom: -1px;
  padding: 0 24px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  background: transparent;
  border-bottom: 1px solid #f0f0f0;
  border-radius: 2px 2px 0 0;
`,X=a.div`
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,Y=a.div`
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.85);
`,Z=a.div`
  margin-top: -1px;
  margin-right: -1px;
  margin-left: -1px;
  
  & > * {
    display: block;
    width: 100%;
  }
  
  img {
    border-radius: 2px 2px 0 0;
  }
`,ee=a.div`
  padding: 24px;
`,re=a.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
  background: #fff;
  border-top: 1px solid #f0f0f0;
  
  & > li {
    margin: 12px 0;
    text-align: center;
    
    &:not(:last-child) {
      border-right: 1px solid #f0f0f0;
    }
  }
`,ae=a.div`
  float: left;
  width: 33.33%;
  padding: 24px;
  border: 0;
  border-radius: 0;
  box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 
              1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 
              0 1px 0 0 #f0f0f0 inset;
  transition: all 0.3s;

  ${r=>(r.$hoverable??!1)&&o`
    cursor: pointer;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16),
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}
`,te=a.div`
  display: flex;
  margin: -4px 0;
`,ne=a.div`
  padding-right: 16px;
`,de=a.div`
  flex: 1;
  overflow: hidden;
`,ie=a.div`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,se=a.div`
  color: rgba(0, 0, 0, 0.45);
`,oe=P`
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`,le=a.div`
  background: linear-gradient(
    90deg,
    #f2f2f2 25%,
    #e6e6e6 37%,
    #f2f2f2 63%
  );
  background-size: 400% 100%;
  animation: ${r=>r.$active??!1?o`${oe} 1.4s ease infinite`:"none"};
`,f=({loading:r=!0,active:t,children:i})=>r?e.jsx(le,{"data-testid":"skeleton",$active:t}):e.jsx(e.Fragment,{children:i});try{f.displayName="Skeleton",f.__docgenInfo={description:"",displayName:"Skeleton",props:{loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const n=({title:r,extra:t,bordered:i=!0,cover:s,actions:d,loading:T=!1,hoverable:D=!1,size:I="default",className:W,style:B,children:R})=>{const E=e.jsx("div",{children:e.jsx(f,{loading:!0,active:!0,children:e.jsx("div",{style:{height:200}})})}),H=()=>r===null&&t===null?null:e.jsxs(Q,{children:[r!==null&&e.jsx(X,{children:r}),t!==null&&e.jsx(Y,{children:t})]}),L=()=>s===null?null:e.jsx(Z,{children:s}),U=()=>d===null||(d==null?void 0:d.length)===0?null:e.jsx(re,{children:d==null?void 0:d.map((F,O)=>e.jsx("li",{style:{width:`${100/d.length}%`},children:F},`action-${O}`))});return e.jsxs(K,{className:W,style:B,$bordered:i,$hoverable:D,$size:I,children:[H(),L(),e.jsx(ee,{children:T?E:R}),U()]})},ce=({avatar:r,title:t,description:i,className:s,style:d})=>e.jsxs(te,{className:s,style:d,children:[r!==null&&e.jsx(ne,{children:r}),(t!==null||i!==null)&&e.jsxs(de,{children:[t!==null&&e.jsx(ie,{children:t}),i!==null&&e.jsx(se,{children:i})]})]}),pe=({hoverable:r=!0,className:t,style:i,children:s})=>e.jsx(ae,{className:t,style:i,$hoverable:r,children:s});n.Meta=ce;n.Grid=pe;try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},cover:{defaultValue:null,description:"",name:"cover",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"small"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const Ce={title:"Data Display/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{title:"Default size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:e.jsx("p",{children:"Card content"})}},c={args:{size:"small",title:"Small size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:e.jsx("p",{children:"Card content"})}},p={args:{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://picsum.photos/300/200"}),children:e.jsx(n.Meta,{avatar:e.jsx(J,{children:"U"}),title:"Card title",description:"This is the description"})}},u={args:{title:"Card title",style:{width:300},actions:[e.jsx(h,{name:"cog"},"cog"),e.jsx(h,{name:"pencil"},"pencil")],children:e.jsx("p",{children:"Card content"})}},m={args:{loading:!0,title:"Card title",style:{width:300},children:e.jsx("p",{children:"Card content"})}},x={render:()=>e.jsxs(n,{title:"Card Title",style:{width:"100%"},children:[e.jsx(n.Grid,{children:"Content"}),e.jsx(n.Grid,{children:"Content"}),e.jsx(n.Grid,{children:"Content"}),e.jsx(n.Grid,{children:"Content"})]}),parameters:{docs:{source:{code:`
<Card title="Card Title" style={{ width: "100%" }}>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
</Card>
        `}}}};var g,C,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: "Default size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(v=(C=l.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var b,y,j;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: "small",
    title: "Small size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(j=(y=c.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var w,G,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    style: {
      width: 300
    },
    cover: <img alt="example" src="https://picsum.photos/300/200" />,
    children: <Card.Meta avatar={<Avatar>U</Avatar>} title="Card title" description="This is the description" />
  }
}`,...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var $,k,S;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    title: "Card title",
    style: {
      width: 300
    },
    actions: [<Icon key="cog" name="cog" />, <Icon key="pencil" name="pencil" />],
    children: <p>Card content</p>
  }
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var z,M,q;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Card title",
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(q=(M=m.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var V,N,A;x.parameters={...x.parameters,docs:{...(V=x.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => <Card title="Card Title" style={{
    width: "100%"
  }}>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
    </Card>,
  parameters: {
    docs: {
      source: {
        code: \`
<Card title="Card Title" style={{ width: "100%" }}>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
</Card>
        \`
      }
    }
  }
}`,...(A=(N=x.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const ve=["Basic","Small","WithMeta","WithActions","Loading","GridCard"];export{l as Basic,x as GridCard,m as Loading,c as Small,u as WithActions,p as WithMeta,ve as __namedExportsOrder,Ce as default};
