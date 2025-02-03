import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Popover from "..";
import Button from "../../Button";

describe("Popover", () => {
  it("renders trigger element correctly", () => {
    render(
      <Popover content="Test content">
        <Button title="Click me" />
      </Popover>
    );

    expect(screen.getByText("Click me")).toBeInTheDocument();
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("shows content on hover when trigger is hover", () => {
    render(
      <Popover content="Test content" trigger="hover">
        <Button title="Hover me" />
      </Popover>
    );

    const trigger = screen.getByText("Hover me");
    fireEvent.mouseEnter(trigger);
    expect(screen.getByText("Test content")).toBeInTheDocument();

    fireEvent.mouseLeave(trigger);
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("shows content on click when trigger is click", () => {
    render(
      <Popover content="Test content" trigger="click">
        <Button title="Click me" />
      </Popover>
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);
    expect(screen.getByText("Test content")).toBeInTheDocument();

    fireEvent.click(trigger);
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("shows content on focus when trigger is focus", () => {
    render(
      <Popover content="Test content" trigger="focus">
        <Button title="Focus me" />
      </Popover>
    );

    const trigger = screen.getByText("Focus me");
    fireEvent.focus(trigger);
    expect(screen.getByText("Test content")).toBeInTheDocument();

    fireEvent.blur(trigger);
    expect(screen.queryByText("Test content")).not.toBeInTheDocument();
  });

  it("renders with title", () => {
    render(
      <Popover title="Test Title" content="Test content" defaultOpen>
        <Button title="Click me" />
      </Popover>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("calls onOpenChange when visibility changes", () => {
    const onOpenChange = jest.fn();
    render(
      <Popover
        content="Test content"
        trigger="click"
        onOpenChange={onOpenChange}
      >
        <Button title="Click me" />
      </Popover>
    );

    const trigger = screen.getByText("Click me");
    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("respects controlled open state", () => {
    const { rerender } = render(
      <Popover content="Test content" open={false}>
        <Button title="Click me" />
      </Popover>
    );

    expect(screen.queryByText("Test content")).not.toBeInTheDocument();

    rerender(
      <Popover content="Test content" open={true}>
        <Button title="Click me" />
      </Popover>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with custom color", () => {
    render(
      <Popover content="Test content" color="#ff0000" defaultOpen>
        <Button title="Click me" />
      </Popover>
    );

    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
