import styled, { css } from "styled-components";
import type { PopoverPlacement } from "./types";
import { getPopoverPosition } from "./utils";

export const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const PopoverContent = styled.div<{
  $placement: PopoverPlacement
  $color?: string
}>`
  position: absolute;
  z-index: 1030;
  ${props => getPopoverPosition(props.$placement)}
  
  background-color: ${props => props.$color ?? "#fff"};
  box-shadow: 0 3px 6px -4px rgba(0,0,0,0.12), 
              0 6px 16px 0 rgba(0,0,0,0.08), 
              0 9px 28px 8px rgba(0,0,0,0.05);
  
  ${props => (props.$color != null) && css`
    .popover-arrow::before {
      background: ${props.$color};
    }
  `}
`;

export const PopoverArrow = styled.div<{
  $placement: PopoverPlacement
  $color?: string
}>`
  position: absolute;
  width: 8px;
  height: 8px;
  background: transparent;
  
  &::before {
    position: absolute;
    width: 8px;
    height: 8px;
    background: ${props => props.$color ?? "#fff"};
    content: "";
    transform: rotate(45deg);
  }
  
  ${props => {
    switch (props.$placement) {
      case "top":
        return css`
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "bottom":
        return css`
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
        `;
      case "left":
        return css`
          right: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          left: -4px;
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return "";
    }
  }}
`;

export const PopoverInner = styled.div`
  padding: 12px 16px;
  color: rgba(0, 0, 0, 0.85);
  min-width: 177px;
`;

export const PopoverTitle = styled.div`
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  min-width: 177px;
`;
