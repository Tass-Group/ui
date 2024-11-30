/// <reference types="react" />
export interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}
