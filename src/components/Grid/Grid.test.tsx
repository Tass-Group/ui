import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Row from "./Row";
import Col from "./Col";

describe("Grid component", () => {
  describe("Row component", () => {
    it("renders children correctly", () => {
      render(
        <Row>
          <div>Test Content</div>
        </Row>
      );
      expect(screen.getByText("Test Content")).toBeInTheDocument();
    });

    it("applies gutter correctly", () => {
      const { container } = render(
        <Row gutter={16}>
          <Col>Content</Col>
        </Row>
      );
      const row = container.firstChild;
      const computedStyle = window.getComputedStyle(row as Element);

      expect(computedStyle.marginLeft).toBe("-8px");
      expect(computedStyle.marginRight).toBe("-8px");
      expect(computedStyle.width).toBe("calc(100% + 16px)");
    });
  });

  describe("Col component", () => {
    it("renders with default span", () => {
      const { container } = render(
        <Col>Test Content</Col>
      );
      const col = container.firstChild;
      expect(col).toHaveStyle(`
        flex: 0 0 100%;
        max-width: 100%;
      `);
    });

    it("renders with custom span", () => {
      const { container } = render(
        <Col span={12}>Test Content</Col>
      );
      const col = container.firstChild;
      expect(col).toHaveStyle(`
        flex: 0 0 50%;
        max-width: 50%;
      `);
    });

    it("applies offset correctly", () => {
      const { container } = render(
        <Col span={12} offset={6}>Test Content</Col>
      );
      const col = container.firstChild;
      expect(col).toHaveStyle("margin-left: 25%");
    });

    it("inherits gutter from Row", () => {
      render(
        <Row gutter={16} data-testid="row">
          <Col data-testid="col">Test Content</Col>
        </Row>
      );

      const col = screen.getByTestId("col");
      const computedStyle = window.getComputedStyle(col);
      expect(computedStyle.marginLeft).toBe("0%");
      expect(computedStyle.marginRight).toBe("8px");
    });
  });

  // describe("Grid layout", () => {
  //   it("renders complex grid layout correctly", () => {
  //     render(
  //       <Row>
  //         <Col span={8}>Col 8</Col>
  //         <Col span={8}>Col 8</Col>
  //         <Col span={8}>Col 8</Col>
  //       </Row>
  //     );

  //     const cols = screen.getAllByText(/Col 8/);
  //     expect(cols).toHaveLength(3);

  //     cols.forEach(col => {
  //       const parent = col.parentElement;
  //       expect(parent).toHaveStyle(`
  //         flex: 0 0 33.333333%;
  //         max-width: 33.333333%;
  //       `);
  //     });
  //   });
  // });
});
