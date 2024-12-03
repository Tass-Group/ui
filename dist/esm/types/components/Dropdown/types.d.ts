/// <reference types="react" />
export interface MenuItemType {
    key: string;
    label: React.ReactNode;
    icon?: React.ReactNode;
    disabled?: boolean;
    $isDanger?: boolean;
    children?: MenuItemType[];
    onClick?: () => void;
}
export interface DropdownProps {
    items: MenuItemType[];
    trigger?: "hover" | "click";
    placement?: "top" | "bottom" | "left" | "right";
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
