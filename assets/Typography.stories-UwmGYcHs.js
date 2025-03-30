import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const d=(t,n="100%")=>({textOverflow:t===!0?"ellipsis":void 0,whiteSpace:t===!0?"nowrap":void 0,overflow:t===!0?"hidden":void 0,width:t===!0?n:void 0}),E=({level:t=1,children:n,className:o,style:l,ellipsis:y,width:i})=>{const p=`h${t}`;return e.jsx(p,{className:o,style:{...l,...d(y,i)},children:n})},F=({children:t,className:n,style:o,strong:l,italic:y,underline:i,delete:p,code:S,mark:q,keyboard:H,ellipsis:D,width:_})=>{let r=e.jsx(e.Fragment,{children:t});return l===!0&&(r=e.jsx("strong",{children:r})),y===!0&&(r=e.jsx("em",{children:r})),i===!0&&(r=e.jsx("u",{children:r})),p===!0&&(r=e.jsx("del",{children:r})),S===!0&&(r=e.jsx("code",{children:r})),q===!0&&(r=e.jsx("mark",{children:r})),H===!0&&(r=e.jsx("kbd",{children:r})),e.jsx("div",{className:n,style:{...o,...d(D,_)},children:r})},N=({children:t,className:n,style:o,blockquote:l,ellipsis:y,width:i})=>{const p=e.jsx("p",{className:n,style:{...o,...d(y,i)},children:t});return l===!0?e.jsx("blockquote",{"data-testid":"blockquote",children:p}):p},a=({children:t,className:n,style:o,onClick:l})=>e.jsx("div",{className:n,style:o,onClick:l,children:t});a.Title=E;a.Text=F;a.Paragraph=N;try{a.displayName="Typography",a.__docgenInfo={description:"",displayName:"Typography",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const M={title:"Universal/Typography",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{level:{description:"Sets the heading level for the Typography.Title component.",table:{category:"Typography.Title",defaultValue:{summary:1}}},strong:{description:"Displays text in bold.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},italic:{description:"Displays text in italic.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},underline:{description:"Underlines the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},delete:{description:"Strikes through the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},code:{description:"Formats the text as inline code.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},mark:{description:"Highlights the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},keyboard:{description:"Formats the text to look like keyboard input.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},blockquote:{description:"Displays the paragraph as a blockquote.",table:{category:"Typography.Paragraph",defaultValue:{summary:!1}}}}},s={render:()=>e.jsxs(a,{children:[e.jsx(a.Title,{children:"Title"}),e.jsx(a.Text,{children:"Text"}),e.jsx(a.Paragraph,{children:"Paragraph"})]}),parameters:{docs:{source:{code:`
<Typography>
  <Title>Title</Title>
  <Text>Text</Text>
  <Paragraph>Paragraph</Paragraph>
</Typography>
        `}}}},h={argTypes:{level:{description:"Sets the heading level for the Typography.Title component.",control:{type:"number",min:1,max:5},table:{category:"Typography.Title",defaultValue:{summary:1}}},children:{description:"The content of the Typography.Title component.",control:{type:"text"},table:{category:"Typography.Title"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Title",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Title component.",control:{type:"text"},table:{category:"Typography.Title"}}},render:t=>e.jsxs(a,{children:[e.jsx(a.Title,{...t,children:t.children}),e.jsx(a.Title,{level:2,children:"h2. Heading 2"}),e.jsx(a.Title,{level:3,children:"h3. Heading 3"}),e.jsx(a.Title,{level:4,children:"h4. Heading 4"}),e.jsx(a.Title,{level:5,children:"h5. Heading 5"})]}),args:{level:1,children:"Typography Title",ellipsis:!0,width:"300px"}},c={argTypes:{strong:{description:"Displays text in bold.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},italic:{description:"Displays text in italic.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},underline:{description:"Underlines the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},delete:{description:"Strikes through the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},code:{description:"Formats the text as inline code.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},mark:{description:"Highlights the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},keyboard:{description:"Formats the text to look like keyboard input.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},children:{description:"The content of the Typography.Text component.",control:{type:"text"},table:{category:"Typography.Text"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Text component.",control:{type:"text"},table:{category:"Typography.Text"}}},render:t=>e.jsx(a,{children:e.jsx(a.Text,{...t,children:t.children})}),args:{strong:!1,italic:!1,underline:!1,delete:!1,code:!1,mark:!1,keyboard:!1,children:"Typography Text",ellipsis:!0,width:"300px"}},g={argTypes:{blockquote:{description:"Displays the paragraph as a blockquote.",control:{type:"boolean"},table:{category:"Typography.Paragraph",defaultValue:{summary:!1}}},children:{description:"The content of the Typography.Paragraph component.",control:{type:"text"},table:{category:"Typography.Paragraph"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Paragraph",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Paragraph component.",control:{type:"text"},table:{category:"Typography.Paragraph"}}},render:t=>e.jsx(a,{children:e.jsx(a.Paragraph,{...t,children:t.children})}),args:{blockquote:!1,children:"Typography Paragraph",ellipsis:!0,width:"300px"}};var T,u,m;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Typography>
      <Typography.Title>Title</Typography.Title>
      <Typography.Text>Text</Typography.Text>
      <Typography.Paragraph>Paragraph</Typography.Paragraph>
    </Typography>,
  parameters: {
    docs: {
      source: {
        code: \`
<Typography>
  <Title>Title</Title>
  <Text>Text</Text>
  <Paragraph>Paragraph</Paragraph>
</Typography>
        \`
      }
    }
  }
}`,...(m=(u=s.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,f,b;h.parameters={...h.parameters,docs:{...(x=h.parameters)==null?void 0:x.docs,source:{originalSource:`{
  argTypes: {
    level: {
      description: "Sets the heading level for the Typography.Title component.",
      control: {
        type: "number",
        min: 1,
        max: 5
      },
      table: {
        category: "Typography.Title",
        defaultValue: {
          summary: 1
        }
      }
    },
    children: {
      description: "The content of the Typography.Title component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Title"
      }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Title",
        defaultValue: {
          summary: true
        }
      }
    },
    width: {
      description: "Sets the width of the Typography.Title component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Title"
      }
    }
  },
  render: (args: TitleProps) => <Typography>
      <Typography.Title {...args}>{args.children}</Typography.Title>
      <Typography.Title level={2}>h2. Heading 2</Typography.Title>
      <Typography.Title level={3}>h3. Heading 3</Typography.Title>
      <Typography.Title level={4}>h4. Heading 4</Typography.Title>
      <Typography.Title level={5}>h5. Heading 5</Typography.Title>
    </Typography>,
  args: {
    level: 1,
    children: "Typography Title",
    ellipsis: true,
    width: "300px"
  }
}`,...(b=(f=h.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var P,k,V;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  argTypes: {
    strong: {
      description: "Displays text in bold.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    italic: {
      description: "Displays text in italic.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    underline: {
      description: "Underlines the text.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    delete: {
      description: "Strikes through the text.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    code: {
      description: "Formats the text as inline code.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    mark: {
      description: "Highlights the text.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    keyboard: {
      description: "Formats the text to look like keyboard input.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: false
        }
      }
    },
    children: {
      description: "The content of the Typography.Text component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Text"
      }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Text",
        defaultValue: {
          summary: true
        }
      }
    },
    width: {
      description: "Sets the width of the Typography.Text component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Text"
      }
    }
  },
  render: (args: TextProps) => <Typography>
      <Typography.Text {...args}>{args.children}</Typography.Text>
    </Typography>,
  args: {
    strong: false,
    italic: false,
    underline: false,
    delete: false,
    code: false,
    mark: false,
    keyboard: false,
    children: "Typography Text",
    ellipsis: true,
    width: "300px"
  }
}`,...(V=(k=c.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var j,v,w;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  argTypes: {
    blockquote: {
      description: "Displays the paragraph as a blockquote.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Paragraph",
        defaultValue: {
          summary: false
        }
      }
    },
    children: {
      description: "The content of the Typography.Paragraph component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Paragraph"
      }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: {
        type: "boolean"
      },
      table: {
        category: "Typography.Paragraph",
        defaultValue: {
          summary: true
        }
      }
    },
    width: {
      description: "Sets the width of the Typography.Paragraph component.",
      control: {
        type: "text"
      },
      table: {
        category: "Typography.Paragraph"
      }
    }
  },
  render: (args: ParagraphProps) => <Typography>
      <Typography.Paragraph {...args}>{args.children}</Typography.Paragraph>
    </Typography>,
  args: {
    blockquote: false,
    children: "Typography Paragraph",
    ellipsis: true,
    width: "300px"
  }
}`,...(w=(v=g.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const O=["DefaultTypography","TypographyTitle","TypographyText","TypographyParagraph"];export{s as DefaultTypography,g as TypographyParagraph,c as TypographyText,h as TypographyTitle,O as __namedExportsOrder,M as default};
