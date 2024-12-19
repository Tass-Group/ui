import styled from "styled-components";

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const SelectTrigger = styled.div<{ disabled?: boolean }>`
  min-width: 120px;
  height: 32px;
  padding: 4px 30px 4px 11px;
  background-color: ${({ disabled }) => (disabled ?? false) ? "#f5f5f5" : "#fff"};
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  transition: all 0.3s;
  
  &:hover {
    border-color: ${({ disabled }) => (disabled ?? false) ? "#d9d9d9" : "#40a9ff"};
  }
  
  &:focus-within {
    border-color: #40a9ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
`;

export const SelectValue = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const SelectInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: transparent;
  color: rgba(0, 0, 0, 0.85);
  
  &::placeholder {
    color: rgba(0, 0, 0, 0.25);
  }
  
  &:disabled {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.25);
  }
`;

export const SelectArrow = styled.span<{ $visible: boolean }>`
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({ $visible }) => $visible ? "rotate(180deg)" : "rotate(0)"};
`;

export const SelectClear = styled.span`
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;

export const Dropdown = styled.div<{ visible: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
  display: ${({ visible }) => visible ? "block" : "none"};
`;

export const OptionsList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  max-height: 250px;
  overflow-y: auto;
`;

export const Option = styled.li<{
  selected?: boolean
  disabled?: boolean
  active?: boolean
}>`
  padding: 5px 12px;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  color: ${({ disabled }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"};
  background: ${({ selected, active }) =>
    (selected ?? false) ? "#e6f7ff" : (active ?? false) ? "#f5f5f5" : "transparent"};
  transition: background 0.3s;
  
  &:hover {
    background: ${({ disabled, selected }) =>
      (disabled ?? false) ? "transparent" : (selected ?? false) ? "#e6f7ff" : "#f5f5f5"};
  }
`;

export const NotFound = styled.div`
  padding: 8px 12px;
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
`;

export const LoadingWrapper = styled.div`
  padding: 8px 12px;
  text-align: center;
  color: rgba(0, 0, 0, 0.45);
`;
