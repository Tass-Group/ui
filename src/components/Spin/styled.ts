import type { SpinSize } from "./types";
import styled from "styled-components";

const getSize = (size: SpinSize = "default"): string => {
  const sizes = {
    small: "14px",
    default: "20px",
    large: "32px"
  };
  return sizes[size];
};

export const SpinContainer = styled.div<{ $spinning: boolean, $size?: SpinSize }>`
  position: relative;
  display: ${({ $spinning }) => ($spinning ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &.sc-spin {
    width: ${({ $size }) => getSize($size ?? "default")};
    height: ${({ $size }) => getSize($size ?? "default")};
  }
`;

export const SpinDot = styled.div<{ $size: SpinSize }>`
  position: relative;
  display: inline-block;
  width: ${({ $size }) => getSize($size)};
  height: ${({ $size }) => getSize($size)};
  transform: rotate(45deg);
  animation: rotate 1.2s infinite linear;

  @keyframes rotate {
    to {
      transform: rotate(405deg);
    }
  }
`;

export const SpinDotItem = styled.div<{ $size: SpinSize }>`
  position: absolute;
  display: block;
  width: 9px;
  height: 9px;
  background-color: #1890ff;
  border-radius: 100%;
  opacity: 0.3;
  transform: scale(0.75);
  transform-origin: 50% 50%;
  animation: spinMove 1s infinite linear alternate;

  &:nth-child(1) {
    top: 0;
    left: 0;
  }

  &:nth-child(2) {
    top: 0;
    right: 0;
    animation-delay: 0.4s;
  }

  &:nth-child(3) {
    right: 0;
    bottom: 0;
    animation-delay: 0.8s;
  }

  &:nth-child(4) {
    bottom: 0;
    left: 0;
    animation-delay: 1.2s;
  }

  @keyframes spinMove {
    to {
      opacity: 1;
    }
  }
`;

export const SpinText = styled.div<{ $size: SpinSize }>`
  margin-top: 8px;
  color: rgba(0, 0, 0, 0.45);
  font-size: ${({ $size }) => ($size === "small" ? "12px" : "14px")};
`;

export const SpinWrapper = styled.div<{ $spinning: boolean }>`
  position: relative;
  transition: opacity 0.3s;

  ${({ $spinning }) =>
    $spinning &&
    `
    &::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: #fff;
      opacity: 0.3;
      pointer-events: none;
    }
  `}
`;
