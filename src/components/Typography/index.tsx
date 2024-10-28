import type React from "react";
import { type TypographyProps, type TitleProps, type TextProps, type ParagraphProps } from "./types";

const getEllipsisStyle = (ellipsis: boolean | undefined, width: string | undefined = "100%"): {
  textOverflow: "ellipsis" | undefined
  whiteSpace: "nowrap" | undefined
  overflow: "hidden" | undefined
  width: string | undefined
} => ({
  textOverflow: ellipsis === true ? "ellipsis" : undefined,
  whiteSpace: ellipsis === true ? "nowrap" : undefined,
  overflow: ellipsis === true ? "hidden" : undefined,
  width: ellipsis === true ? width : undefined
});

const Title: React.FC<TitleProps> = ({ level = 1, children, className, style, ellipsis, width }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={className} style={{ ...style, ...getEllipsisStyle(ellipsis, width) }}>{children}</Tag>;
};

const Text: React.FC<TextProps> = ({ children, className, style, strong, italic, underline, delete: del, code, mark, keyboard, ellipsis, width }) => {
  let textElement = <>{ children }</>;

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

  return <div className={className} style={{ ...style, ...getEllipsisStyle(ellipsis, width) }}>{textElement}</div>;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, className, style, blockquote, ellipsis, width }) => {
  const paragraphElement = <p className={className} style={{ ...style, ...getEllipsisStyle(ellipsis, width) }}>{children}</p>;

  return (blockquote === true) ? <blockquote data-testid="blockquote">{paragraphElement}</blockquote> : paragraphElement;
};

const Typography: React.FC<TypographyProps> & { Title: React.FC<TitleProps> } & { Text: React.FC<TextProps> } & { Paragraph: React.FC<ParagraphProps> } = ({ children, className, style, onClick }) => {
  return (
    <div
      className={className}
      style={style}
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
