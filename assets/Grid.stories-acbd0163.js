import{a as o,j as e}from"./jsx-runtime-8a1697f2.js";import{d as x}from"./styled-components.browser.esm-16342693.js";import{R as C}from"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const h=x.div`
  flex: 0 0 ${l=>l.span!=null?l.span/24*100:100}%;
  max-width: ${l=>l.span!=null?l.span/24*100:100}%;
  margin-left: ${l=>l.offset!=null?l.offset/24*100+"%":l.gutter/2+"px"};
  margin-right: ${l=>l.gutter/2}px;
  box-sizing: border-box;
  text-align: center;
`,n=({children:l,span:a,gutter:f=0,offset:c=0,...R})=>o(h,{span:a,gutter:f,offset:c,...R,children:l});try{n.displayName="Col",n.__docgenInfo={description:"",displayName:"Col",props:{span:{defaultValue:null,description:"",name:"span",required:!1,type:{name:"number"}},gutter:{defaultValue:{value:"0"},description:"",name:"gutter",required:!1,type:{name:"number"}},offset:{defaultValue:{value:"0"},description:"",name:"offset",required:!1,type:{name:"number"}}}}}catch{}const _=x.div`
  display: flex;
  flex-wrap: no-wrap;
  margin-left: -${l=>l.gutter/2}px;
  margin-right: -${l=>l.gutter/2}px;
  width: calc(100% + ${l=>l.gutter}px);
`,r=({children:l,gutter:a=0,...f})=>o(_,{gutter:a,...f,children:C.Children.map(l,c=>C.isValidElement(c)?C.cloneElement(c,{gutter:a}):c)});try{r.displayName="Row",r.__docgenInfo={description:"",displayName:"Row",props:{gutter:{defaultValue:{value:"0"},description:"",name:"gutter",required:!1,type:{name:"number"}}}}}catch{}const N={title:"Layout/Grid",parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{gutter:{description:"Grid spacing",control:{disable:!0},defaultValue:{summary:0}},span:{description:"Number of grid placeholders",control:{disable:!0},defaultValue:{summary:24}},offset:{description:"The number of spacers on the left side of the grid",control:{disable:!0},defaultValue:{summary:0}}}},t={render:()=>e("div",{style:{padding:"20px"},children:[o(r,{children:o(n,{span:24,style:{backgroundColor:"#f0f0f0",color:"#000"},children:"col"})}),e(r,{children:[o(n,{span:12,style:{backgroundColor:"#d0d0d0",color:"#000"},children:"col-12"}),o(n,{span:12,style:{backgroundColor:"#e0e0e0",color:"#000"},children:"col-12"})]}),e(r,{children:[o(n,{span:8,style:{backgroundColor:"#b0b0b0",color:"#fff"},children:"col-8"}),o(n,{span:8,style:{backgroundColor:"#c0c0c0",color:"#fff"},children:"col-8"}),o(n,{span:8,style:{backgroundColor:"#d0d0d0",color:"#fff"},children:"col-8"})]}),e(r,{children:[o(n,{span:6,style:{backgroundColor:"#90c0e0",color:"#fff"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#80b0d0",color:"#fff"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#70a0c0",color:"#fff"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#6090b0",color:"#fff"},children:"col-6"})]})]}),parameters:{docs:{source:{code:`
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
        `}}}},s={render:()=>o("div",{style:{padding:"40px"},children:e(r,{gutter:16,children:[o(n,{span:6,style:{backgroundColor:"#90c0e0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#80b0d0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#70a0c0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"}),o(n,{span:6,style:{backgroundColor:"#6090b0",color:"#fff",padding:"8px",textAlign:"center"},children:"col-6"})]})}),parameters:{docs:{source:{code:`
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
        `}}}},d={render:()=>e("div",{style:{padding:"20px"},children:[o(r,{children:o(n,{span:8,offset:8,style:{backgroundColor:"#f0f0f0",color:"#000"},children:"col-8"})}),e(r,{children:[o(n,{span:6,offset:6,style:{backgroundColor:"#d0d0d0",color:"#000"},children:"col-6 col-offset-6"}),o(n,{span:6,offset:6,style:{backgroundColor:"#b0b0b0",color:"#000"},children:"col-6 col-offset-6"})]}),o(r,{children:o(n,{span:12,offset:4,style:{backgroundColor:"#909090",color:"#fff"},children:"col-12 col-offset-6"})})]}),parameters:{docs:{source:{code:`
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
        `}}}};var p,i,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};var g,b,y;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(b=s.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var k,m,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(m=d.parameters)==null?void 0:m.docs)==null?void 0:w.source}}};const $=["DefaultGrid","GridWithGutterNoWrap","GridWithOffset"];export{t as DefaultGrid,s as GridWithGutterNoWrap,d as GridWithOffset,$ as __namedExportsOrder,N as default};
