import type { StoryObj } from "@storybook/react";
import type { ModalComponent } from "./types";
declare const meta: {
    title: string;
    component: ModalComponent;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<ModalComponent>;
export declare const Basic: Story;
export declare const WithFooter: Story;
export declare const Centered: Story;
export declare const CustomWidth: Story;
export declare const NoMask: Story;
export declare const NoCloseButton: Story;
