import { render, screen, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spin from ".";

describe("Spin", () => {
  it("renders correctly with default props", () => {
    render(<Spin />);
    const spin = document.querySelector(".sc-spin");
    expect(spin).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Spin size="small" />);
    let spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ width: "14px", height: "14px" });

    rerender(<Spin size="large" />);
    spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ width: "32px", height: "32px" });
  });

  it("renders with tip", () => {
    render(<Spin tip="Loading..." />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("renders with children", () => {
    render(
      <Spin>
        <div data-testid="content">Content</div>
      </Spin>
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
  });

  it("applies custom styles", () => {
    render(<Spin style={{ color: "red" }} />);
    const spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ color: "red" });
  });

  it("handles delay prop", async () => {
    jest.useFakeTimers();
    render(<Spin delay={1000} />);
    let spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ display: "flex" });

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ display: "flex" });
    jest.useRealTimers();
  });

  it("shows loading state correctly", () => {
    const { rerender } = render(<Spin spinning={false} />);
    let spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ display: "none" });

    rerender(<Spin spinning={true} />);
    spin = document.querySelector(".sc-spin");
    expect(spin).toHaveStyle({ display: "flex" });
  });
});
