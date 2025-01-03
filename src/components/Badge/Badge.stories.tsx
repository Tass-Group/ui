import type { Meta, StoryObj } from "@storybook/react";
import Badge from ".";
import Avatar from "../Avatar";

const meta: Meta<typeof Badge> = {
  title: "Data Display/Badge",
  component: Badge,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Basic: Story = {
  args: {
    count: 5,
    children: <Avatar>U</Avatar>
  }
};

export const Standalone: Story = {
  args: {
    count: 25
  }
};

export const Dot: Story = {
  args: {
    dot: true,
    children: <Avatar>U</Avatar>
  }
};

export const Status: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div style={{ display: "flex", gap: "16px" }}>
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="default" />
        <Badge status="processing" />
        <Badge status="warning" />
      </div>

      <Badge status="success" text="Success" />
      <Badge status="error" text="Error" />
      <Badge status="default" text="Default" />
      <Badge status="processing" text="Processing" />
      <Badge status="warning" text="Warning" />
    </div>
  )
};

export const CustomColor: Story = {
  args: {
    count: 5,
    color: "#f50",
    children: <Avatar>U</Avatar>
  }
};

export const Ribbon: Story = {
  render: () => (
    <Badge.Ribbon text="Hippies" color="#f50">
      <div style={{ width: 300, height: 100, background: "#eee", padding: 10 }}>
        Pushes open the window and raises the spyglass.
      </div>
    </Badge.Ribbon>
  )
};
