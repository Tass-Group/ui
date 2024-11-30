/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./types").ButtonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: {
                summary: string;
            };
        };
        onClick: {
            description: string;
            action: string;
        };
        type: {
            description: string;
            control: string;
            options: string[];
            defaultValue: {
                summary: string;
            };
        };
        icon: {
            description: string;
            control: {
                disable: boolean;
            };
        };
        color: {
            description: string;
            control: {
                type: string;
            };
        };
        size: {
            description: string;
            control: string;
            options: string[];
            defaultValue: {
                summary: string;
            };
        };
        shape: {
            description: string;
            control: string;
            options: string[];
            defaultValue: {
                summary: string;
            };
        };
        disabled: {
            description: string;
            control: {
                type: string;
            };
            defaultValue: {
                summary: boolean;
            };
        };
    };
};
export default _default;
export declare const DefaultButton: {
    args: {
        title: string;
        type: string;
        size: string;
        disabled: boolean;
        shape: string;
    };
};
