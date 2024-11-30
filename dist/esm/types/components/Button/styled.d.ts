/// <reference types="react" />
declare const typeStyles: {
    default: import("styled-components").RuleSet<object>;
    primary: import("styled-components").RuleSet<object>;
    danger: import("styled-components").RuleSet<object>;
    success: import("styled-components").RuleSet<object>;
    warning: import("styled-components").RuleSet<object>;
};
declare const sizeStyles: {
    small: import("styled-components").RuleSet<object>;
    medium: import("styled-components").RuleSet<object>;
    large: import("styled-components").RuleSet<object>;
};
declare const shapeStyles: {
    square: import("styled-components").RuleSet<object>;
    round: import("styled-components").RuleSet<object>;
    circle: import("styled-components").RuleSet<object>;
};
type TypeStyles = typeof typeStyles;
type TypeStylesKey = keyof TypeStyles;
type SizeStyles = typeof sizeStyles;
type SizeStylesKey = keyof SizeStyles;
type ShapeStyles = typeof shapeStyles;
type ShapeStylesKey = keyof ShapeStyles;
export declare const StyledButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    type: TypeStylesKey;
    disabled?: boolean | undefined;
    color?: string | undefined;
    size: SizeStylesKey;
    shape: ShapeStylesKey;
}>> & string;
export {};
