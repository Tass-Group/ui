/// <reference types="react" />
import { type ParagraphProps, type TextProps, type TitleProps } from "./types";
declare const _default: {
    title: string;
    component: import("react").FC<import("./types").TypographyProps> & {
        Title: import("react").FC<TitleProps>;
    } & {
        Text: import("react").FC<TextProps>;
    } & {
        Paragraph: import("react").FC<ParagraphProps>;
    };
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        level: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: number;
                };
            };
        };
        strong: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        italic: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        underline: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        delete: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        code: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        mark: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        keyboard: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        blockquote: {
            description: string;
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
    };
};
export default _default;
export declare const DefaultTypography: {
    render: () => import("react/jsx-runtime").JSX.Element;
    parameters: {
        docs: {
            source: {
                code: string;
            };
        };
    };
};
export declare const TypographyTitle: {
    argTypes: {
        level: {
            description: string;
            control: {
                type: string;
                min: number;
                max: number;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: number;
                };
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
        ellipsis: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        width: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
    };
    render: (args: TitleProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        level: number;
        children: string;
        ellipsis: boolean;
        width: string;
    };
};
export declare const TypographyText: {
    argTypes: {
        strong: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        italic: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        underline: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        delete: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        code: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        mark: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        keyboard: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
        ellipsis: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        width: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
    };
    render: (args: TextProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        strong: boolean;
        italic: boolean;
        underline: boolean;
        delete: boolean;
        code: boolean;
        mark: boolean;
        keyboard: boolean;
        children: string;
        ellipsis: boolean;
        width: string;
    };
};
export declare const TypographyParagraph: {
    argTypes: {
        blockquote: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
        ellipsis: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
                defaultValue: {
                    summary: boolean;
                };
            };
        };
        width: {
            description: string;
            control: {
                type: string;
            };
            table: {
                category: string;
            };
        };
    };
    render: (args: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        blockquote: boolean;
        children: string;
        ellipsis: boolean;
        width: string;
    };
};
