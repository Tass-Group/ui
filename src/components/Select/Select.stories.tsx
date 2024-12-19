import type { Meta, StoryObj } from "@storybook/react";
import Select from ".";

const meta: Meta<typeof Select> = {
  title: "Data Entry/Select",
  component: Select,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "Options for select",
      control: "object"
    },
    placeholder: {
      description: "Placeholder text",
      control: "text"
    },
    disabled: {
      description: "Whether select is disabled",
      control: "boolean"
    },
    loading: {
      description: "Whether select is loading",
      control: "boolean"
    },
    allowClear: {
      description: "Whether allow clear selected option",
      control: "boolean"
    },
    showSearch: {
      description: "Whether show search input",
      control: "boolean"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Disabled", value: "4", disabled: true }
];

export const Default: Story = {
  args: {
    options,
    placeholder: "Please select"
  }
};

export const WithDefaultValue: Story = {
  args: {
    options,
    defaultValue: "1"
  }
};

export const Disabled: Story = {
  args: {
    options,
    disabled: true,
    defaultValue: "1"
  }
};

export const WithSearch: Story = {
  args: {
    options,
    showSearch: true,
    placeholder: "Search and select"
  }
};

export const Loading: Story = {
  args: {
    options,
    loading: true
  }
};

export const DisabledOption: Story = {
  args: {
    options,
    placeholder: "Contains disabled option"
  }
};
