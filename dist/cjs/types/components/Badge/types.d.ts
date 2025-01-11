/// <reference types="react" />
export interface BadgeProps {
    count?: React.ReactNode;
    showZero?: boolean;
    overflowCount?: number;
    dot?: boolean;
    status?: "success" | "processing" | "default" | "error" | "warning";
    color?: string;
    text?: React.ReactNode;
    offset?: [number, number];
    size?: "default" | "small";
    title?: string;
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface RibbonProps {
    text?: React.ReactNode;
    color?: string;
    placement?: "start" | "end";
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
