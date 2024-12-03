import { type ReactNode } from "react";
export type MenuMode = "vertical" | "horizontal";
export type MenuTheme = "light" | "dark";
export interface MenuItemType {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    children?: MenuItemType[];
    onClick?: () => void;
}
export interface MenuProps {
    items: MenuItemType[];
    mode?: "horizontal" | "vertical";
    menuTheme?: "light" | "dark";
    defaultSelectedKey?: string;
    defaultOpenKeys?: string[];
    className?: string;
    style?: React.CSSProperties;
}
export interface MenuItemProps {
    disabled?: boolean;
    selected?: boolean;
    isSubmenu?: boolean;
    isOpen?: boolean;
}
export interface SubMenuProps {
    item: MenuItemType;
    mode?: MenuMode;
    theme?: MenuTheme;
    level?: number;
    isOpen?: boolean;
    selectedKeys?: string[];
    onTitleClick?: () => void;
    onSelect?: (key: string) => void;
    onClick?: (key: string) => void;
}
export interface MenuItemGroupProps {
    item: MenuItemType;
    mode?: MenuMode;
    theme?: MenuTheme;
    level?: number;
    children?: ReactNode;
}
