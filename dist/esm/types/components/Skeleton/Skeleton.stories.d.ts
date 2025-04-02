/// <reference types="react" />
import type { StoryObj } from "@storybook/react";
declare const meta: {
    title: string;
    component: import("react").FC<import("./types").SkeletonProps>;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Basic: Story;
export declare const Complex: Story;
export declare const ButtonAndInput: Story;
export declare const AvatarShapes: Story;
export declare const AvatarSizes: Story;
export declare const CustomParagraphWidths: Story;
export declare const Round: Story;
export declare const LoadingState: Story;
export declare const ListLoading: Story;
