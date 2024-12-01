import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Menu from ".";
import Icon from "../Icon";

const items = [
  {
    key: "1",
    label: "Navigation One",
    icon: <Icon name="home" size={14} />
  },
  {
    key: "2",
    label: "Navigation Two",
    icon: <Icon name="cog" size={14} />,
    disabled: true
  },
  {
    key: "4",
    label: "Navigation Four",
    icon: <Icon name="folder" size={14} />,
    children: [
      {
        key: "4-1",
        label: "Option 1"
      },
      {
        key: "4-2",
        label: "Option 2"
      }
    ]
  }
];

describe("Menu", () => {
  it("renders menu items with icons correctly", () => {
    render(<Menu items={items} />);
    expect(screen.getByText("Navigation One")).toBeInTheDocument();
    expect(screen.getByText("Navigation Two")).toBeInTheDocument();
    expect(screen.getByText("Navigation Four")).toBeInTheDocument();
    expect(document.querySelector(".menu-item-icon")).toBeInTheDocument();
  });

  it("handles item selection and clears open keys", () => {
    render(<Menu items={items} defaultSelectedKey="1" />);
    const item = screen.getByText("Navigation One");
    fireEvent.click(item);
    expect(item.closest("li")).toHaveStyle({ color: "#1890ff" });
    expect(item.closest("li")).toHaveStyle({ background: "#f5f5f5" });
  });

  it("respects disabled state", () => {
    render(<Menu items={items} />);
    const disabledItem = screen.getByText("Navigation Two");
    fireEvent.click(disabledItem);
    expect(disabledItem.closest("li")).toHaveStyle({ cursor: "not-allowed" });
    expect(disabledItem.closest("li")).toHaveStyle({ color: "rgba(0, 0, 0, 0.25)" });
  });

  it("handles submenu toggle", () => {
    render(<Menu items={items} />);
    const submenuTitle = screen.getByText("Navigation Four");
    const submenuContent = submenuTitle.closest("div")?.querySelector("div");

    expect(submenuContent).toHaveStyle({ transform: "scaleY(0)" });
    fireEvent.click(submenuTitle);
    expect(submenuContent).toHaveStyle({ transform: "scaleY(1)" });
  });

  it("supports dark theme", () => {
    render(<Menu items={items} menuTheme="dark" />);
    expect(screen.getByRole("list")).toHaveStyle({ background: "#000c17" });
  });

  it("supports horizontal mode", () => {
    render(<Menu items={items} mode="horizontal" />);
    expect(screen.getByRole("list")).toHaveStyle({ display: "flex" });
  });

  it("handles defaultOpenKeys", () => {
    render(<Menu items={items} defaultOpenKeys={["4"]} />);
    const submenuContent = screen.getByText("Navigation Four")
      .closest("div")
      ?.querySelector("div");
    expect(submenuContent).toHaveStyle({ transform: "scaleY(1)" });
  });

  it("handles submenu item selection", () => {
    render(<Menu items={items} />);
    const submenuTitle = screen.getByText("Navigation Four");
    fireEvent.click(submenuTitle);

    const submenuItem = screen.getByText("Option 1");
    fireEvent.click(submenuItem);
    expect(submenuItem.closest("li")).toHaveStyle({ color: "#1890ff" });
  });
});
