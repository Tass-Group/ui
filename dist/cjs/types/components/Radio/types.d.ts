/// <reference types="react" />
export interface RadioProps {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
export interface RadioGroupProps {
    value?: any;
    defaultValue?: any;
    onChange?: (value: any) => void;
    disabled?: boolean;
    name?: string;
    options?: Array<RadioOptionType | string>;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    direction?: "horizontal" | "vertical";
}
export interface RadioOptionType {
    label: React.ReactNode;
    value: any;
    disabled?: boolean;
}
export interface RadioGroupContextProps {
    value?: any;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    name?: string;
}
