import type { Meta, StoryObj } from "@storybook/react";
import Popover from ".";
import Button from "../Button";

const meta: Meta<typeof Popover> = {
  title: "Data Display/Popover",
  component: Popover,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  args: {
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
};

export const WithTitle: Story = {
  args: {
    title: "Title",
    content: "This is a popover content",
    children: <Button title="Hover me" />
  }
};

export const Placement: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      {["top", "bottom", "left", "right"].map(placement => (
        <Popover
          key={placement}
          placement={placement as any}
          content={`This is ${placement} content`}
        >
          <Button title={placement} />
        </Popover>
      ))}
    </div>
  )
};

export const TriggerTypes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px" }}>
      <Popover content="Hover content" trigger="hover">
        <Button title="Hover me" />
      </Popover>
      <Popover content="Click content" trigger="click">
        <Button title="Click me" />
      </Popover>
      <Popover content="Focus content" trigger="focus">
        <Button title="Focus me" />
      </Popover>
    </div>
  )
};

export const CustomColor: Story = {
  args: {
    content: "This is colored content",
    color: "#f50",
    children: <Button title="Colored Popover" />
  }
};
