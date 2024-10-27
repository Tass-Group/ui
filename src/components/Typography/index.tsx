import type React from "react";
import { type TypographyProps, type TitleProps, type TextProps, type ParagraphProps } from "./types";

const Title: React.FC<TitleProps> = ({ level = 1, children, className, style }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={className} style={style}>{children}</Tag>;
};

const Text: React.FC<TextProps> = ({ children, className, style, strong, italic, underline, delete: del, code, mark, keyboard }) => {
  let textElement = <span>{children}</span>;

  if (strong === true) {
    textElement = <strong>{textElement}</strong>;
  }
  if (italic === true) {
    textElement = <em>{textElement}</em>;
  }
  if (underline === true) {
    textElement = <u>{textElement}</u>;
  }
  if (del === true) {
    textElement = <del>{textElement}</del>;
  }
  if (code === true) {
    textElement = <code>{textElement}</code>;
  }
  if (mark === true) {
    textElement = <mark>{textElement}</mark>;
  }
  if (keyboard === true) {
    textElement = <kbd>{textElement}</kbd>;
  }

  return <span className={className} style={style}>{textElement}</span>;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, className, style, blockquote }) => {
  const paragraphElement = <p className={className} style={style}>{children}</p>;

  return (blockquote === true) ? <blockquote>{paragraphElement}</blockquote> : paragraphElement;
};

const Typography: React.FC<TypographyProps> & { Title: React.FC<TitleProps> } & { Text: React.FC<TextProps> } & { Paragraph: React.FC<ParagraphProps> } = ({ children, className, style, ellipsis, copyable, editable, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        textOverflow: (ellipsis === true) ? "ellipsis" : undefined,
        whiteSpace: (ellipsis === true) ? "nowrap" : undefined,
        overflow: (ellipsis === true) ? "hidden" : undefined,
        cursor: (copyable === true) || (editable === true) ? "pointer" : undefined
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

Typography.Title = Title;
Typography.Text = Text;
Typography.Paragraph = Paragraph;

export default Typography;
