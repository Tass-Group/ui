import type { Meta, StoryObj } from "@storybook/react";
import TimePicker from ".";

const meta: Meta<typeof TimePicker> = {
  title: "Data Entry/TimePicker",
  component: TimePicker,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Whether to disable the TimePicker"
    },
    showSecond: {
      control: "boolean",
      description: "Whether to show seconds selection"
    },
    format: {
      control: "text",
      description: "Time format"
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the TimePicker"
    }
  }
};

export default meta;

export const Basic: StoryObj<typeof TimePicker> = {
  args: {
    placeholder: "Select time"
  }
};

export const WithDefaultValue: StoryObj<typeof TimePicker> = {
  args: {
    defaultValue: new Date(),
    showSecond: true
  }
};

export const CustomFormat: StoryObj<typeof TimePicker> = {
  args: {
    format: "HH:mm",
    showSecond: false
  }
};

export const Disabled: StoryObj<typeof TimePicker> = {
  args: {
    disabled: true,
    defaultValue: new Date()
  }
};

export const CustomSteps: StoryObj<typeof TimePicker> = {
  args: {
    hourStep: 2,
    minuteStep: 15,
    secondStep: 15
  }
};
