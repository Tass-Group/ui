import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Typography from ".";

describe("Typography component", () => {
  it("renders children correctly", () => {
    render(<Typography>Hello, World!</Typography>);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("applies className and style correctly", () => {
    render(<Typography className="custom-class" style={{ color: "red" }}>Test</Typography>);
    const element = screen.getByText("Test");
    expect(element).toHaveClass("custom-class");
    expect(element).toHaveStyle({ color: "red" });
  });

  describe("Typography.Title", () => {
    it("renders title with default level", () => {
      render(<Typography.Title>Title</Typography.Title>);
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Title");
    });

    it("renders title with specified level", () => {
      render(<Typography.Title level={3}>Title</Typography.Title>);
      expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Title");
    });

    it("applies ellipsis and width correctly", () => {
      render(<Typography.Title ellipsis width="200px">Long Title</Typography.Title>);
      const title = screen.getByText("Long Title");
      expect(title).toHaveStyle({ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "200px" });
    });
  });

  describe("Typography.Text", () => {
    it("renders text with formatting", () => {
      render(
        <Typography.Text strong italic underline delete code mark keyboard>
          Formatted Text
        </Typography.Text>
      );
      expect(screen.getByText("Formatted Text")).toBeInTheDocument();
    });

    it("applies ellipsis and width correctly", () => {
      render(<Typography.Text ellipsis width="150px">Long Text</Typography.Text>);
      const text = screen.getByText("Long Text");
      expect(text).toHaveStyle({ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "150px" });
    });
  });

  describe("Typography.Paragraph", () => {
    it("renders paragraph", () => {
      render(<Typography.Paragraph>Paragraph</Typography.Paragraph>);
      expect(screen.getByText("Paragraph")).toBeInTheDocument();
    });

    it("renders paragraph with blockquote", () => {
      render(<Typography.Paragraph blockquote>Blockquote</Typography.Paragraph>);
      expect(screen.getByText("Blockquote")).toBeInTheDocument();
      expect(screen.getByTestId("blockquote")).toBeInTheDocument();
    });

    it("applies ellipsis and width correctly", () => {
      render(<Typography.Paragraph ellipsis width="300px">Long Paragraph</Typography.Paragraph>);
      const paragraph = screen.getByText("Long Paragraph");
      expect(paragraph).toHaveStyle({ textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden", width: "300px" });
    });
  });
});
