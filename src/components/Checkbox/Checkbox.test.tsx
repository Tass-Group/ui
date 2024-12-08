import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Checkbox from ".";

describe("Checkbox", () => {
  it("renders correctly", () => {
    render(<Checkbox>Test Checkbox</Checkbox>);
    expect(screen.getByText("Test Checkbox")).toBeInTheDocument();
  });

  it("handles change event", () => {
    const handleChange = jest.fn();
    render(<Checkbox onChange={handleChange}>Test</Checkbox>);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true, expect.any(Object));
  });

  it("can be disabled", () => {
    const handleChange = jest.fn();
    render(<Checkbox disabled onChange={handleChange}>Disabled</Checkbox>);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).not.toHaveBeenCalled();
    expect(checkbox).toBeDisabled();
  });

  it("supports indeterminate state", () => {
    render(<Checkbox indeterminate>Indeterminate</Checkbox>);
    const wrapper = screen.getByText("Indeterminate").parentElement;
    expect(wrapper).toHaveStyle({ opacity: 1 });
  });
});

describe("Checkbox.Group", () => {
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange" }
  ];

  it("renders group correctly", () => {
    render(<Checkbox.Group options={options} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Pear")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
  });

  it("handles group change", () => {
    const handleChange = jest.fn();
    render(
      <Checkbox.Group
        options={options}
        onChange={handleChange}
      />
    );

    const firstCheckbox = screen.getByLabelText("Apple");
    fireEvent.click(firstCheckbox);

    expect(handleChange).toHaveBeenCalledWith(["apple"]);
  });
});
