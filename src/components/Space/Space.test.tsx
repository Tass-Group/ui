import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Space from ".";

describe("Space", () => {
  it("renders children correctly", () => {
    const { container } = render(
      <Space>
        <div>Child 1</div>
        <div>Child 2</div>
      </Space>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies default horizontal direction and gap", () => {
    const { container } = render(
      <Space>
        <div>Test</div>
      </Space>
    );
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveStyle({
      display: "flex",
      flexDirection: "row",
      gap: "8px"
    });
  });

  it("applies vertical direction when specified", () => {
    const { container } = render(
      <Space direction="vertical">
        <div>Test</div>
      </Space>
    );
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveStyle({
      flexDirection: "column"
    });
  });

  it("applies custom gap size", () => {
    const { container } = render(
      <Space size={16}>
        <div>Test</div>
      </Space>
    );
    const space = container.firstChild as HTMLElement;
    expect(space).toHaveStyle({
      gap: "16px"
    });
  });
});
