import styled from "styled-components";

export const RadioWrapper = styled.label<{ disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ disabled }) => ((disabled ?? false) ? "not-allowed" : "pointer")};
  opacity: ${({ disabled }) => ((disabled ?? false) ? 0.5 : 1)};
`;

export const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const RadioControl = styled.span<{ checked?: boolean, disabled?: boolean }>`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid ${({ checked }) => (checked ?? false) ? "#1890ff" : "#d9d9d9"};
  border-radius: 50%;
  margin-right: 8px;
  transition: all 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(${({ checked }) => (checked ?? false) ? 1 : 0});
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #1890ff;
    transition: all 0.3s;
  }

  &:hover {
    border-color: ${({ disabled }) => (disabled ?? false) ? "#d9d9d9" : "#1890ff"};
  }
`;

export const RadioGroupWrapper = styled.div<{ direction?: "horizontal" | "vertical" }>`
  display: inline-flex;
  flex-direction: ${({ direction }) => direction === "vertical" ? "column" : "row"};
  gap: ${({ direction }) => direction === "vertical" ? "8px" : "8px"};
`;
