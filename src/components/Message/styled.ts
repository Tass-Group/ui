import styled, { keyframes } from "styled-components";

const messageSlideIn = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const messageSlideOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

export const MessageContainer = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: none;
`;

export const MessageWrapper = styled.div<{ $type: string, $visible: boolean }>`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  margin-bottom: 8px;
  pointer-events: all;
  animation: ${({ $visible }) => ($visible ? messageSlideIn : messageSlideOut)} 0.3s ease-in-out;
  min-width: 250px;
  position: relative;

  ${({ $type }) => {
    switch ($type) {
      case "success":
        return `
          border: 1px solid #b7eb8f;
          color: #52c41a;
        `;
      case "info":
        return `
          border: 1px solid #91caff;
          color: #1890ff;
        `;
      case "warning":
        return `
          border: 1px solid #ffe58f;
          color: #faad14;
        `;
      case "error":
        return `
          border: 1px solid #ffa39e;
          color: #ff4d4f;
        `;
      default:
        return "";
    }
  }}
`;

export const MessageContent = styled.span`
  font-size: 14px;
  line-height: 1.5715;
  margin-left: 8px;
  margin-right: 24px;
`;

export const MessageClose = styled.span`
  position: absolute;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  color: rgba(0, 0, 0, 0.45);
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5715;
  transition: color 0.3s;

  &:hover {
    color: rgba(0, 0, 0, 0.85);
  }
`;

export const MessageIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
`;
