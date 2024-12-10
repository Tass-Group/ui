import type { Meta, StoryObj } from "@storybook/react";
import Radio from ".";

const meta: Meta<typeof Radio> = {
  title: "Data Entry/Radio",
  component: Radio,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Specifies whether the radio is selected"
    },
    disabled: {
      control: "boolean",
      description: "Disables the radio"
    },
    value: {
      control: "text",
      description: "Value of the radio"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    children: "Radio"
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled Radio"
  }
};

export const RadioGroup: Story = {
  render: () => (
    <Radio.Group defaultValue="1">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
  )
};

export const RadioGroupWithOptions: Story = {
  render: () => (
    <Radio.Group
      options={[
        { label: "Apple", value: "apple" },
        { label: "Pear", value: "pear" },
        { label: "Orange", value: "orange", disabled: true }
      ]}
    />
  )
};

export const VerticalRadioGroup: Story = {
  render: () => (
    <Radio.Group defaultValue="1" direction="vertical">
      <Radio value="1">Option A</Radio>
      <Radio value="2">Option B</Radio>
      <Radio value="3">Option C</Radio>
    </Radio.Group>
  )
};

export const VerticalRadioGroupWithOptions: Story = {
  render: () => (
    <Radio.Group
      direction="vertical"
      options={[
        { label: "Apple", value: "apple" },
        { label: "Pear", value: "pear" },
        { label: "Orange", value: "orange", disabled: true }
      ]}
    />
  )
};
