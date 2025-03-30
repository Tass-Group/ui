/// <reference types="react" />
export declare const TableWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $size?: "small" | "large" | "middle" | undefined;
    $scroll?: {
        x?: string | number | undefined;
        y?: string | number | undefined;
    } | undefined;
    $bordered?: boolean | undefined;
}>> & string;
export declare const TableContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, {
    $bordered: boolean;
    $tableLayout?: "auto" | "fixed" | undefined;
}>> & string;
export declare const TableHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $bordered: boolean;
}>> & string;
export declare const TableBody: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $bordered: boolean;
}>> & string;
export declare const TableRow: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, {
    $hoverable?: boolean | undefined;
    $selected?: boolean | undefined;
}>> & string;
export declare const TableCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, {
    $align?: "center" | "left" | "right" | undefined;
    $ellipsis?: boolean | undefined;
}>> & string;
export declare const TableHeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, {
    $align?: "center" | "left" | "right" | undefined;
    $ellipsis?: boolean | undefined;
    $sortable?: boolean | undefined;
    $sorted?: boolean | undefined;
}>> & string;
export declare const TableFooter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, {
    $bordered: boolean;
}>> & string;
export declare const PaginationWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    $position?: "center" | "left" | "right" | undefined;
}>> & string;
export declare const LoadingWrapper: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const SelectionCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, never>> & string;
export declare const SelectionHeaderCell: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, never>> & string;
