import type React from "react";
import { PaginationContainer, PageButton, Ellipsis } from "./styled";
import Icon from "../Icon";
import { type PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({ current, total, pageSize, onChange, position = "center" }) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number): void => {
    if (page >= 1 && page <= totalPages) {
      onChange(page);
    }
  };

  const renderPageNumbers = (): React.ReactNode[] => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= current - 2 && i <= current + 2)) {
        pages.push(
          <PageButton
            key={i}
            $active={current === i}
            onClick={() => { handlePageChange(i); }}
          >
            {i}
          </PageButton>
        );
      } else if (i === current - 3 || i === current + 3) {
        pages.push(<Ellipsis key={`ellipsis-${i}`}>...</Ellipsis>);
      }
    }
    return pages;
  };

  return (
    <PaginationContainer $position={position}>
      <PageButton onClick={() => { handlePageChange(current - 1); }} disabled={current <= 1}>
        <Icon name="chevronleft" size={12} />
      </PageButton>
      {renderPageNumbers()}
      <PageButton onClick={() => { handlePageChange(current + 1); }} disabled={current >= totalPages}>
        <Icon name="chevronright" size={12} />
      </PageButton>
    </PaginationContainer>
  );
};

export default Pagination;
