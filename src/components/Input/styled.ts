import styled, { css } from "styled-components";

const getInputSize = (size?: "small" | "middle" | "large"): ReturnType<typeof css> => {
  switch (size) {
    case "small":
      return css`
        padding: 0 7px;
        font-size: 14px;
        line-height: 24px;
      `;
    case "large":
      return css`
        padding: 8px 11px;
        font-size: 16px;
        line-height: 24px;
      `;
    default:
      return css`
        padding: 4px 11px;
        font-size: 14px;
        line-height: 22px;
      `;
  }
};

const getStatusStyle = (status?: "error" | "warning"): ReturnType<typeof css> => {
  switch (status) {
    case "error":
      return css`
        border-color: #ff4d4f;
        &:hover,
        &:focus {
          border-color: #ff7875;
          box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
        }
      `;
    case "warning":
      return css`
        border-color: #faad14;
        &:hover,
        &:focus {
          border-color: #ffc53d;
          box-shadow: 0 0 0 2px rgba(250, 173, 20, 0.2);
        }
      `;
    default:
      return css``;
  }
};

export const InputWrapper = styled.span<{
  disabled?: boolean
  bordered?: boolean
  status?: "error" | "warning"
  $focused?: boolean
}>`
  position: relative;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  border: ${({ bordered = true }) => bordered ? "1px solid #d9d9d9" : "none"};
  border-radius: 6px;
  transition: all 0.2s;
  align-items: center;
  
  ${({ disabled }) => (disabled ?? false) && css`
    background-color: rgba(0, 0, 0, 0.04);
    cursor: not-allowed;
    opacity: 1;
  `}
  
  ${({ $focused }) => ($focused ?? false) && css`
    border-color: #4096ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  `}
  
  ${({ status }) => getStatusStyle(status)}
  
  &:hover {
    border-color: #4096ff;
  }
`;

export const StyledInput = styled.input<{
  size?: "small" | "middle" | "large"
}>`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  padding: 0;
  ${({ size }) => getInputSize(size)}

  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Prefix = styled.span`
  margin-right: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`;

export const Suffix = styled.span`
  margin-left: 4px;
  display: flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.45);
`;

export const ClearButton = styled.span`
  color: rgba(0, 0, 0, 0.25);
  font-size: 12px;
  cursor: pointer;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const InputGroup = styled.span<{
  compact?: boolean
}>`
  display: inline-block;
  width: 100%;
  text-align: start;
  vertical-align: top;
  
  ${({ compact }) => (compact ?? false) && css`
    display: inline-flex;
    
    & > * {
      border-radius: 0;
      
      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }
      
      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  `}
`;

export const TextArea = styled.textarea<{
  bordered?: boolean
  status?: "error" | "warning"
}>`
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
  line-height: 1.5714285714285714;
  background-color: #ffffff;
  border: ${({ bordered = true }) => bordered ? "1px solid #d9d9d9" : "none"};
  border-radius: 6px;
  transition: all 0.2s;
  
  &:hover {
    border-color: #4096ff;
  }
  
  &:focus {
    border-color: #4096ff;
    box-shadow: 0 0 0 2px rgba(5, 145, 255, 0.1);
    outline: 0;
  }
  
  ${({ status }) => getStatusStyle(status)}
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
`;
