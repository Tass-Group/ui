import Space from ".";
import Button from "../Button";
import { type SpaceProps } from "./types";

export default {
  title: "Layout/Space",
  component: Space,
  tags: ["autodocs"]

};

export const DefaultSpace = {
  render: (args: SpaceProps) => {
    return (
      <Space {...args}>
        <Button title="Button 1"/>
        <Button title="Button 2"/>
        <Button title="Button 3"/>
      </Space>
    );
  },
  args: {
    direction: "horizontal"
  }
};

export const VerticalSpace = {
  render: (args: SpaceProps) => {
    return (
      <Space {...args} >
        <Button title="Button 1"/>
        <Button title="Button 2"/>
        <Button title="Button 3"/>
      </Space>
    );
  },
  args: {
    direction: "vertical"
  }
};
