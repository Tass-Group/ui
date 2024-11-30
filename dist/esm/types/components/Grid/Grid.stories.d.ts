declare const _default: {
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        gutter: {
            description: string;
            control: {
                disable: boolean;
            };
            defaultValue: {
                summary: number;
            };
        };
        span: {
            description: string;
            control: {
                disable: boolean;
            };
            defaultValue: {
                summary: number;
            };
        };
        offset: {
            description: string;
            control: {
                disable: boolean;
            };
            defaultValue: {
                summary: number;
            };
        };
    };
};
export default _default;
export declare const DefaultGrid: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const GridWithGutterNoWrap: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const GridWithOffset: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
