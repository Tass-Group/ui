import { render, type RenderResult, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Breadcrumb from ".";
import Icon from "../Icon";

const renderWithRouter = (ui: React.ReactNode): RenderResult => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Breadcrumb", () => {
  it("renders breadcrumb items correctly", () => {
    renderWithRouter(
      <Breadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Category", path: "/category" },
          { title: "Detail" }
        ]}
      />
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Category")).toBeInTheDocument();
    expect(screen.getByText("Detail")).toBeInTheDocument();
  });

  it("renders default separator", () => {
    renderWithRouter(
      <Breadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Detail" }
        ]}
      />
    );

    expect(screen.getByText("/")).toBeInTheDocument();
  });

  it("renders custom separator", () => {
    renderWithRouter(
      <Breadcrumb
        separator={<Icon name="chevronright" />}
        items={[
          { title: "Home", path: "/" },
          { title: "Detail" }
        ]}
      />
    );

    expect(screen.getByText("", { selector: ".icon-chevronright" })).toBeInTheDocument();
  });

  it("renders links for items with paths", () => {
    renderWithRouter(
      <Breadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Detail" }
        ]}
      />
    );

    const link = screen.getByRole("link", { name: "Home" });
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders last item as text (not link)", () => {
    renderWithRouter(
      <Breadcrumb
        items={[
          { title: "Home", path: "/" },
          { title: "Detail" }
        ]}
      />
    );

    expect(screen.queryByRole("link", { name: "Detail" })).not.toBeInTheDocument();
    expect(screen.getByText("Detail")).toBeInTheDocument();
  });
});
