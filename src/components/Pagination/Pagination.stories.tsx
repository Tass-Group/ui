import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import Pagination from "./index";

const meta: Meta<typeof Pagination> = {
  title: "Navigator/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded"
  },
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: { type: "number", min: 1 },
      description: "Current page number"
    },
    total: {
      control: { type: "number", min: 0 },
      description: "Total number of data items"
    },
    pageSize: {
      control: { type: "number", min: 1 },
      description: "Number of data items per page"
    },
    onChange: {
      description: "Called when page number is changed"
    }
  }
};

export default meta;

type Story = StoryObj<typeof Pagination>;

// Default pagination with state management
export const Default: Story = {
  render: function Render () {
    const [current, setCurrent] = useState(1);
    return (
      <Pagination
        current={current}
        total={100}
        pageSize={10}
        onChange={setCurrent}
      />
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
import { useState } from "react";        
const [current, setCurrent] = useState(1);
<Pagination
  current={current}
  total={100}
  pageSize={10}
  onChange={setCurrent}
/>
        `
      }
    }
  }
};

// Position
export const Position: Story = {
  render: function Render () {
    const [current, setCurrent] = useState(1);
    return (
      <div style={{ width: "100%" }}>
        <Pagination
          current={current}
          total={100}
          pageSize={10}
          onChange={setCurrent}
          position="left"
        />
        <Pagination
          current={current}
          total={100}
          pageSize={10}
          onChange={setCurrent}
        />
        <Pagination
          current={current}
          total={100}
          pageSize={10}
          onChange={setCurrent}
          position="right"
        />
      </div>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<div style={{ width: "100%" }}>
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="left"
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
  />
  <Pagination
    current={current}
    total={100}
    pageSize={10}
    onChange={setCurrent}
    position="right"
  />
</div>
        `
      }
    }
  }
};
