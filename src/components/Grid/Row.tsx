import React from "react";
import { type RowProps } from "./types";
import { StyledRow } from "./styledRow";

const Row: React.FC<RowProps> = ({ children, gutter = 0, ...rest }) => {
  return (
    <StyledRow gutter={gutter} {...rest}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { gutter });
        }
        return child;
      })}
    </StyledRow>
  );
};

export default Row;
