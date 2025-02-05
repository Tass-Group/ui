import styled, { css, keyframes } from "styled-components";

const slideMotion = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const TabsWrapper = styled.div<{
  $centered?: boolean
  $mode?: "horizontal" | "vertical"
}>`
  display: flex;
  flex-direction: ${props => props.$mode === "vertical" ? "row" : "column"};
`;

export const TabsNav = styled.div<{
  $type?: "line" | "card" | "editable-card"
  $size?: "small" | "middle" | "large"
  $mode?: "horizontal" | "vertical"
}>`
  position: relative;
  display: flex;
  flex: none;
  align-items: center;
  margin: ${props => props.$mode === "vertical" ? "0 16px 0 0" : "0 0 16px 0"};
  
  ${props => props.$mode === "vertical" && css`
    flex-direction: column;
    .tabs-nav-list {
      flex-direction: column;
    }
  `}
  
  ${props => props.$type === "card" && css`
    padding: 0 2px;
    background: #fafafa;
    border: 1px solid #f0f0f0;
    border-bottom: 0;
  `}
  
  ${props => {
    switch (props.$size) {
      case "small":
        return css`.tabs-nav-list { font-size: 14px; }`;
      case "large":
        return css`.tabs-nav-list { font-size: 16px; }`;
      default:
        return css`.tabs-nav-list { font-size: 14px; }`;
    }
  }}
`;

export const TabsList = styled.div<{
  $centered?: boolean
  $mode?: "horizontal" | "vertical"
}>`
  position: relative;
  display: flex;
  flex: auto;
  align-items: center;
  overflow: hidden;
  font-size: inherit;
  justify-content: ${props => ((props.$centered ?? false) && props.$mode === "horizontal") ? "center" : "flex-start"};
  flex-direction: ${props => props.$mode === "vertical" ? "column" : "row"};
`;

export const TabsTab = styled.div<{
  $active?: boolean
  $disabled?: boolean
  $type?: "line" | "card" | "editable-card"
  $mode?: "horizontal" | "vertical"
}>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 12px 16px;
  font-size: inherit;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  ${props => (props.$active ?? false) && css`
    color: #1890ff;
    ${props.$type === "line" && props.$mode === "horizontal" && css`
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2px;
        background: #1890ff;
      }
    `}
    
    ${props.$type === "line" && props.$mode === "vertical" && css`
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 2px;
        background: #1890ff;
      }
    `}
  `}
  
  ${props => (props.$disabled ?? false) && css`
    color: rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  `}
  
  ${props => props.$type === "card" && css`
    margin: 0 2px;
    background: ${(props.$active ?? false) ? "#fff" : "transparent"};
    border: 1px solid #f0f0f0;
    border-radius: 2px 2px 0 0;
    
    &:hover {
      color: #40a9ff;
    }
  `}
`;

export const TabsContent = styled.div<{
  $animated?: boolean
}>`
  display: flex;
  width: 100%;

  ${props => (props.$animated ?? false) && css`
    & > div {
      animation: ${slideMotion} 0.3s;
    }
  `}
`;

export const TabPane = styled.div<{
  $active?: boolean
}>`
  flex: none;
  width: 100%;
  display: ${props => (props.$active ?? false) ? "block" : "none"};
`;

export const AddButton = styled.button`
  padding: 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: #40a9ff;
  }
`;

export const CloseButton = styled.button`
  padding: 0 0 0 8px;
  background: transparent;
  border: 0;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
  
  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`;
