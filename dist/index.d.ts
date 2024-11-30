/// <reference types="react" />
import React$1 from 'react';

interface ButtonProps {
    title?: string;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
    type?: "default" | "danger" | "success" | "warning" | "primary";
    icon?: React.ReactNode;
    color?: string;
    size?: "small" | "medium" | "large";
    shape?: "circle" | "round" | "square";
    style?: React.CSSProperties;
}

declare const Button: React$1.FC<ButtonProps>;

interface BaseProps {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    ellipsis?: boolean;
}
interface TitleProps extends BaseProps {
    level?: 1 | 2 | 3 | 4 | 5;
    width?: string | undefined;
}
interface TypographyProps extends Omit<BaseProps, "ellipsis"> {
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
interface TextProps extends BaseProps {
    strong?: boolean;
    italic?: boolean;
    underline?: boolean;
    delete?: boolean;
    code?: boolean;
    mark?: boolean;
    keyboard?: boolean;
    width?: string | undefined;
}
interface ParagraphProps extends BaseProps {
    blockquote?: boolean;
    width?: string | undefined;
}

declare const Typography: React$1.FC<TypographyProps> & {
    Title: React$1.FC<TitleProps>;
} & {
    Text: React$1.FC<TextProps>;
} & {
    Paragraph: React$1.FC<ParagraphProps>;
};

interface IconProps {
    name: string;
    size?: number;
    color?: string;
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

declare const Icon: React$1.FC<IconProps>;

interface DividerProps {
    className?: string;
    orientation?: "horizontal" | "vertical";
    color?: string;
    text?: string;
    position?: "left" | "center" | "right";
    style?: React.CSSProperties;
    variant?: "solid" | "dashed" | "dotted";
}

declare const Divider: React$1.FC<DividerProps>;

export { Button, Divider, Icon, Typography };
