import type React from "react";
import type { BadgeProps, RibbonProps } from "./types";
declare const Ribbon: React.FC<RibbonProps>;
declare const BadgeComponent: React.FC<BadgeProps> & {
    Ribbon: typeof Ribbon;
};
export default BadgeComponent;
