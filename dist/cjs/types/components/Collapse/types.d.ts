/// <reference types="react" />
export interface CollapseProps {
    items?: CollapseItemType[];
    activeKey?: string[] | string;
    defaultActiveKey?: string[] | string;
    accordion?: boolean;
    bordered?: boolean;
    ghost?: boolean;
    expandIcon?: (panelProps: CollapseItemType) => React.ReactNode;
    expandIconPosition?: "start" | "end";
    size?: "large" | "middle" | "small";
    onChange?: (key: string | string[]) => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface CollapseItemType {
    key: string;
    label: React.ReactNode;
    children: React.ReactNode;
    collapsible?: "header" | "icon" | "disabled";
    showArrow?: boolean;
    extra?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
