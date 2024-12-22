import type { Meta, StoryObj } from "@storybook/react";
import Switch from ".";
import Icon from "../Icon";

const meta: Meta<typeof Switch> = {
  title: "Data Entry/Switch",
  component: Switch,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Determine whether the Switch is checked"
    },
    defaultChecked: {
      control: "boolean",
      description: "Initial state"
    },
    disabled: {
      control: "boolean",
      description: "Disable switch"
    },
    loading: {
      control: "boolean",
      description: "Loading state of switch"
    },
    size: {
      control: { type: "radio" },
      options: ["small", "default"],
      description: "Size of switch"
    },
    checkedChildren: {
      control: "text",
      description: "Content to be shown when the state is checked"
    },
    unCheckedChildren: {
      control: "text",
      description: "Content to be shown when the state is unchecked"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  args: {}
};

export const WithText: Story = {
  args: {
    checkedChildren: "开",
    unCheckedChildren: "关"
  }
};

export const WithIcon: Story = {
  args: {
    checkedChildren: <Icon name="smile" size={12} />,
    unCheckedChildren: <Icon name="sad" size={12} />
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    defaultChecked: true
  }
};

export const Small: Story = {
  args: {
    size: "small"
  }
};
