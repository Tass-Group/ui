import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Tabs from ".";
import Icon from "../Icon";
import type { TabItemType } from "./types";

const meta: Meta<typeof Tabs> = {
  title: "Data Display/Tabs",
  component: Tabs,
  parameters: {
    layout: "fullscreen",
    docs: {
      story: {
        inline: true,
        iframeHeight: "auto"
      }
    }
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "24px" }}>
        <Story />
      </div>
    )
  ],
  tags: ["autodocs"]
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const defaultItems = [
  { key: "1", label: "Tab 1", children: "Content of Tab Pane 1" },
  { key: "2", label: "Tab 2", children: "Content of Tab Pane 2" },
  { key: "3", label: "Tab 3", children: "Content of Tab Pane 3" }
];

export const Basic: Story = {
  args: {
    items: defaultItems
  }
};

export const WithIcons: Story = {
  args: {
    items: defaultItems.map(item => ({
      ...item,
      icon: <Icon name="upload" />
    }))
  }
};

export const Card: Story = {
  args: {
    type: "card",
    items: defaultItems
  }
};

export const EditableCard: Story = {
  render: () => {
    const [activeKey, setActiveKey] = useState("1");
    const [items, setItems] = useState<TabItemType[]>([
      { key: "1", label: "Tab 1", children: "Content of Tab Pane 1" },
      { key: "2", label: "Tab 2", children: "Content of Tab Pane 2" },
      { key: "3", label: "Tab 3", children: "Content of Tab Pane 3" }
    ]);

    const add = (): void => {
      const newKey = `${items.length + 1}`;
      setItems([
        ...items,
        {
          key: newKey,
          label: `New Tab ${newKey}`,
          children: `Content of New Tab ${newKey}`
        }
      ]);
      setActiveKey(newKey);
    };

    const remove = (targetKey: string): void => {
      const targetIndex = items.findIndex(item => item.key === targetKey);
      const newItems = items.filter(item => item.key !== targetKey);

      if ((newItems.length > 0) && targetKey === activeKey) {
        const newActiveIndex = Math.min(targetIndex, newItems.length - 1);
        const newActiveKey = newItems[newActiveIndex]?.key ?? newItems[0]?.key ?? "";
        setActiveKey(newActiveKey);
      }

      setItems(newItems);
    };

    const onEdit = (targetKey: string | React.MouseEvent, action: "add" | "remove"): void => {
      if (action === "add") {
        add();
      } else if (typeof targetKey === "string") {
        remove(targetKey);
      }
    };

    return (
      <Tabs
        type="editable-card"
        activeKey={activeKey}
        onChange={setActiveKey}
        onEdit={onEdit}
        items={items}
      />
    );
  }
};

export const Centered: Story = {
  args: {
    centered: true,
    items: defaultItems
  }
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Tabs size="small" items={defaultItems} />
      <Tabs size="middle" items={defaultItems} />
      <Tabs size="large" items={defaultItems} />
    </div>
  )
};

export const TabModes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <Tabs mode="horizontal" items={defaultItems} />
      <Tabs mode="vertical" items={defaultItems} />
    </div>
  )
};
