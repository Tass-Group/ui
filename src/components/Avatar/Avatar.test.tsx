import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Avatar from ".";

describe("Avatar", () => {
  it("renders text content correctly", () => {
    render(<Avatar>U</Avatar>);
    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("renders icon correctly", () => {
    render(<Avatar icon={<span data-testid="test-icon">icon</span>} />);
    expect(screen.getByTestId("test-icon")).toBeInTheDocument();
  });

  it("renders image correctly", () => {
    const src = "test-image.jpg";
    render(<Avatar src={src} alt="test" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", src);
    expect(img).toHaveAttribute("alt", "test");
  });

  it("handles image load error", () => {
    const onError = jest.fn().mockReturnValue(true);
    render(<Avatar src="invalid.jpg" onError={onError}>U</Avatar>);

    const img = screen.getByRole("img");
    fireEvent.error(img);

    expect(onError).toHaveBeenCalled();
    expect(screen.getByText("U")).toBeInTheDocument();
  });

  it("applies different sizes", () => {
    const { rerender } = render(<Avatar size="small">S</Avatar>);
    expect(screen.getByText("S").parentElement).toHaveStyle({ width: "24px", height: "24px" });

    rerender(<Avatar size="large">L</Avatar>);
    expect(screen.getByText("L").parentElement).toHaveStyle({ width: "40px", height: "40px" });

    rerender(<Avatar size={50}>C</Avatar>);
    expect(screen.getByText("C").parentElement).toHaveStyle({ width: "50px", height: "50px" });
  });

  describe("Avatar.Group", () => {
    it("renders group correctly", () => {
      render(
        <Avatar.Group>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Avatar.Group>
      );

      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("C")).toBeInTheDocument();
    });

    it("respects maxCount", () => {
      render(
        <Avatar.Group maxCount={2}>
          <Avatar>A</Avatar>
          <Avatar>B</Avatar>
          <Avatar>C</Avatar>
        </Avatar.Group>
      );

      expect(screen.getByText("A")).toBeInTheDocument();
      expect(screen.getByText("B")).toBeInTheDocument();
      expect(screen.getByText("+1")).toBeInTheDocument();
      expect(screen.queryByText("C")).not.toBeInTheDocument();
    });
  });
});
