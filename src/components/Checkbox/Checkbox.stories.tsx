import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from ".";

const meta: Meta<typeof Checkbox> = {
  title: "Data Entry/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Checked status"
    },
    disabled: {
      control: "boolean",
      description: "Disable checkbox"
    },
    indeterminate: {
      control: "boolean",
      description: "Indeterminate status"
    }
  }
};

export default meta;

export const Default: StoryObj<typeof Checkbox> = {
  args: {
    children: "Checkbox"
  }
};

export const Disabled: StoryObj<typeof Checkbox> = {
  args: {
    disabled: true,
    children: "Disabled Checkbox"
  }
};

export const Indeterminate: StoryObj<typeof Checkbox> = {
  args: {
    indeterminate: true,
    children: "Indeterminate Checkbox"
  }
};

export const Group: StoryObj<typeof Checkbox.Group> = {
  render: () => (
    <Checkbox.Group
      options={[
        { label: "Apple", value: "apple" },
        { label: "Pear", value: "pear" },
        { label: "Orange", value: "orange", disabled: true }
      ]}
      defaultValue={["apple"]}
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange", disabled: true }
  ]}
  defaultValue={["apple"]}
/>
        `
      }
    }
  }
};

export const GroupWithSelectAll: StoryObj<typeof Checkbox.Group> = {
  render: () => (
    <Checkbox.Group
      options={[
        { label: "Apple", value: "apple" },
        { label: "Pear", value: "pear" },
        { label: "Orange", value: "orange" },
        { label: "Banana", value: "banana", disabled: true }
      ]}
      defaultValue={["apple"]}
      showSelectAll
      selectAllText="Select All Fruits"
    />
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox.Group
  options={[
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange" },
    { label: "Banana", value: "banana", disabled: true }
  ]}
  defaultValue={["apple"]}
  showSelectAll
  selectAllText="Select All Fruits"
/>
        `
      }
    }
  }
};
