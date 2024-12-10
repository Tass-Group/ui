import type React from "react";
import type { InputProps, InputGroupProps, TextAreaProps } from "./types";
export declare const Input: React.FC<InputProps>;
export declare const Group: React.FC<InputGroupProps>;
export declare const TextAreaComponent: React.FC<TextAreaProps>;
declare const InputComponent: React.FC<InputProps> & {
    Group: typeof Group;
    TextArea: typeof TextAreaComponent;
};
export default InputComponent;
