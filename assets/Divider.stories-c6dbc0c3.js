import{j as i,a as r,F as z}from"./jsx-runtime-c9381026.js";import{d as q,l as I}from"./styled-components.browser.esm-16342693.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const L=q.div`
  display: flex;
  align-items: center;
  justify-content: ${({position:e})=>e==="left"?"flex-start":e==="right"?"flex-end":"center"};
  color: ${({color:e})=>e??"rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  .line {
    flex: 1;
    border-top: ${({orientation:e,variant:n,color:a})=>e==="horizontal"?`1px ${n} ${a??"rgba(0, 0, 0, 0.12)"}`:"none"};
    border-left: ${({orientation:e,variant:n,color:a})=>e==="vertical"?`1px ${n} ${a??"rgba(0, 0, 0, 0.12)"}`:"none"};
    margin: ${({orientation:e})=>e==="horizontal"?"0 8px":"8px 0"};
  }

  .text {
    padding: 0 8px;
    white-space: nowrap;
  }

  ${({orientation:e})=>e==="vertical"&&I`
      flex-direction: column;
      align-items: center;
      height: 100%;

      .line {
        width: 1px;
        height: 100%;
        margin: 4px 0;
      }
    `}
`,p=({className:e="",orientation:n="horizontal",color:a,text:u,position:c="center",style:P={},variant:C="solid"})=>i(L,{role:"separator",className:e,orientation:n,color:a,position:c,style:P,variant:C,children:u!=null?r(z,{children:[c!=="right"&&i("span",{className:"line"}),i("span",{className:"text",children:u}),c!=="left"&&i("span",{className:"line"})]}):i("span",{className:"line",style:{margin:0}})}),t=p;try{p.displayName="Divider",p.__docgenInfo={description:"",displayName:"Divider",props:{className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},orientation:{defaultValue:{value:"horizontal"},description:"",name:"orientation",required:!1,type:{name:"enum",value:[{value:'"horizontal"'},{value:'"vertical"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},text:{defaultValue:null,description:"",name:"text",required:!1,type:{name:"string"}},position:{defaultValue:{value:"center"},description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"left"'},{value:'"center"'},{value:'"right"'}]}},style:{defaultValue:{value:"{}"},description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"solid"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"dashed"'},{value:'"dotted"'}]}}}}}catch{}const $={title:"Layout/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:{disable:!0},options:["horizontal","vertical"],description:"Sets the orientation of the divider"},color:{control:{type:"color"},description:"Sets the color of the divider"},style:{control:{type:"object"},description:"Sets the style of the divider"},text:{control:{type:"text"},description:"Sets the text to display on the divider"},textPosition:{control:{disable:!0},options:["left","center","right"],description:"Sets the position of the text on the divider"},variant:{control:{disable:!0},options:["solid","dashed","dotted"],description:"Sets the variant of the divider"}}},o={render:e=>r(z,{children:[i("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris."}),i(t,{...e}),i("p",{children:"Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero."})]}),args:{orientation:"horizontal"},parameters:{docs:{source:{code:`
<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
</p>
<Divider />
<p>
  Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.
</p>
        `}}}},s={render:e=>r("div",{style:{display:"flex",alignItems:"center",height:"15px",width:"150px",justifyContent:"space-between"},children:["Text",i(t,{orientation:"vertical",...e}),i("a",{href:"#",children:"Link"}),i(t,{orientation:"vertical",...e}),i("a",{href:"#",children:"Link"})]}),args:{orientation:"vertical"},parameters:{docs:{source:{code:`
<div style={{ display: "flex", alignItems: "center", height: "15px", width: "150px", justifyContent: "space-between" }}>
  Text
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
  <Divider orientation="vertical" {...args}/>
  <a href="#">Link</a>
</div>
        `}}}},l={render:e=>r("div",{style:{padding:"20px"},children:[i("h3",{children:"Solid Divider"}),i(t,{...e,color:"blue",variant:"solid",orientation:"horizontal"}),i("h3",{children:"Dashed Divider"}),i(t,{...e,color:"green",variant:"dashed",orientation:"horizontal"}),i("h3",{children:"Dotted Divider"}),i(t,{...e,color:"red",variant:"dotted",orientation:"horizontal"}),r("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"20px"},children:[i("p",{children:"Vertical Dotted"}),i(t,{...e,color:"purple",variant:"dotted",orientation:"vertical"}),i("p",{children:"Vertical Dashed"}),i(t,{...e,color:"orange",variant:"dashed",orientation:"vertical"}),i("p",{children:"Vertical Solid"}),i(t,{...e,color:"black",variant:"solid",orientation:"vertical"})]})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
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
        `}}}},d={render:e=>r("div",{style:{width:"200px"},children:[i(t,{...e,text:"Left Text",position:"left",color:"green"}),i(t,{...e,text:"Center Text",position:"center",color:"purple"}),i(t,{...e,text:"Right Text",position:"right",color:"orange"}),i("div",{style:{display:"flex",alignItems:"center",height:"100px",marginTop:"16px"},children:i(t,{...e,text:"Vertical Center",position:"center",color:"teal",orientation:"vertical"})})]}),args:{orientation:"horizontal",color:"rgba(0, 0, 0, 0.12)"},parameters:{docs:{source:{code:`
<div style={{ width: "200px" }}>
  <Divider {...args} text="Left Text" textPosition="left" color="green" />
  <Divider {...args} text="Center Text" textPosition="center" color="purple" />
  <Divider {...args} text="Right Text" textPosition="right" color="orange" />
  <div style={{ display: "flex", alignItems: "center", height: "100px", marginTop: "16px" }}>
    <Divider {...args} text="Vertical Center" textPosition="center" color="teal" orientation="vertical" />
  </div>
</div>
        `}}}};var v,h,g;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var m,x,D;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var f,y,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(y=l.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var V,S,T;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(T=(S=d.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const j=["DefaultDivider","VerticalDivider","VariantDivider","TextDivider"];export{o as DefaultDivider,d as TextDivider,l as VariantDivider,s as VerticalDivider,j as __namedExportsOrder,$ as default};
