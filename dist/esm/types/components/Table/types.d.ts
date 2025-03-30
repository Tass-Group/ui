import type { ReactNode } from "react";
export interface ColumnType<T> {
    title: ReactNode;
    dataIndex: keyof T;
    key?: string;
    align?: "left" | "center" | "right";
    ellipsis?: boolean;
    sorter?: ((a: T, b: T) => number) | boolean;
    onSort?: (order: "ascend" | "descend" | null) => void;
    render?: (value: T[keyof T], record: T, index: number) => ReactNode;
}
export interface TableProps<T extends Record<string, unknown>> {
    columns: Array<ColumnType<T>>;
    dataSource: T[];
    rowKey?: keyof T | ((record: T) => string | number);
    bordered?: boolean;
    size?: "small" | "middle" | "large";
    tableLayout?: "auto" | "fixed";
    scroll?: {
        x?: number | string;
        y?: number | string;
    };
    pagination?: boolean | {
        current: number;
        pageSize: number;
        total: number;
        onChange: (page: number) => void;
        position?: "left" | "center" | "right";
    };
    loading?: boolean;
    rowSelection?: {
        selectedRowKeys?: Array<string | number>;
        onChange?: (selectedRowKeys: Array<string | number>, selectedRows: T[]) => void;
        getCheckboxProps?: (record: T) => {
            disabled?: boolean;
            indeterminate?: boolean;
        };
    };
    onRow?: (record: T, index: number) => {
        onClick?: React.MouseEventHandler;
        onDoubleClick?: React.MouseEventHandler;
        onContextMenu?: React.MouseEventHandler;
        onMouseEnter?: React.MouseEventHandler;
        onMouseLeave?: React.MouseEventHandler;
    };
    className?: string;
    style?: React.CSSProperties;
}
