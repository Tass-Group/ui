import type { ReactNode } from "react";
export type MessageType = "success" | "info" | "warning" | "error";
export interface MessageProps {
    type?: MessageType;
    content: ReactNode;
    duration?: number;
    onClose?: () => void;
    className?: string;
    style?: React.CSSProperties;
}
export interface MessageInstance {
    success: (content: ReactNode, duration?: number, onClose?: () => void) => void;
    info: (content: ReactNode, duration?: number, onClose?: () => void) => void;
    warning: (content: ReactNode, duration?: number, onClose?: () => void) => void;
    error: (content: ReactNode, duration?: number, onClose?: () => void) => void;
    destroy: () => void;
}
