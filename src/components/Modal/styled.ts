import styled, { keyframes } from "styled-components";

const modalFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const modalFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const modalZoomIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;

const modalZoomOut = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 0;
  }
`;

export const ModalWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: ${({ $visible }) => ($visible ? "block" : "none")};
`;

export const ModalMask = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.45);
  animation: ${({ $visible }) => ($visible ? modalFadeIn : modalFadeOut)} 0.3s ease-in-out;
`;

export const ModalContent = styled.div<{
  $visible: boolean
  $width?: number | string
  $centered?: boolean
}>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: ${({ $width }) => (typeof $width === "number" ? `${$width}px` : $width ?? "520px")};
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 9px 28px 8px rgba(0, 0, 0, 0.05);
  pointer-events: auto;
  animation: ${({ $visible }) => ($visible ? modalZoomIn : modalZoomOut)} 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
  transform: translate(-50%, -50%) scale(1);
`;

export const ModalHeader = styled.div`
  padding: 16px 24px;
  color: rgba(0, 0, 0, 0.88);
  background: #fff;
  border-bottom: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ModalTitle = styled.div`
  margin: 0;
  color: rgba(0, 0, 0, 0.88);
  font-weight: 600;
  font-size: 16px;
  line-height: 1.5;
  word-wrap: break-word;
`;

export const ModalClose = styled.button`
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  line-height: 1;
  text-decoration: none;
  background: transparent;
  border: 0;
  outline: 0;
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: rgba(0, 0, 0, 0.88);
  }
`;

export const ModalBody = styled.div`
  padding: 24px;
  font-size: 14px;
  line-height: 1.5715;
  word-wrap: break-word;
`;

export const ModalFooter = styled.div`
  padding: 16px 24px;
  text-align: end;
  background: transparent;
  border-top: 1px solid rgba(5, 5, 5, 0.06);
  border-radius: 0 0 8px 8px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;
