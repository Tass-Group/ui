import type { Meta, StoryObj } from "@storybook/react";
import Table from ".";
interface DataType {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
    status: "active" | "inactive";
    lastLogin: string;
}
declare const meta: Meta<typeof Table<DataType>>;
export default meta;
type Story = StoryObj<typeof Table<DataType>>;
export declare const Basic: Story;
export declare const Selection: Story;
export declare const Pagination: Story;
