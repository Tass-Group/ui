/// <reference types="react" />
import type { TableProps } from "./types";
declare const Table: <T extends Record<string, any>>({ columns, dataSource, rowKey, bordered, size, tableLayout, scroll, pagination, loading, rowSelection, onRow, className, style }: TableProps<T>) => JSX.Element;
export default Table;
