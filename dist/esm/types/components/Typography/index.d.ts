import type React from "react";
import { type TypographyProps, type TitleProps, type TextProps, type ParagraphProps } from "./types";
declare const Typography: React.FC<TypographyProps> & {
    Title: React.FC<TitleProps>;
} & {
    Text: React.FC<TextProps>;
} & {
    Paragraph: React.FC<ParagraphProps>;
};
export default Typography;
