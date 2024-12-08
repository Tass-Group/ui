import styled from "styled-components";

export const CascaderContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const CascaderInput = styled.div<{ disabled?: boolean }>`
  min-width: 200px;
  height: 32px;
  padding: 4px 30px 4px 11px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  display: flex;
  align-items: center;
  background: ${({ disabled }) => (disabled ?? false) ? "#f5f5f5" : "#fff"};
  opacity: ${({ disabled }) => (disabled ?? false) ? 0.6 : 1};

  .label {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ disabled }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"};
  }

  &:hover {
    border-color: ${({ disabled }) => (disabled ?? false) ? "#d9d9d9" : "#40a9ff"};
  }
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 4px;
  display: flex;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  z-index: 1050;
`;

export const OptionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 4px 0;
  min-width: 120px;
  border-right: 1px solid #f0f0f0;

  &:last-child {
    border-right: none;
  }
`;

export const OptionItem = styled.li<{ disabled?: boolean, selected?: boolean }>`
  padding: 5px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ?? false) ? "not-allowed" : "pointer"};
  color: ${({ disabled }) => (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : "rgba(0, 0, 0, 0.85)"};
  background: ${({ selected }) => (selected ?? false) ? "#e6f7ff" : "transparent"};
  opacity: ${({ disabled }) => (disabled ?? false) ? 0.6 : 1};

  &:hover {
    background: ${({ disabled }) => (disabled ?? false) ? "transparent" : "#f5f5f5"};
  }
`;

export const ArrowIcon = styled.span<{ $visible: boolean }>`
  position: absolute;
  right: 11px;
  color: rgba(0, 0, 0, 0.25);
  transition: transform 0.3s;
  transform: ${({ $visible }) => $visible ? "rotate(180deg)" : "rotate(0)"};
`;

export const ClearIcon = styled.span`
  position: absolute;
  right: 28px;
  color: rgba(0, 0, 0, 0.25);
  
  &:hover {
    color: rgba(0, 0, 0, 0.45);
  }
`;
