import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Tabs from ".";

const defaultItems = [
  { key: "1", label: "Tab 1", children: "Content of Tab 1" },
  { key: "2", label: "Tab 2", children: "Content of Tab 2" },
  { key: "3", label: "Tab 3", children: "Content of Tab 3" }
];

describe("Tabs", () => {
  it("renders basic tabs correctly", () => {
    render(<Tabs items={defaultItems} />);

    // Check if all tab labels are rendered
    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();

    // Check if first tab content is visible by default
    expect(screen.getByText("Content of Tab 1")).toBeVisible();
    expect(screen.queryByText("Content of Tab 2")).not.toBeVisible();
  });

  it("switches tabs on click", () => {
    render(<Tabs items={defaultItems} />);

    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.getByText("Content of Tab 2")).toBeVisible();
    expect(screen.queryByText("Content of Tab 1")).not.toBeVisible();
  });

  it("handles controlled mode correctly", () => {
    const onChange = jest.fn();
    render(<Tabs items={defaultItems} activeKey="2" onChange={onChange} />);

    expect(screen.getByText("Content of Tab 2")).toBeVisible();
    fireEvent.click(screen.getByText("Tab 3"));
    expect(onChange).toHaveBeenCalledWith("3");
  });

  it("renders editable card tabs", () => {
    const onEdit = jest.fn();
    render(<Tabs type="editable-card" items={defaultItems} onEdit={onEdit} />);

    // Test add button
    const addButton = screen.getByLabelText("pluscircle");
    fireEvent.click(addButton);
    expect(onEdit).toHaveBeenCalledWith(expect.any(Object), "add");

    // Test close button
    const closeButtons = screen.getAllByRole("button", { name: /cross/i });
    expect(closeButtons.length).toBeGreaterThan(0);
    if (closeButtons[0] != null) {
      fireEvent.click(closeButtons[0]);
      expect(onEdit).toHaveBeenCalledWith("1", "remove");
    }
  });

  it("respects destroyInactiveTabPane prop", () => {
    const { rerender } = render(
      <Tabs items={defaultItems} destroyInactiveTabPane />
    );

    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.queryByText("Content of Tab 1")).not.toBeInTheDocument();

    // Test without destroyInactiveTabPane
    rerender(<Tabs items={defaultItems} destroyInactiveTabPane={false} />);
    fireEvent.click(screen.getByText("Tab 2"));
    expect(screen.queryByText("Content of Tab 1")).toBeInTheDocument();
  });

  it("renders different sizes correctly", () => {
    const { container, rerender } = render(<Tabs items={defaultItems} size="small" />);
    expect(container.getElementsByClassName("tabs-nav-list")[0]).toHaveStyle({ fontSize: "14px" });

    rerender(<Tabs items={defaultItems} size="large" />);
    expect(container.getElementsByClassName("tabs-nav-list")[0]).toHaveStyle({ fontSize: "16px" });
  });

  it("supports vertical mode", () => {
    const { container } = render(<Tabs items={defaultItems} mode="vertical" />);
    expect(container.getElementsByClassName("tabs-nav-list")[0]).toHaveStyle({ flexDirection: "column" });
  });

  it("centers tabs when centered prop is true", () => {
    render(<Tabs items={defaultItems} centered />);
    const tabsList = screen.getByTestId("tabs-list");
    expect(tabsList).toHaveStyle({
      justifyContent: "center"
    });
  });
});
