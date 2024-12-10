import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Radio from ".";

describe("Radio", () => {
  it("renders correctly", () => {
    render(<Radio>Test Radio</Radio>);
    expect(screen.getByText("Test Radio")).toBeInTheDocument();
  });

  it("handles change event", () => {
    const handleChange = jest.fn();
    render(<Radio onChange={handleChange}>Test</Radio>);

    const radio = screen.getByRole("radio");
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalled();
  });

  it("can be disabled", () => {
    const handleChange = jest.fn();
    render(<Radio disabled onChange={handleChange}>Disabled</Radio>);

    const radio = screen.getByRole("radio");
    fireEvent.click(radio);

    expect(handleChange).not.toHaveBeenCalled();
    expect(radio).toBeDisabled();
  });

  it("supports defaultChecked prop", () => {
    render(<Radio defaultChecked>Test</Radio>);
    const radio = screen.getByRole("radio");
    expect(radio).toBeChecked();
  });

  it("supports controlled mode", () => {
    const { rerender } = render(<Radio checked={false}>Test</Radio>);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();

    rerender(<Radio checked={true}>Test</Radio>);
    expect(radio).toBeChecked();
  });
});

describe("Radio.Group", () => {
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Pear", value: "pear" },
    { label: "Orange", value: "orange" }
  ];

  it("renders group correctly", () => {
    render(<Radio.Group options={options} />);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Pear")).toBeInTheDocument();
    expect(screen.getByText("Orange")).toBeInTheDocument();
  });

  it("handles group change", () => {
    const handleChange = jest.fn();
    render(
      <Radio.Group
        options={options}
        onChange={handleChange}
      />
    );

    const firstRadio = screen.getByLabelText("Apple");
    fireEvent.click(firstRadio);

    expect(handleChange).toHaveBeenCalledWith("apple");
  });

  it("supports disabled state", () => {
    render(<Radio.Group disabled options={options} />);
    const radios = screen.getAllByRole("radio");
    radios.forEach(radio => {
      expect(radio).toBeDisabled();
    });
  });

  it("supports defaultValue", () => {
    render(<Radio.Group defaultValue="pear" options={options} />);
    const radio = screen.getByLabelText("Pear");
    expect(radio).toBeChecked();
  });

  it("supports controlled mode", () => {
    const { rerender } = render(
      <Radio.Group value="apple" options={options} />
    );
    expect(screen.getByLabelText("Apple")).toBeChecked();

    rerender(<Radio.Group value="pear" options={options} />);
    expect(screen.getByLabelText("Pear")).toBeChecked();
  });

  it("renders in vertical direction", () => {
    const { container } = render(
      <Radio.Group direction="vertical" options={options} />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ flexDirection: "column" });
  });

  it("renders in horizontal direction by default", () => {
    const { container } = render(
      <Radio.Group options={options} />
    );
    const wrapper = container.firstChild;
    expect(wrapper).toHaveStyle({ flexDirection: "row" });
  });

  it("supports individual option disabled", () => {
    const optionsWithDisabled = [
      { label: "Apple", value: "apple" },
      { label: "Pear", value: "pear", disabled: true }
    ];

    render(<Radio.Group options={optionsWithDisabled} />);

    expect(screen.getByLabelText("Apple")).not.toBeDisabled();
    expect(screen.getByLabelText("Pear")).toBeDisabled();
  });

  it("renders with children instead of options", () => {
    render(
      <Radio.Group defaultValue="1">
        <Radio value="1">Option A</Radio>
        <Radio value="2">Option B</Radio>
      </Radio.Group>
    );

    expect(screen.getByText("Option A")).toBeInTheDocument();
    expect(screen.getByText("Option B")).toBeInTheDocument();
  });
});
