import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Upload from "..";

describe("Upload", () => {
  const mockFile = new File(["test"], "test.png", { type: "image/png" });
  const mockOnChange = jest.fn();
  const mockOnRemove = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    URL.createObjectURL = jest.fn(() => "test-url");
  });

  it("renders upload button correctly", () => {
    render(<Upload />);
    expect(screen.getByText("Upload")).toBeInTheDocument();
  });

  it("handles file upload", () => {
    render(<Upload onChange={mockOnChange} />);

    const input = screen.getByTestId("upload-input");
    fireEvent.change(input, { target: { files: [mockFile] } });

    expect(mockOnChange).toHaveBeenCalled();
    expect(screen.getByText("test.png")).toBeInTheDocument();
  });

  it("handles file removal", () => {
    render(
      <Upload
        defaultFileList={[{
          uid: "1",
          name: "test.png",
          status: "done",
          url: "test-url"
        }]}
        onRemove={mockOnRemove}
      />
    );

    const removeIcon = screen.getByRole("img", { name: /trash/i });
    fireEvent.click(removeIcon);

    expect(mockOnRemove).toHaveBeenCalled();
  });

  it("disables upload when disabled prop is true", () => {
    render(<Upload disabled />);

    const uploadContainer = screen.getByRole("button").parentElement;
    expect(uploadContainer).toHaveClass("disabled");
  });
});
