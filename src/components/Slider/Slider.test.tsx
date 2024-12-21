import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Slider from ".";

describe("Slider", () => {
  // 基础渲染测试
  it("renders correctly", () => {
    render(<Slider defaultValue={30} />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  // 默认值测试
  it("displays correct default value", () => {
    render(<Slider defaultValue={30} />);
    const handle = screen.getByRole("slider");
    expect(handle).toHaveStyle({ left: "30%" });
  });

  // 禁用状态测试
  it("supports disabled state", () => {
    render(<Slider disabled defaultValue={30} />);
    const handle = screen.getByRole("slider");
    expect(handle).toHaveStyle({ cursor: "not-allowed" });
  });

  // Range 模式测试
  it("supports range mode", () => {
    render(<Slider range defaultValue={[20, 50]} />);
    const handles = screen.getAllByRole("slider");
    expect(handles).toHaveLength(2);
    expect(handles[0]).toHaveStyle({ left: "20%" });
    expect(handles[1]).toHaveStyle({ left: "50%" });
  });

  // 垂直模式测试
  it("supports vertical mode", () => {
    render(<Slider vertical defaultValue={30} />);
    const wrapper = screen.getByRole("slider").parentElement;
    expect(wrapper).toHaveStyle({ height: "100%" });
  });

  // Marks 测试
  it("renders marks correctly", () => {
    const marks = {
      0: "0°C",
      26: "26°C",
      37: "37°C",
      100: {
        style: { color: "#f50" },
        label: "100°C"
      }
    };
    render(<Slider marks={marks} defaultValue={37} />);
    expect(screen.getByText("0°C")).toBeInTheDocument();
    expect(screen.getByText("26°C")).toBeInTheDocument();
    expect(screen.getByText("37°C")).toBeInTheDocument();
    expect(screen.getByText("100°C")).toBeInTheDocument();
  });

  // Tooltip 测试
  it("shows tooltip when dragging", () => {
    render(<Slider defaultValue={30} />);
    const handle = screen.getByRole("slider");
    fireEvent.mouseDown(handle);
    expect(screen.getByText("30")).toBeInTheDocument();
  });

  // 点击轨道测试
  it("updates value when rail is clicked", () => {
    const onChange = jest.fn();
    const { container } = render(<Slider onChange={onChange} />);
    const rail = container.querySelector(".rc-slider-rail");

    if (rail != null) {
      const rect = { left: 0, width: 100, x: 0, top: 0, height: 100 } as unknown as DOMRect;
      jest.spyOn(rail, "getBoundingClientRect").mockReturnValue(rect);

      // 模拟点击事件
      fireEvent.mouseDown(rail, {
        clientX: 50,
        target: rail,
        currentTarget: rail
      });

      expect(onChange).toHaveBeenCalledWith(50);
    }
  });

  // 受控模式测试
  it("works in controlled mode", async () => {
    const { rerender } = render(<Slider value={30} />);
    let handle = screen.getByRole("slider");
    expect(handle).toHaveStyle({ left: "30%" });

    rerender(<Slider value={50} />);
    await new Promise(resolve => setTimeout(resolve, 0)); // 等待状态更新
    handle = screen.getByRole("slider");
    expect(handle).toHaveStyle({ left: "50%" });
  });

  // Step 测试
  it("respects step prop", () => {
    const onChange = jest.fn();
    const { container } = render(<Slider step={10} onChange={onChange} />);
    const rail = container.querySelector(".rc-slider-rail");

    if (rail != null) {
      const rect = { left: 0, width: 100, x: 0, top: 0, height: 100 } as unknown as DOMRect;
      jest.spyOn(rail, "getBoundingClientRect").mockReturnValue(rect);

      fireEvent.mouseDown(rail, {
        clientX: 45,
        target: rail,
        currentTarget: rail
      });

      expect(onChange).toHaveBeenCalledWith(50);
    }
  });

  // Range 模式边界测试
  it("handles range boundaries correctly", () => {
    render(<Slider range defaultValue={[20, 50]} />);
    const handles = screen.getAllByRole("slider");
    // 尝试将第一个手柄拖到超过第二个手柄的位置
    if (handles[0] != null) {
      fireEvent.mouseDown(handles[0]);
      fireEvent.mouseMove(handles[0], { clientX: 60 });
    }

    // 第一个手柄不应该超过第二个手柄
    expect(handles[0]).not.toHaveStyle({ left: "60%" });
  });
});
