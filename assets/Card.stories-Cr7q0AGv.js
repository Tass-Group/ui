import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{l as h,d as a}from"./styled-components.browser.esm-BgH1a_-m.js";import{S as P}from"./index-BjuZPhNw.js";import{A as F}from"./index-xbg0AO1Q.js";import{I as m}from"./index-CbqPYD7y.js";import"./index-yBjzXJbu.js";import"./index-BlmOqGMO.js";const J=a.div`
  position: relative;
  background: #fff;
  border-radius: 2px;
  ${r=>(r.$bordered??!1)&&h`
    border: 1px solid #f0f0f0;
  `}
  
  ${r=>(r.$hoverable??!1)&&h`
    cursor: pointer;
    transition: box-shadow 0.3s;
    &:hover {
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16), 
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}

  ${r=>r.$size==="small"&&h`
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
`,K=a.div`
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
`,Q=a.div`
  padding: 16px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,X=a.div`
  padding: 16px 0;
  color: rgba(0, 0, 0, 0.85);
`,Y=a.div`
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
`,Z=a.div`
  padding: 24px;
`,ee=a.ul`
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
`,re=a.div`
  float: left;
  width: 33.33%;
  padding: 24px;
  border: 0;
  border-radius: 0;
  box-shadow: 1px 0 0 0 #f0f0f0, 0 1px 0 0 #f0f0f0, 
              1px 1px 0 0 #f0f0f0, 1px 0 0 0 #f0f0f0 inset, 
              0 1px 0 0 #f0f0f0 inset;
  transition: all 0.3s;

  ${r=>(r.$hoverable??!1)&&h`
    cursor: pointer;
    &:hover {
      position: relative;
      z-index: 1;
      box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16),
                 0 3px 6px 0 rgba(0,0,0,0.12),
                 0 5px 12px 4px rgba(0,0,0,0.09);
    }
  `}
`,ae=a.div`
  display: flex;
  margin: -4px 0;
`,te=a.div`
  padding-right: 16px;
`,ne=a.div`
  flex: 1;
  overflow: hidden;
`,de=a.div`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 16px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`,ie=a.div`
  color: rgba(0, 0, 0, 0.45);
`,t=({title:r,extra:d,bordered:i=!0,cover:s,actions:n,loading:k=!1,hoverable:N=!1,size:D="default",className:W,style:I,children:R})=>{const B=e.jsx("div",{children:e.jsx(P,{loading:!0,active:!0,children:e.jsx("div",{style:{height:200}})})}),E=()=>r===null&&d===null?null:e.jsxs(K,{children:[r!==null&&e.jsx(Q,{children:r}),d!==null&&e.jsx(X,{children:d})]}),H=()=>s===null?null:e.jsx(Y,{children:s}),L=()=>n===null||(n==null?void 0:n.length)===0?null:e.jsx(ee,{children:n==null?void 0:n.map((U,O)=>e.jsx("li",{style:{width:`${100/n.length}%`},children:U},`action-${O}`))});return e.jsxs(J,{className:W,style:I,$bordered:i,$hoverable:N,$size:D,children:[E(),H(),e.jsx(Z,{children:k?B:R}),L()]})},se=({avatar:r,title:d,description:i,className:s,style:n})=>e.jsxs(ae,{className:s,style:n,children:[r!==null&&e.jsx(te,{children:r}),(d!==null||i!==null)&&e.jsxs(ne,{children:[d!==null&&e.jsx(de,{children:d}),i!==null&&e.jsx(ie,{children:i})]})]}),le=({hoverable:r=!0,className:d,style:i,children:s})=>e.jsx(re,{className:d,style:i,$hoverable:r,children:s});t.Meta=se;t.Grid=le;try{t.displayName="Card",t.__docgenInfo={description:"",displayName:"Card",props:{title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"ReactNode"}},extra:{defaultValue:null,description:"",name:"extra",required:!1,type:{name:"ReactNode"}},bordered:{defaultValue:{value:"true"},description:"",name:"bordered",required:!1,type:{name:"boolean"}},cover:{defaultValue:null,description:"",name:"cover",required:!1,type:{name:"ReactNode"}},actions:{defaultValue:null,description:"",name:"actions",required:!1,type:{name:"ReactNode[]"}},loading:{defaultValue:{value:"false"},description:"",name:"loading",required:!1,type:{name:"boolean"}},hoverable:{defaultValue:{value:"true"},description:"",name:"hoverable",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"default"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"default"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const fe={title:"Data Display/Card",component:t,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{title:"Default size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:e.jsx("p",{children:"Card content"})}},o={args:{size:"small",title:"Small size card",extra:e.jsx("a",{href:"#",children:"More"}),style:{width:300},children:e.jsx("p",{children:"Card content"})}},c={args:{style:{width:300},cover:e.jsx("img",{alt:"example",src:"https://picsum.photos/300/200"}),children:e.jsx(t.Meta,{avatar:e.jsx(F,{children:"U"}),title:"Card title",description:"This is the description"})}},p={args:{title:"Card title",style:{width:300},actions:[e.jsx(m,{name:"cog"},"cog"),e.jsx(m,{name:"pencil"},"pencil")],children:e.jsx("p",{children:"Card content"})}},u={args:{loading:!0,title:"Card title",style:{width:300},children:e.jsx("p",{children:"Card content"})}},x={render:()=>e.jsxs(t,{title:"Card Title",style:{width:"100%"},children:[e.jsx(t.Grid,{children:"Content"}),e.jsx(t.Grid,{children:"Content"}),e.jsx(t.Grid,{children:"Content"}),e.jsx(t.Grid,{children:"Content"})]}),parameters:{docs:{source:{code:`
<Card title="Card Title" style={{ width: "100%" }}>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
</Card>
        `}}}};var f,C,g;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: "Default size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(g=(C=l.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};var v,b,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    size: "small",
    title: "Small size card",
    extra: <a href="#">More</a>,
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(y=(b=o.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,w,G;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    style: {
      width: 300
    },
    cover: <img alt="example" src="https://picsum.photos/300/200" />,
    children: <Card.Meta avatar={<Avatar>U</Avatar>} title="Card title" description="This is the description" />
  }
}`,...(G=(w=c.parameters)==null?void 0:w.docs)==null?void 0:G.source}}};var M,z,S;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    title: "Card title",
    style: {
      width: 300
    },
    actions: [<Icon key="cog" name="cog" />, <Icon key="pencil" name="pencil" />],
    children: <p>Card content</p>
  }
}`,...(S=(z=p.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};var $,q,V;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: "Card title",
    style: {
      width: 300
    },
    children: <p>Card content</p>
  }
}`,...(V=(q=u.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var _,A,T;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(T=(A=x.parameters)==null?void 0:A.docs)==null?void 0:T.source}}};const Ce=["Basic","Small","WithMeta","WithActions","Loading","GridCard"];export{l as Basic,x as GridCard,u as Loading,o as Small,p as WithActions,c as WithMeta,Ce as __namedExportsOrder,fe as default};
