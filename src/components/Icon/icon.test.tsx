import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Icon from ".";

describe("Icon component", () => {
  it("renders without crashing", () => {
    render(<Icon name="user" />);
    const iconElement = screen.getByText("", { selector: ".icons.icon-user" });
    expect(iconElement).toBeInTheDocument();
  });

  it("applies the correct icon name class", () => {
    const iconName = "user";
    render(<Icon name={iconName} />);
    const iconElement = screen.getByText("", { selector: `.icon-${iconName}` });
    expect(iconElement).toHaveClass(`icon-${iconName}`);
  });

  it("applies the correct size and color styles", () => {
    const size = 32;
    const color = "#ff0000";
    render(<Icon name="user" size={size} color={color} />);
    const iconElement = screen.getByText("", { selector: ".icons.icon-user" });
    expect(iconElement).toHaveStyle(`font-size: ${size}px`);
    expect(iconElement).toHaveStyle(`color: ${color}`);
  });

  it("triggers the onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(<Icon name="user" onClick={handleClick} />);
    const iconElement = screen.getByText("", { selector: ".icons.icon-user" });
    fireEvent.click(iconElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
