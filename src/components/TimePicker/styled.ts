import styled from "styled-components";

export const TimePickerWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const Input = styled.div<{ disabled?: boolean, size?: string }>`
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "4px 8px";
      case "large":
        return "8px 12px";
      default:
        return "6px 10px";
    }
  }};
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  min-width: 120px;
  cursor: ${({ disabled }) => ((disabled ?? false) ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => ((disabled ?? false) ? "#f5f5f5" : "#fff")};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  &:hover {
    border-color: ${({ disabled }) => ((disabled ?? false) ? "#d9d9d9" : "#40a9ff")};
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1000;
  display: flex;
  flex-direction: column;
  width: 190px;
`;

export const TimeColumnsWrapper = styled.div`
  display: flex;
  padding: 4px 0;
  justify-content: space-around;
`;

export const TimeColumn = styled.div`
  width: 56px;
  height: 224px;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
  
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d9d9d9;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export const TimeItem = styled.div<{ selected?: boolean }>`
  height: 28px;
  line-height: 28px;
  padding: 0 8px;
  text-align: center;
  cursor: pointer;
  
  &:hover {
    background-color: #f5f5f5;
  }
  
  ${({ selected }) => (selected ?? false) && `
    background-color: #e6f7ff;
    font-weight: 500;
    
    &:hover {
      background-color: #e6f7ff;
    }
  `}
`;

export const IconWrapper = styled.span`
  color: rgba(0, 0, 0, 0.25);
  margin-left: 8px;
  display: flex;
  align-items: center;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 12px;
  border-top: 1px solid #f0f0f0;
`;

export const Button = styled.button<{ primary?: boolean }>`
  border: none;
  background: transparent;
  color: #1890ff;
  padding: 4px 0;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    color: #40a9ff;
  }
`;
