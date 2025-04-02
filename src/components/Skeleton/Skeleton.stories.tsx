import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from ".";

const meta = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: "600px" }}>
      <Skeleton
        loading={true}
        active={true}
        title={true}
        paragraph={{ rows: 4 }}
      />
    </div>
  )
};

export const Complex: Story = {
  args: {
    loading: true,
    active: true,
    avatar: true,
    title: true,
    paragraph: { rows: 4 }
  }
};

export const ButtonAndInput: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <div style={{ marginBottom: "16px" }}>
        <Skeleton loading={true} active={true} paragraph={{ rows: 1 }} />
      </div>
      <div style={{ marginBottom: "16px" }}>
        <Skeleton loading={true} active={true} paragraph={{ rows: 1 }} />
      </div>
      <Skeleton loading={true} active={true} paragraph={{ rows: 1 }} />
    </div>
  )
};

export const AvatarShapes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Skeleton
        loading={true}
        active={true}
        avatar={{ shape: "circle" }}
        title={true}
        paragraph={{ rows: 2 }}
      />
      <Skeleton
        loading={true}
        active={true}
        avatar={{ shape: "square" }}
        title={true}
        paragraph={{ rows: 2 }}
      />
    </div>
  )
};

export const AvatarSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Skeleton
        loading={true}
        active={true}
        avatar={{ size: "small", shape: "circle" }}
        title={true}
        paragraph={{ rows: 2 }}
      />
      <Skeleton
        loading={true}
        active={true}
        avatar={{ size: "default", shape: "circle" }}
        title={true}
        paragraph={{ rows: 2 }}
      />
      <Skeleton
        loading={true}
        active={true}
        avatar={{ size: "large", shape: "circle" }}
        title={true}
        paragraph={{ rows: 2 }}
      />
    </div>
  )
};

export const CustomParagraphWidths: Story = {
  args: {
    loading: true,
    active: true,
    paragraph: {
      width: ["60%", "80%", "40%", "70%"]
    }
  }
};

export const Round: Story = {
  args: {
    loading: true,
    active: true,
    round: true,
    title: true,
    paragraph: { rows: 3 }
  }
};

export const LoadingState: Story = {
  render: () => (
    <div style={{ width: "300px" }}>
      <Skeleton loading={true} active={true}>
        <div style={{ padding: "24px" }}>
          <h4>Ant Design</h4>
          <p>We supply a series of design principles, practical patterns and high quality design resources.</p>
        </div>
      </Skeleton>
    </div>
  )
};

export const ListLoading: Story = {
  render: () => (
    <div style={{ width: "400px" }}>
      {[1, 2, 3].map((i) => (
        <div key={i} style={{ marginBottom: "16px" }}>
          <Skeleton
            loading={true}
            active={true}
            avatar={true}
            title={true}
            paragraph={{ rows: 2 }}
          />
        </div>
      ))}
    </div>
  )
};
