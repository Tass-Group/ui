import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Divider from ".";

describe("Divider component", () => {
  it("renders without crashing", () => {
    render(<Divider />);
    const divider = screen.getByRole("separator");
    expect(divider).toBeInTheDocument();
  });

  it("renders horizontal orientation by default", () => {
    render(<Divider />);
    const line = screen.getByRole("separator").querySelector(".line");
    expect(line).toHaveStyle("border-top: 1px solid rgba(0, 0, 0, 0.12)");
  });

  it("renders vertical orientation when specified", () => {
    render(<Divider orientation="vertical" />);
    const line = screen.getByRole("separator").querySelector(".line");
    expect(line).toHaveStyle("border-left: 1px solid rgba(0, 0, 0, 0.12)");
  });

  it("renders with custom color", () => {
    render(<Divider color="blue" />);
    const line = screen.getByRole("separator").querySelector(".line");
    expect(line).toHaveStyle("border-top: 1px solid blue");
  });

  it("renders with dashed variant", () => {
    render(<Divider variant="dashed" />);
    const line = screen.getByRole("separator").querySelector(".line");
    expect(line).toHaveStyle("border-top: 1px dashed rgba(0, 0, 0, 0.12)");
  });

  it("renders with dotted variant", () => {
    render(<Divider variant="dotted" />);
    const line = screen.getByRole("separator").querySelector(".line");
    expect(line).toHaveStyle("border-top: 1px dotted rgba(0, 0, 0, 0.12)");
  });

  it("renders text when specified", () => {
    render(<Divider text="Center Text" />);
    const text = screen.getByText("Center Text");
    expect(text).toBeInTheDocument();
  });

  it("aligns text to the left when textPosition is set to left", () => {
    render(<Divider text="Left Aligned" position="left" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveStyle("justify-content: flex-start");
  });

  it("aligns text to the right when textPosition is set to right", () => {
    render(<Divider text="Right Aligned" position="right" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveStyle("justify-content: flex-end");
  });

  it("aligns text to the center when textPosition is set to center", () => {
    render(<Divider text="Center Aligned" position="center" />);
    const divider = screen.getByRole("separator");
    expect(divider).toHaveStyle("justify-content: center");
  });
});
