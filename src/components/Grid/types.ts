export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  gutter?: number // Gutter between columns, default is 16px
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  span?: number // Number of columns the Col should span, max is 24
  gutter?: number // Gutter between columns, inherited from Row
  offset?: number // Number of columns to offset the Col
}
