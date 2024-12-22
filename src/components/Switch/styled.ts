import styled, { css } from "styled-components";

export const SwitchWrapper = styled.button<{
  $checked: boolean
  $disabled: boolean
  $size: "small" | "default"
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  box-sizing: border-box;
  min-width: ${({ $size }) => ($size === "small" ? "28px" : "44px")};
  height: ${({ $size }) => ($size === "small" ? "16px" : "22px")};
  padding: 0;
  line-height: 0;
  border: 0;
  border-radius: 100px;
  cursor: ${({ $disabled }) => ($disabled ? "not-allowed" : "pointer")};
  transition: all 0.2s;
  user-select: none;

  background-color: ${({ $checked, $disabled }) => {
    if ($disabled) return $checked ? "rgba(24, 144, 255, 0.4)" : "#00000040";
    return $checked ? "#1890ff" : "#00000040";
  }};

  opacity: ${({ $disabled }) => ($disabled ? 0.4 : 1)};

  &:focus {
    outline: none;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const Handle = styled.div<{
  $checked: boolean
  $size: "small" | "default"
  $loading?: boolean
}>`
  position: absolute;
  top: 2px;
  left: 2px;
  width: ${({ $size }) => ($size === "small" ? "12px" : "18px")};
  height: ${({ $size }) => ($size === "small" ? "12px" : "18px")};
  transition: all 0.2s;
  
  &::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #fff;
    border-radius: 9px;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    content: "";
  }

  ${({ $checked, $size }) => {
    const offset = $size === "small" ? 12 : 22;
    return $checked && css`transform: translateX(${offset}px);`;
  }}

  ${({ $loading }) =>
    ($loading ?? false) &&
    css`
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 6px;
        height: 6px;
        border: 2px solid #1890ff;
        border-top-color: transparent;
        border-radius: 50%;
        animation: loadingCircle 1s infinite linear;
      }

      @keyframes loadingCircle {
        100% {
          transform: translate(-50%, -50%) rotate(360deg);
        }
      }
    `}
`;

export const Children = styled.span<{
  $checked: boolean
  $size: "small" | "default"
}>`
  display: block;
  color: #fff;
  font-size: 12px;
  line-height: ${({ $size }) => ($size === "small" ? "16px" : "22px")};
  transition: margin 0.2s;
  margin: ${({ $checked }) => {
    return $checked ? "0 24px 0 6px" : "0 6px 0 24px";
  }};
`;
