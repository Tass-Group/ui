import styled, { css } from "styled-components";

const sizeStyles = {
  small: css`
    width: 24px;
    height: 24px;
    line-height: 24px;
    font-size: 14px;
  `,
  default: css`
    width: 32px;
    height: 32px;
    line-height: 32px;
    font-size: 18px;
  `,
  large: css`
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 24px;
  `
};

export const StyledAvatar = styled.span<{
  $size?: number | "large" | "small" | "default"
  $shape?: "circle" | "square"
  $scale?: number
}>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  vertical-align: middle;
  background: #ccc;
  border-radius: ${props => props.$shape === "circle" ? "50%" : "2px"};
  
  ${props => {
    if (typeof props.$size === "number") {
      return css`
        width: ${props.$size}px;
        height: ${props.$size}px;
      `;
    }
    return sizeStyles[props.$size ?? "default"];
  }}

  span {
    transform-origin: center;
    line-height: 1;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`;

export const AvatarGroupWrapper = styled.div`
  display: inline-flex;
  
  ${StyledAvatar} {
    border: 2px solid #fff;
    margin-left: -8px;
    
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const RestNumber = styled(StyledAvatar)`
  background: #ccc;
  cursor: pointer;
`;
