import Typography from "./index";
import { type ParagraphProps, type TextProps, type TitleProps } from "./types";

export default {
  title: "MyComponents/Typography",
  component: Typography,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    // Typography Title API
    level: {
      description: "Sets the heading level for the Typography.Title component.",
      table: {
        category: "Typography.Title",
        defaultValue: { summary: 1 }
      }
    },

    // Typography Text API
    strong: {
      description: "Displays text in bold.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    italic: {
      description: "Displays text in italic.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    underline: {
      description: "Underlines the text.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    delete: {
      description: "Strikes through the text.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    code: {
      description: "Formats the text as inline code.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    mark: {
      description: "Highlights the text.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },
    keyboard: {
      description: "Formats the text to look like keyboard input.",
      table: {
        category: "Typography.Text",
        defaultValue: { summary: false }
      }
    },

    // Typography Paragraph API
    blockquote: {
      description: "Displays the paragraph as a blockquote.",
      table: {
        category: "Typography.Paragraph",
        defaultValue: { summary: false }
      }
    }
  }
};

export const DefaultTypography = {
  render: () => (
    <Typography>
      <Typography.Title>Title</Typography.Title>
      <Typography.Text>Text</Typography.Text>
      <Typography.Paragraph>Paragraph</Typography.Paragraph>
    </Typography>)
};

// TypographyTitle Story
export const TypographyTitle = {
  argTypes: {
    level: {
      description: "Sets the heading level for the Typography.Title component.",
      control: { type: "number", min: 1, max: 5 },
      table: {
        category: "Typography.Title",
        defaultValue: { summary: 1 }
      }
    },
    children: {
      description: "The content of the Typography.Title component.",
      control: { type: "text" },
      table: { category: "Typography.Title" }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: { type: "boolean" },
      table: { category: "Typography.Title", defaultValue: { summary: true } }
    },
    width: {
      description: "Sets the width of the Typography.Title component.",
      control: { type: "text" },
      table: { category: "Typography.Title" }
    }
  },
  render: (args: TitleProps) => (
    <Typography>
      <Typography.Title {...args}>{args.children}</Typography.Title>
      <Typography.Title level={2}>h2. Heading 2</Typography.Title>
      <Typography.Title level={3}>h3. Heading 3</Typography.Title>
      <Typography.Title level={4}>h4. Heading 4</Typography.Title>
      <Typography.Title level={5}>h5. Heading 5</Typography.Title>
    </Typography>
  ),
  args: {
    level: 1,
    children: "Typography Title",
    ellipsis: true,
    width: "300px"

  }
};

// TypographyText Story
export const TypographyText = {
  argTypes: {
    strong: {
      description: "Displays text in bold.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    italic: {
      description: "Displays text in italic.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    underline: {
      description: "Underlines the text.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    delete: {
      description: "Strikes through the text.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    code: {
      description: "Formats the text as inline code.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    mark: {
      description: "Highlights the text.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    keyboard: {
      description: "Formats the text to look like keyboard input.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: false } }
    },
    children: {
      description: "The content of the Typography.Text component.",
      control: { type: "text" },
      table: { category: "Typography.Text" }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: { type: "boolean" },
      table: { category: "Typography.Text", defaultValue: { summary: true } }
    },
    width: {
      description: "Sets the width of the Typography.Text component.",
      control: { type: "text" },
      table: { category: "Typography.Text" }
    }
  },
  render: (args: TextProps) => (
    <Typography>
      <Typography.Text {...args}>{args.children}</Typography.Text>
    </Typography>
  ),
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
};

// TypographyParagraph Story
export const TypographyParagraph = {
  argTypes: {
    blockquote: {
      description: "Displays the paragraph as a blockquote.",
      control: { type: "boolean" },
      table: {
        category: "Typography.Paragraph",
        defaultValue: { summary: false }
      }
    },
    children: {
      description: "The content of the Typography.Paragraph component.",
      control: { type: "text" },
      table: { category: "Typography.Paragraph" }
    },
    ellipsis: {
      description: "Truncates the text with an ellipsis.",
      control: { type: "boolean" },
      table: { category: "Typography.Paragraph", defaultValue: { summary: true } }
    },
    width: {
      description: "Sets the width of the Typography.Paragraph component.",
      control: { type: "text" },
      table: { category: "Typography.Paragraph" }
    }
  },
  render: (args: ParagraphProps) => (
    <Typography>
      <Typography.Paragraph {...args}>{args.children}</Typography.Paragraph>
    </Typography>
  ),
  args: {
    blockquote: false,
    children: "Typography Paragraph",
    ellipsis: true,
    width: "300px"
  }
};
