import styled, { css } from "styled-components";

export const SliderWrapper = styled.div<{ vertical?: boolean }>`
  position: relative;
  width: ${({ vertical }) => (vertical ?? false) ? "12px" : "100%"};
  height: ${({ vertical }) => (vertical ?? false) ? "100%" : "12px"};
  padding: ${({ vertical }) => (vertical ?? false) ? "0" : "4px 0"};
  margin: ${({ vertical }) => (vertical ?? false) ? "6px 10px" : "10px 6px"};
  touch-action: none;
`;

export const SliderRail = styled.div<{ vertical?: boolean }>`
  position: absolute;
  ${({ vertical }) => (vertical ?? false)
    ? css`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `
    : css`
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 4px;
    `}
  background-color: #f5f5f5;
  border-radius: 2px;
  transition: background-color 0.3s;
`;

export const SliderTrack = styled.div<{
  vertical?: boolean
  offset: number
  length: number
  disabled?: boolean
}>`
  position: absolute;
  background-color: ${({ disabled }) => (disabled ?? false) ? "#bfbfbf" : "#1890ff"};
  border-radius: 2px;
  transition: background-color 0.3s;
  
  ${({ vertical, offset, length }) => (vertical ?? false)
    ? css`
      left: 50%;
      transform: translateX(-50%);
      bottom: ${offset}%;
      height: ${length}%;
      width: 4px;
    `
    : css`
      top: 50%;
      transform: translateY(-50%);
      left: ${offset}%;
      width: ${length}%;
      height: 4px;
    `}
`;

export const SliderHandle = styled.div.attrs({
  role: "slider"
})<{
  vertical?: boolean
  offset: number
  dragging?: boolean
  disabled?: boolean
}>`
  position: absolute;
  width: 14px;
  height: 14px;
  background-color: #fff;
  border: 2px solid ${({ disabled }) => (disabled ?? false) ? "#bfbfbf" : "#1890ff"};
  border-radius: 50%;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  transition: border-color 0.3s, box-shadow 0.3s;
  touch-action: pan-x;
  
  ${({ vertical, offset }) => (vertical ?? false)
    ? css`
      left: 50%;
      bottom: ${offset}%;
      transform: translate(-50%, 50%);
    `
    : css`
      top: 50%;
      left: ${offset}%;
      transform: translate(-50%, -50%);
    `}
  
  ${({ dragging, disabled }) => !(disabled ?? false) && (dragging ?? false) && css`
    border-color: #1890ff;
    box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
  `}
  
  &:hover {
    ${({ disabled }) => !(disabled ?? false) && css`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
  
  &:active {
    ${({ disabled }) => !(disabled ?? false) && css`
      border-color: #1890ff;
      box-shadow: 0 0 0 5px rgba(24, 144, 255, 0.12);
    `}
  }
`;

export const SliderMark = styled.div<{
  vertical?: boolean
  offset: number
}>`
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.45);
  white-space: nowrap;
  
  ${({ vertical, offset }) => (vertical ?? false)
    ? css`
      left: 100%;
      margin-left: 12px;
      bottom: ${offset}%;
      transform: translateY(50%);
    `
    : css`
      top: 100%;
      margin-top: 10px;
      left: ${offset}%;
      transform: translateX(-50%);
    `}
`;

export const SliderStep = styled.div<{ vertical?: boolean }>`
  position: absolute;
  background: transparent;
  pointer-events: none;
  
  ${({ vertical }) => (vertical ?? false)
    ? css`
      left: 50%;
      transform: translateX(-50%);
      width: 4px;
      height: 100%;
    `
    : css`
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      height: 4px;
    `}
`;

export const SliderDot = styled.span<{
  vertical?: boolean
  offset: number
  $active?: boolean
}>`
  position: absolute;
  width: 8px;
  height: 8px;
  border: 2px solid ${({ $active }) => ($active ?? false) ? "#1890ff" : "#e8e8e8"};
  background-color: #fff;
  border-radius: 50%;
  cursor: pointer;
  
  ${({ vertical, offset }) => (vertical ?? false)
    ? css`
      left: 50%;
      bottom: ${offset}%;
      transform: translate(-50%, 50%);
    `
    : css`
      top: 50%;
      left: ${offset}%;
      transform: translate(-50%, -50%);
    `}
`;

export const SliderTooltip = styled.div<{
  $visible?: boolean
  vertical?: boolean
  offset: number
}>`
  position: absolute;
  display: ${({ $visible }) => ($visible ?? false) ? "block" : "none"};
  padding: 6px 8px;
  color: #fff;
  font-size: 12px;
  line-height: 1;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 2px;
  transform: translateX(-50%);
  
  ${({ vertical, offset }) => (vertical ?? false)
    ? css`
      left: -30px;
      bottom: ${offset}%;
      transform: translateY(50%);
    `
    : css`
      top: -30px;
      left: ${offset}%;
    `}
`;
