import styled from "styled-components";

export const PaginationContainer = styled.div<{ $position?: "left" | "center" | "right" }>`
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: ${({ $position }) => {
    switch ($position) {
      case "left": return "flex-start";
      case "right": return "flex-end";
      default: return "center";
    }
  }};
`;

export const PageButton = styled.button<{ $active?: boolean }>`
  min-width: 32px;
  height: 32px;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ $active }) => ((($active === true)) ? "#1890ff" : "#d9d9d9")};
  background-color: ${({ $active }) => ((($active === true)) ? "#1890ff" : "#ffffff")};
  color: ${({ $active }) => ((($active === true)) ? "#ffffff" : "rgba(0, 0, 0, 0.85)")};
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 2px;
  outline: none;
  user-select: none;

  &:hover:not(:disabled) {
    color: #1890ff;
    border-color: #1890ff;
  }

  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
    border-color: #d9d9d9;
    background-color: #f5f5f5;
  }

  &:active:not(:disabled) {
    color: #096dd9;
    border-color: #096dd9;
  }
`;

export const Ellipsis = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  color: rgba(0, 0, 0, 0.45);
`;
