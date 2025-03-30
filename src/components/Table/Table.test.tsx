import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import "jest-styled-components";

import Table from ".";
import type { ColumnType } from "./types";

interface DataType {
  key: string
  name: string
  age: number
  address: string
}

describe("Table", () => {
  const columns: Array<ColumnType<DataType>> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name)
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
      key: "address"
    }
  ];

  const dataSource: DataType[] = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park"
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park"
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park"
    }
  ];

  it("renders correctly", () => {
    const { container } = render(<Table<DataType> columns={columns} dataSource={dataSource} />);

    columns.forEach(column => {
      const title = column.title;
      if (title !== null && title !== undefined && typeof title === "string") {
        expect(screen.getByText(title)).toBeInTheDocument();
      }
    });

    const tbody = container.querySelector("tbody");
    expect(tbody).toBeInTheDocument();

    dataSource.forEach((data, index) => {
      const row = tbody?.querySelectorAll("tr")[index];
      expect(row).toBeInTheDocument();
      expect(row?.querySelector("td:nth-child(1)")).toHaveTextContent(data.name);
      expect(row?.querySelector("td:nth-child(2)")).toHaveTextContent(data.age.toString());
      expect(row?.querySelector("td:nth-child(3)")).toHaveTextContent(data.address);
    });
  });

  it("handles sorting", async () => {
    const user = userEvent.setup();
    render(<Table<DataType> columns={columns} dataSource={dataSource} />);

    const ageHeader = screen.getByText("Age");
    if (ageHeader instanceof HTMLElement) {
      await user.click(ageHeader);

      const rows = screen.getAllByRole("row").slice(1);
      const ages = rows.map(row => {
        const cells = within(row).getAllByRole("cell");
        const ageCell = cells[1];
        if (ageCell !== null && ageCell !== undefined) {
          return Number(ageCell.textContent);
        }
        return 0;
      });

      expect(ages).toEqual([32, 32, 42]);

      await user.click(ageHeader);
      const reverseSortedRows = screen.getAllByRole("row").slice(1);
      const reverseSortedAges = reverseSortedRows.map(row => {
        const cells = within(row).getAllByRole("cell");
        const ageCell = cells[1];
        if (ageCell !== null && ageCell !== undefined) {
          return Number(ageCell.textContent);
        }
        return 0;
      });

      expect(reverseSortedAges).toEqual([42, 32, 32]);
    }
  });

  it("handles row selection", async () => {
    const onSelectChange = jest.fn();
    const user = userEvent.setup();

    render(
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        rowSelection={{
          onChange: onSelectChange,
          selectedRowKeys: []
        }}
      />
    );

    const checkboxes = screen.getAllByRole("checkbox");
    const firstRowCheckbox = checkboxes[1];
    const selectAllCheckbox = checkboxes[0];

    if (firstRowCheckbox instanceof HTMLElement) {
      await user.click(firstRowCheckbox);
      expect(onSelectChange).toHaveBeenCalledWith(["1"], [dataSource[0]]);
    }

    if (selectAllCheckbox instanceof HTMLElement) {
      await user.click(selectAllCheckbox);
      expect(onSelectChange).toHaveBeenCalledWith(
        dataSource.map(item => item.key),
        dataSource
      );
    }
  });

  it("handles pagination", async () => {
    const user = userEvent.setup();
    const extendedDataSource = Array.from({ length: 15 }, (_, index) => ({
      key: String(index + 1),
      name: `Name ${index + 1}`,
      age: 30 + index,
      address: `Address ${index + 1}`
    }));

    const handlePageChange = jest.fn();

    const { container } = render(
      <Table<DataType>
        columns={columns}
        dataSource={extendedDataSource}
        pagination={{
          current: 1,
          pageSize: 10,
          total: extendedDataSource.length,
          onChange: handlePageChange,
          position: "right"
        }}
      />
    );

    const tbody = container.querySelector("tbody");
    expect(tbody).toBeInTheDocument();
    const rows = tbody?.querySelectorAll("tr");
    expect(rows?.length).toBe(10);

    const pageButtons = screen.getAllByRole("button");
    const nextPageButton = pageButtons.find(button => button.textContent === "2");
    expect(nextPageButton).toBeInTheDocument();

    if (nextPageButton instanceof HTMLElement) {
      await user.click(nextPageButton);
      expect(handlePageChange).toHaveBeenCalledWith(2);
    }
  });

  it("handles loading state", () => {
    const { container } = render(
      <Table<DataType> columns={columns} dataSource={dataSource} loading />
    );
    const loadingWrapper = container.querySelector(".loading-wrapper");
    expect(loadingWrapper).toBeInTheDocument();
    const loadingContent = container.querySelector(".loading-content");
    expect(loadingContent).toBeInTheDocument();
  });

  it("accepts className and style props", () => {
    const { container } = render(
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        className="custom-table"
        style={{ marginTop: "10px" }}
      />
    );

    const tableWrapper = container.firstChild as HTMLElement;
    expect(tableWrapper).toHaveClass("custom-table");
    expect(tableWrapper).toHaveStyle("margin-top: 10px");
  });

  it("handles bordered prop", () => {
    const { container } = render(
      <Table<DataType>
        columns={columns}
        dataSource={dataSource}
        bordered
      />
    );

    const tableWrapper = container.firstChild as HTMLElement;
    expect(tableWrapper.className).toMatch(/table-bordered/);
  });
});
