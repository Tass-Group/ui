import styled, { css } from "styled-components";
import { type DividerProps } from "./types";

export const StyledDivider = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: ${({ position }) =>
    position === "left"
      ? "flex-start"
      : position === "right"
      ? "flex-end"
      : "center"};
  color: ${({ color }) => color ?? "rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  .line {
    flex: 1;
    border-top: ${({ orientation, variant, color }) =>
      orientation === "horizontal" ? `1px ${variant} ${color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
    border-left: ${({ orientation, variant, color }) =>
      orientation === "vertical" ? `1px ${variant} ${color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
    margin: ${({ orientation }) =>
      orientation === "horizontal" ? "0 8px" : "8px 0"};
  }

  .text {
    padding: 0 8px;
    white-space: nowrap;
  }

  ${({ orientation }) =>
    orientation === "vertical" &&
    css`
      flex-direction: column;
      align-items: center;
      height: 100%;

      .line {
        width: 1px;
        height: 100%;
        margin: 4px 0;
      }
    `}
`;
