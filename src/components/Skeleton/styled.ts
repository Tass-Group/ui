import styled, { css, keyframes } from "styled-components";
import { type SkeletonAvatarSize, type SkeletonAvatarShape } from "./types";

const shimmer = keyframes`
  0% { background-position: 100% 50%; }
  100% { background-position: 0 50%; }
`;

export const baseSkeletonStyle = css<{ $active?: boolean }>`
  background: ${props => (props.$active ?? false)
    ? css`linear-gradient(
        90deg,
        rgba(190, 190, 190, 0.2) 25%,
        rgba(129, 129, 129, 0.24) 37%,
        rgba(190, 190, 190, 0.2) 63%
      )`
    : "#f5f5f5"};
  background-size: 400% 100%;
  animation: ${props => (props.$active ?? false) ? css`${shimmer} 1.4s ease infinite` : "none"};
`;

export const SkeletonAvatar = styled.div.attrs({ className: "sc-avatar" })<{
  $size?: SkeletonAvatarSize
  $shape?: SkeletonAvatarShape
  $active?: boolean
}>`
  ${baseSkeletonStyle}
  display: inline-block;
  vertical-align: top;
  flex-shrink: 0;
  width: ${props => {
    switch (props.$size) {
      case "small": return "32px";
      case "large": return "80px";
      default: return "40px";
    }
  }};
  height: ${props => {
    switch (props.$size) {
      case "small": return "32px";
      case "large": return "80px";
      default: return "40px";
    }
  }};
  border-radius: ${props => props.$shape === "circle" ? "50%" : "4px"};
  margin-right: 16px;
`;

export const SkeletonTitle = styled.div.attrs({ className: "sc-title" })<{
  $width?: number | string
  $active?: boolean
}>`
  ${baseSkeletonStyle}
  width: ${props => props.$width ?? "38%"};
  height: 20px;
  margin-top: 4px;
  margin-bottom: 12px;
  border-radius: 4px;
`;

export const SkeletonParagraph = styled.div.attrs({ className: "sc-paragraph" })<{
  $rows?: number
  $width?: number | string | Array<number | string>
  $active?: boolean
}>`
  ${baseSkeletonStyle}
  width: ${props => {
    if (Array.isArray(props.$width)) {
      return props.$width[props.$rows ?? 0] ?? "100%";
    }
    return props.$width ?? "100%";
  }};
  height: 16px;
  margin-bottom: 12px;
  border-radius: 4px;

  &:last-of-type {
    width: ${props => {
      if (Array.isArray(props.$width)) {
        return props.$width[props.$rows ?? 0] ?? "61%";
      }
      return props.$width ?? "61%";
    }};
    margin-bottom: 0;
  }
`;

export const SkeletonContent = styled.div.attrs({
  className: "sc-skeleton sc-content",
  "data-testid": "skeleton"
})<{ $round?: boolean }>`
  display: flex;
  width: 100%;
  min-width: 300px;
  padding: 12px;
  box-sizing: border-box;
  border-radius: ${props => (props.$round ?? false) ? "8px" : "0"};

  > div:last-child {
    flex: 1;
  }
`;
