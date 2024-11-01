// styled.ts
import styled, { css } from "styled-components";
import { type DividerProps } from "./types";

export const StyledDivider = styled.div<DividerProps>`
  display: flex;
  align-items: center;
  justify-content: ${props =>
    props.textPosition === "left"
? "flex-start"
    : props.textPosition === "right"
? "flex-end"
    : "center"};
  color: ${props => props.color ?? "rgba(0, 0, 0, 0.6)"};
  font-size: 14px;
  text-align: center;
  width: 100%;

  ${props =>
    props.orientation === "horizontal"
      ? css`
          &::before,
          &::after {
            content: "";
            flex: 1;
            height: 1px;
            background-color: ${props.variant === "solid" ? props.color ?? "rgba(0, 0, 0, 0.12)" : "transparent"};
            border-top: ${props.variant !== "solid" ? `1px ${props.variant} ${props.color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
          }
          margin: 8px 0;
        `
      : css`
          flex-direction: column;
          align-self: stretch;
          &::before,
          &::after {
            content: "";
            flex: 1;
            width: 1px;
            background-color: ${props.variant === "solid" ? props.color ?? "rgba(0, 0, 0, 0.12)" : "transparent"};
            border-left: ${props.variant !== "solid" ? `1px ${props.variant} ${props.color ?? "rgba(0, 0, 0, 0.12)"}` : "none"};
          }
          margin: 0 8px;
        `}

  ${props =>
    props.textPosition === "left" &&
    css`
      &::before {
        display: none;
      }
      margin-left: 8px;
    `}

  ${props =>
    props.textPosition === "right" &&
    css`
      &::after {
        display: none;
      }
      margin-right: 8px;
    `}
`;
