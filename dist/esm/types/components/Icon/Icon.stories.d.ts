/// <reference types="react" />
declare const _default: {
    title: string;
    component: import("react").FC<import("./types").IconProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        name: {
            control: {
                type: string;
            };
            options: string[];
            description: string;
        };
        size: {
            control: {
                type: string;
                min: number;
                max: number;
                step: number;
            };
            defaultValue: number;
            description: string;
        };
        color: {
            control: {
                type: string;
            };
            defaultValue: string;
            description: string;
        };
        onClick: {
            action: string;
        };
    };
};
export default _default;
export declare const DefaultIcon: {
    args: {
        name: string;
        size: number;
        color: string;
    };
};
export declare const LargeIcon: {
    args: {
        name: string;
        size: number;
    };
};
export declare const ColoredIcon: {
    args: {
        name: string;
        size: number;
        color: string;
    };
};
export declare const AllIcons: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        controls: {
            disable: boolean;
        };
        docs: {
            source: {
                code: null;
            };
        };
    };
};
