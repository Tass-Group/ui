import type { Meta, StoryObj } from "@storybook/react";
import Carousel from ".";

const meta: Meta<typeof Carousel> = {
  title: "Data Display/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  args: {
    children: [
      <div key="1" style={{ height: 200, background: "#364d79", color: "#fff", textAlign: "center", lineHeight: "200px" }}>1</div>,
      <div key="2" style={{ height: 200, background: "#64778d", color: "#fff", textAlign: "center", lineHeight: "200px" }}>2</div>,
      <div key="3" style={{ height: 200, background: "#2a3f6a", color: "#fff", textAlign: "center", lineHeight: "200px" }}>3</div>
    ]
  }
};

export const AutoPlay: Story = {
  args: {
    autoplay: true,
    ...Basic.args
  }
};

export const FadeEffect: Story = {
  args: {
    effect: "fade",
    style: { height: "200px", position: "relative" },
    ...Basic.args
  }
};

export const Vertical: Story = {
  args: {
    direction: "vertical",
    style: { height: "200px" },
    ...Basic.args
  }
};
