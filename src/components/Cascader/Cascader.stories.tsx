import type { Meta, StoryObj } from "@storybook/react";
import Cascader from ".";

const meta: Meta<typeof Cascader> = {
  title: "Data Entry/Cascader",
  component: Cascader,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    options: {
      description: "The data options of cascade",
      control: "object"
    },
    defaultValue: {
      description: "Initial selected value",
      control: "object"
    },
    placeholder: {
      description: "Input placeholder",
      control: "text"
    },
    disabled: {
      description: "Whether disabled select",
      control: "boolean"
    },
    allowClear: {
      description: "Whether show clear button",
      control: "boolean"
    },
    expandTrigger: {
      description: "Expand trigger mode",
      control: "radio",
      options: ["click", "hover"]
    }
  }
};

export default meta;

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  },
  {
    value: "jiangsu",
    label: "Jiangsu",
    children: [
      {
        value: "nanjing",
        label: "Nanjing",
        children: [
          {
            value: "zhonghuamen",
            label: "Zhong Hua Men"
          }
        ]
      }
    ]
  }
];

export const Default: StoryObj<typeof Cascader> = {
  args: {
    options,
    placeholder: "Please select"
  }
};

export const WithDefaultValue: StoryObj<typeof Cascader> = {
  args: {
    options,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
};

export const Disabled: StoryObj<typeof Cascader> = {
  args: {
    options,
    disabled: true,
    defaultValue: ["zhejiang", "hangzhou", "xihu"]
  }
};

export const HoverTrigger: StoryObj<typeof Cascader> = {
  args: {
    options,
    expandTrigger: "hover"
  }
};
