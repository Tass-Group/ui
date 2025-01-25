import styled, { css } from "styled-components";

const sizeStyles = {
  small: css`
    .collapse-header-text {
      padding: 8px 16px;
      font-size: 14px;
    }
  `,
  middle: css`
    .collapse-header-text {
      padding: 12px 16px;
      font-size: 14px;
    }
  `,
  large: css`
    .collapse-header-text {
      padding: 16px 16px;
      font-size: 16px;
    }
  `
};

export const CollapseWrapper = styled.div<{
  $bordered?: boolean
  $ghost?: boolean
  $size?: "large" | "middle" | "small"
}>`
  background: ${props => (props.$ghost ?? false) ? "transparent" : "#fff"};
  border: ${props => !(props.$ghost ?? false) && (props.$bordered ?? false) ? "1px solid #d9d9d9" : "none"};
  border-radius: ${props => (props.$ghost ?? false) ? 0 : "2px"};
  
  ${props => sizeStyles[props.$size ?? "middle"]}
`;

export const CollapseItem = styled.div<{
  $bordered?: boolean
  $ghost?: boolean
}>`
  border-bottom: ${props => !(props.$ghost ?? false) && (props.$bordered ?? false) ? "1px solid #d9d9d9" : "none"};
  background: ${props => (props.$ghost ?? false) ? "transparent" : "#fff"};
  
  &:last-child {
    border-bottom: none;
  }

  ${props => (props.$ghost ?? false) && css`
    & ${CollapseHeader} {
      padding: 0;
      
      &:hover {
        background: transparent;
      }
    }
    
    & ${CollapseContent} {
      padding-left: 24px;
    }
  `}
`;

export const CollapseHeader = styled.div<{
  $expandIconPosition?: "start" | "end"
  $disabled?: boolean
}>`
  display: flex;
  align-items: center;
  padding: ${props => props.$expandIconPosition === "start" ? "0 16px" : "0"};
  color: rgba(0, 0, 0, 0.88);
  cursor: ${props => (props.$disabled ?? false) ? "not-allowed" : "pointer"};
  opacity: ${props => (props.$disabled ?? false) ? 0.5 : 1};
  transition: all 0.3s;
  
  ${props => props.$expandIconPosition === "end" && css`
    flex-direction: row-reverse;
    padding: 0 16px;
    
    ${CollapseArrow} {
      margin-right: 0;
      margin-left: 12px;
    }
  `}

  &:hover {
    background: rgba(0, 0, 0, 0.02);
  }
  
  .collapse-header-text {
    flex: 1;
  }
`;

export const CollapseArrow = styled.span<{ $expanded?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  font-size: 12px;
  min-width: 12px;
  height: 12px;
  transform: rotate(${props => (props.$expanded ?? false) ? "90deg" : "0deg"});
  transition: transform 0.2s;
`;

export const CollapseContent = styled.div<{ $active?: boolean }>`
  overflow: hidden;
  background: transparent;
  max-height: ${props => (props.$active ?? false) ? "1000px" : "0"};
  padding: ${props => (props.$active ?? false) ? "16px" : "0 16px"};
  opacity: ${props => (props.$active ?? false) ? 1 : 0};
  transition: all 0.3s ease-in-out;
`;

export const CollapseExtra = styled.div`
  margin-left: auto;
  padding: 0 16px;
`;
