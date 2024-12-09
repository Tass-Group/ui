import type React from "react";
import type { CheckboxProps, CheckboxGroupProps } from "./types";
export declare const Checkbox: React.FC<CheckboxProps>;
export declare const Group: React.FC<CheckboxGroupProps>;
declare const CheckboxComponent: React.FC<CheckboxProps> & {
    Group: React.FC<CheckboxGroupProps>;
};
export default CheckboxComponent;
