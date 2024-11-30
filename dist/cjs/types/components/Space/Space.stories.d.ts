/// <reference types="react" />
import { type SpaceProps } from "./types";
declare const _default: {
    title: string;
    component: import("react").FC<SpaceProps>;
    tags: string[];
};
export default _default;
export declare const DefaultSpace: {
    render: (args: SpaceProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        direction: string;
    };
};
export declare const VerticalSpace: {
    render: (args: SpaceProps) => import("react/jsx-runtime").JSX.Element;
    args: {
        direction: string;
    };
};
