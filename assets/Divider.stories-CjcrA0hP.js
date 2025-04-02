import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t}from"./index--ehRUsl2.js";import"./index-yBjzXJbu.js";import"./styled-components.browser.esm-BgH1a_-m.js";import"./index-BlmOqGMO.js";const S={title:"Layout/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{disable:!0},options:["horizontal","vertical"],description:"Sets the orientation of the divider"},color:{control:{type:"color"},description:"Sets the color of the divider"},style:{control:{type:"object"},description:"Sets the style of the divider"},text:{control:{type:"text"},description:"Sets the text to display on the divider"},textPosition:{control:{disable:!0},options:["left","center","right"],description:"Sets the position of the text on the divider"},variant:{control:{disable:!0},options:["solid","dashed","dotted"],description:"Sets the variant of the divider"}}},r={render:i=>e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."}),e.jsx(t,{...i}),e.jsx("p",{children:"Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]}),args:{orientation:"horizontal"},parameters:{docs:{source:{code:`
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
</p>
<Divider />
<p>
  Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
</p>
        `}}}},n={render:i=>e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"15px",width:"150px",justifyContent:"space-between"},children:["Text",e.jsx(t,{orientation:"vertical",...i}),e.jsx("a",{href:"#",children:"Link"}),e.jsx(t,{orientation:"vertical",...i}),e.jsx("a",{href:"#",children:"Link"})]}),args:{orientation:"vertical"},parameters:{docs:{source:{code:`
<div style={{ display: "flex", alignItems: "center", height: "15px", width: "150px", justifyContent: "space-between" }}>
  Text
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
</div>
        `}}}},o={render:i=>e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Solid Divider"}),e.jsx(t,{...i,color:"blue",variant:"solid",orientation:"horizontal"}),e.jsx("h3",{children:"Dashed Divider"}),e.jsx(t,{...i,color:"green",variant:"dashed",orientation:"horizontal"}),e.jsx("h3",{children:"Dotted Divider"}),e.jsx(t,{...i,color:"red",variant:"dotted",orientation:"horizontal"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"20px"},children:[e.jsx("p",{children:"Vertical Dotted"}),e.jsx(t,{...i,color:"purple",variant:"dotted",orientation:"vertical"}),e.jsx("p",{children:"Vertical Dashed"}),e.jsx(t,{...i,color:"orange",variant:"dashed",orientation:"vertical"}),e.jsx("p",{children:"Vertical Solid"}),e.jsx(t,{...i,color:"black",variant:"solid",orientation:"vertical"})]})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
<div style={{ padding: "20px" }}>
  <h3>Solid Divider</h3>
  <Divider {...args} color="blue" variant="solid" orientation="horizontal" />

  <h3>Dashed Divider</h3>
  <Divider {...args} color="green" variant="dashed" orientation="horizontal" />

  <h3>Dotted Divider</h3>
  <Divider {...args} color="red" variant="dotted" orientation="horizontal" />

  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "20px" }}>
    <p>Vertical Dotted</p>
    <Divider {...args} color="purple" variant="dotted" orientation="vertical" />
    <p>Vertical Dashed</p>
    <Divider {...args} color="orange" variant="dashed" orientation="vertical" />
    <p>Vertical Solid</p>
    <Divider {...args} color="black" variant="solid" orientation="vertical" />
  </div>
</div>
        `}}}},a={render:i=>e.jsxs("div",{style:{width:"200px"},children:[e.jsx(t,{...i,text:"Left Text",position:"left",color:"green"}),e.jsx(t,{...i,text:"Center Text",position:"center",color:"purple"}),e.jsx(t,{...i,text:"Right Text",position:"right",color:"orange"}),e.jsx("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"16px"},children:e.jsx(t,{...i,text:"Vertical Center",position:"center",color:"teal",orientation:"vertical"})})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
<div style={{ width: "200px" }}>
  <Divider {...args} text="Left Text" textPosition="left" color="green" />
  <Divider {...args} text="Center Text" textPosition="center" color="purple" />
  <Divider {...args} text="Right Text" textPosition="right" color="orange" />
  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
    <Divider {...args} text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
  </div>
</div>
        `}}}};var s,d,l;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    return <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
        </p>
        <Divider {...args} />
        <p>
          Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
        </p>
      </>;
  },
  args: {
    orientation: "horizontal"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
</p>
<Divider />
<p>
  Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
</p>
        \`
      }
    }
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var c,p,v;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    return <div style={{
      display: "flex",
      alignItems: "center",
      height: "15px",
      width: "150px",
      justifyContent: "space-between"
    }}>
        Text
        <Divider orientation="vertical" {...args} />
        <a href="#">Link</a>
        <Divider orientation="vertical" {...args} />
        <a href="#">Link</a>
      </div>;
  },
  args: {
    orientation: "vertical"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ display: "flex", alignItems: "center", height: "15px", width: "150px", justifyContent: "space-between" }}>
  Text
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
</div>
        \`
      }
    }
  }
}`,...(v=(p=n.parameters)==null?void 0:p.docs)==null?void 0:v.source}}};var u,h,g;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    return <div style={{
      padding: "20px"
    }}>
        <h3>Solid Divider</h3>
        <Divider {...args} color="blue" variant="solid" orientation="horizontal" />

        <h3>Dashed Divider</h3>
        <Divider {...args} color="green" variant="dashed" orientation="horizontal" />

        <h3>Dotted Divider</h3>
        <Divider {...args} color="red" variant="dotted" orientation="horizontal" />

        <div style={{
        display: "flex",
        alignItems: "center",
        height: "100px",
        marginTop: "20px"
      }}>
          <p>Vertical Dotted</p>
          <Divider {...args} color="purple" variant="dotted" orientation="vertical" />
          <p>Vertical Dashed</p>
          <Divider {...args} color="orange" variant="dashed" orientation="vertical" />
          <p>Vertical Solid</p>
          <Divider {...args} color="black" variant="solid" orientation="vertical" />
        </div>
      </div>;
  },
  args: {
    orientation: "horizontal",
    color: "rgba(0, 0, 0, 0.12)"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ padding: "20px" }}>
  <h3>Solid Divider</h3>
  <Divider {...args} color="blue" variant="solid" orientation="horizontal" />

  <h3>Dashed Divider</h3>
  <Divider {...args} color="green" variant="dashed" orientation="horizontal" />

  <h3>Dotted Divider</h3>
  <Divider {...args} color="red" variant="dotted" orientation="horizontal" />

  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "20px" }}>
    <p>Vertical Dotted</p>
    <Divider {...args} color="purple" variant="dotted" orientation="vertical" />
    <p>Vertical Dashed</p>
    <Divider {...args} color="orange" variant="dashed" orientation="vertical" />
    <p>Vertical Solid</p>
    <Divider {...args} color="black" variant="solid" orientation="vertical" />
  </div>
</div>
        \`
      }
    }
  }
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,m,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: DividerProps) => {
    return <div style={{
      width: "200px"
    }}>

        <Divider {...args} text="Left Text" position="left" color="green" />

        <Divider {...args} text="Center Text" position="center" color="purple" />

        <Divider {...args} text="Right Text" position="right" color="orange" />

        <div style={{
        display: "flex",
        alignItems: "center",
        height: "100px",
        marginTop: "16px"
      }}>
          <Divider {...args} text="Vertical Center" position="center" color="teal" orientation="vertical" />
        </div>
      </div>;
  },
  args: {
    orientation: "horizontal",
    color: "rgba(0, 0, 0, 0.12)"
  },
  parameters: {
    docs: {
      source: {
        code: \`
<div style={{ width: "200px" }}>
  <Divider {...args} text="Left Text" textPosition="left" color="green" />
  <Divider {...args} text="Center Text" textPosition="center" color="purple" />
  <Divider {...args} text="Right Text" textPosition="right" color="orange" />
  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
    <Divider {...args} text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
  </div>
</div>
        \`
      }
    }
  }
}`,...(D=(m=a.parameters)==null?void 0:m.docs)==null?void 0:D.source}}};const V=["DefaultDivider","VerticalDivider","VariantDivider","TextDivider"];export{r as DefaultDivider,a as TextDivider,o as VariantDivider,n as VerticalDivider,V as __namedExportsOrder,S as default};
