/// <reference types="react" />
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
    gutter?: number;
}
export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
    span?: number;
    gutter?: number;
    offset?: number;
}
