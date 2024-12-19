import type React from "react";
import type { RadioProps, RadioGroupProps } from "./types";
declare const Group: React.FC<RadioGroupProps>;
declare const RadioComponent: React.FC<RadioProps> & {
    Group: typeof Group;
};
export default RadioComponent;
