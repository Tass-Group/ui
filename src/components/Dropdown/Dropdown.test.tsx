import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import DropdownMenu from ".";
import Button from "../Button";

const items = [
  {
    key: "1",
    label: "Option 1"
  },
  {
    key: "2",
    label: "Option 2",
    disabled: true
  },
  {
    key: "3",
    label: "Danger option",
    isdanger: true
  }
];

describe("DropdownMenu component", () => {
  it("renders trigger element", () => {
    render(
      <DropdownMenu items={items}>
        <Button title="Click me" />
      </DropdownMenu>
    );
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("shows menu on click when trigger is click", () => {
    render(
      <DropdownMenu items={items} trigger="click">
        <Button title="Click me" />
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText("Click me"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("shows menu on hover when trigger is hover", async () => {
    render(
      <DropdownMenu items={items} trigger="hover">
        <Button title="Hover me" />
      </DropdownMenu>
    );

    fireEvent.mouseEnter(screen.getByText("Hover me"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();
  });

  it("renders disabled menu item correctly", () => {
    render(
      <DropdownMenu items={items} trigger="click">
        <Button title="Click me" />
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText("Click me"));
    const disabledItem = screen.getByText("Option 2");
    expect(disabledItem).toHaveStyle("cursor: not-allowed");
  });

  it("renders danger menu item correctly", () => {
    render(
      <DropdownMenu items={items} trigger="click">
        <Button title="Click me" />
      </DropdownMenu>
    );

    fireEvent.click(screen.getByText("Click me"));
    const dangerItem = screen.getByText("Danger option");
    expect(dangerItem).toHaveStyle("color: rgb(255, 120, 117)");
  });
});
