import{j as e,F as U,a as H}from"./jsx-runtime-c9381026.js";import"./index-8b3efc3f.js";import"./_commonjsHelpers-de833af9.js";const T=(t,n="100%")=>({textOverflow:t===!0?"ellipsis":void 0,whiteSpace:t===!0?"nowrap":void 0,overflow:t===!0?"hidden":void 0,width:t===!0?n:void 0}),j=({level:t=1,children:n,className:o,style:l,ellipsis:i,width:s})=>{const p=`h${t}`;return e(p,{className:o,style:{...l,...T(i,s)},children:n})},C=({children:t,className:n,style:o,strong:l,italic:i,underline:s,delete:p,code:D,mark:_,keyboard:F,ellipsis:E,width:N})=>{let a=e(U,{children:t});return l===!0&&(a=e("strong",{children:a})),i===!0&&(a=e("em",{children:a})),s===!0&&(a=e("u",{children:a})),p===!0&&(a=e("del",{children:a})),D===!0&&(a=e("code",{children:a})),_===!0&&(a=e("mark",{children:a})),F===!0&&(a=e("kbd",{children:a})),e("div",{className:n,style:{...o,...T(E,N)},children:a})},M=({children:t,className:n,style:o,blockquote:l,ellipsis:i,width:s})=>{const p=e("p",{className:n,style:{...o,...T(i,s)},children:t});return l===!0?e("blockquote",{"data-testid":"blockquote",children:p}):p},y=({children:t,className:n,style:o,onClick:l})=>e("div",{className:n,style:o,onClick:l,children:t});y.Title=j;y.Text=C;y.Paragraph=M;const r=y;try{y.displayName="Typography",y.__docgenInfo={description:"",displayName:"Typography",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}}}catch{}const L={title:"Universal/Typography",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{level:{description:"Sets the heading level for the Typography.Title component.",table:{category:"Typography.Title",defaultValue:{summary:1}}},strong:{description:"Displays text in bold.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},italic:{description:"Displays text in italic.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},underline:{description:"Underlines the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},delete:{description:"Strikes through the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},code:{description:"Formats the text as inline code.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},mark:{description:"Highlights the text.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},keyboard:{description:"Formats the text to look like keyboard input.",table:{category:"Typography.Text",defaultValue:{summary:!1}}},blockquote:{description:"Displays the paragraph as a blockquote.",table:{category:"Typography.Paragraph",defaultValue:{summary:!1}}}}},h={render:()=>H(r,{children:[e(r.Title,{children:"Title"}),e(r.Text,{children:"Text"}),e(r.Paragraph,{children:"Paragraph"})]}),parameters:{docs:{source:{code:`
<Typography>
  <Title>Title</Title>
  <Text>Text</Text>
  <Paragraph>Paragraph</Paragraph>
</Typography>
        `}}}},c={argTypes:{level:{description:"Sets the heading level for the Typography.Title component.",control:{type:"number",min:1,max:5},table:{category:"Typography.Title",defaultValue:{summary:1}}},children:{description:"The content of the Typography.Title component.",control:{type:"text"},table:{category:"Typography.Title"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Title",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Title component.",control:{type:"text"},table:{category:"Typography.Title"}}},render:t=>H(r,{children:[e(r.Title,{...t,children:t.children}),e(r.Title,{level:2,children:"h2. Heading 2"}),e(r.Title,{level:3,children:"h3. Heading 3"}),e(r.Title,{level:4,children:"h4. Heading 4"}),e(r.Title,{level:5,children:"h5. Heading 5"})]}),args:{level:1,children:"Typography Title",ellipsis:!0,width:"300px"}},g={argTypes:{strong:{description:"Displays text in bold.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},italic:{description:"Displays text in italic.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},underline:{description:"Underlines the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},delete:{description:"Strikes through the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},code:{description:"Formats the text as inline code.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},mark:{description:"Highlights the text.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},keyboard:{description:"Formats the text to look like keyboard input.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!1}}},children:{description:"The content of the Typography.Text component.",control:{type:"text"},table:{category:"Typography.Text"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Text",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Text component.",control:{type:"text"},table:{category:"Typography.Text"}}},render:t=>e(r,{children:e(r.Text,{...t,children:t.children})}),args:{strong:!1,italic:!1,underline:!1,delete:!1,code:!1,mark:!1,keyboard:!1,children:"Typography Text",ellipsis:!0,width:"300px"}},d={argTypes:{blockquote:{description:"Displays the paragraph as a blockquote.",control:{type:"boolean"},table:{category:"Typography.Paragraph",defaultValue:{summary:!1}}},children:{description:"The content of the Typography.Paragraph component.",control:{type:"text"},table:{category:"Typography.Paragraph"}},ellipsis:{description:"Truncates the text with an ellipsis.",control:{type:"boolean"},table:{category:"Typography.Paragraph",defaultValue:{summary:!0}}},width:{description:"Sets the width of the Typography.Paragraph component.",control:{type:"text"},table:{category:"Typography.Paragraph"}}},render:t=>e(r,{children:e(r.Paragraph,{...t,children:t.children})}),args:{blockquote:!1,children:"Typography Paragraph",ellipsis:!0,width:"300px"}};var u,m,f;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(f=(m=h.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var x,b,P;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(P=(b=c.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var k,V,v;g.parameters={...g.parameters,docs:{...(k=g.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(v=(V=g.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var w,S,q;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(q=(S=d.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};const z=["DefaultTypography","TypographyTitle","TypographyText","TypographyParagraph"];export{h as DefaultTypography,d as TypographyParagraph,g as TypographyText,c as TypographyTitle,z as __namedExportsOrder,L as default};
