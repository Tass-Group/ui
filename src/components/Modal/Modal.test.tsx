import { screen, act, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from ".";
import { ThemeProvider } from "styled-components";

const mockTheme = {
  colors: {
    primary: "#1890ff",
    success: "#52c41a",
    warning: "#faad14",
    error: "#f5222d",
    text: "#000000",
    background: "#ffffff"
  }
};

const renderWithTheme = (component: React.ReactNode): ReturnType<typeof render> => {
  return render(
    <ThemeProvider theme={mockTheme}>
      {component}
    </ThemeProvider>
  );
};

describe("Modal Component", () => {
  beforeEach(() => {
    // Clear the DOM
    document.body.innerHTML = "";
  });

  it("should render basic modal", async () => {
    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Basic Modal"
          content="This is a basic modal content"
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const titleElement = screen.getByText("Basic Modal");
    expect(titleElement).toBeInTheDocument();
    const contentElement = screen.getByText("This is a basic modal content");
    expect(contentElement).toBeInTheDocument();
  });

  it("should not render when open is false", async () => {
    act(() => {
      renderWithTheme(
        <Modal
          open={false}
          title="Hidden Modal"
          content="This should not be visible"
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(screen.queryByText("Hidden Modal")).not.toBeInTheDocument();
    expect(screen.queryByText("This should not be visible")).not.toBeInTheDocument();
  });

  it("should render with custom footer", async () => {
    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Custom Footer Modal"
          footer={<button>Custom Button</button>}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const customButton = screen.getByText("Custom Button");
    expect(customButton).toBeInTheDocument();
  });

  it("should call onCancel when clicking close button", async () => {
    const onCancel = jest.fn();

    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Closable Modal"
          onCancel={onCancel}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const closeButton = screen.getByRole("img", { name: /cross/i });
    expect(closeButton).toBeInTheDocument();
    const closeButtonParent = closeButton.parentElement;
    expect(closeButtonParent).toBeInTheDocument();
    if (closeButtonParent instanceof HTMLElement) {
      fireEvent.click(closeButtonParent);
    }
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("should call onCancel when clicking mask if maskClosable is true", async () => {
    const onCancel = jest.fn();

    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Mask Closable Modal"
          maskClosable={true}
          onCancel={onCancel}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const mask = screen.getByTestId("modal-mask");
    expect(mask).toBeInTheDocument();
    fireEvent.click(mask);
    expect(onCancel).toHaveBeenCalledTimes(1);
  });

  it("should not call onCancel when clicking mask if maskClosable is false", async () => {
    const onCancel = jest.fn();

    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Non-Mask Closable Modal"
          maskClosable={false}
          onCancel={onCancel}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const mask = screen.getByTestId("modal-mask");
    expect(mask).toBeInTheDocument();
    fireEvent.click(mask);
    expect(onCancel).not.toHaveBeenCalled();
  });

  it("should call onOk when clicking OK button", async () => {
    const onOk = jest.fn();

    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="OK Modal"
          onOk={onOk}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const okButton = screen.getByText("OK");
    expect(okButton).toBeInTheDocument();
    fireEvent.click(okButton);
    expect(onOk).toHaveBeenCalledTimes(1);
  });

  it("should render with custom width", async () => {
    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Wide Modal"
          width={800}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const content = screen.getByTestId("modal-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveStyle({ width: "800px" });
  });

  it("should render centered when centered prop is true", async () => {
    act(() => {
      renderWithTheme(
        <Modal
          open={true}
          title="Centered Modal"
          centered={true}
        />
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    const content = screen.getByTestId("modal-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute("data-centered", "true");
  });

  it("should call afterClose when modal is closed", async () => {
    const afterClose = jest.fn();
    let rerender: (ui: React.ReactElement) => void;

    act(() => {
      const { rerender: rerenderFn } = renderWithTheme(
        <Modal
          open={true}
          title="After Close Modal"
          afterClose={afterClose}
        />
      );
      rerender = rerenderFn;
    });

    await act(async () => {
      await Promise.resolve();
    });

    act(() => {
      rerender(
        <ThemeProvider theme={mockTheme}>
          <Modal
            open={false}
            title="After Close Modal"
            afterClose={afterClose}
          />
        </ThemeProvider>
      );
    });

    await act(async () => {
      await Promise.resolve();
    });

    expect(afterClose).toHaveBeenCalledTimes(1);
  });
});
