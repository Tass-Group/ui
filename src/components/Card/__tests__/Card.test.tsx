import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "..";

describe("Card", () => {
  test("renders basic card", () => {
    render(
      <Card title="Test Title" extra={<a href="#">More</a>}>
        Card Content
      </Card>
    );

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
  });

  test("renders card with meta", () => {
    render(
      <Card>
        <Card.Meta
          title="Meta Title"
          description="Meta Description"
          avatar={<div>Avatar</div>}
        />
      </Card>
    );

    expect(screen.getByText("Meta Title")).toBeInTheDocument();
    expect(screen.getByText("Meta Description")).toBeInTheDocument();
    expect(screen.getByText("Avatar")).toBeInTheDocument();
  });

  test("renders card with actions", () => {
    const actions = [
      <span key="1">Action 1</span>,
      <span key="2">Action 2</span>
    ];

    render(
      <Card actions={actions}>
        Content
      </Card>
    );

    expect(screen.getByText("Action 1")).toBeInTheDocument();
    expect(screen.getByText("Action 2")).toBeInTheDocument();
  });

  test("renders loading state", () => {
    render(
      <Card loading>
        Content
      </Card>
    );

    expect(screen.queryByText("Content")).not.toBeInTheDocument();
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });

  test("renders card grid", () => {
    render(
      <Card>
        <Card.Grid>Grid Content</Card.Grid>
      </Card>
    );

    expect(screen.getByText("Grid Content")).toBeInTheDocument();
  });
});
