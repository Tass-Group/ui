import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const MenuContainer = styled.div<{ placement: string }>`
  position: absolute;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
  z-index: 1050;

  ${({ placement }) => {
    switch (placement) {
      case "top":
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-bottom: 4px;
        `;
      case "bottom":
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          margin-top: 4px;
        `;
      case "left":
        return `
          top: 50%;
          right: 100%;
          transform: translateY(-50%);
          margin-right: 4px;
        `;
      case "right":
        return `
          top: 50%;
          left: 100%;
          transform: translateY(-50%);
          margin-left: 4px;
        `;
      default:
        return "";
    }
  }}
`;

export const MenuItem = styled.div<{ disabled?: boolean, $isDanger?: boolean }>`
  padding: 8px 12px;
  cursor: ${({ disabled }) => ((disabled ?? false) ? "not-allowed" : "pointer")};
  color: ${({ disabled, $isDanger }) =>
    (disabled ?? false) ? "rgba(0, 0, 0, 0.25)" : ($isDanger ?? false) ? "#ff4d4f" : "rgba(0, 0, 0, 0.85)"};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    background: ${({ disabled, $isDanger }) => {
      if (disabled ?? false) return "transparent";
      return ($isDanger ?? false) ? "#fff1f0" : "#f5f5f5";
    }};
    color: ${({ disabled, $isDanger }) => {
      if (disabled ?? false) return "rgba(0, 0, 0, 0.25)";
      return ($isDanger ?? false) ? "#ff7875" : "rgba(0, 0, 0, 0.85)";
    }};
  }
`;

export const SubMenu = styled.div`
  position: relative;

  &:hover > .submenu-content {
    display: block;
  }
`;

export const SubMenuContent = styled.div`
  display: none;
  position: absolute;
  left: 100%;
  top: 0;
  min-width: 120px;
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  padding: 4px 0;
`;
