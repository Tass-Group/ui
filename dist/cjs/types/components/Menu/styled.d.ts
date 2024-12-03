/// <reference types="react" />
import { type MenuItemProps } from "./types";
export declare const MenuContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLUListElement>, HTMLUListElement>, {
    mode?: "horizontal" | "vertical" | undefined;
    menuTheme?: "dark" | "light" | undefined;
}>> & string;
export declare const MenuItem: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, MenuItemProps & {
    menuTheme?: "dark" | "light" | undefined;
}>> & string;
export declare const SubMenuContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    isOpen?: boolean | undefined;
}>> & string;
export declare const SubMenuContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
