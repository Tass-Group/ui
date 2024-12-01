import type { Meta, StoryObj } from "@storybook/react";
import Menu from ".";
import Icon from "../Icon";

const meta: Meta<typeof Menu> = {
  title: "Navigator/Menu",
  component: Menu,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

const items = [
  {
    key: "1",
    label: "Navigation One",
    icon: <Icon name="home" size={14} />
  },
  {
    key: "2",
    label: "Navigation Two",
    icon: <Icon name="cog" size={14} />
  },
  {
    key: "3",
    label: "Navigation Three",
    icon: <Icon name="user" size={14} />,
    disabled: true
  },
  {
    key: "4",
    label: "Navigation Four",
    icon: <Icon name="folder" size={14} />,
    children: [
      {
        key: "4-1",
        label: "Option 1"
      },
      {
        key: "4-2",
        label: "Option 2"
      }
    ]
  }
];

export const VerticalMenu: StoryObj<typeof Menu> = {
  args: {
    items,
    mode: "vertical",
    defaultSelectedKey: "1"
  }
};

export const HorizontalMenu: StoryObj<typeof Menu> = {
  args: {
    items,
    mode: "horizontal",
    defaultSelectedKey: "1"
  }
};

export const WithoutIcons: StoryObj<typeof Menu> = {
  args: {
    items: items.map(({ icon, ...rest }) => rest),
    mode: "vertical",
    defaultSelectedKey: "1"
  }
};

export const DarkMenu: StoryObj<typeof Menu> = {
  args: {
    items,
    mode: "vertical",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
};

export const DarkHorizontalMenu: StoryObj<typeof Menu> = {
  args: {
    items,
    mode: "horizontal",
    menuTheme: "dark",
    defaultSelectedKey: "1"
  }
};
