import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Select from ".";

const options = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3", disabled: true }
];

describe("Select", () => {
  it("renders correctly", () => {
    render(<Select options={options} placeholder="Select option" />);
    expect(screen.getByText("Select option")).toBeInTheDocument();
  });

  it("shows options when clicked", () => {
    render(<Select options={options} />);
    const trigger = screen.getByText("Please select");
    fireEvent.click(trigger);
    expect(screen.getByTestId("option-0")).toHaveTextContent("Option 1");
    expect(screen.getByTestId("option-1")).toHaveTextContent("Option 2");
    expect(screen.getByTestId("option-2")).toHaveTextContent("Option 3");
  });

  it("selects option when clicked", () => {
    const handleChange = jest.fn();
    render(<Select options={options} onChange={handleChange} />);
    const trigger = screen.getByText("Please select");
    fireEvent.click(trigger);
    const optionElement = screen.getByTestId("option-0");
    fireEvent.click(optionElement);
    expect(handleChange).toHaveBeenCalledWith("1", options[0]);
    expect(screen.getByText("Option 1", { selector: ".sc-egkSDF" })).toBeInTheDocument();
  });

  it("supports disabled state", () => {
    render(<Select options={options} disabled />);
    const trigger = screen.getByText("Please select").parentElement;
    expect(trigger).toHaveStyle("cursor: not-allowed");
    fireEvent.click(screen.getByText("Please select"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("supports search functionality", () => {
    render(<Select options={options} showSearch />);
    const trigger = screen.getByText("Please select");
    fireEvent.click(trigger);
    const input = screen.getByPlaceholderText("Please select");
    fireEvent.change(input, { target: { value: "Option 1" } });
    expect(screen.getByTestId("option-0")).toHaveTextContent("Option 1");
    expect(screen.queryByTestId("option-1")).not.toBeInTheDocument();
  });

  it("clears selection when clear button is clicked", () => {
    const handleChange = jest.fn();
    render(
      <Select
        options={options}
        defaultValue="1"
        onChange={handleChange}
        allowClear
      />
    );
    const clearIcon = screen.getByRole("button", { name: /clear/i });
    fireEvent.click(clearIcon);
    expect(handleChange).toHaveBeenCalled();
    expect(screen.getByText("Please select")).toBeInTheDocument();
  });

  it("supports keyboard navigation", () => {
    render(<Select options={options} showSearch />);
    const trigger = screen.getByText("Please select");
    fireEvent.click(trigger);
    const input = screen.getByPlaceholderText("Please select");
    fireEvent.keyDown(input, { key: "ArrowDown" });
    const firstOption = screen.getByTestId("option-0");
    expect(firstOption).toHaveAttribute("data-active", "true");
    fireEvent.keyDown(input, { key: "ArrowUp" });
    fireEvent.keyDown(input, { key: "Enter" });
    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });
});
