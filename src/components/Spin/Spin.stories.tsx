import type { Meta, StoryObj } from "@storybook/react";
import Spin from ".";

const meta: Meta<typeof Spin> = {
  title: "Feedback/Spin",
  component: Spin,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "default", "large"],
      description: "组件大小"
    },
    spinning: {
      control: "boolean",
      description: "是否显示加载状态"
    },
    tip: {
      control: "text",
      description: "自定义描述文案"
    },
    delay: {
      control: "number",
      description: "延迟显示加载效果的时间（防止闪烁）"
    }
  }
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {
  args: {
    spinning: true
  }
};

export const WithTip: Story = {
  args: {
    spinning: true,
    tip: "Loading..."
  }
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px" }}>
      <Spin size="small" />
      <Spin size="default" />
      <Spin size="large" />
    </div>
  )
};

export const WithChildren: Story = {
  render: () => (
    <Spin>
      <div
        style={{
          padding: "20px",
          background: "#f5f5f5",
          borderRadius: "4px"
        }}
      >
        Content
      </div>
    </Spin>
  )
};

export const WithDelay: Story = {
  args: {
    spinning: true,
    delay: 1000
  }
};

export const CustomStyle: Story = {
  args: {
    spinning: true,
    style: {
      color: "#ff4d4f"
    }
  }
};
