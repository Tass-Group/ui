import type React from "react";
import { useState, useRef, useEffect } from "react";
import { type DropdownProps, type MenuItemType } from "./types";
import {
  DropdownContainer,
  MenuContainer,
  MenuItem,
  SubMenu,
  SubMenuContent
} from "./styled";
import Icon from "../Icon";

const renderMenuItem = (item: MenuItemType): React.ReactNode => {
  if ((item.children?.length) != null) {
    return (
      <SubMenu key={item.key}>
        <MenuItem>
          {(item.icon != null) && <span className="menu-item-icon">{item.icon}</span>}
          {item.label}
          <Icon
            name="chevronright"
            size={12}
            style={{ marginLeft: "auto" }}
          />
        </MenuItem>
        <SubMenuContent className="submenu-content">
          {item.children.map(child => renderMenuItem(child))}
        </SubMenuContent>
      </SubMenu>
    );
  }

  return (
    <MenuItem
      key={item.key}
      disabled={item.disabled}
      isdanger={item.isdanger} // 改为 isdanger
      onClick={item.onClick}
    >
      {(item.icon != null) && <span className="menu-item-icon">{item.icon}</span>}
      {item.label}
    </MenuItem>
  );
};

const Dropdown: React.FC<DropdownProps> = ({
  items,
  trigger = "hover",
  placement = "bottom",
  children,
  className,
  style
}) => {
  const [visible, setVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        (containerRef.current != null) &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setVisible(false);
      }
    };

    if (trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      if (trigger === "click") {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    };
  }, [trigger]);

  const handleTrigger = (): void => {
    if (trigger === "click") {
      setVisible(!visible);
    }
  };

  const handleMouseEnter = (): void => {
    if (trigger === "hover") {
      setVisible(true);
    }
  };

  const handleMouseLeave = (): void => {
    if (trigger === "hover") {
      setVisible(false);
    }
  };

  return (
    <DropdownContainer
      ref={containerRef}
      className={className}
      style={style}
      onClick={handleTrigger}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {visible && (
        <MenuContainer placement={placement}>
          {items.map(item => renderMenuItem(item))}
        </MenuContainer>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
