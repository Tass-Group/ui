import styled, { css } from "styled-components";

export const CheckboxWrapper = styled.label<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  cursor: ${({ $disabled }) => ($disabled ?? false) ? "not-allowed" : "pointer"};
  opacity: ${({ $disabled }) => ($disabled ?? false) ? 0.5 : 1};
`;

export const HiddenInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const CheckboxInner = styled.span<{
  $checked?: boolean
  $disabled?: boolean
  $indeterminate?: boolean
}>`
  position: relative;
  width: 16px;
  height: 16px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  transition: all 0.3s;
  background-color: ${({ $checked, $indeterminate }) =>
    ($checked ?? false) || ($indeterminate ?? false) ? "#1890ff" : "#fff"};
  border-color: ${({ $checked, $indeterminate }) =>
    ($checked ?? false) || ($indeterminate ?? false) ? "#1890ff" : "#d9d9d9"};

  &::after {
    position: absolute;
    content: '';
    transition: all 0.2s;
    
    ${({ $checked, $indeterminate }) => {
      if ($indeterminate ?? false) {
        return css`
          top: 7px;
          left: 3px;
          width: 8px;
          height: 2px;
          background: #fff;
        `;
      }
      if ($checked ?? false) {
        return css`
          top: 2px;
          left: 5px;
          width: 5px;
          height: 8px;
          border: 2px solid #fff;
          border-top: 0;
          border-left: 0;
          transform: rotate(45deg);
        `;
      }
      return "";
    }}
  }

  &:hover {
    border-color: #1890ff;
  }
`;

export const Label = styled.span`
  padding-left: 8px;
  font-size: 14px;
`;

export const CheckboxGroup = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
`;
