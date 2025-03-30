import styled from "styled-components";

export const TableWrapper = styled.div<{
  $size?: "small" | "middle" | "large"
  $scroll?: { x?: number | string, y?: number | string }
  $bordered?: boolean
}>`
  position: relative;
  width: 100%;

  ${({ $size }) => {
    switch ($size) {
      case "small":
        return "font-size: 12px;";
      case "large":
        return "font-size: 16px;";
      default:
        return "font-size: 14px;";
    }
  }}

  ${({ $scroll }) =>
    $scroll?.y !== undefined &&
    `
    max-height: ${typeof $scroll.y === "number" ? `${$scroll.y}px` : $scroll.y};
    overflow-y: auto;
  `}

  ${({ $scroll }) =>
    $scroll?.x !== undefined &&
    `
    min-width: ${typeof $scroll.x === "number" ? `${$scroll.x}px` : $scroll.x};
    overflow-x: auto;
  `}

  ${({ $bordered }) =>
    $bordered === true &&
    `
    &.table-bordered {
      border: 1px solid #f0f0f0;
      border-radius: 2px;
    }
  `}
`;

export const TableContent = styled.table<{
  $bordered: boolean
  $tableLayout?: "auto" | "fixed"
}>`
  width: 100%;
  border-collapse: collapse;
  table-layout: ${props => props.$tableLayout ?? "fixed"};
`;

export const TableHeader = styled.thead<{ $bordered: boolean }>`
  background: #fafafa;
  tr:first-child th {
    background: #fafafa;
    font-weight: 500;
    text-align: left;
    color: rgba(0, 0, 0, 0.85);
    border-bottom: 1px solid #f0f0f0;
    padding: ${props => props.$bordered ? "16px" : "12px 8px"};
    transition: background 0.3s ease;
  }
`;

export const TableBody = styled.tbody<{ $bordered: boolean }>`
  tr {
    &:hover {
      td {
        background: #fafafa;
      }
    }
  }
`;

export const TableRow = styled.tr<{
  $hoverable?: boolean
  $selected?: boolean
}>`
  &:hover {
    td {
      background: ${props => (props.$hoverable ?? false) ? "#fafafa" : "transparent"};
    }
  }
  td {
    background: ${props => (props.$selected ?? false) ? "#e6f7ff" : "transparent"};
  }
`;

export const TableCell = styled.td<{
  $align?: "left" | "right" | "center"
  $ellipsis?: boolean
}>`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: ${props => props.$align ?? "left"};
  box-sizing: border-box;
  vertical-align: middle;
  ${props => (props.$ellipsis ?? false) && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
`;

export const TableHeaderCell = styled.th<{
  $align?: "left" | "right" | "center"
  $ellipsis?: boolean
  $sortable?: boolean
  $sorted?: boolean
}>`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: ${props => props.$align ?? "left"};
  cursor: ${props => (props.$sortable ?? false) ? "pointer" : "default"};
  ${props => (props.$ellipsis ?? false) && `
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}
  ${props => (props.$sorted ?? false) && `
    color: #1890ff;
  `}
`;

export const TableFooter = styled.tfoot<{ $bordered: boolean }>`
  background: #fafafa;
  tr td {
    padding: 16px 8px;
    border-top: 1px solid #f0f0f0;
  }
`;

export const PaginationWrapper = styled.div<{ $position?: "left" | "center" | "right" }>`
  display: flex;
  justify-content: ${props => {
    switch (props.$position) {
      case "left":
        return "flex-start";
      case "right":
        return "flex-end";
      case "center":
      default:
        return "center";
    }
  }};
  padding: 16px 8px;
`;

export const LoadingWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  .loading-content {
    opacity: 1;
  }
`;

export const SelectionCell = styled.td`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  box-sizing: border-box;
  vertical-align: middle;
`;

export const SelectionHeaderCell = styled.th`
  padding: 12px 8px;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
  width: 48px;
  min-width: 48px;
  max-width: 48px;
  box-sizing: border-box;
  vertical-align: middle;
  background: #fafafa;
`;
