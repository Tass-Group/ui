import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";
import type { ColumnType } from "./types";

interface DataType {
  key: string
  name: string
  age: number
  address: string
  tags: string[]
  status: "active" | "inactive"
  lastLogin: string
}

const meta: Meta<typeof Table<DataType>> = {
  title: "Data Display/Table",
  component: Table,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A table displays rows of data."
      }
    }
  },
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Table<DataType>>;

const dataSource: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    status: "active",
    lastLogin: "2024-03-20 10:00:00"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
    status: "inactive",
    lastLogin: "2024-03-19 15:30:00"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sydney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    status: "active",
    lastLogin: "2024-03-20 09:15:00"
  }
];

const columns: Array<ColumnType<DataType>> = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: text => <a href="#">{text}</a>
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
    sorter: (a, b) => a.age - b.age
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
    ellipsis: true
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    render: (value: unknown) => (
      <>
        {(value as string[]).map(tag => (
          <span
            key={tag}
            style={{
              marginRight: 4,
              padding: "2px 8px",
              backgroundColor: tag === "loser" ? "#ff4d4f" : "#87d068",
              color: "#fff",
              borderRadius: 4,
              fontSize: "12px"
            }}
          >
            {tag}
          </span>
        ))}
      </>
    )
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    render: (value: unknown) => (
      <span
        style={{
          padding: "2px 8px",
          backgroundColor: (value as string) === "active" ? "#f6ffed" : "#fff1f0",
          color: (value as string) === "active" ? "#52c41a" : "#ff4d4f",
          borderRadius: 4,
          fontSize: "12px"
        }}
      >
        {value as string}
      </span>
    )
  },
  {
    title: "Last Login",
    key: "lastLogin",
    dataIndex: "lastLogin",
    sorter: (a, b) => new Date(a.lastLogin).getTime() - new Date(b.lastLogin).getTime()
  }
];

export const Basic: Story = {
  args: {
    columns,
    dataSource,
    bordered: true
  }
};

export const Selection: Story = {
  render: () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([]);

    const rowSelection = {
      selectedRowKeys,
      onChange: (selectedRowKeys: Array<string | number>, selectedRows: DataType[]) => {
        setSelectedRowKeys(selectedRowKeys);
        console.log("selectedRows:", selectedRows);
      }
    };

    return (
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        bordered
      />
    );
  }
};

export const Pagination: Story = {
  render: () => {
    const [current, setCurrent] = useState(1);
    const pageSize = 5;
    const total = 50;

    const handleChange = (page: number): void => {
      setCurrent(page);
    };

    const pagination = {
      current,
      pageSize,
      total,
      onChange: handleChange
    };

    const allData: DataType[] = Array.from({ length: total }, (_, i) => ({
      key: String(i + 1),
      name: `Name ${i + 1}`,
      age: 20 + Math.floor(Math.random() * 50),
      address: `Address ${i + 1}`,
      tags: ["tag" + ((i % 3) + 1)],
      status: i % 2 === 0 ? "active" as const : "inactive" as const,
      lastLogin: (() => {
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 7));
        date.setHours(Math.floor(Math.random() * 24));
        date.setMinutes(Math.floor(Math.random() * 60));
        date.setSeconds(Math.floor(Math.random() * 60));
        return date.toLocaleString();
      })()
    }));

    return (
      <Table<DataType>
        columns={columns}
        dataSource={allData}
        pagination={pagination}
        bordered
      />
    );
  }
};
