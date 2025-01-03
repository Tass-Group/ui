import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge", () => {
  test("renders basic badge with count", () => {
    render(<Badge count={5}>Content</Badge>);
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  test("renders dot badge", () => {
    const { container } = render(<Badge dot>Content</Badge>);
    const dotElement = container.querySelector("sup");
    expect(dotElement).toHaveStyle({
      minWidth: "6px",
      height: "6px"
    });
  });

  test("handles overflow count", () => {
    render(<Badge count={100} overflowCount={99}>Content</Badge>);
    expect(screen.getByText("99+")).toBeInTheDocument();
  });

  test("renders status badge", () => {
    render(<Badge status="success" text="Success" />);
    expect(screen.getByText("Success")).toBeInTheDocument();
    expect(screen.getByTestId("status-dot")).toBeInTheDocument();
  });

  test("renders custom color", () => {
    const { container } = render(<Badge count={5} color="#f50">Content</Badge>);
    const badge = container.querySelector("sup");
    expect(badge).toHaveStyle({
      background: "#f50"
    });
  });

  test("renders ribbon", () => {
    render(
      <Badge.Ribbon text="Ribbon" color="#f50">
        <div>Content</div>
      </Badge.Ribbon>
    );
    expect(screen.getByText("Ribbon")).toBeInTheDocument();
    expect(screen.getByTestId("ribbon-corner")).toHaveStyle({
      background: "#f50"
    });
  });
});
