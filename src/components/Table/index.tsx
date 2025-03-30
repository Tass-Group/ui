import type React from "react";
import { useState, useMemo } from "react";
import Checkbox from "../Checkbox";
import Pagination from "../Pagination";
import {
  TableWrapper,
  TableContent,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  TableHeaderCell,
  TableFooter,
  LoadingWrapper,
  SelectionCell,
  SelectionHeaderCell,
  PaginationWrapper
} from "./styled";
import type { TableProps } from "./types";

const Table = <T extends Record<string, any>>({
  columns,
  dataSource,
  rowKey,
  bordered = false,
  size = "middle",
  tableLayout,
  scroll,
  pagination,
  loading,
  rowSelection,
  onRow,
  className,
  style
}: TableProps<T>): JSX.Element => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>(
    rowSelection?.selectedRowKeys ?? []
  );
  const [sortState, setSortState] = useState<Record<string, "ascend" | "descend" | null>>({});

  const getRowKey = (record: T, index: number): string | number => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    if (rowKey !== undefined) {
      return record[rowKey];
    }
    if ("key" in record && record.key !== undefined) {
      return record.key;
    }
    return index;
  };

  const handleSort = (column: typeof columns[0], order: "ascend" | "descend" | null): void => {
    setSortState(prev => ({
      ...prev,
      [column.key ?? String(column.dataIndex)]: order
    }));
    column.onSort?.(order);
  };

  const handleSelectAll = (checked: boolean): void => {
    const keys = dataSource.map((record, index) => getRowKey(record, index));
    setSelectedRowKeys(checked ? keys : []);
    rowSelection?.onChange?.(checked ? keys : [], checked ? dataSource : []);
  };

  const handleSelect = (record: T, checked: boolean): void => {
    const key = getRowKey(record, dataSource.indexOf(record));
    const newSelectedRowKeys = checked
      ? [...selectedRowKeys, key]
      : selectedRowKeys.filter(k => k !== key);

    setSelectedRowKeys(newSelectedRowKeys);

    const selectedRows = dataSource.filter(item => {
      const itemKey = getRowKey(item, dataSource.indexOf(item));
      return newSelectedRowKeys.includes(itemKey);
    });

    rowSelection?.onChange?.(newSelectedRowKeys, selectedRows);
  };

  const isSelected = (record: T): boolean => {
    const key = getRowKey(record, dataSource.indexOf(record));
    return selectedRowKeys.includes(key);
  };

  const renderSelectionCell = (record: T, isHeader = false): JSX.Element => {
    if (isHeader) {
      const allSelected = selectedRowKeys.length === dataSource.length;
      const indeterminate = selectedRowKeys.length > 0 && selectedRowKeys.length < dataSource.length;
      return (
        <SelectionHeaderCell>
          <Checkbox
            checked={allSelected}
            indeterminate={indeterminate}
            onChange={handleSelectAll}
          />
        </SelectionHeaderCell>
      );
    }

    const key = getRowKey(record, dataSource.indexOf(record));
    const checkboxProps = rowSelection?.getCheckboxProps?.(record);
    return (
      <SelectionCell>
        <Checkbox
          checked={selectedRowKeys.includes(key)}
          disabled={checkboxProps?.disabled}
          indeterminate={checkboxProps?.indeterminate}
          onChange={(checked) => { handleSelect(record, checked); }}
        />
      </SelectionCell>
    );
  };

  const renderCell = (column: typeof columns[0], record: T, index: number): JSX.Element => {
    const value = record[column.dataIndex];
    const content = (column.render != null) ? column.render(value, record, index) : value;
    const key = column.key ?? String(column.dataIndex);

    return (
      <TableCell
        key={key}
        $align={column.align}
        $ellipsis={column.ellipsis}
      >
        {content}
      </TableCell>
    );
  };

  const renderHeaderCell = (column: typeof columns[0]): JSX.Element => {
    const sortOrder = sortState[column.key ?? String(column.dataIndex)];
    const isSortable = typeof column.sorter === "function" || column.sorter === true;
    const key = column.key ?? String(column.dataIndex);

    return (
      <TableHeaderCell
        key={key}
        $align={column.align}
        $ellipsis={column.ellipsis}
        $sortable={isSortable}
        $sorted={sortOrder !== undefined}
        onClick={() => {
          if (isSortable) {
            const nextOrder = sortOrder === "ascend" ? "descend" : sortOrder === "descend" ? null : "ascend";
            handleSort(column, nextOrder);
          }
        }}
      >
        {column.title}
        {isSortable && (
          <span style={{ marginLeft: 4 }}>
            {sortOrder === "ascend" ? "↑" : sortOrder === "descend" ? "↓" : "↕"}
          </span>
        )}
      </TableHeaderCell>
    );
  };

  const sortedData = useMemo(() => {
    const sortedColumn = columns.find(col => sortState[col.key ?? String(col.dataIndex)] !== undefined);
    if (sortedColumn === undefined || typeof sortedColumn.sorter !== "function") {
      return dataSource;
    }

    return [...dataSource].sort((a, b) => {
      const order = sortState[sortedColumn.key ?? String(sortedColumn.dataIndex)];
      if (order === undefined) return 0;
      const sorter = sortedColumn.sorter as (a: T, b: T) => number;
      const result = sorter(a, b);
      return order === "ascend" ? result : -result;
    });
  }, [dataSource, columns, sortState]);

  const paginatedData = useMemo(() => {
    if (pagination === undefined || typeof pagination === "boolean") {
      return sortedData;
    }

    const { current = 1, pageSize = 10 } = pagination;
    const start = (current - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, pagination]);

  const rowProps = (record: T, index: number): Record<string, React.MouseEventHandler> => {
    const props = onRow?.(record, index);
    return props ?? {};
  };

  const renderTableContent = (): JSX.Element => {
    const emptyRecord: Record<string, unknown> = {};
    const content: JSX.Element = (
      <TableContent $bordered={bordered} $tableLayout={tableLayout}>
        <TableHeader $bordered={bordered}>
          <TableRow>
            {rowSelection !== undefined && renderSelectionCell(emptyRecord as T, true)}
            {columns.map(renderHeaderCell)}
          </TableRow>
        </TableHeader>
        <TableBody $bordered={bordered}>
          {paginatedData.map((record, index) => {
            const props = rowProps(record, index);
            const key = getRowKey(record, index);
            return (
              <TableRow
                key={key}
                $hoverable={onRow !== undefined}
                $selected={isSelected(record)}
                {...props}
              >
                {rowSelection !== undefined && renderSelectionCell(record)}
                {columns.map(column => renderCell(column, record, index))}
              </TableRow>
            );
          })}
        </TableBody>
        {pagination !== undefined && typeof pagination !== "boolean" && (
          <TableFooter $bordered={bordered}>
            <TableRow>
              <TableCell colSpan={rowSelection !== undefined ? columns.length + 1 : columns.length}>
                <PaginationWrapper $position={pagination.position}>
                  <Pagination
                    current={pagination.current ?? 1}
                    pageSize={pagination.pageSize ?? 10}
                    total={pagination.total ?? dataSource.length}
                    onChange={(page: number) => {
                      if (pagination.onChange != null) {
                        pagination.onChange(page);
                      }
                    }}
                    position={pagination.position}
                  />
                </PaginationWrapper>
              </TableCell>
            </TableRow>
          </TableFooter>
        )}
      </TableContent>
    );
    return content;
  };

  return (
    <TableWrapper
      className={`${className ?? ""} ${bordered ? "table-bordered" : ""}`}
      style={style}
      $size={size}
      $scroll={scroll}
      $bordered={bordered}
    >
      {loading === true && (
        <LoadingWrapper className="loading-wrapper">
          <div className="loading-content" role="alert">
            Loading...
          </div>
        </LoadingWrapper>
      )}
      {renderTableContent()}
      {pagination !== undefined && pagination !== false && (
        <PaginationWrapper $position={typeof pagination === "object" ? pagination.position : undefined}>
          <Pagination
            current={typeof pagination === "object" ? pagination.current ?? 1 : 1}
            pageSize={typeof pagination === "object" ? pagination.pageSize ?? 10 : 10}
            total={dataSource.length}
            onChange={(page) => {
              if (typeof pagination === "object" && typeof pagination.onChange === "function") {
                pagination.onChange(page);
              }
            }}
            position={typeof pagination === "object" ? pagination.position : undefined}
          />
        </PaginationWrapper>
      )}
    </TableWrapper>
  );
};

export default Table;
