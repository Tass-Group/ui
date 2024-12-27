import { render, screen, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import "jest-styled-components";
import TimePicker from ".";

describe("TimePicker", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2024, 0, 1, 15, 30, 45));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("renders correctly", () => {
    render(<TimePicker placeholder="Select time" />);
    expect(screen.getByText("Select time")).toBeInTheDocument();
  });

  it("shows dropdown when clicked", () => {
    render(<TimePicker />);
    fireEvent.click(getInput());
    expect(screen.getByText("此刻")).toBeInTheDocument();
    expect(screen.getByText("确定")).toBeInTheDocument();
  });

  it("handles time selection", () => {
    const onChange = jest.fn();
    render(<TimePicker onChange={onChange} />);
    fireEvent.click(getInput());

    const hours = screen.getByTestId("time-hour-10");
    fireEvent.click(hours);

    expect(onChange).toHaveBeenCalled();
  });

  it("handles 'now' button click", () => {
    const onChange = jest.fn();
    render(<TimePicker onChange={onChange} />);

    fireEvent.click(getInput());
    fireEvent.click(screen.getByText("此刻"));

    expect(onChange).toHaveBeenCalled();
    const selectedTime = onChange.mock.calls[0][0];
    expect(selectedTime.getHours()).toBe(15);
    expect(selectedTime.getMinutes()).toBe(30);
    expect(selectedTime.getSeconds()).toBe(45);
  });

  it("closes dropdown when clicking outside", async () => {
    render(<TimePicker />);

    // Open dropdown
    fireEvent.click(screen.getByTestId("time-picker-input"));
    expect(screen.getByText("此刻")).toBeInTheDocument();

    // Simulate click outside
    await act(async () => {
      fireEvent.mouseDown(document.body);
    });
  });

  it("handles clear button click", () => {
    const onChange = jest.fn();
    render(
      <TimePicker
        value={new Date(2024, 0, 1, 10, 20, 30)}
        onChange={onChange}
        clearable
      />
    );

    const clearButton = screen.getByTestId("clear-button");
    fireEvent.click(clearButton);
    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("respects disabled state", () => {
    render(<TimePicker disabled />);
    const input = screen.getByTestId("time-picker-input");
    expect(input).toHaveStyle("cursor: not-allowed");
    fireEvent.click(input);
    expect(screen.queryByText("此刻")).not.toBeInTheDocument();
  });

  it("formats time correctly", () => {
    const testDate = new Date(2024, 0, 1, 14, 30, 45);
    render(<TimePicker value={testDate} format="HH:mm:ss" />);
    expect(screen.getByTestId("time-display")).toHaveTextContent("14:30:45");
  });

  it("works in controlled mode", () => {
    const onChange = jest.fn();
    const testDate = new Date(2024, 0, 1, 14, 30, 45);

    render(<TimePicker value={testDate} onChange={onChange} />);

    const input = screen.getByTestId("time-picker-input");
    expect(screen.getByTestId("time-display")).toHaveTextContent("14:30:45");

    fireEvent.click(input);
    const newHour = screen.getByTestId("time-hour-15");
    fireEvent.click(newHour);

    expect(onChange).toHaveBeenCalled();
  });

  it("accepts className and style props", () => {
    render(
      <TimePicker
        className="custom-class"
        style={{ marginTop: "10px" }}
      />
    );

    const wrapper = screen.getByTestId("time-picker-wrapper");
    expect(wrapper).toHaveClass("custom-class");
    expect(wrapper).toHaveStyle("margin-top: 10px");
  });
});

const getInput = (): HTMLElement => screen.getByTestId("time-picker-input");
