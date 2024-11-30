import type { Meta, StoryObj } from "@storybook/react";
import Dropdown from ".";
import Button from "../Button";
import Icon from "../Icon";

const meta: Meta<typeof Dropdown> = {
  title: "Navigator/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered"

  },
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: "radio",
      options: ["hover", "click"],
      description: "Trigger mode"
    },
    placement: {
      control: "radio",
      options: ["top", "bottom", "left", "right"],
      description: "Placement of dropdown menu"
    }
  }
};

export default meta;

const items = [
  {
    key: "1",
    label: "Option 1",
    icon: <Icon name="file" size={14} />
  },
  {
    key: "2",
    label: "Option 2",
    icon: <Icon name="folder" size={14} />,
    disabled: true
  },
  {
    key: "3",
    label: "Danger option",
    icon: <Icon name="trash" size={14} />,
    isdanger: true
  },
  {
    key: "submenu",
    label: "Sub Menu",
    icon: <Icon name="folder" size={14} />,
    children: [
      {
        key: "4",
        label: "Sub Option 1"
      },
      {
        key: "5",
        label: "Sub Option 2"
      }
    ]
  }
];

export const Default: StoryObj<typeof Dropdown> = {
  args: {
    items,
    trigger: "hover",
    placement: "bottom",
    children: <Button title="Hover me" />
  }
};

export const ClickTrigger: StoryObj<typeof Dropdown> = {
  args: {
    items,
    trigger: "click",
    placement: "bottom",
    children: <Button title="Click me" />
  }
};

export const DifferentPlacements: StoryObj<typeof Dropdown> = {
  render: () => (
    <div style={{ display: "flex", gap: "50px", padding: "50px" }}>
      <Dropdown items={items} placement="top">
        <Button title="Top" />
      </Dropdown>
      <Dropdown items={items} placement="bottom">
        <Button title="Bottom" />
      </Dropdown>
      <Dropdown items={items} placement="left">
        <Button title="Left" />
      </Dropdown>
      <Dropdown items={items} placement="right">
        <Button title="Right" />
      </Dropdown>
    </div>
  )
};
