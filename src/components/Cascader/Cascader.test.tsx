import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cascader from ".";

const options = [
  {
    value: "zhejiang",
    label: "Zhejiang",
    children: [
      {
        value: "hangzhou",
        label: "Hangzhou",
        children: [
          {
            value: "xihu",
            label: "West Lake"
          }
        ]
      }
    ]
  }
];

describe("Cascader", () => {
  it("renders correctly", () => {
    render(<Cascader options={options} placeholder="Please select" />);
    expect(screen.getByText("Please select")).toBeInTheDocument();
  });

  it("shows options when clicked", () => {
    render(<Cascader options={options} />);
    fireEvent.click(screen.getByRole("combobox"));
    expect(screen.getByText("Zhejiang")).toBeInTheDocument();
  });

  it("supports keyboard navigation", () => {
    // Add keyboard navigation tests
  });

  it("supports disabled state", () => {
    render(<Cascader options={options} disabled />);
    const cascader = screen.getByRole("combobox");
    expect(cascader).toHaveStyle("cursor: not-allowed");
  });

  // Add more tests...
});
