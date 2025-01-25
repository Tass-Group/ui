import type { Meta, StoryObj } from "@storybook/react";
import Collapse from ".";
import Icon from "../Icon";

const meta: Meta<typeof Collapse> = {
  title: "Data Display/Collapse",
  component: Collapse,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Collapse>;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>{text}</p>
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>{text}</p>
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>{text}</p>
  }
];

export const Basic: Story = {
  args: {
    items,
    defaultActiveKey: ["1"]
  }
};

export const Accordion: Story = {
  args: {
    items,
    accordion: true
  }
};

export const Borderless: Story = {
  args: {
    items,
    bordered: false
  }
};

export const Ghost: Story = {
  args: {
    items,
    ghost: true
  }
};

export const CustomExpandIcon: Story = {
  args: {
    items,
    expandIcon: () => <Icon name="arrowdowncircle" />
  }
};
