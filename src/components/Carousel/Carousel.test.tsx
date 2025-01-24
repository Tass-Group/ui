import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import Carousel from ".";

// Mock timer functions
jest.useFakeTimers();

describe("Carousel", () => {
  const mockChildren = [
    <div key="1">Slide 1</div>,
    <div key="2">Slide 2</div>,
    <div key="3">Slide 3</div>
  ];

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("renders carousel with children", () => {
    render(<Carousel>{mockChildren}</Carousel>);
    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });

  it("navigates to next slide when clicking next button", () => {
    render(<Carousel>{mockChildren}</Carousel>);

    const nextButton = screen.getByRole("button", { name: "chevronright" });
    fireEvent.click(nextButton);

    // Wait for transition
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("navigates to previous slide when clicking prev button", () => {
    render(<Carousel>{mockChildren}</Carousel>);

    const prevButton = screen.getByRole("button", { name: "chevronleft" });
    const nextButton = screen.getByRole("button", { name: "chevronright" });

    // Go to slide 2 first
    fireEvent.click(nextButton);
    act(() => {
      jest.advanceTimersByTime(300);
    });

    // Then go back to slide 1
    fireEvent.click(prevButton);
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });

  it("autoplays when autoplay prop is true", () => {
    render(<Carousel autoplay autoplaySpeed={3000}>{mockChildren}</Carousel>);

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("stops autoplay on unmount", () => {
    const { unmount } = render(
      <Carousel autoplay autoplaySpeed={3000}>{mockChildren}</Carousel>
    );

    unmount();

    // Ensure timer is cleared
    expect(jest.getTimerCount()).toBe(0);
  });

  it("navigates to specific slide when clicking dot", () => {
    const { container } = render(<Carousel>{mockChildren}</Carousel>);

    const dotsContainer = container.querySelector(".sc-fAUdSK");
    if (dotsContainer === null) throw new Error("Dots container not found");
    const dots = dotsContainer.querySelectorAll(".sc-dntaoT");
    fireEvent.click(dots[2] as HTMLElement);

    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.getByText("Slide 3")).toBeInTheDocument();
  });

  it("renders without arrows when arrows prop is false", () => {
    render(<Carousel arrows={false}>{mockChildren}</Carousel>);

    expect(screen.queryByRole("button", { name: "chevronright" })).not.toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "chevronleft" })).not.toBeInTheDocument();
  });

  it("renders without dots when dots prop is false", () => {
    const { container } = render(<Carousel dots={false}>{mockChildren}</Carousel>);

    expect(container.querySelector(".carousel-dots")).not.toBeInTheDocument();
  });

  it("applies vertical direction styles when direction is vertical", () => {
    const { container } = render(
      <Carousel direction="vertical">{mockChildren}</Carousel>
    );

    expect(container.firstChild).toHaveStyle({ height: "100%" });
  });

  it("applies fade effect styles when effect is fade", () => {
    render(<Carousel effect="fade">{mockChildren}</Carousel>);

    const content = screen.getByText("Slide 1").parentElement;
    expect(content).toHaveStyle({ position: "absolute" });
  });
});
