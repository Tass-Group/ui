import type { Meta, StoryObj } from "@storybook/react";
import Card from ".";
import Avatar from "../Avatar";
import Icon from "../Icon";

const meta: Meta<typeof Card> = {
  title: "Data Display/Card",
  component: Card,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Basic: Story = {
  args: {
    title: "Default size card",
    extra: <a href="#">More</a>,
    style: { width: 300 },
    children: <p>Card content</p>
  }
};

export const Small: Story = {
  args: {
    size: "small",
    title: "Small size card",
    extra: <a href="#">More</a>,
    style: { width: 300 },
    children: <p>Card content</p>
  }
};

export const WithMeta: Story = {
  args: {
    style: { width: 300 },
    cover: (
      <img
        alt="example"
        src="https://picsum.photos/300/200"
      />
    ),
    children: (
      <Card.Meta
        avatar={<Avatar>U</Avatar>}
        title="Card title"
        description="This is the description"
      />
    )
  }
};

export const WithActions: Story = {
  args: {
    title: "Card title",
    style: { width: 300 },
    actions: [
      <Icon key="cog" name="cog" />,
      <Icon key="pencil" name="pencil" />
    ],
    children: <p>Card content</p>
  }
};

export const Loading: Story = {
  args: {
    loading: true,
    title: "Card title",
    style: { width: 300 },
    children: <p>Card content</p>
  }
};

export const GridCard: Story = {
  render: () => (
    <Card title="Card Title" style={{ width: "100%" }}>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
      <Card.Grid>Content</Card.Grid>
    </Card>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Card title="Card Title" style={{ width: "100%" }}>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
  <Card.Grid>Content</Card.Grid>
</Card>
        `
      }
    }
  }
};
