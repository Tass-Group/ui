/// <reference types="react" />
export interface CardProps {
    title?: React.ReactNode;
    extra?: React.ReactNode;
    bordered?: boolean;
    cover?: React.ReactNode;
    actions?: React.ReactNode[];
    loading?: boolean;
    hoverable?: boolean;
    size?: "default" | "small";
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface CardMetaProps {
    avatar?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
}
export interface CardGridProps {
    hoverable?: boolean;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
