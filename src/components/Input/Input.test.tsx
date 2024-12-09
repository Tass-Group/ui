import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Input from ".";
import Icon from "../Icon";

describe("Input", () => {
  it("renders correctly", () => {
    render(<Input placeholder="test input" />);
    expect(screen.getByPlaceholderText("test input")).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = jest.fn();
    render(<Input onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test" } });

    expect(handleChange).toHaveBeenCalled();
    expect(input).toHaveValue("test");
  });

  it("supports disabled state", () => {
    render(<Input disabled />);
    expect(screen.getByRole("textbox")).toBeDisabled();
  });

  it("renders prefix and suffix", () => {
    render(
      <Input
        prefix={<Icon name="user" />}
        suffix={<Icon name="search" />}
      />
    );

    expect(screen.getByLabelText("input-prefix")).toBeInTheDocument();
    expect(screen.getByLabelText("input-suffix")).toBeInTheDocument();
  });

  it("shows clear button when allowClear is true and has value", () => {
    render(<Input allowClear defaultValue="test" />);
    expect(screen.getByLabelText("clear input")).toBeInTheDocument();
  });

  it("clears input when clear button is clicked", () => {
    const handleChange = jest.fn();
    render(
      <Input
        allowClear
        defaultValue="test"
        onChange={handleChange}
      />
    );

    fireEvent.click(screen.getByLabelText("clear input"));
    expect(screen.getByRole("textbox")).toHaveValue("");
    expect(handleChange).toHaveBeenCalled();
  });

  it("triggers onPressEnter when Enter key is pressed", () => {
    const handlePressEnter = jest.fn();
    render(<Input onPressEnter={handlePressEnter} />);

    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });
    expect(handlePressEnter).toHaveBeenCalled();
  });
});

describe("Input.TextArea", () => {
  it("renders textarea correctly", () => {
    render(<Input.TextArea placeholder="test textarea" />);
    expect(screen.getByPlaceholderText("test textarea")).toBeInTheDocument();
  });

  it("shows character count when showCount is true", () => {
    render(
      <Input.TextArea
        showCount
        maxLength={100}
        defaultValue="test"
      />
    );

    expect(screen.getByText("4/100")).toBeInTheDocument();
  });

  it("limits input when maxLength is set", () => {
    const handleChange = jest.fn();
    render(
      <Input.TextArea
        maxLength={5}
        onChange={handleChange}
      />
    );

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "123456" } });

    expect(textarea).toHaveValue("12345");
    expect(handleChange).toHaveBeenCalled();
  });
});

describe("Input.Group", () => {
  it("renders group correctly", () => {
    render(
      <Input.Group>
        <Input />
        <Input />
      </Input.Group>
    );

    expect(screen.getAllByRole("textbox")).toHaveLength(2);
  });

  it("applies compact style", () => {
    const { container } = render(
      <Input.Group compact>
        <Input />
        <Input />
      </Input.Group>
    );

    const group = container.firstChild;
    expect(group).toHaveStyle({ display: "inline-flex" });
  });
});
