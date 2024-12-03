import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Pagination from "./index";

describe("Pagination Component", () => {
  it("renders with position left", () => {
    const { container } = render(
      <Pagination
        current={1}
        total={100}
        pageSize={10}
        onChange={() => {}}
        position="left"
      />
    );

    const paginationContainer = container.firstChild;
    expect(paginationContainer).toHaveStyle("justify-content: flex-start");
  });

  it("renders with position center", () => {
    const { container } = render(
      <Pagination
        current={1}
        total={100}
        pageSize={10}
        onChange={() => {}}
        position="center"
      />
    );

    const paginationContainer = container.firstChild;
    expect(paginationContainer).toHaveStyle("justify-content: center");
  });

  it("renders with position right", () => {
    const { container } = render(
      <Pagination
        current={1}
        total={100}
        pageSize={10}
        onChange={() => {}}
        position="right"
      />
    );

    const paginationContainer = container.firstChild;
    expect(paginationContainer).toHaveStyle("justify-content: flex-end");
  });
});
