import type { Meta, StoryObj } from "@storybook/react";
import Avatar from ".";
import Icon from "../Icon";

const meta: Meta<typeof Avatar> = {
  title: "Data Display/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"]
};

export default meta;

export const Basic: StoryObj<typeof Avatar> = {
  args: {
    children: "U"
  }
};

export const WithIcon: StoryObj<typeof Avatar> = {
  args: {
    icon: <Icon name="user" />
  }
};

export const WithImage: StoryObj<typeof Avatar> = {
  args: {
    src: "https://picsum.photos/200",
    alt: "avatar"
  }
};

export const Sizes: StoryObj<typeof Avatar> = {
  render: () => (
    <>
      <Avatar size={24}>U</Avatar>
      <Avatar size={32}>U</Avatar>
      <Avatar size={40}>U</Avatar>
    </>
  )
};

export const Group: StoryObj<typeof Avatar.Group> = {
  render: () => (
    <Avatar.Group>
      <Avatar>U</Avatar>
      <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
      <Avatar style={{ backgroundColor: "#87d068" }}>L</Avatar>
      <Avatar style={{ backgroundColor: "#1890ff" }}>P</Avatar>
    </Avatar.Group>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Avatar.Group>
  <Avatar>U</Avatar>
  <Avatar style={{ backgroundColor: "#f56a00" }}>K</Avatar>
  <Avatar style={{ backgroundColor: "#87d068" }}>L</Avatar>
  <Avatar style={{ backgroundColor: "#1890ff" }}>P</Avatar>
</Avatar.Group>
`
      }
    }
  }
};
