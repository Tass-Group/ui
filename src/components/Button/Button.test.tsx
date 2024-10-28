import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from ".";
import type { ButtonProps } from "./types";

describe("Button component", () => {
  const defaultProps: ButtonProps = {
    title: "Test Button",
    onClick: jest.fn(),
    type: "default",
    size: "medium",
    shape: "square"
  };

  it("renders with default props", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test Button");
    expect(button).toHaveStyle("background-color: rgb(240, 240, 240)");
  });

  it("renders with different types", () => {
    const types: Array<ButtonProps["type"]> = ["primary", "danger", "success", "warning"];
    types.forEach((type) => {
      render(<Button {...defaultProps} type={type} title={`Button ${type}`} />);
      const button = screen.getByRole("button", { name: `Button ${type}` });
      expect(button).toBeInTheDocument();
      switch (type) {
        case "primary":
          expect(button).toHaveStyle("background-color: rgb(112, 112, 160)");
          break;
        case "danger":
          expect(button).toHaveStyle("background-color: rgb(217, 54, 62)");
          break;
        case "success":
          expect(button).toHaveStyle("background-color: rgb(56, 158, 13)");
          break;
        case "warning":
          expect(button).toHaveStyle("background-color: rgb(212, 136, 6)");
          break;
        default:
          expect(button).toHaveStyle("background-color: rgb(240, 240, 240)");
          break;
      }
    });
  });

  it("applies custom color", () => {
    render(<Button {...defaultProps} color="#123456" />);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toHaveStyle("background-color: #123456");
  });

  it("triggers onClick event", () => {
    render(<Button {...defaultProps} />);
    const button = screen.getByRole("button", { name: "Test Button" });
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalled();
  });

  it("renders with different sizes", () => {
    const sizes: Array<ButtonProps["size"]> = ["small", "medium", "large"];
    sizes.forEach((size) => {
      render(<Button {...defaultProps} size={size} title={`Button ${size}`} />);
      const button = screen.getByRole("button", { name: `Button ${size}` });
      expect(button).toBeInTheDocument();
      switch (size) {
        case "small":
          expect(button).toHaveStyle("padding: 6px 12px");
          break;
        case "medium":
          expect(button).toHaveStyle("padding: 10px 20px");
          break;
        case "large":
          expect(button).toHaveStyle("padding: 14px 28px");
          break;
        default:
          break;
      }
    });
  });

  it("renders with different shapes", () => {
    const shapes: Array<ButtonProps["shape"]> = ["circle", "round", "square"];
    shapes.forEach((shape) => {
      render(<Button {...defaultProps} shape={shape} title={`Button ${shape}`} />);
      const button = screen.getByRole("button", { name: `Button ${shape}` });
      expect(button).toBeInTheDocument();
      switch (shape) {
        case "circle":
          expect(button).toHaveStyle("border-radius: 50%");
          break;
        case "round":
          expect(button).toHaveStyle("border-radius: 20px");
          break;
        case "square":
          expect(button).toHaveStyle("border-radius: 4px");
          break;
        default:
          break;
      }
    });
  });

  it("renders as disabled", () => {
    render(<Button {...defaultProps} disabled />);
    const button = screen.getByRole("button", { name: "Test Button" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("disabled");
  });
});
