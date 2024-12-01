import { useState } from "react";
import type React from "react";
import { type MenuItemType, type MenuProps } from "./types";
import {
  MenuContainer,
  MenuItem,
  SubMenuContainer,
  SubMenuContent
} from "./styled";
import Icon from "../Icon";

const Menu: React.FC<MenuProps> = ({
  items,
  mode = "vertical",
  menuTheme = "light",
  defaultSelectedKey,
  defaultOpenKeys = [],
  className,
  style
}) => {
  const [selectedKey, setSelectedKey] = useState(defaultSelectedKey ?? "");
  const [openKeys, setOpenKeys] = useState<string[]>(defaultOpenKeys);

  const toggleSubMenu = (key: string, e: React.MouseEvent): void => {
    e.stopPropagation();
    if (openKeys.includes(key)) {
      setOpenKeys(prev => prev.filter(k => k !== key));
    } else {
      setOpenKeys([key]);
    }
  };

  const handleSelect = (key: string, onClick?: () => void, isSubMenuItem?: boolean): void => {
    setSelectedKey(key);
    if (!(isSubMenuItem ?? false)) {
      setOpenKeys([]);
    }
    onClick?.();
  };

  const renderMenuItem = (item: MenuItemType): React.ReactNode => {
    if ((item.children?.length) != null) {
      const isOpen = openKeys.includes(item.key);
      const hasSelectedChild = item.children.some(child => child.key === selectedKey);

      return (
        <SubMenuContainer key={item.key}>
          <MenuItem
            menuTheme={menuTheme}
            isSubmenu
            isOpen={isOpen}
            selected={hasSelectedChild}
            onClick={(e) => { toggleSubMenu(item.key, e); }}
          >
            {(item.icon !== null) && <span className="menu-item-icon">{item.icon}</span>}
            {item.label}
            <Icon
              name="chevrondown"
              size={12}
              className="submenu-arrow"
              style={{ marginLeft: "auto" }}
            />
          </MenuItem>
          <SubMenuContent isOpen={isOpen}>
            {item.children.map((child) => (
              <MenuItem
                menuTheme={menuTheme}
                key={child.key}
                disabled={child.disabled}
                selected={selectedKey === child.key}
                onClick={() => {
                  if (!(child.disabled ?? false)) {
                    handleSelect(child.key, child.onClick, true);
                  }
                }}
              >
                {(child.icon !== null) && <span className="menu-item-icon">{child.icon}</span>}
                {child.label}
              </MenuItem>
            ))}
          </SubMenuContent>
        </SubMenuContainer>
      );
    }

    return (
      <MenuItem
        menuTheme={menuTheme}
        key={item.key}
        disabled={item.disabled}
        selected={selectedKey === item.key}
        onClick={() => {
          if (!(item.disabled ?? false)) {
            handleSelect(item.key, item.onClick);
          }
        }}
      >
        {(item.icon !== null) && <span className="menu-item-icon">{item.icon}</span>}
        {item.label}
      </MenuItem>
    );
  };

  return (
    <MenuContainer mode={mode} menuTheme={menuTheme} className={className} style={style}>
      {items.map(renderMenuItem)}
    </MenuContainer>
  );
};

export default Menu;
