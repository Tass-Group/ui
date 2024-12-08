import{j as r,F as y,a as e}from"./jsx-runtime-8a1697f2.js";import{D as t}from"./index-d3e56dad.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";import"./styled-components.browser.esm-16342693.js";const C={title:"Layout/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{disable:!0},options:["horizontal","vertical"],description:"Sets the orientation of the divider"},color:{control:{type:"color"},description:"Sets the color of the divider"},style:{control:{type:"object"},description:"Sets the style of the divider"},text:{control:{type:"text"},description:"Sets the text to display on the divider"},textPosition:{control:{disable:!0},options:["left","center","right"],description:"Sets the position of the text on the divider"},variant:{control:{disable:!0},options:["solid","dashed","dotted"],description:"Sets the variant of the divider"}}},n={render:i=>r(y,{children:[e("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."}),e(t,{...i}),e("p",{children:"Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]}),args:{orientation:"horizontal"},parameters:{docs:{source:{code:`
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
</p>
<Divider />
<p>
  Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
</p>
        `}}}},o={render:i=>r("div",{style:{display:"flex",alignItems:"center",height:"15px",width:"150px",justifyContent:"space-between"},children:["Text",e(t,{orientation:"vertical",...i}),e("a",{href:"#",children:"Link"}),e(t,{orientation:"vertical",...i}),e("a",{href:"#",children:"Link"})]}),args:{orientation:"vertical"},parameters:{docs:{source:{code:`
<div style={{ display: "flex", alignItems: "center", height: "15px", width: "150px", justifyContent: "space-between" }}>
  Text
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
</div>
        `}}}},a={render:i=>r("div",{style:{padding:"20px"},children:[e("h3",{children:"Solid Divider"}),e(t,{...i,color:"blue",variant:"solid",orientation:"horizontal"}),e("h3",{children:"Dashed Divider"}),e(t,{...i,color:"green",variant:"dashed",orientation:"horizontal"}),e("h3",{children:"Dotted Divider"}),e(t,{...i,color:"red",variant:"dotted",orientation:"horizontal"}),r("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"20px"},children:[e("p",{children:"Vertical Dotted"}),e(t,{...i,color:"purple",variant:"dotted",orientation:"vertical"}),e("p",{children:"Vertical Dashed"}),e(t,{...i,color:"orange",variant:"dashed",orientation:"vertical"}),e("p",{children:"Vertical Solid"}),e(t,{...i,color:"black",variant:"solid",orientation:"vertical"})]})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
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
        `}}}},s={render:i=>r("div",{style:{width:"200px"},children:[e(t,{...i,text:"Left Text",position:"left",color:"green"}),e(t,{...i,text:"Center Text",position:"center",color:"purple"}),e(t,{...i,text:"Right Text",position:"right",color:"orange"}),e("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"16px"},children:e(t,{...i,text:"Vertical Center",position:"center",color:"teal",orientation:"vertical"})})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
<div style={{ width: "200px" }}>
  <Divider {...args} text="Left Text" textPosition="left" color="green" />
  <Divider {...args} text="Center Text" textPosition="center" color="purple" />
  <Divider {...args} text="Right Text" textPosition="right" color="orange" />
  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
    <Divider {...args} text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
  </div>
</div>
        `}}}};var d,l,c;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(l=n.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,v,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(v=o.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};var h,g,m;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(m=(g=a.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,D,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(b=(D=s.parameters)==null?void 0:D.docs)==null?void 0:b.source}}};const z=["DefaultDivider","VerticalDivider","VariantDivider","TextDivider"];export{n as DefaultDivider,s as TextDivider,a as VariantDivider,o as VerticalDivider,z as __namedExportsOrder,C as default};
