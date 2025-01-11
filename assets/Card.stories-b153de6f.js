import{j as e,F as J,a as s}from"./jsx-runtime-c9381026.js";import{d as a,l as o,m as K}from"./styled-components.browser.esm-9b53ad8e.js";import{A as Q}from"./index-a197719e.js";import{I as C}from"./index-28fff672.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const X=a.div`
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
`,Y=a.div`
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
`,Z=a.div`
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ee=a.div`
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.85);
`,re=a.div`
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
`,ae=a.div`
  padding: 24px;
`,te=a.ul`
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
`,ne=a.div`
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
`,de=a.div`
  display: flex;
  margin: -4px 0;
`,ie=a.div`
  padding-right: 16px;
`,le=a.div`
  flex: 1;
  overflow: hidden;
`,oe=a.div`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,se=a.div`
  color: rgba(0, 0, 0, 0.45);
`,ce=K`
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`,pe=a.div`
  background: linear-gradient(
    90deg,
    #f2f2f2 25%,
    #e6e6e6 37%,
    #f2f2f2 63%
  );
  background-size: 400% 100%;
  animation: ${r=>r.$active??!1?o`${ce} 1.4s ease infinite`:"none"};
`,g=({loading:r=!0,active:t,children:i})=>r?e(pe,{"data-testid":"skeleton",$active:t}):e(J,{children:i});try{g.displayName="Skeleton",g.__docgenInfo={description:"",displayName:"Skeleton",props:{loading:{defaultValue:{value:"true"},description:"",name:"loading",required:!1,type:{name:"boolean"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}}}}}catch{}const n=({title:r,extra:t,bordered:i=!0,cover:l,actions:d,loading:I=!1,hoverable:W=!1,size:B="default",className:j,style:R,children:H})=>{const E=e("div",{children:e(g,{loading:!0,active:!0,children:e("div",{style:{height:200}})})}),F=()=>r===null&&t===null?null:s(Y,{children:[r!==null&&e(Z,{children:r}),t!==null&&e(ee,{children:t})]}),L=()=>l===null?null:e(re,{children:l}),U=()=>d===null||(d==null?void 0:d.length)===0?null:e(te,{children:d==null?void 0:d.map((O,P)=>e("li",{style:{width:`${100/d.length}%`},children:O},`action-${P}`))});return s(X,{className:j,style:R,$bordered:i,$hoverable:W,$size:B,children:[F(),L(),e(ae,{children:I?E:H}),U()]})},ue=({avatar:r,title:t,description:i,className:l,style:d})=>s(de,{className:l,style:d,children:[r!==null&&e(ie,{children:r}),(t!==null||i!==null)&&s(le,{children:[t!==null&&e(oe,{children:t}),i!==null&&e(se,{children:i})]})]}),me=({hoverable:r=!0,className:t,style:i,children:l})=>e(ne,{className:t,style:i,$hoverable:r,children:l});n.Meta=ue;n.Grid=me;try{n.displayName="Card",n.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},cover:{defaultValue:null,description:"",name:"cover",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const be={title:"Data Display/Card",component:n,parameters:{layout:"centered"},tags:["autodocs"]},c={args:{title:"Default size card",extra:e("a",{href:"#",children:"More"}),style:{width:300},children:e("p",{children:"Card content"})}},p={args:{size:"small",title:"Small size card",extra:e("a",{href:"#",children:"More"}),style:{width:300},children:e("p",{children:"Card content"})}},u={args:{style:{width:300},cover:e("img",{alt:"example",src:"https://picsum.photos/300/200"}),children:e(n.Meta,{avatar:e(Q,{children:"U"}),title:"Card title",description:"This is the description"})}},m={args:{title:"Card title",style:{width:300},actions:[e(C,{name:"cog"},"cog"),e(C,{name:"pencil"},"pencil")],children:e("p",{children:"Card content"})}},f={args:{loading:!0,title:"Card title",style:{width:300},children:e("p",{children:"Card content"})}},h={render:()=>s(n,{title:"Card Title",style:{width:"100%"},children:[e(n.Grid,{children:"Content"}),e(n.Grid,{children:"Content"}),e(n.Grid,{children:"Content"}),e(n.Grid,{children:"Content"})]}),parameters:{docs:{source:{code:`
<Card title="Card Title" style={{ width: "100%" }}>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
</Card>
        `}}}};var x,v,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: "Default size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(b=(v=c.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var y,w,G;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    title: "Small size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(G=(w=p.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var _,$,k;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    style: {
      width: 300
    },
    cover: <img alt="example" src="https://picsum.photos/300/200" />,
    children: <Card.Meta avatar={<Avatar>U</Avatar>} title="Card title" description="This is the description" />
  }
}`,...(k=($=u.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var S,z,M;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    title: "Card title",
    style: {
      width: 300
    },
    actions: [<Icon key="cog" name="cog" />, <Icon key="pencil" name="pencil" />],
    children: <p>Card content</p>
  }
}`,...(M=(z=m.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var q,V,N;f.parameters={...f.parameters,docs:{...(q=f.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Card title",
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(N=(V=f.parameters)==null?void 0:V.docs)==null?void 0:N.source}}};var A,T,D;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(D=(T=h.parameters)==null?void 0:T.docs)==null?void 0:D.source}}};const ye=["Basic","Small","WithMeta","WithActions","Loading","GridCard"];export{c as Basic,h as GridCard,f as Loading,p as Small,m as WithActions,u as WithMeta,ye as __namedExportsOrder,be as default};
