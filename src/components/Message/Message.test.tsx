import { screen, act, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import message from ".";

// Mock timers
jest.useFakeTimers();

describe("Message Component", () => {
  beforeEach(() => {
    // Clear all message instances before each test
    message.destroy();
    // Clear the DOM
    document.body.innerHTML = "";
  });

  it("should render success message", async () => {
    act(() => {
      message.success("Success message");
    });

    // Wait for next tick to ensure message is rendered
    await act(async () => {
      await Promise.resolve();
    });

    const messageElement = screen.getByText("Success message");
    expect(messageElement).toBeInTheDocument();
    const messageWrapper = messageElement.parentElement;
    expect(messageWrapper).toBeInTheDocument();
    if (messageWrapper instanceof HTMLElement) {
      const iconElement = messageWrapper.querySelector(".icons.icon-success");
      expect(iconElement).toBeInTheDocument();
    }
  });

  it("should render info message", async () => {
    act(() => {
      message.info("Info message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    const messageElement = screen.getByText("Info message");
    expect(messageElement).toBeInTheDocument();
    const messageWrapper = messageElement.parentElement;
    expect(messageWrapper).toBeInTheDocument();
    if (messageWrapper instanceof HTMLElement) {
      const iconElement = messageWrapper.querySelector(".icons.icon-info");
      expect(iconElement).toBeInTheDocument();
    }
  });

  it("should render warning message", async () => {
    act(() => {
      message.warning("Warning message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    const messageElement = screen.getByText("Warning message");
    expect(messageElement).toBeInTheDocument();
    const messageWrapper = messageElement.parentElement;
    expect(messageWrapper).toBeInTheDocument();
    if (messageWrapper instanceof HTMLElement) {
      const iconElement = messageWrapper.querySelector(".icons.icon-warning");
      expect(iconElement).toBeInTheDocument();
    }
  });

  it("should render error message", async () => {
    act(() => {
      message.error("Error message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    const messageElement = screen.getByText("Error message");
    expect(messageElement).toBeInTheDocument();
    const messageWrapper = messageElement.parentElement;
    expect(messageWrapper).toBeInTheDocument();
    if (messageWrapper instanceof HTMLElement) {
      const iconElement = messageWrapper.querySelector(".icons.icon-danger");
      expect(iconElement).toBeInTheDocument();
    }
  });

  it("should auto close after default duration (3s)", async () => {
    act(() => {
      message.info("Auto close message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText("Auto close message")).toBeInTheDocument();

    // Fast-forward 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Wait for animation
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(screen.queryByText("Auto close message")).not.toBeInTheDocument();
  });

  it("should close after custom duration", async () => {
    act(() => {
      message.info("Custom duration message", 5);
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText("Custom duration message")).toBeInTheDocument();

    // Fast-forward 4.9 seconds (message should still be visible)
    act(() => {
      jest.advanceTimersByTime(4900);
    });
    expect(screen.getByText("Custom duration message")).toBeInTheDocument();

    // Fast-forward remaining time
    act(() => {
      jest.advanceTimersByTime(100);
    });
    act(() => {
      jest.advanceTimersByTime(300); // Animation duration
    });

    expect(screen.queryByText("Custom duration message")).not.toBeInTheDocument();
  });

  it("should call onClose callback when message closes", async () => {
    const onClose = jest.fn();
    act(() => {
      message.info("Callback message", 3, onClose);
    });

    await act(async () => {
      await Promise.resolve();
    });

    // Fast-forward 3 seconds
    act(() => {
      jest.advanceTimersByTime(3000);
    });
    // Wait for animation
    act(() => {
      jest.advanceTimersByTime(300);
    });

    expect(onClose).toHaveBeenCalledTimes(1);
  });

  it("should close message when clicking close button", async () => {
    act(() => {
      message.info("Closable message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    const messageElement = screen.getByText("Closable message");
    expect(messageElement).toBeInTheDocument();
    const messageWrapper = messageElement.parentElement;
    expect(messageWrapper).toBeInTheDocument();
    if (messageWrapper instanceof HTMLElement) {
      const closeButton = messageWrapper.querySelector(".message-close");
      expect(closeButton).toBeInTheDocument();
      if (closeButton instanceof HTMLElement) {
        fireEvent.click(closeButton);

        // Wait for animation
        act(() => {
          jest.advanceTimersByTime(300);
        });

        expect(screen.queryByText("Closable message")).not.toBeInTheDocument();
      }
    }
  });

  it("should render multiple messages", async () => {
    act(() => {
      message.success("Success message");
      message.info("Info message");
      message.warning("Warning message");
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText("Success message")).toBeInTheDocument();
    expect(screen.getByText("Info message")).toBeInTheDocument();
    expect(screen.getByText("Warning message")).toBeInTheDocument();
  });

  it("should destroy all messages", async () => {
    act(() => {
      message.success("Message 1");
      message.info("Message 2");
      message.warning("Message 3");
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.getByText("Message 1")).toBeInTheDocument();
    expect(screen.getByText("Message 2")).toBeInTheDocument();
    expect(screen.getByText("Message 3")).toBeInTheDocument();

    act(() => {
      message.destroy();
    });

    expect(screen.queryByText("Message 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Message 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Message 3")).not.toBeInTheDocument();
  });
});
