/// <reference types="react" />
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
    size?: "small" | "middle" | "large";
    disabled?: boolean;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    allowClear?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    status?: "error" | "warning";
    bordered?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface InputGroupProps {
    children: React.ReactNode;
    compact?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
export interface TextAreaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
    allowClear?: boolean;
    bordered?: boolean;
    maxLength?: number;
    showCount?: boolean;
    status?: "error" | "warning";
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
    style?: React.CSSProperties;
}
