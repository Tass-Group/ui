import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Skeleton from ".";

describe("Skeleton", () => {
  it("renders correctly with default props", () => {
    render(<Skeleton />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  it("renders children when loading is false", () => {
    render(
      <Skeleton loading={false}>
        <div data-testid="content">Content</div>
      </Skeleton>
    );
    expect(screen.getByTestId("content")).toBeInTheDocument();
    expect(screen.queryByTestId("skeleton")).not.toBeInTheDocument();
  });

  it("renders avatar when avatar prop is true", () => {
    render(<Skeleton avatar={true} />);
    const avatar = document.querySelector(".sc-avatar");
    expect(avatar).toBeInTheDocument();
  });

  it("renders title when title prop is true", () => {
    render(<Skeleton title={true} />);
    const title = document.querySelector(".sc-title");
    expect(title).toBeInTheDocument();
  });

  it("renders paragraph when paragraph prop is true", () => {
    render(<Skeleton paragraph={true} />);
    const paragraph = document.querySelector(".sc-paragraph");
    expect(paragraph).toBeInTheDocument();
  });

  it("renders avatar with different sizes", () => {
    const { rerender } = render(
      <Skeleton avatar={{ size: "small" }} />
    );
    let avatar = document.querySelector(".sc-avatar");
    expect(avatar).toHaveStyle({ width: "32px", height: "32px" });

    rerender(<Skeleton avatar={{ size: "large" }} />);
    avatar = document.querySelector(".sc-avatar");
    expect(avatar).toHaveStyle({ width: "80px", height: "80px" });
  });

  it("renders avatar with different shapes", () => {
    const { rerender } = render(
      <Skeleton avatar={{ shape: "circle" }} />
    );
    let avatar = document.querySelector(".sc-avatar");
    expect(avatar).toHaveStyle({ borderRadius: "50%" });

    rerender(<Skeleton avatar={{ shape: "square" }} />);
    avatar = document.querySelector(".sc-avatar");
    expect(avatar).toHaveStyle({ borderRadius: "4px" });
  });

  it("renders paragraph with custom rows", () => {
    render(<Skeleton paragraph={{ rows: 3 }} />);
    const paragraphs = document.querySelectorAll(".sc-paragraph");
    expect(paragraphs).toHaveLength(3);
  });

  it("renders paragraph with custom widths", () => {
    render(
      <Skeleton
        paragraph={{
          width: ["60%", "80%", "40%"],
          rows: 3
        }}
      />
    );
    const paragraphs = Array.from(document.querySelectorAll(".sc-paragraph"));
    const nonLastParagraphs = paragraphs.slice(0, -1);

    expect(nonLastParagraphs[0]).toHaveStyle({ width: "60%" });
    expect(nonLastParagraphs[1]).toHaveStyle({ width: "80%" });
  });

  it("applies round style when round prop is true", () => {
    render(<Skeleton round={true} />);
    const content = document.querySelector(".sc-content");
    expect(content).toHaveStyle({ borderRadius: "8px" });
  });

  it("shows animation when active prop is true", () => {
    render(<Skeleton active={true} title={true} />);
    const title = document.querySelector(".sc-title");
    expect(title).toBeInTheDocument();
    if (title !== null) {
      const computedStyle = window.getComputedStyle(title);
      expect(computedStyle.animation).not.toBe("none");
    }
  });

  it("shows no animation when active prop is false", () => {
    render(<Skeleton active={false} title={true} />);
    const title = document.querySelector(".sc-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveStyle({ animation: "none" });
  });

  it("renders complex combination correctly", () => {
    render(
      <Skeleton
        avatar={{ size: "large", shape: "circle" }}
        title={true}
        paragraph={{ rows: 4 }}
        active={true}
        round={true}
      />
    );
    expect(document.querySelector(".sc-avatar")).toBeInTheDocument();
    expect(document.querySelector(".sc-title")).toBeInTheDocument();
    expect(document.querySelectorAll(".sc-paragraph")).toHaveLength(4);
    expect(document.querySelector(".sc-content")).toHaveStyle({ borderRadius: "8px" });
  });
});
