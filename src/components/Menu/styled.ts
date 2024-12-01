import styled, { css } from "styled-components";
import { type MenuItemProps } from "./types";

const darkTheme = {
  background: "#000c17",
  textColor: "rgba(255, 255, 255, 0.85)",
  textColorSelected: "#1677FF",
  textColorHover: "#1677FF",
  textColorDisabled: "rgba(255, 255, 255, 0.25)",
  itemSelectedBg: "rgba(22, 119, 255, 0.1)",
  itemHoverBg: "rgba(255, 255, 255, 0.04)",
  subMenuBg: "#000c17",
  borderColor: "#16253a"
};

export const MenuContainer = styled.ul<{ mode?: "horizontal" | "vertical", menuTheme?: "light" | "dark" }>`
  list-style: none;
  margin: 0;
  padding: 0;
  background: ${({ menuTheme }) => menuTheme === "dark" ? darkTheme.background : "#fff"};
  
  ${({ mode, menuTheme }) =>
    mode === "horizontal"
      ? css`
          display: flex;
          border-bottom: 1px solid ${menuTheme === "dark" ? darkTheme.borderColor : "#f0f0f0"};
          width: 100%;
          
          > li, > div > li {
            padding: 0 20px;
            height: 46px;
            line-height: 46px;
            background: transparent !important;

            &::after {
              content: "";
              position: absolute;
              left: 0;
              right: 0;
              bottom: -1px;
              height: 2px;
              background: transparent;
              transition: all 0.3s;
            }
          }
          
          ${SubMenuContent} {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 160px;
            background: ${menuTheme === "dark" ? darkTheme.background : "#fff"};
            box-shadow: ${menuTheme === "dark"
                ? "0 2px 8px rgba(0, 0, 0, 0.45)"
                : "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08)"
            };
          }
        `
      : css`
          width: 200px;
          border-right: 1px solid ${menuTheme === "dark" ? darkTheme.borderColor : "#f0f0f0"};
        `}
`;

export const MenuItem = styled.li<MenuItemProps & { menuTheme?: "light" | "dark" }>`
  position: relative;
  padding: 12px 20px;
  cursor: ${({ disabled }) => (disabled === true ? "not-allowed" : "pointer")};
  transition: all 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  
  ${({ menuTheme, disabled, selected, isSubmenu }) =>
    menuTheme === "dark"
      ? css`
          color: ${(disabled ?? false)
            ? darkTheme.textColorDisabled
            : (selected ?? false)
              ? darkTheme.textColorSelected
              : darkTheme.textColor};
          
          &:hover {
            ${!(disabled ?? false) && css`
              color: ${darkTheme.textColorHover};
              background: ${darkTheme.itemHoverBg};
            `}
          }
          
          ${(selected ?? false) && !(isSubmenu ?? false) && css`
            background: ${darkTheme.itemSelectedBg};
            font-weight: 500;
          `}

          .menu-item-icon {
            color: inherit;
          }
        `
      : css`
          color: ${(disabled ?? false)
            ? "rgba(0, 0, 0, 0.25)"
            : (selected ?? false)
              ? "#1890ff"
              : "rgba(0, 0, 0, 0.85)"};
              
          &:hover {
            ${!(disabled ?? false) && css`
              color: #1890ff;
              background: ${(menuTheme ?? "horizontal") === "horizontal" ? "transparent" : "#f5f5f5"};
            `}
          }
          
          ${(selected ?? false) && !(isSubmenu ?? false) && css`
            background: #e6f7ff;
          `}
        `}

  .submenu-arrow {
    margin-left: auto;
    transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    ${({ isOpen }) => (isOpen ?? false) && "transform: rotate(180deg);"}
    color: inherit;
  }
`;

export const SubMenuContent = styled.div<{ isOpen?: boolean }>`
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transform-origin: top;
  transform: ${({ isOpen }) => ((isOpen ?? false) ? "scaleY(1)" : "scaleY(0)")};
  opacity: ${({ isOpen }) => ((isOpen ?? false) ? 1 : 0)};
`;

export const SubMenuContainer = styled.div`
  position: relative;
`;
