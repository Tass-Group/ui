export interface BaseProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

export interface TitleProps extends BaseProps {
  level?: 1 | 2 | 3 | 4 | 5
}

export interface TypographyProps extends BaseProps {
  ellipsis?: boolean
  copyable?: boolean
  editable?: boolean
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export interface TextProps extends BaseProps {
  strong?: boolean
  italic?: boolean
  underline?: boolean
  delete?: boolean
  code?: boolean
  mark?: boolean
  keyboard?: boolean
}

export interface ParagraphProps extends BaseProps {
  blockquote?: boolean
}
