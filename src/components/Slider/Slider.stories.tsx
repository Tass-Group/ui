import type { Meta, StoryObj } from "@storybook/react";
import Slider from ".";
import styled from "styled-components";

const StoryContainer = styled.div`
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;

  .slider-item {
    margin-bottom: 60px;
  }

  .vertical-container {
    height: 300px;
    padding: 0 60px;
    display: flex;
    gap: 60px;
  }
`;

const meta: Meta<typeof Slider> = {
  title: "Data Entry/Slider",
  component: Slider,
  parameters: {
    layout: "fullscreen"
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <StoryContainer>
        <div className="slider-item">
          <Story />
        </div>
      </StoryContainer>
    )
  ]
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  args: {
    defaultValue: 30
  }
};

export const Range: Story = {
  args: {
    range: true,
    defaultValue: [20, 50]
  }
};

export const WithMarks: Story = {
  args: {
    marks: {
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: {
        style: {
          color: "#f50"
        },
        label: "100°C"
      }
    },
    defaultValue: 37
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 30
  }
};

export const Vertical: Story = {
  render: () => (
    <div className="vertical-container">
      <Slider vertical defaultValue={30} />
      <Slider
        vertical
        range
        defaultValue={[20, 50]}
      />
      <Slider
        vertical
        marks={{
          0: "0°C",
          26: "26°C",
          37: "37°C",
          100: {
            style: {
              color: "#f50"
            },
            label: "100°C"
          }
        }}
        defaultValue={37}
      />
    </div>
  ),
  decorators: [
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    )
  ]
};
