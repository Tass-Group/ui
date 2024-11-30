/// <reference types="react" />
import { type DividerProps } from "./types";
declare const _default: {
    title: string;
    component: import("react").FC<DividerProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        orientation: {
            control: {
                disable: boolean;
            };
            options: string[];
            description: string;
        };
        color: {
            control: {
                type: string;
            };
            description: string;
        };
        style: {
            control: {
                type: string;
            };
            description: string;
        };
        text: {
            control: {
                type: string;
            };
            description: string;
        };
        textPosition: {
            control: {
                disable: boolean;
            };
            options: string[];
            description: string;
        };
        variant: {
            control: {
                disable: boolean;
            };
            options: string[];
            description: string;
        };
    };
};
export default _default;
export declare const DefaultDivider: {
    render: (args: DividerProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        orientation: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const VerticalDivider: {
    render: (args: DividerProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        orientation: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const VariantDivider: {
    render: (args: DividerProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        orientation: string;
        color: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const TextDivider: {
    render: (args: DividerProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        orientation: string;
        color: string;
    };
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
