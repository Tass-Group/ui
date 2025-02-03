import { css } from "styled-components";
import type { PopoverPlacement } from "./types";

export const getPopoverPosition = (placement: PopoverPlacement): ReturnType<typeof css> => {
  switch (placement) {
    case "top":
      return css`
        bottom: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(-10px);
      `;
    case "topLeft":
      return css`
        bottom: 100%;
        left: 0;
        transform: translateY(-10px);
      `;
    case "topRight":
      return css`
        bottom: 100%;
        right: 0;
        transform: translateY(-10px);
      `;
    case "bottom":
      return css`
        top: 100%;
        left: 50%;
        transform: translateX(-50%) translateY(10px);
      `;
    case "bottomLeft":
      return css`
        top: 100%;
        left: 0;
        transform: translateY(10px);
      `;
    case "bottomRight":
      return css`
        top: 100%;
        right: 0;
        transform: translateY(10px);
      `;
    case "left":
      return css`
        top: 50%;
        right: 100%;
        transform: translateY(-50%) translateX(-10px);
      `;
    case "leftTop":
      return css`
        top: 0;
        right: 100%;
        transform: translateX(-10px);
      `;
    case "leftBottom":
      return css`
        bottom: 0;
        right: 100%;
        transform: translateX(-10px);
      `;
    case "right":
      return css`
        top: 50%;
        left: 100%;
        transform: translateY(-50%) translateX(10px);
      `;
    case "rightTop":
      return css`
        top: 0;
        left: 100%;
        transform: translateX(10px);
      `;
    case "rightBottom":
      return css`
        bottom: 0;
        left: 100%;
        transform: translateX(10px);
      `;
    default:
      return css``;
  }
};
