import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Collapse from ".";

const items = [
  {
    key: "1",
    label: "This is panel header 1",
    children: <p>Panel content 1</p>
  },
  {
    key: "2",
    label: "This is panel header 2",
    children: <p>Panel content 2</p>
  },
  {
    key: "3",
    label: "This is panel header 3",
    children: <p>Panel content 3</p>
  }
];

describe("Collapse", () => {
  it("renders basic collapse", () => {
    render(<Collapse items={items} />);

    expect(screen.getByText("This is panel header 1")).toBeInTheDocument();
    expect(screen.getByText("This is panel header 2")).toBeInTheDocument();
    expect(screen.getByText("This is panel header 3")).toBeInTheDocument();
  });

  it("expands panel on click", () => {
    render(<Collapse items={items} />);

    const header = screen.getByText("This is panel header 1");
    fireEvent.click(header);

    expect(screen.getByText("Panel content 1")).toBeVisible();
  });

  it("handles accordion mode", () => {
    render(<Collapse items={items} accordion />);

    const header1 = screen.getByText("This is panel header 1");
    const header2 = screen.getByText("This is panel header 2");

    fireEvent.click(header1);
    expect(screen.getByText("Panel content 1")).toBeVisible();

    fireEvent.click(header2);
    expect(screen.getByText("Panel content 2")).toBeVisible();
    expect(screen.queryByText("Panel content 1")).not.toBeVisible();
  });

  it("respects defaultActiveKey", () => {
    render(<Collapse items={items} defaultActiveKey={["1"]} />);
    expect(screen.getByText("Panel content 1")).toBeVisible();
  });

  it("handles disabled panels", () => {
    const disabledItems = [
      ...items,
      {
        key: "4",
        label: "Disabled Panel",
        children: <p>Disabled content</p>,
        collapsible: "disabled" as const
      }
    ];

    render(<Collapse items={disabledItems} />);

    const disabledHeader = screen.getByText("Disabled Panel");
    fireEvent.click(disabledHeader);

    expect(screen.queryByText("Disabled content")).not.toBeVisible();
  });

  it("renders custom expand icon", () => {
    const customIcon = <span data-testid="custom-icon">+</span>;
    render(
      <Collapse
        items={items}
        expandIcon={() => customIcon}
      />
    );

    expect(screen.getAllByTestId("custom-icon")).toHaveLength(3);
  });

  it("calls onChange callback", () => {
    const onChange = jest.fn();
    render(<Collapse items={items} onChange={onChange} />);

    const header = screen.getByText("This is panel header 1");
    fireEvent.click(header);

    expect(onChange).toHaveBeenCalledWith(["1"]);
  });
});
