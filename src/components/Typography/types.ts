export interface BaseProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  ellipsis?: boolean

}

export interface TitleProps extends BaseProps {
  level?: 1 | 2 | 3 | 4 | 5
  width?: string | undefined
}

export interface TypographyProps extends Omit<BaseProps, "ellipsis"> {
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
  width?: string | undefined
}

export interface ParagraphProps extends BaseProps {
  blockquote?: boolean
  width?: string | undefined
}
