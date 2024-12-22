import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";

import Switch from ".";

describe("Switch", () => {
  it("renders correctly", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
    expect(switchElement).toHaveAttribute("aria-checked", "false");
  });

  it("respects defaultChecked prop", () => {
    render(<Switch defaultChecked />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("handles change event", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);

    expect(handleChange).toHaveBeenCalledWith(true);
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("can be disabled", () => {
    const handleChange = jest.fn();
    render(<Switch disabled onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);

    expect(handleChange).not.toHaveBeenCalled();
    expect(switchElement).toHaveStyle("cursor: not-allowed");
  });

  it("handles loading state", () => {
    const handleChange = jest.fn();
    render(<Switch loading onChange={handleChange} />);

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);
    expect(handleChange).not.toHaveBeenCalled();
    expect(switchElement).toHaveStyle("cursor: not-allowed");

    const handle = screen.getByTestId("switch-handle");
    expect(handle).toBeInTheDocument();
    expect(handle).toHaveStyleRule("animation", expect.stringMatching(/loadingCircle/) as string, {
      modifier: "&::after"
    });
  });

  it("supports different sizes", () => {
    const { rerender } = render(<Switch size="small" />);
    let switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveStyle("height: 16px");

    rerender(<Switch size="default" />);
    switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveStyle("height: 22px");
  });

  it("renders children content correctly", () => {
    const { rerender } = render(
      <Switch checkedChildren="开" unCheckedChildren="关" />
    );

    expect(screen.getByText("关")).toBeInTheDocument();

    const switchElement = screen.getByRole("switch");
    fireEvent.click(switchElement);

    expect(screen.getByText("开")).toBeInTheDocument();
    expect(screen.queryByText("关")).not.toBeInTheDocument();

    rerender(<Switch checkedChildren="开" />);
    expect(screen.getByText("开")).toBeInTheDocument();
  });

  it("works in controlled mode", () => {
    const handleChange = jest.fn();
    const { rerender } = render(
      <Switch checked={false} onChange={handleChange} />
    );

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveAttribute("aria-checked", "false");

    fireEvent.click(switchElement);
    expect(handleChange).toHaveBeenCalledWith(true);
    expect(switchElement).toHaveAttribute("aria-checked", "false");

    rerender(<Switch checked={true} onChange={handleChange} />);
    expect(switchElement).toHaveAttribute("aria-checked", "true");
  });

  it("accepts className and style props", () => {
    render(
      <Switch className="custom-class" style={{ marginTop: "10px" }} />
    );

    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass("custom-class");
    expect(switchElement).toHaveStyle("margin-top: 10px");
  });
});
