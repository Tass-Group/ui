import styled, { css, keyframes } from "styled-components";

const statusColors = {
  success: "#52c41a",
  processing: "#1890ff",
  default: "#d9d9d9",
  error: "#ff4d4f",
  warning: "#faad14"
};

const processingAnimation = keyframes`
  0% { transform: scale(0.8); opacity: 0.5; }
  100% { transform: scale(2.4); opacity: 0; }
`;

export const BadgeWrapper = styled.span`
  position: relative;
  display: inline-block;
  line-height: 1;
`;

export const BadgeCount = styled.sup<{
  $dot?: boolean
  $status?: "success" | "processing" | "default" | "error" | "warning"
  $color?: string
  $size?: "default" | "small"
  $standalone?: boolean
  $offset?: [number, number]
}>`
  position: ${props => (props.$standalone ?? false) ? "relative" : "absolute"};
  top: ${props => props.$offset?.[1] ?? "auto"};
  right: ${props => (props.$standalone ?? false) ? "auto" : `${props.$offset?.[0] ?? 0}px`};
  transform: ${props => (props.$standalone ?? false) ? "none" : "translate(50%, -50%)"};
  transform-origin: 100% 0%;
  
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: ${props => (props.$dot ?? false) ? "6px" : props.$size === "small" ? "14px" : "20px"};
  height: ${props => (props.$dot ?? false) ? "6px" : props.$size === "small" ? "14px" : "20px"};
  padding: ${props => (props.$dot ?? false) ? 0 : "0 6px"};
  color: #fff;
  font-size: ${props => props.$size === "small" ? "12px" : "14px"};
  line-height: 1;
  white-space: nowrap;
  background: ${props =>
    props.$color ??
    (props.$status !== undefined ? statusColors[props.$status] : "#ff4d4f")
  };
  border-radius: ${props => (props.$dot ?? false) ? "50%" : "10px"};
  box-shadow: 0 0 0 1px #fff;
  
  ${props => props.$status === "processing" && css`
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: ${statusColors.processing};
      content: '';
      animation: ${processingAnimation} 1.2s infinite ease-in-out;
    }
  `}
`;

export const StatusDot = styled.span<{
  $status?: "success" | "processing" | "default" | "error" | "warning"
}>`
  position: relative;
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => statusColors[props.$status ?? "default"]};
  
  ${props => props.$status === "processing" && css`
    &::after {
      position: absolute;
      top: -1px;
      left: -1px;
      width: 100%;
      height: 100%;
      border: 1px solid ${statusColors.processing};
      border-radius: 50%;
      content: '';
      animation: ${processingAnimation} 1.2s infinite ease-in-out;
    }
  `}
`;

export const StatusWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  line-height: 1;
  font-size: 14px;
`;

export const StatusText = styled.span`
  color: rgba(0, 0, 0, 0.88);
  font-size: 14px;
`;

export const RibbonWrapper = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  padding: 16px;
  border: 1px solid #eee;
`;

export const RibbonCorner = styled.div<{
  $color?: string
  $placement?: "start" | "end"
}>`
  position: absolute;
  top: 0;
  right: 0;
  background: ${props => props.$color ?? "#1677ff"};
  color: white;
  padding: 6px 12px;
  border-radius: 0 8px 0 8px;
  font-size: 14px;
  line-height: 1;
`;
