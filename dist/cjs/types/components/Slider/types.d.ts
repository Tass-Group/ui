/// <reference types="react" />
export type SliderMarks = Record<number, React.ReactNode | {
    label: React.ReactNode;
    style?: React.CSSProperties;
}>;
export interface SliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number | [number, number];
    value?: number | [number, number];
    disabled?: boolean;
    vertical?: boolean;
    marks?: SliderMarks;
    included?: boolean;
    range?: boolean;
    onChange?: (value: number | [number, number]) => void;
    onAfterChange?: (value: number | [number, number]) => void;
    className?: string;
    style?: React.CSSProperties;
    tooltipVisible?: boolean;
    tooltipPlacement?: "top" | "bottom" | "left" | "right";
}
export interface SliderHandleProps {
    value: number;
    min: number;
    max: number;
    disabled?: boolean;
    vertical?: boolean;
    dragging?: boolean;
    index: number;
    style?: React.CSSProperties;
    onMouseDown: (e: React.MouseEvent, index: number) => void;
    onTouchStart: (e: React.TouchEvent, index: number) => void;
}
