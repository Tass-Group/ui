/// <reference types="react" />
export interface DividerProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
    color?: string;
    text?: string;
    position?: "left" | "center" | "right";
    style?: React.CSSProperties;
    variant?: "solid" | "dashed" | "dotted";
}
