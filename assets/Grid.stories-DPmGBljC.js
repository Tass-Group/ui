import{j as o}from"./jsx-runtime-Cf8x2fCZ.js";import{d as m}from"./styled-components.browser.esm-BgH1a_-m.js";import{R as f}from"./index-BlmOqGMO.js";import"./index-yBjzXJbu.js";const R=m.div`
  flex: 0 0 ${l=>l.span!=null?l.span/24*100:100}%;
  max-width: ${l=>l.span!=null?l.span/24*100:100}%;
  margin-left: ${l=>l.offset!=null?l.offset/24*100+"%":l.gutter/2+"px"};
  margin-right: ${l=>l.gutter/2}px;
  box-sizing: border-box;
  text-align: center;
`,n=({children:l,span:c,gutter:d=0,offset:e=0,...w})=>o.jsx(R,{span:c,gutter:d,offset:e,...w,children:l});try{n.displayName="Col",n.__docgenInfo={description:"",displayName:"Col",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},gutter:{defaultValue:{value:"0"},description:"",name:"gutter",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}}}}}catch{}const h=m.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: -${l=>l.gutter/2}px;
  margin-right: -${l=>l.gutter/2}px;
  width: calc(100% + ${l=>l.gutter}px);
`,r=({children:l,gutter:c=0,...d})=>o.jsx(h,{gutter:c,...d,children:f.Children.map(l,e=>f.isValidElement(e)?f.cloneElement(e,{gutter:c}):e)});try{r.displayName="Row",r.__docgenInfo={description:"",displayName:"Row",props:{gutter:{defaultValue:{value:"0"},description:"",name:"gutter",required:!1,type:{name:"number"}}}}}catch{}const G={title:"Layout/Grid",parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{gutter:{description:"Grid spacing",control:{disable:!0},defaultValue:{summary:0}},span:{description:"Number of grid placeholders",control:{disable:!0},defaultValue:{summary:24}},offset:{description:"The number of spacers on the left side of the grid",control:{disable:!0},defaultValue:{summary:0}}}},s={render:()=>o.jsxs("div",{style:{padding:"20px"},children:[o.jsx(r,{children:o.jsx(n,{span:24,style:{backgroundColor:"#f0f0f0",color:"#000"},children:"col"})}),o.jsxs(r,{children:[o.jsx(n,{span:12,style:{backgroundColor:"#d0d0d0",color:"#000"},children:"col-12"}),o.jsx(n,{span:12,style:{backgroundColor:"#e0e0e0",color:"#000"},children:"col-12"})]}),o.jsxs(r,{children:[o.jsx(n,{span:8,style:{backgroundColor:"#b0b0b0",color:"#fff"},children:"col-8"}),o.jsx(n,{span:8,style:{backgroundColor:"#c0c0c0",color:"#fff"},children:"col-8"}),o.jsx(n,{span:8,style:{backgroundColor:"#d0d0d0",color:"#fff"},children:"col-8"})]}),o.jsxs(r,{children:[o.jsx(n,{span:6,style:{backgroundColor:"#90c0e0",color:"#fff"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#80b0d0",color:"#fff"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#70a0c0",color:"#fff"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#6090b0",color:"#fff"},children:"col-6"})]})]}),parameters:{docs:{source:{code:`
<Row>
  <Col span={24} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col</Col>
</Row>
<Row>
  <Col span={12} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-12</Col>
  <Col span={12} style={{ backgroundColor: "#e0e0e0", color: "#000" }}>col-12</Col>
</Row>
<Row>
  <Col span={8} style={{ backgroundColor: "#b0b0b0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#c0c0c0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#d0d0d0", color: "#fff" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff" }}>col-6</Col>
</Row>
        `}}}},a={render:()=>o.jsx("div",{style:{padding:"40px"},children:o.jsxs(r,{gutter:16,children:[o.jsx(n,{span:6,style:{backgroundColor:"#90c0e0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#80b0d0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#70a0c0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o.jsx(n,{span:6,style:{backgroundColor:"#6090b0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"})]})}),parameters:{docs:{source:{code:`
<Row gutter={16}>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
</Row>
        `}}}},t={render:()=>o.jsxs("div",{style:{padding:"20px"},children:[o.jsx(r,{children:o.jsx(n,{span:8,offset:8,style:{backgroundColor:"#f0f0f0",color:"#000"},children:"col-8"})}),o.jsxs(r,{children:[o.jsx(n,{span:6,offset:6,style:{backgroundColor:"#d0d0d0",color:"#000"},children:"col-6 col-offset-6"}),o.jsx(n,{span:6,offset:6,style:{backgroundColor:"#b0b0b0",color:"#000"},children:"col-6 col-offset-6"})]}),o.jsx(r,{children:o.jsx(n,{span:12,offset:4,style:{backgroundColor:"#909090",color:"#fff"},children:"col-12 col-offset-6"})})]}),parameters:{docs:{source:{code:`
<Row>
  <Col span={8} offset={8} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} offset={6} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-6 col-offset-6</Col>
  <Col span={6} offset={6} style={{ backgroundColor: "#b0b0b0", color: "#000" }}>col-6 col-offset-6</Col>
</Row>
<Row>
  <Col span={12} offset={4} style={{ backgroundColor: "#909090", color: "#fff" }}>col-12 col-offset-6</Col>
</Row>
        `}}}};var C,p,i;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px"
  }}>
      <Row>
        <Col span={24} style={{
        backgroundColor: "#f0f0f0",
        color: "#000"
      }}>col</Col>
      </Row>
      <Row>
        <Col span={12} style={{
        backgroundColor: "#d0d0d0",
        color: "#000"
      }}>col-12</Col>
        <Col span={12} style={{
        backgroundColor: "#e0e0e0",
        color: "#000"
      }}>col-12</Col>
      </Row>
      <Row>
        <Col span={8} style={{
        backgroundColor: "#b0b0b0",
        color: "#fff"
      }}>col-8</Col>
        <Col span={8} style={{
        backgroundColor: "#c0c0c0",
        color: "#fff"
      }}>col-8</Col>
        <Col span={8} style={{
        backgroundColor: "#d0d0d0",
        color: "#fff"
      }}>col-8</Col>
      </Row>
      <Row>
        <Col span={6} style={{
        backgroundColor: "#90c0e0",
        color: "#fff"
      }}>col-6</Col>
        <Col span={6} style={{
        backgroundColor: "#80b0d0",
        color: "#fff"
      }}>col-6</Col>
        <Col span={6} style={{
        backgroundColor: "#70a0c0",
        color: "#fff"
      }}>col-6</Col>
        <Col span={6} style={{
        backgroundColor: "#6090b0",
        color: "#fff"
      }}>col-6</Col>
      </Row>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<Row>
  <Col span={24} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col</Col>
</Row>
<Row>
  <Col span={12} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-12</Col>
  <Col span={12} style={{ backgroundColor: "#e0e0e0", color: "#000" }}>col-12</Col>
</Row>
<Row>
  <Col span={8} style={{ backgroundColor: "#b0b0b0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#c0c0c0", color: "#fff" }}>col-8</Col>
  <Col span={8} style={{ backgroundColor: "#d0d0d0", color: "#fff" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff" }}>col-6</Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff" }}>col-6</Col>
</Row>
        \`
      }
    }
  }
}`,...(i=(p=s.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "40px"
  }}>
      <Row gutter={16}>
        <Col span={6} style={{
        backgroundColor: "#90c0e0",
        color: "#fff",
        padding: "8px",
        textAlign: "center"
      }}>
          col-6
        </Col>
        <Col span={6} style={{
        backgroundColor: "#80b0d0",
        color: "#fff",
        padding: "8px",
        textAlign: "center"
      }}>
          col-6
        </Col>
        <Col span={6} style={{
        backgroundColor: "#70a0c0",
        color: "#fff",
        padding: "8px",
        textAlign: "center"
      }}>
          col-6
        </Col>
        <Col span={6} style={{
        backgroundColor: "#6090b0",
        color: "#fff",
        padding: "8px",
        textAlign: "center"
      }}>
          col-6
        </Col>
      </Row>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<Row gutter={16}>
  <Col span={6} style={{ backgroundColor: "#90c0e0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#80b0d0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#70a0c0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
  <Col span={6} style={{ backgroundColor: "#6090b0", color: "#fff", padding: "8px", textAlign: "center" }}>
    col-6
  </Col>
</Row>
        \`
      }
    }
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,x,k;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "20px"
  }}>
      <Row>
        <Col span={8} offset={8} style={{
        backgroundColor: "#f0f0f0",
        color: "#000"
      }}>col-8</Col>
      </Row>
      <Row>
        <Col span={6} offset={6} style={{
        backgroundColor: "#d0d0d0",
        color: "#000"
      }}>col-6 col-offset-6</Col>
        <Col span={6} offset={6} style={{
        backgroundColor: "#b0b0b0",
        color: "#000"
      }}>col-6 col-offset-6</Col>
      </Row>
      <Row>
        <Col span={12} offset={4} style={{
        backgroundColor: "#909090",
        color: "#fff"
      }}>col-12 col-offset-6</Col>
      </Row>
    </div>,
  parameters: {
    docs: {
      source: {
        code: \`
<Row>
  <Col span={8} offset={8} style={{ backgroundColor: "#f0f0f0", color: "#000" }}>col-8</Col>
</Row>
<Row>
  <Col span={6} offset={6} style={{ backgroundColor: "#d0d0d0", color: "#000" }}>col-6 col-offset-6</Col>
  <Col span={6} offset={6} style={{ backgroundColor: "#b0b0b0", color: "#000" }}>col-6 col-offset-6</Col>
</Row>
<Row>
  <Col span={12} offset={4} style={{ backgroundColor: "#909090", color: "#fff" }}>col-12 col-offset-6</Col>
</Row>
        \`
      }
    }
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const V=["DefaultGrid","GridWithGutterNoWrap","GridWithOffset"];export{s as DefaultGrid,a as GridWithGutterNoWrap,t as GridWithOffset,V as __namedExportsOrder,G as default};
