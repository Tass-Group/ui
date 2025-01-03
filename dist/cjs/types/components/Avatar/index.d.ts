import React from "react";
import type { AvatarProps, AvatarGroupProps } from "./types";
declare const Group: React.FC<AvatarGroupProps>;
declare const AvatarComponent: React.FC<AvatarProps> & {
    Group: typeof Group;
};
export default AvatarComponent;
