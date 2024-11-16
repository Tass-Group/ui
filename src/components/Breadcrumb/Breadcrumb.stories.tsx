import type { Meta, StoryObj } from "@storybook/react";
import { BrowserRouter } from "react-router-dom";
import Breadcrumb from ".";
import Icon from "../Icon";

const meta: Meta<typeof Breadcrumb> = {
  title: "Navigator/Breadcrumb",
  component: Breadcrumb,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    )
  ],
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    items: {
      description: "Breadcrumb items",
      control: {
        disable: true
      }
    },
    separator: {
      description: "Separator between items",
      control: "text"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const DefaultBreadcrumb: Story = {
  args: {
    items: [
      { title: "Home", path: "/" },
      { title: "Category", path: "/category" },
      { title: "Detail" }
    ]
  }
};

export const CustomSeparator: Story = {
  args: {
    separator: <Icon name="chevronright" size={12} />,
    items: [
      { title: "Home", path: "/" },
      { title: "Category", path: "/category" },
      { title: "Detail" }
    ]
  }
};

export const SingleItemBreadcrumb: Story = {
  args: {
    items: [{ title: "Home" }]
  }
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        title: (
          <>
            <Icon name="home" size={14} style={{ marginRight: 4 }} />
            Home
          </>
        ),
        path: "/"
      },
      {
        title: (
          <>
            <Icon name="folder" size={14} style={{ marginRight: 4 }} />
            Category
          </>
        ),
        path: "/category"
      },
      {
        title: (
          <>
            <Icon name="file" size={14} style={{ marginRight: 4 }} />
            Detail
          </>
        )
      }
    ],
    separator: <Icon name="chevronright" size={12} />
  }
};
